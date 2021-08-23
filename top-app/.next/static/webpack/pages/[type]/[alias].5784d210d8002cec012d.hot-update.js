webpackHotUpdate_N_E("pages/[type]/[alias]",{

/***/ "./components/Button/Button.tsx":
/*!**************************************!*\
  !*** ./components/Button/Button.tsx ***!
  \**************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button.module.css */ "./components/Button/Button.module.css");
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _arrow_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./arrow.svg */ "./components/Button/arrow.svg");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);




var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\Button\\Button.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Button = function Button(_ref) {
  _s();

  var _cn;

  var appearance = _ref.appearance,
      _ref$arrow = _ref.arrow,
      arrow = _ref$arrow === void 0 ? "none" : _ref$arrow,
      children = _ref.children,
      className = _ref.className,
      props = Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["appearance", "arrow", "children", "className"]);

  var scale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_6__["useMotionValue"])(1);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    scale.onChange(s);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].button, _objectSpread(_objectSpread({
    whileHover: {
      scale: 1.05
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button, className, (_cn = {}, Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cn, _Button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.primary, appearance == "primary"), Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cn, _Button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.ghost, appearance == "ghost"), _cn)),
    style: {
      scale: scale
    }
  }, props), {}, {
    children: [children, arrow != "none" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.arrow, Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _Button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.down, arrow == "down")),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_arrow_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 33
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }, _this);
};

_s(Button, "1JMPERDO4hjSEOrsOhBVCNLRjqo=", false, function () {
  return [framer_motion__WEBPACK_IMPORTED_MODULE_6__["useMotionValue"]];
});

_c = Button;

var _c;

$RefreshReg$(_c, "Button");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJCdXR0b24iLCJhcHBlYXJhbmNlIiwiYXJyb3ciLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInByb3BzIiwic2NhbGUiLCJ1c2VNb3Rpb25WYWx1ZSIsInVzZUVmZmVjdCIsIm9uQ2hhbmdlIiwicyIsImNuIiwic3R5bGVzIiwiYnV0dG9uIiwicHJpbWFyeSIsImdob3N0IiwiZG93biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQTZGO0FBQUE7O0FBQUE7O0FBQUEsTUFBMUZDLFVBQTBGLFFBQTFGQSxVQUEwRjtBQUFBLHdCQUE5RUMsS0FBOEU7QUFBQSxNQUE5RUEsS0FBOEUsMkJBQXRFLE1BQXNFO0FBQUEsTUFBOURDLFFBQThELFFBQTlEQSxRQUE4RDtBQUFBLE1BQXBEQyxTQUFvRCxRQUFwREEsU0FBb0Q7QUFBQSxNQUF0Q0MsS0FBc0M7O0FBQ2xILE1BQU1DLEtBQUssR0FBR0Msb0VBQWMsQ0FBQyxDQUFELENBQTVCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNmRixTQUFLLENBQUNHLFFBQU4sQ0FBZUMsQ0FBZjtBQUNBLEdBRlEsQ0FBVDtBQUlBLHNCQUNDLHFFQUFDLG9EQUFELENBQVEsTUFBUjtBQUNDLGNBQVUsRUFBRTtBQUFFSixXQUFLLEVBQUU7QUFBVCxLQURiO0FBRUMsYUFBUyxFQUFFSyxpREFBRSxDQUFDQyx5REFBTSxDQUFDQyxNQUFSLEVBQWdCVCxTQUFoQixtS0FDWFEseURBQU0sQ0FBQ0UsT0FESSxFQUNNYixVQUFVLElBQUksU0FEcEIseUpBRVhXLHlEQUFNLENBQUNHLEtBRkksRUFFSWQsVUFBVSxJQUFJLE9BRmxCLFFBRmQ7QUFNQyxTQUFLLEVBQUU7QUFBQ0ssV0FBSyxFQUFMQTtBQUFEO0FBTlIsS0FPY0QsS0FQZDtBQUFBLGVBU0VGLFFBVEYsRUFVV0QsS0FBSyxJQUFJLE1BQVQsaUJBQW1CO0FBQU0sZUFBUyxFQUFFUyxpREFBRSxDQUFDQyx5REFBTSxDQUFDVixLQUFSLHVKQUNsQ1UseURBQU0sQ0FBQ0ksSUFEMkIsRUFDcEJkLEtBQUssSUFBSSxNQURXLEVBQW5CO0FBQUEsNkJBRzVCLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFINEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVY5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWtCQSxDQXpCTTs7R0FBTUYsTTtVQUNFTyw0RDs7O0tBREZQLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3R5cGVdL1thbGlhc10uNTc4NGQyMTBkODAwMmNlYzAxMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvblByb3BzIH0gZnJvbSBcIi4vQnV0dG9uLnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQnV0dG9uLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEFycm93SWNvbiBmcm9tIFwiLi9hcnJvdy5zdmdcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IG1vdGlvbiwgdXNlTW90aW9uVmFsdWUgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSAoeyBhcHBlYXJhbmNlLCBhcnJvdyA9IFwibm9uZVwiLCBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBCdXR0b25Qcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRjb25zdCBzY2FsZSA9IHVzZU1vdGlvblZhbHVlKDEpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2NhbGUub25DaGFuZ2UocylcclxuXHR9KVxyXG5cdFxyXG5cdHJldHVybiAoXHJcblx0XHQ8bW90aW9uLmJ1dHRvblxyXG5cdFx0XHR3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjA1IH19XHJcblx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLmJ1dHRvbiwgY2xhc3NOYW1lLCB7XHJcblx0XHRcdFx0W3N0eWxlcy5wcmltYXJ5XTogYXBwZWFyYW5jZSA9PSBcInByaW1hcnlcIixcclxuXHRcdFx0XHRbc3R5bGVzLmdob3N0XTogYXBwZWFyYW5jZSA9PSBcImdob3N0XCIsXHJcblx0XHRcdH0pfVxyXG5cdFx0XHRzdHlsZT17e3NjYWxlfX1cclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG5cdFx0PlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIHthcnJvdyAhPSBcIm5vbmVcIiAmJiA8c3BhbiBjbGFzc05hbWU9e2NuKHN0eWxlcy5hcnJvdywge1xyXG4gICAgICAgICAgICAgICAgW3N0eWxlcy5kb3duXTogYXJyb3cgPT0gXCJkb3duXCJcclxuICAgICAgICAgICAgfSl9PiBcclxuXHRcdFx0XHQ8QXJyb3dJY29uPjwvQXJyb3dJY29uPlxyXG5cdFx0XHQ8L3NwYW4+fVxyXG5cdFx0PC9tb3Rpb24uYnV0dG9uPlxyXG5cdCk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=