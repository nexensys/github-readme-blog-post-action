import fetch from "node-fetch";
import * as cheerio from "cheerio";

/**
 *
 * @param {string} url
 */
export default async function loadMetaData(url) {
  try {
    let res = await fetch(url);
    let html = await res.text();
    let $ = cheerio.load(html);
    let elems = Object.entries(
      $("meta[property ^= 'og:']:not([property='og:type'])")
    )
      .filter(function ([key, value]) {
        return !isNaN(Number(key));
      })
      .map(function ([key, value]) {
        return value;
      });
    return Object.fromEntries(
      elems.map(function (el) {
        return [el.attribs.property.replace(/^og:/, ""), el.attribs.content];
      })
    );
  } catch {
    return null;
  }
}
