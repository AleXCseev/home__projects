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
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product.module.css */ "./components/Product/Product.module.css");
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Product_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .. */ "./components/index.ts");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/helpers */ "./helpers/helpers.tsx");




var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\Product\\Product.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Product = function Product(_ref) {
  var _product$reviewAvg;

  var product = _ref.product,
      className = _ref.className,
      props = Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["product", "className"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_5__["Card"], _objectSpread(_objectSpread({
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.product
  }, pro), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
      children: product.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.price,
      children: [Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__["priceRu"])(product.price), product.oldPrice && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_5__["Tag"], {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.oldPrice,
        color: "green",
        children: Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__["priceRu"])(product.price - product.oldPrice)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 26
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.credit,
      children: [Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__["priceRu"])(product.credit), "/", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.month,
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.raiting,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_5__["Raiting"], {
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tags,
      children: product.categories.map(function (c) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_5__["Tag"], {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.category,
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.priceTitle,
      children: "\u0446\u0435\u043D\u0430"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.creditTitle,
      children: "\u043A\u0440\u0435\u0434\u0438\u0442"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.rateTitle,
      children: [product.reviewCount, " ", Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__["declOfNum"])(product.reviewCount, ["отзыв", "отзыва", "отзывов"])]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_5__["Divider"], {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.hr
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.description,
      children: product.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.feature,
      children: product.characteristics.map(function (c) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.characteristics,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.characteristicsName,
            children: c.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.characteristicsDots
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.characteristicsValue,
            children: c.value
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 7
          }, _this)]
        }, c.name, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.advBlock,
      children: [product.advantages && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.advantages,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.advTitle,
          children: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 7
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          children: product.advantages
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 28
      }, _this), product.disadvantages && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.disadvantages,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.advTitle,
          children: "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043A\u0438"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 7
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          children: product.disadvantages
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 31
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_5__["Divider"], {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.hr
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.actions,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_5__["Button"], {
        appearance: "primary",
        children: "\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_5__["Button"], {
        appearance: "ghost",
        arrow: 'right',
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.reviewButton,
        children: "\u0427\u0438\u0442\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432\u044B"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 4
    }, _this)]
  }), void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0L1Byb2R1Y3QudHN4Il0sIm5hbWVzIjpbIlByb2R1Y3QiLCJwcm9kdWN0IiwiY2xhc3NOYW1lIiwicHJvcHMiLCJzdHlsZXMiLCJwcm8iLCJsb2dvIiwicHJvY2VzcyIsImltYWdlIiwidGl0bGUiLCJwcmljZSIsInByaWNlUnUiLCJvbGRQcmljZSIsImNyZWRpdCIsIm1vbnRoIiwicmFpdGluZyIsInJldmlld0F2ZyIsImluaXRpYWxSYWl0aW5nIiwidGFncyIsImNhdGVnb3JpZXMiLCJtYXAiLCJjIiwiY2F0ZWdvcnkiLCJwcmljZVRpdGxlIiwiY3JlZGl0VGl0bGUiLCJyYXRlVGl0bGUiLCJyZXZpZXdDb3VudCIsImRlY2xPZk51bSIsImhyIiwiZGVzY3JpcHRpb24iLCJmZWF0dXJlIiwiY2hhcmFjdGVyaXN0aWNzIiwiY2hhcmFjdGVyaXN0aWNzTmFtZSIsIm5hbWUiLCJjaGFyYWN0ZXJpc3RpY3NEb3RzIiwiY2hhcmFjdGVyaXN0aWNzVmFsdWUiLCJ2YWx1ZSIsImFkdkJsb2NrIiwiYWR2YW50YWdlcyIsImFkdlRpdGxlIiwiZGlzYWR2YW50YWdlcyIsImFjdGlvbnMiLCJyZXZpZXdCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBaUU7QUFBQTs7QUFBQSxNQUE5REMsT0FBOEQsUUFBOURBLE9BQThEO0FBQUEsTUFBckRDLFNBQXFELFFBQXJEQSxTQUFxRDtBQUFBLE1BQXZDQyxLQUF1Qzs7QUFDdkYsc0JBQ0MscUVBQUMsc0NBQUQ7QUFBTSxhQUFTLEVBQUVDLDBEQUFNLENBQUNIO0FBQXhCLEtBQXFDSSxHQUFyQztBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFFRCwwREFBTSxDQUFDRSxJQUF2QjtBQUFBLDZCQUNDO0FBQUssV0FBRyxFQUFF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O0FBQUE7QUFBQSxpQkFGd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFDRCxlQXNEQyxxRUFBQyx5Q0FBRDtBQUFTLGVBQVMsRUFBRXBDLDBEQUFNLENBQUN3QjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdERELGVBdURDO0FBQUssZUFBUyxFQUFFeEIsMERBQU0sQ0FBQ3FDLE9BQXZCO0FBQUEsOEJBQ0MscUVBQUMsd0NBQUQ7QUFBUSxrQkFBVSxFQUFDLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQyxxRUFBQyx3Q0FBRDtBQUFRLGtCQUFVLEVBQUMsT0FBbkI7QUFBMkIsYUFBSyxFQUFFLE9BQWxDO0FBQTJDLGlCQUFTLEVBQUVyQywwREFBTSxDQUFDc0MsWUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2REQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUE4REEsQ0EvRE07S0FBTTFDLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3R5cGVdL1thbGlhc10uNWQxOGVjMTljYmMwMjlmMjBkZTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3RQcm9wcyB9IGZyb20gXCIuL1Byb2R1Y3QucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Qcm9kdWN0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBEaXZpZGVyLCBSYWl0aW5nLCBUYWcgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgZGVjbE9mTnVtLCBwcmljZVJ1IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3QgPSAoeyBwcm9kdWN0LCBjbGFzc05hbWUsIC4uLnByb3BzIH06IFByb2R1Y3RQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PENhcmQgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdH0gey4uLnByb30+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XHJcblx0XHRcdFx0PGltZyBzcmM9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RPTUFJTiArIHByb2R1Y3QuaW1hZ2V9IGFsdD17cHJvZHVjdC50aXRsZX0gLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG5cdFx0XHRcdHtwcm9kdWN0LnRpdGxlfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZX0+XHJcblx0XHRcdFx0e3ByaWNlUnUocHJvZHVjdC5wcmljZSl9XHJcblx0XHRcdFx0e3Byb2R1Y3Qub2xkUHJpY2UgJiYgPFRhZyBjbGFzc05hbWU9e3N0eWxlcy5vbGRQcmljZX0gY29sb3I9XCJncmVlblwiPntwcmljZVJ1KHByb2R1Y3QucHJpY2UgLSBwcm9kdWN0Lm9sZFByaWNlKX08L1RhZz59XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWRpdH0+XHJcblx0XHRcdFx0e3ByaWNlUnUocHJvZHVjdC5jcmVkaXQpfS88c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tb250aH0+0LzQtdGBPC9zcGFuPlx0XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhaXRpbmd9PlxyXG5cdFx0XHRcdDxSYWl0aW5nIHJhaXRpbmc9e3Byb2R1Y3QucmV2aWV3QXZnID8/IHByb2R1Y3QuaW5pdGlhbFJhaXRpbmd9PjwvUmFpdGluZz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnc30+XHJcblx0XHRcdFx0e3Byb2R1Y3QuY2F0ZWdvcmllcy5tYXAoIGMgPT4gPFRhZyBrZXk9e2N9IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fSBjb2xvcj1cImdob3N0XCI+e2N9PC9UYWc+KX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpY2VUaXRsZX0+XHJcblx0XHRcdFx00YbQtdC90LBcclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3JlZGl0VGl0bGV9PlxyXG5cdFx0XHRcdNC60YDQtdC00LjRglxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXRlVGl0bGV9PlxyXG5cdFx0XHRcdHtwcm9kdWN0LnJldmlld0NvdW50fSB7ZGVjbE9mTnVtKHByb2R1Y3QucmV2aWV3Q291bnQsIFtcItC+0YLQt9GL0LJcIiwgXCLQvtGC0LfRi9Cy0LBcIiwgXCLQvtGC0LfRi9Cy0L7QslwiXSl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8RGl2aWRlciBjbGFzc05hbWU9e3N0eWxlcy5ocn0+PC9EaXZpZGVyPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuXHRcdFx0XHR7cHJvZHVjdC5kZXNjcmlwdGlvbn1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZX0+XHJcblx0XHRcdFx0e3Byb2R1Y3QuY2hhcmFjdGVyaXN0aWNzLm1hcChjID0+IChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcmFjdGVyaXN0aWNzfSBrZXk9e2MubmFtZX0+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNoYXJhY3RlcmlzdGljc05hbWV9PntjLm5hbWV9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jaGFyYWN0ZXJpc3RpY3NEb3RzfT48L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNoYXJhY3RlcmlzdGljc1ZhbHVlfT57Yy52YWx1ZX08L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWR2QmxvY2t9PlxyXG5cdFx0XHRcdHtwcm9kdWN0LmFkdmFudGFnZXMgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZHZhbnRhZ2VzfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZHZUaXRsZX0+0J/RgNC10LjQvNGD0YnQtdGB0YLQstCwPC9kaXY+XHRcclxuXHRcdFx0XHRcdFx0PGRpdj57cHJvZHVjdC5hZHZhbnRhZ2VzfTwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHtwcm9kdWN0LmRpc2FkdmFudGFnZXMgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXNhZHZhbnRhZ2VzfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZHZUaXRsZX0+0J3QtdC00L7RgdGC0LDRgtC60Lg8L2Rpdj5cdFxyXG5cdFx0XHRcdFx0XHQ8ZGl2Pntwcm9kdWN0LmRpc2FkdmFudGFnZXN9PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8RGl2aWRlciBjbGFzc05hbWU9e3N0eWxlcy5ocn0+PC9EaXZpZGVyPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnN9PlxyXG5cdFx0XHRcdDxCdXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIj7Qo9C30L3QsNGC0Ywg0L/QvtC00YDQvtCx0L3QtdC1PC9CdXR0b24+XHJcblx0XHRcdFx0PEJ1dHRvbiBhcHBlYXJhbmNlPVwiZ2hvc3RcIiBhcnJvdz17J3JpZ2h0J30gY2xhc3NOYW1lPXtzdHlsZXMucmV2aWV3QnV0dG9ufT7Qp9C40YLQsNGC0Ywg0L7RgtC30YvQstGLPC9CdXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9DYXJkPlxyXG5cdCk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=