module.exports = function(opts){

	opts = opts || {};
	opts.numColumns = opts.numColumns || 12;

	return {
		Grid: require("./catalyst/grid.jsx")(opts),
		Col: require("./catalyst/column.jsx")(opts),
	}
}