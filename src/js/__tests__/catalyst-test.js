jest.dontMock("../catalyst.jsx");

describe("catalyst", function() {
	var React = require('react/addons');
	var Catalyst = require("../catalyst.jsx");
	var TestUtils = React.addons.TestUtils;

	it("should return a valid react component", function() {
		var CatalystElement = Catalyst();

		var isValidElement = React.isValidElement(<CatalystElement/>);

		expect(isValidElement).toEqual(true);
	});
	it("should allow first argument attributes to override defaults", function() {
		var color = "orange";
		var display = "inline-block";

		var CatalystElement = Catalyst({
			styleSet: {
				always: {
					display: display
				},
				defaults: {
					color: color
				}
			},
			displayName: "JustATester"
		});

		var element = <CatalystElement/>;
		expect(element.props.styleSet.defaults.color).toEqual(color);
		expect(element.props.styleSet.always.display).toEqual(display);
	});
});
