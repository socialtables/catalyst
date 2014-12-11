var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    RESIZE: null,
    RESIZE_BREAK_POINT: null
  }),

  PayloadSources: keyMirror({
    BROWSER_ACTION: null,
    VIEW_ACTION: null
  })

};