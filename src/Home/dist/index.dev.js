"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNavigationStack = require("react-navigation-stack");

var _HomeScreen = _interopRequireDefault(require("./HomeScreen"));

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HomeScreen = (0, _reactRedux.connect)(function (state) {
  return {
    nav: state.nav
  };
}, {})(_HomeScreen["default"]);
var HomeStackNavigator = (0, _reactNavigationStack.createStackNavigator)({
  Home: {
    screen: HomeScreen
  }
}, {
  defaultNavigationOptions: {
    headerTitleStyle: {
      color: 'white'
    },
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'rgb(29,216,200)'
    },
    gestureEnabled: true,
    gestureResponseDistance: 100
  }
});
var _default = HomeStackNavigator;
exports["default"] = _default;