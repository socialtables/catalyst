var gutil = require("gulp-util");

module.exports = function webpackHandler (name, callback) {
  return function (err, stats) {
    if (err) {
      throw new gutil.PluginError(name, err);
    }
    gutil.log(name, stats.toString({
      hash: false,
      timings: false,
      assets: true,
      chunks: false,
      chunkModules: false,
      modules: false,
      children: false,
      colors: true
    }));
    callback();
  }
};