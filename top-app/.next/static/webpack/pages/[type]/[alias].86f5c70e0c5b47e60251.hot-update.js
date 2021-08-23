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
      ref: bo,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L0xheW91dC50c3giXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNTa2lwTGlua0Rpc3BsYXllZCIsInNldElzU2tpcExpbmtEaXNwbGF5ZWQiLCJib2R5UmVmIiwidXNlUmVmIiwic2tpcENvbnRlbnRBY3Rpb24iLCJrZXkiLCJjb2RlIiwic3R5bGVzIiwid3JhcHBlciIsImNuIiwic2tpcExpbmsiLCJkaXNwbGF5ZWQiLCJoZWFkZXIiLCJzaWRlYmFyIiwiYm9keSIsImJvIiwiZm9vdGVyIiwid2l0aExheW91dCIsIkNvbXBvbmVudCIsIndpdGhMYXlvdXRuQ29tcG9uZW50IiwibWVudSIsImZpcnN0Q2F0ZWdvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBc0Q7QUFBQTs7QUFBQSxNQUFuREMsUUFBbUQsUUFBbkRBLFFBQW1EO0FBQUEsTUFBdENDLEtBQXNDOztBQUFBLGtCQUNkQyxzREFBUSxDQUFVLEtBQVYsQ0FETTtBQUFBLE1BQzdEQyxtQkFENkQ7QUFBQSxNQUN4Q0Msc0JBRHdDOztBQUVwRSxNQUFNQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQyxJQUFELENBQXRCOztBQUVBLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsR0FBRCxFQUF1QjtBQUNoRCxRQUFJQSxHQUFHLENBQUNDLElBQUosSUFBWSxPQUFaLElBQXVCRCxHQUFHLENBQUNDLElBQUosSUFBWSxPQUF2QyxFQUFnRCxDQUUvQzs7QUFDREwsMEJBQXNCLENBQUMsS0FBRCxDQUF0QjtBQUNBLEdBTEQ7O0FBT0Esc0JBQ0M7QUFBSyxhQUFTLEVBQUVNLHlEQUFNLENBQUNDLE9BQXZCO0FBQUEsNEJBQ0M7QUFDQyxjQUFRLEVBQUUsQ0FEWDtBQUVDLGVBQVMsRUFBRUMsa0RBQUUsQ0FBQ0YseURBQU0sQ0FBQ0csUUFBUix1SkFDWEgseURBQU0sQ0FBQ0ksU0FESSxFQUNRWCxtQkFEUixFQUZkO0FBS0MsYUFBTyxFQUFFO0FBQUEsZUFBTUMsc0JBQXNCLENBQUMsSUFBRCxDQUE1QjtBQUFBLE9BTFY7QUFNQyxlQUFTLEVBQUVHLGlCQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFXQyxxRUFBQyxxREFBRDtBQUFRLGVBQVMsRUFBRUcseURBQU0sQ0FBQ0s7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhELGVBWUMscUVBQUMsd0RBQUQ7QUFBUyxlQUFTLEVBQUVMLHlEQUFNLENBQUNNO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRCxlQWFDO0FBQUssZUFBUyxFQUFFTix5REFBTSxDQUFDTyxJQUF2QjtBQUE2QixTQUFHLEVBQUVDLEVBQWxDO0FBQUEsZ0JBQXVDbEI7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJELGVBY0MscUVBQUMscURBQUQ7QUFBUSxlQUFTLEVBQUVVLHlEQUFNLENBQUNTO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkRCxlQWVDLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQW1CQSxDQTlCRDs7R0FBTXBCLE07O0tBQUFBLE07QUFnQ0MsSUFBTXFCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQWtEQyxTQUFsRCxFQUFzRjtBQUMvRyxTQUFPLFNBQVNDLG9CQUFULENBQThCckIsS0FBOUIsRUFBcUQ7QUFDM0Qsd0JBQ0MscUVBQUMsdUVBQUQ7QUFBb0IsVUFBSSxFQUFFQSxLQUFLLENBQUNzQixJQUFoQztBQUFzQyxtQkFBYSxFQUFFdEIsS0FBSyxDQUFDdUIsYUFBM0Q7QUFBQSw2QkFDQyxxRUFBQyxNQUFEO0FBQUEsK0JBQ0MscUVBQUMsU0FBRCxvQkFBZXZCLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFPQSxHQVJEO0FBU0EsQ0FWTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bdHlwZV0vW2FsaWFzXS44NmY1YzcwZTBjNWI0N2U2MDI1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0UHJvcHMgfSBmcm9tIFwiLi9MYXlvdXQucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9MYXlvdXQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQsIHVzZVN0YXRlLCBLZXlib2FyZEV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL0hlYWRlci9IZWFkZXJcIjtcclxuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gXCIuL1NpZGViYXIvU2lkZWJhclwiO1xyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi9Gb290ZXIvRm9vdGVyXCI7XHJcbmltcG9ydCB7IEFwcENvbnRleHRQcm92aWRlciwgSUFwcENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9hcHAuY29udGV4dFwiO1xyXG5pbXBvcnQgeyBVcCB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH06IExheW91dFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IFtpc1NraXBMaW5rRGlzcGxheWVkLCBzZXRJc1NraXBMaW5rRGlzcGxheWVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKSBcclxuXHRjb25zdCBib2R5UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuXHRjb25zdCBza2lwQ29udGVudEFjdGlvbiA9IChrZXk6S2V5Ym9hcmRFdmVudCkgPT4ge1xyXG5cdFx0aWYgKGtleS5jb2RlID09IFwiU3BhY2VcIiB8fCBrZXkuY29kZSA9PSBcIkVudGVyXCIpIHtcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRzZXRJc1NraXBMaW5rRGlzcGxheWVkKGZhbHNlKVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcblx0XHRcdDxhIFxyXG5cdFx0XHRcdHRhYkluZGV4PXsxfSBcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlcy5za2lwTGluaywge1xyXG5cdFx0XHRcdFx0W3N0eWxlcy5kaXNwbGF5ZWRdOiBpc1NraXBMaW5rRGlzcGxheWVkXHJcblx0XHRcdH0pfVxyXG5cdFx0XHRcdG9uRm9jdXM9eygpID0+IHNldElzU2tpcExpbmtEaXNwbGF5ZWQodHJ1ZSl9XHJcblx0XHRcdFx0b25LZXlEb3duPXtza2lwQ29udGVudEFjdGlvbn1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdNCh0YDQsNC30YMg0Log0YHQvtC00LXRgNC20LDQvdC40Y5cclxuXHRcdFx0PC9hPlxyXG5cdFx0XHQ8SGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+PC9IZWFkZXI+XHJcblx0XHRcdDxTaWRlYmFyIGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJ9PjwvU2lkZWJhcj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fSByZWY9e2JvfT57Y2hpbGRyZW59PC9kaXY+XHJcblx0XHRcdDxGb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT48L0Zvb3Rlcj5cclxuXHRcdFx0PFVwPjwvVXA+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpdGhMYXlvdXQgPSA8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+ICYgSUFwcENvbnRleHQ+KENvbXBvbmVudDogRnVuY3Rpb25Db21wb25lbnQ8VD4pID0+IHtcclxuXHRyZXR1cm4gZnVuY3Rpb24gd2l0aExheW91dG5Db21wb25lbnQocHJvcHM6IFQpOiBKU1guRWxlbWVudCB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8QXBwQ29udGV4dFByb3ZpZGVyIG1lbnU9e3Byb3BzLm1lbnV9IGZpcnN0Q2F0ZWdvcnk9e3Byb3BzLmZpcnN0Q2F0ZWdvcnl9PlxyXG5cdFx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wcm9wc30+PC9Db21wb25lbnQ+XHJcblx0XHRcdFx0PC9MYXlvdXQ+XHJcblx0XHRcdDwvQXBwQ29udGV4dFByb3ZpZGVyPlxyXG5cdFx0KTtcclxuXHR9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9