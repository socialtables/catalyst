var Catalyst = require("./catalyst.jsx")();

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

		return (
			<Catalyst size={12}>
				<Catalyst size={12} style={header}>
					Header
				</Catalyst>
				<Catalyst size={12}>
					<Catalyst size={8} style={mainColumns}>
						<Catalyst size={4}>
							Left Content
						</Catalyst>
						<Catalyst size={4}>
							Right Content
						</Catalyst>
					</Catalyst>	
					<Catalyst size={4}  style={mainColumns}>
						Side Bar
					</Catalyst>
				</Catalyst>
			</Catalyst>
		);
	}
})



React.render(<App /> , document.getElementById("app"));