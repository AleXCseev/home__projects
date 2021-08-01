webpackHotUpdate_N_E("pages/[type]/[alias]",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./components/index.ts");
/* harmony import */ var _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopPageComponent.module.css */ "./page-components/TopPageComponent/TopPageComponent.module.css");
/* harmony import */ var _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\page-components\\TopPageComponent\\TopPageComponent.tsx",
    _this = undefined;




var TopPageComponent = function TopPageComponent(_ref) {
  var page = _ref.page,
      products = _ref.products,
      firstCategory = _ref.firstCategory;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Htag"], {
        tag: "h1",
        children: page.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, _this), products && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
        color: "grey",
        size: "m",
        children: products.length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 30
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: products && products.map(function (p) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 49
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZS1jb21wb25lbnRzL1RvcFBhZ2VDb21wb25lbnQvVG9wUGFnZUNvbXBvbmVudC50c3giXSwibmFtZXMiOlsiVG9wUGFnZUNvbXBvbmVudCIsInBhZ2UiLCJwcm9kdWN0cyIsImZpcnN0Q2F0ZWdvcnkiLCJzdHlsZXMiLCJ3cmFwcGVyIiwidGl0bGUiLCJsZW5ndGgiLCJtYXAiLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFHTyxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQTRFO0FBQUEsTUFBekVDLElBQXlFLFFBQXpFQSxJQUF5RTtBQUFBLE1BQW5FQyxRQUFtRSxRQUFuRUEsUUFBbUU7QUFBQSxNQUF6REMsYUFBeUQsUUFBekRBLGFBQXlEO0FBQ3hHLHNCQUNJO0FBQUssYUFBUyxFQUFFQyxtRUFBTSxDQUFDQyxPQUF2QjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFRCxtRUFBTSxDQUFDRSxLQUF2QjtBQUFBLDhCQUNJLHFFQUFDLGdEQUFEO0FBQU0sV0FBRyxFQUFDLElBQVY7QUFBQSxrQkFBZ0JMLElBQUksQ0FBQ0s7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBRUtKLFFBQVEsaUJBQUkscUVBQUMsK0NBQUQ7QUFBSyxhQUFLLEVBQUMsTUFBWDtBQUFrQixZQUFJLEVBQUMsR0FBdkI7QUFBQSxrQkFBNEJBLFFBQVEsQ0FBQ0s7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZqQixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFNSTtBQUFBLGdCQUNLTCxRQUFRLElBQUlBLFFBQVEsQ0FBQ00sR0FBVCxDQUFhLFVBQUFDLENBQUM7QUFBQSw0QkFBSztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFMO0FBQUEsT0FBZDtBQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFZSCxDQWJNO0tBQU1ULGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1t0eXBlXS9bYWxpYXNdLmM3OGFlYTYxZDc0ZDE2MzFhZTBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEh0YWcsIFRhZyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IFRvcFBhZ2VDb21wb25lbnRQcm9wcyB9IGZyb20gXCIuL1RvcFBhZ2VDb21wb25lbnQucHJvcHNcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RvcFBhZ2VDb21wb25lbnQubW9kdWxlLmNzc1wiXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFRvcFBhZ2VDb21wb25lbnQgPSAoeyBwYWdlLCBwcm9kdWN0cywgZmlyc3RDYXRlZ29yeSB9OiBUb3BQYWdlQ29tcG9uZW50UHJvcHMgKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIDxIdGFnIHRhZz1cImgxXCI+e3BhZ2UudGl0bGV9PC9IdGFnPlxyXG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzICYmIDxUYWcgY29sb3I9XCJncmV5XCIgc2l6ZT1cIm1cIj57cHJvZHVjdHMubGVuZ3RofTwvVGFnPn1cclxuICAgICAgICAgICAgICAgIDxzcGFuPtCh0L7RgNGC0LjRgNC+0LLQutCwPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0cyAmJiBwcm9kdWN0cy5tYXAocCA9PiAoPGRpdj48L2Rpdj4pKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=