var Catalyst = require("./catalyst.jsx")({
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

		return (
			<Catalyst.Grid>
				<Catalyst.Grid style={header}>
					Header
				</Catalyst.Grid>
				<Catalyst.Grid>
					<Catalyst.Col.Eight style={mainColumns}>
						<Catalyst.Col.Six>
							Left Content
						</Catalyst.Col.Six>
						<Catalyst.Col.Six>
							Right Content
						</Catalyst.Col.Six>
					</Catalyst.Col.Eight>	
					<Catalyst.Col.Four  style={mainColumns}>
						Side Bar
					</Catalyst.Col.Four>
				</Catalyst.Grid>
			</Catalyst.Grid>
		);
	}
})



React.render(<App /> , document.getElementById("app"));