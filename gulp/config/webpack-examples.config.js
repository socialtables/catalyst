module.exports = function(name){
  return {
    entry: __dirname + "/../../examples/"+name+"/src/index.jsx",
    output: {
      path: __dirname + "/../../examples/"+name+"/js/",
      filename: "index.js"
    },
    module: {
      loaders: [
        {loader: "jsx-loader"}
      ]
    }
  }
};