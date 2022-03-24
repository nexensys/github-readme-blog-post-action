const path = require("path");
module.exports = {
  mode: "production",
  target: "node",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: "raw-loader"
      }
    ]
  },
  stats: "minimal"
};
