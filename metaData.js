const fetch = require("node-fetch");
const cheerio = require("cheerio");
const core = require("@actions/core");

/**
 *
 * @param {string} url
 */
module.exports = async function loadMetaData(url) {
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
    let meta = Object.fromEntries(
      elems.map(function (el) {
        return [el.attribs.property.replace(/^og:/, ""), el.attribs.content];
      })
    );
    core.debug(JSON.stringify(meta, null, 2));
    return meta;
  } catch {
    return {};
  }
};
