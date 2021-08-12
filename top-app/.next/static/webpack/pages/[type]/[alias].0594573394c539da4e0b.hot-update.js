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
      props = Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["isEditable", "raiting", "setRaiting"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(new Array(5).fill( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {}, void 0, false))),
      raitingArray = _useState[0],
      setRaitingArray = _useState[1];

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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_star_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
          tabIndex: isEditable ? 0 : -1,
          onKeyDown: function onKeyDown(e) {
            return isEditable && handelSpace(index + 1, e);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
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

  var handelSpace = function handelSpace(index, e) {
    if (e.code != "Space" || !setRaiting) {
      return;
    }

    setRaiting(index);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({}, props), {}, {
    ref: ref,
    children: raitingArray.map(function (el, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: el
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 6
      }, _this);
    })
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYWl0aW5nL1JhaXRpbmcudHN4Il0sIm5hbWVzIjpbIlJhaXRpbmciLCJmb3J3YXJkUmVmIiwicmVmIiwiaXNFZGl0YWJsZSIsInJhaXRpbmciLCJzZXRSYWl0aW5nIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIkFycmF5IiwiZmlsbCIsInJhaXRpbmdBcnJheSIsInNldFJhaXRpbmdBcnJheSIsInVzZUVmZmVjdCIsImNvbnN0cnVjdFJhaXRpbmciLCJjdXJyZW50UmFpdGluZyIsInVwZGF0ZWRBcnJheSIsIm1hcCIsImVsIiwiaW5kZXgiLCJjbiIsInN0eWxlcyIsInN0YXIiLCJmaWxsZWQiLCJlZGl0YWJsZSIsImNoYW5nZURpc3BsYXkiLCJvbkNsaWNrIiwiZSIsImhhbmRlbFNwYWNlIiwiY29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxPQUFPLGdCQUFHQyx3REFBVSxTQUFDLGdCQUFzRUMsR0FBdEUsRUFBeUg7QUFBQTs7QUFBQSw2QkFBdEhDLFVBQXNIO0FBQUEsTUFBdEhBLFVBQXNILGdDQUF6RyxLQUF5RztBQUFBLE1BQWxHQyxPQUFrRyxRQUFsR0EsT0FBa0c7QUFBQSxNQUF6RkMsVUFBeUYsUUFBekZBLFVBQXlGO0FBQUEsTUFBMUVDLEtBQTBFOztBQUFBLGtCQUNsSEMsc0RBQVEsQ0FBZ0IsSUFBSUMsS0FBSixDQUFVLENBQVYsRUFBYUMsSUFBYixlQUFrQix1SkFBbEIsQ0FBaEIsQ0FEMEc7QUFBQSxNQUNuSkMsWUFEbUo7QUFBQSxNQUNySUMsZUFEcUk7O0FBRzFKQyx5REFBUyxDQUFDLFlBQU07QUFDZkMsb0JBQWdCLENBQUNULE9BQUQsQ0FBaEI7QUFDQSxHQUZRLEVBRU4sQ0FBQ0EsT0FBRCxDQUZNLENBQVQ7O0FBSUEsTUFBTVMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxjQUFELEVBQTRCO0FBQ3BELFFBQU1DLFlBQVksR0FBR0wsWUFBWSxDQUFDTSxHQUFiLENBQWlCLFVBQUNDLEVBQUQsRUFBa0JDLEtBQWxCLEVBQW9DO0FBQUE7O0FBQ3pFLDBCQUNDO0FBQ0MsaUJBQVMsRUFBRUMsaURBQUUsQ0FBQ0MsMERBQU0sQ0FBQ0MsSUFBUixtS0FDWEQsMERBQU0sQ0FBQ0UsTUFESSxFQUNLSixLQUFLLEdBQUdKLGNBRGIseUpBRVhNLDBEQUFNLENBQUNHLFFBRkksRUFFT3BCLFVBRlAsUUFEZDtBQUtDLG9CQUFZLEVBQUU7QUFBQSxpQkFBTXFCLGFBQWEsQ0FBQ04sS0FBSyxHQUFHLENBQVQsQ0FBbkI7QUFBQSxTQUxmO0FBTUMsb0JBQVksRUFBRTtBQUFBLGlCQUFNTSxhQUFhLENBQUNwQixPQUFELENBQW5CO0FBQUEsU0FOZjtBQU9DLGVBQU8sRUFBRTtBQUFBLGlCQUFNcUIsUUFBTyxDQUFDUCxLQUFLLEdBQUcsQ0FBVCxDQUFiO0FBQUEsU0FQVjtBQUFBLCtCQVNDLHFFQUFDLGlEQUFEO0FBQ0Msa0JBQVEsRUFBRWYsVUFBVSxHQUFHLENBQUgsR0FBTyxDQUFDLENBRDdCO0FBRUMsbUJBQVMsRUFBRSxtQkFBQ3VCLENBQUQ7QUFBQSxtQkFBbUN2QixVQUFVLElBQUl3QixXQUFXLENBQUNULEtBQUssR0FBRyxDQUFULEVBQVlRLENBQVosQ0FBNUQ7QUFBQTtBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFnQkEsS0FqQm9CLENBQXJCO0FBa0JBZixtQkFBZSxDQUFDSSxZQUFELENBQWY7QUFDQSxHQXBCRDs7QUFzQkEsTUFBTVMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDTixLQUFELEVBQW1CO0FBQ3hDLFFBQUcsQ0FBQ2YsVUFBSixFQUFnQjtBQUNmO0FBQ0E7O0FBQ0RVLG9CQUFnQixDQUFDSyxLQUFELENBQWhCO0FBQ0EsR0FMRDs7QUFPQSxNQUFNTyxRQUFPLEdBQUcsU0FBVkEsUUFBVSxDQUFDUCxLQUFELEVBQW1CO0FBQ2xDLFFBQUcsQ0FBQ2YsVUFBRCxJQUFlLENBQUNFLFVBQW5CLEVBQStCO0FBQzlCO0FBQ0E7O0FBQ0RBLGNBQVUsQ0FBQ2EsS0FBRCxDQUFWO0FBQ0EsR0FMRDs7QUFPQSxNQUFNUyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDVCxLQUFELEVBQWdCUSxDQUFoQixFQUFrRDtBQUNyRSxRQUFJQSxDQUFDLENBQUNFLElBQUYsSUFBVSxPQUFWLElBQXFCLENBQUN2QixVQUExQixFQUFzQztBQUNyQztBQUNBOztBQUNEQSxjQUFVLENBQUNhLEtBQUQsQ0FBVjtBQUNBLEdBTEQ7O0FBT0Esc0JBQ0MsNEdBQVNaLEtBQVQ7QUFBZ0IsT0FBRyxFQUFFSixHQUFyQjtBQUFBLGNBQ0VRLFlBQVksQ0FBQ00sR0FBYixDQUFpQixVQUFDQyxFQUFELEVBQWtCQyxLQUFsQixFQUFvQztBQUNyRCwwQkFDQztBQUFBLGtCQUFtQkQ7QUFBbkIsU0FBV0MsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFHQSxLQUpBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBU0EsQ0EzRGdDLGtDQUExQjtNQUFNbEIsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bdHlwZV0vW2FsaWFzXS4wNTk0NTczMzk0YzUzOWRhNGUwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmFpdGluZ1Byb3BzIH0gZnJvbSBcIi4vUmFpdGluZy5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1JhaXRpbmcubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgS2V5Ym9hcmRFdmVudCwgZm9yd2FyZFJlZiwgRm9yd2FyZGVkUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTdGFySWNvbiBmcm9tIFwiLi9zdGFyLnN2Z1wiXHJcblxyXG5leHBvcnQgY29uc3QgUmFpdGluZyA9IGZvcndhcmRSZWYoKHsgaXNFZGl0YWJsZSA9IGZhbHNlLCByYWl0aW5nLCBzZXRSYWl0aW5nLCAuLi5wcm9wcyB9OiBSYWl0aW5nUHJvcHMsIHJlZjogRm9yd2FyZGVkUmVmPEhUTUxEaXZFbGVtZW50Pik6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRjb25zdCBbcmFpdGluZ0FycmF5LCBzZXRSYWl0aW5nQXJyYXldID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4obmV3IEFycmF5KDUpLmZpbGwoPD48Lz4pKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3RydWN0UmFpdGluZyhyYWl0aW5nKTtcclxuXHR9LCBbcmFpdGluZ10pXHJcblxyXG5cdGNvbnN0IGNvbnN0cnVjdFJhaXRpbmcgPSAoY3VycmVudFJhaXRpbmc6IG51bWJlcikgPT4ge1xyXG5cdFx0Y29uc3QgdXBkYXRlZEFycmF5ID0gcmFpdGluZ0FycmF5Lm1hcCgoZWw6IEpTWC5FbGVtZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLnN0YXIsIHtcclxuXHRcdFx0XHRcdFx0W3N0eWxlcy5maWxsZWRdOiBpbmRleCA8IGN1cnJlbnRSYWl0aW5nLFxyXG5cdFx0XHRcdFx0XHRbc3R5bGVzLmVkaXRhYmxlXTogaXNFZGl0YWJsZVxyXG5cdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eygpID0+IGNoYW5nZURpc3BsYXkoaW5kZXggKyAxKX1cclxuXHRcdFx0XHRcdG9uTW91c2VMZWF2ZT17KCkgPT4gY2hhbmdlRGlzcGxheShyYWl0aW5nKX1cclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soaW5kZXggKyAxKX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8U3Rhckljb24gXHJcblx0XHRcdFx0XHRcdHRhYkluZGV4PXtpc0VkaXRhYmxlID8gMCA6IC0xfVxyXG5cdFx0XHRcdFx0XHRvbktleURvd249eyhlOiBLZXlib2FyZEV2ZW50PFNWR0FFbGVtZW50PikgPT4gaXNFZGl0YWJsZSAmJiBoYW5kZWxTcGFjZShpbmRleCArIDEsIGUpfVxyXG5cdFx0XHRcdFx0PjwvU3Rhckljb24+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0XHRzZXRSYWl0aW5nQXJyYXkodXBkYXRlZEFycmF5KVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNoYW5nZURpc3BsYXkgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0aWYoIWlzRWRpdGFibGUpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3RydWN0UmFpdGluZyhpbmRleClcclxuXHR9XHJcblxyXG5cdGNvbnN0IG9uQ2xpY2sgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0aWYoIWlzRWRpdGFibGUgfHwgIXNldFJhaXRpbmcpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0c2V0UmFpdGluZyhpbmRleClcclxuXHR9XHJcblxyXG5cdGNvbnN0IGhhbmRlbFNwYWNlID0gKGluZGV4OiBudW1iZXIsIGU6IEtleWJvYXJkRXZlbnQ8U1ZHQUVsZW1lbnQ+KSA9PiB7XHJcblx0XHRpZiAoZS5jb2RlICE9IFwiU3BhY2VcIiB8fCAhc2V0UmFpdGluZykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRzZXRSYWl0aW5nKGluZGV4KVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgey4uLnByb3BzfSByZWY9e3JlZn0+XHJcblx0XHRcdHtyYWl0aW5nQXJyYXkubWFwKChlbDogSlNYLkVsZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4oXHJcblx0XHRcdFx0XHQ8c3BhbiBrZXk9e2luZGV4fT57ZWx9PC9zcGFuPlxyXG5cdFx0XHRcdClcclxuXHRcdFx0fSl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==