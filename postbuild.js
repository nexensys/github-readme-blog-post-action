import fs from "fs";

//import file dist/index.js as text, append the text "var " to the beginning, and write it to the file dist/build.js
const text = fs.readFileSync("./dist/index.js", "utf8");
const text2 = "var " + text;
fs.writeFileSync("./dist/build.js", text2);
