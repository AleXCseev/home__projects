module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

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

var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\components\\Button\\Button.tsx";

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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button, className, {
      [_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.primary]: appearance == "primary",
      [_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ghost]: appearance == "ghost"
    })
  }, props), {}, {
    children: [children, arrow != "none" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.arrow, {
        [_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.down]: arrow == "down"
      }),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_arrow_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 33
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
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


var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\components\\Htag\\Htag.tsx";

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

var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\components\\P\\P.tsx";

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
	"editable": "Raiting_editable__30-GK"
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


var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\components\\Raiting\\Raiting.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Raiting = (_ref) => {
  let {
    isEditable = false,
    raiting,
    setRaiting
  } = _ref,
      props = _objectWithoutProperties(_ref, ["isEditable", "raiting", "setRaiting"]);

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
    children: raitingArray.map((el, index) => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: el
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 6
      }, undefined);
    })
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 3
  }, undefined);
};

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


var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\components\\Tag\\Tag.tsx";

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

/***/ "./components/index.ts":
/*!*****************************!*\
  !*** ./components/index.ts ***!
  \*****************************/
/*! exports provided: Htag, Button, P, Tag, Raiting */
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

var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\context\\app.context.tsx";


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

var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\layout\\Footer\\Footer.tsx";

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

var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\layout\\Header\\Header.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Header = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({}, props), {}, {
    children: "Header"
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
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
	"footer": "Layout_footer__196lU"
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

var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\layout\\Layout.tsx";

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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header_Header__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_4__["Sidebar"], {
      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.body,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__["Footer"], {
      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
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
          lineNumber: 25,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
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
	"menu": "Menu_menu__1IBSu",
	"firstLevel": "Menu_firstLevel__hBZRC",
	"firstLevelActive": "Menu_firstLevelActive__2M7tl"
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
/* harmony import */ var _icons_courses_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/courses.svg */ "./layout/Menu/icons/courses.svg");
/* harmony import */ var _icons_services_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/services.svg */ "./layout/Menu/icons/services.svg");
/* harmony import */ var _icons_books_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/books.svg */ "./layout/Menu/icons/books.svg");
/* harmony import */ var _icons_products_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/products.svg */ "./layout/Menu/icons/products.svg");
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Menu.module.css */ "./layout/Menu/Menu.module.css");
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../interfaces/toppage.interface */ "./interfaces/toppage.interface.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\layout\\Menu\\Menu.tsx";









const firstLevelMenu = [{
  route: "courses",
  name: "Курсы",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_courses_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 46
  }, undefined),
  id: _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_8__["TopLevelCategory"].Courses
}, {
  route: "services",
  name: "Сервисы",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_services_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 49
  }, undefined),
  id: _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_8__["TopLevelCategory"].Services
}, {
  route: "books",
  name: "Книги",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_books_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 44
  }, undefined),
  id: _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_8__["TopLevelCategory"].Books
}, {
  route: "products",
  name: "Продукты",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_products_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 50
  }, undefined),
  id: _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_8__["TopLevelCategory"].Products
}];
const Menu = () => {
  const {
    menu,
    setMenu,
    firstCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_app_context__WEBPACK_IMPORTED_MODULE_2__["AppContext"]);

  const buildFirstLevel = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: firstLevelMenu.map(m => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: `/${m.route}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.firstLevel, {
              [_Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.firstLevelActive]: m.id == firstCategory
            }),
            children: [m.icon, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: m.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 25
        }, undefined), m.id == firstCategory && buildSecondLevel(m)]
      }, m.route, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }, undefined))
    }, void 0, false);
  };

  const buildSecondLevel = menuItem => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: menu.map(m => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.secondLevel,
          children: m._id.secondCategory
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.secondLevelBlock, {
            [_Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.secondLevelBlockOpened]: m.isOpened
          }),
          children: buildThirdLevel(m.pages, menuItem.route)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 25
        }, undefined)]
      }, m._id.secondCategory, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, undefined);
  };

  const buildThirdLevel = (pages, route) => {
    return pages.map(p => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: `/${route}/${p.alias}`,
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.thirdLevel, {
        [_Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.thirdLevelActive]: true
      }),
      children: p.category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }, undefined));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.menu,
    children: buildFirstLevel()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./layout/Menu/icons/books.svg":
/*!*************************************!*\
  !*** ./layout/Menu/icons/books.svg ***!
  \*************************************/
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

/***/ "./layout/Menu/icons/courses.svg":
/*!***************************************!*\
  !*** ./layout/Menu/icons/courses.svg ***!
  \***************************************/
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

/***/ "./layout/Menu/icons/products.svg":
/*!****************************************!*\
  !*** ./layout/Menu/icons/products.svg ***!
  \****************************************/
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

/***/ "./layout/Menu/icons/services.svg":
/*!****************************************!*\
  !*** ./layout/Menu/icons/services.svg ***!
  \****************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Menu/Menu */ "./layout/Menu/Menu.tsx");

var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\layout\\Sidebar\\Sidebar.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Sidebar = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__["Menu"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.ts");
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/Layout */ "./layout/Layout.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\pages\\index.tsx";





function Home({
  menu
}) {
  const {
    0: raiting,
    1: setRaiting
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(4);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      appearance: "primary",
      arrow: "down",
      children: "Button"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      appearance: "ghost",
      arrow: "right",
      children: "Button"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["P"], {
      size: "l",
      children: "Big"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["P"], {
      children: "Middle"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["P"], {
      size: "s",
      children: "Small"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
      size: "s",
      color: "ghost",
      children: "Ghost"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
      size: "m",
      color: "primary",
      children: "Ghost"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
      size: "m",
      color: "green",
      children: "Ghost"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
      size: "m",
      color: "grey",
      children: "Ghost"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
      size: "m",
      color: "red",
      children: "Ghost"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Raiting"], {
      raiting: raiting,
      isEditable: true,
      setRaiting: setRaiting
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_layout_Layout__WEBPACK_IMPORTED_MODULE_3__["withLayout"])(Home));
const getStaticProps = async () => {
  const firstCategory = 0;
  const {
    data: menu
  } = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("https://courses-top.ru" + "/api/top-page/find", {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi9hcnJvdy5zdmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IdGFnL0h0YWcubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0h0YWcvSHRhZy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QL1AubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1AvUC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SYWl0aW5nL1JhaXRpbmcubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JhaXRpbmcvUmFpdGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SYWl0aW5nL3N0YXIuc3ZnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGFnL1RhZy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGFnL1RhZy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2FwcC5jb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9pbnRlcmZhY2VzL3RvcHBhZ2UuaW50ZXJmYWNlLnRzIiwid2VicGFjazovLy8uL2xheW91dC9Gb290ZXIvRm9vdGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbGF5b3V0L0Zvb3Rlci9Gb290ZXIudHN4Iiwid2VicGFjazovLy8uL2xheW91dC9IZWFkZXIvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9sYXlvdXQvTGF5b3V0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbGF5b3V0L0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vbGF5b3V0L01lbnUvTWVudS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2xheW91dC9NZW51L01lbnUudHN4Iiwid2VicGFjazovLy8uL2xheW91dC9NZW51L2ljb25zL2Jvb2tzLnN2ZyIsIndlYnBhY2s6Ly8vLi9sYXlvdXQvTWVudS9pY29ucy9jb3Vyc2VzLnN2ZyIsIndlYnBhY2s6Ly8vLi9sYXlvdXQvTWVudS9pY29ucy9wcm9kdWN0cy5zdmciLCJ3ZWJwYWNrOi8vLy4vbGF5b3V0L01lbnUvaWNvbnMvc2VydmljZXMuc3ZnIiwid2VicGFjazovLy8uL2xheW91dC9TaWRlYmFyL1NpZGViYXIudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZuc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQnV0dG9uIiwiYXBwZWFyYW5jZSIsImFycm93IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJwcm9wcyIsImNuIiwic3R5bGVzIiwiYnV0dG9uIiwicHJpbWFyeSIsImdob3N0IiwiZG93biIsIkh0YWciLCJ0YWciLCJoMSIsImgyIiwiaDMiLCJQIiwic2l6ZSIsInAiLCJzIiwibSIsImwiLCJSYWl0aW5nIiwiaXNFZGl0YWJsZSIsInJhaXRpbmciLCJzZXRSYWl0aW5nIiwicmFpdGluZ0FycmF5Iiwic2V0UmFpdGluZ0FycmF5IiwidXNlU3RhdGUiLCJBcnJheSIsImZpbGwiLCJ1c2VFZmZlY3QiLCJjb25zdHJ1Y3RSYWl0aW5nIiwiY3VycmVudFJhaXRpbmciLCJ1cGRhdGVkQXJyYXkiLCJtYXAiLCJlbCIsImluZGV4Iiwic3RhciIsImZpbGxlZCIsImVkaXRhYmxlIiwiY2hhbmdlRGlzcGxheSIsIm9uQ2xpY2siLCJlIiwiaGFuZGVsU3BhY2UiLCJjb2RlIiwiVGFnIiwiY29sb3IiLCJocmVmIiwicmVkIiwiZ3JleSIsImdyZWVuIiwiQXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJtZW51IiwiZmlyc3RDYXRlZ29yeSIsIlRvcExldmVsQ2F0ZWdvcnkiLCJDb3Vyc2VzIiwiQXBwQ29udGV4dFByb3ZpZGVyIiwibWVudVN0YXRlIiwic2V0TWVudVN0YXRlIiwic2V0TWVudSIsIm5ld01lbnUiLCJGb290ZXIiLCJmb290ZXIiLCJmb3JtYXQiLCJEYXRlIiwiSGVhZGVyIiwiTGF5b3V0Iiwid3JhcHBlciIsImhlYWRlciIsInNpZGViYXIiLCJib2R5Iiwid2l0aExheW91dCIsIkNvbXBvbmVudCIsIndpdGhMYXlvdXRuQ29tcG9uZW50IiwiZmlyc3RMZXZlbE1lbnUiLCJyb3V0ZSIsIm5hbWUiLCJpY29uIiwiaWQiLCJTZXJ2aWNlcyIsIkJvb2tzIiwiUHJvZHVjdHMiLCJNZW51IiwidXNlQ29udGV4dCIsImJ1aWxkRmlyc3RMZXZlbCIsImZpcnN0TGV2ZWwiLCJmaXJzdExldmVsQWN0aXZlIiwiYnVpbGRTZWNvbmRMZXZlbCIsIm1lbnVJdGVtIiwic2Vjb25kTGV2ZWwiLCJfaWQiLCJzZWNvbmRDYXRlZ29yeSIsInNlY29uZExldmVsQmxvY2siLCJzZWNvbmRMZXZlbEJsb2NrT3BlbmVkIiwiaXNPcGVuZWQiLCJidWlsZFRoaXJkTGV2ZWwiLCJwYWdlcyIsImFsaWFzIiwidGhpcmRMZXZlbCIsInRoaXJkTGV2ZWxBY3RpdmUiLCJjYXRlZ29yeSIsIlNpZGViYXIiLCJIb21lIiwiZ2V0U3RhdGljUHJvcHMiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwicHJvY2VzcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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LHdCQUFBLEdBQWlDLG9CQURMLEVBRTVCO0FBQ0N0RDtBQURELEdBRjRCLENBQTdCO0FBTUEsU0FBTztBQUNObkQsU0FBSyxFQUFFO0FBQ05rRCxVQURNO0FBRU5DO0FBRk07QUFERCxHQUFQO0FBTUEsQ0FkTSxDOzs7Ozs7Ozs7OztBQzFDUCxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnV0dG9uXCI6IFwiQnV0dG9uX2J1dHRvbl9fc0wzdERcIixcblx0XCJwcmltYXJ5XCI6IFwiQnV0dG9uX3ByaW1hcnlfXzJ6YWwxXCIsXG5cdFwiZ2hvc3RcIjogXCJCdXR0b25fZ2hvc3RfXzJTUWN4XCIsXG5cdFwiYXJyb3dcIjogXCJCdXR0b25fYXJyb3dfXy1DeHR3XCIsXG5cdFwiZG93blwiOiBcIkJ1dHRvbl9kb3duX18zdU5HZ1wiXG59O1xuIiwiaW1wb3J0IHsgQnV0dG9uUHJvcHMgfSBmcm9tIFwiLi9CdXR0b24ucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9CdXR0b24ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQXJyb3dJY29uIGZyb20gXCIuL2Fycm93LnN2Z1wiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSAoeyBhcHBlYXJhbmNlLCBhcnJvdyA9IFwibm9uZVwiLCBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBCdXR0b25Qcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGJ1dHRvblxyXG5cdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlcy5idXR0b24sIGNsYXNzTmFtZSwge1xyXG5cdFx0XHRcdFtzdHlsZXMucHJpbWFyeV06IGFwcGVhcmFuY2UgPT0gXCJwcmltYXJ5XCIsXHJcblx0XHRcdFx0W3N0eWxlcy5naG9zdF06IGFwcGVhcmFuY2UgPT0gXCJnaG9zdFwiLFxyXG5cdFx0XHR9KX1cclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG5cdFx0PlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIHthcnJvdyAhPSBcIm5vbmVcIiAmJiA8c3BhbiBjbGFzc05hbWU9e2NuKHN0eWxlcy5hcnJvdywge1xyXG4gICAgICAgICAgICAgICAgW3N0eWxlcy5kb3duXTogYXJyb3cgPT0gXCJkb3duXCJcclxuICAgICAgICAgICAgfSl9PiBcclxuXHRcdFx0XHQ8QXJyb3dJY29uPjwvQXJyb3dJY29uPlxyXG5cdFx0XHQ8L3NwYW4+fVxyXG5cdFx0PC9idXR0b24+XHJcblx0KTtcclxufTtcclxuIiwidmFyIF9wYXRoO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnQXJyb3cocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogNixcbiAgICBoZWlnaHQ6IDEwLFxuICAgIGZpbGw6IFwiIzNCNDM0RVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTUuNzE1IDQuNjFMMS4yNjUuMTZBLjU0My41NDMgMCAwMC44NzggMGEuNTQzLjU0MyAwIDAwLS4zODYuMTZMLjE2NC40ODdhLjU0OC41NDggMCAwMDAgLjc3NEwzLjkgNC45OTguMTYgOC43MzlhLjU0My41NDMgMCAwMC0uMTYuMzg3YzAgLjE0Ni4wNTcuMjg0LjE2LjM4N2wuMzI3LjMyN2MuMTAzLjEwMy4yNC4xNi4zODcuMTZhLjU0My41NDMgMCAwMC4zODctLjE2bDQuNDU0LTQuNDU0YS41NDQuNTQ0IDAgMDAuMTYtLjM4OC41NDQuNTQ0IDAgMDAtLjE2LS4zODh6XCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQXJyb3c7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaDFcIjogXCJIdGFnX2gxX18xNWM4UlwiLFxuXHRcImgyXCI6IFwiSHRhZ19oMl9fMzhUN0NcIixcblx0XCJoM1wiOiBcIkh0YWdfaDNfXzFMLTdUXCJcbn07XG4iLCJpbXBvcnQgeyBIdGFnUHJvcHMgfSBmcm9tIFwiLi9IdGFnLnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSHRhZy5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSHRhZyA9ICh7IHRhZywgY2hpbGRyZW4gfTogSHRhZ1Byb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdHN3aXRjaCAodGFnKSB7XHJcblx0XHRjYXNlIFwiaDFcIjpcclxuXHRcdFx0cmV0dXJuIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oMX0+e2NoaWxkcmVufTwvaDE+O1xyXG5cdFx0Y2FzZSBcImgyXCI6XHJcblx0XHRcdHJldHVybiA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuaDJ9PntjaGlsZHJlbn08L2gyPjtcclxuXHRcdGNhc2UgXCJoM1wiOlxyXG5cdFx0XHRyZXR1cm4gPGgzIGNsYXNzTmFtZT17c3R5bGVzLmgzfT57Y2hpbGRyZW59PC9oMz47XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gPD48Lz47XHJcblx0fVxyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwXCI6IFwiUF9wX18xZGlYUVwiLFxuXHRcInNcIjogXCJQX3NfXzM1WFN3XCIsXG5cdFwibVwiOiBcIlBfbV9fM1J1ZXpcIixcblx0XCJsXCI6IFwiUF9sX19zeEhwWlwiXG59O1xuIiwiaW1wb3J0IHsgUFByb3BzIH0gZnJvbSBcIi4vUC5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1AubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQID0gKHsgc2l6ZSA9IFwibVwiLCBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBQUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxwXHJcblx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLnAsIGNsYXNzTmFtZSwge1xyXG5cdFx0XHRcdFtzdHlsZXMuc106IHNpemUgPT0gXCJzXCIsXHJcblx0XHRcdFx0W3N0eWxlcy5tXTogc2l6ZSA9PSBcIm1cIixcclxuXHRcdFx0XHRbc3R5bGVzLmxdOiBzaXplID09IFwibFwiLFxyXG5cdFx0XHR9KX1cclxuXHRcdFx0ey4uLnByb3BzfVxyXG5cdFx0PlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHQ8L3A+XHJcblx0KTtcclxufTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZmlsbGVkXCI6IFwiUmFpdGluZ19maWxsZWRfX2JPZ3JvXCIsXG5cdFwic3RhclwiOiBcIlJhaXRpbmdfc3Rhcl9fM2pVcHJcIixcblx0XCJlZGl0YWJsZVwiOiBcIlJhaXRpbmdfZWRpdGFibGVfXzMwLUdLXCJcbn07XG4iLCJpbXBvcnQgeyBSYWl0aW5nUHJvcHMgfSBmcm9tIFwiLi9SYWl0aW5nLnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUmFpdGluZy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBLZXlib2FyZEV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTdGFySWNvbiBmcm9tIFwiLi9zdGFyLnN2Z1wiXHJcblxyXG5leHBvcnQgY29uc3QgUmFpdGluZyA9ICh7IGlzRWRpdGFibGUgPSBmYWxzZSwgcmFpdGluZywgc2V0UmFpdGluZywgLi4ucHJvcHMgfTogUmFpdGluZ1Byb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IFtyYWl0aW5nQXJyYXksIHNldFJhaXRpbmdBcnJheV0gPSB1c2VTdGF0ZTxKU1guRWxlbWVudFtdPihuZXcgQXJyYXkoNSkuZmlsbCg8PjwvPikpXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdHJ1Y3RSYWl0aW5nKHJhaXRpbmcpO1xyXG5cdH0sIFtyYWl0aW5nXSlcclxuXHJcblx0Y29uc3QgY29uc3RydWN0UmFpdGluZyA9IChjdXJyZW50UmFpdGluZzogbnVtYmVyKSA9PiB7XHJcblx0XHRjb25zdCB1cGRhdGVkQXJyYXkgPSByYWl0aW5nQXJyYXkubWFwKChlbDogSlNYLkVsZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZXMuc3Rhciwge1xyXG5cdFx0XHRcdFx0XHRbc3R5bGVzLmZpbGxlZF06IGluZGV4IDwgY3VycmVudFJhaXRpbmcsXHJcblx0XHRcdFx0XHRcdFtzdHlsZXMuZWRpdGFibGVdOiBpc0VkaXRhYmxlXHJcblx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdG9uTW91c2VFbnRlcj17KCkgPT4gY2hhbmdlRGlzcGxheShpbmRleCArIDEpfVxyXG5cdFx0XHRcdFx0b25Nb3VzZUxlYXZlPXsoKSA9PiBjaGFuZ2VEaXNwbGF5KHJhaXRpbmcpfVxyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gb25DbGljayhpbmRleCArIDEpfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxTdGFySWNvbiBcclxuXHRcdFx0XHRcdFx0dGFiSW5kZXg9e2lzRWRpdGFibGUgPyAwIDogLTF9XHJcblx0XHRcdFx0XHRcdG9uS2V5RG93bj17KGU6IEtleWJvYXJkRXZlbnQ8U1ZHQUVsZW1lbnQ+KSA9PiBpc0VkaXRhYmxlICYmIGhhbmRlbFNwYWNlKGluZGV4ICsgMSwgZSl9XHJcblx0XHRcdFx0XHQ+PC9TdGFySWNvbj5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHRcdHNldFJhaXRpbmdBcnJheSh1cGRhdGVkQXJyYXkpXHJcblx0fTtcclxuXHJcblx0Y29uc3QgY2hhbmdlRGlzcGxheSA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRpZighaXNFZGl0YWJsZSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdHJ1Y3RSYWl0aW5nKGluZGV4KVxyXG5cdH1cclxuXHJcblx0Y29uc3Qgb25DbGljayA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRpZighaXNFZGl0YWJsZSB8fCAhc2V0UmFpdGluZykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRzZXRSYWl0aW5nKGluZGV4KVxyXG5cdH1cclxuXHJcblx0Y29uc3QgaGFuZGVsU3BhY2UgPSAoaW5kZXg6IG51bWJlciwgZTogS2V5Ym9hcmRFdmVudDxTVkdBRWxlbWVudD4pID0+IHtcclxuXHRcdGlmIChlLmNvZGUgIT0gXCJTcGFjZVwiIHx8ICFzZXRSYWl0aW5nKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHNldFJhaXRpbmcoaW5kZXgpXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiB7Li4ucHJvcHN9PlxyXG5cdFx0XHR7cmFpdGluZ0FycmF5Lm1hcCgoZWw6IEpTWC5FbGVtZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuKFxyXG5cdFx0XHRcdFx0PHNwYW4ga2V5PXtpbmRleH0+e2VsfTwvc3Bhbj5cclxuXHRcdFx0XHQpXHJcblx0XHRcdH0pfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuIiwidmFyIF9wYXRoO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnU3Rhcihwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiAyMCxcbiAgICBoZWlnaHQ6IDIwLFxuICAgIGZpbGw6IFwiI0UyRTJFMlwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE5Ljk0OCA3LjU1N2ExLjA3MiAxLjA3MiAwIDAwLS45MTUtLjc2MmwtNS43NzMtLjU0N0wxMC45NzguNjc0QTEuMDYzIDEuMDYzIDAgMDAxMCAwYy0uNDI3IDAtLjgxLjI2NC0uOTc3LjY3NEw2Ljc0IDYuMjQ4bC01Ljc3NC41NDdjLS40MjQuMDQtLjc4Mi4zNC0uOTE1Ljc2Mi0uMTMxLjQyMi0uMDEuODg2LjMxIDEuMTc5bDQuMzY1IDMuOTkzLTEuMjg3IDUuOTE0Yy0uMDk0LjQzNS4wNjcuODg1LjQxMyAxLjE0NmExLjAyOSAxLjAyOSAwIDAwMS4xNjkuMDU0TDEwIDE2LjczNmw0Ljk3NyAzLjEwN2MuMzY2LjIyNy44MjUuMjA2IDEuMTctLjA1NC4zNDYtLjI2MS41MDctLjcxLjQxMy0xLjE0NmwtMS4yODctNS45MTQgNC4zNjUtMy45OTNjLjMyLS4yOTMuNDQxLS43NTYuMzEtMS4xOHpcIlxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdTdGFyOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRhZ1wiOiBcIlRhZ190YWdfXzExVEVzXCIsXG5cdFwic1wiOiBcIlRhZ19zX18xUFZWLVwiLFxuXHRcIm1cIjogXCJUYWdfbV9fMmluenFcIixcblx0XCJnaG9zdFwiOiBcIlRhZ19naG9zdF9fMXV2aDZcIixcblx0XCJyZWRcIjogXCJUYWdfcmVkX18xeENfbVwiLFxuXHRcImdyZXlcIjogXCJUYWdfZ3JleV9fMVF5NkZcIixcblx0XCJncmVlblwiOiBcIlRhZ19ncmVlbl9faHBpeG5cIixcblx0XCJwcmltYXJ5XCI6IFwiVGFnX3ByaW1hcnlfXzEtU2RSXCJcbn07XG4iLCJpbXBvcnQgeyBUYWdQcm9wcyB9IGZyb20gXCIuL1RhZy5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RhZy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRhZyA9ICh7IHNpemUgPSBcInNcIiwgY2hpbGRyZW4sIGNvbG9yPVwiZ2hvc3RcIiwgaHJlZiwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBUYWdQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlcy50YWcsIGNsYXNzTmFtZSwge1xyXG5cdFx0XHRcdFtzdHlsZXMuc106IHNpemUgPT0gXCJzXCIsXHJcblx0XHRcdFx0W3N0eWxlcy5tXTogc2l6ZSA9PSBcIm1cIixcclxuXHRcdFx0XHRbc3R5bGVzLmdob3N0XTogY29sb3IgPT0gXCJnaG9zdFwiLFxyXG5cdFx0XHRcdFtzdHlsZXMucmVkXTogY29sb3IgPT0gXCJyZWRcIixcclxuXHRcdFx0XHRbc3R5bGVzLmdyZXldOiBjb2xvciA9PSBcImdyZXlcIixcclxuXHRcdFx0XHRbc3R5bGVzLmdyZWVuXTogY29sb3IgPT0gXCJncmVlblwiLFxyXG5cdFx0XHRcdFtzdHlsZXMucHJpbWFyeV06IGNvbG9yID09IFwicHJpbWFyeVwiLFxyXG5cdFx0XHR9KX1cclxuXHRcdFx0ey4uLnByb3BzfVxyXG5cdFx0PlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aHJlZiA/IDxhIGhyZWY9e2hyZWZ9PntjaGlsZHJlbn08L2E+IDogPD57Y2hpbGRyZW59PC8+XHJcblx0XHRcdH1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL0h0YWcvSHRhZ1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9CdXR0b24vQnV0dG9uXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vUC9QXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vVGFnL1RhZ1wiXHJcbmV4cG9ydCAqIGZyb20gXCIuL1JhaXRpbmcvUmFpdGluZ1wiIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUHJvcHNXaXRoQ2hpbGRyZW4sIFJlYWN0Tm9kZSwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9tZW51LmludGVmYWNlXCI7XHJcbmltcG9ydCB7IFRvcExldmVsQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy90b3BwYWdlLmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXBwQ29udGV4dCB7XHJcbiAgICBtZW51OiBNZW51SXRlbVtdO1xyXG4gICAgZmlyc3RDYXRlZ29yeTogVG9wTGV2ZWxDYXRlZ29yeTtcclxuICAgIHNldE1lbnU/OiAobmV3TWVudTogTWVudUl0ZW1bXSkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0PElBcHBDb250ZXh0Pih7IG1lbnU6IFtdLCBmaXJzdENhdGVnb3J5OiBUb3BMZXZlbENhdGVnb3J5LkNvdXJzZXMgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dFByb3ZpZGVyID0gKHsgbWVudSwgZmlyc3RDYXRlZ29yeSwgY2hpbGRyZW59OiBQcm9wc1dpdGhDaGlsZHJlbjxJQXBwQ29udGV4dD4pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IFttZW51U3RhdGUsIHNldE1lbnVTdGF0ZV0gPSB1c2VTdGF0ZTxNZW51SXRlbVtdPihtZW51KTtcclxuICAgIGNvbnN0IHNldE1lbnUgPSAobmV3TWVudTogTWVudUl0ZW1bXSkgPT4ge1xyXG4gICAgICAgIHNldE1lbnVTdGF0ZShuZXdNZW51KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbWVudTogbWVudVN0YXRlLCBmaXJzdENhdGVnb3J5LCBzZXRNZW51IH19PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxufSIsImV4cG9ydCBlbnVtIFRvcExldmVsQ2F0ZWdvcnkge1xyXG4gICAgQ291cnNlcyxcclxuICAgIFNlcnZpY2VzLFxyXG4gICAgQm9va3MsXHJcbiAgICBQcm9kdWN0c1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvcFBhZ2VBZHZhbnRhZ2Uge1xyXG4gICAgX2lkOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIaERhdGEge1xyXG4gICAgX2lkOiBzdHJpbmc7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG4gICAganVuaW9yU2FsYXJ5OiBudW1iZXI7XHJcbiAgICBtaWRkbGVTYWxhcnk6IG51bWJlcjtcclxuICAgIHNlbmlvclNhbGFyeTogbnVtYmVyO1xyXG4gICAgdXBkYXRlZEF0OiBEYXRlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvcFBhZ2VNb2RlbCB7XHJcblx0dGFnczogc3RyaW5nW107XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0c2Vjb25kU2VjdGlvbjogc3RyaW5nO1xyXG5cdGFsaWFzOiBzdHJpbmc7XHJcblx0dGl0bGU6IHN0cmluZztcclxuXHRjYXRlZ29yeTogc3RyaW5nO1xyXG5cdHNlb1RleHQ6IHN0cmluZztcclxuXHR0YWdzVGl0bGU6IHN0cmluZztcclxuXHRtZXRhVGl0bGU6IHN0cmluZztcclxuXHRtZXRhRGVzY3JpcHRpb246IHN0cmluZztcclxuXHRmaXJzdENhdGVnb3J5OiBUb3BMZXZlbENhdGVnb3J5O1xyXG5cdGFkdmFudGFnZXM6IFRvcFBhZ2VBZHZhbnRhZ2VbXTtcclxuXHRjcmVhdGVkQXQ6IERhdGU7XHJcblx0dXBkYXRlZEF0OiBEYXRlO1xyXG5cdGhoOiBIaERhdGE7XHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJcIjogXCJGb290ZXJfZm9vdGVyX18zbDZ5UFwiXG59O1xuIiwiaW1wb3J0IHsgRm9vdGVyUHJvcHMgfSBmcm9tIFwiLi9Gb290ZXIucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Gb290ZXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBGb290ZXJQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGZvb3RlciBjbGFzc05hbWU9e2NuKGNsYXNzTmFtZSwgc3R5bGVzLmZvb3Rlcil9IHsuLi5wcm9wc30+XHJcblx0XHRcdDxkaXY+T3dsVG9wIMKpIDIwMjAgLSB7Zm9ybWF0KG5ldyBEYXRlKCksIFwieXl5eVwiKX0g0JLRgdC1INC/0YDQsNCy0LAg0LfQsNGJ0LjRidC10L3RizwvZGl2PlxyXG5cdFx0XHQ8YSBocmVmPVwiI1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG5cdFx0XHRcdNCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjNGB0LrQvtC1INGB0L7Qs9C70LDRiNC10L3QuNC1XHJcblx0XHRcdDwvYT5cclxuXHRcdFx0PGEgaHJlZj1cIiNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuXHRcdFx0XHTQn9C+0LvQuNGC0LjQutCwINC60L7QvdGE0LjQtNC10L3RhtC40LDQu9GM0L3QvtGB0YLQuFxyXG5cdFx0XHQ8L2E+XHJcblx0XHQ8L2Zvb3Rlcj5cclxuXHQpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBIZWFkZXJQcm9wcyB9IGZyb20gXCIuL0hlYWRlci5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0hlYWRlci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICh7IC4uLnByb3BzIH06IEhlYWRlclByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdHJldHVybiA8ZGl2IHsuLi5wcm9wc30+SGVhZGVyPC9kaXY+O1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiTGF5b3V0X3dyYXBwZXJfXzNJdkJ5XCIsXG5cdFwiaGVhZGVyXCI6IFwiTGF5b3V0X2hlYWRlcl9fMk0yRjhcIixcblx0XCJzaWRlYmFyXCI6IFwiTGF5b3V0X3NpZGViYXJfXzIwNXlBXCIsXG5cdFwiYm9keVwiOiBcIkxheW91dF9ib2R5X18zWDFfbVwiLFxuXHRcImZvb3RlclwiOiBcIkxheW91dF9mb290ZXJfXzE5NmxVXCJcbn07XG4iLCJpbXBvcnQgeyBMYXlvdXRQcm9wcyB9IGZyb20gXCIuL0xheW91dC5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xheW91dC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiLi9TaWRlYmFyL1NpZGViYXJcIjtcclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4vRm9vdGVyL0Zvb3RlclwiO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0UHJvdmlkZXIsIElBcHBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvYXBwLmNvbnRleHRcIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9OiBMYXlvdXRQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuXHRcdFx0PEhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PjwvSGVhZGVyPlxyXG5cdFx0XHQ8U2lkZWJhciBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyfT48L1NpZGViYXI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+e2NoaWxkcmVufTwvZGl2PlxyXG5cdFx0XHQ8Rm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+PC9Gb290ZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpdGhMYXlvdXQgPSA8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+ICYgSUFwcENvbnRleHQ+KENvbXBvbmVudDogRnVuY3Rpb25Db21wb25lbnQ8VD4pID0+IHtcclxuXHRyZXR1cm4gZnVuY3Rpb24gd2l0aExheW91dG5Db21wb25lbnQocHJvcHM6IFQpOiBKU1guRWxlbWVudCB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8QXBwQ29udGV4dFByb3ZpZGVyIG1lbnU9e3Byb3BzLm1lbnV9IGZpcnN0Q2F0ZWdvcnk9e3Byb3BzLmZpcnN0Q2F0ZWdvcnl9PlxyXG5cdFx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wcm9wc30+PC9Db21wb25lbnQ+XHJcblx0XHRcdFx0PC9MYXlvdXQ+XHJcblx0XHRcdDwvQXBwQ29udGV4dFByb3ZpZGVyPlxyXG5cdFx0KTtcclxuXHR9O1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtZW51XCI6IFwiTWVudV9tZW51X18xSUJTdVwiLFxuXHRcImZpcnN0TGV2ZWxcIjogXCJNZW51X2ZpcnN0TGV2ZWxfX2hCWlJDXCIsXG5cdFwiZmlyc3RMZXZlbEFjdGl2ZVwiOiBcIk1lbnVfZmlyc3RMZXZlbEFjdGl2ZV9fMk03dGxcIlxufTtcbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvYXBwLmNvbnRleHRcIlxyXG5pbXBvcnQgeyBGaXJzdExldmVsTWVudUl0ZW0sIFBhZ2VJdGVtIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvbWVudS5pbnRlZmFjZVwiXHJcbmltcG9ydCBDb3Vyc2VzSWNvbiBmcm9tIFwiLi9pY29ucy9jb3Vyc2VzLnN2Z1wiXHJcbmltcG9ydCBTZXJ2aWNlc0ljb24gZnJvbSBcIi4vaWNvbnMvc2VydmljZXMuc3ZnXCJcclxuaW1wb3J0IEJvb2tzSWNvbiBmcm9tIFwiLi9pY29ucy9ib29rcy5zdmdcIlxyXG5pbXBvcnQgUHJvZHVjdHNJY29uIGZyb20gXCIuL2ljb25zL3Byb2R1Y3RzLnN2Z1wiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTWVudS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHsgVG9wTGV2ZWxDYXRlZ29yeSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL3RvcHBhZ2UuaW50ZXJmYWNlXCJcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCJcclxuXHJcbmNvbnN0IGZpcnN0TGV2ZWxNZW51OiBGaXJzdExldmVsTWVudUl0ZW1bXSA9IFtcclxuICAgIHsgcm91dGU6IFwiY291cnNlc1wiLCBuYW1lOiBcItCa0YPRgNGB0YtcIiwgaWNvbjogPENvdXJzZXNJY29uPjwvQ291cnNlc0ljb24+LCBpZDogVG9wTGV2ZWxDYXRlZ29yeS5Db3Vyc2VzIH0sXHJcbiAgICB7IHJvdXRlOiBcInNlcnZpY2VzXCIsIG5hbWU6IFwi0KHQtdGA0LLQuNGB0YtcIiwgaWNvbjogPFNlcnZpY2VzSWNvbj48L1NlcnZpY2VzSWNvbj4sIGlkOiBUb3BMZXZlbENhdGVnb3J5LlNlcnZpY2VzIH0sXHJcbiAgICB7IHJvdXRlOiBcImJvb2tzXCIsIG5hbWU6IFwi0JrQvdC40LPQuFwiLCBpY29uOiA8Qm9va3NJY29uPjwvQm9va3NJY29uPiwgaWQ6IFRvcExldmVsQ2F0ZWdvcnkuQm9va3MgfSxcclxuICAgIHsgcm91dGU6IFwicHJvZHVjdHNcIiwgbmFtZTogXCLQn9GA0L7QtNGD0LrRgtGLXCIsIGljb246IDxQcm9kdWN0c0ljb24+PC9Qcm9kdWN0c0ljb24+LCBpZDogVG9wTGV2ZWxDYXRlZ29yeS5Qcm9kdWN0cyB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgTWVudSA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBtZW51LCBzZXRNZW51LCBmaXJzdENhdGVnb3J5IH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpXHJcblxyXG4gICAgY29uc3QgYnVpbGRGaXJzdExldmVsID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7IGZpcnN0TGV2ZWxNZW51Lm1hcCggbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e20ucm91dGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgLyR7bS5yb3V0ZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMuZmlyc3RMZXZlbCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLmZpcnN0TGV2ZWxBY3RpdmVdOiBtLmlkID09IGZpcnN0Q2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG0uaWNvbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+eyBtLm5hbWUgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttLmlkID09IGZpcnN0Q2F0ZWdvcnkgJiYgYnVpbGRTZWNvbmRMZXZlbChtKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnVpbGRTZWNvbmRMZXZlbCA9IChtZW51SXRlbTogRmlyc3RMZXZlbE1lbnVJdGVtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHsgbWVudS5tYXAoIG0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXttLl9pZC5zZWNvbmRDYXRlZ29yeX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kTGV2ZWx9PnsgbS5faWQuc2Vjb25kQ2F0ZWdvcnkgfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLnNlY29uZExldmVsQmxvY2ssIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsgc3R5bGVzLnNlY29uZExldmVsQmxvY2tPcGVuZWQgXTogbS5pc09wZW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGJ1aWxkVGhpcmRMZXZlbChtLnBhZ2VzLCBtZW51SXRlbS5yb3V0ZSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnVpbGRUaGlyZExldmVsID0gKCBwYWdlczogUGFnZUl0ZW1bXSwgcm91dGU6IHN0cmluZyApID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBwYWdlcy5tYXAoIHAgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17YC8ke3JvdXRlfS8ke3AuYWxpYXN9YH0gY2xhc3NOYW1lPXtjbihzdHlsZXMudGhpcmRMZXZlbCwge1xyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMudGhpcmRMZXZlbEFjdGl2ZV06IHRydWVcclxuICAgICAgICAgICAgICAgIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICB7IHAuY2F0ZWdvcnkgfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICkpXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICAgICAge2J1aWxkRmlyc3RMZXZlbCgpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59IiwidmFyIF9wYXRoLCBfcGF0aDI7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdCb29rcyhwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiAyNCxcbiAgICBoZWlnaHQ6IDIzLFxuICAgIGZpbGw6IFwiIzc4N0Q4NVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTUuMDYgMy43NWgtLjAwMmEuNzMuNzMgMCAwMC0uNTAyLjE5NS42NDguNjQ4IDAgMDAtLjIxLjQ3NnYxMC4wNmMwIC4zNjkuMzIxLjY3LjcxNi42NyAxLjY2Ni4wMDQgNC40NTcuMzMgNi4zODIgMi4yMThWNi44NDFhLjYxMy42MTMgMCAwMC0uMDk4LS4zNEM5Ljc2NiA0LjExNyA2LjczIDMuNzU0IDUuMDYgMy43NXpNMTkuNjU0IDE0LjQ4VjQuNDJjMC0uMTgtLjA3NC0uMzQ5LS4yMS0uNDc2YS43My43MyAwIDAwLS41MDItLjE5NGgtLjAwMWMtMS42Ny4wMDMtNC43MDcuMzY2LTYuMjg3IDIuNzUyYS42MTMuNjEzIDAgMDAtLjA5OC4zNHYxMC41MjdjMS45MjUtMS44ODggNC43MTYtMi4yMTQgNi4zODItMi4yMTcuMzk1LS4wMDIuNzE2LS4zMDIuNzE2LS42NzF6XCJcbiAgfSkpLCBfcGF0aDIgfHwgKF9wYXRoMiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMjEuMjg1IDYuMDdoLS41MnY4LjQxYzAgLjk0My0uODE4IDEuNzEtMS44MjUgMS43MTMtMS40MTMuMDAzLTMuNzQyLjI2Mi01LjM5MiAxLjcyNiAyLjg1My0uNjU1IDUuODYyLS4yMjkgNy41NzYuMTM3YS43NTEuNzUxIDAgMDAuNjA3LS4xMy42NTIuNjUyIDAgMDAuMjY5LS41MjNWNi43NGMwLS4zNy0uMzIxLS42NzEtLjcxNS0uNjcxek0zLjIzNCAxNC40OFY2LjA3aC0uNTE4Yy0uMzk1IDAtLjcxNi4zLS43MTYuNjd2MTAuNjYyYzAgLjIwNi4wOTguMzk3LjI2OS41MjRhLjc1Ljc1IDAgMDAuNjA3LjEzYzEuNzE0LS4zNjYgNC43MjMtLjc5MiA3LjU3Ni0uMTM3LTEuNjUtMS40NjQtMy45OC0xLjcyMy01LjM5My0xLjcyNi0xLjAwNi0uMDAyLTEuODI1LS43Ny0xLjgyNS0xLjcxMnpcIlxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdCb29rczsiLCJ2YXIgX3BhdGgsIF9wYXRoMjtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z0NvdXJzZXMocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogMjQsXG4gICAgaGVpZ2h0OiAyNCxcbiAgICBmaWxsOiBcIiM3ODdEODVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xMiAxMi44OTJsLTYuMzI4LTIuNTQxdjEuODM2YzAgMi4wMDQgMi43MiAzLjUxNSA2LjMyOCAzLjUxNXM2LjMyOC0xLjUxIDYuMzI4LTMuNTE1VjEwLjM1TDEyIDEyLjg5MnpcIlxuICB9KSksIF9wYXRoMiB8fCAoX3BhdGgyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0yNCAxNi40MDVjMC0uOTE1LS41OS0xLjY4OC0xLjQwNi0xLjk4VjcuMTQzTDI0IDYuNTYyIDEyIDEuNzQ3IDAgNi41NjJsMTIgNC44MTUgOS4xODgtMy42N3Y2LjcxOWEyLjEwNiAyLjEwNiAwIDAwLTEuNDA3IDEuOThjMCAuODM4LjQ5NSAxLjU1NyAxLjIwNSAxLjg5N2wtMS4xNjggMy41MDUgMS4zMzMuNDQ1Ljc0LTIuMjE4Ljc0IDIuMjE4IDEuMzMzLS40NDUtMS4xNjktMy41MDVBMi4xMDYgMi4xMDYgMCAwMDI0IDE2LjQwNXpcIlxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdDb3Vyc2VzOyIsInZhciBfcGF0aDtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z1Byb2R1Y3RzKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDI0LFxuICAgIGhlaWdodDogMjMsXG4gICAgZmlsbDogXCIjNzg3RDg1XCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTUuMDkgNC4xNjhsLTguMTY4IDMuOTItMy4yNDctMS40OTcgOC4wMjQtMy43MTRhLjY5Ny42OTcgMCAwMS41ODUgMGwyLjgwNiAxLjI5MXpNMjAuMzE2IDYuNTlsLTguMzExIDMuODYtMy4xMTMtMS40MzctLjQ1LS4yMTQgOC4xNzctMy45Mi40NS4yMTQgMy4yNDcgMS40OTh6TTExLjMzOCAxMS41NjNsLS4wMDggOC4xMjMtNy45NjEtMy44OTVBLjY0OC42NDggMCAwMTMgMTUuMjE4VjcuNzAzbDMuMzczIDEuNTU4djIuNzRjMCAuMzUuMzA2LjY0MS42NzUuNjQxLjM3IDAgLjY3NS0uMjkuNjc1LS42NDJWOS44OTVsLjQ1LjIwNSAzLjE2NSAxLjQ2M3pNMjAuOTkxIDcuNzEybC04LjMwMyAzLjg0My0uMDA4IDguMTIyTDIxIDE1LjYwNGwtLjAwOS03Ljg5MnpcIlxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdQcm9kdWN0czsiLCJ2YXIgX3BhdGg7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdTZXJ2aWNlcyhwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiAyNCxcbiAgICBoZWlnaHQ6IDI0LFxuICAgIGZpbGw6IFwiIzc4N0Q4NVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE5LjY1NCA4Ljc2MmE0Ljc4IDQuNzggMCAwMC4wODItLjg4N0MxOS43MzYgNS4xODcgMTcuNDkgMyAxNC43MjYgM2MtMS43NjMgMC0zLjM5Ny45MTQtNC4yOTUgMi4zNjctMS4yMTMtLjM4My0yLjQ1Ni0uMjE5LTMuNDgxLjQ2OFM1LjMxNCA3LjYxIDUuMjY0IDguNzk4QzMuOTE3IDkuNDIgMyAxMC43NDYgMyAxMi4yMDhjMCAuMjU0LjA2My41MDIuMTEyLjc0MkMzLjQ3MiAxNC43MTkgNS4wOCAxNiA2LjkzNCAxNmgxMS4xMzJDMjAuMjE1IDE2IDIyIDE0LjI5OSAyMiAxMi4yMDhjMC0xLjQ3OC0uOTMtMi44MDktMi4zNDYtMy40NDZ6XCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnU2VydmljZXM7IiwiaW1wb3J0IHsgU2lkZWJhclByb3BzIH0gZnJvbSBcIi4vU2lkZWJhci5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1NpZGViYXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIi4uL01lbnUvTWVudVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNpZGViYXIgPSAoeyAuLi5wcm9wcyB9OiBTaWRlYmFyUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgey4uLnByb3BzfT5cclxuXHRcdFx0PE1lbnU+PC9NZW51PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuIiwiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIFRhZywgUCwgUmFpdGluZyB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHdpdGhMYXlvdXQgfSBmcm9tIFwiLi4vbGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbWVudS5pbnRlZmFjZVwiO1xyXG5cclxuZnVuY3Rpb24gSG9tZSh7IG1lbnUgfTogSG9tZVByb3BzKTogSlNYLkVsZW1lbnQge1xyXG5cdGNvbnN0IFtyYWl0aW5nLCBzZXRSYWl0aW5nXSA9IHVzZVN0YXRlPG51bWJlcj4oNCk7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxCdXR0b24gYXBwZWFyYW5jZT17XCJwcmltYXJ5XCJ9IGFycm93PVwiZG93blwiPlxyXG5cdFx0XHRcdEJ1dHRvblxyXG5cdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PEJ1dHRvbiBhcHBlYXJhbmNlPXtcImdob3N0XCJ9IGFycm93PVwicmlnaHRcIj5cclxuXHRcdFx0XHRCdXR0b25cclxuXHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDxQIHNpemU9XCJsXCI+QmlnPC9QPlxyXG5cdFx0XHQ8UD5NaWRkbGU8L1A+XHJcblx0XHRcdDxQIHNpemU9XCJzXCI+U21hbGw8L1A+XHJcblx0XHRcdDxUYWcgc2l6ZT1cInNcIiBjb2xvcj1cImdob3N0XCI+XHJcblx0XHRcdFx0R2hvc3RcclxuXHRcdFx0PC9UYWc+XHJcblx0XHRcdDxUYWcgc2l6ZT1cIm1cIiBjb2xvcj1cInByaW1hcnlcIj5cclxuXHRcdFx0XHRHaG9zdFxyXG5cdFx0XHQ8L1RhZz5cclxuXHRcdFx0PFRhZyBzaXplPVwibVwiIGNvbG9yPVwiZ3JlZW5cIj5cclxuXHRcdFx0XHRHaG9zdFxyXG5cdFx0XHQ8L1RhZz5cclxuXHRcdFx0PFRhZyBzaXplPVwibVwiIGNvbG9yPVwiZ3JleVwiPlxyXG5cdFx0XHRcdEdob3N0XHJcblx0XHRcdDwvVGFnPlxyXG5cdFx0XHQ8VGFnIHNpemU9XCJtXCIgY29sb3I9XCJyZWRcIj5cclxuXHRcdFx0XHRHaG9zdFxyXG5cdFx0XHQ8L1RhZz5cclxuXHRcdFx0PFJhaXRpbmcgcmFpdGluZz17cmFpdGluZ30gaXNFZGl0YWJsZSBzZXRSYWl0aW5nPXtzZXRSYWl0aW5nfT48L1JhaXRpbmc+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoTGF5b3V0KEhvbWUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuXHRjb25zdCBmaXJzdENhdGVnb3J5ID0gMDtcclxuXHRjb25zdCB7IGRhdGE6IG1lbnUgfSA9IGF3YWl0IGF4aW9zLnBvc3Q8TWVudUl0ZW1bXT4oXHJcblx0XHRwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ET01BSU4gKyBcIi9hcGkvdG9wLXBhZ2UvZmluZFwiLFxyXG5cdFx0e1xyXG5cdFx0XHRmaXJzdENhdGVnb3J5LFxyXG5cdFx0fSxcclxuXHQpO1xyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRtZW51LFxyXG5cdFx0XHRmaXJzdENhdGVnb3J5LFxyXG5cdFx0fSxcclxuXHR9O1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIEhvbWVQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcclxuXHRtZW51OiBNZW51SXRlbVtdO1xyXG5cdGZpcnN0Q2F0ZWdvcnk6IG51bWJlcjtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9