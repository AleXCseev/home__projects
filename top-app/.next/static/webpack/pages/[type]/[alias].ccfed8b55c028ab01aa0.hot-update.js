webpackHotUpdate_N_E("pages/[type]/[alias]",{

/***/ "./components/ReviewForm/ReviewForm.tsx":
/*!**********************************************!*\
  !*** ./components/ReviewForm/ReviewForm.tsx ***!
  \**********************************************/
/*! exports provided: ReviewForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewForm", function() { return ReviewForm; });
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReviewForm.module.css */ "./components/ReviewForm/ReviewForm.module.css");
/* harmony import */ var _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .. */ "./components/index.ts");
/* harmony import */ var _close_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./close.svg */ "./components/ReviewForm/close.svg");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");





var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\ReviewForm\\ReviewForm.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var ReviewForm = function ReviewForm(_ref) {
  _s();

  var productId = _ref.productId,
      className = _ref.className,
      props = Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["productId", "className"]);

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_9__["useForm"])(),
      register = _useForm.register,
      control = _useForm.control,
      handleSubmit = _useForm.handleSubmit;

  Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__["default"])(_useForm.formState);

  var onSubmit = function onSubmit(data) {
    console.log(data);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
    onSubmit: handleSubmit(onSubmit),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.reviewForm, className)
    }, props), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_7__["Input"], _objectSpread(_objectSpread({}, register('name', {
        required: {
          value: true,
          message: "Заполните имя"
        }
      })), {}, {
        placeholder: "\u0418\u043C\u044F"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_7__["Input"], _objectSpread(_objectSpread({}, register('title')), {}, {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
        placeholder: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.raiting,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          children: "\u041E\u0446\u0435\u043D\u043A\u0430:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_hook_form__WEBPACK_IMPORTED_MODULE_9__["Controller"], {
          control: control,
          name: "raiting",
          render: function render(_ref2) {
            var field = _ref2.field;
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_7__["Raiting"], {
              raiting: field.value,
              ref: field.ref,
              isEditable: true,
              setRaiting: field.onChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 8
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_7__["Textarea"], _objectSpread(_objectSpread({}, register("description")), {}, {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.description,
        placeholder: "\u0422\u0435\u043A\u0441\u0442 \u043E\u0442\u0437\u044B\u0432\u0430"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.submit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_7__["Button"], {
          appearance: "primary",
          children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.info,
          children: "* \u041F\u0435\u0440\u0435\u0434 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0435\u0439 \u043E\u0442\u0437\u044B\u0432 \u043F\u0440\u043E\u0439\u0434\u0435\u0442 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u043C\u043E\u0434\u0435\u0440\u0430\u0446\u0438\u044E \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, _this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.success,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.successTitle,
        children: "\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.description,
        children: "\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432 \u0431\u0443\u0434\u0435\u0442 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_close_svg__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.close
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 3
  }, _this);
};

_s(ReviewForm, "4toEJI4L87OZezLhumJyR3/mPQM=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_9__["useForm"]];
});

_c = ReviewForm;

var _c;

$RefreshReg$(_c, "ReviewForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXZpZXdGb3JtL1Jldmlld0Zvcm0udHN4Il0sIm5hbWVzIjpbIlJldmlld0Zvcm0iLCJwcm9kdWN0SWQiLCJjbGFzc05hbWUiLCJwcm9wcyIsInVzZUZvcm0iLCJyZWdpc3RlciIsImNvbnRyb2wiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY24iLCJzdHlsZXMiLCJyZXZpZXdGb3JtIiwicmVxdWlyZWQiLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJ0aXRsZSIsInJhaXRpbmciLCJmaWVsZCIsInJlZiIsIm9uQ2hhbmdlIiwiZGVzY3JpcHRpb24iLCJzdWJtaXQiLCJpbmZvIiwic3VjY2VzcyIsInN1Y2Nlc3NUaXRsZSIsImNsb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFzRTtBQUFBOztBQUFBLE1BQW5FQyxTQUFtRSxRQUFuRUEsU0FBbUU7QUFBQSxNQUF4REMsU0FBd0QsUUFBeERBLFNBQXdEO0FBQUEsTUFBMUNDLEtBQTBDOztBQUFBLGlCQUcxRkMsK0RBQU8sRUFIbUY7QUFBQSxNQUN2RkMsUUFEdUYsWUFDdkZBLFFBRHVGO0FBQUEsTUFDN0VDLE9BRDZFLFlBQzdFQSxPQUQ2RTtBQUFBLE1BQ3BFQyxZQURvRSxZQUNwRUEsWUFEb0U7O0FBQUEsc0tBQ3REQyxTQURzRDs7QUFLL0YsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUF1QjtBQUN2Q0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQSxHQUZEOztBQUlBLHNCQUNDO0FBQU0sWUFBUSxFQUFFSCxZQUFZLENBQUNFLFFBQUQsQ0FBNUI7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBRUksaURBQUUsQ0FBQ0MsNkRBQU0sQ0FBQ0MsVUFBUixFQUFvQmIsU0FBcEI7QUFBbEIsT0FBc0RDLEtBQXREO0FBQUEsOEJBQ0MscUVBQUMsdUNBQUQsa0NBQVdFLFFBQVEsQ0FBQyxNQUFELEVBQVM7QUFBRVcsZ0JBQVEsRUFBRTtBQUFFQyxlQUFLLEVBQUUsSUFBVDtBQUFlQyxpQkFBTyxFQUFFO0FBQXhCO0FBQVosT0FBVCxDQUFuQjtBQUFxRixtQkFBVyxFQUFDO0FBQWpHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDLHFFQUFDLHVDQUFELGtDQUFXYixRQUFRLENBQUMsT0FBRCxDQUFuQjtBQUE4QixpQkFBUyxFQUFFUyw2REFBTSxDQUFDSyxLQUFoRDtBQUF1RCxtQkFBVyxFQUFDO0FBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRCxlQUdDO0FBQUssaUJBQVMsRUFBRUwsNkRBQU0sQ0FBQ00sT0FBdkI7QUFBQSxnQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDLHFFQUFDLDBEQUFEO0FBQ0MsaUJBQU8sRUFBRWQsT0FEVjtBQUVDLGNBQUksRUFBQyxTQUZOO0FBR0MsZ0JBQU0sRUFBRTtBQUFBLGdCQUFJZSxLQUFKLFNBQUlBLEtBQUo7QUFBQSxnQ0FDUCxxRUFBQyx5Q0FBRDtBQUFTLHFCQUFPLEVBQUVBLEtBQUssQ0FBQ0osS0FBeEI7QUFBK0IsaUJBQUcsRUFBRUksS0FBSyxDQUFDQyxHQUExQztBQUErQyx3QkFBVSxFQUFFLElBQTNEO0FBQWlFLHdCQUFVLEVBQUVELEtBQUssQ0FBQ0U7QUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFETztBQUFBO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRCxlQWFDLHFFQUFDLDBDQUFELGtDQUFjbEIsUUFBUSxDQUFDLGFBQUQsQ0FBdEI7QUFBdUMsaUJBQVMsRUFBRVMsNkRBQU0sQ0FBQ1UsV0FBekQ7QUFBc0UsbUJBQVcsRUFBQztBQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkQsZUFjQztBQUFLLGlCQUFTLEVBQUVWLDZEQUFNLENBQUNXLE1BQXZCO0FBQUEsZ0NBQ0MscUVBQUMsd0NBQUQ7QUFBUSxvQkFBVSxFQUFDLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBRUM7QUFBTSxtQkFBUyxFQUFFWCw2REFBTSxDQUFDWSxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQW9CQztBQUFLLGVBQVMsRUFBRVosNkRBQU0sQ0FBQ2EsT0FBdkI7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUViLDZEQUFNLENBQUNjLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQztBQUFLLGlCQUFTLEVBQUVkLDZEQUFNLENBQUNVLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQsZUFHQyxxRUFBQyxrREFBRDtBQUFXLGlCQUFTLEVBQUVWLDZEQUFNLENBQUNlO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUE0QkEsQ0FyQ007O0dBQU03QixVO1VBR1BJLHVEOzs7S0FIT0osVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bdHlwZV0vW2FsaWFzXS5jY2ZlZDhiNTVjMDI4YWIwMWFhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmV2aWV3Rm9ybVByb3BzIH0gZnJvbSBcIi4vUmV2aWV3Rm9ybS5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1Jldmlld0Zvcm0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIElucHV0LCBSYWl0aW5nLCBUZXh0YXJlYSB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gXCIuL2Nsb3NlLnN2Z1wiXHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCB7IElSZXZpZXdGb3JtIH0gZnJvbSBcIi4vUmV2aWV3Rm9ybS5pbnRlcmZhY2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSZXZpZXdGb3JtID0gKHsgcHJvZHVjdElkLCBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJldmlld0Zvcm1Qcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRjb25zdCB7IHJlZ2lzdGVyLCBjb250cm9sLCBoYW5kbGVTdWJtaXQsIGZvcm1TdGF0ZToge1xyXG5cdFx0XHJcblx0fX0gPSB1c2VGb3JtPElSZXZpZXdGb3JtPigpXHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gKGRhdGE6IElSZXZpZXdGb3JtKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy5yZXZpZXdGb3JtLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9PlxyXG5cdFx0XHRcdDxJbnB1dCB7Li4ucmVnaXN0ZXIoJ25hbWUnLCB7IHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiBcItCX0LDQv9C+0LvQvdC40YLQtSDQuNC80Y9cIiB9fSl9IHBsYWNlaG9sZGVyPVwi0JjQvNGPXCI+PC9JbnB1dD5cclxuXHRcdFx0XHQ8SW5wdXQgey4uLnJlZ2lzdGVyKCd0aXRsZScpfSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0gcGxhY2Vob2xkZXI9XCLQl9Cw0LPQvtC70L7QstC+0LpcIj48L0lucHV0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmFpdGluZ30+XHJcblx0XHRcdFx0XHQ8c3Bhbj7QntGG0LXQvdC60LA6PC9zcGFuPlxyXG5cdFx0XHRcdFx0PENvbnRyb2xsZXJcclxuXHRcdFx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRcdFx0bmFtZT0ncmFpdGluZydcclxuXHRcdFx0XHRcdFx0cmVuZGVyPXsoIHsgZmllbGQgfSApID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8UmFpdGluZyByYWl0aW5nPXtmaWVsZC52YWx1ZX0gcmVmPXtmaWVsZC5yZWZ9IGlzRWRpdGFibGU9e3RydWV9IHNldFJhaXRpbmc9e2ZpZWxkLm9uQ2hhbmdlfT48L1JhaXRpbmc+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxUZXh0YXJlYSB7Li4ucmVnaXN0ZXIoXCJkZXNjcmlwdGlvblwiKX0gY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259IHBsYWNlaG9sZGVyPVwi0KLQtdC60YHRgiDQvtGC0LfRi9Cy0LBcIj48L1RleHRhcmVhPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VibWl0fT5cclxuXHRcdFx0XHRcdDxCdXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIj7QntGC0L/RgNCw0LLQuNGC0Yw8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmluZm99Piog0J/QtdGA0LXQtCDQv9GD0LHQu9C40LrQsNGG0LjQtdC5INC+0YLQt9GL0LIg0L/RgNC+0LnQtNC10YIg0L/RgNC10LTQstCw0YDQuNGC0LXQu9GM0L3Rg9GOINC80L7QtNC10YDQsNGG0LjRjiDQuCDQv9GA0L7QstC10YDQutGDPC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWNjZXNzfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1Y2Nlc3NUaXRsZX0+0JLQsNGIINC+0YLQt9GL0LIg0L7RgtC/0YDQsNCy0LvQtdC9PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+0JLQsNGIINC+0YLQt9GL0LIg0LHRg9C00LXRgiDQvtC/0YPQsdC70LjQutC+0LLQsNC9INC/0L7RgdC70LUg0L/RgNC+0LLQtdGA0LrQuDwvZGl2PlxyXG5cdFx0XHRcdDxDbG9zZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2V9PjwvQ2xvc2VJY29uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZm9ybT5cclxuXHQpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9