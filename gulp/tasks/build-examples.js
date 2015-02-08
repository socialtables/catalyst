/* EXAMPLES */
var webpackHandler = require("../config/webpack-handler");
var webpackExamplesConfig = require("../config/webpack-examples.config");
var assign = require("react/lib/Object.assign");
var webpack = require("webpack");

module.exports = function (callback) {
  var config = assign(
    {},
    webpackExamplesConfig("basic-grid"),
    webpackExamplesConfig("geolocation"),
    webpackExamplesConfig("device-light"),
    {
      devtool: "source-map"
    }
  );

  webpack(config, webpackHandler("build-examples", callback));
}
