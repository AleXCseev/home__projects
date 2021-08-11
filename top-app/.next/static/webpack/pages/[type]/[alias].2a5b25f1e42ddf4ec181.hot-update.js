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
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var TopPageComponent = function TopPageComponent(_ref) {
  _s2();

  var _s = $RefreshSig$();

  var page = _ref.page,
      products = _ref.products,
      firstCategory = _ref.firstCategory;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(_s(function () {
    _s();

    var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(_sort_reducer__WEBPACK_IMPORTED_MODULE_8__["sortReducer"], {
      products: products,
      sort: _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_7__["SortEnum"].Raiting
    }),
        _useReducer$ = _useReducer[0],
        sortedProducts = _useReducer$.products,
        sort = _useReducer$.sort,
        dispathSort = _useReducer[1];
  }, "1LMj58MbrrjspKMQfBV3sQ/Rqek="));

  var setSort = function setSort(sort) {
    dispathSort({
      type: sort
    });
  };

  console.log(products);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.wrapper,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Htag"], {
        tag: "h1",
        children: page.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, _this), products && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
        color: "grey",
        size: "m",
        children: products.length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 30
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Sort"], {
        sort: sort,
        setSort: setSort
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: sortedProducts && sortedProducts.map(function (p) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Product"], {
          product: p
        }, p._id, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 61
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.hhTitle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Htag"], {
        tag: "h2",
        children: ["\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438 - ", page.category]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
        color: "red",
        size: "m",
        children: "hh.ru"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, _this), firstCategory == _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_6__["TopLevelCategory"].Courses && page.hh && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_HhData_HhData__WEBPACK_IMPORTED_MODULE_5__["HhData"], _objectSpread({}, page.hh), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 70
    }, _this), page.advantages && page.advantages.length > 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Htag"], {
        tag: "h2",
        children: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Advantages"], {
        advantages: page.advantages
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }, _this)]
    }, void 0, true), page.seoText && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.seo,
      dangerouslySetInnerHTML: {
        __html: page.seoText
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 30
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Htag"], {
      tag: "h2",
      children: "\u041F\u043E\u043B\u0443\u0447\u0430\u0435\u043C\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, _this), page.tags.map(function (t) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
        color: "primary",
        children: t
      }, t, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 33
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, _this);
};

_s2(TopPageComponent, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZS1jb21wb25lbnRzL1RvcFBhZ2VDb21wb25lbnQvVG9wUGFnZUNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2UtY29tcG9uZW50cy9Ub3BQYWdlQ29tcG9uZW50L3NvcnQucmVkdWNlci50cyJdLCJuYW1lcyI6WyJUb3BQYWdlQ29tcG9uZW50IiwicGFnZSIsInByb2R1Y3RzIiwiZmlyc3RDYXRlZ29yeSIsInVzZUVmZmVjdCIsInVzZVJlZHVjZXIiLCJzb3J0UmVkdWNlciIsInNvcnQiLCJTb3J0RW51bSIsIlJhaXRpbmciLCJzb3J0ZWRQcm9kdWN0cyIsImRpc3BhdGhTb3J0Iiwic2V0U29ydCIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwid3JhcHBlciIsInRpdGxlIiwibGVuZ3RoIiwibWFwIiwicCIsIl9pZCIsImhoVGl0bGUiLCJjYXRlZ29yeSIsIlRvcExldmVsQ2F0ZWdvcnkiLCJDb3Vyc2VzIiwiaGgiLCJhZHZhbnRhZ2VzIiwic2VvVGV4dCIsInNlbyIsIl9faHRtbCIsInRhZ3MiLCJ0Iiwic3RhdGUiLCJhY3Rpb24iLCJhIiwiYiIsImluaXRpYWxSYWl0aW5nIiwiUHJpY2UiLCJwcmljZSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdPLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBNEU7QUFBQTs7QUFBQTs7QUFBQSxNQUF6RUMsSUFBeUUsUUFBekVBLElBQXlFO0FBQUEsTUFBbkVDLFFBQW1FLFFBQW5FQSxRQUFtRTtBQUFBLE1BQXpEQyxhQUF5RCxRQUF6REEsYUFBeUQ7QUFHeEdDLHlEQUFTLElBQUMsWUFBTTtBQUFBOztBQUFBLHNCQUM4Q0Msd0RBQVUsQ0FBQ0MseURBQUQsRUFBYztBQUFFSixjQUFRLEVBQVJBLFFBQUY7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O0FBQUEsU0FBcEI7QUFGUCxPQUFQOztBQUlKO0FBQ0ksWUFBTSxJQUFJQyxLQUFKLENBQVUseUJBQVYsQ0FBTjtBQVpSO0FBY0gsQ0FmTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bdHlwZV0vW2FsaWFzXS4yYTViMjVmMWU0MmRkZjRlYzE4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBZHZhbnRhZ2VzLCBIdGFnLCBQcm9kdWN0LCBTb3J0LCBUYWcgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBUb3BQYWdlQ29tcG9uZW50UHJvcHMgfSBmcm9tIFwiLi9Ub3BQYWdlQ29tcG9uZW50LnByb3BzXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Ub3BQYWdlQ29tcG9uZW50Lm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyBIaERhdGEgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IaERhdGEvSGhEYXRhXCI7XHJcbmltcG9ydCB7IFRvcExldmVsQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy90b3BwYWdlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBTb3J0RW51bSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NvcnQvU29ydC5wcm9wc1wiO1xyXG5pbXBvcnQgeyBzb3J0UmVkdWNlciB9IGZyb20gXCIuL3NvcnQucmVkdWNlclwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBUb3BQYWdlQ29tcG9uZW50ID0gKHsgcGFnZSwgcHJvZHVjdHMsIGZpcnN0Q2F0ZWdvcnkgfTogVG9wUGFnZUNvbXBvbmVudFByb3BzICk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW3sgcHJvZHVjdHM6IHNvcnRlZFByb2R1Y3RzLCBzb3J0IH0sIGRpc3BhdGhTb3J0XSA9IHVzZVJlZHVjZXIoc29ydFJlZHVjZXIsIHsgcHJvZHVjdHMsIHNvcnQ6IFNvcnRFbnVtLlJhaXRpbmcgfSk7XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBjb25zdCBzZXRTb3J0ID0gKHNvcnQ6IFNvcnRFbnVtKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0aFNvcnQoeyB0eXBlOiBzb3J0IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RzKVxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICA8SHRhZyB0YWc9XCJoMVwiPntwYWdlLnRpdGxlfTwvSHRhZz5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0cyAmJiA8VGFnIGNvbG9yPVwiZ3JleVwiIHNpemU9XCJtXCI+e3Byb2R1Y3RzLmxlbmd0aH08L1RhZz59XHJcbiAgICAgICAgICAgICAgICA8U29ydCBzb3J0PXtzb3J0fSBzZXRTb3J0PXtzZXRTb3J0fT48L1NvcnQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3NvcnRlZFByb2R1Y3RzICYmIHNvcnRlZFByb2R1Y3RzLm1hcChwID0+ICg8UHJvZHVjdCBrZXk9e3AuX2lkfSBwcm9kdWN0PXtwfT48L1Byb2R1Y3Q+KSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhoVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgPEh0YWcgdGFnPVwiaDJcIj7QktCw0LrQsNC90YHQuNC4IC0ge3BhZ2UuY2F0ZWdvcnl9PC9IdGFnPlxyXG4gICAgICAgICAgICAgICAgPFRhZyBjb2xvcj1cInJlZFwiIHNpemU9XCJtXCI+aGgucnU8L1RhZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtmaXJzdENhdGVnb3J5ID09IFRvcExldmVsQ2F0ZWdvcnkuQ291cnNlcyAmJiBwYWdlLmhoICYmIDxIaERhdGEgey4uLnBhZ2UuaGh9PjwvSGhEYXRhPn1cclxuICAgICAgICAgICAge3BhZ2UuYWR2YW50YWdlcyAmJiBwYWdlLmFkdmFudGFnZXMubGVuZ3RoID4gMSAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIdGFnIHRhZz1cImgyXCI+0J/RgNC10LjQvNGD0YnQtdGB0YLQstCwPC9IdGFnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBZHZhbnRhZ2VzIGFkdmFudGFnZXM9e3BhZ2UuYWR2YW50YWdlc30+PC9BZHZhbnRhZ2VzPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge3BhZ2Uuc2VvVGV4dCAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlb30gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHBhZ2Uuc2VvVGV4dCB9fT48L2Rpdj59XHJcbiAgICAgICAgICAgIDxIdGFnIHRhZz1cImgyXCI+0J/QvtC70YPRh9Cw0LXQvNGL0LUg0L3QsNCy0YvQutC4PC9IdGFnPlxyXG4gICAgICAgICAgICB7cGFnZS50YWdzLm1hcCh0ID0+IDxUYWcga2V5PXt0fSBjb2xvcj1cInByaW1hcnlcIj57dH08L1RhZz4pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBTb3J0RW51bSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NvcnQvU29ydC5wcm9wc1wiO1xyXG5pbXBvcnQgeyBQcm9kdWN0TW9kZWwgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9wcm9kdWN0LmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IHR5cGUgU29ydEFjdGlvbnMgPSB7IHR5cGU6IFNvcnRFbnVtLlByaWNlIH0gfCB7IHR5cGU6IFNvcnRFbnVtLlJhaXRpbmcgfVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTb3J0UmVkdWNlclN0YXRlIHtcclxuICAgIHNvcnQ6IFNvcnRFbnVtO1xyXG4gICAgcHJvZHVjdHM6IFByb2R1Y3RNb2RlbFtdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc29ydFJlZHVjZXIgPSAoIHN0YXRlOlNvcnRSZWR1Y2VyU3RhdGUsIGFjdGlvbjogU29ydEFjdGlvbnMgKTogU29ydFJlZHVjZXJTdGF0ZSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFNvcnRFbnVtLlJhaXRpbmc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzb3J0OiBTb3J0RW51bS5SYWl0aW5nLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzLnNvcnQoKGEsIGIpID0+IGEuaW5pdGlhbFJhaXRpbmcgPiBiLmluaXRpYWxSYWl0aW5nID8gLTEgOiAxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTb3J0RW51bS5QcmljZTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNvcnQ6IFNvcnRFbnVtLlByaWNlLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzLnNvcnQoKGEsIGIpID0+IGEucHJpY2UgPiBiLnByaWNlID8gMSA6IC0xKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfQndC10LLQtdGA0L3Ri9C5INGC0LjQvyDRgdC+0YDRgtC40YDQvtCy0LrQuCcpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==