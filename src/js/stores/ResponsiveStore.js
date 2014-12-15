/**
 * This file is provided by Facebook for testing and evaluation purposes
 * only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var CatalystDispatcher = require("../dispatcher/CatalystDispatcher");
var CatalystConstants = require("../constants/CatalystConstants");
var EventEmitter = require("events").EventEmitter;
var assign = require("react/lib/Object.assign.js");

var ActionTypes = CatalystConstants.ActionTypes;
var CHANGE_EVENT = "change";

var _responsiveData = {};

var ResponsiveStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAll: function() {
    return _responsiveData;
  },

  getWindowWidth: function() {
    return _responsiveData.windowWidth;
  },

  getSizeIndex: function() {
    return _responsiveData.sizeIndex;
  },

  setOnResize: function(breakPoints) {
    var innerWidth = window.innerWidth;
    var index = 0;
    breakPoints.forEach(function(breakPoint) {
      if(breakPoint < innerWidth) {
        index++;
      }
    });
    if(index !== this.getSizeIndex()) {
      _responsiveData.sizeIndex = index;
    }
    _responsiveData.windowWidth = window.innerWidth;
  },
  setOnDeviceLight: function(lux) {
    _responsiveData.deviceLight = lux;
  },
  setOnGeolocation: function(lat, long) {
    _responsiveData.latitude = lat;
    _responsiveData.longitude = long;
  }

});

ResponsiveStore.dispatchToken = CatalystDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionTypes.RESIZE:
      ResponsiveStore.setOnResize(action.breakPoints);
      ResponsiveStore.emitChange();
      break;
    case ActionTypes.DEVICE_LIGHT:
      ResponsiveStore.setOnDeviceLight(action.lux);
      ResponsiveStore.emitChange();
      break;
    case ActionTypes.GEOLOCATION:
      ResponsiveStore.setOnGeolocation(action.latitude, action.longitude);
      ResponsiveStore.emitChange();
      break;
    default:
      // do nothing
  }

});

module.exports = ResponsiveStore;
