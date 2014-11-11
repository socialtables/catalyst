var mergeStyles = require("./mergeStyles");

module.exports = function(){
	return React.createClass({
		render: function(){

			var always = {
				width:"100%",
				overflow: "auto"
			};

			var defaults = {};

			var styles = mergeStyles(defaults, this.props.style || {}, always);

			return (
				<div style={styles}>
					{this.props.children}
				</div>
			);
		}
	});
}