webpackHotUpdate_N_E("pages/[type]/[alias]",{

/***/ "./components/Raiting/Raiting.tsx":
/*!****************************************!*\
  !*** ./components/Raiting/Raiting.tsx ***!
  \****************************************/
/*! exports provided: Raiting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Raiting", function() { return Raiting; });
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Raiting.module.css */ "./components/Raiting/Raiting.module.css");
/* harmony import */ var _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Raiting_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _star_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./star.svg */ "./components/Raiting/star.svg");





var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\Raiting\\Raiting.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Raiting = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(_c = _s(function (_ref, ref) {
  _s();

  var _ref$isEditable = _ref.isEditable,
      isEditable = _ref$isEditable === void 0 ? false : _ref$isEditable,
      raiting = _ref.raiting,
      setRaiting = _ref.setRaiting,
      error = _ref.error,
      props = Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["isEditable", "raiting", "setRaiting", "error"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(new Array(5).fill( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {}, void 0, false))),
      raitingArray = _useState[0],
      setRaitingArray = _useState[1];

  var raitingArrayRef;
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    constructRaiting(raiting);
  }, [raiting]);

  var constructRaiting = function constructRaiting(currentRaiting) {
    var updatedArray = raitingArray.map(function (el, index) {
      var _cn;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.star, (_cn = {}, Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cn, _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filled, index < currentRaiting), Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cn, _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.editable, isEditable), _cn)),
        onMouseEnter: function onMouseEnter() {
          return changeDisplay(index + 1);
        },
        onMouseLeave: function onMouseLeave() {
          return changeDisplay(raiting);
        },
        onClick: function onClick() {
          return _onClick(index + 1);
        },
        tabIndex: isEditable ? 0 : -1,
        onKeyDown: handelKey,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_star_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, _this);
    });
    setRaitingArray(updatedArray);
  };

  var changeDisplay = function changeDisplay(index) {
    if (!isEditable) {
      return;
    }

    constructRaiting(index);
  };

  var _onClick = function _onClick(index) {
    if (!isEditable || !setRaiting) {
      return;
    }

    setRaiting(index);
  };

  var handelKey = function handelKey(e) {
    if (!isEditable || !setRaiting) {
      return;
    }

    ;

    if (e.code == "ArrowRight" || e.code == "ArrowUp") {
      if (!raiting) {
        setRaiting(1);
      } else {
        e.preventDefault();
        setRaiting(raiting < 5 ? raiting + 1 : 5);
      }
    }

    ;

    if (e.code == "ArrowLeft" || e.code == "ArrowDown") {
      if (!raiting) {
        setRaiting(1);
      } else {
        e.preventDefault();
        setRaiting(raiting > 1 ? raiting - 1 : 1);
      }
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({}, props), {}, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.raitingWrapper, Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.error, error)),
    children: [raitingArray.map(function (el, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: el
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 6
      }, _this);
    }), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      className: _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.errorMessage,
      children: error.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 14
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 3
  }, _this);
}, "3Eo8XITou9EOeJ5zL4xkso03tp0="));
_c2 = Raiting;

var _c, _c2;

$RefreshReg$(_c, "Raiting$forwardRef");
$RefreshReg$(_c2, "Raiting");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYWl0aW5nL1JhaXRpbmcudHN4Il0sIm5hbWVzIjpbIlJhaXRpbmciLCJmb3J3YXJkUmVmIiwicmVmIiwiaXNFZGl0YWJsZSIsInJhaXRpbmciLCJzZXRSYWl0aW5nIiwiZXJyb3IiLCJwcm9wcyIsInVzZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwicmFpdGluZ0FycmF5Iiwic2V0UmFpdGluZ0FycmF5IiwicmFpdGluZ0FycmF5UmVmIiwidXNlRWZmZWN0IiwiY29uc3RydWN0UmFpdGluZyIsImN1cnJlbnRSYWl0aW5nIiwidXBkYXRlZEFycmF5IiwibWFwIiwiZWwiLCJpbmRleCIsImNuIiwic3R5bGVzIiwic3RhciIsImZpbGxlZCIsImVkaXRhYmxlIiwiY2hhbmdlRGlzcGxheSIsIm9uQ2xpY2siLCJoYW5kZWxLZXkiLCJlIiwiY29kZSIsInByZXZlbnREZWZhdWx0IiwicmFpdGluZ1dyYXBwZXIiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE9BQU8sZ0JBQUdDLHdEQUFVLFNBQUMsZ0JBQTZFQyxHQUE3RSxFQUFnSTtBQUFBOztBQUFBLDZCQUE3SEMsVUFBNkg7QUFBQSxNQUE3SEEsVUFBNkgsZ0NBQWhILEtBQWdIO0FBQUEsTUFBekdDLE9BQXlHLFFBQXpHQSxPQUF5RztBQUFBLE1BQWhHQyxVQUFnRyxRQUFoR0EsVUFBZ0c7QUFBQSxNQUFwRkMsS0FBb0YsUUFBcEZBLEtBQW9GO0FBQUEsTUFBMUVDLEtBQTBFOztBQUFBLGtCQUN6SEMsc0RBQVEsQ0FBZ0IsSUFBSUMsS0FBSixDQUFVLENBQVYsRUFBYUMsSUFBYixlQUFrQix1SkFBbEIsQ0FBaEIsQ0FEaUg7QUFBQSxNQUMxSkMsWUFEMEo7QUFBQSxNQUM1SUMsZUFENEk7O0FBRWpLLE1BQU1DLGVBQU47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TSxDQUFDaEIsS0FEOEIsRUFDdEJBLEtBRHNCLEVBQXZDO0FBQUEsZUFHRUssWUFBWSxDQUFDTyxHQUFiLENBQWlCLFVBQUNDLEVBQUQsRUFBa0JDLEtBQWxCLEVBQW9DO0FBQ3JELDBCQUNDO0FBQUEsa0JBQW1CRDtBQUFuQixTQUFXQyxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQUdBLEtBSkEsQ0FIRixFQVFFZCxLQUFLLGlCQUFJO0FBQU0sZUFBUyxFQUFFZ0IsMERBQU0sQ0FBQ1csWUFBeEI7QUFBQSxnQkFBdUMzQixLQUFLLENBQUM0QjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFZQSxDQWhGZ0Msa0NBQTFCO01BQU1sQyxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1t0eXBlXS9bYWxpYXNdLjc3NTcwNTY5NTEwODg0NTYyOWNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYWl0aW5nUHJvcHMgfSBmcm9tIFwiLi9SYWl0aW5nLnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUmFpdGluZy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBLZXlib2FyZEV2ZW50LCBmb3J3YXJkUmVmLCBGb3J3YXJkZWRSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN0YXJJY29uIGZyb20gXCIuL3N0YXIuc3ZnXCJcclxuXHJcbmV4cG9ydCBjb25zdCBSYWl0aW5nID0gZm9yd2FyZFJlZigoeyBpc0VkaXRhYmxlID0gZmFsc2UsIHJhaXRpbmcsIHNldFJhaXRpbmcsIGVycm9yLCAuLi5wcm9wcyB9OiBSYWl0aW5nUHJvcHMsIHJlZjogRm9yd2FyZGVkUmVmPEhUTUxEaXZFbGVtZW50Pik6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRjb25zdCBbcmFpdGluZ0FycmF5LCBzZXRSYWl0aW5nQXJyYXldID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4obmV3IEFycmF5KDUpLmZpbGwoPD48Lz4pKVxyXG5cdGNvbnN0IHJhaXRpbmdBcnJheVJlZlxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3RydWN0UmFpdGluZyhyYWl0aW5nKTtcclxuXHR9LCBbcmFpdGluZ10pXHJcblxyXG5cdGNvbnN0IGNvbnN0cnVjdFJhaXRpbmcgPSAoY3VycmVudFJhaXRpbmc6IG51bWJlcikgPT4ge1xyXG5cdFx0Y29uc3QgdXBkYXRlZEFycmF5ID0gcmFpdGluZ0FycmF5Lm1hcCgoZWw6IEpTWC5FbGVtZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLnN0YXIsIHtcclxuXHRcdFx0XHRcdFx0W3N0eWxlcy5maWxsZWRdOiBpbmRleCA8IGN1cnJlbnRSYWl0aW5nLFxyXG5cdFx0XHRcdFx0XHRbc3R5bGVzLmVkaXRhYmxlXTogaXNFZGl0YWJsZVxyXG5cdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eygpID0+IGNoYW5nZURpc3BsYXkoaW5kZXggKyAxKX1cclxuXHRcdFx0XHRcdG9uTW91c2VMZWF2ZT17KCkgPT4gY2hhbmdlRGlzcGxheShyYWl0aW5nKX1cclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soaW5kZXggKyAxKX1cclxuXHRcdFx0XHRcdHRhYkluZGV4PXtpc0VkaXRhYmxlID8gMCA6IC0xfVxyXG5cdFx0XHRcdFx0b25LZXlEb3duPXtoYW5kZWxLZXl9XHJcblxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxTdGFySWNvbiBcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ+PC9TdGFySWNvbj5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHRcdHNldFJhaXRpbmdBcnJheSh1cGRhdGVkQXJyYXkpXHJcblx0fTtcclxuXHJcblx0Y29uc3QgY2hhbmdlRGlzcGxheSA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRpZighaXNFZGl0YWJsZSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdHJ1Y3RSYWl0aW5nKGluZGV4KVxyXG5cdH1cclxuXHJcblx0Y29uc3Qgb25DbGljayA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRpZighaXNFZGl0YWJsZSB8fCAhc2V0UmFpdGluZykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRzZXRSYWl0aW5nKGluZGV4KVxyXG5cdH1cclxuXHJcblx0Y29uc3QgaGFuZGVsS2V5ID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuXHRcdGlmICghaXNFZGl0YWJsZSB8fCAhc2V0UmFpdGluZykge1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH07XHJcblx0XHRpZiAoZS5jb2RlID09IFwiQXJyb3dSaWdodFwiIHx8IGUuY29kZSA9PSBcIkFycm93VXBcIiApIHtcclxuXHRcdFx0aWYoIXJhaXRpbmcpIHtcclxuXHRcdFx0XHRzZXRSYWl0aW5nKDEpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRcdFx0c2V0UmFpdGluZyhyYWl0aW5nIDwgNSA/IHJhaXRpbmcgKyAxIDogNSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRpZiAoZS5jb2RlID09IFwiQXJyb3dMZWZ0XCIgfHwgZS5jb2RlID09IFwiQXJyb3dEb3duXCIgKSB7XHJcblx0XHRcdGlmKCFyYWl0aW5nKSB7XHJcblx0XHRcdFx0c2V0UmFpdGluZygxKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHRcdHNldFJhaXRpbmcocmFpdGluZyA+IDEgPyByYWl0aW5nIC0gMSA6IDEpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiB7Li4ucHJvcHN9IHJlZj17cmVmfSBjbGFzc05hbWU9e2NuKHN0eWxlcy5yYWl0aW5nV3JhcHBlciwge1xyXG5cdFx0XHRbc3R5bGVzLmVycm9yXTogZXJyb3JcclxuXHRcdH0pfT5cclxuXHRcdFx0e3JhaXRpbmdBcnJheS5tYXAoKGVsOiBKU1guRWxlbWVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0XHRcdHJldHVybihcclxuXHRcdFx0XHRcdDxzcGFuIGtleT17aW5kZXh9PntlbH08L3NwYW4+XHJcblx0XHRcdFx0KVxyXG5cdFx0XHR9KX1cclxuXHRcdFx0e2Vycm9yICYmIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yTWVzc2FnZX0+e2Vycm9yLm1lc3NhZ2V9PC9zcGFuPn1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9