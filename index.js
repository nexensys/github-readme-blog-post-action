import core from "@actions/core";
import github from "@actions/github";
import loadMetaData from "./metaData.js";
import fetch from "node-fetch";
import Parser from "rss-parser";
import { fileTypeFromBuffer } from "file-type";
import bufferToDataUrl from "buffer-to-data-url";
const toDataURL = bufferToDataUrl.default;

const parser = new Parser({
  customFields: {
    items: ["dc:creator", "creator"]
  }
});
const maxItems = 5;

async function main() {
  let feed = await loadFeed("https://dev.to/feed/codewithsadee");
  feed.items.splice(maxItems);
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
  }
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
