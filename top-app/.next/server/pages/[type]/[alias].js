module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[type]/[alias].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./components/Advantages/Advantages.module.css":
/*!*****************************************************!*\
  !*** ./components/Advantages/Advantages.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"advanatge": "Advantages_advanatge__1drHY",
	"title": "Advantages_title__drzh4",
	"vline": "Advantages_vline__1FwSx"
};


/***/ }),

/***/ "./components/Advantages/Advantages.tsx":
/*!**********************************************!*\
  !*** ./components/Advantages/Advantages.tsx ***!
  \**********************************************/
/*! exports provided: Advantages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Advantages", function() { return Advantages; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Advantages_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Advantages.module.css */ "./components/Advantages/Advantages.module.css");
/* harmony import */ var _Advantages_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Advantages_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _check_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check.svg */ "./components/Advantages/check.svg");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\Advantages\\Advantages.tsx";



const Advantages = ({
  advantages
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: advantages.map(a => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Advantages_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.advanatge,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_check_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 6
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Advantages_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
        children: a.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 6
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Advantages_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.vline
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 6
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: a.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 6
      }, undefined)]
    }, a._id, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, undefined))
  }, void 0, false);
};

/***/ }),

/***/ "./components/Advantages/check.svg":
/*!*****************************************!*\
  !*** ./components/Advantages/check.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _circle, _g, _defs;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgCheck(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 50,
    height: 50,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _circle || (_circle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    cx: 25,
    cy: 25,
    r: 25,
    fill: "#C8F8E4"
  })), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    clipPath: "url(#check_svg__clip0)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M36.297 20.368l-12.661 12.66a2.402 2.402 0 01-3.397 0l-6.536-6.536a2.402 2.402 0 013.397-3.397l4.838 4.838L32.9 16.971a2.402 2.402 0 013.397 3.397z",
    fill: "#1DC37E"
  }))), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("clipPath", {
    id: "check_svg__clip0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fill: "#fff",
    transform: "translate(13 13)",
    d: "M0 0h24v24H0z"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCheck);

/***/ }),

/***/ "./components/Button/Button.module.css":
/*!*********************************************!*\
  !*** ./components/Button/Button.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button": "Button_button__sL3tD",
	"primary": "Button_primary__2zal1",
	"ghost": "Button_ghost__2SQcx",
	"arrow": "Button_arrow__-Cxtw",
	"down": "Button_down__3uNGg"
};


/***/ }),

/***/ "./components/Button/Button.tsx":
/*!**************************************!*\
  !*** ./components/Button/Button.tsx ***!
  \**************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.module.css */ "./components/Button/Button.module.css");
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _arrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrow.svg */ "./components/Button/arrow.svg");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\Button\\Button.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Button = (_ref) => {
  let {
    appearance,
    arrow = "none",
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["appearance", "arrow", "children", "className"]);

  const scale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__["useMotionValue"])(1);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].button, _objectSpread(_objectSpread({
    whileHover: {
      scale: 1.05
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button, className, {
      [_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.primary]: appearance == "primary",
      [_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ghost]: appearance == "ghost"
    }),
    style: {
      scale
    }
  }, props), {}, {
    children: [children, arrow != "none" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.arrow, {
        [_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.down]: arrow == "down"
      }),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_arrow_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 33
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./components/Button/arrow.svg":
/*!*************************************!*\
  !*** ./components/Button/arrow.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgArrow(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 6,
    height: 10,
    fill: "#3B434E",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M5.715 4.61L1.265.16A.543.543 0 00.878 0a.543.543 0 00-.386.16L.164.487a.548.548 0 000 .774L3.9 4.998.16 8.739a.543.543 0 00-.16.387c0 .146.057.284.16.387l.327.327c.103.103.24.16.387.16a.543.543 0 00.387-.16l4.454-4.454a.544.544 0 00.16-.388.544.544 0 00-.16-.388z"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgArrow);

/***/ }),

/***/ "./components/ButtonIcon/ButtonIcon.module.css":
/*!*****************************************************!*\
  !*** ./components/ButtonIcon/ButtonIcon.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button": "ButtonIcon_button__lXRGS",
	"primary": "ButtonIcon_primary__106oE",
	"white": "ButtonIcon_white__-iRBb"
};


/***/ }),

/***/ "./components/ButtonIcon/ButtonIcon.props.ts":
/*!***************************************************!*\
  !*** ./components/ButtonIcon/ButtonIcon.props.ts ***!
  \***************************************************/
/*! exports provided: icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icons", function() { return icons; });
/* harmony import */ var _up_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./up.svg */ "./components/ButtonIcon/up.svg");
/* harmony import */ var _close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./close.svg */ "./components/ButtonIcon/close.svg");
/* harmony import */ var _menu_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.svg */ "./components/ButtonIcon/menu.svg");



const icons = {
  up: _up_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
  close: _close_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  menu: _menu_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./components/ButtonIcon/ButtonIcon.tsx":
/*!**********************************************!*\
  !*** ./components/ButtonIcon/ButtonIcon.tsx ***!
  \**********************************************/
/*! exports provided: ButtonIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonIcon", function() { return ButtonIcon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ButtonIcon_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonIcon.props */ "./components/ButtonIcon/ButtonIcon.props.ts");
/* harmony import */ var _ButtonIcon_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonIcon.module.css */ "./components/ButtonIcon/ButtonIcon.module.css");
/* harmony import */ var _ButtonIcon_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ButtonIcon_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\ButtonIcon\\ButtonIcon.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ButtonIcon = (_ref) => {
  let {
    appearance,
    icon,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["appearance", "icon", "className"]);

  const IconComp = _ButtonIcon_props__WEBPACK_IMPORTED_MODULE_1__["icons"][icon];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_ButtonIcon_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button, className, {
      [_ButtonIcon_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.primary]: appearance == "primary",
      [_ButtonIcon_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.white]: appearance == "white"
    })
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconComp, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./components/ButtonIcon/close.svg":
/*!*****************************************!*\
  !*** ./components/ButtonIcon/close.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _rect, _rect2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgClose(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 19,
    height: 19,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _rect || (_rect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    y: 16.51,
    width: 23,
    height: 3,
    rx: 1.5,
    transform: "rotate(-45 0 16.51)",
    fill: "#7653FC"
  })), _rect2 || (_rect2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    x: 2.253,
    width: 23,
    height: 3,
    rx: 1.5,
    transform: "rotate(45 2.253 0)",
    fill: "#7653FC"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgClose);

/***/ }),

/***/ "./components/ButtonIcon/menu.svg":
/*!****************************************!*\
  !*** ./components/ButtonIcon/menu.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _rect, _rect2, _rect3;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgMenu(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 20,
    height: 17,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _rect || (_rect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    width: 20,
    height: 3,
    rx: 1.5,
    fill: "#7653FC"
  })), _rect2 || (_rect2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    y: 7,
    width: 20,
    height: 3,
    rx: 1.5,
    fill: "#7653FC"
  })), _rect3 || (_rect3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    y: 14,
    width: 20,
    height: 3,
    rx: 1.5,
    fill: "#7653FC"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgMenu);

/***/ }),

/***/ "./components/ButtonIcon/up.svg":
/*!**************************************!*\
  !*** ./components/ButtonIcon/up.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _rect, _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgUp(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 21,
    height: 13,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _rect || (_rect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    y: 9.9,
    width: 14,
    height: 3,
    rx: 1.5,
    transform: "rotate(-45 0 9.9)",
    fill: "#fff"
  })), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M9.06 1.232a1.5 1.5 0 012.122 0L18.96 9.01a1.5 1.5 0 11-2.121 2.122L9.06 3.354a1.5 1.5 0 010-2.122z",
    fill: "#fff"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgUp);

/***/ }),

/***/ "./components/Card/Card.module.css":
/*!*****************************************!*\
  !*** ./components/Card/Card.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "Card_card__K0CRX",
	"blue": "Card_blue__1W0l3"
};


/***/ }),

/***/ "./components/Card/Card.tsx":
/*!**********************************!*\
  !*** ./components/Card/Card.tsx ***!
  \**********************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./components/Card/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\Card\\Card.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Card = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])((_ref, ref) => {
  let {
    color = "white",
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["color", "children", "className"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card, className, {
      [_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.blue]: color == "blue"
    })
  }, props), {}, {
    ref: ref,
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, undefined);
});

/***/ }),

/***/ "./components/Divider/Divider.module.css":
/*!***********************************************!*\
  !*** ./components/Divider/Divider.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"hr": "Divider_hr__3DpPQ"
};


/***/ }),

/***/ "./components/Divider/Divider.tsx":
/*!****************************************!*\
  !*** ./components/Divider/Divider.tsx ***!
  \****************************************/
/*! exports provided: Divider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return Divider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Divider_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Divider.module.css */ "./components/Divider/Divider.module.css");
/* harmony import */ var _Divider_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Divider_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\Divider\\Divider.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Divider = (_ref) => {
  let {
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, _Divider_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hr)
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./components/HhData/HhData.module.css":
/*!*********************************************!*\
  !*** ./components/HhData/HhData.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"hh": "HhData_hh__3vtrL",
	"count": "HhData_count__1x9Ny",
	"salary": "HhData_salary__2Ni7N",
	"title": "HhData_title__33cxh",
	"countValue": "HhData_countValue__3caj7",
	"salaryValue": "HhData_salaryValue__2qOni",
	"rate": "HhData_rate__2TIhs",
	"filled": "HhData_filled__nsSOx"
};


/***/ }),

/***/ "./components/HhData/HhData.tsx":
/*!**************************************!*\
  !*** ./components/HhData/HhData.tsx ***!
  \**************************************/
/*! exports provided: HhData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HhData", function() { return HhData; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HhData_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HhData.module.css */ "./components/HhData/HhData.module.css");
/* harmony import */ var _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HhData_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rate_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rate.svg */ "./components/HhData/rate.svg");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .. */ "./components/index.ts");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/helpers */ "./helpers/helpers.tsx");

var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\HhData\\HhData.tsx";





const HhData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hh,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Card"], {
      className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.count,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
        children: "\u0412\u0441\u0435\u0433\u043E \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0439"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.countValue,
        children: count
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Card"], {
      className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.salary,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
          children: "\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.salaryValue,
          children: Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_5__["priceRu"])(juniorSalary)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.rate,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_rate_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filled
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_rate_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_rate_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
          children: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.salaryValue,
          children: Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_5__["priceRu"])(middleSalary)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.rate,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_rate_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filled
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_rate_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filled
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_rate_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
          children: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.salaryValue,
          children: Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_5__["priceRu"])(seniorSalary)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.rate,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_rate_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filled
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_rate_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filled
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_rate_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filled
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./components/HhData/rate.svg":
/*!************************************!*\
  !*** ./components/HhData/rate.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _circle, _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgRate(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 20,
    height: 20,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _circle || (_circle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    cx: 10,
    cy: 10,
    r: 10,
    fill: "#BBB"
  })), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M15.969 8.534a.643.643 0 00-.549-.457l-3.464-.328-1.369-3.345A.638.638 0 0010 4a.636.636 0 00-.586.404L8.044 7.75l-3.464.328a.645.645 0 00-.549.457.685.685 0 00.186.708l2.619 2.396-.772 3.548a.68.68 0 00.248.687.617.617 0 00.701.033L10 14.042l2.986 1.864c.22.136.495.124.702-.033a.68.68 0 00.248-.687l-.772-3.548 2.619-2.396a.685.685 0 00.186-.708z",
    fill: "#fff"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgRate);

/***/ }),

/***/ "./components/Htag/Htag.module.css":
/*!*****************************************!*\
  !*** ./components/Htag/Htag.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"h1": "Htag_h1__15c8R",
	"h2": "Htag_h2__38T7C",
	"h3": "Htag_h3__1L-7T"
};


/***/ }),

/***/ "./components/Htag/Htag.tsx":
/*!**********************************!*\
  !*** ./components/Htag/Htag.tsx ***!
  \**********************************/
/*! exports provided: Htag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Htag", function() { return Htag; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Htag_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Htag.module.css */ "./components/Htag/Htag.module.css");
/* harmony import */ var _Htag_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Htag_module_css__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\Htag\\Htag.tsx";

const Htag = ({
  tag,
  children
}) => {
  switch (tag) {
    case "h1":
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _Htag_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.h1,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 11
      }, undefined);

    case "h2":
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: _Htag_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.h2,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }, undefined);

    case "h3":
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: _Htag_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.h3,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }, undefined);

    default:
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
  }
};

/***/ }),

/***/ "./components/Input/Input.module.css":
/*!*******************************************!*\
  !*** ./components/Input/Input.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"inputWrapper": "Input_inputWrapper__1gsYI",
	"input": "Input_input__3ySuD",
	"error": "Input_error__5u74E",
	"errorMessage": "Input_errorMessage__2eRQY"
};


/***/ }),

/***/ "./components/Input/Input.tsx":
/*!************************************!*\
  !*** ./components/Input/Input.tsx ***!
  \************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.module.css */ "./components/Input/Input.module.css");
/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Input_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\Input\\Input.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Input = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])((_ref, ref) => {
  let {
    className,
    error
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "error"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Input_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputWrapper, className),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread({
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Input_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.input, {
        [_Input_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.error]: error
      }),
      ref: ref
    }, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, undefined), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: _Input_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.errorMessage,
      children: error.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 14
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, undefined);
});

/***/ }),

/***/ "./components/P/P.module.css":
/*!***********************************!*\
  !*** ./components/P/P.module.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"p": "P_p__1diXQ",
	"s": "P_s__35XSw",
	"m": "P_m__3Ruez",
	"l": "P_l__sxHpZ"
};


/***/ }),

/***/ "./components/P/P.tsx":
/*!****************************!*\
  !*** ./components/P/P.tsx ***!
  \****************************/
/*! exports provided: P */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _P_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./P.module.css */ "./components/P/P.module.css");
/* harmony import */ var _P_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_P_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\P\\P.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const P = (_ref) => {
  let {
    size = "m",
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["size", "children", "className"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_P_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.p, className, {
      [_P_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.s]: size == "s",
      [_P_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.m]: size == "m",
      [_P_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.l]: size == "l"
    })
  }, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./components/Product/Product.module.css":
/*!***********************************************!*\
  !*** ./components/Product/Product.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"product": "Product_product__j12ex",
	"logo": "Product_logo__3z5y8",
	"title": "Product_title__yOJRp",
	"tags": "Product_tags__2oUt0",
	"rateTitle": "Product_rateTitle__yDk8r",
	"price": "Product_price__3fvYx",
	"priceTitle": "Product_priceTitle__ZbTfu",
	"credit": "Product_credit__1z2mo",
	"creditTitle": "Product_creditTitle__-2dg5",
	"raiting": "Product_raiting__2zddI",
	"hr": "Product_hr__31mKj",
	"description": "Product_description__5N5oC",
	"actions": "Product_actions__1QRFO",
	"feature": "Product_feature__1k8VA",
	"advBlock": "Product_advBlock__3iL2I",
	"category": "Product_category__MGr8h",
	"month": "Product_month__3Em86",
	"oldPrice": "Product_oldPrice__2KEqo",
	"reviewButton": "Product_reviewButton__qV0PV",
	"advTitle": "Product_advTitle__1BAaL",
	"advantages": "Product_advantages__3HI7r",
	"disadvantages": "Product_disadvantages__2Y3Up",
	"characteristics": "Product_characteristics__1kcp_",
	"characteristicsName": "Product_characteristicsName__1uV6B",
	"characteristicsValue": "Product_characteristicsValue__2gp3L",
	"characteristicsDots": "Product_characteristicsDots__CM4z5",
	"reviews": "Product_reviews__21_7b",
	"hr2": "Product_hr2__3kPXg"
};


/***/ }),

/***/ "./components/Product/Product.tsx":
/*!****************************************!*\
  !*** ./components/Product/Product.tsx ***!
  \****************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.module.css */ "./components/Product/Product.module.css");
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Product_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .. */ "./components/index.ts");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/helpers */ "./helpers/helpers.tsx");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\Product\\Product.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Product = Object(framer_motion__WEBPACK_IMPORTED_MODULE_7__["motion"])( /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])((_ref, ref) => {
  var _product$reviewAvg;

  let {
    product,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["product", "className"]);

  const {
    0: isReviewOpened,
    1: setIsReviewOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const reviewRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  const variants = {
    visible: {
      opacity: 1,
      height: "auto"
    },
    hidden: {
      opacity: 0,
      height: 0
    }
  };

  const scrollToReview = () => {
    var _reviewRef$current;

    setIsReviewOpened(true);
    (_reviewRef$current = reviewRef.current) === null || _reviewRef$current === void 0 ? void 0 : _reviewRef$current.scrollIntoView({
      behavior: 'smooth',
      block: "start"
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: className
  }, props), {}, {
    ref: ref,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Card"], {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.product,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
          src: "https://courses-top.ru" + product.image,
          alt: product.title,
          width: 70,
          height: 70
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
        children: product.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.price,
        children: [Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_5__["priceRu"])(product.price), product.oldPrice && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Tag"], {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.oldPrice,
          color: "green",
          children: Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_5__["priceRu"])(product.price - product.oldPrice)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.credit,
        children: [Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_5__["priceRu"])(product.credit), "/", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.month,
          children: "\u043C\u0435\u0441"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 32
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.raiting,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Raiting"], {
          raiting: (_product$reviewAvg = product.reviewAvg) !== null && _product$reviewAvg !== void 0 ? _product$reviewAvg : product.initialRating
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tags,
        children: product.categories.map(c => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Tag"], {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.category,
          color: "ghost",
          children: c
        }, c, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 7
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.priceTitle,
        children: "\u0446\u0435\u043D\u0430"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.creditTitle,
        children: "\u043A\u0440\u0435\u0434\u0438\u0442"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.rateTitle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#ref",
          onClick: scrollToReview,
          children: [product.reviewCount, " ", Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_5__["declOfNum"])(product.reviewCount, ["отзыв", "отзыва", "отзывов"])]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Divider"], {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hr
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.description,
        children: product.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.feature,
        children: product.characteristics.map(c => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.characteristics,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.characteristicsName,
            children: c.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 8
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.characteristicsDots
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 8
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.characteristicsValue,
            children: c.value
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 8
          }, undefined)]
        }, c.name, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 7
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.advBlock,
        children: [product.advantages && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.advantages,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.advTitle,
            children: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 8
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: product.advantages
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 8
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 7
        }, undefined), product.disadvantages && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.disadvantages,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.advTitle,
            children: "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043A\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 8
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: product.disadvantages
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 8
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Divider"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hr, _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hr2)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.actions,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Button"], {
          appearance: "primary",
          children: "\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Button"], {
          appearance: "ghost",
          arrow: isReviewOpened ? "down" : "right",
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.reviewButton,
          onClick: () => setIsReviewOpened(!isReviewOpened),
          children: "\u0427\u0438\u0442\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432\u044B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_7__["motion"].div, {
      animate: isReviewOpened ? "visible" : "hidden",
      variants: variants,
      initial: "hidden",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Card"], {
        color: "blue",
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.reviews),
        ref: reviewRef,
        children: [product.reviews.map(r => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Review"], {
            review: r
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 8
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Divider"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 8
          }, undefined)]
        }, r._id, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 7
        }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["ReviewForm"], {
          productId: product._id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 4
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 3
  }, undefined);
}));

/***/ }),

/***/ "./components/Raiting/Raiting.module.css":
/*!***********************************************!*\
  !*** ./components/Raiting/Raiting.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"filled": "Raiting_filled__bOgro",
	"star": "Raiting_star__3jUpr",
	"editable": "Raiting_editable__30-GK",
	"error": "Raiting_error__2z2uB",
	"raitingWrapper": "Raiting_raitingWrapper__3f0X_",
	"errorMessage": "Raiting_errorMessage__191b4"
};


/***/ }),

/***/ "./components/Raiting/Raiting.tsx":
/*!****************************************!*\
  !*** ./components/Raiting/Raiting.tsx ***!
  \****************************************/
/*! exports provided: Raiting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Raiting", function() { return Raiting; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Raiting_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Raiting.module.css */ "./components/Raiting/Raiting.module.css");
/* harmony import */ var _Raiting_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Raiting_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _star_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./star.svg */ "./components/Raiting/star.svg");


var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\Raiting\\Raiting.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Raiting = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])((_ref, ref) => {
  let {
    isEditable = false,
    raiting,
    setRaiting,
    error
  } = _ref,
      props = _objectWithoutProperties(_ref, ["isEditable", "raiting", "setRaiting", "error"]);

  const {
    0: raitingArray,
    1: setRaitingArray
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(new Array(5).fill( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)));
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    constructRaiting(raiting);
  }, [raiting]);

  const constructRaiting = currentRaiting => {
    const updatedArray = raitingArray.map((el, index) => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Raiting_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.star, {
          [_Raiting_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filled]: index < currentRaiting,
          [_Raiting_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.editable]: isEditable
        }),
        onMouseEnter: () => changeDisplay(index + 1),
        onMouseLeave: () => changeDisplay(raiting),
        onClick: () => onClick(index + 1),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_star_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
          tabIndex: isEditable ? 0 : -1,
          onKeyDown: e => isEditable && handelSpace(index + 1, e)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, undefined);
    });
    setRaitingArray(updatedArray);
  };

  const changeDisplay = index => {
    if (!isEditable) {
      return;
    }

    constructRaiting(index);
  };

  const onClick = index => {
    if (!isEditable || !setRaiting) {
      return;
    }

    setRaiting(index);
  };

  const handelSpace = (index, e) => {
    if (e.code != "Space" || !setRaiting) {
      return;
    }

    setRaiting(index);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({}, props), {}, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Raiting_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.raitingWrapper, {
      [_Raiting_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.error]: error
    }),
    children: [raitingArray.map((el, index) => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: el
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 6
      }, undefined);
    }), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: _Raiting_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.errorMessage,
      children: error.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 14
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 3
  }, undefined);
});

/***/ }),

/***/ "./components/Raiting/star.svg":
/*!*************************************!*\
  !*** ./components/Raiting/star.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgStar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 20,
    height: 20,
    fill: "#E2E2E2",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M19.948 7.557a1.072 1.072 0 00-.915-.762l-5.773-.547L10.978.674A1.063 1.063 0 0010 0c-.427 0-.81.264-.977.674L6.74 6.248l-5.774.547c-.424.04-.782.34-.915.762-.131.422-.01.886.31 1.179l4.365 3.993-1.287 5.914c-.094.435.067.885.413 1.146a1.029 1.029 0 001.169.054L10 16.736l4.977 3.107c.366.227.825.206 1.17-.054.346-.261.507-.71.413-1.146l-1.287-5.914 4.365-3.993c.32-.293.441-.756.31-1.18z"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgStar);

/***/ }),

/***/ "./components/Review/Review.module.css":
/*!*********************************************!*\
  !*** ./components/Review/Review.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"review": "Review_review__1Sq6r",
	"description": "Review_description__maqX-",
	"date": "Review_date__eXUpN",
	"name": "Review_name__2EJrf",
	"title": "Review_title__16XJg",
	"raiting": "Review_raiting__rfnFR"
};


/***/ }),

/***/ "./components/Review/Review.tsx":
/*!**************************************!*\
  !*** ./components/Review/Review.tsx ***!
  \**************************************/
/*! exports provided: Review */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Review", function() { return Review; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Review_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Review.module.css */ "./components/Review/Review.module.css");
/* harmony import */ var _Review_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Review_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.svg */ "./components/Review/user.svg");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/locale */ "date-fns/locale");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .. */ "./components/index.ts");

var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\Review\\Review.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Review = (_ref) => {
  let {
    review,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["review", "className"]);

  const {
    name,
    title,
    description,
    createdAt,
    rating
  } = review;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Review_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.review, className)
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_user_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: _Review_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.user
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Review_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _Review_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.name,
        children: [name, ":"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, undefined), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Review_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.date,
      children: Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(createdAt), "dd MMMM yyyy", {
        locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_5__["ru"]
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Review_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.raiting,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_7__["Raiting"], {
        raiting: rating
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Review_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.description,
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./components/Review/user.svg":
/*!************************************!*\
  !*** ./components/Review/user.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2, _path3;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgUser(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 30,
    height: 30,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M15 0C6.729 0 0 6.729 0 15s6.729 15 15 15 15-6.729 15-15S23.271 0 15 0zm0 27.625C8.038 27.625 2.375 21.961 2.375 15S8.038 2.375 15 2.375c6.961 0 12.625 5.664 12.625 12.625 0 6.962-5.664 12.625-12.625 12.625z",
    fill: "#7653FC"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M15 17.662c-4.219 0-8.166 2.115-11.113 5.956l1.883 1.445c2.489-3.241 5.767-5.027 9.23-5.027s6.741 1.786 9.23 5.027l1.883-1.445C23.165 19.777 19.22 17.662 15 17.662z",
    fill: "#7653FC"
  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M15 5.383c-3.405 0-6.174 2.787-6.174 6.213 0 3.427 2.77 6.214 6.174 6.214 3.404 0 6.174-2.787 6.174-6.214 0-3.426-2.77-6.213-6.174-6.213zm0 10.052c-2.095 0-3.8-1.722-3.8-3.839s1.705-3.839 3.8-3.839c2.095 0 3.8 1.723 3.8 3.84 0 2.116-1.705 3.838-3.8 3.838z",
    fill: "#7653FC"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgUser);

/***/ }),

/***/ "./components/ReviewForm/ReviewForm.module.css":
/*!*****************************************************!*\
  !*** ./components/ReviewForm/ReviewForm.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"reviewForm": "ReviewForm_reviewForm__2oDvX",
	"title": "ReviewForm_title__ZAmwH",
	"description": "ReviewForm_description__2P6nE",
	"submit": "ReviewForm_submit__6o1NK",
	"info": "ReviewForm_info__gk2Wq",
	"raiting": "ReviewForm_raiting__Q7-3l",
	"success": "ReviewForm_success__1PxdQ",
	"error": "ReviewForm_error__1x3DR",
	"close": "ReviewForm_close__3G2UH",
	"successTitle": "ReviewForm_successTitle__2_be0"
};


/***/ }),

/***/ "./components/ReviewForm/ReviewForm.tsx":
/*!**********************************************!*\
  !*** ./components/ReviewForm/ReviewForm.tsx ***!
  \**********************************************/
/*! exports provided: ReviewForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewForm", function() { return ReviewForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReviewForm.module.css */ "./components/ReviewForm/ReviewForm.module.css");
/* harmony import */ var _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .. */ "./components/index.ts");
/* harmony import */ var _close_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./close.svg */ "./components/ReviewForm/close.svg");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/api */ "./helpers/api.ts");

var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\ReviewForm\\ReviewForm.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const ReviewForm = (_ref) => {
  let {
    productId,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["productId", "className"]);

  const {
    0: isSuccess,
    1: setIsSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: error,
    1: setIsError
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])();
  const {
    register,
    control,
    handleSubmit,
    formState: {
      errors
    },
    reset
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"])();

  const onSubmit = async formData => {
    try {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(_helpers_api__WEBPACK_IMPORTED_MODULE_8__["API"].review.createDemo, _objectSpread(_objectSpread({}, formData), {}, {
        productId
      }));

      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setIsError("Что-то пошло не так");
      }
    } catch (e) {
      setIsError(e.message);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    onSubmit: handleSubmit(onSubmit),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.reviewForm, className)
    }, props), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Input"], _objectSpread(_objectSpread({}, register("name", {
        required: {
          value: true,
          message: "Заполните имя"
        }
      })), {}, {
        placeholder: "\u0418\u043C\u044F",
        error: errors.name
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Input"], _objectSpread(_objectSpread({}, register("title", {
        required: {
          value: true,
          message: "Заполните заголовок"
        }
      })), {}, {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
        placeholder: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
        error: errors.title
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.raiting,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "\u041E\u0446\u0435\u043D\u043A\u0430:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
          control: control,
          name: "rating",
          rules: {
            required: {
              value: true,
              message: "Укажите рейтинг"
            }
          },
          render: ({
            field
          }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Raiting"], {
            raiting: field.value,
            ref: field.ref,
            isEditable: true,
            setRaiting: field.onChange,
            error: errors.rating
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Textarea"], _objectSpread(_objectSpread({}, register("description", {
        required: {
          value: true,
          message: "Заполните отзыв"
        }
      })), {}, {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.description,
        placeholder: "\u0422\u0435\u043A\u0441\u0442 \u043E\u0442\u0437\u044B\u0432\u0430",
        error: errors.description
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.submit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Button"], {
          appearance: "primary",
          children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.info,
          children: "* \u041F\u0435\u0440\u0435\u0434 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0435\u0439 \u043E\u0442\u0437\u044B\u0432 \u043F\u0440\u043E\u0439\u0434\u0435\u0442 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u043C\u043E\u0434\u0435\u0440\u0430\u0446\u0438\u044E \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 5
      }, undefined)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, undefined), isSuccess && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.success,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.successTitle,
        children: "\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 6
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.description,
        children: "\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432 \u0431\u0443\u0434\u0435\u0442 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 6
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_close_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.close,
        onClick: () => setIsSuccess(false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 6
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }, undefined), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.error,
      children: ["\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_close_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.close,
        onClick: () => setIsError(undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 6
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./components/ReviewForm/close.svg":
/*!*****************************************!*\
  !*** ./components/ReviewForm/close.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgClose(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 12,
    height: 12,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    stroke: "#1CC37E",
    strokeWidth: 3,
    d: "M2.061 1.939l8.485 8.486M1.939 10.425l8.486-8.486"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgClose);

/***/ }),

/***/ "./components/Search/Search.module.css":
/*!*********************************************!*\
  !*** ./components/Search/Search.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"search": "Search_search__8E97I",
	"inputSearch": "Search_inputSearch__3vedU",
	"button": "Search_button__2Me6i"
};


/***/ }),

/***/ "./components/Search/Search.tsx":
/*!**************************************!*\
  !*** ./components/Search/Search.tsx ***!
  \**************************************/
/*! exports provided: Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Input/Input */ "./components/Input/Input.tsx");
/* harmony import */ var _Search_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Search.module.css */ "./components/Search/Search.module.css");
/* harmony import */ var _Search_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Search_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var _glass_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./glass.svg */ "./components/Search/glass.svg");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\Search\\Search.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Search = (_ref) => {
  let {
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("");
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search
      }
    });
  };

  const handleKeyDown = e => {
    if (e.key == "Enter") {
      goToSearch();
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, _Search_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.search)
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Input_Input__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      className: _Search_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.inputSearch,
      placeholder: "\u041F\u043E\u0438\u0441\u043A...",
      value: search,
      onChange: e => setSearch(e.target.value),
      onKeyDown: handleKeyDown
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      appearance: "primary",
      className: _Search_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,
      onClick: goToSearch,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_glass_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./components/Search/glass.svg":
/*!*************************************!*\
  !*** ./components/Search/glass.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgGlass(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 15,
    height: 15,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M14.772 13.663L11.074 9.95a5.913 5.913 0 001.472-3.894C12.546 2.716 9.732 0 6.273 0 2.814 0 0 2.717 0 6.056c0 3.34 2.814 6.057 6.273 6.057a6.36 6.36 0 003.594-1.096l3.726 3.74a.827.827 0 00.59.243.83.83 0 00.566-.22.772.772 0 00.023-1.117zM6.272 1.58c2.558 0 4.637 2.008 4.637 4.476 0 2.469-2.08 4.477-4.636 4.477-2.557 0-4.637-2.008-4.637-4.477 0-2.468 2.08-4.476 4.637-4.476z",
    fill: "#fff"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgGlass);

/***/ }),

/***/ "./components/Sort/Sort.module.css":
/*!*****************************************!*\
  !*** ./components/Sort/Sort.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sortIcon": "Sort_sortIcon__3bwoK",
	"active": "Sort_active__1xADx",
	"sort": "Sort_sort__3eCh2"
};


/***/ }),

/***/ "./components/Sort/Sort.props.ts":
/*!***************************************!*\
  !*** ./components/Sort/Sort.props.ts ***!
  \***************************************/
/*! exports provided: SortEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortEnum", function() { return SortEnum; });
let SortEnum;

(function (SortEnum) {
  SortEnum[SortEnum["Rating"] = 0] = "Rating";
  SortEnum[SortEnum["Price"] = 1] = "Price";
})(SortEnum || (SortEnum = {}));

/***/ }),

/***/ "./components/Sort/Sort.tsx":
/*!**********************************!*\
  !*** ./components/Sort/Sort.tsx ***!
  \**********************************/
/*! exports provided: Sort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sort", function() { return Sort; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sort_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sort.props */ "./components/Sort/Sort.props.ts");
/* harmony import */ var _Sort_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sort.module.css */ "./components/Sort/Sort.module.css");
/* harmony import */ var _Sort_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Sort_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sort_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sort.svg */ "./components/Sort/sort.svg");

var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\Sort\\Sort.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Sort = (_ref) => {
  let {
    sort,
    setSort,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["sort", "setSort", "className"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Sort_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sort, className)
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      onClick: () => setSort(_Sort_props__WEBPACK_IMPORTED_MODULE_1__["SortEnum"].Rating),
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        [_Sort_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.active]: sort == _Sort_props__WEBPACK_IMPORTED_MODULE_1__["SortEnum"].Rating
      }),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sort_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: _Sort_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sortIcon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, undefined), "\u041F\u043E \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0443"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      onClick: () => setSort(_Sort_props__WEBPACK_IMPORTED_MODULE_1__["SortEnum"].Price),
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        [_Sort_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.active]: sort == _Sort_props__WEBPACK_IMPORTED_MODULE_1__["SortEnum"].Price
      }),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sort_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: _Sort_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sortIcon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, undefined), "\u041F\u043E \u0446\u0435\u043D\u0435"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./components/Sort/sort.svg":
/*!**********************************!*\
  !*** ./components/Sort/sort.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _rect, _rect2, _rect3;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgSort(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 20,
    height: 13,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _rect || (_rect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    width: 20,
    height: 3,
    rx: 1.5,
    fill: "#7653FC"
  })), _rect2 || (_rect2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    y: 5,
    width: 14,
    height: 3,
    rx: 1.5,
    fill: "#7653FC"
  })), _rect3 || (_rect3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    y: 10,
    width: 8,
    height: 3,
    rx: 1.5,
    fill: "#7653FC"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgSort);

/***/ }),

/***/ "./components/Tag/Tag.module.css":
/*!***************************************!*\
  !*** ./components/Tag/Tag.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"tag": "Tag_tag__11TEs",
	"s": "Tag_s__1PVV-",
	"m": "Tag_m__2inzq",
	"ghost": "Tag_ghost__1uvh6",
	"red": "Tag_red__1xC_m",
	"grey": "Tag_grey__1Qy6F",
	"green": "Tag_green__hpixn",
	"primary": "Tag_primary__1-SdR"
};


/***/ }),

/***/ "./components/Tag/Tag.tsx":
/*!********************************!*\
  !*** ./components/Tag/Tag.tsx ***!
  \********************************/
/*! exports provided: Tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tag_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tag.module.css */ "./components/Tag/Tag.module.css");
/* harmony import */ var _Tag_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Tag_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\Tag\\Tag.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Tag = (_ref) => {
  let {
    size = "s",
    children,
    color = "ghost",
    href,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["size", "children", "color", "href", "className"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Tag_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tag, className, {
      [_Tag_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.s]: size == "s",
      [_Tag_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.m]: size == "m",
      [_Tag_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ghost]: color == "ghost",
      [_Tag_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.red]: color == "red",
      [_Tag_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.grey]: color == "grey",
      [_Tag_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.green]: color == "green",
      [_Tag_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.primary]: color == "primary"
    })
  }, props), {}, {
    children: href ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: href,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 12
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: children
    }, void 0, false)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./components/Textarea/Textarea.module.css":
/*!*************************************************!*\
  !*** ./components/Textarea/Textarea.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textareaWrapper": "Textarea_textareaWrapper__3CfUL",
	"textarea": "Textarea_textarea__1bUYO",
	"input": "Textarea_input__3g4nk",
	"error": "Textarea_error__dWH7F",
	"errorMessage": "Textarea_errorMessage__1i5zL"
};


/***/ }),

/***/ "./components/Textarea/Textarea.tsx":
/*!******************************************!*\
  !*** ./components/Textarea/Textarea.tsx ***!
  \******************************************/
/*! exports provided: Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Textarea_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Textarea.module.css */ "./components/Textarea/Textarea.module.css");
/* harmony import */ var _Textarea_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Textarea_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\Textarea\\Textarea.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Textarea = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])((_ref, ref) => {
  let {
    className,
    error
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "error"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Textarea_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textareaWrapper, className),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", _objectSpread({
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Textarea_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textarea, {
        [_Textarea_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.error]: error
      }),
      ref: ref
    }, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, undefined), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: _Textarea_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.errorMessage,
      children: error.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 14
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, undefined);
});

/***/ }),

/***/ "./components/Up/Up.module.css":
/*!*************************************!*\
  !*** ./components/Up/Up.module.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"up": "Up_up__3KzNw"
};


/***/ }),

/***/ "./components/Up/Up.tsx":
/*!******************************!*\
  !*** ./components/Up/Up.tsx ***!
  \******************************/
/*! exports provided: Up */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Up", function() { return Up; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Up_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Up.module.css */ "./components/Up/Up.module.css");
/* harmony import */ var _Up_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Up_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useScrollY__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useScrollY */ "./components/hooks/useScrollY.ts");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .. */ "./components/index.ts");

var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\Up\\Up.tsx";





const Up = () => {
  const controls = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])();
  const y = Object(_hooks_useScrollY__WEBPACK_IMPORTED_MODULE_2__["useScrollY"])();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    controls.start({
      opacity: y / document.body.scrollHeight
    });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    className: _Up_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.up,
    animate: controls,
    initial: {
      opacity: 0
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_5__["ButtonIcon"], {
      appearance: "primary",
      icon: "up",
      onClick: scrollToTop
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./components/hooks/useScrollY.ts":
/*!****************************************!*\
  !*** ./components/hooks/useScrollY.ts ***!
  \****************************************/
/*! exports provided: useScrollY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScrollY", function() { return useScrollY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useScrollY = () => {
  const isBrowser = false;
  const {
    0: scroolY,
    1: setScrollY
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const handleScroll = () => {
    const currentScrollY = isBrowser ? window.scrollY : 0;
    setScrollY(currentScrollY);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return scroolY;
};

/***/ }),

/***/ "./components/index.ts":
/*!*****************************!*\
  !*** ./components/index.ts ***!
  \*****************************/
/*! exports provided: Htag, Button, P, Tag, Raiting, Card, Advantages, Sort, Input, Textarea, Search, Product, Divider, Review, ReviewForm, Up, ButtonIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Htag_Htag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Htag/Htag */ "./components/Htag/Htag.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Htag", function() { return _Htag_Htag__WEBPACK_IMPORTED_MODULE_0__["Htag"]; });

/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button/Button */ "./components/Button/Button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button_Button__WEBPACK_IMPORTED_MODULE_1__["Button"]; });

/* harmony import */ var _P_P__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./P/P */ "./components/P/P.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "P", function() { return _P_P__WEBPACK_IMPORTED_MODULE_2__["P"]; });

/* harmony import */ var _Tag_Tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tag/Tag */ "./components/Tag/Tag.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return _Tag_Tag__WEBPACK_IMPORTED_MODULE_3__["Tag"]; });

/* harmony import */ var _Raiting_Raiting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Raiting/Raiting */ "./components/Raiting/Raiting.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Raiting", function() { return _Raiting_Raiting__WEBPACK_IMPORTED_MODULE_4__["Raiting"]; });

/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Card/Card */ "./components/Card/Card.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _Card_Card__WEBPACK_IMPORTED_MODULE_5__["Card"]; });

/* harmony import */ var _Advantages_Advantages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Advantages/Advantages */ "./components/Advantages/Advantages.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Advantages", function() { return _Advantages_Advantages__WEBPACK_IMPORTED_MODULE_6__["Advantages"]; });

/* harmony import */ var _Sort_Sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Sort/Sort */ "./components/Sort/Sort.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sort", function() { return _Sort_Sort__WEBPACK_IMPORTED_MODULE_7__["Sort"]; });

/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Input/Input */ "./components/Input/Input.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input_Input__WEBPACK_IMPORTED_MODULE_8__["Input"]; });

/* harmony import */ var _Textarea_Textarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Textarea/Textarea */ "./components/Textarea/Textarea.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _Textarea_Textarea__WEBPACK_IMPORTED_MODULE_9__["Textarea"]; });

/* harmony import */ var _Search_Search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Search/Search */ "./components/Search/Search.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _Search_Search__WEBPACK_IMPORTED_MODULE_10__["Search"]; });

/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Product/Product */ "./components/Product/Product.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return _Product_Product__WEBPACK_IMPORTED_MODULE_11__["Product"]; });

/* harmony import */ var _Divider_Divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Divider/Divider */ "./components/Divider/Divider.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return _Divider_Divider__WEBPACK_IMPORTED_MODULE_12__["Divider"]; });

/* harmony import */ var _Review_Review__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Review/Review */ "./components/Review/Review.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Review", function() { return _Review_Review__WEBPACK_IMPORTED_MODULE_13__["Review"]; });

/* harmony import */ var _ReviewForm_ReviewForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ReviewForm/ReviewForm */ "./components/ReviewForm/ReviewForm.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewForm", function() { return _ReviewForm_ReviewForm__WEBPACK_IMPORTED_MODULE_14__["ReviewForm"]; });

/* harmony import */ var _Up_Up__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Up/Up */ "./components/Up/Up.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Up", function() { return _Up_Up__WEBPACK_IMPORTED_MODULE_15__["Up"]; });

/* harmony import */ var _ButtonIcon_ButtonIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ButtonIcon/ButtonIcon */ "./components/ButtonIcon/ButtonIcon.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonIcon", function() { return _ButtonIcon_ButtonIcon__WEBPACK_IMPORTED_MODULE_16__["ButtonIcon"]; });



















/***/ }),

/***/ "./context/app.context.tsx":
/*!*********************************!*\
  !*** ./context/app.context.tsx ***!
  \*********************************/
/*! exports provided: AppContext, AppContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContextProvider", function() { return AppContextProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/toppage.interface */ "./interfaces/toppage.interface.ts");

var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\context\\app.context.tsx";


const AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({
  menu: [],
  firstCategory: _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_2__["TopLevelCategory"].Courses
});
const AppContextProvider = ({
  menu,
  firstCategory,
  children
}) => {
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(menu);

  const setMenu = newMenu => {
    setMenuState(newMenu);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AppContext.Provider, {
    value: {
      menu: menuState,
      firstCategory,
      setMenu
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 12
  }, undefined);
};

/***/ }),

/***/ "./helpers/api.ts":
/*!************************!*\
  !*** ./helpers/api.ts ***!
  \************************/
/*! exports provided: API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
const API = {
  topPage: {
    find: "https://courses-top.ru" + "/api/top-page/find",
    byAlias: "https://courses-top.ru" + "/api/top-page/byAlias/"
  },
  product: {
    find: "https://courses-top.ru" + "/api/product/find"
  },
  review: {
    createDemo: "https://courses-top.ru" + "/api/review/create-demo"
  }
};

/***/ }),

/***/ "./helpers/helpers.tsx":
/*!*****************************!*\
  !*** ./helpers/helpers.tsx ***!
  \*****************************/
/*! exports provided: firstLevelMenu, priceRu, declOfNum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstLevelMenu", function() { return firstLevelMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "priceRu", function() { return priceRu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declOfNum", function() { return declOfNum; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_courses_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/courses.svg */ "./helpers/icons/courses.svg");
/* harmony import */ var _icons_services_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/services.svg */ "./helpers/icons/services.svg");
/* harmony import */ var _icons_books_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/books.svg */ "./helpers/icons/books.svg");
/* harmony import */ var _icons_products_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/products.svg */ "./helpers/icons/products.svg");
/* harmony import */ var _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interfaces/toppage.interface */ "./interfaces/toppage.interface.ts");

var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\helpers\\helpers.tsx";





const firstLevelMenu = [{
  route: "courses",
  name: "Курсы",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_courses_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 46
  }, undefined),
  id: _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_5__["TopLevelCategory"].Courses
}, {
  route: "services",
  name: "Сервисы",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_services_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 49
  }, undefined),
  id: _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_5__["TopLevelCategory"].Services
}, {
  route: "books",
  name: "Книги",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_books_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 44
  }, undefined),
  id: _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_5__["TopLevelCategory"].Books
}, {
  route: "products",
  name: "Продукты",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_products_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 50
  }, undefined),
  id: _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_5__["TopLevelCategory"].Products
}];
const priceRu = price => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").concat(" ₽");
const declOfNum = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
};

/***/ }),

/***/ "./helpers/icons/books.svg":
/*!*********************************!*\
  !*** ./helpers/icons/books.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgBooks(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 24,
    height: 23,
    fill: "#787D85",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M5.06 3.75h-.002a.73.73 0 00-.502.195.648.648 0 00-.21.476v10.06c0 .369.321.67.716.67 1.666.004 4.457.33 6.382 2.218V6.841a.613.613 0 00-.098-.34C9.766 4.117 6.73 3.754 5.06 3.75zM19.654 14.48V4.42c0-.18-.074-.349-.21-.476a.73.73 0 00-.502-.194h-.001c-1.67.003-4.707.366-6.287 2.752a.613.613 0 00-.098.34v10.527c1.925-1.888 4.716-2.214 6.382-2.217.395-.002.716-.302.716-.671z"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M21.285 6.07h-.52v8.41c0 .943-.818 1.71-1.825 1.713-1.413.003-3.742.262-5.392 1.726 2.853-.655 5.862-.229 7.576.137a.751.751 0 00.607-.13.652.652 0 00.269-.523V6.74c0-.37-.321-.671-.715-.671zM3.234 14.48V6.07h-.518c-.395 0-.716.3-.716.67v10.662c0 .206.098.397.269.524a.75.75 0 00.607.13c1.714-.366 4.723-.792 7.576-.137-1.65-1.464-3.98-1.723-5.393-1.726-1.006-.002-1.825-.77-1.825-1.712z"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgBooks);

/***/ }),

/***/ "./helpers/icons/courses.svg":
/*!***********************************!*\
  !*** ./helpers/icons/courses.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgCourses(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 24,
    height: 24,
    fill: "#787D85",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M12 12.892l-6.328-2.541v1.836c0 2.004 2.72 3.515 6.328 3.515s6.328-1.51 6.328-3.515V10.35L12 12.892z"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M24 16.405c0-.915-.59-1.688-1.406-1.98V7.143L24 6.562 12 1.747 0 6.562l12 4.815 9.188-3.67v6.719a2.106 2.106 0 00-1.407 1.98c0 .838.495 1.557 1.205 1.897l-1.168 3.505 1.333.445.74-2.218.74 2.218 1.333-.445-1.169-3.505A2.106 2.106 0 0024 16.405z"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCourses);

/***/ }),

/***/ "./helpers/icons/products.svg":
/*!************************************!*\
  !*** ./helpers/icons/products.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgProducts(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 24,
    height: 23,
    fill: "#787D85",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M15.09 4.168l-8.168 3.92-3.247-1.497 8.024-3.714a.697.697 0 01.585 0l2.806 1.291zM20.316 6.59l-8.311 3.86-3.113-1.437-.45-.214 8.177-3.92.45.214 3.247 1.498zM11.338 11.563l-.008 8.123-7.961-3.895A.648.648 0 013 15.218V7.703l3.373 1.558v2.74c0 .35.306.641.675.641.37 0 .675-.29.675-.642V9.895l.45.205 3.165 1.463zM20.991 7.712l-8.303 3.843-.008 8.122L21 15.604l-.009-7.892z"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgProducts);

/***/ }),

/***/ "./helpers/icons/services.svg":
/*!************************************!*\
  !*** ./helpers/icons/services.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgServices(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 24,
    height: 24,
    fill: "#787D85",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M19.654 8.762a4.78 4.78 0 00.082-.887C19.736 5.187 17.49 3 14.726 3c-1.763 0-3.397.914-4.295 2.367-1.213-.383-2.456-.219-3.481.468S5.314 7.61 5.264 8.798C3.917 9.42 3 10.746 3 12.208c0 .254.063.502.112.742C3.472 14.719 5.08 16 6.934 16h11.132C20.215 16 22 14.299 22 12.208c0-1.478-.93-2.809-2.346-3.446z"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgServices);

/***/ }),

/***/ "./interfaces/toppage.interface.ts":
/*!*****************************************!*\
  !*** ./interfaces/toppage.interface.ts ***!
  \*****************************************/
/*! exports provided: TopLevelCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopLevelCategory", function() { return TopLevelCategory; });
let TopLevelCategory;

(function (TopLevelCategory) {
  TopLevelCategory[TopLevelCategory["Courses"] = 0] = "Courses";
  TopLevelCategory[TopLevelCategory["Services"] = 1] = "Services";
  TopLevelCategory[TopLevelCategory["Books"] = 2] = "Books";
  TopLevelCategory[TopLevelCategory["Products"] = 3] = "Products";
})(TopLevelCategory || (TopLevelCategory = {}));

/***/ }),

/***/ "./layout/Footer/Footer.module.css":
/*!*****************************************!*\
  !*** ./layout/Footer/Footer.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "Footer_footer__3l6yP"
};


/***/ }),

/***/ "./layout/Footer/Footer.tsx":
/*!**********************************!*\
  !*** ./layout/Footer/Footer.tsx ***!
  \**********************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.module.css */ "./layout/Footer/Footer.module.css");
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\layout\\Footer\\Footer.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Footer = (_ref) => {
  let {
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer)
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["OwlTop \xA9 2020 - ", Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(), "yyyy"), " \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "#",
      target: "_blank",
      children: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "#",
      target: "_blank",
      children: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./layout/Header/Header.module.css":
/*!*****************************************!*\
  !*** ./layout/Header/Header.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "Header_header__3jBud",
	"mobileMenu": "Header_mobileMenu__1Fd2I",
	"menuClose": "Header_menuClose__AHduM"
};


/***/ }),

/***/ "./layout/Header/Header.tsx":
/*!**********************************!*\
  !*** ./layout/Header/Header.tsx ***!
  \**********************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.module.css */ "./layout/Header/Header.module.css");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logo.svg */ "./layout/logo.svg");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components */ "./components/index.ts");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Sidebar/Sidebar */ "./layout/Sidebar/Sidebar.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\layout\\Header\\Header.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const Header = (_ref) => {
  let {
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className"]);

  const {
    0: isOpened,
    1: setIsOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    setIsOpened(false);
  }, [router]);
  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20
      }
    },
    closed: {
      opacity: 0,
      x: "100%"
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header)
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_logo_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_5__["ButtonIcon"], {
      appearance: "white",
      icon: "menu",
      onClick: () => setIsOpened(true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].div, {
      className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.mobileMenu,
      variants: variants,
      initial: "closed",
      animate: isOpened ? "opened" : "closed",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_7__["Sidebar"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_5__["ButtonIcon"], {
        className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.menuClose,
        appearance: "white",
        icon: "close",
        onClick: () => setIsOpened(false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./layout/Layout.module.css":
/*!**********************************!*\
  !*** ./layout/Layout.module.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "Layout_wrapper__3IvBy",
	"header": "Layout_header__2M2F8",
	"sidebar": "Layout_sidebar__205yA",
	"body": "Layout_body__3X1_m",
	"footer": "Layout_footer__196lU",
	"skipLink": "Layout_skipLink__8x5aj",
	"displayed": "Layout_displayed__16VJ-"
};


/***/ }),

/***/ "./layout/Layout.tsx":
/*!***************************!*\
  !*** ./layout/Layout.tsx ***!
  \***************************/
/*! exports provided: withLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withLayout", function() { return withLayout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.module.css */ "./layout/Layout.module.css");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header/Header */ "./layout/Header/Header.tsx");
/* harmony import */ var _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar/Sidebar */ "./layout/Sidebar/Sidebar.tsx");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer/Footer */ "./layout/Footer/Footer.tsx");
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/app.context */ "./context/app.context.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components */ "./components/index.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\layout\\Layout.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const Layout = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  const {
    0: isSkipLinkDisplayed,
    1: setIsSkipLinkDisplayed
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const bodyRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  const skipContentAction = key => {
    if (key.code == "Space" || key.code == "Enter") {
      var _bodyRef$current;

      key.preventDefault();
      (_bodyRef$current = bodyRef.current) === null || _bodyRef$current === void 0 ? void 0 : _bodyRef$current.focus();
    }

    setIsSkipLinkDisplayed(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      tabIndex: 1,
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.skipLink, {
        [_Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.displayed]: isSkipLinkDisplayed
      }),
      onFocus: () => setIsSkipLinkDisplayed(true),
      onKeyDown: skipContentAction,
      children: "\u0421\u0440\u0430\u0437\u0443 \u043A \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044E"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header_Header__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_4__["Sidebar"], {
      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.body,
      ref: bodyRef,
      tabIndex: 0,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__["Footer"], {
      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_7__["Up"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 3
  }, undefined);
};

const withLayout = Component => {
  return function withLayoutnComponent(props) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_app_context__WEBPACK_IMPORTED_MODULE_6__["AppContextProvider"], {
      menu: props.menu,
      firstCategory: props.firstCategory,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Layout, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }, this);
  };
};

/***/ }),

/***/ "./layout/Menu/Menu.module.css":
/*!*************************************!*\
  !*** ./layout/Menu/Menu.module.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"firstLevel": "Menu_firstLevel__hBZRC",
	"firstLevelActive": "Menu_firstLevelActive__2M7tl",
	"secondLevel": "Menu_secondLevel__1KUlK",
	"secondBlock": "Menu_secondBlock__3sffl",
	"secondLevelBlock": "Menu_secondLevelBlock__3gEEJ",
	"thirdLevel": "Menu_thirdLevel__3DGzo",
	"thirdLevelActive": "Menu_thirdLevelActive__17LGQ"
};


/***/ }),

/***/ "./layout/Menu/Menu.tsx":
/*!******************************!*\
  !*** ./layout/Menu/Menu.tsx ***!
  \******************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/app.context */ "./context/app.context.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Menu.module.css */ "./layout/Menu/Menu.module.css");
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/helpers */ "./helpers/helpers.tsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\layout\\Menu\\Menu.tsx";








const Menu = () => {
  const {
    menu,
    setMenu,
    firstCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_app_context__WEBPACK_IMPORTED_MODULE_2__["AppContext"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    hidden: {
      marginBottom: 0
    }
  };
  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29
    },
    hidden: {
      opacity: 0,
      height: 0
    }
  };

  const openSecondLevelKey = (key, secondCategory) => {
    if (key.code == "Space" || key.code == "Enter") {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const openSecondLevel = secondCategory => {
    setMenu && setMenu(menu.map(m => {
      if (m._id.secondCategory == secondCategory) {
        m.isOpened = !m.isOpened;
      }

      return m;
    }));
  };

  const buildFirstLevel = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: _helpers_helpers__WEBPACK_IMPORTED_MODULE_7__["firstLevelMenu"].map(m => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: `/${m.route}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.firstLevel, {
                [_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.firstLevelActive]: m.id == firstCategory
              }),
              children: [m.icon, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: m.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 10
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 7
        }, undefined), m.id == firstCategory && buildSecondLevel(m)]
      }, m.route, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 6
      }, undefined))
    }, void 0, false);
  };

  const buildSecondLevel = menuItem => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.secondBlock,
      children: menu.map(m => {
        var _m$isOpened;

        if (m.pages.map(p => p.alias).includes(router.asPath.split("/")[2])) {
          m.isOpened = true;
        }

        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            tabIndex: 0,
            onKeyDown: key => openSecondLevelKey(key, m._id.secondCategory),
            className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.secondLevel,
            onClick: () => openSecondLevel(m._id.secondCategory),
            children: m._id.secondCategory
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 8
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__["motion"].div, {
            layout: true,
            variants: variants,
            initial: m.isOpened ? "visible" : "hidden",
            animate: m.isOpened ? "visible" : "hidden",
            className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.secondLevelBlock),
            children: buildThirdLevel(m.pages, menuItem.route, (_m$isOpened = m.isOpened) !== null && _m$isOpened !== void 0 ? _m$isOpened : false)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 8
          }, undefined)]
        }, m._id.secondCategory, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 7
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 4
    }, undefined);
  };

  const buildThirdLevel = (pages, route, isOpened) => {
    return pages.map(p => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__["motion"].div, {
      variants: variantsChildren,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: `/${route}/${p.alias}`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          tabIndex: isOpened ? 0 : -1,
          className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.thirdLevel, {
            [_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
          }),
          children: p.category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 5
      }, undefined)
    }, p._id, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 4
    }, undefined));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menu,
    children: buildFirstLevel()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./layout/Sidebar/Sidebar.module.css":
/*!*******************************************!*\
  !*** ./layout/Sidebar/Sidebar.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sidebar": "Sidebar_sidebar__3cjmk"
};


/***/ }),

/***/ "./layout/Sidebar/Sidebar.tsx":
/*!************************************!*\
  !*** ./layout/Sidebar/Sidebar.tsx ***!
  \************************************/
/*! exports provided: Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.module.css */ "./layout/Sidebar/Sidebar.module.css");
/* harmony import */ var _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Menu/Menu */ "./layout/Menu/Menu.tsx");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logo.svg */ "./layout/logo.svg");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components */ "./components/index.ts");

var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\layout\\Sidebar\\Sidebar.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Sidebar = (_ref) => {
  let {
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar)
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_logo_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_6__["Search"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__["Menu"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./layout/logo.svg":
/*!*************************!*\
  !*** ./layout/logo.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgLogo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 159,
    height: 44,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M71.14 23.695c0 2.22-.37 4.16-1.11 5.82-.72 1.64-1.83 2.92-3.33 3.84-1.5.92-3.42 1.38-5.76 1.38-2.32 0-4.24-.46-5.76-1.38-1.5-.92-2.62-2.21-3.36-3.87-.72-1.66-1.08-3.6-1.08-5.82s.36-4.15 1.08-5.79c.74-1.64 1.86-2.91 3.36-3.81 1.52-.92 3.45-1.38 5.79-1.38 2.32 0 4.23.46 5.73 1.38 1.5.9 2.61 2.18 3.33 3.84.74 1.64 1.11 3.57 1.11 5.79zm-15.63 0c0 2.24.43 4.01 1.29 5.31.86 1.28 2.24 1.92 4.14 1.92 1.94 0 3.33-.64 4.17-1.92.84-1.3 1.26-3.07 1.26-5.31 0-2.26-.42-4.03-1.26-5.31-.84-1.28-2.22-1.92-4.14-1.92-1.92 0-3.31.64-4.17 1.92-.86 1.28-1.29 3.05-1.29 5.31zm46.084-10.68l-5.46 21.42h-5.16l-2.91-11.25c-.06-.22-.14-.55-.24-.99-.08-.44-.18-.92-.3-1.44-.1-.52-.19-1.01-.27-1.47-.08-.48-.14-.85-.18-1.11-.02.26-.08.63-.18 1.11-.08.46-.17.95-.27 1.47-.1.5-.2.98-.3 1.44-.1.44-.18.78-.24 1.02l-2.88 11.22h-5.16l-5.46-21.42h4.47l2.73 11.7c.12.46.25 1.04.39 1.74s.27 1.4.39 2.1c.12.7.21 1.29.27 1.77.06-.5.15-1.09.27-1.77.12-.7.24-1.37.36-2.01.14-.66.26-1.17.36-1.53l3.12-12h4.29l3.12 12c.1.34.21.84.33 1.5a52.947 52.947 0 01.66 3.81c.06-.5.15-1.09.27-1.77.12-.7.25-1.4.39-2.1.16-.7.29-1.28.39-1.74l2.73-11.7h4.47zm2.694 21.42v-21.42h4.53v17.67h8.7v3.75h-13.23zM128.352 32.835c.368 0 .704-.024 1.008-.072.32-.048.608-.12.864-.216v.792a5.586 5.586 0 01-.864.24c-.32.064-.68.096-1.08.096-1.104 0-1.896-.312-2.376-.936-.48-.624-.72-1.536-.72-2.736v-8.472h-1.92v-.624l1.92-.216.288-3.072h.648v3.096h4.032v.816h-4.032v8.4c0 .944.16 1.664.48 2.16.336.496.92.744 1.752.744zm15.051-5.76c0 1.28-.208 2.416-.624 3.408-.4.992-1.016 1.776-1.848 2.352-.832.56-1.872.84-3.12.84-1.2 0-2.216-.28-3.048-.84-.816-.56-1.44-1.336-1.872-2.328-.416-.992-.624-2.136-.624-3.432 0-2.032.496-3.64 1.488-4.824 1.008-1.184 2.4-1.776 4.176-1.776 1.264 0 2.296.288 3.096.864.8.576 1.392 1.36 1.776 2.352.4.992.6 2.12.6 3.384zm-10.176 0c0 1.712.376 3.104 1.128 4.176.752 1.056 1.904 1.584 3.456 1.584 1.072 0 1.952-.24 2.64-.72.688-.496 1.192-1.176 1.512-2.04.32-.864.48-1.864.48-3 0-1.088-.152-2.064-.456-2.928-.304-.864-.792-1.552-1.464-2.064-.656-.512-1.52-.768-2.592-.768-1.52 0-2.688.512-3.504 1.536-.8 1.008-1.2 2.416-1.2 4.224zm19.225-6.6c1.664 0 2.936.552 3.816 1.656.896 1.104 1.344 2.72 1.344 4.848 0 2.144-.472 3.8-1.416 4.968-.944 1.152-2.256 1.728-3.936 1.728-1.2 0-2.16-.272-2.88-.816-.704-.544-1.2-1.2-1.488-1.968h-.048c.016.48.024.976.024 1.488.016.496.024.976.024 1.44v5.232h-.912V20.715h.768l.096 2.784h.048a4.496 4.496 0 01.888-1.464c.4-.464.904-.84 1.512-1.128.608-.288 1.328-.432 2.16-.432zm-.072.84c-1.488 0-2.608.496-3.36 1.488-.736.976-1.112 2.368-1.128 4.176v.144c0 1.936.376 3.376 1.128 4.32.752.928 1.816 1.392 3.192 1.392 1.408 0 2.496-.504 3.264-1.512.784-1.008 1.176-2.456 1.176-4.344 0-3.776-1.424-5.664-4.272-5.664zM41 1.744a1.19 1.19 0 00-1.201-1.18 1.19 1.19 0 00-1.201 1.18c0 1.279-1.137 2.359-2.483 2.359h-5.418c-3.09-1.544-6.608-2.359-10.197-2.359-3.59 0-7.108.815-10.197 2.359H4.9c-1.353 0-2.497-1.08-2.497-2.36a1.19 1.19 0 00-1.2-1.178A1.19 1.19 0 000 1.744v3.538c0 2.188.882 4.25 2.484 5.812C.856 13.706 0 16.569 0 19.434c0 9.754 9.196 17.69 20.5 17.69S41 29.188 41 19.434c0-2.86-.854-5.72-2.477-8.33C40.053 9.612 41 7.553 41 5.283V1.744zM20.5 4.103c1.914 0 3.802.258 5.6.757a10.807 10.807 0 00-5.593 4.998 10.804 10.804 0 00-5.598-5 20.943 20.943 0 015.591-.755zm0 19.579c.45.732 1.01 1.39 1.661 1.952L20.5 28.71l-1.661-3.076a8.355 8.355 0 001.661-1.952zm-7.207 1.649c-3.312 0-6.006-2.645-6.006-5.897 0-3.251 2.694-5.897 6.006-5.897 3.312 0 6.006 2.646 6.006 5.897 0 3.252-2.694 5.897-6.006 5.897zm8.408-5.897c0-.094.003-.187.007-.28a1.15 1.15 0 00.014-.172v-.022c.247-3.03 2.836-5.423 5.985-5.423 3.312 0 6.006 2.646 6.006 5.897 0 3.252-2.694 5.897-6.006 5.897-3.312 0-6.006-2.645-6.006-5.897zM2.426 5.806A4.967 4.967 0 004.9 6.46h5.992c2.248 0 4.361.86 5.95 2.423a8.137 8.137 0 012.38 4.7 8.452 8.452 0 00-5.175-2.372 1.222 1.222 0 00-.28-.033H8.503a6.21 6.21 0 01-3.525-1.087 1.187 1.187 0 00-.396-.296c-1.202-.976-2.01-2.393-2.156-3.99zm36.172 13.628c0 8.454-8.119 15.331-18.098 15.331-9.98 0-18.098-6.877-18.098-15.33 0-2.36.694-4.732 2.015-6.921a8.568 8.568 0 003.06.963c-1.596 1.504-2.592 3.618-2.592 5.957 0 4.552 3.772 8.255 8.408 8.255a8.49 8.49 0 003.526-.761l2.62 4.852c.208.386.616.627 1.061.627.445 0 .853-.241 1.061-.627l2.62-4.852a8.49 8.49 0 003.526.761c4.636 0 8.408-3.703 8.408-8.255 0-2.338-.995-4.452-2.591-5.956a8.593 8.593 0 003.064-.957c1.318 2.188 2.01 4.556 2.01 6.913zm-2.2-9.619a1.196 1.196 0 00-.357.266 6.184 6.184 0 01-3.53 1.098h-5.263c-.093 0-.184.011-.272.031a8.452 8.452 0 00-5.18 2.358 8.138 8.138 0 012.378-4.684 8.431 8.431 0 015.95-2.423h5.991c.873 0 1.716-.226 2.458-.649-.148 1.606-.963 3.027-2.174 4.003z",
    fill: "#7653FC"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M13.5 16.683l1.01 2.591h3.27l-2.645 1.602 1.01 2.59-2.645-1.6-2.645 1.6 1.01-2.59-2.645-1.602h3.27l1.01-2.59zM27.5 16.683l1.01 2.591h3.27l-2.645 1.602 1.01 2.59-2.645-1.6-2.645 1.6 1.01-2.59-2.645-1.602h3.27l1.01-2.59z",
    fill: "#7653FC"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgLogo);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains,
  enableBlurryPlaceholder: configEnableBlurryPlaceholder
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["courses-top.ru"],"enableBlurryPlaceholder":false} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(element, placeholder) {
  if (placeholder === 'blur' && element) {
    if (element.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      element.style.backgroundImage = 'none';
    } else {
      element.onload = () => {
        element.style.backgroundImage = 'none';
      };
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (!configEnableBlurryPlaceholder) {
    placeholder = 'empty';
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  const MIN_IMG_SIZE_FOR_PLACEHOLDER = 5000;
  const tooSmallForBlurryPlaceholder = widthInt && heightInt && widthInt * heightInt < MIN_IMG_SIZE_FOR_PLACEHOLDER;
  const shouldShowBlurryPlaceholder = placeholder === 'blur' && !tooSmallForBlurryPlaceholder;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, shouldShowBlurryPlaceholder ? {
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./page-components/TopPageComponent/TopPageComponent.module.css":
/*!**********************************************************************!*\
  !*** ./page-components/TopPageComponent/TopPageComponent.module.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "TopPageComponent_title__24ziI",
	"hhTitle": "TopPageComponent_hhTitle__20tZ_",
	"seo": "TopPageComponent_seo__120-v"
};


/***/ }),

/***/ "./page-components/TopPageComponent/TopPageComponent.tsx":
/*!***************************************************************!*\
  !*** ./page-components/TopPageComponent/TopPageComponent.tsx ***!
  \***************************************************************/
/*! exports provided: TopPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopPageComponent", function() { return TopPageComponent; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./components/index.ts");
/* harmony import */ var _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopPageComponent.module.css */ "./page-components/TopPageComponent/TopPageComponent.module.css");
/* harmony import */ var _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_HhData_HhData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/HhData/HhData */ "./components/HhData/HhData.tsx");
/* harmony import */ var _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../interfaces/toppage.interface */ "./interfaces/toppage.interface.ts");
/* harmony import */ var _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Sort/Sort.props */ "./components/Sort/Sort.props.ts");
/* harmony import */ var _sort_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sort.reducer */ "./page-components/TopPageComponent/sort.reducer.ts");


var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\page-components\\TopPageComponent\\TopPageComponent.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const TopPageComponent = ({
  page,
  products,
  firstCategory
}) => {
  const {
    0: {
      products: sortedProducts,
      sort
    },
    1: dispathSort
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_sort_reducer__WEBPACK_IMPORTED_MODULE_7__["sortReducer"], {
    products,
    sort: _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_6__["SortEnum"].Rating
  });

  const setSort = sort => {
    dispathSort({
      type: sort
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispathSort({
      type: "reset",
      initialState: products
    });
  }, [products]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Htag"], {
        tag: "h1",
        children: page.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, undefined), products && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
        color: "grey",
        size: "m",
        children: products.length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 6
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Sort"], {
        sort: sort,
        setSort: setSort
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: sortedProducts && sortedProducts.map(p => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Product"], {
        layout: true,
        product: p
      }, p._id, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 32
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.hhTitle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Htag"], {
        tag: "h2",
        children: ["\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438 - ", page.category]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
        color: "red",
        size: "m",
        children: "hh.ru"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, undefined), firstCategory == _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_5__["TopLevelCategory"].Courses && page.hh && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_HhData_HhData__WEBPACK_IMPORTED_MODULE_4__["HhData"], _objectSpread({}, page.hh), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 61
    }, undefined), page.advantages && page.advantages.length > 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Htag"], {
        tag: "h2",
        children: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 6
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Advantages"], {
        advantages: page.advantages
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 6
      }, undefined)]
    }, void 0, true), page.seoText && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.seo,
      dangerouslySetInnerHTML: {
        __html: page.seoText
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Htag"], {
      tag: "h2",
      children: "\u041F\u043E\u043B\u0443\u0447\u0430\u0435\u043C\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 4
    }, undefined), page.tags.map(t => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
      color: "primary",
      children: t
    }, t, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./page-components/TopPageComponent/sort.reducer.ts":
/*!**********************************************************!*\
  !*** ./page-components/TopPageComponent/sort.reducer.ts ***!
  \**********************************************************/
/*! exports provided: sortReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortReducer", function() { return sortReducer; });
/* harmony import */ var _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Sort/Sort.props */ "./components/Sort/Sort.props.ts");

const sortReducer = (state, action) => {
  switch (action.type) {
    case _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__["SortEnum"].Rating:
      return {
        sort: _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__["SortEnum"].Rating,
        products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
      };

    case _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__["SortEnum"].Price:
      return {
        sort: _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__["SortEnum"].Price,
        products: state.products.sort((a, b) => a.price > b.price ? 1 : -1)
      };

    case "reset":
      return {
        sort: _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__["SortEnum"].Rating,
        products: action.initialState
      };

    default:
      throw new Error('Неверный тип сортировки');
  }
};

/***/ }),

/***/ "./page-components/index.ts":
/*!**********************************!*\
  !*** ./page-components/index.ts ***!
  \**********************************/
/*! exports provided: TopPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopPageComponent_TopPageComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopPageComponent/TopPageComponent */ "./page-components/TopPageComponent/TopPageComponent.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopPageComponent", function() { return _TopPageComponent_TopPageComponent__WEBPACK_IMPORTED_MODULE_0__["TopPageComponent"]; });



/***/ }),

/***/ "./pages/[type]/[alias].tsx":
/*!**********************************!*\
  !*** ./pages/[type]/[alias].tsx ***!
  \**********************************/
/*! exports provided: default, getStaticPaths, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/Layout */ "./layout/Layout.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/helpers */ "./helpers/helpers.tsx");
/* harmony import */ var _page_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../page-components */ "./page-components/index.ts");
/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/api */ "./helpers/api.ts");


var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\pages\\[type]\\[alias].tsx";






const firstCategory = 0;

function TopPage({
  firstCategory,
  page,
  products
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_page_components__WEBPACK_IMPORTED_MODULE_5__["TopPageComponent"], {
      firstCategory: firstCategory,
      page: page,
      products: products
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["withLayout"])(TopPage));
const getStaticPaths = async () => {
  let paths = [];

  for (const m of _helpers_helpers__WEBPACK_IMPORTED_MODULE_4__["firstLevelMenu"]) {
    const {
      data: menu
    } = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("https://courses-top.ru" + "/api/top-page/find", {
      firstCategory: m.id
    });
    paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
  }

  return {
    paths,
    fallback: false
  };
};
const getStaticProps = async ({
  params
}) => {
  if (!params) {
    return {
      notFound: true
    };
  }

  const firstCategoryItem = _helpers_helpers__WEBPACK_IMPORTED_MODULE_4__["firstLevelMenu"].find(m => m.route == params.type);

  if (!firstCategoryItem) {
    return {
      notFound: true
    };
  }

  try {
    const {
      data: menu
    } = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_helpers_api__WEBPACK_IMPORTED_MODULE_6__["API"].topPage.find, {
      firstCategory: firstCategoryItem.id
    });

    if (menu.length == 0) {
      return {
        notFound: true
      };
    }

    const {
      data: page
    } = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_helpers_api__WEBPACK_IMPORTED_MODULE_6__["API"].topPage.byAlias + params.alias);
    const {
      data: products
    } = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_helpers_api__WEBPACK_IMPORTED_MODULE_6__["API"].product.find, {
      category: page.category,
      limit: 10
    });
    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products
      }
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "date-fns/locale":
/*!**********************************!*\
  !*** external "date-fns/locale" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/locale");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWR2YW50YWdlcy9BZHZhbnRhZ2VzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BZHZhbnRhZ2VzL0FkdmFudGFnZXMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWR2YW50YWdlcy9jaGVjay5zdmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi9hcnJvdy5zdmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b25JY29uL0J1dHRvbkljb24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbkljb24vQnV0dG9uSWNvbi5wcm9wcy50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbkljb24vQnV0dG9uSWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b25JY29uL2Nsb3NlLnN2ZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbkljb24vbWVudS5zdmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b25JY29uL3VwLnN2ZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQvQ2FyZC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZC9DYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RpdmlkZXIvRGl2aWRlci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGl2aWRlci9EaXZpZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hoRGF0YS9IaERhdGEubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hoRGF0YS9IaERhdGEudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGhEYXRhL3JhdGUuc3ZnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSHRhZy9IdGFnLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IdGFnL0h0YWcudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW5wdXQvSW5wdXQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0lucHV0L0lucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1AvUC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUC9QLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3QvUHJvZHVjdC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZHVjdC9Qcm9kdWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JhaXRpbmcvUmFpdGluZy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmFpdGluZy9SYWl0aW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JhaXRpbmcvc3Rhci5zdmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXZpZXcvUmV2aWV3Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXZpZXcvUmV2aWV3LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jldmlldy91c2VyLnN2ZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jldmlld0Zvcm0vUmV2aWV3Rm9ybS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmV2aWV3Rm9ybS9SZXZpZXdGb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jldmlld0Zvcm0vY2xvc2Uuc3ZnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoL1NlYXJjaC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoL1NlYXJjaC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2gvZ2xhc3Muc3ZnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU29ydC9Tb3J0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Tb3J0L1NvcnQucHJvcHMudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Tb3J0L1NvcnQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU29ydC9zb3J0LnN2ZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhZy9UYWcubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhZy9UYWcudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGV4dGFyZWEvVGV4dGFyZWEubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RleHRhcmVhL1RleHRhcmVhLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VwL1VwLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VcC9VcC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob29rcy91c2VTY3JvbGxZLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hcHAuY29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9oZWxwZXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2ljb25zL2Jvb2tzLnN2ZyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2ljb25zL2NvdXJzZXMuc3ZnIiwid2VicGFjazovLy8uL2hlbHBlcnMvaWNvbnMvcHJvZHVjdHMuc3ZnIiwid2VicGFjazovLy8uL2hlbHBlcnMvaWNvbnMvc2VydmljZXMuc3ZnIiwid2VicGFjazovLy8uL2ludGVyZmFjZXMvdG9wcGFnZS5pbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vbGF5b3V0L0Zvb3Rlci9Gb290ZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9sYXlvdXQvRm9vdGVyL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vbGF5b3V0L0hlYWRlci9IZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9sYXlvdXQvSGVhZGVyL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbGF5b3V0L0xheW91dC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2xheW91dC9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL2xheW91dC9NZW51L01lbnUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9sYXlvdXQvTWVudS9NZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9sYXlvdXQvU2lkZWJhci9TaWRlYmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbGF5b3V0L1NpZGViYXIvU2lkZWJhci50c3giLCJ3ZWJwYWNrOi8vLy4vbGF5b3V0L2xvZ28uc3ZnIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9pbWFnZS50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZS1jb21wb25lbnRzL1RvcFBhZ2VDb21wb25lbnQvVG9wUGFnZUNvbXBvbmVudC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2UtY29tcG9uZW50cy9Ub3BQYWdlQ29tcG9uZW50L1RvcFBhZ2VDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3BhZ2UtY29tcG9uZW50cy9Ub3BQYWdlQ29tcG9uZW50L3NvcnQucmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9wYWdlLWNvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvW3R5cGVdL1thbGlhc10udHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRhdGUtZm5zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnMvbG9jYWxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ob29rLWZvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkFkdmFudGFnZXMiLCJhZHZhbnRhZ2VzIiwibWFwIiwiYSIsInN0eWxlcyIsImFkdmFuYXRnZSIsInRpdGxlIiwidmxpbmUiLCJkZXNjcmlwdGlvbiIsIl9pZCIsIkJ1dHRvbiIsImFwcGVhcmFuY2UiLCJhcnJvdyIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJzY2FsZSIsInVzZU1vdGlvblZhbHVlIiwiY24iLCJidXR0b24iLCJwcmltYXJ5IiwiZ2hvc3QiLCJkb3duIiwiaWNvbnMiLCJ1cCIsImNsb3NlIiwibWVudSIsIkJ1dHRvbkljb24iLCJpY29uIiwiSWNvbkNvbXAiLCJ3aGl0ZSIsIkNhcmQiLCJmb3J3YXJkUmVmIiwicmVmIiwiY29sb3IiLCJjYXJkIiwiYmx1ZSIsIkRpdmlkZXIiLCJociIsIkhoRGF0YSIsImNvdW50IiwianVuaW9yU2FsYXJ5IiwibWlkZGxlU2FsYXJ5Iiwic2VuaW9yU2FsYXJ5IiwiaGgiLCJjb3VudFZhbHVlIiwic2FsYXJ5Iiwic2FsYXJ5VmFsdWUiLCJwcmljZVJ1IiwicmF0ZSIsImZpbGxlZCIsIkh0YWciLCJ0YWciLCJoMSIsImgyIiwiaDMiLCJJbnB1dCIsImVycm9yIiwiaW5wdXRXcmFwcGVyIiwiaW5wdXQiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwiUCIsInNpemUiLCJwIiwicyIsIm0iLCJsIiwiUHJvZHVjdCIsIm1vdGlvbiIsInByb2R1Y3QiLCJpc1Jldmlld09wZW5lZCIsInNldElzUmV2aWV3T3BlbmVkIiwidXNlU3RhdGUiLCJyZXZpZXdSZWYiLCJ1c2VSZWYiLCJ2YXJpYW50cyIsInZpc2libGUiLCJvcGFjaXR5IiwiaGVpZ2h0IiwiaGlkZGVuIiwic2Nyb2xsVG9SZXZpZXciLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwibG9nbyIsInByb2Nlc3MiLCJpbWFnZSIsInByaWNlIiwib2xkUHJpY2UiLCJjcmVkaXQiLCJtb250aCIsInJhaXRpbmciLCJyZXZpZXdBdmciLCJpbml0aWFsUmF0aW5nIiwidGFncyIsImNhdGVnb3JpZXMiLCJjIiwiY2F0ZWdvcnkiLCJwcmljZVRpdGxlIiwiY3JlZGl0VGl0bGUiLCJyYXRlVGl0bGUiLCJyZXZpZXdDb3VudCIsImRlY2xPZk51bSIsImZlYXR1cmUiLCJjaGFyYWN0ZXJpc3RpY3MiLCJjaGFyYWN0ZXJpc3RpY3NOYW1lIiwibmFtZSIsImNoYXJhY3RlcmlzdGljc0RvdHMiLCJjaGFyYWN0ZXJpc3RpY3NWYWx1ZSIsInZhbHVlIiwiYWR2QmxvY2siLCJhZHZUaXRsZSIsImRpc2FkdmFudGFnZXMiLCJocjIiLCJhY3Rpb25zIiwicmV2aWV3QnV0dG9uIiwicmV2aWV3cyIsInIiLCJSYWl0aW5nIiwiaXNFZGl0YWJsZSIsInNldFJhaXRpbmciLCJyYWl0aW5nQXJyYXkiLCJzZXRSYWl0aW5nQXJyYXkiLCJBcnJheSIsImZpbGwiLCJ1c2VFZmZlY3QiLCJjb25zdHJ1Y3RSYWl0aW5nIiwiY3VycmVudFJhaXRpbmciLCJ1cGRhdGVkQXJyYXkiLCJlbCIsImluZGV4Iiwic3RhciIsImVkaXRhYmxlIiwiY2hhbmdlRGlzcGxheSIsIm9uQ2xpY2siLCJlIiwiaGFuZGVsU3BhY2UiLCJjb2RlIiwicmFpdGluZ1dyYXBwZXIiLCJSZXZpZXciLCJyZXZpZXciLCJjcmVhdGVkQXQiLCJyYXRpbmciLCJ1c2VyIiwiZGF0ZSIsImZvcm1hdCIsIkRhdGUiLCJsb2NhbGUiLCJydSIsIlJldmlld0Zvcm0iLCJwcm9kdWN0SWQiLCJpc1N1Y2Nlc3MiLCJzZXRJc1N1Y2Nlc3MiLCJzZXRJc0Vycm9yIiwicmVnaXN0ZXIiLCJjb250cm9sIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwicmVzZXQiLCJ1c2VGb3JtIiwib25TdWJtaXQiLCJmb3JtRGF0YSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJBUEkiLCJjcmVhdGVEZW1vIiwicmV2aWV3Rm9ybSIsInJlcXVpcmVkIiwiZmllbGQiLCJvbkNoYW5nZSIsInN1Ym1pdCIsImluZm8iLCJzdWNjZXNzIiwic3VjY2Vzc1RpdGxlIiwidW5kZWZpbmVkIiwiU2VhcmNoIiwic2VhcmNoIiwic2V0U2VhcmNoIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ29Ub1NlYXJjaCIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwicSIsImhhbmRsZUtleURvd24iLCJrZXkiLCJpbnB1dFNlYXJjaCIsInRhcmdldCIsIlNvcnRFbnVtIiwiU29ydCIsInNvcnQiLCJzZXRTb3J0IiwiUmF0aW5nIiwiYWN0aXZlIiwic29ydEljb24iLCJQcmljZSIsIlRhZyIsImhyZWYiLCJyZWQiLCJncmV5IiwiZ3JlZW4iLCJUZXh0YXJlYSIsInRleHRhcmVhV3JhcHBlciIsInRleHRhcmVhIiwiVXAiLCJjb250cm9scyIsInVzZUFuaW1hdGlvbiIsInkiLCJ1c2VTY3JvbGxZIiwic3RhcnQiLCJkb2N1bWVudCIsImJvZHkiLCJzY3JvbGxIZWlnaHQiLCJzY3JvbGxUb1RvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiaXNCcm93c2VyIiwic2Nyb29sWSIsInNldFNjcm9sbFkiLCJoYW5kbGVTY3JvbGwiLCJjdXJyZW50U2Nyb2xsWSIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJBcHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImZpcnN0Q2F0ZWdvcnkiLCJUb3BMZXZlbENhdGVnb3J5IiwiQ291cnNlcyIsIkFwcENvbnRleHRQcm92aWRlciIsIm1lbnVTdGF0ZSIsInNldE1lbnVTdGF0ZSIsInNldE1lbnUiLCJuZXdNZW51IiwidG9wUGFnZSIsImZpbmQiLCJieUFsaWFzIiwiZmlyc3RMZXZlbE1lbnUiLCJyb3V0ZSIsImlkIiwiU2VydmljZXMiLCJCb29rcyIsIlByb2R1Y3RzIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiY29uY2F0IiwibnVtYmVyIiwidGl0bGVzIiwiY2FzZXMiLCJGb290ZXIiLCJmb290ZXIiLCJIZWFkZXIiLCJpc09wZW5lZCIsInNldElzT3BlbmVkIiwib3BlbmVkIiwieCIsInRyYW5zaXRpb24iLCJzdGlmZm5lc3MiLCJjbG9zZWQiLCJoZWFkZXIiLCJtb2JpbGVNZW51IiwibWVudUNsb3NlIiwiTGF5b3V0IiwiaXNTa2lwTGlua0Rpc3BsYXllZCIsInNldElzU2tpcExpbmtEaXNwbGF5ZWQiLCJib2R5UmVmIiwic2tpcENvbnRlbnRBY3Rpb24iLCJwcmV2ZW50RGVmYXVsdCIsImZvY3VzIiwid3JhcHBlciIsInNraXBMaW5rIiwiZGlzcGxheWVkIiwic2lkZWJhciIsIndpdGhMYXlvdXQiLCJDb21wb25lbnQiLCJ3aXRoTGF5b3V0bkNvbXBvbmVudCIsIk1lbnUiLCJ1c2VDb250ZXh0IiwibWFyZ2luQm90dG9tIiwid2hlbiIsInN0YWdnZXJDaGlsZHJlbiIsInZhcmlhbnRzQ2hpbGRyZW4iLCJvcGVuU2Vjb25kTGV2ZWxLZXkiLCJzZWNvbmRDYXRlZ29yeSIsIm9wZW5TZWNvbmRMZXZlbCIsImJ1aWxkRmlyc3RMZXZlbCIsImZpcnN0TGV2ZWwiLCJmaXJzdExldmVsQWN0aXZlIiwiYnVpbGRTZWNvbmRMZXZlbCIsIm1lbnVJdGVtIiwic2Vjb25kQmxvY2siLCJwYWdlcyIsImFsaWFzIiwiaW5jbHVkZXMiLCJhc1BhdGgiLCJzcGxpdCIsInNlY29uZExldmVsIiwic2Vjb25kTGV2ZWxCbG9jayIsImJ1aWxkVGhpcmRMZXZlbCIsInRoaXJkTGV2ZWwiLCJ0aGlyZExldmVsQWN0aXZlIiwiU2lkZWJhciIsImdsb2JhbCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJkZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJsb2FkZXIiLCJwYXRoIiwiZG9tYWlucyIsImVuYWJsZUJsdXJyeVBsYWNlaG9sZGVyIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsInNpemVzIiwibGF5b3V0Iiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwid2lkdGhzIiwia2luZCIsIndpZHRoIiwidyIsInNyY1NldCIsImdldFdpZHRocyIsImxhc3QiLCJpIiwic3JjIiwibG9hZCIsInJvb3QiLCJWQUxJRF9MT0FERVJTIiwiY29uZmlnTG9hZGVyIiwicGxhY2Vob2xkZXIiLCJlbGVtZW50IiwidW5vcHRpbWl6ZWQiLCJwcmlvcml0eSIsImFsbCIsInJlc3QiLCJ1bnNpemVkIiwiQm9vbGVhbiIsIkpTT04iLCJsb2FkaW5nIiwiaXNMYXp5Iiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid2lkdGhJbnQiLCJnZXRJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiTUlOX0lNR19TSVpFX0ZPUl9QTEFDRUhPTERFUiIsInRvb1NtYWxsRm9yQmx1cnJ5UGxhY2Vob2xkZXIiLCJzaG91bGRTaG93Qmx1cnJ5UGxhY2Vob2xkZXIiLCJpbWdTdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJibHVyRGF0YVVSTCIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImlzTmFOIiwid3JhcHBlclN0eWxlIiwib3ZlcmZsb3ciLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdBdHRyaWJ1dGVzIiwiZ2VuZXJhdGVJbWdBdHRycyIsInF1YWxpdHkiLCJzZXRSZWYiLCJyZW1vdmVQbGFjZWhvbGRlciIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm5vcm1hbGl6ZVNyYyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJjb25zb2xlIiwiY29uZmlnRG9tYWlucyIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicHJlZmV0Y2hlZCIsImVyciIsImN1ckxvY2FsZSIsIm9wdGlvbnMiLCJldmVudCIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInJlc29sdmVkQXMiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJsaW5rQ2xpY2tlZCIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJsaW5rIiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsImNhbmNlbGxlZCIsIm9uQnVpbGRNYW5pZmVzdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIndpdGhGdXR1cmUiLCJvbkVudHJ5cG9pbnQiLCJmbiIsImV4cG9ydHMiLCJjb21wb25lbnQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImVudHJpZXMiLCJjYWxsYmFjayIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInN0cmlwT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJhZGRCYXNlUGF0aCIsInByZXBhcmVkQXMiLCJjbGVhblBhdGhuYW1lIiwicGFnZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJpc1ByZXZpZXciLCJpc0xvY2FsZURvbWFpbiIsIl9pZHgiLCJzdGF0ZSIsImluaXRpYWwiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwicmVsb2FkIiwiYmFjayIsInByZXBhcmVVcmxBcyIsInNob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5vdEZvdW5kUm91dGUiLCJhcHBDb21wIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsImZvcmNlZFNjcm9sbCIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJUb3BQYWdlQ29tcG9uZW50IiwicHJvZHVjdHMiLCJzb3J0ZWRQcm9kdWN0cyIsImRpc3BhdGhTb3J0IiwidXNlUmVkdWNlciIsInNvcnRSZWR1Y2VyIiwidHlwZSIsImluaXRpYWxTdGF0ZSIsImxlbmd0aCIsImhoVGl0bGUiLCJzZW9UZXh0Iiwic2VvIiwiX19odG1sIiwidCIsImFjdGlvbiIsImIiLCJFcnJvciIsIlRvcFBhZ2UiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmxhdE1hcCIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJmaXJzdENhdGVnb3J5SXRlbSIsImxpbWl0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEsZ0c7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7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OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL1t0eXBlXS9bYWxpYXNdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9bdHlwZV0vW2FsaWFzXS50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhZHZhbmF0Z2VcIjogXCJBZHZhbnRhZ2VzX2FkdmFuYXRnZV9fMWRySFlcIixcblx0XCJ0aXRsZVwiOiBcIkFkdmFudGFnZXNfdGl0bGVfX2Ryemg0XCIsXG5cdFwidmxpbmVcIjogXCJBZHZhbnRhZ2VzX3ZsaW5lX18xRndTeFwiXG59O1xuIiwiaW1wb3J0IHsgQWR2YW50YWdlc1Byb3BzIH0gZnJvbSBcIi4vQWR2YW5hdGdlcy5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0FkdmFudGFnZXMubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQ2hlY2tJY29uIGZyb20gXCIuL2NoZWNrLnN2Z1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQWR2YW50YWdlcyA9ICh7IGFkdmFudGFnZXMgfTogQWR2YW50YWdlc1Byb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7YWR2YW50YWdlcy5tYXAoYSA9PiAoXHJcblx0XHRcdFx0PGRpdiBrZXk9e2EuX2lkfSBjbGFzc05hbWU9e3N0eWxlcy5hZHZhbmF0Z2V9PlxyXG5cdFx0XHRcdFx0PENoZWNrSWNvbj48L0NoZWNrSWNvbj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PnthLnRpdGxlfTwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy52bGluZX0vPlxyXG5cdFx0XHRcdFx0PGRpdj57YS5kZXNjcmlwdGlvbn08L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KSl9XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG4iLCJ2YXIgX2NpcmNsZSwgX2csIF9kZWZzO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnQ2hlY2socHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogNTAsXG4gICAgaGVpZ2h0OiA1MCxcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX2NpcmNsZSB8fCAoX2NpcmNsZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogMjUsXG4gICAgY3k6IDI1LFxuICAgIHI6IDI1LFxuICAgIGZpbGw6IFwiI0M4RjhFNFwiXG4gIH0pKSwgX2cgfHwgKF9nID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICBjbGlwUGF0aDogXCJ1cmwoI2NoZWNrX3N2Z19fY2xpcDApXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0zNi4yOTcgMjAuMzY4bC0xMi42NjEgMTIuNjZhMi40MDIgMi40MDIgMCAwMS0zLjM5NyAwbC02LjUzNi02LjUzNmEyLjQwMiAyLjQwMiAwIDAxMy4zOTctMy4zOTdsNC44MzggNC44MzhMMzIuOSAxNi45NzFhMi40MDIgMi40MDIgMCAwMTMuMzk3IDMuMzk3elwiLFxuICAgIGZpbGw6IFwiIzFEQzM3RVwiXG4gIH0pKSksIF9kZWZzIHx8IChfZGVmcyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGVmc1wiLCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImNsaXBQYXRoXCIsIHtcbiAgICBpZDogXCJjaGVja19zdmdfX2NsaXAwXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBmaWxsOiBcIiNmZmZcIixcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDEzIDEzKVwiLFxuICAgIGQ6IFwiTTAgMGgyNHYyNEgwelwiXG4gIH0pKSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQ2hlY2s7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnV0dG9uXCI6IFwiQnV0dG9uX2J1dHRvbl9fc0wzdERcIixcblx0XCJwcmltYXJ5XCI6IFwiQnV0dG9uX3ByaW1hcnlfXzJ6YWwxXCIsXG5cdFwiZ2hvc3RcIjogXCJCdXR0b25fZ2hvc3RfXzJTUWN4XCIsXG5cdFwiYXJyb3dcIjogXCJCdXR0b25fYXJyb3dfXy1DeHR3XCIsXG5cdFwiZG93blwiOiBcIkJ1dHRvbl9kb3duX18zdU5HZ1wiXG59O1xuIiwiaW1wb3J0IHsgQnV0dG9uUHJvcHMgfSBmcm9tIFwiLi9CdXR0b24ucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9CdXR0b24ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQXJyb3dJY29uIGZyb20gXCIuL2Fycm93LnN2Z1wiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgbW90aW9uLCB1c2VNb3Rpb25WYWx1ZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHsgYXBwZWFyYW5jZSwgYXJyb3cgPSBcIm5vbmVcIiwgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogQnV0dG9uUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0Y29uc3Qgc2NhbGUgPSB1c2VNb3Rpb25WYWx1ZSgxKTtcclxuXHRcclxuXHRyZXR1cm4gKFxyXG5cdFx0PG1vdGlvbi5idXR0b25cclxuXHRcdFx0d2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNSB9fVxyXG5cdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlcy5idXR0b24sIGNsYXNzTmFtZSwge1xyXG5cdFx0XHRcdFtzdHlsZXMucHJpbWFyeV06IGFwcGVhcmFuY2UgPT0gXCJwcmltYXJ5XCIsXHJcblx0XHRcdFx0W3N0eWxlcy5naG9zdF06IGFwcGVhcmFuY2UgPT0gXCJnaG9zdFwiLFxyXG5cdFx0XHR9KX1cclxuXHRcdFx0c3R5bGU9e3sgc2NhbGUgfX1cclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG5cdFx0PlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIHthcnJvdyAhPSBcIm5vbmVcIiAmJiA8c3BhbiBjbGFzc05hbWU9e2NuKHN0eWxlcy5hcnJvdywge1xyXG4gICAgICAgICAgICAgICAgW3N0eWxlcy5kb3duXTogYXJyb3cgPT0gXCJkb3duXCJcclxuICAgICAgICAgICAgfSl9PiBcclxuXHRcdFx0XHQ8QXJyb3dJY29uPjwvQXJyb3dJY29uPlxyXG5cdFx0XHQ8L3NwYW4+fVxyXG5cdFx0PC9tb3Rpb24uYnV0dG9uPlxyXG5cdCk7XHJcbn07XHJcbiIsInZhciBfcGF0aDtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z0Fycm93KHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDYsXG4gICAgaGVpZ2h0OiAxMCxcbiAgICBmaWxsOiBcIiMzQjQzNEVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk01LjcxNSA0LjYxTDEuMjY1LjE2QS41NDMuNTQzIDAgMDAuODc4IDBhLjU0My41NDMgMCAwMC0uMzg2LjE2TC4xNjQuNDg3YS41NDguNTQ4IDAgMDAwIC43NzRMMy45IDQuOTk4LjE2IDguNzM5YS41NDMuNTQzIDAgMDAtLjE2LjM4N2MwIC4xNDYuMDU3LjI4NC4xNi4zODdsLjMyNy4zMjdjLjEwMy4xMDMuMjQuMTYuMzg3LjE2YS41NDMuNTQzIDAgMDAuMzg3LS4xNmw0LjQ1NC00LjQ1NGEuNTQ0LjU0NCAwIDAwLjE2LS4zODguNTQ0LjU0NCAwIDAwLS4xNi0uMzg4elwiXG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0Fycm93OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvblwiOiBcIkJ1dHRvbkljb25fYnV0dG9uX19sWFJHU1wiLFxuXHRcInByaW1hcnlcIjogXCJCdXR0b25JY29uX3ByaW1hcnlfXzEwNm9FXCIsXG5cdFwid2hpdGVcIjogXCJCdXR0b25JY29uX3doaXRlX18taVJCYlwiXG59O1xuIiwiaW1wb3J0IHsgQnV0dG9uSFRNTEF0dHJpYnV0ZXMsIERldGFpbGVkSFRNTFByb3BzLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1cCBmcm9tIFwiLi91cC5zdmdcIlxyXG5pbXBvcnQgY2xvc2UgZnJvbSBcIi4vY2xvc2Uuc3ZnXCJcclxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbWVudS5zdmdcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGljb25zID0ge1xyXG4gICAgdXAsXHJcbiAgICBjbG9zZSxcclxuICAgIG1lbnVcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSWNvbk5hbWUgPSBrZXlvZiB0eXBlb2YgaWNvbnM7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvbkljb25Qcm9wcyBleHRlbmRzIERldGFpbGVkSFRNTFByb3BzPEJ1dHRvbkhUTUxBdHRyaWJ1dGVzPEhUTUxCdXR0b25FbGVtZW50PiwgSFRNTEJ1dHRvbkVsZW1lbnQ+IHtcclxuICAgIGljb246IEljb25OYW1lO1xyXG4gICAgYXBwZWFyYW5jZTogXCJwcmltYXJ5XCIgfCBcIndoaXRlXCI7XHJcbn0iLCJpbXBvcnQgeyBCdXR0b25JY29uUHJvcHMsIGljb25zIH0gZnJvbSBcIi4vQnV0dG9uSWNvbi5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0J1dHRvbkljb24ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25JY29uID0gKHsgYXBwZWFyYW5jZSwgaWNvbiwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBCdXR0b25JY29uUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0Y29uc3QgSWNvbkNvbXAgPSBpY29uc1tpY29uXVxyXG5cdFxyXG5cdHJldHVybiAoXHJcblx0XHQ8YnV0dG9uXHJcblx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLmJ1dHRvbiwgY2xhc3NOYW1lLCB7XHJcblx0XHRcdFx0W3N0eWxlcy5wcmltYXJ5XTogYXBwZWFyYW5jZSA9PSBcInByaW1hcnlcIixcclxuXHRcdFx0XHRbc3R5bGVzLndoaXRlXTogYXBwZWFyYW5jZSA9PSBcIndoaXRlXCIsXHJcblx0XHRcdH0pfVxyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XHJcblx0XHQ+XHJcblx0XHRcdDxJY29uQ29tcD48L0ljb25Db21wPlxyXG5cdFx0PC9idXR0b24+XHJcblx0KTtcclxufTtcclxuIiwidmFyIF9yZWN0LCBfcmVjdDI7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdDbG9zZShwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiAxOSxcbiAgICBoZWlnaHQ6IDE5LFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcmVjdCB8fCAoX3JlY3QgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICAgIHk6IDE2LjUxLFxuICAgIHdpZHRoOiAyMyxcbiAgICBoZWlnaHQ6IDMsXG4gICAgcng6IDEuNSxcbiAgICB0cmFuc2Zvcm06IFwicm90YXRlKC00NSAwIDE2LjUxKVwiLFxuICAgIGZpbGw6IFwiIzc2NTNGQ1wiXG4gIH0pKSwgX3JlY3QyIHx8IChfcmVjdDIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICAgIHg6IDIuMjUzLFxuICAgIHdpZHRoOiAyMyxcbiAgICBoZWlnaHQ6IDMsXG4gICAgcng6IDEuNSxcbiAgICB0cmFuc2Zvcm06IFwicm90YXRlKDQ1IDIuMjUzIDApXCIsXG4gICAgZmlsbDogXCIjNzY1M0ZDXCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQ2xvc2U7IiwidmFyIF9yZWN0LCBfcmVjdDIsIF9yZWN0MztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z01lbnUocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogMjAsXG4gICAgaGVpZ2h0OiAxNyxcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX3JlY3QgfHwgKF9yZWN0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgICB3aWR0aDogMjAsXG4gICAgaGVpZ2h0OiAzLFxuICAgIHJ4OiAxLjUsXG4gICAgZmlsbDogXCIjNzY1M0ZDXCJcbiAgfSkpLCBfcmVjdDIgfHwgKF9yZWN0MiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gICAgeTogNyxcbiAgICB3aWR0aDogMjAsXG4gICAgaGVpZ2h0OiAzLFxuICAgIHJ4OiAxLjUsXG4gICAgZmlsbDogXCIjNzY1M0ZDXCJcbiAgfSkpLCBfcmVjdDMgfHwgKF9yZWN0MyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gICAgeTogMTQsXG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMyxcbiAgICByeDogMS41LFxuICAgIGZpbGw6IFwiIzc2NTNGQ1wiXG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z01lbnU7IiwidmFyIF9yZWN0LCBfcGF0aDtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z1VwKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDIxLFxuICAgIGhlaWdodDogMTMsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9yZWN0IHx8IChfcmVjdCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gICAgeTogOS45LFxuICAgIHdpZHRoOiAxNCxcbiAgICBoZWlnaHQ6IDMsXG4gICAgcng6IDEuNSxcbiAgICB0cmFuc2Zvcm06IFwicm90YXRlKC00NSAwIDkuOSlcIixcbiAgICBmaWxsOiBcIiNmZmZcIlxuICB9KSksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNOS4wNiAxLjIzMmExLjUgMS41IDAgMDEyLjEyMiAwTDE4Ljk2IDkuMDFhMS41IDEuNSAwIDExLTIuMTIxIDIuMTIyTDkuMDYgMy4zNTRhMS41IDEuNSAwIDAxMC0yLjEyMnpcIixcbiAgICBmaWxsOiBcIiNmZmZcIlxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdVcDsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJkXCI6IFwiQ2FyZF9jYXJkX19LMENSWFwiLFxuXHRcImJsdWVcIjogXCJDYXJkX2JsdWVfXzFXMGwzXCJcbn07XG4iLCJpbXBvcnQgeyBDYXJkUHJvcHMgfSBmcm9tIFwiLi9DYXJkLnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ2FyZC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBGb3J3YXJkZWRSZWYsIGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkID0gZm9yd2FyZFJlZigoeyBjb2xvciA9IFwid2hpdGVcIiwgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogQ2FyZFByb3BzLCByZWY6IEZvcndhcmRlZFJlZjxIVE1MRGl2RWxlbWVudD4pOiBKU1guRWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMuY2FyZCwgY2xhc3NOYW1lLCB7XHJcblx0XHRcdFtzdHlsZXMuYmx1ZV06IGNvbG9yID09IFwiYmx1ZVwiXHJcblx0XHR9KX1cclxuXHRcdFx0ey4uLnByb3BzfVxyXG5cdFx0XHRyZWY9e3JlZn1cclxuXHRcdD5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufSk7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhyXCI6IFwiRGl2aWRlcl9ocl9fM0RwUFFcIlxufTtcbiIsImltcG9ydCB7IERpdmlkZXJQcm9wcyB9IGZyb20gXCIuL0RpdmlkZXIucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9EaXZpZGVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRGl2aWRlciA9ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogRGl2aWRlclByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8aHIgY2xhc3NOYW1lPXtjbiggY2xhc3NOYW1lLCBzdHlsZXMuaHIgKX0gey4uLnByb3BzfS8+XHJcblx0KTtcclxufTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGhcIjogXCJIaERhdGFfaGhfXzN2dHJMXCIsXG5cdFwiY291bnRcIjogXCJIaERhdGFfY291bnRfXzF4OU55XCIsXG5cdFwic2FsYXJ5XCI6IFwiSGhEYXRhX3NhbGFyeV9fMk5pN05cIixcblx0XCJ0aXRsZVwiOiBcIkhoRGF0YV90aXRsZV9fMzNjeGhcIixcblx0XCJjb3VudFZhbHVlXCI6IFwiSGhEYXRhX2NvdW50VmFsdWVfXzNjYWo3XCIsXG5cdFwic2FsYXJ5VmFsdWVcIjogXCJIaERhdGFfc2FsYXJ5VmFsdWVfXzJxT25pXCIsXG5cdFwicmF0ZVwiOiBcIkhoRGF0YV9yYXRlX18yVEloc1wiLFxuXHRcImZpbGxlZFwiOiBcIkhoRGF0YV9maWxsZWRfX25zU094XCJcbn07XG4iLCJpbXBvcnQgeyBIaERhdGFQcm9wcyB9IGZyb20gXCIuL0hoRGF0YS5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0hoRGF0YS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSYXRlSWNvbiBmcm9tIFwiLi9yYXRlLnN2Z1wiXHJcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgcHJpY2VSdSB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBIaERhdGEgPSAoeyBjb3VudCwganVuaW9yU2FsYXJ5LCBtaWRkbGVTYWxhcnksIHNlbmlvclNhbGFyeSB9OiBIaERhdGFQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oaH0+XHJcblx0XHRcdDxDYXJkIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50fT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT7QktGB0LXQs9C+INCy0LDQutCw0L3RgdC40Lk8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50VmFsdWV9Pntjb3VudH08L2Rpdj5cclxuXHRcdFx0PC9DYXJkPlxyXG5cdFx0XHQ8Q2FyZCBjbGFzc05hbWU9e3N0eWxlcy5zYWxhcnl9PlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT7QndCw0YfQsNC70YzQvdGL0Lk8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2FsYXJ5VmFsdWV9PntwcmljZVJ1KGp1bmlvclNhbGFyeSl9PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhdGV9PlxyXG5cdFx0XHRcdFx0XHQ8UmF0ZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuZmlsbGVkfT48L1JhdGVJY29uPlxyXG5cdFx0XHRcdFx0XHQ8UmF0ZUljb24+PC9SYXRlSWNvbj5cclxuXHRcdFx0XHRcdFx0PFJhdGVJY29uPjwvUmF0ZUljb24+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+0KHRgNC10LTQvdC40Lk8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2FsYXJ5VmFsdWV9PntwcmljZVJ1KG1pZGRsZVNhbGFyeSl9PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhdGV9PlxyXG5cdFx0XHRcdFx0XHQ8UmF0ZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuZmlsbGVkfT48L1JhdGVJY29uPlxyXG5cdFx0XHRcdFx0XHQ8UmF0ZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuZmlsbGVkfT48L1JhdGVJY29uPlxyXG5cdFx0XHRcdFx0XHQ8UmF0ZUljb24+PC9SYXRlSWNvbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT7Qn9GA0L7RhNC10YHRgdC40L7QvdCw0Ls8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2FsYXJ5VmFsdWV9PntwcmljZVJ1KHNlbmlvclNhbGFyeSl9PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhdGV9PlxyXG5cdFx0XHRcdFx0XHQ8UmF0ZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuZmlsbGVkfT48L1JhdGVJY29uPlxyXG5cdFx0XHRcdFx0XHQ8UmF0ZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuZmlsbGVkfT48L1JhdGVJY29uPlxyXG5cdFx0XHRcdFx0XHQ8UmF0ZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuZmlsbGVkfT48L1JhdGVJY29uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQ2FyZD5cclxuICAgICAgICA8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG4iLCJ2YXIgX2NpcmNsZSwgX3BhdGg7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdSYXRlKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMjAsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9jaXJjbGUgfHwgKF9jaXJjbGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IDEwLFxuICAgIGN5OiAxMCxcbiAgICByOiAxMCxcbiAgICBmaWxsOiBcIiNCQkJcIlxuICB9KSksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTUuOTY5IDguNTM0YS42NDMuNjQzIDAgMDAtLjU0OS0uNDU3bC0zLjQ2NC0uMzI4LTEuMzY5LTMuMzQ1QS42MzguNjM4IDAgMDAxMCA0YS42MzYuNjM2IDAgMDAtLjU4Ni40MDRMOC4wNDQgNy43NWwtMy40NjQuMzI4YS42NDUuNjQ1IDAgMDAtLjU0OS40NTcuNjg1LjY4NSAwIDAwLjE4Ni43MDhsMi42MTkgMi4zOTYtLjc3MiAzLjU0OGEuNjguNjggMCAwMC4yNDguNjg3LjYxNy42MTcgMCAwMC43MDEuMDMzTDEwIDE0LjA0MmwyLjk4NiAxLjg2NGMuMjIuMTM2LjQ5NS4xMjQuNzAyLS4wMzNhLjY4LjY4IDAgMDAuMjQ4LS42ODdsLS43NzItMy41NDggMi42MTktMi4zOTZhLjY4NS42ODUgMCAwMC4xODYtLjcwOHpcIixcbiAgICBmaWxsOiBcIiNmZmZcIlxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdSYXRlOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImgxXCI6IFwiSHRhZ19oMV9fMTVjOFJcIixcblx0XCJoMlwiOiBcIkh0YWdfaDJfXzM4VDdDXCIsXG5cdFwiaDNcIjogXCJIdGFnX2gzX18xTC03VFwiXG59O1xuIiwiaW1wb3J0IHsgSHRhZ1Byb3BzIH0gZnJvbSBcIi4vSHRhZy5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0h0YWcubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEh0YWcgPSAoeyB0YWcsIGNoaWxkcmVuIH06IEh0YWdQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRzd2l0Y2ggKHRhZykge1xyXG5cdFx0Y2FzZSBcImgxXCI6XHJcblx0XHRcdHJldHVybiA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaDF9PntjaGlsZHJlbn08L2gxPjtcclxuXHRcdGNhc2UgXCJoMlwiOlxyXG5cdFx0XHRyZXR1cm4gPGgyIGNsYXNzTmFtZT17c3R5bGVzLmgyfT57Y2hpbGRyZW59PC9oMj47XHJcblx0XHRjYXNlIFwiaDNcIjpcclxuXHRcdFx0cmV0dXJuIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5oM30+e2NoaWxkcmVufTwvaDM+O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIDw+PC8+O1xyXG5cdH1cclxufTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW5wdXRXcmFwcGVyXCI6IFwiSW5wdXRfaW5wdXRXcmFwcGVyX18xZ3NZSVwiLFxuXHRcImlucHV0XCI6IFwiSW5wdXRfaW5wdXRfXzN5U3VEXCIsXG5cdFwiZXJyb3JcIjogXCJJbnB1dF9lcnJvcl9fNXU3NEVcIixcblx0XCJlcnJvck1lc3NhZ2VcIjogXCJJbnB1dF9lcnJvck1lc3NhZ2VfXzJlUlFZXCJcbn07XG4iLCJpbXBvcnQgeyBJbnB1dFByb3BzIH0gZnJvbSBcIi4vSW5wdXQucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9JbnB1dC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBGb3J3YXJkZWRSZWYsIGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dCA9IGZvcndhcmRSZWYoKHsgY2xhc3NOYW1lLCBlcnJvciwgLi4ucHJvcHMgfTogSW5wdXRQcm9wcywgcmVmOiBGb3J3YXJkZWRSZWY8SFRNTElucHV0RWxlbWVudD4pOiBKU1guRWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMuaW5wdXRXcmFwcGVyLCBjbGFzc05hbWUpfT5cclxuXHRcdFx0PGlucHV0IGNsYXNzTmFtZT17Y24oc3R5bGVzLmlucHV0LCB7XHJcblx0XHRcdFx0W3N0eWxlcy5lcnJvcl06IGVycm9yXHJcblx0XHRcdH0pfSByZWY9e3JlZn0gey4uLnByb3BzfS8+XHJcblx0XHRcdHtlcnJvciAmJiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvck1lc3NhZ2V9PntlcnJvci5tZXNzYWdlfTwvc3Bhbj59XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59KTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicFwiOiBcIlBfcF9fMWRpWFFcIixcblx0XCJzXCI6IFwiUF9zX18zNVhTd1wiLFxuXHRcIm1cIjogXCJQX21fXzNSdWV6XCIsXG5cdFwibFwiOiBcIlBfbF9fc3hIcFpcIlxufTtcbiIsImltcG9ydCB7IFBQcm9wcyB9IGZyb20gXCIuL1AucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9QLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUCA9ICh7IHNpemUgPSBcIm1cIiwgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8cFxyXG5cdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlcy5wLCBjbGFzc05hbWUsIHtcclxuXHRcdFx0XHRbc3R5bGVzLnNdOiBzaXplID09IFwic1wiLFxyXG5cdFx0XHRcdFtzdHlsZXMubV06IHNpemUgPT0gXCJtXCIsXHJcblx0XHRcdFx0W3N0eWxlcy5sXTogc2l6ZSA9PSBcImxcIixcclxuXHRcdFx0fSl9XHJcblx0XHRcdHsuLi5wcm9wc31cclxuXHRcdD5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9wPlxyXG5cdCk7XHJcbn07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInByb2R1Y3RcIjogXCJQcm9kdWN0X3Byb2R1Y3RfX2oxMmV4XCIsXG5cdFwibG9nb1wiOiBcIlByb2R1Y3RfbG9nb19fM3o1eThcIixcblx0XCJ0aXRsZVwiOiBcIlByb2R1Y3RfdGl0bGVfX3lPSlJwXCIsXG5cdFwidGFnc1wiOiBcIlByb2R1Y3RfdGFnc19fMm9VdDBcIixcblx0XCJyYXRlVGl0bGVcIjogXCJQcm9kdWN0X3JhdGVUaXRsZV9feURrOHJcIixcblx0XCJwcmljZVwiOiBcIlByb2R1Y3RfcHJpY2VfXzNmdll4XCIsXG5cdFwicHJpY2VUaXRsZVwiOiBcIlByb2R1Y3RfcHJpY2VUaXRsZV9fWmJUZnVcIixcblx0XCJjcmVkaXRcIjogXCJQcm9kdWN0X2NyZWRpdF9fMXoybW9cIixcblx0XCJjcmVkaXRUaXRsZVwiOiBcIlByb2R1Y3RfY3JlZGl0VGl0bGVfXy0yZGc1XCIsXG5cdFwicmFpdGluZ1wiOiBcIlByb2R1Y3RfcmFpdGluZ19fMnpkZElcIixcblx0XCJoclwiOiBcIlByb2R1Y3RfaHJfXzMxbUtqXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJQcm9kdWN0X2Rlc2NyaXB0aW9uX181TjVvQ1wiLFxuXHRcImFjdGlvbnNcIjogXCJQcm9kdWN0X2FjdGlvbnNfXzFRUkZPXCIsXG5cdFwiZmVhdHVyZVwiOiBcIlByb2R1Y3RfZmVhdHVyZV9fMWs4VkFcIixcblx0XCJhZHZCbG9ja1wiOiBcIlByb2R1Y3RfYWR2QmxvY2tfXzNpTDJJXCIsXG5cdFwiY2F0ZWdvcnlcIjogXCJQcm9kdWN0X2NhdGVnb3J5X19NR3I4aFwiLFxuXHRcIm1vbnRoXCI6IFwiUHJvZHVjdF9tb250aF9fM0VtODZcIixcblx0XCJvbGRQcmljZVwiOiBcIlByb2R1Y3Rfb2xkUHJpY2VfXzJLRXFvXCIsXG5cdFwicmV2aWV3QnV0dG9uXCI6IFwiUHJvZHVjdF9yZXZpZXdCdXR0b25fX3FWMFBWXCIsXG5cdFwiYWR2VGl0bGVcIjogXCJQcm9kdWN0X2FkdlRpdGxlX18xQkFhTFwiLFxuXHRcImFkdmFudGFnZXNcIjogXCJQcm9kdWN0X2FkdmFudGFnZXNfXzNISTdyXCIsXG5cdFwiZGlzYWR2YW50YWdlc1wiOiBcIlByb2R1Y3RfZGlzYWR2YW50YWdlc19fMlkzVXBcIixcblx0XCJjaGFyYWN0ZXJpc3RpY3NcIjogXCJQcm9kdWN0X2NoYXJhY3RlcmlzdGljc19fMWtjcF9cIixcblx0XCJjaGFyYWN0ZXJpc3RpY3NOYW1lXCI6IFwiUHJvZHVjdF9jaGFyYWN0ZXJpc3RpY3NOYW1lX18xdVY2QlwiLFxuXHRcImNoYXJhY3RlcmlzdGljc1ZhbHVlXCI6IFwiUHJvZHVjdF9jaGFyYWN0ZXJpc3RpY3NWYWx1ZV9fMmdwM0xcIixcblx0XCJjaGFyYWN0ZXJpc3RpY3NEb3RzXCI6IFwiUHJvZHVjdF9jaGFyYWN0ZXJpc3RpY3NEb3RzX19DTTR6NVwiLFxuXHRcInJldmlld3NcIjogXCJQcm9kdWN0X3Jldmlld3NfXzIxXzdiXCIsXG5cdFwiaHIyXCI6IFwiUHJvZHVjdF9ocjJfXzNrUFhnXCJcbn07XG4iLCJpbXBvcnQgeyBQcm9kdWN0UHJvcHMgfSBmcm9tIFwiLi9Qcm9kdWN0LnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUHJvZHVjdC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRm9yd2FyZGVkUmVmLCBmb3J3YXJkUmVmLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgRGl2aWRlciwgUmFpdGluZywgUmV2aWV3LCBSZXZpZXdGb3JtLCBUYWcgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgZGVjbE9mTnVtLCBwcmljZVJ1IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvaGVscGVyc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0ID0gbW90aW9uKGZvcndhcmRSZWYoKHsgcHJvZHVjdCwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBQcm9kdWN0UHJvcHMsIHJlZjogRm9yd2FyZGVkUmVmPEhUTUxEaXZFbGVtZW50Pik6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRjb25zdCBbaXNSZXZpZXdPcGVuZWQsIHNldElzUmV2aWV3T3BlbmVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cdGNvbnN0IHJldmlld1JlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcblxyXG5cdGNvbnN0IHZhcmlhbnRzID0ge1xyXG5cdFx0dmlzaWJsZToge1xyXG5cdFx0XHRvcGFjaXR5OiAxLCBcclxuXHRcdFx0aGVpZ2h0OiBcImF1dG9cIixcclxuXHRcdH0sXHJcblx0XHRoaWRkZW46IHtcclxuXHRcdFx0b3BhY2l0eTogMCxcclxuXHRcdFx0aGVpZ2h0OiAwLFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3Qgc2Nyb2xsVG9SZXZpZXcgPSAoKSA9PiB7XHJcblx0XHRzZXRJc1Jldmlld09wZW5lZCh0cnVlKVxyXG5cdFx0cmV2aWV3UmVmLmN1cnJlbnQ/LnNjcm9sbEludG9WaWV3KHtcclxuXHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxyXG5cdFx0XHRibG9jazogXCJzdGFydFwiXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5wcm9wc30gcmVmPXtyZWZ9PlxyXG5cdFx0XHQ8Q2FyZCBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0fT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG5cdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdHNyYz17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRE9NQUlOICsgcHJvZHVjdC5pbWFnZX1cclxuXHRcdFx0XHRcdFx0YWx0PXtwcm9kdWN0LnRpdGxlfVxyXG5cdFx0XHRcdFx0XHR3aWR0aD17NzB9XHJcblx0XHRcdFx0XHRcdGhlaWdodD17NzB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntwcm9kdWN0LnRpdGxlfTwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpY2V9PlxyXG5cdFx0XHRcdFx0e3ByaWNlUnUocHJvZHVjdC5wcmljZSl9XHJcblx0XHRcdFx0XHR7cHJvZHVjdC5vbGRQcmljZSAmJiAoXHJcblx0XHRcdFx0XHRcdDxUYWcgY2xhc3NOYW1lPXtzdHlsZXMub2xkUHJpY2V9IGNvbG9yPVwiZ3JlZW5cIj5cclxuXHRcdFx0XHRcdFx0XHR7cHJpY2VSdShwcm9kdWN0LnByaWNlIC0gcHJvZHVjdC5vbGRQcmljZSl9XHJcblx0XHRcdFx0XHRcdDwvVGFnPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWRpdH0+XHJcblx0XHRcdFx0XHR7cHJpY2VSdShwcm9kdWN0LmNyZWRpdCl9LzxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1vbnRofT7QvNC10YE8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYWl0aW5nfT5cclxuXHRcdFx0XHRcdDxSYWl0aW5nIHJhaXRpbmc9e3Byb2R1Y3QucmV2aWV3QXZnID8/IHByb2R1Y3QuaW5pdGlhbFJhdGluZ30+PC9SYWl0aW5nPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnc30+XHJcblx0XHRcdFx0XHR7cHJvZHVjdC5jYXRlZ29yaWVzLm1hcCgoYykgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8VGFnIGtleT17Y30gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnl9IGNvbG9yPVwiZ2hvc3RcIj5cclxuXHRcdFx0XHRcdFx0XHR7Y31cclxuXHRcdFx0XHRcdFx0PC9UYWc+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByaWNlVGl0bGV9PtGG0LXQvdCwPC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVkaXRUaXRsZX0+0LrRgNC10LTQuNGCPC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXRlVGl0bGV9PlxyXG5cdFx0XHRcdFx0PGEgaHJlZj1cIiNyZWZcIiBvbkNsaWNrPXtzY3JvbGxUb1Jldmlld30+XHJcblx0XHRcdFx0XHRcdHtwcm9kdWN0LnJldmlld0NvdW50fXtcIiBcIn1cclxuXHRcdFx0XHRcdFx0e2RlY2xPZk51bShwcm9kdWN0LnJldmlld0NvdW50LCBbXCLQvtGC0LfRi9CyXCIsIFwi0L7RgtC30YvQstCwXCIsIFwi0L7RgtC30YvQstC+0LJcIl0pfVxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxEaXZpZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhyfT48L0RpdmlkZXI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlfT5cclxuXHRcdFx0XHRcdHtwcm9kdWN0LmNoYXJhY3RlcmlzdGljcy5tYXAoKGMpID0+IChcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFyYWN0ZXJpc3RpY3N9IGtleT17Yy5uYW1lfT5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jaGFyYWN0ZXJpc3RpY3NOYW1lfT57Yy5uYW1lfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jaGFyYWN0ZXJpc3RpY3NEb3RzfT48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY2hhcmFjdGVyaXN0aWNzVmFsdWV9PntjLnZhbHVlfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkdkJsb2NrfT5cclxuXHRcdFx0XHRcdHtwcm9kdWN0LmFkdmFudGFnZXMgJiYgKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkdmFudGFnZXN9PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWR2VGl0bGV9PtCf0YDQtdC40LzRg9GJ0LXRgdGC0LLQsDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+e3Byb2R1Y3QuYWR2YW50YWdlc308L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0e3Byb2R1Y3QuZGlzYWR2YW50YWdlcyAmJiAoXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGlzYWR2YW50YWdlc30+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZHZUaXRsZX0+0J3QtdC00L7RgdGC0LDRgtC60Lg8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2Pntwcm9kdWN0LmRpc2FkdmFudGFnZXN9PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8RGl2aWRlciBjbGFzc05hbWU9e2NuKHN0eWxlcy5ociwgc3R5bGVzLmhyMil9PjwvRGl2aWRlcj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnN9PlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiPtCj0LfQvdCw0YLRjCDQv9C+0LTRgNC+0LHQvdC10LU8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0YXBwZWFyYW5jZT1cImdob3N0XCJcclxuXHRcdFx0XHRcdFx0YXJyb3c9e2lzUmV2aWV3T3BlbmVkID8gXCJkb3duXCIgOiBcInJpZ2h0XCJ9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLnJldmlld0J1dHRvbn1cclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0SXNSZXZpZXdPcGVuZWQoIWlzUmV2aWV3T3BlbmVkKX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx00KfQuNGC0LDRgtGMINC+0YLQt9GL0LLRi1xyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0PG1vdGlvbi5kaXYgYW5pbWF0ZT17aXNSZXZpZXdPcGVuZWQgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9IHZhcmlhbnRzPXt2YXJpYW50c30gaW5pdGlhbD1cImhpZGRlblwiPlxyXG5cdFx0XHRcdDxDYXJkIGNvbG9yPVwiYmx1ZVwiIGNsYXNzTmFtZT17Y24oc3R5bGVzLnJldmlld3MpfSByZWY9e3Jldmlld1JlZn0+XHJcblx0XHRcdFx0XHR7cHJvZHVjdC5yZXZpZXdzLm1hcCgocikgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGtleT17ci5faWR9PlxyXG5cdFx0XHRcdFx0XHRcdDxSZXZpZXcgcmV2aWV3PXtyfT48L1Jldmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8RGl2aWRlcj48L0RpdmlkZXI+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8UmV2aWV3Rm9ybSBwcm9kdWN0SWQ9e3Byb2R1Y3QuX2lkfT48L1Jldmlld0Zvcm0+XHJcblx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHQ8L21vdGlvbi5kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59KSk7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZpbGxlZFwiOiBcIlJhaXRpbmdfZmlsbGVkX19iT2dyb1wiLFxuXHRcInN0YXJcIjogXCJSYWl0aW5nX3N0YXJfXzNqVXByXCIsXG5cdFwiZWRpdGFibGVcIjogXCJSYWl0aW5nX2VkaXRhYmxlX18zMC1HS1wiLFxuXHRcImVycm9yXCI6IFwiUmFpdGluZ19lcnJvcl9fMnoydUJcIixcblx0XCJyYWl0aW5nV3JhcHBlclwiOiBcIlJhaXRpbmdfcmFpdGluZ1dyYXBwZXJfXzNmMFhfXCIsXG5cdFwiZXJyb3JNZXNzYWdlXCI6IFwiUmFpdGluZ19lcnJvck1lc3NhZ2VfXzE5MWI0XCJcbn07XG4iLCJpbXBvcnQgeyBSYWl0aW5nUHJvcHMgfSBmcm9tIFwiLi9SYWl0aW5nLnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUmFpdGluZy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBLZXlib2FyZEV2ZW50LCBmb3J3YXJkUmVmLCBGb3J3YXJkZWRSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN0YXJJY29uIGZyb20gXCIuL3N0YXIuc3ZnXCJcclxuXHJcbmV4cG9ydCBjb25zdCBSYWl0aW5nID0gZm9yd2FyZFJlZigoeyBpc0VkaXRhYmxlID0gZmFsc2UsIHJhaXRpbmcsIHNldFJhaXRpbmcsIGVycm9yLCAuLi5wcm9wcyB9OiBSYWl0aW5nUHJvcHMsIHJlZjogRm9yd2FyZGVkUmVmPEhUTUxEaXZFbGVtZW50Pik6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRjb25zdCBbcmFpdGluZ0FycmF5LCBzZXRSYWl0aW5nQXJyYXldID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4obmV3IEFycmF5KDUpLmZpbGwoPD48Lz4pKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3RydWN0UmFpdGluZyhyYWl0aW5nKTtcclxuXHR9LCBbcmFpdGluZ10pXHJcblxyXG5cdGNvbnN0IGNvbnN0cnVjdFJhaXRpbmcgPSAoY3VycmVudFJhaXRpbmc6IG51bWJlcikgPT4ge1xyXG5cdFx0Y29uc3QgdXBkYXRlZEFycmF5ID0gcmFpdGluZ0FycmF5Lm1hcCgoZWw6IEpTWC5FbGVtZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLnN0YXIsIHtcclxuXHRcdFx0XHRcdFx0W3N0eWxlcy5maWxsZWRdOiBpbmRleCA8IGN1cnJlbnRSYWl0aW5nLFxyXG5cdFx0XHRcdFx0XHRbc3R5bGVzLmVkaXRhYmxlXTogaXNFZGl0YWJsZVxyXG5cdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eygpID0+IGNoYW5nZURpc3BsYXkoaW5kZXggKyAxKX1cclxuXHRcdFx0XHRcdG9uTW91c2VMZWF2ZT17KCkgPT4gY2hhbmdlRGlzcGxheShyYWl0aW5nKX1cclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soaW5kZXggKyAxKX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8U3Rhckljb24gXHJcblx0XHRcdFx0XHRcdHRhYkluZGV4PXtpc0VkaXRhYmxlID8gMCA6IC0xfVxyXG5cdFx0XHRcdFx0XHRvbktleURvd249eyhlOiBLZXlib2FyZEV2ZW50PFNWR0FFbGVtZW50PikgPT4gaXNFZGl0YWJsZSAmJiBoYW5kZWxTcGFjZShpbmRleCArIDEsIGUpfVxyXG5cdFx0XHRcdFx0PjwvU3Rhckljb24+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0XHRzZXRSYWl0aW5nQXJyYXkodXBkYXRlZEFycmF5KVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNoYW5nZURpc3BsYXkgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0aWYoIWlzRWRpdGFibGUpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3RydWN0UmFpdGluZyhpbmRleClcclxuXHR9XHJcblxyXG5cdGNvbnN0IG9uQ2xpY2sgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0aWYoIWlzRWRpdGFibGUgfHwgIXNldFJhaXRpbmcpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0c2V0UmFpdGluZyhpbmRleClcclxuXHR9XHJcblxyXG5cdGNvbnN0IGhhbmRlbFNwYWNlID0gKGluZGV4OiBudW1iZXIsIGU6IEtleWJvYXJkRXZlbnQ8U1ZHQUVsZW1lbnQ+KSA9PiB7XHJcblx0XHRpZiAoZS5jb2RlICE9IFwiU3BhY2VcIiB8fCAhc2V0UmFpdGluZykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRzZXRSYWl0aW5nKGluZGV4KVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgey4uLnByb3BzfSByZWY9e3JlZn0gY2xhc3NOYW1lPXtjbihzdHlsZXMucmFpdGluZ1dyYXBwZXIsIHtcclxuXHRcdFx0W3N0eWxlcy5lcnJvcl06IGVycm9yXHJcblx0XHR9KX0+XHJcblx0XHRcdHtyYWl0aW5nQXJyYXkubWFwKChlbDogSlNYLkVsZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4oXHJcblx0XHRcdFx0XHQ8c3BhbiBrZXk9e2luZGV4fT57ZWx9PC9zcGFuPlxyXG5cdFx0XHRcdClcclxuXHRcdFx0fSl9XHJcblx0XHRcdHtlcnJvciAmJiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvck1lc3NhZ2V9PntlcnJvci5tZXNzYWdlfTwvc3Bhbj59XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59KTtcclxuIiwidmFyIF9wYXRoO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnU3Rhcihwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiAyMCxcbiAgICBoZWlnaHQ6IDIwLFxuICAgIGZpbGw6IFwiI0UyRTJFMlwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE5Ljk0OCA3LjU1N2ExLjA3MiAxLjA3MiAwIDAwLS45MTUtLjc2MmwtNS43NzMtLjU0N0wxMC45NzguNjc0QTEuMDYzIDEuMDYzIDAgMDAxMCAwYy0uNDI3IDAtLjgxLjI2NC0uOTc3LjY3NEw2Ljc0IDYuMjQ4bC01Ljc3NC41NDdjLS40MjQuMDQtLjc4Mi4zNC0uOTE1Ljc2Mi0uMTMxLjQyMi0uMDEuODg2LjMxIDEuMTc5bDQuMzY1IDMuOTkzLTEuMjg3IDUuOTE0Yy0uMDk0LjQzNS4wNjcuODg1LjQxMyAxLjE0NmExLjAyOSAxLjAyOSAwIDAwMS4xNjkuMDU0TDEwIDE2LjczNmw0Ljk3NyAzLjEwN2MuMzY2LjIyNy44MjUuMjA2IDEuMTctLjA1NC4zNDYtLjI2MS41MDctLjcxLjQxMy0xLjE0NmwtMS4yODctNS45MTQgNC4zNjUtMy45OTNjLjMyLS4yOTMuNDQxLS43NTYuMzEtMS4xOHpcIlxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdTdGFyOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJldmlld1wiOiBcIlJldmlld19yZXZpZXdfXzFTcTZyXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJSZXZpZXdfZGVzY3JpcHRpb25fX21hcVgtXCIsXG5cdFwiZGF0ZVwiOiBcIlJldmlld19kYXRlX19lWFVwTlwiLFxuXHRcIm5hbWVcIjogXCJSZXZpZXdfbmFtZV9fMkVKcmZcIixcblx0XCJ0aXRsZVwiOiBcIlJldmlld190aXRsZV9fMTZYSmdcIixcblx0XCJyYWl0aW5nXCI6IFwiUmV2aWV3X3JhaXRpbmdfX3JmbkZSXCJcbn07XG4iLCJpbXBvcnQgeyBSZXZpZXdQcm9wcyB9IGZyb20gXCIuL1Jldmlldy5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1Jldmlldy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBVc2VySWNvbiBmcm9tIFwiLi91c2VyLnN2Z1wiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCJcclxuaW1wb3J0IHsgcnUgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCIgXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUmFpdGluZyB9IGZyb20gXCIuLlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJldmlldyA9ICh7IHJldmlldywgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZXZpZXdQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRjb25zdCB7IG5hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY3JlYXRlZEF0LCByYXRpbmd9ID0gcmV2aWV3XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLnJldmlldywgY2xhc3NOYW1lKX0gey4uLnByb3BzfT5cclxuXHRcdFx0PFVzZXJJY29uIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJ9PjwvVXNlckljb24+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PntuYW1lfTo8L3NwYW4+Jm5ic3A7Jm5ic3A7XHJcblx0XHRcdFx0PHNwYW4+e3RpdGxlfTwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XHJcblx0XHRcdFx0e2Zvcm1hdCggbmV3IERhdGUoY3JlYXRlZEF0KSwgXCJkZCBNTU1NIHl5eXlcIiwgeyBsb2NhbGU6IHJ1IH0pfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYWl0aW5nfT5cclxuXHRcdFx0XHQ8UmFpdGluZyByYWl0aW5nPXtyYXRpbmd9PjwvUmFpdGluZz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxyXG5cdFx0XHRcdHtkZXNjcmlwdGlvbn1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG4iLCJ2YXIgX3BhdGgsIF9wYXRoMiwgX3BhdGgzO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnVXNlcihwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiAzMCxcbiAgICBoZWlnaHQ6IDMwLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE1IDBDNi43MjkgMCAwIDYuNzI5IDAgMTVzNi43MjkgMTUgMTUgMTUgMTUtNi43MjkgMTUtMTVTMjMuMjcxIDAgMTUgMHptMCAyNy42MjVDOC4wMzggMjcuNjI1IDIuMzc1IDIxLjk2MSAyLjM3NSAxNVM4LjAzOCAyLjM3NSAxNSAyLjM3NWM2Ljk2MSAwIDEyLjYyNSA1LjY2NCAxMi42MjUgMTIuNjI1IDAgNi45NjItNS42NjQgMTIuNjI1LTEyLjYyNSAxMi42MjV6XCIsXG4gICAgZmlsbDogXCIjNzY1M0ZDXCJcbiAgfSkpLCBfcGF0aDIgfHwgKF9wYXRoMiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTUgMTcuNjYyYy00LjIxOSAwLTguMTY2IDIuMTE1LTExLjExMyA1Ljk1NmwxLjg4MyAxLjQ0NWMyLjQ4OS0zLjI0MSA1Ljc2Ny01LjAyNyA5LjIzLTUuMDI3czYuNzQxIDEuNzg2IDkuMjMgNS4wMjdsMS44ODMtMS40NDVDMjMuMTY1IDE5Ljc3NyAxOS4yMiAxNy42NjIgMTUgMTcuNjYyelwiLFxuICAgIGZpbGw6IFwiIzc2NTNGQ1wiXG4gIH0pKSwgX3BhdGgzIHx8IChfcGF0aDMgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE1IDUuMzgzYy0zLjQwNSAwLTYuMTc0IDIuNzg3LTYuMTc0IDYuMjEzIDAgMy40MjcgMi43NyA2LjIxNCA2LjE3NCA2LjIxNCAzLjQwNCAwIDYuMTc0LTIuNzg3IDYuMTc0LTYuMjE0IDAtMy40MjYtMi43Ny02LjIxMy02LjE3NC02LjIxM3ptMCAxMC4wNTJjLTIuMDk1IDAtMy44LTEuNzIyLTMuOC0zLjgzOXMxLjcwNS0zLjgzOSAzLjgtMy44MzljMi4wOTUgMCAzLjggMS43MjMgMy44IDMuODQgMCAyLjExNi0xLjcwNSAzLjgzOC0zLjggMy44Mzh6XCIsXG4gICAgZmlsbDogXCIjNzY1M0ZDXCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnVXNlcjsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJyZXZpZXdGb3JtXCI6IFwiUmV2aWV3Rm9ybV9yZXZpZXdGb3JtX18yb0R2WFwiLFxuXHRcInRpdGxlXCI6IFwiUmV2aWV3Rm9ybV90aXRsZV9fWkFtd0hcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIlJldmlld0Zvcm1fZGVzY3JpcHRpb25fXzJQNm5FXCIsXG5cdFwic3VibWl0XCI6IFwiUmV2aWV3Rm9ybV9zdWJtaXRfXzZvMU5LXCIsXG5cdFwiaW5mb1wiOiBcIlJldmlld0Zvcm1faW5mb19fZ2syV3FcIixcblx0XCJyYWl0aW5nXCI6IFwiUmV2aWV3Rm9ybV9yYWl0aW5nX19RNy0zbFwiLFxuXHRcInN1Y2Nlc3NcIjogXCJSZXZpZXdGb3JtX3N1Y2Nlc3NfXzFQeGRRXCIsXG5cdFwiZXJyb3JcIjogXCJSZXZpZXdGb3JtX2Vycm9yX18xeDNEUlwiLFxuXHRcImNsb3NlXCI6IFwiUmV2aWV3Rm9ybV9jbG9zZV9fM0cyVUhcIixcblx0XCJzdWNjZXNzVGl0bGVcIjogXCJSZXZpZXdGb3JtX3N1Y2Nlc3NUaXRsZV9fMl9iZTBcIlxufTtcbiIsImltcG9ydCB7IFJldmlld0Zvcm1Qcm9wcyB9IGZyb20gXCIuL1Jldmlld0Zvcm0ucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9SZXZpZXdGb3JtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIElucHV0LCBSYWl0aW5nLCBUZXh0YXJlYSB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gXCIuL2Nsb3NlLnN2Z1wiO1xyXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgeyBJUmV2aWV3Rm9ybSwgSVJldmlld1NlbmRSZXNwb25zZSB9IGZyb20gXCIuL1Jldmlld0Zvcm0uaW50ZXJmYWNlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvYXBpXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUmV2aWV3Rm9ybSA9ICh7IHByb2R1Y3RJZCwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZXZpZXdGb3JtUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0Y29uc3QgW2lzU3VjY2Vzcywgc2V0SXNTdWNjZXNzXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHRjb25zdCBbZXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xyXG5cdGNvbnN0IHtcclxuXHRcdHJlZ2lzdGVyLFxyXG5cdFx0Y29udHJvbCxcclxuXHRcdGhhbmRsZVN1Ym1pdCxcclxuXHRcdGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcclxuXHRcdHJlc2V0LFxyXG5cdH0gPSB1c2VGb3JtPElSZXZpZXdGb3JtPigpO1xyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChmb3JtRGF0YTogSVJldmlld0Zvcm0pID0+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdDxJUmV2aWV3U2VuZFJlc3BvbnNlPihBUEkucmV2aWV3LmNyZWF0ZURlbW8sIHtcclxuXHRcdFx0XHQuLi5mb3JtRGF0YSxcclxuXHRcdFx0XHRwcm9kdWN0SWQsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKGRhdGEubWVzc2FnZSkge1xyXG5cdFx0XHRcdHNldElzU3VjY2Vzcyh0cnVlKTtcclxuXHRcdFx0XHRyZXNldCgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldElzRXJyb3IoXCLQp9GC0L4t0YLQviDQv9C+0YjQu9C+INC90LUg0YLQsNC6XCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdHNldElzRXJyb3IoZS5tZXNzYWdlKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLnJldmlld0Zvcm0sIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30+XHJcblx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoXCJuYW1lXCIsIHsgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6IFwi0JfQsNC/0L7Qu9C90LjRgtC1INC40LzRj1wiIH0gfSl9XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCY0LzRj1wiXHJcblx0XHRcdFx0XHRlcnJvcj17ZXJyb3JzLm5hbWV9XHJcblx0XHRcdFx0PjwvSW5wdXQ+XHJcblx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoXCJ0aXRsZVwiLCB7XHJcblx0XHRcdFx0XHRcdHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiBcItCX0LDQv9C+0LvQvdC40YLQtSDQt9Cw0LPQvtC70L7QstC+0LpcIiB9LFxyXG5cdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy50aXRsZX1cclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0JfQsNCz0L7Qu9C+0LLQvtC6XCJcclxuXHRcdFx0XHRcdGVycm9yPXtlcnJvcnMudGl0bGV9XHJcblx0XHRcdFx0PjwvSW5wdXQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYWl0aW5nfT5cclxuXHRcdFx0XHRcdDxzcGFuPtCe0YbQtdC90LrQsDo8L3NwYW4+XHJcblx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRuYW1lPVwicmF0aW5nXCJcclxuXHRcdFx0XHRcdFx0cnVsZXM9e3sgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6IFwi0KPQutCw0LbQuNGC0LUg0YDQtdC50YLQuNC90LNcIiB9IH19XHJcblx0XHRcdFx0XHRcdHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxSYWl0aW5nXHJcblx0XHRcdFx0XHRcdFx0XHRyYWl0aW5nPXtmaWVsZC52YWx1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17ZmllbGQucmVmfVxyXG5cdFx0XHRcdFx0XHRcdFx0aXNFZGl0YWJsZT17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdHNldFJhaXRpbmc9e2ZpZWxkLm9uQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I9e2Vycm9ycy5yYXRpbmd9XHJcblx0XHRcdFx0XHRcdFx0PjwvUmFpdGluZz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PFRleHRhcmVhXHJcblx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoXCJkZXNjcmlwdGlvblwiLCB7XHJcblx0XHRcdFx0XHRcdHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiBcItCX0LDQv9C+0LvQvdC40YLQtSDQvtGC0LfRi9CyXCIgfSxcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCi0LXQutGB0YIg0L7RgtC30YvQstCwXCJcclxuXHRcdFx0XHRcdGVycm9yPXtlcnJvcnMuZGVzY3JpcHRpb259XHJcblx0XHRcdFx0PjwvVGV4dGFyZWE+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXR9PlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiPtCe0YLQv9GA0LDQstC40YLRjDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XHJcblx0XHRcdFx0XHRcdCog0J/QtdGA0LXQtCDQv9GD0LHQu9C40LrQsNGG0LjQtdC5INC+0YLQt9GL0LIg0L/RgNC+0LnQtNC10YIg0L/RgNC10LTQstCw0YDQuNGC0LXQu9GM0L3Rg9GOINC80L7QtNC10YDQsNGG0LjRjiDQuCDQv9GA0L7QstC10YDQutGDXHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHR7aXNTdWNjZXNzICYmIChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1Y2Nlc3N9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWNjZXNzVGl0bGV9PtCS0LDRiCDQvtGC0LfRi9CyINC+0YLQv9GA0LDQstC70LXQvTwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcblx0XHRcdFx0XHRcdNCS0LDRiCDQvtGC0LfRi9CyINCx0YPQtNC10YIg0L7Qv9GD0LHQu9C40LrQvtCy0LDQvSDQv9C+0YHQu9C1INC/0YDQvtCy0LXRgNC60LhcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PENsb3NlSWNvblxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5jbG9zZX1cclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0SXNTdWNjZXNzKGZhbHNlKX1cclxuXHRcdFx0XHRcdD48L0Nsb3NlSWNvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KX1cclxuXHRcdFx0e2Vycm9yICYmIChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT5cclxuXHRcdFx0XHRcdNCn0YLQvi3RgtC+INC/0L7RiNC70L4g0L3QtSDRgtCw0LosINC/0L7Qv9GA0L7QsdGD0LnRgtC1INC+0LHQvdC+0LLQuNGC0Ywg0YHRgtGA0LDQvdC40YbRg1xyXG5cdFx0XHRcdFx0PENsb3NlSWNvblxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5jbG9zZX1cclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0SXNFcnJvcih1bmRlZmluZWQpfVxyXG5cdFx0XHRcdFx0PjwvQ2xvc2VJY29uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9mb3JtPlxyXG5cdCk7XHJcbn07XHJcbiIsInZhciBfcGF0aDtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z0Nsb3NlKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDEyLFxuICAgIGhlaWdodDogMTIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgc3Ryb2tlOiBcIiMxQ0MzN0VcIixcbiAgICBzdHJva2VXaWR0aDogMyxcbiAgICBkOiBcIk0yLjA2MSAxLjkzOWw4LjQ4NSA4LjQ4Nk0xLjkzOSAxMC40MjVsOC40ODYtOC40ODZcIlxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdDbG9zZTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzZWFyY2hcIjogXCJTZWFyY2hfc2VhcmNoX184RTk3SVwiLFxuXHRcImlucHV0U2VhcmNoXCI6IFwiU2VhcmNoX2lucHV0U2VhcmNoX18zdmVkVVwiLFxuXHRcImJ1dHRvblwiOiBcIlNlYXJjaF9idXR0b25fXzJNZTZpXCJcbn07XG4iLCJpbXBvcnQgeyBTZWFyY2hQcm9wcyB9IGZyb20gXCIuL1NlYXJjaC5wcm9wc1wiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuLi9JbnB1dC9JbnB1dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1NlYXJjaC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL0J1dHRvbi9CdXR0b25cIjtcclxuaW1wb3J0IEdsYXNzSWNvbiBmcm9tIFwiLi9nbGFzcy5zdmdcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2ggPSAoeyAgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogU2VhcmNoUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcblxyXG5cdGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG5cdGNvbnN0IGdvVG9TZWFyY2ggPSAoKSA9PiB7XHJcblx0XHRyb3V0ZXIucHVzaCh7XHJcblx0XHRcdHBhdGhuYW1lOiBcIi9zZWFyY2hcIixcclxuXHRcdFx0cXVlcnk6IHtcclxuXHRcdFx0XHRxOiBzZWFyY2hcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG5cdFx0aWYoIGUua2V5ID09IFwiRW50ZXJcIikge1xyXG5cdFx0XHRnb1RvU2VhcmNoKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NuKCBjbGFzc05hbWUsIHN0eWxlcy5zZWFyY2gpfSB7Li4ucHJvcHN9PlxyXG5cdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5pbnB1dFNlYXJjaH1cclxuXHRcdFx0XHRwbGFjZWhvbGRlcj1cItCf0L7QuNGB0LouLi5cIlxyXG5cdFx0XHRcdHZhbHVlPXtzZWFyY2h9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cclxuXHRcdFx0PjwvSW5wdXQ+XHJcblx0XHRcdDxCdXR0b24gXHJcblx0XHRcdFx0YXBwZWFyYW5jZT1cInByaW1hcnlcIlxyXG5cdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cclxuXHRcdFx0XHRvbkNsaWNrPXtnb1RvU2VhcmNofVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEdsYXNzSWNvbj48L0dsYXNzSWNvbj5cclxuXHRcdFx0PC9CdXR0b24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcbiIsInZhciBfcGF0aDtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z0dsYXNzKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDE1LFxuICAgIGhlaWdodDogMTUsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTQuNzcyIDEzLjY2M0wxMS4wNzQgOS45NWE1LjkxMyA1LjkxMyAwIDAwMS40NzItMy44OTRDMTIuNTQ2IDIuNzE2IDkuNzMyIDAgNi4yNzMgMCAyLjgxNCAwIDAgMi43MTcgMCA2LjA1NmMwIDMuMzQgMi44MTQgNi4wNTcgNi4yNzMgNi4wNTdhNi4zNiA2LjM2IDAgMDAzLjU5NC0xLjA5NmwzLjcyNiAzLjc0YS44MjcuODI3IDAgMDAuNTkuMjQzLjgzLjgzIDAgMDAuNTY2LS4yMi43NzIuNzcyIDAgMDAuMDIzLTEuMTE3ek02LjI3MiAxLjU4YzIuNTU4IDAgNC42MzcgMi4wMDggNC42MzcgNC40NzYgMCAyLjQ2OS0yLjA4IDQuNDc3LTQuNjM2IDQuNDc3LTIuNTU3IDAtNC42MzctMi4wMDgtNC42MzctNC40NzcgMC0yLjQ2OCAyLjA4LTQuNDc2IDQuNjM3LTQuNDc2elwiLFxuICAgIGZpbGw6IFwiI2ZmZlwiXG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0dsYXNzOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNvcnRJY29uXCI6IFwiU29ydF9zb3J0SWNvbl9fM2J3b0tcIixcblx0XCJhY3RpdmVcIjogXCJTb3J0X2FjdGl2ZV9fMXhBRHhcIixcblx0XCJzb3J0XCI6IFwiU29ydF9zb3J0X18zZUNoMlwiXG59O1xuIiwiaW1wb3J0IHsgRGV0YWlsZWRIVE1MUHJvcHMsIEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNvcnRQcm9wcyBleHRlbmRzIERldGFpbGVkSFRNTFByb3BzPEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiwgSFRNTERpdkVsZW1lbnQ+e1xyXG4gICAgc29ydDogU29ydEVudW07XHJcbiAgICBzZXRTb3J0OiAoc29ydDogU29ydEVudW0pID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU29ydEVudW0ge1xyXG4gICAgUmF0aW5nLFxyXG4gICAgUHJpY2VcclxufSIsImltcG9ydCB7IFNvcnRFbnVtLCBTb3J0UHJvcHMgfSBmcm9tIFwiLi9Tb3J0LnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU29ydC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgU29ydEljb24gZnJvbSBcIi4vc29ydC5zdmdcIlxyXG5cclxuZXhwb3J0IGNvbnN0IFNvcnQgPSAoeyBzb3J0LCBzZXRTb3J0LCBjbGFzc05hbWUsIC4uLnByb3BzIH06IFNvcnRQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy5zb3J0LCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9PlxyXG5cdFx0XHQ8c3BhbiBcclxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRTb3J0KFNvcnRFbnVtLlJhdGluZyl9XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbih7XHJcblx0XHRcdFx0XHRbc3R5bGVzLmFjdGl2ZV06IHNvcnQgPT0gU29ydEVudW0uUmF0aW5nXHJcblx0XHRcdFx0fSl9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8U29ydEljb24gY2xhc3NOYW1lPXtzdHlsZXMuc29ydEljb259PjwvU29ydEljb24+XHJcblx0XHRcdFx00J/QviDRgNC10LnRgtC40L3Qs9GDXHJcblx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0PHNwYW4gXHJcblx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0U29ydChTb3J0RW51bS5QcmljZSl9XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbih7XHJcblx0XHRcdFx0XHRbc3R5bGVzLmFjdGl2ZV06IHNvcnQgPT0gU29ydEVudW0uUHJpY2VcclxuXHRcdFx0XHR9KX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxTb3J0SWNvbiBjbGFzc05hbWU9e3N0eWxlcy5zb3J0SWNvbn0+PC9Tb3J0SWNvbj5cclxuXHRcdFx0XHTQn9C+INGG0LXQvdC1XHJcblx0XHRcdDwvc3Bhbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbiIsInZhciBfcmVjdCwgX3JlY3QyLCBfcmVjdDM7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdTb3J0KHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMTMsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9yZWN0IHx8IChfcmVjdCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMyxcbiAgICByeDogMS41LFxuICAgIGZpbGw6IFwiIzc2NTNGQ1wiXG4gIH0pKSwgX3JlY3QyIHx8IChfcmVjdDIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICAgIHk6IDUsXG4gICAgd2lkdGg6IDE0LFxuICAgIGhlaWdodDogMyxcbiAgICByeDogMS41LFxuICAgIGZpbGw6IFwiIzc2NTNGQ1wiXG4gIH0pKSwgX3JlY3QzIHx8IChfcmVjdDMgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICAgIHk6IDEwLFxuICAgIHdpZHRoOiA4LFxuICAgIGhlaWdodDogMyxcbiAgICByeDogMS41LFxuICAgIGZpbGw6IFwiIzc2NTNGQ1wiXG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1NvcnQ7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGFnXCI6IFwiVGFnX3RhZ19fMTFURXNcIixcblx0XCJzXCI6IFwiVGFnX3NfXzFQVlYtXCIsXG5cdFwibVwiOiBcIlRhZ19tX18yaW56cVwiLFxuXHRcImdob3N0XCI6IFwiVGFnX2dob3N0X18xdXZoNlwiLFxuXHRcInJlZFwiOiBcIlRhZ19yZWRfXzF4Q19tXCIsXG5cdFwiZ3JleVwiOiBcIlRhZ19ncmV5X18xUXk2RlwiLFxuXHRcImdyZWVuXCI6IFwiVGFnX2dyZWVuX19ocGl4blwiLFxuXHRcInByaW1hcnlcIjogXCJUYWdfcHJpbWFyeV9fMS1TZFJcIlxufTtcbiIsImltcG9ydCB7IFRhZ1Byb3BzIH0gZnJvbSBcIi4vVGFnLnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVGFnLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVGFnID0gKHsgc2l6ZSA9IFwic1wiLCBjaGlsZHJlbiwgY29sb3I9XCJnaG9zdFwiLCBocmVmLCBjbGFzc05hbWUsIC4uLnByb3BzIH06IFRhZ1Byb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLnRhZywgY2xhc3NOYW1lLCB7XHJcblx0XHRcdFx0W3N0eWxlcy5zXTogc2l6ZSA9PSBcInNcIixcclxuXHRcdFx0XHRbc3R5bGVzLm1dOiBzaXplID09IFwibVwiLFxyXG5cdFx0XHRcdFtzdHlsZXMuZ2hvc3RdOiBjb2xvciA9PSBcImdob3N0XCIsXHJcblx0XHRcdFx0W3N0eWxlcy5yZWRdOiBjb2xvciA9PSBcInJlZFwiLFxyXG5cdFx0XHRcdFtzdHlsZXMuZ3JleV06IGNvbG9yID09IFwiZ3JleVwiLFxyXG5cdFx0XHRcdFtzdHlsZXMuZ3JlZW5dOiBjb2xvciA9PSBcImdyZWVuXCIsXHJcblx0XHRcdFx0W3N0eWxlcy5wcmltYXJ5XTogY29sb3IgPT0gXCJwcmltYXJ5XCIsXHJcblx0XHRcdH0pfVxyXG5cdFx0XHR7Li4ucHJvcHN9XHJcblx0XHQ+XHJcblx0XHRcdHtcclxuXHRcdFx0XHRocmVmID8gPGEgaHJlZj17aHJlZn0+e2NoaWxkcmVufTwvYT4gOiA8PntjaGlsZHJlbn08Lz5cclxuXHRcdFx0fVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGV4dGFyZWFXcmFwcGVyXCI6IFwiVGV4dGFyZWFfdGV4dGFyZWFXcmFwcGVyX18zQ2ZVTFwiLFxuXHRcInRleHRhcmVhXCI6IFwiVGV4dGFyZWFfdGV4dGFyZWFfXzFiVVlPXCIsXG5cdFwiaW5wdXRcIjogXCJUZXh0YXJlYV9pbnB1dF9fM2c0bmtcIixcblx0XCJlcnJvclwiOiBcIlRleHRhcmVhX2Vycm9yX19kV0g3RlwiLFxuXHRcImVycm9yTWVzc2FnZVwiOiBcIlRleHRhcmVhX2Vycm9yTWVzc2FnZV9fMWk1ekxcIlxufTtcbiIsImltcG9ydCB7IFRleHRhcmVhUHJvcHMgfSBmcm9tIFwiLi9UZXh0YXJlYS5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RleHRhcmVhLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IEZvcndhcmRlZFJlZiwgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRleHRhcmVhID0gZm9yd2FyZFJlZigoeyBjbGFzc05hbWUsIGVycm9yLCAuLi5wcm9wcyB9OiBUZXh0YXJlYVByb3BzLCByZWY6IEZvcndhcmRlZFJlZjxIVE1MVGV4dEFyZWFFbGVtZW50Pik6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy50ZXh0YXJlYVdyYXBwZXIsIGNsYXNzTmFtZSl9PlxyXG5cdFx0XHQ8dGV4dGFyZWEgY2xhc3NOYW1lPXtjbihzdHlsZXMudGV4dGFyZWEsIHtcclxuXHRcdFx0XHRbc3R5bGVzLmVycm9yXTogZXJyb3JcclxuXHRcdFx0fSl9IHJlZj17cmVmfSB7Li4ucHJvcHN9Lz5cclxuXHRcdFx0e2Vycm9yICYmIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yTWVzc2FnZX0+e2Vycm9yLm1lc3NhZ2V9PC9zcGFuPn1cclxuXHRcdDwvZGl2PlxyXG5cdFx0XHJcblx0KTtcclxufSk7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInVwXCI6IFwiVXBfdXBfXzNLek53XCJcbn07XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL1VwLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFVwSWNvbiBmcm9tIFwiLi91cC5zdmdcIjtcclxuaW1wb3J0IHsgdXNlU2Nyb2xsWSB9IGZyb20gXCIuLi9ob29rcy91c2VTY3JvbGxZXCI7XHJcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b25JY29uIH0gZnJvbSBcIi4uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVXAgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IGNvbnRyb2xzID0gdXNlQW5pbWF0aW9uKCk7XHJcblx0Y29uc3QgeSA9IHVzZVNjcm9sbFkoKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnRyb2xzLnN0YXJ0KHsgb3BhY2l0eTogeSAvIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IH0pO1xyXG5cdH0sIFt5LCBjb250cm9sc10pO1xyXG5cclxuXHRjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbyh7XHJcblx0XHRcdHRvcDogMCxcclxuXHRcdFx0YmVoYXZpb3I6IFwic21vb3RoXCIsXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cdHJldHVybiAoXHJcblx0XHQ8bW90aW9uLmRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e3N0eWxlcy51cH1cclxuXHRcdFx0YW5pbWF0ZT17Y29udHJvbHN9XHJcblx0XHRcdGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxyXG5cdFx0PlxyXG5cdFx0XHQ8QnV0dG9uSWNvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiIGljb249XCJ1cFwiIG9uQ2xpY2s9e3Njcm9sbFRvVG9wfT48L0J1dHRvbkljb24+XHJcblx0XHQ8L21vdGlvbi5kaXY+XHJcblx0KTtcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVNjcm9sbFkgPSAoKTpudW1iZXIgPT4ge1xyXG4gICAgY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiXHJcblxyXG4gICAgY29uc3QgW3Njcm9vbFksIHNldFNjcm9sbFldID0gdXNlU3RhdGU8bnVtYmVyPigwKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50U2Nyb2xsWSA9IGlzQnJvd3NlciA/IHdpbmRvdy5zY3JvbGxZIDogMDtcclxuICAgICAgICBzZXRTY3JvbGxZKGN1cnJlbnRTY3JvbGxZKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSlcclxuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIHNjcm9vbFlcclxufTsiLCJleHBvcnQgKiBmcm9tIFwiLi9IdGFnL0h0YWdcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vQnV0dG9uL0J1dHRvblwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL1AvUFwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL1RhZy9UYWdcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9SYWl0aW5nL1JhaXRpbmdcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9DYXJkL0NhcmRcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9BZHZhbnRhZ2VzL0FkdmFudGFnZXNcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9Tb3J0L1NvcnRcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9JbnB1dC9JbnB1dFwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL1RleHRhcmVhL1RleHRhcmVhXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vU2VhcmNoL1NlYXJjaFwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL1Byb2R1Y3QvUHJvZHVjdFwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL0RpdmlkZXIvRGl2aWRlclwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL1Jldmlldy9SZXZpZXdcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9SZXZpZXdGb3JtL1Jldmlld0Zvcm1cIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9VcC9VcFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9CdXR0b25JY29uL0J1dHRvbkljb25cIjsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBQcm9wc1dpdGhDaGlsZHJlbiwgUmVhY3ROb2RlLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL21lbnUuaW50ZWZhY2VcIjtcclxuaW1wb3J0IHsgVG9wTGV2ZWxDYXRlZ29yeSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3RvcHBhZ2UuaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBcHBDb250ZXh0IHtcclxuICAgIG1lbnU6IE1lbnVJdGVtW107XHJcbiAgICBmaXJzdENhdGVnb3J5OiBUb3BMZXZlbENhdGVnb3J5O1xyXG4gICAgc2V0TWVudT86IChuZXdNZW51OiBNZW51SXRlbVtdKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SUFwcENvbnRleHQ+KHsgbWVudTogW10sIGZpcnN0Q2F0ZWdvcnk6IFRvcExldmVsQ2F0ZWdvcnkuQ291cnNlcyB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBBcHBDb250ZXh0UHJvdmlkZXIgPSAoeyBtZW51LCBmaXJzdENhdGVnb3J5LCBjaGlsZHJlbn06IFByb3BzV2l0aENoaWxkcmVuPElBcHBDb250ZXh0Pik6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgW21lbnVTdGF0ZSwgc2V0TWVudVN0YXRlXSA9IHVzZVN0YXRlPE1lbnVJdGVtW10+KG1lbnUpO1xyXG4gICAgY29uc3Qgc2V0TWVudSA9IChuZXdNZW51OiBNZW51SXRlbVtdKSA9PiB7XHJcbiAgICAgICAgc2V0TWVudVN0YXRlKG5ld01lbnUpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBtZW51OiBtZW51U3RhdGUsIGZpcnN0Q2F0ZWdvcnksIHNldE1lbnUgfX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG59IiwiZXhwb3J0IGNvbnN0IEFQSSA9IHtcclxuXHR0b3BQYWdlOiB7XHJcblx0XHRmaW5kOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ET01BSU4gKyBcIi9hcGkvdG9wLXBhZ2UvZmluZFwiLFxyXG5cdFx0YnlBbGlhczogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRE9NQUlOICsgXCIvYXBpL3RvcC1wYWdlL2J5QWxpYXMvXCIsXHJcblx0fSxcclxuXHRwcm9kdWN0OiB7XHJcblx0XHRmaW5kOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ET01BSU4gKyBcIi9hcGkvcHJvZHVjdC9maW5kXCIsXHJcblx0fSxcclxuXHRyZXZpZXc6IHtcclxuXHRcdGNyZWF0ZURlbW86IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RPTUFJTiArIFwiL2FwaS9yZXZpZXcvY3JlYXRlLWRlbW9cIixcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQgQ291cnNlc0ljb24gZnJvbSBcIi4vaWNvbnMvY291cnNlcy5zdmdcIlxyXG5pbXBvcnQgU2VydmljZXNJY29uIGZyb20gXCIuL2ljb25zL3NlcnZpY2VzLnN2Z1wiXHJcbmltcG9ydCBCb29rc0ljb24gZnJvbSBcIi4vaWNvbnMvYm9va3Muc3ZnXCJcclxuaW1wb3J0IFByb2R1Y3RzSWNvbiBmcm9tIFwiLi9pY29ucy9wcm9kdWN0cy5zdmdcIlxyXG5pbXBvcnQgeyBUb3BMZXZlbENhdGVnb3J5IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdG9wcGFnZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgRmlyc3RMZXZlbE1lbnVJdGVtIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbWVudS5pbnRlZmFjZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpcnN0TGV2ZWxNZW51OiBGaXJzdExldmVsTWVudUl0ZW1bXSA9IFtcclxuICAgIHsgcm91dGU6IFwiY291cnNlc1wiLCBuYW1lOiBcItCa0YPRgNGB0YtcIiwgaWNvbjogPENvdXJzZXNJY29uPjwvQ291cnNlc0ljb24+LCBpZDogVG9wTGV2ZWxDYXRlZ29yeS5Db3Vyc2VzIH0sXHJcbiAgICB7IHJvdXRlOiBcInNlcnZpY2VzXCIsIG5hbWU6IFwi0KHQtdGA0LLQuNGB0YtcIiwgaWNvbjogPFNlcnZpY2VzSWNvbj48L1NlcnZpY2VzSWNvbj4sIGlkOiBUb3BMZXZlbENhdGVnb3J5LlNlcnZpY2VzIH0sXHJcbiAgICB7IHJvdXRlOiBcImJvb2tzXCIsIG5hbWU6IFwi0JrQvdC40LPQuFwiLCBpY29uOiA8Qm9va3NJY29uPjwvQm9va3NJY29uPiwgaWQ6IFRvcExldmVsQ2F0ZWdvcnkuQm9va3MgfSxcclxuICAgIHsgcm91dGU6IFwicHJvZHVjdHNcIiwgbmFtZTogXCLQn9GA0L7QtNGD0LrRgtGLXCIsIGljb246IDxQcm9kdWN0c0ljb24+PC9Qcm9kdWN0c0ljb24+LCBpZDogVG9wTGV2ZWxDYXRlZ29yeS5Qcm9kdWN0cyB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcHJpY2VSdSA9IChwcmljZTogbnVtYmVyKTogc3RyaW5nID0+IHByaWNlLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIgXCIpLmNvbmNhdChcIiDigr1cIik7XHJcblxyXG5leHBvcnQgY29uc3QgZGVjbE9mTnVtID0gKG51bWJlcjogbnVtYmVyLCB0aXRsZXM6IFtzdHJpbmcsIHN0cmluZywgc3RyaW5nXSk6c3RyaW5nID0+IHtcclxuICAgIGNvbnN0IGNhc2VzID0gWzIsIDAsIDEsIDEsIDEsIDJdXHJcbiAgICByZXR1cm4gdGl0bGVzWyhudW1iZXIgJSAxMDAgPiA0KSAmJiAobnVtYmVyICUgMTAwIDwgMjApID8gMiA6IGNhc2VzWyhudW1iZXIgJSAxMCA8IDUpID8gbnVtYmVyICUgMTAgOiA1XV1cclxufSIsInZhciBfcGF0aCwgX3BhdGgyO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnQm9va3MocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogMjQsXG4gICAgaGVpZ2h0OiAyMyxcbiAgICBmaWxsOiBcIiM3ODdEODVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk01LjA2IDMuNzVoLS4wMDJhLjczLjczIDAgMDAtLjUwMi4xOTUuNjQ4LjY0OCAwIDAwLS4yMS40NzZ2MTAuMDZjMCAuMzY5LjMyMS42Ny43MTYuNjcgMS42NjYuMDA0IDQuNDU3LjMzIDYuMzgyIDIuMjE4VjYuODQxYS42MTMuNjEzIDAgMDAtLjA5OC0uMzRDOS43NjYgNC4xMTcgNi43MyAzLjc1NCA1LjA2IDMuNzV6TTE5LjY1NCAxNC40OFY0LjQyYzAtLjE4LS4wNzQtLjM0OS0uMjEtLjQ3NmEuNzMuNzMgMCAwMC0uNTAyLS4xOTRoLS4wMDFjLTEuNjcuMDAzLTQuNzA3LjM2Ni02LjI4NyAyLjc1MmEuNjEzLjYxMyAwIDAwLS4wOTguMzR2MTAuNTI3YzEuOTI1LTEuODg4IDQuNzE2LTIuMjE0IDYuMzgyLTIuMjE3LjM5NS0uMDAyLjcxNi0uMzAyLjcxNi0uNjcxelwiXG4gIH0pKSwgX3BhdGgyIHx8IChfcGF0aDIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTIxLjI4NSA2LjA3aC0uNTJ2OC40MWMwIC45NDMtLjgxOCAxLjcxLTEuODI1IDEuNzEzLTEuNDEzLjAwMy0zLjc0Mi4yNjItNS4zOTIgMS43MjYgMi44NTMtLjY1NSA1Ljg2Mi0uMjI5IDcuNTc2LjEzN2EuNzUxLjc1MSAwIDAwLjYwNy0uMTMuNjUyLjY1MiAwIDAwLjI2OS0uNTIzVjYuNzRjMC0uMzctLjMyMS0uNjcxLS43MTUtLjY3MXpNMy4yMzQgMTQuNDhWNi4wN2gtLjUxOGMtLjM5NSAwLS43MTYuMy0uNzE2LjY3djEwLjY2MmMwIC4yMDYuMDk4LjM5Ny4yNjkuNTI0YS43NS43NSAwIDAwLjYwNy4xM2MxLjcxNC0uMzY2IDQuNzIzLS43OTIgNy41NzYtLjEzNy0xLjY1LTEuNDY0LTMuOTgtMS43MjMtNS4zOTMtMS43MjYtMS4wMDYtLjAwMi0xLjgyNS0uNzctMS44MjUtMS43MTJ6XCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQm9va3M7IiwidmFyIF9wYXRoLCBfcGF0aDI7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdDb3Vyc2VzKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDI0LFxuICAgIGhlaWdodDogMjQsXG4gICAgZmlsbDogXCIjNzg3RDg1XCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTIgMTIuODkybC02LjMyOC0yLjU0MXYxLjgzNmMwIDIuMDA0IDIuNzIgMy41MTUgNi4zMjggMy41MTVzNi4zMjgtMS41MSA2LjMyOC0zLjUxNVYxMC4zNUwxMiAxMi44OTJ6XCJcbiAgfSkpLCBfcGF0aDIgfHwgKF9wYXRoMiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMjQgMTYuNDA1YzAtLjkxNS0uNTktMS42ODgtMS40MDYtMS45OFY3LjE0M0wyNCA2LjU2MiAxMiAxLjc0NyAwIDYuNTYybDEyIDQuODE1IDkuMTg4LTMuNjd2Ni43MTlhMi4xMDYgMi4xMDYgMCAwMC0xLjQwNyAxLjk4YzAgLjgzOC40OTUgMS41NTcgMS4yMDUgMS44OTdsLTEuMTY4IDMuNTA1IDEuMzMzLjQ0NS43NC0yLjIxOC43NCAyLjIxOCAxLjMzMy0uNDQ1LTEuMTY5LTMuNTA1QTIuMTA2IDIuMTA2IDAgMDAyNCAxNi40MDV6XCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQ291cnNlczsiLCJ2YXIgX3BhdGg7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdQcm9kdWN0cyhwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiAyNCxcbiAgICBoZWlnaHQ6IDIzLFxuICAgIGZpbGw6IFwiIzc4N0Q4NVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE1LjA5IDQuMTY4bC04LjE2OCAzLjkyLTMuMjQ3LTEuNDk3IDguMDI0LTMuNzE0YS42OTcuNjk3IDAgMDEuNTg1IDBsMi44MDYgMS4yOTF6TTIwLjMxNiA2LjU5bC04LjMxMSAzLjg2LTMuMTEzLTEuNDM3LS40NS0uMjE0IDguMTc3LTMuOTIuNDUuMjE0IDMuMjQ3IDEuNDk4ek0xMS4zMzggMTEuNTYzbC0uMDA4IDguMTIzLTcuOTYxLTMuODk1QS42NDguNjQ4IDAgMDEzIDE1LjIxOFY3LjcwM2wzLjM3MyAxLjU1OHYyLjc0YzAgLjM1LjMwNi42NDEuNjc1LjY0MS4zNyAwIC42NzUtLjI5LjY3NS0uNjQyVjkuODk1bC40NS4yMDUgMy4xNjUgMS40NjN6TTIwLjk5MSA3LjcxMmwtOC4zMDMgMy44NDMtLjAwOCA4LjEyMkwyMSAxNS42MDRsLS4wMDktNy44OTJ6XCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnUHJvZHVjdHM7IiwidmFyIF9wYXRoO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnU2VydmljZXMocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogMjQsXG4gICAgaGVpZ2h0OiAyNCxcbiAgICBmaWxsOiBcIiM3ODdEODVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xOS42NTQgOC43NjJhNC43OCA0Ljc4IDAgMDAuMDgyLS44ODdDMTkuNzM2IDUuMTg3IDE3LjQ5IDMgMTQuNzI2IDNjLTEuNzYzIDAtMy4zOTcuOTE0LTQuMjk1IDIuMzY3LTEuMjEzLS4zODMtMi40NTYtLjIxOS0zLjQ4MS40NjhTNS4zMTQgNy42MSA1LjI2NCA4Ljc5OEMzLjkxNyA5LjQyIDMgMTAuNzQ2IDMgMTIuMjA4YzAgLjI1NC4wNjMuNTAyLjExMi43NDJDMy40NzIgMTQuNzE5IDUuMDggMTYgNi45MzQgMTZoMTEuMTMyQzIwLjIxNSAxNiAyMiAxNC4yOTkgMjIgMTIuMjA4YzAtMS40NzgtLjkzLTIuODA5LTIuMzQ2LTMuNDQ2elwiXG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1NlcnZpY2VzOyIsImV4cG9ydCBlbnVtIFRvcExldmVsQ2F0ZWdvcnkge1xyXG4gICAgQ291cnNlcyxcclxuICAgIFNlcnZpY2VzLFxyXG4gICAgQm9va3MsXHJcbiAgICBQcm9kdWN0c1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvcFBhZ2VBZHZhbnRhZ2Uge1xyXG4gICAgX2lkOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIaERhdGEge1xyXG4gICAgX2lkOiBzdHJpbmc7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG4gICAganVuaW9yU2FsYXJ5OiBudW1iZXI7XHJcbiAgICBtaWRkbGVTYWxhcnk6IG51bWJlcjtcclxuICAgIHNlbmlvclNhbGFyeTogbnVtYmVyO1xyXG4gICAgdXBkYXRlZEF0OiBEYXRlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvcFBhZ2VNb2RlbCB7XHJcblx0dGFnczogc3RyaW5nW107XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0c2Vjb25kU2VjdGlvbjogc3RyaW5nO1xyXG5cdGFsaWFzOiBzdHJpbmc7XHJcblx0dGl0bGU/OiBzdHJpbmc7XHJcblx0Y2F0ZWdvcnk6IHN0cmluZztcclxuXHRzZW9UZXh0Pzogc3RyaW5nO1xyXG5cdHRhZ3NUaXRsZTogc3RyaW5nO1xyXG5cdG1ldGFUaXRsZTogc3RyaW5nO1xyXG5cdG1ldGFEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG5cdGZpcnN0Q2F0ZWdvcnk6IFRvcExldmVsQ2F0ZWdvcnk7XHJcblx0YWR2YW50YWdlcz86IFRvcFBhZ2VBZHZhbnRhZ2VbXTtcclxuXHRjcmVhdGVkQXQ6IERhdGU7XHJcblx0dXBkYXRlZEF0OiBEYXRlO1xyXG5cdGhoPzogSGhEYXRhO1xyXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiRm9vdGVyX2Zvb3Rlcl9fM2w2eVBcIlxufTtcbiIsImltcG9ydCB7IEZvb3RlclByb3BzIH0gZnJvbSBcIi4vRm9vdGVyLnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRm9vdGVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogRm9vdGVyUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxmb290ZXIgY2xhc3NOYW1lPXtjbihjbGFzc05hbWUsIHN0eWxlcy5mb290ZXIpfSB7Li4ucHJvcHN9PlxyXG5cdFx0XHQ8ZGl2Pk93bFRvcCDCqSAyMDIwIC0ge2Zvcm1hdChuZXcgRGF0ZSgpLCBcInl5eXlcIil9INCS0YHQtSDQv9GA0LDQstCwINC30LDRidC40YnQtdC90Ys8L2Rpdj5cclxuXHRcdFx0PGEgaHJlZj1cIiNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuXHRcdFx0XHTQn9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60L7QtSDRgdC+0LPQu9Cw0YjQtdC90LjQtVxyXG5cdFx0XHQ8L2E+XHJcblx0XHRcdDxhIGhyZWY9XCIjXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcblx0XHRcdFx00J/QvtC70LjRgtC40LrQsCDQutC+0L3RhNC40LTQtdC90YbQuNCw0LvRjNC90L7RgdGC0LhcclxuXHRcdFx0PC9hPlxyXG5cdFx0PC9mb290ZXI+XHJcblx0KTtcclxufTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiSGVhZGVyX2hlYWRlcl9fM2pCdWRcIixcblx0XCJtb2JpbGVNZW51XCI6IFwiSGVhZGVyX21vYmlsZU1lbnVfXzFGZDJJXCIsXG5cdFwibWVudUNsb3NlXCI6IFwiSGVhZGVyX21lbnVDbG9zZV9fQUhkdU1cIlxufTtcbiIsImltcG9ydCB7IEhlYWRlclByb3BzIH0gZnJvbSBcIi4vSGVhZGVyLnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSGVhZGVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9sb2dvLnN2Z1wiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbkljb24gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSBcIi4uL1NpZGViYXIvU2lkZWJhclwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogSGVhZGVyUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0Y29uc3QgW2lzT3BlbmVkLCBzZXRJc09wZW5lZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0SXNPcGVuZWQoZmFsc2UpXHJcblx0fSwgW3JvdXRlcl0pO1xyXG5cclxuXHRjb25zdCB2YXJpYW50cyA9IHtcclxuXHRcdG9wZW5lZDoge1xyXG5cdFx0XHRvcGFjaXR5OiAxLFxyXG5cdFx0XHR4OiAwLFxyXG5cdFx0XHR0cmFuc2l0aW9uOiB7XHJcblx0XHRcdFx0c3RpZmZuZXNzOiAyMFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y2xvc2VkOiB7XHJcblx0XHRcdG9wYWNpdHk6IDAsXHJcblx0XHRcdHg6IFwiMTAwJVwiLFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxoZWFkZXIgY2xhc3NOYW1lPXtjbihjbGFzc05hbWUsIHN0eWxlcy5oZWFkZXIpfSB7Li4ucHJvcHN9PlxyXG5cdFx0XHQ8TG9nbz48L0xvZ28+XHJcblx0XHRcdDxCdXR0b25JY29uIGFwcGVhcmFuY2U9XCJ3aGl0ZVwiIGljb249XCJtZW51XCIgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuZWQodHJ1ZSl9PjwvQnV0dG9uSWNvbj5cclxuXHRcdFx0PG1vdGlvbi5kaXYgXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMubW9iaWxlTWVudX1cclxuXHRcdFx0XHR2YXJpYW50cz17dmFyaWFudHN9XHJcblx0XHRcdFx0aW5pdGlhbD17XCJjbG9zZWRcIn1cclxuXHRcdFx0XHRhbmltYXRlPXtpc09wZW5lZCA/IFwib3BlbmVkXCIgOiBcImNsb3NlZFwifVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFNpZGViYXI+PC9TaWRlYmFyPlxyXG5cdFx0XHRcdDxCdXR0b25JY29uIFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMubWVudUNsb3NlfSBcclxuXHRcdFx0XHRcdGFwcGVhcmFuY2U9XCJ3aGl0ZVwiIFxyXG5cdFx0XHRcdFx0aWNvbj1cImNsb3NlXCIgXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW5lZChmYWxzZSl9XHJcblx0XHRcdFx0PjwvQnV0dG9uSWNvbj5cclxuXHRcdFx0PC9tb3Rpb24uZGl2PlxyXG5cdFx0PC9oZWFkZXI+XHJcblx0KTtcclxufTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcIkxheW91dF93cmFwcGVyX18zSXZCeVwiLFxuXHRcImhlYWRlclwiOiBcIkxheW91dF9oZWFkZXJfXzJNMkY4XCIsXG5cdFwic2lkZWJhclwiOiBcIkxheW91dF9zaWRlYmFyX18yMDV5QVwiLFxuXHRcImJvZHlcIjogXCJMYXlvdXRfYm9keV9fM1gxX21cIixcblx0XCJmb290ZXJcIjogXCJMYXlvdXRfZm9vdGVyX18xOTZsVVwiLFxuXHRcInNraXBMaW5rXCI6IFwiTGF5b3V0X3NraXBMaW5rX184eDVhalwiLFxuXHRcImRpc3BsYXllZFwiOiBcIkxheW91dF9kaXNwbGF5ZWRfXzE2VkotXCJcbn07XG4iLCJpbXBvcnQgeyBMYXlvdXRQcm9wcyB9IGZyb20gXCIuL0xheW91dC5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xheW91dC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCwgdXNlU3RhdGUsIEtleWJvYXJkRXZlbnQsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiLi9TaWRlYmFyL1NpZGViYXJcIjtcclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4vRm9vdGVyL0Zvb3RlclwiO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0UHJvdmlkZXIsIElBcHBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvYXBwLmNvbnRleHRcIjtcclxuaW1wb3J0IHsgVXAgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9OiBMYXlvdXRQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRjb25zdCBbaXNTa2lwTGlua0Rpc3BsYXllZCwgc2V0SXNTa2lwTGlua0Rpc3BsYXllZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSkgXHJcblx0Y29uc3QgYm9keVJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcblxyXG5cdGNvbnN0IHNraXBDb250ZW50QWN0aW9uID0gKGtleTpLZXlib2FyZEV2ZW50KSA9PiB7XHJcblx0XHRpZiAoa2V5LmNvZGUgPT0gXCJTcGFjZVwiIHx8IGtleS5jb2RlID09IFwiRW50ZXJcIikge1xyXG5cdFx0XHRrZXkucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHRib2R5UmVmLmN1cnJlbnQ/LmZvY3VzKClcclxuXHRcdH1cclxuXHRcdHNldElzU2tpcExpbmtEaXNwbGF5ZWQoZmFsc2UpXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuXHRcdFx0PGEgXHJcblx0XHRcdFx0dGFiSW5kZXg9ezF9IFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLnNraXBMaW5rLCB7XHJcblx0XHRcdFx0XHRbc3R5bGVzLmRpc3BsYXllZF06IGlzU2tpcExpbmtEaXNwbGF5ZWRcclxuXHRcdFx0fSl9XHJcblx0XHRcdFx0b25Gb2N1cz17KCkgPT4gc2V0SXNTa2lwTGlua0Rpc3BsYXllZCh0cnVlKX1cclxuXHRcdFx0XHRvbktleURvd249e3NraXBDb250ZW50QWN0aW9ufVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx00KHRgNCw0LfRgyDQuiDRgdC+0LTQtdGA0LbQsNC90LjRjlxyXG5cdFx0XHQ8L2E+XHJcblx0XHRcdDxIZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT48L0hlYWRlcj5cclxuXHRcdFx0PFNpZGViYXIgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcn0+PC9TaWRlYmFyPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9IHJlZj17Ym9keVJlZn0gdGFiSW5kZXg9ezB9PntjaGlsZHJlbn08L2Rpdj5cclxuXHRcdFx0PEZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PjwvRm9vdGVyPlxyXG5cdFx0XHQ8VXA+PC9VcD5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd2l0aExheW91dCA9IDxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gJiBJQXBwQ29udGV4dD4oQ29tcG9uZW50OiBGdW5jdGlvbkNvbXBvbmVudDxUPikgPT4ge1xyXG5cdHJldHVybiBmdW5jdGlvbiB3aXRoTGF5b3V0bkNvbXBvbmVudChwcm9wczogVCk6IEpTWC5FbGVtZW50IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxBcHBDb250ZXh0UHJvdmlkZXIgbWVudT17cHJvcHMubWVudX0gZmlyc3RDYXRlZ29yeT17cHJvcHMuZmlyc3RDYXRlZ29yeX0+XHJcblx0XHRcdFx0PExheW91dD5cclxuXHRcdFx0XHRcdDxDb21wb25lbnQgey4uLnByb3BzfT48L0NvbXBvbmVudD5cclxuXHRcdFx0XHQ8L0xheW91dD5cclxuXHRcdFx0PC9BcHBDb250ZXh0UHJvdmlkZXI+XHJcblx0XHQpO1xyXG5cdH07XHJcbn07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZpcnN0TGV2ZWxcIjogXCJNZW51X2ZpcnN0TGV2ZWxfX2hCWlJDXCIsXG5cdFwiZmlyc3RMZXZlbEFjdGl2ZVwiOiBcIk1lbnVfZmlyc3RMZXZlbEFjdGl2ZV9fMk03dGxcIixcblx0XCJzZWNvbmRMZXZlbFwiOiBcIk1lbnVfc2Vjb25kTGV2ZWxfXzFLVWxLXCIsXG5cdFwic2Vjb25kQmxvY2tcIjogXCJNZW51X3NlY29uZEJsb2NrX18zc2ZmbFwiLFxuXHRcInNlY29uZExldmVsQmxvY2tcIjogXCJNZW51X3NlY29uZExldmVsQmxvY2tfXzNnRUVKXCIsXG5cdFwidGhpcmRMZXZlbFwiOiBcIk1lbnVfdGhpcmRMZXZlbF9fM0RHem9cIixcblx0XCJ0aGlyZExldmVsQWN0aXZlXCI6IFwiTWVudV90aGlyZExldmVsQWN0aXZlX18xN0xHUVwiXG59O1xuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCwgS2V5Ym9hcmRFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvYXBwLmNvbnRleHRcIjtcclxuaW1wb3J0IHsgRmlyc3RMZXZlbE1lbnVJdGVtLCBQYWdlSXRlbSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL21lbnUuaW50ZWZhY2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9NZW51Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IGZpcnN0TGV2ZWxNZW51IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnUgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IHsgbWVudSwgc2V0TWVudSwgZmlyc3RDYXRlZ29yeSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Y29uc3QgdmFyaWFudHMgPSB7XHJcblx0XHR2aXNpYmxlOiB7XHJcblx0XHRcdG1hcmdpbkJvdHRvbTogMjAsXHJcblx0XHRcdHRyYW5zaXRpb246IHtcclxuXHRcdFx0XHR3aGVuOiBcImJlZm9yZUNoaWxkcmVuXCIsXHJcblx0XHRcdFx0c3RhZ2dlckNoaWxkcmVuOiAwLjEsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0aGlkZGVuOiB7XHJcblx0XHRcdG1hcmdpbkJvdHRvbTogMCxcclxuXHRcdH0sXHJcblx0fTtcclxuXHJcblx0Y29uc3QgdmFyaWFudHNDaGlsZHJlbiA9IHtcclxuXHRcdHZpc2libGU6IHtcclxuXHRcdFx0b3BhY2l0eTogMSxcclxuXHRcdFx0aGVpZ2h0OiAyOSxcclxuXHRcdH0sXHJcblx0XHRoaWRkZW46IHtcclxuXHRcdFx0b3BhY2l0eTogMCxcclxuXHRcdFx0aGVpZ2h0OiAwLFxyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvcGVuU2Vjb25kTGV2ZWxLZXkgPSAoa2V5OiBLZXlib2FyZEV2ZW50LCBzZWNvbmRDYXRlZ29yeTogc3RyaW5nKSA9PiB7XHJcblx0XHRpZiAoa2V5LmNvZGUgPT0gXCJTcGFjZVwiIHx8IGtleS5jb2RlID09IFwiRW50ZXJcIikge1xyXG5cdFx0XHRrZXkucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHRvcGVuU2Vjb25kTGV2ZWwoc2Vjb25kQ2F0ZWdvcnkpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBvcGVuU2Vjb25kTGV2ZWwgPSAoc2Vjb25kQ2F0ZWdvcnk6IHN0cmluZykgPT4ge1xyXG5cdFx0c2V0TWVudSAmJlxyXG5cdFx0XHRzZXRNZW51KFxyXG5cdFx0XHRcdG1lbnUubWFwKChtKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAobS5faWQuc2Vjb25kQ2F0ZWdvcnkgPT0gc2Vjb25kQ2F0ZWdvcnkpIHtcclxuXHRcdFx0XHRcdFx0bS5pc09wZW5lZCA9ICFtLmlzT3BlbmVkO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIG07XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYnVpbGRGaXJzdExldmVsID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHR7Zmlyc3RMZXZlbE1lbnUubWFwKChtKSA9PiAoXHJcblx0XHRcdFx0XHQ8ZGl2IGtleT17bS5yb3V0ZX0+XHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvJHttLnJvdXRlfWB9PlxyXG5cdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlcy5maXJzdExldmVsLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0W3N0eWxlcy5maXJzdExldmVsQWN0aXZlXTogbS5pZCA9PSBmaXJzdENhdGVnb3J5LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e20uaWNvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e20ubmFtZX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0e20uaWQgPT0gZmlyc3RDYXRlZ29yeSAmJiBidWlsZFNlY29uZExldmVsKG0pfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBidWlsZFNlY29uZExldmVsID0gKG1lbnVJdGVtOiBGaXJzdExldmVsTWVudUl0ZW0pID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kQmxvY2t9PlxyXG5cdFx0XHRcdHttZW51Lm1hcCgobSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKG0ucGFnZXMubWFwKChwKSA9PiBwLmFsaWFzKS5pbmNsdWRlcyhyb3V0ZXIuYXNQYXRoLnNwbGl0KFwiL1wiKVsyXSkpIHtcclxuXHRcdFx0XHRcdFx0bS5pc09wZW5lZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PGRpdiBrZXk9e20uX2lkLnNlY29uZENhdGVnb3J5fT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHR0YWJJbmRleD17MH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uS2V5RG93bj17KGtleTogS2V5Ym9hcmRFdmVudCkgPT4gb3BlblNlY29uZExldmVsS2V5KGtleSwgbS5faWQuc2Vjb25kQ2F0ZWdvcnkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kTGV2ZWx9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBvcGVuU2Vjb25kTGV2ZWwobS5faWQuc2Vjb25kQ2F0ZWdvcnkpfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHttLl9pZC5zZWNvbmRDYXRlZ29yeX1cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0bGF5b3V0XHJcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50cz17dmFyaWFudHN9XHJcblx0XHRcdFx0XHRcdFx0XHRpbml0aWFsPXttLmlzT3BlbmVkID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifVxyXG5cdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZT17bS5pc09wZW5lZCA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIn1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLnNlY29uZExldmVsQmxvY2spfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHtidWlsZFRoaXJkTGV2ZWwobS5wYWdlcywgbWVudUl0ZW0ucm91dGUsIG0uaXNPcGVuZWQgPz8gZmFsc2UpfVxyXG5cdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0pfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYnVpbGRUaGlyZExldmVsID0gKHBhZ2VzOiBQYWdlSXRlbVtdLCByb3V0ZTogc3RyaW5nLCBpc09wZW5lZDpib29sZWFuKSA9PiB7XHJcblx0XHRyZXR1cm4gcGFnZXMubWFwKChwKSA9PiAoXHJcblx0XHRcdDxtb3Rpb24uZGl2IGtleT17cC5faWR9IHZhcmlhbnRzPXt2YXJpYW50c0NoaWxkcmVufT5cclxuXHRcdFx0XHQ8TGluayBocmVmPXtgLyR7cm91dGV9LyR7cC5hbGlhc31gfT5cclxuXHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdHRhYkluZGV4PXtpc09wZW5lZCA/IDAgOiAtMX1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZXMudGhpcmRMZXZlbCwge1xyXG5cdFx0XHRcdFx0XHRcdFtzdHlsZXMudGhpcmRMZXZlbEFjdGl2ZV06IGAvJHtyb3V0ZX0vJHtwLmFsaWFzfWAgPT0gcm91dGVyLmFzUGF0aCxcclxuXHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHtwLmNhdGVnb3J5fVxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0PC9tb3Rpb24uZGl2PlxyXG5cdFx0KSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+e2J1aWxkRmlyc3RMZXZlbCgpfTwvZGl2PjtcclxufTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2lkZWJhclwiOiBcIlNpZGViYXJfc2lkZWJhcl9fM2NqbWtcIlxufTtcbiIsImltcG9ydCB7IFNpZGViYXJQcm9wcyB9IGZyb20gXCIuL1NpZGViYXIucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9TaWRlYmFyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuLi9NZW51L01lbnVcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uL2xvZ28uc3ZnXCJcclxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTaWRlYmFyID0gKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBTaWRlYmFyUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXsgY24oY2xhc3NOYW1lLCBzdHlsZXMuc2lkZWJhcikgfSB7Li4ucHJvcHN9PlxyXG5cdFx0XHQ8TG9nbyBjbGFzc05hbWU9eyBzdHlsZXMubG9nbyB9PjwvTG9nbz5cclxuXHRcdFx0PFNlYXJjaD48L1NlYXJjaD5cclxuXHRcdFx0PE1lbnU+PC9NZW51PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuIiwidmFyIF9wYXRoLCBfcGF0aDI7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdMb2dvKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDE1OSxcbiAgICBoZWlnaHQ6IDQ0LFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTcxLjE0IDIzLjY5NWMwIDIuMjItLjM3IDQuMTYtMS4xMSA1LjgyLS43MiAxLjY0LTEuODMgMi45Mi0zLjMzIDMuODQtMS41LjkyLTMuNDIgMS4zOC01Ljc2IDEuMzgtMi4zMiAwLTQuMjQtLjQ2LTUuNzYtMS4zOC0xLjUtLjkyLTIuNjItMi4yMS0zLjM2LTMuODctLjcyLTEuNjYtMS4wOC0zLjYtMS4wOC01Ljgycy4zNi00LjE1IDEuMDgtNS43OWMuNzQtMS42NCAxLjg2LTIuOTEgMy4zNi0zLjgxIDEuNTItLjkyIDMuNDUtMS4zOCA1Ljc5LTEuMzggMi4zMiAwIDQuMjMuNDYgNS43MyAxLjM4IDEuNS45IDIuNjEgMi4xOCAzLjMzIDMuODQuNzQgMS42NCAxLjExIDMuNTcgMS4xMSA1Ljc5em0tMTUuNjMgMGMwIDIuMjQuNDMgNC4wMSAxLjI5IDUuMzEuODYgMS4yOCAyLjI0IDEuOTIgNC4xNCAxLjkyIDEuOTQgMCAzLjMzLS42NCA0LjE3LTEuOTIuODQtMS4zIDEuMjYtMy4wNyAxLjI2LTUuMzEgMC0yLjI2LS40Mi00LjAzLTEuMjYtNS4zMS0uODQtMS4yOC0yLjIyLTEuOTItNC4xNC0xLjkyLTEuOTIgMC0zLjMxLjY0LTQuMTcgMS45Mi0uODYgMS4yOC0xLjI5IDMuMDUtMS4yOSA1LjMxem00Ni4wODQtMTAuNjhsLTUuNDYgMjEuNDJoLTUuMTZsLTIuOTEtMTEuMjVjLS4wNi0uMjItLjE0LS41NS0uMjQtLjk5LS4wOC0uNDQtLjE4LS45Mi0uMy0xLjQ0LS4xLS41Mi0uMTktMS4wMS0uMjctMS40Ny0uMDgtLjQ4LS4xNC0uODUtLjE4LTEuMTEtLjAyLjI2LS4wOC42My0uMTggMS4xMS0uMDguNDYtLjE3Ljk1LS4yNyAxLjQ3LS4xLjUtLjIuOTgtLjMgMS40NC0uMS40NC0uMTguNzgtLjI0IDEuMDJsLTIuODggMTEuMjJoLTUuMTZsLTUuNDYtMjEuNDJoNC40N2wyLjczIDExLjdjLjEyLjQ2LjI1IDEuMDQuMzkgMS43NHMuMjcgMS40LjM5IDIuMWMuMTIuNy4yMSAxLjI5LjI3IDEuNzcuMDYtLjUuMTUtMS4wOS4yNy0xLjc3LjEyLS43LjI0LTEuMzcuMzYtMi4wMS4xNC0uNjYuMjYtMS4xNy4zNi0xLjUzbDMuMTItMTJoNC4yOWwzLjEyIDEyYy4xLjM0LjIxLjg0LjMzIDEuNWE1Mi45NDcgNTIuOTQ3IDAgMDEuNjYgMy44MWMuMDYtLjUuMTUtMS4wOS4yNy0xLjc3LjEyLS43LjI1LTEuNC4zOS0yLjEuMTYtLjcuMjktMS4yOC4zOS0xLjc0bDIuNzMtMTEuN2g0LjQ3em0yLjY5NCAyMS40MnYtMjEuNDJoNC41M3YxNy42N2g4Ljd2My43NWgtMTMuMjN6TTEyOC4zNTIgMzIuODM1Yy4zNjggMCAuNzA0LS4wMjQgMS4wMDgtLjA3Mi4zMi0uMDQ4LjYwOC0uMTIuODY0LS4yMTZ2Ljc5MmE1LjU4NiA1LjU4NiAwIDAxLS44NjQuMjRjLS4zMi4wNjQtLjY4LjA5Ni0xLjA4LjA5Ni0xLjEwNCAwLTEuODk2LS4zMTItMi4zNzYtLjkzNi0uNDgtLjYyNC0uNzItMS41MzYtLjcyLTIuNzM2di04LjQ3MmgtMS45MnYtLjYyNGwxLjkyLS4yMTYuMjg4LTMuMDcyaC42NDh2My4wOTZoNC4wMzJ2LjgxNmgtNC4wMzJ2OC40YzAgLjk0NC4xNiAxLjY2NC40OCAyLjE2LjMzNi40OTYuOTIuNzQ0IDEuNzUyLjc0NHptMTUuMDUxLTUuNzZjMCAxLjI4LS4yMDggMi40MTYtLjYyNCAzLjQwOC0uNC45OTItMS4wMTYgMS43NzYtMS44NDggMi4zNTItLjgzMi41Ni0xLjg3Mi44NC0zLjEyLjg0LTEuMiAwLTIuMjE2LS4yOC0zLjA0OC0uODQtLjgxNi0uNTYtMS40NC0xLjMzNi0xLjg3Mi0yLjMyOC0uNDE2LS45OTItLjYyNC0yLjEzNi0uNjI0LTMuNDMyIDAtMi4wMzIuNDk2LTMuNjQgMS40ODgtNC44MjQgMS4wMDgtMS4xODQgMi40LTEuNzc2IDQuMTc2LTEuNzc2IDEuMjY0IDAgMi4yOTYuMjg4IDMuMDk2Ljg2NC44LjU3NiAxLjM5MiAxLjM2IDEuNzc2IDIuMzUyLjQuOTkyLjYgMi4xMi42IDMuMzg0em0tMTAuMTc2IDBjMCAxLjcxMi4zNzYgMy4xMDQgMS4xMjggNC4xNzYuNzUyIDEuMDU2IDEuOTA0IDEuNTg0IDMuNDU2IDEuNTg0IDEuMDcyIDAgMS45NTItLjI0IDIuNjQtLjcyLjY4OC0uNDk2IDEuMTkyLTEuMTc2IDEuNTEyLTIuMDQuMzItLjg2NC40OC0xLjg2NC40OC0zIDAtMS4wODgtLjE1Mi0yLjA2NC0uNDU2LTIuOTI4LS4zMDQtLjg2NC0uNzkyLTEuNTUyLTEuNDY0LTIuMDY0LS42NTYtLjUxMi0xLjUyLS43NjgtMi41OTItLjc2OC0xLjUyIDAtMi42ODguNTEyLTMuNTA0IDEuNTM2LS44IDEuMDA4LTEuMiAyLjQxNi0xLjIgNC4yMjR6bTE5LjIyNS02LjZjMS42NjQgMCAyLjkzNi41NTIgMy44MTYgMS42NTYuODk2IDEuMTA0IDEuMzQ0IDIuNzIgMS4zNDQgNC44NDggMCAyLjE0NC0uNDcyIDMuOC0xLjQxNiA0Ljk2OC0uOTQ0IDEuMTUyLTIuMjU2IDEuNzI4LTMuOTM2IDEuNzI4LTEuMiAwLTIuMTYtLjI3Mi0yLjg4LS44MTYtLjcwNC0uNTQ0LTEuMi0xLjItMS40ODgtMS45NjhoLS4wNDhjLjAxNi40OC4wMjQuOTc2LjAyNCAxLjQ4OC4wMTYuNDk2LjAyNC45NzYuMDI0IDEuNDR2NS4yMzJoLS45MTJWMjAuNzE1aC43NjhsLjA5NiAyLjc4NGguMDQ4YTQuNDk2IDQuNDk2IDAgMDEuODg4LTEuNDY0Yy40LS40NjQuOTA0LS44NCAxLjUxMi0xLjEyOC42MDgtLjI4OCAxLjMyOC0uNDMyIDIuMTYtLjQzMnptLS4wNzIuODRjLTEuNDg4IDAtMi42MDguNDk2LTMuMzYgMS40ODgtLjczNi45NzYtMS4xMTIgMi4zNjgtMS4xMjggNC4xNzZ2LjE0NGMwIDEuOTM2LjM3NiAzLjM3NiAxLjEyOCA0LjMyLjc1Mi45MjggMS44MTYgMS4zOTIgMy4xOTIgMS4zOTIgMS40MDggMCAyLjQ5Ni0uNTA0IDMuMjY0LTEuNTEyLjc4NC0xLjAwOCAxLjE3Ni0yLjQ1NiAxLjE3Ni00LjM0NCAwLTMuNzc2LTEuNDI0LTUuNjY0LTQuMjcyLTUuNjY0ek00MSAxLjc0NGExLjE5IDEuMTkgMCAwMC0xLjIwMS0xLjE4IDEuMTkgMS4xOSAwIDAwLTEuMjAxIDEuMThjMCAxLjI3OS0xLjEzNyAyLjM1OS0yLjQ4MyAyLjM1OWgtNS40MThjLTMuMDktMS41NDQtNi42MDgtMi4zNTktMTAuMTk3LTIuMzU5LTMuNTkgMC03LjEwOC44MTUtMTAuMTk3IDIuMzU5SDQuOWMtMS4zNTMgMC0yLjQ5Ny0xLjA4LTIuNDk3LTIuMzZhMS4xOSAxLjE5IDAgMDAtMS4yLTEuMTc4QTEuMTkgMS4xOSAwIDAwMCAxLjc0NHYzLjUzOGMwIDIuMTg4Ljg4MiA0LjI1IDIuNDg0IDUuODEyQy44NTYgMTMuNzA2IDAgMTYuNTY5IDAgMTkuNDM0YzAgOS43NTQgOS4xOTYgMTcuNjkgMjAuNSAxNy42OVM0MSAyOS4xODggNDEgMTkuNDM0YzAtMi44Ni0uODU0LTUuNzItMi40NzctOC4zM0M0MC4wNTMgOS42MTIgNDEgNy41NTMgNDEgNS4yODNWMS43NDR6TTIwLjUgNC4xMDNjMS45MTQgMCAzLjgwMi4yNTggNS42Ljc1N2ExMC44MDcgMTAuODA3IDAgMDAtNS41OTMgNC45OTggMTAuODA0IDEwLjgwNCAwIDAwLTUuNTk4LTUgMjAuOTQzIDIwLjk0MyAwIDAxNS41OTEtLjc1NXptMCAxOS41NzljLjQ1LjczMiAxLjAxIDEuMzkgMS42NjEgMS45NTJMMjAuNSAyOC43MWwtMS42NjEtMy4wNzZhOC4zNTUgOC4zNTUgMCAwMDEuNjYxLTEuOTUyem0tNy4yMDcgMS42NDljLTMuMzEyIDAtNi4wMDYtMi42NDUtNi4wMDYtNS44OTcgMC0zLjI1MSAyLjY5NC01Ljg5NyA2LjAwNi01Ljg5NyAzLjMxMiAwIDYuMDA2IDIuNjQ2IDYuMDA2IDUuODk3IDAgMy4yNTItMi42OTQgNS44OTctNi4wMDYgNS44OTd6bTguNDA4LTUuODk3YzAtLjA5NC4wMDMtLjE4Ny4wMDctLjI4YTEuMTUgMS4xNSAwIDAwLjAxNC0uMTcydi0uMDIyYy4yNDctMy4wMyAyLjgzNi01LjQyMyA1Ljk4NS01LjQyMyAzLjMxMiAwIDYuMDA2IDIuNjQ2IDYuMDA2IDUuODk3IDAgMy4yNTItMi42OTQgNS44OTctNi4wMDYgNS44OTctMy4zMTIgMC02LjAwNi0yLjY0NS02LjAwNi01Ljg5N3pNMi40MjYgNS44MDZBNC45NjcgNC45NjcgMCAwMDQuOSA2LjQ2aDUuOTkyYzIuMjQ4IDAgNC4zNjEuODYgNS45NSAyLjQyM2E4LjEzNyA4LjEzNyAwIDAxMi4zOCA0LjcgOC40NTIgOC40NTIgMCAwMC01LjE3NS0yLjM3MiAxLjIyMiAxLjIyMiAwIDAwLS4yOC0uMDMzSDguNTAzYTYuMjEgNi4yMSAwIDAxLTMuNTI1LTEuMDg3IDEuMTg3IDEuMTg3IDAgMDAtLjM5Ni0uMjk2Yy0xLjIwMi0uOTc2LTIuMDEtMi4zOTMtMi4xNTYtMy45OXptMzYuMTcyIDEzLjYyOGMwIDguNDU0LTguMTE5IDE1LjMzMS0xOC4wOTggMTUuMzMxLTkuOTggMC0xOC4wOTgtNi44NzctMTguMDk4LTE1LjMzIDAtMi4zNi42OTQtNC43MzIgMi4wMTUtNi45MjFhOC41NjggOC41NjggMCAwMDMuMDYuOTYzYy0xLjU5NiAxLjUwNC0yLjU5MiAzLjYxOC0yLjU5MiA1Ljk1NyAwIDQuNTUyIDMuNzcyIDguMjU1IDguNDA4IDguMjU1YTguNDkgOC40OSAwIDAwMy41MjYtLjc2MWwyLjYyIDQuODUyYy4yMDguMzg2LjYxNi42MjcgMS4wNjEuNjI3LjQ0NSAwIC44NTMtLjI0MSAxLjA2MS0uNjI3bDIuNjItNC44NTJhOC40OSA4LjQ5IDAgMDAzLjUyNi43NjFjNC42MzYgMCA4LjQwOC0zLjcwMyA4LjQwOC04LjI1NSAwLTIuMzM4LS45OTUtNC40NTItMi41OTEtNS45NTZhOC41OTMgOC41OTMgMCAwMDMuMDY0LS45NTdjMS4zMTggMi4xODggMi4wMSA0LjU1NiAyLjAxIDYuOTEzem0tMi4yLTkuNjE5YTEuMTk2IDEuMTk2IDAgMDAtLjM1Ny4yNjYgNi4xODQgNi4xODQgMCAwMS0zLjUzIDEuMDk4aC01LjI2M2MtLjA5MyAwLS4xODQuMDExLS4yNzIuMDMxYTguNDUyIDguNDUyIDAgMDAtNS4xOCAyLjM1OCA4LjEzOCA4LjEzOCAwIDAxMi4zNzgtNC42ODQgOC40MzEgOC40MzEgMCAwMTUuOTUtMi40MjNoNS45OTFjLjg3MyAwIDEuNzE2LS4yMjYgMi40NTgtLjY0OS0uMTQ4IDEuNjA2LS45NjMgMy4wMjctMi4xNzQgNC4wMDN6XCIsXG4gICAgZmlsbDogXCIjNzY1M0ZDXCJcbiAgfSkpLCBfcGF0aDIgfHwgKF9wYXRoMiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTMuNSAxNi42ODNsMS4wMSAyLjU5MWgzLjI3bC0yLjY0NSAxLjYwMiAxLjAxIDIuNTktMi42NDUtMS42LTIuNjQ1IDEuNiAxLjAxLTIuNTktMi42NDUtMS42MDJoMy4yN2wxLjAxLTIuNTl6TTI3LjUgMTYuNjgzbDEuMDEgMi41OTFoMy4yN2wtMi42NDUgMS42MDIgMS4wMSAyLjU5LTIuNjQ1LTEuNi0yLjY0NSAxLjYgMS4wMS0yLjU5LTIuNjQ1LTEuNjAyaDMuMjdsMS4wMS0yLjU5elwiLFxuICAgIGZpbGw6IFwiIzc2NTNGQ1wiXG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0xvZ287IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9oZWFkJ1xuaW1wb3J0IHsgdG9CYXNlNjQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NCdcbmltcG9ydCB7XG4gIEltYWdlQ29uZmlnLFxuICBpbWFnZUNvbmZpZ0RlZmF1bHQsXG4gIExvYWRlclZhbHVlLFxuICBWQUxJRF9MT0FERVJTLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgOyhnbG9iYWwgYXMgYW55KS5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlXG59XG5cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gWydsYXp5JywgJ2VhZ2VyJywgdW5kZWZpbmVkXSBhcyBjb25zdFxudHlwZSBMb2FkaW5nVmFsdWUgPSB0eXBlb2YgVkFMSURfTE9BRElOR19WQUxVRVNbbnVtYmVyXVxuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlciA9IChyZXNvbHZlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXJQcm9wcyA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgd2lkdGg6IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG59XG5cbnR5cGUgRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMgPSBJbWFnZUxvYWRlclByb3BzICYgeyByb290OiBzdHJpbmcgfVxuXG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcDxcbiAgTG9hZGVyVmFsdWUsXG4gIChwcm9wczogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuPihbXG4gIFsnaW1naXgnLCBpbWdpeExvYWRlcl0sXG4gIFsnY2xvdWRpbmFyeScsIGNsb3VkaW5hcnlMb2FkZXJdLFxuICBbJ2FrYW1haScsIGFrYW1haUxvYWRlcl0sXG4gIFsnZGVmYXVsdCcsIGRlZmF1bHRMb2FkZXJdLFxuXSlcblxuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgJ2ZpbGwnLFxuICAnZml4ZWQnLFxuICAnaW50cmluc2ljJyxcbiAgJ3Jlc3BvbnNpdmUnLFxuICB1bmRlZmluZWQsXG5dIGFzIGNvbnN0XG50eXBlIExheW91dFZhbHVlID0gdHlwZW9mIFZBTElEX0xBWU9VVF9WQUxVRVNbbnVtYmVyXVxuXG50eXBlIFBsYWNlaG9sZGVyVmFsdWUgPSAnYmx1cicgfCAnZW1wdHknXG5cbnR5cGUgSW1nRWxlbWVudFN0eWxlID0gTm9uTnVsbGFibGU8SlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXVsnc3R5bGUnXT5cblxuZXhwb3J0IHR5cGUgSW1hZ2VQcm9wcyA9IE9taXQ8XG4gIEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ10sXG4gICdzcmMnIHwgJ3NyY1NldCcgfCAncmVmJyB8ICd3aWR0aCcgfCAnaGVpZ2h0JyB8ICdsb2FkaW5nJyB8ICdzdHlsZSdcbj4gJiB7XG4gIHNyYzogc3RyaW5nXG4gIGxvYWRlcj86IEltYWdlTG9hZGVyXG4gIHF1YWxpdHk/OiBudW1iZXIgfCBzdHJpbmdcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBMb2FkaW5nVmFsdWVcbiAgdW5vcHRpbWl6ZWQ/OiBib29sZWFuXG4gIG9iamVjdEZpdD86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0Rml0J11cbiAgb2JqZWN0UG9zaXRpb24/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdFBvc2l0aW9uJ11cbn0gJiAoXG4gICAgfCB7XG4gICAgICAgIHdpZHRoPzogbmV2ZXJcbiAgICAgICAgaGVpZ2h0PzogbmV2ZXJcbiAgICAgICAgLyoqIEBkZXByZWNhdGVkIFVzZSBgbGF5b3V0PVwiZmlsbFwiYCBpbnN0ZWFkICovXG4gICAgICAgIHVuc2l6ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB8IHsgd2lkdGg/OiBuZXZlcjsgaGVpZ2h0PzogbmV2ZXI7IGxheW91dDogJ2ZpbGwnIH1cbiAgICB8IHtcbiAgICAgICAgd2lkdGg6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBoZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBsYXlvdXQ/OiBFeGNsdWRlPExheW91dFZhbHVlLCAnZmlsbCc+XG4gICAgICB9XG4gICkgJlxuICAoXG4gICAgfCB7XG4gICAgICAgIHBsYWNlaG9sZGVyPzogRXhjbHVkZTxQbGFjZWhvbGRlclZhbHVlLCAnYmx1cic+XG4gICAgICAgIGJsdXJEYXRhVVJMPzogbmV2ZXJcbiAgICAgIH1cbiAgICB8IHsgcGxhY2Vob2xkZXI6ICdibHVyJzsgYmx1ckRhdGFVUkw6IHN0cmluZyB9XG4gIClcblxuY29uc3Qge1xuICBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMsXG4gIGxvYWRlcjogY29uZmlnTG9hZGVyLFxuICBwYXRoOiBjb25maWdQYXRoLFxuICBkb21haW5zOiBjb25maWdEb21haW5zLFxuICBlbmFibGVCbHVycnlQbGFjZWhvbGRlcjogY29uZmlnRW5hYmxlQmx1cnJ5UGxhY2Vob2xkZXIsXG59ID1cbiAgKChwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyBhcyBhbnkpIGFzIEltYWdlQ29uZmlnKSB8fCBpbWFnZUNvbmZpZ0RlZmF1bHRcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbLi4uY29uZmlnRGV2aWNlU2l6ZXMsIC4uLmNvbmZpZ0ltYWdlU2l6ZXNdXG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcbmFsbFNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG5mdW5jdGlvbiBnZXRXaWR0aHMoXG4gIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQsXG4gIGxheW91dDogTGF5b3V0VmFsdWUsXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbik6IHsgd2lkdGhzOiBudW1iZXJbXTsga2luZDogJ3cnIHwgJ3gnIH0ge1xuICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgY29uc3Qgdmlld3BvcnRXaWR0aFJlID0gLyhefFxccykoMT9cXGQ/XFxkKXZ3L2dcbiAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbXVxuICAgIGZvciAobGV0IG1hdGNoOyAobWF0Y2ggPSB2aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcykpOyBtYXRjaCkge1xuICAgICAgcGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKVxuICAgIH1cbiAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxXG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcihcbiAgICAgICAgICAocykgPT4gcyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgKSxcbiAgICAgICAga2luZDogJ3cnLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB3aWR0aHM6IGFsbFNpemVzLCBraW5kOiAndycgfVxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8XG4gICAgbGF5b3V0ID09PSAnZmlsbCcgfHxcbiAgICBsYXlvdXQgPT09ICdyZXNwb25zaXZlJ1xuICApIHtcbiAgICByZXR1cm4geyB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLCBraW5kOiAndycgfVxuICB9XG5cbiAgY29uc3Qgd2lkdGhzID0gW1xuICAgIC4uLm5ldyBTZXQoXG4gICAgICAvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICBbd2lkdGgsIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi9dLm1hcChcbiAgICAgICAgKHcpID0+IGFsbFNpemVzLmZpbmQoKHApID0+IHAgPj0gdykgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgIClcbiAgICApLFxuICBdXG4gIHJldHVybiB7IHdpZHRocywga2luZDogJ3gnIH1cbn1cblxudHlwZSBHZW5JbWdBdHRyc0RhdGEgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHVub3B0aW1pemVkOiBib29sZWFuXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbiAgbG9hZGVyOiBJbWFnZUxvYWRlclxuICB3aWR0aD86IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG4gIHNpemVzPzogc3RyaW5nXG59XG5cbnR5cGUgR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHNyY1NldDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7XG4gIHNyYyxcbiAgdW5vcHRpbWl6ZWQsXG4gIGxheW91dCxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG4gIHNpemVzLFxuICBsb2FkZXIsXG59OiBHZW5JbWdBdHRyc0RhdGEpOiBHZW5JbWdBdHRyc1Jlc3VsdCB7XG4gIGlmICh1bm9wdGltaXplZCkge1xuICAgIHJldHVybiB7IHNyYywgc3JjU2V0OiB1bmRlZmluZWQsIHNpemVzOiB1bmRlZmluZWQgfVxuICB9XG5cbiAgY29uc3QgeyB3aWR0aHMsIGtpbmQgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcylcbiAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxXG5cbiAgcmV0dXJuIHtcbiAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICBzcmNTZXQ6IHdpZHRoc1xuICAgICAgLm1hcChcbiAgICAgICAgKHcsIGkpID0+XG4gICAgICAgICAgYCR7bG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogdyB9KX0gJHtcbiAgICAgICAgICAgIGtpbmQgPT09ICd3JyA/IHcgOiBpICsgMVxuICAgICAgICAgIH0ke2tpbmR9YFxuICAgICAgKVxuICAgICAgLmpvaW4oJywgJyksXG5cbiAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICBzcmM6IGxvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHdpZHRoc1tsYXN0XSB9KSxcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRJbnQoeDogdW5rbm93bik6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4geFxuICB9XG4gIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpIHtcbiAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcilcbiAgaWYgKGxvYWQpIHtcbiAgICByZXR1cm4gbG9hZCh7IHJvb3Q6IGNvbmZpZ1BhdGgsIC4uLmxvYWRlclByb3BzIH0pXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtWQUxJRF9MT0FERVJTLmpvaW4oXG4gICAgICAnLCAnXG4gICAgKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gXG4gIClcbn1cblxuLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIHJlbW92ZVBsYWNlaG9sZGVyKFxuICBlbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50IHwgbnVsbCxcbiAgcGxhY2Vob2xkZXI6IFBsYWNlaG9sZGVyVmFsdWVcbikge1xuICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJyAmJiBlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQuY29tcGxldGUpIHtcbiAgICAgIC8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuICAgICAgLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuICAgICAgLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbiAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJ1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XG4gIHNyYyxcbiAgc2l6ZXMsXG4gIHVub3B0aW1pemVkID0gZmFsc2UsXG4gIHByaW9yaXR5ID0gZmFsc2UsXG4gIGxvYWRpbmcsXG4gIGNsYXNzTmFtZSxcbiAgcXVhbGl0eSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgb2JqZWN0Rml0LFxuICBvYmplY3RQb3NpdGlvbixcbiAgbG9hZGVyID0gZGVmYXVsdEltYWdlTG9hZGVyLFxuICBwbGFjZWhvbGRlciA9ICdlbXB0eScsXG4gIGJsdXJEYXRhVVJMLFxuICAuLi5hbGxcbn06IEltYWdlUHJvcHMpIHtcbiAgbGV0IHJlc3Q6IFBhcnRpYWw8SW1hZ2VQcm9wcz4gPSBhbGxcbiAgbGV0IGxheW91dDogTm9uTnVsbGFibGU8TGF5b3V0VmFsdWU+ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJ1xuICBsZXQgdW5zaXplZCA9IGZhbHNlXG4gIGlmICgndW5zaXplZCcgaW4gcmVzdCkge1xuICAgIHVuc2l6ZWQgPSBCb29sZWFuKHJlc3QudW5zaXplZClcbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ3Vuc2l6ZWQnXVxuICB9IGVsc2UgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXRcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsnbGF5b3V0J11cbiAgfVxuXG4gIGlmICghY29uZmlnRW5hYmxlQmx1cnJ5UGxhY2Vob2xkZXIpIHtcbiAgICBwbGFjZWhvbGRlciA9ICdlbXB0eSdcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAodW5zaXplZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgZGVwcmVjYXRlZCBcInVuc2l6ZWRcIiBwcm9wZXJ0eSwgd2hpY2ggd2FzIHJlbW92ZWQgaW4gZmF2b3Igb2YgdGhlIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5YFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpc0xhenkgPVxuICAgICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJylcbiAgaWYgKHNyYyAmJiBzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgdW5vcHRpbWl6ZWQgPSB0cnVlXG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gdXNlSW50ZXJzZWN0aW9uPEhUTUxJbWFnZUVsZW1lbnQ+KHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICAgIGRpc2FibGVkOiAhaXNMYXp5LFxuICB9KVxuICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWRcblxuICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aClcbiAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodClcbiAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KVxuXG4gIGNvbnN0IE1JTl9JTUdfU0laRV9GT1JfUExBQ0VIT0xERVIgPSA1MDAwXG4gIGNvbnN0IHRvb1NtYWxsRm9yQmx1cnJ5UGxhY2Vob2xkZXIgPVxuICAgIHdpZHRoSW50ICYmIGhlaWdodEludCAmJiB3aWR0aEludCAqIGhlaWdodEludCA8IE1JTl9JTUdfU0laRV9GT1JfUExBQ0VIT0xERVJcbiAgY29uc3Qgc2hvdWxkU2hvd0JsdXJyeVBsYWNlaG9sZGVyID1cbiAgICBwbGFjZWhvbGRlciA9PT0gJ2JsdXInICYmICF0b29TbWFsbEZvckJsdXJyeVBsYWNlaG9sZGVyXG5cbiAgbGV0IHdyYXBwZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdmc6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgaW1nU3R5bGU6IEltZ0VsZW1lbnRTdHlsZSB8IHVuZGVmaW5lZCA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG5cbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuXG4gICAgb2JqZWN0Rml0LFxuICAgIG9iamVjdFBvc2l0aW9uLFxuXG4gICAgLi4uKHNob3VsZFNob3dCbHVycnlQbGFjZWhvbGRlclxuICAgICAgPyB7XG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgLFxuICAgICAgICB9XG4gICAgICA6IHVuZGVmaW5lZCksXG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCAhPT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50XG4gICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgXG4gICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0geyBkaXNwbGF5OiAnYmxvY2snLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZ1RvcCB9XG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICB9XG4gICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gXG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnQsXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCA9PT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGltZ0F0dHJpYnV0ZXM6IEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICAgIHNyYzpcbiAgICAgICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgIHNpemVzOiB1bmRlZmluZWQsXG4gIH1cblxuICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgc3JjLFxuICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICBsYXlvdXQsXG4gICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgc2l6ZXMsXG4gICAgICBsb2FkZXIsXG4gICAgfSlcbiAgfVxuXG4gIGlmICh1bnNpemVkKSB7XG4gICAgd3JhcHBlclN0eWxlID0gdW5kZWZpbmVkXG4gICAgc2l6ZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIGltZ1N0eWxlID0gdW5kZWZpbmVkXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuICAgICAge3NpemVyU3R5bGUgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3NpemVyU3R5bGV9PlxuICAgICAgICAgIHtzaXplclN2ZyA/IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke3RvQmFzZTY0KHNpemVyU3ZnKX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHshaXNWaXNpYmxlICYmIChcbiAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgey4uLmdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICAgIGxvYWRlcixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgICAgIHNpemVzPXtzaXplc31cbiAgICAgICAgICAgIHN0eWxlPXtpbWdTdHlsZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICApfVxuICAgICAgPGltZ1xuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgey4uLmltZ0F0dHJpYnV0ZXN9XG4gICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgcmVmPXsoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIHNldFJlZihlbGVtZW50KVxuICAgICAgICAgIHJlbW92ZVBsYWNlaG9sZGVyKGVsZW1lbnQsIHBsYWNlaG9sZGVyKVxuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAvPlxuICAgICAge3ByaW9yaXR5ID8gKFxuICAgICAgICAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgICAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgJ19fbmltZy0nICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmMgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyY1NldCArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgYXM9XCJpbWFnZVwiXG4gICAgICAgICAgICBocmVmPXtpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc3Jjc2V0PXtpbWdBdHRyaWJ1dGVzLnNyY1NldH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc2l6ZXM9e2ltZ0F0dHJpYnV0ZXMuc2l6ZXN9XG4gICAgICAgICAgPjwvbGluaz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy9CVUlMVCBJTiBMT0FERVJTXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyY1xufVxuXG5mdW5jdGlvbiBpbWdpeExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuICBjb25zdCBwYXJhbXMgPSBbJ2F1dG89Zm9ybWF0JywgJ2ZpdD1tYXgnLCAndz0nICsgd2lkdGhdXG4gIGxldCBwYXJhbXNTdHJpbmcgPSAnJ1xuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5wdXNoKCdxPScgKyBxdWFsaXR5KVxuICB9XG5cbiAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICBwYXJhbXNTdHJpbmcgPSAnPycgKyBwYXJhbXMuam9pbignJicpXG4gIH1cbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gXG59XG5cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGggfTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YFxufVxuXG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgY29uc3QgcGFyYW1zID0gWydmX2F1dG8nLCAnY19saW1pdCcsICd3XycgKyB3aWR0aCwgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJyldXG4gIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nXG4gIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW11cblxuICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpXG4gICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpXG5cbiAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbihcbiAgICAgICAgICAnLCAnXG4gICAgICAgICl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICBsZXQgcGFyc2VkU3JjOiBVUkxcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICtcbiAgICAgICAgICAgIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5hc1BhdGgpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8VD4oXG4gIHA6IFByb21pc2U8VD4sXG4gIG1zOiBudW1iZXIsXG4gIGVycjogRXJyb3Jcbik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgcC50aGVuKChyKSA9PiB7XG4gICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgICByZXNvbHZlKHIpXG4gICAgfSkuY2F0Y2gocmVqZWN0KVxuXG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSwgbXMpXG4gICAgKVxuICB9KVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUISlcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgICAgLnRoZW4oKHsgc2NyaXB0cywgY3NzIH0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgICAgIF0gYXMgY29uc3QpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCkgPT4gKHtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdLFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKVxuICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKHsgZW50cnlwb2ludCwgc3R5bGVzIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICAgID4oeyBzdHlsZXM6IHN0eWxlcyEgfSwgZW50cnlwb2ludClcbiAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKSA9PiB7fSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmXG4gICAgICBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8XG4gICAgICAgIHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpXG4gICAgICA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICtcbiAgICAgICAgICBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGxldCBiYXNlOiBVUkxcblxuICB0cnkge1xuICAgIGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICB9IGNhdGNoIChfKSB7XG4gICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpXG4gIH1cbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWU6IHN0cmluZywgcGFnZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGF0aG5hbWVcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChXcmFwQXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJlxuICAgICAgICAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiZcbiAgICAgICAgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IChvcHRpb25zIGFzIGFueSkuX2hcblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgIHJld3JpdGVzLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUoXG4gICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHBhZ2VzXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgaWYgKFxuICAgICAgICAob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICAgIHBhdGhuYW1lID09PSAnL19lcnJvcicgJiZcbiAgICAgICAgc2VsZi5fX05FWFRfREFUQV9fLnByb3BzPy5wYWdlUHJvcHM/LnN0YXR1c0NvZGUgPT09IDUwMCAmJlxuICAgICAgICBwcm9wcz8ucGFnZVByb3BzXG4gICAgICApIHtcbiAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBQcmV2aWV3RGF0YSB9IGZyb20gJ25leHQvdHlwZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiAoc3RyaW5nIHwgbnVtYmVyKVtdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogVGhlIGN1cnJlbnRseSBhY3RpdmUgbG9jYWxlXG4gICAqL1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIEFsbCBjb25maWd1cmVkIGxvY2FsZXNcbiAgICovXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAvKipcbiAgICogVGhlIGNvbmZpZ3VyZWQgZGVmYXVsdCBsb2NhbGVcbiAgICovXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBzdHJpbmdbXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGFmdGVySW50ZXJhY3RpdmU/OiBzdHJpbmdbXTsgYmVmb3JlSW50ZXJhY3RpdmU/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xuICBkaXNhYmxlT3B0aW1pemVkTG9hZGluZz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogUHJldmlld0RhdGFcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0aXRsZVwiOiBcIlRvcFBhZ2VDb21wb25lbnRfdGl0bGVfXzI0emlJXCIsXG5cdFwiaGhUaXRsZVwiOiBcIlRvcFBhZ2VDb21wb25lbnRfaGhUaXRsZV9fMjB0Wl9cIixcblx0XCJzZW9cIjogXCJUb3BQYWdlQ29tcG9uZW50X3Nlb19fMTIwLXZcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWR2YW50YWdlcywgSHRhZywgUHJvZHVjdCwgU29ydCwgVGFnIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgVG9wUGFnZUNvbXBvbmVudFByb3BzIH0gZnJvbSBcIi4vVG9wUGFnZUNvbXBvbmVudC5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RvcFBhZ2VDb21wb25lbnQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBIaERhdGEgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IaERhdGEvSGhEYXRhXCI7XHJcbmltcG9ydCB7IFRvcExldmVsQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy90b3BwYWdlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBTb3J0RW51bSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NvcnQvU29ydC5wcm9wc1wiO1xyXG5pbXBvcnQgeyBzb3J0UmVkdWNlciB9IGZyb20gXCIuL3NvcnQucmVkdWNlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvcFBhZ2VDb21wb25lbnQgPSAoe1xyXG5cdHBhZ2UsXHJcblx0cHJvZHVjdHMsXHJcblx0Zmlyc3RDYXRlZ29yeSxcclxufTogVG9wUGFnZUNvbXBvbmVudFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IFt7IHByb2R1Y3RzOiBzb3J0ZWRQcm9kdWN0cywgc29ydCB9LCBkaXNwYXRoU29ydF0gPSB1c2VSZWR1Y2VyKHNvcnRSZWR1Y2VyLCB7XHJcblx0XHRwcm9kdWN0cyxcclxuXHRcdHNvcnQ6IFNvcnRFbnVtLlJhdGluZyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3Qgc2V0U29ydCA9IChzb3J0OiBTb3J0RW51bSkgPT4ge1xyXG5cdFx0ZGlzcGF0aFNvcnQoeyB0eXBlOiBzb3J0IH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRkaXNwYXRoU29ydCh7IHR5cGU6IFwicmVzZXRcIiwgaW5pdGlhbFN0YXRlOiBwcm9kdWN0cyB9KTtcclxuXHR9LCBbcHJvZHVjdHNdKTtcclxuXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuXHRcdFx0XHQ8SHRhZyB0YWc9XCJoMVwiPntwYWdlLnRpdGxlfTwvSHRhZz5cclxuXHRcdFx0XHR7cHJvZHVjdHMgJiYgKFxyXG5cdFx0XHRcdFx0PFRhZyBjb2xvcj1cImdyZXlcIiBzaXplPVwibVwiPlxyXG5cdFx0XHRcdFx0XHR7cHJvZHVjdHMubGVuZ3RofVxyXG5cdFx0XHRcdFx0PC9UYWc+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8U29ydCBzb3J0PXtzb3J0fSBzZXRTb3J0PXtzZXRTb3J0fT48L1NvcnQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdHtzb3J0ZWRQcm9kdWN0cyAmJlxyXG5cdFx0XHRcdFx0c29ydGVkUHJvZHVjdHMubWFwKChwKSA9PiA8UHJvZHVjdCBsYXlvdXQga2V5PXtwLl9pZH0gcHJvZHVjdD17cH0+PC9Qcm9kdWN0Pil9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhoVGl0bGV9PlxyXG5cdFx0XHRcdDxIdGFnIHRhZz1cImgyXCI+0JLQsNC60LDQvdGB0LjQuCAtIHtwYWdlLmNhdGVnb3J5fTwvSHRhZz5cclxuXHRcdFx0XHQ8VGFnIGNvbG9yPVwicmVkXCIgc2l6ZT1cIm1cIj5cclxuXHRcdFx0XHRcdGhoLnJ1XHJcblx0XHRcdFx0PC9UYWc+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHR7Zmlyc3RDYXRlZ29yeSA9PSBUb3BMZXZlbENhdGVnb3J5LkNvdXJzZXMgJiYgcGFnZS5oaCAmJiA8SGhEYXRhIHsuLi5wYWdlLmhofT48L0hoRGF0YT59XHJcblx0XHRcdHtwYWdlLmFkdmFudGFnZXMgJiYgcGFnZS5hZHZhbnRhZ2VzLmxlbmd0aCA+IDEgJiYgKFxyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0XHQ8SHRhZyB0YWc9XCJoMlwiPtCf0YDQtdC40LzRg9GJ0LXRgdGC0LLQsDwvSHRhZz5cclxuXHRcdFx0XHRcdDxBZHZhbnRhZ2VzIGFkdmFudGFnZXM9e3BhZ2UuYWR2YW50YWdlc30+PC9BZHZhbnRhZ2VzPlxyXG5cdFx0XHRcdDwvPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHR7cGFnZS5zZW9UZXh0ICYmIChcclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5zZW99XHJcblx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBhZ2Uuc2VvVGV4dCB9fVxyXG5cdFx0XHRcdD48L2Rpdj5cclxuXHRcdFx0KX1cclxuXHRcdFx0PEh0YWcgdGFnPVwiaDJcIj7Qn9C+0LvRg9GH0LDQtdC80YvQtSDQvdCw0LLRi9C60Lg8L0h0YWc+XHJcblx0XHRcdHtwYWdlLnRhZ3MubWFwKCh0KSA9PiAoXHJcblx0XHRcdFx0PFRhZyBrZXk9e3R9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG5cdFx0XHRcdFx0e3R9XHJcblx0XHRcdFx0PC9UYWc+XHJcblx0XHRcdCkpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuIiwiaW1wb3J0IHsgU29ydEVudW0gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Tb3J0L1NvcnQucHJvcHNcIjtcclxuaW1wb3J0IHsgUHJvZHVjdE1vZGVsIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvcHJvZHVjdC5pbnRlcmZhY2VcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFNvcnRBY3Rpb25zID0geyB0eXBlOiBTb3J0RW51bS5QcmljZSB9IHwgeyB0eXBlOiBTb3J0RW51bS5SYXRpbmcgfSB8IHsgdHlwZTogJ3Jlc2V0JywgaW5pdGlhbFN0YXRlOlByb2R1Y3RNb2RlbFtdfVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTb3J0UmVkdWNlclN0YXRlIHtcclxuICAgIHNvcnQ6IFNvcnRFbnVtO1xyXG4gICAgcHJvZHVjdHM6IFByb2R1Y3RNb2RlbFtdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc29ydFJlZHVjZXIgPSAoIHN0YXRlOlNvcnRSZWR1Y2VyU3RhdGUsIGFjdGlvbjogU29ydEFjdGlvbnMgKTogU29ydFJlZHVjZXJTdGF0ZSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFNvcnRFbnVtLlJhdGluZzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNvcnQ6IFNvcnRFbnVtLlJhdGluZyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0cy5zb3J0KChhLCBiKSA9PiBhLmluaXRpYWxSYXRpbmcgPiBiLmluaXRpYWxSYXRpbmcgPyAtMSA6IDEpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBTb3J0RW51bS5QcmljZTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNvcnQ6IFNvcnRFbnVtLlByaWNlLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzLnNvcnQoKGEsIGIpID0+IGEucHJpY2UgPiBiLnByaWNlID8gMSA6IC0xKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgXCJyZXNldFwiOiBcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNvcnQ6IFNvcnRFbnVtLlJhdGluZyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBhY3Rpb24uaW5pdGlhbFN0YXRlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfQndC10LLQtdGA0L3Ri9C5INGC0LjQvyDRgdC+0YDRgtC40YDQvtCy0LrQuCcpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSBcIi4vVG9wUGFnZUNvbXBvbmVudC9Ub3BQYWdlQ29tcG9uZW50XCIiLCJpbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMsIEdldFN0YXRpY1Byb3BzQ29udGV4dCB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgd2l0aExheW91dCB9IGZyb20gXCIuLi8uLi9sYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9tZW51LmludGVmYWNlXCI7XHJcbmltcG9ydCB7IFRvcExldmVsQ2F0ZWdvcnksIFRvcFBhZ2VNb2RlbCB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL3RvcHBhZ2UuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XHJcbmltcG9ydCB7IFByb2R1Y3RNb2RlbCB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL3Byb2R1Y3QuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IGZpcnN0TGV2ZWxNZW51IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBUb3BQYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL3BhZ2UtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9hcGlcIjtcclxuXHJcbmNvbnN0IGZpcnN0Q2F0ZWdvcnkgPSAwO1xyXG5cclxuZnVuY3Rpb24gVG9wUGFnZSh7IGZpcnN0Q2F0ZWdvcnksIHBhZ2UsIHByb2R1Y3RzIH06IFBhZ2VQcm9wcyk6IEpTWC5FbGVtZW50IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PFRvcFBhZ2VDb21wb25lbnRcclxuXHRcdFx0XHRmaXJzdENhdGVnb3J5PXtmaXJzdENhdGVnb3J5fVxyXG5cdFx0XHRcdHBhZ2U9e3BhZ2V9XHJcblx0XHRcdFx0cHJvZHVjdHM9e3Byb2R1Y3RzfVxyXG5cdFx0XHQ+PC9Ub3BQYWdlQ29tcG9uZW50PlxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aExheW91dChUb3BQYWdlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcblx0bGV0IHBhdGhzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuXHRmb3IgKGNvbnN0IG0gb2YgZmlyc3RMZXZlbE1lbnUpIHtcclxuXHRcdGNvbnN0IHsgZGF0YTogbWVudSB9ID0gYXdhaXQgYXhpb3MucG9zdDxNZW51SXRlbVtdPihcclxuXHRcdFx0cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRE9NQUlOICsgXCIvYXBpL3RvcC1wYWdlL2ZpbmRcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZpcnN0Q2F0ZWdvcnk6IG0uaWQsXHJcblx0XHRcdH0sXHJcblx0XHQpO1xyXG5cdFx0cGF0aHMgPSBwYXRocy5jb25jYXQobWVudS5mbGF0TWFwKChzKSA9PiBzLnBhZ2VzLm1hcCgocCkgPT4gYC8ke20ucm91dGV9LyR7cC5hbGlhc31gKSkpO1xyXG5cdH1cclxuXHRyZXR1cm4ge1xyXG5cdFx0cGF0aHMsXHJcblx0XHRmYWxsYmFjazogZmFsc2UsXHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHM8UGFnZVByb3BzPiA9IGFzeW5jICh7XHJcblx0cGFyYW1zLFxyXG59OiBHZXRTdGF0aWNQcm9wc0NvbnRleHQ8UGFyc2VkVXJsUXVlcnk+KSA9PiB7XHJcblx0aWYgKCFwYXJhbXMpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5vdEZvdW5kOiB0cnVlLFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGZpcnN0Q2F0ZWdvcnlJdGVtID0gZmlyc3RMZXZlbE1lbnUuZmluZCgobSkgPT4gbS5yb3V0ZSA9PSBwYXJhbXMudHlwZSk7XHJcblx0aWYgKCFmaXJzdENhdGVnb3J5SXRlbSkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bm90Rm91bmQ6IHRydWUsXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHsgZGF0YTogbWVudSB9ID0gYXdhaXQgYXhpb3MucG9zdDxNZW51SXRlbVtdPihBUEkudG9wUGFnZS5maW5kLCB7XHJcblx0XHRcdGZpcnN0Q2F0ZWdvcnk6IGZpcnN0Q2F0ZWdvcnlJdGVtLmlkLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKG1lbnUubGVuZ3RoID09IDApIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRub3RGb3VuZDogdHJ1ZSxcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB7IGRhdGE6IHBhZ2UgfSA9IGF3YWl0IGF4aW9zLmdldDxUb3BQYWdlTW9kZWw+KEFQSS50b3BQYWdlLmJ5QWxpYXMgKyBwYXJhbXMuYWxpYXMpO1xyXG5cdFx0Y29uc3QgeyBkYXRhOiBwcm9kdWN0cyB9ID0gYXdhaXQgYXhpb3MucG9zdDxQcm9kdWN0TW9kZWxbXT4oQVBJLnByb2R1Y3QuZmluZCwge1xyXG5cdFx0XHRjYXRlZ29yeTogcGFnZS5jYXRlZ29yeSxcclxuXHRcdFx0bGltaXQ6IDEwLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cHJvcHM6IHtcclxuXHRcdFx0XHRtZW51LFxyXG5cdFx0XHRcdGZpcnN0Q2F0ZWdvcnk6IGZpcnN0Q2F0ZWdvcnlJdGVtLmlkLFxyXG5cdFx0XHRcdHBhZ2UsXHJcblx0XHRcdFx0cHJvZHVjdHMsXHJcblx0XHRcdH0sXHJcblx0XHR9O1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRub3RGb3VuZDogdHJ1ZSxcclxuXHRcdH07XHJcblx0fVxyXG59O1xyXG5cclxuaW50ZXJmYWNlIFBhZ2VQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcclxuXHRtZW51OiBNZW51SXRlbVtdO1xyXG5cdGZpcnN0Q2F0ZWdvcnk6IFRvcExldmVsQ2F0ZWdvcnk7XHJcblx0cGFnZTogVG9wUGFnZU1vZGVsO1xyXG5cdHByb2R1Y3RzOiBQcm9kdWN0TW9kZWxbXTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zL2xvY2FsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvb2stZm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==