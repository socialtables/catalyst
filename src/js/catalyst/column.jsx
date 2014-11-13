var mergeStyles = require("./mergeStyles");

var words = [
	"One",
	"Two",
	"Three",
	"Four",
	"Five",
	"Six",
	"Seven",
	"Eight",
	"Nine",
	"Ten",
	"Eleven",
	"Twelve"
]

module.exports = function(opts){
	var columns = {};
	for(var i=0; i<opts.numColumns; i++){
		var col = generateColumn(i+1,opts.numColumns);
		columns[words[i]] = col;
	}
	return columns;
}

function generateColumn(size, max){

	var percentWidth = (100/max)*size;

	var outer = {
		width: percentWidth+"%",
		float: "left",
	}

	var always = {
		overflow: "auto"
	}

	var defaults = {
		margin: "2px",
		padding: "2px",
		backgroundColor: "#efefef"
	}

	return React.createClass({
		render: function(){

			var inner = mergeStyles(defaults, this.props.style || {}, always);

			return (
				<div style={outer}>
					<div style={inner}>
						{this.props.children}
					</div>
				</div>
			)
		}
	})
}