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

  var shouldReduceMotion = useRedu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZS1jb21wb25lbnRzL1RvcFBhZ2VDb21wb25lbnQvVG9wUGFnZUNvbXBvbmVudC50c3giXSwibmFtZXMiOlsiVG9wUGFnZUNvbXBvbmVudCIsInBhZ2UiLCJwcm9kdWN0cyIsImZpcnN0Q2F0ZWdvcnkiLCJ1c2VSZWR1Y2VyIiwic29ydFJlZHVjZXIiLCJzb3J0IiwiU29ydEVudW0iLCJSYXRpbmciLCJzb3J0ZWRQcm9kdWN0cyIsImRpc3BhdGhTb3J0Iiwic2hvdWxkUmVkdWNlTW90aW9uIiwidXNlUmVkdSIsInNldFNvcnQiLCJ0eXBlIiwidXNlRWZmZWN0IiwiaW5pdGlhbFN0YXRlIiwic3R5bGVzIiwid3JhcHBlciIsInRpdGxlIiwibGVuZ3RoIiwibWFwIiwicCIsIl9pZCIsImhoVGl0bGUiLCJjYXRlZ29yeSIsIlRvcExldmVsQ2F0ZWdvcnkiLCJDb3Vyc2VzIiwiaGgiLCJhZHZhbnRhZ2VzIiwic2VvVGV4dCIsInNlbyIsIl9faHRtbCIsInRhZ3MiLCJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FJVTtBQUFBOztBQUFBLE1BSHpDQyxJQUd5QyxRQUh6Q0EsSUFHeUM7QUFBQSxNQUZ6Q0MsUUFFeUMsUUFGekNBLFFBRXlDO0FBQUEsTUFEekNDLGFBQ3lDLFFBRHpDQSxhQUN5Qzs7QUFBQSxvQkFDaUJDLHdEQUFVLENBQUNDLHlEQUFELEVBQWM7QUFDakZILFlBQVEsRUFBUkEsUUFEaUY7QUFFakZJLFFBQUksRUFBRUMsb0VBQVEsQ0FBQ0M7QUFGa0UsR0FBZCxDQUQzQjtBQUFBO0FBQUEsTUFDdEJDLGNBRHNCLGdCQUNoQ1AsUUFEZ0M7QUFBQSxNQUNOSSxJQURNLGdCQUNOQSxJQURNO0FBQUEsTUFDRUksV0FERjs7QUFNekMsTUFB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Q0MscUVBQUMsZ0RBQUQ7QUFBTSxTQUFHLEVBQUMsSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpDRCxFQWtDRTdCLElBQUksQ0FBQ2dDLElBQUwsQ0FBVVosR0FBVixDQUFjLFVBQUNhLENBQUQ7QUFBQSwwQkFDZCxxRUFBQywrQ0FBRDtBQUFhLGFBQUssRUFBQyxTQUFuQjtBQUFBLGtCQUNFQTtBQURGLFNBQVVBLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURjO0FBQUEsS0FBZCxDQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQTBDQSxDQTlETTs7R0FBTWxDLGdCOztLQUFBQSxnQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bdHlwZV0vW2FsaWFzXS5hYzZjNDM1OTA2MDRlZjUxYWU5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBZHZhbnRhZ2VzLCBIdGFnLCBQcm9kdWN0LCBTb3J0LCBUYWcgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBUb3BQYWdlQ29tcG9uZW50UHJvcHMgfSBmcm9tIFwiLi9Ub3BQYWdlQ29tcG9uZW50LnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVG9wUGFnZUNvbXBvbmVudC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IEhoRGF0YSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hoRGF0YS9IaERhdGFcIjtcclxuaW1wb3J0IHsgVG9wTGV2ZWxDYXRlZ29yeSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL3RvcHBhZ2UuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFNvcnRFbnVtIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU29ydC9Tb3J0LnByb3BzXCI7XHJcbmltcG9ydCB7IHNvcnRSZWR1Y2VyIH0gZnJvbSBcIi4vc29ydC5yZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVG9wUGFnZUNvbXBvbmVudCA9ICh7XHJcblx0cGFnZSxcclxuXHRwcm9kdWN0cyxcclxuXHRmaXJzdENhdGVnb3J5LFxyXG59OiBUb3BQYWdlQ29tcG9uZW50UHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0Y29uc3QgW3sgcHJvZHVjdHM6IHNvcnRlZFByb2R1Y3RzLCBzb3J0IH0sIGRpc3BhdGhTb3J0XSA9IHVzZVJlZHVjZXIoc29ydFJlZHVjZXIsIHtcclxuXHRcdHByb2R1Y3RzLFxyXG5cdFx0c29ydDogU29ydEVudW0uUmF0aW5nLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBzaG91bGRSZWR1Y2VNb3Rpb24gPSB1c2VSZWR1XHJcblxyXG5cdGNvbnN0IHNldFNvcnQgPSAoc29ydDogU29ydEVudW0pID0+IHtcclxuXHRcdGRpc3BhdGhTb3J0KHsgdHlwZTogc29ydCB9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZGlzcGF0aFNvcnQoeyB0eXBlOiBcInJlc2V0XCIsIGluaXRpYWxTdGF0ZTogcHJvZHVjdHMgfSk7XHJcblx0fSwgW3Byb2R1Y3RzXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuXHRcdFx0XHQ8SHRhZyB0YWc9XCJoMVwiPntwYWdlLnRpdGxlfTwvSHRhZz5cclxuXHRcdFx0XHR7cHJvZHVjdHMgJiYgKFxyXG5cdFx0XHRcdFx0PFRhZyBjb2xvcj1cImdyZXlcIiBzaXplPVwibVwiIGFyaWEtbGFiZWw9e3Byb2R1Y3RzLmxlbmd0aCArIFwiINGN0LvQtdC80LXQvdGC0L7QslwifT5cclxuXHRcdFx0XHRcdFx0e3Byb2R1Y3RzLmxlbmd0aH1cclxuXHRcdFx0XHRcdDwvVGFnPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0PFNvcnQgc29ydD17c29ydH0gc2V0U29ydD17c2V0U29ydH0+PC9Tb3J0PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiByb2xlPVwibGlzdFwiPlxyXG5cdFx0XHRcdHtzb3J0ZWRQcm9kdWN0cyAmJlxyXG5cdFx0XHRcdFx0c29ydGVkUHJvZHVjdHMubWFwKChwKSA9PiA8UHJvZHVjdCByb2xlPVwibGlzdGl0ZW1cIiBsYXlvdXQga2V5PXtwLl9pZH0gcHJvZHVjdD17cH0+PC9Qcm9kdWN0Pil9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhoVGl0bGV9PlxyXG5cdFx0XHRcdDxIdGFnIHRhZz1cImgyXCI+0JLQsNC60LDQvdGB0LjQuCAtIHtwYWdlLmNhdGVnb3J5fTwvSHRhZz5cclxuXHRcdFx0XHQ8VGFnIGNvbG9yPVwicmVkXCIgc2l6ZT1cIm1cIj5cclxuXHRcdFx0XHRcdGhoLnJ1XHJcblx0XHRcdFx0PC9UYWc+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHR7Zmlyc3RDYXRlZ29yeSA9PSBUb3BMZXZlbENhdGVnb3J5LkNvdXJzZXMgJiYgcGFnZS5oaCAmJiA8SGhEYXRhIHsuLi5wYWdlLmhofT48L0hoRGF0YT59XHJcblx0XHRcdHtwYWdlLmFkdmFudGFnZXMgJiYgcGFnZS5hZHZhbnRhZ2VzLmxlbmd0aCA+IDEgJiYgKFxyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0XHQ8SHRhZyB0YWc9XCJoMlwiPtCf0YDQtdC40LzRg9GJ0LXRgdGC0LLQsDwvSHRhZz5cclxuXHRcdFx0XHRcdDxBZHZhbnRhZ2VzIGFkdmFudGFnZXM9e3BhZ2UuYWR2YW50YWdlc30+PC9BZHZhbnRhZ2VzPlxyXG5cdFx0XHRcdDwvPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHR7cGFnZS5zZW9UZXh0ICYmIChcclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5zZW99XHJcblx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBhZ2Uuc2VvVGV4dCB9fVxyXG5cdFx0XHRcdD48L2Rpdj5cclxuXHRcdFx0KX1cclxuXHRcdFx0PEh0YWcgdGFnPVwiaDJcIj7Qn9C+0LvRg9GH0LDQtdC80YvQtSDQvdCw0LLRi9C60Lg8L0h0YWc+XHJcblx0XHRcdHtwYWdlLnRhZ3MubWFwKCh0KSA9PiAoXHJcblx0XHRcdFx0PFRhZyBrZXk9e3R9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG5cdFx0XHRcdFx0e3R9XHJcblx0XHRcdFx0PC9UYWc+XHJcblx0XHRcdCkpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==