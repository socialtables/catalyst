var Catalyst = require("../../../src/js/catalyst.jsx")({
	styleSet: require("./styles"),
	responsiveDeviceLight: true
});

var App = React.createClass({
	render: function() {

		var header = {
			backgroundColor:"#232323",
			color: "white",
			padding: "2px",
			fontSize: "34px",
			textAlign: "center"
		}

		var mainColumns = {
			backgroundColor: "#239840"
		}
		var sideBar = {
			backgroundColor: "cornflowerblue"
		}

		return (
			<Catalyst>
				<Catalyst elementType="header" style={header}>
					Header
				</Catalyst>
				<Catalyst elementType="main">
					<Catalyst elementType="article" width={[12,12,6,8]} style={mainColumns}>
						<Catalyst elementType="section" width={[12,12,6,6]}>
							Left Content
						</Catalyst>
						<Catalyst elementType="section" width={[12,12,6,6]}>
							Right Content
						</Catalyst>
					</Catalyst>
					<Catalyst elementType="aside" width={[12,12,6,4]} style={sideBar}>
						Side Bar
					</Catalyst>
				</Catalyst>
			</Catalyst>
		);
	}
})



React.render(<App /> , document.getElementById("app"));
