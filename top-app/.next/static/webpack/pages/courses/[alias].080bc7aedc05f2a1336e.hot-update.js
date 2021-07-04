webpackHotUpdate_N_E("pages/courses/[alias]",{

/***/ "./layout/Menu/Menu.tsx":
/*!******************************!*\
  !*** ./layout/Menu/Menu.tsx ***!
  \******************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/app.context */ "./context/app.context.tsx");
/* harmony import */ var _icons_courses_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/courses.svg */ "./layout/Menu/icons/courses.svg");
/* harmony import */ var _icons_services_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/services.svg */ "./layout/Menu/icons/services.svg");
/* harmony import */ var _icons_books_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/books.svg */ "./layout/Menu/icons/books.svg");
/* harmony import */ var _icons_products_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/products.svg */ "./layout/Menu/icons/products.svg");
/* harmony import */ var _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../interfaces/toppage.interface */ "./interfaces/toppage.interface.ts");


var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\layout\\Menu\\Menu.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var firstLevelMenu = [{
  route: "courses",
  name: "Курсы",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_courses_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 46
  }, undefined),
  id: _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_7__["TopLevelCategory"].Courses
}, {
  route: "services",
  name: "Сервисы",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_services_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 49
  }, undefined),
  id: _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_7__["TopLevelCategory"].Services
}, {
  route: "books",
  name: "Книги",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_books_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 44
  }, undefined),
  id: _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_7__["TopLevelCategory"].Books
}, {
  route: "products",
  name: "Продукты",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_products_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 50
  }, undefined),
  id: _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_7__["TopLevelCategory"].Products
}];
var Menu = function Menu() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_app_context__WEBPACK_IMPORTED_MODULE_2__["AppContext"]),
      menu = _useContext.menu,
      setMenu = _useContext.setMenu,
      firstCategory = _useContext.firstCategory;

  var buildFirstLevel;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: menu.map(function (m) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: m._id.secondCategory
        }, m._id.secondCategory, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, _this);
};

_s(Menu, "dpiMx+OJnXwQH5PEJrOxOYkvptM=");

_c = Menu;

var _c;

$RefreshReg$(_c, "Menu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L01lbnUvTWVudS50c3giXSwibmFtZXMiOlsiZmlyc3RMZXZlbE1lbnUiLCJyb3V0ZSIsIm5hbWUiLCJpY29uIiwiaWQiLCJUb3BMZXZlbENhdGVnb3J5IiwiQ291cnNlcyIsIlNlcnZpY2VzIiwiQm9va3MiLCJQcm9kdWN0cyIsIk1lbnUiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsIm1lbnUiLCJzZXRNZW51IiwiZmlyc3RDYXRlZ29yeSIsImJ1aWxkRmlyc3RMZXZlbCIsIm1hcCIsIm0iLCJfaWQiLCJzZWNvbmRDYXRlZ29yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsY0FBb0MsR0FBRyxDQUN6QztBQUFFQyxPQUFLLEVBQUUsU0FBVDtBQUFvQkMsTUFBSSxFQUFFLE9BQTFCO0FBQW1DQyxNQUFJLGVBQUUscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF6QztBQUFzRUMsSUFBRSxFQUFFQyw4RUFBZ0IsQ0FBQ0M7QUFBM0YsQ0FEeUMsRUFFekM7QUFBRUwsT0FBSyxFQUFFLFVBQVQ7QUFBcUJDLE1BQUksRUFBRSxTQUEzQjtBQUFzQ0MsTUFBSSxlQUFFLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBNUM7QUFBMkVDLElBQUUsRUFBRUMsOEVBQWdCLENBQUNFO0FBQWhHLENBRnlDLEVBR3pDO0FBQUVOLE9BQUssRUFBRSxPQUFUO0FBQWtCQyxNQUFJLEVBQUUsT0FBeEI7QUFBaUNDLE1BQUksZUFBRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXZDO0FBQWdFQyxJQUFFLEVBQUVDLDhFQUFnQixDQUFDRztBQUFyRixDQUh5QyxFQUl6QztBQUFFUCxPQUFLLEVBQUUsVUFBVDtBQUFxQkMsTUFBSSxFQUFFLFVBQTNCO0FBQXVDQyxNQUFJLGVBQUUscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE3QztBQUE0RUMsSUFBRSxFQUFFQyw4RUFBZ0IsQ0FBQ0k7QUFBakcsQ0FKeUMsQ0FBN0M7QUFPTyxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFtQjtBQUFBOztBQUFBLG9CQUVNQyx3REFBVSxDQUFDQywrREFBRCxDQUZoQjtBQUFBLE1BRTNCQyxJQUYyQixlQUUzQkEsSUFGMkI7QUFBQSxNQUVyQkMsT0FGcUIsZUFFckJBLE9BRnFCO0FBQUEsTUFFWkMsYUFGWSxlQUVaQSxhQUZZOztBQUluQyxNQUFNQyxlQUFOO0FBRUEsc0JBQ0k7QUFBQSwyQkFDSTtBQUFBLGdCQUNLSCxJQUFJLENBQUNJLEdBQUwsQ0FBUyxVQUFDQyxDQUFEO0FBQUEsNEJBQ047QUFBQSxvQkFBZ0NBLENBQUMsQ0FBQ0MsR0FBRixDQUFNQztBQUF0QyxXQUFTRixDQUFDLENBQUNDLEdBQUYsQ0FBTUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURNO0FBQUEsT0FBVDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFVSCxDQWhCTTs7R0FBTVYsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb3Vyc2VzL1thbGlhc10uMDgwYmM3YWVkYzA1ZjJhMTMzNmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvYXBwLmNvbnRleHRcIlxyXG5pbXBvcnQgeyBGaXJzdExldmVsTWVudUl0ZW0gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9tZW51LmludGVmYWNlXCJcclxuaW1wb3J0IENvdXJzZXNJY29uIGZyb20gXCIuL2ljb25zL2NvdXJzZXMuc3ZnXCJcclxuaW1wb3J0IFNlcnZpY2VzSWNvbiBmcm9tIFwiLi9pY29ucy9zZXJ2aWNlcy5zdmdcIlxyXG5pbXBvcnQgQm9va3NJY29uIGZyb20gXCIuL2ljb25zL2Jvb2tzLnN2Z1wiXHJcbmltcG9ydCBQcm9kdWN0c0ljb24gZnJvbSBcIi4vaWNvbnMvcHJvZHVjdHMuc3ZnXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9NZW51Lm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyBUb3BMZXZlbENhdGVnb3J5IH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvdG9wcGFnZS5pbnRlcmZhY2VcIlxyXG5cclxuY29uc3QgZmlyc3RMZXZlbE1lbnU6IEZpcnN0TGV2ZWxNZW51SXRlbVtdID0gW1xyXG4gICAgeyByb3V0ZTogXCJjb3Vyc2VzXCIsIG5hbWU6IFwi0JrRg9GA0YHRi1wiLCBpY29uOiA8Q291cnNlc0ljb24+PC9Db3Vyc2VzSWNvbj4sIGlkOiBUb3BMZXZlbENhdGVnb3J5LkNvdXJzZXMgfSxcclxuICAgIHsgcm91dGU6IFwic2VydmljZXNcIiwgbmFtZTogXCLQodC10YDQstC40YHRi1wiLCBpY29uOiA8U2VydmljZXNJY29uPjwvU2VydmljZXNJY29uPiwgaWQ6IFRvcExldmVsQ2F0ZWdvcnkuU2VydmljZXMgfSxcclxuICAgIHsgcm91dGU6IFwiYm9va3NcIiwgbmFtZTogXCLQmtC90LjQs9C4XCIsIGljb246IDxCb29rc0ljb24+PC9Cb29rc0ljb24+LCBpZDogVG9wTGV2ZWxDYXRlZ29yeS5Cb29rcyB9LFxyXG4gICAgeyByb3V0ZTogXCJwcm9kdWN0c1wiLCBuYW1lOiBcItCf0YDQvtC00YPQutGC0YtcIiwgaWNvbjogPFByb2R1Y3RzSWNvbj48L1Byb2R1Y3RzSWNvbj4sIGlkOiBUb3BMZXZlbENhdGVnb3J5LlByb2R1Y3RzIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHJcbiAgICBjb25zdCB7IG1lbnUsIHNldE1lbnUsIGZpcnN0Q2F0ZWdvcnkgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dClcclxuXHJcbiAgICBjb25zdCBidWlsZEZpcnN0TGV2ZWxcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHttZW51Lm1hcCgobSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e20uX2lkLnNlY29uZENhdGVnb3J5fT57bS5faWQuc2Vjb25kQ2F0ZWdvcnl9PC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==