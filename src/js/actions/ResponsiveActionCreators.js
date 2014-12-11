var CatalystDispatcher = require('../dispatcher/CatalystDispatcher');
var CatalystConstants = require('../constants/CatalystConstants');
var ResponsiveStore = require('../stores/ResponsiveStore');

var ActionTypes = CatalystConstants.ActionTypes;

module.exports = {

	resize: function(breakPoints) {
		CatalystDispatcher.handleBrowserAction({
			type: ActionTypes.RESIZE,
			breakPoints: breakPoints
		});
	}
};