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
    sort: _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_7__["SortEnum"].Rating
  }),
      _useReducer$ = _useReducer[0],
      sortedProducts = _useReducer$.products,
      sort = _useReducer$.sort,
      dispathSort = _useReducer[1];

  var shouldReduceMotion;

  var setSort = function setSort(sort) {
    dispathSort({
      type: sort
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispathSort({
      type: "reset",
      initialState: products
    });
  }, [products]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.wrapper,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Htag"], {
        tag: "h1",
        children: page.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, _this), products && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
        color: "grey",
        size: "m",
        "aria-label": products.length + " элементов",
        children: products.length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 6
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Sort"], {
        sort: sort,
        setSort: setSort
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      role: "list",
      children: sortedProducts && sortedProducts.map(function (p) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Product"], {
          role: "listitem",
          layout: true,
          product: p
        }, p._id, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 32
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.hhTitle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Htag"], {
        tag: "h2",
        children: ["\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438 - ", page.category]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
        color: "red",
        size: "m",
        children: "hh.ru"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, _this), firstCategory == _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_6__["TopLevelCategory"].Courses && page.hh && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_HhData_HhData__WEBPACK_IMPORTED_MODULE_5__["HhData"], _objectSpread({}, page.hh), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 61
    }, _this), page.advantages && page.advantages.length > 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Htag"], {
        tag: "h2",
        children: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 6
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Advantages"], {
        advantages: page.advantages
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 6
      }, _this)]
    }, void 0, true), page.seoText && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.seo,
      dangerouslySetInnerHTML: {
        __html: page.seoText
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Htag"], {
      tag: "h2",
      children: "\u041F\u043E\u043B\u0443\u0447\u0430\u0435\u043C\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }, _this), page.tags.map(function (t) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
        color: "primary",
        children: t
      }, t, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 3
  }, _this);
};

_s(TopPageComponent, "cjdws7tez6+vzhKhje7rFFvMRr4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZS1jb21wb25lbnRzL1RvcFBhZ2VDb21wb25lbnQvVG9wUGFnZUNvbXBvbmVudC50c3giXSwibmFtZXMiOlsiVG9wUGFnZUNvbXBvbmVudCIsInBhZ2UiLCJwcm9kdWN0cyIsImZpcnN0Q2F0ZWdvcnkiLCJ1c2VSZWR1Y2VyIiwic29ydFJlZHVjZXIiLCJzb3J0IiwiU29ydEVudW0iLCJSYXRpbmciLCJzb3J0ZWRQcm9kdWN0cyIsImRpc3BhdGhTb3J0Iiwic2hvdWxkUmVkdWNlTW90aW9uIiwic2V0U29ydCIsInR5cGUiLCJ1c2VFZmZlY3QiLCJpbml0aWFsU3RhdGUiLCJzdHlsZXMiLCJ3cmFwcGVyIiwidGl0bGUiLCJsZW5ndGgiLCJtYXAiLCJwIiwiX2lkIiwiaGhUaXRsZSIsImNhdGVnb3J5IiwiVG9wTGV2ZWxDYXRlZ29yeSIsIkNvdXJzZXMiLCJoaCIsImFkdmFudGFnZXMiLCJzZW9UZXh0Iiwic2VvIiwiX19odG1sIiwidGFncyIsInQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUlVO0FBQUE7O0FBQUEsTUFIekNDLElBR3lDLFFBSHpDQSxJQUd5QztBQUFBLE1BRnpDQyxRQUV5QyxRQUZ6Q0EsUUFFeUM7QUFBQSxNQUR6Q0MsYUFDeUMsUUFEekNBLGFBQ3lDOztBQUFBLG9CQUNpQkMsd0RBQVUsQ0FBQ0MseURBQUQsRUFBYztBQUNqRkgsWUFBUSxFQUFSQSxRQURpRjtBQUVqRkksUUFBSSxFQUFFQyxvRUFBUSxDQUFDQztBQUZrRSxHQUFkLENBRDNCO0FBQUE7QUFBQSxNQUN0QkMsY0FEc0IsZ0JBQ2hDUCxRQURnQztBQUFBLE1BQ05JLElBRE0sZ0JBQ05BLElBRE07QUFBQSxNQUNFSSxXQURGOztBQU16QyxNQUFNQyxrQkFBTjs7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RyxFQUFDLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQ0QsRUFrQ0U1QixJQUFJLENBQUMrQixJQUFMLENBQVVaLEdBQVYsQ0FBYyxVQUFDYSxDQUFEO0FBQUEsMEJBQ2QscUVBQUMsK0NBQUQ7QUFBYSxhQUFLLEVBQUMsU0FBbkI7QUFBQSxrQkFDRUE7QUFERixTQUFVQSxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYztBQUFBLEtBQWQsQ0FsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUEwQ0EsQ0E5RE07O0dBQU1qQyxnQjs7S0FBQUEsZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3R5cGVdL1thbGlhc10uYmJhYjNjNzNhMGM2Mzk1NTNiNDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWR2YW50YWdlcywgSHRhZywgUHJvZHVjdCwgU29ydCwgVGFnIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgVG9wUGFnZUNvbXBvbmVudFByb3BzIH0gZnJvbSBcIi4vVG9wUGFnZUNvbXBvbmVudC5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RvcFBhZ2VDb21wb25lbnQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBIaERhdGEgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IaERhdGEvSGhEYXRhXCI7XHJcbmltcG9ydCB7IFRvcExldmVsQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy90b3BwYWdlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBTb3J0RW51bSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NvcnQvU29ydC5wcm9wc1wiO1xyXG5pbXBvcnQgeyBzb3J0UmVkdWNlciB9IGZyb20gXCIuL3NvcnQucmVkdWNlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvcFBhZ2VDb21wb25lbnQgPSAoe1xyXG5cdHBhZ2UsXHJcblx0cHJvZHVjdHMsXHJcblx0Zmlyc3RDYXRlZ29yeSxcclxufTogVG9wUGFnZUNvbXBvbmVudFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IFt7IHByb2R1Y3RzOiBzb3J0ZWRQcm9kdWN0cywgc29ydCB9LCBkaXNwYXRoU29ydF0gPSB1c2VSZWR1Y2VyKHNvcnRSZWR1Y2VyLCB7XHJcblx0XHRwcm9kdWN0cyxcclxuXHRcdHNvcnQ6IFNvcnRFbnVtLlJhdGluZyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3Qgc2hvdWxkUmVkdWNlTW90aW9uXHJcblxyXG5cdGNvbnN0IHNldFNvcnQgPSAoc29ydDogU29ydEVudW0pID0+IHtcclxuXHRcdGRpc3BhdGhTb3J0KHsgdHlwZTogc29ydCB9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZGlzcGF0aFNvcnQoeyB0eXBlOiBcInJlc2V0XCIsIGluaXRpYWxTdGF0ZTogcHJvZHVjdHMgfSk7XHJcblx0fSwgW3Byb2R1Y3RzXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuXHRcdFx0XHQ8SHRhZyB0YWc9XCJoMVwiPntwYWdlLnRpdGxlfTwvSHRhZz5cclxuXHRcdFx0XHR7cHJvZHVjdHMgJiYgKFxyXG5cdFx0XHRcdFx0PFRhZyBjb2xvcj1cImdyZXlcIiBzaXplPVwibVwiIGFyaWEtbGFiZWw9e3Byb2R1Y3RzLmxlbmd0aCArIFwiINGN0LvQtdC80LXQvdGC0L7QslwifT5cclxuXHRcdFx0XHRcdFx0e3Byb2R1Y3RzLmxlbmd0aH1cclxuXHRcdFx0XHRcdDwvVGFnPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0PFNvcnQgc29ydD17c29ydH0gc2V0U29ydD17c2V0U29ydH0+PC9Tb3J0PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiByb2xlPVwibGlzdFwiPlxyXG5cdFx0XHRcdHtzb3J0ZWRQcm9kdWN0cyAmJlxyXG5cdFx0XHRcdFx0c29ydGVkUHJvZHVjdHMubWFwKChwKSA9PiA8UHJvZHVjdCByb2xlPVwibGlzdGl0ZW1cIiBsYXlvdXQga2V5PXtwLl9pZH0gcHJvZHVjdD17cH0+PC9Qcm9kdWN0Pil9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhoVGl0bGV9PlxyXG5cdFx0XHRcdDxIdGFnIHRhZz1cImgyXCI+0JLQsNC60LDQvdGB0LjQuCAtIHtwYWdlLmNhdGVnb3J5fTwvSHRhZz5cclxuXHRcdFx0XHQ8VGFnIGNvbG9yPVwicmVkXCIgc2l6ZT1cIm1cIj5cclxuXHRcdFx0XHRcdGhoLnJ1XHJcblx0XHRcdFx0PC9UYWc+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHR7Zmlyc3RDYXRlZ29yeSA9PSBUb3BMZXZlbENhdGVnb3J5LkNvdXJzZXMgJiYgcGFnZS5oaCAmJiA8SGhEYXRhIHsuLi5wYWdlLmhofT48L0hoRGF0YT59XHJcblx0XHRcdHtwYWdlLmFkdmFudGFnZXMgJiYgcGFnZS5hZHZhbnRhZ2VzLmxlbmd0aCA+IDEgJiYgKFxyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0XHQ8SHRhZyB0YWc9XCJoMlwiPtCf0YDQtdC40LzRg9GJ0LXRgdGC0LLQsDwvSHRhZz5cclxuXHRcdFx0XHRcdDxBZHZhbnRhZ2VzIGFkdmFudGFnZXM9e3BhZ2UuYWR2YW50YWdlc30+PC9BZHZhbnRhZ2VzPlxyXG5cdFx0XHRcdDwvPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHR7cGFnZS5zZW9UZXh0ICYmIChcclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5zZW99XHJcblx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBhZ2Uuc2VvVGV4dCB9fVxyXG5cdFx0XHRcdD48L2Rpdj5cclxuXHRcdFx0KX1cclxuXHRcdFx0PEh0YWcgdGFnPVwiaDJcIj7Qn9C+0LvRg9GH0LDQtdC80YvQtSDQvdCw0LLRi9C60Lg8L0h0YWc+XHJcblx0XHRcdHtwYWdlLnRhZ3MubWFwKCh0KSA9PiAoXHJcblx0XHRcdFx0PFRhZyBrZXk9e3R9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG5cdFx0XHRcdFx0e3R9XHJcblx0XHRcdFx0PC9UYWc+XHJcblx0XHRcdCkpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==