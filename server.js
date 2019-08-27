/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _render = __webpack_require__(/*! ./render */ \"./server/render.js\");\n\nvar _render2 = _interopRequireDefault(_render);\n\nvar _store = __webpack_require__(/*! ../src/store */ \"./src/store.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _Routes = __webpack_require__(/*! ../src/router/Routes */ \"./src/router/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n// import store from '../src/store';\n\n\nvar PORT = process.env.PORT || 3000;\nvar app = (0, _express2.default)();\n\n// // app.use('/dist', express.static('dist'));\n// // app.use('/img', express.static('img'));\n\n// // app.param('id', function(req, res, next, id){\n// //   // Do something with id\n// //   // Store id or other info in req object\n// //   // Call next when done\n// //   req.id = id;\n// //   next();\n// // });\n\n// app.get('/api/items/​:id', async (req, res) => {\n//   console.log('>>>Get item by ID');\n//   console.log('request path: ', req.path);\n//   console.log('Get item by ID: ', req.params);\n//   const response = {name: 'item one', id: 1}\n//   res.send(response);\n// });\n\n// app.use('/dist', express.static('dist'));\n// app.use('/img', express.static('img'));\n\n// // app.get('/api/items\\?*', async (req, res) => {\n// //   console.log('>>>Search items');\n// //   console.log('request path: ', req.path);\n// //   console.log('request query: ', req.query);\n// //   const response = [{name: 'item one', id: 1}, {name: 'item two', id: 2}]\n// //   res.send(response);\n// // });\n\n// app.get('*', async (req, res) => {\n//   console.log('>>>Static response');\n//   console.log('request path: ', req.path);\n//   console.log('request query: ', req.query);\n\n//   const actions = matchRoutes(Routes, req.path)\n//     .map(({ route }) => route.component.fetching ? route.component.fetching({...store, path: req.path }) : null)\n//     .map(async actions => await Promise.all(\n//       (actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve)))\n//       )\n//     );\n\n//   await  Promise.all(actions);\n//   const context = {};\n//   const content = render(req.path, store, context);\n\n//   res.send(content);\n// });\n\n// app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));\n\n\nvar router = _express2.default.Router();\n\nvar ML_API = 'https://api.mercadolibre.com';\n\nrouter.get('/api/items/:id', function (req, res) {\n  console.log('>>>Get item by ID');\n  console.log('request path: ', req.path);\n  console.log('Get item by ID: ', req.params);\n  var response = { name: 'item one', id: 1\n    // const response = {}\n    // try {\n    //   response = await axios.get(`${ML_API}/sites/MLA/search?q=​${}`);\n    //   console.log(response);\n    // } catch (error) {\n    //   console.error(error);\n    // }\n  };res.send(response);\n});\n\nrouter.get('/api/items\\?*', function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {\n    var response;\n    return _regenerator2.default.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log('>>>Search items');\n            console.log('request path: ', req.path);\n            console.log('request query: ', req.query);\n            response = [{ name: 'item one', id: 1 }, { name: 'item two', id: 2 }];\n\n            res.send(response);\n\n          case 5:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\nrouter.get('*', function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {\n    var store, actions, context, content;\n    return _regenerator2.default.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            console.log('>>>Static response');\n            console.log('request path: ', req.path);\n            console.log('request params: ', req.params);\n            console.log('request query: ', req.query);\n\n            store = (0, _store2.default)();\n\n            // const actions = matchRoutes(Routes, req.path)\n            //   .map(({ route }) => route.component.fetching ? route.component.fetching({...store, path: req.path }) : null)\n            //   .map(async actions => await Promise.all(\n            //     (actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve)))\n            //     )\n            //   );\n\n            actions = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref3) {\n              var route = _ref3.route,\n                  match = _ref3.match;\n              return route.component.fetching ? route.component.fetching(_extends({}, store, { params: match.params, query: req.query })) : null;\n            }).map(function () {\n              var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(actions) {\n                return _regenerator2.default.wrap(function _callee2$(_context2) {\n                  while (1) {\n                    switch (_context2.prev = _context2.next) {\n                      case 0:\n                        _context2.next = 2;\n                        return Promise.all((actions || []).map(function (p) {\n                          return p && new Promise(function (resolve) {\n                            return p.then(resolve).catch(resolve);\n                          });\n                        }));\n\n                      case 2:\n                        return _context2.abrupt('return', _context2.sent);\n\n                      case 3:\n                      case 'end':\n                        return _context2.stop();\n                    }\n                  }\n                }, _callee2, undefined);\n              }));\n\n              return function (_x5) {\n                return _ref4.apply(this, arguments);\n              };\n            }());\n\n            // const actions = matchRoutes(Routes, req.path);\n            // console.log('actions: ', actions);\n            // const algo1 = actions.map(({ route, match }) => {\n            //   console.log('route: ', route);\n            //   console.log('match: ', match);\n            //   console.log('match param: ', match.params);\n            //   route.component.fetching ? route.component.fetching({...store, path: req.path }) : null\n            // });\n            // console.log('algo1: ', algo1);\n            // algo1.map(async actions => await Promise.all(\n            //   (actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve)))\n            //   )\n            // );\n\n            _context3.next = 8;\n            return Promise.all(actions);\n\n          case 8:\n            context = {};\n            content = (0, _render2.default)(req.path, store, context);\n\n\n            res.send(content);\n\n          case 11:\n          case 'end':\n            return _context3.stop();\n        }\n      }\n    }, _callee3, undefined);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}());\n\napp.use('/dist', _express2.default.static('dist'));\napp.use('/img', _express2.default.static('img'));\napp.use('/', router);\n// app.use(router);\n// app.use('/dist', express.static('dist'));\n// app.use('/img', express.static('img'));\n\napp.listen(PORT, function () {\n  return console.log('Server listening on port: ' + PORT);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/render.js":
/*!**************************!*\
  !*** ./server/render.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ../src/router/Routes */ \"./src/router/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (pathname, store, context) {\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: pathname, context: context },\n      _react2.default.createElement(\n        'div',\n        null,\n        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n      )\n    )\n  ));\n\n  return '\\n  <!DOCTYPE html>\\n      <html lang=\"en\">\\n      <head>\\n        <meta charset=\"UTF-8\">\\n        <title>Title</title>\\n      </head>\\n      <body>\\n      \\n      <div id=\"app\">' + content + '</div>\\n      <script>\\n        window.INITIAL_STATE = ' + JSON.stringify(store.getState()) + '\\n      </script>\\n      <script src=\"dist/bundle.js\"></script>\\n      </body>\\n      </html>\\n  ';\n};\n\n//# sourceURL=webpack:///./server/render.js?");

/***/ }),

/***/ "./src/action/countries.js":
/*!*********************************!*\
  !*** ./src/action/countries.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fetchCountry = exports.fetchCountries = undefined;\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _types = __webpack_require__(/*! ./types */ \"./src/action/types.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar fetchCountries = exports.fetchCountries = function fetchCountries() {\n  return function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {\n      var res;\n      return _regenerator2.default.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n\n              dispatch({ type: _types.REQUEST_COUNTRIES });\n              _context.next = 4;\n              return _axios2.default.get(_types.ROOT1 + \"/all\");\n\n            case 4:\n              res = _context.sent;\n\n              dispatch({ type: _types.RECEIVE_COUNTRIES, payload: res.data });\n              _context.next = 12;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n\n              console.log(_context.t0);\n              dispatch({ type: _types.RECEIVE_COUNTRIES, payload: [] });\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined, [[0, 8]]);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\nvar fetchCountry = exports.fetchCountry = function fetchCountry(name) {\n  return function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {\n      var res;\n      return _regenerator2.default.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n\n              dispatch({ type: _types.REQUEST_COUNTRY });\n              _context2.next = 4;\n              return _axios2.default.get(_types.ROOT1 + \"/name/\" + name);\n\n            case 4:\n              res = _context2.sent;\n\n              dispatch({ type: _types.RECEIVE_COUNTRY, payload: res.data[0] });\n              _context2.next = 12;\n              break;\n\n            case 8:\n              _context2.prev = 8;\n              _context2.t0 = _context2[\"catch\"](0);\n\n              console.log(_context2.t0);\n              dispatch({ type: _types.RECEIVE_COUNTRY, payload: {} });\n\n            case 12:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, undefined, [[0, 8]]);\n    }));\n\n    return function (_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack:///./src/action/countries.js?");

/***/ }),

/***/ "./src/action/search.js":
/*!******************************!*\
  !*** ./src/action/search.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fetchItem = exports.fetchItems = undefined;\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _types = __webpack_require__(/*! ./types */ \"./src/action/types.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar fetchItems = exports.fetchItems = function fetchItems(searchString) {\n  return function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {\n      var res;\n      return _regenerator2.default.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log('String to query: >', searchString.trim(), '<');\n              console.log('String to query2: >' + searchString.trim() + '<');\n              console.log('Root url: ', _types.ROOT);\n              console.log('query url: ', _types.ROOT + '/items?q=' + searchString.trim());\n              _context.prev = 4;\n\n              dispatch({ type: _types.REQUEST_ITEMS });\n              _context.next = 8;\n              return _axios2.default.get(_types.ROOT + '/items?q=' + searchString.trim());\n\n            case 8:\n              res = _context.sent;\n\n              dispatch({ type: _types.RECEIVE_ITEMS, payload: res.data });\n              // dispatch({ type: RECEIVE_ITEMS, payload: [{name: 'item one'}, {name: 'item two'}] });\n              _context.next = 16;\n              break;\n\n            case 12:\n              _context.prev = 12;\n              _context.t0 = _context['catch'](4);\n\n              console.log(_context.t0);\n              dispatch({ type: _types.RECEIVE_ITEMS, payload: [] });\n\n            case 16:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined, [[4, 12]]);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\nvar fetchItem = exports.fetchItem = function fetchItem(id) {\n  return function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {\n      var res;\n      return _regenerator2.default.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              console.log('Itme id to query: ', id);\n              console.log('Root url: ', _types.ROOT);\n              console.log('query url: ', _types.ROOT + '/items/' + id);\n              _context2.prev = 3;\n\n              dispatch({ type: _types.REQUEST_ITEM });\n              _context2.next = 7;\n              return _axios2.default.get(_types.ROOT + '/items/' + id);\n\n            case 7:\n              res = _context2.sent;\n\n              dispatch({ type: _types.RECEIVE_ITEM, payload: res.data });\n              _context2.next = 15;\n              break;\n\n            case 11:\n              _context2.prev = 11;\n              _context2.t0 = _context2['catch'](3);\n\n              console.log(_context2.t0);\n              dispatch({ type: _types.RECEIVE_ITEM, payload: {} });\n\n            case 15:\n            case 'end':\n              return _context2.stop();\n          }\n        }\n      }, _callee2, undefined, [[3, 11]]);\n    }));\n\n    return function (_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack:///./src/action/search.js?");

/***/ }),

/***/ "./src/action/types.js":
/*!*****************************!*\
  !*** ./src/action/types.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar ROOT1 = exports.ROOT1 = 'https://restcountries.eu/rest/v2';\nvar ROOT = exports.ROOT = 'http://localhost:3000/api';\n\nvar REQUEST_COUNTRIES = exports.REQUEST_COUNTRIES = 'REQUEST_COUNTRIES';\nvar RECEIVE_COUNTRIES = exports.RECEIVE_COUNTRIES = 'RECEIVE_COUNTRIES';\n\nvar REQUEST_COUNTRY = exports.REQUEST_COUNTRY = 'REQUEST_COUNTRY';\nvar RECEIVE_COUNTRY = exports.RECEIVE_COUNTRY = 'RECEIVE_COUNTRY';\n\nvar REQUEST_ITEMS = exports.REQUEST_ITEMS = 'REQUEST_ITEMS';\nvar RECEIVE_ITEMS = exports.RECEIVE_ITEMS = 'RECEIVE_ITEMS';\n\nvar REQUEST_ITEM = exports.REQUEST_ITEM = 'REQUEST_ITEM';\nvar RECEIVE_ITEM = exports.RECEIVE_ITEM = 'RECEIVE_ITEM';\n\n//# sourceURL=webpack:///./src/action/types.js?");

/***/ }),

/***/ "./src/common/Loading.js":
/*!*******************************!*\
  !*** ./src/common/Loading.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Loading = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Loading = exports.Loading = function Loading() {\n  return _react2.default.createElement(\n    \"div\",\n    { className: \"container\" },\n    _react2.default.createElement(\n      \"div\",\n      { className: \"loading-container\" },\n      _react2.default.createElement(\"img\", { src: \"../../img/loading.svg\", alt: \"\" })\n    )\n  );\n};\n\n//# sourceURL=webpack:///./src/common/Loading.js?");

/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Loading = __webpack_require__(/*! ./Loading */ \"./src/common/Loading.js\");\n\nObject.keys(_Loading).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _Loading[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/common/index.js?");

/***/ }),

/***/ "./src/components/Countries/CountriesItem.jsx":
/*!****************************************************!*\
  !*** ./src/components/Countries/CountriesItem.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (_ref) {\n  var name = _ref.name,\n      flag = _ref.flag,\n      capital = _ref.capital,\n      population = _ref.population;\n\n  return _react2.default.createElement(\n    _reactRouterDom.NavLink,\n    { to: '/' + name, className: 'countries-item' },\n    _react2.default.createElement(\n      'span',\n      null,\n      'hey there!!'\n    ),\n    _react2.default.createElement('img', { src: flag, alt: '' }),\n    _react2.default.createElement(\n      'div',\n      { className: 'countries-item-data' },\n      _react2.default.createElement(\n        'h4',\n        null,\n        name\n      ),\n      _react2.default.createElement(\n        'span',\n        null,\n        capital\n      ),\n      _react2.default.createElement(\n        'span',\n        null,\n        population,\n        ' pop.'\n      )\n    )\n  );\n};\n\n//# sourceURL=webpack:///./src/components/Countries/CountriesItem.jsx?");

/***/ }),

/***/ "./src/components/Countries/index.js":
/*!*******************************************!*\
  !*** ./src/components/Countries/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _dec, _class;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _countries = __webpack_require__(/*! ../../action/countries */ \"./src/action/countries.js\");\n\nvar _common = __webpack_require__(/*! ../../common */ \"./src/common/index.js\");\n\nvar _CountriesItem = __webpack_require__(/*! ./CountriesItem */ \"./src/components/Countries/CountriesItem.jsx\");\n\nvar _CountriesItem2 = _interopRequireDefault(_CountriesItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar m = function m(_ref) {\n  var countries = _ref.countries;\n  return { countries: countries };\n};\n\nvar Countries = (_dec = (0, _reactRedux.connect)(m, { fetchCountries: _countries.fetchCountries }), _dec(_class = function (_Component) {\n  _inherits(Countries, _Component);\n\n  function Countries() {\n    _classCallCheck(this, Countries);\n\n    return _possibleConstructorReturn(this, (Countries.__proto__ || Object.getPrototypeOf(Countries)).apply(this, arguments));\n  }\n\n  _createClass(Countries, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.fetchCountries();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props$countries = this.props.countries,\n          isFetching = _props$countries.isFetching,\n          data = _props$countries.data;\n\n\n      if (isFetching) {\n        return _react2.default.createElement(_common.Loading, null);\n      }\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'container' },\n        _react2.default.createElement(\n          'div',\n          { className: 'countries-container' },\n          data.map(function (item, i) {\n            return _react2.default.createElement(_CountriesItem2.default, _extends({ key: i }, item));\n          })\n        )\n      );\n    }\n  }], [{\n    key: 'fetching',\n    value: function fetching(_ref2) {\n      var dispatch = _ref2.dispatch;\n\n      return [dispatch((0, _countries.fetchCountries)())];\n    }\n  }]);\n\n  return Countries;\n}(_react.Component)) || _class);\nexports.default = Countries;\n;\n\n//# sourceURL=webpack:///./src/components/Countries/index.js?");

/***/ }),

/***/ "./src/components/Country/index.jsx":
/*!******************************************!*\
  !*** ./src/components/Country/index.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _dec, _class;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _countries = __webpack_require__(/*! ../../action/countries */ \"./src/action/countries.js\");\n\nvar _common = __webpack_require__(/*! ../../common */ \"./src/common/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar m = function m(_ref) {\n  var country = _ref.country;\n  return { country: country };\n};\n\nvar Country = (_dec = (0, _reactRedux.connect)(m, { fetchCountry: _countries.fetchCountry }), _dec(_class = function (_Component) {\n  _inherits(Country, _Component);\n\n  function Country() {\n    _classCallCheck(this, Country);\n\n    return _possibleConstructorReturn(this, (Country.__proto__ || Object.getPrototypeOf(Country)).apply(this, arguments));\n  }\n\n  _createClass(Country, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      console.log(this.props.match.params.name);\n      this.props.fetchCountry(this.props.match.params.name);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props$country = this.props.country,\n          isFetching = _props$country.isFetching,\n          flag = _props$country.flag,\n          name = _props$country.name,\n          nativeName = _props$country.nativeName,\n          capital = _props$country.capital,\n          region = _props$country.region,\n          population = _props$country.population,\n          languages = _props$country.languages;\n\n\n      if (isFetching) {\n        return _react2.default.createElement(_common.Loading, null);\n      }\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'container' },\n        _react2.default.createElement(\n          'div',\n          { className: 'country-container' },\n          _react2.default.createElement('img', { src: flag, alt: '' }),\n          _react2.default.createElement(\n            'div',\n            { className: 'country-data' },\n            _react2.default.createElement(\n              'div',\n              { className: 'country-data-item' },\n              _react2.default.createElement(\n                'span',\n                null,\n                'Name: '\n              ),\n              _react2.default.createElement(\n                'span',\n                null,\n                name\n              )\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'country-data-item' },\n              _react2.default.createElement(\n                'span',\n                null,\n                'NativeName: '\n              ),\n              _react2.default.createElement(\n                'span',\n                null,\n                nativeName\n              )\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'country-data-item' },\n              _react2.default.createElement(\n                'span',\n                null,\n                'Capital: '\n              ),\n              _react2.default.createElement(\n                'span',\n                null,\n                capital\n              )\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'country-data-item' },\n              _react2.default.createElement(\n                'span',\n                null,\n                'Region: '\n              ),\n              _react2.default.createElement(\n                'span',\n                null,\n                region\n              )\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'country-data-item' },\n              _react2.default.createElement(\n                'span',\n                null,\n                'Population: '\n              ),\n              _react2.default.createElement(\n                'span',\n                null,\n                population\n              )\n            )\n          ),\n          _react2.default.createElement('hr', null),\n          _react2.default.createElement(\n            'div',\n            { className: 'languages-container' },\n            languages.map(function (item, i) {\n              return _react2.default.createElement(\n                'span',\n                { key: i },\n                item.name\n              );\n            })\n          )\n        )\n      );\n    }\n  }], [{\n    key: 'fetching',\n    value: function fetching(_ref2) {\n      var dispatch = _ref2.dispatch,\n          params = _ref2.params;\n\n      console.log({ params: params });\n      return [dispatch((0, _countries.fetchCountry)(params.name))];\n    }\n  }]);\n\n  return Country;\n}(_react.Component)) || _class);\nexports.default = Country;\n\n//# sourceURL=webpack:///./src/components/Country/index.jsx?");

/***/ }),

/***/ "./src/components/ProductDetail/index.jsx":
/*!************************************************!*\
  !*** ./src/components/ProductDetail/index.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _search = __webpack_require__(/*! ../../action/search */ \"./src/action/search.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ProductDetail = function (_Component) {\n  _inherits(ProductDetail, _Component);\n\n  function ProductDetail() {\n    _classCallCheck(this, ProductDetail);\n\n    return _possibleConstructorReturn(this, (ProductDetail.__proto__ || Object.getPrototypeOf(ProductDetail)).apply(this, arguments));\n  }\n\n  _createClass(ProductDetail, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      console.log('Product id: ', this.props.match.params.id);\n      this.props.fetchItem(this.props.match.params.id);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          null,\n          'Product detail'\n        ),\n        _react2.default.createElement(\n          'span',\n          null,\n          this.props.item.id\n        ),\n        _react2.default.createElement(\n          'span',\n          null,\n          this.props.item.name\n        )\n      );\n    }\n  }], [{\n    key: 'fetching',\n    value: function fetching(_ref) {\n      var dispatch = _ref.dispatch,\n          params = _ref.params;\n\n      console.log({ params: params });\n      return [dispatch((0, _search.fetchItem)(params.id))];\n    }\n  }]);\n\n  return ProductDetail;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return { item: state.item };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    fetchItem: (0, _redux.bindActionCreators)(_search.fetchItem, dispatch)\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductDetail);\n\n//# sourceURL=webpack:///./src/components/ProductDetail/index.jsx?");

/***/ }),

/***/ "./src/components/SearchResult/index.jsx":
/*!***********************************************!*\
  !*** ./src/components/SearchResult/index.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _queryString = __webpack_require__(/*! query-string */ \"query-string\");\n\nvar _queryString2 = _interopRequireDefault(_queryString);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _search = __webpack_require__(/*! ../../action/search */ \"./src/action/search.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SearchResult = function (_Component) {\n  _inherits(SearchResult, _Component);\n\n  function SearchResult() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, SearchResult);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchResult.__proto__ || Object.getPrototypeOf(SearchResult)).call.apply(_ref, [this].concat(args))), _this), _this._fetchItems = function () {\n      var values = _queryString2.default.parse(_this.props.location.search);\n      _this.props.fetchItems(values.search);\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(SearchResult, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      console.log('componentDidMount');\n      if (!this.props.items.data) {\n        console.log('fetch inside componentDidMount');\n        this._fetchItems();\n      }\n    }\n  }, {\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate(prevProps) {\n      if (this.props.location.search !== prevProps.location.search) {\n        console.log('componentDidUpdate');\n        this._fetchItems();\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props$items = this.props.items,\n          isFetching = _props$items.isFetching,\n          data = _props$items.data;\n\n\n      console.log({ isFetching: isFetching }, { data: data });\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          null,\n          'Search result'\n        ),\n        _react2.default.createElement(\n          'ul',\n          null,\n          data.map(function (item) {\n            return _react2.default.createElement(\n              'li',\n              { key: item.id },\n              _react2.default.createElement(\n                _reactRouterDom.NavLink,\n                { to: '/items/' + item.id },\n                item.name\n              )\n            );\n          })\n        )\n      );\n    }\n  }], [{\n    key: 'fetching',\n    value: function fetching(_ref2) {\n      var dispatch = _ref2.dispatch,\n          query = _ref2.query;\n\n      console.log({ query: query });\n      return [dispatch((0, _search.fetchItems)(query.search))];\n    }\n  }]);\n\n  return SearchResult;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return { items: state.items };\n};\n// const mapDispatchToProps = (dispatch) => {\n//   return {\n//     fetchItems: () => dispatch(fetchItems())\n//   };\n// };\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    fetchItems: (0, _redux.bindActionCreators)(_search.fetchItems, dispatch)\n  };\n};\n// function mapDispatchToProps(dispatch) {\n//   return {\n//     fetchItems: bindActionCreators(fetchItems, dispatch)\n//   };\n// };\n\n// export default SearchResult;\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SearchResult);\n\n//# sourceURL=webpack:///./src/components/SearchResult/index.jsx?");

/***/ }),

/***/ "./src/reducers/Country.js":
/*!*********************************!*\
  !*** ./src/reducers/Country.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _types = __webpack_require__(/*! ../action/types */ \"./src/action/types.js\");\n\nvar INITIAL_STATE = {\n  name: '',\n  nativeName: '',\n  flag: '',\n  capital: '',\n  region: '',\n  population: '',\n  languages: [],\n  isFetching: false,\n  lastUpdate: Date.now()\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _types.REQUEST_COUNTRY:\n      {\n        return _extends({}, state, { isFetching: true });\n      }\n    case _types.RECEIVE_COUNTRY:\n      {\n        return _extends({}, state, { isFetching: false }, action.payload);\n      }\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/reducers/Country.js?");

/***/ }),

/***/ "./src/reducers/countries.js":
/*!***********************************!*\
  !*** ./src/reducers/countries.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _types = __webpack_require__(/*! ../action/types */ \"./src/action/types.js\");\n\nvar INITIAL_STATE = {\n  data: [],\n  isFetching: false,\n  lastUpdate: Date.now()\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _types.REQUEST_COUNTRIES:\n      {\n        return _extends({}, state, { isFetching: true });\n      }\n    case _types.RECEIVE_COUNTRIES:\n      {\n        return _extends({}, state, { isFetching: false, data: action.payload });\n      }\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/reducers/countries.js?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _countries = __webpack_require__(/*! ./countries */ \"./src/reducers/countries.js\");\n\nvar _countries2 = _interopRequireDefault(_countries);\n\nvar _Country = __webpack_require__(/*! ./Country */ \"./src/reducers/Country.js\");\n\nvar _Country2 = _interopRequireDefault(_Country);\n\nvar _items = __webpack_require__(/*! ./items */ \"./src/reducers/items.js\");\n\nvar _items2 = _interopRequireDefault(_items);\n\nvar _item = __webpack_require__(/*! ./item */ \"./src/reducers/item.js\");\n\nvar _item2 = _interopRequireDefault(_item);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n  countries: _countries2.default,\n  country: _Country2.default,\n  items: _items2.default,\n  item: _item2.default\n});\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ }),

/***/ "./src/reducers/item.js":
/*!******************************!*\
  !*** ./src/reducers/item.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _types = __webpack_require__(/*! ../action/types */ \"./src/action/types.js\");\n\nvar INITIAL_STATE = {\n  name: '',\n  isFetching: false\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _types.REQUEST_ITEM:\n      {\n        return _extends({}, state, { isFetching: true });\n      }\n    case _types.RECEIVE_ITEM:\n      {\n        return _extends({}, state, { isFetching: false }, action.payload);\n      }\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/reducers/item.js?");

/***/ }),

/***/ "./src/reducers/items.js":
/*!*******************************!*\
  !*** ./src/reducers/items.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _types = __webpack_require__(/*! ../action/types */ \"./src/action/types.js\");\n\nvar INITIAL_STATE = {\n  data: [],\n  isFetching: false\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _types.REQUEST_ITEMS:\n      {\n        return _extends({}, state, { isFetching: true });\n      }\n    case _types.RECEIVE_ITEMS:\n      {\n        return _extends({}, state, { isFetching: false, data: action.payload });\n      }\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/reducers/items.js?");

/***/ }),

/***/ "./src/router/Routes.js":
/*!******************************!*\
  !*** ./src/router/Routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Countries = __webpack_require__(/*! ../components/Countries */ \"./src/components/Countries/index.js\");\n\nvar _Countries2 = _interopRequireDefault(_Countries);\n\nvar _Country = __webpack_require__(/*! ../components/Country */ \"./src/components/Country/index.jsx\");\n\nvar _Country2 = _interopRequireDefault(_Country);\n\nvar _SearchResult = __webpack_require__(/*! ../components/SearchResult */ \"./src/components/SearchResult/index.jsx\");\n\nvar _SearchResult2 = _interopRequireDefault(_SearchResult);\n\nvar _ProductDetail = __webpack_require__(/*! ../components/ProductDetail */ \"./src/components/ProductDetail/index.jsx\");\n\nvar _ProductDetail2 = _interopRequireDefault(_ProductDetail);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [{\n  component: _Countries2.default,\n  path: '/',\n  exact: true,\n  endpoint: '/'\n}, {\n  component: _SearchResult2.default,\n  path: '/items',\n  exact: true\n}, {\n  component: _ProductDetail2.default,\n  path: '/items/:id',\n  exact: true\n}, {\n  component: _Country2.default,\n  path: '/country/:name',\n  endpoint: '/:name'\n}];\n\n//# sourceURL=webpack:///./src/router/Routes.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = configureStore;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reducers = __webpack_require__(/*! ./reducers */ \"./src/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// export default createStore(rootReducer, {}, applyMiddleware(reduxThunk));\n\n// export default configureStore = (initialState = {}) => {\n//     return createStore(rootReducer, initialState, applyMiddleware(reduxThunk));\n// };\n\nfunction configureStore() {\n    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    return (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n};\n\n//# sourceURL=webpack:///./src/store.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/regenerator%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"query-string\");\n\n//# sourceURL=webpack:///external_%22query-string%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });