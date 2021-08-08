webpackHotUpdate_N_E("pages/[type]",{

/***/ "./components/Search/Search.tsx":
/*!**************************************!*\
  !*** ./components/Search/Search.tsx ***!
  \**************************************/
/*! exports provided: Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Input/Input */ "./components/Input/Input.tsx");
/* harmony import */ var _Search_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Search.module.css */ "./components/Search/Search.module.css");
/* harmony import */ var _Search_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Search_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var _glass_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./glass.svg */ "./components/Search/glass.svg");



var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\components\\Search\\Search.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var Search = function Search(_ref) {
  _s();

  var children = _ref.children,
      className = _ref.className,
      props = Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children", "className"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      search = _useState[0],
      setSearch = _useState[1];

  var router;

  var goToSearch = function goToSearch() {};

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, _Search_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.search),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Input_Input__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      className: _Search_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.input,
      placeholder: "\u041F\u043E\u0438\u0441\u043A...",
      value: search,
      onChange: function onChange(e) {
        return setSearch(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      appearance: "primary",
      className: _Search_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
      onClick: function onClick() {},
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_glass_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 3
  }, _this);
};

_s(Search, "42GASUL8pX2/N6Oh5HTh0GvQEF0=");

_c = Search;

var _c;

$RefreshReg$(_c, "Search");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2gvU2VhcmNoLnRzeCJdLCJuYW1lcyI6WyJTZWFyY2giLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInByb3BzIiwidXNlU3RhdGUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJyb3V0ZXIiLCJnb1RvU2VhcmNoIiwiY24iLCJzdHlsZXMiLCJpbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWtFO0FBQUE7O0FBQUEsTUFBOURDLFFBQThELFFBQTlEQSxRQUE4RDtBQUFBLE1BQXBEQyxTQUFvRCxRQUFwREEsU0FBb0Q7QUFBQSxNQUF0Q0MsS0FBc0M7O0FBQUEsa0JBRTNEQyxzREFBUSxDQUFTLEVBQVQsQ0FGbUQ7QUFBQSxNQUVoRkMsTUFGZ0Y7QUFBQSxNQUV4RUMsU0FGd0U7O0FBR3ZGLE1BQU1DLE1BQU47O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTSxDQUV4QixDQUZEOztBQUlBLHNCQUNDO0FBQUssYUFBUyxFQUFFQyxpREFBRSxDQUFFUCxTQUFGLEVBQWFRLHlEQUFNLENBQUNMLE1BQXBCLENBQWxCO0FBQUEsNEJBQ0MscUVBQUMsa0RBQUQ7QUFDQyxlQUFTLEVBQUVLLHlEQUFNLENBQUNDLEtBRG5CO0FBRUMsaUJBQVcsRUFBQyxtQ0FGYjtBQUdDLFdBQUssRUFBRU4sTUFIUjtBQUlDLGNBQVEsRUFBRSxrQkFBQ08sQ0FBRDtBQUFBLGVBQU9OLFNBQVMsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBaEI7QUFBQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQU9DLHFFQUFDLHFEQUFEO0FBQ0MsZ0JBQVUsRUFBQyxTQURaO0FBRUMsZUFBUyxFQUFFSix5REFBTSxDQUFDSyxNQUZuQjtBQUdDLGFBQU8sRUFBRSxtQkFBTSxDQUFFLENBSGxCO0FBQUEsNkJBS0MscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWlCQSxDQTFCTTs7R0FBTWYsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bdHlwZV0uM2Q2NTgwZWRlNjRiNjMyNjJiMjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaFByb3BzIH0gZnJvbSBcIi4vU2VhcmNoLnByb3BzXCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4uL0lucHV0L0lucHV0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU2VhcmNoLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vQnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQgR2xhc3NJY29uIGZyb20gXCIuL2dsYXNzLnN2Z1wiXHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoID0gKHsgIGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnByb3BzIH06IFNlYXJjaFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cclxuXHRjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuXHRjb25zdCByb3V0ZXJcclxuXHJcblx0Y29uc3QgZ29Ub1NlYXJjaCA9ICgpID0+IHtcclxuXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NuKCBjbGFzc05hbWUsIHN0eWxlcy5zZWFyY2gpfT5cclxuXHRcdFx0PElucHV0XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcblx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQn9C+0LjRgdC6Li4uXCJcclxuXHRcdFx0XHR2YWx1ZT17c2VhcmNofVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0PjwvSW5wdXQ+XHJcblx0XHRcdDxCdXR0b24gXHJcblx0XHRcdFx0YXBwZWFyYW5jZT1cInByaW1hcnlcIlxyXG5cdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cclxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxHbGFzc0ljb24+PC9HbGFzc0ljb24+XHJcblx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9