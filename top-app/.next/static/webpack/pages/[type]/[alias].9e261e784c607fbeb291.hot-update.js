webpackHotUpdate_N_E("pages/[type]/[alias]",{

/***/ "./components/ReviewForm/ReviewForm.module.css":
/*!*****************************************************!*\
  !*** ./components/ReviewForm/ReviewForm.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./ReviewForm.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/ReviewForm/ReviewForm.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./ReviewForm.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/ReviewForm/ReviewForm.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./ReviewForm.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/ReviewForm/ReviewForm.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

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
      handleSubmit = _useForm.handleSubmit;

  var onSubmit = function onSubmit(data) {
    console.log(data);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
    onSubmit: handleSubmit(onSubmit),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.reviewForm, className)
    }, props), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Input"], _objectSpread(_objectSpread({}, register('name')), {}, {
        placeholder: "\u0418\u043C\u044F"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Input"], _objectSpread(_objectSpread({}, register), {}, {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
        placeholder: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.raiting,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          children: "\u041E\u0446\u0435\u043D\u043A\u0430:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Raiting"], {
          raiting: 0,
          isEditable: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Textarea"], {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.description,
        placeholder: "\u0422\u0435\u043A\u0441\u0442 \u043E\u0442\u0437\u044B\u0432\u0430"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.submit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Button"], {
          appearance: "primary",
          children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.info,
          children: "* \u041F\u0435\u0440\u0435\u0434 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0435\u0439 \u043E\u0442\u0437\u044B\u0432 \u043F\u0440\u043E\u0439\u0434\u0435\u0442 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u043C\u043E\u0434\u0435\u0440\u0430\u0446\u0438\u044E \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
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
        lineNumber: 33,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.description,
        children: "\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432 \u0431\u0443\u0434\u0435\u0442 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_close_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.close
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }, _this);
};

_s(ReviewForm, "BhdPiQ2UlWUaKCHGAwHFi414IwI=", false, function () {
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

/***/ }),

/***/ "./components/ReviewForm/close.svg":
/*!*****************************************!*\
  !*** ./components/ReviewForm/close.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgClose(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 12,
    height: 12,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    stroke: "#1CC37E",
    strokeWidth: 3,
    d: "M2.061 1.939l8.485 8.486M1.939 10.425l8.486-8.486"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgClose);

/***/ }),

/***/ "./components/index.ts":
/*!*****************************!*\
  !*** ./components/index.ts ***!
  \*****************************/
/*! exports provided: Htag, Button, P, Tag, Raiting, Card, Advantages, Sort, Input, Textarea, Search, Product, Divider, Review, ReviewForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Htag_Htag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Htag/Htag */ "./components/Htag/Htag.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Htag", function() { return _Htag_Htag__WEBPACK_IMPORTED_MODULE_0__["Htag"]; });

/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button/Button */ "./components/Button/Button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button_Button__WEBPACK_IMPORTED_MODULE_1__["Button"]; });

/* harmony import */ var _P_P__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./P/P */ "./components/P/P.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "P", function() { return _P_P__WEBPACK_IMPORTED_MODULE_2__["P"]; });

/* harmony import */ var _Tag_Tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tag/Tag */ "./components/Tag/Tag.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return _Tag_Tag__WEBPACK_IMPORTED_MODULE_3__["Tag"]; });

/* harmony import */ var _Raiting_Raiting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Raiting/Raiting */ "./components/Raiting/Raiting.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Raiting", function() { return _Raiting_Raiting__WEBPACK_IMPORTED_MODULE_4__["Raiting"]; });

/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Card/Card */ "./components/Card/Card.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _Card_Card__WEBPACK_IMPORTED_MODULE_5__["Card"]; });

/* harmony import */ var _Advantages_Advantages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Advantages/Advantages */ "./components/Advantages/Advantages.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Advantages", function() { return _Advantages_Advantages__WEBPACK_IMPORTED_MODULE_6__["Advantages"]; });

/* harmony import */ var _Sort_Sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Sort/Sort */ "./components/Sort/Sort.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sort", function() { return _Sort_Sort__WEBPACK_IMPORTED_MODULE_7__["Sort"]; });

/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Input/Input */ "./components/Input/Input.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input_Input__WEBPACK_IMPORTED_MODULE_8__["Input"]; });

/* harmony import */ var _Textarea_Textarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Textarea/Textarea */ "./components/Textarea/Textarea.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _Textarea_Textarea__WEBPACK_IMPORTED_MODULE_9__["Textarea"]; });

/* harmony import */ var _Search_Search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Search/Search */ "./components/Search/Search.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _Search_Search__WEBPACK_IMPORTED_MODULE_10__["Search"]; });

/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Product/Product */ "./components/Product/Product.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return _Product_Product__WEBPACK_IMPORTED_MODULE_11__["Product"]; });

/* harmony import */ var _Divider_Divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Divider/Divider */ "./components/Divider/Divider.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return _Divider_Divider__WEBPACK_IMPORTED_MODULE_12__["Divider"]; });

/* harmony import */ var _Review_Review__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Review/Review */ "./components/Review/Review.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Review", function() { return _Review_Review__WEBPACK_IMPORTED_MODULE_13__["Review"]; });

/* harmony import */ var _ReviewForm_ReviewForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ReviewForm/ReviewForm */ "./components/ReviewForm/ReviewForm.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewForm", function() { return _ReviewForm_ReviewForm__WEBPACK_IMPORTED_MODULE_14__["ReviewForm"]; });

















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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/ReviewForm/ReviewForm.module.css":
/*!*****************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/ReviewForm/ReviewForm.module.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ReviewForm_reviewForm__2oDvX {\r\n\tfont-size: 14px;\r\n\tline-height: 24px;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: [start] auto 1fr auto [end]; \r\n\tgrid-gap: 20px 30px; \r\n\tgap: 20px 30px;\r\n\t-moz-box-align: center;\r\n\t     align-items: center;\r\n}\r\n\r\n.ReviewForm_title__ZAmwH {\r\n\tjustify-self: left;\r\n}\r\n\r\n.ReviewForm_description__2P6nE {\r\n\tgrid-column: start / end;\r\n}\r\n\r\n.ReviewForm_submit__6o1NK {\r\n\tgrid-column: start / end;\r\n}\r\n\r\n.ReviewForm_info__gk2Wq {\r\n margin-left: 15px;\r\n}\r\n\r\n.ReviewForm_raiting__Q7-3l {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: auto auto;\r\n\tgrid-gap: 20px;\r\n\tgap: 20px;\r\n}\r\n\r\n.ReviewForm_success__1PxdQ {\r\n\tbackground-color: var(--green-light);\r\n\tpadding: 20px;\r\n\tposition: relative;\r\n\tborder-radius: 5px;\r\n\tmargin-top: 20px;\r\n}\r\n\r\n.ReviewForm_successTitle__2_be0 {\r\n\tfont-weight: bold;\r\n}\r\n\r\n.ReviewForm_close__3G2UH {\r\n\tposition: absolute;\r\n\ttop: 20px;\r\n\tright: 20px;\r\n\tcursor: pointer;\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n\t.ReviewForm_reviewForm__2oDvX {\r\n\t\tgrid-template-columns: [start] 1fr 1fr [end]; \r\n\t}\r\n\t.ReviewForm_raiting__Q7-3l {\r\n\t\tgrid-column: start / end;\r\n\t\tgrid-template-columns: auto 1fr;\r\n\t}\r\n\t.ReviewForm_title__ZAmwH {\r\n\t\tjustify-self: normal;\r\n\t}\r\n}\r\n\r\n@media (max-width: 640px) {\r\n\t.ReviewForm_reviewForm__2oDvX {\r\n\t\tgrid-template-columns: [start] 1fr [end]; \r\n\t}\r\n\t.ReviewForm_raiting__Q7-3l {\r\n\t\tgrid-column: start / end;\r\n\t\tgrid-template-columns: auto 1fr;\r\n\t}\r\n\t.ReviewForm_title__ZAmwH {\r\n\t\tjustify-self: normal;\r\n\t}\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://components/ReviewForm/ReviewForm.module.css"],"names":[],"mappings":"AAAA;CACC,eAAe;CACf,iBAAiB;CACjB,aAAa;CACb,kDAAkD;CAClD,mBAAc;CAAd,cAAc;CACd,sBAAmB;MAAnB,mBAAmB;AACpB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,gCAAgC;CAChC,cAAS;CAAT,SAAS;AACV;;AAEA;CACC,oCAAoC;CACpC,aAAa;CACb,kBAAkB;CAClB,kBAAkB;CAClB,gBAAgB;AACjB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,kBAAkB;CAClB,SAAS;CACT,WAAW;CACX,eAAe;AAChB;;AAEA;CACC;EACC,4CAA4C;CAC7C;CACA;EACC,wBAAwB;EACxB,+BAA+B;CAChC;CACA;EACC,oBAAoB;CACrB;AACD;;AAEA;CACC;EACC,wCAAwC;CACzC;CACA;EACC,wBAAwB;EACxB,+BAA+B;CAChC;CACA;EACC,oBAAoB;CACrB;AACD","sourcesContent":[".reviewForm {\r\n\tfont-size: 14px;\r\n\tline-height: 24px;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: [start] auto 1fr auto [end]; \r\n\tgap: 20px 30px;\r\n\talign-items: center;\r\n}\r\n\r\n.title {\r\n\tjustify-self: left;\r\n}\r\n\r\n.description {\r\n\tgrid-column: start / end;\r\n}\r\n\r\n.submit {\r\n\tgrid-column: start / end;\r\n}\r\n\r\n.info {\r\n margin-left: 15px;\r\n}\r\n\r\n.raiting {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: auto auto;\r\n\tgap: 20px;\r\n}\r\n\r\n.success {\r\n\tbackground-color: var(--green-light);\r\n\tpadding: 20px;\r\n\tposition: relative;\r\n\tborder-radius: 5px;\r\n\tmargin-top: 20px;\r\n}\r\n\r\n.successTitle {\r\n\tfont-weight: bold;\r\n}\r\n\r\n.close {\r\n\tposition: absolute;\r\n\ttop: 20px;\r\n\tright: 20px;\r\n\tcursor: pointer;\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n\t.reviewForm {\r\n\t\tgrid-template-columns: [start] 1fr 1fr [end]; \r\n\t}\r\n\t.raiting {\r\n\t\tgrid-column: start / end;\r\n\t\tgrid-template-columns: auto 1fr;\r\n\t}\r\n\t.title {\r\n\t\tjustify-self: normal;\r\n\t}\r\n}\r\n\r\n@media (max-width: 640px) {\r\n\t.reviewForm {\r\n\t\tgrid-template-columns: [start] 1fr [end]; \r\n\t}\r\n\t.raiting {\r\n\t\tgrid-column: start / end;\r\n\t\tgrid-template-columns: auto 1fr;\r\n\t}\r\n\t.title {\r\n\t\tjustify-self: normal;\r\n\t}\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"reviewForm": "ReviewForm_reviewForm__2oDvX",
	"title": "ReviewForm_title__ZAmwH",
	"description": "ReviewForm_description__2P6nE",
	"submit": "ReviewForm_submit__6o1NK",
	"info": "ReviewForm_info__gk2Wq",
	"raiting": "ReviewForm_raiting__Q7-3l",
	"success": "ReviewForm_success__1PxdQ",
	"successTitle": "ReviewForm_successTitle__2_be0",
	"close": "ReviewForm_close__3G2UH"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/react-hook-form/dist/index.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/react-hook-form/dist/index.esm.js ***!
  \********************************************************/
/*! exports provided: Controller, FormProvider, appendErrors, get, set, useController, useFieldArray, useForm, useFormContext, useFormState, useWatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProvider", function() { return FormProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendErrors", function() { return appendErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useController", function() { return useController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFieldArray", function() { return useFieldArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForm", function() { return useForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormContext", function() { return useFormContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormState", function() { return useFormState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWatch", function() { return useWatch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var isCheckBoxInput = (element) => element.type === 'checkbox';

var isDateObject = (data) => data instanceof Date;

var isNullOrUndefined = (value) => value == null;

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) &&
    !Array.isArray(value) &&
    isObjectType(value) &&
    !isDateObject(value);

var getControllerValue = (event) => isObject(event) && event.target
    ? isCheckBoxInput(event.target)
        ? event.target.checked
        : event.target.value
    : event;

var getNodeParentName = (name) => name.substring(0, name.search(/.\d/)) || name;

var isNameInFieldArray = (names, name) => [...names].some((current) => getNodeParentName(name) === current);

var compact = (value) => value.filter(Boolean);

var isUndefined = (val) => val === undefined;

var get = (obj, path, defaultValue) => {
    if (isObject(obj) && path) {
        const result = compact(path.split(/[,[\].]+?/)).reduce((result, key) => (isNullOrUndefined(result) ? result : result[key]), obj);
        return isUndefined(result) || result === obj
            ? isUndefined(obj[path])
                ? defaultValue
                : obj[path]
            : result;
    }
    return undefined;
};

const EVENTS = {
    BLUR: 'blur',
    CHANGE: 'change',
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
};
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};

var omit = (source, key) => {
    const copy = Object.assign({}, source);
    delete copy[key];
    return copy;
};

const FormContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);
FormContext.displayName = 'RHFContext';
const useFormContext = () => react__WEBPACK_IMPORTED_MODULE_0__["useContext"](FormContext);
const FormProvider = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FormContext.Provider, { value: omit(props, 'children') }, props.children));

var getProxyFormState = (isProxyEnabled, formState, readFormStateRef, localReadFormStateRef, isRoot = true) => isProxyEnabled
    ? new Proxy(formState, {
        get: (obj, prop) => {
            if (prop in obj) {
                if (readFormStateRef.current[prop] !== VALIDATION_MODE.all) {
                    readFormStateRef.current[prop] = isRoot
                        ? VALIDATION_MODE.all
                        : true;
                }
                localReadFormStateRef &&
                    (localReadFormStateRef.current[prop] = true);
                return obj[prop];
            }
            return undefined;
        },
    })
    : formState;

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

var shouldRenderFormState = (formStateData, readFormStateRef, isRoot) => {
    const formState = omit(formStateData, 'name');
    return (isEmptyObject(formState) ||
        Object.keys(formState).length >= Object.keys(readFormStateRef).length ||
        Object.keys(formState).find((key) => readFormStateRef[key] ===
            (isRoot ? VALIDATION_MODE.all : true)));
};

var convertToArrayPayload = (value) => Array.isArray(value) ? value : [value];

var isWeb = typeof window !== 'undefined' &&
    typeof window.HTMLElement !== 'undefined' &&
    typeof document !== 'undefined';

const isProxyEnabled = isWeb ? 'Proxy' in window : typeof Proxy !== 'undefined';

function useFormState(props) {
    const { control, name } = props || {};
    const methods = useFormContext();
    const { formStateRef, subjectsRef, readFormStateRef } = control || methods.control;
    const nameRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](name);
    nameRef.current = name;
    const [formState, updateFormState] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](formStateRef.current);
    const readFormState = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]({
        isDirty: false,
        dirtyFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false,
    });
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const formStateSubscription = subjectsRef.current.state.subscribe({
            next: (formState) => (!nameRef.current ||
                !formState.name ||
                convertToArrayPayload(nameRef.current).includes(formState.name)) &&
                shouldRenderFormState(formState, readFormState.current) &&
                updateFormState(Object.assign(Object.assign({}, formStateRef.current), formState)),
        });
        return () => formStateSubscription.unsubscribe();
    }, []);
    return getProxyFormState(isProxyEnabled, formState, readFormStateRef, readFormState, false);
}

function useController({ name, rules, defaultValue, control, shouldUnregister, }) {
    const methods = useFormContext();
    const { defaultValuesRef, register, fieldsRef, unregister, namesRef, subjectsRef, shouldUnmount, inFieldArrayActionRef, } = control || methods.control;
    const field = get(fieldsRef.current, name);
    const [value, setInputStateValue] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](field && field._f && !isUndefined(field._f.value)
        ? field._f.value
        : isUndefined(get(defaultValuesRef.current, name))
            ? defaultValue
            : get(defaultValuesRef.current, name));
    const { onChange, onBlur, ref } = register(name, Object.assign(Object.assign({}, rules), { value }));
    const formState = useFormState({
        control: control || methods.control,
        name,
    });
    function updateIsMounted(name, value) {
        const field = get(fieldsRef.current, name);
        if (field && field._f) {
            field._f.mount = value;
        }
    }
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const controllerSubscription = subjectsRef.current.control.subscribe({
            next: (data) => (!data.name || name === data.name) &&
                setInputStateValue(get(data.values, name)),
        });
        updateIsMounted(name, true);
        return () => {
            controllerSubscription.unsubscribe();
            const shouldUnmountField = shouldUnmount || shouldUnregister;
            if (isNameInFieldArray(namesRef.current.array, name)
                ? shouldUnmountField && !inFieldArrayActionRef.current
                : shouldUnmountField) {
                unregister(name);
            }
            else {
                updateIsMounted(name, false);
            }
        };
    }, [name]);
    return {
        field: {
            onChange: (event) => {
                const value = getControllerValue(event);
                setInputStateValue(value);
                onChange({
                    target: {
                        value,
                        name: name,
                    },
                    type: EVENTS.CHANGE,
                });
            },
            onBlur: () => {
                onBlur({
                    target: {
                        name: name,
                    },
                    type: EVENTS.BLUR,
                });
            },
            name,
            value,
            ref: (elm) => elm &&
                ref({
                    focus: () => elm.focus && elm.focus(),
                    setCustomValidity: (message) => elm.setCustomValidity(message),
                    reportValidity: () => elm.reportValidity(),
                }),
        },
        formState,
        fieldState: {
            invalid: !!get(formState.errors, name),
            isDirty: !!get(formState.dirtyFields, name),
            isTouched: !!get(formState.touchedFields, name),
            error: get(formState.errors, name),
        },
    };
}

const Controller = (props) => props.render(useController(props));

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria
    ? Object.assign(Object.assign({}, errors[name]), { types: Object.assign(Object.assign({}, (errors[name] && errors[name].types ? errors[name].types : {})), { [type]: message || true }) }) : {};

var isKey = (value) => /^\w*$/.test(value);

var stringToPath = (input) => compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));

function set(object, path, value) {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || Array.isArray(objValue)
                    ? objValue
                    : !isNaN(+tempPath[index + 1])
                        ? []
                        : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}

const focusFieldBy = (fields, callback, fieldsNames) => {
    for (const key of fieldsNames || Object.keys(fields)) {
        const field = get(fields, key);
        if (field) {
            const _f = field._f;
            const current = omit(field, '_f');
            if (_f && callback(_f.name)) {
                if (_f.ref.focus && isUndefined(_f.ref.focus())) {
                    break;
                }
                else if (_f.refs) {
                    _f.refs[0].focus();
                    break;
                }
            }
            else if (isObject(current)) {
                focusFieldBy(current, callback);
            }
        }
    }
};

const getFieldsValues = (fieldsRef, output = {}) => {
    for (const name in fieldsRef.current) {
        const field = fieldsRef.current[name];
        if (field && !isNullOrUndefined(output)) {
            const _f = field._f;
            const current = omit(field, '_f');
            set(output, name, _f && _f.ref
                ? _f.ref.disabled || (_f.refs && _f.refs.every((ref) => ref.disabled))
                    ? undefined
                    : _f.value
                : Array.isArray(field)
                    ? []
                    : {});
            current &&
                getFieldsValues({
                    current,
                }, output[name]);
        }
    }
    return output;
};

var generateId = () => {
    const d = typeof performance === 'undefined' ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};

var mapIds = (values = [], keyName) => values.map((value) => (Object.assign({ [keyName]: (value && value[keyName]) || generateId() }, value)));

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

function deepEqual(object1, object2) {
    if (isPrimitive(object1) ||
        isPrimitive(object2) ||
        isDateObject(object1) ||
        isDateObject(object2)) {
        return object1 === object2;
    }
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const val1 = object1[key];
        if (!keys2.includes(key)) {
            return false;
        }
        if (key !== 'ref') {
            const val2 = object2[key];
            if ((isObject(val1) || Array.isArray(val1)) &&
                (isObject(val2) || Array.isArray(val2))
                ? !deepEqual(val1, val2)
                : val1 !== val2) {
                return false;
            }
        }
    }
    return true;
}

function deepMerge(target, source) {
    if (isPrimitive(target) || isPrimitive(source)) {
        return source;
    }
    for (const key in source) {
        const targetValue = target[key];
        const sourceValue = source[key];
        try {
            target[key] =
                (isObject(targetValue) && isObject(sourceValue)) ||
                    (Array.isArray(targetValue) && Array.isArray(sourceValue))
                    ? deepMerge(targetValue, sourceValue)
                    : sourceValue;
        }
        catch (_a) { }
    }
    return target;
}

function setDirtyFields(values, defaultValues, dirtyFields, parentNode, parentName) {
    let index = -1;
    while (++index < values.length) {
        for (const key in values[index]) {
            if (Array.isArray(values[index][key])) {
                !dirtyFields[index] && (dirtyFields[index] = {});
                dirtyFields[index][key] = [];
                setDirtyFields(values[index][key], get(defaultValues[index] || {}, key, []), dirtyFields[index][key], dirtyFields[index], key);
            }
            else {
                !isNullOrUndefined(defaultValues) &&
                    deepEqual(get(defaultValues[index] || {}, key), values[index][key])
                    ? set(dirtyFields[index] || {}, key)
                    : (dirtyFields[index] = Object.assign(Object.assign({}, dirtyFields[index]), { [key]: true }));
            }
        }
        parentNode &&
            !dirtyFields.length &&
            delete parentNode[parentName];
    }
    return dirtyFields;
}
var setFieldArrayDirtyFields = (values, defaultValues, dirtyFields) => deepMerge(setDirtyFields(values, defaultValues, dirtyFields.slice(0, values.length)), setDirtyFields(defaultValues, values, dirtyFields.slice(0, values.length)));

function append(data, value) {
    return [...convertToArrayPayload(data), ...convertToArrayPayload(value)];
}

var fillEmptyArray = (value) => Array.isArray(value) ? Array(value.length).fill(undefined) : undefined;

function insert(data, index, value) {
    return [
        ...data.slice(0, index),
        ...convertToArrayPayload(value),
        ...data.slice(index),
    ];
}

var moveArrayAt = (data, from, to) => {
    if (Array.isArray(data)) {
        if (isUndefined(data[to])) {
            data[to] = undefined;
        }
        data.splice(to, 0, data.splice(from, 1)[0]);
        return data;
    }
    return [];
};

function prepend(data, value) {
    return [...convertToArrayPayload(value), ...convertToArrayPayload(data)];
}

function removeAtIndexes(data, indexes) {
    let i = 0;
    const temp = [...data];
    for (const index of indexes) {
        temp.splice(index - i, 1);
        i++;
    }
    return compact(temp).length ? temp : [];
}
var removeArrayAt = (data, index) => isUndefined(index)
    ? []
    : removeAtIndexes(data, convertToArrayPayload(index).sort((a, b) => a - b));

var swapArrayAt = (data, indexA, indexB) => {
    data[indexA] = [data[indexB], (data[indexB] = data[indexA])][0];
};

var isBoolean = (value) => typeof value === 'boolean';

function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function unset(object, path) {
    const updatePath = isKey(path) ? [path] : stringToPath(path);
    const childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);
    const key = updatePath[updatePath.length - 1];
    let previousObjRef;
    if (childObject) {
        delete childObject[key];
    }
    for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
        let index = -1;
        let objectRef;
        const currentPaths = updatePath.slice(0, -(k + 1));
        const currentPathsLength = currentPaths.length - 1;
        if (k > 0) {
            previousObjRef = object;
        }
        while (++index < currentPaths.length) {
            const item = currentPaths[index];
            objectRef = objectRef ? objectRef[item] : object[item];
            if (currentPathsLength === index &&
                ((isObject(objectRef) && isEmptyObject(objectRef)) ||
                    (Array.isArray(objectRef) &&
                        !objectRef.filter((data) => (isObject(data) && !isEmptyObject(data)) || isBoolean(data)).length))) {
                previousObjRef ? delete previousObjRef[item] : delete object[item];
            }
            previousObjRef = objectRef;
        }
    }
    return object;
}

const useFieldArray = ({ control, name, keyName = 'id', shouldUnregister, }) => {
    const methods = useFormContext();
    const focusNameRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]('');
    const isMountedRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](false);
    const { getIsDirty, namesRef, fieldsRef, defaultValuesRef, formStateRef, subjectsRef, readFormStateRef, updateIsValid, fieldArrayDefaultValuesRef, unregister, shouldUnmount, inFieldArrayActionRef, setValues, register, } = control || methods.control;
    const [fields, setFields] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](mapIds((get(fieldsRef.current, name) && isMountedRef.current
        ? get(getFieldsValues(fieldsRef), name)
        : get(fieldArrayDefaultValuesRef.current, getNodeParentName(name))
            ? get(fieldArrayDefaultValuesRef.current, name)
            : get(defaultValuesRef.current, name)) || [], keyName));
    set(fieldArrayDefaultValuesRef.current, name, [...fields]);
    namesRef.current.array.add(name);
    const omitKey = (fields) => fields.map((field = {}) => omit(field, keyName));
    const getCurrentFieldsValues = () => {
        const values = get(getFieldsValues(fieldsRef), name, []);
        return mapIds(get(fieldArrayDefaultValuesRef.current, name, []).map((item, index) => (Object.assign(Object.assign({}, item), values[index]))), keyName);
    };
    const getFocusFieldName = (index, options) => options && !options.shouldFocus
        ? options.focusName || `${name}.${options.focusIndex}.`
        : `${name}.${index}.`;
    const setFieldsAndNotify = (fieldsValues = []) => setFields(mapIds(fieldsValues, keyName));
    const cleanup = (ref) => !compact(get(ref, name, [])).length && unset(ref, name);
    const batchStateUpdate = (method, args, updatedFieldArrayValues = [], shouldSet = true) => {
        inFieldArrayActionRef.current = true;
        if (get(fieldsRef.current, name)) {
            const output = method(get(fieldsRef.current, name), args.argA, args.argB);
            shouldSet && set(fieldsRef.current, name, output);
        }
        if (Array.isArray(get(formStateRef.current.errors, name))) {
            const output = method(get(formStateRef.current.errors, name), args.argA, args.argB);
            shouldSet && set(formStateRef.current.errors, name, output);
            cleanup(formStateRef.current.errors);
        }
        if (readFormStateRef.current.touchedFields &&
            get(formStateRef.current.touchedFields, name)) {
            const output = method(get(formStateRef.current.touchedFields, name), args.argA, args.argB);
            shouldSet && set(formStateRef.current.touchedFields, name, output);
            cleanup(formStateRef.current.touchedFields);
        }
        if (readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) {
            set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(omitKey(updatedFieldArrayValues), get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
            updatedFieldArrayValues &&
                set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(omitKey(updatedFieldArrayValues), get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
            cleanup(formStateRef.current.dirtyFields);
        }
        subjectsRef.current.state.next({
            dirtyFields: formStateRef.current
                .dirtyFields,
            isDirty: getIsDirty(name, omitKey(updatedFieldArrayValues)),
            errors: formStateRef.current.errors,
            isValid: formStateRef.current.isValid,
        });
    };
    const registerFieldArray = (values, index = 0, parentName = '') => values.forEach((appendValueItem, valueIndex) => {
        const rootName = `${parentName || name}.${parentName ? valueIndex : index + valueIndex}`;
        isPrimitive(appendValueItem)
            ? register(rootName, {
                value: appendValueItem,
            })
            : Object.entries(appendValueItem).forEach(([key, value]) => {
                const inputName = rootName + '.' + key;
                Array.isArray(value)
                    ? registerFieldArray(value, valueIndex, inputName)
                    : register(inputName, { value });
            });
    });
    const append$1 = (value, options) => {
        const appendValue = convertToArrayPayload(value);
        const updatedFieldArrayValues = append(getCurrentFieldsValues(), appendValue);
        const currentIndex = updatedFieldArrayValues.length - appendValue.length;
        setFieldsAndNotify(updatedFieldArrayValues);
        batchStateUpdate(append, {
            argA: fillEmptyArray(value),
        }, updatedFieldArrayValues, false);
        registerFieldArray(appendValue, currentIndex);
        focusNameRef.current = getFocusFieldName(currentIndex, options);
    };
    const prepend$1 = (value, options) => {
        const prependValue = convertToArrayPayload(value);
        const updatedFieldArrayValues = prepend(getCurrentFieldsValues(), prependValue);
        setFieldsAndNotify(updatedFieldArrayValues);
        batchStateUpdate(prepend, {
            argA: fillEmptyArray(value),
        }, updatedFieldArrayValues);
        registerFieldArray(prependValue);
        focusNameRef.current = getFocusFieldName(0, options);
    };
    const remove = (index) => {
        const updatedFieldArrayValues = removeArrayAt(getCurrentFieldsValues(), index);
        setFieldsAndNotify(updatedFieldArrayValues);
        batchStateUpdate(removeArrayAt, {
            argA: index,
        }, updatedFieldArrayValues);
    };
    const insert$1 = (index, value, options) => {
        const insertValue = convertToArrayPayload(value);
        const updatedFieldArrayValues = insert(getCurrentFieldsValues(), index, insertValue);
        setFieldsAndNotify(updatedFieldArrayValues);
        batchStateUpdate(insert, {
            argA: index,
            argB: fillEmptyArray(value),
        }, updatedFieldArrayValues);
        registerFieldArray(insertValue, index);
        focusNameRef.current = getFocusFieldName(index, options);
    };
    const swap = (indexA, indexB) => {
        const fieldValues = getCurrentFieldsValues();
        swapArrayAt(fieldValues, indexA, indexB);
        batchStateUpdate(swapArrayAt, {
            argA: indexA,
            argB: indexB,
        }, fieldValues, false);
        setFieldsAndNotify(fieldValues);
    };
    const move = (from, to) => {
        const fieldValues = getCurrentFieldsValues();
        moveArrayAt(fieldValues, from, to);
        setFieldsAndNotify(fieldValues);
        batchStateUpdate(moveArrayAt, {
            argA: from,
            argB: to,
        }, fieldValues, false);
    };
    const update = (index, value) => {
        setValues((name + '.' + index), value, {
            shouldValidate: !!readFormStateRef.current.isValid,
            shouldDirty: !!(readFormStateRef.current.dirtyFields ||
                readFormStateRef.current.isDirty),
        });
        const fieldValues = getCurrentFieldsValues();
        fieldValues[index] = value;
        setFieldsAndNotify(fieldValues);
    };
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        inFieldArrayActionRef.current = false;
        if (namesRef.current.watchAll) {
            subjectsRef.current.state.next({});
        }
        else {
            for (const watchField of namesRef.current.watch) {
                if (name.startsWith(watchField)) {
                    subjectsRef.current.state.next({});
                    break;
                }
            }
        }
        subjectsRef.current.watch.next({
            name,
            values: getFieldsValues(fieldsRef),
        });
        focusNameRef.current &&
            focusFieldBy(fieldsRef.current, (key) => key.startsWith(focusNameRef.current));
        focusNameRef.current = '';
        subjectsRef.current.array.next({
            name,
            values: omitKey([...fields]),
        });
        readFormStateRef.current.isValid && updateIsValid();
    }, [fields, name]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const fieldArraySubscription = subjectsRef.current.array.subscribe({
            next({ name: inputFieldArrayName, values, isReset }) {
                if (isReset) {
                    unset(fieldsRef.current, inputFieldArrayName || name);
                    inputFieldArrayName
                        ? set(fieldArrayDefaultValuesRef.current, inputFieldArrayName, values)
                        : (fieldArrayDefaultValuesRef.current = values);
                    setFieldsAndNotify(get(fieldArrayDefaultValuesRef.current, name));
                }
            },
        });
        !get(fieldsRef.current, name) && set(fieldsRef.current, name, []);
        isMountedRef.current = true;
        return () => {
            fieldArraySubscription.unsubscribe();
            if (shouldUnmount || shouldUnregister) {
                unregister(name);
                unset(fieldArrayDefaultValuesRef.current, name);
            }
            else {
                const fieldArrayValues = get(getFieldsValues(fieldsRef), name);
                fieldArrayValues &&
                    set(fieldArrayDefaultValuesRef.current, name, fieldArrayValues);
            }
        };
    }, []);
    return {
        swap: react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](swap, [name]),
        move: react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](move, [name]),
        prepend: react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](prepend$1, [name]),
        append: react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](append$1, [name]),
        remove: react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](remove, [name]),
        insert: react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](insert$1, [name]),
        update: react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](update, [name]),
        fields: fields,
    };
};

var isFileInput = (element) => element.type === 'file';

var isMultipleSelect = (element) => element.type === `select-multiple`;

var isRadioInput = (element) => element.type === 'radio';

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter((option) => option && option.checked && !option.disabled)
                .map((option) => option.value);
            return { value: values, isValid: !!values.length };
        }
        return options[0].checked && !options[0].disabled
            ? // @ts-expect-error expected to work in the browser
                options[0].attributes && !isUndefined(options[0].attributes.value)
                    ? isUndefined(options[0].value) || options[0].value === ''
                        ? validResult
                        : { value: options[0].value, isValid: true }
                    : validResult
            : defaultResult;
    }
    return defaultResult;
};

var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value)
    ? value
    : valueAsNumber
        ? value === ''
            ? NaN
            : +value
        : valueAsDate
            ? new Date(value)
            : setValueAs
                ? setValueAs(value)
                : value;

var getMultipleSelectValue = (options) => [...options]
    .filter(({ selected }) => selected)
    .map(({ value }) => value);

const defaultReturn = {
    isValid: false,
    value: null,
};
var getRadioValue = (options) => Array.isArray(options)
    ? options.reduce((previous, option) => option && option.checked && !option.disabled
        ? {
            isValid: true,
            value: option.value,
        }
        : previous, defaultReturn)
    : defaultReturn;

function getFieldValue(field) {
    if (field && field._f) {
        const ref = field._f.ref;
        if (ref.disabled) {
            return;
        }
        if (isFileInput(ref)) {
            return ref.files;
        }
        if (isRadioInput(ref)) {
            return getRadioValue(field._f.refs).value;
        }
        if (isMultipleSelect(ref)) {
            return getMultipleSelectValue(ref.options);
        }
        if (isCheckBoxInput(ref)) {
            return getCheckboxValue(field._f.refs).value;
        }
        return getFieldValueAs(isUndefined(ref.value) ? field._f.ref.value : ref.value, field._f);
    }
}

var getResolverOptions = (fieldsNames, fieldsRefs, criteriaMode, shouldUseNativeValidation) => {
    const fields = {};
    for (const name of fieldsNames) {
        const field = get(fieldsRefs, name);
        field && set(fields, name, field._f);
    }
    return {
        criteriaMode,
        names: [...fieldsNames],
        fields,
        shouldUseNativeValidation,
    };
};

var hasValidation = (options, mounted) => mounted &&
    options &&
    (options.required ||
        options.min ||
        options.max ||
        options.maxLength ||
        options.minLength ||
        options.pattern ||
        options.validate);

var skipValidation = ({ isOnBlur, isOnChange, isOnTouch, isTouched, isReValidateOnBlur, isReValidateOnChange, isBlurEvent, isSubmitted, isOnAll, }) => {
    if (isOnAll) {
        return false;
    }
    else if (!isSubmitted && isOnTouch) {
        return !(isTouched || isBlurEvent);
    }
    else if (isSubmitted ? isReValidateOnBlur : isOnBlur) {
        return !isBlurEvent;
    }
    else if (isSubmitted ? isReValidateOnChange : isOnChange) {
        return isBlurEvent;
    }
    return true;
};

var isFunction = (value) => typeof value === 'function';

var isString = (value) => typeof value === 'string';

var isMessage = (value) => isString(value) || react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](value);

var isRegex = (value) => value instanceof RegExp;

function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) ||
        (Array.isArray(result) && result.every(isMessage)) ||
        (isBoolean(result) && !result)) {
        return {
            type,
            message: isMessage(result) ? result : '',
            ref,
        };
    }
}

var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData)
    ? validationData
    : {
        value: validationData,
        message: '',
    };

var validateField = async ({ _f: { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, value: inputValue, valueAsNumber, mount, }, }, validateAllFieldCriteria, shouldUseNativeValidation) => {
    if (!mount) {
        return {};
    }
    const inputRef = refs ? refs[0] : ref;
    const setCustomValidty = (message) => {
        if (shouldUseNativeValidation && inputRef.reportValidity) {
            inputRef.setCustomValidity(isBoolean(message) ? '' : message || ' ');
            inputRef.reportValidity();
        }
    };
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = ((valueAsNumber || isFileInput(ref)) && !ref.value) ||
        inputValue === '' ||
        (Array.isArray(inputValue) && !inputValue.length);
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = Object.assign({ type: exceedMax ? maxType : minType, message,
            ref }, appendErrorsCurry(exceedMax ? maxType : minType, message));
    };
    if (required &&
        ((!isRadioOrCheckbox && (isEmpty || isNullOrUndefined(inputValue))) ||
            (isBoolean(inputValue) && !inputValue) ||
            (isCheckBox && !getCheckboxValue(refs).isValid) ||
            (isRadio && !getRadioValue(refs).isValid))) {
        const { value, message } = isMessage(required)
            ? { value: !!required, message: required }
            : getValueAndMessage(required);
        if (value) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.required, message, ref: inputRef }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, message));
            if (!validateAllFieldCriteria) {
                setCustomValidty(message);
                return error;
            }
        }
    }
    if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
        let exceedMax;
        let exceedMin;
        const maxOutput = getValueAndMessage(max);
        const minOutput = getValueAndMessage(min);
        if (!isNaN(inputValue)) {
            const valueNumber = ref.valueAsNumber || parseFloat(inputValue);
            if (!isNullOrUndefined(maxOutput.value)) {
                exceedMax = valueNumber > maxOutput.value;
            }
            if (!isNullOrUndefined(minOutput.value)) {
                exceedMin = valueNumber < minOutput.value;
            }
        }
        else {
            const valueDate = ref.valueAsDate || new Date(inputValue);
            if (isString(maxOutput.value)) {
                exceedMax = valueDate > new Date(maxOutput.value);
            }
            if (isString(minOutput.value)) {
                exceedMin = valueDate < new Date(minOutput.value);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                setCustomValidty(error[name].message);
                return error;
            }
        }
    }
    if ((maxLength || minLength) && !isEmpty && isString(inputValue)) {
        const maxLengthOutput = getValueAndMessage(maxLength);
        const minLengthOutput = getValueAndMessage(minLength);
        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) &&
            inputValue.length > maxLengthOutput.value;
        const exceedMin = !isNullOrUndefined(minLengthOutput.value) &&
            inputValue.length < minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                setCustomValidty(error[name].message);
                return error;
            }
        }
    }
    if (pattern && !isEmpty && isString(inputValue)) {
        const { value: patternValue, message } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !inputValue.match(patternValue)) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.pattern, message,
                ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message));
            if (!validateAllFieldCriteria) {
                setCustomValidty(message);
                return error;
            }
        }
    }
    if (validate) {
        if (isFunction(validate)) {
            const result = await validate(inputValue);
            const validateError = getValidateError(result, inputRef);
            if (validateError) {
                error[name] = Object.assign(Object.assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
                if (!validateAllFieldCriteria) {
                    setCustomValidty(validateError.message);
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            let validationResult = {};
            for (const key in validate) {
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateError = getValidateError(await validate[key](inputValue), inputRef, key);
                if (validateError) {
                    validationResult = Object.assign(Object.assign({}, validateError), appendErrorsCurry(key, validateError.message));
                    setCustomValidty(validateError.message);
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = Object.assign({ ref: inputRef }, validationResult);
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    setCustomValidty(true);
    return error;
};

var debounce = (callback, wait) => {
    let timer = 0;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => callback(...args), wait);
    };
};

var getValidationModes = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all,
    isOnTouch: mode === VALIDATION_MODE.onTouched,
});

var isHTMLElement = (value) => value instanceof HTMLElement;

var isRadioOrCheckboxFunction = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

class Subscription {
    constructor() {
        this.tearDowns = [];
    }
    add(tearDown) {
        this.tearDowns.push(tearDown);
    }
    unsubscribe() {
        for (const teardown of this.tearDowns) {
            teardown();
        }
        this.tearDowns = [];
    }
}
class Subscriber {
    constructor(observer, subscription) {
        this.observer = observer;
        this.closed = false;
        subscription.add(() => (this.closed = true));
    }
    next(value) {
        if (!this.closed) {
            this.observer.next(value);
        }
    }
}
class Subject {
    constructor() {
        this.observers = [];
    }
    next(value) {
        for (const observer of this.observers) {
            observer.next(value);
        }
    }
    subscribe(observer) {
        const subscription = new Subscription();
        const subscriber = new Subscriber(observer, subscription);
        this.observers.push(subscriber);
        return subscription;
    }
    unsubscribe() {
        this.observers = [];
    }
}

const isWindowUndefined = typeof window === 'undefined';
function useForm({ mode = VALIDATION_MODE.onSubmit, reValidateMode = VALIDATION_MODE.onChange, resolver, context, defaultValues = {}, shouldFocusError = true, delayError, shouldUseNativeValidation, shouldUnregister, criteriaMode, } = {}) {
    const [formState, updateFormState] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
        isDirty: false,
        isValidating: false,
        dirtyFields: {},
        isSubmitted: false,
        submitCount: 0,
        touchedFields: {},
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        errors: {},
    });
    const readFormStateRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]({
        isDirty: !isProxyEnabled,
        dirtyFields: !isProxyEnabled,
        touchedFields: !isProxyEnabled,
        isValidating: !isProxyEnabled,
        isValid: !isProxyEnabled,
        errors: !isProxyEnabled,
    });
    const resolverRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](resolver);
    const formStateRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](formState);
    const fieldsRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]({});
    const defaultValuesRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](defaultValues);
    const fieldArrayDefaultValuesRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]({});
    const contextRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](context);
    const inFieldArrayActionRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](false);
    const isMountedRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](false);
    const _delayCallback = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    const subjectsRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]({
        watch: new Subject(),
        control: new Subject(),
        array: new Subject(),
        state: new Subject(),
    });
    const namesRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]({
        mount: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: false,
    });
    const validationMode = getValidationModes(mode);
    const isValidateAllFieldCriteria = criteriaMode === VALIDATION_MODE.all;
    resolverRef.current = resolver;
    contextRef.current = context;
    const isFieldWatched = (name) => namesRef.current.watchAll ||
        namesRef.current.watch.has(name) ||
        namesRef.current.watch.has((name.match(/\w+/) || [])[0]);
    const updateErrorState = (name, error) => {
        set(formStateRef.current.errors, name, error);
        subjectsRef.current.state.next({
            errors: formStateRef.current.errors,
        });
    };
    const shouldRenderBaseOnValid = async () => {
        const isValid = await validateForm(fieldsRef.current, true);
        if (isValid !== formStateRef.current.isValid) {
            formStateRef.current.isValid = isValid;
            subjectsRef.current.state.next({
                isValid,
            });
        }
    };
    const shouldRenderBaseOnError = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](async (shouldSkipRender, name, error, fieldState, isValidFromResolver, isWatched) => {
        const previousError = get(formStateRef.current.errors, name);
        const isValid = readFormStateRef.current.isValid
            ? resolver
                ? isValidFromResolver
                : shouldRenderBaseOnValid()
            : false;
        if (delayError && error) {
            _delayCallback.current =
                _delayCallback.current || debounce(updateErrorState, delayError);
            _delayCallback.current(name, error);
        }
        else {
            error
                ? set(formStateRef.current.errors, name, error)
                : unset(formStateRef.current.errors, name);
        }
        if ((isWatched ||
            (error ? !deepEqual(previousError, error) : previousError) ||
            !isEmptyObject(fieldState) ||
            formStateRef.current.isValid !== isValid) &&
            !shouldSkipRender) {
            const updatedFormState = Object.assign(Object.assign(Object.assign({}, fieldState), (resolver ? { isValid: !!isValid } : {})), { errors: formStateRef.current.errors, name });
            formStateRef.current = Object.assign(Object.assign({}, formStateRef.current), updatedFormState);
            subjectsRef.current.state.next(isWatched ? { name } : updatedFormState);
        }
        subjectsRef.current.state.next({
            isValidating: false,
        });
    }, []);
    const setFieldValue = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((name, rawValue, options = {}, shouldRender, shouldRegister) => {
        shouldRegister && register(name);
        const field = get(fieldsRef.current, name);
        if (field) {
            const _f = field._f;
            if (_f) {
                const value = isWeb && isHTMLElement(_f.ref) && isNullOrUndefined(rawValue)
                    ? ''
                    : rawValue;
                _f.value = getFieldValueAs(rawValue, _f);
                if (isRadioInput(_f.ref)) {
                    (_f.refs || []).forEach((radioRef) => (radioRef.checked = radioRef.value === value));
                }
                else if (isFileInput(_f.ref) && !isString(value)) {
                    _f.ref.files = value;
                }
                else if (isMultipleSelect(_f.ref)) {
                    [..._f.ref.options].forEach((selectRef) => (selectRef.selected = value.includes(selectRef.value)));
                }
                else if (isCheckBoxInput(_f.ref) && _f.refs) {
                    _f.refs.length > 1
                        ? _f.refs.forEach((checkboxRef) => (checkboxRef.checked = Array.isArray(value)
                            ? !!value.find((data) => data === checkboxRef.value)
                            : value === checkboxRef.value))
                        : (_f.refs[0].checked = !!value);
                }
                else {
                    _f.ref.value = value;
                }
                if (shouldRender) {
                    const values = getFieldsValues(fieldsRef);
                    set(values, name, rawValue);
                    subjectsRef.current.control.next({
                        values: Object.assign(Object.assign({}, defaultValuesRef.current), values),
                        name,
                    });
                }
                (options.shouldDirty || options.shouldTouch) &&
                    updateTouchAndDirtyState(name, value, options.shouldTouch);
                options.shouldValidate && trigger(name);
            }
            else {
                field._f = {
                    ref: {
                        name,
                        value: rawValue,
                    },
                    value: rawValue,
                };
            }
        }
    }, []);
    const getIsDirty = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((name, data) => {
        const formValues = getFieldsValues(fieldsRef);
        name && data && set(formValues, name, data);
        return !deepEqual(formValues, defaultValuesRef.current);
    }, []);
    const updateTouchAndDirtyState = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((name, inputValue, isCurrentTouched, shouldRender = true) => {
        const state = {
            name,
        };
        let isChanged = false;
        if (readFormStateRef.current.isDirty) {
            const previousIsDirty = formStateRef.current.isDirty;
            formStateRef.current.isDirty = getIsDirty();
            state.isDirty = formStateRef.current.isDirty;
            isChanged = previousIsDirty !== state.isDirty;
        }
        if (readFormStateRef.current.dirtyFields && !isCurrentTouched) {
            const isPreviousFieldDirty = get(formStateRef.current.dirtyFields, name);
            const isCurrentFieldDirty = !deepEqual(get(defaultValuesRef.current, name), inputValue);
            isCurrentFieldDirty
                ? set(formStateRef.current.dirtyFields, name, true)
                : unset(formStateRef.current.dirtyFields, name);
            state.dirtyFields = formStateRef.current.dirtyFields;
            isChanged =
                isChanged ||
                    isPreviousFieldDirty !== get(formStateRef.current.dirtyFields, name);
        }
        const isPreviousFieldTouched = get(formStateRef.current.touchedFields, name);
        if (isCurrentTouched && !isPreviousFieldTouched) {
            set(formStateRef.current.touchedFields, name, isCurrentTouched);
            state.touchedFields = formStateRef.current.touchedFields;
            isChanged =
                isChanged ||
                    (readFormStateRef.current.touchedFields &&
                        isPreviousFieldTouched !== isCurrentTouched);
        }
        isChanged && shouldRender && subjectsRef.current.state.next(state);
        return isChanged ? state : {};
    }, []);
    const executeInlineValidation = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](async (name, skipReRender) => {
        const error = (await validateField(get(fieldsRef.current, name), isValidateAllFieldCriteria, shouldUseNativeValidation))[name];
        await shouldRenderBaseOnError(skipReRender, name, error);
        return isUndefined(error);
    }, [isValidateAllFieldCriteria]);
    const executeResolverValidation = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](async (names) => {
        const { errors } = await resolverRef.current(getFieldsValues(fieldsRef), contextRef.current, getResolverOptions(namesRef.current.mount, fieldsRef.current, criteriaMode, shouldUseNativeValidation));
        if (names) {
            for (const name of names) {
                const error = get(errors, name);
                error
                    ? set(formStateRef.current.errors, name, error)
                    : unset(formStateRef.current.errors, name);
            }
        }
        else {
            formStateRef.current.errors = errors;
        }
        return errors;
    }, [criteriaMode, shouldUseNativeValidation]);
    const validateForm = async (fieldsRef, shouldCheckValid, context = {
        valid: true,
    }) => {
        for (const name in fieldsRef) {
            const field = fieldsRef[name];
            if (field) {
                const _f = field._f;
                const current = omit(field, '_f');
                if (_f) {
                    const fieldError = await validateField(field, isValidateAllFieldCriteria, shouldUseNativeValidation);
                    if (shouldCheckValid) {
                        if (fieldError[_f.name]) {
                            context.valid = false;
                            break;
                        }
                    }
                    else {
                        fieldError[_f.name]
                            ? set(formStateRef.current.errors, _f.name, fieldError[_f.name])
                            : unset(formStateRef.current.errors, _f.name);
                    }
                }
                current && (await validateForm(current, shouldCheckValid, context));
            }
        }
        return context.valid;
    };
    const trigger = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](async (name, options = {}) => {
        const fieldNames = convertToArrayPayload(name);
        let isValid;
        subjectsRef.current.state.next({
            isValidating: true,
        });
        if (resolver) {
            const schemaResult = await executeResolverValidation(isUndefined(name) ? name : fieldNames);
            isValid = name
                ? fieldNames.every((name) => !get(schemaResult, name))
                : isEmptyObject(schemaResult);
        }
        else {
            if (name) {
                isValid = (await Promise.all(fieldNames
                    .filter((fieldName) => get(fieldsRef.current, fieldName, {})._f)
                    .map(async (fieldName) => await executeInlineValidation(fieldName, true)))).every(Boolean);
            }
            else {
                await validateForm(fieldsRef.current);
                isValid = isEmptyObject(formStateRef.current.errors);
            }
        }
        subjectsRef.current.state.next(Object.assign(Object.assign({}, (isString(name) ? { name } : {})), { errors: formStateRef.current.errors, isValidating: false }));
        if (options.shouldFocus && !isValid) {
            focusFieldBy(fieldsRef.current, (key) => get(formStateRef.current.errors, key), name ? fieldNames : namesRef.current.mount);
        }
        readFormStateRef.current.isValid && updateIsValid();
        return isValid;
    }, [executeResolverValidation, executeInlineValidation]);
    const updateIsValidAndInputValue = (name, ref, shouldSkipValueAs) => {
        const field = get(fieldsRef.current, name);
        if (field) {
            const isValueUndefined = isUndefined(field._f.value);
            const defaultValue = isValueUndefined
                ? isUndefined(get(fieldArrayDefaultValuesRef.current, name))
                    ? get(defaultValuesRef.current, name)
                    : get(fieldArrayDefaultValuesRef.current, name)
                : field._f.value;
            if (!isUndefined(defaultValue)) {
                if (ref && ref.defaultChecked) {
                    field._f.value = getFieldValue(field);
                }
                else if (shouldSkipValueAs) {
                    field._f.value = defaultValue;
                }
                else {
                    setFieldValue(name, defaultValue);
                }
            }
            else if (isValueUndefined) {
                field._f.value = getFieldValue(field);
            }
        }
        isMountedRef.current && readFormStateRef.current.isValid && updateIsValid();
    };
    const updateIsValid = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](async (values = {}) => {
        const isValid = resolver
            ? isEmptyObject((await resolverRef.current(Object.assign(Object.assign({}, getFieldsValues(fieldsRef)), values), contextRef.current, getResolverOptions(namesRef.current.mount, fieldsRef.current, criteriaMode, shouldUseNativeValidation))).errors)
            : await validateForm(fieldsRef.current, true);
        if (isValid !== formStateRef.current.isValid) {
            formStateRef.current.isValid = isValid;
            subjectsRef.current.state.next({
                isValid,
            });
        }
    }, [criteriaMode, shouldUseNativeValidation]);
    const setValues = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((name, value, options) => Object.entries(value).forEach(([fieldKey, fieldValue]) => {
        const fieldName = `${name}.${fieldKey}`;
        const field = get(fieldsRef.current, fieldName);
        const isFieldArray = namesRef.current.array.has(name);
        (isFieldArray || !isPrimitive(fieldValue) || (field && !field._f)) &&
            !isDateObject(fieldValue)
            ? setValues(fieldName, fieldValue, options)
            : setFieldValue(fieldName, fieldValue, options, true, !field);
    }), [trigger]);
    const setValue = (name, value, options = {}) => {
        const field = get(fieldsRef.current, name);
        const isFieldArray = namesRef.current.array.has(name);
        if (isFieldArray) {
            subjectsRef.current.array.next({
                values: value,
                name,
                isReset: true,
            });
            if ((readFormStateRef.current.isDirty ||
                readFormStateRef.current.dirtyFields) &&
                options.shouldDirty) {
                set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(value, get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
                subjectsRef.current.state.next({
                    name,
                    dirtyFields: formStateRef.current.dirtyFields,
                    isDirty: getIsDirty(name, value),
                });
            }
            !value.length &&
                set(fieldsRef.current, name, []) &&
                set(fieldArrayDefaultValuesRef.current, name, []);
        }
        ((field && !field._f) || isFieldArray) && !isNullOrUndefined(value)
            ? setValues(name, value, isFieldArray ? {} : options)
            : setFieldValue(name, value, options, true, !field);
        isFieldWatched(name) && subjectsRef.current.state.next({});
        subjectsRef.current.watch.next({ name, values: getValues() });
    };
    const handleValidate = async (target, fieldState, isWatched, isBlurEvent) => {
        let error;
        let isValid;
        let name = target.name;
        const field = get(fieldsRef.current, name);
        if (resolver) {
            const { errors } = await resolverRef.current(getFieldsValues(fieldsRef), contextRef.current, getResolverOptions([name], fieldsRef.current, criteriaMode, shouldUseNativeValidation));
            error = get(errors, name);
            if (isCheckBoxInput(target) && !error) {
                const parentNodeName = getNodeParentName(name);
                const currentError = get(errors, parentNodeName, {});
                currentError.type && currentError.message && (error = currentError);
                if (currentError || get(formStateRef.current.errors, parentNodeName)) {
                    name = parentNodeName;
                }
            }
            isValid = isEmptyObject(errors);
        }
        else {
            error = (await validateField(field, isValidateAllFieldCriteria, shouldUseNativeValidation))[name];
        }
        !isBlurEvent &&
            subjectsRef.current.watch.next({
                name,
                type: target.type,
                values: getValues(),
            });
        shouldRenderBaseOnError(false, name, error, fieldState, isValid, isWatched);
    };
    const handleChange = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](async ({ type, target, target: { value, name, type: inputType } }) => {
        const field = get(fieldsRef.current, name);
        if (field) {
            let inputValue = inputType ? getFieldValue(field) : undefined;
            inputValue = isUndefined(inputValue) ? value : inputValue;
            const isBlurEvent = type === EVENTS.BLUR;
            const { isOnBlur: isReValidateOnBlur, isOnChange: isReValidateOnChange, } = getValidationModes(reValidateMode);
            const shouldSkipValidation = (!hasValidation(field._f, field._f.mount) &&
                !resolver &&
                !get(formStateRef.current.errors, name)) ||
                skipValidation(Object.assign({ isBlurEvent, isTouched: !!get(formStateRef.current.touchedFields, name), isSubmitted: formStateRef.current.isSubmitted, isReValidateOnBlur,
                    isReValidateOnChange }, validationMode));
            const isWatched = !isBlurEvent && isFieldWatched(name);
            if (!isUndefined(inputValue)) {
                field._f.value = inputValue;
            }
            const fieldState = updateTouchAndDirtyState(name, field._f.value, isBlurEvent, false);
            const shouldRender = !isEmptyObject(fieldState) || isWatched;
            if (shouldSkipValidation) {
                !isBlurEvent &&
                    subjectsRef.current.watch.next({
                        name,
                        type,
                        values: getValues(),
                    });
                return (shouldRender &&
                    subjectsRef.current.state.next(isWatched ? { name } : Object.assign(Object.assign({}, fieldState), { name })));
            }
            subjectsRef.current.state.next({
                isValidating: true,
            });
            handleValidate(target, fieldState, isWatched, isBlurEvent);
        }
    }, []);
    const getValues = (fieldNames) => {
        const values = Object.assign(Object.assign({}, defaultValuesRef.current), getFieldsValues(fieldsRef));
        return isUndefined(fieldNames)
            ? values
            : isString(fieldNames)
                ? get(values, fieldNames)
                : fieldNames.map((name) => get(values, name));
    };
    const clearErrors = (name) => {
        name
            ? convertToArrayPayload(name).forEach((inputName) => unset(formStateRef.current.errors, inputName))
            : (formStateRef.current.errors = {});
        subjectsRef.current.state.next({
            errors: formStateRef.current.errors,
        });
    };
    const setError = (name, error, options) => {
        const ref = ((get(fieldsRef.current, name) || { _f: {} })._f || {}).ref;
        set(formStateRef.current.errors, name, Object.assign(Object.assign({}, error), { ref }));
        subjectsRef.current.state.next({
            name,
            errors: formStateRef.current.errors,
            isValid: false,
        });
        options && options.shouldFocus && ref && ref.focus && ref.focus();
    };
    const watchInternal = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((fieldNames, defaultValue, isGlobal, formValues) => {
        const isArrayNames = Array.isArray(fieldNames);
        const fieldValues = formValues || isMountedRef.current
            ? Object.assign(Object.assign({}, defaultValuesRef.current), (formValues || getFieldsValues(fieldsRef))) : isUndefined(defaultValue)
            ? defaultValuesRef.current
            : isArrayNames
                ? defaultValue
                : { [fieldNames]: defaultValue };
        if (isUndefined(fieldNames)) {
            isGlobal && (namesRef.current.watchAll = true);
            return fieldValues;
        }
        const result = [];
        for (const fieldName of convertToArrayPayload(fieldNames)) {
            isGlobal && namesRef.current.watch.add(fieldName);
            result.push(get(fieldValues, fieldName));
        }
        return isArrayNames ? result : result[0];
    }, []);
    const watch = (fieldName, defaultValue) => isFunction(fieldName)
        ? subjectsRef.current.watch.subscribe({
            next: (info) => fieldName(watchInternal(undefined, defaultValue), info),
        })
        : watchInternal(fieldName, defaultValue, true);
    const unregister = (name, options = {}) => {
        for (const inputName of name
            ? convertToArrayPayload(name)
            : namesRef.current.mount) {
            namesRef.current.mount.delete(inputName);
            namesRef.current.array.delete(inputName);
            if (get(fieldsRef.current, inputName)) {
                !options.keepError && unset(formStateRef.current.errors, inputName);
                !options.keepValue && unset(fieldsRef.current, inputName);
                !options.keepDirty &&
                    unset(formStateRef.current.dirtyFields, inputName);
                !options.keepTouched &&
                    unset(formStateRef.current.touchedFields, inputName);
                !shouldUnregister &&
                    !options.keepDefaultValue &&
                    unset(defaultValuesRef.current, inputName);
            }
        }
        subjectsRef.current.watch.next({
            values: getValues(),
        });
        subjectsRef.current.state.next(Object.assign(Object.assign({}, formStateRef.current), (!options.keepDirty ? {} : { isDirty: getIsDirty() })));
        !options.keepIsValid && updateIsValid();
    };
    const registerFieldRef = (name, ref, options) => {
        register(name, options);
        let field = get(fieldsRef.current, name);
        const isRadioOrCheckbox = isRadioOrCheckboxFunction(ref);
        if (ref === field._f.ref ||
            (isRadioOrCheckbox &&
                compact(field._f.refs || []).find((option) => option === ref))) {
            return;
        }
        field = {
            _f: isRadioOrCheckbox
                ? Object.assign(Object.assign({}, field._f), { refs: [
                        ...compact(field._f.refs || []).filter((ref) => isHTMLElement(ref) && document.contains(ref)),
                        ref,
                    ], ref: { type: ref.type, name } }) : Object.assign(Object.assign({}, field._f), { ref }),
        };
        set(fieldsRef.current, name, field);
        updateIsValidAndInputValue(name, ref);
    };
    const register = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((name, options = {}) => {
        const field = get(fieldsRef.current, name);
        set(fieldsRef.current, name, {
            _f: Object.assign(Object.assign(Object.assign({}, (field && field._f ? field._f : { ref: { name } })), { name, mount: true }), options),
        });
        namesRef.current.mount.add(name);
        !field && updateIsValidAndInputValue(name, undefined, true);
        return isWindowUndefined
            ? { name: name }
            : {
                name,
                onChange: handleChange,
                onBlur: handleChange,
                ref: (ref) => {
                    if (ref) {
                        registerFieldRef(name, ref, options);
                    }
                    else {
                        const field = get(fieldsRef.current, name, {});
                        const shouldUnmount = shouldUnregister || options.shouldUnregister;
                        if (field._f) {
                            field._f.mount = false;
                            // If initial state of field element is disabled,
                            // value is not set on first "register"
                            // re-sync the value in when it switched to enabled
                            if (isUndefined(field._f.value)) {
                                field._f.value = field._f.ref.value;
                            }
                        }
                        shouldUnmount &&
                            !(isNameInFieldArray(namesRef.current.array, name) &&
                                inFieldArrayActionRef.current) &&
                            namesRef.current.unMount.add(name);
                    }
                },
            };
    }, []);
    const handleSubmit = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((onValid, onInvalid) => async (e) => {
        if (e) {
            e.preventDefault && e.preventDefault();
            e.persist && e.persist();
        }
        let hasNoPromiseError = true;
        let fieldValues = getFieldsValues(fieldsRef);
        subjectsRef.current.state.next({
            isSubmitting: true,
        });
        try {
            if (resolver) {
                const { errors, values } = await resolverRef.current(fieldValues, contextRef.current, getResolverOptions(namesRef.current.mount, fieldsRef.current, criteriaMode, shouldUseNativeValidation));
                formStateRef.current.errors = errors;
                fieldValues = values;
            }
            else {
                await validateForm(fieldsRef.current);
            }
            if (isEmptyObject(formStateRef.current.errors) &&
                Object.keys(formStateRef.current.errors).every((name) => get(fieldValues, name))) {
                subjectsRef.current.state.next({
                    errors: {},
                    isSubmitting: true,
                });
                await onValid(fieldValues, e);
            }
            else {
                onInvalid && (await onInvalid(formStateRef.current.errors, e));
                shouldFocusError &&
                    focusFieldBy(fieldsRef.current, (key) => get(formStateRef.current.errors, key), namesRef.current.mount);
            }
        }
        catch (err) {
            hasNoPromiseError = false;
            throw err;
        }
        finally {
            formStateRef.current.isSubmitted = true;
            subjectsRef.current.state.next({
                isSubmitted: true,
                isSubmitting: false,
                isSubmitSuccessful: isEmptyObject(formStateRef.current.errors) && hasNoPromiseError,
                submitCount: formStateRef.current.submitCount + 1,
                errors: formStateRef.current.errors,
            });
        }
    }, [
        shouldFocusError,
        isValidateAllFieldCriteria,
        criteriaMode,
        shouldUseNativeValidation,
    ]);
    const registerAbsentFields = (defaultValues, name = '') => {
        for (const key in defaultValues) {
            const value = defaultValues[key];
            const fieldName = name + (name ? '.' : '') + key;
            const field = get(fieldsRef.current, fieldName);
            if (!field || !field._f) {
                if (isObject(value) || Array.isArray(value)) {
                    registerAbsentFields(value, fieldName);
                }
                else if (!field) {
                    register(fieldName, { value });
                }
            }
        }
    };
    const reset = (values, keepStateOptions = {}) => {
        const updatedValues = values || defaultValuesRef.current;
        if (isWeb && !keepStateOptions.keepValues) {
            for (const name of namesRef.current.mount) {
                const field = get(fieldsRef.current, name);
                if (field && field._f) {
                    const inputRef = Array.isArray(field._f.refs)
                        ? field._f.refs[0]
                        : field._f.ref;
                    try {
                        isHTMLElement(inputRef) && inputRef.closest('form').reset();
                        break;
                    }
                    catch (_a) { }
                }
            }
        }
        if (!keepStateOptions.keepDefaultValues) {
            defaultValuesRef.current = Object.assign({}, updatedValues);
            fieldArrayDefaultValuesRef.current = Object.assign({}, updatedValues);
        }
        if (!keepStateOptions.keepValues) {
            fieldsRef.current = {};
            subjectsRef.current.control.next({
                values: keepStateOptions.keepDefaultValues
                    ? defaultValuesRef.current
                    : Object.assign({}, updatedValues),
            });
            subjectsRef.current.watch.next({
                values: Object.assign({}, updatedValues),
            });
            subjectsRef.current.array.next({
                values: Object.assign({}, updatedValues),
                isReset: true,
            });
        }
        namesRef.current = {
            mount: new Set(),
            unMount: new Set(),
            array: new Set(),
            watch: new Set(),
            watchAll: false,
        };
        subjectsRef.current.state.next({
            submitCount: keepStateOptions.keepSubmitCount
                ? formStateRef.current.submitCount
                : 0,
            isDirty: keepStateOptions.keepDirty
                ? formStateRef.current.isDirty
                : keepStateOptions.keepDefaultValues
                    ? deepEqual(values, defaultValuesRef.current)
                    : false,
            isSubmitted: keepStateOptions.keepIsSubmitted
                ? formStateRef.current.isSubmitted
                : false,
            dirtyFields: keepStateOptions.keepDirty
                ? formStateRef.current.dirtyFields
                : {},
            touchedFields: keepStateOptions.keepTouched
                ? formStateRef.current.touchedFields
                : {},
            errors: keepStateOptions.keepErrors ? formStateRef.current.errors : {},
            isSubmitting: false,
            isSubmitSuccessful: false,
        });
        isMountedRef.current = !!keepStateOptions.keepIsValid;
    };
    const setFocus = (name) => get(fieldsRef.current, name)._f.ref.focus();
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const formStateSubscription = subjectsRef.current.state.subscribe({
            next(formState) {
                if (shouldRenderFormState(formState, readFormStateRef.current, true)) {
                    formStateRef.current = Object.assign(Object.assign({}, formStateRef.current), formState);
                    updateFormState(formStateRef.current);
                }
            },
        });
        const useFieldArraySubscription = subjectsRef.current.array.subscribe({
            next(state) {
                if (state.values && state.name && readFormStateRef.current.isValid) {
                    const values = getFieldsValues(fieldsRef);
                    set(values, state.name, state.values);
                    updateIsValid(values);
                }
            },
        });
        return () => {
            formStateSubscription.unsubscribe();
            useFieldArraySubscription.unsubscribe();
        };
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const unregisterFieldNames = [];
        const isLiveInDom = (ref) => !isHTMLElement(ref) || !document.contains(ref);
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            readFormStateRef.current.isValid && updateIsValid();
            !shouldUnregister && registerAbsentFields(defaultValuesRef.current);
        }
        for (const name of namesRef.current.unMount) {
            const field = get(fieldsRef.current, name);
            field &&
                (field._f.refs
                    ? field._f.refs.every(isLiveInDom)
                    : isLiveInDom(field._f.ref)) &&
                unregisterFieldNames.push(name);
        }
        unregisterFieldNames.length &&
            unregister(unregisterFieldNames);
        namesRef.current.unMount = new Set();
    });
    return {
        control: react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => ({
            register,
            inFieldArrayActionRef,
            getIsDirty,
            subjectsRef,
            watchInternal,
            fieldsRef,
            updateIsValid,
            namesRef,
            readFormStateRef,
            formStateRef,
            defaultValuesRef,
            fieldArrayDefaultValuesRef,
            setValues,
            unregister,
            shouldUnmount: shouldUnregister,
        }), []),
        formState: getProxyFormState(isProxyEnabled, formState, readFormStateRef),
        trigger,
        register,
        handleSubmit,
        watch: react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](watch, []),
        setValue: react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](setValue, [setValues]),
        getValues: react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](getValues, []),
        reset: react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](reset, []),
        clearErrors: react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](clearErrors, []),
        unregister: react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](unregister, []),
        setError: react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](setError, []),
        setFocus: react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](setFocus, []),
    };
}

function useWatch(props) {
    const { control, name, defaultValue } = props || {};
    const methods = useFormContext();
    const nameRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](name);
    nameRef.current = name;
    const { watchInternal, subjectsRef } = control || methods.control;
    const [value, updateValue] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](isUndefined(defaultValue)
        ? watchInternal(name)
        : defaultValue);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        watchInternal(name);
        const watchSubscription = subjectsRef.current.watch.subscribe({
            next: ({ name: inputName, values }) => (!nameRef.current ||
                !inputName ||
                convertToArrayPayload(nameRef.current).some((fieldName) => inputName &&
                    fieldName &&
                    (fieldName.startsWith(inputName) ||
                        inputName.startsWith(fieldName)))) &&
                updateValue(watchInternal(nameRef.current, defaultValue, false, values)),
        });
        return () => watchSubscription.unsubscribe();
    }, []);
    return value;
}


//# sourceMappingURL=index.esm.js.map


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXZpZXdGb3JtL1Jldmlld0Zvcm0ubW9kdWxlLmNzcz85MjMxIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Jldmlld0Zvcm0vUmV2aWV3Rm9ybS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmV2aWV3Rm9ybS9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmV2aWV3Rm9ybS9SZXZpZXdGb3JtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1ob29rLWZvcm0vZGlzdC9pbmRleC5lc20uanMiXSwibmFtZXMiOlsiUmV2aWV3Rm9ybSIsInByb2R1Y3RJZCIsImNsYXNzTmFtZSIsInByb3BzIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiY29udHJvbCIsImhhbmRsZVN1Ym1pdCIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjbiIsInN0eWxlcyIsInJldmlld0Zvcm0iLCJ0aXRsZSIsInJhaXRpbmciLCJkZXNjcmlwdGlvbiIsInN1Ym1pdCIsImluZm8iLCJzdWNjZXNzIiwic3VjY2Vzc1RpdGxlIiwiY2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLFVBQVUsbUJBQU8sQ0FBQyxzTkFBMkc7QUFDN0gsMEJBQTBCLG1CQUFPLENBQUMscVZBQW1MOztBQUVyTjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQSxrRUFBa0UsaUJBQWlCLGNBQWMsTUFBTSxZQUFZLGlDQUFpQztBQUNwSixVQUFVLGdCQUFnQixlQUFlLFlBQVksaUNBQWlD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Q0E7QUFDQSxJQUFJLCtDQUFlO0FBQ25CO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUUySTtBQUMzSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bdHlwZV0vW2FsaWFzXS45ZTI2MWU3ODRjNjA3ZmJlYjI5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9SZXZpZXdGb3JtLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL1Jldmlld0Zvcm0ubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL1Jldmlld0Zvcm0ubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBSZXZpZXdGb3JtUHJvcHMgfSBmcm9tIFwiLi9SZXZpZXdGb3JtLnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUmV2aWV3Rm9ybS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIFJhaXRpbmcsIFRleHRhcmVhIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIi4vY2xvc2Uuc3ZnXCJcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHsgSVJldmlld0Zvcm0gfSBmcm9tIFwiLi9SZXZpZXdGb3JtLmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJldmlld0Zvcm0gPSAoeyBwcm9kdWN0SWQsIGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmV2aWV3Rm9ybVByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IHsgcmVnaXN0ZXIsIGNvbnRyb2wsIGhhbmRsZVN1Ym1pdH0gPSB1c2VGb3JtPElSZXZpZXdGb3JtPigpXHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gKGRhdGE6IElSZXZpZXdGb3JtKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy5yZXZpZXdGb3JtLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9PlxyXG5cdFx0XHRcdDxJbnB1dCB7Li4ucmVnaXN0ZXIoJ25hbWUnKX0gcGxhY2Vob2xkZXI9XCLQmNC80Y9cIj48L0lucHV0PlxyXG5cdFx0XHRcdDxJbnB1dCB7Li4ucmVnaXN0ZXJ9IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfSBwbGFjZWhvbGRlcj1cItCX0LDQs9C+0LvQvtCy0L7QulwiPjwvSW5wdXQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYWl0aW5nfT5cclxuXHRcdFx0XHRcdDxzcGFuPtCe0YbQtdC90LrQsDo8L3NwYW4+XHJcblx0XHRcdFx0XHQ8UmFpdGluZyByYWl0aW5nPXswfSBpc0VkaXRhYmxlPXt0cnVlfT48L1JhaXRpbmc+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PFRleHRhcmVhIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufSBwbGFjZWhvbGRlcj1cItCi0LXQutGB0YIg0L7RgtC30YvQstCwXCI+PC9UZXh0YXJlYT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1Ym1pdH0+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCI+0J7RgtC/0YDQsNCy0LjRgtGMPC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT4qINCf0LXRgNC10LQg0L/Rg9Cx0LvQuNC60LDRhtC40LXQuSDQvtGC0LfRi9CyINC/0YDQvtC50LTQtdGCINC/0YDQtdC00LLQsNGA0LjRgtC10LvRjNC90YPRjiDQvNC+0LTQtdGA0LDRhtC40Y4g0Lgg0L/RgNC+0LLQtdGA0LrRgzwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VjY2Vzc30+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWNjZXNzVGl0bGV9PtCS0LDRiCDQvtGC0LfRi9CyINC+0YLQv9GA0LDQstC70LXQvTwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PtCS0LDRiCDQvtGC0LfRi9CyINCx0YPQtNC10YIg0L7Qv9GD0LHQu9C40LrQvtCy0LDQvSDQv9C+0YHQu9C1INC/0YDQvtCy0LXRgNC60Lg8L2Rpdj5cclxuXHRcdFx0XHQ8Q2xvc2VJY29uIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlfT48L0Nsb3NlSWNvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Zvcm0+XHJcblx0KTtcclxufTtcclxuIiwidmFyIF9wYXRoO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnQ2xvc2UocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogMTIsXG4gICAgaGVpZ2h0OiAxMixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBzdHJva2U6IFwiIzFDQzM3RVwiLFxuICAgIHN0cm9rZVdpZHRoOiAzLFxuICAgIGQ6IFwiTTIuMDYxIDEuOTM5bDguNDg1IDguNDg2TTEuOTM5IDEwLjQyNWw4LjQ4Ni04LjQ4NlwiXG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0Nsb3NlOyIsImV4cG9ydCAqIGZyb20gXCIuL0h0YWcvSHRhZ1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9CdXR0b24vQnV0dG9uXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vUC9QXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vVGFnL1RhZ1wiXHJcbmV4cG9ydCAqIGZyb20gXCIuL1JhaXRpbmcvUmFpdGluZ1wiXHJcbmV4cG9ydCAqIGZyb20gXCIuL0NhcmQvQ2FyZFwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL0FkdmFudGFnZXMvQWR2YW50YWdlc1wiXHJcbmV4cG9ydCAqIGZyb20gXCIuL1NvcnQvU29ydFwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL0lucHV0L0lucHV0XCJcclxuZXhwb3J0ICogZnJvbSBcIi4vVGV4dGFyZWEvVGV4dGFyZWFcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9TZWFyY2gvU2VhcmNoXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vUHJvZHVjdC9Qcm9kdWN0XCJcclxuZXhwb3J0ICogZnJvbSBcIi4vRGl2aWRlci9EaXZpZGVyXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vUmV2aWV3L1Jldmlld1wiXHJcbmV4cG9ydCAqIGZyb20gXCIuL1Jldmlld0Zvcm0vUmV2aWV3Rm9ybVwiIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLlJldmlld0Zvcm1fcmV2aWV3Rm9ybV9fMm9Edlgge1xcclxcblxcdGZvbnQtc2l6ZTogMTRweDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMjRweDtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogW3N0YXJ0XSBhdXRvIDFmciBhdXRvIFtlbmRdOyBcXHJcXG5cXHRncmlkLWdhcDogMjBweCAzMHB4OyBcXHJcXG5cXHRnYXA6IDIwcHggMzBweDtcXHJcXG5cXHQtbW96LWJveC1hbGlnbjogY2VudGVyO1xcclxcblxcdCAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLlJldmlld0Zvcm1fdGl0bGVfX1pBbXdIIHtcXHJcXG5cXHRqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5SZXZpZXdGb3JtX2Rlc2NyaXB0aW9uX18yUDZuRSB7XFxyXFxuXFx0Z3JpZC1jb2x1bW46IHN0YXJ0IC8gZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uUmV2aWV3Rm9ybV9zdWJtaXRfXzZvMU5LIHtcXHJcXG5cXHRncmlkLWNvbHVtbjogc3RhcnQgLyBlbmQ7XFxyXFxufVxcclxcblxcclxcbi5SZXZpZXdGb3JtX2luZm9fX2drMldxIHtcXHJcXG4gbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5SZXZpZXdGb3JtX3JhaXRpbmdfX1E3LTNsIHtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcclxcblxcdGdyaWQtZ2FwOiAyMHB4O1xcclxcblxcdGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLlJldmlld0Zvcm1fc3VjY2Vzc19fMVB4ZFEge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLWxpZ2h0KTtcXHJcXG5cXHRwYWRkaW5nOiAyMHB4O1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0bWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLlJldmlld0Zvcm1fc3VjY2Vzc1RpdGxlX18yX2JlMCB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5SZXZpZXdGb3JtX2Nsb3NlX18zRzJVSCB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogMjBweDtcXHJcXG5cXHRyaWdodDogMjBweDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXHJcXG5cXHQuUmV2aWV3Rm9ybV9yZXZpZXdGb3JtX18yb0R2WCB7XFxyXFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBbc3RhcnRdIDFmciAxZnIgW2VuZF07IFxcclxcblxcdH1cXHJcXG5cXHQuUmV2aWV3Rm9ybV9yYWl0aW5nX19RNy0zbCB7XFxyXFxuXFx0XFx0Z3JpZC1jb2x1bW46IHN0YXJ0IC8gZW5kO1xcclxcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxyXFxuXFx0fVxcclxcblxcdC5SZXZpZXdGb3JtX3RpdGxlX19aQW13SCB7XFxyXFxuXFx0XFx0anVzdGlmeS1zZWxmOiBub3JtYWw7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcXHJcXG5cXHQuUmV2aWV3Rm9ybV9yZXZpZXdGb3JtX18yb0R2WCB7XFxyXFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBbc3RhcnRdIDFmciBbZW5kXTsgXFxyXFxuXFx0fVxcclxcblxcdC5SZXZpZXdGb3JtX3JhaXRpbmdfX1E3LTNsIHtcXHJcXG5cXHRcXHRncmlkLWNvbHVtbjogc3RhcnQgLyBlbmQ7XFxyXFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXHJcXG5cXHR9XFxyXFxuXFx0LlJldmlld0Zvcm1fdGl0bGVfX1pBbXdIIHtcXHJcXG5cXHRcXHRqdXN0aWZ5LXNlbGY6IG5vcm1hbDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL1Jldmlld0Zvcm0vUmV2aWV3Rm9ybS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2Isa0RBQWtEO0NBQ2xELG1CQUFjO0NBQWQsY0FBYztDQUNkLHNCQUFtQjtNQUFuQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsZ0NBQWdDO0NBQ2hDLGNBQVM7Q0FBVCxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxvQ0FBb0M7Q0FDcEMsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsZUFBZTtBQUNoQjs7QUFFQTtDQUNDO0VBQ0MsNENBQTRDO0NBQzdDO0NBQ0E7RUFDQyx3QkFBd0I7RUFDeEIsK0JBQStCO0NBQ2hDO0NBQ0E7RUFDQyxvQkFBb0I7Q0FDckI7QUFDRDs7QUFFQTtDQUNDO0VBQ0Msd0NBQXdDO0NBQ3pDO0NBQ0E7RUFDQyx3QkFBd0I7RUFDeEIsK0JBQStCO0NBQ2hDO0NBQ0E7RUFDQyxvQkFBb0I7Q0FDckI7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucmV2aWV3Rm9ybSB7XFxyXFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBbc3RhcnRdIGF1dG8gMWZyIGF1dG8gW2VuZF07IFxcclxcblxcdGdhcDogMjBweCAzMHB4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuXFx0anVzdGlmeS1zZWxmOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24ge1xcclxcblxcdGdyaWQtY29sdW1uOiBzdGFydCAvIGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdCB7XFxyXFxuXFx0Z3JpZC1jb2x1bW46IHN0YXJ0IC8gZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mbyB7XFxyXFxuIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmFpdGluZyB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXHJcXG5cXHRnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdWNjZXNzIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1saWdodCk7XFxyXFxuXFx0cGFkZGluZzogMjBweDtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdWNjZXNzVGl0bGUge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2Uge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDIwcHg7XFxyXFxuXFx0cmlnaHQ6IDIwcHg7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XFxyXFxuXFx0LnJldmlld0Zvcm0ge1xcclxcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogW3N0YXJ0XSAxZnIgMWZyIFtlbmRdOyBcXHJcXG5cXHR9XFxyXFxuXFx0LnJhaXRpbmcge1xcclxcblxcdFxcdGdyaWQtY29sdW1uOiBzdGFydCAvIGVuZDtcXHJcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcclxcblxcdH1cXHJcXG5cXHQudGl0bGUge1xcclxcblxcdFxcdGp1c3RpZnktc2VsZjogbm9ybWFsO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XFxyXFxuXFx0LnJldmlld0Zvcm0ge1xcclxcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogW3N0YXJ0XSAxZnIgW2VuZF07IFxcclxcblxcdH1cXHJcXG5cXHQucmFpdGluZyB7XFxyXFxuXFx0XFx0Z3JpZC1jb2x1bW46IHN0YXJ0IC8gZW5kO1xcclxcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxyXFxuXFx0fVxcclxcblxcdC50aXRsZSB7XFxyXFxuXFx0XFx0anVzdGlmeS1zZWxmOiBub3JtYWw7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJyZXZpZXdGb3JtXCI6IFwiUmV2aWV3Rm9ybV9yZXZpZXdGb3JtX18yb0R2WFwiLFxuXHRcInRpdGxlXCI6IFwiUmV2aWV3Rm9ybV90aXRsZV9fWkFtd0hcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIlJldmlld0Zvcm1fZGVzY3JpcHRpb25fXzJQNm5FXCIsXG5cdFwic3VibWl0XCI6IFwiUmV2aWV3Rm9ybV9zdWJtaXRfXzZvMU5LXCIsXG5cdFwiaW5mb1wiOiBcIlJldmlld0Zvcm1faW5mb19fZ2syV3FcIixcblx0XCJyYWl0aW5nXCI6IFwiUmV2aWV3Rm9ybV9yYWl0aW5nX19RNy0zbFwiLFxuXHRcInN1Y2Nlc3NcIjogXCJSZXZpZXdGb3JtX3N1Y2Nlc3NfXzFQeGRRXCIsXG5cdFwic3VjY2Vzc1RpdGxlXCI6IFwiUmV2aWV3Rm9ybV9zdWNjZXNzVGl0bGVfXzJfYmUwXCIsXG5cdFwiY2xvc2VcIjogXCJSZXZpZXdGb3JtX2Nsb3NlX18zRzJVSFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudmFyIGlzQ2hlY2tCb3hJbnB1dCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCc7XG5cbnZhciBpc0RhdGVPYmplY3QgPSAoZGF0YSkgPT4gZGF0YSBpbnN0YW5jZW9mIERhdGU7XG5cbnZhciBpc051bGxPclVuZGVmaW5lZCA9ICh2YWx1ZSkgPT4gdmFsdWUgPT0gbnVsbDtcblxuY29uc3QgaXNPYmplY3RUeXBlID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xyXG52YXIgaXNPYmplY3QgPSAodmFsdWUpID0+ICFpc051bGxPclVuZGVmaW5lZCh2YWx1ZSkgJiZcclxuICAgICFBcnJheS5pc0FycmF5KHZhbHVlKSAmJlxyXG4gICAgaXNPYmplY3RUeXBlKHZhbHVlKSAmJlxyXG4gICAgIWlzRGF0ZU9iamVjdCh2YWx1ZSk7XG5cbnZhciBnZXRDb250cm9sbGVyVmFsdWUgPSAoZXZlbnQpID0+IGlzT2JqZWN0KGV2ZW50KSAmJiBldmVudC50YXJnZXRcclxuICAgID8gaXNDaGVja0JveElucHV0KGV2ZW50LnRhcmdldClcclxuICAgICAgICA/IGV2ZW50LnRhcmdldC5jaGVja2VkXHJcbiAgICAgICAgOiBldmVudC50YXJnZXQudmFsdWVcclxuICAgIDogZXZlbnQ7XG5cbnZhciBnZXROb2RlUGFyZW50TmFtZSA9IChuYW1lKSA9PiBuYW1lLnN1YnN0cmluZygwLCBuYW1lLnNlYXJjaCgvLlxcZC8pKSB8fCBuYW1lO1xuXG52YXIgaXNOYW1lSW5GaWVsZEFycmF5ID0gKG5hbWVzLCBuYW1lKSA9PiBbLi4ubmFtZXNdLnNvbWUoKGN1cnJlbnQpID0+IGdldE5vZGVQYXJlbnROYW1lKG5hbWUpID09PSBjdXJyZW50KTtcblxudmFyIGNvbXBhY3QgPSAodmFsdWUpID0+IHZhbHVlLmZpbHRlcihCb29sZWFuKTtcblxudmFyIGlzVW5kZWZpbmVkID0gKHZhbCkgPT4gdmFsID09PSB1bmRlZmluZWQ7XG5cbnZhciBnZXQgPSAob2JqLCBwYXRoLCBkZWZhdWx0VmFsdWUpID0+IHtcclxuICAgIGlmIChpc09iamVjdChvYmopICYmIHBhdGgpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBjb21wYWN0KHBhdGguc3BsaXQoL1ssW1xcXS5dKz8vKSkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4gKGlzTnVsbE9yVW5kZWZpbmVkKHJlc3VsdCkgPyByZXN1bHQgOiByZXN1bHRba2V5XSksIG9iaik7XHJcbiAgICAgICAgcmV0dXJuIGlzVW5kZWZpbmVkKHJlc3VsdCkgfHwgcmVzdWx0ID09PSBvYmpcclxuICAgICAgICAgICAgPyBpc1VuZGVmaW5lZChvYmpbcGF0aF0pXHJcbiAgICAgICAgICAgICAgICA/IGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgOiBvYmpbcGF0aF1cclxuICAgICAgICAgICAgOiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59O1xuXG5jb25zdCBFVkVOVFMgPSB7XHJcbiAgICBCTFVSOiAnYmx1cicsXHJcbiAgICBDSEFOR0U6ICdjaGFuZ2UnLFxyXG59O1xyXG5jb25zdCBWQUxJREFUSU9OX01PREUgPSB7XHJcbiAgICBvbkJsdXI6ICdvbkJsdXInLFxyXG4gICAgb25DaGFuZ2U6ICdvbkNoYW5nZScsXHJcbiAgICBvblN1Ym1pdDogJ29uU3VibWl0JyxcclxuICAgIG9uVG91Y2hlZDogJ29uVG91Y2hlZCcsXHJcbiAgICBhbGw6ICdhbGwnLFxyXG59O1xyXG5jb25zdCBJTlBVVF9WQUxJREFUSU9OX1JVTEVTID0ge1xyXG4gICAgbWF4OiAnbWF4JyxcclxuICAgIG1pbjogJ21pbicsXHJcbiAgICBtYXhMZW5ndGg6ICdtYXhMZW5ndGgnLFxyXG4gICAgbWluTGVuZ3RoOiAnbWluTGVuZ3RoJyxcclxuICAgIHBhdHRlcm46ICdwYXR0ZXJuJyxcclxuICAgIHJlcXVpcmVkOiAncmVxdWlyZWQnLFxyXG4gICAgdmFsaWRhdGU6ICd2YWxpZGF0ZScsXHJcbn07XG5cbnZhciBvbWl0ID0gKHNvdXJjZSwga2V5KSA9PiB7XHJcbiAgICBjb25zdCBjb3B5ID0gT2JqZWN0LmFzc2lnbih7fSwgc291cmNlKTtcclxuICAgIGRlbGV0ZSBjb3B5W2tleV07XHJcbiAgICByZXR1cm4gY29weTtcclxufTtcblxuY29uc3QgRm9ybUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xyXG5Gb3JtQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdSSEZDb250ZXh0JztcclxuY29uc3QgdXNlRm9ybUNvbnRleHQgPSAoKSA9PiBSZWFjdC51c2VDb250ZXh0KEZvcm1Db250ZXh0KTtcclxuY29uc3QgRm9ybVByb3ZpZGVyID0gKHByb3BzKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogb21pdChwcm9wcywgJ2NoaWxkcmVuJykgfSwgcHJvcHMuY2hpbGRyZW4pKTtcblxudmFyIGdldFByb3h5Rm9ybVN0YXRlID0gKGlzUHJveHlFbmFibGVkLCBmb3JtU3RhdGUsIHJlYWRGb3JtU3RhdGVSZWYsIGxvY2FsUmVhZEZvcm1TdGF0ZVJlZiwgaXNSb290ID0gdHJ1ZSkgPT4gaXNQcm94eUVuYWJsZWRcclxuICAgID8gbmV3IFByb3h5KGZvcm1TdGF0ZSwge1xyXG4gICAgICAgIGdldDogKG9iaiwgcHJvcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJvcCBpbiBvYmopIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnRbcHJvcF0gIT09IFZBTElEQVRJT05fTU9ERS5hbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnRbcHJvcF0gPSBpc1Jvb3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBWQUxJREFUSU9OX01PREUuYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxvY2FsUmVhZEZvcm1TdGF0ZVJlZiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChsb2NhbFJlYWRGb3JtU3RhdGVSZWYuY3VycmVudFtwcm9wXSA9IHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ialtwcm9wXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgOiBmb3JtU3RhdGU7XG5cbnZhciBpc0VtcHR5T2JqZWN0ID0gKHZhbHVlKSA9PiBpc09iamVjdCh2YWx1ZSkgJiYgIU9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGg7XG5cbnZhciBzaG91bGRSZW5kZXJGb3JtU3RhdGUgPSAoZm9ybVN0YXRlRGF0YSwgcmVhZEZvcm1TdGF0ZVJlZiwgaXNSb290KSA9PiB7XHJcbiAgICBjb25zdCBmb3JtU3RhdGUgPSBvbWl0KGZvcm1TdGF0ZURhdGEsICduYW1lJyk7XHJcbiAgICByZXR1cm4gKGlzRW1wdHlPYmplY3QoZm9ybVN0YXRlKSB8fFxyXG4gICAgICAgIE9iamVjdC5rZXlzKGZvcm1TdGF0ZSkubGVuZ3RoID49IE9iamVjdC5rZXlzKHJlYWRGb3JtU3RhdGVSZWYpLmxlbmd0aCB8fFxyXG4gICAgICAgIE9iamVjdC5rZXlzKGZvcm1TdGF0ZSkuZmluZCgoa2V5KSA9PiByZWFkRm9ybVN0YXRlUmVmW2tleV0gPT09XHJcbiAgICAgICAgICAgIChpc1Jvb3QgPyBWQUxJREFUSU9OX01PREUuYWxsIDogdHJ1ZSkpKTtcclxufTtcblxudmFyIGNvbnZlcnRUb0FycmF5UGF5bG9hZCA9ICh2YWx1ZSkgPT4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG5cbnZhciBpc1dlYiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICB0eXBlb2Ygd2luZG93LkhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcblxuY29uc3QgaXNQcm94eUVuYWJsZWQgPSBpc1dlYiA/ICdQcm94eScgaW4gd2luZG93IDogdHlwZW9mIFByb3h5ICE9PSAndW5kZWZpbmVkJztcblxuZnVuY3Rpb24gdXNlRm9ybVN0YXRlKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IGNvbnRyb2wsIG5hbWUgfSA9IHByb3BzIHx8IHt9O1xyXG4gICAgY29uc3QgbWV0aG9kcyA9IHVzZUZvcm1Db250ZXh0KCk7XHJcbiAgICBjb25zdCB7IGZvcm1TdGF0ZVJlZiwgc3ViamVjdHNSZWYsIHJlYWRGb3JtU3RhdGVSZWYgfSA9IGNvbnRyb2wgfHwgbWV0aG9kcy5jb250cm9sO1xyXG4gICAgY29uc3QgbmFtZVJlZiA9IFJlYWN0LnVzZVJlZihuYW1lKTtcclxuICAgIG5hbWVSZWYuY3VycmVudCA9IG5hbWU7XHJcbiAgICBjb25zdCBbZm9ybVN0YXRlLCB1cGRhdGVGb3JtU3RhdGVdID0gUmVhY3QudXNlU3RhdGUoZm9ybVN0YXRlUmVmLmN1cnJlbnQpO1xyXG4gICAgY29uc3QgcmVhZEZvcm1TdGF0ZSA9IFJlYWN0LnVzZVJlZih7XHJcbiAgICAgICAgaXNEaXJ0eTogZmFsc2UsXHJcbiAgICAgICAgZGlydHlGaWVsZHM6IGZhbHNlLFxyXG4gICAgICAgIHRvdWNoZWRGaWVsZHM6IGZhbHNlLFxyXG4gICAgICAgIGlzVmFsaWRhdGluZzogZmFsc2UsXHJcbiAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgZXJyb3JzOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmb3JtU3RhdGVTdWJzY3JpcHRpb24gPSBzdWJqZWN0c1JlZi5jdXJyZW50LnN0YXRlLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgIG5leHQ6IChmb3JtU3RhdGUpID0+ICghbmFtZVJlZi5jdXJyZW50IHx8XHJcbiAgICAgICAgICAgICAgICAhZm9ybVN0YXRlLm5hbWUgfHxcclxuICAgICAgICAgICAgICAgIGNvbnZlcnRUb0FycmF5UGF5bG9hZChuYW1lUmVmLmN1cnJlbnQpLmluY2x1ZGVzKGZvcm1TdGF0ZS5uYW1lKSkgJiZcclxuICAgICAgICAgICAgICAgIHNob3VsZFJlbmRlckZvcm1TdGF0ZShmb3JtU3RhdGUsIHJlYWRGb3JtU3RhdGUuY3VycmVudCkgJiZcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZvcm1TdGF0ZVJlZi5jdXJyZW50KSwgZm9ybVN0YXRlKSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGZvcm1TdGF0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIGdldFByb3h5Rm9ybVN0YXRlKGlzUHJveHlFbmFibGVkLCBmb3JtU3RhdGUsIHJlYWRGb3JtU3RhdGVSZWYsIHJlYWRGb3JtU3RhdGUsIGZhbHNlKTtcclxufVxuXG5mdW5jdGlvbiB1c2VDb250cm9sbGVyKHsgbmFtZSwgcnVsZXMsIGRlZmF1bHRWYWx1ZSwgY29udHJvbCwgc2hvdWxkVW5yZWdpc3RlciwgfSkge1xyXG4gICAgY29uc3QgbWV0aG9kcyA9IHVzZUZvcm1Db250ZXh0KCk7XHJcbiAgICBjb25zdCB7IGRlZmF1bHRWYWx1ZXNSZWYsIHJlZ2lzdGVyLCBmaWVsZHNSZWYsIHVucmVnaXN0ZXIsIG5hbWVzUmVmLCBzdWJqZWN0c1JlZiwgc2hvdWxkVW5tb3VudCwgaW5GaWVsZEFycmF5QWN0aW9uUmVmLCB9ID0gY29udHJvbCB8fCBtZXRob2RzLmNvbnRyb2w7XHJcbiAgICBjb25zdCBmaWVsZCA9IGdldChmaWVsZHNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldElucHV0U3RhdGVWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShmaWVsZCAmJiBmaWVsZC5fZiAmJiAhaXNVbmRlZmluZWQoZmllbGQuX2YudmFsdWUpXHJcbiAgICAgICAgPyBmaWVsZC5fZi52YWx1ZVxyXG4gICAgICAgIDogaXNVbmRlZmluZWQoZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSkpXHJcbiAgICAgICAgICAgID8gZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgICAgIDogZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSkpO1xyXG4gICAgY29uc3QgeyBvbkNoYW5nZSwgb25CbHVyLCByZWYgfSA9IHJlZ2lzdGVyKG5hbWUsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcnVsZXMpLCB7IHZhbHVlIH0pKTtcclxuICAgIGNvbnN0IGZvcm1TdGF0ZSA9IHVzZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgY29udHJvbDogY29udHJvbCB8fCBtZXRob2RzLmNvbnRyb2wsXHJcbiAgICAgICAgbmFtZSxcclxuICAgIH0pO1xyXG4gICAgZnVuY3Rpb24gdXBkYXRlSXNNb3VudGVkKG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoZmllbGRzUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgICAgIGlmIChmaWVsZCAmJiBmaWVsZC5fZikge1xyXG4gICAgICAgICAgICBmaWVsZC5fZi5tb3VudCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29udHJvbGxlclN1YnNjcmlwdGlvbiA9IHN1YmplY3RzUmVmLmN1cnJlbnQuY29udHJvbC5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgICBuZXh0OiAoZGF0YSkgPT4gKCFkYXRhLm5hbWUgfHwgbmFtZSA9PT0gZGF0YS5uYW1lKSAmJlxyXG4gICAgICAgICAgICAgICAgc2V0SW5wdXRTdGF0ZVZhbHVlKGdldChkYXRhLnZhbHVlcywgbmFtZSkpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHVwZGF0ZUlzTW91bnRlZChuYW1lLCB0cnVlKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb250cm9sbGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFVubW91bnRGaWVsZCA9IHNob3VsZFVubW91bnQgfHwgc2hvdWxkVW5yZWdpc3RlcjtcclxuICAgICAgICAgICAgaWYgKGlzTmFtZUluRmllbGRBcnJheShuYW1lc1JlZi5jdXJyZW50LmFycmF5LCBuYW1lKVxyXG4gICAgICAgICAgICAgICAgPyBzaG91bGRVbm1vdW50RmllbGQgJiYgIWluRmllbGRBcnJheUFjdGlvblJlZi5jdXJyZW50XHJcbiAgICAgICAgICAgICAgICA6IHNob3VsZFVubW91bnRGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgdW5yZWdpc3RlcihuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUlzTW91bnRlZChuYW1lLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSwgW25hbWVdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmllbGQ6IHtcclxuICAgICAgICAgICAgb25DaGFuZ2U6IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBnZXRDb250cm9sbGVyVmFsdWUoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgc2V0SW5wdXRTdGF0ZVZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBFVkVOVFMuQ0hBTkdFLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQmx1cjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25CbHVyKHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEVWRU5UUy5CTFVSLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICByZWY6IChlbG0pID0+IGVsbSAmJlxyXG4gICAgICAgICAgICAgICAgcmVmKHtcclxuICAgICAgICAgICAgICAgICAgICBmb2N1czogKCkgPT4gZWxtLmZvY3VzICYmIGVsbS5mb2N1cygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1c3RvbVZhbGlkaXR5OiAobWVzc2FnZSkgPT4gZWxtLnNldEN1c3RvbVZhbGlkaXR5KG1lc3NhZ2UpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydFZhbGlkaXR5OiAoKSA9PiBlbG0ucmVwb3J0VmFsaWRpdHkoKSxcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9ybVN0YXRlLFxyXG4gICAgICAgIGZpZWxkU3RhdGU6IHtcclxuICAgICAgICAgICAgaW52YWxpZDogISFnZXQoZm9ybVN0YXRlLmVycm9ycywgbmFtZSksXHJcbiAgICAgICAgICAgIGlzRGlydHk6ICEhZ2V0KGZvcm1TdGF0ZS5kaXJ0eUZpZWxkcywgbmFtZSksXHJcbiAgICAgICAgICAgIGlzVG91Y2hlZDogISFnZXQoZm9ybVN0YXRlLnRvdWNoZWRGaWVsZHMsIG5hbWUpLFxyXG4gICAgICAgICAgICBlcnJvcjogZ2V0KGZvcm1TdGF0ZS5lcnJvcnMsIG5hbWUpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XG5cbmNvbnN0IENvbnRyb2xsZXIgPSAocHJvcHMpID0+IHByb3BzLnJlbmRlcih1c2VDb250cm9sbGVyKHByb3BzKSk7XG5cbnZhciBhcHBlbmRFcnJvcnMgPSAobmFtZSwgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBlcnJvcnMsIHR5cGUsIG1lc3NhZ2UpID0+IHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYVxyXG4gICAgPyBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGVycm9yc1tuYW1lXSksIHsgdHlwZXM6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgKGVycm9yc1tuYW1lXSAmJiBlcnJvcnNbbmFtZV0udHlwZXMgPyBlcnJvcnNbbmFtZV0udHlwZXMgOiB7fSkpLCB7IFt0eXBlXTogbWVzc2FnZSB8fCB0cnVlIH0pIH0pIDoge307XG5cbnZhciBpc0tleSA9ICh2YWx1ZSkgPT4gL15cXHcqJC8udGVzdCh2YWx1ZSk7XG5cbnZhciBzdHJpbmdUb1BhdGggPSAoaW5wdXQpID0+IGNvbXBhY3QoaW5wdXQucmVwbGFjZSgvW1wifCddfFxcXS9nLCAnJykuc3BsaXQoL1xcLnxcXFsvKSk7XG5cbmZ1bmN0aW9uIHNldChvYmplY3QsIHBhdGgsIHZhbHVlKSB7XHJcbiAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgIGNvbnN0IHRlbXBQYXRoID0gaXNLZXkocGF0aCkgPyBbcGF0aF0gOiBzdHJpbmdUb1BhdGgocGF0aCk7XHJcbiAgICBjb25zdCBsZW5ndGggPSB0ZW1wUGF0aC5sZW5ndGg7XHJcbiAgICBjb25zdCBsYXN0SW5kZXggPSBsZW5ndGggLSAxO1xyXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSB0ZW1wUGF0aFtpbmRleF07XHJcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSBsYXN0SW5kZXgpIHtcclxuICAgICAgICAgICAgY29uc3Qgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcclxuICAgICAgICAgICAgbmV3VmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgaXNPYmplY3Qob2JqVmFsdWUpIHx8IEFycmF5LmlzQXJyYXkob2JqVmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBvYmpWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogIWlzTmFOKCt0ZW1wUGF0aFtpbmRleCArIDFdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDoge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iamVjdFtrZXldID0gbmV3VmFsdWU7XHJcbiAgICAgICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqZWN0O1xyXG59XG5cbmNvbnN0IGZvY3VzRmllbGRCeSA9IChmaWVsZHMsIGNhbGxiYWNrLCBmaWVsZHNOYW1lcykgPT4ge1xyXG4gICAgZm9yIChjb25zdCBrZXkgb2YgZmllbGRzTmFtZXMgfHwgT2JqZWN0LmtleXMoZmllbGRzKSkge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KGZpZWxkcywga2V5KTtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgY29uc3QgX2YgPSBmaWVsZC5fZjtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IG9taXQoZmllbGQsICdfZicpO1xyXG4gICAgICAgICAgICBpZiAoX2YgJiYgY2FsbGJhY2soX2YubmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfZi5yZWYuZm9jdXMgJiYgaXNVbmRlZmluZWQoX2YucmVmLmZvY3VzKCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChfZi5yZWZzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2YucmVmc1swXS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KGN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBmb2N1c0ZpZWxkQnkoY3VycmVudCwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xuXG5jb25zdCBnZXRGaWVsZHNWYWx1ZXMgPSAoZmllbGRzUmVmLCBvdXRwdXQgPSB7fSkgPT4ge1xyXG4gICAgZm9yIChjb25zdCBuYW1lIGluIGZpZWxkc1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNSZWYuY3VycmVudFtuYW1lXTtcclxuICAgICAgICBpZiAoZmllbGQgJiYgIWlzTnVsbE9yVW5kZWZpbmVkKG91dHB1dCkpIHtcclxuICAgICAgICAgICAgY29uc3QgX2YgPSBmaWVsZC5fZjtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IG9taXQoZmllbGQsICdfZicpO1xyXG4gICAgICAgICAgICBzZXQob3V0cHV0LCBuYW1lLCBfZiAmJiBfZi5yZWZcclxuICAgICAgICAgICAgICAgID8gX2YucmVmLmRpc2FibGVkIHx8IChfZi5yZWZzICYmIF9mLnJlZnMuZXZlcnkoKHJlZikgPT4gcmVmLmRpc2FibGVkKSlcclxuICAgICAgICAgICAgICAgICAgICA/IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgIDogX2YudmFsdWVcclxuICAgICAgICAgICAgICAgIDogQXJyYXkuaXNBcnJheShmaWVsZClcclxuICAgICAgICAgICAgICAgICAgICA/IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgOiB7fSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnQgJiZcclxuICAgICAgICAgICAgICAgIGdldEZpZWxkc1ZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCxcclxuICAgICAgICAgICAgICAgIH0sIG91dHB1dFtuYW1lXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxufTtcblxudmFyIGdlbmVyYXRlSWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkID0gdHlwZW9mIHBlcmZvcm1hbmNlID09PSAndW5kZWZpbmVkJyA/IERhdGUubm93KCkgOiBwZXJmb3JtYW5jZS5ub3coKSAqIDEwMDA7XHJcbiAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCAoYykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2ICsgZCkgJSAxNiB8IDA7XHJcbiAgICAgICAgcmV0dXJuIChjID09ICd4JyA/IHIgOiAociAmIDB4MykgfCAweDgpLnRvU3RyaW5nKDE2KTtcclxuICAgIH0pO1xyXG59O1xuXG52YXIgbWFwSWRzID0gKHZhbHVlcyA9IFtdLCBrZXlOYW1lKSA9PiB2YWx1ZXMubWFwKCh2YWx1ZSkgPT4gKE9iamVjdC5hc3NpZ24oeyBba2V5TmFtZV06ICh2YWx1ZSAmJiB2YWx1ZVtrZXlOYW1lXSkgfHwgZ2VuZXJhdGVJZCgpIH0sIHZhbHVlKSkpO1xuXG52YXIgaXNQcmltaXRpdmUgPSAodmFsdWUpID0+IGlzTnVsbE9yVW5kZWZpbmVkKHZhbHVlKSB8fCAhaXNPYmplY3RUeXBlKHZhbHVlKTtcblxuZnVuY3Rpb24gZGVlcEVxdWFsKG9iamVjdDEsIG9iamVjdDIpIHtcclxuICAgIGlmIChpc1ByaW1pdGl2ZShvYmplY3QxKSB8fFxyXG4gICAgICAgIGlzUHJpbWl0aXZlKG9iamVjdDIpIHx8XHJcbiAgICAgICAgaXNEYXRlT2JqZWN0KG9iamVjdDEpIHx8XHJcbiAgICAgICAgaXNEYXRlT2JqZWN0KG9iamVjdDIpKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iamVjdDEgPT09IG9iamVjdDI7XHJcbiAgICB9XHJcbiAgICBjb25zdCBrZXlzMSA9IE9iamVjdC5rZXlzKG9iamVjdDEpO1xyXG4gICAgY29uc3Qga2V5czIgPSBPYmplY3Qua2V5cyhvYmplY3QyKTtcclxuICAgIGlmIChrZXlzMS5sZW5ndGggIT09IGtleXMyLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMxKSB7XHJcbiAgICAgICAgY29uc3QgdmFsMSA9IG9iamVjdDFba2V5XTtcclxuICAgICAgICBpZiAoIWtleXMyLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5ICE9PSAncmVmJykge1xyXG4gICAgICAgICAgICBjb25zdCB2YWwyID0gb2JqZWN0MltrZXldO1xyXG4gICAgICAgICAgICBpZiAoKGlzT2JqZWN0KHZhbDEpIHx8IEFycmF5LmlzQXJyYXkodmFsMSkpICYmXHJcbiAgICAgICAgICAgICAgICAoaXNPYmplY3QodmFsMikgfHwgQXJyYXkuaXNBcnJheSh2YWwyKSlcclxuICAgICAgICAgICAgICAgID8gIWRlZXBFcXVhbCh2YWwxLCB2YWwyKVxyXG4gICAgICAgICAgICAgICAgOiB2YWwxICE9PSB2YWwyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxuXG5mdW5jdGlvbiBkZWVwTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcclxuICAgIGlmIChpc1ByaW1pdGl2ZSh0YXJnZXQpIHx8IGlzUHJpbWl0aXZlKHNvdXJjZSkpIHtcclxuICAgICAgICByZXR1cm4gc291cmNlO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0VmFsdWUgPSB0YXJnZXRba2V5XTtcclxuICAgICAgICBjb25zdCBzb3VyY2VWYWx1ZSA9IHNvdXJjZVtrZXldO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtrZXldID1cclxuICAgICAgICAgICAgICAgIChpc09iamVjdCh0YXJnZXRWYWx1ZSkgJiYgaXNPYmplY3Qoc291cmNlVmFsdWUpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChBcnJheS5pc0FycmF5KHRhcmdldFZhbHVlKSAmJiBBcnJheS5pc0FycmF5KHNvdXJjZVZhbHVlKSlcclxuICAgICAgICAgICAgICAgICAgICA/IGRlZXBNZXJnZSh0YXJnZXRWYWx1ZSwgc291cmNlVmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzb3VyY2VWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKF9hKSB7IH1cclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cblxuZnVuY3Rpb24gc2V0RGlydHlGaWVsZHModmFsdWVzLCBkZWZhdWx0VmFsdWVzLCBkaXJ0eUZpZWxkcywgcGFyZW50Tm9kZSwgcGFyZW50TmFtZSkge1xyXG4gICAgbGV0IGluZGV4ID0gLTE7XHJcbiAgICB3aGlsZSAoKytpbmRleCA8IHZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZXNbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlc1tpbmRleF1ba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgICFkaXJ0eUZpZWxkc1tpbmRleF0gJiYgKGRpcnR5RmllbGRzW2luZGV4XSA9IHt9KTtcclxuICAgICAgICAgICAgICAgIGRpcnR5RmllbGRzW2luZGV4XVtrZXldID0gW107XHJcbiAgICAgICAgICAgICAgICBzZXREaXJ0eUZpZWxkcyh2YWx1ZXNbaW5kZXhdW2tleV0sIGdldChkZWZhdWx0VmFsdWVzW2luZGV4XSB8fCB7fSwga2V5LCBbXSksIGRpcnR5RmllbGRzW2luZGV4XVtrZXldLCBkaXJ0eUZpZWxkc1tpbmRleF0sIGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAhaXNOdWxsT3JVbmRlZmluZWQoZGVmYXVsdFZhbHVlcykgJiZcclxuICAgICAgICAgICAgICAgICAgICBkZWVwRXF1YWwoZ2V0KGRlZmF1bHRWYWx1ZXNbaW5kZXhdIHx8IHt9LCBrZXkpLCB2YWx1ZXNbaW5kZXhdW2tleV0pXHJcbiAgICAgICAgICAgICAgICAgICAgPyBzZXQoZGlydHlGaWVsZHNbaW5kZXhdIHx8IHt9LCBrZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAoZGlydHlGaWVsZHNbaW5kZXhdID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkaXJ0eUZpZWxkc1tpbmRleF0pLCB7IFtrZXldOiB0cnVlIH0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJlbnROb2RlICYmXHJcbiAgICAgICAgICAgICFkaXJ0eUZpZWxkcy5sZW5ndGggJiZcclxuICAgICAgICAgICAgZGVsZXRlIHBhcmVudE5vZGVbcGFyZW50TmFtZV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlydHlGaWVsZHM7XHJcbn1cclxudmFyIHNldEZpZWxkQXJyYXlEaXJ0eUZpZWxkcyA9ICh2YWx1ZXMsIGRlZmF1bHRWYWx1ZXMsIGRpcnR5RmllbGRzKSA9PiBkZWVwTWVyZ2Uoc2V0RGlydHlGaWVsZHModmFsdWVzLCBkZWZhdWx0VmFsdWVzLCBkaXJ0eUZpZWxkcy5zbGljZSgwLCB2YWx1ZXMubGVuZ3RoKSksIHNldERpcnR5RmllbGRzKGRlZmF1bHRWYWx1ZXMsIHZhbHVlcywgZGlydHlGaWVsZHMuc2xpY2UoMCwgdmFsdWVzLmxlbmd0aCkpKTtcblxuZnVuY3Rpb24gYXBwZW5kKGRhdGEsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gWy4uLmNvbnZlcnRUb0FycmF5UGF5bG9hZChkYXRhKSwgLi4uY29udmVydFRvQXJyYXlQYXlsb2FkKHZhbHVlKV07XHJcbn1cblxudmFyIGZpbGxFbXB0eUFycmF5ID0gKHZhbHVlKSA9PiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IEFycmF5KHZhbHVlLmxlbmd0aCkuZmlsbCh1bmRlZmluZWQpIDogdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpbnNlcnQoZGF0YSwgaW5kZXgsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIC4uLmRhdGEuc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgICAgIC4uLmNvbnZlcnRUb0FycmF5UGF5bG9hZCh2YWx1ZSksXHJcbiAgICAgICAgLi4uZGF0YS5zbGljZShpbmRleCksXHJcbiAgICBdO1xyXG59XG5cbnZhciBtb3ZlQXJyYXlBdCA9IChkYXRhLCBmcm9tLCB0bykgPT4ge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuICAgICAgICBpZiAoaXNVbmRlZmluZWQoZGF0YVt0b10pKSB7XHJcbiAgICAgICAgICAgIGRhdGFbdG9dID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhLnNwbGljZSh0bywgMCwgZGF0YS5zcGxpY2UoZnJvbSwgMSlbMF0pO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xuXG5mdW5jdGlvbiBwcmVwZW5kKGRhdGEsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gWy4uLmNvbnZlcnRUb0FycmF5UGF5bG9hZCh2YWx1ZSksIC4uLmNvbnZlcnRUb0FycmF5UGF5bG9hZChkYXRhKV07XHJcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXRJbmRleGVzKGRhdGEsIGluZGV4ZXMpIHtcclxuICAgIGxldCBpID0gMDtcclxuICAgIGNvbnN0IHRlbXAgPSBbLi4uZGF0YV07XHJcbiAgICBmb3IgKGNvbnN0IGluZGV4IG9mIGluZGV4ZXMpIHtcclxuICAgICAgICB0ZW1wLnNwbGljZShpbmRleCAtIGksIDEpO1xyXG4gICAgICAgIGkrKztcclxuICAgIH1cclxuICAgIHJldHVybiBjb21wYWN0KHRlbXApLmxlbmd0aCA/IHRlbXAgOiBbXTtcclxufVxyXG52YXIgcmVtb3ZlQXJyYXlBdCA9IChkYXRhLCBpbmRleCkgPT4gaXNVbmRlZmluZWQoaW5kZXgpXHJcbiAgICA/IFtdXHJcbiAgICA6IHJlbW92ZUF0SW5kZXhlcyhkYXRhLCBjb252ZXJ0VG9BcnJheVBheWxvYWQoaW5kZXgpLnNvcnQoKGEsIGIpID0+IGEgLSBiKSk7XG5cbnZhciBzd2FwQXJyYXlBdCA9IChkYXRhLCBpbmRleEEsIGluZGV4QikgPT4ge1xyXG4gICAgZGF0YVtpbmRleEFdID0gW2RhdGFbaW5kZXhCXSwgKGRhdGFbaW5kZXhCXSA9IGRhdGFbaW5kZXhBXSldWzBdO1xyXG59O1xuXG52YXIgaXNCb29sZWFuID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcblxuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHVwZGF0ZVBhdGgpIHtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHVwZGF0ZVBhdGguc2xpY2UoMCwgLTEpLmxlbmd0aDtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgICBvYmplY3QgPSBpc1VuZGVmaW5lZChvYmplY3QpID8gaW5kZXgrKyA6IG9iamVjdFt1cGRhdGVQYXRoW2luZGV4KytdXTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3Q7XHJcbn1cclxuZnVuY3Rpb24gdW5zZXQob2JqZWN0LCBwYXRoKSB7XHJcbiAgICBjb25zdCB1cGRhdGVQYXRoID0gaXNLZXkocGF0aCkgPyBbcGF0aF0gOiBzdHJpbmdUb1BhdGgocGF0aCk7XHJcbiAgICBjb25zdCBjaGlsZE9iamVjdCA9IHVwZGF0ZVBhdGgubGVuZ3RoID09IDEgPyBvYmplY3QgOiBiYXNlR2V0KG9iamVjdCwgdXBkYXRlUGF0aCk7XHJcbiAgICBjb25zdCBrZXkgPSB1cGRhdGVQYXRoW3VwZGF0ZVBhdGgubGVuZ3RoIC0gMV07XHJcbiAgICBsZXQgcHJldmlvdXNPYmpSZWY7XHJcbiAgICBpZiAoY2hpbGRPYmplY3QpIHtcclxuICAgICAgICBkZWxldGUgY2hpbGRPYmplY3Rba2V5XTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdXBkYXRlUGF0aC5zbGljZSgwLCAtMSkubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgICAgICBsZXQgb2JqZWN0UmVmO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXRocyA9IHVwZGF0ZVBhdGguc2xpY2UoMCwgLShrICsgMSkpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXRoc0xlbmd0aCA9IGN1cnJlbnRQYXRocy5sZW5ndGggLSAxO1xyXG4gICAgICAgIGlmIChrID4gMCkge1xyXG4gICAgICAgICAgICBwcmV2aW91c09ialJlZiA9IG9iamVjdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKCsraW5kZXggPCBjdXJyZW50UGF0aHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjdXJyZW50UGF0aHNbaW5kZXhdO1xyXG4gICAgICAgICAgICBvYmplY3RSZWYgPSBvYmplY3RSZWYgPyBvYmplY3RSZWZbaXRlbV0gOiBvYmplY3RbaXRlbV07XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50UGF0aHNMZW5ndGggPT09IGluZGV4ICYmXHJcbiAgICAgICAgICAgICAgICAoKGlzT2JqZWN0KG9iamVjdFJlZikgJiYgaXNFbXB0eU9iamVjdChvYmplY3RSZWYpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChBcnJheS5pc0FycmF5KG9iamVjdFJlZikgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIW9iamVjdFJlZi5maWx0ZXIoKGRhdGEpID0+IChpc09iamVjdChkYXRhKSAmJiAhaXNFbXB0eU9iamVjdChkYXRhKSkgfHwgaXNCb29sZWFuKGRhdGEpKS5sZW5ndGgpKSkge1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNPYmpSZWYgPyBkZWxldGUgcHJldmlvdXNPYmpSZWZbaXRlbV0gOiBkZWxldGUgb2JqZWN0W2l0ZW1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByZXZpb3VzT2JqUmVmID0gb2JqZWN0UmVmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3Q7XHJcbn1cblxuY29uc3QgdXNlRmllbGRBcnJheSA9ICh7IGNvbnRyb2wsIG5hbWUsIGtleU5hbWUgPSAnaWQnLCBzaG91bGRVbnJlZ2lzdGVyLCB9KSA9PiB7XHJcbiAgICBjb25zdCBtZXRob2RzID0gdXNlRm9ybUNvbnRleHQoKTtcclxuICAgIGNvbnN0IGZvY3VzTmFtZVJlZiA9IFJlYWN0LnVzZVJlZignJyk7XHJcbiAgICBjb25zdCBpc01vdW50ZWRSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xyXG4gICAgY29uc3QgeyBnZXRJc0RpcnR5LCBuYW1lc1JlZiwgZmllbGRzUmVmLCBkZWZhdWx0VmFsdWVzUmVmLCBmb3JtU3RhdGVSZWYsIHN1YmplY3RzUmVmLCByZWFkRm9ybVN0YXRlUmVmLCB1cGRhdGVJc1ZhbGlkLCBmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZiwgdW5yZWdpc3Rlciwgc2hvdWxkVW5tb3VudCwgaW5GaWVsZEFycmF5QWN0aW9uUmVmLCBzZXRWYWx1ZXMsIHJlZ2lzdGVyLCB9ID0gY29udHJvbCB8fCBtZXRob2RzLmNvbnRyb2w7XHJcbiAgICBjb25zdCBbZmllbGRzLCBzZXRGaWVsZHNdID0gUmVhY3QudXNlU3RhdGUobWFwSWRzKChnZXQoZmllbGRzUmVmLmN1cnJlbnQsIG5hbWUpICYmIGlzTW91bnRlZFJlZi5jdXJyZW50XHJcbiAgICAgICAgPyBnZXQoZ2V0RmllbGRzVmFsdWVzKGZpZWxkc1JlZiksIG5hbWUpXHJcbiAgICAgICAgOiBnZXQoZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgZ2V0Tm9kZVBhcmVudE5hbWUobmFtZSkpXHJcbiAgICAgICAgICAgID8gZ2V0KGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUpXHJcbiAgICAgICAgICAgIDogZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSkpIHx8IFtdLCBrZXlOYW1lKSk7XHJcbiAgICBzZXQoZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSwgWy4uLmZpZWxkc10pO1xyXG4gICAgbmFtZXNSZWYuY3VycmVudC5hcnJheS5hZGQobmFtZSk7XHJcbiAgICBjb25zdCBvbWl0S2V5ID0gKGZpZWxkcykgPT4gZmllbGRzLm1hcCgoZmllbGQgPSB7fSkgPT4gb21pdChmaWVsZCwga2V5TmFtZSkpO1xyXG4gICAgY29uc3QgZ2V0Q3VycmVudEZpZWxkc1ZhbHVlcyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBnZXQoZ2V0RmllbGRzVmFsdWVzKGZpZWxkc1JlZiksIG5hbWUsIFtdKTtcclxuICAgICAgICByZXR1cm4gbWFwSWRzKGdldChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lLCBbXSkubWFwKChpdGVtLCBpbmRleCkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgaXRlbSksIHZhbHVlc1tpbmRleF0pKSksIGtleU5hbWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldEZvY3VzRmllbGROYW1lID0gKGluZGV4LCBvcHRpb25zKSA9PiBvcHRpb25zICYmICFvcHRpb25zLnNob3VsZEZvY3VzXHJcbiAgICAgICAgPyBvcHRpb25zLmZvY3VzTmFtZSB8fCBgJHtuYW1lfS4ke29wdGlvbnMuZm9jdXNJbmRleH0uYFxyXG4gICAgICAgIDogYCR7bmFtZX0uJHtpbmRleH0uYDtcclxuICAgIGNvbnN0IHNldEZpZWxkc0FuZE5vdGlmeSA9IChmaWVsZHNWYWx1ZXMgPSBbXSkgPT4gc2V0RmllbGRzKG1hcElkcyhmaWVsZHNWYWx1ZXMsIGtleU5hbWUpKTtcclxuICAgIGNvbnN0IGNsZWFudXAgPSAocmVmKSA9PiAhY29tcGFjdChnZXQocmVmLCBuYW1lLCBbXSkpLmxlbmd0aCAmJiB1bnNldChyZWYsIG5hbWUpO1xyXG4gICAgY29uc3QgYmF0Y2hTdGF0ZVVwZGF0ZSA9IChtZXRob2QsIGFyZ3MsIHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzID0gW10sIHNob3VsZFNldCA9IHRydWUpID0+IHtcclxuICAgICAgICBpbkZpZWxkQXJyYXlBY3Rpb25SZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgaWYgKGdldChmaWVsZHNSZWYuY3VycmVudCwgbmFtZSkpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gbWV0aG9kKGdldChmaWVsZHNSZWYuY3VycmVudCwgbmFtZSksIGFyZ3MuYXJnQSwgYXJncy5hcmdCKTtcclxuICAgICAgICAgICAgc2hvdWxkU2V0ICYmIHNldChmaWVsZHNSZWYuY3VycmVudCwgbmFtZSwgb3V0cHV0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgbmFtZSkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dCA9IG1ldGhvZChnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lKSwgYXJncy5hcmdBLCBhcmdzLmFyZ0IpO1xyXG4gICAgICAgICAgICBzaG91bGRTZXQgJiYgc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgbmFtZSwgb3V0cHV0KTtcclxuICAgICAgICAgICAgY2xlYW51cChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWRGaWVsZHMgJiZcclxuICAgICAgICAgICAgZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWRGaWVsZHMsIG5hbWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dCA9IG1ldGhvZChnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZEZpZWxkcywgbmFtZSksIGFyZ3MuYXJnQSwgYXJncy5hcmdCKTtcclxuICAgICAgICAgICAgc2hvdWxkU2V0ICYmIHNldChmb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkRmllbGRzLCBuYW1lLCBvdXRwdXQpO1xyXG4gICAgICAgICAgICBjbGVhbnVwKGZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWRGaWVsZHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzIHx8XHJcbiAgICAgICAgICAgIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc0RpcnR5KSB7XHJcbiAgICAgICAgICAgIHNldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSwgc2V0RmllbGRBcnJheURpcnR5RmllbGRzKG9taXRLZXkodXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpLCBnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lLCBbXSksIGdldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSwgW10pKSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzICYmXHJcbiAgICAgICAgICAgICAgICBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsIG5hbWUsIHNldEZpZWxkQXJyYXlEaXJ0eUZpZWxkcyhvbWl0S2V5KHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKSwgZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSwgW10pLCBnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsIG5hbWUsIFtdKSkpO1xyXG4gICAgICAgICAgICBjbGVhbnVwKGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3ViamVjdHNSZWYuY3VycmVudC5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgZGlydHlGaWVsZHM6IGZvcm1TdGF0ZVJlZi5jdXJyZW50XHJcbiAgICAgICAgICAgICAgICAuZGlydHlGaWVsZHMsXHJcbiAgICAgICAgICAgIGlzRGlydHk6IGdldElzRGlydHkobmFtZSwgb21pdEtleSh1cGRhdGVkRmllbGRBcnJheVZhbHVlcykpLFxyXG4gICAgICAgICAgICBlcnJvcnM6IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycyxcclxuICAgICAgICAgICAgaXNWYWxpZDogZm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCByZWdpc3RlckZpZWxkQXJyYXkgPSAodmFsdWVzLCBpbmRleCA9IDAsIHBhcmVudE5hbWUgPSAnJykgPT4gdmFsdWVzLmZvckVhY2goKGFwcGVuZFZhbHVlSXRlbSwgdmFsdWVJbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvb3ROYW1lID0gYCR7cGFyZW50TmFtZSB8fCBuYW1lfS4ke3BhcmVudE5hbWUgPyB2YWx1ZUluZGV4IDogaW5kZXggKyB2YWx1ZUluZGV4fWA7XHJcbiAgICAgICAgaXNQcmltaXRpdmUoYXBwZW5kVmFsdWVJdGVtKVxyXG4gICAgICAgICAgICA/IHJlZ2lzdGVyKHJvb3ROYW1lLCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogYXBwZW5kVmFsdWVJdGVtLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICA6IE9iamVjdC5lbnRyaWVzKGFwcGVuZFZhbHVlSXRlbSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSByb290TmFtZSArICcuJyArIGtleTtcclxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkodmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgPyByZWdpc3RlckZpZWxkQXJyYXkodmFsdWUsIHZhbHVlSW5kZXgsIGlucHV0TmFtZSlcclxuICAgICAgICAgICAgICAgICAgICA6IHJlZ2lzdGVyKGlucHV0TmFtZSwgeyB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGFwcGVuZCQxID0gKHZhbHVlLCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXBwZW5kVmFsdWUgPSBjb252ZXJ0VG9BcnJheVBheWxvYWQodmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzID0gYXBwZW5kKGdldEN1cnJlbnRGaWVsZHNWYWx1ZXMoKSwgYXBwZW5kVmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzLmxlbmd0aCAtIGFwcGVuZFZhbHVlLmxlbmd0aDtcclxuICAgICAgICBzZXRGaWVsZHNBbmROb3RpZnkodXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIGJhdGNoU3RhdGVVcGRhdGUoYXBwZW5kLCB7XHJcbiAgICAgICAgICAgIGFyZ0E6IGZpbGxFbXB0eUFycmF5KHZhbHVlKSxcclxuICAgICAgICB9LCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcywgZmFsc2UpO1xyXG4gICAgICAgIHJlZ2lzdGVyRmllbGRBcnJheShhcHBlbmRWYWx1ZSwgY3VycmVudEluZGV4KTtcclxuICAgICAgICBmb2N1c05hbWVSZWYuY3VycmVudCA9IGdldEZvY3VzRmllbGROYW1lKGN1cnJlbnRJbmRleCwgb3B0aW9ucyk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcHJlcGVuZCQxID0gKHZhbHVlLCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJlcGVuZFZhbHVlID0gY29udmVydFRvQXJyYXlQYXlsb2FkKHZhbHVlKTtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcyA9IHByZXBlbmQoZ2V0Q3VycmVudEZpZWxkc1ZhbHVlcygpLCBwcmVwZW5kVmFsdWUpO1xyXG4gICAgICAgIHNldEZpZWxkc0FuZE5vdGlmeSh1cGRhdGVkRmllbGRBcnJheVZhbHVlcyk7XHJcbiAgICAgICAgYmF0Y2hTdGF0ZVVwZGF0ZShwcmVwZW5kLCB7XHJcbiAgICAgICAgICAgIGFyZ0E6IGZpbGxFbXB0eUFycmF5KHZhbHVlKSxcclxuICAgICAgICB9LCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcyk7XHJcbiAgICAgICAgcmVnaXN0ZXJGaWVsZEFycmF5KHByZXBlbmRWYWx1ZSk7XHJcbiAgICAgICAgZm9jdXNOYW1lUmVmLmN1cnJlbnQgPSBnZXRGb2N1c0ZpZWxkTmFtZSgwLCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgICBjb25zdCByZW1vdmUgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcyA9IHJlbW92ZUFycmF5QXQoZ2V0Q3VycmVudEZpZWxkc1ZhbHVlcygpLCBpbmRleCk7XHJcbiAgICAgICAgc2V0RmllbGRzQW5kTm90aWZ5KHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKTtcclxuICAgICAgICBiYXRjaFN0YXRlVXBkYXRlKHJlbW92ZUFycmF5QXQsIHtcclxuICAgICAgICAgICAgYXJnQTogaW5kZXgsXHJcbiAgICAgICAgfSwgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGluc2VydCQxID0gKGluZGV4LCB2YWx1ZSwgb3B0aW9ucykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluc2VydFZhbHVlID0gY29udmVydFRvQXJyYXlQYXlsb2FkKHZhbHVlKTtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcyA9IGluc2VydChnZXRDdXJyZW50RmllbGRzVmFsdWVzKCksIGluZGV4LCBpbnNlcnRWYWx1ZSk7XHJcbiAgICAgICAgc2V0RmllbGRzQW5kTm90aWZ5KHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKTtcclxuICAgICAgICBiYXRjaFN0YXRlVXBkYXRlKGluc2VydCwge1xyXG4gICAgICAgICAgICBhcmdBOiBpbmRleCxcclxuICAgICAgICAgICAgYXJnQjogZmlsbEVtcHR5QXJyYXkodmFsdWUpLFxyXG4gICAgICAgIH0sIHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKTtcclxuICAgICAgICByZWdpc3RlckZpZWxkQXJyYXkoaW5zZXJ0VmFsdWUsIGluZGV4KTtcclxuICAgICAgICBmb2N1c05hbWVSZWYuY3VycmVudCA9IGdldEZvY3VzRmllbGROYW1lKGluZGV4LCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzd2FwID0gKGluZGV4QSwgaW5kZXhCKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRWYWx1ZXMgPSBnZXRDdXJyZW50RmllbGRzVmFsdWVzKCk7XHJcbiAgICAgICAgc3dhcEFycmF5QXQoZmllbGRWYWx1ZXMsIGluZGV4QSwgaW5kZXhCKTtcclxuICAgICAgICBiYXRjaFN0YXRlVXBkYXRlKHN3YXBBcnJheUF0LCB7XHJcbiAgICAgICAgICAgIGFyZ0E6IGluZGV4QSxcclxuICAgICAgICAgICAgYXJnQjogaW5kZXhCLFxyXG4gICAgICAgIH0sIGZpZWxkVmFsdWVzLCBmYWxzZSk7XHJcbiAgICAgICAgc2V0RmllbGRzQW5kTm90aWZ5KGZpZWxkVmFsdWVzKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBtb3ZlID0gKGZyb20sIHRvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRWYWx1ZXMgPSBnZXRDdXJyZW50RmllbGRzVmFsdWVzKCk7XHJcbiAgICAgICAgbW92ZUFycmF5QXQoZmllbGRWYWx1ZXMsIGZyb20sIHRvKTtcclxuICAgICAgICBzZXRGaWVsZHNBbmROb3RpZnkoZmllbGRWYWx1ZXMpO1xyXG4gICAgICAgIGJhdGNoU3RhdGVVcGRhdGUobW92ZUFycmF5QXQsIHtcclxuICAgICAgICAgICAgYXJnQTogZnJvbSxcclxuICAgICAgICAgICAgYXJnQjogdG8sXHJcbiAgICAgICAgfSwgZmllbGRWYWx1ZXMsIGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCB1cGRhdGUgPSAoaW5kZXgsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKChuYW1lICsgJy4nICsgaW5kZXgpLCB2YWx1ZSwge1xyXG4gICAgICAgICAgICBzaG91bGRWYWxpZGF0ZTogISFyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCxcclxuICAgICAgICAgICAgc2hvdWxkRGlydHk6ICEhKHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcyB8fFxyXG4gICAgICAgICAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzRGlydHkpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkVmFsdWVzID0gZ2V0Q3VycmVudEZpZWxkc1ZhbHVlcygpO1xyXG4gICAgICAgIGZpZWxkVmFsdWVzW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgIHNldEZpZWxkc0FuZE5vdGlmeShmaWVsZFZhbHVlcyk7XHJcbiAgICB9O1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpbkZpZWxkQXJyYXlBY3Rpb25SZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChuYW1lc1JlZi5jdXJyZW50LndhdGNoQWxsKSB7XHJcbiAgICAgICAgICAgIHN1YmplY3RzUmVmLmN1cnJlbnQuc3RhdGUubmV4dCh7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHdhdGNoRmllbGQgb2YgbmFtZXNSZWYuY3VycmVudC53YXRjaCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUuc3RhcnRzV2l0aCh3YXRjaEZpZWxkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3RzUmVmLmN1cnJlbnQuc3RhdGUubmV4dCh7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc3ViamVjdHNSZWYuY3VycmVudC53YXRjaC5uZXh0KHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgdmFsdWVzOiBnZXRGaWVsZHNWYWx1ZXMoZmllbGRzUmVmKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb2N1c05hbWVSZWYuY3VycmVudCAmJlxyXG4gICAgICAgICAgICBmb2N1c0ZpZWxkQnkoZmllbGRzUmVmLmN1cnJlbnQsIChrZXkpID0+IGtleS5zdGFydHNXaXRoKGZvY3VzTmFtZVJlZi5jdXJyZW50KSk7XHJcbiAgICAgICAgZm9jdXNOYW1lUmVmLmN1cnJlbnQgPSAnJztcclxuICAgICAgICBzdWJqZWN0c1JlZi5jdXJyZW50LmFycmF5Lm5leHQoe1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IG9taXRLZXkoWy4uLmZpZWxkc10pLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkICYmIHVwZGF0ZUlzVmFsaWQoKTtcclxuICAgIH0sIFtmaWVsZHMsIG5hbWVdKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRBcnJheVN1YnNjcmlwdGlvbiA9IHN1YmplY3RzUmVmLmN1cnJlbnQuYXJyYXkuc3Vic2NyaWJlKHtcclxuICAgICAgICAgICAgbmV4dCh7IG5hbWU6IGlucHV0RmllbGRBcnJheU5hbWUsIHZhbHVlcywgaXNSZXNldCB9KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNSZXNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuc2V0KGZpZWxkc1JlZi5jdXJyZW50LCBpbnB1dEZpZWxkQXJyYXlOYW1lIHx8IG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0RmllbGRBcnJheU5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZXQoZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgaW5wdXRGaWVsZEFycmF5TmFtZSwgdmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50ID0gdmFsdWVzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZHNBbmROb3RpZnkoZ2V0KGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAhZ2V0KGZpZWxkc1JlZi5jdXJyZW50LCBuYW1lKSAmJiBzZXQoZmllbGRzUmVmLmN1cnJlbnQsIG5hbWUsIFtdKTtcclxuICAgICAgICBpc01vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZmllbGRBcnJheVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICBpZiAoc2hvdWxkVW5tb3VudCB8fCBzaG91bGRVbnJlZ2lzdGVyKSB7XHJcbiAgICAgICAgICAgICAgICB1bnJlZ2lzdGVyKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdW5zZXQoZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZEFycmF5VmFsdWVzID0gZ2V0KGdldEZpZWxkc1ZhbHVlcyhmaWVsZHNSZWYpLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIGZpZWxkQXJyYXlWYWx1ZXMgJiZcclxuICAgICAgICAgICAgICAgICAgICBzZXQoZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSwgZmllbGRBcnJheVZhbHVlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzd2FwOiBSZWFjdC51c2VDYWxsYmFjayhzd2FwLCBbbmFtZV0pLFxyXG4gICAgICAgIG1vdmU6IFJlYWN0LnVzZUNhbGxiYWNrKG1vdmUsIFtuYW1lXSksXHJcbiAgICAgICAgcHJlcGVuZDogUmVhY3QudXNlQ2FsbGJhY2socHJlcGVuZCQxLCBbbmFtZV0pLFxyXG4gICAgICAgIGFwcGVuZDogUmVhY3QudXNlQ2FsbGJhY2soYXBwZW5kJDEsIFtuYW1lXSksXHJcbiAgICAgICAgcmVtb3ZlOiBSZWFjdC51c2VDYWxsYmFjayhyZW1vdmUsIFtuYW1lXSksXHJcbiAgICAgICAgaW5zZXJ0OiBSZWFjdC51c2VDYWxsYmFjayhpbnNlcnQkMSwgW25hbWVdKSxcclxuICAgICAgICB1cGRhdGU6IFJlYWN0LnVzZUNhbGxiYWNrKHVwZGF0ZSwgW25hbWVdKSxcclxuICAgICAgICBmaWVsZHM6IGZpZWxkcyxcclxuICAgIH07XHJcbn07XG5cbnZhciBpc0ZpbGVJbnB1dCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09ICdmaWxlJztcblxudmFyIGlzTXVsdGlwbGVTZWxlY3QgPSAoZWxlbWVudCkgPT4gZWxlbWVudC50eXBlID09PSBgc2VsZWN0LW11bHRpcGxlYDtcblxudmFyIGlzUmFkaW9JbnB1dCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09ICdyYWRpbyc7XG5cbmNvbnN0IGRlZmF1bHRSZXN1bHQgPSB7XHJcbiAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICBpc1ZhbGlkOiBmYWxzZSxcclxufTtcclxuY29uc3QgdmFsaWRSZXN1bHQgPSB7IHZhbHVlOiB0cnVlLCBpc1ZhbGlkOiB0cnVlIH07XHJcbnZhciBnZXRDaGVja2JveFZhbHVlID0gKG9wdGlvbnMpID0+IHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbiAmJiBvcHRpb24uY2hlY2tlZCAmJiAhb3B0aW9uLmRpc2FibGVkKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWVzLCBpc1ZhbGlkOiAhIXZhbHVlcy5sZW5ndGggfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnNbMF0uY2hlY2tlZCAmJiAhb3B0aW9uc1swXS5kaXNhYmxlZFxyXG4gICAgICAgICAgICA/IC8vIEB0cy1leHBlY3QtZXJyb3IgZXhwZWN0ZWQgdG8gd29yayBpbiB0aGUgYnJvd3NlclxyXG4gICAgICAgICAgICAgICAgb3B0aW9uc1swXS5hdHRyaWJ1dGVzICYmICFpc1VuZGVmaW5lZChvcHRpb25zWzBdLmF0dHJpYnV0ZXMudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBpc1VuZGVmaW5lZChvcHRpb25zWzBdLnZhbHVlKSB8fCBvcHRpb25zWzBdLnZhbHVlID09PSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHZhbGlkUmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogeyB2YWx1ZTogb3B0aW9uc1swXS52YWx1ZSwgaXNWYWxpZDogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgOiB2YWxpZFJlc3VsdFxyXG4gICAgICAgICAgICA6IGRlZmF1bHRSZXN1bHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVmYXVsdFJlc3VsdDtcclxufTtcblxudmFyIGdldEZpZWxkVmFsdWVBcyA9ICh2YWx1ZSwgeyB2YWx1ZUFzTnVtYmVyLCB2YWx1ZUFzRGF0ZSwgc2V0VmFsdWVBcyB9KSA9PiBpc1VuZGVmaW5lZCh2YWx1ZSlcclxuICAgID8gdmFsdWVcclxuICAgIDogdmFsdWVBc051bWJlclxyXG4gICAgICAgID8gdmFsdWUgPT09ICcnXHJcbiAgICAgICAgICAgID8gTmFOXHJcbiAgICAgICAgICAgIDogK3ZhbHVlXHJcbiAgICAgICAgOiB2YWx1ZUFzRGF0ZVxyXG4gICAgICAgICAgICA/IG5ldyBEYXRlKHZhbHVlKVxyXG4gICAgICAgICAgICA6IHNldFZhbHVlQXNcclxuICAgICAgICAgICAgICAgID8gc2V0VmFsdWVBcyh2YWx1ZSlcclxuICAgICAgICAgICAgICAgIDogdmFsdWU7XG5cbnZhciBnZXRNdWx0aXBsZVNlbGVjdFZhbHVlID0gKG9wdGlvbnMpID0+IFsuLi5vcHRpb25zXVxyXG4gICAgLmZpbHRlcigoeyBzZWxlY3RlZCB9KSA9PiBzZWxlY3RlZClcclxuICAgIC5tYXAoKHsgdmFsdWUgfSkgPT4gdmFsdWUpO1xuXG5jb25zdCBkZWZhdWx0UmV0dXJuID0ge1xyXG4gICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICB2YWx1ZTogbnVsbCxcclxufTtcclxudmFyIGdldFJhZGlvVmFsdWUgPSAob3B0aW9ucykgPT4gQXJyYXkuaXNBcnJheShvcHRpb25zKVxyXG4gICAgPyBvcHRpb25zLnJlZHVjZSgocHJldmlvdXMsIG9wdGlvbikgPT4gb3B0aW9uICYmIG9wdGlvbi5jaGVja2VkICYmICFvcHRpb24uZGlzYWJsZWRcclxuICAgICAgICA/IHtcclxuICAgICAgICAgICAgaXNWYWxpZDogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZSxcclxuICAgICAgICB9XHJcbiAgICAgICAgOiBwcmV2aW91cywgZGVmYXVsdFJldHVybilcclxuICAgIDogZGVmYXVsdFJldHVybjtcblxuZnVuY3Rpb24gZ2V0RmllbGRWYWx1ZShmaWVsZCkge1xyXG4gICAgaWYgKGZpZWxkICYmIGZpZWxkLl9mKSB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gZmllbGQuX2YucmVmO1xyXG4gICAgICAgIGlmIChyZWYuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNGaWxlSW5wdXQocmVmKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVmLmZpbGVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNSYWRpb0lucHV0KHJlZikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldFJhZGlvVmFsdWUoZmllbGQuX2YucmVmcykudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc011bHRpcGxlU2VsZWN0KHJlZikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldE11bHRpcGxlU2VsZWN0VmFsdWUocmVmLm9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNDaGVja0JveElucHV0KHJlZikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldENoZWNrYm94VmFsdWUoZmllbGQuX2YucmVmcykudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBnZXRGaWVsZFZhbHVlQXMoaXNVbmRlZmluZWQocmVmLnZhbHVlKSA/IGZpZWxkLl9mLnJlZi52YWx1ZSA6IHJlZi52YWx1ZSwgZmllbGQuX2YpO1xyXG4gICAgfVxyXG59XG5cbnZhciBnZXRSZXNvbHZlck9wdGlvbnMgPSAoZmllbGRzTmFtZXMsIGZpZWxkc1JlZnMsIGNyaXRlcmlhTW9kZSwgc2hvdWxkVXNlTmF0aXZlVmFsaWRhdGlvbikgPT4ge1xyXG4gICAgY29uc3QgZmllbGRzID0ge307XHJcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgZmllbGRzTmFtZXMpIHtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IGdldChmaWVsZHNSZWZzLCBuYW1lKTtcclxuICAgICAgICBmaWVsZCAmJiBzZXQoZmllbGRzLCBuYW1lLCBmaWVsZC5fZik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyaXRlcmlhTW9kZSxcclxuICAgICAgICBuYW1lczogWy4uLmZpZWxkc05hbWVzXSxcclxuICAgICAgICBmaWVsZHMsXHJcbiAgICAgICAgc2hvdWxkVXNlTmF0aXZlVmFsaWRhdGlvbixcclxuICAgIH07XHJcbn07XG5cbnZhciBoYXNWYWxpZGF0aW9uID0gKG9wdGlvbnMsIG1vdW50ZWQpID0+IG1vdW50ZWQgJiZcclxuICAgIG9wdGlvbnMgJiZcclxuICAgIChvcHRpb25zLnJlcXVpcmVkIHx8XHJcbiAgICAgICAgb3B0aW9ucy5taW4gfHxcclxuICAgICAgICBvcHRpb25zLm1heCB8fFxyXG4gICAgICAgIG9wdGlvbnMubWF4TGVuZ3RoIHx8XHJcbiAgICAgICAgb3B0aW9ucy5taW5MZW5ndGggfHxcclxuICAgICAgICBvcHRpb25zLnBhdHRlcm4gfHxcclxuICAgICAgICBvcHRpb25zLnZhbGlkYXRlKTtcblxudmFyIHNraXBWYWxpZGF0aW9uID0gKHsgaXNPbkJsdXIsIGlzT25DaGFuZ2UsIGlzT25Ub3VjaCwgaXNUb3VjaGVkLCBpc1JlVmFsaWRhdGVPbkJsdXIsIGlzUmVWYWxpZGF0ZU9uQ2hhbmdlLCBpc0JsdXJFdmVudCwgaXNTdWJtaXR0ZWQsIGlzT25BbGwsIH0pID0+IHtcclxuICAgIGlmIChpc09uQWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIWlzU3VibWl0dGVkICYmIGlzT25Ub3VjaCkge1xyXG4gICAgICAgIHJldHVybiAhKGlzVG91Y2hlZCB8fCBpc0JsdXJFdmVudCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc1N1Ym1pdHRlZCA/IGlzUmVWYWxpZGF0ZU9uQmx1ciA6IGlzT25CbHVyKSB7XHJcbiAgICAgICAgcmV0dXJuICFpc0JsdXJFdmVudDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzU3VibWl0dGVkID8gaXNSZVZhbGlkYXRlT25DaGFuZ2UgOiBpc09uQ2hhbmdlKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzQmx1ckV2ZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn07XG5cbnZhciBpc0Z1bmN0aW9uID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG5cbnZhciBpc1N0cmluZyA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcblxudmFyIGlzTWVzc2FnZSA9ICh2YWx1ZSkgPT4gaXNTdHJpbmcodmFsdWUpIHx8IFJlYWN0LmlzVmFsaWRFbGVtZW50KHZhbHVlKTtcblxudmFyIGlzUmVnZXggPSAodmFsdWUpID0+IHZhbHVlIGluc3RhbmNlb2YgUmVnRXhwO1xuXG5mdW5jdGlvbiBnZXRWYWxpZGF0ZUVycm9yKHJlc3VsdCwgcmVmLCB0eXBlID0gJ3ZhbGlkYXRlJykge1xyXG4gICAgaWYgKGlzTWVzc2FnZShyZXN1bHQpIHx8XHJcbiAgICAgICAgKEFycmF5LmlzQXJyYXkocmVzdWx0KSAmJiByZXN1bHQuZXZlcnkoaXNNZXNzYWdlKSkgfHxcclxuICAgICAgICAoaXNCb29sZWFuKHJlc3VsdCkgJiYgIXJlc3VsdCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBpc01lc3NhZ2UocmVzdWx0KSA/IHJlc3VsdCA6ICcnLFxyXG4gICAgICAgICAgICByZWYsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxuXG52YXIgZ2V0VmFsdWVBbmRNZXNzYWdlID0gKHZhbGlkYXRpb25EYXRhKSA9PiBpc09iamVjdCh2YWxpZGF0aW9uRGF0YSkgJiYgIWlzUmVnZXgodmFsaWRhdGlvbkRhdGEpXHJcbiAgICA/IHZhbGlkYXRpb25EYXRhXHJcbiAgICA6IHtcclxuICAgICAgICB2YWx1ZTogdmFsaWRhdGlvbkRhdGEsXHJcbiAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICB9O1xuXG52YXIgdmFsaWRhdGVGaWVsZCA9IGFzeW5jICh7IF9mOiB7IHJlZiwgcmVmcywgcmVxdWlyZWQsIG1heExlbmd0aCwgbWluTGVuZ3RoLCBtaW4sIG1heCwgcGF0dGVybiwgdmFsaWRhdGUsIG5hbWUsIHZhbHVlOiBpbnB1dFZhbHVlLCB2YWx1ZUFzTnVtYmVyLCBtb3VudCwgfSwgfSwgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBzaG91bGRVc2VOYXRpdmVWYWxpZGF0aW9uKSA9PiB7XHJcbiAgICBpZiAoIW1vdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgaW5wdXRSZWYgPSByZWZzID8gcmVmc1swXSA6IHJlZjtcclxuICAgIGNvbnN0IHNldEN1c3RvbVZhbGlkdHkgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChzaG91bGRVc2VOYXRpdmVWYWxpZGF0aW9uICYmIGlucHV0UmVmLnJlcG9ydFZhbGlkaXR5KSB7XHJcbiAgICAgICAgICAgIGlucHV0UmVmLnNldEN1c3RvbVZhbGlkaXR5KGlzQm9vbGVhbihtZXNzYWdlKSA/ICcnIDogbWVzc2FnZSB8fCAnICcpO1xyXG4gICAgICAgICAgICBpbnB1dFJlZi5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBlcnJvciA9IHt9O1xyXG4gICAgY29uc3QgaXNSYWRpbyA9IGlzUmFkaW9JbnB1dChyZWYpO1xyXG4gICAgY29uc3QgaXNDaGVja0JveCA9IGlzQ2hlY2tCb3hJbnB1dChyZWYpO1xyXG4gICAgY29uc3QgaXNSYWRpb09yQ2hlY2tib3ggPSBpc1JhZGlvIHx8IGlzQ2hlY2tCb3g7XHJcbiAgICBjb25zdCBpc0VtcHR5ID0gKCh2YWx1ZUFzTnVtYmVyIHx8IGlzRmlsZUlucHV0KHJlZikpICYmICFyZWYudmFsdWUpIHx8XHJcbiAgICAgICAgaW5wdXRWYWx1ZSA9PT0gJycgfHxcclxuICAgICAgICAoQXJyYXkuaXNBcnJheShpbnB1dFZhbHVlKSAmJiAhaW5wdXRWYWx1ZS5sZW5ndGgpO1xyXG4gICAgY29uc3QgYXBwZW5kRXJyb3JzQ3VycnkgPSBhcHBlbmRFcnJvcnMuYmluZChudWxsLCBuYW1lLCB2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEsIGVycm9yKTtcclxuICAgIGNvbnN0IGdldE1pbk1heE1lc3NhZ2UgPSAoZXhjZWVkTWF4LCBtYXhMZW5ndGhNZXNzYWdlLCBtaW5MZW5ndGhNZXNzYWdlLCBtYXhUeXBlID0gSU5QVVRfVkFMSURBVElPTl9SVUxFUy5tYXhMZW5ndGgsIG1pblR5cGUgPSBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLm1pbkxlbmd0aCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBleGNlZWRNYXggPyBtYXhMZW5ndGhNZXNzYWdlIDogbWluTGVuZ3RoTWVzc2FnZTtcclxuICAgICAgICBlcnJvcltuYW1lXSA9IE9iamVjdC5hc3NpZ24oeyB0eXBlOiBleGNlZWRNYXggPyBtYXhUeXBlIDogbWluVHlwZSwgbWVzc2FnZSxcclxuICAgICAgICAgICAgcmVmIH0sIGFwcGVuZEVycm9yc0N1cnJ5KGV4Y2VlZE1heCA/IG1heFR5cGUgOiBtaW5UeXBlLCBtZXNzYWdlKSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHJlcXVpcmVkICYmXHJcbiAgICAgICAgKCghaXNSYWRpb09yQ2hlY2tib3ggJiYgKGlzRW1wdHkgfHwgaXNOdWxsT3JVbmRlZmluZWQoaW5wdXRWYWx1ZSkpKSB8fFxyXG4gICAgICAgICAgICAoaXNCb29sZWFuKGlucHV0VmFsdWUpICYmICFpbnB1dFZhbHVlKSB8fFxyXG4gICAgICAgICAgICAoaXNDaGVja0JveCAmJiAhZ2V0Q2hlY2tib3hWYWx1ZShyZWZzKS5pc1ZhbGlkKSB8fFxyXG4gICAgICAgICAgICAoaXNSYWRpbyAmJiAhZ2V0UmFkaW9WYWx1ZShyZWZzKS5pc1ZhbGlkKSkpIHtcclxuICAgICAgICBjb25zdCB7IHZhbHVlLCBtZXNzYWdlIH0gPSBpc01lc3NhZ2UocmVxdWlyZWQpXHJcbiAgICAgICAgICAgID8geyB2YWx1ZTogISFyZXF1aXJlZCwgbWVzc2FnZTogcmVxdWlyZWQgfVxyXG4gICAgICAgICAgICA6IGdldFZhbHVlQW5kTWVzc2FnZShyZXF1aXJlZCk7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGVycm9yW25hbWVdID0gT2JqZWN0LmFzc2lnbih7IHR5cGU6IElOUFVUX1ZBTElEQVRJT05fUlVMRVMucmVxdWlyZWQsIG1lc3NhZ2UsIHJlZjogaW5wdXRSZWYgfSwgYXBwZW5kRXJyb3JzQ3VycnkoSU5QVVRfVkFMSURBVElPTl9SVUxFUy5yZXF1aXJlZCwgbWVzc2FnZSkpO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VzdG9tVmFsaWR0eShtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghaXNFbXB0eSAmJiAoIWlzTnVsbE9yVW5kZWZpbmVkKG1pbikgfHwgIWlzTnVsbE9yVW5kZWZpbmVkKG1heCkpKSB7XHJcbiAgICAgICAgbGV0IGV4Y2VlZE1heDtcclxuICAgICAgICBsZXQgZXhjZWVkTWluO1xyXG4gICAgICAgIGNvbnN0IG1heE91dHB1dCA9IGdldFZhbHVlQW5kTWVzc2FnZShtYXgpO1xyXG4gICAgICAgIGNvbnN0IG1pbk91dHB1dCA9IGdldFZhbHVlQW5kTWVzc2FnZShtaW4pO1xyXG4gICAgICAgIGlmICghaXNOYU4oaW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVOdW1iZXIgPSByZWYudmFsdWVBc051bWJlciB8fCBwYXJzZUZsb2F0KGlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKG1heE91dHB1dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGV4Y2VlZE1heCA9IHZhbHVlTnVtYmVyID4gbWF4T3V0cHV0LnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQobWluT3V0cHV0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZXhjZWVkTWluID0gdmFsdWVOdW1iZXIgPCBtaW5PdXRwdXQudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlRGF0ZSA9IHJlZi52YWx1ZUFzRGF0ZSB8fCBuZXcgRGF0ZShpbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKG1heE91dHB1dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGV4Y2VlZE1heCA9IHZhbHVlRGF0ZSA+IG5ldyBEYXRlKG1heE91dHB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKG1pbk91dHB1dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGV4Y2VlZE1pbiA9IHZhbHVlRGF0ZSA8IG5ldyBEYXRlKG1pbk91dHB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV4Y2VlZE1heCB8fCBleGNlZWRNaW4pIHtcclxuICAgICAgICAgICAgZ2V0TWluTWF4TWVzc2FnZSghIWV4Y2VlZE1heCwgbWF4T3V0cHV0Lm1lc3NhZ2UsIG1pbk91dHB1dC5tZXNzYWdlLCBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLm1heCwgSU5QVVRfVkFMSURBVElPTl9SVUxFUy5taW4pO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VzdG9tVmFsaWR0eShlcnJvcltuYW1lXS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICgobWF4TGVuZ3RoIHx8IG1pbkxlbmd0aCkgJiYgIWlzRW1wdHkgJiYgaXNTdHJpbmcoaW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICBjb25zdCBtYXhMZW5ndGhPdXRwdXQgPSBnZXRWYWx1ZUFuZE1lc3NhZ2UobWF4TGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBtaW5MZW5ndGhPdXRwdXQgPSBnZXRWYWx1ZUFuZE1lc3NhZ2UobWluTGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBleGNlZWRNYXggPSAhaXNOdWxsT3JVbmRlZmluZWQobWF4TGVuZ3RoT3V0cHV0LnZhbHVlKSAmJlxyXG4gICAgICAgICAgICBpbnB1dFZhbHVlLmxlbmd0aCA+IG1heExlbmd0aE91dHB1dC52YWx1ZTtcclxuICAgICAgICBjb25zdCBleGNlZWRNaW4gPSAhaXNOdWxsT3JVbmRlZmluZWQobWluTGVuZ3RoT3V0cHV0LnZhbHVlKSAmJlxyXG4gICAgICAgICAgICBpbnB1dFZhbHVlLmxlbmd0aCA8IG1pbkxlbmd0aE91dHB1dC52YWx1ZTtcclxuICAgICAgICBpZiAoZXhjZWVkTWF4IHx8IGV4Y2VlZE1pbikge1xyXG4gICAgICAgICAgICBnZXRNaW5NYXhNZXNzYWdlKGV4Y2VlZE1heCwgbWF4TGVuZ3RoT3V0cHV0Lm1lc3NhZ2UsIG1pbkxlbmd0aE91dHB1dC5tZXNzYWdlKTtcclxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1c3RvbVZhbGlkdHkoZXJyb3JbbmFtZV0ubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocGF0dGVybiAmJiAhaXNFbXB0eSAmJiBpc1N0cmluZyhpbnB1dFZhbHVlKSkge1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWU6IHBhdHRlcm5WYWx1ZSwgbWVzc2FnZSB9ID0gZ2V0VmFsdWVBbmRNZXNzYWdlKHBhdHRlcm4pO1xyXG4gICAgICAgIGlmIChpc1JlZ2V4KHBhdHRlcm5WYWx1ZSkgJiYgIWlucHV0VmFsdWUubWF0Y2gocGF0dGVyblZhbHVlKSkge1xyXG4gICAgICAgICAgICBlcnJvcltuYW1lXSA9IE9iamVjdC5hc3NpZ24oeyB0eXBlOiBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLnBhdHRlcm4sIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICByZWYgfSwgYXBwZW5kRXJyb3JzQ3VycnkoSU5QVVRfVkFMSURBVElPTl9SVUxFUy5wYXR0ZXJuLCBtZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXN0b21WYWxpZHR5KG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHZhbGlkYXRlKSB7XHJcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odmFsaWRhdGUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHZhbGlkYXRlKGlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZUVycm9yID0gZ2V0VmFsaWRhdGVFcnJvcihyZXN1bHQsIGlucHV0UmVmKTtcclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGVycm9yW25hbWVdID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB2YWxpZGF0ZUVycm9yKSwgYXBwZW5kRXJyb3JzQ3VycnkoSU5QVVRfVkFMSURBVElPTl9SVUxFUy52YWxpZGF0ZSwgdmFsaWRhdGVFcnJvci5tZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1c3RvbVZhbGlkdHkodmFsaWRhdGVFcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNPYmplY3QodmFsaWRhdGUpKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWxpZGF0aW9uUmVzdWx0ID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbGlkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzRW1wdHlPYmplY3QodmFsaWRhdGlvblJlc3VsdCkgJiYgIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVFcnJvciA9IGdldFZhbGlkYXRlRXJyb3IoYXdhaXQgdmFsaWRhdGVba2V5XShpbnB1dFZhbHVlKSwgaW5wdXRSZWYsIGtleSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGVFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHZhbGlkYXRlRXJyb3IpLCBhcHBlbmRFcnJvcnNDdXJyeShrZXksIHZhbGlkYXRlRXJyb3IubWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1c3RvbVZhbGlkdHkodmFsaWRhdGVFcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yW25hbWVdID0gdmFsaWRhdGlvblJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFpc0VtcHR5T2JqZWN0KHZhbGlkYXRpb25SZXN1bHQpKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcltuYW1lXSA9IE9iamVjdC5hc3NpZ24oeyByZWY6IGlucHV0UmVmIH0sIHZhbGlkYXRpb25SZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRDdXN0b21WYWxpZHR5KHRydWUpO1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG59O1xuXG52YXIgZGVib3VuY2UgPSAoY2FsbGJhY2ssIHdhaXQpID0+IHtcclxuICAgIGxldCB0aW1lciA9IDA7XHJcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBjYWxsYmFjayguLi5hcmdzKSwgd2FpdCk7XHJcbiAgICB9O1xyXG59O1xuXG52YXIgZ2V0VmFsaWRhdGlvbk1vZGVzID0gKG1vZGUpID0+ICh7XHJcbiAgICBpc09uU3VibWl0OiAhbW9kZSB8fCBtb2RlID09PSBWQUxJREFUSU9OX01PREUub25TdWJtaXQsXHJcbiAgICBpc09uQmx1cjogbW9kZSA9PT0gVkFMSURBVElPTl9NT0RFLm9uQmx1cixcclxuICAgIGlzT25DaGFuZ2U6IG1vZGUgPT09IFZBTElEQVRJT05fTU9ERS5vbkNoYW5nZSxcclxuICAgIGlzT25BbGw6IG1vZGUgPT09IFZBTElEQVRJT05fTU9ERS5hbGwsXHJcbiAgICBpc09uVG91Y2g6IG1vZGUgPT09IFZBTElEQVRJT05fTU9ERS5vblRvdWNoZWQsXHJcbn0pO1xuXG52YXIgaXNIVE1MRWxlbWVudCA9ICh2YWx1ZSkgPT4gdmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcblxudmFyIGlzUmFkaW9PckNoZWNrYm94RnVuY3Rpb24gPSAocmVmKSA9PiBpc1JhZGlvSW5wdXQocmVmKSB8fCBpc0NoZWNrQm94SW5wdXQocmVmKTtcblxuY2xhc3MgU3Vic2NyaXB0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGVhckRvd25zID0gW107XHJcbiAgICB9XHJcbiAgICBhZGQodGVhckRvd24pIHtcclxuICAgICAgICB0aGlzLnRlYXJEb3ducy5wdXNoKHRlYXJEb3duKTtcclxuICAgIH1cclxuICAgIHVuc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgdGVhcmRvd24gb2YgdGhpcy50ZWFyRG93bnMpIHtcclxuICAgICAgICAgICAgdGVhcmRvd24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50ZWFyRG93bnMgPSBbXTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBTdWJzY3JpYmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9ic2VydmVyLCBzdWJzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XHJcbiAgICAgICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcclxuICAgICAgICBzdWJzY3JpcHRpb24uYWRkKCgpID0+ICh0aGlzLmNsb3NlZCA9IHRydWUpKTtcclxuICAgIH1cclxuICAgIG5leHQodmFsdWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmNsYXNzIFN1YmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcclxuICAgIH1cclxuICAgIG5leHQodmFsdWUpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG9ic2VydmVyIG9mIHRoaXMub2JzZXJ2ZXJzKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN1YnNjcmliZShvYnNlcnZlcikge1xyXG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuICAgICAgICBjb25zdCBzdWJzY3JpYmVyID0gbmV3IFN1YnNjcmliZXIob2JzZXJ2ZXIsIHN1YnNjcmlwdGlvbik7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChzdWJzY3JpYmVyKTtcclxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgdW5zdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcclxuICAgIH1cclxufVxuXG5jb25zdCBpc1dpbmRvd1VuZGVmaW5lZCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xyXG5mdW5jdGlvbiB1c2VGb3JtKHsgbW9kZSA9IFZBTElEQVRJT05fTU9ERS5vblN1Ym1pdCwgcmVWYWxpZGF0ZU1vZGUgPSBWQUxJREFUSU9OX01PREUub25DaGFuZ2UsIHJlc29sdmVyLCBjb250ZXh0LCBkZWZhdWx0VmFsdWVzID0ge30sIHNob3VsZEZvY3VzRXJyb3IgPSB0cnVlLCBkZWxheUVycm9yLCBzaG91bGRVc2VOYXRpdmVWYWxpZGF0aW9uLCBzaG91bGRVbnJlZ2lzdGVyLCBjcml0ZXJpYU1vZGUsIH0gPSB7fSkge1xyXG4gICAgY29uc3QgW2Zvcm1TdGF0ZSwgdXBkYXRlRm9ybVN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICBpc0RpcnR5OiBmYWxzZSxcclxuICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGRpcnR5RmllbGRzOiB7fSxcclxuICAgICAgICBpc1N1Ym1pdHRlZDogZmFsc2UsXHJcbiAgICAgICAgc3VibWl0Q291bnQ6IDAsXHJcbiAgICAgICAgdG91Y2hlZEZpZWxkczoge30sXHJcbiAgICAgICAgaXNTdWJtaXR0aW5nOiBmYWxzZSxcclxuICAgICAgICBpc1N1Ym1pdFN1Y2Nlc3NmdWw6IGZhbHNlLFxyXG4gICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yczoge30sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlYWRGb3JtU3RhdGVSZWYgPSBSZWFjdC51c2VSZWYoe1xyXG4gICAgICAgIGlzRGlydHk6ICFpc1Byb3h5RW5hYmxlZCxcclxuICAgICAgICBkaXJ0eUZpZWxkczogIWlzUHJveHlFbmFibGVkLFxyXG4gICAgICAgIHRvdWNoZWRGaWVsZHM6ICFpc1Byb3h5RW5hYmxlZCxcclxuICAgICAgICBpc1ZhbGlkYXRpbmc6ICFpc1Byb3h5RW5hYmxlZCxcclxuICAgICAgICBpc1ZhbGlkOiAhaXNQcm94eUVuYWJsZWQsXHJcbiAgICAgICAgZXJyb3JzOiAhaXNQcm94eUVuYWJsZWQsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlc29sdmVyUmVmID0gUmVhY3QudXNlUmVmKHJlc29sdmVyKTtcclxuICAgIGNvbnN0IGZvcm1TdGF0ZVJlZiA9IFJlYWN0LnVzZVJlZihmb3JtU3RhdGUpO1xyXG4gICAgY29uc3QgZmllbGRzUmVmID0gUmVhY3QudXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IGRlZmF1bHRWYWx1ZXNSZWYgPSBSZWFjdC51c2VSZWYoZGVmYXVsdFZhbHVlcyk7XHJcbiAgICBjb25zdCBmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZiA9IFJlYWN0LnVzZVJlZih7fSk7XHJcbiAgICBjb25zdCBjb250ZXh0UmVmID0gUmVhY3QudXNlUmVmKGNvbnRleHQpO1xyXG4gICAgY29uc3QgaW5GaWVsZEFycmF5QWN0aW9uUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcclxuICAgIGNvbnN0IGlzTW91bnRlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XHJcbiAgICBjb25zdCBfZGVsYXlDYWxsYmFjayA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgY29uc3Qgc3ViamVjdHNSZWYgPSBSZWFjdC51c2VSZWYoe1xyXG4gICAgICAgIHdhdGNoOiBuZXcgU3ViamVjdCgpLFxyXG4gICAgICAgIGNvbnRyb2w6IG5ldyBTdWJqZWN0KCksXHJcbiAgICAgICAgYXJyYXk6IG5ldyBTdWJqZWN0KCksXHJcbiAgICAgICAgc3RhdGU6IG5ldyBTdWJqZWN0KCksXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG5hbWVzUmVmID0gUmVhY3QudXNlUmVmKHtcclxuICAgICAgICBtb3VudDogbmV3IFNldCgpLFxyXG4gICAgICAgIHVuTW91bnQ6IG5ldyBTZXQoKSxcclxuICAgICAgICBhcnJheTogbmV3IFNldCgpLFxyXG4gICAgICAgIHdhdGNoOiBuZXcgU2V0KCksXHJcbiAgICAgICAgd2F0Y2hBbGw6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB2YWxpZGF0aW9uTW9kZSA9IGdldFZhbGlkYXRpb25Nb2Rlcyhtb2RlKTtcclxuICAgIGNvbnN0IGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhID0gY3JpdGVyaWFNb2RlID09PSBWQUxJREFUSU9OX01PREUuYWxsO1xyXG4gICAgcmVzb2x2ZXJSZWYuY3VycmVudCA9IHJlc29sdmVyO1xyXG4gICAgY29udGV4dFJlZi5jdXJyZW50ID0gY29udGV4dDtcclxuICAgIGNvbnN0IGlzRmllbGRXYXRjaGVkID0gKG5hbWUpID0+IG5hbWVzUmVmLmN1cnJlbnQud2F0Y2hBbGwgfHxcclxuICAgICAgICBuYW1lc1JlZi5jdXJyZW50LndhdGNoLmhhcyhuYW1lKSB8fFxyXG4gICAgICAgIG5hbWVzUmVmLmN1cnJlbnQud2F0Y2guaGFzKChuYW1lLm1hdGNoKC9cXHcrLykgfHwgW10pWzBdKTtcclxuICAgIGNvbnN0IHVwZGF0ZUVycm9yU3RhdGUgPSAobmFtZSwgZXJyb3IpID0+IHtcclxuICAgICAgICBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lLCBlcnJvcik7XHJcbiAgICAgICAgc3ViamVjdHNSZWYuY3VycmVudC5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgZXJyb3JzOiBmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2hvdWxkUmVuZGVyQmFzZU9uVmFsaWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IHZhbGlkYXRlRm9ybShmaWVsZHNSZWYuY3VycmVudCwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKGlzVmFsaWQgIT09IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgZm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCA9IGlzVmFsaWQ7XHJcbiAgICAgICAgICAgIHN1YmplY3RzUmVmLmN1cnJlbnQuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2hvdWxkUmVuZGVyQmFzZU9uRXJyb3IgPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAoc2hvdWxkU2tpcFJlbmRlciwgbmFtZSwgZXJyb3IsIGZpZWxkU3RhdGUsIGlzVmFsaWRGcm9tUmVzb2x2ZXIsIGlzV2F0Y2hlZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzRXJyb3IgPSBnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lKTtcclxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWRcclxuICAgICAgICAgICAgPyByZXNvbHZlclxyXG4gICAgICAgICAgICAgICAgPyBpc1ZhbGlkRnJvbVJlc29sdmVyXHJcbiAgICAgICAgICAgICAgICA6IHNob3VsZFJlbmRlckJhc2VPblZhbGlkKClcclxuICAgICAgICAgICAgOiBmYWxzZTtcclxuICAgICAgICBpZiAoZGVsYXlFcnJvciAmJiBlcnJvcikge1xyXG4gICAgICAgICAgICBfZGVsYXlDYWxsYmFjay5jdXJyZW50ID1cclxuICAgICAgICAgICAgICAgIF9kZWxheUNhbGxiYWNrLmN1cnJlbnQgfHwgZGVib3VuY2UodXBkYXRlRXJyb3JTdGF0ZSwgZGVsYXlFcnJvcik7XHJcbiAgICAgICAgICAgIF9kZWxheUNhbGxiYWNrLmN1cnJlbnQobmFtZSwgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZXJyb3JcclxuICAgICAgICAgICAgICAgID8gc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgbmFtZSwgZXJyb3IpXHJcbiAgICAgICAgICAgICAgICA6IHVuc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoaXNXYXRjaGVkIHx8XHJcbiAgICAgICAgICAgIChlcnJvciA/ICFkZWVwRXF1YWwocHJldmlvdXNFcnJvciwgZXJyb3IpIDogcHJldmlvdXNFcnJvcikgfHxcclxuICAgICAgICAgICAgIWlzRW1wdHlPYmplY3QoZmllbGRTdGF0ZSkgfHxcclxuICAgICAgICAgICAgZm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCAhPT0gaXNWYWxpZCkgJiZcclxuICAgICAgICAgICAgIXNob3VsZFNraXBSZW5kZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEZvcm1TdGF0ZSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmaWVsZFN0YXRlKSwgKHJlc29sdmVyID8geyBpc1ZhbGlkOiAhIWlzVmFsaWQgfSA6IHt9KSksIHsgZXJyb3JzOiBmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIG5hbWUgfSk7XHJcbiAgICAgICAgICAgIGZvcm1TdGF0ZVJlZi5jdXJyZW50ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmb3JtU3RhdGVSZWYuY3VycmVudCksIHVwZGF0ZWRGb3JtU3RhdGUpO1xyXG4gICAgICAgICAgICBzdWJqZWN0c1JlZi5jdXJyZW50LnN0YXRlLm5leHQoaXNXYXRjaGVkID8geyBuYW1lIH0gOiB1cGRhdGVkRm9ybVN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3ViamVjdHNSZWYuY3VycmVudC5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgaXNWYWxpZGF0aW5nOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHNldEZpZWxkVmFsdWUgPSBSZWFjdC51c2VDYWxsYmFjaygobmFtZSwgcmF3VmFsdWUsIG9wdGlvbnMgPSB7fSwgc2hvdWxkUmVuZGVyLCBzaG91bGRSZWdpc3RlcikgPT4ge1xyXG4gICAgICAgIHNob3VsZFJlZ2lzdGVyICYmIHJlZ2lzdGVyKG5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KGZpZWxkc1JlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgY29uc3QgX2YgPSBmaWVsZC5fZjtcclxuICAgICAgICAgICAgaWYgKF9mKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGlzV2ViICYmIGlzSFRNTEVsZW1lbnQoX2YucmVmKSAmJiBpc051bGxPclVuZGVmaW5lZChyYXdWYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICA/ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgOiByYXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgIF9mLnZhbHVlID0gZ2V0RmllbGRWYWx1ZUFzKHJhd1ZhbHVlLCBfZik7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNSYWRpb0lucHV0KF9mLnJlZikpIHtcclxuICAgICAgICAgICAgICAgICAgICAoX2YucmVmcyB8fCBbXSkuZm9yRWFjaCgocmFkaW9SZWYpID0+IChyYWRpb1JlZi5jaGVja2VkID0gcmFkaW9SZWYudmFsdWUgPT09IHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc0ZpbGVJbnB1dChfZi5yZWYpICYmICFpc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBfZi5yZWYuZmlsZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzTXVsdGlwbGVTZWxlY3QoX2YucmVmKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFsuLi5fZi5yZWYub3B0aW9uc10uZm9yRWFjaCgoc2VsZWN0UmVmKSA9PiAoc2VsZWN0UmVmLnNlbGVjdGVkID0gdmFsdWUuaW5jbHVkZXMoc2VsZWN0UmVmLnZhbHVlKSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNDaGVja0JveElucHV0KF9mLnJlZikgJiYgX2YucmVmcykge1xyXG4gICAgICAgICAgICAgICAgICAgIF9mLnJlZnMubGVuZ3RoID4gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9mLnJlZnMuZm9yRWFjaCgoY2hlY2tib3hSZWYpID0+IChjaGVja2JveFJlZi5jaGVja2VkID0gQXJyYXkuaXNBcnJheSh2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gISF2YWx1ZS5maW5kKChkYXRhKSA9PiBkYXRhID09PSBjaGVja2JveFJlZi52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdmFsdWUgPT09IGNoZWNrYm94UmVmLnZhbHVlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoX2YucmVmc1swXS5jaGVja2VkID0gISF2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfZi5yZWYudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzaG91bGRSZW5kZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBnZXRGaWVsZHNWYWx1ZXMoZmllbGRzUmVmKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXQodmFsdWVzLCBuYW1lLCByYXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViamVjdHNSZWYuY3VycmVudC5jb250cm9sLm5leHQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50KSwgdmFsdWVzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIChvcHRpb25zLnNob3VsZERpcnR5IHx8IG9wdGlvbnMuc2hvdWxkVG91Y2gpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVG91Y2hBbmREaXJ0eVN0YXRlKG5hbWUsIHZhbHVlLCBvcHRpb25zLnNob3VsZFRvdWNoKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuc2hvdWxkVmFsaWRhdGUgJiYgdHJpZ2dlcihuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkLl9mID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmF3VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmF3VmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgZ2V0SXNEaXJ0eSA9IFJlYWN0LnVzZUNhbGxiYWNrKChuYW1lLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9ybVZhbHVlcyA9IGdldEZpZWxkc1ZhbHVlcyhmaWVsZHNSZWYpO1xyXG4gICAgICAgIG5hbWUgJiYgZGF0YSAmJiBzZXQoZm9ybVZhbHVlcywgbmFtZSwgZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuICFkZWVwRXF1YWwoZm9ybVZhbHVlcywgZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHVwZGF0ZVRvdWNoQW5kRGlydHlTdGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKChuYW1lLCBpbnB1dFZhbHVlLCBpc0N1cnJlbnRUb3VjaGVkLCBzaG91bGRSZW5kZXIgPSB0cnVlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgaXNDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc0RpcnR5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzSXNEaXJ0eSA9IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzRGlydHk7XHJcbiAgICAgICAgICAgIGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzRGlydHkgPSBnZXRJc0RpcnR5KCk7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzRGlydHkgPSBmb3JtU3RhdGVSZWYuY3VycmVudC5pc0RpcnR5O1xyXG4gICAgICAgICAgICBpc0NoYW5nZWQgPSBwcmV2aW91c0lzRGlydHkgIT09IHN0YXRlLmlzRGlydHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMgJiYgIWlzQ3VycmVudFRvdWNoZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNQcmV2aW91c0ZpZWxkRGlydHkgPSBnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICBjb25zdCBpc0N1cnJlbnRGaWVsZERpcnR5ID0gIWRlZXBFcXVhbChnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lKSwgaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGlzQ3VycmVudEZpZWxkRGlydHlcclxuICAgICAgICAgICAgICAgID8gc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLCBuYW1lLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgOiB1bnNldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgICAgIHN0YXRlLmRpcnR5RmllbGRzID0gZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHM7XHJcbiAgICAgICAgICAgIGlzQ2hhbmdlZCA9XHJcbiAgICAgICAgICAgICAgICBpc0NoYW5nZWQgfHxcclxuICAgICAgICAgICAgICAgICAgICBpc1ByZXZpb3VzRmllbGREaXJ0eSAhPT0gZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLCBuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaXNQcmV2aW91c0ZpZWxkVG91Y2hlZCA9IGdldChmb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkRmllbGRzLCBuYW1lKTtcclxuICAgICAgICBpZiAoaXNDdXJyZW50VG91Y2hlZCAmJiAhaXNQcmV2aW91c0ZpZWxkVG91Y2hlZCkge1xyXG4gICAgICAgICAgICBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZEZpZWxkcywgbmFtZSwgaXNDdXJyZW50VG91Y2hlZCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnRvdWNoZWRGaWVsZHMgPSBmb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkRmllbGRzO1xyXG4gICAgICAgICAgICBpc0NoYW5nZWQgPVxyXG4gICAgICAgICAgICAgICAgaXNDaGFuZ2VkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkRmllbGRzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUHJldmlvdXNGaWVsZFRvdWNoZWQgIT09IGlzQ3VycmVudFRvdWNoZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc0NoYW5nZWQgJiYgc2hvdWxkUmVuZGVyICYmIHN1YmplY3RzUmVmLmN1cnJlbnQuc3RhdGUubmV4dChzdGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIGlzQ2hhbmdlZCA/IHN0YXRlIDoge307XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBleGVjdXRlSW5saW5lVmFsaWRhdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jIChuYW1lLCBza2lwUmVSZW5kZXIpID0+IHtcclxuICAgICAgICBjb25zdCBlcnJvciA9IChhd2FpdCB2YWxpZGF0ZUZpZWxkKGdldChmaWVsZHNSZWYuY3VycmVudCwgbmFtZSksIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBzaG91bGRVc2VOYXRpdmVWYWxpZGF0aW9uKSlbbmFtZV07XHJcbiAgICAgICAgYXdhaXQgc2hvdWxkUmVuZGVyQmFzZU9uRXJyb3Ioc2tpcFJlUmVuZGVyLCBuYW1lLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIGlzVW5kZWZpbmVkKGVycm9yKTtcclxuICAgIH0sIFtpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYV0pO1xyXG4gICAgY29uc3QgZXhlY3V0ZVJlc29sdmVyVmFsaWRhdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jIChuYW1lcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZXJyb3JzIH0gPSBhd2FpdCByZXNvbHZlclJlZi5jdXJyZW50KGdldEZpZWxkc1ZhbHVlcyhmaWVsZHNSZWYpLCBjb250ZXh0UmVmLmN1cnJlbnQsIGdldFJlc29sdmVyT3B0aW9ucyhuYW1lc1JlZi5jdXJyZW50Lm1vdW50LCBmaWVsZHNSZWYuY3VycmVudCwgY3JpdGVyaWFNb2RlLCBzaG91bGRVc2VOYXRpdmVWYWxpZGF0aW9uKSk7XHJcbiAgICAgICAgaWYgKG5hbWVzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBuYW1lcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBnZXQoZXJyb3JzLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgPyBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lLCBlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICA6IHVuc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycyA9IGVycm9ycztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVycm9ycztcclxuICAgIH0sIFtjcml0ZXJpYU1vZGUsIHNob3VsZFVzZU5hdGl2ZVZhbGlkYXRpb25dKTtcclxuICAgIGNvbnN0IHZhbGlkYXRlRm9ybSA9IGFzeW5jIChmaWVsZHNSZWYsIHNob3VsZENoZWNrVmFsaWQsIGNvbnRleHQgPSB7XHJcbiAgICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICB9KSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIGZpZWxkc1JlZikge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1JlZltuYW1lXTtcclxuICAgICAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBfZiA9IGZpZWxkLl9mO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IG9taXQoZmllbGQsICdfZicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKF9mKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRFcnJvciA9IGF3YWl0IHZhbGlkYXRlRmllbGQoZmllbGQsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBzaG91bGRVc2VOYXRpdmVWYWxpZGF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkQ2hlY2tWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRFcnJvcltfZi5uYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC52YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRXJyb3JbX2YubmFtZV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgX2YubmFtZSwgZmllbGRFcnJvcltfZi5uYW1lXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5zZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBfZi5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ICYmIChhd2FpdCB2YWxpZGF0ZUZvcm0oY3VycmVudCwgc2hvdWxkQ2hlY2tWYWxpZCwgY29udGV4dCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb250ZXh0LnZhbGlkO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHRyaWdnZXIgPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAobmFtZSwgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGROYW1lcyA9IGNvbnZlcnRUb0FycmF5UGF5bG9hZChuYW1lKTtcclxuICAgICAgICBsZXQgaXNWYWxpZDtcclxuICAgICAgICBzdWJqZWN0c1JlZi5jdXJyZW50LnN0YXRlLm5leHQoe1xyXG4gICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlc29sdmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjaGVtYVJlc3VsdCA9IGF3YWl0IGV4ZWN1dGVSZXNvbHZlclZhbGlkYXRpb24oaXNVbmRlZmluZWQobmFtZSkgPyBuYW1lIDogZmllbGROYW1lcyk7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSBuYW1lXHJcbiAgICAgICAgICAgICAgICA/IGZpZWxkTmFtZXMuZXZlcnkoKG5hbWUpID0+ICFnZXQoc2NoZW1hUmVzdWx0LCBuYW1lKSlcclxuICAgICAgICAgICAgICAgIDogaXNFbXB0eU9iamVjdChzY2hlbWFSZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSAoYXdhaXQgUHJvbWlzZS5hbGwoZmllbGROYW1lc1xyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGZpZWxkTmFtZSkgPT4gZ2V0KGZpZWxkc1JlZi5jdXJyZW50LCBmaWVsZE5hbWUsIHt9KS5fZilcclxuICAgICAgICAgICAgICAgICAgICAubWFwKGFzeW5jIChmaWVsZE5hbWUpID0+IGF3YWl0IGV4ZWN1dGVJbmxpbmVWYWxpZGF0aW9uKGZpZWxkTmFtZSwgdHJ1ZSkpKSkuZXZlcnkoQm9vbGVhbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB2YWxpZGF0ZUZvcm0oZmllbGRzUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzRW1wdHlPYmplY3QoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzdWJqZWN0c1JlZi5jdXJyZW50LnN0YXRlLm5leHQoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCAoaXNTdHJpbmcobmFtZSkgPyB7IG5hbWUgfSA6IHt9KSksIHsgZXJyb3JzOiBmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIGlzVmFsaWRhdGluZzogZmFsc2UgfSkpO1xyXG4gICAgICAgIGlmIChvcHRpb25zLnNob3VsZEZvY3VzICYmICFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGZvY3VzRmllbGRCeShmaWVsZHNSZWYuY3VycmVudCwgKGtleSkgPT4gZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywga2V5KSwgbmFtZSA/IGZpZWxkTmFtZXMgOiBuYW1lc1JlZi5jdXJyZW50Lm1vdW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQgJiYgdXBkYXRlSXNWYWxpZCgpO1xyXG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xyXG4gICAgfSwgW2V4ZWN1dGVSZXNvbHZlclZhbGlkYXRpb24sIGV4ZWN1dGVJbmxpbmVWYWxpZGF0aW9uXSk7XHJcbiAgICBjb25zdCB1cGRhdGVJc1ZhbGlkQW5kSW5wdXRWYWx1ZSA9IChuYW1lLCByZWYsIHNob3VsZFNraXBWYWx1ZUFzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoZmllbGRzUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc1ZhbHVlVW5kZWZpbmVkID0gaXNVbmRlZmluZWQoZmllbGQuX2YudmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSBpc1ZhbHVlVW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICA/IGlzVW5kZWZpbmVkKGdldChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lKSlcclxuICAgICAgICAgICAgICAgICAgICA/IGdldChkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBnZXQoZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSlcclxuICAgICAgICAgICAgICAgIDogZmllbGQuX2YudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQoZGVmYXVsdFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlZiAmJiByZWYuZGVmYXVsdENoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5fZi52YWx1ZSA9IGdldEZpZWxkVmFsdWUoZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2hvdWxkU2tpcFZhbHVlQXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5fZi52YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWUobmFtZSwgZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpc1ZhbHVlVW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC5fZi52YWx1ZSA9IGdldEZpZWxkVmFsdWUoZmllbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzTW91bnRlZFJlZi5jdXJyZW50ICYmIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkICYmIHVwZGF0ZUlzVmFsaWQoKTtcclxuICAgIH07XHJcbiAgICBjb25zdCB1cGRhdGVJc1ZhbGlkID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKHZhbHVlcyA9IHt9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IHJlc29sdmVyXHJcbiAgICAgICAgICAgID8gaXNFbXB0eU9iamVjdCgoYXdhaXQgcmVzb2x2ZXJSZWYuY3VycmVudChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGdldEZpZWxkc1ZhbHVlcyhmaWVsZHNSZWYpKSwgdmFsdWVzKSwgY29udGV4dFJlZi5jdXJyZW50LCBnZXRSZXNvbHZlck9wdGlvbnMobmFtZXNSZWYuY3VycmVudC5tb3VudCwgZmllbGRzUmVmLmN1cnJlbnQsIGNyaXRlcmlhTW9kZSwgc2hvdWxkVXNlTmF0aXZlVmFsaWRhdGlvbikpKS5lcnJvcnMpXHJcbiAgICAgICAgICAgIDogYXdhaXQgdmFsaWRhdGVGb3JtKGZpZWxkc1JlZi5jdXJyZW50LCB0cnVlKTtcclxuICAgICAgICBpZiAoaXNWYWxpZCAhPT0gZm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICBmb3JtU3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkID0gaXNWYWxpZDtcclxuICAgICAgICAgICAgc3ViamVjdHNSZWYuY3VycmVudC5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgICAgIGlzVmFsaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjcml0ZXJpYU1vZGUsIHNob3VsZFVzZU5hdGl2ZVZhbGlkYXRpb25dKTtcclxuICAgIGNvbnN0IHNldFZhbHVlcyA9IFJlYWN0LnVzZUNhbGxiYWNrKChuYW1lLCB2YWx1ZSwgb3B0aW9ucykgPT4gT2JqZWN0LmVudHJpZXModmFsdWUpLmZvckVhY2goKFtmaWVsZEtleSwgZmllbGRWYWx1ZV0pID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBgJHtuYW1lfS4ke2ZpZWxkS2V5fWA7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoZmllbGRzUmVmLmN1cnJlbnQsIGZpZWxkTmFtZSk7XHJcbiAgICAgICAgY29uc3QgaXNGaWVsZEFycmF5ID0gbmFtZXNSZWYuY3VycmVudC5hcnJheS5oYXMobmFtZSk7XHJcbiAgICAgICAgKGlzRmllbGRBcnJheSB8fCAhaXNQcmltaXRpdmUoZmllbGRWYWx1ZSkgfHwgKGZpZWxkICYmICFmaWVsZC5fZikpICYmXHJcbiAgICAgICAgICAgICFpc0RhdGVPYmplY3QoZmllbGRWYWx1ZSlcclxuICAgICAgICAgICAgPyBzZXRWYWx1ZXMoZmllbGROYW1lLCBmaWVsZFZhbHVlLCBvcHRpb25zKVxyXG4gICAgICAgICAgICA6IHNldEZpZWxkVmFsdWUoZmllbGROYW1lLCBmaWVsZFZhbHVlLCBvcHRpb25zLCB0cnVlLCAhZmllbGQpO1xyXG4gICAgfSksIFt0cmlnZ2VyXSk7XHJcbiAgICBjb25zdCBzZXRWYWx1ZSA9IChuYW1lLCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoZmllbGRzUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGlzRmllbGRBcnJheSA9IG5hbWVzUmVmLmN1cnJlbnQuYXJyYXkuaGFzKG5hbWUpO1xyXG4gICAgICAgIGlmIChpc0ZpZWxkQXJyYXkpIHtcclxuICAgICAgICAgICAgc3ViamVjdHNSZWYuY3VycmVudC5hcnJheS5uZXh0KHtcclxuICAgICAgICAgICAgICAgIHZhbHVlczogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgaXNSZXNldDogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICgocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzRGlydHkgfHxcclxuICAgICAgICAgICAgICAgIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcykgJiZcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuc2hvdWxkRGlydHkpIHtcclxuICAgICAgICAgICAgICAgIHNldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSwgc2V0RmllbGRBcnJheURpcnR5RmllbGRzKHZhbHVlLCBnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lLCBbXSksIGdldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSwgW10pKSk7XHJcbiAgICAgICAgICAgICAgICBzdWJqZWN0c1JlZi5jdXJyZW50LnN0YXRlLm5leHQoe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlydHlGaWVsZHM6IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRGlydHk6IGdldElzRGlydHkobmFtZSwgdmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIXZhbHVlLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgICAgc2V0KGZpZWxkc1JlZi5jdXJyZW50LCBuYW1lLCBbXSkgJiZcclxuICAgICAgICAgICAgICAgIHNldChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lLCBbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICgoZmllbGQgJiYgIWZpZWxkLl9mKSB8fCBpc0ZpZWxkQXJyYXkpICYmICFpc051bGxPclVuZGVmaW5lZCh2YWx1ZSlcclxuICAgICAgICAgICAgPyBzZXRWYWx1ZXMobmFtZSwgdmFsdWUsIGlzRmllbGRBcnJheSA/IHt9IDogb3B0aW9ucylcclxuICAgICAgICAgICAgOiBzZXRGaWVsZFZhbHVlKG5hbWUsIHZhbHVlLCBvcHRpb25zLCB0cnVlLCAhZmllbGQpO1xyXG4gICAgICAgIGlzRmllbGRXYXRjaGVkKG5hbWUpICYmIHN1YmplY3RzUmVmLmN1cnJlbnQuc3RhdGUubmV4dCh7fSk7XHJcbiAgICAgICAgc3ViamVjdHNSZWYuY3VycmVudC53YXRjaC5uZXh0KHsgbmFtZSwgdmFsdWVzOiBnZXRWYWx1ZXMoKSB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVWYWxpZGF0ZSA9IGFzeW5jICh0YXJnZXQsIGZpZWxkU3RhdGUsIGlzV2F0Y2hlZCwgaXNCbHVyRXZlbnQpID0+IHtcclxuICAgICAgICBsZXQgZXJyb3I7XHJcbiAgICAgICAgbGV0IGlzVmFsaWQ7XHJcbiAgICAgICAgbGV0IG5hbWUgPSB0YXJnZXQubmFtZTtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IGdldChmaWVsZHNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgaWYgKHJlc29sdmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZXJyb3JzIH0gPSBhd2FpdCByZXNvbHZlclJlZi5jdXJyZW50KGdldEZpZWxkc1ZhbHVlcyhmaWVsZHNSZWYpLCBjb250ZXh0UmVmLmN1cnJlbnQsIGdldFJlc29sdmVyT3B0aW9ucyhbbmFtZV0sIGZpZWxkc1JlZi5jdXJyZW50LCBjcml0ZXJpYU1vZGUsIHNob3VsZFVzZU5hdGl2ZVZhbGlkYXRpb24pKTtcclxuICAgICAgICAgICAgZXJyb3IgPSBnZXQoZXJyb3JzLCBuYW1lKTtcclxuICAgICAgICAgICAgaWYgKGlzQ2hlY2tCb3hJbnB1dCh0YXJnZXQpICYmICFlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Tm9kZU5hbWUgPSBnZXROb2RlUGFyZW50TmFtZShuYW1lKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRFcnJvciA9IGdldChlcnJvcnMsIHBhcmVudE5vZGVOYW1lLCB7fSk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RXJyb3IudHlwZSAmJiBjdXJyZW50RXJyb3IubWVzc2FnZSAmJiAoZXJyb3IgPSBjdXJyZW50RXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRFcnJvciB8fCBnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBwYXJlbnROb2RlTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gcGFyZW50Tm9kZU5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNWYWxpZCA9IGlzRW1wdHlPYmplY3QoZXJyb3JzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVycm9yID0gKGF3YWl0IHZhbGlkYXRlRmllbGQoZmllbGQsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBzaG91bGRVc2VOYXRpdmVWYWxpZGF0aW9uKSlbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICFpc0JsdXJFdmVudCAmJlxyXG4gICAgICAgICAgICBzdWJqZWN0c1JlZi5jdXJyZW50LndhdGNoLm5leHQoe1xyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IHRhcmdldC50eXBlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBnZXRWYWx1ZXMoKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgc2hvdWxkUmVuZGVyQmFzZU9uRXJyb3IoZmFsc2UsIG5hbWUsIGVycm9yLCBmaWVsZFN0YXRlLCBpc1ZhbGlkLCBpc1dhdGNoZWQpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jICh7IHR5cGUsIHRhcmdldCwgdGFyZ2V0OiB7IHZhbHVlLCBuYW1lLCB0eXBlOiBpbnB1dFR5cGUgfSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoZmllbGRzUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9IGlucHV0VHlwZSA/IGdldEZpZWxkVmFsdWUoZmllbGQpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBpbnB1dFZhbHVlID0gaXNVbmRlZmluZWQoaW5wdXRWYWx1ZSkgPyB2YWx1ZSA6IGlucHV0VmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQmx1ckV2ZW50ID0gdHlwZSA9PT0gRVZFTlRTLkJMVVI7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaXNPbkJsdXI6IGlzUmVWYWxpZGF0ZU9uQmx1ciwgaXNPbkNoYW5nZTogaXNSZVZhbGlkYXRlT25DaGFuZ2UsIH0gPSBnZXRWYWxpZGF0aW9uTW9kZXMocmVWYWxpZGF0ZU1vZGUpO1xyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRTa2lwVmFsaWRhdGlvbiA9ICghaGFzVmFsaWRhdGlvbihmaWVsZC5fZiwgZmllbGQuX2YubW91bnQpICYmXHJcbiAgICAgICAgICAgICAgICAhcmVzb2x2ZXIgJiZcclxuICAgICAgICAgICAgICAgICFnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lKSkgfHxcclxuICAgICAgICAgICAgICAgIHNraXBWYWxpZGF0aW9uKE9iamVjdC5hc3NpZ24oeyBpc0JsdXJFdmVudCwgaXNUb3VjaGVkOiAhIWdldChmb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkRmllbGRzLCBuYW1lKSwgaXNTdWJtaXR0ZWQ6IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzU3VibWl0dGVkLCBpc1JlVmFsaWRhdGVPbkJsdXIsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZVZhbGlkYXRlT25DaGFuZ2UgfSwgdmFsaWRhdGlvbk1vZGUpKTtcclxuICAgICAgICAgICAgY29uc3QgaXNXYXRjaGVkID0gIWlzQmx1ckV2ZW50ICYmIGlzRmllbGRXYXRjaGVkKG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGlucHV0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC5fZi52YWx1ZSA9IGlucHV0VmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZmllbGRTdGF0ZSA9IHVwZGF0ZVRvdWNoQW5kRGlydHlTdGF0ZShuYW1lLCBmaWVsZC5fZi52YWx1ZSwgaXNCbHVyRXZlbnQsIGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc3Qgc2hvdWxkUmVuZGVyID0gIWlzRW1wdHlPYmplY3QoZmllbGRTdGF0ZSkgfHwgaXNXYXRjaGVkO1xyXG4gICAgICAgICAgICBpZiAoc2hvdWxkU2tpcFZhbGlkYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICFpc0JsdXJFdmVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3RzUmVmLmN1cnJlbnQud2F0Y2gubmV4dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlczogZ2V0VmFsdWVzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHNob3VsZFJlbmRlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3RzUmVmLmN1cnJlbnQuc3RhdGUubmV4dChpc1dhdGNoZWQgPyB7IG5hbWUgfSA6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmllbGRTdGF0ZSksIHsgbmFtZSB9KSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN1YmplY3RzUmVmLmN1cnJlbnQuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBoYW5kbGVWYWxpZGF0ZSh0YXJnZXQsIGZpZWxkU3RhdGUsIGlzV2F0Y2hlZCwgaXNCbHVyRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGdldFZhbHVlcyA9IChmaWVsZE5hbWVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQpLCBnZXRGaWVsZHNWYWx1ZXMoZmllbGRzUmVmKSk7XHJcbiAgICAgICAgcmV0dXJuIGlzVW5kZWZpbmVkKGZpZWxkTmFtZXMpXHJcbiAgICAgICAgICAgID8gdmFsdWVzXHJcbiAgICAgICAgICAgIDogaXNTdHJpbmcoZmllbGROYW1lcylcclxuICAgICAgICAgICAgICAgID8gZ2V0KHZhbHVlcywgZmllbGROYW1lcylcclxuICAgICAgICAgICAgICAgIDogZmllbGROYW1lcy5tYXAoKG5hbWUpID0+IGdldCh2YWx1ZXMsIG5hbWUpKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBjbGVhckVycm9ycyA9IChuYW1lKSA9PiB7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICA/IGNvbnZlcnRUb0FycmF5UGF5bG9hZChuYW1lKS5mb3JFYWNoKChpbnB1dE5hbWUpID0+IHVuc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgaW5wdXROYW1lKSlcclxuICAgICAgICAgICAgOiAoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzID0ge30pO1xyXG4gICAgICAgIHN1YmplY3RzUmVmLmN1cnJlbnQuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgIGVycm9yczogZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHNldEVycm9yID0gKG5hbWUsIGVycm9yLCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gKChnZXQoZmllbGRzUmVmLmN1cnJlbnQsIG5hbWUpIHx8IHsgX2Y6IHt9IH0pLl9mIHx8IHt9KS5yZWY7XHJcbiAgICAgICAgc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgbmFtZSwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBlcnJvciksIHsgcmVmIH0pKTtcclxuICAgICAgICBzdWJqZWN0c1JlZi5jdXJyZW50LnN0YXRlLm5leHQoe1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBlcnJvcnM6IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycyxcclxuICAgICAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLnNob3VsZEZvY3VzICYmIHJlZiAmJiByZWYuZm9jdXMgJiYgcmVmLmZvY3VzKCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgd2F0Y2hJbnRlcm5hbCA9IFJlYWN0LnVzZUNhbGxiYWNrKChmaWVsZE5hbWVzLCBkZWZhdWx0VmFsdWUsIGlzR2xvYmFsLCBmb3JtVmFsdWVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNBcnJheU5hbWVzID0gQXJyYXkuaXNBcnJheShmaWVsZE5hbWVzKTtcclxuICAgICAgICBjb25zdCBmaWVsZFZhbHVlcyA9IGZvcm1WYWx1ZXMgfHwgaXNNb3VudGVkUmVmLmN1cnJlbnRcclxuICAgICAgICAgICAgPyBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCksIChmb3JtVmFsdWVzIHx8IGdldEZpZWxkc1ZhbHVlcyhmaWVsZHNSZWYpKSkgOiBpc1VuZGVmaW5lZChkZWZhdWx0VmFsdWUpXHJcbiAgICAgICAgICAgID8gZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50XHJcbiAgICAgICAgICAgIDogaXNBcnJheU5hbWVzXHJcbiAgICAgICAgICAgICAgICA/IGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgOiB7IFtmaWVsZE5hbWVzXTogZGVmYXVsdFZhbHVlIH07XHJcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKGZpZWxkTmFtZXMpKSB7XHJcbiAgICAgICAgICAgIGlzR2xvYmFsICYmIChuYW1lc1JlZi5jdXJyZW50LndhdGNoQWxsID0gdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmaWVsZFZhbHVlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZE5hbWUgb2YgY29udmVydFRvQXJyYXlQYXlsb2FkKGZpZWxkTmFtZXMpKSB7XHJcbiAgICAgICAgICAgIGlzR2xvYmFsICYmIG5hbWVzUmVmLmN1cnJlbnQud2F0Y2guYWRkKGZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGdldChmaWVsZFZhbHVlcywgZmllbGROYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc0FycmF5TmFtZXMgPyByZXN1bHQgOiByZXN1bHRbMF07XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCB3YXRjaCA9IChmaWVsZE5hbWUsIGRlZmF1bHRWYWx1ZSkgPT4gaXNGdW5jdGlvbihmaWVsZE5hbWUpXHJcbiAgICAgICAgPyBzdWJqZWN0c1JlZi5jdXJyZW50LndhdGNoLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgIG5leHQ6IChpbmZvKSA9PiBmaWVsZE5hbWUod2F0Y2hJbnRlcm5hbCh1bmRlZmluZWQsIGRlZmF1bHRWYWx1ZSksIGluZm8pLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgOiB3YXRjaEludGVybmFsKGZpZWxkTmFtZSwgZGVmYXVsdFZhbHVlLCB0cnVlKTtcclxuICAgIGNvbnN0IHVucmVnaXN0ZXIgPSAobmFtZSwgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpbnB1dE5hbWUgb2YgbmFtZVxyXG4gICAgICAgICAgICA/IGNvbnZlcnRUb0FycmF5UGF5bG9hZChuYW1lKVxyXG4gICAgICAgICAgICA6IG5hbWVzUmVmLmN1cnJlbnQubW91bnQpIHtcclxuICAgICAgICAgICAgbmFtZXNSZWYuY3VycmVudC5tb3VudC5kZWxldGUoaW5wdXROYW1lKTtcclxuICAgICAgICAgICAgbmFtZXNSZWYuY3VycmVudC5hcnJheS5kZWxldGUoaW5wdXROYW1lKTtcclxuICAgICAgICAgICAgaWYgKGdldChmaWVsZHNSZWYuY3VycmVudCwgaW5wdXROYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgIW9wdGlvbnMua2VlcEVycm9yICYmIHVuc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgaW5wdXROYW1lKTtcclxuICAgICAgICAgICAgICAgICFvcHRpb25zLmtlZXBWYWx1ZSAmJiB1bnNldChmaWVsZHNSZWYuY3VycmVudCwgaW5wdXROYW1lKTtcclxuICAgICAgICAgICAgICAgICFvcHRpb25zLmtlZXBEaXJ0eSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHVuc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLCBpbnB1dE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgIW9wdGlvbnMua2VlcFRvdWNoZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICB1bnNldChmb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkRmllbGRzLCBpbnB1dE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgIXNob3VsZFVucmVnaXN0ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAhb3B0aW9ucy5rZWVwRGVmYXVsdFZhbHVlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdW5zZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBpbnB1dE5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1YmplY3RzUmVmLmN1cnJlbnQud2F0Y2gubmV4dCh7XHJcbiAgICAgICAgICAgIHZhbHVlczogZ2V0VmFsdWVzKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3ViamVjdHNSZWYuY3VycmVudC5zdGF0ZS5uZXh0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZm9ybVN0YXRlUmVmLmN1cnJlbnQpLCAoIW9wdGlvbnMua2VlcERpcnR5ID8ge30gOiB7IGlzRGlydHk6IGdldElzRGlydHkoKSB9KSkpO1xyXG4gICAgICAgICFvcHRpb25zLmtlZXBJc1ZhbGlkICYmIHVwZGF0ZUlzVmFsaWQoKTtcclxuICAgIH07XHJcbiAgICBjb25zdCByZWdpc3RlckZpZWxkUmVmID0gKG5hbWUsIHJlZiwgb3B0aW9ucykgPT4ge1xyXG4gICAgICAgIHJlZ2lzdGVyKG5hbWUsIG9wdGlvbnMpO1xyXG4gICAgICAgIGxldCBmaWVsZCA9IGdldChmaWVsZHNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgY29uc3QgaXNSYWRpb09yQ2hlY2tib3ggPSBpc1JhZGlvT3JDaGVja2JveEZ1bmN0aW9uKHJlZik7XHJcbiAgICAgICAgaWYgKHJlZiA9PT0gZmllbGQuX2YucmVmIHx8XHJcbiAgICAgICAgICAgIChpc1JhZGlvT3JDaGVja2JveCAmJlxyXG4gICAgICAgICAgICAgICAgY29tcGFjdChmaWVsZC5fZi5yZWZzIHx8IFtdKS5maW5kKChvcHRpb24pID0+IG9wdGlvbiA9PT0gcmVmKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaWVsZCA9IHtcclxuICAgICAgICAgICAgX2Y6IGlzUmFkaW9PckNoZWNrYm94XHJcbiAgICAgICAgICAgICAgICA/IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmllbGQuX2YpLCB7IHJlZnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY29tcGFjdChmaWVsZC5fZi5yZWZzIHx8IFtdKS5maWx0ZXIoKHJlZikgPT4gaXNIVE1MRWxlbWVudChyZWYpICYmIGRvY3VtZW50LmNvbnRhaW5zKHJlZikpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWYsXHJcbiAgICAgICAgICAgICAgICAgICAgXSwgcmVmOiB7IHR5cGU6IHJlZi50eXBlLCBuYW1lIH0gfSkgOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZpZWxkLl9mKSwgeyByZWYgfSksXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXQoZmllbGRzUmVmLmN1cnJlbnQsIG5hbWUsIGZpZWxkKTtcclxuICAgICAgICB1cGRhdGVJc1ZhbGlkQW5kSW5wdXRWYWx1ZShuYW1lLCByZWYpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlZ2lzdGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKG5hbWUsIG9wdGlvbnMgPSB7fSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KGZpZWxkc1JlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgICAgICBzZXQoZmllbGRzUmVmLmN1cnJlbnQsIG5hbWUsIHtcclxuICAgICAgICAgICAgX2Y6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCAoZmllbGQgJiYgZmllbGQuX2YgPyBmaWVsZC5fZiA6IHsgcmVmOiB7IG5hbWUgfSB9KSksIHsgbmFtZSwgbW91bnQ6IHRydWUgfSksIG9wdGlvbnMpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG5hbWVzUmVmLmN1cnJlbnQubW91bnQuYWRkKG5hbWUpO1xyXG4gICAgICAgICFmaWVsZCAmJiB1cGRhdGVJc1ZhbGlkQW5kSW5wdXRWYWx1ZShuYW1lLCB1bmRlZmluZWQsIHRydWUpO1xyXG4gICAgICAgIHJldHVybiBpc1dpbmRvd1VuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IHsgbmFtZTogbmFtZSB9XHJcbiAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICBvbkJsdXI6IGhhbmRsZUNoYW5nZSxcclxuICAgICAgICAgICAgICAgIHJlZjogKHJlZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJGaWVsZFJlZihuYW1lLCByZWYsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoZmllbGRzUmVmLmN1cnJlbnQsIG5hbWUsIHt9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvdWxkVW5tb3VudCA9IHNob3VsZFVucmVnaXN0ZXIgfHwgb3B0aW9ucy5zaG91bGRVbnJlZ2lzdGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuX2YpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLl9mLm1vdW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpbml0aWFsIHN0YXRlIG9mIGZpZWxkIGVsZW1lbnQgaXMgZGlzYWJsZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZSBpcyBub3Qgc2V0IG9uIGZpcnN0IFwicmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmUtc3luYyB0aGUgdmFsdWUgaW4gd2hlbiBpdCBzd2l0Y2hlZCB0byBlbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNVbmRlZmluZWQoZmllbGQuX2YudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuX2YudmFsdWUgPSBmaWVsZC5fZi5yZWYudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkVW5tb3VudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIShpc05hbWVJbkZpZWxkQXJyYXkobmFtZXNSZWYuY3VycmVudC5hcnJheSwgbmFtZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbkZpZWxkQXJyYXlBY3Rpb25SZWYuY3VycmVudCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzUmVmLmN1cnJlbnQudW5Nb3VudC5hZGQobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IFJlYWN0LnVzZUNhbGxiYWNrKChvblZhbGlkLCBvbkludmFsaWQpID0+IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCAmJiBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUucGVyc2lzdCAmJiBlLnBlcnNpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGhhc05vUHJvbWlzZUVycm9yID0gdHJ1ZTtcclxuICAgICAgICBsZXQgZmllbGRWYWx1ZXMgPSBnZXRGaWVsZHNWYWx1ZXMoZmllbGRzUmVmKTtcclxuICAgICAgICBzdWJqZWN0c1JlZi5jdXJyZW50LnN0YXRlLm5leHQoe1xyXG4gICAgICAgICAgICBpc1N1Ym1pdHRpbmc6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHJlc29sdmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9ycywgdmFsdWVzIH0gPSBhd2FpdCByZXNvbHZlclJlZi5jdXJyZW50KGZpZWxkVmFsdWVzLCBjb250ZXh0UmVmLmN1cnJlbnQsIGdldFJlc29sdmVyT3B0aW9ucyhuYW1lc1JlZi5jdXJyZW50Lm1vdW50LCBmaWVsZHNSZWYuY3VycmVudCwgY3JpdGVyaWFNb2RlLCBzaG91bGRVc2VOYXRpdmVWYWxpZGF0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMgPSBlcnJvcnM7XHJcbiAgICAgICAgICAgICAgICBmaWVsZFZhbHVlcyA9IHZhbHVlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHZhbGlkYXRlRm9ybShmaWVsZHNSZWYuY3VycmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzRW1wdHlPYmplY3QoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzKSAmJlxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzKS5ldmVyeSgobmFtZSkgPT4gZ2V0KGZpZWxkVmFsdWVzLCBuYW1lKSkpIHtcclxuICAgICAgICAgICAgICAgIHN1YmplY3RzUmVmLmN1cnJlbnQuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IG9uVmFsaWQoZmllbGRWYWx1ZXMsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb25JbnZhbGlkICYmIChhd2FpdCBvbkludmFsaWQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBlKSk7XHJcbiAgICAgICAgICAgICAgICBzaG91bGRGb2N1c0Vycm9yICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNGaWVsZEJ5KGZpZWxkc1JlZi5jdXJyZW50LCAoa2V5KSA9PiBnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBrZXkpLCBuYW1lc1JlZi5jdXJyZW50Lm1vdW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGhhc05vUHJvbWlzZUVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzU3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgc3ViamVjdHNSZWYuY3VycmVudC5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgICAgIGlzU3VibWl0dGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXNTdWJtaXR0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzU3VibWl0U3VjY2Vzc2Z1bDogaXNFbXB0eU9iamVjdChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMpICYmIGhhc05vUHJvbWlzZUVycm9yLFxyXG4gICAgICAgICAgICAgICAgc3VibWl0Q291bnQ6IGZvcm1TdGF0ZVJlZi5jdXJyZW50LnN1Ym1pdENvdW50ICsgMSxcclxuICAgICAgICAgICAgICAgIGVycm9yczogZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXHJcbiAgICAgICAgc2hvdWxkRm9jdXNFcnJvcixcclxuICAgICAgICBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSxcclxuICAgICAgICBjcml0ZXJpYU1vZGUsXHJcbiAgICAgICAgc2hvdWxkVXNlTmF0aXZlVmFsaWRhdGlvbixcclxuICAgIF0pO1xyXG4gICAgY29uc3QgcmVnaXN0ZXJBYnNlbnRGaWVsZHMgPSAoZGVmYXVsdFZhbHVlcywgbmFtZSA9ICcnKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGVmYXVsdFZhbHVlcykge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRlZmF1bHRWYWx1ZXNba2V5XTtcclxuICAgICAgICAgICAgY29uc3QgZmllbGROYW1lID0gbmFtZSArIChuYW1lID8gJy4nIDogJycpICsga2V5O1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGdldChmaWVsZHNSZWYuY3VycmVudCwgZmllbGROYW1lKTtcclxuICAgICAgICAgICAgaWYgKCFmaWVsZCB8fCAhZmllbGQuX2YpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc09iamVjdCh2YWx1ZSkgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlckFic2VudEZpZWxkcyh2YWx1ZSwgZmllbGROYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyKGZpZWxkTmFtZSwgeyB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCByZXNldCA9ICh2YWx1ZXMsIGtlZXBTdGF0ZU9wdGlvbnMgPSB7fSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRWYWx1ZXMgPSB2YWx1ZXMgfHwgZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50O1xyXG4gICAgICAgIGlmIChpc1dlYiAmJiAha2VlcFN0YXRlT3B0aW9ucy5rZWVwVmFsdWVzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBuYW1lc1JlZi5jdXJyZW50Lm1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IGdldChmaWVsZHNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQgJiYgZmllbGQuX2YpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFJlZiA9IEFycmF5LmlzQXJyYXkoZmllbGQuX2YucmVmcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWVsZC5fZi5yZWZzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGQuX2YucmVmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSFRNTEVsZW1lbnQoaW5wdXRSZWYpICYmIGlucHV0UmVmLmNsb3Nlc3QoJ2Zvcm0nKS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKF9hKSB7IH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWtlZXBTdGF0ZU9wdGlvbnMua2VlcERlZmF1bHRWYWx1ZXMpIHtcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50ID0gT2JqZWN0LmFzc2lnbih7fSwgdXBkYXRlZFZhbHVlcyk7XHJcbiAgICAgICAgICAgIGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQgPSBPYmplY3QuYXNzaWduKHt9LCB1cGRhdGVkVmFsdWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFrZWVwU3RhdGVPcHRpb25zLmtlZXBWYWx1ZXMpIHtcclxuICAgICAgICAgICAgZmllbGRzUmVmLmN1cnJlbnQgPSB7fTtcclxuICAgICAgICAgICAgc3ViamVjdHNSZWYuY3VycmVudC5jb250cm9sLm5leHQoe1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBrZWVwU3RhdGVPcHRpb25zLmtlZXBEZWZhdWx0VmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgPyBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnRcclxuICAgICAgICAgICAgICAgICAgICA6IE9iamVjdC5hc3NpZ24oe30sIHVwZGF0ZWRWYWx1ZXMpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3ViamVjdHNSZWYuY3VycmVudC53YXRjaC5uZXh0KHtcclxuICAgICAgICAgICAgICAgIHZhbHVlczogT2JqZWN0LmFzc2lnbih7fSwgdXBkYXRlZFZhbHVlcyksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzdWJqZWN0c1JlZi5jdXJyZW50LmFycmF5Lm5leHQoe1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBPYmplY3QuYXNzaWduKHt9LCB1cGRhdGVkVmFsdWVzKSxcclxuICAgICAgICAgICAgICAgIGlzUmVzZXQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuYW1lc1JlZi5jdXJyZW50ID0ge1xyXG4gICAgICAgICAgICBtb3VudDogbmV3IFNldCgpLFxyXG4gICAgICAgICAgICB1bk1vdW50OiBuZXcgU2V0KCksXHJcbiAgICAgICAgICAgIGFycmF5OiBuZXcgU2V0KCksXHJcbiAgICAgICAgICAgIHdhdGNoOiBuZXcgU2V0KCksXHJcbiAgICAgICAgICAgIHdhdGNoQWxsOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN1YmplY3RzUmVmLmN1cnJlbnQuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdENvdW50OiBrZWVwU3RhdGVPcHRpb25zLmtlZXBTdWJtaXRDb3VudFxyXG4gICAgICAgICAgICAgICAgPyBmb3JtU3RhdGVSZWYuY3VycmVudC5zdWJtaXRDb3VudFxyXG4gICAgICAgICAgICAgICAgOiAwLFxyXG4gICAgICAgICAgICBpc0RpcnR5OiBrZWVwU3RhdGVPcHRpb25zLmtlZXBEaXJ0eVxyXG4gICAgICAgICAgICAgICAgPyBmb3JtU3RhdGVSZWYuY3VycmVudC5pc0RpcnR5XHJcbiAgICAgICAgICAgICAgICA6IGtlZXBTdGF0ZU9wdGlvbnMua2VlcERlZmF1bHRWYWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICA/IGRlZXBFcXVhbCh2YWx1ZXMsIGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudClcclxuICAgICAgICAgICAgICAgICAgICA6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1N1Ym1pdHRlZDoga2VlcFN0YXRlT3B0aW9ucy5rZWVwSXNTdWJtaXR0ZWRcclxuICAgICAgICAgICAgICAgID8gZm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNTdWJtaXR0ZWRcclxuICAgICAgICAgICAgICAgIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpcnR5RmllbGRzOiBrZWVwU3RhdGVPcHRpb25zLmtlZXBEaXJ0eVxyXG4gICAgICAgICAgICAgICAgPyBmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgOiB7fSxcclxuICAgICAgICAgICAgdG91Y2hlZEZpZWxkczoga2VlcFN0YXRlT3B0aW9ucy5rZWVwVG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyBmb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkRmllbGRzXHJcbiAgICAgICAgICAgICAgICA6IHt9LFxyXG4gICAgICAgICAgICBlcnJvcnM6IGtlZXBTdGF0ZU9wdGlvbnMua2VlcEVycm9ycyA/IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycyA6IHt9LFxyXG4gICAgICAgICAgICBpc1N1Ym1pdHRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1N1Ym1pdFN1Y2Nlc3NmdWw6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlzTW91bnRlZFJlZi5jdXJyZW50ID0gISFrZWVwU3RhdGVPcHRpb25zLmtlZXBJc1ZhbGlkO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHNldEZvY3VzID0gKG5hbWUpID0+IGdldChmaWVsZHNSZWYuY3VycmVudCwgbmFtZSkuX2YucmVmLmZvY3VzKCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZvcm1TdGF0ZVN1YnNjcmlwdGlvbiA9IHN1YmplY3RzUmVmLmN1cnJlbnQuc3RhdGUuc3Vic2NyaWJlKHtcclxuICAgICAgICAgICAgbmV4dChmb3JtU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzaG91bGRSZW5kZXJGb3JtU3RhdGUoZm9ybVN0YXRlLCByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQsIHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybVN0YXRlUmVmLmN1cnJlbnQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZvcm1TdGF0ZVJlZi5jdXJyZW50KSwgZm9ybVN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtU3RhdGUoZm9ybVN0YXRlUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHVzZUZpZWxkQXJyYXlTdWJzY3JpcHRpb24gPSBzdWJqZWN0c1JlZi5jdXJyZW50LmFycmF5LnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgIG5leHQoc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS52YWx1ZXMgJiYgc3RhdGUubmFtZSAmJiByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IGdldEZpZWxkc1ZhbHVlcyhmaWVsZHNSZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldCh2YWx1ZXMsIHN0YXRlLm5hbWUsIHN0YXRlLnZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlSXNWYWxpZCh2YWx1ZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1TdGF0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICB1c2VGaWVsZEFycmF5U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdW5yZWdpc3RlckZpZWxkTmFtZXMgPSBbXTtcclxuICAgICAgICBjb25zdCBpc0xpdmVJbkRvbSA9IChyZWYpID0+ICFpc0hUTUxFbGVtZW50KHJlZikgfHwgIWRvY3VtZW50LmNvbnRhaW5zKHJlZik7XHJcbiAgICAgICAgaWYgKCFpc01vdW50ZWRSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBpc01vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkICYmIHVwZGF0ZUlzVmFsaWQoKTtcclxuICAgICAgICAgICAgIXNob3VsZFVucmVnaXN0ZXIgJiYgcmVnaXN0ZXJBYnNlbnRGaWVsZHMoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIG5hbWVzUmVmLmN1cnJlbnQudW5Nb3VudCkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGdldChmaWVsZHNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgICAgIGZpZWxkICYmXHJcbiAgICAgICAgICAgICAgICAoZmllbGQuX2YucmVmc1xyXG4gICAgICAgICAgICAgICAgICAgID8gZmllbGQuX2YucmVmcy5ldmVyeShpc0xpdmVJbkRvbSlcclxuICAgICAgICAgICAgICAgICAgICA6IGlzTGl2ZUluRG9tKGZpZWxkLl9mLnJlZikpICYmXHJcbiAgICAgICAgICAgICAgICB1bnJlZ2lzdGVyRmllbGROYW1lcy5wdXNoKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bnJlZ2lzdGVyRmllbGROYW1lcy5sZW5ndGggJiZcclxuICAgICAgICAgICAgdW5yZWdpc3Rlcih1bnJlZ2lzdGVyRmllbGROYW1lcyk7XHJcbiAgICAgICAgbmFtZXNSZWYuY3VycmVudC51bk1vdW50ID0gbmV3IFNldCgpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnRyb2w6IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcclxuICAgICAgICAgICAgcmVnaXN0ZXIsXHJcbiAgICAgICAgICAgIGluRmllbGRBcnJheUFjdGlvblJlZixcclxuICAgICAgICAgICAgZ2V0SXNEaXJ0eSxcclxuICAgICAgICAgICAgc3ViamVjdHNSZWYsXHJcbiAgICAgICAgICAgIHdhdGNoSW50ZXJuYWwsXHJcbiAgICAgICAgICAgIGZpZWxkc1JlZixcclxuICAgICAgICAgICAgdXBkYXRlSXNWYWxpZCxcclxuICAgICAgICAgICAgbmFtZXNSZWYsXHJcbiAgICAgICAgICAgIHJlYWRGb3JtU3RhdGVSZWYsXHJcbiAgICAgICAgICAgIGZvcm1TdGF0ZVJlZixcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlc1JlZixcclxuICAgICAgICAgICAgZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYsXHJcbiAgICAgICAgICAgIHNldFZhbHVlcyxcclxuICAgICAgICAgICAgdW5yZWdpc3RlcixcclxuICAgICAgICAgICAgc2hvdWxkVW5tb3VudDogc2hvdWxkVW5yZWdpc3RlcixcclxuICAgICAgICB9KSwgW10pLFxyXG4gICAgICAgIGZvcm1TdGF0ZTogZ2V0UHJveHlGb3JtU3RhdGUoaXNQcm94eUVuYWJsZWQsIGZvcm1TdGF0ZSwgcmVhZEZvcm1TdGF0ZVJlZiksXHJcbiAgICAgICAgdHJpZ2dlcixcclxuICAgICAgICByZWdpc3RlcixcclxuICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgd2F0Y2g6IFJlYWN0LnVzZUNhbGxiYWNrKHdhdGNoLCBbXSksXHJcbiAgICAgICAgc2V0VmFsdWU6IFJlYWN0LnVzZUNhbGxiYWNrKHNldFZhbHVlLCBbc2V0VmFsdWVzXSksXHJcbiAgICAgICAgZ2V0VmFsdWVzOiBSZWFjdC51c2VDYWxsYmFjayhnZXRWYWx1ZXMsIFtdKSxcclxuICAgICAgICByZXNldDogUmVhY3QudXNlQ2FsbGJhY2socmVzZXQsIFtdKSxcclxuICAgICAgICBjbGVhckVycm9yczogUmVhY3QudXNlQ2FsbGJhY2soY2xlYXJFcnJvcnMsIFtdKSxcclxuICAgICAgICB1bnJlZ2lzdGVyOiBSZWFjdC51c2VDYWxsYmFjayh1bnJlZ2lzdGVyLCBbXSksXHJcbiAgICAgICAgc2V0RXJyb3I6IFJlYWN0LnVzZUNhbGxiYWNrKHNldEVycm9yLCBbXSksXHJcbiAgICAgICAgc2V0Rm9jdXM6IFJlYWN0LnVzZUNhbGxiYWNrKHNldEZvY3VzLCBbXSksXHJcbiAgICB9O1xyXG59XG5cbmZ1bmN0aW9uIHVzZVdhdGNoKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IGNvbnRyb2wsIG5hbWUsIGRlZmF1bHRWYWx1ZSB9ID0gcHJvcHMgfHwge307XHJcbiAgICBjb25zdCBtZXRob2RzID0gdXNlRm9ybUNvbnRleHQoKTtcclxuICAgIGNvbnN0IG5hbWVSZWYgPSBSZWFjdC51c2VSZWYobmFtZSk7XHJcbiAgICBuYW1lUmVmLmN1cnJlbnQgPSBuYW1lO1xyXG4gICAgY29uc3QgeyB3YXRjaEludGVybmFsLCBzdWJqZWN0c1JlZiB9ID0gY29udHJvbCB8fCBtZXRob2RzLmNvbnRyb2w7XHJcbiAgICBjb25zdCBbdmFsdWUsIHVwZGF0ZVZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGlzVW5kZWZpbmVkKGRlZmF1bHRWYWx1ZSlcclxuICAgICAgICA/IHdhdGNoSW50ZXJuYWwobmFtZSlcclxuICAgICAgICA6IGRlZmF1bHRWYWx1ZSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdhdGNoSW50ZXJuYWwobmFtZSk7XHJcbiAgICAgICAgY29uc3Qgd2F0Y2hTdWJzY3JpcHRpb24gPSBzdWJqZWN0c1JlZi5jdXJyZW50LndhdGNoLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgIG5leHQ6ICh7IG5hbWU6IGlucHV0TmFtZSwgdmFsdWVzIH0pID0+ICghbmFtZVJlZi5jdXJyZW50IHx8XHJcbiAgICAgICAgICAgICAgICAhaW5wdXROYW1lIHx8XHJcbiAgICAgICAgICAgICAgICBjb252ZXJ0VG9BcnJheVBheWxvYWQobmFtZVJlZi5jdXJyZW50KS5zb21lKChmaWVsZE5hbWUpID0+IGlucHV0TmFtZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChmaWVsZE5hbWUuc3RhcnRzV2l0aChpbnB1dE5hbWUpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0TmFtZS5zdGFydHNXaXRoKGZpZWxkTmFtZSkpKSkgJiZcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlKHdhdGNoSW50ZXJuYWwobmFtZVJlZi5jdXJyZW50LCBkZWZhdWx0VmFsdWUsIGZhbHNlLCB2YWx1ZXMpKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gd2F0Y2hTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxuXG5leHBvcnQgeyBDb250cm9sbGVyLCBGb3JtUHJvdmlkZXIsIGFwcGVuZEVycm9ycywgZ2V0LCBzZXQsIHVzZUNvbnRyb2xsZXIsIHVzZUZpZWxkQXJyYXksIHVzZUZvcm0sIHVzZUZvcm1Db250ZXh0LCB1c2VGb3JtU3RhdGUsIHVzZVdhdGNoIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iXSwic291cmNlUm9vdCI6IiJ9