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
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product.module.css */ "./components/Product/Product.module.css");
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Product_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .. */ "./components/index.ts");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/helpers */ "./helpers/helpers.tsx");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\Product\\Product.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var Product = function Product(_ref) {
  _s();

  var _product$reviewAvg, _cn;

  var product = _ref.product,
      className = _ref.className,
      props = Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["product", "className"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      isReviewOpened = _useState[0],
      setIsReviewOpened = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Card"], {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.product,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_8___default.a, {
          src: "https://courses-top.ru" + product.image,
          alt: product.title,
          width: 70,
          height: 70
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
        children: product.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.price,
        children: [Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_7__["priceRu"])(product.price), product.oldPrice && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Tag"], {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.oldPrice,
          color: "green",
          children: Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_7__["priceRu"])(product.price - product.oldPrice)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 27
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.credit,
        children: [Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_7__["priceRu"])(product.credit), "/", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.month,
          children: "\u043C\u0435\u0441"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 32
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.raiting,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Raiting"], {
          raiting: (_product$reviewAvg = product.reviewAvg) !== null && _product$reviewAvg !== void 0 ? _product$reviewAvg : product.initialRaiting
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tags,
        children: product.categories.map(function (c) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Tag"], {
            className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.category,
            color: "ghost",
            children: c
          }, c, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 36
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.priceTitle,
        children: "\u0446\u0435\u043D\u0430"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.creditTitle,
        children: "\u043A\u0440\u0435\u0434\u0438\u0442"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.rateTitle,
        children: [product.reviewCount, " ", Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_7__["declOfNum"])(product.reviewCount, ["отзыв", "отзыва", "отзывов"])]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Divider"], {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.hr
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.description,
        children: product.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.feature,
        children: product.characteristics.map(function (c) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.characteristics,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.characteristicsName,
              children: c.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.characteristicsDots
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.characteristicsValue,
              children: c.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 8
            }, _this)]
          }, c.name, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.advBlock,
        children: [product.advantages && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.advantages,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.advTitle,
            children: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 8
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: product.advantages
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 8
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 29
        }, _this), product.disadvantages && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.disadvantages,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.advTitle,
            children: "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043A\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 8
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: product.disadvantages
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 8
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 32
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Divider"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.hr, _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.hr2)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.actions,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Button"], {
          appearance: "primary",
          children: "\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Button"], {
          appearance: "ghost",
          arrow: isReviewOpened ? 'down' : 'right',
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.reviewButton,
          onClick: function onClick() {
            return setIsReviewOpened(!isReviewOpened);
          },
          children: "\u0427\u0438\u0442\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432\u044B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Card"], {
      color: "blue",
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.reviews, (_cn = {}, Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cn, _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.opened, isReviewOpened), Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cn, _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.closed, !isReviewOpened), _cn)),
      children: [product.reviews.map(function (r) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Review"], {
            review: r
          }, r._id, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Divider"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 6
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["ReviewForm"], {
        productId: product._id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(Product, "l1Vs1Gm1ONOsrARJi673TZnObdM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0L1Byb2R1Y3QudHN4Il0sIm5hbWVzIjpbIlByb2R1Y3QiLCJwcm9kdWN0IiwiY2xhc3NOYW1lIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzUmV2aWV3T3BlbmVkIiwic2V0SXNSZXZpZXdPcGVuZWQiLCJzdHlsZXMiLCJsb2dvIiwicHJvY2VzcyIsImltYWdlIiwidGl0bGUiLCJwcmljZSIsInByaWNlUnUiLCJvbGRQcmljZSIsImNyZWRpdCIsIm1vbnRoIiwicmFpdGluZyIsInJldmlld0F2ZyIsImluaXRpYWxSYWl0aW5nIiwidGFncyIsImNhdGVnb3JpZXMiLCJtYXAiLCJjIiwiY2F0ZWdvcnkiLCJwcmljZVRpdGxlIiwiY3JlZGl0VGl0bGUiLCJyYXRlVGl0bGUiLCJyZXZpZXdDb3VudCIsImRlY2xPZk51bSIsImhyIiwiZGVzY3JpcHRpb24iLCJmZWF0dXJlIiwiY2hhcmFjdGVyaXN0aWNzIiwiY2hhcmFjdGVyaXN0aWNzTmFtZSIsIm5hbWUiLCJjaGFyYWN0ZXJpc3RpY3NEb3RzIiwiY2hhcmFjdGVyaXN0aWNzVmFsdWUiLCJ2YWx1ZSIsImFkdkJsb2NrIiwiYWR2YW50YWdlcyIsImFkdlRpdGxlIiwiZGlzYWR2YW50YWdlcyIsImNuIiwiaHIyIiwiYWN0aW9ucyIsInJldmlld0J1dHRvbiIsInJldmlld3MiLCJvcGVuZWQiLCJjbG9zZWQiLCJyIiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWlFO0FBQUE7O0FBQUE7O0FBQUEsTUFBOURDLE9BQThELFFBQTlEQSxPQUE4RDtBQUFBLE1BQXJEQyxTQUFxRCxRQUFyREEsU0FBcUQ7QUFBQSxNQUF2Q0MsS0FBdUM7O0FBQUEsa0JBQzNDQyxzREFBUSxDQUFVLEtBQVYsQ0FEbUM7QUFBQSxNQUNoRkMsY0FEZ0Y7QUFBQSxNQUNoRUMsaUJBRGdFOztBQUd2RixzQkFDQztBQUFBLDRCQUNDLHFFQUFDLHNDQUFEO0FBQU0sZUFBUyxFQUFFQywwREFBTSxDQUFDTixPQUF4QjtBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBRU0sMERBQU0sQ0FBQ0MsSUFBdkI7QUFBQSwrQkFDQyxxRUFBQyxpREFBRDtBQUNDLGFBQUcsRUFBRUMsd0JBQUEsR0FBaUNSLE9BQU8sQ0FBQ1MsS0FEL0M7QUFFQyxhQUFHLEVBQUVULE9BQU8sQ0FBQ1UsS0FGZDtBQUdDLGVBQUssRUFBRSxFQUhSO0FBSUMsZ0JBQU0sRUFBRTtBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFTQztBQUFLLGlCQUFTLEVBQUVKLDBEQUFNLENBQUNJLEtBQXZCO0FBQUEsa0JBQ0VWLE9BQU8sQ0FBQ1U7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEQsZUFZQztBQUFLLGlCQUFTLEVBQUVKLDBEQUFNLENBQUNLLEtBQXZCO0FBQUEsbUJBQ0VDLGdFQUFPLENBQUNaLE9BQU8sQ0FBQ1csS0FBVCxDQURULEVBRUVYLE9BQU8sQ0FBQ2EsUUFBUixpQkFBb0IscUVBQUMscUNBQUQ7QUFBSyxtQkFBUyxFQUFFUCwwREFBTSxDQUFDTyxRQUF2QjtBQUFpQyxlQUFLLEVBQUMsT0FBdkM7QUFBQSxvQkFBZ0RELGdFQUFPLENBQUNaLE9BQU8sQ0FBQ1csS0FBUixHQUFnQlgsT0FBTyxDQUFDYSxRQUF6QjtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRCxlQWdCQztBQUFLLGlCQUFTLEVBQUVQLDBEQUFNLENBQUNRLE1BQXZCO0FBQUEsbUJBQ0VGLGdFQUFPLENBQUNaLE9BQU8sQ0FBQ2MsTUFBVCxDQURULG9CQUMyQjtBQUFNLG1CQUFTLEVBQUVSLDBEQUFNLENBQUNTLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQkQsZUFtQkM7QUFBSyxpQkFBUyxFQUFFVCwwREFBTSxDQUFDVSxPQUF2QjtBQUFBLCtCQUNDLHFFQUFDLHlDQUFEO0FBQVMsaUJBQU8sd0JBQUVoQixPQUFPLENBQUNpQixTQUFWLG1FQUF1QmpCLE9BQU8sQ0FBQ2tCO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkJELGVBc0JDO0FBQUssaUJBQVMsRUFBRVosMERBQU0sQ0FBQ2EsSUFBdkI7QUFBQSxrQkFDRW5CLE9BQU8sQ0FBQ29CLFVBQVIsQ0FBbUJDLEdBQW5CLENBQXdCLFVBQUFDLENBQUM7QUFBQSw4QkFBSSxxRUFBQyxxQ0FBRDtBQUFhLHFCQUFTLEVBQUVoQiwwREFBTSxDQUFDaUIsUUFBL0I7QUFBeUMsaUJBQUssRUFBQyxPQUEvQztBQUFBLHNCQUF3REQ7QUFBeEQsYUFBVUEsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFKO0FBQUEsU0FBekI7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJELGVBeUJDO0FBQUssaUJBQVMsRUFBRWhCLDBEQUFNLENBQUNrQixVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXpCRCxlQTRCQztBQUFLLGlCQUFTLEVBQUVsQiwwREFBTSxDQUFDbUIsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1QkQsZUErQkM7QUFBSyxpQkFBUyxFQUFFbkIsMERBQU0sQ0FBQ29CLFNBQXZCO0FBQUEsbUJBQ0UxQixPQUFPLENBQUMyQixXQURWLE9BQ3dCQyxrRUFBUyxDQUFDNUIsT0FBTyxDQUFDMkIsV0FBVCxFQUFzQixDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLFNBQXBCLENBQXRCLENBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQS9CRCxlQWtDQyxxRUFBQyx5Q0FBRDtBQUFTLGlCQUFTLEVBQUVyQiwwREFBTSxDQUFDdUI7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxDRCxlQW1DQztBQUFLLGlCQUFTLEVBQUV2QiwwREFBTSxDQUFDd0IsV0FBdkI7QUFBQSxrQkFDRTlCLE9BQU8sQ0FBQzhCO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5DRCxlQXNDQztBQUFLLGlCQUFTLEVBQUV4QiwwREFBTSxDQUFDeUIsT0FBdkI7QUFBQSxrQkFDRS9CLE9BQU8sQ0FBQ2dDLGVBQVIsQ0FBd0JYLEdBQXhCLENBQTRCLFVBQUFDLENBQUM7QUFBQSw4QkFDN0I7QUFBSyxxQkFBUyxFQUFFaEIsMERBQU0sQ0FBQzBCLGVBQXZCO0FBQUEsb0NBQ0M7QUFBTSx1QkFBUyxFQUFFMUIsMERBQU0sQ0FBQzJCLG1CQUF4QjtBQUFBLHdCQUE4Q1gsQ0FBQyxDQUFDWTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBRUM7QUFBTSx1QkFBUyxFQUFFNUIsMERBQU0sQ0FBQzZCO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkQsZUFHQztBQUFNLHVCQUFTLEVBQUU3QiwwREFBTSxDQUFDOEIsb0JBQXhCO0FBQUEsd0JBQStDZCxDQUFDLENBQUNlO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEQ7QUFBQSxhQUE2Q2YsQ0FBQyxDQUFDWSxJQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUQ2QjtBQUFBLFNBQTdCO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRDRCxlQStDQztBQUFLLGlCQUFTLEVBQUU1QiwwREFBTSxDQUFDZ0MsUUFBdkI7QUFBQSxtQkFDRXRDLE9BQU8sQ0FBQ3VDLFVBQVIsaUJBQXNCO0FBQUssbUJBQVMsRUFBRWpDLDBEQUFNLENBQUNpQyxVQUF2QjtBQUFBLGtDQUNyQjtBQUFLLHFCQUFTLEVBQUVqQywwREFBTSxDQUFDa0MsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHFCLGVBRXJCO0FBQUEsc0JBQU14QyxPQUFPLENBQUN1QztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRnFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEeEIsRUFNRXZDLE9BQU8sQ0FBQ3lDLGFBQVIsaUJBQXlCO0FBQUssbUJBQVMsRUFBRW5DLDBEQUFNLENBQUNtQyxhQUF2QjtBQUFBLGtDQUN4QjtBQUFLLHFCQUFTLEVBQUVuQywwREFBTSxDQUFDa0MsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHdCLGVBRXhCO0FBQUEsc0JBQU14QyxPQUFPLENBQUN5QztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRndCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0NELGVBMkRDLHFFQUFDLHlDQUFEO0FBQVMsaUJBQVMsRUFBRUMsaURBQUUsQ0FBQ3BDLDBEQUFNLENBQUN1QixFQUFSLEVBQVl2QiwwREFBTSxDQUFDcUMsR0FBbkI7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTNERCxlQTREQztBQUFLLGlCQUFTLEVBQUVyQywwREFBTSxDQUFDc0MsT0FBdkI7QUFBQSxnQ0FDQyxxRUFBQyx3Q0FBRDtBQUFRLG9CQUFVLEVBQUMsU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFFQyxxRUFBQyx3Q0FBRDtBQUNDLG9CQUFVLEVBQUMsT0FEWjtBQUVDLGVBQUssRUFBRXhDLGNBQWMsR0FBRyxNQUFILEdBQVksT0FGbEM7QUFHQyxtQkFBUyxFQUFFRSwwREFBTSxDQUFDdUMsWUFIbkI7QUFJQyxpQkFBTyxFQUFFO0FBQUEsbUJBQU14QyxpQkFBaUIsQ0FBQyxDQUFDRCxjQUFGLENBQXZCO0FBQUEsV0FKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1REQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUF1RUMscUVBQUMsc0NBQUQ7QUFBTSxXQUFLLEVBQUMsTUFBWjtBQUFtQixlQUFTLEVBQUVzQyxpREFBRSxDQUFFcEMsMERBQU0sQ0FBQ3dDLE9BQVQsbUtBQzlCeEMsMERBQU0sQ0FBQ3lDLE1BRHVCLEVBQ2QzQyxjQURjLHlKQUU5QkUsMERBQU0sQ0FBQzBDLE1BRnVCLEVBRWQsQ0FBQzVDLGNBRmEsUUFBaEM7QUFBQSxpQkFJRUosT0FBTyxDQUFDOEMsT0FBUixDQUFnQnpCLEdBQWhCLENBQW9CLFVBQUE0QixDQUFDO0FBQUEsNEJBQ3JCO0FBQUEsa0NBQ0MscUVBQUMsd0NBQUQ7QUFBUSxrQkFBTSxFQUFFQTtBQUFoQixhQUF3QkEsQ0FBQyxDQUFDQyxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBRUMscUVBQUMseUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHFCO0FBQUEsT0FBckIsQ0FKRixlQVdDLHFFQUFDLDRDQUFEO0FBQVksaUJBQVMsRUFBRWxELE9BQU8sQ0FBQ2tEO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2RUQ7QUFBQSxrQkFERDtBQXdGQSxDQTNGTTs7R0FBTW5ELE87O0tBQUFBLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3R5cGVdL1thbGlhc10uNjNjMWVlZWUzMDgyNDhjY2M2NTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3RQcm9wcyB9IGZyb20gXCIuL1Byb2R1Y3QucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Qcm9kdWN0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIERpdmlkZXIsIFJhaXRpbmcsIFJldmlldywgUmV2aWV3Rm9ybSwgVGFnIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IGRlY2xPZk51bSwgcHJpY2VSdSB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2hlbHBlcnNcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdCA9ICh7IHByb2R1Y3QsIGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUHJvZHVjdFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IFtpc1Jldmlld09wZW5lZCwgc2V0SXNSZXZpZXdPcGVuZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8Q2FyZCBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0fT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG5cdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdHNyYz17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRE9NQUlOICsgcHJvZHVjdC5pbWFnZX1cclxuXHRcdFx0XHRcdFx0YWx0PXtwcm9kdWN0LnRpdGxlfVxyXG5cdFx0XHRcdFx0XHR3aWR0aD17NzB9XHJcblx0XHRcdFx0XHRcdGhlaWdodD17NzB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG5cdFx0XHRcdFx0e3Byb2R1Y3QudGl0bGV9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZX0+XHJcblx0XHRcdFx0XHR7cHJpY2VSdShwcm9kdWN0LnByaWNlKX1cclxuXHRcdFx0XHRcdHtwcm9kdWN0Lm9sZFByaWNlICYmIDxUYWcgY2xhc3NOYW1lPXtzdHlsZXMub2xkUHJpY2V9IGNvbG9yPVwiZ3JlZW5cIj57cHJpY2VSdShwcm9kdWN0LnByaWNlIC0gcHJvZHVjdC5vbGRQcmljZSl9PC9UYWc+fVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3JlZGl0fT5cclxuXHRcdFx0XHRcdHtwcmljZVJ1KHByb2R1Y3QuY3JlZGl0KX0vPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubW9udGh9PtC80LXRgTwvc3Bhbj5cdFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmFpdGluZ30+XHJcblx0XHRcdFx0XHQ8UmFpdGluZyByYWl0aW5nPXtwcm9kdWN0LnJldmlld0F2ZyA/PyBwcm9kdWN0LmluaXRpYWxSYWl0aW5nfT48L1JhaXRpbmc+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdzfT5cclxuXHRcdFx0XHRcdHtwcm9kdWN0LmNhdGVnb3JpZXMubWFwKCBjID0+IDxUYWcga2V5PXtjfSBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeX0gY29sb3I9XCJnaG9zdFwiPntjfTwvVGFnPil9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZVRpdGxlfT5cclxuXHRcdFx0XHRcdNGG0LXQvdCwXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVkaXRUaXRsZX0+XHJcblx0XHRcdFx0XHTQutGA0LXQtNC40YJcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhdGVUaXRsZX0+XHJcblx0XHRcdFx0XHR7cHJvZHVjdC5yZXZpZXdDb3VudH0ge2RlY2xPZk51bShwcm9kdWN0LnJldmlld0NvdW50LCBbXCLQvtGC0LfRi9CyXCIsIFwi0L7RgtC30YvQstCwXCIsIFwi0L7RgtC30YvQstC+0LJcIl0pfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxEaXZpZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhyfT48L0RpdmlkZXI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcblx0XHRcdFx0XHR7cHJvZHVjdC5kZXNjcmlwdGlvbn1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmV9PlxyXG5cdFx0XHRcdFx0e3Byb2R1Y3QuY2hhcmFjdGVyaXN0aWNzLm1hcChjID0+IChcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFyYWN0ZXJpc3RpY3N9IGtleT17Yy5uYW1lfT5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jaGFyYWN0ZXJpc3RpY3NOYW1lfT57Yy5uYW1lfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jaGFyYWN0ZXJpc3RpY3NEb3RzfT48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY2hhcmFjdGVyaXN0aWNzVmFsdWV9PntjLnZhbHVlfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkdkJsb2NrfT5cclxuXHRcdFx0XHRcdHtwcm9kdWN0LmFkdmFudGFnZXMgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZHZhbnRhZ2VzfT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkdlRpdGxlfT7Qn9GA0LXQuNC80YPRidC10YHRgtCy0LA8L2Rpdj5cdFxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+e3Byb2R1Y3QuYWR2YW50YWdlc308L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR7cHJvZHVjdC5kaXNhZHZhbnRhZ2VzICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGlzYWR2YW50YWdlc30+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZHZUaXRsZX0+0J3QtdC00L7RgdGC0LDRgtC60Lg8L2Rpdj5cdFxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+e3Byb2R1Y3QuZGlzYWR2YW50YWdlc308L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PERpdmlkZXIgY2xhc3NOYW1lPXtjbihzdHlsZXMuaHIsIHN0eWxlcy5ocjIpfT48L0RpdmlkZXI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zfT5cclxuXHRcdFx0XHRcdDxCdXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIj7Qo9C30L3QsNGC0Ywg0L/QvtC00YDQvtCx0L3QtdC1PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIFxyXG5cdFx0XHRcdFx0XHRhcHBlYXJhbmNlPVwiZ2hvc3RcIiBcclxuXHRcdFx0XHRcdFx0YXJyb3c9e2lzUmV2aWV3T3BlbmVkID8gJ2Rvd24nIDogJ3JpZ2h0J30gXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLnJldmlld0J1dHRvbn1cclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0SXNSZXZpZXdPcGVuZWQoIWlzUmV2aWV3T3BlbmVkKX1cclxuXHRcdFx0XHRcdD7Qp9C40YLQsNGC0Ywg0L7RgtC30YvQstGLPC9CdXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0PENhcmQgY29sb3I9XCJibHVlXCIgY2xhc3NOYW1lPXtjbiggc3R5bGVzLnJldmlld3MsIHtcclxuXHRcdFx0XHRbc3R5bGVzLm9wZW5lZF06IGlzUmV2aWV3T3BlbmVkLFxyXG5cdFx0XHRcdFtzdHlsZXMuY2xvc2VkXTogIWlzUmV2aWV3T3BlbmVkXHJcblx0XHRcdH0pfT5cclxuXHRcdFx0XHR7cHJvZHVjdC5yZXZpZXdzLm1hcChyID0+IChcclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxSZXZpZXcgcmV2aWV3PXtyfSBrZXk9e3IuX2lkfT48L1Jldmlldz5cclxuXHRcdFx0XHRcdFx0PERpdmlkZXI+PC9EaXZpZGVyPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8UmV2aWV3Rm9ybSBwcm9kdWN0SWQ9e3Byb2R1Y3QuX2lkfT48L1Jldmlld0Zvcm0+XHJcblx0XHRcdDwvQ2FyZD5cdFx0XHJcblx0XHQ8Lz5cclxuXHRcdFxyXG5cdCk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=