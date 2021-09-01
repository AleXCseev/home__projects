webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toArray */ "./node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/app.context */ "./context/app.context.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Menu.module.css */ "./layout/Menu/Menu.module.css");
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/helpers */ "./helpers/helpers.tsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");




var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\layout\\Menu\\Menu.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var Menu = function Menu() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_app_context__WEBPACK_IMPORTED_MODULE_4__["AppContext"]),
      menu = _useContext.menu,
      setMenu = _useContext.setMenu,
      firstCategory = _useContext.firstCategory;

  var _ref,
      _ref2 = Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref);

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    hidden: {
      marginBottom: 0
    }
  };
  var variantsChildren = {
    visible: {
      opacity: 1,
      height: 29
    },
    hidden: {
      opacity: 0,
      height: 0
    }
  };

  var openSecondLevelKey = function openSecondLevelKey(key, secondCategory) {
    if (key.code == "Space" || key.code == "Enter") {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  var openSecondLevel = function openSecondLevel(secondCategory) {
    setMenu && setMenu(menu.map(function (m) {
      if (m._id.secondCategory == secondCategory) {
        m.isOpened = !m.isOpened;
      }

      return m;
    }));
  };

  var buildFirstLevel = function buildFirstLevel() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: _helpers_helpers__WEBPACK_IMPORTED_MODULE_9__["firstLevelMenu"].map(function (m) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          "aria-expanded": m.id == firstCategory,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: "/".concat(m.route),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.firstLevel, Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.firstLevelActive, m.id == firstCategory)),
                children: [m.icon, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: m.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 7
          }, _this), m.id == firstCategory && buildSecondLevel(m)]
        }, m.route, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }, _this);
  };

  var buildSecondLevel = function buildSecondLevel(menuItem) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.secondBlock,
      children: menu.map(function (m) {
        var _m$isOpened;

        if (m.pages.map(function (p) {
          return p.alias;
        }).includes(router.asPath.split("/")[2])) {
          m.isOpened = true;
        }

        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            tabIndex: 0,
            onKeyDown: function onKeyDown(key) {
              return openSecondLevelKey(key, m._id.secondCategory);
            },
            className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.secondLevel,
            onClick: function onClick() {
              return openSecondLevel(m._id.secondCategory);
            },
            "aria-expanded": m.isOpened,
            children: m._id.secondCategory
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 8
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].ul, {
            layout: true,
            variants: variants,
            initial: m.isOpened ? "visible" : "hidden",
            animate: m.isOpened ? "visible" : "hidden",
            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.secondLevelBlock),
            children: buildThirdLevel(m.pages, menuItem.route, (_m$isOpened = m.isOpened) !== null && _m$isOpened !== void 0 ? _m$isOpened : false)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 8
          }, _this)]
        }, m._id.secondCategory, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 7
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 4
    }, _this);
  };

  var buildThirdLevel = function buildThirdLevel(pages, route, isOpened) {
    return pages.map(function (p) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].li, {
        variants: variantsChildren,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/".concat(route, "/").concat(p.alias),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            tabIndex: isOpened ? 0 : -1,
            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.thirdLevel, Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.thirdLevelActive, "/".concat(route, "/").concat(p.alias) == router.asPath)),
            children: p.category
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 6
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 5
        }, _this)
      }, p._id, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 4
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.menu,
    role: "navigation",
    children: buildFirstLevel()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 9
  }, _this);
};

_s(Menu, "YqHcl+I8m2ExHhmA1U37LWJvE/M=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toArray.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toArray.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _toArray(arr) {
  return Object(_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L01lbnUvTWVudS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiXSwibmFtZXMiOlsiTWVudSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwibWVudSIsInNldE1lbnUiLCJmaXJzdENhdGVnb3J5Iiwicm91dGVyIiwidXNlUm91dGVyIiwidmFyaWFudHMiLCJ2aXNpYmxlIiwibWFyZ2luQm90dG9tIiwidHJhbnNpdGlvbiIsIndoZW4iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJoaWRkZW4iLCJ2YXJpYW50c0NoaWxkcmVuIiwib3BhY2l0eSIsImhlaWdodCIsIm9wZW5TZWNvbmRMZXZlbEtleSIsImtleSIsInNlY29uZENhdGVnb3J5IiwiY29kZSIsInByZXZlbnREZWZhdWx0Iiwib3BlblNlY29uZExldmVsIiwibWFwIiwibSIsIl9pZCIsImlzT3BlbmVkIiwiYnVpbGRGaXJzdExldmVsIiwiZmlyc3RMZXZlbE1lbnUiLCJpZCIsInJvdXRlIiwiY24iLCJzdHlsZXMiLCJmaXJzdExldmVsIiwiZmlyc3RMZXZlbEFjdGl2ZSIsImljb24iLCJuYW1lIiwiYnVpbGRTZWNvbmRMZXZlbCIsIm1lbnVJdGVtIiwic2Vjb25kQmxvY2siLCJwYWdlcyIsInAiLCJhbGlhcyIsImluY2x1ZGVzIiwiYXNQYXRoIiwic3BsaXQiLCJzZWNvbmRMZXZlbCIsInNlY29uZExldmVsQmxvY2siLCJidWlsZFRoaXJkTGV2ZWwiLCJ0aGlyZExldmVsIiwidGhpcmRMZXZlbEFjdGl2ZSIsImNhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQW1CO0FBQUE7O0FBQUEsb0JBQ0dDLHdEQUFVLENBQUNDLCtEQUFELENBRGI7QUFBQSxNQUM5QkMsSUFEOEIsZUFDOUJBLElBRDhCO0FBQUEsTUFDeEJDLE9BRHdCLGVBQ3hCQSxPQUR3QjtBQUFBLE1BQ2ZDLGFBRGUsZUFDZkEsYUFEZTs7QUFBQTtBQUFBOztBQUd0QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsTUFBTUMsUUFBUSxHQUFHO0FBQ2hCQyxXQUFPLEVBQUU7QUFDUkMsa0JBQVksRUFBRSxFQUROO0FBRVJDLGdCQUFVLEVBQUU7QUFDWEMsWUFBSSxFQUFFLGdCQURLO0FBRVhDLHVCQUFlLEVBQUU7QUFGTjtBQUZKLEtBRE87QUFRaEJDLFVBQU0sRUFBRTtBQUNQSixrQkFBWSxFQUFFO0FBRFA7QUFSUSxHQUFqQjtBQWFBLE1BQU1LLGdCQUFnQixHQUFHO0FBQ3hCTixXQUFPLEVBQUU7QUFDUk8sYUFBTyxFQUFFLENBREQ7QUFFUkMsWUFBTSxFQUFFO0FBRkEsS0FEZTtBQUt4QkgsVUFBTSxFQUFFO0FBQ1BFLGFBQU8sRUFBRSxDQURGO0FBRVBDLFlBQU0sRUFBRTtBQUZEO0FBTGdCLEdBQXpCOztBQVdBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsR0FBRCxFQUFxQkMsY0FBckIsRUFBZ0Q7QUFDMUUsUUFBSUQsR0FBRyxDQUFDRSxJQUFKLElBQVksT0FBWixJQUF1QkYsR0FBRyxDQUFDRSxJQUFKLElBQVksT0FBdkMsRUFBZ0Q7QUFDL0NGLFNBQUcsQ0FBQ0csY0FBSjtBQUNBQyxxQkFBZSxDQUFDSCxjQUFELENBQWY7QUFDQTtBQUNELEdBTEQ7O0FBT0EsTUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDSCxjQUFELEVBQTRCO0FBQ25EaEIsV0FBTyxJQUNOQSxPQUFPLENBQ05ELElBQUksQ0FBQ3FCLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQU87QUFDZixVQUFJQSxDQUFDLENBQUNDLEdBQUYsQ0FBTU4sY0FBTixJQUF3QkEsY0FBNUIsRUFBNEM7QUFDM0NLLFNBQUMsQ0FBQ0UsUUFBRixHQUFhLENBQUNGLENBQUMsQ0FBQ0UsUUFBaEI7QUFDQTs7QUFDRCxhQUFPRixDQUFQO0FBQ0EsS0FMRCxDQURNLENBRFI7QUFTQSxHQVZEOztBQVlBLE1BQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM3Qix3QkFDQztBQUFBLGdCQUNFQywrREFBYyxDQUFDTCxHQUFmLENBQW1CLFVBQUNDLENBQUQ7QUFBQSw0QkFDbkI7QUFBa0IsMkJBQWVBLENBQUMsQ0FBQ0ssRUFBRixJQUFRekIsYUFBekM7QUFBQSxrQ0FDQyxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLGFBQU1vQixDQUFDLENBQUNNLEtBQVIsQ0FBVjtBQUFBLG1DQUNDO0FBQUEscUNBQ0M7QUFDQyx5QkFBUyxFQUFFQyxpREFBRSxDQUFDQyx1REFBTSxDQUFDQyxVQUFSLHVKQUNYRCx1REFBTSxDQUFDRSxnQkFESSxFQUNlVixDQUFDLENBQUNLLEVBQUYsSUFBUXpCLGFBRHZCLEVBRGQ7QUFBQSwyQkFLRW9CLENBQUMsQ0FBQ1csSUFMSixlQU1DO0FBQUEsNEJBQU9YLENBQUMsQ0FBQ1k7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELEVBYUVaLENBQUMsQ0FBQ0ssRUFBRixJQUFRekIsYUFBUixJQUF5QmlDLGdCQUFnQixDQUFDYixDQUFELENBYjNDO0FBQUEsV0FBU0EsQ0FBQyxDQUFDTSxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG1CO0FBQUEsT0FBbkI7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQ7QUFxQkEsR0F0QkQ7O0FBd0JBLE1BQU1PLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsUUFBRCxFQUFrQztBQUMxRCx3QkFDQztBQUFJLGVBQVMsRUFBRU4sdURBQU0sQ0FBQ08sV0FBdEI7QUFBQSxnQkFDRXJDLElBQUksQ0FBQ3FCLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQU87QUFBQTs7QUFDaEIsWUFBSUEsQ0FBQyxDQUFDZ0IsS0FBRixDQUFRakIsR0FBUixDQUFZLFVBQUNrQixDQUFEO0FBQUEsaUJBQU9BLENBQUMsQ0FBQ0MsS0FBVDtBQUFBLFNBQVosRUFBNEJDLFFBQTVCLENBQXFDdEMsTUFBTSxDQUFDdUMsTUFBUCxDQUFjQyxLQUFkLENBQW9CLEdBQXBCLEVBQXlCLENBQXpCLENBQXJDLENBQUosRUFBdUU7QUFDdEVyQixXQUFDLENBQUNFLFFBQUYsR0FBYSxJQUFiO0FBQ0E7O0FBRUQsNEJBQ0M7QUFBQSxrQ0FDQztBQUNDLG9CQUFRLEVBQUUsQ0FEWDtBQUVDLHFCQUFTLEVBQUUsbUJBQUNSLEdBQUQ7QUFBQSxxQkFBd0JELGtCQUFrQixDQUFDQyxHQUFELEVBQU1NLENBQUMsQ0FBQ0MsR0FBRixDQUFNTixjQUFaLENBQTFDO0FBQUEsYUFGWjtBQUdDLHFCQUFTLEVBQUVhLHVEQUFNLENBQUNjLFdBSG5CO0FBSUMsbUJBQU8sRUFBRTtBQUFBLHFCQUFNeEIsZUFBZSxDQUFDRSxDQUFDLENBQUNDLEdBQUYsQ0FBTU4sY0FBUCxDQUFyQjtBQUFBLGFBSlY7QUFLQyw2QkFBZUssQ0FBQyxDQUFDRSxRQUxsQjtBQUFBLHNCQU9FRixDQUFDLENBQUNDLEdBQUYsQ0FBTU47QUFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBVUMscUVBQUMscURBQUQsQ0FBUSxFQUFSO0FBQ0Msa0JBQU0sTUFEUDtBQUVDLG9CQUFRLEVBQUVaLFFBRlg7QUFHQyxtQkFBTyxFQUFFaUIsQ0FBQyxDQUFDRSxRQUFGLEdBQWEsU0FBYixHQUF5QixRQUhuQztBQUlDLG1CQUFPLEVBQUVGLENBQUMsQ0FBQ0UsUUFBRixHQUFhLFNBQWIsR0FBeUIsUUFKbkM7QUFLQyxxQkFBUyxFQUFFSyxpREFBRSxDQUFDQyx1REFBTSxDQUFDZSxnQkFBUixDQUxkO0FBQUEsc0JBT0VDLGVBQWUsQ0FBQ3hCLENBQUMsQ0FBQ2dCLEtBQUgsRUFBVUYsUUFBUSxDQUFDUixLQUFuQixpQkFBMEJOLENBQUMsQ0FBQ0UsUUFBNUIscURBQXdDLEtBQXhDO0FBUGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkQ7QUFBQSxXQUFTRixDQUFDLENBQUNDLEdBQUYsQ0FBTU4sY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBc0JBLE9BM0JBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUREO0FBZ0NBLEdBakNEOztBQW1DQSxNQUFNNkIsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDUixLQUFELEVBQW9CVixLQUFwQixFQUFtQ0osUUFBbkMsRUFBd0Q7QUFDL0UsV0FBT2MsS0FBSyxDQUFDakIsR0FBTixDQUFVLFVBQUNrQixDQUFEO0FBQUEsMEJBQ2hCLHFFQUFDLHFEQUFELENBQVEsRUFBUjtBQUF1QixnQkFBUSxFQUFFM0IsZ0JBQWpDO0FBQUEsK0JBQ0MscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLGFBQU1nQixLQUFOLGNBQWVXLENBQUMsQ0FBQ0MsS0FBakIsQ0FBVjtBQUFBLGlDQUNDO0FBQ0Msb0JBQVEsRUFBRWhCLFFBQVEsR0FBRyxDQUFILEdBQU8sQ0FBQyxDQUQzQjtBQUVDLHFCQUFTLEVBQUVLLGlEQUFFLENBQUNDLHVEQUFNLENBQUNpQixVQUFSLHVKQUNYakIsdURBQU0sQ0FBQ2tCLGdCQURJLEVBQ2UsV0FBSXBCLEtBQUosY0FBYVcsQ0FBQyxDQUFDQyxLQUFmLEtBQTBCckMsTUFBTSxDQUFDdUMsTUFEaEQsRUFGZDtBQUFBLHNCQU1FSCxDQUFDLENBQUNVO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxTQUFnQlYsQ0FBQyxDQUFDaEIsR0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURnQjtBQUFBLEtBQVYsQ0FBUDtBQWNBLEdBZkQ7O0FBaUJBLHNCQUFPO0FBQUssYUFBUyxFQUFFTyx1REFBTSxDQUFDOUIsSUFBdkI7QUFBNkIsUUFBSSxFQUFDLFlBQWxDO0FBQUEsY0FBZ0R5QixlQUFlO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNBLENBN0hNOztHQUFNNUIsSTtVQUdHTyxxRDs7O0tBSEhQLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWYjtBQUFBO0FBQWU7QUFDZjs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVFO0FBQ0U7QUFDc0I7QUFDdEI7QUFDMUQ7QUFDZixTQUFTLHlGQUFjLFNBQVMsMEZBQWUsU0FBUyxxR0FBMEIsU0FBUywwRkFBZTtBQUMxRyxDOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBMkU7QUFDNUQ7QUFDZjtBQUNBLG9DQUFvQywyRkFBZ0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLDJGQUFnQjtBQUN0RyxDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYzNzRjM2ZmM2QyMzk0NjY2ZGE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCBLZXlib2FyZEV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9hcHAuY29udGV4dFwiO1xyXG5pbXBvcnQgeyBGaXJzdExldmVsTWVudUl0ZW0sIFBhZ2VJdGVtIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvbWVudS5pbnRlZmFjZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL01lbnUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgZmlyc3RMZXZlbE1lbnUgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWVudSA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0Y29uc3QgeyBtZW51LCBzZXRNZW51LCBmaXJzdENhdGVnb3J5IH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG5cdGNvbnN0IFtdXHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IHZhcmlhbnRzID0ge1xyXG5cdFx0dmlzaWJsZToge1xyXG5cdFx0XHRtYXJnaW5Cb3R0b206IDIwLFxyXG5cdFx0XHR0cmFuc2l0aW9uOiB7XHJcblx0XHRcdFx0d2hlbjogXCJiZWZvcmVDaGlsZHJlblwiLFxyXG5cdFx0XHRcdHN0YWdnZXJDaGlsZHJlbjogMC4xLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdGhpZGRlbjoge1xyXG5cdFx0XHRtYXJnaW5Cb3R0b206IDAsXHJcblx0XHR9LFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IHZhcmlhbnRzQ2hpbGRyZW4gPSB7XHJcblx0XHR2aXNpYmxlOiB7XHJcblx0XHRcdG9wYWNpdHk6IDEsXHJcblx0XHRcdGhlaWdodDogMjksXHJcblx0XHR9LFxyXG5cdFx0aGlkZGVuOiB7XHJcblx0XHRcdG9wYWNpdHk6IDAsXHJcblx0XHRcdGhlaWdodDogMCxcclxuXHRcdH0sXHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb3BlblNlY29uZExldmVsS2V5ID0gKGtleTogS2V5Ym9hcmRFdmVudCwgc2Vjb25kQ2F0ZWdvcnk6IHN0cmluZykgPT4ge1xyXG5cdFx0aWYgKGtleS5jb2RlID09IFwiU3BhY2VcIiB8fCBrZXkuY29kZSA9PSBcIkVudGVyXCIpIHtcclxuXHRcdFx0a2V5LnByZXZlbnREZWZhdWx0KClcclxuXHRcdFx0b3BlblNlY29uZExldmVsKHNlY29uZENhdGVnb3J5KVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3Qgb3BlblNlY29uZExldmVsID0gKHNlY29uZENhdGVnb3J5OiBzdHJpbmcpID0+IHtcclxuXHRcdHNldE1lbnUgJiZcclxuXHRcdFx0c2V0TWVudShcclxuXHRcdFx0XHRtZW51Lm1hcCgobSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKG0uX2lkLnNlY29uZENhdGVnb3J5ID09IHNlY29uZENhdGVnb3J5KSB7XHJcblx0XHRcdFx0XHRcdG0uaXNPcGVuZWQgPSAhbS5pc09wZW5lZDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBtO1xyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGJ1aWxkRmlyc3RMZXZlbCA9ICgpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDx1bD5cclxuXHRcdFx0XHR7Zmlyc3RMZXZlbE1lbnUubWFwKChtKSA9PiAoXHJcblx0XHRcdFx0XHQ8bGkga2V5PXttLnJvdXRlfSBhcmlhLWV4cGFuZGVkPXttLmlkID09IGZpcnN0Q2F0ZWdvcnl9PlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgLyR7bS5yb3V0ZX1gfT5cclxuXHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZXMuZmlyc3RMZXZlbCwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFtzdHlsZXMuZmlyc3RMZXZlbEFjdGl2ZV06IG0uaWQgPT0gZmlyc3RDYXRlZ29yeSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHttLmljb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPnttLm5hbWV9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdHttLmlkID09IGZpcnN0Q2F0ZWdvcnkgJiYgYnVpbGRTZWNvbmRMZXZlbChtKX1cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvdWw+XHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGJ1aWxkU2Vjb25kTGV2ZWwgPSAobWVudUl0ZW06IEZpcnN0TGV2ZWxNZW51SXRlbSkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PHVsIGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZEJsb2NrfT5cclxuXHRcdFx0XHR7bWVudS5tYXAoKG0pID0+IHtcclxuXHRcdFx0XHRcdGlmIChtLnBhZ2VzLm1hcCgocCkgPT4gcC5hbGlhcykuaW5jbHVkZXMocm91dGVyLmFzUGF0aC5zcGxpdChcIi9cIilbMl0pKSB7XHJcblx0XHRcdFx0XHRcdG0uaXNPcGVuZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDxsaSBrZXk9e20uX2lkLnNlY29uZENhdGVnb3J5fT5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHR0YWJJbmRleD17MH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uS2V5RG93bj17KGtleTogS2V5Ym9hcmRFdmVudCkgPT4gb3BlblNlY29uZExldmVsS2V5KGtleSwgbS5faWQuc2Vjb25kQ2F0ZWdvcnkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kTGV2ZWx9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBvcGVuU2Vjb25kTGV2ZWwobS5faWQuc2Vjb25kQ2F0ZWdvcnkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD17bS5pc09wZW5lZH1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7bS5faWQuc2Vjb25kQ2F0ZWdvcnl9XHJcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PG1vdGlvbi51bFxyXG5cdFx0XHRcdFx0XHRcdFx0bGF5b3V0XHJcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50cz17dmFyaWFudHN9XHJcblx0XHRcdFx0XHRcdFx0XHRpbml0aWFsPXttLmlzT3BlbmVkID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifVxyXG5cdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZT17bS5pc09wZW5lZCA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIn1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLnNlY29uZExldmVsQmxvY2spfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHtidWlsZFRoaXJkTGV2ZWwobS5wYWdlcywgbWVudUl0ZW0ucm91dGUsIG0uaXNPcGVuZWQgPz8gZmFsc2UpfVxyXG5cdFx0XHRcdFx0XHRcdDwvbW90aW9uLnVsPlxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9KX1cclxuXHRcdFx0PC91bD5cclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYnVpbGRUaGlyZExldmVsID0gKHBhZ2VzOiBQYWdlSXRlbVtdLCByb3V0ZTogc3RyaW5nLCBpc09wZW5lZDpib29sZWFuKSA9PiB7XHJcblx0XHRyZXR1cm4gcGFnZXMubWFwKChwKSA9PiAoXHJcblx0XHRcdDxtb3Rpb24ubGkga2V5PXtwLl9pZH0gdmFyaWFudHM9e3ZhcmlhbnRzQ2hpbGRyZW59PlxyXG5cdFx0XHRcdDxMaW5rIGhyZWY9e2AvJHtyb3V0ZX0vJHtwLmFsaWFzfWB9PlxyXG5cdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0dGFiSW5kZXg9e2lzT3BlbmVkID8gMCA6IC0xfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlcy50aGlyZExldmVsLCB7XHJcblx0XHRcdFx0XHRcdFx0W3N0eWxlcy50aGlyZExldmVsQWN0aXZlXTogYC8ke3JvdXRlfS8ke3AuYWxpYXN9YCA9PSByb3V0ZXIuYXNQYXRoLFxyXG5cdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0e3AuY2F0ZWdvcnl9XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHQ8L21vdGlvbi5saT5cclxuXHRcdCkpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9IHJvbGU9XCJuYXZpZ2F0aW9uXCI+e2J1aWxkRmlyc3RMZXZlbCgpfTwvbmF2PjtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==