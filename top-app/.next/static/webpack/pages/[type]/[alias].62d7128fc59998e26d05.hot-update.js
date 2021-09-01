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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");




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

  var shouldReduceMotion = Object(framer_motion__WEBPACK_IMPORTED_MODULE_9__["useReducedMotion"])();

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
        lineNumber: 34,
        columnNumber: 5
      }, _this), products && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
        color: "grey",
        size: "m",
        "aria-label": products.length + " элементов",
        children: products.length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 6
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Sort"], {
        sort: sort,
        setSort: setSort
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      role: "list",
      children: sortedProducts && sortedProducts.map(function (p) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Product"], {
          role: "listitem",
          layout: shouldReducedMotion ? false : true,
          product: p
        }, p._id, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 32
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.hhTitle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Htag"], {
        tag: "h2",
        children: ["\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438 - ", page.category]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
        color: "red",
        size: "m",
        children: "hh.ru"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }, _this), firstCategory == _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_6__["TopLevelCategory"].Courses && page.hh && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_HhData_HhData__WEBPACK_IMPORTED_MODULE_5__["HhData"], _objectSpread({}, page.hh), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 61
    }, _this), page.advantages && page.advantages.length > 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Htag"], {
        tag: "h2",
        children: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 6
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Advantages"], {
        advantages: page.advantages
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 6
      }, _this)]
    }, void 0, true), page.seoText && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.seo,
      dangerouslySetInnerHTML: {
        __html: page.seoText
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Htag"], {
      tag: "h2",
      children: "\u041F\u043E\u043B\u0443\u0447\u0430\u0435\u043C\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 4
    }, _this), page.tags.map(function (t) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
        color: "primary",
        children: t
      }, t, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 3
  }, _this);
};

_s(TopPageComponent, "vKsuTrq7EDiFa8yUvf1w6cOjNrc=", false, function () {
  return [framer_motion__WEBPACK_IMPORTED_MODULE_9__["useReducedMotion"]];
});

_c = TopPageComponent;

function useReduceMotion() {
  throw new Error("Function not implemented.");
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZS1jb21wb25lbnRzL1RvcFBhZ2VDb21wb25lbnQvVG9wUGFnZUNvbXBvbmVudC50c3giXSwibmFtZXMiOlsiVG9wUGFnZUNvbXBvbmVudCIsInBhZ2UiLCJwcm9kdWN0cyIsImZpcnN0Q2F0ZWdvcnkiLCJ1c2VSZWR1Y2VyIiwic29ydFJlZHVjZXIiLCJzb3J0IiwiU29ydEVudW0iLCJSYXRpbmciLCJzb3J0ZWRQcm9kdWN0cyIsImRpc3BhdGhTb3J0Iiwic2hvdWxkUmVkdWNlTW90aW9uIiwidXNlUmVkdWNlZE1vdGlvbiIsInNldFNvcnQiLCJ0eXBlIiwidXNlRWZmZWN0IiwiaW5pdGlhbFN0YXRlIiwic3R5bGVzIiwid3JhcHBlciIsInRpdGxlIiwibGVuZ3RoIiwibWFwIiwicCIsInNob3VsZFJlZHVjZWRNb3Rpb24iLCJfaWQiLCJoaFRpdGxlIiwiY2F0ZWdvcnkiLCJUb3BMZXZlbENhdGVnb3J5IiwiQ291cnNlcyIsImhoIiwiYWR2YW50YWdlcyIsInNlb1RleHQiLCJzZW8iLCJfX2h0bWwiLCJ0YWdzIiwidCIsInVzZVJlZHVjZU1vdGlvbiIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FJVTtBQUFBOztBQUFBLE1BSHpDQyxJQUd5QyxRQUh6Q0EsSUFHeUM7QUFBQSxNQUZ6Q0MsUUFFeUMsUUFGekNBLFFBRXlDO0FBQUEsTUFEekNDLGFBQ3lDLFFBRHpDQSxhQUN5Qzs7QUFBQSxvQkFDaUJDLHdEQUFVLENBQUNDLHlEQUFELEVBQWM7QUFDakZILFlBQVEsRUFBUkEsUUFEaUY7QUFFakZJLFFBQUksRUFBRUMsb0VBQVEsQ0FBQ0M7QUFGa0UsR0FBZCxDQUQzQjtBQUFBO0FBQUEsTUFDdEJDLGNBRHNCLGdCQUNo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QUFDZSxHQURuQjtBQUVDLDZCQUF1QixFQUFFO0FBQUVDLGNBQU0sRUFBRWhDLElBQUksQ0FBQzhCO0FBQWY7QUFGMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTVCRixlQWlDQyxxRUFBQyxnREFBRDtBQUFNLFNBQUcsRUFBQyxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakNELEVBa0NFOUIsSUFBSSxDQUFDaUMsSUFBTCxDQUFVYixHQUFWLENBQWMsVUFBQ2MsQ0FBRDtBQUFBLDBCQUNkLHFFQUFDLCtDQUFEO0FBQWEsYUFBSyxFQUFDLFNBQW5CO0FBQUEsa0JBQ0VBO0FBREYsU0FBVUEsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGM7QUFBQSxLQUFkLENBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBMENBLENBOURNOztHQUFNbkMsZ0I7VUFVZVksOEQ7OztLQVZmWixnQjs7QUErRGIsU0FBU29DLGVBQVQsR0FBMkI7QUFDMUIsUUFBTSxJQUFJQyxLQUFKLENBQVUsMkJBQVYsQ0FBTjtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1t0eXBlXS9bYWxpYXNdLjYyZDcxMjhmYzU5OTk4ZTI2ZDA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFkdmFudGFnZXMsIEh0YWcsIFByb2R1Y3QsIFNvcnQsIFRhZyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IFRvcFBhZ2VDb21wb25lbnRQcm9wcyB9IGZyb20gXCIuL1RvcFBhZ2VDb21wb25lbnQucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Ub3BQYWdlQ29tcG9uZW50Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgSGhEYXRhIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGhEYXRhL0hoRGF0YVwiO1xyXG5pbXBvcnQgeyBUb3BMZXZlbENhdGVnb3J5IH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvdG9wcGFnZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgU29ydEVudW0gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Tb3J0L1NvcnQucHJvcHNcIjtcclxuaW1wb3J0IHsgc29ydFJlZHVjZXIgfSBmcm9tIFwiLi9zb3J0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgdXNlUmVkdWNlZE1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuXHJcbmV4cG9ydCBjb25zdCBUb3BQYWdlQ29tcG9uZW50ID0gKHtcclxuXHRwYWdlLFxyXG5cdHByb2R1Y3RzLFxyXG5cdGZpcnN0Q2F0ZWdvcnksXHJcbn06IFRvcFBhZ2VDb21wb25lbnRQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRjb25zdCBbeyBwcm9kdWN0czogc29ydGVkUHJvZHVjdHMsIHNvcnQgfSwgZGlzcGF0aFNvcnRdID0gdXNlUmVkdWNlcihzb3J0UmVkdWNlciwge1xyXG5cdFx0cHJvZHVjdHMsXHJcblx0XHRzb3J0OiBTb3J0RW51bS5SYXRpbmcsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHNob3VsZFJlZHVjZU1vdGlvbiA9IHVzZVJlZHVjZWRNb3Rpb24oKVxyXG5cclxuXHRjb25zdCBzZXRTb3J0ID0gKHNvcnQ6IFNvcnRFbnVtKSA9PiB7XHJcblx0XHRkaXNwYXRoU29ydCh7IHR5cGU6IHNvcnQgfSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRpc3BhdGhTb3J0KHsgdHlwZTogXCJyZXNldFwiLCBpbml0aWFsU3RhdGU6IHByb2R1Y3RzIH0pO1xyXG5cdH0sIFtwcm9kdWN0c10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcblx0XHRcdFx0PEh0YWcgdGFnPVwiaDFcIj57cGFnZS50aXRsZX08L0h0YWc+XHJcblx0XHRcdFx0e3Byb2R1Y3RzICYmIChcclxuXHRcdFx0XHRcdDxUYWcgY29sb3I9XCJncmV5XCIgc2l6ZT1cIm1cIiBhcmlhLWxhYmVsPXtwcm9kdWN0cy5sZW5ndGggKyBcIiDRjdC70LXQvNC10L3RgtC+0LJcIn0+XHJcblx0XHRcdFx0XHRcdHtwcm9kdWN0cy5sZW5ndGh9XHJcblx0XHRcdFx0XHQ8L1RhZz5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHRcdDxTb3J0IHNvcnQ9e3NvcnR9IHNldFNvcnQ9e3NldFNvcnR9PjwvU29ydD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgcm9sZT1cImxpc3RcIj5cclxuXHRcdFx0XHR7c29ydGVkUHJvZHVjdHMgJiZcclxuXHRcdFx0XHRcdHNvcnRlZFByb2R1Y3RzLm1hcCgocCkgPT4gPFByb2R1Y3Qgcm9sZT1cImxpc3RpdGVtXCIgbGF5b3V0PXtzaG91bGRSZWR1Y2VkTW90aW9uID8gZmFsc2UgOiB0cnVlfSBrZXk9e3AuX2lkfSBwcm9kdWN0PXtwfT48L1Byb2R1Y3Q+KX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGhUaXRsZX0+XHJcblx0XHRcdFx0PEh0YWcgdGFnPVwiaDJcIj7QktCw0LrQsNC90YHQuNC4IC0ge3BhZ2UuY2F0ZWdvcnl9PC9IdGFnPlxyXG5cdFx0XHRcdDxUYWcgY29sb3I9XCJyZWRcIiBzaXplPVwibVwiPlxyXG5cdFx0XHRcdFx0aGgucnVcclxuXHRcdFx0XHQ8L1RhZz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdHtmaXJzdENhdGVnb3J5ID09IFRvcExldmVsQ2F0ZWdvcnkuQ291cnNlcyAmJiBwYWdlLmhoICYmIDxIaERhdGEgey4uLnBhZ2UuaGh9PjwvSGhEYXRhPn1cclxuXHRcdFx0e3BhZ2UuYWR2YW50YWdlcyAmJiBwYWdlLmFkdmFudGFnZXMubGVuZ3RoID4gMSAmJiAoXHJcblx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdDxIdGFnIHRhZz1cImgyXCI+0J/RgNC10LjQvNGD0YnQtdGB0YLQstCwPC9IdGFnPlxyXG5cdFx0XHRcdFx0PEFkdmFudGFnZXMgYWR2YW50YWdlcz17cGFnZS5hZHZhbnRhZ2VzfT48L0FkdmFudGFnZXM+XHJcblx0XHRcdFx0PC8+XHJcblx0XHRcdCl9XHJcblx0XHRcdHtwYWdlLnNlb1RleHQgJiYgKFxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLnNlb31cclxuXHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcGFnZS5zZW9UZXh0IH19XHJcblx0XHRcdFx0PjwvZGl2PlxyXG5cdFx0XHQpfVxyXG5cdFx0XHQ8SHRhZyB0YWc9XCJoMlwiPtCf0L7Qu9GD0YfQsNC10LzRi9C1INC90LDQstGL0LrQuDwvSHRhZz5cclxuXHRcdFx0e3BhZ2UudGFncy5tYXAoKHQpID0+IChcclxuXHRcdFx0XHQ8VGFnIGtleT17dH0gY29sb3I9XCJwcmltYXJ5XCI+XHJcblx0XHRcdFx0XHR7dH1cclxuXHRcdFx0XHQ8L1RhZz5cclxuXHRcdFx0KSl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5mdW5jdGlvbiB1c2VSZWR1Y2VNb3Rpb24oKSB7XHJcblx0dGhyb3cgbmV3IEVycm9yKFwiRnVuY3Rpb24gbm90IGltcGxlbWVudGVkLlwiKTtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==