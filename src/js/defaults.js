module.exports = {
  displayName: "Catalyst",
  elementType: "div",
  innerElementType: "div",
  styleSet: require("./styles/default"),

  /* RESPONSIVE BOOLEANS */
  //width is opt-out, all others are opt-in
  responsiveWidth: true,
  responsiveDeviceLight: false,
  responsiveGeolocation: false,

  /* RESPONSIVE DEFAULTS */
  // width and breakPoints refer to window.innerWidth.
  // short hand because they are the most common responsive values
  maxWidth: 12,
  width: 12,
  breakPoints: [300,600,1000],
  deviceLightBreakPoints: [10, 20, 30],
  geolocationBreakPoints: [10, 20, 30]
};
