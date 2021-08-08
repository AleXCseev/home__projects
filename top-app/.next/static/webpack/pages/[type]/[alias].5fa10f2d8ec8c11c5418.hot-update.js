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
      children: Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_5__["priceRu"])(product.price)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.credit,
      children: product.credit
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.raiting,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Raiting"], {
        raiting: (_product$reviewAvg = product.reviewAvg) !== null && _product$reviewAvg !== void 0 ? _product$reviewAvg : product.initialRaiting
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tags,
      children: product.categories.map(function (c) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Tag"], {
          color: "ghost",
          children: c
        }, c, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 35
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.priceTitle,
      children: "\u0446\u0435\u043D\u0430"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.creditTitle,
      children: "\u043A\u0440\u0435\u0434\u0438\u0442"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.rateTitle,
      children: [product.reviewCount, " \u043E\u0442\u0437\u044B\u0432\u043E\u0432"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.hr,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,
      children: product.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.feature,
      children: "\u0444\u0438\u0447\u0438"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.advBlock,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.advantages,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: product.advantages
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.disadvantages,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043A\u0438"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: product.disadvantages
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.hr,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Button"], {
        appearance: "primary",
        children: "\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Button"], {
        appearance: "ghost",
        arrow: 'right',
        children: "\u0427\u0438\u0442\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432\u044B"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0L1Byb2R1Y3QudHN4Il0sIm5hbWVzIjpbIlByb2R1Y3QiLCJwcm9kdWN0IiwiY2xhc3NOYW1lIiwicHJvcHMiLCJzdHlsZXMiLCJsb2dvIiwicHJvY2VzcyIsImltYWdlIiwidGl0bGUiLCJwcmljZSIsInByaWNlUnUiLCJjcmVkaXQiLCJyYWl0aW5nIiwicmV2aWV3QXZnIiwiaW5pdGlhbFJhaXRpbmciLCJ0YWdzIiwiY2F0ZWdvcmllcyIsIm1hcCIsImMiLCJwcmljZVRpdGxlIiwiY3JlZGl0VGl0bGUiLCJyYXRlVGl0bGUiLCJyZXZpZXdDb3VudCIsImhyIiwiZGVzY3JpcHRpb24iLCJmZWF0dXJlIiwiYWR2QmxvY2siLCJhZHZhbnRhZ2VzIiwiZGlzYWR2YW50YWdlcyIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBaUU7QUFBQTs7QUFBQSxNQUE5REMsT0FBOEQsUUFBOURBLE9BQThEO0FBQUEsTUFBckRDLFNBQXFELFFBQXJEQSxTQUFxRDtBQUFBLE1BQXZDQyxLQUF1Qzs7QUFDdkYsc0JBQ0MscUVBQUMsc0NBQUQ7QUFBTSxhQUFTLEVBQUVDLDBEQUFNLENBQUNILE9BQXhCO0FBQUEsNEJBQ0M7QUFBSyxlQUFTLEVBQUVHLDBEQUFNLENBQUNDLElBQXZCO0FBQUEsNkJBQ0M7QUFBSyxXQUFHLEVBQUVDLHdCQUFBLEdBQWlDTCxPQUFPLENBQUNNLEtBQW5EO0FBQTBELFdBQUcsRUFBRU4sT0FBTyxDQUFDTztBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBSUM7QUFBSyxlQUFTLEVBQUVKLDBEQUFNLENBQUNJLEtBQXZCO0FBQUEsZ0JBQ0VQLE9BQU8sQ0FBQ087QUFEVjtBQUFBO0FBQUE7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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQyxxRUFBQyx3Q0FBRDtBQUFRLGtCQUFVLEVBQUMsT0FBbkI7QUFBMkIsYUFBSyxFQUFFLE9BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBeURBLENBMURNO0tBQU03QixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1t0eXBlXS9bYWxpYXNdLjVmYTEwZjJkOGVjOGMxMWM1NDE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0UHJvcHMgfSBmcm9tIFwiLi9Qcm9kdWN0LnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUHJvZHVjdC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgUmFpdGluZywgVGFnIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IHByaWNlUnUgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdCA9ICh7IHByb2R1Y3QsIGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUHJvZHVjdFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8Q2FyZCBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0fT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuXHRcdFx0XHQ8aW1nIHNyYz17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRE9NQUlOICsgcHJvZHVjdC5pbWFnZX0gYWx0PXtwcm9kdWN0LnRpdGxlfSAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcblx0XHRcdFx0e3Byb2R1Y3QudGl0bGV9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByaWNlfT5cclxuXHRcdFx0XHR7cHJpY2VSdShwcm9kdWN0LnByaWNlKX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3JlZGl0fT5cclxuXHRcdFx0XHR7cHJvZHVjdC5jcmVkaXR9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhaXRpbmd9PlxyXG5cdFx0XHRcdDxSYWl0aW5nIHJhaXRpbmc9e3Byb2R1Y3QucmV2aWV3QXZnID8/IHByb2R1Y3QuaW5pdGlhbFJhaXRpbmd9PjwvUmFpdGluZz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnc30+XHJcblx0XHRcdFx0e3Byb2R1Y3QuY2F0ZWdvcmllcy5tYXAoIGMgPT4gPFRhZyBrZXk9e2N9IGNvbG9yPVwiZ2hvc3RcIj57Y308L1RhZz4pfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZVRpdGxlfT5cclxuXHRcdFx0XHTRhtC10L3QsFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVkaXRUaXRsZX0+XHJcblx0XHRcdFx00LrRgNC10LTQuNGCXHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhdGVUaXRsZX0+XHJcblx0XHRcdFx0e3Byb2R1Y3QucmV2aWV3Q291bnR9INC+0YLQt9GL0LLQvtCyXHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhyfT5cclxuXHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxyXG5cdFx0XHRcdHtwcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlfT5cclxuXHRcdFx0XHTRhNC40YfQuFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZHZCbG9ja30+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZHZhbnRhZ2VzfT5cclxuXHRcdFx0XHRcdDxkaXY+0J/RgNC10LjQvNGD0YnQtdGB0YLQstCwPC9kaXY+XHRcclxuXHRcdFx0XHRcdDxkaXY+e3Byb2R1Y3QuYWR2YW50YWdlc308L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpc2FkdmFudGFnZXN9PlxyXG5cdFx0XHRcdFx0PGRpdj7QndC10LTQvtGB0YLQsNGC0LrQuDwvZGl2Plx0XHJcblx0XHRcdFx0XHQ8ZGl2Pntwcm9kdWN0LmRpc2FkdmFudGFnZXN9PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhyfT5cclxuXHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc30+XHJcblx0XHRcdFx0PEJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiPtCj0LfQvdCw0YLRjCDQv9C+0LTRgNC+0LHQvdC10LU8L0J1dHRvbj5cclxuXHRcdFx0XHQ8QnV0dG9uIGFwcGVhcmFuY2U9XCJnaG9zdFwiIGFycm93PXsncmlnaHQnfT7Qp9C40YLQsNGC0Ywg0L7RgtC30YvQstGLPC9CdXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9DYXJkPlxyXG5cdCk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=