var Catalyst = require("./catalyst.jsx")({
	widths:[1200, 800, 400],
	columns:[12,8,4]
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

		return (
			<Catalyst sizes={[12]}>
				<Catalyst sizes={[12]} style={header}>
					Header
				</Catalyst>
				<Catalyst sizes={[12]}>
					<Catalyst sizes={[8]} style={mainColumns}>
						<Catalyst sizes={[4]}>
							Left Content
						</Catalyst>
						<Catalyst sizes={[4]}>
							Right Content
						</Catalyst>
					</Catalyst>	
					<Catalyst sizes={[4]}  style={mainColumns}>
						Side Bar
					</Catalyst>
				</Catalyst>
			</Catalyst>
		);
	}
})



React.render(<App /> , document.getElementById("app"));