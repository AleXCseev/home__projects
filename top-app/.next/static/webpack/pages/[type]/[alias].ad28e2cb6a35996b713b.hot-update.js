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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {}, []);

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

_s(TopPageComponent, "46bso99JiTiUn9V5AiohVIozgKU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZS1jb21wb25lbnRzL1RvcFBhZ2VDb21wb25lbnQvVG9wUGFnZUNvbXBvbmVudC50c3giXSwibmFtZXMiOlsiVG9wUGFnZUNvbXBvbmVudCIsInBhZ2UiLCJwcm9kdWN0cyIsImZpcnN0Q2F0ZWdvcnkiLCJ1c2VSZWR1Y2VyIiwic29ydFJlZHVjZXIiLCJzb3J0IiwiU29ydEVudW0iLCJSYWl0aW5nIiwic29ydGVkUHJvZHVjdHMiLCJkaXNwYXRoU29ydCIsInVzZUVmZmVjdCIsInNldFNvcnQiLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsIndyYXBwZXIiLCJ0aXRsZSIsImxlbmd0aCIsIm1hcCIsInAiLCJfaWQiLCJoaFRpdGxlIiwiY2F0ZWdvcnkiLCJUb3BMZXZlbENhdGVnb3J5IiwiQ291cnNlcyIsImhoIiwiYWR2YW50YWdlcyIsInNlb1RleHQiLCJzZW8iLCJfX2h0bWwiLCJ0YWdzIiwidCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQTRFO0FBQUE7O0FBQUEsTUFBekVDLElBQXlFLFFBQXpFQSxJQUF5RTtBQUFBLE1BQW5FQyxRQUFtRSxRQUFuRUEsUUFBbUU7QUFBQSxNQUF6REMsYUFBeUQsUUFBekRBLGFBQXlEOztBQUFBLG9CQUM5Q0Msd0RBQVUsQ0FBQ0MseURBQUQsRUFBYztBQUFFSCxZQUFRLEVBQVJBLFFBQUY7QUFBWUksUUFBSSxFQUFFQyxvRUFBUSxDQUFDQztBQUEzQixHQUFkLENBRG9DO0FBQUE7QUFBQSxNQUNyRkMsY0FEcUYsZ0JBQy9GUCxRQUQrRjtBQUFBLE1BQ3JFSSxJQURxRSxnQkFDckVBLElBRHFFO0FBQUEsTUFDN0RJLFdBRDZEOztBQUd4R0MseURBQVMsQ0FBQyxZQUFNLENBRWYsQ0FGUSxF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QUFBO0FBQUE7QUFBQTtBQUFBLGVBQUo7QUFBQSxLQUFmLENBckJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKO0FBMEJILENBdkNNOztHQUFNakMsZ0I7O0tBQUFBLGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1t0eXBlXS9bYWxpYXNdLmFkMjhlMmNiNmEzNTk5NmI3MTNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFkdmFudGFnZXMsIEh0YWcsIFByb2R1Y3QsIFNvcnQsIFRhZyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IFRvcFBhZ2VDb21wb25lbnRQcm9wcyB9IGZyb20gXCIuL1RvcFBhZ2VDb21wb25lbnQucHJvcHNcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RvcFBhZ2VDb21wb25lbnQubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB7IEhoRGF0YSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hoRGF0YS9IaERhdGFcIjtcclxuaW1wb3J0IHsgVG9wTGV2ZWxDYXRlZ29yeSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL3RvcHBhZ2UuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFNvcnRFbnVtIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU29ydC9Tb3J0LnByb3BzXCI7XHJcbmltcG9ydCB7IHNvcnRSZWR1Y2VyIH0gZnJvbSBcIi4vc29ydC5yZWR1Y2VyXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFRvcFBhZ2VDb21wb25lbnQgPSAoeyBwYWdlLCBwcm9kdWN0cywgZmlyc3RDYXRlZ29yeSB9OiBUb3BQYWdlQ29tcG9uZW50UHJvcHMgKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgY29uc3QgW3sgcHJvZHVjdHM6IHNvcnRlZFByb2R1Y3RzLCBzb3J0IH0sIGRpc3BhdGhTb3J0XSA9IHVzZVJlZHVjZXIoc29ydFJlZHVjZXIsIHsgcHJvZHVjdHMsIHNvcnQ6IFNvcnRFbnVtLlJhaXRpbmcgfSk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICB9LCBbXSlcclxuXHJcblxyXG4gICAgY29uc3Qgc2V0U29ydCA9IChzb3J0OiBTb3J0RW51bSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGhTb3J0KHsgdHlwZTogc29ydCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0cylcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgPEh0YWcgdGFnPVwiaDFcIj57cGFnZS50aXRsZX08L0h0YWc+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdHMgJiYgPFRhZyBjb2xvcj1cImdyZXlcIiBzaXplPVwibVwiPntwcm9kdWN0cy5sZW5ndGh9PC9UYWc+fVxyXG4gICAgICAgICAgICAgICAgPFNvcnQgc29ydD17c29ydH0gc2V0U29ydD17c2V0U29ydH0+PC9Tb3J0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtzb3J0ZWRQcm9kdWN0cyAmJiBzb3J0ZWRQcm9kdWN0cy5tYXAocCA9PiAoPFByb2R1Y3Qga2V5PXtwLl9pZH0gcHJvZHVjdD17cH0+PC9Qcm9kdWN0PikpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oaFRpdGxlfT5cclxuICAgICAgICAgICAgICAgIDxIdGFnIHRhZz1cImgyXCI+0JLQsNC60LDQvdGB0LjQuCAtIHtwYWdlLmNhdGVnb3J5fTwvSHRhZz5cclxuICAgICAgICAgICAgICAgIDxUYWcgY29sb3I9XCJyZWRcIiBzaXplPVwibVwiPmhoLnJ1PC9UYWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7Zmlyc3RDYXRlZ29yeSA9PSBUb3BMZXZlbENhdGVnb3J5LkNvdXJzZXMgJiYgcGFnZS5oaCAmJiA8SGhEYXRhIHsuLi5wYWdlLmhofT48L0hoRGF0YT59XHJcbiAgICAgICAgICAgIHtwYWdlLmFkdmFudGFnZXMgJiYgcGFnZS5hZHZhbnRhZ2VzLmxlbmd0aCA+IDEgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICA8SHRhZyB0YWc9XCJoMlwiPtCf0YDQtdC40LzRg9GJ0LXRgdGC0LLQsDwvSHRhZz5cclxuICAgICAgICAgICAgICAgICAgICA8QWR2YW50YWdlcyBhZHZhbnRhZ2VzPXtwYWdlLmFkdmFudGFnZXN9PjwvQWR2YW50YWdlcz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtwYWdlLnNlb1RleHQgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZW99IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBwYWdlLnNlb1RleHQgfX0+PC9kaXY+fVxyXG4gICAgICAgICAgICA8SHRhZyB0YWc9XCJoMlwiPtCf0L7Qu9GD0YfQsNC10LzRi9C1INC90LDQstGL0LrQuDwvSHRhZz5cclxuICAgICAgICAgICAge3BhZ2UudGFncy5tYXAodCA9PiA8VGFnIGtleT17dH0gY29sb3I9XCJwcmltYXJ5XCI+e3R9PC9UYWc+KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==