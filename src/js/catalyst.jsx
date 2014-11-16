var mergeStyles = require("./mergeStyles");

module.exports = function(opts){

	if(opts===undefined){
		throw new Error("Must supply options");
	}
	else if(Array.isArray(opts.widths)===false){
		throw new Error("Must supply an array of widths");
	}
	else if(Array.isArray(opts.columns)===false){
		throw new Error("Must supply an array of columns");
	}
	else if(opts.columns.length != opts.widths.length){
		throw new Error("Widths and Columns must have the same number of values");
	}

	function getSize(sizes){
		var width = window.innerWidth;
		if(width>=opts.widths[0]){
			return sizes[0];
		}
		else{
			for(var i=1; i<opts.widths.length && i<sizes.length; i++){
				var max = opts.widths[i-1];
				var min = opts.widths[i];
				if(width>min && width<=max){
					return sizes[i-1];
				}
			}
			return sizes[sizes.length-1];
		}
	}

	return React.createClass({
		resize: function(){
			window.requestAnimationFrame(function(){
				// this.setState({
				// 	max: getSize(opts.columns)
				// });
				this.forceUpdate();
			}.bind(this));
		},
		componentDidMount: function(){
			if(this.props.max===undefined){
				window.addEventListener( 'resize', this.resize, false );
			}
		},
		componentWillUnmount: function(){
			if(this.props.max===undefined){
				window.removeEventListener( 'resize', this.resize, false );
			}
		},
		getInitialState: function(){
			return {
				max: getSize(opts.columns)
			}
		},
		getDefaultProps: function(){
			return {
				style: {},
				max: undefined
			}
		},
		render: function(){

			var max = this.props.max || getSize(opts.columns);
			var size = getSize(this.props.sizes);

			var show = true;

			if(size===null){
				show = false;
				size = 0;
			}

			if(size>max){
				size = max;
			}

			console.log(this._rootNodeID, max, size);

			var percentWidth = (100/max) * size;

			var outer = {
				width: percentWidth+"%",
				float: "left",
				disply: show ? "normal" : "none"
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