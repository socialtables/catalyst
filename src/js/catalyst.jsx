var React = require('react');
var mergeStyles = require("./merge-styles");
var ResponsiveStore = require("./stores/ResponsiveStore");
var ResponsiveActionCreators = require("./actions/ResponsiveActionCreators");

module.exports = function(opts) {
	// defensive check for empty function call
	opts = opts ? opts : {};
	// defaults
	var defaultStyleSet = opts.styleSet || require("./styles/default.js");
	var defaultMax = opts.numColumns || 12;
	var defaultUnitSize = opts.defaultUnitSize || 12;
	var defaultBreakPoints = opts.breakPoints || [300,600,1000];
	var defaultDisplayName = opts.displayName || "Catalyst";

	// set up responsive listeners to create actions for Flux.
	// Resize
	window.addEventListener("resize", resize, false );
	function resize() {
		ResponsiveActionCreators.resize(defaultBreakPoints);
	}
	// the data that changes on resize always exists,
	// so we can call it to get initial data.
	resize();

	// Device Light
	if ('ondevicelight' in window) {
		// device light api is supported.
		window.addEventListener("devicelight", deviceLight, false);
		function deviceLight(event) {
			ResponsiveActionCreators.deviceLight(event.value);
		}
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
		displayName: defaultDisplayName, // shows this name in React dev tools

		// Defaults
		getDefaultProps: function() {
			return {
				style: {},
				styleSet: defaultStyleSet,
				max: defaultMax,
				size: defaultUnitSize,
				breakPoints: defaultBreakPoints,
				isTopCatalystComponent: true
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
			var innerStyle = mergeStyles(this.props.styleSet.defaults(this.props, this.state),
									this.props.style,
									this.props.styleSet.always(this.props, this.state));
			var outerStyle = this.props.styleSet.outer(this.props, this.state, this);

			return (
				<div style={outerStyle}>
					<div style={innerStyle}>
						{this.props.children}
					</div>
				</div>
			);
		}
	});
}
