catalyst
========

A framework to speed up and ease development in React.

## Purpose
Catalyst is meant to be a flexible React component that deals specifically with page-wide layouts. It is flexible enough to adopt any layout system and built out enough to let you get to working on what matters as quickly as possible.

## Props
```
layoutSystem
```
Optional `object` which signifies the styles specific to the layout of the page. See [Layout System](#layout-system) below.

## Layout system
This system will be used as a [mixin](http://facebook.github.io/react/docs/reusable-components.html#mixins) across various components in inside of catalyst. Take a look at the [default](#link-to-default) layout system to get an idea of how this works.

## Example
```
var Catalyst = require("catalyst/bootstrap");
// requiring just catalyst only provides minimal base styling and structure.
// you can pick specific builds which work with complete gris systems like bootstrap/pure/etc.
var Column = Catalyst.column;
var Row = Catalyst.row;
// columns and rows are functionally the same but allow for syntactical differentiation and
// are in practice generally tied to vertical and horizontal alignment respectively
var Cell = Catalyst.cell;
// a single unit which contains target components. can be fed specific column and row numbers.

var SiteHeader = React.createClass({
	render: function(){
		return (
			<Catalyst>
				<SiteHeader yourProps={headerData}/>
				<PageMain yourProps={pageData}/>
				<SiteFooter youProps={footerData}/>
			</Catalyst>
		)
	}
});

var SiteHeader = React.createClass({
	render: function(){
		return (
			<Row elementType="header">
				<Cell columns={2}>
					<SiteLogo yourProps="data"/>
				</Cell>
				<Cell> // no columns prop defaults to 1
					<SiteNav yourProps="data"/>
				</cell>
			</Row>
		)
	}
});

```