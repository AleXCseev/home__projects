webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Raiting/Raiting.tsx":
/*!****************************************!*\
  !*** ./components/Raiting/Raiting.tsx ***!
  \****************************************/
/*! exports provided: Raiting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Raiting", function() { return Raiting; });
/* harmony import */ var C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Raiting.module.css */ "./components/Raiting/Raiting.module.css");
/* harmony import */ var _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Raiting_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _star_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./star.svg */ "./components/Raiting/star.svg");





var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\components\\Raiting\\Raiting.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Raiting = function Raiting(_ref) {
  _s();

  var _ref$isEditable = _ref.isEditable,
      isEditable = _ref$isEditable === void 0 ? false : _ref$isEditable,
      raiting = _ref.raiting,
      setRaiting = _ref.setRaiting,
      props = Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["isEditable", "raiting", "setRaiting"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(new Array(5).fill( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {}, void 0, false))),
      raitingArray = _useState[0],
      setRaitingArray = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    constructRaiting(raiting);
  }, [raiting]);

  var constructRaiting = function constructRaiting(currentRaiting) {
    var updatedArray = raitingArray.map(function (el, index) {
      var _cn;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_star_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.star, (_cn = {}, Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cn, _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filled, index < currentRaiting), Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cn, _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.editable, isEditable), _cn)),
        onMouseEnter: function onMouseEnter() {
          return changeDisplay(index + 1);
        },
        onMouseLeave: function onMouseLeave() {
          return changeDisplay(raiting);
        },
        onClick: function onClick() {
          return _onClick(index + 1);
        },
        tabIndex: isEditable ? 0 : -1
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({}, props), {}, {
    children: raitingArray.map(function (el, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: el
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 6
      }, _this);
    })
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 3
  }, _this);
};

_s(Raiting, "3Eo8XITou9EOeJ5zL4xkso03tp0=");

_c = Raiting;

var _c;

$RefreshReg$(_c, "Raiting");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYWl0aW5nL1JhaXRpbmcudHN4Il0sIm5hbWVzIjpbIlJhaXRpbmciLCJpc0VkaXRhYmxlIiwicmFpdGluZyIsInNldFJhaXRpbmciLCJwcm9wcyIsInVzZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwicmFpdGluZ0FycmF5Iiwic2V0UmFpdGluZ0FycmF5IiwidXNlRWZmZWN0IiwiY29uc3RydWN0UmFpdGluZyIsImN1cnJlbnRSYWl0aW5nIiwidXBkYXRlZEFycmF5IiwibWFwIiwiZWwiLCJpbmRleCIsImNuIiwic3R5bGVzIiwic3RhciIsImZpbGxlZCIsImVkaXRhYmxlIiwiY2hhbmdlRGlzcGxheSIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBc0Y7QUFBQTs7QUFBQSw2QkFBbkZDLFVBQW1GO0FBQUEsTUFBbkZBLFVBQW1GLGdDQUF0RSxLQUFzRTtBQUFBLE1BQS9EQyxPQUErRCxRQUEvREEsT0FBK0Q7QUFBQSxNQUF0REMsVUFBc0QsUUFBdERBLFVBQXNEO0FBQUEsTUFBdkNDLEtBQXVDOztBQUFBLGtCQUNwRUMsc0RBQVEsQ0FBZ0IsSUFBSUMsS0FBSixDQUFVLENBQVYsRUFBYUMsSUFBYixlQUFrQix1SkFBbEIsQ0FBaEIsQ0FENEQ7QUFBQSxNQUNyR0MsWUFEcUc7QUFBQSxNQUN2RkMsZUFEdUY7O0FBRzVHQyx5REFBUyxDQUFDLFlBQU07QUFDZkMsb0JBQWdCLENBQUNULE9BQUQsQ0FBaEI7QUFDQSxHQUZRLEVBRU4sQ0FBQ0EsT0FBRCxDQUZNLENBQVQ7O0FBSUEsTUFBTVMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxjQUFELEVBQTRCO0FBQ3BELFFBQU1DLFlBQVksR0FBR0wsWUFBWSxDQUFDTSxHQUFiLENBQWlCLFVBQUNDLEVBQUQsRUFBa0JDLEtBQWxCLEVBQW9DO0FBQUE7O0FBQ3pFLDBCQUNDLHFFQUFDLGlEQUFEO0FBQ0MsaUJBQVMsRUFBRUMsaURBQUUsQ0FBQ0MsMERBQU0sQ0FBQ0MsSUFBUixvS0FDWEQsMERBQU0sQ0FBQ0UsTUFESSxFQUNLSixLQUFLLEdBQUdKLGNBRGIsMEpBRVhNLDBEQUFNLENBQUNHLFFBRkksRUFFT3BCLFVBRlAsUUFEZDtBQUtDLG9CQUFZLEVBQUU7QUFBQSxpQkFBTXFCLGFBQWEsQ0FBQ04sS0FBSyxHQUFHLENBQVQsQ0FBbkI7QUFBQSxTQUxmO0FBTUMsb0JBQVksRUFBRTtBQUFBLGlCQUFNTSxhQUFhLENBQUNwQixPQUFELENBQW5CO0FBQUEsU0FOZjtBQU9DLGVBQU8sRUFBRTtBQUFBLGlCQUFNcUIsUUFBTyxDQUFDUCxLQUFLLEdBQUcsQ0FBVCxDQUFiO0FBQUEsU0FQVjtBQVFDLGdCQUFRLEVBQUVmLFVBQVUsR0FBRyxDQUFILEdBQU8sQ0FBQztBQVI3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFZQSxLQWJvQixDQUFyQjtBQWNBUSxtQkFBZSxDQUFDSSxZQUFELENBQWY7QUFDQSxHQWhCRDs7QUFrQkEsTUFBTVMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDTixLQUFELEVBQW1CO0FBQ3hDLFFBQUcsQ0FBQ2YsVUFBSixFQUFnQjtBQUNmO0FBQ0E7O0FBQ0RVLG9CQUFnQixDQUFDSyxLQUFELENBQWhCO0FBQ0EsR0FMRDs7QUFPQSxNQUFNTyxRQUFPLEdBQUcsU0FBVkEsUUFBVSxDQUFDUCxLQUFELEVBQW1CO0FBQ2xDLFFBQUcsQ0FBQ2YsVUFBRCxJQUFlLENBQUNFLFVBQW5CLEVBQStCO0FBQzlCO0FBQ0E7O0FBQ0RBLGNBQVUsQ0FBQ2EsS0FBRCxDQUFWO0FBQ0EsR0FMRDs7QUFPQSxzQkFDQyw0R0FBU1osS0FBVDtBQUFBLGNBQ0VJLFlBQVksQ0FBQ00sR0FBYixDQUFpQixVQUFDQyxFQUFELEVBQWtCQyxLQUFsQixFQUFvQztBQUNyRCwwQkFDQztBQUFBLGtCQUFtQkQ7QUFBbkIsU0FBV0MsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFHQSxLQUpBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBU0EsQ0FoRE07O0dBQU1oQixPOztLQUFBQSxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc3OThkZGI1ZDBmMDE2MmM4ZTI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYWl0aW5nUHJvcHMgfSBmcm9tIFwiLi9SYWl0aW5nLnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUmFpdGluZy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTdGFySWNvbiBmcm9tIFwiLi9zdGFyLnN2Z1wiXHJcblxyXG5leHBvcnQgY29uc3QgUmFpdGluZyA9ICh7IGlzRWRpdGFibGUgPSBmYWxzZSwgcmFpdGluZywgc2V0UmFpdGluZywgLi4ucHJvcHMgfTogUmFpdGluZ1Byb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IFtyYWl0aW5nQXJyYXksIHNldFJhaXRpbmdBcnJheV0gPSB1c2VTdGF0ZTxKU1guRWxlbWVudFtdPihuZXcgQXJyYXkoNSkuZmlsbCg8PjwvPikpXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdHJ1Y3RSYWl0aW5nKHJhaXRpbmcpO1xyXG5cdH0sIFtyYWl0aW5nXSlcclxuXHJcblx0Y29uc3QgY29uc3RydWN0UmFpdGluZyA9IChjdXJyZW50UmFpdGluZzogbnVtYmVyKSA9PiB7XHJcblx0XHRjb25zdCB1cGRhdGVkQXJyYXkgPSByYWl0aW5nQXJyYXkubWFwKChlbDogSlNYLkVsZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8U3Rhckljb24gXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlcy5zdGFyLCB7XHJcblx0XHRcdFx0XHRcdFtzdHlsZXMuZmlsbGVkXTogaW5kZXggPCBjdXJyZW50UmFpdGluZyxcclxuXHRcdFx0XHRcdFx0W3N0eWxlcy5lZGl0YWJsZV06IGlzRWRpdGFibGVcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsoKSA9PiBjaGFuZ2VEaXNwbGF5KGluZGV4ICsgMSl9XHJcblx0XHRcdFx0XHRvbk1vdXNlTGVhdmU9eygpID0+IGNoYW5nZURpc3BsYXkocmFpdGluZyl9XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGluZGV4ICsgMSl9XHJcblx0XHRcdFx0XHR0YWJJbmRleD17aXNFZGl0YWJsZSA/IDAgOiAtMX1cclxuXHRcdFx0XHQ+PC9TdGFySWNvbj5cclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cdFx0c2V0UmFpdGluZ0FycmF5KHVwZGF0ZWRBcnJheSlcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjaGFuZ2VEaXNwbGF5ID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdGlmKCFpc0VkaXRhYmxlKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGNvbnN0cnVjdFJhaXRpbmcoaW5kZXgpXHJcblx0fVxyXG5cclxuXHRjb25zdCBvbkNsaWNrID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdGlmKCFpc0VkaXRhYmxlIHx8ICFzZXRSYWl0aW5nKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHNldFJhaXRpbmcoaW5kZXgpXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiB7Li4ucHJvcHN9PlxyXG5cdFx0XHR7cmFpdGluZ0FycmF5Lm1hcCgoZWw6IEpTWC5FbGVtZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuKFxyXG5cdFx0XHRcdFx0PHNwYW4ga2V5PXtpbmRleH0+e2VsfTwvc3Bhbj5cclxuXHRcdFx0XHQpXHJcblx0XHRcdH0pfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==