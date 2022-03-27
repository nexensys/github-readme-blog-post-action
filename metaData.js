import fetch from "node-fetch";
import * as cheerio from "cheerio";
import * as core from "@actions/core";

/**
 *
 * @param {string} url
 */
export default async function loadMetaData(url) {
  try {
    let res = await fetch(url);
    core.debug("Got response from fetch");
    let html = await res.text();
    core.debug("Got html from response");
    let $ = cheerio.load(html);
    core.debug("Loaded html into cheerio");
    let elems = Object.entries(
      $("meta[property ^= 'og:']:not([property='og:type'])")
    )
      .filter(function ([key, value]) {
        return !isNaN(Number(key));
      })
      .map(function ([key, value]) {
        return value;
      });
    core.debug("Got elements from cheerio");
    let meta = Object.fromEntries(
      elems.map(function (el) {
        return [el.attribs.property.replace(/^og:/, ""), el.attribs.content];
      })
    );
    core.debug("Got meta from elements");
    return meta;
  } catch (e) {
    core.debug("Failed to load meta data with error: " + e);
    return {};
  }
}
