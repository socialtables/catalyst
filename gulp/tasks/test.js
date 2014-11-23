/* TESTING */
var assign = require("react/lib/Object.assign");
var jest = require("jest-cli");
var chalk = require("chalk");

module.exports = function (callback) {
  var onComplete = function (result) {
    if (result) {
    } else {
      console.log(chalk.bgRed("!!! Jest tests failed! You should fix them soon. !!!"));
    }
    callback();
  }
  jest.runCLI({}, __dirname + "/../..", onComplete);
};