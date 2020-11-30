"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persistor = exports.store = void 0;

var _redux = require("redux");

var _reduxPersist = require("redux-persist");

var _reduxLogger = _interopRequireDefault(require("redux-logger"));

var _root = _interopRequireDefault(require("./root.reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var middlewares = [];

if (process.env.NODE_ENVV === 'development') {
  middlewares.push(_reduxLogger["default"]);
}

var store = (0, _redux.createStore)(_root["default"], _redux.applyMiddleware.apply(void 0, middlewares));
exports.store = store;
var persistor = (0, _reduxPersist.persistStore)(store);
exports.persistor = persistor;