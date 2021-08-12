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
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReviewForm.module.css */ "./components/ReviewForm/ReviewForm.module.css");
/* harmony import */ var _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .. */ "./components/index.ts");
/* harmony import */ var _close_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./close.svg */ "./components/ReviewForm/close.svg");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");




var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\ReviewForm\\ReviewForm.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var ReviewForm = function ReviewForm(_ref) {
  _s();

  var productId = _ref.productId,
      className = _ref.className,
      props = Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["productId", "className"]);

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_8__["useForm"])(),
      register = _useForm.register,
      control = _useForm.control,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors;

  var onSubmit = function onSubmit(data) {
    console.log(data);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
    onSubmit: handleSubmit(onSubmit),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.reviewForm, className)
    }, props), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Input"], _objectSpread(_objectSpread({}, register('name', {
        required: {
          value: true,
          message: "Заполните имя"
        }
      })), {}, {
        placeholder: "\u0418\u043C\u044F",
        error: errors.name
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Input"], _objectSpread(_objectSpread({}, register('title', {
        required: {
          value: true,
          message: "Заполните заголовок"
        }
      })), {}, {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
        placeholder: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
        error: errors.title
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.raiting,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          children: "\u041E\u0446\u0435\u043D\u043A\u0430:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_hook_form__WEBPACK_IMPORTED_MODULE_8__["Controller"], {
          control: control,
          name: "raiting",
          render: function render(_ref2) {
            var field = _ref2.field;
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Raiting"], {
              raiting: field.value,
              ref: field.ref,
              isEditable: true,
              setRaiting: field.onChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 8
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Textarea"], _objectSpread(_objectSpread({}, register("description", {
        required: {
          value: true,
          message: "Заполните отзыв"
        }
      })), {}, {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.description,
        placeholder: "\u0422\u0435\u043A\u0441\u0442 \u043E\u0442\u0437\u044B\u0432\u0430",
        error: errors.description
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.submit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Button"], {
          appearance: "primary",
          children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.info,
          children: "* \u041F\u0435\u0440\u0435\u0434 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0435\u0439 \u043E\u0442\u0437\u044B\u0432 \u043F\u0440\u043E\u0439\u0434\u0435\u0442 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u043C\u043E\u0434\u0435\u0440\u0430\u0446\u0438\u044E \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, _this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.success,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.successTitle,
        children: "\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.description,
        children: "\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432 \u0431\u0443\u0434\u0435\u0442 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_close_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.close
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }, _this);
};

_s(ReviewForm, "e5dDhUE5ZhZ5FADv/kmM0jCu9Cw=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_8__["useForm"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXZpZXdGb3JtL1Jldmlld0Zvcm0udHN4Il0sIm5hbWVzIjpbIlJldmlld0Zvcm0iLCJwcm9kdWN0SWQiLCJjbGFzc05hbWUiLCJwcm9wcyIsInVzZUZvcm0iLCJyZWdpc3RlciIsImNvbnRyb2wiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY24iLCJzdHlsZXMiLCJyZXZpZXdGb3JtIiwicmVxdWlyZWQiLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJuYW1lIiwidGl0bGUiLCJyYWl0aW5nIiwiZmllbGQiLCJyZWYiLCJvbkNoYW5nZSIsImRlc2NyaXB0aW9uIiwic3VibWl0IiwiaW5mbyIsInN1Y2Nlc3MiLCJzdWNjZXNzVGl0bGUiLCJjbG9zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXNFO0FBQUE7O0FBQUEsTUFBbkVDLFNBQW1FLFFBQW5FQSxTQUFtRTtBQUFBLE1BQXhEQyxTQUF3RCxRQUF4REEsU0FBd0Q7QUFBQSxNQUExQ0MsS0FBMEM7O0FBQUEsaUJBQzdCQywrREFBTyxFQURzQjtBQUFBLE1BQ3ZGQyxRQUR1RixZQUN2RkEsUUFEdUY7QUFBQSxNQUM3RUMsT0FENkUsWUFDN0VBLE9BRDZFO0FBQUEsTUFDcEVDLFlBRG9FLFlBQ3BFQSxZQURvRTtBQUFBLE1BQ3pDQyxNQUR5QyxZQUN0REMsU0FEc0QsQ0FDekNELE1BRHlDOztBQUcvRixNQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQXVCO0FBQ3ZDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLEdBRkQ7O0FBSUEsc0JBQ0M7QUFBTSxZQUFRLEVBQUVKLFlBQVks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QUFBO0FBQUEsV0FERDtBQXlDQSxDQWhETTs7R0FBTS9CLFU7VUFDc0RJLHVEOzs7S0FEdERKLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3R5cGVdL1thbGlhc10uNTc3MjdhYjI4YzZjNDYwN2E1OTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJldmlld0Zvcm1Qcm9wcyB9IGZyb20gXCIuL1Jldmlld0Zvcm0ucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9SZXZpZXdGb3JtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCwgUmFpdGluZywgVGV4dGFyZWEgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tIFwiLi9jbG9zZS5zdmdcIlxyXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgeyBJUmV2aWV3Rm9ybSB9IGZyb20gXCIuL1Jldmlld0Zvcm0uaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUmV2aWV3Rm9ybSA9ICh7IHByb2R1Y3RJZCwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZXZpZXdGb3JtUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0Y29uc3QgeyByZWdpc3RlciwgY29udHJvbCwgaGFuZGxlU3VibWl0LCBmb3JtU3RhdGU6IHsgZXJyb3JzIH19ID0gdXNlRm9ybTxJUmV2aWV3Rm9ybT4oKVxyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IChkYXRhOiBJUmV2aWV3Rm9ybSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSlcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMucmV2aWV3Rm9ybSwgY2xhc3NOYW1lKX0gey4uLnByb3BzfT5cclxuXHRcdFx0XHQ8SW5wdXQgXHJcblx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ25hbWUnLCB7IHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiBcItCX0LDQv9C+0LvQvdC40YLQtSDQuNC80Y9cIiB9fSl9IFxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQmNC80Y9cIlxyXG5cdFx0XHRcdFx0ZXJyb3I9e2Vycm9ycy5uYW1lfVxyXG5cdFx0XHRcdD48L0lucHV0PlxyXG5cdFx0XHRcdDxJbnB1dCBcclxuXHRcdFx0XHRcdHsuLi5yZWdpc3RlcigndGl0bGUnLCB7IHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiBcItCX0LDQv9C+0LvQvdC40YLQtSDQt9Cw0LPQvtC70L7QstC+0LpcIiB9fSl9IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfSBcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0JfQsNCz0L7Qu9C+0LLQvtC6XCJcclxuXHRcdFx0XHRcdGVycm9yPXtlcnJvcnMudGl0bGV9XHJcblx0XHRcdFx0PjwvSW5wdXQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYWl0aW5nfT5cclxuXHRcdFx0XHRcdDxzcGFuPtCe0YbQtdC90LrQsDo8L3NwYW4+XHJcblx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRuYW1lPSdyYWl0aW5nJ1xyXG5cdFx0XHRcdFx0XHRyZW5kZXI9eyggeyBmaWVsZCB9ICkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxSYWl0aW5nIHJhaXRpbmc9e2ZpZWxkLnZhbHVlfSByZWY9e2ZpZWxkLnJlZn0gaXNFZGl0YWJsZT17dHJ1ZX0gc2V0UmFpdGluZz17ZmllbGQub25DaGFuZ2V9PjwvUmFpdGluZz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PFRleHRhcmVhIFxyXG5cdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKFwiZGVzY3JpcHRpb25cIiwgeyByZXF1aXJlZDogeyB2YWx1ZTogdHJ1ZSwgbWVzc2FnZTogXCLQl9Cw0L/QvtC70L3QuNGC0LUg0L7RgtC30YvQslwiIH19KX0gXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0gXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCi0LXQutGB0YIg0L7RgtC30YvQstCwXCJcclxuXHRcdFx0XHRcdGVycm9yPXtlcnJvcnMuZGVzY3JpcHRpb259XHJcblx0XHRcdFx0PjwvVGV4dGFyZWE+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXR9PlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiPtCe0YLQv9GA0LDQstC40YLRjDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+KiDQn9C10YDQtdC0INC/0YPQsdC70LjQutCw0YbQuNC10Lkg0L7RgtC30YvQsiDQv9GA0L7QudC00LXRgiDQv9GA0LXQtNCy0LDRgNC40YLQtdC70YzQvdGD0Y4g0LzQvtC00LXRgNCw0YbQuNGOINC4INC/0YDQvtCy0LXRgNC60YM8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1Y2Nlc3N9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VjY2Vzc1RpdGxlfT7QktCw0Ygg0L7RgtC30YvQsiDQvtGC0L/RgNCw0LLQu9C10L08L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT7QktCw0Ygg0L7RgtC30YvQsiDQsdGD0LTQtdGCINC+0L/Rg9Cx0LvQuNC60L7QstCw0L0g0L/QvtGB0LvQtSDQv9GA0L7QstC10YDQutC4PC9kaXY+XHJcblx0XHRcdFx0PENsb3NlSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZX0+PC9DbG9zZUljb24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9mb3JtPlxyXG5cdCk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=