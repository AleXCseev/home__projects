webpackHotUpdate_N_E("pages/[type]/[alias]",{

/***/ "./components/Sort/Sort.tsx":
/*!**********************************!*\
  !*** ./components/Sort/Sort.tsx ***!
  \**********************************/
/*! exports provided: Sort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sort", function() { return Sort; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Sort_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sort.props */ "./components/Sort/Sort.props.ts");
/* harmony import */ var _Sort_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sort.module.css */ "./components/Sort/Sort.module.css");
/* harmony import */ var _Sort_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Sort_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sort_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sort.svg */ "./components/Sort/sort.svg");




var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\Sort\\Sort.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Sort = function Sort(_ref) {
  var sort = _ref.sort,
      setSort = _ref.setSort,
      className = _ref.className,
      props = Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["sort", "setSort", "className"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Sort_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sort, className)
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      onClick: function onClick() {
        return setSort(_Sort_props__WEBPACK_IMPORTED_MODULE_3__["SortEnum"].Rating);
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _Sort_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.active, sort == _Sort_props__WEBPACK_IMPORTED_MODULE_3__["SortEnum"].Raiting)),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sort_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: _Sort_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sortIcon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, _this), "\u041F\u043E \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0443"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      onClick: function onClick() {
        return setSort(_Sort_props__WEBPACK_IMPORTED_MODULE_3__["SortEnum"].Price);
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _Sort_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.active, sort == _Sort_props__WEBPACK_IMPORTED_MODULE_3__["SortEnum"].Price)),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sort_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: _Sort_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sortIcon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, _this), "\u041F\u043E \u0446\u0435\u043D\u0435"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, _this);
};
_c = Sort;

var _c;

$RefreshReg$(_c, "Sort");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Tb3J0L1NvcnQudHN4Il0sIm5hbWVzIjpbIlNvcnQiLCJzb3J0Iiwic2V0U29ydCIsImNsYXNzTmFtZSIsInByb3BzIiwiY24iLCJzdHlsZXMiLCJTb3J0RW51bSIsIlJhdGluZyIsImFjdGl2ZSIsIlJhaXRpbmciLCJzb3J0SWNvbiIsIlByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQW9FO0FBQUEsTUFBakVDLElBQWlFLFFBQWpFQSxJQUFpRTtBQUFBLE1BQTNEQyxPQUEyRCxRQUEzREEsT0FBMkQ7QUFBQSxNQUFsREMsU0FBa0QsUUFBbERBLFNBQWtEO0FBQUEsTUFBcENDLEtBQW9DOztBQUN2RixzQkFDQztBQUFLLGFBQVMsRUFBRUMsaURBQUUsQ0FBQ0MsdURBQU0sQ0FBQ0wsSUFBUixFQUFjRSxTQUFkO0FBQWxCLEtBQWdEQyxLQUFoRDtBQUFBLDRCQUNDO0FBQ0MsYUFBTyxFQUFFO0FBQUEsZUFBTUYsT0FBTyxDQUFDSyxvREFBUSxDQUFDQyxNQUFWLENBQWI7QUFBQSxPQURWO0FBRUMsZUFBUyxFQUFFSCxpREFBRSxDQUFDLHFKQUNaQyx1REFBTSxDQUFDRyxNQURJLEVBQ0tSLElBQUksSUFBSU0sb0RBQVEsQ0FBQ0csT0FEdEIsRUFGZDtBQUFBLDhCQU1DLHFFQUFDLGlEQUFEO0FBQVUsaUJBQVMsRUFBRUosdURBQU0sQ0FBQ0s7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBVUM7QUFDQyxhQUFPLEVBQUU7QUFBQSxlQUFNVCxPQUFPLENBQUNLLG9EQUFRLENBQUNLLEtBQVYsQ0FBYjtBQUFBLE9BRFY7QUFFQyxlQUFTLEVBQUVQLGlEQUFFLENBQUMscUpBQ1pDLHVEQUFNLENBQUNHLE1BREksRUFDS1IsSUFBSSxJQUFJTSxvREFBUSxDQUFDSyxLQUR0QixFQUZkO0FBQUEsOEJBTUMscUVBQUMsaURBQUQ7QUFBVSxpQkFBUyxFQUFFTix1REFBTSxDQUFDSztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFzQkEsQ0F2Qk07S0FBTVgsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bdHlwZV0vW2FsaWFzXS5kZWUxYzAyMjNiZGZmYTU2NDEwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU29ydEVudW0sIFNvcnRQcm9wcyB9IGZyb20gXCIuL1NvcnQucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Tb3J0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBTb3J0SWNvbiBmcm9tIFwiLi9zb3J0LnN2Z1wiXHJcblxyXG5leHBvcnQgY29uc3QgU29ydCA9ICh7IHNvcnQsIHNldFNvcnQsIGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogU29ydFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLnNvcnQsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30+XHJcblx0XHRcdDxzcGFuIFxyXG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldFNvcnQoU29ydEVudW0uUmF0aW5nKX1cclxuXHRcdFx0XHRjbGFzc05hbWU9e2NuKHtcclxuXHRcdFx0XHRcdFtzdHlsZXMuYWN0aXZlXTogc29ydCA9PSBTb3J0RW51bS5SYWl0aW5nXHJcblx0XHRcdFx0fSl9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8U29ydEljb24gY2xhc3NOYW1lPXtzdHlsZXMuc29ydEljb259PjwvU29ydEljb24+XHJcblx0XHRcdFx00J/QviDRgNC10LnRgtC40L3Qs9GDXHJcblx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0PHNwYW4gXHJcblx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0U29ydChTb3J0RW51bS5QcmljZSl9XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbih7XHJcblx0XHRcdFx0XHRbc3R5bGVzLmFjdGl2ZV06IHNvcnQgPT0gU29ydEVudW0uUHJpY2VcclxuXHRcdFx0XHR9KX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxTb3J0SWNvbiBjbGFzc05hbWU9e3N0eWxlcy5zb3J0SWNvbn0+PC9Tb3J0SWNvbj5cclxuXHRcdFx0XHTQn9C+INGG0LXQvdC1XHJcblx0XHRcdDwvc3Bhbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=