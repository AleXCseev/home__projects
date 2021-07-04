webpackHotUpdate_N_E("pages/index",{

/***/ "./layout/Menu/Menu.module.css":
/*!*************************************!*\
  !*** ./layout/Menu/Menu.module.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Menu.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./layout/Menu/Menu.module.css");

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
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Menu.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./layout/Menu/Menu.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Menu.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./layout/Menu/Menu.module.css");

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

/***/ "./layout/Menu/Menu.tsx":
/*!******************************!*\
  !*** ./layout/Menu/Menu.tsx ***!
  \******************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/app.context */ "./context/app.context.tsx");
/* harmony import */ var _icons_courses_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/courses.svg */ "./layout/Menu/icons/courses.svg");
/* harmony import */ var _icons_services_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/services.svg */ "./layout/Menu/icons/services.svg");
/* harmony import */ var _icons_books_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/books.svg */ "./layout/Menu/icons/books.svg");
/* harmony import */ var _icons_products_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/products.svg */ "./layout/Menu/icons/products.svg");
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Menu.module.css */ "./layout/Menu/Menu.module.css");
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../interfaces/toppage.interface */ "./interfaces/toppage.interface.ts");


var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\layout\\Menu\\Menu.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var firstLevelMenu = [{
  route: "courses",
  name: "Курсы",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_courses_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 46
  }, undefined),
  id: _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_8__["TopLevelCategory"].Courses
}, {
  route: "services",
  name: "Сервисы",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_services_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 49
  }, undefined),
  id: _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_8__["TopLevelCategory"].Services
}, {
  route: "books",
  name: "Книги",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_books_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 44
  }, undefined),
  id: _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_8__["TopLevelCategory"].Books
}, {
  route: "products",
  name: "Продукты",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_products_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 50
  }, undefined),
  id: _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_8__["TopLevelCategory"].Products
}];
var Menu = function Menu() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_app_context__WEBPACK_IMPORTED_MODULE_2__["AppContext"]),
      menu = _useContext.menu,
      setMenu = _useContext.setMenu,
      firstCategory = _useContext.firstCategory;

  var buildFirstLevel = function buildFirstLevel() {};

  var buildSecondLevel = function buildSecondLevel() {};

  var buildThirdLevel = function buildThirdLevel() {};

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default.a,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: menu.map(function (m) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: m._id.secondCategory
        }, m._id.secondCategory, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, _this);
};

_s(Menu, "dpiMx+OJnXwQH5PEJrOxOYkvptM=");

_c = Menu;

var _c;

$RefreshReg$(_c, "Menu");

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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./layout/Menu/Menu.module.css":
/*!*************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./layout/Menu/Menu.module.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L01lbnUvTWVudS5tb2R1bGUuY3NzPzJhODAiLCJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dC9NZW51L01lbnUudHN4Iiwid2VicGFjazovL19OX0UvLi9sYXlvdXQvTWVudS9NZW51Lm1vZHVsZS5jc3MiXSwibmFtZXMiOlsiZmlyc3RMZXZlbE1lbnUiLCJyb3V0ZSIsIm5hbWUiLCJpY29uIiwiaWQiLCJUb3BMZXZlbENhdGVnb3J5IiwiQ291cnNlcyIsIlNlcnZpY2VzIiwiQm9va3MiLCJQcm9kdWN0cyIsIk1lbnUiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsIm1lbnUiLCJzZXRNZW51IiwiZmlyc3RDYXRlZ29yeSIsImJ1aWxkRmlyc3RMZXZlbCIsImJ1aWxkU2Vjb25kTGV2ZWwiLCJidWlsZFRoaXJkTGV2ZWwiLCJzdHlsZXMiLCJtYXAiLCJtIiwiX2lkIiwic2Vjb25kQ2F0ZWdvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLFVBQVUsbUJBQU8sQ0FBQyxzTkFBMkc7QUFDN0gsMEJBQTBCLG1CQUFPLENBQUMsK1RBQTZLOztBQUUvTTs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQSxrRUFBa0UsaUJBQWlCLGNBQWMsTUFBTSxZQUFZLGlDQUFpQztBQUNwSixVQUFVLGdCQUFnQixlQUFlLFlBQVksaUNBQWlDO0FBQ3RGLFVBQVUsVUFBVSxlQUFlO0FBQ25DOztBQUVBO0FBQ0EsTUFBTSwrVEFBNks7QUFDbkw7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQywrVEFBNks7O0FBRXZNOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFvQyxHQUFHLENBQ3pDO0FBQUVDLE9BQUssRUFBRSxTQUFUO0FBQW9CQyxNQUFJLEVBQUUsT0FBMUI7QUFBbUNDLE1BQUksZUFBRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXpDO0FBQXNFQyxJQUFFLEVBQUVDLDhFQUFnQixDQUFDQztBQUEzRixDQUR5QyxFQUV6QztBQUFFTCxPQUFLLEVBQUUsVUFBVDtBQUFxQkMsTUFBSSxFQUFFLFNBQTNCO0FBQXNDQyxNQUFJLGVBQUUscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE1QztBQUEyRUMsSUFBRSxFQUFFQyw4RUFBZ0IsQ0FBQ0U7QUFBaEcsQ0FGeUMsRUFHekM7QUFBRU4sT0FBSyxFQUFFLE9BQVQ7QUFBa0JDLE1BQUksRUFBRSxPQUF4QjtBQUFpQ0MsTUFBSSxlQUFFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBdkM7QUFBZ0VDLElBQUUsRUFBRUMsOEVBQWdCLENBQUNHO0FBQXJGLENBSHlDLEVBSXpDO0FBQUVQLE9BQUssRUFBRSxVQUFUO0FBQXFCQyxNQUFJLEVBQUUsVUFBM0I7QUFBdUNDLE1BQUksZUFBRSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTdDO0FBQTRFQyxJQUFFLEVBQUVDLDhFQUFnQixDQUFDSTtBQUFqRyxDQUp5QyxDQUE3QztBQU9PLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQW1CO0FBQUE7O0FBQUEsb0JBRU1DLHdEQUFVLENBQUNDLCtEQUFELENBRmhCO0FBQUEsTUFFM0JDLElBRjJCLGVBRTNCQSxJQUYyQjtBQUFBLE1BRXJCQyxPQUZxQixlQUVyQkEsT0FGcUI7QUFBQSxNQUVaQyxhQUZZLGVBRVpBLGFBRlk7O0FBSW5DLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTSxDQUU3QixDQUZEOztBQUlBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTSxDQUU5QixDQUZEOztBQUlBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTSxDQUU3QixDQUZEOztBQUlBLHNCQUNJO0FBQUssYUFBUyxFQUFFQyx1REFBaEI7QUFBQSwyQkFDSTtBQUFBLGdCQUNLTixJQUFJLENBQUNPLEdBQUwsQ0FBUyxVQUFDQyxDQUFEO0FBQUEsNEJBQ047QUFBQSxvQkFBZ0NBLENBQUMsQ0FBQ0MsR0FBRixDQUFNQztBQUF0QyxXQUFTRixDQUFDLENBQUNDLEdBQUYsQ0FBTUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURNO0FBQUEsT0FBVDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFVSCxDQTFCTTs7R0FBTWIsSTs7S0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJiO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsb0hBQXlEO0FBQ25HO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxVQUFVLGtFQUFrRTtBQUNuSDtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI2YmM2MTIwMjFlMjY0NjgxODdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL01lbnUubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vTWVudS5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vTWVudS5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvYXBwLmNvbnRleHRcIlxyXG5pbXBvcnQgeyBGaXJzdExldmVsTWVudUl0ZW0gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9tZW51LmludGVmYWNlXCJcclxuaW1wb3J0IENvdXJzZXNJY29uIGZyb20gXCIuL2ljb25zL2NvdXJzZXMuc3ZnXCJcclxuaW1wb3J0IFNlcnZpY2VzSWNvbiBmcm9tIFwiLi9pY29ucy9zZXJ2aWNlcy5zdmdcIlxyXG5pbXBvcnQgQm9va3NJY29uIGZyb20gXCIuL2ljb25zL2Jvb2tzLnN2Z1wiXHJcbmltcG9ydCBQcm9kdWN0c0ljb24gZnJvbSBcIi4vaWNvbnMvcHJvZHVjdHMuc3ZnXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9NZW51Lm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyBUb3BMZXZlbENhdGVnb3J5IH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvdG9wcGFnZS5pbnRlcmZhY2VcIlxyXG5cclxuY29uc3QgZmlyc3RMZXZlbE1lbnU6IEZpcnN0TGV2ZWxNZW51SXRlbVtdID0gW1xyXG4gICAgeyByb3V0ZTogXCJjb3Vyc2VzXCIsIG5hbWU6IFwi0JrRg9GA0YHRi1wiLCBpY29uOiA8Q291cnNlc0ljb24+PC9Db3Vyc2VzSWNvbj4sIGlkOiBUb3BMZXZlbENhdGVnb3J5LkNvdXJzZXMgfSxcclxuICAgIHsgcm91dGU6IFwic2VydmljZXNcIiwgbmFtZTogXCLQodC10YDQstC40YHRi1wiLCBpY29uOiA8U2VydmljZXNJY29uPjwvU2VydmljZXNJY29uPiwgaWQ6IFRvcExldmVsQ2F0ZWdvcnkuU2VydmljZXMgfSxcclxuICAgIHsgcm91dGU6IFwiYm9va3NcIiwgbmFtZTogXCLQmtC90LjQs9C4XCIsIGljb246IDxCb29rc0ljb24+PC9Cb29rc0ljb24+LCBpZDogVG9wTGV2ZWxDYXRlZ29yeS5Cb29rcyB9LFxyXG4gICAgeyByb3V0ZTogXCJwcm9kdWN0c1wiLCBuYW1lOiBcItCf0YDQvtC00YPQutGC0YtcIiwgaWNvbjogPFByb2R1Y3RzSWNvbj48L1Byb2R1Y3RzSWNvbj4sIGlkOiBUb3BMZXZlbENhdGVnb3J5LlByb2R1Y3RzIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHJcbiAgICBjb25zdCB7IG1lbnUsIHNldE1lbnUsIGZpcnN0Q2F0ZWdvcnkgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dClcclxuXHJcbiAgICBjb25zdCBidWlsZEZpcnN0TGV2ZWwgPSAoKSA9PiB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1aWxkU2Vjb25kTGV2ZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnVpbGRUaGlyZExldmVsID0gKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc30+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHttZW51Lm1hcCgobSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e20uX2lkLnNlY29uZENhdGVnb3J5fT57bS5faWQuc2Vjb25kQ2F0ZWdvcnl9PC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==