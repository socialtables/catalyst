module.exports = {
  always: function() {
    return {
      overflow: "auto"
    };
  },
  defaults: function() {
    return {
      margin: "2px",
      padding: "2px"
    };
  },
  outer: function(props, state, context) {
    var percentWidth = (100/props.maxWidth) * (props.width[state.widthIndex] || props.width);
    var opacity = state.deviceLight ? state.deviceLight/50 : 1;

    return {
      width: percentWidth+"%",
      float: "left",
      opacity: opacity,
    };
  }
};
