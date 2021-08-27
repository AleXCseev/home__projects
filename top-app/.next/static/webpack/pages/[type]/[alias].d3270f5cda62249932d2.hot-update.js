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

  var raitingArrayRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    constructRaiting(raiting);
  }, [raiting]);

  var computeFocus = function computeFocus(r, i) {};

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
        tabIndex: computeFocus(rei),
        onKeyDown: handelKey,
        ref: function ref(r) {
          var _raitingArrayRef$curr;

          return (_raitingArrayRef$curr = raitingArrayRef.current) === null || _raitingArrayRef$curr === void 0 ? void 0 : _raitingArrayRef$curr.push(r);
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_star_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
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
        lineNumber: 85,
        columnNumber: 6
      }, _this);
    }), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      className: _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.errorMessage,
      children: error.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 14
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 3
  }, _this);
}, "h/CyiD+/e1bGeRi4Txv9+bmq4Uo="));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYWl0aW5nL1JhaXRpbmcudHN4Il0sIm5hbWVzIjpbIlJhaXRpbmciLCJmb3J3YXJkUmVmIiwicmVmIiwiaXNFZGl0YWJsZSIsInJhaXRpbmciLCJzZXRSYWl0aW5nIiwiZXJyb3IiLCJwcm9wcyIsInVzZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwicmFpdGluZ0FycmF5Iiwic2V0UmFpdGluZ0FycmF5IiwicmFpdGluZ0FycmF5UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY29uc3RydWN0UmFpdGluZyIsImNvbXB1dGVGb2N1cyIsInIiLCJpIiwiY3VycmVudFJhaXRpbmciLCJ1cGRhdGVkQXJyYXkiLCJtYXAiLCJlbCIsImluZGV4IiwiY24iLCJzdHlsZXMiLCJzdGFyIiwiZmlsbGVkIiwiZWRpdGFibGUiLCJjaGFuZ2VEaXNwbGF5Iiwib25DbGljayIsInJlaSIsImhhbmRlbEtleSIsImN1cnJlbnQiLCJwdXNoIiwiZSIsImNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInJhaXRpbmdXcmFwcGVyIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxPQUFPLGdCQUFHQyx3REFBVSxTQUFDLGdCQUE2RUMsR0FBN0UsRUFBZ0k7QUFBQTs7QUFBQSw2QkFBN0hDLFVBQTZIO0FBQUEsTUFBN0hBLFVBQTZILGdDQUFoSCxLQUFnSDtBQUFBLE1BQXpHQyxPQUF5RyxRQUF6R0EsT0FBeUc7QUFBQSxNQUFoR0MsVUFBZ0csUUFBaEdBLFVBQWdHO0FBQUEsTUFBcEZDLEtBQW9GLFFBQXBGQSxLQUFvRjtBQUFBLE1BQTFFQyxLQUEwRTs7QUFBQSxrQkFDekhDLHNEQUFRLENBQWdCLElBQUlDLEtBQUosQ0FBVSxDQUFWLEVBQWFDLElBQWIsZUFBa0IsdUpBQWxCLENBQWhCLENBRGlI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QVUsQ0FBQyxDQUFELENBQVY7QUFDQSxPQUZELE1BRU87QUFDTitCLFNBQUMsQ0FBQ0UsY0FBRjtBQUNBakMsa0JBQVUsQ0FBQ0QsT0FBTyxHQUFHLENBQVYsR0FBY0EsT0FBTyxHQUFHLENBQXhCLEdBQTRCLENBQTdCLENBQVY7QUFDQTtBQUNEO0FBQ0QsR0FwQkQ7O0FBc0JBLHNCQUNDLDRHQUFTRyxLQUFUO0FBQWdCLE9BQUcsRUFBRUwsR0FBckI7QUFBMEIsYUFBUyxFQUFFdUIsaURBQUUsQ0FBQ0MsMERBQU0sQ0FBQ2EsY0FBUix1SkFDckNiLDBEQUFNLENBQUNwQixLQUQ4QixFQUN0QkEsS0FEc0IsRUFBdkM7QUFBQSxlQUdFSyxZQUFZLENBQUNXLEdBQWIsQ0FBaUIsVUFBQ0MsRUFBRCxFQUFrQkMsS0FBbEIsRUFBb0M7QUFDckQsMEJBQ0M7QUFBQSxrQkFBbUJEO0FBQW5CLFNBQVdDLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBR0EsS0FKQSxDQUhGLEVBUUVsQixLQUFLLGlCQUFJO0FBQU0sZUFBUyxFQUFFb0IsMERBQU0sQ0FBQ2MsWUFBeEI7QUFBQSxnQkFBdUNsQyxLQUFLLENBQUNtQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFZQSxDQXBGZ0Msa0NBQTFCO01BQU16QyxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1t0eXBlXS9bYWxpYXNdLmQzMjcwZjVjZGE2MjI0OTkzMmQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYWl0aW5nUHJvcHMgfSBmcm9tIFwiLi9SYWl0aW5nLnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUmFpdGluZy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBLZXlib2FyZEV2ZW50LCBmb3J3YXJkUmVmLCBGb3J3YXJkZWRSZWYsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3Rhckljb24gZnJvbSBcIi4vc3Rhci5zdmdcIlxyXG5cclxuZXhwb3J0IGNvbnN0IFJhaXRpbmcgPSBmb3J3YXJkUmVmKCh7IGlzRWRpdGFibGUgPSBmYWxzZSwgcmFpdGluZywgc2V0UmFpdGluZywgZXJyb3IsIC4uLnByb3BzIH06IFJhaXRpbmdQcm9wcywgcmVmOiBGb3J3YXJkZWRSZWY8SFRNTERpdkVsZW1lbnQ+KTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IFtyYWl0aW5nQXJyYXksIHNldFJhaXRpbmdBcnJheV0gPSB1c2VTdGF0ZTxKU1guRWxlbWVudFtdPihuZXcgQXJyYXkoNSkuZmlsbCg8PjwvPikpXHJcblx0Y29uc3QgcmFpdGluZ0FycmF5UmVmID0gdXNlUmVmPChIVE1MU3BhbkVsZW1lbnQgfCBudWxsKVtdPihudWxsKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3RydWN0UmFpdGluZyhyYWl0aW5nKTtcclxuXHR9LCBbcmFpdGluZ10pXHJcblxyXG5cdGNvbnN0IGNvbXB1dGVGb2N1cyA9IChyOm51bWJlciwgaTpudW1iZXIpOiBudW1iZXIgPT4ge1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGNvbnN0cnVjdFJhaXRpbmcgPSAoY3VycmVudFJhaXRpbmc6IG51bWJlcikgPT4ge1xyXG5cdFx0Y29uc3QgdXBkYXRlZEFycmF5ID0gcmFpdGluZ0FycmF5Lm1hcCgoZWw6IEpTWC5FbGVtZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLnN0YXIsIHtcclxuXHRcdFx0XHRcdFx0W3N0eWxlcy5maWxsZWRdOiBpbmRleCA8IGN1cnJlbnRSYWl0aW5nLFxyXG5cdFx0XHRcdFx0XHRbc3R5bGVzLmVkaXRhYmxlXTogaXNFZGl0YWJsZVxyXG5cdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eygpID0+IGNoYW5nZURpc3BsYXkoaW5kZXggKyAxKX1cclxuXHRcdFx0XHRcdG9uTW91c2VMZWF2ZT17KCkgPT4gY2hhbmdlRGlzcGxheShyYWl0aW5nKX1cclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soaW5kZXggKyAxKX1cclxuXHRcdFx0XHRcdHRhYkluZGV4PXtjb21wdXRlRm9jdXMocmVpKX1cclxuXHRcdFx0XHRcdG9uS2V5RG93bj17aGFuZGVsS2V5fVxyXG5cdFx0XHRcdFx0cmVmPXsgciA9PiByYWl0aW5nQXJyYXlSZWYuY3VycmVudD8ucHVzaChyKX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8U3Rhckljb24gXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PjwvU3Rhckljb24+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0XHRzZXRSYWl0aW5nQXJyYXkodXBkYXRlZEFycmF5KVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNoYW5nZURpc3BsYXkgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0aWYoIWlzRWRpdGFibGUpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3RydWN0UmFpdGluZyhpbmRleClcclxuXHR9XHJcblxyXG5cdGNvbnN0IG9uQ2xpY2sgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0aWYoIWlzRWRpdGFibGUgfHwgIXNldFJhaXRpbmcpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0c2V0UmFpdGluZyhpbmRleClcclxuXHR9XHJcblxyXG5cdGNvbnN0IGhhbmRlbEtleSA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcblx0XHRpZiAoIWlzRWRpdGFibGUgfHwgIXNldFJhaXRpbmcpIHtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9O1xyXG5cdFx0aWYgKGUuY29kZSA9PSBcIkFycm93UmlnaHRcIiB8fCBlLmNvZGUgPT0gXCJBcnJvd1VwXCIgKSB7XHJcblx0XHRcdGlmKCFyYWl0aW5nKSB7XHJcblx0XHRcdFx0c2V0UmFpdGluZygxKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHRcdHNldFJhaXRpbmcocmFpdGluZyA8IDUgPyByYWl0aW5nICsgMSA6IDUpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0aWYgKGUuY29kZSA9PSBcIkFycm93TGVmdFwiIHx8IGUuY29kZSA9PSBcIkFycm93RG93blwiICkge1xyXG5cdFx0XHRpZighcmFpdGluZykge1xyXG5cdFx0XHRcdHNldFJhaXRpbmcoMSlcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdFx0XHRzZXRSYWl0aW5nKHJhaXRpbmcgPiAxID8gcmFpdGluZyAtIDEgOiAxKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgey4uLnByb3BzfSByZWY9e3JlZn0gY2xhc3NOYW1lPXtjbihzdHlsZXMucmFpdGluZ1dyYXBwZXIsIHtcclxuXHRcdFx0W3N0eWxlcy5lcnJvcl06IGVycm9yXHJcblx0XHR9KX0+XHJcblx0XHRcdHtyYWl0aW5nQXJyYXkubWFwKChlbDogSlNYLkVsZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4oXHJcblx0XHRcdFx0XHQ8c3BhbiBrZXk9e2luZGV4fT57ZWx9PC9zcGFuPlxyXG5cdFx0XHRcdClcclxuXHRcdFx0fSl9XHJcblx0XHRcdHtlcnJvciAmJiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvck1lc3NhZ2V9PntlcnJvci5tZXNzYWdlfTwvc3Bhbj59XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==