module.exports = {
	always: function() {
		return {
			overflow: "auto"
		};
	},
	defaults: function() {
		return {
			margin: "2px",
			padding: "2px"
		};
	},
	outer: function(props, state, context) {
		var percentWidth = (100/props.maxWidth) * (props.width[state.widthIndex] || props.width);
		var opacity = state.deviceLight ? state.deviceLight/50 : 1;
		var backgroundColor = "red";

		var cap = {
			latitude: 38.8897,
			longitude: -77.0089
		};
		var oneDegLongOfCap = state.longitude > cap.longitude - 1 && state.longitude < cap.longitude + 1;
		var oneDegLatOfCap = state.latitude > cap.latitude - 1 && state.latitude < cap.latitude + 1;
		if(oneDegLongOfCap && oneDegLatOfCap) {
			backgroundColor = "green";
		}

		return {
			width: percentWidth+"%",
			float: "left",
			opacity: opacity,
			backgroundColor: backgroundColor
		};
	}
};
