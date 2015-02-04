var Merge = require("./merge-objects");
var ResponsiveStore = require("./stores/ResponsiveStore");
var ResponsiveActionCreators = require("./actions/ResponsiveActionCreators");

module.exports = function(opts) {
	// defensive check for empty function call
	opts = opts ? opts : {};

	// defaults
	var options = Merge(require("./defaults"), opts);

	// set up responsive listeners to create actions for Flux.
	// Resize
	window.addEventListener("resize", resize, false );
	function resize() {
		ResponsiveActionCreators.resize(options.breakPoints);
	}
	// the data that changes on resize always exists,
	// so we can call it to get initial data.
	resize();

	// Device Light
	if ("ondevicelight" in window) {
		// device light api is supported.
		window.addEventListener("devicelight", function(event) {
			ResponsiveActionCreators.deviceLight(event.value);
		}, false);
	}

	// Geolocation
	if ("geolocation" in navigator) {
		// geolocation api is supported
		var geolocationId = navigator.geolocation.watchPosition(function(position) {
			ResponsiveActionCreators.geolocation(position.coords.latitude, position.coords.longitude);
		});
	}

	// function read stores
	function getResponsiveState() {
		return ResponsiveStore.getAll();
	}

	// final React component that gets returned.
	return React.createClass({
		displayName: options.displayName, // shows this name in React dev tools

		// Defaults
		getDefaultProps: function() {
			return {
				elementType: options.elementType,
				innerElementType: options.innerElementType,
				style: {},
				styleSet: options.styleSet,
				maxWidth: options.maxWidth,
				width: options.width,
				breakPoints: options.breakPoints
			};
		},
		getInitialState: function() {
			return getResponsiveState();
		},

		componentDidMount: function() {
			// when component first mounts it sets event listeners to allow for responsive design
			ResponsiveStore.addChangeListener(this._onChange);
		},
		componentWillUnmount: function() {
			// cleaning up event listenrs
			ResponsiveStore.removeChangeListener(this._onChange);
		},
		_onChange: function() {
			this.setState(getResponsiveState());
		},


		render: function() {
			var innerStyle = Merge(this.props.styleSet.defaults(this.props, this.state),
									this.props.style,
									this.props.styleSet.always(this.props, this.state));
			var outerStyle = this.props.styleSet.outer(this.props, this.state, this);

			// using elementType allow for custom HTML tags
			return (
				<this.props.elementType style={outerStyle}>
					<this.props.innerElementType style={innerStyle}>
						{this.props.children}
					</this.props.innerElementType>
				</this.props.elementType>
			);
		}
	});
}
