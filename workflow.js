import * as core from "@actions/core";
import * as github from "@actions/github";
import fetch from "node-fetch";
import Parser from "rss-parser";
import toDataURL from "buffer-to-data-url";
import { fileTypeFromBuffer } from "file-type";
import fs from "fs";
import { exit } from "process";
import loadMetaData from "./metaData.js";
import path from "path";

const parser = new Parser({
  customFields: {
    items: ["dc:creator", "creator"]
  }
});

const locale = core.getInput("locale");

const maxItems = parseAndValidate("max_posts_per_url", function (value) {
  return !(isNaN(value) || value < 0 || v === Infinity);
});

const showFeedData = parseAndValidate("show_feed_data", function (value) {
  return typeof value === "boolean";
});

const showLastUpdatedDate = parseAndValidate(
  "show_last_updated_date",
  function (value) {
    return typeof value === "boolean";
  }
);

const positionIndicator = parseAndValidate(
  "position_indicator",
  function (value) {
    return typeof value === "string";
  }
);

async function main() {
  let repoRawURL = `https://raw.githubusercontent.com/${
    github.context.repo.owner
  }/${github.context.repo.repo}/${github.context.ref.replace(
    /refs\/(?:tags|heads)\//,
    ""
  )}/`;
  if (!fs.existsSync("blog-post-list-output")) {
    fs.mkdirSync("blog-post-list-output");
  } else {
    fs.readdirSync("blog-post-list-output").forEach((file) => {
      fs.unlinkSync(`blog-post-list-output/${file}`);
    });
  }
  let feedURLS = core.getInput("feed_urls").split(",");

  let markdown = "";
  for (let url of feedURLS) {
    let feed = await load(url);
    let feedFolder = sanitizePath(feed.title);
    let rawURL = repoRawURL + feedFolder + "/";
    fs.mkdirSync(`blog-post-list-output/${feedFolder}`);
    for (let image of feed.images) {
      fs.writeFileSync(
        `blog-post-list-output/${feedFolder}/${image.imageFileName}`,
        image.image
      );
    }
    markdown += generateFeedMarkdown(feed, rawURL) + "\n\n";
  }
  for (let meta of metas) {
    markdown += `[![${meta.title}](${meta.imageURL})](${meta.url})\n`;
  }

  let readmeFile = fs
    .readdirSync(".")
    .find((file) => file.toLowerCase() === "readme.md");
  if (!readmeFile) {
    core.setFailed("No readme.md file found in the root directory");
    exit(1);
  }

  let readme = fs.readFileSync(readmeFile, "utf8");
  let regex = new RegExp(
    `(<!(-{2})\\s*${positionIndicator}:start\\s*\\2>)[\\s\\S]*(<!(-{2})\\s*${positionIndicator}:end\\s*\\4>)`
  );

  readme = readme.replace(regex, `$1\n${markdown}$2`);

  fs.writeFileSync(readmeFile, readme);
}

function generateSVG(meta, delay = 0) {
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 610 110" width="600" height="100" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <style>
      .title {
        font-size: 1.5em;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-bottom: 5px;
      }
      .description {
        font-size: 0.75em;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      .text {
        text-align: start;
        padding: 5px;
        height: calc(100% - 10px);
        margin-left: 100px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
        color: black;
      }
      .date {
        font-size: 0.5em;
        opacity: 0.5;
        text-align: end;
        position: absolute;
        bottom: 0;
        right: 10px;
        color: black;
      }
      .image {
        height: 100px;
        width: 100px;
        background-image: url("${meta.image}");
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 10px;
        background-position: center;
      }
      .main {
        transform: translate(610px, 0px);
        animation: slideIn 1s ease-out forwards;
        animation-delay: ${delay}s;
        fill: white;
      }
      @keyframes slideIn {
        to {
          transform: translate(0px, 0px);
        }
      }
    </style>
    <clipPath id="clip">
      <rect width="300" height="1.5em" />
    </clipPath>
  </defs>
  <g class="main">
    <rect class="content" width="600" height="100" stroke="rgba(0, 0, 0, 0.5)" x="5" y="5" rx="10" />
    <foreignObject width="600" height="100" x="5" y="5">
      <div xmlns="http://www.w3.org/1999/xhtml" style="border-radius: 5px; overflow: hidden; height: 100%;">
        <div class="image" />
        <div class="text">
          <div class="title">${meta.title}</div>
          <div class="description">${meta.description}</div>
          <div class="date">${formatDate(meta.date)}</div>
        </div>
      </div>
    </foreignObject>
  </g>
</svg>`;
  return svg;
}

async function load(url) {
  let feed = await loadFeed(url);
  feed.items.splice(maxItems);
  let delay = 0;
  let images = [];
  for (let post of feed.items) {
    core.info(`Loading data for post: ${post.title ?? post.link}`);
    let meta = await loadMetaData(post.link);
    meta = Object.assign(
      {
        url: post.link,
        title: post.title,
        description: post.contentSnippet,
        image: null,
        date: new Date(post.isoDate)
      },
      meta
    );
    meta.categories = post.categories || null; //todo: actually use the categories
    core.info("Generating post card...");
    meta.image = await loadImage(meta);
    let svg = generateSVG(meta, delay++ * 0.25);
    let fileName = sanitizePath(meta.title) + ".svg";
    images.push({
      image: svg,
      link: meta.url,
      title: meta.title,
      imageFileName: fileName
    });
  }

  return {
    images,
    title: feed.title,
    description: feed.description,
    url: feed.link,
    updated: new Date()
  };
}

//todo: use inputs
function generateFeedMarkdown(feed, rawURL) {
  let md = "";
  md += `##  ${feed.title}\n\n`;
  md += `${feed.description}\n\n`;
  md += `[Read more](${feed.url})\n\n`;
  md += `###  Last updated: ${formatDate(feed.updated)}\n\n`;
  md += `###  ${feed.images.length} posts\n\n`;
  for (let image of feed.images) {
    md += `[![${image.title}](${rawURL + image.imageFileName})](${
      image.link
    })\n\n`;
  }
  return md;
}

async function loadFeed(url) {
  core.info(`Loading feed data for: ${url}`);
  return await parser.parseURL(url);
}

async function loadImage(meta) {
  if (!meta.image) {
    core.warning(`No thumbnail found!`);
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
  } else {
    core.info(`Loading thumbnail...`);
    let res = await fetch(meta.image);
    let arrayBuf = await res.arrayBuffer();
    core.info("Converting thumbnail to data url...");
    let buf = Buffer.from(arrayBuf);
    let type = (await fileTypeFromBuffer(buf)).mime;
    return await toDataURL(type, buf);
  }
}

function sanitizePath(p, removeSpaces = true) {
  return path.normalize(
    removeSpaces
      ? p.replace(/[/\\?%*:|"<>,]/g, "_")
      : p.replace(/[/\\?%*:|"<>,\s]/g, "_")
  );
}

function escapeMarkdown(str) {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/\*/g, "\\*")
    .replace(/_/g, "\\_")
    .replace(/\[/g, "\\[")
    .replace(/\]/g, "\\]")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)")
    .replace(/\{/g, "\\{")
    .replace(/\}/g, "\\}")
    .replace(/\^/g, "\\^")
    .replace(/\+/g, "\\+")
    .replace(/\-/g, "\\-")
    .replace(/\|/g, "\\|")
    .replace(/\</g, "\\<")
    .replace(/\>/g, "\\>")
    .replace(/\!/g, "\\!")
    .replace(/\?/g, "\\?")
    .replace(/\$/g, "\\$")
    .replace(/\:/g, "\\:")
    .replace(/\;/g, "\\;")
    .replace(/\"/g, '\\"')
    .replace(/\'/g, "\\'");
}

function formatDate(date) {
  return new Intl.DateTimeFormat([locale, "en"], {
    dateStyle: "full",
    timeStyle: "long"
  }).format(date);
}

function parseAndValidate(input, validateFn) {
  let i = core.getInput(input);
  try {
    let parsed = JSON.parse(i);
    if (!validateFn(parsed)) {
      throw new Error("Invalid input");
    }
    return parsed;
  } catch (e) {
    core.setFailed(`Invalid input ${input}: ${e}`);
    exit(1);
  }
}

main();
