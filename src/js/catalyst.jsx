var mergeStyles = require("./mergeStyles");

module.exports = function(opts){
	return React.createClass({
		getDefaultProps: function(){
			return {
				style: {}
			}
		},
		render: function(){

			var max = this.props.max || opts.numColumns;
			var size = this.props.size;

			var percentWidth = (100/max) * size;

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

			var inner = mergeStyles(defaults, this.props.style, always);

			React.Children.forEach(this.props.children, function(child){
				if(child.props){
					child.props.max = child.props.max || size;
				}
			});

			return (
				<div style={outer}>
					<div style={inner}>
						{this.props.children}
					</div>
				</div>
			);
		}
	});
}