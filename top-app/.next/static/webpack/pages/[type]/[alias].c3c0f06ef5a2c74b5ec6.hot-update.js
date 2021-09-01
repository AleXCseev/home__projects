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
        lineNumber: 31,
        columnNumber: 5
      }, _this), products && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
        color: "grey",
        size: "m",
        "aria-label": products.length + " элементов",
        children: products.length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 6
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Sort"], {
        sort: sort,
        setSort: setSort
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
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
          lineNumber: 41,
          columnNumber: 32
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.hhTitle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Htag"], {
        tag: "h2",
        children: ["\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438 - ", page.category]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
        color: "red",
        size: "m",
        children: "hh.ru"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, _this), firstCategory == _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_6__["TopLevelCategory"].Courses && page.hh && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_HhData_HhData__WEBPACK_IMPORTED_MODULE_5__["HhData"], _objectSpread({}, page.hh), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 61
    }, _this), page.advantages && page.advantages.length > 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Htag"], {
        tag: "h2",
        children: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 6
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Advantages"], {
        advantages: page.advantages
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 6
      }, _this)]
    }, void 0, true), page.seoText && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.seo,
      dangerouslySetInnerHTML: {
        __html: page.seoText
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Htag"], {
      tag: "h2",
      children: "\u041F\u043E\u043B\u0443\u0447\u0430\u0435\u043C\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 4
    }, _this), page.tags.map(function (t) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
        color: "primary",
        children: t
      }, t, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZS1jb21wb25lbnRzL1RvcFBhZ2VDb21wb25lbnQvVG9wUGFnZUNvbXBvbmVudC50c3giXSwibmFtZXMiOlsiVG9wUGFnZUNvbXBvbmVudCIsInBhZ2UiLCJwcm9kdWN0cyIsImZpcnN0Q2F0ZWdvcnkiLCJ1c2VSZWR1Y2VyIiwic29ydFJlZHVjZXIiLCJzb3J0IiwiU29ydEVudW0iLCJSYXRpbmciLCJzb3J0ZWRQcm9kdWN0cyIsImRpc3BhdGhTb3J0Iiwic2V0U29ydCIsInR5cGUiLCJ1c2VFZmZlY3QiLCJpbml0aWFsU3RhdGUiLCJzdHlsZXMiLCJ3cmFwcGVyIiwidGl0bGUiLCJsZW5ndGgiLCJtYXAiLCJwIiwiX2lkIiwiaGhUaXRsZSIsImNhdGVnb3J5IiwiVG9wTGV2ZWxDYXRlZ29yeSIsIkNvdXJzZXMiLCJoaCIsImFkdmFudGFnZXMiLCJzZW9UZXh0Iiwic2VvIiwiX19odG1sIiwidGFncyIsInQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUlVO0FBQUE7O0FBQUEsTUFIekNDLElBR3lDLFFBSHpDQSxJQUd5QztBQUFBLE1BRnpDQyxRQUV5QyxRQUZ6Q0EsUUFFeUM7QUFBQSxNQUR6Q0MsYUFDeUMsUUFEekNBLGFBQ3lDOztBQUFBLG9CQUNpQkMsd0RBQVUsQ0FBQ0MseURBQUQsRUFBYztBQUNqRkgsWUFBUSxFQUFSQSxRQURpRjtBQUVqRkksUUFBSSxFQUFFQyxvRUFBUSxDQUFDQztBQUZrRSxHQUFkLENBRDNCO0FBQUE7QUFBQSxNQUN0QkMsY0FEc0IsZ0JBQ2hDUCxRQURnQztBQUFBLE1BQ05JLElBRE0sZ0JBQ05BLElBRE07QUFBQSxNQUNFSSxXQURGOztBQU16QyxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDTCxJ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QSxhQWpDRCxFQWtDRTNCLElBQUksQ0FBQzhCLElBQUwsQ0FBVVosR0FBVixDQUFjLFVBQUNhLENBQUQ7QUFBQSwwQkFDZCxxRUFBQywrQ0FBRDtBQUFhLGFBQUssRUFBQyxTQUFuQjtBQUFBLGtCQUNFQTtBQURGLFNBQVVBLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURjO0FBQUEsS0FBZCxDQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQTBDQSxDQTVETTs7R0FBTWhDLGdCOztLQUFBQSxnQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bdHlwZV0vW2FsaWFzXS5jM2MwZjA2ZWY1YTJjNzRiNWVjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBZHZhbnRhZ2VzLCBIdGFnLCBQcm9kdWN0LCBTb3J0LCBUYWcgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBUb3BQYWdlQ29tcG9uZW50UHJvcHMgfSBmcm9tIFwiLi9Ub3BQYWdlQ29tcG9uZW50LnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVG9wUGFnZUNvbXBvbmVudC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IEhoRGF0YSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hoRGF0YS9IaERhdGFcIjtcclxuaW1wb3J0IHsgVG9wTGV2ZWxDYXRlZ29yeSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL3RvcHBhZ2UuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFNvcnRFbnVtIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU29ydC9Tb3J0LnByb3BzXCI7XHJcbmltcG9ydCB7IHNvcnRSZWR1Y2VyIH0gZnJvbSBcIi4vc29ydC5yZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVG9wUGFnZUNvbXBvbmVudCA9ICh7XHJcblx0cGFnZSxcclxuXHRwcm9kdWN0cyxcclxuXHRmaXJzdENhdGVnb3J5LFxyXG59OiBUb3BQYWdlQ29tcG9uZW50UHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0Y29uc3QgW3sgcHJvZHVjdHM6IHNvcnRlZFByb2R1Y3RzLCBzb3J0IH0sIGRpc3BhdGhTb3J0XSA9IHVzZVJlZHVjZXIoc29ydFJlZHVjZXIsIHtcclxuXHRcdHByb2R1Y3RzLFxyXG5cdFx0c29ydDogU29ydEVudW0uUmF0aW5nLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBzZXRTb3J0ID0gKHNvcnQ6IFNvcnRFbnVtKSA9PiB7XHJcblx0XHRkaXNwYXRoU29ydCh7IHR5cGU6IHNvcnQgfSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRpc3BhdGhTb3J0KHsgdHlwZTogXCJyZXNldFwiLCBpbml0aWFsU3RhdGU6IHByb2R1Y3RzIH0pO1xyXG5cdH0sIFtwcm9kdWN0c10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcblx0XHRcdFx0PEh0YWcgdGFnPVwiaDFcIj57cGFnZS50aXRsZX08L0h0YWc+XHJcblx0XHRcdFx0e3Byb2R1Y3RzICYmIChcclxuXHRcdFx0XHRcdDxUYWcgY29sb3I9XCJncmV5XCIgc2l6ZT1cIm1cIiBhcmlhLWxhYmVsPXtwcm9kdWN0cy5sZW5ndGggKyBcIiDRjdC70LXQvNC10L3RgtC+0LJcIn0+XHJcblx0XHRcdFx0XHRcdHtwcm9kdWN0cy5sZW5ndGh9XHJcblx0XHRcdFx0XHQ8L1RhZz5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHRcdDxTb3J0IHNvcnQ9e3NvcnR9IHNldFNvcnQ9e3NldFNvcnR9PjwvU29ydD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgcm9sZT1cImxpc3RcIj5cclxuXHRcdFx0XHR7c29ydGVkUHJvZHVjdHMgJiZcclxuXHRcdFx0XHRcdHNvcnRlZFByb2R1Y3RzLm1hcCgocCkgPT4gPFByb2R1Y3Qgcm9sZT1cImxpc3RpdGVtXCIgbGF5b3V0IGtleT17cC5faWR9IHByb2R1Y3Q9e3B9PjwvUHJvZHVjdD4pfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oaFRpdGxlfT5cclxuXHRcdFx0XHQ8SHRhZyB0YWc9XCJoMlwiPtCS0LDQutCw0L3RgdC40LggLSB7cGFnZS5jYXRlZ29yeX08L0h0YWc+XHJcblx0XHRcdFx0PFRhZyBjb2xvcj1cInJlZFwiIHNpemU9XCJtXCI+XHJcblx0XHRcdFx0XHRoaC5ydVxyXG5cdFx0XHRcdDwvVGFnPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0e2ZpcnN0Q2F0ZWdvcnkgPT0gVG9wTGV2ZWxDYXRlZ29yeS5Db3Vyc2VzICYmIHBhZ2UuaGggJiYgPEhoRGF0YSB7Li4ucGFnZS5oaH0+PC9IaERhdGE+fVxyXG5cdFx0XHR7cGFnZS5hZHZhbnRhZ2VzICYmIHBhZ2UuYWR2YW50YWdlcy5sZW5ndGggPiAxICYmIChcclxuXHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0PEh0YWcgdGFnPVwiaDJcIj7Qn9GA0LXQuNC80YPRidC10YHRgtCy0LA8L0h0YWc+XHJcblx0XHRcdFx0XHQ8QWR2YW50YWdlcyBhZHZhbnRhZ2VzPXtwYWdlLmFkdmFudGFnZXN9PjwvQWR2YW50YWdlcz5cclxuXHRcdFx0XHQ8Lz5cclxuXHRcdFx0KX1cclxuXHRcdFx0e3BhZ2Uuc2VvVGV4dCAmJiAoXHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuc2VvfVxyXG5cdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwYWdlLnNlb1RleHQgfX1cclxuXHRcdFx0XHQ+PC9kaXY+XHJcblx0XHRcdCl9XHJcblx0XHRcdDxIdGFnIHRhZz1cImgyXCI+0J/QvtC70YPRh9Cw0LXQvNGL0LUg0L3QsNCy0YvQutC4PC9IdGFnPlxyXG5cdFx0XHR7cGFnZS50YWdzLm1hcCgodCkgPT4gKFxyXG5cdFx0XHRcdDxUYWcga2V5PXt0fSBjb2xvcj1cInByaW1hcnlcIj5cclxuXHRcdFx0XHRcdHt0fVxyXG5cdFx0XHRcdDwvVGFnPlxyXG5cdFx0XHQpKX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=