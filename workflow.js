const core = require("@actions/core");
const github = require("@actions/github");
const loadMetaData = require("./metaData.js");
const fetch = require("node-fetch");
const Parser = require("rss-parser");
const fileTypeFromBuffer = require("file-type").fileTypeFromBuffer;
const toDataURL = require("buffer-to-data-url");
const fs = require("fs");
const { exit } = process;

const parser = new Parser({
  customFields: {
    items: ["dc:creator", "creator"]
  }
});
const maxItems = 5;

async function main() {
  let feed = await loadFeed("https://dev.to/feed/codewithsadee");
  feed.items.splice(maxItems);
  let delay = 0;
  let metas = [];
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
    meta.categories = post.categories || null;
    meta.image = await loadImage(meta);
    metas.push(meta);
    if (!fs.existsSync("blog-post-list-output")) {
      fs.mkdirSync("blog-post-list-output");
    }
    let svglight = generateSVG(meta, delay++ * 0.25, false);
    let fileNamelight =
      meta.title.replace(/[^a-zA-Z0-9\s]/g, "").replace(/\s/g, "_") +
      "-light.svg";
    let svgdark = generateSVG(meta, delay++ * 0.25, true);
    let fileNamedark =
      meta.title.replace(/[^a-zA-Z0-9\s]/g, "").replace(/\s/g, "_") +
      "-dark.svg";
    core.info(`Saving files: ${fileNamelight}, ${fileNamedark}`);
    fs.writeFileSync("./blog-post-list-output/" + fileNamelight, svglight);
    fs.writeFileSync("./blog-post-list-output/" + fileNamedark, svgdark);
    let repoRawURL = `https://raw.githubusercontent.com/${github.context.repo.owner}/${github.context.repo.repo}/master/blog-post-list-output/`;
    meta.imageDark = repoRawURL + fileNamedark;
    meta.imageLight = repoRawURL + fileNamelight;
    core.info(repoRawURL);
  }

  let markdown = "";
  for (let meta of metas) {
    markdown += `[![${meta.title}](${
      meta.imageLight + "#github-light-mode-only"
    })](${meta.link})\n`;
    markdown += `[![${meta.title}](${
      meta.imageDark + "#github-dark-mode-only"
    })](${meta.link})\n`;
  }

  let readmeFile = fs
    .readdirSync(".")
    .find((file) => file.toLowerCase() === "readme.md");
  if (!readmeFile) {
    core.error("No readme.md file found in the root directory");
    exit(1);
  }
  let readme = fs.readFileSync(readmeFile, "utf8");
  readme = readme.replace(
    /<!--\s*blog-post-list-start\s*-->[\s\S]*<!--\s*blog-post-list-end\s*-->/,
    markdown
  );
  //todo: actualy rewrite the file
  core.info(markdown);
}

function generateSVG(meta, delay = 0, dark = false) {
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
      .date {
        font-size: 0.5em;
        opacity: 0.25;
        text-align: end;
        position: absolute;
        bottom: 0;
        right: 10px;
      }
      .text {
        text-align: start;
        padding: 5px;
        height: calc(100% - 10px);
        margin-left: 100px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
        color: ${dark ? "#fff" : "#000"};
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
      }
      .main {
        transform: translate(610px, 0px);
        animation: slideIn 1s ease-out forwards;
        animation-delay: ${delay}s;
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
    <rect class="content" width="600" height="100" fill="transparent" stroke="rgba(0, 0, 0, 0.5)" x="5" y="5" rx="10" />
    <foreignObject width="600" height="100" x="5" y="5">
      <div xmlns="http://www.w3.org/1999/xhtml" style="border-radius: 5px; overflow: hidden; height: 100%;">
        <div class="image" />
        <div class="text">
          <div class="title">${meta.title}</div>
          <div class="description">${meta.description}</div>
          <div class="date">${meta.date.toLocaleDateString()}</div>
        </div>
      </div>
    </foreignObject>
  </g>
</svg>`;
  return svg;
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

main();
