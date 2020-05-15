// entry -> output
const path = require("path");

module.exports = {
  entry: "./src/app.js", //entry point for ReactDOM
  output: {
    //output dir to server
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        //to parse jsx, using babel loader
        loader: "babel-loader",
        test: /\.js$/, //only files that meet this criteria,
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"), //to serve using webpack-dev-server
  },
};
