module.exports = {
	always: function(){
		return {
			overflow: "auto"
		}
	},
	defaults: function(){
		return {
			margin: "2px",
			padding: "2px"
		}
	},
	outer: function(props, state, context){
		var percentWidth = (100/props.max) * (props.size[state.sizeIndex] || props.size);

		return {
			width: percentWidth+"%",
			float: "left"
		}
	}
}