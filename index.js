import actions from "@actions/core";
import github from "@actions/github";
import loadMetaData from "./metaData.js";
import fetch from "node-fetch";

async function main() {
  let feed = await fetch("https://dev.to/feed/codewithsadee");
  let meta = await loadMetaData("https://dev.to/codewithsadee/how-to-build-audio-stream-app-landing-page-using-html-css-js-1960");
  console.log(meta);
}

main();