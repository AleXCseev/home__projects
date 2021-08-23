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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .. */ "./components/index.ts");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/helpers */ "./helpers/helpers.tsx");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");




var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\Product\\Product.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var Product = Object(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"])(_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(_c = _s(function (_ref, ref) {
  var _product$reviewAvg;

  _s();

  var product = _ref.product,
      className = _ref.className,
      props = Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["product", "className"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      isReviewOpened = _useState[0],
      setIsReviewOpened = _useState[1];

  var reviewRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  var variants = {
    visible: {
      opacity: 1,
      height: "auto"
    },
    hidden: {
      opacity: 0,
      height: 0
    }
  };

  var scrollToReview = function scrollToReview() {
    var _reviewRef$current;

    setIsReviewOpened(true);
    (_reviewRef$current = reviewRef.current) === null || _reviewRef$current === void 0 ? void 0 : _reviewRef$current.scrollIntoView({
      behavior: 'smooth',
      block: "start"
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: className
  }, props), {}, {
    ref: ref,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Card"], {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.product,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_8___default.a, {
          src: "https://courses-top.ru" + product.image,
          alt: product.title,
          width: 70,
          height: 70
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
        children: product.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.price,
        children: [Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_7__["priceRu"])(product.price), product.oldPrice && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Tag"], {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.oldPrice,
          color: "green",
          children: Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_7__["priceRu"])(product.price - product.oldPrice)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.credit,
        children: [Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_7__["priceRu"])(product.credit), "/", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.month,
          children: "\u043C\u0435\u0441"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 32
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.raiting,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Raiting"], {
          raiting: (_product$reviewAvg = product.reviewAvg) !== null && _product$reviewAvg !== void 0 ? _product$reviewAvg : product.initialRating
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tags,
        children: product.categories.map(function (c) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Tag"], {
            className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.category,
            color: "ghost",
            children: c
          }, c, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.priceTitle,
        children: "\u0446\u0435\u043D\u0430"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.creditTitle,
        children: "\u043A\u0440\u0435\u0434\u0438\u0442"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.rateTitle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "#ref",
          onClick: scrollToReview,
          children: [product.reviewCount, " ", Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_7__["declOfNum"])(product.reviewCount, ["отзыв", "отзыва", "отзывов"])]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Divider"], {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.hr
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.description,
        children: product.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 5
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
              lineNumber: 79,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.characteristicsDots
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.characteristicsValue,
              children: c.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 8
            }, _this)]
          }, c.name, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.advBlock,
        children: [product.advantages && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.advantages,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.advTitle,
            children: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 8
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            children: product.advantages
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 8
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 7
        }, _this), product.disadvantages && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.disadvantages,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.advTitle,
            children: "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043A\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 8
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            children: product.disadvantages
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 8
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Divider"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.hr, _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.hr2)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.actions,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Button"], {
          appearance: "primary",
          children: "\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Button"], {
          appearance: "ghost",
          arrow: isReviewOpened ? "down" : "right",
          className: _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.reviewButton,
          onClick: function onClick() {
            return setIsReviewOpened(!isReviewOpened);
          },
          children: "\u0427\u0438\u0442\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432\u044B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].div, {
      animate: isReviewOpened ? "visible" : "hidden",
      variants: variants,
      initial: "hidden",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Card"], {
        color: "blue",
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.reviews),
        ref: reviewRef,
        children: [product.reviews.map(function (r) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Review"], {
              review: r
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Divider"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 8
            }, _this)]
          }, r._id, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 7
          }, _this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["ReviewForm"], {
          productId: product._id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 4
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 3
  }, _this);
}, "XTvmSZt+KXHB5ytFDlDJTVPwaLU=")));
_c3 = Product;

var _c, _c2, _c3;

$RefreshReg$(_c, "Product$motion$forwardRef");
$RefreshReg$(_c2, "Product$motion");
$RefreshReg$(_c3, "Product");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0L1Byb2R1Y3QudHN4Il0sIm5hbWVzIjpbIlByb2R1Y3QiLCJtb3Rpb24iLCJmb3J3YXJkUmVmIiwicmVmIiwicHJvZHVjdCIsImNsYXNzTmFtZSIsInByb3BzIiwidXNlU3RhdGUiLCJpc1Jldmlld09wZW5lZCIsInNldElzUmV2aWV3T3BlbmVkIiwicmV2aWV3UmVmIiwidXNlUmVmIiwidmFyaWFudHMiLCJ2aXNpYmxlIiwib3BhY2l0eSIsImhlaWdodCIsImhpZGRlbiIsInNjcm9sbFRvUmV2aWV3IiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsInN0eWxlcyIsImxvZ28iLCJwcm9jZXNzIiwiaW1hZ2UiLCJ0aXRsZSIsInByaWNlIiwicHJpY2VSdSIsIm9sZFByaWNlIiwiY3JlZGl0IiwibW9udGgiLCJyYWl0aW5nIiwicmV2aWV3QXZnIiwiaW5pdGlhbFJhdGluZyIsInRhZ3MiLCJjYXRlZ29yaWVzIiwibWFwIiwiYyIsImNhdGVnb3J5IiwicHJpY2VUaXRsZSIsImNyZWRpdFRpdGxlIiwicmF0ZVRpdGxlIiwicmV2aWV3Q291bnQiLCJkZWNsT2ZOdW0iLCJociIsImRlc2NyaXB0aW9uIiwiZmVhdHVyZSIsImNoYXJhY3RlcmlzdGljcyIsImNoYXJhY3RlcmlzdGljc05hbWUiLCJuYW1lIiwiY2hhcmFjdGVyaXN0aWNzRG90cyIsImNoYXJhY3RlcmlzdGljc1ZhbHVlIiwidmFsdWUiLCJhZHZCbG9jayIsImFkdmFudGFnZXMiLCJhZHZUaXRsZSIsImRpc2FkdmFudGFnZXMiLCJjbiIsImhyMiIsImFjdGlvbnMiLCJyZXZpZXdCdXR0b24iLCJyZXZpZXdzIiwiciIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxPQUFPLEdBQUdDLDREQUFNLG9CQUFDQyx3REFBVSxTQUFDLGdCQUFpREMsR0FBakQsRUFBb0c7QUFBQTs7QUFBQTs7QUFBQSxNQUFqR0MsT0FBaUcsUUFBakdBLE9BQWlHO0FBQUEsTUFBeEZDLFNBQXdGLFFBQXhGQSxTQUF3RjtBQUFBLE1BQTFFQyxLQUEwRTs7QUFBQSxrQkFDaEdDLHNEQUFRLENBQVUsS0FBVixDQUR3RjtBQUFBLE1BQ3JJQyxjQURxSTtBQUFBLE1BQ3JIQyxpQkFEcUg7O0FBRTVJLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBaUIsSUFBakIsQ0FBeEI7QUFFQSxNQUFNQyxRQUFRLEdBQUc7QUFDaEJDLFdBQU8sRUFBRTtBQUNSQyxhQUFPLEVBQUUsQ0FERDtBQUVSQyxZQUFNLEVBQUU7QUFGQSxLQURPO0FBS2hCQyxVQUFNLEVBQUU7QUFDUEYsYUFBTyxFQUFFLENBREY7QUFFUEMsWUFBTSxFQUFFO0FBRkQ7QUFMUSxHQUFqQjs7QUFXQSxNQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFDNUJSLHFCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDQSwwQkFBQUMsU0FBUyxDQUFDUSxPQUFWLDBFQUFtQkMsY0FBbkIsQ0FBa0M7QUFDakNDLGNBQVEsRUFBRSxRQUR1QjtBQUVqQ0MsV0FBSyxFQUFFO0FBRjBCLEtBQWxDO0FBSUEsR0FORDs7QUFRQSxzQkFDQztBQUFLLGFBQVMsRUFBRWhCO0FBQWhCLEtBQStCQyxLQUEvQjtBQUFzQyxPQUFHLEVBQUVILEdBQTNDO0FBQUEsNEJBQ0MscUVBQUMsc0NBQUQ7QUFBTSxlQUFTLEVBQUVtQiwwREFBTSxDQUFDbEIsT0FBeEI7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUVrQiwwREFBTSxDQUFDQyxJQUF2QjtBQUFBLCtCQUNDLHFFQUFDLGlEQUFEO0FBQ0MsYUFBRyxFQUFFQyx3QkFBQSxHQUFpQ3BCLE9BQU8sQ0FBQ3FCLEtBRC9DO0FBRUMsYUFBRyxFQUFFckIsT0FBTyxDQUFDc0IsS0FGZDtBQUdDLGVBQUssRUFBRSxFQUhSO0FBSUMsZ0JBQU0sRUFBRTtBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFTQztBQUFLLGlCQUFTLEVBQUVKLDBEQUFNLENBQUNJLEtBQXZCO0FBQUEsa0JBQStCdEIsT0FBTyxDQUFDc0I7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRELGVBVUM7QUFBSyxpQkFBUyxFQUFFSiwwREFBTSxDQUFDSyxLQUF2QjtBQUFBLG1CQUNFQyxnRUFBTyxDQUFDeEIsT0FBTyxDQUFDdUIsS0FBVCxDQURULEVBRUV2QixPQUFPLENBQUN5QixRQUFSLGlCQUNBLHFFQUFDLHFDQUFEO0FBQUssbUJBQVMsRUFBRVAsMERBQU0sQ0FBQ08sUUFBdkI7QUFBaUMsZUFBSyxFQUFDLE9BQXZDO0FBQUEsb0JBQ0VELGdFQUFPLENBQUN4QixPQUFPLENBQUN1QixLQUFSLEdBQWdCdkIsT0FBTyxDQUFDeUIsUUFBekI7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZELGVBa0JDO0FBQUssaUJBQVMsRUFBRVAsMERBQU0sQ0FBQ1EsTUFBdkI7QUFBQSxtQkFDRUYsZ0VBQU8sQ0FBQ3hCLE9BQU8sQ0FBQzBCLE1BQVQsQ0FEVCxvQkFDMkI7QUFBTSxtQkFBUyxFQUFFUiwwREFBTSxDQUFDUyxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbEJELGVBcUJDO0FBQUssaUJBQVMsRUFBRVQsMERBQU0sQ0FBQ1UsT0FBdkI7QUFBQSwrQkFDQyxxRUFBQyx5Q0FBRDtBQUFTLGlCQUFPLHdCQUFFNUIsT0FBTyxDQUFDNkIsU0FBVixtRUFBdUI3QixPQUFPLENBQUM4QjtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCRCxlQXdCQztBQUFLLGlCQUFTLEVBQUVaLDBEQUFNLENBQUNhLElBQXZCO0FBQUEsa0JBQ0UvQixPQUFPLENBQUNnQyxVQUFSLENBQW1CQyxHQUFuQixDQUF1QixVQUFDQyxDQUFEO0FBQUEsOEJBQ3ZCLHFFQUFDLHFDQUFEO0FBQWEscUJBQVMsRUFBRWhCLDBEQUFNLENBQUNpQixRQUEvQjtBQUF5QyxpQkFBSyxFQUFDLE9BQS9DO0FBQUEsc0JBQ0VEO0FBREYsYUFBVUEsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUR1QjtBQUFBLFNBQXZCO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXhCRCxlQStCQztBQUFLLGlCQUFTLEVBQUVoQiwwREFBTSxDQUFDa0IsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEvQkQsZUFnQ0M7QUFBSyxpQkFBUyxFQUFFbEIsMERBQU0sQ0FBQ21CLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaENELGVBaUNDO0FBQUssaUJBQVMsRUFBRW5CLDBEQUFNLENBQUNvQixTQUF2QjtBQUFBLCtCQUNDO0FBQUcsY0FBSSxFQUFDLE1BQVI7QUFBZSxpQkFBTyxFQUFFekIsY0FBeEI7QUFBQSxxQkFDRWIsT0FBTyxDQUFDdUMsV0FEVixFQUN1QixHQUR2QixFQUVFQyxrRUFBUyxDQUFDeEMsT0FBTyxDQUFDdUMsV0FBVCxFQUFzQixDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLFNBQXBCLENBQXRCLENBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpDRCxlQXVDQyxxRUFBQyx5Q0FBRDtBQUFTLGlCQUFTLEVBQUVyQiwwREFBTSxDQUFDdUI7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZDRCxlQXdDQztBQUFLLGlCQUFTLEVBQUV2QiwwREFBTSxDQUFDd0IsV0FBdkI7QUFBQSxrQkFBcUMxQyxPQUFPLENBQUMwQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeENELGVBeUNDO0FBQUssaUJBQVMsRUFBRXhCLDBEQUFNLENBQUN5QixPQUF2QjtBQUFBLGtCQUNFM0MsT0FBTyxDQUFDNEMsZUFBUixDQUF3QlgsR0FBeEIsQ0FBNEIsVUFBQ0MsQ0FBRDtBQUFBLDhCQUM1QjtBQUFLLHFCQUFTLEVBQUVoQiwwREFBTSxDQUFDMEIsZUFBdkI7QUFBQSxvQ0FDQztBQUFNLHVCQUFTLEVBQUUxQiwwREFBTSxDQUFDMkIsbUJBQXhCO0FBQUEsd0JBQThDWCxDQUFDLENBQUNZO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFFQztBQUFNLHVCQUFTLEVBQUU1QiwwREFBTSxDQUFDNkI7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRCxlQUdDO0FBQU0sdUJBQVMsRUFBRTdCLDBEQUFNLENBQUM4QixvQkFBeEI7QUFBQSx3QkFBK0NkLENBQUMsQ0FBQ2U7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRDtBQUFBLGFBQTZDZixDQUFDLENBQUNZLElBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRDRCO0FBQUEsU0FBNUI7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBekNELGVBa0RDO0FBQUssaUJBQVMsRUFBRTVCLDBEQUFNLENBQUNnQyxRQUF2QjtBQUFBLG1CQUNFbEQsT0FBTyxDQUFDbUQsVUFBUixpQkFDQTtBQUFLLG1CQUFTLEVBQUVqQywwREFBTSxDQUFDaUMsVUFBdkI7QUFBQSxrQ0FDQztBQUFLLHFCQUFTLEVBQUVqQywwREFBTSxDQUFDa0MsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFFQztBQUFBLHNCQUFNcEQsT0FBTyxDQUFDbUQ7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQU9FbkQsT0FBTyxDQUFDcUQsYUFBUixpQkFDQTtBQUFLLG1CQUFTLEVBQUVuQywwREFBTSxDQUFDbUMsYUFBdkI7QUFBQSxrQ0FDQztBQUFLLHFCQUFTLEVBQUVuQywwREFBTSxDQUFDa0MsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFFQztBQUFBLHNCQUFNcEQsT0FBTyxDQUFDcUQ7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsREQsZUFnRUMscUVBQUMseUNBQUQ7QUFBUyxpQkFBUyxFQUFFQyxpREFBRSxDQUFDcEMsMERBQU0sQ0FBQ3VCLEVBQVIsRUFBWXZCLDBEQUFNLENBQUNxQyxHQUFuQjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEVELGVBaUVDO0FBQUssaUJBQVMsRUFBRXJDLDBEQUFNLENBQUNzQyxPQUF2QjtBQUFBLGdDQUNDLHFFQUFDLHdDQUFEO0FBQVEsb0JBQVUsRUFBQyxTQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDLHFFQUFDLHdDQUFEO0FBQ0Msb0JBQVUsRUFBQyxPQURaO0FBRUMsZUFBSyxFQUFFcEQsY0FBYyxHQUFHLE1BQUgsR0FBWSxPQUZsQztBQUdDLG1CQUFTLEVBQUVjLDBEQUFNLENBQUN1QyxZQUhuQjtBQUlDLGlCQUFPLEVBQUU7QUFBQSxtQkFBTXBELGlCQUFpQixDQUFDLENBQUNELGNBQUYsQ0FBdkI7QUFBQSxXQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpFRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQThFQyxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxhQUFPLEVBQUVBLGNBQWMsR0FBRyxTQUFILEdBQWUsUUFBbEQ7QUFBNEQsY0FBUSxFQUFFSSxRQUF0RTtBQUFnRixhQUFPLEVBQUMsUUFBeEY7QUFBQSw2QkFDQyxxRUFBQyxzQ0FBRDtBQUFNLGFBQUssRUFBQyxNQUFaO0FBQW1CLGlCQUFTLEVBQUU4QyxpREFBRSxDQUFDcEMsMERBQU0sQ0FBQ3dDLE9BQVIsQ0FBaEM7QUFBa0QsV0FBRyxFQUFFcEQsU0FBdkQ7QUFBQSxtQkFDRU4sT0FBTyxDQUFDMEQsT0FBUixDQUFnQnpCLEdBQWhCLENBQW9CLFVBQUMwQixDQUFEO0FBQUEsOEJBQ3BCO0FBQUEsb0NBQ0MscUVBQUMsd0NBQUQ7QUFBUSxvQkFBTSxFQUFFQTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBRUMscUVBQUMseUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRDtBQUFBLGFBQVVBLENBQUMsQ0FBQ0MsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURvQjtBQUFBLFNBQXBCLENBREYsZUFPQyxxRUFBQyw0Q0FBRDtBQUFZLG1CQUFTLEVBQUU1RCxPQUFPLENBQUM0RDtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5RUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUE0RkEsQ0FuSHVDLGtDQUFYLENBQXRCO01BQU1oRSxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1t0eXBlXS9bYWxpYXNdLjM2MTU1YTAyYWU1NTc1NmZiZWFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0UHJvcHMgfSBmcm9tIFwiLi9Qcm9kdWN0LnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUHJvZHVjdC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRm9yd2FyZGVkUmVmLCBmb3J3YXJkUmVmLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgRGl2aWRlciwgUmFpdGluZywgUmV2aWV3LCBSZXZpZXdGb3JtLCBUYWcgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgZGVjbE9mTnVtLCBwcmljZVJ1IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvaGVscGVyc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0ID0gbW90aW9uKGZvcndhcmRSZWYoKHsgcHJvZHVjdCwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBQcm9kdWN0UHJvcHMsIHJlZjogRm9yd2FyZGVkUmVmPEhUTUxEaXZFbGVtZW50Pik6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRjb25zdCBbaXNSZXZpZXdPcGVuZWQsIHNldElzUmV2aWV3T3BlbmVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cdGNvbnN0IHJldmlld1JlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcblxyXG5cdGNvbnN0IHZhcmlhbnRzID0ge1xyXG5cdFx0dmlzaWJsZToge1xyXG5cdFx0XHRvcGFjaXR5OiAxLCBcclxuXHRcdFx0aGVpZ2h0OiBcImF1dG9cIixcclxuXHRcdH0sXHJcblx0XHRoaWRkZW46IHtcclxuXHRcdFx0b3BhY2l0eTogMCxcclxuXHRcdFx0aGVpZ2h0OiAwLFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3Qgc2Nyb2xsVG9SZXZpZXcgPSAoKSA9PiB7XHJcblx0XHRzZXRJc1Jldmlld09wZW5lZCh0cnVlKVxyXG5cdFx0cmV2aWV3UmVmLmN1cnJlbnQ/LnNjcm9sbEludG9WaWV3KHtcclxuXHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxyXG5cdFx0XHRibG9jazogXCJzdGFydFwiXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5wcm9wc30gcmVmPXtyZWZ9PlxyXG5cdFx0XHQ8Q2FyZCBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0fT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG5cdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdHNyYz17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRE9NQUlOICsgcHJvZHVjdC5pbWFnZX1cclxuXHRcdFx0XHRcdFx0YWx0PXtwcm9kdWN0LnRpdGxlfVxyXG5cdFx0XHRcdFx0XHR3aWR0aD17NzB9XHJcblx0XHRcdFx0XHRcdGhlaWdodD17NzB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntwcm9kdWN0LnRpdGxlfTwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpY2V9PlxyXG5cdFx0XHRcdFx0e3ByaWNlUnUocHJvZHVjdC5wcmljZSl9XHJcblx0XHRcdFx0XHR7cHJvZHVjdC5vbGRQcmljZSAmJiAoXHJcblx0XHRcdFx0XHRcdDxUYWcgY2xhc3NOYW1lPXtzdHlsZXMub2xkUHJpY2V9IGNvbG9yPVwiZ3JlZW5cIj5cclxuXHRcdFx0XHRcdFx0XHR7cHJpY2VSdShwcm9kdWN0LnByaWNlIC0gcHJvZHVjdC5vbGRQcmljZSl9XHJcblx0XHRcdFx0XHRcdDwvVGFnPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWRpdH0+XHJcblx0XHRcdFx0XHR7cHJpY2VSdShwcm9kdWN0LmNyZWRpdCl9LzxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1vbnRofT7QvNC10YE8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYWl0aW5nfT5cclxuXHRcdFx0XHRcdDxSYWl0aW5nIHJhaXRpbmc9e3Byb2R1Y3QucmV2aWV3QXZnID8/IHByb2R1Y3QuaW5pdGlhbFJhdGluZ30+PC9SYWl0aW5nPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnc30+XHJcblx0XHRcdFx0XHR7cHJvZHVjdC5jYXRlZ29yaWVzLm1hcCgoYykgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8VGFnIGtleT17Y30gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnl9IGNvbG9yPVwiZ2hvc3RcIj5cclxuXHRcdFx0XHRcdFx0XHR7Y31cclxuXHRcdFx0XHRcdFx0PC9UYWc+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByaWNlVGl0bGV9PtGG0LXQvdCwPC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVkaXRUaXRsZX0+0LrRgNC10LTQuNGCPC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXRlVGl0bGV9PlxyXG5cdFx0XHRcdFx0PGEgaHJlZj1cIiNyZWZcIiBvbkNsaWNrPXtzY3JvbGxUb1Jldmlld30+XHJcblx0XHRcdFx0XHRcdHtwcm9kdWN0LnJldmlld0NvdW50fXtcIiBcIn1cclxuXHRcdFx0XHRcdFx0e2RlY2xPZk51bShwcm9kdWN0LnJldmlld0NvdW50LCBbXCLQvtGC0LfRi9CyXCIsIFwi0L7RgtC30YvQstCwXCIsIFwi0L7RgtC30YvQstC+0LJcIl0pfVxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxEaXZpZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhyfT48L0RpdmlkZXI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlfT5cclxuXHRcdFx0XHRcdHtwcm9kdWN0LmNoYXJhY3RlcmlzdGljcy5tYXAoKGMpID0+IChcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFyYWN0ZXJpc3RpY3N9IGtleT17Yy5uYW1lfT5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jaGFyYWN0ZXJpc3RpY3NOYW1lfT57Yy5uYW1lfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jaGFyYWN0ZXJpc3RpY3NEb3RzfT48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY2hhcmFjdGVyaXN0aWNzVmFsdWV9PntjLnZhbHVlfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkdkJsb2NrfT5cclxuXHRcdFx0XHRcdHtwcm9kdWN0LmFkdmFudGFnZXMgJiYgKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkdmFudGFnZXN9PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWR2VGl0bGV9PtCf0YDQtdC40LzRg9GJ0LXRgdGC0LLQsDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+e3Byb2R1Y3QuYWR2YW50YWdlc308L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0e3Byb2R1Y3QuZGlzYWR2YW50YWdlcyAmJiAoXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGlzYWR2YW50YWdlc30+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZHZUaXRsZX0+0J3QtdC00L7RgdGC0LDRgtC60Lg8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2Pntwcm9kdWN0LmRpc2FkdmFudGFnZXN9PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8RGl2aWRlciBjbGFzc05hbWU9e2NuKHN0eWxlcy5ociwgc3R5bGVzLmhyMil9PjwvRGl2aWRlcj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnN9PlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiPtCj0LfQvdCw0YLRjCDQv9C+0LTRgNC+0LHQvdC10LU8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0YXBwZWFyYW5jZT1cImdob3N0XCJcclxuXHRcdFx0XHRcdFx0YXJyb3c9e2lzUmV2aWV3T3BlbmVkID8gXCJkb3duXCIgOiBcInJpZ2h0XCJ9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLnJldmlld0J1dHRvbn1cclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0SXNSZXZpZXdPcGVuZWQoIWlzUmV2aWV3T3BlbmVkKX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx00KfQuNGC0LDRgtGMINC+0YLQt9GL0LLRi1xyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0PG1vdGlvbi5kaXYgYW5pbWF0ZT17aXNSZXZpZXdPcGVuZWQgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9IHZhcmlhbnRzPXt2YXJpYW50c30gaW5pdGlhbD1cImhpZGRlblwiPlxyXG5cdFx0XHRcdDxDYXJkIGNvbG9yPVwiYmx1ZVwiIGNsYXNzTmFtZT17Y24oc3R5bGVzLnJldmlld3MpfSByZWY9e3Jldmlld1JlZn0+XHJcblx0XHRcdFx0XHR7cHJvZHVjdC5yZXZpZXdzLm1hcCgocikgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGtleT17ci5faWR9PlxyXG5cdFx0XHRcdFx0XHRcdDxSZXZpZXcgcmV2aWV3PXtyfT48L1Jldmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8RGl2aWRlcj48L0RpdmlkZXI+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8UmV2aWV3Rm9ybSBwcm9kdWN0SWQ9e3Byb2R1Y3QuX2lkfT48L1Jldmlld0Zvcm0+XHJcblx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHQ8L21vdGlvbi5kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59KSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=