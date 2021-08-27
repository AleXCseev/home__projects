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
        tabIndex: computeFocus(re),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYWl0aW5nL1JhaXRpbmcudHN4Il0sIm5hbWVzIjpbIlJhaXRpbmciLCJmb3J3YXJkUmVmIiwicmVmIiwiaXNFZGl0YWJsZSIsInJhaXRpbmciLCJzZXRSYWl0aW5nIiwiZXJyb3IiLCJwcm9wcyIsInVzZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwicmFpdGluZ0FycmF5Iiwic2V0UmFpdGluZ0FycmF5IiwicmFpdGluZ0FycmF5UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY29uc3RydWN0UmFpdGluZyIsImNvbXB1dGVGb2N1cyIsInIiLCJpIiwiY3VycmVudFJhaXRpbmciLCJ1cGRhdGVkQXJyYXkiLCJtYXAiLCJlbCIsImluZGV4IiwiY24iLCJzdHlsZXMiLCJzdGFyIiwiZmlsbGVkIiwiZWRpdGFibGUiLCJjaGFuZ2VEaXNwbGF5Iiwib25DbGljayIsInJlIiwiaGFuZGVsS2V5IiwiY3VycmVudCIsInB1c2giLCJlIiwiY29kZSIsInByZXZlbnREZWZhdWx0IiwicmFpdGluZ1dyYXBwZXIiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE9BQU8sZ0JBQUdDLHdEQUFVLFNBQUMsZ0JBQTZFQyxHQUE3RSxFQUFnSTtBQUFBOztBQUFBLDZCQUE3SEMsVUFBNkg7QUFBQSxNQUE3SEEsVUFBNkgsZ0NBQWhILEtBQWdIO0FBQUEsTUFBekdDLE9BQXlHLFFBQXpHQSxPQUF5RztBQUFBLE1BQWhHQyxVQUFnRyxRQUFoR0EsVUFBZ0c7QUFBQSxNQUFwRkMsS0FBb0YsUUFBcEZBLEtBQW9GO0FBQUEsTUFBMUVDLEtBQTBFOztBQUFBLGtCQUN6SEMsc0RBQVEsQ0FBZ0IsSUFBSUMsS0FBSixDQUFVLENBQVYsRUFBYUMsSUFBYixlQUFrQix1SkFBbEIsQ0FBaEIsQ0FEaUg7QUFBQSxNQUMxSkMsWUFEMEo7QUFBQSxNQUM1SUMsZUFENEk7O0FBRWpLLE1BQU1DLGVBQWUsR0FBR0Msb0RBQU0sQ0FBNkIsSUFBN0IsQ0FBOUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2ZDLG9CQUFnQixDQUFDWixPQUFELENBQWhCO0FBQ0EsR0FGUSxFQUVOLENBQUNBLE9BQUQsQ0FGTSxDQUFUOztBQUlBLE1BQU1hLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBV0MsQ0FBWCxFQUFnQyxDQUVwRCxDQUZEOztBQUlBLE1BQU1ILGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0ksY0FBRCxFQUE0QjtBQUNwRCxRQUFNQyxZQUFZLEdBQUdWLFlBQVksQ0FBQ1csR0FBYixDQUFpQixVQUFDQyxFQUFELEVBQWtCQyxLQUFsQixFQUFvQztBQUFBOztBQUN6RSwwQkFDQztBQUNDLGlCQUFTLEVBQUVDLGlEQUFFLENBQUNDLDBEQUFNLENBQUNDLElBQVIsbUtBQ1hELDBEQUFNLENBQUNFLE1BREksRUFDS0osS0FBSyxHQUFHSixjQURiLHlKQUVYTSwwREFBTSxDQUFDRyxRQUZJLEVBRU8xQixVQUZQLFFBRGQ7QUFLQyxvQkFBWSxFQUFFO0FBQUEsaUJBQU0yQixhQUFhLENBQUNOLEtBQUssR0FBRyxDQUFULENBQW5CO0FBQUEsU0FMZjtBQU1DLG9CQUFZLEVBQUU7QUFBQSxpQkFBTU0sYUFBYSxDQUFDMUIsT0FBRCxDQUFuQjtBQUFBLFNBTmY7QUFPQyxlQUFPLEVBQUU7QUFBQSxpQkFBTTJCLFFBQU8sQ0FBQ1AsS0FBSyxHQUFHLENBQVQsQ0FBYjtBQUFBLFNBUFY7QUFRQyxnQkFBUSxFQUFFUCxZQUFZLENBQUNlLEVBQUQsQ0FSdkI7QUFTQyxpQkFBUyxFQUFFQyxTQVRaO0FBVUMsV0FBRyxFQUFHLGFBQUFmLENBQUM7QUFBQTs7QUFBQSwwQ0FBSUwsZUFBZSxDQUFDcUIsT0FBcEIsMERBQUksc0JBQXlCQyxJQUF6QixDQUE4QmpCLENBQTlCLENBQUo7QUFBQSxTQVZSO0FBQUEsK0JBWUMscUVBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQWtCQSxLQW5Cb0IsQ0FBckI7QUFvQkFOLG1CQUFlLENBQUNTLFlBQUQsQ0FBZjtBQUNBLEdBdEJEOztBQXdCQSxNQUFNUyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNOLEtBQUQsRUFBbUI7QUFDeEMsUUFBRyxDQUFDckIsVUFBSixFQUFnQjtBQUNmO0FBQ0E7O0FBQ0RhLG9CQUFnQixDQUFDUSxLQUFELENBQWhCO0FBQ0EsR0FMRDs7QUFPQSxNQUFNTyxRQUFPLEdBQUcsU0FBVkEsUUFBVSxDQUFDUCxLQUFELEVBQW1CO0FBQ2xDLFFBQUcsQ0FBQ3JCLFVBQUQsSUFBZSxDQUFDRSxVQUFuQixFQUErQjtBQUM5QjtBQUNBOztBQUNEQSxjQUFVLENBQUNtQixLQUFELENBQVY7QUFDQSxHQUxEOztBQU9BLE1BQU1TLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNHLENBQUQsRUFBc0I7QUFDdkMsUUFBSSxDQUFDakMsVUFBRCxJQUFlLENBQUNFLFVBQXBCLEVBQWdDO0FBQy9CO0FBQ0E7O0FBQUE7O0FBQ0QsUUFBSStCLENBQUMsQ0FBQ0MsSUFBRixJQUFVLFlBQVYsSUFBMEJELENBQUMsQ0FBQ0MsSUFBRixJQUFVLFNBQXhDLEVBQW9EO0FBQ25ELFVBQUcsQ0FBQ2pDLE9BQUosRUFBYTtBQUNaQyxrQkFBVSxDQUFDLENBQUQsQ0FBVjtBQUNBLE9BRkQsTUFFTztBQUNOK0IsU0FBQyxDQUFDRSxjQUFGO0FBQ0FqQyxrQkFBVSxDQUFDRCxPQUFPLEdBQUcsQ0FBVixHQUFjQSxPQUFPLEdBQUcsQ0FBeEIsR0FBNEIsQ0FBN0IsQ0FBVjtBQUNBO0FBQ0Q7O0FBQUE7O0FBQ0QsUUFBSWdDLENBQUMsQ0FBQ0MsSUFBRixJQUFVLFdBQVYsSUFBeUJELENBQUMsQ0FBQ0MsSUFBRixJQUFVLFdBQXZDLEVBQXFEO0FBQ3BELFVBQUcsQ0FBQ2pDLE9BQUosRUFBYTtBQUNaQyxrQkFBVSxDQUFDLENBQUQsQ0FBVjtBQUNBLE9BRkQsTUFFTztBQUNOK0IsU0FBQyxDQUFDRSxjQUFGO0FBQ0FqQyxrQkFBVSxDQUFDRCxPQUFPLEdBQUcsQ0FBVixHQUFjQSxPQUFPLEdBQUcsQ0FBeEIsR0FBNEIsQ0FBN0IsQ0FBVjtBQUNBO0FBQ0Q7QUFDRCxHQXBCRDs7QUFzQkEsc0JBQ0MsNEdBQVNHLEtBQVQ7QUFBZ0IsT0FBRyxFQUFFTCxHQUFyQjtBQUEwQixhQUFTLEVBQUV1QixpREFBRSxDQUFDQywwREFBTSxDQUFDYSxjQUFSLHVKQUNyQ2IsMERBQU0sQ0FBQ3BCLEtBRDhCLEVBQ3RCQSxLQURzQixFQUF2QztBQUFBLGVBR0VLLFlBQVksQ0FBQ1csR0FBYixDQUFpQixVQUFDQyxFQUFELEVBQWtCQyxLQUFsQixFQUFvQztBQUNyRCwwQkFDQztBQUFBLGtCQUFtQkQ7QUFBbkIsU0FBV0MsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFHQSxLQUpBLENBSEYsRUFRRWxCLEtBQUssaUJBQUk7QUFBTSxlQUFTLEVBQUVvQiwwREFBTSxDQUFDYyxZQUF4QjtBQUFBLGdCQUF1Q2xDLEtBQUssQ0FBQ21DO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQVlBLENBcEZnQyxrQ0FBMUI7TUFBTXpDLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3R5cGVdL1thbGlhc10uZTE3YzBhYTEyNWFmMzJlYjU1MjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJhaXRpbmdQcm9wcyB9IGZyb20gXCIuL1JhaXRpbmcucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9SYWl0aW5nLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIEtleWJvYXJkRXZlbnQsIGZvcndhcmRSZWYsIEZvcndhcmRlZFJlZiwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTdGFySWNvbiBmcm9tIFwiLi9zdGFyLnN2Z1wiXHJcblxyXG5leHBvcnQgY29uc3QgUmFpdGluZyA9IGZvcndhcmRSZWYoKHsgaXNFZGl0YWJsZSA9IGZhbHNlLCByYWl0aW5nLCBzZXRSYWl0aW5nLCBlcnJvciwgLi4ucHJvcHMgfTogUmFpdGluZ1Byb3BzLCByZWY6IEZvcndhcmRlZFJlZjxIVE1MRGl2RWxlbWVudD4pOiBKU1guRWxlbWVudCA9PiB7XHJcblx0Y29uc3QgW3JhaXRpbmdBcnJheSwgc2V0UmFpdGluZ0FycmF5XSA9IHVzZVN0YXRlPEpTWC5FbGVtZW50W10+KG5ldyBBcnJheSg1KS5maWxsKDw+PC8+KSlcclxuXHRjb25zdCByYWl0aW5nQXJyYXlSZWYgPSB1c2VSZWY8KEhUTUxTcGFuRWxlbWVudCB8IG51bGwpW10+KG51bGwpXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdHJ1Y3RSYWl0aW5nKHJhaXRpbmcpO1xyXG5cdH0sIFtyYWl0aW5nXSlcclxuXHJcblx0Y29uc3QgY29tcHV0ZUZvY3VzID0gKHI6bnVtYmVyLCBpOm51bWJlcik6IG51bWJlciA9PiB7XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgY29uc3RydWN0UmFpdGluZyA9IChjdXJyZW50UmFpdGluZzogbnVtYmVyKSA9PiB7XHJcblx0XHRjb25zdCB1cGRhdGVkQXJyYXkgPSByYWl0aW5nQXJyYXkubWFwKChlbDogSlNYLkVsZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZXMuc3Rhciwge1xyXG5cdFx0XHRcdFx0XHRbc3R5bGVzLmZpbGxlZF06IGluZGV4IDwgY3VycmVudFJhaXRpbmcsXHJcblx0XHRcdFx0XHRcdFtzdHlsZXMuZWRpdGFibGVdOiBpc0VkaXRhYmxlXHJcblx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdG9uTW91c2VFbnRlcj17KCkgPT4gY2hhbmdlRGlzcGxheShpbmRleCArIDEpfVxyXG5cdFx0XHRcdFx0b25Nb3VzZUxlYXZlPXsoKSA9PiBjaGFuZ2VEaXNwbGF5KHJhaXRpbmcpfVxyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gb25DbGljayhpbmRleCArIDEpfVxyXG5cdFx0XHRcdFx0dGFiSW5kZXg9e2NvbXB1dGVGb2N1cyhyZSl9XHJcblx0XHRcdFx0XHRvbktleURvd249e2hhbmRlbEtleX1cclxuXHRcdFx0XHRcdHJlZj17IHIgPT4gcmFpdGluZ0FycmF5UmVmLmN1cnJlbnQ/LnB1c2gocil9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PFN0YXJJY29uIFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdD48L1N0YXJJY29uPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cdFx0c2V0UmFpdGluZ0FycmF5KHVwZGF0ZWRBcnJheSlcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjaGFuZ2VEaXNwbGF5ID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdGlmKCFpc0VkaXRhYmxlKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGNvbnN0cnVjdFJhaXRpbmcoaW5kZXgpXHJcblx0fVxyXG5cclxuXHRjb25zdCBvbkNsaWNrID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdGlmKCFpc0VkaXRhYmxlIHx8ICFzZXRSYWl0aW5nKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHNldFJhaXRpbmcoaW5kZXgpXHJcblx0fVxyXG5cclxuXHRjb25zdCBoYW5kZWxLZXkgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG5cdFx0aWYgKCFpc0VkaXRhYmxlIHx8ICFzZXRSYWl0aW5nKSB7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fTtcclxuXHRcdGlmIChlLmNvZGUgPT0gXCJBcnJvd1JpZ2h0XCIgfHwgZS5jb2RlID09IFwiQXJyb3dVcFwiICkge1xyXG5cdFx0XHRpZighcmFpdGluZykge1xyXG5cdFx0XHRcdHNldFJhaXRpbmcoMSlcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdFx0XHRzZXRSYWl0aW5nKHJhaXRpbmcgPCA1ID8gcmFpdGluZyArIDEgOiA1KTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdGlmIChlLmNvZGUgPT0gXCJBcnJvd0xlZnRcIiB8fCBlLmNvZGUgPT0gXCJBcnJvd0Rvd25cIiApIHtcclxuXHRcdFx0aWYoIXJhaXRpbmcpIHtcclxuXHRcdFx0XHRzZXRSYWl0aW5nKDEpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRcdFx0c2V0UmFpdGluZyhyYWl0aW5nID4gMSA/IHJhaXRpbmcgLSAxIDogMSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IHsuLi5wcm9wc30gcmVmPXtyZWZ9IGNsYXNzTmFtZT17Y24oc3R5bGVzLnJhaXRpbmdXcmFwcGVyLCB7XHJcblx0XHRcdFtzdHlsZXMuZXJyb3JdOiBlcnJvclxyXG5cdFx0fSl9PlxyXG5cdFx0XHR7cmFpdGluZ0FycmF5Lm1hcCgoZWw6IEpTWC5FbGVtZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuKFxyXG5cdFx0XHRcdFx0PHNwYW4ga2V5PXtpbmRleH0+e2VsfTwvc3Bhbj5cclxuXHRcdFx0XHQpXHJcblx0XHRcdH0pfVxyXG5cdFx0XHR7ZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JNZXNzYWdlfT57ZXJyb3IubWVzc2FnZX08L3NwYW4+fVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=