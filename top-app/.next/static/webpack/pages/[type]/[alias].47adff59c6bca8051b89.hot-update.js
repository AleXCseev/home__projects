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

  var skipContentAction = function skipContentAction(key) {
    if (key.code == "Space" || key.code == "Enter") {
      key.preventDefault();
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

_s(Layout, "0TwEG93R0vPwoJrx1KFk+79Y6C8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L0xheW91dC50c3giXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNTa2lwTGlua0Rpc3BsYXllZCIsInNldElzU2tpcExpbmtEaXNwbGF5ZWQiLCJza2lwQ29udGVudEFjdGlvbiIsImtleSIsImNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlcyIsIndyYXBwZXIiLCJjbiIsInNraXBMaW5rIiwiZGlzcGxheWVkIiwiaGVhZGVyIiwic2lkZWJhciIsImJvZHkiLCJmb290ZXIiLCJ3aXRoTGF5b3V0IiwiQ29tcG9uZW50Iiwid2l0aExheW91dG5Db21wb25lbnQiLCJtZW51IiwiZmlyc3RDYXRlZ29yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFzRDtBQUFBOztBQUFBLE1BQW5EQyxRQUFtRCxRQUFuREEsUUFBbUQ7QUFBQSxNQUF0Q0MsS0FBc0M7O0FBQUEsa0JBQ2RDLHNEQUFRLENBQVUsS0FBVixDQURNO0FBQUEsTUFDN0RDLG1CQUQ2RDtBQUFBLE1BQ3hDQyxzQkFEd0M7O0FBR3BFLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsR0FBRCxFQUF1QjtBQUNoRCxRQUFJQSxHQUFHLENBQUNDLElBQUosSUFBWSxPQUFaLElBQXVCRCxHQUFHLENBQUNDLElBQUosSUFBWSxPQUF2QyxFQUFnRDtBQUMvQ0QsU0FBRyxDQUFDRSxjQUFKO0FBRUE7O0FBQ0RKLDBCQUFzQixDQUFDLEtBQUQsQ0FBdEI7QUFDQSxHQU5EOztBQVFBLHNCQUNDO0FBQUssYUFBUyxFQUFFSyx5REFBTSxDQUFDQyxPQUF2QjtBQUFBLDRCQUNDO0FBQ0MsY0FBUSxFQUFFLENBRFg7QUFFQyxlQUFTLEVBQUVDLGtEQUFFLENBQUNGLHlEQUFNLENBQUNHLFFBQVIsdUpBQ1hILHlEQUFNLENBQUNJLFNBREksRUFDUVYsbUJBRFIsRUFGZDtBQUtDLGFBQU8sRUFBRTtBQUFBLGVBQU1DLHNCQUFzQixDQUFDLElBQUQsQ0FBNUI7QUFBQSxPQUxWO0FBTUMsZUFBUyxFQUFFQyxpQkFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBV0MscUVBQUMscURBQUQ7QUFBUSxlQUFTLEVBQUVJLHlEQUFNLENBQUNLO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYRCxlQVlDLHFFQUFDLHdEQUFEO0FBQVMsZUFBUyxFQUFFTCx5REFBTSxDQUFDTTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkQsZUFhQztBQUFLLGVBQVMsRUFBRU4seURBQU0sQ0FBQ08sSUFBdkI7QUFBQSxnQkFBOEJoQjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkQsZUFjQyxxRUFBQyxxREFBRDtBQUFRLGVBQVMsRUFBRVMseURBQU0sQ0FBQ1E7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRELGVBZUMscUVBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBbUJBLENBOUJEOztHQUFNbEIsTTs7S0FBQUEsTTtBQWdDQyxJQUFNbUIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBa0RDLFNBQWxELEVBQXNGO0FBQy9HLFNBQU8sU0FBU0Msb0JBQVQsQ0FBOEJuQixLQUE5QixFQUFxRDtBQUMzRCx3QkFDQyxxRUFBQyx1RUFBRDtBQUFvQixVQUFJLEVBQUVBLEtBQUssQ0FBQ29CLElBQWhDO0FBQXNDLG1CQUFhLEVBQUVwQixLQUFLLENBQUNxQixhQUEzRDtBQUFBLDZCQUNDLHFFQUFDLE1BQUQ7QUFBQSwrQkFDQyxxRUFBQyxTQUFELG9CQUFlckIsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERDtBQU9BLEdBUkQ7QUFTQSxDQVZNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1t0eXBlXS9bYWxpYXNdLjQ3YWRmZjU5YzZiY2E4MDUxYjg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXRQcm9wcyB9IGZyb20gXCIuL0xheW91dC5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xheW91dC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCwgdXNlU3RhdGUsIEtleWJvYXJkRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4vSGVhZGVyL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSBcIi4vU2lkZWJhci9TaWRlYmFyXCI7XHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuL0Zvb3Rlci9Gb290ZXJcIjtcclxuaW1wb3J0IHsgQXBwQ29udGV4dFByb3ZpZGVyLCBJQXBwQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2FwcC5jb250ZXh0XCI7XHJcbmltcG9ydCB7IFVwIH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfTogTGF5b3V0UHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0Y29uc3QgW2lzU2tpcExpbmtEaXNwbGF5ZWQsIHNldElzU2tpcExpbmtEaXNwbGF5ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpIFxyXG5cclxuXHRjb25zdCBza2lwQ29udGVudEFjdGlvbiA9IChrZXk6S2V5Ym9hcmRFdmVudCkgPT4ge1xyXG5cdFx0aWYgKGtleS5jb2RlID09IFwiU3BhY2VcIiB8fCBrZXkuY29kZSA9PSBcIkVudGVyXCIpIHtcclxuXHRcdFx0a2V5LnByZXZlbnREZWZhdWx0KClcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRzZXRJc1NraXBMaW5rRGlzcGxheWVkKGZhbHNlKVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcblx0XHRcdDxhIFxyXG5cdFx0XHRcdHRhYkluZGV4PXsxfSBcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlcy5za2lwTGluaywge1xyXG5cdFx0XHRcdFx0W3N0eWxlcy5kaXNwbGF5ZWRdOiBpc1NraXBMaW5rRGlzcGxheWVkXHJcblx0XHRcdH0pfVxyXG5cdFx0XHRcdG9uRm9jdXM9eygpID0+IHNldElzU2tpcExpbmtEaXNwbGF5ZWQodHJ1ZSl9XHJcblx0XHRcdFx0b25LZXlEb3duPXtza2lwQ29udGVudEFjdGlvbn1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdNCh0YDQsNC30YMg0Log0YHQvtC00LXRgNC20LDQvdC40Y5cclxuXHRcdFx0PC9hPlxyXG5cdFx0XHQ8SGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+PC9IZWFkZXI+XHJcblx0XHRcdDxTaWRlYmFyIGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJ9PjwvU2lkZWJhcj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT57Y2hpbGRyZW59PC9kaXY+XHJcblx0XHRcdDxGb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT48L0Zvb3Rlcj5cclxuXHRcdFx0PFVwPjwvVXA+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpdGhMYXlvdXQgPSA8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+ICYgSUFwcENvbnRleHQ+KENvbXBvbmVudDogRnVuY3Rpb25Db21wb25lbnQ8VD4pID0+IHtcclxuXHRyZXR1cm4gZnVuY3Rpb24gd2l0aExheW91dG5Db21wb25lbnQocHJvcHM6IFQpOiBKU1guRWxlbWVudCB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8QXBwQ29udGV4dFByb3ZpZGVyIG1lbnU9e3Byb3BzLm1lbnV9IGZpcnN0Q2F0ZWdvcnk9e3Byb3BzLmZpcnN0Q2F0ZWdvcnl9PlxyXG5cdFx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wcm9wc30+PC9Db21wb25lbnQ+XHJcblx0XHRcdFx0PC9MYXlvdXQ+XHJcblx0XHRcdDwvQXBwQ29udGV4dFByb3ZpZGVyPlxyXG5cdFx0KTtcclxuXHR9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9