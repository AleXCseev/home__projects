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
        tabIndex: computeFocus(raiting),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYWl0aW5nL1JhaXRpbmcudHN4Il0sIm5hbWVzIjpbIlJhaXRpbmciLCJmb3J3YXJkUmVmIiwicmVmIiwiaXNFZGl0YWJsZSIsInJhaXRpbmciLCJzZXRSYWl0aW5nIiwiZXJyb3IiLCJwcm9wcyIsInVzZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwicmFpdGluZ0FycmF5Iiwic2V0UmFpdGluZ0FycmF5IiwicmFpdGluZ0FycmF5UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY29uc3RydWN0UmFpdGluZyIsImNvbXB1dGVGb2N1cyIsInIiLCJpIiwiY3VycmVudFJhaXRpbmciLCJ1cGRhdGVkQXJyYXkiLCJtYXAiLCJlbCIsImluZGV4IiwiY24iLCJzdHlsZXMiLCJzdGFyIiwiZmlsbGVkIiwiZWRpdGFibGUiLCJjaGFuZ2VEaXNwbGF5Iiwib25DbGljayIsImhhbmRlbEtleSIsImN1cnJlbnQiLCJwdXNoIiwiZSIsImNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInJhaXRpbmdXcmFwcGVyIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxPQUFPLGdCQUFHQyx3REFBVSxTQUFDLGdCQUE2RUMsR0FBN0UsRUFBZ0k7QUFBQTs7QUFBQSw2QkFBN0hDLFVBQTZIO0FBQUEsTUFBN0hBLFVBQTZILGdDQUFoSCxLQUFnSDtBQUFBLE1BQXpHQyxPQUF5RyxRQUF6R0EsT0FBeUc7QUFBQSxNQUFoR0MsVUFBZ0csUUFBaEdBLFVBQWdHO0FBQUEsTUFBcEZDLEtBQW9GLFFBQXBGQSxLQUFvRjtBQUFBLE1BQTFFQyxLQUEwRTs7QUFBQSxrQkFDekhDLHNEQUFRLENBQWdCLElBQUlDLEtBQUosQ0FBVSxDQUFWLEVBQWFDLElBQWIsZUFBa0IsdUpBQWxCLENBQWhCLENBRGlIO0FBQUEs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QUMsQ0FBRCxDQUFWO0FBQ0EsT0FGRCxNQUVPO0FBQ044QixTQUFDLENBQUNFLGNBQUY7QUFDQWhDLGtCQUFVLENBQUNELE9BQU8sR0FBRyxDQUFWLEdBQWNBLE9BQU8sR0FBRyxDQUF4QixHQUE0QixDQUE3QixDQUFWO0FBQ0E7QUFDRDtBQUNELEdBcEJEOztBQXNCQSxzQkFDQyw0R0FBU0csS0FBVDtBQUFnQixPQUFHLEVBQUVMLEdBQXJCO0FBQTBCLGFBQVMsRUFBRXVCLGlEQUFFLENBQUNDLDBEQUFNLENBQUNZLGNBQVIsdUpBQ3JDWiwwREFBTSxDQUFDcEIsS0FEOEIsRUFDdEJBLEtBRHNCLEVBQXZDO0FBQUEsZUFHRUssWUFBWSxDQUFDVyxHQUFiLENBQWlCLFVBQUNDLEVBQUQsRUFBa0JDLEtBQWxCLEVBQW9DO0FBQ3JELDBCQUNDO0FBQUEsa0JBQW1CRDtBQUFuQixTQUFXQyxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQUdBLEtBSkEsQ0FIRixFQVFFbEIsS0FBSyxpQkFBSTtBQUFNLGVBQVMsRUFBRW9CLDBEQUFNLENBQUNhLFlBQXhCO0FBQUEsZ0JBQXVDakMsS0FBSyxDQUFDa0M7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBWUEsQ0FwRmdDLGtDQUExQjtNQUFNeEMsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bdHlwZV0vW2FsaWFzXS45MDQyYTdiMzc3NTg3YmIxOTAwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmFpdGluZ1Byb3BzIH0gZnJvbSBcIi4vUmFpdGluZy5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1JhaXRpbmcubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgS2V5Ym9hcmRFdmVudCwgZm9yd2FyZFJlZiwgRm9yd2FyZGVkUmVmLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN0YXJJY29uIGZyb20gXCIuL3N0YXIuc3ZnXCJcclxuXHJcbmV4cG9ydCBjb25zdCBSYWl0aW5nID0gZm9yd2FyZFJlZigoeyBpc0VkaXRhYmxlID0gZmFsc2UsIHJhaXRpbmcsIHNldFJhaXRpbmcsIGVycm9yLCAuLi5wcm9wcyB9OiBSYWl0aW5nUHJvcHMsIHJlZjogRm9yd2FyZGVkUmVmPEhUTUxEaXZFbGVtZW50Pik6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRjb25zdCBbcmFpdGluZ0FycmF5LCBzZXRSYWl0aW5nQXJyYXldID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4obmV3IEFycmF5KDUpLmZpbGwoPD48Lz4pKVxyXG5cdGNvbnN0IHJhaXRpbmdBcnJheVJlZiA9IHVzZVJlZjwoSFRNTFNwYW5FbGVtZW50IHwgbnVsbClbXT4obnVsbClcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0cnVjdFJhaXRpbmcocmFpdGluZyk7XHJcblx0fSwgW3JhaXRpbmddKVxyXG5cclxuXHRjb25zdCBjb21wdXRlRm9jdXMgPSAocjpudW1iZXIsIGk6bnVtYmVyKTogbnVtYmVyID0+IHtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBjb25zdHJ1Y3RSYWl0aW5nID0gKGN1cnJlbnRSYWl0aW5nOiBudW1iZXIpID0+IHtcclxuXHRcdGNvbnN0IHVwZGF0ZWRBcnJheSA9IHJhaXRpbmdBcnJheS5tYXAoKGVsOiBKU1guRWxlbWVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlcy5zdGFyLCB7XHJcblx0XHRcdFx0XHRcdFtzdHlsZXMuZmlsbGVkXTogaW5kZXggPCBjdXJyZW50UmFpdGluZyxcclxuXHRcdFx0XHRcdFx0W3N0eWxlcy5lZGl0YWJsZV06IGlzRWRpdGFibGVcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsoKSA9PiBjaGFuZ2VEaXNwbGF5KGluZGV4ICsgMSl9XHJcblx0XHRcdFx0XHRvbk1vdXNlTGVhdmU9eygpID0+IGNoYW5nZURpc3BsYXkocmFpdGluZyl9XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGluZGV4ICsgMSl9XHJcblx0XHRcdFx0XHR0YWJJbmRleD17Y29tcHV0ZUZvY3VzKHJhaXRpbmcpfVxyXG5cdFx0XHRcdFx0b25LZXlEb3duPXtoYW5kZWxLZXl9XHJcblx0XHRcdFx0XHRyZWY9eyByID0+IHJhaXRpbmdBcnJheVJlZi5jdXJyZW50Py5wdXNoKHIpfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxTdGFySWNvbiBcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ+PC9TdGFySWNvbj5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHRcdHNldFJhaXRpbmdBcnJheSh1cGRhdGVkQXJyYXkpXHJcblx0fTtcclxuXHJcblx0Y29uc3QgY2hhbmdlRGlzcGxheSA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRpZighaXNFZGl0YWJsZSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdHJ1Y3RSYWl0aW5nKGluZGV4KVxyXG5cdH1cclxuXHJcblx0Y29uc3Qgb25DbGljayA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRpZighaXNFZGl0YWJsZSB8fCAhc2V0UmFpdGluZykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRzZXRSYWl0aW5nKGluZGV4KVxyXG5cdH1cclxuXHJcblx0Y29uc3QgaGFuZGVsS2V5ID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuXHRcdGlmICghaXNFZGl0YWJsZSB8fCAhc2V0UmFpdGluZykge1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH07XHJcblx0XHRpZiAoZS5jb2RlID09IFwiQXJyb3dSaWdodFwiIHx8IGUuY29kZSA9PSBcIkFycm93VXBcIiApIHtcclxuXHRcdFx0aWYoIXJhaXRpbmcpIHtcclxuXHRcdFx0XHRzZXRSYWl0aW5nKDEpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRcdFx0c2V0UmFpdGluZyhyYWl0aW5nIDwgNSA/IHJhaXRpbmcgKyAxIDogNSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRpZiAoZS5jb2RlID09IFwiQXJyb3dMZWZ0XCIgfHwgZS5jb2RlID09IFwiQXJyb3dEb3duXCIgKSB7XHJcblx0XHRcdGlmKCFyYWl0aW5nKSB7XHJcblx0XHRcdFx0c2V0UmFpdGluZygxKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHRcdHNldFJhaXRpbmcocmFpdGluZyA+IDEgPyByYWl0aW5nIC0gMSA6IDEpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiB7Li4ucHJvcHN9IHJlZj17cmVmfSBjbGFzc05hbWU9e2NuKHN0eWxlcy5yYWl0aW5nV3JhcHBlciwge1xyXG5cdFx0XHRbc3R5bGVzLmVycm9yXTogZXJyb3JcclxuXHRcdH0pfT5cclxuXHRcdFx0e3JhaXRpbmdBcnJheS5tYXAoKGVsOiBKU1guRWxlbWVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0XHRcdHJldHVybihcclxuXHRcdFx0XHRcdDxzcGFuIGtleT17aW5kZXh9PntlbH08L3NwYW4+XHJcblx0XHRcdFx0KVxyXG5cdFx0XHR9KX1cclxuXHRcdFx0e2Vycm9yICYmIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yTWVzc2FnZX0+e2Vycm9yLm1lc3NhZ2V9PC9zcGFuPn1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9