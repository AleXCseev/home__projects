webpackHotUpdate_N_E("pages/[type]/[alias]",{

/***/ "./layout/Layout.tsx":
/*!***************************!*\
  !*** ./layout/Layout.tsx ***!
  \***************************/
/*! exports provided: withLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withLayout", function() { return withLayout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout.module.css */ "./layout/Layout.module.css");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header/Header */ "./layout/Header/Header.tsx");
/* harmony import */ var _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sidebar/Sidebar */ "./layout/Sidebar/Sidebar.tsx");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer/Footer */ "./layout/Footer/Footer.tsx");
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/app.context */ "./context/app.context.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components */ "./components/index.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\layout\\Layout.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children,
      props = Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["children"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isSkipLinkDisplayed = _useState[0],
      setIsSkipLinkDisplayed = _useState[1];

  var bodyRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);

  var skipContentAction = function skipContentAction(key) {
    if (key.code == "Space" || key.code == "Enter") {
      bodyRef.current;
    }

    setIsSkipLinkDisplayed(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      tabIndex: 1,
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.skipLink, Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.displayed, isSkipLinkDisplayed)),
      onFocus: function onFocus() {
        return setIsSkipLinkDisplayed(true);
      },
      onKeyDown: skipContentAction,
      children: "\u0421\u0440\u0430\u0437\u0443 \u043A \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044E"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header_Header__WEBPACK_IMPORTED_MODULE_5__["Header"], {
      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_6__["Sidebar"], {
      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.sidebar
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.body,
      ref: bodyRef,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__["Footer"], {
      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_9__["Up"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 3
  }, _this);
};

_s(Layout, "TF1Jfq3MrcCD/TpGfMxZeicV9Dg=");

_c = Layout;
var withLayout = function withLayout(Component) {
  return function withLayoutnComponent(props) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_app_context__WEBPACK_IMPORTED_MODULE_8__["AppContextProvider"], {
      menu: props.menu,
      firstCategory: props.firstCategory,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Layout, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }, this);
  };
};

var _c;

$RefreshReg$(_c, "Layout");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L0xheW91dC50c3giXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNTa2lwTGlua0Rpc3BsYXllZCIsInNldElzU2tpcExpbmtEaXNwbGF5ZWQiLCJib2R5UmVmIiwidXNlUmVmIiwic2tpcENvbnRlbnRBY3Rpb24iLCJrZXkiLCJjb2RlIiwiY3VycmVudCIsInN0eWxlcyIsIndyYXBwZXIiLCJjbiIsInNraXBMaW5rIiwiZGlzcGxheWVkIiwiaGVhZGVyIiwic2lkZWJhciIsImJvZHkiLCJmb290ZXIiLCJ3aXRoTGF5b3V0IiwiQ29tcG9uZW50Iiwid2l0aExheW91dG5Db21wb25lbnQiLCJtZW51IiwiZmlyc3RDYXRlZ29yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFzRDtBQUFBOztBQUFBLE1BQW5EQyxRQUFtRCxRQUFuREEsUUFBbUQ7QUFBQSxNQUF0Q0MsS0FBc0M7O0FBQUEsa0JBQ2RDLHNEQUFRLENBQVUsS0FBVixDQURNO0FBQUEsTUFDN0RDLG1CQUQ2RDtBQUFBLE1BQ3hDQyxzQkFEd0M7O0FBRXBFLE1BQU1DLE9BQU8sR0FBR0Msb0RBQU0sQ0FBaUIsSUFBakIsQ0FBdEI7O0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxHQUFELEVBQXVCO0FBQ2hELFFBQUlBLEdBQUcsQ0FBQ0MsSUFBSixJQUFZLE9BQVosSUFBdUJELEdBQUcsQ0FBQ0MsSUFBSixJQUFZLE9BQXZDLEVBQWdEO0FBQy9DSixhQUFPLENBQUNLLE9BQVI7QUFDQTs7QUFDRE4sMEJBQXNCLENBQUMsS0FBRCxDQUF0QjtBQUNBLEdBTEQ7O0FBT0Esc0JBQ0M7QUFBSyxhQUFTLEVBQUVPLHlEQUFNLENBQUNDLE9BQXZCO0FBQUEsNEJBQ0M7QUFDQyxjQUFRLEVBQUUsQ0FEWDtBQUVDLGVBQVMsRUFBRUMsa0RBQUUsQ0FBQ0YseURBQU0sQ0FBQ0csUUFBUix1SkFDWEgseURBQU0sQ0FBQ0ksU0FESSxFQUNRWixtQkFEUixFQUZkO0FBS0MsYUFBTyxFQUFFO0FBQUEsZUFBTUMsc0JBQXNCLENBQUMsSUFBRCxDQUE1QjtBQUFBLE9BTFY7QUFNQyxlQUFTLEVBQUVHLGlCQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFXQyxxRUFBQyxxREFBRDtBQUFRLGVBQVMsRUFBRUkseURBQU0sQ0FBQ0s7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhELGVBWUMscUVBQUMsd0RBQUQ7QUFBUyxlQUFTLEVBQUVMLHlEQUFNLENBQUNNO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRCxlQWFDO0FBQUssZUFBUyxFQUFFTix5REFBTSxDQUFDTyxJQUF2QjtBQUE2QixTQUFHLEVBQUViLE9BQWxDO0FBQUEsZ0JBQTRDTDtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkQsZUFjQyxxRUFBQyxxREFBRDtBQUFRLGVBQVMsRUFBRVcseURBQU0sQ0FBQ1E7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRELGVBZUMscUVBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBbUJBLENBOUJEOztHQUFNcEIsTTs7S0FBQUEsTTtBQWdDQyxJQUFNcUIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBa0RDLFNBQWxELEVBQXNGO0FBQy9HLFNBQU8sU0FBU0Msb0JBQVQsQ0FBOEJyQixLQUE5QixFQUFxRDtBQUMzRCx3QkFDQyxxRUFBQyx1RUFBRDtBQUFvQixVQUFJLEVBQUVBLEtBQUssQ0FBQ3NCLElBQWhDO0FBQXNDLG1CQUFhLEVBQUV0QixLQUFLLENBQUN1QixhQUEzRDtBQUFBLDZCQUNDLHFFQUFDLE1BQUQ7QUFBQSwrQkFDQyxxRUFBQyxTQUFELG9CQUFldkIsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERDtBQU9BLEdBUkQ7QUFTQSxDQVZNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1t0eXBlXS9bYWxpYXNdLjE3NzVhMTkxZDU2MDFhZTExNGZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXRQcm9wcyB9IGZyb20gXCIuL0xheW91dC5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xheW91dC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCwgdXNlU3RhdGUsIEtleWJvYXJkRXZlbnQsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiLi9TaWRlYmFyL1NpZGViYXJcIjtcclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4vRm9vdGVyL0Zvb3RlclwiO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0UHJvdmlkZXIsIElBcHBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvYXBwLmNvbnRleHRcIjtcclxuaW1wb3J0IHsgVXAgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9OiBMYXlvdXRQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRjb25zdCBbaXNTa2lwTGlua0Rpc3BsYXllZCwgc2V0SXNTa2lwTGlua0Rpc3BsYXllZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSkgXHJcblx0Y29uc3QgYm9keVJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcblxyXG5cdGNvbnN0IHNraXBDb250ZW50QWN0aW9uID0gKGtleTpLZXlib2FyZEV2ZW50KSA9PiB7XHJcblx0XHRpZiAoa2V5LmNvZGUgPT0gXCJTcGFjZVwiIHx8IGtleS5jb2RlID09IFwiRW50ZXJcIikge1xyXG5cdFx0XHRib2R5UmVmLmN1cnJlbnRcclxuXHRcdH1cclxuXHRcdHNldElzU2tpcExpbmtEaXNwbGF5ZWQoZmFsc2UpXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuXHRcdFx0PGEgXHJcblx0XHRcdFx0dGFiSW5kZXg9ezF9IFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLnNraXBMaW5rLCB7XHJcblx0XHRcdFx0XHRbc3R5bGVzLmRpc3BsYXllZF06IGlzU2tpcExpbmtEaXNwbGF5ZWRcclxuXHRcdFx0fSl9XHJcblx0XHRcdFx0b25Gb2N1cz17KCkgPT4gc2V0SXNTa2lwTGlua0Rpc3BsYXllZCh0cnVlKX1cclxuXHRcdFx0XHRvbktleURvd249e3NraXBDb250ZW50QWN0aW9ufVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx00KHRgNCw0LfRgyDQuiDRgdC+0LTQtdGA0LbQsNC90LjRjlxyXG5cdFx0XHQ8L2E+XHJcblx0XHRcdDxIZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT48L0hlYWRlcj5cclxuXHRcdFx0PFNpZGViYXIgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcn0+PC9TaWRlYmFyPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9IHJlZj17Ym9keVJlZn0+e2NoaWxkcmVufTwvZGl2PlxyXG5cdFx0XHQ8Rm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+PC9Gb290ZXI+XHJcblx0XHRcdDxVcD48L1VwPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3aXRoTGF5b3V0ID0gPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiAmIElBcHBDb250ZXh0PihDb21wb25lbnQ6IEZ1bmN0aW9uQ29tcG9uZW50PFQ+KSA9PiB7XHJcblx0cmV0dXJuIGZ1bmN0aW9uIHdpdGhMYXlvdXRuQ29tcG9uZW50KHByb3BzOiBUKTogSlNYLkVsZW1lbnQge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PEFwcENvbnRleHRQcm92aWRlciBtZW51PXtwcm9wcy5tZW51fSBmaXJzdENhdGVnb3J5PXtwcm9wcy5maXJzdENhdGVnb3J5fT5cclxuXHRcdFx0XHQ8TGF5b3V0PlxyXG5cdFx0XHRcdFx0PENvbXBvbmVudCB7Li4ucHJvcHN9PjwvQ29tcG9uZW50PlxyXG5cdFx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0XHQ8L0FwcENvbnRleHRQcm92aWRlcj5cclxuXHRcdCk7XHJcblx0fTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==