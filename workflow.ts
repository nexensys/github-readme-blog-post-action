import * as core from "@actions/core";
import * as github from "@actions/github";
import fetch from "node-fetch";
import Parser, { Output } from "rss-parser";
import toDataURL from "buffer-to-data-url";
import { fileTypeFromBuffer, FileTypeResult } from "file-type";
import fs from "fs";
import { exit } from "process";
import loadMetaData from "./metaData.js";
import path, { parse } from "path";

import { FeedData, Img, MetaData } from "./types";

const parser = new Parser({
  customFields: {
    item: ["dc:creator", "creator"]
  }
});

/* --------------------------------- Options -------------------------------- */

const feedURLS = parseAndValidate<string>(
  "feed_urls",
  (value) => typeof value === "string"
);

const maxItems = parseAndValidate<number>(
  "max_posts_per_url",
  (value) => !(isNaN(value) || value < 0 || value === Infinity)
);

const positionIndicator = parseAndValidate<string>(
  "position_indicator",
  (value) => typeof value === "string"
);

const showFeedData = parseAndValidate<boolean>(
  "show_feed_data",
  (value) => typeof value === "boolean"
);

const showFeedTitle = parseAndValidate<boolean>(
  "show_feed_title",
  (value) => typeof value === "boolean"
);

const showFeedDescription = parseAndValidate<boolean>(
  "show_feed_description",
  (value) => typeof value === "boolean"
);

const showReadMore = parseAndValidate<boolean>(
  "show_read_more",
  (value) => typeof value === "boolean"
);

const showPostCount = parseAndValidate<boolean>(
  "show_post_count",
  (value) => typeof value === "boolean"
);

const showLastUpdatedDate = parseAndValidate<boolean>(
  "show_last_updated_date",
  (value) => typeof value === "boolean"
);

const showPostDate = parseAndValidate<boolean>(
  "show_post_date",
  (value) => typeof value === "boolean"
);

const locale = parseAndValidate<string>(
  "locale",
  (value) => typeof value === "string"
);

const timeZone = parseAndValidate<string>(
  "time_zone",
  (value) => typeof value === "string"
);

const outDir = parseAndValidate<string>(
  "output_dir",
  (value) => typeof value === "string"
);

if (/[/\\?%*:|"<>]/.test(outDir)) {
  core.setFailed(
    `Invalid output folder name "${outDir}". The name contains illegal characters.`
  );
  exit(1);
}

/* --------------------------------- Process -------------------------------- */

async function main() {
  let repoRawURL = `https://raw.githubusercontent.com/${
    github.context.repo.owner
  }/${github.context.repo.repo}/${github.context.ref.replace(
    /refs\/(?:tags|heads)\//,
    ""
  )}/`;
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
  } else {
    fs.readdirSync(outDir).forEach((file) => {
      fs.rmSync(`${outDir}/${file}`, { recursive: true });
    });
  }
  let feedList = feedURLS.split(",");

  let markdown = "";
  for (let url of feedList) {
    let feed = await load(url);
    let feedFolder = sanitizePath(feed.title);
    let rawURL = repoRawURL + `${outDir}/${feedFolder}/`;
    fs.mkdirSync(`${outDir}/${feedFolder}`);
    for (let image of feed.images) {
      fs.writeFileSync(
        `${outDir}/${feedFolder}/${image.imageFileName}`,
        image.image
      );
    }
    markdown += generateFeedMarkdown(feed, rawURL) + "\n\n";
  }

  let readmeFile = fs
    .readdirSync(".")
    .find((file) => file.toLowerCase() === "readme.md");
  if (!readmeFile) {
    core.setFailed("No README.md file found in the root directory");
    exit(1);
  }

  let readme = fs.readFileSync(readmeFile, "utf8");
  let regex = new RegExp(
    `(<!(-{2})\\s*${positionIndicator}:start\\s*\\2>)[\\s\\S]*(<!(-{2})\\s*${positionIndicator}:end\\s*\\4>)`
  );

  readme = readme.replace(regex, `$1\n${markdown}$3`);

  fs.writeFileSync(readmeFile, readme);
}

/* -------------------------------- Funtions -------------------------------- */

function generateSVG(data: Required<MetaData>) {
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 610 110" width="600" height="100" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <style>
      .title {
        font-size: 1.5em;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
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
        padding: 10px;
        height: calc(100% - 20px);
        margin-left: ${data.image ? "100px" : "0"};
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
        color: black;
      }
      ${
        showPostDate
          ? `     .date {
        font-size: 0.5em;
        opacity: 0.5;
        text-align: end;
        position: absolute;
        bottom: 0;
        right: 10px;
        color: black;
      }`
          : ""
      }
      ${
        data.image
          ? `.image {
        height: 100px;
        width: 100px;
        background-image: url("${data.image}");
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 10px;
        background-position: center;
      }`
          : ""
      }
      .main {
        fill: white;
      }
      .data {
        opacity: 0.75;
        text-align: start;
        position: absolute;
        bottom: 0;
        padding-bottom: 5px;
        left: ${data.image ? "110px" : "10px"};
        color: black;
        max-width: 400px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .author {
        opacity: 0.75;
        font-size: 0.5em;
      }
      .category {
        background-color: rgba(0, 0, 0, 0.25);
        border-radius: 0.25em;
        padding: 0.125em 0.25em;
        font-size: 0.75em;
        color: rgba(0, 0, 0, 0.4);
      }
    </style>
  </defs>
  <g class="main">
    <rect class="content" width="600" height="100" stroke="rgba(0, 0, 0, 0.5)" x="5" y="5" rx="10" />
    <foreignObject width="600" height="100" x="5" y="5">
      <div xmlns="http://www.w3.org/1999/xhtml" style="border-radius: 5px; overflow: hidden; height: 100%;">
        ${data.image ? `<div class="image" />\n` : ""}<div class="text">
          <div class="title">${escapeHTML(data.title)}</div>
          <div class="description">${escapeHTML(data.description)}</div>
          ${
            showPostDate
              ? `<div class="date">${escapeHTML(
                  data.date ? formatDate(data.date, false) : ""
                )}</div>`
              : ""
          }
          <div class="data">
            <span class="author">${escapeHTML(
              data.author
            )}</span> ${data.categories
    .map((c) => `<span class="category">${escapeHTML(c)}</span>`)
    .join(" ")}
          </div>
        </div>
      </div>
    </foreignObject>
  </g>
</svg>`;
  return svg;
}

async function load(url: string): Promise<FeedData> {
  let feed = await loadFeed(url);
  let items = feed.items.slice(0, maxItems);
  let images: Img[] = [];
  for (let post of items) {
    core.info(`Loading data for post: ${post.title ?? post.link}`);
    let meta = await loadMetaData(post.link as string);
    let data: Required<MetaData> = Object.assign(
      {
        url: post.link,
        title: post.title,
        description: post.contentSnippet || "",
        image: null,
        date: post.isoDate ? new Date(post.isoDate as string) : null,
        author: post.creator || "",
        categories: post.categories || []
      },
      meta
    ) as Required<MetaData>;
    core.info("Generating post card...");
    data.image = await loadImage(data);
    let svg = generateSVG(data);
    let fileName = sanitizePath(data.title) + ".svg";
    images.push({
      image: svg,
      link: data.url,
      title: data.title,
      imageFileName: fileName
    });
  }

  return {
    images,
    title: feed.title || "",
    description: feed.description || "",
    url: feed.link || "",
    updated: new Date(),
    postCount: feed.items.length
  };
}

function generateFeedMarkdown(feed: FeedData, rawURL: string): string {
  let md = "";
  if (showFeedData) {
    if (showFeedTitle) md += `## ${escapeMarkdown(feed.title.trim())}\n\n`;
    if (showFeedDescription) md += `${escapeMarkdown(feed.description)}\n\n`;
    if (showReadMore) md += `[Read more](${feed.url})\n`;
    if (showLastUpdatedDate)
      md += `> Last updated: ${formatDate(feed.updated)}\n\n`;
    if (showPostCount)
      md += `> Showing ${feed.images.length} of ${feed.postCount} posts.\n\n`;
  }
  for (let image of feed.images) {
    core.debug("Raw URL: " + rawURL);
    core.debug("Image File Name: " + image.imageFileName);
    md += `[![${image.title}](${rawURL + image.imageFileName})](${
      image.link
    })\n`;
  }
  return md;
}

async function loadFeed(url: string): Promise<Output<{}>> {
  core.info(`Loading feed data for: ${url}`);
  return await parser.parseURL(url);
}

async function loadImage(meta: Required<MetaData>): Promise<string | null> {
  if (!meta.image) {
    core.warning(`No thumbnail found!`);
    return null;
  } else {
    core.info(`Loading thumbnail...`);
    let res = await fetch(meta.image);
    let arrayBuf = await res.arrayBuffer();
    core.info("Converting thumbnail to data url...");
    let buf = Buffer.from(arrayBuf);
    let type = ((await fileTypeFromBuffer(buf)) as FileTypeResult).mime;
    return await toDataURL(type, buf);
  }
}

function sanitizePath(p: string) {
  return path.normalize(p.replace(/[/\\?%*:|"<>,#\s\?&]/g, "_"));
}

function escapeHTML(unsafe: string): string {
  return unsafe.replace(
    /[\u0000-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u00FF]/g,
    (c) => "&#" + ("000" + c.charCodeAt(0)).slice(-4) + ";"
  );
}

function escapeMarkdown(str: string): string {
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

function formatDate(date: Date, full: boolean = true): string {
  return new Intl.DateTimeFormat(
    [locale, "en"],
    full
      ? {
          dateStyle: "full",
          timeStyle: "medium",
          timeZone: timeZone
        }
      : {
          dateStyle: "short"
        }
  ).format(date);
}

function parseAndValidate<T>(
  input: string,
  validateFn: (value: T) => boolean
): T {
  let i = core.getInput(input);
  let parsed;
  try {
    parsed = JSON.parse(i);
  } catch {
    parsed = i;
  }
  try {
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
