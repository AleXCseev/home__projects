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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.close,
        onClick: function onClick() {
          return setIsSuccess(false);
        },
        aria: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_close_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
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
        lineNumber: 123,
        columnNumber: 6
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXZpZXdGb3JtL1Jldmlld0Zvcm0udHN4Il0sIm5hbWVzIjpbIlJldmlld0Zvcm0iLCJwcm9kdWN0SWQiLCJpc09wZW5lZCIsImNsYXNzTmFtZSIsInByb3BzIiwidXNlU3RhdGUiLCJpc1N1Y2Nlc3MiLCJzZXRJc1N1Y2Nlc3MiLCJlcnJvciIsInNldElzRXJyb3IiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJjb250cm9sIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwicmVzZXQiLCJjbGVhckVycm9ycyIsIm9uU3VibWl0IiwiZm9ybURhdGEiLCJheGlvcyIsInBvc3QiLCJBUEkiLCJyZXZpZXciLCJjcmVhdGVEZW1vIiwiZGF0YSIsIm1lc3NhZ2UiLCJjbiIsInN0eWxlcyIsInJldmlld0Zvcm0iLCJyZXF1aXJlZCIsInZhbHVlIiwibmFtZSIsInRpdGxlIiwicmFpdGluZyIsImZpZWxkIiwicmVmIiwib25DaGFuZ2UiLCJyYXRpbmciLCJkZXNjcmlwdGlvbiIsInN1Ym1pdCIsImluZm8iLCJzdWNjZXNzIiwic3VjY2Vzc1RpdGxlIiwiY2xvc2UiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUtVO0FBQUE7O0FBQUEsTUFKbkNDLFNBSW1DLFFBSm5DQSxTQUltQztBQUFBLE1BSG5DQyxRQUdtQyxRQUhuQ0EsUUFHbUM7QUFBQSxNQUZuQ0MsU0FFbUMsUUFGbkNBLFNBRW1DO0FBQUEsTUFEaENDLEtBQ2dDOztBQUFBLGtCQUNEQyxzREFBUSxDQUFVLEtBQVYsQ0FEUDtBQUFBLE1BQzVCQyxTQUQ0QjtBQUFBLE1BQ2pCQyxZQURpQjs7QUFBQSxtQkFFUEYsc0RBQVEsRUFG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LENBdkhNOztHQUFNN0MsVTtVQWVSVSx3RDs7O0tBZlFWLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3R5cGVdL1thbGlhc10uNTRhYzFiYzgwODUxY2RkMDJkZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJldmlld0Zvcm1Qcm9wcyB9IGZyb20gXCIuL1Jldmlld0Zvcm0ucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9SZXZpZXdGb3JtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIElucHV0LCBSYWl0aW5nLCBUZXh0YXJlYSB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gXCIuL2Nsb3NlLnN2Z1wiO1xyXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgeyBJUmV2aWV3Rm9ybSwgSVJldmlld1NlbmRSZXNwb25zZSB9IGZyb20gXCIuL1Jldmlld0Zvcm0uaW50ZXJmYWNlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvYXBpXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUmV2aWV3Rm9ybSA9ICh7XHJcblx0cHJvZHVjdElkLFxyXG5cdGlzT3BlbmVkLFxyXG5cdGNsYXNzTmFtZSxcclxuXHQuLi5wcm9wc1xyXG59OiBSZXZpZXdGb3JtUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0Y29uc3QgW2lzU3VjY2Vzcywgc2V0SXNTdWNjZXNzXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHRjb25zdCBbZXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xyXG5cdGNvbnN0IHtcclxuXHRcdHJlZ2lzdGVyLFxyXG5cdFx0Y29udHJvbCxcclxuXHRcdGhhbmRsZVN1Ym1pdCxcclxuXHRcdGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcclxuXHRcdHJlc2V0LFxyXG5cdFx0Y2xlYXJFcnJvcnNcclxuXHR9ID0gdXNlRm9ybTxJUmV2aWV3Rm9ybT4oKTtcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZm9ybURhdGE6IElSZXZpZXdGb3JtKSA9PiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3Q8SVJldmlld1NlbmRSZXNwb25zZT4oQVBJLnJldmlldy5jcmVhdGVEZW1vLCB7XHJcblx0XHRcdFx0Li4uZm9ybURhdGEsXHJcblx0XHRcdFx0cHJvZHVjdElkLFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmIChkYXRhLm1lc3NhZ2UpIHtcclxuXHRcdFx0XHRzZXRJc1N1Y2Nlc3ModHJ1ZSk7XHJcblx0XHRcdFx0cmVzZXQoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRJc0Vycm9yKFwi0KfRgtC+LdGC0L4g0L/QvtGI0LvQviDQvdC1INGC0LDQulwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRzZXRJc0Vycm9yKGUubWVzc2FnZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy5yZXZpZXdGb3JtLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9PlxyXG5cdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKFwibmFtZVwiLCB7IHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiBcItCX0LDQv9C+0LvQvdC40YLQtSDQuNC80Y9cIiB9IH0pfVxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQmNC80Y9cIlxyXG5cdFx0XHRcdFx0ZXJyb3I9e2Vycm9ycy5uYW1lfVxyXG5cdFx0XHRcdFx0dGFiSW5kZXg9e2lzT3BlbmVkID8gMCA6IC0xfVxyXG5cdFx0XHRcdFx0YXJpYS1pbnZhbGlkPXtlcnJvcnMubmFtZSA/IHRydWUgOiBmYWxzZX1cclxuXHRcdFx0XHQ+PC9JbnB1dD5cclxuXHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdHsuLi5yZWdpc3RlcihcInRpdGxlXCIsIHtcclxuXHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6IFwi0JfQsNC/0L7Qu9C90LjRgtC1INC30LDQs9C+0LvQvtCy0L7QulwiIH0sXHJcblx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfVxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQl9Cw0LPQvtC70L7QstC+0LpcIlxyXG5cdFx0XHRcdFx0ZXJyb3I9e2Vycm9ycy50aXRsZX1cclxuXHRcdFx0XHRcdHRhYkluZGV4PXtpc09wZW5lZCA/IDAgOiAtMX1cclxuXHRcdFx0XHRcdGFyaWEtaW52YWxpZD17ZXJyb3JzLnRpdGxlID8gdHJ1ZSA6IGZhbHNlfVxyXG5cdFx0XHRcdD48L0lucHV0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmFpdGluZ30+XHJcblx0XHRcdFx0XHQ8c3Bhbj7QntGG0LXQvdC60LA6PC9zcGFuPlxyXG5cdFx0XHRcdFx0PENvbnRyb2xsZXJcclxuXHRcdFx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRcdFx0bmFtZT1cInJhdGluZ1wiXHJcblx0XHRcdFx0XHRcdHJ1bGVzPXt7IHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiBcItCj0LrQsNC20LjRgtC1INGA0LXQudGC0LjQvdCzXCIgfSB9fVxyXG5cdFx0XHRcdFx0XHRyZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8UmFpdGluZ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmFpdGluZz17ZmllbGQudmFsdWV9XHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e2ZpZWxkLnJlZn1cclxuXHRcdFx0XHRcdFx0XHRcdGlzRWRpdGFibGU9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRSYWl0aW5nPXtmaWVsZC5vbkNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdGVycm9yPXtlcnJvcnMucmF0aW5nfVxyXG5cdFx0XHRcdFx0XHRcdFx0dGFiSW5kZXg9e2lzT3BlbmVkID8gMCA6IC0xfVxyXG5cdFx0XHRcdFx0XHRcdD48L1JhaXRpbmc+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxUZXh0YXJlYVxyXG5cdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKFwiZGVzY3JpcHRpb25cIiwge1xyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZDogeyB2YWx1ZTogdHJ1ZSwgbWVzc2FnZTogXCLQl9Cw0L/QvtC70L3QuNGC0LUg0L7RgtC30YvQslwiIH0sXHJcblx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufVxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQotC10LrRgdGCINC+0YLQt9GL0LLQsFwiXHJcblx0XHRcdFx0XHRlcnJvcj17ZXJyb3JzLmRlc2NyaXB0aW9ufVxyXG5cdFx0XHRcdFx0dGFiSW5kZXg9e2lzT3BlbmVkID8gMCA6IC0xfVxyXG5cdFx0XHRcdFx0YXJpYS1sYWJlbD1cItGC0LXQutGB0YIg0L7RgtC30YvQstCwXCJcclxuXHRcdFx0XHRcdGFyaWEtaW52YWxpZD17ZXJyb3JzLmRlc2NyaXB0aW9uID8gdHJ1ZSA6IGZhbHNlfVxyXG5cdFx0XHRcdD48L1RleHRhcmVhPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VibWl0fT5cclxuXHRcdFx0XHRcdDxCdXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIiB0YWJJbmRleD17aXNPcGVuZWQgPyAwIDogLTF9IG9uQ2xpY2s9eygpID0+IGNsZWFyRXJyb3JzKCl9PlxyXG5cdFx0XHRcdFx0XHTQntGC0L/RgNCw0LLQuNGC0YxcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XHJcblx0XHRcdFx0XHRcdCog0J/QtdGA0LXQtCDQv9GD0LHQu9C40LrQsNGG0LjQtdC5INC+0YLQt9GL0LIg0L/RgNC+0LnQtNC10YIg0L/RgNC10LTQstCw0YDQuNGC0LXQu9GM0L3Rg9GOINC80L7QtNC10YDQsNGG0LjRjiDQuCDQv9GA0L7QstC10YDQutGDXHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHR7aXNTdWNjZXNzICYmIChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1Y2Nlc3N9IHJvbGU9XCJhbGVydFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWNjZXNzVGl0bGV9PtCS0LDRiCDQvtGC0LfRi9CyINC+0YLQv9GA0LDQstC70LXQvTwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcblx0XHRcdFx0XHRcdNCS0LDRiCDQvtGC0LfRi9CyINCx0YPQtNC10YIg0L7Qv9GD0LHQu9C40LrQvtCy0LDQvSDQv9C+0YHQu9C1INC/0YDQvtCy0LXRgNC60LhcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuY2xvc2V9IFxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRJc1N1Y2Nlc3MoZmFsc2UpfVxyXG5cdFx0XHRcdFx0XHRhcmlhXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxDbG9zZUljb24+PC9DbG9zZUljb24+XHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KX1cclxuXHRcdFx0e2Vycm9yICYmIChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfSByb2xlPVwiYWxlcnRcIj5cclxuXHRcdFx0XHRcdNCn0YLQvi3RgtC+INC/0L7RiNC70L4g0L3QtSDRgtCw0LosINC/0L7Qv9GA0L7QsdGD0LnRgtC1INC+0LHQvdC+0LLQuNGC0Ywg0YHRgtGA0LDQvdC40YbRg1xyXG5cdFx0XHRcdFx0PENsb3NlSWNvblxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5jbG9zZX1cclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0SXNFcnJvcih1bmRlZmluZWQpfVxyXG5cdFx0XHRcdFx0PjwvQ2xvc2VJY29uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9mb3JtPlxyXG5cdCk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=