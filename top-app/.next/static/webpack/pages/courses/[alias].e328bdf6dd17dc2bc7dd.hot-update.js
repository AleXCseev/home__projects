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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L01lbnUvTWVudS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dC9NZW51L2ljb25zL2Jvb2tzLnN2ZyIsIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L01lbnUvaWNvbnMvY291cnNlcy5zdmciLCJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dC9NZW51L2ljb25zL3Byb2R1Y3RzLnN2ZyIsIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L01lbnUvaWNvbnMvc2VydmljZXMuc3ZnIiwid2VicGFjazovL19OX0UvLi9sYXlvdXQvU2lkZWJhci9TaWRlYmFyLnRzeCJdLCJuYW1lcyI6WyJmaXJzdExldmVsTWVudSIsInJvdXRlIiwibmFtZSIsImljb24iLCJpZCIsIlRvcExldmVsQ2F0ZWdvcnkiLCJDb3Vyc2VzIiwiU2VydmljZXMiLCJCb29rcyIsIlByb2R1Y3RzIiwiTWVudSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwibWVudSIsInNldE1lbnUiLCJmaXJzdENhdGVnb3J5IiwiYnVpbCIsIm1hcCIsIm0iLCJfaWQiLCJzZWNvbmRDYXRlZ29yeSIsIlNpZGViYXIiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsY0FBb0MsR0FBRyxDQUN6QztBQUFFQyxPQUFLLEVBQUUsU0FBVDtBQUFvQkMsTUFBSSxFQUFFLE9BQTFCO0FBQW1DQyxNQUFJLGVBQUUscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF6QztBQUFzRUMsSUFBRSxFQUFFQyw4RUFBZ0IsQ0FBQ0M7QUFBM0YsQ0FEeUMsRUFFekM7QUFBRUwsT0FBSyxFQUFFLFVBQVQ7QUFBcUJDLE1BQUksRUFBRSxTQUEzQjtBQUFzQ0MsTUFBSSxlQUFFLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBNUM7QUFBMkVD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Ryx3Q0FBd0M7O0FBRTVSOztBQUUvQjtBQUNBLHNCQUFzQixtREFBbUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLHlDQUF5QyxtREFBbUI7QUFDL0Q7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFZSwwRUFBVyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2YxQjtBQUNBO0FBRU8sSUFBTVcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBNkM7QUFBQSxNQUF2Q0MsS0FBdUM7O0FBQ25FLHNCQUNDLDRHQUFTQSxLQUFUO0FBQUEsMkJBQ0MscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQUtBLENBTk07S0FBTUQsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb3Vyc2VzL1thbGlhc10uZTMyOGJkZjZkZDE3ZGMyYmM3ZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvYXBwLmNvbnRleHRcIlxyXG5pbXBvcnQgeyBGaXJzdExldmVsTWVudUl0ZW0gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9tZW51LmludGVmYWNlXCJcclxuaW1wb3J0IENvdXJzZXNJY29uIGZyb20gXCIuL2ljb25zL2NvdXJzZXMuc3ZnXCJcclxuaW1wb3J0IFNlcnZpY2VzSWNvbiBmcm9tIFwiLi9pY29ucy9zZXJ2aWNlcy5zdmdcIlxyXG5pbXBvcnQgQm9va3NJY29uIGZyb20gXCIuL2ljb25zL2Jvb2tzLnN2Z1wiXHJcbmltcG9ydCBQcm9kdWN0c0ljb24gZnJvbSBcIi4vaWNvbnMvcHJvZHVjdHMuc3ZnXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9NZW51Lm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyBUb3BMZXZlbENhdGVnb3J5IH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvdG9wcGFnZS5pbnRlcmZhY2VcIlxyXG5cclxuY29uc3QgZmlyc3RMZXZlbE1lbnU6IEZpcnN0TGV2ZWxNZW51SXRlbVtdID0gW1xyXG4gICAgeyByb3V0ZTogXCJjb3Vyc2VzXCIsIG5hbWU6IFwi0JrRg9GA0YHRi1wiLCBpY29uOiA8Q291cnNlc0ljb24+PC9Db3Vyc2VzSWNvbj4sIGlkOiBUb3BMZXZlbENhdGVnb3J5LkNvdXJzZXMgfSxcclxuICAgIHsgcm91dGU6IFwic2VydmljZXNcIiwgbmFtZTogXCLQodC10YDQstC40YHRi1wiLCBpY29uOiA8U2VydmljZXNJY29uPjwvU2VydmljZXNJY29uPiwgaWQ6IFRvcExldmVsQ2F0ZWdvcnkuU2VydmljZXMgfSxcclxuICAgIHsgcm91dGU6IFwiYm9va3NcIiwgbmFtZTogXCLQmtC90LjQs9C4XCIsIGljb246IDxCb29rc0ljb24+PC9Cb29rc0ljb24+LCBpZDogVG9wTGV2ZWxDYXRlZ29yeS5Cb29rcyB9LFxyXG4gICAgeyByb3V0ZTogXCJwcm9kdWN0c1wiLCBuYW1lOiBcItCf0YDQvtC00YPQutGC0YtcIiwgaWNvbjogPFByb2R1Y3RzSWNvbj48L1Byb2R1Y3RzSWNvbj4sIGlkOiBUb3BMZXZlbENhdGVnb3J5LlByb2R1Y3RzIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHJcbiAgICBjb25zdCB7IG1lbnUsIHNldE1lbnUsIGZpcnN0Q2F0ZWdvcnkgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dClcclxuXHJcbiAgICBjb25zdCBidWlsXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7bWVudS5tYXAoKG0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXttLl9pZC5zZWNvbmRDYXRlZ29yeX0+e20uX2lkLnNlY29uZENhdGVnb3J5fTwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxufSIsInZhciBfcGF0aCwgX3BhdGgyO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnQm9va3MocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogMjQsXG4gICAgaGVpZ2h0OiAyMyxcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk01LjA2IDMuNzVoLS4wMDJhLjczLjczIDAgMDAtLjUwMi4xOTUuNjQ4LjY0OCAwIDAwLS4yMS40NzZ2MTAuMDZjMCAuMzY5LjMyMS42Ny43MTYuNjcgMS42NjYuMDA0IDQuNDU3LjMzIDYuMzgyIDIuMjE4VjYuODQxYS42MTMuNjEzIDAgMDAtLjA5OC0uMzRDOS43NjYgNC4xMTcgNi43MyAzLjc1NCA1LjA2IDMuNzV6TTE5LjY1NCAxNC40OFY0LjQyYzAtLjE4LS4wNzQtLjM0OS0uMjEtLjQ3NmEuNzMuNzMgMCAwMC0uNTAyLS4xOTRoLS4wMDFjLTEuNjcuMDAzLTQuNzA3LjM2Ni02LjI4NyAyLjc1MmEuNjEzLjYxMyAwIDAwLS4wOTguMzR2MTAuNTI3YzEuOTI1LTEuODg4IDQuNzE2LTIuMjE0IDYuMzgyLTIuMjE3LjM5NS0uMDAyLjcxNi0uMzAyLjcxNi0uNjcxelwiLFxuICAgIGZpbGw6IFwiIzc4N0Q4NVwiXG4gIH0pKSwgX3BhdGgyIHx8IChfcGF0aDIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTIxLjI4NSA2LjA3aC0uNTJ2OC40MWMwIC45NDMtLjgxOCAxLjcxLTEuODI1IDEuNzEzLTEuNDEzLjAwMy0zLjc0Mi4yNjItNS4zOTIgMS43MjYgMi44NTMtLjY1NSA1Ljg2Mi0uMjI5IDcuNTc2LjEzN2EuNzUxLjc1MSAwIDAwLjYwNy0uMTMuNjUyLjY1MiAwIDAwLjI2OS0uNTIzVjYuNzRjMC0uMzctLjMyMS0uNjcxLS43MTUtLjY3MXpNMy4yMzQgMTQuNDhWNi4wN2gtLjUxOGMtLjM5NSAwLS43MTYuMy0uNzE2LjY3djEwLjY2MmMwIC4yMDYuMDk4LjM5Ny4yNjkuNTI0YS43NS43NSAwIDAwLjYwNy4xM2MxLjcxNC0uMzY2IDQuNzIzLS43OTIgNy41NzYtLjEzNy0xLjY1LTEuNDY0LTMuOTgtMS43MjMtNS4zOTMtMS43MjYtMS4wMDYtLjAwMi0xLjgyNS0uNzctMS44MjUtMS43MTJ6XCIsXG4gICAgZmlsbDogXCIjNzg3RDg1XCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQm9va3M7IiwidmFyIF9wYXRoLCBfcGF0aDI7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdDb3Vyc2VzKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDI0LFxuICAgIGhlaWdodDogMjQsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTIgMTIuODkybC02LjMyOC0yLjU0MXYxLjgzNmMwIDIuMDA0IDIuNzIgMy41MTUgNi4zMjggMy41MTVzNi4zMjgtMS41MSA2LjMyOC0zLjUxNVYxMC4zNUwxMiAxMi44OTJ6XCIsXG4gICAgZmlsbDogXCIjNzY1M0ZDXCJcbiAgfSkpLCBfcGF0aDIgfHwgKF9wYXRoMiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMjQgMTYuNDA1YzAtLjkxNS0uNTktMS42ODgtMS40MDYtMS45OFY3LjE0M0wyNCA2LjU2MiAxMiAxLjc0NyAwIDYuNTYybDEyIDQuODE1IDkuMTg4LTMuNjd2Ni43MTlhMi4xMDYgMi4xMDYgMCAwMC0xLjQwNyAxLjk4YzAgLjgzOC40OTUgMS41NTcgMS4yMDUgMS44OTdsLTEuMTY4IDMuNTA1IDEuMzMzLjQ0NS43NC0yLjIxOC43NCAyLjIxOCAxLjMzMy0uNDQ1LTEuMTY5LTMuNTA1QTIuMTA2IDIuMTA2IDAgMDAyNCAxNi40MDV6XCIsXG4gICAgZmlsbDogXCIjNzY1M0ZDXCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQ291cnNlczsiLCJ2YXIgX3BhdGg7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdQcm9kdWN0cyhwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiAyNCxcbiAgICBoZWlnaHQ6IDIzLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE1LjA5IDQuMTY4bC04LjE2OCAzLjkyLTMuMjQ3LTEuNDk3IDguMDI0LTMuNzE0YS42OTcuNjk3IDAgMDEuNTg1IDBsMi44MDYgMS4yOTF6TTIwLjMxNiA2LjU5bC04LjMxMSAzLjg2LTMuMTEzLTEuNDM3LS40NS0uMjE0IDguMTc3LTMuOTIuNDUuMjE0IDMuMjQ3IDEuNDk4ek0xMS4zMzggMTEuNTYzbC0uMDA4IDguMTIzLTcuOTYxLTMuODk1QS42NDguNjQ4IDAgMDEzIDE1LjIxOFY3LjcwM2wzLjM3MyAxLjU1OHYyLjc0YzAgLjM1LjMwNi42NDEuNjc1LjY0MS4zNyAwIC42NzUtLjI5LjY3NS0uNjQyVjkuODk1bC40NS4yMDUgMy4xNjUgMS40NjN6TTIwLjk5MSA3LjcxMmwtOC4zMDMgMy44NDMtLjAwOCA4LjEyMkwyMSAxNS42MDRsLS4wMDktNy44OTJ6XCIsXG4gICAgZmlsbDogXCIjNzg3RDg1XCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnUHJvZHVjdHM7IiwidmFyIF9wYXRoO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnU2VydmljZXMocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogMjQsXG4gICAgaGVpZ2h0OiAyNCxcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xOS42NTQgOC43NjJhNC43OCA0Ljc4IDAgMDAuMDgyLS44ODdDMTkuNzM2IDUuMTg3IDE3LjQ5IDMgMTQuNzI2IDNjLTEuNzYzIDAtMy4zOTcuOTE0LTQuMjk1IDIuMzY3LTEuMjEzLS4zODMtMi40NTYtLjIxOS0zLjQ4MS40NjhTNS4zMTQgNy42MSA1LjI2NCA4Ljc5OEMzLjkxNyA5LjQyIDMgMTAuNzQ2IDMgMTIuMjA4YzAgLjI1NC4wNjMuNTAyLjExMi43NDJDMy40NzIgMTQuNzE5IDUuMDggMTYgNi45MzQgMTZoMTEuMTMyQzIwLjIxNSAxNiAyMiAxNC4yOTkgMjIgMTIuMjA4YzAtMS40NzgtLjkzLTIuODA5LTIuMzQ2LTMuNDQ2elwiLFxuICAgIGZpbGw6IFwiIzc4N0Q4NVwiXG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1NlcnZpY2VzOyIsImltcG9ydCB7IFNpZGViYXJQcm9wcyB9IGZyb20gXCIuL1NpZGViYXIucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9TaWRlYmFyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuLi9NZW51L01lbnVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTaWRlYmFyID0gKHsgLi4ucHJvcHMgfTogU2lkZWJhclByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IHsuLi5wcm9wc30+XHJcblx0XHRcdDxNZW51PjwvTWVudT5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=