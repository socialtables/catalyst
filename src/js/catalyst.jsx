var mergeStyles = require("./mergeStyles");

module.exports = function(opts){
	return React.createClass({
		componentDidMount: function(){
			window.addEventListener( 'resize', this.resize, false );
		},
		resize: function(){
			var self = this;
			window.requestAnimationFrame(function(){
				self.forceUpdate();
			});
		},
		getDefaultProps: function(){
			return {
				style: {},
				max: opts.numColumns || 12,
				size: opts.defaultUnitSize || 12,
				breakPoints: opts.breakPoints || [300,600,1000]
			}
		},
		getWindowWidth: function(){
			return window.innerWidth;
		},
		componentWillUnmount: function(){
			window.removeEventListener( 'resize', this.resize, false );
		},
		render: function(){

			var sizeIndex = 0;
			if(this.props.size instanceof Array){
				this.props.breakPoints.forEach(function(breakPoint){
					if(breakPoint < this.getWindowWidth()){
						sizeIndex++;
					}
				}, this);
			}
			size = this.props.size[sizeIndex] || this.props.size;

			var max = this.props.max;

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
					child.props.max = size;
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