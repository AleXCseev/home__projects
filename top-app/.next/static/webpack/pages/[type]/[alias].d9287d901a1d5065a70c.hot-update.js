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
/* harmony import */ var C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.module.css */ "./components/Product/Product.module.css");
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Product_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .. */ "./components/index.ts");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/helpers */ "./helpers/helpers.tsx");



var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\components\\Product\\Product.tsx",
    _this = undefined;





var Product = function Product(_ref) {
  var _product$reviewAvg;

  var product = _ref.product,
      className = _ref.className,
      props = Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["product", "className"]);

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
      children: [product.reviewCount, " \u043E\u0442\u0437\u044B\u0432\u043E\u0432"]
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
      children: "\u0444\u0438\u0447\u0438"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.advBlock,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.advantages,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.advTitle,
          children: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: product.advantages
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, _this), product.disadvantages, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.disadvantages,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.advTitle,
          children: "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043A\u0438"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: product.disadvantages
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 28
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.hr
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Button"], {
        appearance: "primary",
        children: "\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Button"], {
        appearance: "ghost",
        arrow: 'right',
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.reviewButton,
        children: "\u0427\u0438\u0442\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432\u044B"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0L1Byb2R1Y3QudHN4Il0sIm5hbWVzIjpbIlByb2R1Y3QiLCJwcm9kdWN0IiwiY2xhc3NOYW1lIiwicHJvcHMiLCJzdHlsZXMiLCJsb2dvIiwicHJvY2VzcyIsImltYWdlIiwidGl0bGUiLCJwcmljZSIsInByaWNlUnUiLCJvbGRQcmljZSIsImNyZWRpdCIsIm1vbnRoIiwicmFpdGluZyIsInJldmlld0F2ZyIsImluaXRpYWxSYWl0aW5nIiwidGFncyIsImNhdGVnb3JpZXMiLCJtYXAiLCJjIiwiY2F0ZWdvcnkiLCJwcmljZVRpdGxlIiwiY3JlZGl0VGl0bGUiLCJyYXRlVGl0bGUiLCJyZXZpZXdDb3VudCIsImhyIiwiZGVzY3JpcHRpb24iLCJmZWF0dXJlIiwiYWR2QmxvY2siLCJhZHZhbnRhZ2VzIiwiYWR2VGl0bGUiLCJkaXNhZHZhbnRhZ2VzIiwiYWN0aW9ucyIsInJldmlld0J1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFpRTtBQUFBOztBQUFBLE1BQTlEQyxPQUE4RCxRQUE5REEsT0FBOEQ7QUFBQSxNQUFyREMsU0FBcUQsUUFBckRBLFNBQXFEO0FBQUEsTUFBdkNDLEtBQXVDOztBQUN2RixzQkFDQyxxRUFBQyxzQ0FBRDtBQUFNLGFBQVMsRUFBRUMsMERBQU0sQ0FBQ0gsT0FBeEI7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBRUcsMERBQU0sQ0FBQ0MsSUFBdkI7QUFBQSw2QkFDQztBQUFLLFdBQUcsRUFBRUMsd0JBQUEsR0FBaUNMLE9BQU8sQ0FBQ00sS0FBbkQ7QUFBMEQsV0FBRyxFQUFFTixPQUFPLENBQUNPO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFJQztBQUFLLGVBQVMsRUFBRUos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RCxFQUtFN0IsT0FBTyxDQUFDK0IsYUFMVixlQUt3QjtBQUFLLGlCQUFTLEVBQUU1QiwwREFBTSxDQUFDNEIsYUFBdkI7QUFBQSxnQ0FDdEI7QUFBSyxtQkFBUyxFQUFFNUIsMERBQU0sQ0FBQzJCLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURzQixlQUV0QjtBQUFBLG9CQUFNOUIsT0FBTyxDQUFDK0I7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcENELGVBOENDLHFFQUFDLHlDQUFEO0FBQVMsZUFBUyxFQUFFNUIsMERBQU0sQ0FBQ3NCO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5Q0QsZUErQ0M7QUFBSyxlQUFTLEVBQUV0QiwwREFBTSxDQUFDNkIsT0FBdkI7QUFBQSw4QkFDQyxxRUFBQyx3Q0FBRDtBQUFRLGtCQUFVLEVBQUMsU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDLHFFQUFDLHdDQUFEO0FBQVEsa0JBQVUsRUFBQyxPQUFuQjtBQUEyQixhQUFLLEVBQUUsT0FBbEM7QUFBMkMsaUJBQVMsRUFBRTdCLDBEQUFNLENBQUM4QixZQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9DRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXNEQSxDQXZETTtLQUFNbEMsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bdHlwZV0vW2FsaWFzXS5kOTI4N2Q5MDFhMWQ1MDY1YTcwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdFByb3BzIH0gZnJvbSBcIi4vUHJvZHVjdC5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1Byb2R1Y3QubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIERpdmlkZXIsIFJhaXRpbmcsIFRhZyB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBwcmljZVJ1IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3QgPSAoeyBwcm9kdWN0LCBjbGFzc05hbWUsIC4uLnByb3BzIH06IFByb2R1Y3RQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PENhcmQgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdH0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XHJcblx0XHRcdFx0PGltZyBzcmM9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RPTUFJTiArIHByb2R1Y3QuaW1hZ2V9IGFsdD17cHJvZHVjdC50aXRsZX0gLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG5cdFx0XHRcdHtwcm9kdWN0LnRpdGxlfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZX0+XHJcblx0XHRcdFx0e3ByaWNlUnUocHJvZHVjdC5wcmljZSl9XHJcblx0XHRcdFx0e3Byb2R1Y3Qub2xkUHJpY2UgJiYgPFRhZyBjbGFzc05hbWU9e3N0eWxlcy5vbGRQcmljZX0gY29sb3I9XCJncmVlblwiPntwcmljZVJ1KHByb2R1Y3QucHJpY2UgLSBwcm9kdWN0Lm9sZFByaWNlKX08L1RhZz59XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWRpdH0+XHJcblx0XHRcdFx0e3ByaWNlUnUocHJvZHVjdC5jcmVkaXQpfS88c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tb250aH0+0LzQtdGBPC9zcGFuPlx0XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhaXRpbmd9PlxyXG5cdFx0XHRcdDxSYWl0aW5nIHJhaXRpbmc9e3Byb2R1Y3QucmV2aWV3QXZnID8/IHByb2R1Y3QuaW5pdGlhbFJhaXRpbmd9PjwvUmFpdGluZz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnc30+XHJcblx0XHRcdFx0e3Byb2R1Y3QuY2F0ZWdvcmllcy5tYXAoIGMgPT4gPFRhZyBrZXk9e2N9IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fSBjb2xvcj1cImdob3N0XCI+e2N9PC9UYWc+KX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpY2VUaXRsZX0+XHJcblx0XHRcdFx00YbQtdC90LBcclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3JlZGl0VGl0bGV9PlxyXG5cdFx0XHRcdNC60YDQtdC00LjRglxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXRlVGl0bGV9PlxyXG5cdFx0XHRcdHtwcm9kdWN0LnJldmlld0NvdW50fSDQvtGC0LfRi9Cy0L7QslxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PERpdmlkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaHJ9PjwvRGl2aWRlcj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcblx0XHRcdFx0e3Byb2R1Y3QuZGVzY3JpcHRpb259XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmV9PlxyXG5cdFx0XHRcdNGE0LjRh9C4XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkdkJsb2NrfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkdmFudGFnZXN9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZHZUaXRsZX0+0J/RgNC10LjQvNGD0YnQtdGB0YLQstCwPC9kaXY+XHRcclxuXHRcdFx0XHRcdDxkaXY+e3Byb2R1Y3QuYWR2YW50YWdlc308L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR7cHJvZHVjdC5kaXNhZHZhbnRhZ2VzfTxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGlzYWR2YW50YWdlc30+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkdlRpdGxlfT7QndC10LTQvtGB0YLQsNGC0LrQuDwvZGl2Plx0XHJcblx0XHRcdFx0XHQ8ZGl2Pntwcm9kdWN0LmRpc2FkdmFudGFnZXN9PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8RGl2aWRlciBjbGFzc05hbWU9e3N0eWxlcy5ocn0+PC9EaXZpZGVyPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnN9PlxyXG5cdFx0XHRcdDxCdXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIj7Qo9C30L3QsNGC0Ywg0L/QvtC00YDQvtCx0L3QtdC1PC9CdXR0b24+XHJcblx0XHRcdFx0PEJ1dHRvbiBhcHBlYXJhbmNlPVwiZ2hvc3RcIiBhcnJvdz17J3JpZ2h0J30gY2xhc3NOYW1lPXtzdHlsZXMucmV2aWV3QnV0dG9ufT7Qp9C40YLQsNGC0Ywg0L7RgtC30YvQstGLPC9CdXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9DYXJkPlxyXG5cdCk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=