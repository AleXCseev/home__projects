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
      children: firstLevelMenu.map(menu => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: `/${menu.route}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.firstLevel, {
              [_Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.firstLevelActive]: menu.id == firstCategory
            }),
            children: [menu.icon, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: menu.name
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
        }, undefined)
      }, menu.route, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }, undefined))
    }, void 0, false);
  };

  const buildSecondLevel = () => {};

  const buildThirdLevel = () => {};

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.menu,
    children: buildFirstLevel()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
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
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M5.06 3.75h-.002a.73.73 0 00-.502.195.648.648 0 00-.21.476v10.06c0 .369.321.67.716.67 1.666.004 4.457.33 6.382 2.218V6.841a.613.613 0 00-.098-.34C9.766 4.117 6.73 3.754 5.06 3.75zM19.654 14.48V4.42c0-.18-.074-.349-.21-.476a.73.73 0 00-.502-.194h-.001c-1.67.003-4.707.366-6.287 2.752a.613.613 0 00-.098.34v10.527c1.925-1.888 4.716-2.214 6.382-2.217.395-.002.716-.302.716-.671z",
    fill: "#787D85"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M21.285 6.07h-.52v8.41c0 .943-.818 1.71-1.825 1.713-1.413.003-3.742.262-5.392 1.726 2.853-.655 5.862-.229 7.576.137a.751.751 0 00.607-.13.652.652 0 00.269-.523V6.74c0-.37-.321-.671-.715-.671zM3.234 14.48V6.07h-.518c-.395 0-.716.3-.716.67v10.662c0 .206.098.397.269.524a.75.75 0 00.607.13c1.714-.366 4.723-.792 7.576-.137-1.65-1.464-3.98-1.723-5.393-1.726-1.006-.002-1.825-.77-1.825-1.712z",
    fill: "#787D85"
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
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M12 12.892l-6.328-2.541v1.836c0 2.004 2.72 3.515 6.328 3.515s6.328-1.51 6.328-3.515V10.35L12 12.892z",
    fill: "#7653FC"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M24 16.405c0-.915-.59-1.688-1.406-1.98V7.143L24 6.562 12 1.747 0 6.562l12 4.815 9.188-3.67v6.719a2.106 2.106 0 00-1.407 1.98c0 .838.495 1.557 1.205 1.897l-1.168 3.505 1.333.445.74-2.218.74 2.218 1.333-.445-1.169-3.505A2.106 2.106 0 0024 16.405z",
    fill: "#7653FC"
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
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M15.09 4.168l-8.168 3.92-3.247-1.497 8.024-3.714a.697.697 0 01.585 0l2.806 1.291zM20.316 6.59l-8.311 3.86-3.113-1.437-.45-.214 8.177-3.92.45.214 3.247 1.498zM11.338 11.563l-.008 8.123-7.961-3.895A.648.648 0 013 15.218V7.703l3.373 1.558v2.74c0 .35.306.641.675.641.37 0 .675-.29.675-.642V9.895l.45.205 3.165 1.463zM20.991 7.712l-8.303 3.843-.008 8.122L21 15.604l-.009-7.892z",
    fill: "#787D85"
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
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M19.654 8.762a4.78 4.78 0 00.082-.887C19.736 5.187 17.49 3 14.726 3c-1.763 0-3.397.914-4.295 2.367-1.213-.383-2.456-.219-3.481.468S5.314 7.61 5.264 8.798C3.917 9.42 3 10.746 3 12.208c0 .254.063.502.112.742C3.472 14.719 5.08 16 6.934 16h11.132C20.215 16 22 14.299 22 12.208c0-1.478-.93-2.809-2.346-3.446z",
    fill: "#787D85"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi9hcnJvdy5zdmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IdGFnL0h0YWcubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0h0YWcvSHRhZy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QL1AubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1AvUC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SYWl0aW5nL1JhaXRpbmcubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JhaXRpbmcvUmFpdGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SYWl0aW5nL3N0YXIuc3ZnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGFnL1RhZy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGFnL1RhZy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2FwcC5jb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9pbnRlcmZhY2VzL3RvcHBhZ2UuaW50ZXJmYWNlLnRzIiwid2VicGFjazovLy8uL2xheW91dC9Gb290ZXIvRm9vdGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbGF5b3V0L0Zvb3Rlci9Gb290ZXIudHN4Iiwid2VicGFjazovLy8uL2xheW91dC9IZWFkZXIvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9sYXlvdXQvTGF5b3V0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbGF5b3V0L0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vbGF5b3V0L01lbnUvTWVudS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2xheW91dC9NZW51L01lbnUudHN4Iiwid2VicGFjazovLy8uL2xheW91dC9NZW51L2ljb25zL2Jvb2tzLnN2ZyIsIndlYnBhY2s6Ly8vLi9sYXlvdXQvTWVudS9pY29ucy9jb3Vyc2VzLnN2ZyIsIndlYnBhY2s6Ly8vLi9sYXlvdXQvTWVudS9pY29ucy9wcm9kdWN0cy5zdmciLCJ3ZWJwYWNrOi8vLy4vbGF5b3V0L01lbnUvaWNvbnMvc2VydmljZXMuc3ZnIiwid2VicGFjazovLy8uL2xheW91dC9TaWRlYmFyL1NpZGViYXIudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZuc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQnV0dG9uIiwiYXBwZWFyYW5jZSIsImFycm93IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJwcm9wcyIsImNuIiwic3R5bGVzIiwiYnV0dG9uIiwicHJpbWFyeSIsImdob3N0IiwiZG93biIsIkh0YWciLCJ0YWciLCJoMSIsImgyIiwiaDMiLCJQIiwic2l6ZSIsInAiLCJzIiwibSIsImwiLCJSYWl0aW5nIiwiaXNFZGl0YWJsZSIsInJhaXRpbmciLCJzZXRSYWl0aW5nIiwicmFpdGluZ0FycmF5Iiwic2V0UmFpdGluZ0FycmF5IiwidXNlU3RhdGUiLCJBcnJheSIsImZpbGwiLCJ1c2VFZmZlY3QiLCJjb25zdHJ1Y3RSYWl0aW5nIiwiY3VycmVudFJhaXRpbmciLCJ1cGRhdGVkQXJyYXkiLCJtYXAiLCJlbCIsImluZGV4Iiwic3RhciIsImZpbGxlZCIsImVkaXRhYmxlIiwiY2hhbmdlRGlzcGxheSIsIm9uQ2xpY2siLCJlIiwiaGFuZGVsU3BhY2UiLCJjb2RlIiwiVGFnIiwiY29sb3IiLCJocmVmIiwicmVkIiwiZ3JleSIsImdyZWVuIiwiQXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJtZW51IiwiZmlyc3RDYXRlZ29yeSIsIlRvcExldmVsQ2F0ZWdvcnkiLCJDb3Vyc2VzIiwiQXBwQ29udGV4dFByb3ZpZGVyIiwibWVudVN0YXRlIiwic2V0TWVudVN0YXRlIiwic2V0TWVudSIsIm5ld01lbnUiLCJGb290ZXIiLCJmb290ZXIiLCJmb3JtYXQiLCJEYXRlIiwiSGVhZGVyIiwiTGF5b3V0Iiwid3JhcHBlciIsImhlYWRlciIsInNpZGViYXIiLCJib2R5Iiwid2l0aExheW91dCIsIkNvbXBvbmVudCIsIndpdGhMYXlvdXRuQ29tcG9uZW50IiwiZmlyc3RMZXZlbE1lbnUiLCJyb3V0ZSIsIm5hbWUiLCJpY29uIiwiaWQiLCJTZXJ2aWNlcyIsIkJvb2tzIiwiUHJvZHVjdHMiLCJNZW51IiwidXNlQ29udGV4dCIsImJ1aWxkRmlyc3RMZXZlbCIsImZpcnN0TGV2ZWwiLCJmaXJzdExldmVsQWN0aXZlIiwiYnVpbGRTZWNvbmRMZXZlbCIsImJ1aWxkVGhpcmRMZXZlbCIsIlNpZGViYXIiLCJIb21lIiwiZ2V0U3RhdGljUHJvcHMiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwicHJvY2VzcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7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Ozs7O0FDMUNQLGtDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b25cIjogXCJCdXR0b25fYnV0dG9uX19zTDN0RFwiLFxuXHRcInByaW1hcnlcIjogXCJCdXR0b25fcHJpbWFyeV9fMnphbDFcIixcblx0XCJnaG9zdFwiOiBcIkJ1dHRvbl9naG9zdF9fMlNRY3hcIixcblx0XCJhcnJvd1wiOiBcIkJ1dHRvbl9hcnJvd19fLUN4dHdcIixcblx0XCJkb3duXCI6IFwiQnV0dG9uX2Rvd25fXzN1TkdnXCJcbn07XG4iLCJpbXBvcnQgeyBCdXR0b25Qcm9wcyB9IGZyb20gXCIuL0J1dHRvbi5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0J1dHRvbi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBBcnJvd0ljb24gZnJvbSBcIi4vYXJyb3cuc3ZnXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9ICh7IGFwcGVhcmFuY2UsIGFycm93ID0gXCJub25lXCIsIGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnByb3BzIH06IEJ1dHRvblByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8YnV0dG9uXHJcblx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLmJ1dHRvbiwgY2xhc3NOYW1lLCB7XHJcblx0XHRcdFx0W3N0eWxlcy5wcmltYXJ5XTogYXBwZWFyYW5jZSA9PSBcInByaW1hcnlcIixcclxuXHRcdFx0XHRbc3R5bGVzLmdob3N0XTogYXBwZWFyYW5jZSA9PSBcImdob3N0XCIsXHJcblx0XHRcdH0pfVxyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XHJcblx0XHQ+XHJcblx0XHRcdHtjaGlsZHJlbn1cclxuICAgICAgICAgICAge2Fycm93ICE9IFwibm9uZVwiICYmIDxzcGFuIGNsYXNzTmFtZT17Y24oc3R5bGVzLmFycm93LCB7XHJcbiAgICAgICAgICAgICAgICBbc3R5bGVzLmRvd25dOiBhcnJvdyA9PSBcImRvd25cIlxyXG4gICAgICAgICAgICB9KX0+IFxyXG5cdFx0XHRcdDxBcnJvd0ljb24+PC9BcnJvd0ljb24+XHJcblx0XHRcdDwvc3Bhbj59XHJcblx0XHQ8L2J1dHRvbj5cclxuXHQpO1xyXG59O1xyXG4iLCJ2YXIgX3BhdGg7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdBcnJvdyhwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiA2LFxuICAgIGhlaWdodDogMTAsXG4gICAgZmlsbDogXCIjM0I0MzRFXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNS43MTUgNC42MUwxLjI2NS4xNkEuNTQzLjU0MyAwIDAwLjg3OCAwYS41NDMuNTQzIDAgMDAtLjM4Ni4xNkwuMTY0LjQ4N2EuNTQ4LjU0OCAwIDAwMCAuNzc0TDMuOSA0Ljk5OC4xNiA4LjczOWEuNTQzLjU0MyAwIDAwLS4xNi4zODdjMCAuMTQ2LjA1Ny4yODQuMTYuMzg3bC4zMjcuMzI3Yy4xMDMuMTAzLjI0LjE2LjM4Ny4xNmEuNTQzLjU0MyAwIDAwLjM4Ny0uMTZsNC40NTQtNC40NTRhLjU0NC41NDQgMCAwMC4xNi0uMzg4LjU0NC41NDQgMCAwMC0uMTYtLjM4OHpcIlxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdBcnJvdzsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoMVwiOiBcIkh0YWdfaDFfXzE1YzhSXCIsXG5cdFwiaDJcIjogXCJIdGFnX2gyX18zOFQ3Q1wiLFxuXHRcImgzXCI6IFwiSHRhZ19oM19fMUwtN1RcIlxufTtcbiIsImltcG9ydCB7IEh0YWdQcm9wcyB9IGZyb20gXCIuL0h0YWcucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9IdGFnLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBIdGFnID0gKHsgdGFnLCBjaGlsZHJlbiB9OiBIdGFnUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0c3dpdGNoICh0YWcpIHtcclxuXHRcdGNhc2UgXCJoMVwiOlxyXG5cdFx0XHRyZXR1cm4gPGgxIGNsYXNzTmFtZT17c3R5bGVzLmgxfT57Y2hpbGRyZW59PC9oMT47XHJcblx0XHRjYXNlIFwiaDJcIjpcclxuXHRcdFx0cmV0dXJuIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5oMn0+e2NoaWxkcmVufTwvaDI+O1xyXG5cdFx0Y2FzZSBcImgzXCI6XHJcblx0XHRcdHJldHVybiA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuaDN9PntjaGlsZHJlbn08L2gzPjtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiA8PjwvPjtcclxuXHR9XHJcbn07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBcIjogXCJQX3BfXzFkaVhRXCIsXG5cdFwic1wiOiBcIlBfc19fMzVYU3dcIixcblx0XCJtXCI6IFwiUF9tX18zUnVlelwiLFxuXHRcImxcIjogXCJQX2xfX3N4SHBaXCJcbn07XG4iLCJpbXBvcnQgeyBQUHJvcHMgfSBmcm9tIFwiLi9QLnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFAgPSAoeyBzaXplID0gXCJtXCIsIGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnByb3BzIH06IFBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PHBcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZXMucCwgY2xhc3NOYW1lLCB7XHJcblx0XHRcdFx0W3N0eWxlcy5zXTogc2l6ZSA9PSBcInNcIixcclxuXHRcdFx0XHRbc3R5bGVzLm1dOiBzaXplID09IFwibVwiLFxyXG5cdFx0XHRcdFtzdHlsZXMubF06IHNpemUgPT0gXCJsXCIsXHJcblx0XHRcdH0pfVxyXG5cdFx0XHR7Li4ucHJvcHN9XHJcblx0XHQ+XHJcblx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdDwvcD5cclxuXHQpO1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmaWxsZWRcIjogXCJSYWl0aW5nX2ZpbGxlZF9fYk9ncm9cIixcblx0XCJzdGFyXCI6IFwiUmFpdGluZ19zdGFyX18zalVwclwiLFxuXHRcImVkaXRhYmxlXCI6IFwiUmFpdGluZ19lZGl0YWJsZV9fMzAtR0tcIlxufTtcbiIsImltcG9ydCB7IFJhaXRpbmdQcm9wcyB9IGZyb20gXCIuL1JhaXRpbmcucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9SYWl0aW5nLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIEtleWJvYXJkRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN0YXJJY29uIGZyb20gXCIuL3N0YXIuc3ZnXCJcclxuXHJcbmV4cG9ydCBjb25zdCBSYWl0aW5nID0gKHsgaXNFZGl0YWJsZSA9IGZhbHNlLCByYWl0aW5nLCBzZXRSYWl0aW5nLCAuLi5wcm9wcyB9OiBSYWl0aW5nUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0Y29uc3QgW3JhaXRpbmdBcnJheSwgc2V0UmFpdGluZ0FycmF5XSA9IHVzZVN0YXRlPEpTWC5FbGVtZW50W10+KG5ldyBBcnJheSg1KS5maWxsKDw+PC8+KSlcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0cnVjdFJhaXRpbmcocmFpdGluZyk7XHJcblx0fSwgW3JhaXRpbmddKVxyXG5cclxuXHRjb25zdCBjb25zdHJ1Y3RSYWl0aW5nID0gKGN1cnJlbnRSYWl0aW5nOiBudW1iZXIpID0+IHtcclxuXHRcdGNvbnN0IHVwZGF0ZWRBcnJheSA9IHJhaXRpbmdBcnJheS5tYXAoKGVsOiBKU1guRWxlbWVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlcy5zdGFyLCB7XHJcblx0XHRcdFx0XHRcdFtzdHlsZXMuZmlsbGVkXTogaW5kZXggPCBjdXJyZW50UmFpdGluZyxcclxuXHRcdFx0XHRcdFx0W3N0eWxlcy5lZGl0YWJsZV06IGlzRWRpdGFibGVcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsoKSA9PiBjaGFuZ2VEaXNwbGF5KGluZGV4ICsgMSl9XHJcblx0XHRcdFx0XHRvbk1vdXNlTGVhdmU9eygpID0+IGNoYW5nZURpc3BsYXkocmFpdGluZyl9XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGluZGV4ICsgMSl9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PFN0YXJJY29uIFxyXG5cdFx0XHRcdFx0XHR0YWJJbmRleD17aXNFZGl0YWJsZSA/IDAgOiAtMX1cclxuXHRcdFx0XHRcdFx0b25LZXlEb3duPXsoZTogS2V5Ym9hcmRFdmVudDxTVkdBRWxlbWVudD4pID0+IGlzRWRpdGFibGUgJiYgaGFuZGVsU3BhY2UoaW5kZXggKyAxLCBlKX1cclxuXHRcdFx0XHRcdD48L1N0YXJJY29uPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cdFx0c2V0UmFpdGluZ0FycmF5KHVwZGF0ZWRBcnJheSlcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjaGFuZ2VEaXNwbGF5ID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdGlmKCFpc0VkaXRhYmxlKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGNvbnN0cnVjdFJhaXRpbmcoaW5kZXgpXHJcblx0fVxyXG5cclxuXHRjb25zdCBvbkNsaWNrID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdGlmKCFpc0VkaXRhYmxlIHx8ICFzZXRSYWl0aW5nKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHNldFJhaXRpbmcoaW5kZXgpXHJcblx0fVxyXG5cclxuXHRjb25zdCBoYW5kZWxTcGFjZSA9IChpbmRleDogbnVtYmVyLCBlOiBLZXlib2FyZEV2ZW50PFNWR0FFbGVtZW50PikgPT4ge1xyXG5cdFx0aWYgKGUuY29kZSAhPSBcIlNwYWNlXCIgfHwgIXNldFJhaXRpbmcpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0c2V0UmFpdGluZyhpbmRleClcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IHsuLi5wcm9wc30+XHJcblx0XHRcdHtyYWl0aW5nQXJyYXkubWFwKChlbDogSlNYLkVsZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4oXHJcblx0XHRcdFx0XHQ8c3BhbiBrZXk9e2luZGV4fT57ZWx9PC9zcGFuPlxyXG5cdFx0XHRcdClcclxuXHRcdFx0fSl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG4iLCJ2YXIgX3BhdGg7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdTdGFyKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMjAsXG4gICAgZmlsbDogXCIjRTJFMkUyXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTkuOTQ4IDcuNTU3YTEuMDcyIDEuMDcyIDAgMDAtLjkxNS0uNzYybC01Ljc3My0uNTQ3TDEwLjk3OC42NzRBMS4wNjMgMS4wNjMgMCAwMDEwIDBjLS40MjcgMC0uODEuMjY0LS45NzcuNjc0TDYuNzQgNi4yNDhsLTUuNzc0LjU0N2MtLjQyNC4wNC0uNzgyLjM0LS45MTUuNzYyLS4xMzEuNDIyLS4wMS44ODYuMzEgMS4xNzlsNC4zNjUgMy45OTMtMS4yODcgNS45MTRjLS4wOTQuNDM1LjA2Ny44ODUuNDEzIDEuMTQ2YTEuMDI5IDEuMDI5IDAgMDAxLjE2OS4wNTRMMTAgMTYuNzM2bDQuOTc3IDMuMTA3Yy4zNjYuMjI3LjgyNS4yMDYgMS4xNy0uMDU0LjM0Ni0uMjYxLjUwNy0uNzEuNDEzLTEuMTQ2bC0xLjI4Ny01LjkxNCA0LjM2NS0zLjk5M2MuMzItLjI5My40NDEtLjc1Ni4zMS0xLjE4elwiXG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1N0YXI7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGFnXCI6IFwiVGFnX3RhZ19fMTFURXNcIixcblx0XCJzXCI6IFwiVGFnX3NfXzFQVlYtXCIsXG5cdFwibVwiOiBcIlRhZ19tX18yaW56cVwiLFxuXHRcImdob3N0XCI6IFwiVGFnX2dob3N0X18xdXZoNlwiLFxuXHRcInJlZFwiOiBcIlRhZ19yZWRfXzF4Q19tXCIsXG5cdFwiZ3JleVwiOiBcIlRhZ19ncmV5X18xUXk2RlwiLFxuXHRcImdyZWVuXCI6IFwiVGFnX2dyZWVuX19ocGl4blwiLFxuXHRcInByaW1hcnlcIjogXCJUYWdfcHJpbWFyeV9fMS1TZFJcIlxufTtcbiIsImltcG9ydCB7IFRhZ1Byb3BzIH0gZnJvbSBcIi4vVGFnLnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVGFnLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVGFnID0gKHsgc2l6ZSA9IFwic1wiLCBjaGlsZHJlbiwgY29sb3I9XCJnaG9zdFwiLCBocmVmLCBjbGFzc05hbWUsIC4uLnByb3BzIH06IFRhZ1Byb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLnRhZywgY2xhc3NOYW1lLCB7XHJcblx0XHRcdFx0W3N0eWxlcy5zXTogc2l6ZSA9PSBcInNcIixcclxuXHRcdFx0XHRbc3R5bGVzLm1dOiBzaXplID09IFwibVwiLFxyXG5cdFx0XHRcdFtzdHlsZXMuZ2hvc3RdOiBjb2xvciA9PSBcImdob3N0XCIsXHJcblx0XHRcdFx0W3N0eWxlcy5yZWRdOiBjb2xvciA9PSBcInJlZFwiLFxyXG5cdFx0XHRcdFtzdHlsZXMuZ3JleV06IGNvbG9yID09IFwiZ3JleVwiLFxyXG5cdFx0XHRcdFtzdHlsZXMuZ3JlZW5dOiBjb2xvciA9PSBcImdyZWVuXCIsXHJcblx0XHRcdFx0W3N0eWxlcy5wcmltYXJ5XTogY29sb3IgPT0gXCJwcmltYXJ5XCIsXHJcblx0XHRcdH0pfVxyXG5cdFx0XHR7Li4ucHJvcHN9XHJcblx0XHQ+XHJcblx0XHRcdHtcclxuXHRcdFx0XHRocmVmID8gPGEgaHJlZj17aHJlZn0+e2NoaWxkcmVufTwvYT4gOiA8PntjaGlsZHJlbn08Lz5cclxuXHRcdFx0fVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vSHRhZy9IdGFnXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0J1dHRvbi9CdXR0b25cIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9QL1BcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9UYWcvVGFnXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vUmFpdGluZy9SYWl0aW5nXCIiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBQcm9wc1dpdGhDaGlsZHJlbiwgUmVhY3ROb2RlLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL21lbnUuaW50ZWZhY2VcIjtcclxuaW1wb3J0IHsgVG9wTGV2ZWxDYXRlZ29yeSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3RvcHBhZ2UuaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBcHBDb250ZXh0IHtcclxuICAgIG1lbnU6IE1lbnVJdGVtW107XHJcbiAgICBmaXJzdENhdGVnb3J5OiBUb3BMZXZlbENhdGVnb3J5O1xyXG4gICAgc2V0TWVudT86IChuZXdNZW51OiBNZW51SXRlbVtdKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SUFwcENvbnRleHQ+KHsgbWVudSA6IFtdLCBmaXJzdENhdGVnb3J5OiBUb3BMZXZlbENhdGVnb3J5LkNvdXJzZXMgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dFByb3ZpZGVyID0gKHsgbWVudSwgZmlyc3RDYXRlZ29yeSwgY2hpbGRyZW59OiBQcm9wc1dpdGhDaGlsZHJlbjxJQXBwQ29udGV4dD4pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IFttZW51U3RhdGUsIHNldE1lbnVTdGF0ZV0gPSB1c2VTdGF0ZTxNZW51SXRlbVtdPihtZW51KTtcclxuICAgIGNvbnN0IHNldE1lbnUgPSAobmV3TWVudTogTWVudUl0ZW1bXSkgPT4ge1xyXG4gICAgICAgIHNldE1lbnVTdGF0ZShuZXdNZW51KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbWVudTogbWVudVN0YXRlLCBmaXJzdENhdGVnb3J5LCBzZXRNZW51IH19PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxufSIsImV4cG9ydCBlbnVtIFRvcExldmVsQ2F0ZWdvcnkge1xyXG4gICAgQ291cnNlcyxcclxuICAgIFNlcnZpY2VzLFxyXG4gICAgQm9va3MsXHJcbiAgICBQcm9kdWN0c1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvcFBhZ2VBZHZhbnRhZ2Uge1xyXG4gICAgX2lkOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIaERhdGEge1xyXG4gICAgX2lkOiBzdHJpbmc7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG4gICAganVuaW9yU2FsYXJ5OiBudW1iZXI7XHJcbiAgICBtaWRkbGVTYWxhcnk6IG51bWJlcjtcclxuICAgIHNlbmlvclNhbGFyeTogbnVtYmVyO1xyXG4gICAgdXBkYXRlZEF0OiBEYXRlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvcFBhZ2VNb2RlbCB7XHJcblx0dGFnczogc3RyaW5nW107XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0c2Vjb25kU2VjdGlvbjogc3RyaW5nO1xyXG5cdGFsaWFzOiBzdHJpbmc7XHJcblx0dGl0bGU6IHN0cmluZztcclxuXHRjYXRlZ29yeTogc3RyaW5nO1xyXG5cdHNlb1RleHQ6IHN0cmluZztcclxuXHR0YWdzVGl0bGU6IHN0cmluZztcclxuXHRtZXRhVGl0bGU6IHN0cmluZztcclxuXHRtZXRhRGVzY3JpcHRpb246IHN0cmluZztcclxuXHRmaXJzdENhdGVnb3J5OiBUb3BMZXZlbENhdGVnb3J5O1xyXG5cdGFkdmFudGFnZXM6IFRvcFBhZ2VBZHZhbnRhZ2VbXTtcclxuXHRjcmVhdGVkQXQ6IERhdGU7XHJcblx0dXBkYXRlZEF0OiBEYXRlO1xyXG5cdGhoOiBIaERhdGE7XHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJcIjogXCJGb290ZXJfZm9vdGVyX18zbDZ5UFwiXG59O1xuIiwiaW1wb3J0IHsgRm9vdGVyUHJvcHMgfSBmcm9tIFwiLi9Gb290ZXIucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Gb290ZXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBGb290ZXJQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGZvb3RlciBjbGFzc05hbWU9e2NuKGNsYXNzTmFtZSwgc3R5bGVzLmZvb3Rlcil9IHsuLi5wcm9wc30+XHJcblx0XHRcdDxkaXY+T3dsVG9wIMKpIDIwMjAgLSB7Zm9ybWF0KG5ldyBEYXRlKCksIFwieXl5eVwiKX0g0JLRgdC1INC/0YDQsNCy0LAg0LfQsNGJ0LjRidC10L3RizwvZGl2PlxyXG5cdFx0XHQ8YSBocmVmPVwiI1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG5cdFx0XHRcdNCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjNGB0LrQvtC1INGB0L7Qs9C70LDRiNC10L3QuNC1XHJcblx0XHRcdDwvYT5cclxuXHRcdFx0PGEgaHJlZj1cIiNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuXHRcdFx0XHTQn9C+0LvQuNGC0LjQutCwINC60L7QvdGE0LjQtNC10L3RhtC40LDQu9GM0L3QvtGB0YLQuFxyXG5cdFx0XHQ8L2E+XHJcblx0XHQ8L2Zvb3Rlcj5cclxuXHQpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBIZWFkZXJQcm9wcyB9IGZyb20gXCIuL0hlYWRlci5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0hlYWRlci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICh7IC4uLnByb3BzIH06IEhlYWRlclByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdHJldHVybiA8ZGl2IHsuLi5wcm9wc30+SGVhZGVyPC9kaXY+O1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiTGF5b3V0X3dyYXBwZXJfXzNJdkJ5XCIsXG5cdFwiaGVhZGVyXCI6IFwiTGF5b3V0X2hlYWRlcl9fMk0yRjhcIixcblx0XCJzaWRlYmFyXCI6IFwiTGF5b3V0X3NpZGViYXJfXzIwNXlBXCIsXG5cdFwiYm9keVwiOiBcIkxheW91dF9ib2R5X18zWDFfbVwiLFxuXHRcImZvb3RlclwiOiBcIkxheW91dF9mb290ZXJfXzE5NmxVXCJcbn07XG4iLCJpbXBvcnQgeyBMYXlvdXRQcm9wcyB9IGZyb20gXCIuL0xheW91dC5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xheW91dC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiLi9TaWRlYmFyL1NpZGViYXJcIjtcclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4vRm9vdGVyL0Zvb3RlclwiO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0UHJvdmlkZXIsIElBcHBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvYXBwLmNvbnRleHRcIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9OiBMYXlvdXRQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuXHRcdFx0PEhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PjwvSGVhZGVyPlxyXG5cdFx0XHQ8U2lkZWJhciBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyfT48L1NpZGViYXI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+e2NoaWxkcmVufTwvZGl2PlxyXG5cdFx0XHQ8Rm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+PC9Gb290ZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpdGhMYXlvdXQgPSA8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+ICYgSUFwcENvbnRleHQ+KENvbXBvbmVudDogRnVuY3Rpb25Db21wb25lbnQ8VD4pID0+IHtcclxuXHRyZXR1cm4gZnVuY3Rpb24gd2l0aExheW91dG5Db21wb25lbnQocHJvcHM6IFQpOiBKU1guRWxlbWVudCB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8QXBwQ29udGV4dFByb3ZpZGVyIG1lbnU9e3Byb3BzLm1lbnV9IGZpcnN0Q2F0ZWdvcnk9e3Byb3BzLmZpcnN0Q2F0ZWdvcnl9PlxyXG5cdFx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wcm9wc30+PC9Db21wb25lbnQ+XHJcblx0XHRcdFx0PC9MYXlvdXQ+XHJcblx0XHRcdDwvQXBwQ29udGV4dFByb3ZpZGVyPlxyXG5cdFx0KTtcclxuXHR9O1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxufTtcbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvYXBwLmNvbnRleHRcIlxyXG5pbXBvcnQgeyBGaXJzdExldmVsTWVudUl0ZW0gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9tZW51LmludGVmYWNlXCJcclxuaW1wb3J0IENvdXJzZXNJY29uIGZyb20gXCIuL2ljb25zL2NvdXJzZXMuc3ZnXCJcclxuaW1wb3J0IFNlcnZpY2VzSWNvbiBmcm9tIFwiLi9pY29ucy9zZXJ2aWNlcy5zdmdcIlxyXG5pbXBvcnQgQm9va3NJY29uIGZyb20gXCIuL2ljb25zL2Jvb2tzLnN2Z1wiXHJcbmltcG9ydCBQcm9kdWN0c0ljb24gZnJvbSBcIi4vaWNvbnMvcHJvZHVjdHMuc3ZnXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9NZW51Lm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyBUb3BMZXZlbENhdGVnb3J5IH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvdG9wcGFnZS5pbnRlcmZhY2VcIlxyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIlxyXG5cclxuY29uc3QgZmlyc3RMZXZlbE1lbnU6IEZpcnN0TGV2ZWxNZW51SXRlbVtdID0gW1xyXG4gICAgeyByb3V0ZTogXCJjb3Vyc2VzXCIsIG5hbWU6IFwi0JrRg9GA0YHRi1wiLCBpY29uOiA8Q291cnNlc0ljb24+PC9Db3Vyc2VzSWNvbj4sIGlkOiBUb3BMZXZlbENhdGVnb3J5LkNvdXJzZXMgfSxcclxuICAgIHsgcm91dGU6IFwic2VydmljZXNcIiwgbmFtZTogXCLQodC10YDQstC40YHRi1wiLCBpY29uOiA8U2VydmljZXNJY29uPjwvU2VydmljZXNJY29uPiwgaWQ6IFRvcExldmVsQ2F0ZWdvcnkuU2VydmljZXMgfSxcclxuICAgIHsgcm91dGU6IFwiYm9va3NcIiwgbmFtZTogXCLQmtC90LjQs9C4XCIsIGljb246IDxCb29rc0ljb24+PC9Cb29rc0ljb24+LCBpZDogVG9wTGV2ZWxDYXRlZ29yeS5Cb29rcyB9LFxyXG4gICAgeyByb3V0ZTogXCJwcm9kdWN0c1wiLCBuYW1lOiBcItCf0YDQvtC00YPQutGC0YtcIiwgaWNvbjogPFByb2R1Y3RzSWNvbj48L1Byb2R1Y3RzSWNvbj4sIGlkOiBUb3BMZXZlbENhdGVnb3J5LlByb2R1Y3RzIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHJcbiAgICBjb25zdCB7IG1lbnUsIHNldE1lbnUsIGZpcnN0Q2F0ZWdvcnkgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dClcclxuXHJcbiAgICBjb25zdCBidWlsZEZpcnN0TGV2ZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHsgZmlyc3RMZXZlbE1lbnUubWFwKCBtZW51ID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bWVudS5yb3V0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvJHttZW51LnJvdXRlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5maXJzdExldmVsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuZmlyc3RMZXZlbEFjdGl2ZV06IG1lbnUuaWQgPT0gZmlyc3RDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbWVudS5pY29uIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57IG1lbnUubmFtZSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnVpbGRTZWNvbmRMZXZlbCA9ICgpID0+IHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidWlsZFRoaXJkTGV2ZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9PlxyXG4gICAgICAgICAgICB7YnVpbGRGaXJzdExldmVsKCl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn0iLCJ2YXIgX3BhdGgsIF9wYXRoMjtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z0Jvb2tzKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDI0LFxuICAgIGhlaWdodDogMjMsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNS4wNiAzLjc1aC0uMDAyYS43My43MyAwIDAwLS41MDIuMTk1LjY0OC42NDggMCAwMC0uMjEuNDc2djEwLjA2YzAgLjM2OS4zMjEuNjcuNzE2LjY3IDEuNjY2LjAwNCA0LjQ1Ny4zMyA2LjM4MiAyLjIxOFY2Ljg0MWEuNjEzLjYxMyAwIDAwLS4wOTgtLjM0QzkuNzY2IDQuMTE3IDYuNzMgMy43NTQgNS4wNiAzLjc1ek0xOS42NTQgMTQuNDhWNC40MmMwLS4xOC0uMDc0LS4zNDktLjIxLS40NzZhLjczLjczIDAgMDAtLjUwMi0uMTk0aC0uMDAxYy0xLjY3LjAwMy00LjcwNy4zNjYtNi4yODcgMi43NTJhLjYxMy42MTMgMCAwMC0uMDk4LjM0djEwLjUyN2MxLjkyNS0xLjg4OCA0LjcxNi0yLjIxNCA2LjM4Mi0yLjIxNy4zOTUtLjAwMi43MTYtLjMwMi43MTYtLjY3MXpcIixcbiAgICBmaWxsOiBcIiM3ODdEODVcIlxuICB9KSksIF9wYXRoMiB8fCAoX3BhdGgyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0yMS4yODUgNi4wN2gtLjUydjguNDFjMCAuOTQzLS44MTggMS43MS0xLjgyNSAxLjcxMy0xLjQxMy4wMDMtMy43NDIuMjYyLTUuMzkyIDEuNzI2IDIuODUzLS42NTUgNS44NjItLjIyOSA3LjU3Ni4xMzdhLjc1MS43NTEgMCAwMC42MDctLjEzLjY1Mi42NTIgMCAwMC4yNjktLjUyM1Y2Ljc0YzAtLjM3LS4zMjEtLjY3MS0uNzE1LS42NzF6TTMuMjM0IDE0LjQ4VjYuMDdoLS41MThjLS4zOTUgMC0uNzE2LjMtLjcxNi42N3YxMC42NjJjMCAuMjA2LjA5OC4zOTcuMjY5LjUyNGEuNzUuNzUgMCAwMC42MDcuMTNjMS43MTQtLjM2NiA0LjcyMy0uNzkyIDcuNTc2LS4xMzctMS42NS0xLjQ2NC0zLjk4LTEuNzIzLTUuMzkzLTEuNzI2LTEuMDA2LS4wMDItMS44MjUtLjc3LTEuODI1LTEuNzEyelwiLFxuICAgIGZpbGw6IFwiIzc4N0Q4NVwiXG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0Jvb2tzOyIsInZhciBfcGF0aCwgX3BhdGgyO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnQ291cnNlcyhwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiAyNCxcbiAgICBoZWlnaHQ6IDI0LFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTEyIDEyLjg5MmwtNi4zMjgtMi41NDF2MS44MzZjMCAyLjAwNCAyLjcyIDMuNTE1IDYuMzI4IDMuNTE1czYuMzI4LTEuNTEgNi4zMjgtMy41MTVWMTAuMzVMMTIgMTIuODkyelwiLFxuICAgIGZpbGw6IFwiIzc2NTNGQ1wiXG4gIH0pKSwgX3BhdGgyIHx8IChfcGF0aDIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTI0IDE2LjQwNWMwLS45MTUtLjU5LTEuNjg4LTEuNDA2LTEuOThWNy4xNDNMMjQgNi41NjIgMTIgMS43NDcgMCA2LjU2MmwxMiA0LjgxNSA5LjE4OC0zLjY3djYuNzE5YTIuMTA2IDIuMTA2IDAgMDAtMS40MDcgMS45OGMwIC44MzguNDk1IDEuNTU3IDEuMjA1IDEuODk3bC0xLjE2OCAzLjUwNSAxLjMzMy40NDUuNzQtMi4yMTguNzQgMi4yMTggMS4zMzMtLjQ0NS0xLjE2OS0zLjUwNUEyLjEwNiAyLjEwNiAwIDAwMjQgMTYuNDA1elwiLFxuICAgIGZpbGw6IFwiIzc2NTNGQ1wiXG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0NvdXJzZXM7IiwidmFyIF9wYXRoO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnUHJvZHVjdHMocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogMjQsXG4gICAgaGVpZ2h0OiAyMyxcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xNS4wOSA0LjE2OGwtOC4xNjggMy45Mi0zLjI0Ny0xLjQ5NyA4LjAyNC0zLjcxNGEuNjk3LjY5NyAwIDAxLjU4NSAwbDIuODA2IDEuMjkxek0yMC4zMTYgNi41OWwtOC4zMTEgMy44Ni0zLjExMy0xLjQzNy0uNDUtLjIxNCA4LjE3Ny0zLjkyLjQ1LjIxNCAzLjI0NyAxLjQ5OHpNMTEuMzM4IDExLjU2M2wtLjAwOCA4LjEyMy03Ljk2MS0zLjg5NUEuNjQ4LjY0OCAwIDAxMyAxNS4yMThWNy43MDNsMy4zNzMgMS41NTh2Mi43NGMwIC4zNS4zMDYuNjQxLjY3NS42NDEuMzcgMCAuNjc1LS4yOS42NzUtLjY0MlY5Ljg5NWwuNDUuMjA1IDMuMTY1IDEuNDYzek0yMC45OTEgNy43MTJsLTguMzAzIDMuODQzLS4wMDggOC4xMjJMMjEgMTUuNjA0bC0uMDA5LTcuODkyelwiLFxuICAgIGZpbGw6IFwiIzc4N0Q4NVwiXG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1Byb2R1Y3RzOyIsInZhciBfcGF0aDtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z1NlcnZpY2VzKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDI0LFxuICAgIGhlaWdodDogMjQsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTkuNjU0IDguNzYyYTQuNzggNC43OCAwIDAwLjA4Mi0uODg3QzE5LjczNiA1LjE4NyAxNy40OSAzIDE0LjcyNiAzYy0xLjc2MyAwLTMuMzk3LjkxNC00LjI5NSAyLjM2Ny0xLjIxMy0uMzgzLTIuNDU2LS4yMTktMy40ODEuNDY4UzUuMzE0IDcuNjEgNS4yNjQgOC43OThDMy45MTcgOS40MiAzIDEwLjc0NiAzIDEyLjIwOGMwIC4yNTQuMDYzLjUwMi4xMTIuNzQyQzMuNDcyIDE0LjcxOSA1LjA4IDE2IDYuOTM0IDE2aDExLjEzMkMyMC4yMTUgMTYgMjIgMTQuMjk5IDIyIDEyLjIwOGMwLTEuNDc4LS45My0yLjgwOS0yLjM0Ni0zLjQ0NnpcIixcbiAgICBmaWxsOiBcIiM3ODdEODVcIlxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdTZXJ2aWNlczsiLCJpbXBvcnQgeyBTaWRlYmFyUHJvcHMgfSBmcm9tIFwiLi9TaWRlYmFyLnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU2lkZWJhci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiLi4vTWVudS9NZW51XCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2lkZWJhciA9ICh7IC4uLnByb3BzIH06IFNpZGViYXJQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiB7Li4ucHJvcHN9PlxyXG5cdFx0XHQ8TWVudT48L01lbnU+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVGFnLCBQLCBSYWl0aW5nIH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgd2l0aExheW91dCB9IGZyb20gXCIuLi9sYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9tZW51LmludGVmYWNlXCI7XHJcblxyXG5mdW5jdGlvbiBIb21lKHsgbWVudSB9OiBIb21lUHJvcHMpOiBKU1guRWxlbWVudCB7XHJcblx0Y29uc3QgW3JhaXRpbmcsIHNldFJhaXRpbmddID0gdXNlU3RhdGU8bnVtYmVyPig0KTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEJ1dHRvbiBhcHBlYXJhbmNlPXtcInByaW1hcnlcIn0gYXJyb3c9XCJkb3duXCI+XHJcblx0XHRcdFx0QnV0dG9uXHJcblx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHQ8QnV0dG9uIGFwcGVhcmFuY2U9e1wiZ2hvc3RcIn0gYXJyb3c9XCJyaWdodFwiPlxyXG5cdFx0XHRcdEJ1dHRvblxyXG5cdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PFAgc2l6ZT1cImxcIj5CaWc8L1A+XHJcblx0XHRcdDxQPk1pZGRsZTwvUD5cclxuXHRcdFx0PFAgc2l6ZT1cInNcIj5TbWFsbDwvUD5cclxuXHRcdFx0PFRhZyBzaXplPVwic1wiIGNvbG9yPVwiZ2hvc3RcIj5cclxuXHRcdFx0XHRHaG9zdFxyXG5cdFx0XHQ8L1RhZz5cclxuXHRcdFx0PFRhZyBzaXplPVwibVwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG5cdFx0XHRcdEdob3N0XHJcblx0XHRcdDwvVGFnPlxyXG5cdFx0XHQ8VGFnIHNpemU9XCJtXCIgY29sb3I9XCJncmVlblwiPlxyXG5cdFx0XHRcdEdob3N0XHJcblx0XHRcdDwvVGFnPlxyXG5cdFx0XHQ8VGFnIHNpemU9XCJtXCIgY29sb3I9XCJncmV5XCI+XHJcblx0XHRcdFx0R2hvc3RcclxuXHRcdFx0PC9UYWc+XHJcblx0XHRcdDxUYWcgc2l6ZT1cIm1cIiBjb2xvcj1cInJlZFwiPlxyXG5cdFx0XHRcdEdob3N0XHJcblx0XHRcdDwvVGFnPlxyXG5cdFx0XHQ8UmFpdGluZyByYWl0aW5nPXtyYWl0aW5nfSBpc0VkaXRhYmxlIHNldFJhaXRpbmc9e3NldFJhaXRpbmd9PjwvUmFpdGluZz5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhMYXlvdXQoSG9tZSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG5cdGNvbnN0IGZpcnN0Q2F0ZWdvcnkgPSAwO1xyXG5cdGNvbnN0IHsgZGF0YTogbWVudSB9ID0gYXdhaXQgYXhpb3MucG9zdDxNZW51SXRlbVtdPihcclxuXHRcdHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RPTUFJTiArIFwiL2FwaS90b3AtcGFnZS9maW5kXCIsXHJcblx0XHR7XHJcblx0XHRcdGZpcnN0Q2F0ZWdvcnksXHJcblx0XHR9LFxyXG5cdCk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdG1lbnUsXHJcblx0XHRcdGZpcnN0Q2F0ZWdvcnksXHJcblx0XHR9LFxyXG5cdH07XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgSG9tZVByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xyXG5cdG1lbnU6IE1lbnVJdGVtW107XHJcblx0Zmlyc3RDYXRlZ29yeTogbnVtYmVyO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=