webpackHotUpdate_N_E("pages/[type]/[alias]",{

/***/ "./components/Card/Card.module.css":
/*!*****************************************!*\
  !*** ./components/Card/Card.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Card.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Card/Card.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Card.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Card/Card.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Card.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Card/Card.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/Card/Card.tsx":
/*!**********************************!*\
  !*** ./components/Card/Card.tsx ***!
  \**********************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card.module.css */ "./components/Card/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\components\\Card\\Card.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var Card = function Card(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? "white" : _ref$color,
      children = _ref.children,
      className = _ref.className,
      props = Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["color", "children", "className"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.card, className, Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _Card_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.blue, color == "blue"))
  }, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, _this);
};
_c = Card;

var _c;

$RefreshReg$(_c, "Card");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/HhData/HhData.module.css":
/*!*********************************************!*\
  !*** ./components/HhData/HhData.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./HhData.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/HhData/HhData.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./HhData.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/HhData/HhData.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./HhData.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/HhData/HhData.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/HhData/HhData.tsx":
/*!**************************************!*\
  !*** ./components/HhData/HhData.tsx ***!
  \**************************************/
/*! exports provided: HhData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HhData", function() { return HhData; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HhData_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HhData.module.css */ "./components/HhData/HhData.module.css");
/* harmony import */ var _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HhData_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "./components/index.ts");


var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\components\\HhData\\HhData.tsx",
    _this = undefined;




var HhData = function HhData(_ref) {
  var count = _ref.count;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hh,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_3__["Card"], {
      className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.count,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
        children: "\u0412\u0441\u0435\u0433\u043E \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0439"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.countValue,
        children: count
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }, _this);
};
_c = HhData;

var _c;

$RefreshReg$(_c, "HhData");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/index.ts":
/*!*****************************!*\
  !*** ./components/index.ts ***!
  \*****************************/
/*! exports provided: Htag, Button, P, Tag, Raiting, Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Htag_Htag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Htag/Htag */ "./components/Htag/Htag.tsx");
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








;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Card/Card.module.css":
/*!*****************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/Card/Card.module.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Card_card__K0CRX {\r\n\tborder-radius: 5px;\r\n\t-webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);\r\n\t        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);\r\n\tbackground: var(--white);\r\n}\r\n\r\n.Card_blue__1W0l3 {\r\n\tbackground: #f9f8ff;\r\n}\r\n", "",{"version":3,"sources":["webpack://components/Card/Card.module.css"],"names":[],"mappings":"AAAA;CACC,kBAAkB;CAClB,mDAA2C;SAA3C,2CAA2C;CAC3C,wBAAwB;AACzB;;AAEA;CACC,mBAAmB;AACpB","sourcesContent":[".card {\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);\r\n\tbackground: var(--white);\r\n}\r\n\r\n.blue {\r\n\tbackground: #f9f8ff;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"card": "Card_card__K0CRX",
	"blue": "Card_blue__1W0l3"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/HhData/HhData.module.css":
/*!*********************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/HhData/HhData.module.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\r\n", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./page-components/TopPageComponent/TopPageComponent.module.css":
/*!**********************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./page-components/TopPageComponent/TopPageComponent.module.css ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".TopPageComponent_wrapper__1bF7c {\r\n    margin-top: 40px;\r\n}\r\n\r\n.TopPageComponent_title__24ziI {\r\n    display: grid;\r\n    grid-template-columns: auto 1fr auto;\r\n    align-items: baseline;\r\n    justify-items: left;\r\n    grid-gap: 20px;\r\n    gap: 20px;\r\n}\r\n\r\n.TopPageComponent_hhtitle__1-VjQ {\r\n    display: grid;\r\n    grid-template-columns: auto 1fr;\r\n    align-items: baseline;\r\n    justify-items: left;\r\n    grid-gap: 20px;\r\n    gap: 20px;\r\n}\r\n", "",{"version":3,"sources":["webpack://page-components/TopPageComponent/TopPageComponent.module.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,qBAAqB;IACrB,mBAAmB;IACnB,cAAS;IAAT,SAAS;AACb;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,qBAAqB;IACrB,mBAAmB;IACnB,cAAS;IAAT,SAAS;AACb","sourcesContent":[".wrapper {\r\n    margin-top: 40px;\r\n}\r\n\r\n.title {\r\n    display: grid;\r\n    grid-template-columns: auto 1fr auto;\r\n    align-items: baseline;\r\n    justify-items: left;\r\n    gap: 20px;\r\n}\r\n\r\n.hhtitle {\r\n    display: grid;\r\n    grid-template-columns: auto 1fr;\r\n    align-items: baseline;\r\n    justify-items: left;\r\n    gap: 20px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wrapper": "TopPageComponent_wrapper__1bF7c",
	"title": "TopPageComponent_title__24ziI",
	"hhtitle": "TopPageComponent_hhtitle__1-VjQ"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./page-components/TopPageComponent/TopPageComponent.tsx":
/*!***************************************************************!*\
  !*** ./page-components/TopPageComponent/TopPageComponent.tsx ***!
  \***************************************************************/
/*! exports provided: TopPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopPageComponent", function() { return TopPageComponent; });
/* harmony import */ var C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./components/index.ts");
/* harmony import */ var _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopPageComponent.module.css */ "./page-components/TopPageComponent/TopPageComponent.module.css");
/* harmony import */ var _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_HhData_HhData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/HhData/HhData */ "./components/HhData/HhData.tsx");



var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\page-components\\TopPageComponent\\TopPageComponent.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var TopPageComponent = function TopPageComponent(_ref) {
  var page = _ref.page,
      products = _ref.products,
      firstCategory = _ref.firstCategory;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.wrapper,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Htag"], {
        tag: "h1",
        children: page.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, _this), products && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
        color: "grey",
        size: "m",
        children: products.length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 30
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: products && products.map(function (p) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          children: p.title
        }, p._id, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 49
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.hhTitle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Htag"], {
        tag: "h2",
        children: ["\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438 - ", page.category]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
        color: "red",
        size: "m",
        children: "hh.ru"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_HhData_HhData__WEBPACK_IMPORTED_MODULE_5__["HhData"], _objectSpread({}, page.hh), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, _this);
};
_c = TopPageComponent;

var _c;

$RefreshReg$(_c, "TopPageComponent");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkL0NhcmQubW9kdWxlLmNzcz83MjdkIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhcmQvQ2FyZC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGhEYXRhL0hoRGF0YS5tb2R1bGUuY3NzPzg3ZmQiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGhEYXRhL0hoRGF0YS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FyZC9DYXJkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGhEYXRhL0hoRGF0YS5tb2R1bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9wYWdlLWNvbXBvbmVudHMvVG9wUGFnZUNvbXBvbmVudC9Ub3BQYWdlQ29tcG9uZW50Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2UtY29tcG9uZW50cy9Ub3BQYWdlQ29tcG9uZW50L1RvcFBhZ2VDb21wb25lbnQudHN4Il0sIm5hbWVzIjpbIkNhcmQiLCJjb2xvciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJjbiIsInN0eWxlcyIsImNhcmQiLCJibHVlIiwiSGhEYXRhIiwiY291bnQiLCJoaCIsInRpdGxlIiwiY291bnRWYWx1ZSIsIlRvcFBhZ2VDb21wb25lbnQiLCJwYWdlIiwicHJvZHVjdHMiLCJmaXJzdENhdGVnb3J5Iiwid3JhcHBlciIsImxlbmd0aCIsIm1hcCIsInAiLCJfaWQiLCJoaFRpdGxlIiwiY2F0ZWdvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLFVBQVUsbUJBQU8sQ0FBQyxzTkFBMkc7QUFDN0gsMEJBQTBCLG1CQUFPLENBQUMsbVVBQTZLOztBQUUvTTs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBLG1DQUFt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LGVBU0k7QUFBSyxlQUFTLEVBQUVoQixtRUFBTSxDQUFDaUIsT0FBdkI7QUFBQSw4QkFDSSxxRUFBQyxnREFBRDtBQUFNLFdBQUcsRUFBQyxJQUFWO0FBQUEsMEVBQTJCUixJQUFJLENBQUNTLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUkscUVBQUMsK0NBQUQ7QUFBSyxhQUFLLEVBQUMsS0FBWDtBQUFpQixZQUFJLEVBQUMsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUSixlQWFJLHFFQUFDLGdFQUFELG9CQUFZVCxJQUFJLENBQUNKLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW1CSCxDQXBCTTtLQUFNRyxnQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bdHlwZV0vW2FsaWFzXS5iNzA5Yjk3OWM5MTIzOWUyOTY4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9DYXJkLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL0NhcmQubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL0NhcmQubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBDYXJkUHJvcHMgfSBmcm9tIFwiLi9DYXJkLnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ2FyZC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmQgPSAoeyBjb2xvciA9IFwid2hpdGVcIiwgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogQ2FyZFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLmNhcmQsIGNsYXNzTmFtZSwge1xyXG5cdFx0XHRbc3R5bGVzLmJsdWVdOiBjb2xvciA9PSBcImJsdWVcIlxyXG5cdFx0fSl9XHJcblx0XHRcdHsuLi5wcm9wc31cclxuXHRcdD5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9IaERhdGEubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vSGhEYXRhLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9IaERhdGEubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBIaERhdGFQcm9wcyB9IGZyb20gXCIuL0hoRGF0YS5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0hoRGF0YS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi5cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBIaERhdGEgPSAoeyBjb3VudCB9OiBIaERhdGFQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oaH0+XHJcblx0XHRcdDxDYXJkIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50fT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT7QktGB0LXQs9C+INCy0LDQutCw0L3RgdC40Lk8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50VmFsdWV9Pntjb3VudH08L2Rpdj5cclxuXHRcdFx0PC9DYXJkPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL0h0YWcvSHRhZ1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9CdXR0b24vQnV0dG9uXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vUC9QXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vVGFnL1RhZ1wiXHJcbmV4cG9ydCAqIGZyb20gXCIuL1JhaXRpbmcvUmFpdGluZ1wiXHJcbmV4cG9ydCAqIGZyb20gXCIuL0NhcmQvQ2FyZFwiIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkNhcmRfY2FyZF9fSzBDUlgge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHQtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxyXFxuXFx0ICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLkNhcmRfYmx1ZV9fMVcwbDMge1xcclxcblxcdGJhY2tncm91bmQ6ICNmOWY4ZmY7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL0NhcmQvQ2FyZC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0Msa0JBQWtCO0NBQ2xCLG1EQUEyQztTQUEzQywyQ0FBMkM7Q0FDM0Msd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jYXJkIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0Ym94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5ibHVlIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZjlmOGZmO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjYXJkXCI6IFwiQ2FyZF9jYXJkX19LMENSWFwiLFxuXHRcImJsdWVcIjogXCJDYXJkX2JsdWVfXzFXMGwzXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLlRvcFBhZ2VDb21wb25lbnRfd3JhcHBlcl9fMWJGN2Mge1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uVG9wUGFnZUNvbXBvbmVudF90aXRsZV9fMjR6aUkge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogbGVmdDtcXHJcXG4gICAgZ3JpZC1nYXA6IDIwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLlRvcFBhZ2VDb21wb25lbnRfaGh0aXRsZV9fMS1WalEge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcclxcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGxlZnQ7XFxyXFxuICAgIGdyaWQtZ2FwOiAyMHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wYWdlLWNvbXBvbmVudHMvVG9wUGFnZUNvbXBvbmVudC9Ub3BQYWdlQ29tcG9uZW50Lm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsY0FBUztJQUFULFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixjQUFTO0lBQVQsU0FBUztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi53cmFwcGVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xcclxcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGxlZnQ7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhodGl0bGUge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcclxcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGxlZnQ7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwid3JhcHBlclwiOiBcIlRvcFBhZ2VDb21wb25lbnRfd3JhcHBlcl9fMWJGN2NcIixcblx0XCJ0aXRsZVwiOiBcIlRvcFBhZ2VDb21wb25lbnRfdGl0bGVfXzI0emlJXCIsXG5cdFwiaGh0aXRsZVwiOiBcIlRvcFBhZ2VDb21wb25lbnRfaGh0aXRsZV9fMS1WalFcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcmQsIEh0YWcsIFRhZyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IFRvcFBhZ2VDb21wb25lbnRQcm9wcyB9IGZyb20gXCIuL1RvcFBhZ2VDb21wb25lbnQucHJvcHNcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RvcFBhZ2VDb21wb25lbnQubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB7IEhoRGF0YSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hoRGF0YS9IaERhdGFcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVG9wUGFnZUNvbXBvbmVudCA9ICh7IHBhZ2UsIHByb2R1Y3RzLCBmaXJzdENhdGVnb3J5IH06IFRvcFBhZ2VDb21wb25lbnRQcm9wcyApOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgPEh0YWcgdGFnPVwiaDFcIj57cGFnZS50aXRsZX08L0h0YWc+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdHMgJiYgPFRhZyBjb2xvcj1cImdyZXlcIiBzaXplPVwibVwiPntwcm9kdWN0cy5sZW5ndGh9PC9UYWc+fVxyXG4gICAgICAgICAgICAgICAgPHNwYW4+0KHQvtGA0YLQuNGA0L7QstC60LA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzICYmIHByb2R1Y3RzLm1hcChwID0+ICg8ZGl2IGtleT17cC5faWR9PntwLnRpdGxlfTwvZGl2PikpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oaFRpdGxlfT5cclxuICAgICAgICAgICAgICAgIDxIdGFnIHRhZz1cImgyXCI+0JLQsNC60LDQvdGB0LjQuCAtIHtwYWdlLmNhdGVnb3J5fTwvSHRhZz5cclxuICAgICAgICAgICAgICAgIDxUYWcgY29sb3I9XCJyZWRcIiBzaXplPVwibVwiPmhoLnJ1PC9UYWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8SGhEYXRhIHsuLi5wYWdlLmhofT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0hoRGF0YT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==