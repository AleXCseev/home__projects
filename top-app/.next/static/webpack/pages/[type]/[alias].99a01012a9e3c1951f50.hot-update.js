webpackHotUpdate_N_E("pages/[type]/[alias]",{

/***/ "./components/Product/Product.tsx":
/*!****************************************!*\
  !*** ./components/Product/Product.tsx ***!
  \****************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.module.css */ "./components/Product/Product.module.css");
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Product_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .. */ "./components/index.ts");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/helpers */ "./helpers/helpers.tsx");



var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\Product\\Product.tsx",
    _this = undefined;





var Product = function Product(_ref) {
  var _product$reviewAvg;

  var product = _ref.product,
      className = _ref.className,
      props = Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["product", "className"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.product,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "https://courses-top.ru" + product.image,
        alt: product.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
      children: product.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.price,
      children: [Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_5__["priceRu"])(product.price), product.oldPrice && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Tag"], {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.oldPrice,
        color: "green",
        children: Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_5__["priceRu"])(product.price - product.oldPrice)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 26
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.credit,
      children: [Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_5__["priceRu"])(product.credit), "/", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.month,
        children: "\u043C\u0435\u0441"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 31
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.raiting,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Raiting"], {
        raiting: (_product$reviewAvg = product.reviewAvg) !== null && _product$reviewAvg !== void 0 ? _product$reviewAvg : product.initialRaiting
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tags,
      children: product.categories.map(function (c) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Tag"], {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.category,
          color: "ghost",
          children: c
        }, c, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 35
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.priceTitle,
      children: "\u0446\u0435\u043D\u0430"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.creditTitle,
      children: "\u043A\u0440\u0435\u0434\u0438\u0442"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.rateTitle,
      children: [product.reviewCount, " ", Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_5__["declOfNum"])(product.reviewCount, ["отзыв", "отзыва", "отзывов"])]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.hr
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,
      children: product.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.feature,
      children: product.characteristics.map(function (c) {
        /*#__PURE__*/
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.characteristics
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.advBlock,
      children: [product.advantages && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.advantages,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.advTitle,
          children: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 7
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: product.advantages
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 28
      }, _this), product.disadvantages && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.disadvantages,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.advTitle,
          children: "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043A\u0438"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 7
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: product.disadvantages
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 31
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.hr
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Button"], {
        appearance: "primary",
        children: "\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Button"], {
        appearance: "ghost",
        arrow: 'right',
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.reviewButton,
        children: "\u0427\u0438\u0442\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432\u044B"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }, _this);
};
_c = Product;

var _c;

$RefreshReg$(_c, "Product");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0L1Byb2R1Y3QudHN4Il0sIm5hbWVzIjpbIlByb2R1Y3QiLCJwcm9kdWN0IiwiY2xhc3NOYW1lIiwicHJvcHMiLCJzdHlsZXMiLCJsb2dvIiwicHJvY2VzcyIsImltYWdlIiwidGl0bGUiLCJwcmljZSIsInByaWNlUnUiLCJvbGRQcmljZSIsImNyZWRpdCIsIm1vbnRoIiwicmFpdGluZyIsInJldmlld0F2ZyIsImluaXRpYWxSYWl0aW5nIiwidGFncyIsImNhdGVnb3JpZXMiLCJtYXAiLCJjIiwiY2F0ZWdvcnkiLCJwcmljZVRpdGxlIiwiY3JlZGl0VGl0bGUiLCJyYXRlVGl0bGUiLCJyZXZpZXdDb3VudCIsImRlY2xPZk51bSIsImhyIiwiZGVzY3JpcHRpb24iLCJmZWF0dXJlIiwiY2hhcmFjdGVyaXN0aWNzIiwiYWR2QmxvY2siLCJhZHZhbnRhZ2VzIiwiYWR2VGl0bGUiLCJkaXNhZHZhbnRhZ2VzIiwiYWN0aW9ucyIsInJldmlld0J1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFpRTtBQUFBOztBQUFBLE1BQTlEQyxPQUE4RCxRQUE5REEsT0FBOEQ7QUFBQSxNQUFyREMsU0FBcUQsUUFBckRBLFNBQXFEO0FBQUEsTUFBdkNDLEtBQXVDOztBQUN2RixzQkFDQyxxRUFBQyxzQ0FBRDtBQUFNLGFBQVMsRUFBRUMsMERBQU0sQ0FBQ0gsT0FBeEI7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBRUcsMERBQU0sQ0FBQ0MsSUFBdkI7QUFBQSw2QkFDQztBQUFLLFdBQUcsRUFBRUMsd0JBQUEsR0FBaUNMLE9BQU8sQ0FBQ00sS0FBbkQ7QUFBMEQsV0FBRyxFQUFFTixPQUFPLENBQUNPO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtB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RkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBNERBLENBN0RNO0tBQU1wQyxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1t0eXBlXS9bYWxpYXNdLjk5YTAxMDEyYTllM2MxOTUxZjUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0UHJvcHMgfSBmcm9tIFwiLi9Qcm9kdWN0LnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUHJvZHVjdC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgRGl2aWRlciwgUmFpdGluZywgVGFnIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IGRlY2xPZk51bSwgcHJpY2VSdSB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0ID0gKHsgcHJvZHVjdCwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBQcm9kdWN0UHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxDYXJkIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3R9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG5cdFx0XHRcdDxpbWcgc3JjPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ET01BSU4gKyBwcm9kdWN0LmltYWdlfSBhbHQ9e3Byb2R1Y3QudGl0bGV9IC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuXHRcdFx0XHR7cHJvZHVjdC50aXRsZX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpY2V9PlxyXG5cdFx0XHRcdHtwcmljZVJ1KHByb2R1Y3QucHJpY2UpfVxyXG5cdFx0XHRcdHtwcm9kdWN0Lm9sZFByaWNlICYmIDxUYWcgY2xhc3NOYW1lPXtzdHlsZXMub2xkUHJpY2V9IGNvbG9yPVwiZ3JlZW5cIj57cHJpY2VSdShwcm9kdWN0LnByaWNlIC0gcHJvZHVjdC5vbGRQcmljZSl9PC9UYWc+fVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVkaXR9PlxyXG5cdFx0XHRcdHtwcmljZVJ1KHByb2R1Y3QuY3JlZGl0KX0vPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubW9udGh9PtC80LXRgTwvc3Bhbj5cdFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYWl0aW5nfT5cclxuXHRcdFx0XHQ8UmFpdGluZyByYWl0aW5nPXtwcm9kdWN0LnJldmlld0F2ZyA/PyBwcm9kdWN0LmluaXRpYWxSYWl0aW5nfT48L1JhaXRpbmc+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhZ3N9PlxyXG5cdFx0XHRcdHtwcm9kdWN0LmNhdGVnb3JpZXMubWFwKCBjID0+IDxUYWcga2V5PXtjfSBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeX0gY29sb3I9XCJnaG9zdFwiPntjfTwvVGFnPil9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByaWNlVGl0bGV9PlxyXG5cdFx0XHRcdNGG0LXQvdCwXHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWRpdFRpdGxlfT5cclxuXHRcdFx0XHTQutGA0LXQtNC40YJcclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmF0ZVRpdGxlfT5cclxuXHRcdFx0XHR7cHJvZHVjdC5yZXZpZXdDb3VudH0ge2RlY2xPZk51bShwcm9kdWN0LnJldmlld0NvdW50LCBbXCLQvtGC0LfRi9CyXCIsIFwi0L7RgtC30YvQstCwXCIsIFwi0L7RgtC30YvQstC+0LJcIl0pfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PERpdmlkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaHJ9PjwvRGl2aWRlcj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcblx0XHRcdFx0e3Byb2R1Y3QuZGVzY3JpcHRpb259XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmV9PlxyXG5cdFx0XHRcdHtwcm9kdWN0LmNoYXJhY3RlcmlzdGljcy5tYXAoYyA9PiB7XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJhY3RlcmlzdGljc30+XHJcblxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0fSl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkdkJsb2NrfT5cclxuXHRcdFx0XHR7cHJvZHVjdC5hZHZhbnRhZ2VzICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWR2YW50YWdlc30+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWR2VGl0bGV9PtCf0YDQtdC40LzRg9GJ0LXRgdGC0LLQsDwvZGl2Plx0XHJcblx0XHRcdFx0XHRcdDxkaXY+e3Byb2R1Y3QuYWR2YW50YWdlc308L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR7cHJvZHVjdC5kaXNhZHZhbnRhZ2VzICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGlzYWR2YW50YWdlc30+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWR2VGl0bGV9PtCd0LXQtNC+0YHRgtCw0YLQutC4PC9kaXY+XHRcclxuXHRcdFx0XHRcdFx0PGRpdj57cHJvZHVjdC5kaXNhZHZhbnRhZ2VzfTwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PERpdmlkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaHJ9PjwvRGl2aWRlcj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zfT5cclxuXHRcdFx0XHQ8QnV0dG9uIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCI+0KPQt9C90LDRgtGMINC/0L7QtNGA0L7QsdC90LXQtTwvQnV0dG9uPlxyXG5cdFx0XHRcdDxCdXR0b24gYXBwZWFyYW5jZT1cImdob3N0XCIgYXJyb3c9eydyaWdodCd9IGNsYXNzTmFtZT17c3R5bGVzLnJldmlld0J1dHRvbn0+0KfQuNGC0LDRgtGMINC+0YLQt9GL0LLRizwvQnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvQ2FyZD5cclxuXHQpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9