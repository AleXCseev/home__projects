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
          onKeyDown: handelKey
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

  var handelKey = function handelKey(e) {
    if (!isEditable || !setRaiting) {
      return;
    }

    ;

    if (e.code == "ArrowRight" || e.code == "ArrowUp") {
      if (!raiting) {
        setRaiting(1);
      } else {}

      e.preventDefault();
      setRaiting(raiting + 1);
    }

    ;

    if (e.code == "ArrowLeft" || e.code == "ArrowDown") {
      e.preventDefault();
      setRaiting(raiting - 1);
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
        lineNumber: 75,
        columnNumber: 6
      }, _this);
    }), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      className: _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.errorMessage,
      children: error.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 14
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYWl0aW5nL1JhaXRpbmcudHN4Il0sIm5hbWVzIjpbIlJhaXRpbmciLCJmb3J3YXJkUmVmIiwicmVmIiwiaXNFZGl0YWJsZSIsInJhaXRpbmciLCJzZXRSYWl0aW5nIiwiZXJyb3IiLCJwcm9wcyIsInVzZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwicmFpdGluZ0FycmF5Iiwic2V0UmFpdGluZ0FycmF5IiwidXNlRWZmZWN0IiwiY29uc3RydWN0UmFpdGluZyIsImN1cnJlbnRSYWl0aW5nIiwidXBkYXRlZEFycmF5IiwibWFwIiwiZWwiLCJpbmRleCIsImNuIiwic3R5bGVzIiwic3RhciIsImZpbGxlZCIsImVkaXRhYmxlIiwiY2hhbmdlRGlzcGxheSIsIm9uQ2xpY2siLCJoYW5kZWxLZXkiLCJlIiwiY29kZSIsInByZXZlbnREZWZhdWx0IiwicmFpdGluZ1dyYXBwZXIiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE9BQU8sZ0JBQUdDLHdEQUFVLFNBQUMsZ0JBQTZFQyxHQUE3RSxFQUFnSTtBQUFBOztBQUFBLDZCQUE3SEMsVUFBNkg7QUFBQSxNQUE3SEEsVUFBNkgsZ0NBQWhILEtBQWdIO0FBQUEsTUFBekdDLE9BQXlHLFFBQXpHQSxPQUF5RztBQUFBLE1BQWhHQyxVQUFnRyxRQUFoR0EsVUFBZ0c7QUFBQSxNQUFwRkMsS0FBb0YsUUFBcEZBLEtBQW9GO0FBQUEsTUFBMUVDLEtBQTBFOztBQUFBLGtCQUN6SEMsc0RBQVEsQ0FBZ0IsSUFBSUMsS0FBSixDQUFVLENBQVYsRUFBYUMsSUFBYixlQUFrQix1SkFBbEIsQ0FBaEIsQ0FEaUg7QUFBQSxNQUMxSkMsWUFEMEo7QUFBQSxNQUM1SUMsZUFENEk7O0FBR2pLQyx5REFBUyxDQUFDLFlBQU07QUFDZkMsb0JBQWdC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LEVBUUViLEtBQUssaUJBQUk7QUFBTSxlQUFTLEVBQUVlLDBEQUFNLENBQUNXLFlBQXhCO0FBQUEsZ0JBQXVDMUIsS0FBSyxDQUFDMkI7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBWUEsQ0ExRWdDLGtDQUExQjtNQUFNakMsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bdHlwZV0vW2FsaWFzXS4zOGMyYmIyNDM1M2JhOTJhZTQ2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmFpdGluZ1Byb3BzIH0gZnJvbSBcIi4vUmFpdGluZy5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1JhaXRpbmcubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgS2V5Ym9hcmRFdmVudCwgZm9yd2FyZFJlZiwgRm9yd2FyZGVkUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTdGFySWNvbiBmcm9tIFwiLi9zdGFyLnN2Z1wiXHJcblxyXG5leHBvcnQgY29uc3QgUmFpdGluZyA9IGZvcndhcmRSZWYoKHsgaXNFZGl0YWJsZSA9IGZhbHNlLCByYWl0aW5nLCBzZXRSYWl0aW5nLCBlcnJvciwgLi4ucHJvcHMgfTogUmFpdGluZ1Byb3BzLCByZWY6IEZvcndhcmRlZFJlZjxIVE1MRGl2RWxlbWVudD4pOiBKU1guRWxlbWVudCA9PiB7XHJcblx0Y29uc3QgW3JhaXRpbmdBcnJheSwgc2V0UmFpdGluZ0FycmF5XSA9IHVzZVN0YXRlPEpTWC5FbGVtZW50W10+KG5ldyBBcnJheSg1KS5maWxsKDw+PC8+KSlcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0cnVjdFJhaXRpbmcocmFpdGluZyk7XHJcblx0fSwgW3JhaXRpbmddKVxyXG5cclxuXHRjb25zdCBjb25zdHJ1Y3RSYWl0aW5nID0gKGN1cnJlbnRSYWl0aW5nOiBudW1iZXIpID0+IHtcclxuXHRcdGNvbnN0IHVwZGF0ZWRBcnJheSA9IHJhaXRpbmdBcnJheS5tYXAoKGVsOiBKU1guRWxlbWVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlcy5zdGFyLCB7XHJcblx0XHRcdFx0XHRcdFtzdHlsZXMuZmlsbGVkXTogaW5kZXggPCBjdXJyZW50UmFpdGluZyxcclxuXHRcdFx0XHRcdFx0W3N0eWxlcy5lZGl0YWJsZV06IGlzRWRpdGFibGVcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsoKSA9PiBjaGFuZ2VEaXNwbGF5KGluZGV4ICsgMSl9XHJcblx0XHRcdFx0XHRvbk1vdXNlTGVhdmU9eygpID0+IGNoYW5nZURpc3BsYXkocmFpdGluZyl9XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGluZGV4ICsgMSl9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PFN0YXJJY29uIFxyXG5cdFx0XHRcdFx0XHR0YWJJbmRleD17aXNFZGl0YWJsZSA/IDAgOiAtMX1cclxuXHRcdFx0XHRcdFx0b25LZXlEb3duPXtoYW5kZWxLZXl9XHJcblx0XHRcdFx0XHQ+PC9TdGFySWNvbj5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHRcdHNldFJhaXRpbmdBcnJheSh1cGRhdGVkQXJyYXkpXHJcblx0fTtcclxuXHJcblx0Y29uc3QgY2hhbmdlRGlzcGxheSA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRpZighaXNFZGl0YWJsZSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdHJ1Y3RSYWl0aW5nKGluZGV4KVxyXG5cdH1cclxuXHJcblx0Y29uc3Qgb25DbGljayA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRpZighaXNFZGl0YWJsZSB8fCAhc2V0UmFpdGluZykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRzZXRSYWl0aW5nKGluZGV4KVxyXG5cdH1cclxuXHJcblx0Y29uc3QgaGFuZGVsS2V5ID0gKGU6IEtleWJvYXJkRXZlbnQ8U1ZHQUVsZW1lbnQ+KSA9PiB7XHJcblx0XHRpZiAoIWlzRWRpdGFibGUgfHwgIXNldFJhaXRpbmcpIHtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9O1xyXG5cdFx0aWYgKGUuY29kZSA9PSBcIkFycm93UmlnaHRcIiB8fCBlLmNvZGUgPT0gXCJBcnJvd1VwXCIgKSB7XHJcblx0XHRcdGlmKCFyYWl0aW5nKSB7XHJcblx0XHRcdFx0c2V0UmFpdGluZygxKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHRzZXRSYWl0aW5nKHJhaXRpbmcgKyAxKTtcclxuXHRcdH07XHJcblx0XHRpZiAoZS5jb2RlID09IFwiQXJyb3dMZWZ0XCIgfHwgZS5jb2RlID09IFwiQXJyb3dEb3duXCIgKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHRzZXRSYWl0aW5nKHJhaXRpbmcgLSAxKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IHsuLi5wcm9wc30gcmVmPXtyZWZ9IGNsYXNzTmFtZT17Y24oc3R5bGVzLnJhaXRpbmdXcmFwcGVyLCB7XHJcblx0XHRcdFtzdHlsZXMuZXJyb3JdOiBlcnJvclxyXG5cdFx0fSl9PlxyXG5cdFx0XHR7cmFpdGluZ0FycmF5Lm1hcCgoZWw6IEpTWC5FbGVtZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuKFxyXG5cdFx0XHRcdFx0PHNwYW4ga2V5PXtpbmRleH0+e2VsfTwvc3Bhbj5cclxuXHRcdFx0XHQpXHJcblx0XHRcdH0pfVxyXG5cdFx0XHR7ZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JNZXNzYWdlfT57ZXJyb3IubWVzc2FnZX08L3NwYW4+fVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=