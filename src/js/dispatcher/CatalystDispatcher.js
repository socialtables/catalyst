var CatalystConstants = require("../constants/CatalystConstants");
var Dispatcher = require("flux").Dispatcher;
var assign = require("react/lib/Object.assign.js");

var PayloadSources = CatalystConstants.PayloadSources;

var CatalystDispacther = assign(new Dispatcher(), {

  handleBrowserAction: function(action) {
    var payload = {
      source: PayloadSources.BROWSER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  handleViewAction: function(action) {
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

});

module.exports = CatalystDispacther;
