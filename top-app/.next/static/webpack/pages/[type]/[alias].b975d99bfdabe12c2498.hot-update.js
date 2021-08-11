webpackHotUpdate_N_E("pages/[type]/[alias]",{

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
/* harmony import */ var _rate_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rate.svg */ "./components/HhData/rate.svg");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .. */ "./components/index.ts");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/helpers */ "./helpers/helpers.tsx");


var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\HhData\\HhData.tsx",
    _this = undefined;






var HhData = function HhData(_ref) {
  var count = _ref.count,
      juniorSalary = _ref.juniorSalary,
      middleSalary = _ref.middleSalary,
      seniorSalary = _ref.seniorSalary;
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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.countValue,
        children: count
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Card"], {
      className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.salary,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
          children: "\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.salaryValue,
          children: Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_5__["priceRu"])(juniorSalary)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.rate,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_rate_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filled
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_rate_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_rate_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
          children: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.salaryValue,
          children: Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_5__["priceRu"])(middleSalary)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.rate,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_rate_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filled
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_rate_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filled
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_rate_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
          children: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.salaryValue,
          children: Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_5__["priceRu"])(seniorSalary)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.rate,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_rate_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filled
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_rate_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filled
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_rate_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: _HhData_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filled
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
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

/***/ "./components/HhData/rate.svg":
/*!************************************!*\
  !*** ./components/HhData/rate.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
___CSS_LOADER_EXPORT___.push([module.i, ".HhData_hh__3vtrL {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr 3fr;\r\n\tgrid-gap: 30px;\r\n\tgap: 30px;\r\n}\r\n\r\n.HhData_count__1x9Ny {\r\n\tpadding: 20px;\r\n\ttext-align: center;\r\n}\r\n\r\n.HhData_salary__2Ni7N {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr 1fr 1fr;\r\n\tpadding: 20px;\r\n\ttext-align: center;\r\n\tgrid-gap: 20px 0;\r\n\tgap: 20px 0;\r\n}\r\n\r\n.HhData_salary__2Ni7N > div {\r\n\tborder-right: 1px solid var(--grey-light);\r\n}\r\n\r\n.HhData_salary__2Ni7N > div:last-child {\r\n\tborder-right: none;\r\n}\r\n\r\n.HhData_title__33cxh {\r\n\tfont-weight: 300;\r\n\tfont-size: 20px;\r\n\tline-height: 27px;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.HhData_countValue__3caj7 {\r\n\tfont-weight: bold;\r\n\tfont-size: 36px;\r\n\tline-height: 49px;\r\n\tcolor: var(--primary);\r\n}\r\n\r\n.HhData_salaryValue__2qOni {\r\n\tfont-weight: bold;\r\n\tfont-size: 26px;\r\n\tline-height: 35px;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.HhData_rate__2TIhs {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(3, 20px);\r\n\tgrid-gap: 10px;\r\n\tgap: 10px;\r\n\t-moz-box-pack: center;\r\n\t     justify-content: center;\r\n}\r\n\r\n.HhData_filled__nsSOx circle{\r\n\tfill: var(--red)\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n\t.HhData_hh__3vtrL {\r\n\t\tgrid-template-columns: 1fr;\r\n\t}\r\n}\r\n\r\n@media (max-width: 640px) {\r\n\t.HhData_salary__2Ni7N {\r\n\t\tgrid-template-columns: 1fr;\r\n\t}\r\n\t\r\n\t.HhData_salary__2Ni7N > div {\r\n\t\tborder-right: none;\r\n\t\tborder-bottom: 1px solid var(--grey-light);\r\n\t\tpadding-bottom: 20px;\r\n\t}\r\n\r\n\t.HhData_salary__2Ni7N > div:last-child {\r\n\t\tborder-bottom: none;\r\n\t\tpadding-bottom: 0px;\r\n\t}\r\n}", "",{"version":3,"sources":["webpack://components/HhData/HhData.module.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,8BAA8B;CAC9B,cAAS;CAAT,SAAS;AACV;;AAEA;CACC,aAAa;CACb,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,kCAAkC;CAClC,aAAa;CACb,kBAAkB;CAClB,gBAAW;CAAX,WAAW;AACZ;;AAEA;CACC,yCAAyC;AAC1C;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,gBAAgB;CAChB,eAAe;CACf,iBAAiB;CACjB,mBAAmB;AACpB;;AAEA;CACC,iBAAiB;CACjB,eAAe;CACf,iBAAiB;CACjB,qBAAqB;AACtB;;AAEA;CACC,iBAAiB;CACjB,eAAe;CACf,iBAAiB;CACjB,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,sCAAsC;CACtC,cAAS;CAAT,SAAS;CACT,qBAAuB;MAAvB,uBAAuB;AACxB;;AAEA;CACC;AACD;;AAEA;CACC;EACC,0BAA0B;CAC3B;AACD;;AAEA;CACC;EACC,0BAA0B;CAC3B;;CAEA;EACC,kBAAkB;EAClB,0CAA0C;EAC1C,oBAAoB;CACrB;;CAEA;EACC,mBAAmB;EACnB,mBAAmB;CACpB;AACD","sourcesContent":[".hh {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr 3fr;\r\n\tgap: 30px;\r\n}\r\n\r\n.count {\r\n\tpadding: 20px;\r\n\ttext-align: center;\r\n}\r\n\r\n.salary {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr 1fr 1fr;\r\n\tpadding: 20px;\r\n\ttext-align: center;\r\n\tgap: 20px 0;\r\n}\r\n\r\n.salary > div {\r\n\tborder-right: 1px solid var(--grey-light);\r\n}\r\n\r\n.salary > div:last-child {\r\n\tborder-right: none;\r\n}\r\n\r\n.title {\r\n\tfont-weight: 300;\r\n\tfont-size: 20px;\r\n\tline-height: 27px;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.countValue {\r\n\tfont-weight: bold;\r\n\tfont-size: 36px;\r\n\tline-height: 49px;\r\n\tcolor: var(--primary);\r\n}\r\n\r\n.salaryValue {\r\n\tfont-weight: bold;\r\n\tfont-size: 26px;\r\n\tline-height: 35px;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.rate {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(3, 20px);\r\n\tgap: 10px;\r\n\tjustify-content: center;\r\n}\r\n\r\n.filled circle{\r\n\tfill: var(--red)\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n\t.hh {\r\n\t\tgrid-template-columns: 1fr;\r\n\t}\r\n}\r\n\r\n@media (max-width: 640px) {\r\n\t.salary {\r\n\t\tgrid-template-columns: 1fr;\r\n\t}\r\n\t\r\n\t.salary > div {\r\n\t\tborder-right: none;\r\n\t\tborder-bottom: 1px solid var(--grey-light);\r\n\t\tpadding-bottom: 20px;\r\n\t}\r\n\r\n\t.salary > div:last-child {\r\n\t\tborder-bottom: none;\r\n\t\tpadding-bottom: 0px;\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"hh": "HhData_hh__3vtrL",
	"count": "HhData_count__1x9Ny",
	"salary": "HhData_salary__2Ni7N",
	"title": "HhData_title__33cxh",
	"countValue": "HhData_countValue__3caj7",
	"salaryValue": "HhData_salaryValue__2qOni",
	"rate": "HhData_rate__2TIhs",
	"filled": "HhData_filled__nsSOx"
};
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
___CSS_LOADER_EXPORT___.push([module.i, ".TopPageComponent_title__24ziI {\r\n    display: grid;\r\n    grid-template-columns: auto 1fr auto;\r\n    -moz-box-align: baseline;\r\n         align-items: baseline;\r\n    justify-items: left;\r\n    grid-gap: 20px;\r\n    gap: 20px;\r\n}\r\n\r\n.TopPageComponent_hhTitle__20tZ_ {\r\n    display: grid;\r\n    grid-template-columns: auto 1fr;\r\n    -moz-box-align: baseline;\r\n         align-items: baseline;\r\n    justify-items: left;\r\n    grid-gap: 20px;\r\n    gap: 20px;\r\n}\r\n\r\n.TopPageComponent_seo__120-v h1 {\r\n\tfont-weight: 500;\r\n\tfont-size: 26px;\r\n\tline-height: 35px;\r\n\tmargin: 0;\r\n}\r\n\r\n.TopPageComponent_seo__120-v h2 {\r\n\tfont-weight: 500;\r\n\tfont-size: 22px;\r\n\tline-height: 30px;\r\n\tmargin-top: 50px;\r\n\tmargin-bottom: 25px;\r\n}\r\n\r\n.TopPageComponent_seo__120-v h3 {\r\n\tfont-weight: 600;\r\n\tfont-size: 20px;\r\n\tline-height: 27px;\r\n\tmargin: 0;\r\n}\r\n\r\n.TopPageComponent_seo__120-v ul {\r\n    margin-left: 30px;\r\n}\r\n\r\n.TopPageComponent_seo__120-v li {\r\n    margin-top: 20px;\r\n}\r\n\r\n.TopPageComponent_seo__120-v li:last-child {\r\n    margin-bottom: 20px;\r\n}\r\n", "",{"version":3,"sources":["webpack://page-components/TopPageComponent/TopPageComponent.module.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,oCAAoC;IACpC,wBAAqB;SAArB,qBAAqB;IACrB,mBAAmB;IACnB,cAAS;IAAT,SAAS;AACb;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,wBAAqB;SAArB,qBAAqB;IACrB,mBAAmB;IACnB,cAAS;IAAT,SAAS;AACb;;AAEA;CACC,gBAAgB;CAChB,eAAe;CACf,iBAAiB;CACjB,SAAS;AACV;;AAEA;CACC,gBAAgB;CAChB,eAAe;CACf,iBAAiB;CACjB,gBAAgB;CAChB,mBAAmB;AACpB;;AAEA;CACC,gBAAgB;CAChB,eAAe;CACf,iBAAiB;CACjB,SAAS;AACV;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB","sourcesContent":[".title {\r\n    display: grid;\r\n    grid-template-columns: auto 1fr auto;\r\n    align-items: baseline;\r\n    justify-items: left;\r\n    gap: 20px;\r\n}\r\n\r\n.hhTitle {\r\n    display: grid;\r\n    grid-template-columns: auto 1fr;\r\n    align-items: baseline;\r\n    justify-items: left;\r\n    gap: 20px;\r\n}\r\n\r\n.seo h1 {\r\n\tfont-weight: 500;\r\n\tfont-size: 26px;\r\n\tline-height: 35px;\r\n\tmargin: 0;\r\n}\r\n\r\n.seo h2 {\r\n\tfont-weight: 500;\r\n\tfont-size: 22px;\r\n\tline-height: 30px;\r\n\tmargin-top: 50px;\r\n\tmargin-bottom: 25px;\r\n}\r\n\r\n.seo h3 {\r\n\tfont-weight: 600;\r\n\tfont-size: 20px;\r\n\tline-height: 27px;\r\n\tmargin: 0;\r\n}\r\n\r\n.seo ul {\r\n    margin-left: 30px;\r\n}\r\n\r\n.seo li {\r\n    margin-top: 20px;\r\n}\r\n\r\n.seo li:last-child {\r\n    margin-bottom: 20px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"title": "TopPageComponent_title__24ziI",
	"hhTitle": "TopPageComponent_hhTitle__20tZ_",
	"seo": "TopPageComponent_seo__120-v"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./page-components/TopPageComponent/TopPageComponent.module.css":
/*!**********************************************************************!*\
  !*** ./page-components/TopPageComponent/TopPageComponent.module.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./TopPageComponent.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./page-components/TopPageComponent/TopPageComponent.module.css");

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
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./TopPageComponent.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./page-components/TopPageComponent/TopPageComponent.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./TopPageComponent.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./page-components/TopPageComponent/TopPageComponent.module.css");

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

/***/ "./page-components/TopPageComponent/TopPageComponent.tsx":
/*!***************************************************************!*\
  !*** ./page-components/TopPageComponent/TopPageComponent.tsx ***!
  \***************************************************************/
/*! exports provided: TopPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopPageComponent", function() { return TopPageComponent; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./components/index.ts");
/* harmony import */ var _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopPageComponent.module.css */ "./page-components/TopPageComponent/TopPageComponent.module.css");
/* harmony import */ var _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_HhData_HhData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/HhData/HhData */ "./components/HhData/HhData.tsx");
/* harmony import */ var _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../interfaces/toppage.interface */ "./interfaces/toppage.interface.ts");
/* harmony import */ var _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Sort/Sort.props */ "./components/Sort/Sort.props.ts");
/* harmony import */ var _sort_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sort.reducer */ "./page-components/TopPageComponent/sort.reducer.ts");




var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\page-components\\TopPageComponent\\TopPageComponent.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var TopPageComponent = function TopPageComponent(_ref) {
  _s();

  var page = _ref.page,
      products = _ref.products,
      firstCategory = _ref.firstCategory;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(_sort_reducer__WEBPACK_IMPORTED_MODULE_8__["sortReducer"], {
    products: products,
    sort: _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_7__["SortEnum"].Raiting
  }),
      _useReducer$ = _useReducer[0],
      sortedProducts = _useReducer$.products,
      sort = _useReducer$.sort,
      dispathSort = _useReducer[1];

  var setSort = function setSort(sort) {
    dispathSort({
      type: sort
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.wrapper,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Htag"], {
        tag: "h1",
        children: page.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this), products && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
        color: "grey",
        size: "m",
        children: products.length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 30
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Sort"], {
        sort: sort,
        setSort: setSort
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: sortedProducts && sortedProducts.map(function (p) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Product"], {
          product: p
        }, p._id, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 61
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.hhTitle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Htag"], {
        tag: "h2",
        children: ["\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438 - ", page.category]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
        color: "red",
        size: "m",
        children: "hh.ru"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this), firstCategory == _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_6__["TopLevelCategory"].Courses && page.hh && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_HhData_HhData__WEBPACK_IMPORTED_MODULE_5__["HhData"], _objectSpread({}, page.hh), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 70
    }, _this), page.advantages && page.advantages.length > 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Htag"], {
        tag: "h2",
        children: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Advantages"], {
        advantages: page.advantages
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }, _this)]
    }, void 0, true), page.seoText && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.seo,
      dangerouslySetInnerHTML: {
        __html: page.seoText
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 30
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Htag"], {
      tag: "h2",
      children: "\u041F\u043E\u043B\u0443\u0447\u0430\u0435\u043C\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, _this), page.tags.map(function (t) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
        color: "primary",
        children: t
      }, t, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 33
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, _this);
};

_s(TopPageComponent, "1LMj58MbrrjspKMQfBV3sQ/Rqek=");

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

/***/ }),

/***/ "./page-components/TopPageComponent/sort.reducer.ts":
/*!**********************************************************!*\
  !*** ./page-components/TopPageComponent/sort.reducer.ts ***!
  \**********************************************************/
/*! exports provided: sortReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortReducer", function() { return sortReducer; });
/* harmony import */ var _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Sort/Sort.props */ "./components/Sort/Sort.props.ts");

var sortReducer = function sortReducer(state, action) {
  switch (action.type) {
    case _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__["SortEnum"].Raiting:
      return {
        sort: _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__["SortEnum"].Raiting,
        products: state.products.sort(function (a, b) {
          return a.initialRaiting > b.initialRaiting ? -1 : 1;
        })
      };

    case _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__["SortEnum"].Price:
      return {
        sort: _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__["SortEnum"].Price,
        products: state.products.sort(function (a, b) {
          return a.price > b.price ? 1 : -1;
        })
      };

    default:
      throw new Error('Неверный тип сортировки');
  }
};

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

/***/ "./page-components/index.ts":
/*!**********************************!*\
  !*** ./page-components/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _TopPageComponent_TopPageComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopPageComponent/TopPageComponent */ "./page-components/TopPageComponent/TopPageComponent.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopPageComponent", function() { return _TopPageComponent_TopPageComponent__WEBPACK_IMPORTED_MODULE_0__["TopPageComponent"]; });



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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IaERhdGEvSGhEYXRhLm1vZHVsZS5jc3M/ODdmZCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IaERhdGEvSGhEYXRhLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IaERhdGEvcmF0ZS5zdmciLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGhEYXRhL0hoRGF0YS5tb2R1bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9wYWdlLWNvbXBvbmVudHMvVG9wUGFnZUNvbXBvbmVudC9Ub3BQYWdlQ29tcG9uZW50Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2UtY29tcG9uZW50cy9Ub3BQYWdlQ29tcG9uZW50L1RvcFBhZ2VDb21wb25lbnQubW9kdWxlLmNzcz85ODJmIiwid2VicGFjazovL19OX0UvLi9wYWdlLWNvbXBvbmVudHMvVG9wUGFnZUNvbXBvbmVudC9Ub3BQYWdlQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZS1jb21wb25lbnRzL1RvcFBhZ2VDb21wb25lbnQvc29ydC5yZWR1Y2VyLnRzIiwid2VicGFjazovL19OX0UvLi9wYWdlLWNvbXBvbmVudHMvaW5kZXgudHMiXSwibmFtZXMiOlsiSGhEYXRhIiwiY291bnQiLCJqdW5pb3JTYWxhcnkiLCJtaWRkbGVTYWxhcnkiLCJzZW5pb3JTYWxhcnkiLCJzdHlsZXMiLCJoaCIsInRpdGxlIiwiY291bnRWYWx1ZSIsInNhbGFyeSIsInNhbGFyeVZhbHVlIiwicHJpY2VSdSIsInJhdGUiLCJmaWxsZWQiLCJUb3BQYWdlQ29tcG9uZW50IiwicGFnZSIsInByb2R1Y3RzIiwiZmlyc3RDYXRlZ29yeSIsInVzZVJlZHVjZXIiLCJzb3J0UmVkdWNlciIsInNvcnQiLCJTb3J0RW51bSIsIlJhaXRpbmciLCJzb3J0ZWRQcm9kdWN0cyIsImRpc3BhdGhTb3J0Iiwic2V0U29ydCIsInR5cGUiLCJ3cmFwcGVyIiwibGVuZ3RoIiwibWFwIiwicCIsIl9pZCIsImhoVGl0bGUiLCJjYXRlZ29yeSIsIlRvcExldmVsQ2F0ZWdvcnkiLCJDb3Vyc2VzIiwiYWR2YW50YWdlcyIsInNlb1RleHQiLCJzZW8iLCJfX2h0bWwiLCJ0YWdzIiwidCIsInN0YXRlIiwiYWN0aW9uIiwiYSIsImIiLCJpbml0aWFsUmFpdGluZyIsIlByaWNlIiwicHJpY2UiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsVUFBVSxtQkFBTyxDQUFDLHNOQUEyRztBQUM3SCwwQkFBMEIsbUJBQU8sQ0FBQyx5VUFBK0s7O0FBRWpOOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUE7QUFDQSxNQUFNLHlVQUErSztBQUNyTDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHlVQUErSzs7QUFFek07O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBbUY7QUFBQSxNQUFoRkMsS0FBZ0YsUUFBaEZBLEtBQWdGO0FBQUEsTUFBekVDLFlBQXlFLFFBQXpFQSxZQUF5RTtBQUFBLE1BQTNEQyxZQUEyRCxRQUEzREEsWUFBMkQ7QUFBQSxNQUE3Q0MsWUFBNkMsUUFBN0NB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TjtBQVpSO0FBY0gsQ0FmTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVlA7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bdHlwZV0vW2FsaWFzXS5iOTc1ZDk5YmZkYWJlMTJjMjQ5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9IaERhdGEubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vSGhEYXRhLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9IaERhdGEubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBIaERhdGFQcm9wcyB9IGZyb20gXCIuL0hoRGF0YS5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0hoRGF0YS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSYXRlSWNvbiBmcm9tIFwiLi9yYXRlLnN2Z1wiXHJcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgcHJpY2VSdSB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBIaERhdGEgPSAoeyBjb3VudCwganVuaW9yU2FsYXJ5LCBtaWRkbGVTYWxhcnksIHNlbmlvclNhbGFyeSB9OiBIaERhdGFQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oaH0+XHJcblx0XHRcdDxDYXJkIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50fT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT7QktGB0LXQs9C+INCy0LDQutCw0L3RgdC40Lk8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50VmFsdWV9Pntjb3VudH08L2Rpdj5cclxuXHRcdFx0PC9DYXJkPlxyXG5cdFx0XHQ8Q2FyZCBjbGFzc05hbWU9e3N0eWxlcy5zYWxhcnl9PlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT7QndCw0YfQsNC70YzQvdGL0Lk8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2FsYXJ5VmFsdWV9PntwcmljZVJ1KGp1bmlvclNhbGFyeSl9PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhdGV9PlxyXG5cdFx0XHRcdFx0XHQ8UmF0ZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuZmlsbGVkfT48L1JhdGVJY29uPlxyXG5cdFx0XHRcdFx0XHQ8UmF0ZUljb24+PC9SYXRlSWNvbj5cclxuXHRcdFx0XHRcdFx0PFJhdGVJY29uPjwvUmF0ZUljb24+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+0KHRgNC10LTQvdC40Lk8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2FsYXJ5VmFsdWV9PntwcmljZVJ1KG1pZGRsZVNhbGFyeSl9PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhdGV9PlxyXG5cdFx0XHRcdFx0XHQ8UmF0ZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuZmlsbGVkfT48L1JhdGVJY29uPlxyXG5cdFx0XHRcdFx0XHQ8UmF0ZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuZmlsbGVkfT48L1JhdGVJY29uPlxyXG5cdFx0XHRcdFx0XHQ8UmF0ZUljb24+PC9SYXRlSWNvbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT7Qn9GA0L7RhNC10YHRgdC40L7QvdCw0Ls8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2FsYXJ5VmFsdWV9PntwcmljZVJ1KHNlbmlvclNhbGFyeSl9PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhdGV9PlxyXG5cdFx0XHRcdFx0XHQ8UmF0ZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuZmlsbGVkfT48L1JhdGVJY29uPlxyXG5cdFx0XHRcdFx0XHQ8UmF0ZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuZmlsbGVkfT48L1JhdGVJY29uPlxyXG5cdFx0XHRcdFx0XHQ8UmF0ZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuZmlsbGVkfT48L1JhdGVJY29uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQ2FyZD5cclxuICAgICAgICA8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG4iLCJ2YXIgX2NpcmNsZSwgX3BhdGg7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdSYXRlKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMjAsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9jaXJjbGUgfHwgKF9jaXJjbGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IDEwLFxuICAgIGN5OiAxMCxcbiAgICByOiAxMCxcbiAgICBmaWxsOiBcIiNCQkJcIlxuICB9KSksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTUuOTY5IDguNTM0YS42NDMuNjQzIDAgMDAtLjU0OS0uNDU3bC0zLjQ2NC0uMzI4LTEuMzY5LTMuMzQ1QS42MzguNjM4IDAgMDAxMCA0YS42MzYuNjM2IDAgMDAtLjU4Ni40MDRMOC4wNDQgNy43NWwtMy40NjQuMzI4YS42NDUuNjQ1IDAgMDAtLjU0OS40NTcuNjg1LjY4NSAwIDAwLjE4Ni43MDhsMi42MTkgMi4zOTYtLjc3MiAzLjU0OGEuNjguNjggMCAwMC4yNDguNjg3LjYxNy42MTcgMCAwMC43MDEuMDMzTDEwIDE0LjA0MmwyLjk4NiAxLjg2NGMuMjIuMTM2LjQ5NS4xMjQuNzAyLS4wMzNhLjY4LjY4IDAgMDAuMjQ4LS42ODdsLS43NzItMy41NDggMi42MTktMi4zOTZhLjY4NS42ODUgMCAwMC4xODYtLjcwOHpcIixcbiAgICBmaWxsOiBcIiNmZmZcIlxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdSYXRlOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5IaERhdGFfaGhfXzN2dHJMIHtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG5cXHRncmlkLWdhcDogMzBweDtcXHJcXG5cXHRnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5IaERhdGFfY291bnRfXzF4OU55IHtcXHJcXG5cXHRwYWRkaW5nOiAyMHB4O1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLkhoRGF0YV9zYWxhcnlfXzJOaTdOIHtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuXFx0cGFkZGluZzogMjBweDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Z3JpZC1nYXA6IDIwcHggMDtcXHJcXG5cXHRnYXA6IDIwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLkhoRGF0YV9zYWxhcnlfXzJOaTdOID4gZGl2IHtcXHJcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ncmV5LWxpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuLkhoRGF0YV9zYWxhcnlfXzJOaTdOID4gZGl2Omxhc3QtY2hpbGQge1xcclxcblxcdGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLkhoRGF0YV90aXRsZV9fMzNjeGgge1xcclxcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAyN3B4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5IaERhdGFfY291bnRWYWx1ZV9fM2Nhajcge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdGZvbnQtc2l6ZTogMzZweDtcXHJcXG5cXHRsaW5lLWhlaWdodDogNDlweDtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbi5IaERhdGFfc2FsYXJ5VmFsdWVfXzJxT25pIHtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHRmb250LXNpemU6IDI2cHg7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDM1cHg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLkhoRGF0YV9yYXRlX18yVElocyB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAyMHB4KTtcXHJcXG5cXHRncmlkLWdhcDogMTBweDtcXHJcXG5cXHRnYXA6IDEwcHg7XFxyXFxuXFx0LW1vei1ib3gtcGFjazogY2VudGVyO1xcclxcblxcdCAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5IaERhdGFfZmlsbGVkX19uc1NPeCBjaXJjbGV7XFxyXFxuXFx0ZmlsbDogdmFyKC0tcmVkKVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxyXFxuXFx0LkhoRGF0YV9oaF9fM3Z0ckwge1xcclxcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XFxyXFxuXFx0LkhoRGF0YV9zYWxhcnlfXzJOaTdOIHtcXHJcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0LkhoRGF0YV9zYWxhcnlfXzJOaTdOID4gZGl2IHtcXHJcXG5cXHRcXHRib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyZXktbGlnaHQpO1xcclxcblxcdFxcdHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuSGhEYXRhX3NhbGFyeV9fMk5pN04gPiBkaXY6bGFzdC1jaGlsZCB7XFxyXFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogMHB4O1xcclxcblxcdH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvSGhEYXRhL0hoRGF0YS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixjQUFTO0NBQVQsU0FBUztBQUNWOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixrQ0FBa0M7Q0FDbEMsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixnQkFBVztDQUFYLFdBQVc7QUFDWjs7QUFFQTtDQUNDLHlDQUF5QztBQUMxQzs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQ0FBc0M7Q0FDdEMsY0FBUztDQUFULFNBQVM7Q0FDVCxxQkFBdUI7TUFBdkIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsMEJBQTBCO0NBQzNCO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLDBCQUEwQjtDQUMzQjs7Q0FFQTtFQUNDLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsb0JBQW9CO0NBQ3JCOztDQUVBO0VBQ0MsbUJBQW1CO0VBQ25CLG1CQUFtQjtDQUNwQjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oaCB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuXFx0Z2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnQge1xcclxcblxcdHBhZGRpbmc6IDIwcHg7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2FsYXJ5IHtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuXFx0cGFkZGluZzogMjBweDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5zYWxhcnkgPiBkaXYge1xcclxcblxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWdyZXktbGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2FsYXJ5ID4gZGl2Omxhc3QtY2hpbGQge1xcclxcblxcdGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG5cXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMjdweDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRWYWx1ZSB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0Zm9udC1zaXplOiAzNnB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiA0OXB4O1xcclxcblxcdGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNhbGFyeVZhbHVlIHtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHRmb250LXNpemU6IDI2cHg7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDM1cHg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJhdGUge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMjBweCk7XFxyXFxuXFx0Z2FwOiAxMHB4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsbGVkIGNpcmNsZXtcXHJcXG5cXHRmaWxsOiB2YXIoLS1yZWQpXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG5cXHQuaGgge1xcclxcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XFxyXFxuXFx0LnNhbGFyeSB7XFxyXFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuXFx0fVxcclxcblxcdFxcclxcblxcdC5zYWxhcnkgPiBkaXYge1xcclxcblxcdFxcdGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG5cXHRcXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JleS1saWdodCk7XFxyXFxuXFx0XFx0cGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5zYWxhcnkgPiBkaXY6bGFzdC1jaGlsZCB7XFxyXFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogMHB4O1xcclxcblxcdH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaGhcIjogXCJIaERhdGFfaGhfXzN2dHJMXCIsXG5cdFwiY291bnRcIjogXCJIaERhdGFfY291bnRfXzF4OU55XCIsXG5cdFwic2FsYXJ5XCI6IFwiSGhEYXRhX3NhbGFyeV9fMk5pN05cIixcblx0XCJ0aXRsZVwiOiBcIkhoRGF0YV90aXRsZV9fMzNjeGhcIixcblx0XCJjb3VudFZhbHVlXCI6IFwiSGhEYXRhX2NvdW50VmFsdWVfXzNjYWo3XCIsXG5cdFwic2FsYXJ5VmFsdWVcIjogXCJIaERhdGFfc2FsYXJ5VmFsdWVfXzJxT25pXCIsXG5cdFwicmF0ZVwiOiBcIkhoRGF0YV9yYXRlX18yVEloc1wiLFxuXHRcImZpbGxlZFwiOiBcIkhoRGF0YV9maWxsZWRfX25zU094XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLlRvcFBhZ2VDb21wb25lbnRfdGl0bGVfXzI0emlJIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xcclxcbiAgICAtbW96LWJveC1hbGlnbjogYmFzZWxpbmU7XFxyXFxuICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBsZWZ0O1xcclxcbiAgICBncmlkLWdhcDogMjBweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uVG9wUGFnZUNvbXBvbmVudF9oaFRpdGxlX18yMHRaXyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxyXFxuICAgIC1tb3otYm94LWFsaWduOiBiYXNlbGluZTtcXHJcXG4gICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGxlZnQ7XFxyXFxuICAgIGdyaWQtZ2FwOiAyMHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5Ub3BQYWdlQ29tcG9uZW50X3Nlb19fMTIwLXYgaDEge1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFx0Zm9udC1zaXplOiAyNnB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAzNXB4O1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLlRvcFBhZ2VDb21wb25lbnRfc2VvX18xMjAtdiBoMiB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRmb250LXNpemU6IDIycHg7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxuXFx0bWFyZ2luLXRvcDogNTBweDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uVG9wUGFnZUNvbXBvbmVudF9zZW9fXzEyMC12IGgzIHtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMjdweDtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5Ub3BQYWdlQ29tcG9uZW50X3Nlb19fMTIwLXYgdWwge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLlRvcFBhZ2VDb21wb25lbnRfc2VvX18xMjAtdiBsaSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5Ub3BQYWdlQ29tcG9uZW50X3Nlb19fMTIwLXYgbGk6bGFzdC1jaGlsZCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wYWdlLWNvbXBvbmVudHMvVG9wUGFnZUNvbXBvbmVudC9Ub3BQYWdlQ29tcG9uZW50Lm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHdCQUFxQjtTQUFyQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGNBQVM7SUFBVCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLHdCQUFxQjtTQUFyQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGNBQVM7SUFBVCxTQUFTO0FBQ2I7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsU0FBUztBQUNWOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50aXRsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBsZWZ0O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5oaFRpdGxlIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBsZWZ0O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZW8gaDEge1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFx0Zm9udC1zaXplOiAyNnB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAzNXB4O1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbyBoMiB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRmb250LXNpemU6IDIycHg7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxuXFx0bWFyZ2luLXRvcDogNTBweDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VvIGgzIHtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMjdweDtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5zZW8gdWwge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbyBsaSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZW8gbGk6bGFzdC1jaGlsZCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInRpdGxlXCI6IFwiVG9wUGFnZUNvbXBvbmVudF90aXRsZV9fMjR6aUlcIixcblx0XCJoaFRpdGxlXCI6IFwiVG9wUGFnZUNvbXBvbmVudF9oaFRpdGxlX18yMHRaX1wiLFxuXHRcInNlb1wiOiBcIlRvcFBhZ2VDb21wb25lbnRfc2VvX18xMjAtdlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vVG9wUGFnZUNvbXBvbmVudC5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9Ub3BQYWdlQ29tcG9uZW50Lm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9Ub3BQYWdlQ29tcG9uZW50Lm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBZHZhbnRhZ2VzLCBIdGFnLCBQcm9kdWN0LCBTb3J0LCBUYWcgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBUb3BQYWdlQ29tcG9uZW50UHJvcHMgfSBmcm9tIFwiLi9Ub3BQYWdlQ29tcG9uZW50LnByb3BzXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Ub3BQYWdlQ29tcG9uZW50Lm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyBIaERhdGEgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IaERhdGEvSGhEYXRhXCI7XHJcbmltcG9ydCB7IFRvcExldmVsQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy90b3BwYWdlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBTb3J0RW51bSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NvcnQvU29ydC5wcm9wc1wiO1xyXG5pbXBvcnQgeyBzb3J0UmVkdWNlciB9IGZyb20gXCIuL3NvcnQucmVkdWNlclwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBUb3BQYWdlQ29tcG9uZW50ID0gKHsgcGFnZSwgcHJvZHVjdHMsIGZpcnN0Q2F0ZWdvcnkgfTogVG9wUGFnZUNvbXBvbmVudFByb3BzICk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IFt7IHByb2R1Y3RzOiBzb3J0ZWRQcm9kdWN0cywgc29ydCB9LCBkaXNwYXRoU29ydF0gPSB1c2VSZWR1Y2VyKHNvcnRSZWR1Y2VyLCB7IHByb2R1Y3RzLCBzb3J0OiBTb3J0RW51bS5SYWl0aW5nIH0pO1xyXG5cclxuICAgIGNvbnN0IHNldFNvcnQgPSAoc29ydDogU29ydEVudW0pID0+IHtcclxuICAgICAgICBkaXNwYXRoU29ydCh7IHR5cGU6IHNvcnQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICA8SHRhZyB0YWc9XCJoMVwiPntwYWdlLnRpdGxlfTwvSHRhZz5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0cyAmJiA8VGFnIGNvbG9yPVwiZ3JleVwiIHNpemU9XCJtXCI+e3Byb2R1Y3RzLmxlbmd0aH08L1RhZz59XHJcbiAgICAgICAgICAgICAgICA8U29ydCBzb3J0PXtzb3J0fSBzZXRTb3J0PXtzZXRTb3J0fT48L1NvcnQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3NvcnRlZFByb2R1Y3RzICYmIHNvcnRlZFByb2R1Y3RzLm1hcChwID0+ICg8UHJvZHVjdCBrZXk9e3AuX2lkfSBwcm9kdWN0PXtwfT48L1Byb2R1Y3Q+KSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhoVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgPEh0YWcgdGFnPVwiaDJcIj7QktCw0LrQsNC90YHQuNC4IC0ge3BhZ2UuY2F0ZWdvcnl9PC9IdGFnPlxyXG4gICAgICAgICAgICAgICAgPFRhZyBjb2xvcj1cInJlZFwiIHNpemU9XCJtXCI+aGgucnU8L1RhZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtmaXJzdENhdGVnb3J5ID09IFRvcExldmVsQ2F0ZWdvcnkuQ291cnNlcyAmJiBwYWdlLmhoICYmIDxIaERhdGEgey4uLnBhZ2UuaGh9PjwvSGhEYXRhPn1cclxuICAgICAgICAgICAge3BhZ2UuYWR2YW50YWdlcyAmJiBwYWdlLmFkdmFudGFnZXMubGVuZ3RoID4gMSAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIdGFnIHRhZz1cImgyXCI+0J/RgNC10LjQvNGD0YnQtdGB0YLQstCwPC9IdGFnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBZHZhbnRhZ2VzIGFkdmFudGFnZXM9e3BhZ2UuYWR2YW50YWdlc30+PC9BZHZhbnRhZ2VzPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge3BhZ2Uuc2VvVGV4dCAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlb30gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHBhZ2Uuc2VvVGV4dCB9fT48L2Rpdj59XHJcbiAgICAgICAgICAgIDxIdGFnIHRhZz1cImgyXCI+0J/QvtC70YPRh9Cw0LXQvNGL0LUg0L3QsNCy0YvQutC4PC9IdGFnPlxyXG4gICAgICAgICAgICB7cGFnZS50YWdzLm1hcCh0ID0+IDxUYWcga2V5PXt0fSBjb2xvcj1cInByaW1hcnlcIj57dH08L1RhZz4pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBTb3J0RW51bSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NvcnQvU29ydC5wcm9wc1wiO1xyXG5pbXBvcnQgeyBQcm9kdWN0TW9kZWwgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9wcm9kdWN0LmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IHR5cGUgU29ydEFjdGlvbnMgPSB7IHR5cGU6IFNvcnRFbnVtLlByaWNlIH0gfCB7IHR5cGU6IFNvcnRFbnVtLlJhaXRpbmcgfVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTb3J0UmVkdWNlclN0YXRlIHtcclxuICAgIHNvcnQ6IFNvcnRFbnVtO1xyXG4gICAgcHJvZHVjdHM6IFByb2R1Y3RNb2RlbFtdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc29ydFJlZHVjZXIgPSAoIHN0YXRlOlNvcnRSZWR1Y2VyU3RhdGUsIGFjdGlvbjogU29ydEFjdGlvbnMgKTogU29ydFJlZHVjZXJTdGF0ZSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFNvcnRFbnVtLlJhaXRpbmc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzb3J0OiBTb3J0RW51bS5SYWl0aW5nLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzLnNvcnQoKGEsIGIpID0+IGEuaW5pdGlhbFJhaXRpbmcgPiBiLmluaXRpYWxSYWl0aW5nID8gLTEgOiAxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTb3J0RW51bS5QcmljZTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNvcnQ6IFNvcnRFbnVtLlByaWNlLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzLnNvcnQoKGEsIGIpID0+IGEucHJpY2UgPiBiLnByaWNlID8gMSA6IC0xKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfQndC10LLQtdGA0L3Ri9C5INGC0LjQvyDRgdC+0YDRgtC40YDQvtCy0LrQuCcpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSBcIi4vVG9wUGFnZUNvbXBvbmVudC9Ub3BQYWdlQ29tcG9uZW50XCIiXSwic291cmNlUm9vdCI6IiJ9