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
      console.log("ok!");
      return {
        sort: _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__["SortEnum"].Raiting,
        products: state.products.sort(function (a, b) {
          return a.initialRaiting > b.initialRaiting ? 1 : -1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZS1jb21wb25lbnRzL1RvcFBhZ2VDb21wb25lbnQvc29ydC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbInNvcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiU29ydEVudW0iLCJSYWl0aW5nIiwiY29uc29sZSIsImxvZyIsInNvcnQiLCJwcm9kdWN0cyIsImEiLCJiIiwiaW5pdGlhbFJhaXRpbmciLCJQcmljZSIsInByaWNlIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVPLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUVDLEtBQUYsRUFBMEJDLE1BQTFCLEVBQXFFO0FBQzVGLFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNJLFNBQUtDLG9FQUFRLENBQUNDLE9BQWQ7QUFDSUMsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQUNBLGFBQU87QUFDSEMsWUFBSSxFQUFFSixvRUFBUSxDQUFDQyxPQURaO0FBRUhJLGdCQUFRLEVBQUVSLEtBQUssQ0FBQ1EsUUFBTixDQUFlRCxJQUFmLENBQW9CLFVBQUNFLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGlCQUFVRCxDQUFDLENBQUNFLGNBQUYsR0FBbUJELENBQUMsQ0FBQ0MsY0FBckIsR0FBc0MsQ0FBdEMsR0FBMEMsQ0FBQyxDQUFyRDtBQUFBLFNBQXBCO0FBRlAsT0FBUDs7QUFJSixTQUFLUixvRUFBUSxDQUFDUyxLQUFkO0FBQ0ksYUFBTztBQUNITCxZQUFJLEVBQUVKLG9FQUFRLENBQUNTLEtBRFo7QUFFSEosZ0JBQVEsRUFBRVIsS0FBSyxDQUFDUSxRQUFOLENBQWVELElBQWYsQ0FBb0IsVUFBQ0UsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsaUJBQVVELENBQUMsQ0FBQ0ksS0FBRixHQUFVSCxDQUFDLENBQUNHLEtBQVosR0FBb0IsQ0FBcEIsR0FBd0IsQ0FBQyxDQUFuQztBQUFBLFNBQXBCO0FBRlAsT0FBUDs7QUFJSjtBQUNJLFlBQU0sSUFBSUMsS0FBSixDQUFVLHlCQUFWLENBQU47QUFiUjtBQWVILENBaEJNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1t0eXBlXS9bYWxpYXNdLjhiMjA4YTQxZTJhNjQyNTYxMjkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb3J0RW51bSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NvcnQvU29ydC5wcm9wc1wiO1xyXG5pbXBvcnQgeyBQcm9kdWN0TW9kZWwgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9wcm9kdWN0LmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IHR5cGUgU29ydEFjdGlvbnMgPSB7IHR5cGU6IFNvcnRFbnVtLlByaWNlIH0gfCB7IHR5cGU6IFNvcnRFbnVtLlJhaXRpbmcgfVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTb3J0UmVkdWNlclN0YXRlIHtcclxuICAgIHNvcnQ6IFNvcnRFbnVtO1xyXG4gICAgcHJvZHVjdHM6IFByb2R1Y3RNb2RlbFtdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc29ydFJlZHVjZXIgPSAoIHN0YXRlOlNvcnRSZWR1Y2VyU3RhdGUsIGFjdGlvbjogU29ydEFjdGlvbnMgKTogU29ydFJlZHVjZXJTdGF0ZSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFNvcnRFbnVtLlJhaXRpbmc6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib2shXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc29ydDogU29ydEVudW0uUmFpdGluZyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0cy5zb3J0KChhLCBiKSA9PiBhLmluaXRpYWxSYWl0aW5nID4gYi5pbml0aWFsUmFpdGluZyA/IDEgOiAtMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU29ydEVudW0uUHJpY2U6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzb3J0OiBTb3J0RW51bS5QcmljZSxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0cy5zb3J0KChhLCBiKSA9PiBhLnByaWNlID4gYi5wcmljZSA/IDEgOiAtMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign0J3QtdCy0LXRgNC90YvQuSDRgtC40L8g0YHQvtGA0YLQuNGA0L7QstC60LgnKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=