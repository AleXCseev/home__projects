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

  var bodyRef = useRef(null);

  var skipContentAction = function skipContentAction(key) {
    if (key.code == "Space" || key.code == "Enter") {}

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
      ref: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L0xheW91dC50c3giXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNTa2lwTGlua0Rpc3BsYXllZCIsInNldElzU2tpcExpbmtEaXNwbGF5ZWQiLCJib2R5UmVmIiwidXNlUmVmIiwic2tpcENvbnRlbnRBY3Rpb24iLCJrZXkiLCJjb2RlIiwic3R5bGVzIiwid3JhcHBlciIsImNuIiwic2tpcExpbmsiLCJkaXNwbGF5ZWQiLCJoZWFkZXIiLCJzaWRlYmFyIiwiYm9keSIsImZvb3RlciIsIndpdGhMYXlvdXQiLCJDb21wb25lbnQiLCJ3aXRoTGF5b3V0bkNvbXBvbmVudCIsIm1lbnUiLCJmaXJzdENhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXNEO0FBQUE7O0FBQUEsTUFBbkRDLFFBQW1ELFFBQW5EQSxRQUFtRDtBQUFBLE1BQXRDQyxLQUFzQzs7QUFBQSxrQkFDZEMsc0RBQVEsQ0FBVSxLQUFWLENBRE07QUFBQSxNQUM3REMsbUJBRDZEO0FBQUEsTUFDeENDLHNCQUR3Qzs7QUFFcEUsTUFBTUMsT0FBTyxHQUFHQyxNQUFNLENBQUMsSUFBRCxDQUF0Qjs7QUFFQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEdBQUQsRUFBdUI7QUFDaEQsUUFBSUEsR0FBRyxDQUFDQyxJQUFKLElBQVksT0FBWixJQUF1QkQsR0FBRyxDQUFDQyxJQUFKLElBQVksT0FBdkMsRUFBZ0QsQ0FFL0M7O0FBQ0RMLDBCQUFzQixDQUFDLEtBQUQsQ0FBdEI7QUFDQSxHQUxEOztBQU9BLHNCQUNDO0FBQUssYUFBUyxFQUFFTSx5REFBTSxDQUFDQyxPQUF2QjtBQUFBLDRCQUNDO0FBQ0MsY0FBUSxFQUFFLENBRFg7QUFFQyxlQUFTLEVBQUVDLGtEQUFFLENBQUNGLHlEQUFNLENBQUNHLFFBQVIsdUpBQ1hILHlEQUFNLENBQUNJLFNBREksRUFDUVgsbUJBRFIsRUFGZDtBQUtDLGFBQU8sRUFBRTtBQUFBLGVBQU1DLHNCQUFzQixDQUFDLElBQUQsQ0FBNUI7QUFBQSxPQUxWO0FBTUMsZUFBUyxFQUFFRyxpQkFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBV0MscUVBQUMscURBQUQ7QUFBUSxlQUFTLEVBQUVHLHlEQUFNLENBQUNLO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYRCxlQVlDLHFFQUFDLHdEQUFEO0FBQVMsZUFBUyxFQUFFTCx5REFBTSxDQUFDTTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkQsZUFhQztBQUFLLGVBQVMsRUFBRU4seURBQU0sQ0FBQ08sSUFBdkI7QUFBNkIsU0FBRyxNQUFoQztBQUFBLGdCQUFrQ2pCO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRCxlQWNDLHFFQUFDLHFEQUFEO0FBQVEsZUFBUyxFQUFFVSx5REFBTSxDQUFDUTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEQsZUFlQyxxRUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFtQkEsQ0E5QkQ7O0dBQU1uQixNOztLQUFBQSxNO0FBZ0NDLElBQU1vQixVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFrREMsU0FBbEQsRUFBc0Y7QUFDL0csU0FBTyxTQUFTQyxvQkFBVCxDQUE4QnBCLEtBQTlCLEVBQXFEO0FBQzNELHdCQUNDLHFFQUFDLHVFQUFEO0FBQW9CLFVBQUksRUFBRUEsS0FBSyxDQUFDcUIsSUFBaEM7QUFBc0MsbUJBQWEsRUFBRXJCLEtBQUssQ0FBQ3NCLGFBQTNEO0FBQUEsNkJBQ0MscUVBQUMsTUFBRDtBQUFBLCtCQUNDLHFFQUFDLFNBQUQsb0JBQWV0QixLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUREO0FBT0EsR0FSRDtBQVNBLENBVk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3R5cGVdL1thbGlhc10uNzNiNzcyY2JkZjM3ZjBlY2JiMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dFByb3BzIH0gZnJvbSBcIi4vTGF5b3V0LnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTGF5b3V0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VTdGF0ZSwgS2V5Ym9hcmRFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiLi9TaWRlYmFyL1NpZGViYXJcIjtcclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4vRm9vdGVyL0Zvb3RlclwiO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0UHJvdmlkZXIsIElBcHBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvYXBwLmNvbnRleHRcIjtcclxuaW1wb3J0IHsgVXAgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9OiBMYXlvdXRQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRjb25zdCBbaXNTa2lwTGlua0Rpc3BsYXllZCwgc2V0SXNTa2lwTGlua0Rpc3BsYXllZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSkgXHJcblx0Y29uc3QgYm9keVJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcblx0Y29uc3Qgc2tpcENvbnRlbnRBY3Rpb24gPSAoa2V5OktleWJvYXJkRXZlbnQpID0+IHtcclxuXHRcdGlmIChrZXkuY29kZSA9PSBcIlNwYWNlXCIgfHwga2V5LmNvZGUgPT0gXCJFbnRlclwiKSB7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0c2V0SXNTa2lwTGlua0Rpc3BsYXllZChmYWxzZSlcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG5cdFx0XHQ8YSBcclxuXHRcdFx0XHR0YWJJbmRleD17MX0gXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZXMuc2tpcExpbmssIHtcclxuXHRcdFx0XHRcdFtzdHlsZXMuZGlzcGxheWVkXTogaXNTa2lwTGlua0Rpc3BsYXllZFxyXG5cdFx0XHR9KX1cclxuXHRcdFx0XHRvbkZvY3VzPXsoKSA9PiBzZXRJc1NraXBMaW5rRGlzcGxheWVkKHRydWUpfVxyXG5cdFx0XHRcdG9uS2V5RG93bj17c2tpcENvbnRlbnRBY3Rpb259XHJcblx0XHRcdD5cclxuXHRcdFx0XHTQodGA0LDQt9GDINC6INGB0L7QtNC10YDQttCw0L3QuNGOXHJcblx0XHRcdDwvYT5cclxuXHRcdFx0PEhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PjwvSGVhZGVyPlxyXG5cdFx0XHQ8U2lkZWJhciBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyfT48L1NpZGViYXI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0gcmVmPntjaGlsZHJlbn08L2Rpdj5cclxuXHRcdFx0PEZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PjwvRm9vdGVyPlxyXG5cdFx0XHQ8VXA+PC9VcD5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd2l0aExheW91dCA9IDxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gJiBJQXBwQ29udGV4dD4oQ29tcG9uZW50OiBGdW5jdGlvbkNvbXBvbmVudDxUPikgPT4ge1xyXG5cdHJldHVybiBmdW5jdGlvbiB3aXRoTGF5b3V0bkNvbXBvbmVudChwcm9wczogVCk6IEpTWC5FbGVtZW50IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxBcHBDb250ZXh0UHJvdmlkZXIgbWVudT17cHJvcHMubWVudX0gZmlyc3RDYXRlZ29yeT17cHJvcHMuZmlyc3RDYXRlZ29yeX0+XHJcblx0XHRcdFx0PExheW91dD5cclxuXHRcdFx0XHRcdDxDb21wb25lbnQgey4uLnByb3BzfT48L0NvbXBvbmVudD5cclxuXHRcdFx0XHQ8L0xheW91dD5cclxuXHRcdFx0PC9BcHBDb250ZXh0UHJvdmlkZXI+XHJcblx0XHQpO1xyXG5cdH07XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=