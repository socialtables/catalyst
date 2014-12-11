var Catalyst = require("../../../src/js/catalyst.jsx")({
	numColumns: 12
});

var App = React.createClass({
	render: function(){

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
				<Catalyst style={header}>
					Header
				</Catalyst>
				<Catalyst>
					<Catalyst size={[12,12,6,8]} style={mainColumns}>
						<Catalyst size={[12,12,6,6]}>
							Left Content
						</Catalyst>
						<Catalyst size={[12,12,6,6]}>
							Right Content
						</Catalyst>
					</Catalyst>	
					<Catalyst size={[12,12,6,4]} style={sideBar}>
						Side Bar
					</Catalyst>
				</Catalyst>
			</Catalyst>
		);
	}
})



React.render(<App /> , document.getElementById("app"));