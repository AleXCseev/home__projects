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
        lineNumber: 11,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
      children: product.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.price,
      children: product.price
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.credit,
      children: product.credit
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.raiting,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Raiting"], {
        raiting: (_product$reviewAvg = product.reviewAvg) !== null && _product$reviewAvg !== void 0 ? _product$reviewAvg : product.initialRaiting
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tags,
      children: product.categories.map(function (c) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Tag"], {
          color: "ghost",
          children: c
        }, c, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 35
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.priceTitle,
      children: "\u0446\u0435\u043D\u0430"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.creditTitle,
      children: "\u043A\u0440\u0435\u0434\u0438\u0442"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.rateTitle,
      children: [product.reviewCount, " \u043E\u0442\u0437\u044B\u0432\u043E\u0432"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,
      children: product.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.feature,
      children: "\u0444\u0438\u0447\u0438"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.advBlock,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.advantages,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: product.advantages
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.disadvantages,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043A\u0438"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: product.disadvantages
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0L1Byb2R1Y3QudHN4Il0sIm5hbWVzIjpbIlByb2R1Y3QiLCJwcm9kdWN0IiwiY2xhc3NOYW1lIiwicHJvcHMiLCJzdHlsZXMiLCJsb2dvIiwicHJvY2VzcyIsImltYWdlIiwidGl0bGUiLCJwcmljZSIsImNyZWRpdCIsInJhaXRpbmciLCJyZXZpZXdBdmciLCJpbml0aWFsUmFpdGluZyIsInRhZ3MiLCJjYXRlZ29yaWVzIiwibWFwIiwiYyIsInByaWNlVGl0bGUiLCJjcmVkaXRUaXRsZSIsInJhdGVUaXRsZSIsInJldmlld0NvdW50IiwiZGVzY3JpcHRpb24iLCJmZWF0dXJlIiwiYWR2QmxvY2siLCJhZHZhbnRhZ2VzIiwiZGlzYWR2YW50YWdlcyIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBRU8sSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBaUU7QUFBQTs7QUFBQSxNQUE5REMsT0FBOEQsUUFBOURBLE9BQThEO0FBQUEsTUFBckRDLFNBQXFELFFBQXJEQSxTQUFxRDtBQUFBLE1BQXZDQyxLQUF1Qzs7QUFDdkYsc0JBQ0MscUVBQUMsc0NBQUQ7QUFBTSxhQUFTLEVBQUVDLDBEQUFNLENBQUNILE9BQXhCO0FBQUEsNEJBQ0M7QUFBSyxlQUFTLEVBQUVHLDBEQUFNLENBQUNDLElBQXZCO0FBQUEsNkJBQ0M7QUFBSyxXQUFHLEVBQUVDLHdCQUFBLEdBQWlDTCxPQUFPLENBQUNNLEtBQW5EO0FBQTBELFdBQUcsRUFBRU4sT0FBTyxDQUFDTztBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBSUM7QUFBSyxlQUFTLEVBQUVKLDBEQUFNLENBQUNJLEtBQXZCO0FBQUEsZ0JBQ0VQLE9BQU8sQ0FBQ087QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkQsZUFPQztBQUFLLGVBQVMsRUFBRUosMERBQU0sQ0FBQ0ssS0FBdkI7QUFBQSxnQkFDRVIsT0FBTyxDQUFDUTtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRCxlQVVDO0FBQUssZUFBUyxFQUFFTCwwREFBTSxDQUFDTSxNQUF2QjtBQUFBLGdCQUNFVCxPQUFPLENBQUNTO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZELGVBYUM7QUFBSyxlQUFTLEVBQUVOLDBEQUFNLENBQUNPLE9BQXZCO0FBQUEsNkJBQ0MscUVBQUMseUNBQUQ7QUFBUyxlQUFPLHdCQUFFVixPQUFPLENBQUNXLFNBQVYsbUVBQXVCWCxPQUFPLENBQUNZO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkQsZUFnQkM7QUFBSyxlQUFTLEVBQUVULDBEQUFNLENBQUNVLElBQXZCO0FBQUEsZ0JBQ0ViLE9BQU8sQ0FBQ2MsVUFBUixDQUFtQkMsR0FBbkIsQ0FBd0IsVUFBQUMsQ0FBQztBQUFBLDRCQUFJLHFFQUFDLHFDQUFEO0FBQWEsZUFBSyxFQUFDLE9BQW5CO0FBQUEsb0JBQTRCQTtBQUE1QixXQUFVQSxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUo7QUFBQSxPQUF6QjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkQsZUFtQkM7QUFBSyxlQUFTLEVBQUViLDBEQUFNLENBQUNjLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJELGVBc0JDO0FBQUssZUFBUyxFQUFFZCwwREFBTSxDQUFDZSxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCRCxlQXlCQztBQUFLLGVBQVMsRUFBRWYsMERBQU0sQ0FBQ2dCLFNBQXZCO0FBQUEsaUJBQ0VuQixPQUFPLENBQUNvQixXQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpCRCxlQTRCQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNUJELGVBNkJDO0FBQUssZUFBUyxFQUFFakIsMERBQU0sQ0FBQ2tCLFdBQXZCO0FBQUEsZ0JBQ0VyQixPQUFPLENBQUNxQjtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3QkQsZUFnQ0M7QUFBSyxlQUFTLEVBQUVsQiwwREFBTSxDQUFDbUIsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQ0QsZUFtQ0M7QUFBSyxlQUFTLEVBQUVuQiwwREFBTSxDQUFDb0IsUUFBdkI7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUVwQiwwREFBTSxDQUFDcUIsVUFBdkI7QUFBQSxnQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDO0FBQUEsb0JBQU14QixPQUFPLENBQUN3QjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFLQztBQUFLLGlCQUFTLEVBQUVyQiwwREFBTSxDQUFDc0IsYUFBdkI7QUFBQSxnQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDO0FBQUEsb0JBQU16QixPQUFPLENBQUN5QjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkNELGVBNkNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3Q0QsZUE4Q0M7QUFBSyxlQUFTLEVBQUV0QiwwREFBTSxDQUFDdUIsT0FBdkI7QUFBQSw2QkFDQyxxRUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBb0RBLENBckRNO0tBQU0zQixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1t0eXBlXS9bYWxpYXNdLjRkNWZhZjVhZmUyMGQ4ODg4NTk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0UHJvcHMgfSBmcm9tIFwiLi9Qcm9kdWN0LnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUHJvZHVjdC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcmQsIFJhaXRpbmcsIFRhZyB9IGZyb20gXCIuLlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3QgPSAoeyBwcm9kdWN0LCBjbGFzc05hbWUsIC4uLnByb3BzIH06IFByb2R1Y3RQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PENhcmQgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdH0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XHJcblx0XHRcdFx0PGltZyBzcmM9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RPTUFJTiArIHByb2R1Y3QuaW1hZ2V9IGFsdD17cHJvZHVjdC50aXRsZX0gLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG5cdFx0XHRcdHtwcm9kdWN0LnRpdGxlfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZX0+XHJcblx0XHRcdFx0e3Byb2R1Y3QucHJpY2V9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWRpdH0+XHJcblx0XHRcdFx0e3Byb2R1Y3QuY3JlZGl0fVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYWl0aW5nfT5cclxuXHRcdFx0XHQ8UmFpdGluZyByYWl0aW5nPXtwcm9kdWN0LnJldmlld0F2ZyA/PyBwcm9kdWN0LmluaXRpYWxSYWl0aW5nfT48L1JhaXRpbmc+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhZ3N9PlxyXG5cdFx0XHRcdHtwcm9kdWN0LmNhdGVnb3JpZXMubWFwKCBjID0+IDxUYWcga2V5PXtjfSBjb2xvcj1cImdob3N0XCI+e2N9PC9UYWc+KX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpY2VUaXRsZX0+XHJcblx0XHRcdFx00YbQtdC90LBcclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3JlZGl0VGl0bGV9PlxyXG5cdFx0XHRcdNC60YDQtdC00LjRglxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXRlVGl0bGV9PlxyXG5cdFx0XHRcdHtwcm9kdWN0LnJldmlld0NvdW50fSDQvtGC0LfRi9Cy0L7QslxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGhyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxyXG5cdFx0XHRcdHtwcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlfT5cclxuXHRcdFx0XHTRhNC40YfQuFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZHZCbG9ja30+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZHZhbnRhZ2VzfT5cclxuXHRcdFx0XHRcdDxkaXY+0J/RgNC10LjQvNGD0YnQtdGB0YLQstCwPC9kaXY+XHRcclxuXHRcdFx0XHRcdDxkaXY+e3Byb2R1Y3QuYWR2YW50YWdlc308L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpc2FkdmFudGFnZXN9PlxyXG5cdFx0XHRcdFx0PGRpdj7QndC10LTQvtGB0YLQsNGC0LrQuDwvZGl2Plx0XHJcblx0XHRcdFx0XHQ8ZGl2Pntwcm9kdWN0LmRpc2FkdmFudGFnZXN9PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8aHIgLz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zfT5cclxuXHRcdFx0XHQ8QnV0dG9uPjwvQnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvQ2FyZD5cclxuXHQpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9