catalyst
========

A framework to speed up and ease development in React.

## Purpose
Catalyst is meant to be a flexible React component that deals specifically with page-wide layouts. It is flexible enough to adopt any layout system and built out enough to let you get to working on what matters as quickly as possible.

## Props
```
main
```
`array` of `React.PropTypes.node`. This is the only required prop. It is what gets rendered according to the layout system currently in use. All content will be rendered inside of `<main>`.

```
header
```
`array` of `React.PropTypes.node`. Optional prop to add extra content to the top of your page. All content rendered inside of `<header>` tag.

```
footer
```
`array` of `React.PropTypes.node`.Optional prop to add extra content to the top of your page. All content rendered inside of `<footer>` tag.

```
layoutSystem
```
`object` which signifies the styles specific to the layout of the page. See [Layout System](#layout-system) below.

## Layout system
This system will be used as a [mixin](http://facebook.github.io/react/docs/reusable-components.html#mixins) across various components in inside of catalyst. Take a look at the [default](#link-to-default) layout system to get an idea of how this works.