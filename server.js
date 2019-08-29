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
eval("\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _render = __webpack_require__(/*! ./render */ \"./server/render.js\");\n\nvar _render2 = _interopRequireDefault(_render);\n\nvar _store = __webpack_require__(/*! ../src/store */ \"./src/store.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _Routes = __webpack_require__(/*! ../src/router/Routes */ \"./src/router/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar PORT = process.env.PORT || 3000;\nvar app = (0, _express2.default)();\n\nvar router = _express2.default.Router();\n\nvar ML_API = 'https://api.mercadolibre.com';\n\nrouter.get('/api/items/:id', function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {\n    var data, response;\n    return _regenerator2.default.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log('>>>Get item by ID');\n            console.log('request path: ', req.path);\n            console.log('Get item by ID: ', req.params);\n            // const response = {name: 'item one', id: 1}\n            data = {};\n            _context.prev = 4;\n            _context.next = 7;\n            return _axios2.default.get(ML_API + '/items/' + req.params.id);\n\n          case 7:\n            response = _context.sent;\n\n            console.log('>>>get item response: ', response);\n            if (response.status === 200) data = response.data;\n            _context.next = 15;\n            break;\n\n          case 12:\n            _context.prev = 12;\n            _context.t0 = _context['catch'](4);\n\n            console.error(_context.t0);\n\n          case 15:\n            res.send(data);\n\n          case 16:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined, [[4, 12]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\nrouter.get('/api/items\\?*', function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {\n    var data, response;\n    return _regenerator2.default.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            console.log('>>>Search items');\n            console.log('request path: ', req.path);\n            console.log('request query: ', req.query);\n            // const response = [{name: 'item one', id: 1}, {name: 'item two', id: 2}]\n            data = {\n              'author': {\n                'name': '',\n                'lastname': ''\n              },\n              categories: [],\n              items: []\n            };\n            _context2.prev = 4;\n            _context2.next = 7;\n            return _axios2.default.get(ML_API + '/sites/MLA/search?q=' + req.query.q);\n\n          case 7:\n            response = _context2.sent;\n\n            console.log('>>>search sesponse: ', response);\n            if (response.status === 200) {\n              response.data.results.forEach(function (item) {\n                data.items.push({\n                  'id': item.id,\n                  'title': item.title,\n                  'price': {\n                    'currency': item.currency_id,\n                    'amount': Math.floor(item.price),\n                    'decimals': Math.floor((item.price - Math.floor(item.price)) * 100) //A simpler solution could be .split(\".\") but can have errors if used a comma as the decimal separator\n                  },\n                  'picture': item.thumbnail,\n                  'condition': item.condition,\n                  'free_shipping': item.shipping.free_shipping\n                });\n              });\n            }\n            _context2.next = 15;\n            break;\n\n          case 12:\n            _context2.prev = 12;\n            _context2.t0 = _context2['catch'](4);\n\n            console.error(_context2.t0);\n\n          case 15:\n            console.log('API response: ', data);\n            res.send(data);\n\n          case 17:\n          case 'end':\n            return _context2.stop();\n        }\n      }\n    }, _callee2, undefined, [[4, 12]]);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}());\n\nrouter.get('*', function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {\n    var store, actions, context, content;\n    return _regenerator2.default.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            console.log('>>>Static response');\n            console.log('request path: ', req.path);\n            console.log('request params: ', req.params);\n            console.log('request query: ', req.query);\n\n            store = (0, _store2.default)();\n\n            console.log('before matchRoutes');\n            actions = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref4) {\n              var route = _ref4.route,\n                  match = _ref4.match;\n              return route.component.fetching ? route.component.fetching(_extends({}, store, { params: match.params, query: req.query })) : null;\n            }).map(function () {\n              var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(actions) {\n                return _regenerator2.default.wrap(function _callee3$(_context3) {\n                  while (1) {\n                    switch (_context3.prev = _context3.next) {\n                      case 0:\n                        _context3.next = 2;\n                        return Promise.all((actions || []).map(function (p) {\n                          return p && new Promise(function (resolve) {\n                            return p.then(resolve).catch(resolve);\n                          });\n                        }));\n\n                      case 2:\n                        return _context3.abrupt('return', _context3.sent);\n\n                      case 3:\n                      case 'end':\n                        return _context3.stop();\n                    }\n                  }\n                }, _callee3, undefined);\n              }));\n\n              return function (_x7) {\n                return _ref5.apply(this, arguments);\n              };\n            }());\n            _context4.next = 9;\n            return Promise.all(actions);\n\n          case 9:\n            context = {};\n\n            console.log('before rendered content');\n            content = (0, _render2.default)(req.path, store, context);\n\n            console.log('rendered content: ', content);\n            res.send(content);\n\n          case 14:\n          case 'end':\n            return _context4.stop();\n        }\n      }\n    }, _callee4, undefined);\n  }));\n\n  return function (_x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}());\n\napp.use('/dist', _express2.default.static('dist'));\napp.use('/img', _express2.default.static('img'));\napp.use('/', router);\n\napp.listen(PORT, function () {\n  return console.log('Server listening on port: ' + PORT);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/render.js":
/*!**************************!*\
  !*** ./server/render.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Template = __webpack_require__(/*! ../src/components/Template */ \"./src/components/Template.jsx\");\n\nvar _Template2 = _interopRequireDefault(_Template);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (pathname, store, context) {\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: pathname, context: context },\n      _react2.default.createElement(_Template2.default, null)\n    )\n  ));\n\n  return '\\n  <!DOCTYPE html>\\n      <html lang=\"en\">\\n      <head>\\n        <meta charset=\"UTF-8\">\\n        <title>Title</title>\\n      </head>\\n      <body>\\n      \\n      <div id=\"app\">' + content + '</div>\\n      <script>\\n        window.INITIAL_STATE = ' + JSON.stringify(store.getState()) + '\\n      </script>\\n      <script src=\"dist/bundle.js\"></script>\\n      </body>\\n      </html>\\n  ';\n};\n\n//# sourceURL=webpack:///./server/render.js?");

/***/ }),

/***/ "./src/action/search.js":
/*!******************************!*\
  !*** ./src/action/search.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fetchItem = exports.fetchItems = undefined;\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _types = __webpack_require__(/*! ./types */ \"./src/action/types.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar fetchItems = exports.fetchItems = function fetchItems() {\n  var searchString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  return function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {\n      var res;\n      return _regenerator2.default.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n\n              dispatch({ type: _types.REQUEST_ITEMS });\n              _context.next = 4;\n              return _axios2.default.get(_types.ROOT + '/items?q=' + searchString.trim());\n\n            case 4:\n              res = _context.sent;\n\n              dispatch({ type: _types.RECEIVE_ITEMS, payload: res.data });\n              _context.next = 12;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context['catch'](0);\n\n              console.log(_context.t0);\n              dispatch({ type: _types.RECEIVE_ITEMS, payload: [] });\n\n            case 12:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined, [[0, 8]]);\n    }));\n\n    return function (_x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\nvar fetchItem = exports.fetchItem = function fetchItem(id) {\n  return function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {\n      var res;\n      return _regenerator2.default.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n\n              dispatch({ type: _types.REQUEST_ITEM });\n              _context2.next = 4;\n              return _axios2.default.get(_types.ROOT + '/items/' + id);\n\n            case 4:\n              res = _context2.sent;\n\n              dispatch({ type: _types.RECEIVE_ITEM, payload: res.data });\n              _context2.next = 12;\n              break;\n\n            case 8:\n              _context2.prev = 8;\n              _context2.t0 = _context2['catch'](0);\n\n              console.log(_context2.t0);\n              dispatch({ type: _types.RECEIVE_ITEM, payload: {} });\n\n            case 12:\n            case 'end':\n              return _context2.stop();\n          }\n        }\n      }, _callee2, undefined, [[0, 8]]);\n    }));\n\n    return function (_x3) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack:///./src/action/search.js?");

/***/ }),

/***/ "./src/action/types.js":
/*!*****************************!*\
  !*** ./src/action/types.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar ROOT = exports.ROOT = 'http://localhost:3000/api';\n\nvar REQUEST_ITEMS = exports.REQUEST_ITEMS = 'REQUEST_ITEMS';\nvar RECEIVE_ITEMS = exports.RECEIVE_ITEMS = 'RECEIVE_ITEMS';\n\nvar REQUEST_ITEM = exports.REQUEST_ITEM = 'REQUEST_ITEM';\nvar RECEIVE_ITEM = exports.RECEIVE_ITEM = 'RECEIVE_ITEM';\n\n//# sourceURL=webpack:///./src/action/types.js?");

/***/ }),

/***/ "./src/components/CategoryBreadcrumb/CategoryBreadcrumb.jsx":
/*!******************************************************************!*\
  !*** ./src/components/CategoryBreadcrumb/CategoryBreadcrumb.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar CategoryBreadcrumb = function CategoryBreadcrumb(_ref) {\n  var item = _ref.item;\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'span',\n      null,\n      'Breadcrumb:'\n    ),\n    _react2.default.createElement(\n      'span',\n      null,\n      item.id\n    )\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return { item: state.item };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(CategoryBreadcrumb);\n\n//# sourceURL=webpack:///./src/components/CategoryBreadcrumb/CategoryBreadcrumb.jsx?");

/***/ }),

/***/ "./src/components/ProductDetail/index.jsx":
/*!************************************************!*\
  !*** ./src/components/ProductDetail/index.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _search = __webpack_require__(/*! ../../action/search */ \"./src/action/search.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ProductDetail = function (_Component) {\n  _inherits(ProductDetail, _Component);\n\n  function ProductDetail() {\n    _classCallCheck(this, ProductDetail);\n\n    return _possibleConstructorReturn(this, (ProductDetail.__proto__ || Object.getPrototypeOf(ProductDetail)).apply(this, arguments));\n  }\n\n  _createClass(ProductDetail, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      console.log('Product id: ', this.props.match.params.id);\n      this.props.fetchItem(this.props.match.params.id);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var item = this.props.item;\n\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          null,\n          'Product detail'\n        ),\n        _react2.default.createElement(\n          'span',\n          null,\n          item.id\n        ),\n        _react2.default.createElement(\n          'span',\n          null,\n          item.title\n        )\n      );\n    }\n  }], [{\n    key: 'fetching',\n    value: function fetching(_ref) {\n      var dispatch = _ref.dispatch,\n          params = _ref.params;\n\n      console.log({ params: params });\n      return [dispatch((0, _search.fetchItem)(params.id))];\n    }\n  }]);\n\n  return ProductDetail;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return { item: state.item };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    fetchItem: (0, _redux.bindActionCreators)(_search.fetchItem, dispatch)\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductDetail);\n\n//# sourceURL=webpack:///./src/components/ProductDetail/index.jsx?");

/***/ }),

/***/ "./src/components/Search/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Search/index.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Search = function Search() {\n  var _useState = (0, _react.useState)(''),\n      _useState2 = _slicedToArray(_useState, 2),\n      toSearch = _useState2[0],\n      setToSearch = _useState2[1];\n\n  var handleChange = function handleChange(e) {\n    setToSearch(e.target.value);\n  };\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement('input', { type: 'text', name: 'search', id: 'search', placeholder: 'Nunca dejes de buscar', value: toSearch, onChange: handleChange }),\n    _react2.default.createElement(\n      _reactRouterDom.NavLink,\n      { to: '/items?search=' + toSearch, className: 'countries-item' },\n      _react2.default.createElement(\n        'span',\n        null,\n        'Search'\n      )\n    )\n  );\n};\n\nexports.default = Search;\n\n// import React, { Component } from 'react';\n// import { NavLink } from 'react-router-dom';\n\n// class Search extends Component  {\n\n//   state = {\n//     toSearch: ''\n//   }\n\n//   handleChange = e => {\n//     console.log('handleChange: ', e.target.value );\n//     this.setState({ toSearch: e.target.value })\n//   }\n\n//   render() { \n//     const { toSearch } = this.state;\n//     // console.log('toSearch: ', toSearch);\n//     return (\n//       <div>\n//         <input type=\"text\" name=\"search\" id=\"search\" placeholder=\"Nunca dejes de buscar\" value={toSearch} onChange={this.handleChange} />\n//         <NavLink to={`/items?search=${toSearch}`} className=\"countries-item\">\n//           {/* <img src={flag} alt=\"\"/> */}\n//             <span>Search</span>\n//         </NavLink>\n//       </div>\n//     )\n//   }\n// }\n\n// export default Search;\n\n//# sourceURL=webpack:///./src/components/Search/index.jsx?");

/***/ }),

/***/ "./src/components/SearchResult/index.jsx":
/*!***********************************************!*\
  !*** ./src/components/SearchResult/index.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _queryString = __webpack_require__(/*! query-string */ \"query-string\");\n\nvar _queryString2 = _interopRequireDefault(_queryString);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _search = __webpack_require__(/*! ../../action/search */ \"./src/action/search.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SearchResult = function (_Component) {\n  _inherits(SearchResult, _Component);\n\n  function SearchResult() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, SearchResult);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchResult.__proto__ || Object.getPrototypeOf(SearchResult)).call.apply(_ref, [this].concat(args))), _this), _this._fetchItems = function () {\n      console.log('_fetchItems');\n      var values = _queryString2.default.parse(_this.props.location.search);\n      console.log('values: ', values);\n      _this.props.fetchItems(values.search);\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(SearchResult, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      console.log('componentDidMount');\n      // if (!this.props.items.data) {\n      this._fetchItems();\n      // }\n    }\n  }, {\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate(prevProps) {\n      console.log('componentDidUpdate');\n      if (this.props.location.search !== prevProps.location.search) {\n        this._fetchItems();\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props$items = this.props.items,\n          isFetching = _props$items.isFetching,\n          data = _props$items.data;\n\n      console.log('Render: ', data);\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          null,\n          'Search result'\n        ),\n        _react2.default.createElement(\n          'ul',\n          null,\n          data.items && data.items.map(function (item) {\n            return _react2.default.createElement(\n              'li',\n              { key: item.id },\n              _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                  _reactRouterDom.NavLink,\n                  { to: '/items/' + item.id },\n                  _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(\n                      'span',\n                      null,\n                      item.title\n                    ),\n                    _react2.default.createElement('br', null),\n                    _react2.default.createElement(\n                      'span',\n                      null,\n                      'Price'\n                    ),\n                    _react2.default.createElement(\n                      'span',\n                      null,\n                      item.price.currency\n                    ),\n                    _react2.default.createElement(\n                      'span',\n                      null,\n                      item.price.amount\n                    ),\n                    _react2.default.createElement(\n                      'span',\n                      null,\n                      item.price.decimals\n                    ),\n                    _react2.default.createElement('br', null),\n                    _react2.default.createElement(\n                      'span',\n                      null,\n                      item.condition\n                    ),\n                    _react2.default.createElement('img', { src: item.picture, alt: 'product image' }),\n                    _react2.default.createElement(\n                      'span',\n                      null,\n                      'Free shipping:',\n                      item.free_shipping\n                    )\n                  )\n                )\n              )\n            );\n          })\n        )\n      );\n    }\n  }], [{\n    key: 'fetching',\n    value: function fetching(_ref2) {\n      var dispatch = _ref2.dispatch,\n          query = _ref2.query;\n\n      return [dispatch((0, _search.fetchItems)(query.search))];\n    }\n  }]);\n\n  return SearchResult;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return { items: state.items };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    fetchItems: (0, _redux.bindActionCreators)(_search.fetchItems, dispatch)\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SearchResult);\n\n//# sourceURL=webpack:///./src/components/SearchResult/index.jsx?");

/***/ }),

/***/ "./src/components/Template.jsx":
/*!*************************************!*\
  !*** ./src/components/Template.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ../router/Routes */ \"./src/router/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _Search = __webpack_require__(/*! ./Search */ \"./src/components/Search/index.jsx\");\n\nvar _Search2 = _interopRequireDefault(_Search);\n\nvar _CategoryBreadcrumb = __webpack_require__(/*! ./CategoryBreadcrumb/CategoryBreadcrumb */ \"./src/components/CategoryBreadcrumb/CategoryBreadcrumb.jsx\");\n\nvar _CategoryBreadcrumb2 = _interopRequireDefault(_CategoryBreadcrumb);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_Search2.default, null),\n    _react2.default.createElement(_CategoryBreadcrumb2.default, null),\n    (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n  );\n};\n\n//# sourceURL=webpack:///./src/components/Template.jsx?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _items = __webpack_require__(/*! ./items */ \"./src/reducers/items.js\");\n\nvar _items2 = _interopRequireDefault(_items);\n\nvar _item = __webpack_require__(/*! ./item */ \"./src/reducers/item.js\");\n\nvar _item2 = _interopRequireDefault(_item);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n  items: _items2.default,\n  item: _item2.default\n});\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _types = __webpack_require__(/*! ../action/types */ \"./src/action/types.js\");\n\nvar INITIAL_STATE = {\n  data: {},\n  isFetching: false\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _types.REQUEST_ITEMS:\n      {\n        return _extends({}, state, { isFetching: true });\n      }\n    case _types.RECEIVE_ITEMS:\n      {\n        return _extends({}, state, { isFetching: false, data: action.payload });\n      }\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/reducers/items.js?");

/***/ }),

/***/ "./src/router/Routes.js":
/*!******************************!*\
  !*** ./src/router/Routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _SearchResult = __webpack_require__(/*! ../components/SearchResult */ \"./src/components/SearchResult/index.jsx\");\n\nvar _SearchResult2 = _interopRequireDefault(_SearchResult);\n\nvar _ProductDetail = __webpack_require__(/*! ../components/ProductDetail */ \"./src/components/ProductDetail/index.jsx\");\n\nvar _ProductDetail2 = _interopRequireDefault(_ProductDetail);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [{\n  component: _SearchResult2.default,\n  path: '/items',\n  exact: true\n}, {\n  component: _ProductDetail2.default,\n  path: '/items/:id',\n  exact: true\n}];\n\n//# sourceURL=webpack:///./src/router/Routes.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = configureStore;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reducers = __webpack_require__(/*! ./reducers */ \"./src/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction configureStore() {\n    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    return (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n};\n\n//# sourceURL=webpack:///./src/store.js?");

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