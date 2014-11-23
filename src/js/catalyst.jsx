var mergeStyles = require("./merge-styles");

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
				breakPoints: opts.breakPoints || [300,600,1000],
				styleSet: require("./styles/default.js")
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

			var percentWidth = (100/this.props.max) * size;

			var inner = mergeStyles(this.props.styleSet.defaults,
									this.props.style, 
									this.props.styleSet.always);

			React.Children.forEach(this.props.children, function(child){
				if(child.props){
					child.props.max = size;
				}
			});

			return (
				<div style={this.props.styleSet.outer(percentWidth)}>
					<div style={inner}>
						{this.props.children}
					</div>
				</div>
			);
		}
	});
}