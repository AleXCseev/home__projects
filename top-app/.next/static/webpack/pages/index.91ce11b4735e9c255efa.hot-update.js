webpackHotUpdate_N_E("pages/index",{

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
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.characteristics,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.characteristics
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 7
          }, _this)
        }, c.name, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0L1Byb2R1Y3QudHN4Il0sIm5hbWVzIjpbIlByb2R1Y3QiLCJwcm9kdWN0IiwiY2xhc3NOYW1lIiwicHJvcHMiLCJzdHlsZXMiLCJsb2dvIiwicHJvY2VzcyIsImltYWdlIiwidGl0bGUiLCJwcmljZSIsInByaWNlUnUiLCJvbGRQcmljZSIsImNyZWRpdCIsIm1vbnRoIiwicmFpdGluZyIsInJldmlld0F2ZyIsImluaXRpYWxSYWl0aW5nIiwidGFncyIsImNhdGVnb3JpZXMiLCJtYXAiLCJjIiwiY2F0ZWdvcnkiLCJwcmljZVRpdGxlIiwiY3JlZGl0VGl0bGUiLCJyYXRlVGl0bGUiLCJyZXZpZXdDb3VudCIsImRlY2xPZk51bSIsImhyIiwiZGVzY3JpcHRpb24iLCJmZWF0dXJlIiwiY2hhcmFjdGVyaXN0aWNzIiwibmFtZSIsImFkdkJsb2NrIiwiYWR2YW50YWdlcyIsImFkdlRpdGxlIiwiZGlzYWR2YW50YWdlcyIsImFjdGlvbnMiLCJyZXZpZXdCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBaUU7QUFBQTs7QUFBQSxNQUE5REMsT0FBOEQsUUFBOURBLE9BQThEO0FBQUEsTUFBckRDLFNBQXFELFFBQXJEQSxTQUFxRDtBQUFBLE1BQXZDQyxLQUF1Qzs7QUFDdkYsc0JBQ0MscUVBQUMsc0NBQUQ7QUFBTSxhQUFTLEVBQUVDLDBEQUFNLENBQUNILE9BQXhCO0FBQUEsNEJBQ0M7QUFBSyxlQUFTLEVBQUVHLDBEQUFNLENBQUNDLElBQXZCO0FBQUEsNkJBQ0M7QUFBSyxXQUFHLEVBQUVDLHdCQUFBLEdBQWlDTCxPQUFPLENBQUNNLEtBQW5EO0FBQTBELFdBQUcsRUFBRU4sT0FBTyxDQUFDTztBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBSUM7QUFBSyxlQUFTLEVBQUVKLDBEQUFNLENBQUNJLEtBQXZCO0FBQUEsZ0JBQ0VQLE9BQU8sQ0FBQ087QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkQsZUFPQztBQUFLLGVBQVMsRUFBRUosMERBQU0sQ0FBQ0ssS0FBdkI7QUFBQSxpQkFDRUMsZ0VBQU8sQ0FBQ1QsT0FBTyxDQUFDUSxLQUFULENBRFQsRUFFRVIsT0FBTyxDQUFDVSxRQUFSLGlCQUFvQixxRUFBQyxxQ0FBRDtBQUFLLGlCQUFTLEVBQUVQLDBEQUFNLENBQUNPLFFBQXZCO0FBQWlDLGFBQUssRUFBQyxPQUF2QztBQUFBLGtCQUFnREQsZ0VBQU8sQ0FBQ1QsT0FBTyxDQUFDUSxLQUFSLEdBQWdCUixPQUFPLENBQUNVLFFBQXpCO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEQsZUFXQztBQUFLLGVBQVMsRUFBRVAsMERBQU0sQ0FBQ1EsTUFBdkI7QUFBQSxpQkFDRUYsZ0VBQU8sQ0FBQ1QsT0FBTyxDQUFDVyxNQUFULENBRFQsb0JBQzJCO0FBQU0saUJBQVMsRUFBRVIsMERBQU0sQ0FBQ1MsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEQsZUFjQztBQUFLLGVBQVMsRUFBRVQsMERBQU0sQ0FBQ1UsT0FBdkI7QUFBQSw2QkFDQyxxRUFBQyx5Q0FBRDtBQUFTLGVBQU8sd0JBQUViLE9BQU8sQ0FBQ2MsU0FBVixtRUFBdUJkLE9BQU8sQ0FBQ2U7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkRCxlQWlCQztBQUFLLGVBQVMsRUFBRVosMERBQU0sQ0FBQ2EsSUFBdkI7QUFBQSxnQkFDRWhCLE9BQU8sQ0FBQ2lCLFVBQVIsQ0FBbUJDLEdBQW5CLENBQXdCLFVBQUFDLENBQUM7QUFBQSw0QkFBSSxxRUFBQyxxQ0FBRDtBQUFhLG1CQUFTLEVBQUVoQiwwREFBTSxDQUFDaUIsUUFBL0I7QUFBeUMsZUFBSyxFQUFDLE9BQS9DO0FBQUEsb0JBQXdERDtBQUF4RCxXQUFVQSxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUo7QUFBQSxPQUF6QjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkQsZUFvQkM7QUFBSyxlQUFTLEVBQUVoQiwwREFBTSxDQUFDa0IsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQkQsZUF1QkM7QUFBSyxlQUFTLEVBQUVsQiwwREFBTSxDQUFDbUIsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2QkQsZUEwQkM7QUFBSyxlQUFTLEVBQUVuQiwwREFBTSxDQUFDb0IsU0FBdkI7QUFBQSxpQkFDRXZCLE9BQU8sQ0FBQ3dCLFdBRFYsT0FDd0JDLGtFQUFTLENBQUN6QixPQUFPLENBQUN3QixXQUFULEVBQXNCLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBb0IsU0FBcEIsQ0FBdEIsQ0FEakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUJELGVBNkJDLHFFQUFDLHlDQUFEO0FBQVMsZUFBUyxFQUFFckIsMERBQU0sQ0FBQ3VCO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3QkQsZUE4QkM7QUFBSyxlQUFTLEVBQUV2QiwwREFBTSxDQUFDd0IsV0FBdkI7QUFBQSxnQkFDRTNCLE9BQU8sQ0FBQzJCO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTlCRCxlQWlDQztBQUFLLGVBQVMsRUFBRXhCLDBEQUFNLENBQUN5QixPQUF2QjtBQUFBLGdCQUNFNUIsT0FBTyxDQUFDNkIsZUFBUixDQUF3QlgsR0FBeEIsQ0FBNEIsVUFBQUMsQ0FBQyxFQUFJO0FBQ2pDO0FBQUE7QUFBSyxtQkFBUyxFQUFFaEIsMERBQU0sQ0FBQzBCLGVBQXZCO0FBQUEsaUNBQ0M7QUFBTSxxQkFBUyxFQUFFMUIsMERBQU0sQ0FBQzBCO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxXQUE2Q1YsQ0FBQyxDQUFDVyxJQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0EsT0FKQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQ0QsZUF3Q0M7QUFBSyxlQUFTLEVBQUUzQiwwREFBTSxDQUFDNEIsUUFBdkI7QUFBQSxpQkFDRS9CLE9BQU8sQ0FBQ2dDLFVBQVIsaUJBQXNCO0FBQUssaUJBQVMsRUFBRTdCLDBEQUFNLENBQUM2QixVQUF2QjtBQUFBLGdDQUNyQjtBQUFLLG1CQUFTLEVBQUU3QiwwREFBTSxDQUFDOEIsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHFCLGVBRXJCO0FBQUEsb0JBQU1qQyxPQUFPLENBQUNnQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRnFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR4QixFQU1FaEMsT0FBTyxDQUFDa0MsYUFBUixpQkFBeUI7QUFBSyxpQkFBUyxFQUFFL0IsMERBQU0sQ0FBQytCLGFBQXZCO0FBQUEsZ0NBQ3hCO0FBQUssbUJBQVMsRUFBRS9CLDBEQUFNLENBQUM4QixRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEd0IsZUFFeEI7QUFBQSxvQkFBTWpDLE9BQU8sQ0FBQ2tDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhDRCxlQW9EQyxxRUFBQyx5Q0FBRDtBQUFTLGVBQVMsRUFBRS9CLDBEQUFNLENBQUN1QjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcERELGVBcURDO0FBQUssZUFBUyxFQUFFdkIsMERBQU0sQ0FBQ2dDLE9BQXZCO0FBQUEsOEJBQ0MscUVBQUMsd0NBQUQ7QUFBUSxrQkFBVSxFQUFDLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQyxxRUFBQyx3Q0FBRDtBQUFRLGtCQUFVLEVBQUMsT0FBbkI7QUFBMkIsYUFBSyxFQUFFLE9BQWxDO0FBQTJDLGlCQUFTLEVBQUVoQywwREFBTSxDQUFDaUMsWUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUE0REEsQ0E3RE07S0FBTXJDLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTFjZTExYjQ3MzVlOWMyNTVlZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3RQcm9wcyB9IGZyb20gXCIuL1Byb2R1Y3QucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Qcm9kdWN0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBEaXZpZGVyLCBSYWl0aW5nLCBUYWcgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgZGVjbE9mTnVtLCBwcmljZVJ1IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3QgPSAoeyBwcm9kdWN0LCBjbGFzc05hbWUsIC4uLnByb3BzIH06IFByb2R1Y3RQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PENhcmQgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdH0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XHJcblx0XHRcdFx0PGltZyBzcmM9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RPTUFJTiArIHByb2R1Y3QuaW1hZ2V9IGFsdD17cHJvZHVjdC50aXRsZX0gLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG5cdFx0XHRcdHtwcm9kdWN0LnRpdGxlfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZX0+XHJcblx0XHRcdFx0e3ByaWNlUnUocHJvZHVjdC5wcmljZSl9XHJcblx0XHRcdFx0e3Byb2R1Y3Qub2xkUHJpY2UgJiYgPFRhZyBjbGFzc05hbWU9e3N0eWxlcy5vbGRQcmljZX0gY29sb3I9XCJncmVlblwiPntwcmljZVJ1KHByb2R1Y3QucHJpY2UgLSBwcm9kdWN0Lm9sZFByaWNlKX08L1RhZz59XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWRpdH0+XHJcblx0XHRcdFx0e3ByaWNlUnUocHJvZHVjdC5jcmVkaXQpfS88c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tb250aH0+0LzQtdGBPC9zcGFuPlx0XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhaXRpbmd9PlxyXG5cdFx0XHRcdDxSYWl0aW5nIHJhaXRpbmc9e3Byb2R1Y3QucmV2aWV3QXZnID8/IHByb2R1Y3QuaW5pdGlhbFJhaXRpbmd9PjwvUmFpdGluZz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnc30+XHJcblx0XHRcdFx0e3Byb2R1Y3QuY2F0ZWdvcmllcy5tYXAoIGMgPT4gPFRhZyBrZXk9e2N9IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fSBjb2xvcj1cImdob3N0XCI+e2N9PC9UYWc+KX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpY2VUaXRsZX0+XHJcblx0XHRcdFx00YbQtdC90LBcclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3JlZGl0VGl0bGV9PlxyXG5cdFx0XHRcdNC60YDQtdC00LjRglxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXRlVGl0bGV9PlxyXG5cdFx0XHRcdHtwcm9kdWN0LnJldmlld0NvdW50fSB7ZGVjbE9mTnVtKHByb2R1Y3QucmV2aWV3Q291bnQsIFtcItC+0YLQt9GL0LJcIiwgXCLQvtGC0LfRi9Cy0LBcIiwgXCLQvtGC0LfRi9Cy0L7QslwiXSl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8RGl2aWRlciBjbGFzc05hbWU9e3N0eWxlcy5ocn0+PC9EaXZpZGVyPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuXHRcdFx0XHR7cHJvZHVjdC5kZXNjcmlwdGlvbn1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZX0+XHJcblx0XHRcdFx0e3Byb2R1Y3QuY2hhcmFjdGVyaXN0aWNzLm1hcChjID0+IHtcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcmFjdGVyaXN0aWNzfSBrZXk9e2MubmFtZX0+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNoYXJhY3RlcmlzdGljc30+PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0fSl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkdkJsb2NrfT5cclxuXHRcdFx0XHR7cHJvZHVjdC5hZHZhbnRhZ2VzICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWR2YW50YWdlc30+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWR2VGl0bGV9PtCf0YDQtdC40LzRg9GJ0LXRgdGC0LLQsDwvZGl2Plx0XHJcblx0XHRcdFx0XHRcdDxkaXY+e3Byb2R1Y3QuYWR2YW50YWdlc308L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR7cHJvZHVjdC5kaXNhZHZhbnRhZ2VzICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGlzYWR2YW50YWdlc30+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWR2VGl0bGV9PtCd0LXQtNC+0YHRgtCw0YLQutC4PC9kaXY+XHRcclxuXHRcdFx0XHRcdFx0PGRpdj57cHJvZHVjdC5kaXNhZHZhbnRhZ2VzfTwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PERpdmlkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaHJ9PjwvRGl2aWRlcj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zfT5cclxuXHRcdFx0XHQ8QnV0dG9uIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCI+0KPQt9C90LDRgtGMINC/0L7QtNGA0L7QsdC90LXQtTwvQnV0dG9uPlxyXG5cdFx0XHRcdDxCdXR0b24gYXBwZWFyYW5jZT1cImdob3N0XCIgYXJyb3c9eydyaWdodCd9IGNsYXNzTmFtZT17c3R5bGVzLnJldmlld0J1dHRvbn0+0KfQuNGC0LDRgtGMINC+0YLQt9GL0LLRizwvQnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvQ2FyZD5cclxuXHQpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9