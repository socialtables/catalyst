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
	},
	deviceLight: function(lux) {
		CatalystDispatcher.handleBrowserAction({
			type: ActionTypes.DEVICE_LIGHT,
			lux: lux
		});
	},
	geolocation: function(lat, long) {
		CatalystDispatcher.handleBrowserAction({
			type: ActionTypes.GEOLOCATION,
			latitude: lat,
			longitude: long
		});
	}
};
