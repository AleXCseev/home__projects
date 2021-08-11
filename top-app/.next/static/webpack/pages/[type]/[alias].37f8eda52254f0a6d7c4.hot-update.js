webpackHotUpdate_N_E("pages/[type]/[alias]",{

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
          return a.initialRaiting > b.initialRaiting ? -1 : -1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZS1jb21wb25lbnRzL1RvcFBhZ2VDb21wb25lbnQvc29ydC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbInNvcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiU29ydEVudW0iLCJSYWl0aW5nIiwic29ydCIsInByb2R1Y3RzIiwiYSIsImIiLCJpbml0aWFsUmFpdGluZyIsIlByaWNlIiwicHJpY2UiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVU8sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBRUMsS0FBRixFQUEwQkMsTUFBMUIsRUFBcUU7QUFDNUYsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBS0Msb0VBQVEsQ0FBQ0MsT0FBZDtBQUNJLGFBQU87QUFDSEMsWUFBSSxFQUFFRixvRUFBUSxDQUFDQyxPQURaO0FBRUhFLGdCQUFRLEVBQUVOLEtBQUssQ0FBQ00sUUFBTixDQUFlRCxJQUFmLENBQW9CLFVBQUNFLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGlCQUFVRCxDQUFDLENBQUNFLGNBQUYsR0FBbUJELENBQUMsQ0FBQ0MsY0FBckIsR0FBc0MsQ0FBQyxDQUF2QyxHQUEyQyxDQUFDLENBQXREO0FBQUEsU0FBcEI7QUFGUCxPQUFQOztBQUlKLFNBQUtOLG9FQUFRLENBQUNPLEtBQWQ7QUFDSSxhQUFPO0FBQ0hMLFlBQUksRUFBRUYsb0VBQVEsQ0FBQ08sS0FEWjtBQUVISixnQkFBUSxFQUFFTixLQUFLLENBQUNNLFFBQU4sQ0FBZUQsSUFBZixDQUFvQixVQUFDRSxDQUFELEVBQUlDLENBQUo7QUFBQSxpQkFBVUQsQ0FBQyxDQUFDSSxLQUFGLEdBQVVILENBQUMsQ0FBQ0csS0FBWixHQUFvQixDQUFwQixHQUF3QixDQUFDLENBQW5DO0FBQUEsU0FBcEI7QUFGUCxPQUFQOztBQUlKO0FBQ0ksWUFBTSxJQUFJQyxLQUFKLENBQVUseUJBQVYsQ0FBTjtBQVpSO0FBY0gsQ0FmTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bdHlwZV0vW2FsaWFzXS4zN2Y4ZWRhNTIyNTRmMGE2ZDdjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU29ydEVudW0gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Tb3J0L1NvcnQucHJvcHNcIjtcclxuaW1wb3J0IHsgUHJvZHVjdE1vZGVsIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvcHJvZHVjdC5pbnRlcmZhY2VcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFNvcnRBY3Rpb25zID0geyB0eXBlOiBTb3J0RW51bS5QcmljZSB9IHwgeyB0eXBlOiBTb3J0RW51bS5SYWl0aW5nIH1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU29ydFJlZHVjZXJTdGF0ZSB7XHJcbiAgICBzb3J0OiBTb3J0RW51bTtcclxuICAgIHByb2R1Y3RzOiBQcm9kdWN0TW9kZWxbXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNvcnRSZWR1Y2VyID0gKCBzdGF0ZTpTb3J0UmVkdWNlclN0YXRlLCBhY3Rpb246IFNvcnRBY3Rpb25zICk6IFNvcnRSZWR1Y2VyU3RhdGUgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBTb3J0RW51bS5SYWl0aW5nOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc29ydDogU29ydEVudW0uUmFpdGluZyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0cy5zb3J0KChhLCBiKSA9PiBhLmluaXRpYWxSYWl0aW5nID4gYi5pbml0aWFsUmFpdGluZyA/IC0xIDogLTEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFNvcnRFbnVtLlByaWNlOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc29ydDogU29ydEVudW0uUHJpY2UsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0czogc3RhdGUucHJvZHVjdHMuc29ydCgoYSwgYikgPT4gYS5wcmljZSA+IGIucHJpY2UgPyAxIDogLTEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ9Cd0LXQstC10YDQvdGL0Lkg0YLQuNC/INGB0L7RgNGC0LjRgNC+0LLQutC4Jyk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9