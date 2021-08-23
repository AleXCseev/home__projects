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

    case "reset":
      return {
        sort: _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__["SortEnum"].Raiting,
        products: action.initialState
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZS1jb21wb25lbnRzL1RvcFBhZ2VDb21wb25lbnQvc29ydC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbInNvcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiU29ydEVudW0iLCJSYWl0aW5nIiwic29ydCIsInByb2R1Y3RzIiwiYSIsImIiLCJpbml0aWFsUmFpdGluZyIsIlByaWNlIiwicHJpY2UiLCJpbml0aWFsU3RhdGUiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVU8sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBRUMsS0FBRixFQUEwQkMsTUFBMUIsRUFBcUU7QUFDNUYsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBS0Msb0VBQVEsQ0FBQ0MsT0FBZDtBQUNJLGFBQU87QUFDSEMsWUFBSSxFQUFFRixvRUFBUSxDQUFDQyxPQURaO0FBRUhFLGdCQUFRLEVBQUVOLEtBQUssQ0FBQ00sUUFBTixDQUFlRCxJQUFmLENBQW9CLFVBQUNFLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGlCQUFVRCxDQUFDLENBQUNFLGNBQUYsR0FBbUJELENBQUMsQ0FBQ0MsY0FBckIsR0FBc0MsQ0FBQyxDQUF2QyxHQUEyQyxDQUFyRDtBQUFBLFNBQXBCO0FBRlAsT0FBUDs7QUFJSixTQUFLTixvRUFBUSxDQUFDTyxLQUFkO0FBQ0ksYUFBTztBQUNITCxZQUFJLEVBQUVGLG9FQUFRLENBQUNPLEtBRFo7QUFFSEosZ0JBQVEsRUFBRU4sS0FBSyxDQUFDTSxRQUFOLENBQWVELElBQWYsQ0FBb0IsVUFBQ0UsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsaUJBQVVELENBQUMsQ0FBQ0ksS0FBRixHQUFVSCxDQUFDLENBQUNHLEtBQVosR0FBb0IsQ0FBcEIsR0FBd0IsQ0FBQyxDQUFuQztBQUFBLFNBQXBCO0FBRlAsT0FBUDs7QUFJSixTQUFLLE9BQUw7QUFDSSxhQUFPO0FBQ0hOLFlBQUksRUFBRUYsb0VBQVEsQ0FBQ0MsT0FEWjtBQUVIRSxnQkFBUSxFQUFFTCxNQUFNLENBQUNXO0FBRmQsT0FBUDs7QUFJSjtBQUNJLFlBQU0sSUFBSUMsS0FBSixDQUFVLHlCQUFWLENBQU47QUFqQlI7QUFtQkgsQ0FwQk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3R5cGVdL1thbGlhc10uOTViM2Q3NjFhY2YyMDJiNjZjMzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvcnRFbnVtIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU29ydC9Tb3J0LnByb3BzXCI7XHJcbmltcG9ydCB7IFByb2R1Y3RNb2RlbCB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL3Byb2R1Y3QuaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgdHlwZSBTb3J0QWN0aW9ucyA9IHsgdHlwZTogU29ydEVudW0uUHJpY2UgfSB8IHsgdHlwZTogU29ydEVudW0uUmFpdGluZyB9IHwgeyB0eXBlOiAncmVzZXQnLCBpbml0aWFsU3RhdGU6UHJvZHVjdE1vZGVsW119XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNvcnRSZWR1Y2VyU3RhdGUge1xyXG4gICAgc29ydDogU29ydEVudW07XHJcbiAgICBwcm9kdWN0czogUHJvZHVjdE1vZGVsW107XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzb3J0UmVkdWNlciA9ICggc3RhdGU6U29ydFJlZHVjZXJTdGF0ZSwgYWN0aW9uOiBTb3J0QWN0aW9ucyApOiBTb3J0UmVkdWNlclN0YXRlID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgU29ydEVudW0uUmFpdGluZzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNvcnQ6IFNvcnRFbnVtLlJhaXRpbmcsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0czogc3RhdGUucHJvZHVjdHMuc29ydCgoYSwgYikgPT4gYS5pbml0aWFsUmFpdGluZyA+IGIuaW5pdGlhbFJhaXRpbmcgPyAtMSA6IDEpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBTb3J0RW51bS5QcmljZTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNvcnQ6IFNvcnRFbnVtLlByaWNlLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzLnNvcnQoKGEsIGIpID0+IGEucHJpY2UgPiBiLnByaWNlID8gMSA6IC0xKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgXCJyZXNldFwiOiBcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNvcnQ6IFNvcnRFbnVtLlJhaXRpbmcsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0czogYWN0aW9uLmluaXRpYWxTdGF0ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign0J3QtdCy0LXRgNC90YvQuSDRgtC40L8g0YHQvtGA0YLQuNGA0L7QstC60LgnKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=