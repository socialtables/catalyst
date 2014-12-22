# Catalyst

A framework to speed up and ease development in React.

## Purpose
Catalyst is meant to be a flexible React component that deals specifically with layouts and styling. Think of it as a shell for the content that  It is flexible enough to adopt any layout system and built out enough to let you get to working on what matters as quickly as possible.

## Scope
Catalyst is built to take data from three distinct places and use them to make decisions about layout and design. These are:
* initial configuration of Catalyst
* the `props` of each Catalyst component
* events triggered by users or the browser

Catalyst will not do any application logic. In most cases, Catalyst silently takes in data. However, there are specific cases where Catalyst will send data or trigger events that will useful to you:
* Certain components provide ways to respond to actions (menus, buttons, etc.)
* You can subscribe to the store(s) that Catalyst uses to get any responsive information that you have opted into in your Catalyst configuration

## Use
The API for Catalyst is still very much in flux.

```javascript
var Catalyst = require("../../../src/js/catalyst.jsx")({
  // initial configuration
  // This is where you can set global variables like default break points, number of columns and much more
  numColumns: 12
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
    // use catalyst elements to build out the structure of your site
    return (
      <Catalyst>
        <Catalyst style={header}>
        Header
        </Catalyst>
        <Catalyst>
          <Catalyst width={[12,12,6,8]} style={mainColumns}>
          // each element can use props to override the defaults provided above
            <Catalyst width={[12,12,6,6]}>
              Left Content
            </Catalyst>
            <Catalyst width={[12,12,6,6]}>
              Right Content
            </Catalyst>
          </Catalyst>
          <Catalyst width={[12,12,6,4]} style={sideBar}>
            Side Bar
          </Catalyst>
        </Catalyst>
      </Catalyst>
    );
  }
})

React.render(<App /> , document.getElementById("app"));
```
