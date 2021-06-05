webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Tag/Tag.module.css":
/*!***************************************!*\
  !*** ./components/Tag/Tag.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Tag.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Tag/Tag.module.css");

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
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Tag.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Tag/Tag.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Tag.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Tag/Tag.module.css");

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

/***/ "./components/Tag/Tag.tsx":
/*!********************************!*\
  !*** ./components/Tag/Tag.tsx ***!
  \********************************/
/*! exports provided: Tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Tag_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tag.module.css */ "./components/Tag/Tag.module.css");
/* harmony import */ var _Tag_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Tag_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);





var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\components\\Tag\\Tag.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var Tag = function Tag(_ref) {
  var _cn;

  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? "m" : _ref$size,
      children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "ghost" : _ref$color,
      href = _ref.href,
      className = _ref.className,
      props = Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["size", "children", "color", "href", "className"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Tag_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.p, className, (_cn = {}, Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cn, _Tag_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.s, size == "s"), Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cn, _Tag_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.m, size == "m"), Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cn, _Tag_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.ghost, color == "ghost"), Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cn, _Tag_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.red, color == "red"), Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cn, _Tag_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.grey, color == "grey"), Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cn, _Tag_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.green, color == "green"), Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cn, _Tag_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.primary, color == "primary"), _cn))
  }, props), {}, {
    children: href ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: href,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 12
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: children
    }, void 0, false)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, _this);
};
_c = Tag;

var _c;

$RefreshReg$(_c, "Tag");

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
/*! exports provided: Htag, Button, P, Tag */
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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Tag/Tag.module.css":
/*!***************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/Tag/Tag.module.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Tag_p__2aQuo {\r\n\tdisplay: inline-block;\r\n\r\n\t-webkit-box-sizing: border-box;\r\n\r\n\t        box-sizing: border-box;\r\n\tmargin-right: 5px;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.Tag_s__1PVV- {\r\n\tpadding: 5px 10px;\r\n\tfont-size: 12px;\r\n\tline-height: 1;\r\n}\r\n\r\n.Tag_l__14EXz {\r\n\tpadding: 5px 10px;\r\n\tfont-size: 14px;\r\n\tline-height: 1;\r\n}\r\n\r\n.Tag_ghost__1uvh6 {\r\n\tborder: 1px solid var(--grey-light);\r\n}\r\n\r\n.Tag_red__1xC_m {\r\n\tcolor: var(--white);\r\n\tbackground: #DE0000;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.Tag_grey__1Qy6F {\r\n\tcolor: var(--white);\r\n\tbackground: #B3C0D9;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.Tag_green__hpixn {\r\n\tcolor: var(--green);\r\n\tbackground: var(--green-light);\r\n\tfont-weight: bold;\r\n}\r\n\r\n.Tag_primary__1-SdR {\r\n\tcolor: var(--primary);\r\n\tbackground: none;\r\n\tborder: 1px solid var(--primary);\r\n}\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://components/Tag/Tag.module.css"],"names":[],"mappings":"AAAA;CACC,qBAAqB;;CAErB,8BAAsB;;SAAtB,sBAAsB;CACtB,iBAAiB;CACjB,mBAAmB;AACpB;;AAEA;CACC,iBAAiB;CACjB,eAAe;CACf,cAAc;AACf;;AAEA;CACC,iBAAiB;CACjB,eAAe;CACf,cAAc;AACf;;AAEA;CACC,mCAAmC;AACpC;;AAEA;CACC,mBAAmB;CACnB,mBAAmB;CACnB,iBAAiB;AAClB;;AAEA;CACC,mBAAmB;CACnB,mBAAmB;CACnB,iBAAiB;AAClB;;AAEA;CACC,mBAAmB;CACnB,8BAA8B;CAC9B,iBAAiB;AAClB;;AAEA;CACC,qBAAqB;CACrB,gBAAgB;CAChB,gCAAgC;AACjC","sourcesContent":[".p {\r\n\tdisplay: inline-block;\r\n\r\n\tbox-sizing: border-box;\r\n\tmargin-right: 5px;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.s {\r\n\tpadding: 5px 10px;\r\n\tfont-size: 12px;\r\n\tline-height: 1;\r\n}\r\n\r\n.l {\r\n\tpadding: 5px 10px;\r\n\tfont-size: 14px;\r\n\tline-height: 1;\r\n}\r\n\r\n.ghost {\r\n\tborder: 1px solid var(--grey-light);\r\n}\r\n\r\n.red {\r\n\tcolor: var(--white);\r\n\tbackground: #DE0000;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.grey {\r\n\tcolor: var(--white);\r\n\tbackground: #B3C0D9;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.green {\r\n\tcolor: var(--green);\r\n\tbackground: var(--green-light);\r\n\tfont-weight: bold;\r\n}\r\n\r\n.primary {\r\n\tcolor: var(--primary);\r\n\tbackground: none;\r\n\tborder: 1px solid var(--primary);\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"p": "Tag_p__2aQuo",
	"s": "Tag_s__1PVV-",
	"l": "Tag_l__14EXz",
	"ghost": "Tag_ghost__1uvh6",
	"red": "Tag_red__1xC_m",
	"grey": "Tag_grey__1Qy6F",
	"green": "Tag_green__hpixn",
	"primary": "Tag_primary__1-SdR"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWcvVGFnLm1vZHVsZS5jc3M/NjJkYiIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWcvVGFnLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWcvVGFnLm1vZHVsZS5jc3MiXSwibmFtZXMiOlsiVGFnIiwic2l6ZSIsImNoaWxkcmVuIiwiY29sb3IiLCJocmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJjbiIsInN0eWxlcyIsInAiLCJzIiwibSIsImdob3N0IiwicmVkIiwiZ3JleSIsImdyZWVuIiwicHJpbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsVUFBVSxtQkFBTyxDQUFDLHNOQUEyRztBQUM3SCwwQkFBMEIsbUJBQU8sQ0FBQyxnVUFBNEs7O0FBRTlNOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUE7QUFDQSxNQUFNLGdVQUE0SztBQUNsTDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLGdVQUE0Szs7QUFFdE07O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUNBO0FBRU8sSUFBTUEsR0FBRyxH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QUFLLG1DQUFtQztBQUNydEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA2N2ZmZjUwY2ZjZTE1Yzg4ZDdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL1RhZy5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9UYWcubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL1RhZy5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IFRhZ1Byb3BzIH0gZnJvbSBcIi4vVGFnLnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVGFnLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVGFnID0gKHsgc2l6ZSA9IFwibVwiLCBjaGlsZHJlbiwgY29sb3I9XCJnaG9zdFwiLCBocmVmLCBjbGFzc05hbWUsIC4uLnByb3BzIH06IFRhZ1Byb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLnAsIGNsYXNzTmFtZSwge1xyXG5cdFx0XHRcdFtzdHlsZXMuc106IHNpemUgPT0gXCJzXCIsXHJcblx0XHRcdFx0W3N0eWxlcy5tXTogc2l6ZSA9PSBcIm1cIixcclxuXHRcdFx0XHRbc3R5bGVzLmdob3N0XTogY29sb3IgPT0gXCJnaG9zdFwiLFxyXG5cdFx0XHRcdFtzdHlsZXMucmVkXTogY29sb3IgPT0gXCJyZWRcIixcclxuXHRcdFx0XHRbc3R5bGVzLmdyZXldOiBjb2xvciA9PSBcImdyZXlcIixcclxuXHRcdFx0XHRbc3R5bGVzLmdyZWVuXTogY29sb3IgPT0gXCJncmVlblwiLFxyXG5cdFx0XHRcdFtzdHlsZXMucHJpbWFyeV06IGNvbG9yID09IFwicHJpbWFyeVwiLFxyXG5cdFx0XHR9KX1cclxuXHRcdFx0ey4uLnByb3BzfVxyXG5cdFx0PlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aHJlZiA/IDxhIGhyZWY9e2hyZWZ9PntjaGlsZHJlbn08L2E+IDogPD57Y2hpbGRyZW59PC8+XHJcblx0XHRcdH1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL0h0YWcvSHRhZ1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9CdXR0b24vQnV0dG9uXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vUC9QXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vVGFnL1RhZ1wiIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLlRhZ19wX18yYVF1byB7XFxyXFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcclxcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHJcXG5cXHQgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLlRhZ19zX18xUFZWLSB7XFxyXFxuXFx0cGFkZGluZzogNXB4IDEwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uVGFnX2xfXzE0RVh6IHtcXHJcXG5cXHRwYWRkaW5nOiA1cHggMTBweDtcXHJcXG5cXHRmb250LXNpemU6IDE0cHg7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcblxcclxcbi5UYWdfZ2hvc3RfXzF1dmg2IHtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LWxpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuLlRhZ19yZWRfXzF4Q19tIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcblxcdGJhY2tncm91bmQ6ICNERTAwMDA7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5UYWdfZ3JleV9fMVF5NkYge1xcclxcblxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuXFx0YmFja2dyb3VuZDogI0IzQzBEOTtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLlRhZ19ncmVlbl9faHBpeG4ge1xcclxcblxcdGNvbG9yOiB2YXIoLS1ncmVlbik7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tZ3JlZW4tbGlnaHQpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uVGFnX3ByaW1hcnlfXzEtU2RSIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvVGFnL1RhZy5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MscUJBQXFCOztDQUVyQiw4QkFBc0I7O1NBQXRCLHNCQUFzQjtDQUN0QixpQkFBaUI7Q0FDakIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLGNBQWM7QUFDZjs7QUFFQTtDQUNDLG1DQUFtQztBQUNwQzs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsOEJBQThCO0NBQzlCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixnQkFBZ0I7Q0FDaEIsZ0NBQWdDO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wIHtcXHJcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuXFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucyB7XFxyXFxuXFx0cGFkZGluZzogNXB4IDEwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubCB7XFxyXFxuXFx0cGFkZGluZzogNXB4IDEwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2hvc3Qge1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXktbGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcblxcdGJhY2tncm91bmQ6ICNERTAwMDA7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5ncmV5IHtcXHJcXG5cXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcblxcdGJhY2tncm91bmQ6ICNCM0MwRDk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5ncmVlbiB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWdyZWVuKTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbi1saWdodCk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5IHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicFwiOiBcIlRhZ19wX18yYVF1b1wiLFxuXHRcInNcIjogXCJUYWdfc19fMVBWVi1cIixcblx0XCJsXCI6IFwiVGFnX2xfXzE0RVh6XCIsXG5cdFwiZ2hvc3RcIjogXCJUYWdfZ2hvc3RfXzF1dmg2XCIsXG5cdFwicmVkXCI6IFwiVGFnX3JlZF9fMXhDX21cIixcblx0XCJncmV5XCI6IFwiVGFnX2dyZXlfXzFReTZGXCIsXG5cdFwiZ3JlZW5cIjogXCJUYWdfZ3JlZW5fX2hwaXhuXCIsXG5cdFwicHJpbWFyeVwiOiBcIlRhZ19wcmltYXJ5X18xLVNkUlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=