webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ReviewForm/ReviewForm.tsx":
/*!**********************************************!*\
  !*** ./components/ReviewForm/ReviewForm.tsx ***!
  \**********************************************/
/*! exports provided: ReviewForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewForm", function() { return ReviewForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReviewForm.module.css */ "./components/ReviewForm/ReviewForm.module.css");
/* harmony import */ var _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! .. */ "./components/index.ts");
/* harmony import */ var _close_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./close.svg */ "./components/ReviewForm/close.svg");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../helpers/api */ "./helpers/api.ts");






var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\ReviewForm\\ReviewForm.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var ReviewForm = function ReviewForm(_ref) {
  _s();

  var productId = _ref.productId,
      isOpened = _ref.isOpened,
      className = _ref.className,
      props = Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["productId", "isOpened", "className"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      isSuccess = _useState[0],
      setIsSuccess = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(),
      error = _useState2[0],
      setIsError = _useState2[1];

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_10__["useForm"])(),
      register = _useForm.register,
      control = _useForm.control,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors,
      reset = _useForm.reset,
      clearErrors = _useForm.clearErrors;

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(formData) {
      var _yield$axios$post, data;

      return C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post(_helpers_api__WEBPACK_IMPORTED_MODULE_12__["API"].review.createDemo, _objectSpread(_objectSpread({}, formData), {}, {
                productId: productId
              }));

            case 3:
              _yield$axios$post = _context.sent;
              data = _yield$axios$post.data;

              if (data.message) {
                setIsSuccess(true);
                reset();
              } else {
                setIsError("Что-то пошло не так");
              }

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              setIsError(_context.t0.message);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    onSubmit: handleSubmit(onSubmit),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.reviewForm, className)
    }, props), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_8__["Input"], _objectSpread(_objectSpread({}, register("name", {
        required: {
          value: true,
          message: "Заполните имя"
        }
      })), {}, {
        placeholder: "\u0418\u043C\u044F",
        error: errors.name,
        tabIndex: isOpened ? 0 : -1,
        "aria-invalid": errors.name ? true : false
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_8__["Input"], _objectSpread(_objectSpread({}, register("title", {
        required: {
          value: true,
          message: "Заполните заголовок"
        }
      })), {}, {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title,
        placeholder: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
        error: errors.title,
        tabIndex: isOpened ? 0 : -1,
        "aria-invalid": errors.title ? true : false
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.raiting,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "\u041E\u0446\u0435\u043D\u043A\u0430:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_hook_form__WEBPACK_IMPORTED_MODULE_10__["Controller"], {
          control: control,
          name: "rating",
          rules: {
            required: {
              value: true,
              message: "Укажите рейтинг"
            }
          },
          render: function render(_ref3) {
            var field = _ref3.field;
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_8__["Raiting"], {
              raiting: field.value,
              ref: field.ref,
              isEditable: true,
              setRaiting: field.onChange,
              error: errors.rating,
              tabIndex: isOpened ? 0 : -1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 8
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_8__["Textarea"], _objectSpread(_objectSpread({}, register("description", {
        required: {
          value: true,
          message: "Заполните отзыв"
        }
      })), {}, {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.description,
        placeholder: "\u0422\u0435\u043A\u0441\u0442 \u043E\u0442\u0437\u044B\u0432\u0430",
        error: errors.description,
        tabIndex: isOpened ? 0 : -1,
        "aria-label": "\u0442\u0435\u043A\u0441\u0442 \u043E\u0442\u0437\u044B\u0432\u0430",
        "aria-invalid": errors.description ? true : false
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.submit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_8__["Button"], {
          appearance: "primary",
          tabIndex: isOpened ? 0 : -1,
          onClick: function onClick() {
            return clearErrors();
          },
          children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.info,
          children: "* \u041F\u0435\u0440\u0435\u0434 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0435\u0439 \u043E\u0442\u0437\u044B\u0432 \u043F\u0440\u043E\u0439\u0434\u0435\u0442 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u043C\u043E\u0434\u0435\u0440\u0430\u0446\u0438\u044E \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 5
      }, _this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }, _this), isSuccess && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.success,
      role: "alert",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.successTitle,
        children: "\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 6
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.description,
        children: "\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432 \u0431\u0443\u0434\u0435\u0442 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 6
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 6
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }, _this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.error,
      role: "alert",
      children: ["\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_close_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.close,
        onClick: function onClick() {
          return setIsError(undefined);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 6
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 3
  }, _this);
};

_s(ReviewForm, "B6d6mL+tt8MqscnJYjUBfmpW5Uk=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_10__["useForm"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXZpZXdGb3JtL1Jldmlld0Zvcm0udHN4Il0sIm5hbWVzIjpbIlJldmlld0Zvcm0iLCJwcm9kdWN0SWQiLCJpc09wZW5lZCIsImNsYXNzTmFtZSIsInByb3BzIiwidXNlU3RhdGUiLCJpc1N1Y2Nlc3MiLCJzZXRJc1N1Y2Nlc3MiLCJlcnJvciIsInNldElzRXJyb3IiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJjb250cm9sIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwicmVzZXQiLCJjbGVhckVycm9ycyIsIm9uU3VibWl0IiwiZm9ybURhdGEiLCJheGlvcyIsInBvc3QiLCJBUEkiLCJyZXZpZXciLCJjcmVhdGVEZW1vIiwiZGF0YSIsIm1lc3NhZ2UiLCJjbiIsInN0eWxlcyIsInJldmlld0Zvcm0iLCJyZXF1aXJlZCIsInZhbHVlIiwibmFtZSIsInRpdGxlIiwicmFpdGluZyIsImZpZWxkIiwicmVmIiwib25DaGFuZ2UiLCJyYXRpbmciLCJkZXNjcmlwdGlvbiIsInN1Ym1pdCIsImluZm8iLCJzdWNjZXNzIiwic3VjY2Vzc1RpdGxlIiwiY2xvc2UiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUtVO0FBQUE7O0FBQUEsTUFKbkNDLFNBSW1DLFFBSm5DQSxTQUltQztBQUFBLE1BSG5DQyxRQUdtQyxRQUhuQ0EsUUFHbUM7QUFBQSxNQUZuQ0MsU0FFbUMsUUFGbkNBLFNBRW1DO0FBQUEsTUFEaENDLEtBQ2dDOztBQUFBLGtCQUNEQyxzREFBUSxDQUFVLEtBQVYsQ0FEUDtBQUFBLE1BQzVCQyxTQUQ0QjtBQUFBLE1BQ2pCQyxZQURpQjs7QUFBQSxtQkFFUEYsc0RBQVEsRUFG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QUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFJQztBQUFNLG1CQUFTLEVBQUVXLDZEQUFNLENBQUNhLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQS9DRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxFQXlERW5DLFNBQVMsaUJBQ1Q7QUFBSyxlQUFTLEVBQUVzQiw2REFBTSxDQUFDYyxPQUF2QjtBQUFnQyxVQUFJLEVBQUMsT0FBckM7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUVkLDZEQUFNLENBQUNlLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQztBQUFLLGlCQUFTLEVBQUVmLDZEQUFNLENBQUNXLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQsZUFLQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMURGLEVBcUVFL0IsS0FBSyxpQkFDTDtBQUFLLGVBQVMsRUFBRW9CLDZEQUFNLENBQUNwQixLQUF2QjtBQUE4QixVQUFJLEVBQUMsT0FBbkM7QUFBQSxnU0FFQyxxRUFBQyxrREFBRDtBQUNDLGlCQUFTLEVBQUVvQiw2REFBTSxDQUFDZ0IsS0FEbkI7QUFFQyxlQUFPLEVBQUU7QUFBQSxpQkFBTW5DLFVBQVUsQ0FBQ29DLFNBQUQsQ0FBaEI7QUFBQTtBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFpRkEsQ0FwSE07O0dBQU03QyxVO1VBZVJVLHdEOzs7S0FmUVYsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ODhlMDc2MDFhNDFhZjY5YWFlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmV2aWV3Rm9ybVByb3BzIH0gZnJvbSBcIi4vUmV2aWV3Rm9ybS5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1Jldmlld0Zvcm0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIFJhaXRpbmcsIFRleHRhcmVhIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIi4vY2xvc2Uuc3ZnXCI7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCB7IElSZXZpZXdGb3JtLCBJUmV2aWV3U2VuZFJlc3BvbnNlIH0gZnJvbSBcIi4vUmV2aWV3Rm9ybS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9hcGlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSZXZpZXdGb3JtID0gKHtcclxuXHRwcm9kdWN0SWQsXHJcblx0aXNPcGVuZWQsXHJcblx0Y2xhc3NOYW1lLFxyXG5cdC4uLnByb3BzXHJcbn06IFJldmlld0Zvcm1Qcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRjb25zdCBbaXNTdWNjZXNzLCBzZXRJc1N1Y2Nlc3NdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cdGNvbnN0IFtlcnJvciwgc2V0SXNFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XHJcblx0Y29uc3Qge1xyXG5cdFx0cmVnaXN0ZXIsXHJcblx0XHRjb250cm9sLFxyXG5cdFx0aGFuZGxlU3VibWl0LFxyXG5cdFx0Zm9ybVN0YXRlOiB7IGVycm9ycyB9LFxyXG5cdFx0cmVzZXQsXHJcblx0XHRjbGVhckVycm9yc1xyXG5cdH0gPSB1c2VGb3JtPElSZXZpZXdGb3JtPigpO1xyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChmb3JtRGF0YTogSVJldmlld0Zvcm0pID0+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdDxJUmV2aWV3U2VuZFJlc3BvbnNlPihBUEkucmV2aWV3LmNyZWF0ZURlbW8sIHtcclxuXHRcdFx0XHQuLi5mb3JtRGF0YSxcclxuXHRcdFx0XHRwcm9kdWN0SWQsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKGRhdGEubWVzc2FnZSkge1xyXG5cdFx0XHRcdHNldElzU3VjY2Vzcyh0cnVlKTtcclxuXHRcdFx0XHRyZXNldCgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldElzRXJyb3IoXCLQp9GC0L4t0YLQviDQv9C+0YjQu9C+INC90LUg0YLQsNC6XCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdHNldElzRXJyb3IoZS5tZXNzYWdlKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLnJldmlld0Zvcm0sIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30+XHJcblx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoXCJuYW1lXCIsIHsgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6IFwi0JfQsNC/0L7Qu9C90LjRgtC1INC40LzRj1wiIH0gfSl9XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCY0LzRj1wiXHJcblx0XHRcdFx0XHRlcnJvcj17ZXJyb3JzLm5hbWV9XHJcblx0XHRcdFx0XHR0YWJJbmRleD17aXNPcGVuZWQgPyAwIDogLTF9XHJcblx0XHRcdFx0XHRhcmlhLWludmFsaWQ9e2Vycm9ycy5uYW1lID8gdHJ1ZSA6IGZhbHNlfVxyXG5cdFx0XHRcdD48L0lucHV0PlxyXG5cdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKFwidGl0bGVcIiwge1xyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZDogeyB2YWx1ZTogdHJ1ZSwgbWVzc2FnZTogXCLQl9Cw0L/QvtC70L3QuNGC0LUg0LfQsNCz0L7Qu9C+0LLQvtC6XCIgfSxcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCX0LDQs9C+0LvQvtCy0L7QulwiXHJcblx0XHRcdFx0XHRlcnJvcj17ZXJyb3JzLnRpdGxlfVxyXG5cdFx0XHRcdFx0dGFiSW5kZXg9e2lzT3BlbmVkID8gMCA6IC0xfVxyXG5cdFx0XHRcdFx0YXJpYS1pbnZhbGlkPXtlcnJvcnMudGl0bGUgPyB0cnVlIDogZmFsc2V9XHJcblx0XHRcdFx0PjwvSW5wdXQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYWl0aW5nfT5cclxuXHRcdFx0XHRcdDxzcGFuPtCe0YbQtdC90LrQsDo8L3NwYW4+XHJcblx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRuYW1lPVwicmF0aW5nXCJcclxuXHRcdFx0XHRcdFx0cnVsZXM9e3sgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6IFwi0KPQutCw0LbQuNGC0LUg0YDQtdC50YLQuNC90LNcIiB9IH19XHJcblx0XHRcdFx0XHRcdHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxSYWl0aW5nXHJcblx0XHRcdFx0XHRcdFx0XHRyYWl0aW5nPXtmaWVsZC52YWx1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17ZmllbGQucmVmfVxyXG5cdFx0XHRcdFx0XHRcdFx0aXNFZGl0YWJsZT17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdHNldFJhaXRpbmc9e2ZpZWxkLm9uQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I9e2Vycm9ycy5yYXRpbmd9XHJcblx0XHRcdFx0XHRcdFx0XHR0YWJJbmRleD17aXNPcGVuZWQgPyAwIDogLTF9XHJcblx0XHRcdFx0XHRcdFx0PjwvUmFpdGluZz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PFRleHRhcmVhXHJcblx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoXCJkZXNjcmlwdGlvblwiLCB7XHJcblx0XHRcdFx0XHRcdHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiBcItCX0LDQv9C+0LvQvdC40YLQtSDQvtGC0LfRi9CyXCIgfSxcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCi0LXQutGB0YIg0L7RgtC30YvQstCwXCJcclxuXHRcdFx0XHRcdGVycm9yPXtlcnJvcnMuZGVzY3JpcHRpb259XHJcblx0XHRcdFx0XHR0YWJJbmRleD17aXNPcGVuZWQgPyAwIDogLTF9XHJcblx0XHRcdFx0XHRhcmlhLWxhYmVsPVwi0YLQtdC60YHRgiDQvtGC0LfRi9Cy0LBcIlxyXG5cdFx0XHRcdFx0YXJpYS1pbnZhbGlkPXtlcnJvcnMuZGVzY3JpcHRpb24gPyB0cnVlIDogZmFsc2V9XHJcblx0XHRcdFx0PjwvVGV4dGFyZWE+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXR9PlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiIHRhYkluZGV4PXtpc09wZW5lZCA/IDAgOiAtMX0gb25DbGljaz17KCkgPT4gY2xlYXJFcnJvcnMoKX0+XHJcblx0XHRcdFx0XHRcdNCe0YLQv9GA0LDQstC40YLRjFxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cclxuXHRcdFx0XHRcdFx0KiDQn9C10YDQtdC0INC/0YPQsdC70LjQutCw0YbQuNC10Lkg0L7RgtC30YvQsiDQv9GA0L7QudC00LXRgiDQv9GA0LXQtNCy0LDRgNC40YLQtdC70YzQvdGD0Y4g0LzQvtC00LXRgNCw0YbQuNGOINC4INC/0YDQvtCy0LXRgNC60YNcclxuXHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdHtpc1N1Y2Nlc3MgJiYgKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VjY2Vzc30gcm9sZT1cImFsZXJ0XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1Y2Nlc3NUaXRsZX0+0JLQsNGIINC+0YLQt9GL0LIg0L7RgtC/0YDQsNCy0LvQtdC9PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuXHRcdFx0XHRcdFx00JLQsNGIINC+0YLQt9GL0LIg0LHRg9C00LXRgiDQvtC/0YPQsdC70LjQutC+0LLQsNC9INC/0L7RgdC70LUg0L/RgNC+0LLQtdGA0LrQuFxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8YnV0dG9uPlxyXG5cclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpfVxyXG5cdFx0XHR7ZXJyb3IgJiYgKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9IHJvbGU9XCJhbGVydFwiPlxyXG5cdFx0XHRcdFx00KfRgtC+LdGC0L4g0L/QvtGI0LvQviDQvdC1INGC0LDQuiwg0L/QvtC/0YDQvtCx0YPQudGC0LUg0L7QsdC90L7QstC40YLRjCDRgdGC0YDQsNC90LjRhtGDXHJcblx0XHRcdFx0XHQ8Q2xvc2VJY29uXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlfVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRJc0Vycm9yKHVuZGVmaW5lZCl9XHJcblx0XHRcdFx0XHQ+PC9DbG9zZUljb24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCl9XHJcblx0XHQ8L2Zvcm0+XHJcblx0KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==