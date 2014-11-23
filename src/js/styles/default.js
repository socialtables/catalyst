module.exports = {
	always: {
		overflow: "auto"
	},
	defaults: {
		margin: "2px",
		padding: "2px",
		backgroundColor: "#efefef"
	},
	outer: function(width){
		return {
			width: width+"%",
			float: "left"
		}
	}
}