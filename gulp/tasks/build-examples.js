/* EXAMPLES */
var webpackHandler = require("../config/webpack-handler");
var webpackExamplesConfig = require("../config/webpack-examples.config");
var assign = require("react/lib/Object.assign");
var webpack = require("webpack");



module.exports = function (callback) {
  var examples = [
    "basic-grid",
    "geolocation",
    "device-light"
  ];
  var done = 0;
  var buildExample = function() {
    done++;
    if (done >= examples.length) {
      callback();
    }
  }

  examples.forEach(function(example){
    var config = assign(
      {},
      webpackExamplesConfig(example),
      {devtool: "source-map"}
    );

    webpack(config, webpackHandler("build-"+example, buildExample));
  });
  
}
