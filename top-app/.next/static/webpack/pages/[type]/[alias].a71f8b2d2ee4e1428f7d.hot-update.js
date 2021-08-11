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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {}, [products]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZS1jb21wb25lbnRzL1RvcFBhZ2VDb21wb25lbnQvVG9wUGFnZUNvbXBvbmVudC50c3giXSwibmFtZXMiOlsiVG9wUGFnZUNvbXBvbmVudCIsInBhZ2UiLCJwcm9kdWN0cyIsImZpcnN0Q2F0ZWdvcnkiLCJ1c2VSZWR1Y2VyIiwic29ydFJlZHVjZXIiLCJzb3J0IiwiU29ydEVudW0iLCJSYWl0aW5nIiwic29ydGVkUHJvZHVjdHMiLCJkaXNwYXRoU29ydCIsInVzZUVmZmVjdCIsInNldFNvcnQiLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsIndyYXBwZXIiLCJ0aXRsZSIsImxlbmd0aCIsIm1hcCIsInAiLCJfaWQiLCJoaFRpdGxlIiwiY2F0ZWdvcnkiLCJUb3BMZXZlbENhdGVnb3J5IiwiQ291cnNlcyIsImhoIiwiYWR2YW50YWdlcyIsInNlb1RleHQiLCJzZW8iLCJfX2h0bWwiLCJ0YWdzIiwidCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQTRFO0FBQUE7O0FBQUEsTUFBekVDLElBQXlFLFFBQXpFQSxJQUF5RTtBQUFBLE1BQW5FQyxRQUFtRSxRQUFuRUEsUUFBbUU7QUFBQSxNQUF6REMsYUFBeUQsUUFBekRBLGFBQXlEOztBQUFBLG9CQUM5Q0Msd0RBQVUsQ0FBQ0MseURBQUQsRUFBYztBQUFFSCxZQUFRLEVBQVJBLFFBQUY7QUFBWUksUUFBSSxFQUFFQyxvRUFBUSxDQUFDQztBQUEzQixHQUFkLENBRG9DO0FBQUE7QUFBQSxNQUNyRkMsY0FEcUYsZ0JBQy9GUCxRQUQrRjtBQUFBLE1BQ3JFSSxJQURxRSxnQkFDckVBLElBRHFFO0FBQUEsTUFDN0RJLFdBRDZEOztBQUd4R0MseURBQVMsQ0FBQyxZQUFNLENBRWYsQ0FGUSxF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QUFVQSxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSjtBQUFBLEtBQWYsQ0FyQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRko7QUEwQkgsQ0F2Q007O0dBQU1qQyxnQjs7S0FBQUEsZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3R5cGVdL1thbGlhc10uYTcxZjhiMmQyZWU0ZTE0MjhmN2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWR2YW50YWdlcywgSHRhZywgUHJvZHVjdCwgU29ydCwgVGFnIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgVG9wUGFnZUNvbXBvbmVudFByb3BzIH0gZnJvbSBcIi4vVG9wUGFnZUNvbXBvbmVudC5wcm9wc1wiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVG9wUGFnZUNvbXBvbmVudC5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHsgSGhEYXRhIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGhEYXRhL0hoRGF0YVwiO1xyXG5pbXBvcnQgeyBUb3BMZXZlbENhdGVnb3J5IH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvdG9wcGFnZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgU29ydEVudW0gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Tb3J0L1NvcnQucHJvcHNcIjtcclxuaW1wb3J0IHsgc29ydFJlZHVjZXIgfSBmcm9tIFwiLi9zb3J0LnJlZHVjZXJcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVG9wUGFnZUNvbXBvbmVudCA9ICh7IHBhZ2UsIHByb2R1Y3RzLCBmaXJzdENhdGVnb3J5IH06IFRvcFBhZ2VDb21wb25lbnRQcm9wcyApOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBbeyBwcm9kdWN0czogc29ydGVkUHJvZHVjdHMsIHNvcnQgfSwgZGlzcGF0aFNvcnRdID0gdXNlUmVkdWNlcihzb3J0UmVkdWNlciwgeyBwcm9kdWN0cywgc29ydDogU29ydEVudW0uUmFpdGluZyB9KTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBcclxuICAgIH0sIFtwcm9kdWN0c10pXHJcblxyXG5cclxuICAgIGNvbnN0IHNldFNvcnQgPSAoc29ydDogU29ydEVudW0pID0+IHtcclxuICAgICAgICBkaXNwYXRoU29ydCh7IHR5cGU6IHNvcnQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2cocHJvZHVjdHMpXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIDxIdGFnIHRhZz1cImgxXCI+e3BhZ2UudGl0bGV9PC9IdGFnPlxyXG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzICYmIDxUYWcgY29sb3I9XCJncmV5XCIgc2l6ZT1cIm1cIj57cHJvZHVjdHMubGVuZ3RofTwvVGFnPn1cclxuICAgICAgICAgICAgICAgIDxTb3J0IHNvcnQ9e3NvcnR9IHNldFNvcnQ9e3NldFNvcnR9PjwvU29ydD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7c29ydGVkUHJvZHVjdHMgJiYgc29ydGVkUHJvZHVjdHMubWFwKHAgPT4gKDxQcm9kdWN0IGtleT17cC5faWR9IHByb2R1Y3Q9e3B9PjwvUHJvZHVjdD4pKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGhUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICA8SHRhZyB0YWc9XCJoMlwiPtCS0LDQutCw0L3RgdC40LggLSB7cGFnZS5jYXRlZ29yeX08L0h0YWc+XHJcbiAgICAgICAgICAgICAgICA8VGFnIGNvbG9yPVwicmVkXCIgc2l6ZT1cIm1cIj5oaC5ydTwvVGFnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2ZpcnN0Q2F0ZWdvcnkgPT0gVG9wTGV2ZWxDYXRlZ29yeS5Db3Vyc2VzICYmIHBhZ2UuaGggJiYgPEhoRGF0YSB7Li4ucGFnZS5oaH0+PC9IaERhdGE+fVxyXG4gICAgICAgICAgICB7cGFnZS5hZHZhbnRhZ2VzICYmIHBhZ2UuYWR2YW50YWdlcy5sZW5ndGggPiAxICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEh0YWcgdGFnPVwiaDJcIj7Qn9GA0LXQuNC80YPRidC10YHRgtCy0LA8L0h0YWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFkdmFudGFnZXMgYWR2YW50YWdlcz17cGFnZS5hZHZhbnRhZ2VzfT48L0FkdmFudGFnZXM+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7cGFnZS5zZW9UZXh0ICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VvfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcGFnZS5zZW9UZXh0IH19PjwvZGl2Pn1cclxuICAgICAgICAgICAgPEh0YWcgdGFnPVwiaDJcIj7Qn9C+0LvRg9GH0LDQtdC80YvQtSDQvdCw0LLRi9C60Lg8L0h0YWc+XHJcbiAgICAgICAgICAgIHtwYWdlLnRhZ3MubWFwKHQgPT4gPFRhZyBrZXk9e3R9IGNvbG9yPVwicHJpbWFyeVwiPnt0fTwvVGFnPil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=