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
		return {
			width: percentWidth+"%",
			float: "left",
			opacity: opacity
		};
	}
};
