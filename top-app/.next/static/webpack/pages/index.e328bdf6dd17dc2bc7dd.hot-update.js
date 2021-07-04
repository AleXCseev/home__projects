webpackHotUpdate_N_E("pages/index",{

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

  var buil;
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

/***/ }),

/***/ "./layout/Menu/icons/books.svg":
/*!*************************************!*\
  !*** ./layout/Menu/icons/books.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgBooks(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 24,
    height: 23,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M5.06 3.75h-.002a.73.73 0 00-.502.195.648.648 0 00-.21.476v10.06c0 .369.321.67.716.67 1.666.004 4.457.33 6.382 2.218V6.841a.613.613 0 00-.098-.34C9.766 4.117 6.73 3.754 5.06 3.75zM19.654 14.48V4.42c0-.18-.074-.349-.21-.476a.73.73 0 00-.502-.194h-.001c-1.67.003-4.707.366-6.287 2.752a.613.613 0 00-.098.34v10.527c1.925-1.888 4.716-2.214 6.382-2.217.395-.002.716-.302.716-.671z",
    fill: "#787D85"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M21.285 6.07h-.52v8.41c0 .943-.818 1.71-1.825 1.713-1.413.003-3.742.262-5.392 1.726 2.853-.655 5.862-.229 7.576.137a.751.751 0 00.607-.13.652.652 0 00.269-.523V6.74c0-.37-.321-.671-.715-.671zM3.234 14.48V6.07h-.518c-.395 0-.716.3-.716.67v10.662c0 .206.098.397.269.524a.75.75 0 00.607.13c1.714-.366 4.723-.792 7.576-.137-1.65-1.464-3.98-1.723-5.393-1.726-1.006-.002-1.825-.77-1.825-1.712z",
    fill: "#787D85"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgBooks);

/***/ }),

/***/ "./layout/Menu/icons/courses.svg":
/*!***************************************!*\
  !*** ./layout/Menu/icons/courses.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgCourses(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M12 12.892l-6.328-2.541v1.836c0 2.004 2.72 3.515 6.328 3.515s6.328-1.51 6.328-3.515V10.35L12 12.892z",
    fill: "#7653FC"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M24 16.405c0-.915-.59-1.688-1.406-1.98V7.143L24 6.562 12 1.747 0 6.562l12 4.815 9.188-3.67v6.719a2.106 2.106 0 00-1.407 1.98c0 .838.495 1.557 1.205 1.897l-1.168 3.505 1.333.445.74-2.218.74 2.218 1.333-.445-1.169-3.505A2.106 2.106 0 0024 16.405z",
    fill: "#7653FC"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCourses);

/***/ }),

/***/ "./layout/Menu/icons/products.svg":
/*!****************************************!*\
  !*** ./layout/Menu/icons/products.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgProducts(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 24,
    height: 23,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M15.09 4.168l-8.168 3.92-3.247-1.497 8.024-3.714a.697.697 0 01.585 0l2.806 1.291zM20.316 6.59l-8.311 3.86-3.113-1.437-.45-.214 8.177-3.92.45.214 3.247 1.498zM11.338 11.563l-.008 8.123-7.961-3.895A.648.648 0 013 15.218V7.703l3.373 1.558v2.74c0 .35.306.641.675.641.37 0 .675-.29.675-.642V9.895l.45.205 3.165 1.463zM20.991 7.712l-8.303 3.843-.008 8.122L21 15.604l-.009-7.892z",
    fill: "#787D85"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgProducts);

/***/ }),

/***/ "./layout/Menu/icons/services.svg":
/*!****************************************!*\
  !*** ./layout/Menu/icons/services.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgServices(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M19.654 8.762a4.78 4.78 0 00.082-.887C19.736 5.187 17.49 3 14.726 3c-1.763 0-3.397.914-4.295 2.367-1.213-.383-2.456-.219-3.481.468S5.314 7.61 5.264 8.798C3.917 9.42 3 10.746 3 12.208c0 .254.063.502.112.742C3.472 14.719 5.08 16 6.934 16h11.132C20.215 16 22 14.299 22 12.208c0-1.478-.93-2.809-2.346-3.446z",
    fill: "#787D85"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgServices);

/***/ }),

/***/ "./layout/Sidebar/Sidebar.tsx":
/*!************************************!*\
  !*** ./layout/Sidebar/Sidebar.tsx ***!
  \************************************/
/*! exports provided: Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony import */ var C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Menu/Menu */ "./layout/Menu/Menu.tsx");




var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\layout\\Sidebar\\Sidebar.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var Sidebar = function Sidebar(_ref) {
  var props = Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _ref);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__["Menu"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, _this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }, _this);
};
_c = Sidebar;

var _c;

$RefreshReg$(_c, "Sidebar");

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

/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/module.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L01lbnUvTWVudS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dC9NZW51L2ljb25zL2Jvb2tzLnN2ZyIsIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L01lbnUvaWNvbnMvY291cnNlcy5zdmciLCJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dC9NZW51L2ljb25zL3Byb2R1Y3RzLnN2ZyIsIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L01lbnUvaWNvbnMvc2VydmljZXMuc3ZnIiwid2VicGFjazovL19OX0UvLi9sYXlvdXQvU2lkZWJhci9TaWRlYmFyLnRzeCJdLCJuYW1lcyI6WyJmaXJzdExldmVsTWVudSIsInJvdXRlIiwibmFtZSIsImljb24iLCJpZCIsIlRvcExldmVsQ2F0ZWdvcnkiLCJDb3Vyc2VzIiwiU2VydmljZXMiLCJCb29rcyIsIlByb2R1Y3RzIiwiTWVudSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwibWVudSIsInNldE1lbnUiLCJmaXJzdENhdGVnb3J5IiwiYnVpbCIsIm1hcCIsIm0iLCJfaWQiLCJzZWNvbmRDYXRlZ29yeSIsIlNpZGViYXIiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsY0FBb0MsR0FBRyxDQUN6QztBQUFFQyxPQUFLLEVBQUUsU0FBVDtBQUFvQkMsTUFBSSxFQUFFLE9BQTFCO0FBQW1DQyxNQUFJLGVBQUUscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF6QztBQUFzRUMsSUFBRSxFQUFFQyw4RUFBZ0IsQ0FBQ0M7QUFBM0YsQ0FEeUMsRUFFekM7QUFBRUwsT0FBSyxFQUFFLFVBQVQ7QUFBcUJDLE1BQUksRUFBRSxTQUEzQjtBQUFzQ0MsTUFBSSxlQUFFLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBNUM7QUFBMkVD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Ryx3Q0FBd0M7O0FBRTVSOztBQUUvQjtBQUNBLHNCQUFzQixtREFBbUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLHlDQUF5QyxtREFBbUI7QUFDL0Q7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFZSwwRUFBVyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2YxQjtBQUNBO0FBRU8sSUFBTVcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBNkM7QUFBQSxNQUF2Q0MsS0FBdUM7O0FBQ25FLHNCQUNDLDRHQUFTQSxLQUFUO0FBQUEsMkJBQ0MscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQUtBLENBTk07S0FBTUQsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMzI4YmRmNmRkMTdkYzJiYzdkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9hcHAuY29udGV4dFwiXHJcbmltcG9ydCB7IEZpcnN0TGV2ZWxNZW51SXRlbSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL21lbnUuaW50ZWZhY2VcIlxyXG5pbXBvcnQgQ291cnNlc0ljb24gZnJvbSBcIi4vaWNvbnMvY291cnNlcy5zdmdcIlxyXG5pbXBvcnQgU2VydmljZXNJY29uIGZyb20gXCIuL2ljb25zL3NlcnZpY2VzLnN2Z1wiXHJcbmltcG9ydCBCb29rc0ljb24gZnJvbSBcIi4vaWNvbnMvYm9va3Muc3ZnXCJcclxuaW1wb3J0IFByb2R1Y3RzSWNvbiBmcm9tIFwiLi9pY29ucy9wcm9kdWN0cy5zdmdcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL01lbnUubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB7IFRvcExldmVsQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy90b3BwYWdlLmludGVyZmFjZVwiXHJcblxyXG5jb25zdCBmaXJzdExldmVsTWVudTogRmlyc3RMZXZlbE1lbnVJdGVtW10gPSBbXHJcbiAgICB7IHJvdXRlOiBcImNvdXJzZXNcIiwgbmFtZTogXCLQmtGD0YDRgdGLXCIsIGljb246IDxDb3Vyc2VzSWNvbj48L0NvdXJzZXNJY29uPiwgaWQ6IFRvcExldmVsQ2F0ZWdvcnkuQ291cnNlcyB9LFxyXG4gICAgeyByb3V0ZTogXCJzZXJ2aWNlc1wiLCBuYW1lOiBcItCh0LXRgNCy0LjRgdGLXCIsIGljb246IDxTZXJ2aWNlc0ljb24+PC9TZXJ2aWNlc0ljb24+LCBpZDogVG9wTGV2ZWxDYXRlZ29yeS5TZXJ2aWNlcyB9LFxyXG4gICAgeyByb3V0ZTogXCJib29rc1wiLCBuYW1lOiBcItCa0L3QuNCz0LhcIiwgaWNvbjogPEJvb2tzSWNvbj48L0Jvb2tzSWNvbj4sIGlkOiBUb3BMZXZlbENhdGVnb3J5LkJvb2tzIH0sXHJcbiAgICB7IHJvdXRlOiBcInByb2R1Y3RzXCIsIG5hbWU6IFwi0J/RgNC+0LTRg9C60YLRi1wiLCBpY29uOiA8UHJvZHVjdHNJY29uPjwvUHJvZHVjdHNJY29uPiwgaWQ6IFRvcExldmVsQ2F0ZWdvcnkuUHJvZHVjdHMgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnUgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgbWVudSwgc2V0TWVudSwgZmlyc3RDYXRlZ29yeSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KVxyXG5cclxuICAgIGNvbnN0IGJ1aWxcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHttZW51Lm1hcCgobSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e20uX2lkLnNlY29uZENhdGVnb3J5fT57bS5faWQuc2Vjb25kQ2F0ZWdvcnl9PC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59IiwidmFyIF9wYXRoLCBfcGF0aDI7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdCb29rcyhwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiAyNCxcbiAgICBoZWlnaHQ6IDIzLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTUuMDYgMy43NWgtLjAwMmEuNzMuNzMgMCAwMC0uNTAyLjE5NS42NDguNjQ4IDAgMDAtLjIxLjQ3NnYxMC4wNmMwIC4zNjkuMzIxLjY3LjcxNi42NyAxLjY2Ni4wMDQgNC40NTcuMzMgNi4zODIgMi4yMThWNi44NDFhLjYxMy42MTMgMCAwMC0uMDk4LS4zNEM5Ljc2NiA0LjExNyA2LjczIDMuNzU0IDUuMDYgMy43NXpNMTkuNjU0IDE0LjQ4VjQuNDJjMC0uMTgtLjA3NC0uMzQ5LS4yMS0uNDc2YS43My43MyAwIDAwLS41MDItLjE5NGgtLjAwMWMtMS42Ny4wMDMtNC43MDcuMzY2LTYuMjg3IDIuNzUyYS42MTMuNjEzIDAgMDAtLjA5OC4zNHYxMC41MjdjMS45MjUtMS44ODggNC43MTYtMi4yMTQgNi4zODItMi4yMTcuMzk1LS4wMDIuNzE2LS4zMDIuNzE2LS42NzF6XCIsXG4gICAgZmlsbDogXCIjNzg3RDg1XCJcbiAgfSkpLCBfcGF0aDIgfHwgKF9wYXRoMiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMjEuMjg1IDYuMDdoLS41MnY4LjQxYzAgLjk0My0uODE4IDEuNzEtMS44MjUgMS43MTMtMS40MTMuMDAzLTMuNzQyLjI2Mi01LjM5MiAxLjcyNiAyLjg1My0uNjU1IDUuODYyLS4yMjkgNy41NzYuMTM3YS43NTEuNzUxIDAgMDAuNjA3LS4xMy42NTIuNjUyIDAgMDAuMjY5LS41MjNWNi43NGMwLS4zNy0uMzIxLS42NzEtLjcxNS0uNjcxek0zLjIzNCAxNC40OFY2LjA3aC0uNTE4Yy0uMzk1IDAtLjcxNi4zLS43MTYuNjd2MTAuNjYyYzAgLjIwNi4wOTguMzk3LjI2OS41MjRhLjc1Ljc1IDAgMDAuNjA3LjEzYzEuNzE0LS4zNjYgNC43MjMtLjc5MiA3LjU3Ni0uMTM3LTEuNjUtMS40NjQtMy45OC0xLjcyMy01LjM5My0xLjcyNi0xLjAwNi0uMDAyLTEuODI1LS43Ny0xLjgyNS0xLjcxMnpcIixcbiAgICBmaWxsOiBcIiM3ODdEODVcIlxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdCb29rczsiLCJ2YXIgX3BhdGgsIF9wYXRoMjtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z0NvdXJzZXMocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogMjQsXG4gICAgaGVpZ2h0OiAyNCxcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xMiAxMi44OTJsLTYuMzI4LTIuNTQxdjEuODM2YzAgMi4wMDQgMi43MiAzLjUxNSA2LjMyOCAzLjUxNXM2LjMyOC0xLjUxIDYuMzI4LTMuNTE1VjEwLjM1TDEyIDEyLjg5MnpcIixcbiAgICBmaWxsOiBcIiM3NjUzRkNcIlxuICB9KSksIF9wYXRoMiB8fCAoX3BhdGgyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0yNCAxNi40MDVjMC0uOTE1LS41OS0xLjY4OC0xLjQwNi0xLjk4VjcuMTQzTDI0IDYuNTYyIDEyIDEuNzQ3IDAgNi41NjJsMTIgNC44MTUgOS4xODgtMy42N3Y2LjcxOWEyLjEwNiAyLjEwNiAwIDAwLTEuNDA3IDEuOThjMCAuODM4LjQ5NSAxLjU1NyAxLjIwNSAxLjg5N2wtMS4xNjggMy41MDUgMS4zMzMuNDQ1Ljc0LTIuMjE4Ljc0IDIuMjE4IDEuMzMzLS40NDUtMS4xNjktMy41MDVBMi4xMDYgMi4xMDYgMCAwMDI0IDE2LjQwNXpcIixcbiAgICBmaWxsOiBcIiM3NjUzRkNcIlxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdDb3Vyc2VzOyIsInZhciBfcGF0aDtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z1Byb2R1Y3RzKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDI0LFxuICAgIGhlaWdodDogMjMsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTUuMDkgNC4xNjhsLTguMTY4IDMuOTItMy4yNDctMS40OTcgOC4wMjQtMy43MTRhLjY5Ny42OTcgMCAwMS41ODUgMGwyLjgwNiAxLjI5MXpNMjAuMzE2IDYuNTlsLTguMzExIDMuODYtMy4xMTMtMS40MzctLjQ1LS4yMTQgOC4xNzctMy45Mi40NS4yMTQgMy4yNDcgMS40OTh6TTExLjMzOCAxMS41NjNsLS4wMDggOC4xMjMtNy45NjEtMy44OTVBLjY0OC42NDggMCAwMTMgMTUuMjE4VjcuNzAzbDMuMzczIDEuNTU4djIuNzRjMCAuMzUuMzA2LjY0MS42NzUuNjQxLjM3IDAgLjY3NS0uMjkuNjc1LS42NDJWOS44OTVsLjQ1LjIwNSAzLjE2NSAxLjQ2M3pNMjAuOTkxIDcuNzEybC04LjMwMyAzLjg0My0uMDA4IDguMTIyTDIxIDE1LjYwNGwtLjAwOS03Ljg5MnpcIixcbiAgICBmaWxsOiBcIiM3ODdEODVcIlxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdQcm9kdWN0czsiLCJ2YXIgX3BhdGg7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdTZXJ2aWNlcyhwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiAyNCxcbiAgICBoZWlnaHQ6IDI0LFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE5LjY1NCA4Ljc2MmE0Ljc4IDQuNzggMCAwMC4wODItLjg4N0MxOS43MzYgNS4xODcgMTcuNDkgMyAxNC43MjYgM2MtMS43NjMgMC0zLjM5Ny45MTQtNC4yOTUgMi4zNjctMS4yMTMtLjM4My0yLjQ1Ni0uMjE5LTMuNDgxLjQ2OFM1LjMxNCA3LjYxIDUuMjY0IDguNzk4QzMuOTE3IDkuNDIgMyAxMC43NDYgMyAxMi4yMDhjMCAuMjU0LjA2My41MDIuMTEyLjc0MkMzLjQ3MiAxNC43MTkgNS4wOCAxNiA2LjkzNCAxNmgxMS4xMzJDMjAuMjE1IDE2IDIyIDE0LjI5OSAyMiAxMi4yMDhjMC0xLjQ3OC0uOTMtMi44MDktMi4zNDYtMy40NDZ6XCIsXG4gICAgZmlsbDogXCIjNzg3RDg1XCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnU2VydmljZXM7IiwiaW1wb3J0IHsgU2lkZWJhclByb3BzIH0gZnJvbSBcIi4vU2lkZWJhci5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1NpZGViYXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIi4uL01lbnUvTWVudVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNpZGViYXIgPSAoeyAuLi5wcm9wcyB9OiBTaWRlYmFyUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgey4uLnByb3BzfT5cclxuXHRcdFx0PE1lbnU+PC9NZW51PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==