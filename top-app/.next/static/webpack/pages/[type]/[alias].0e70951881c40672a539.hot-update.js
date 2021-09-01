webpackHotUpdate_N_E("pages/[type]/[alias]",{

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
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
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
      _ref2 = Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 1),
      anno = _ref2[0];

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

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toArray.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L01lbnUvTWVudS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiXSwibmFtZXMiOlsiTWVudSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwibWVudSIsInNldE1lbnUiLCJmaXJzdENhdGVnb3J5IiwiYW5ubyIsInJvdXRlciIsInVzZVJvdXRlciIsInZhcmlhbnRzIiwidmlzaWJsZSIsIm1hcmdpbkJvdHRvbSIsInRyYW5zaXRpb24iLCJ3aGVuIiwic3RhZ2dlckNoaWxkcmVuIiwiaGlkZGVuIiwidmFyaWFudHNDaGlsZHJlbiIsIm9wYWNpdHkiLCJoZWlnaHQiLCJvcGVuU2Vjb25kTGV2ZWxLZXkiLCJrZXkiLCJzZWNvbmRDYXRlZ29yeSIsImNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsIm9wZW5TZWNvbmRMZXZlbCIsIm1hcCIsIm0iLCJfaWQiLCJpc09wZW5lZCIsImJ1aWxkRmlyc3RMZXZlbCIsImZpcnN0TGV2ZWxNZW51IiwiaWQiLCJyb3V0ZSIsImNuIiwic3R5bGVzIiwiZmlyc3RMZXZlbCIsImZpcnN0TGV2ZWxBY3RpdmUiLCJpY29uIiwibmFtZSIsImJ1aWxkU2Vjb25kTGV2ZWwiLCJtZW51SXRlbSIsInNlY29uZEJsb2NrIiwicGFnZXMiLCJwIiwiYWxpYXMiLCJpbmNsdWRlcyIsImFzUGF0aCIsInNwbGl0Iiwic2Vjb25kTGV2ZWwiLCJzZWNvbmRMZXZlbEJsb2NrIiwiYnVpbGRUaGlyZExldmVsIiwidGhpcmRMZXZlbCIsInRoaXJkTGV2ZWxBY3RpdmUiLCJjYXRlZ29yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QTtBQUFBO0FBQUEsZUFEZ0I7QUFBQSxLQUFWLENBQVA7QUFjQSxHQWZEOztBQWlCQSxzQkFBTztBQUFLLGFBQVMsRUFBRU8sdURBQU0sQ0FBQy9CLElBQXZCO0FBQTZCLFFBQUksRUFBQyxZQUFsQztBQUFBLGNBQWdEMEIsZUFBZTtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDQSxDQTdITTs7R0FBTTdCLEk7VUFHR1EscUQ7OztLQUhIUixJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmI7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QywrQkFBK0I7QUFDNUU7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RTtBQUNZO0FBQ1k7QUFDdEI7QUFDMUQ7QUFDZixTQUFTLHlGQUFjLFNBQVMsK0ZBQW9CLFlBQVkscUdBQTBCLFlBQVksMEZBQWU7QUFDckgsQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bdHlwZV0vW2FsaWFzXS4wZTcwOTUxODgxYzQwNjcyYTUzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgS2V5Ym9hcmRFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvYXBwLmNvbnRleHRcIjtcclxuaW1wb3J0IHsgRmlyc3RMZXZlbE1lbnVJdGVtLCBQYWdlSXRlbSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL21lbnUuaW50ZWZhY2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9NZW51Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IGZpcnN0TGV2ZWxNZW51IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnUgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IHsgbWVudSwgc2V0TWVudSwgZmlyc3RDYXRlZ29yeSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuXHRjb25zdCBbYW5ub11cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Y29uc3QgdmFyaWFudHMgPSB7XHJcblx0XHR2aXNpYmxlOiB7XHJcblx0XHRcdG1hcmdpbkJvdHRvbTogMjAsXHJcblx0XHRcdHRyYW5zaXRpb246IHtcclxuXHRcdFx0XHR3aGVuOiBcImJlZm9yZUNoaWxkcmVuXCIsXHJcblx0XHRcdFx0c3RhZ2dlckNoaWxkcmVuOiAwLjEsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0aGlkZGVuOiB7XHJcblx0XHRcdG1hcmdpbkJvdHRvbTogMCxcclxuXHRcdH0sXHJcblx0fTtcclxuXHJcblx0Y29uc3QgdmFyaWFudHNDaGlsZHJlbiA9IHtcclxuXHRcdHZpc2libGU6IHtcclxuXHRcdFx0b3BhY2l0eTogMSxcclxuXHRcdFx0aGVpZ2h0OiAyOSxcclxuXHRcdH0sXHJcblx0XHRoaWRkZW46IHtcclxuXHRcdFx0b3BhY2l0eTogMCxcclxuXHRcdFx0aGVpZ2h0OiAwLFxyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvcGVuU2Vjb25kTGV2ZWxLZXkgPSAoa2V5OiBLZXlib2FyZEV2ZW50LCBzZWNvbmRDYXRlZ29yeTogc3RyaW5nKSA9PiB7XHJcblx0XHRpZiAoa2V5LmNvZGUgPT0gXCJTcGFjZVwiIHx8IGtleS5jb2RlID09IFwiRW50ZXJcIikge1xyXG5cdFx0XHRrZXkucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHRvcGVuU2Vjb25kTGV2ZWwoc2Vjb25kQ2F0ZWdvcnkpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBvcGVuU2Vjb25kTGV2ZWwgPSAoc2Vjb25kQ2F0ZWdvcnk6IHN0cmluZykgPT4ge1xyXG5cdFx0c2V0TWVudSAmJlxyXG5cdFx0XHRzZXRNZW51KFxyXG5cdFx0XHRcdG1lbnUubWFwKChtKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAobS5faWQuc2Vjb25kQ2F0ZWdvcnkgPT0gc2Vjb25kQ2F0ZWdvcnkpIHtcclxuXHRcdFx0XHRcdFx0bS5pc09wZW5lZCA9ICFtLmlzT3BlbmVkO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIG07XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYnVpbGRGaXJzdExldmVsID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PHVsPlxyXG5cdFx0XHRcdHtmaXJzdExldmVsTWVudS5tYXAoKG0pID0+IChcclxuXHRcdFx0XHRcdDxsaSBrZXk9e20ucm91dGV9IGFyaWEtZXhwYW5kZWQ9e20uaWQgPT0gZmlyc3RDYXRlZ29yeX0+XHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvJHttLnJvdXRlfWB9PlxyXG5cdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlcy5maXJzdExldmVsLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0W3N0eWxlcy5maXJzdExldmVsQWN0aXZlXTogbS5pZCA9PSBmaXJzdENhdGVnb3J5LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e20uaWNvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e20ubmFtZX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0e20uaWQgPT0gZmlyc3RDYXRlZ29yeSAmJiBidWlsZFNlY29uZExldmVsKG0pfVxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC91bD5cclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYnVpbGRTZWNvbmRMZXZlbCA9IChtZW51SXRlbTogRmlyc3RMZXZlbE1lbnVJdGVtKSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kQmxvY2t9PlxyXG5cdFx0XHRcdHttZW51Lm1hcCgobSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKG0ucGFnZXMubWFwKChwKSA9PiBwLmFsaWFzKS5pbmNsdWRlcyhyb3V0ZXIuYXNQYXRoLnNwbGl0KFwiL1wiKVsyXSkpIHtcclxuXHRcdFx0XHRcdFx0bS5pc09wZW5lZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PGxpIGtleT17bS5faWQuc2Vjb25kQ2F0ZWdvcnl9PlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdHRhYkluZGV4PXswfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25LZXlEb3duPXsoa2V5OiBLZXlib2FyZEV2ZW50KSA9PiBvcGVuU2Vjb25kTGV2ZWxLZXkoa2V5LCBtLl9pZC5zZWNvbmRDYXRlZ29yeSl9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5zZWNvbmRMZXZlbH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9wZW5TZWNvbmRMZXZlbChtLl9pZC5zZWNvbmRDYXRlZ29yeSl9XHJcblx0XHRcdFx0XHRcdFx0XHRhcmlhLWV4cGFuZGVkPXttLmlzT3BlbmVkfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHttLl9pZC5zZWNvbmRDYXRlZ29yeX1cclxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8bW90aW9uLnVsXHJcblx0XHRcdFx0XHRcdFx0XHRsYXlvdXRcclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnRzPXt2YXJpYW50c31cclxuXHRcdFx0XHRcdFx0XHRcdGluaXRpYWw9e20uaXNPcGVuZWQgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9XHJcblx0XHRcdFx0XHRcdFx0XHRhbmltYXRlPXttLmlzT3BlbmVkID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZXMuc2Vjb25kTGV2ZWxCbG9jayl9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0e2J1aWxkVGhpcmRMZXZlbChtLnBhZ2VzLCBtZW51SXRlbS5yb3V0ZSwgbS5pc09wZW5lZCA/PyBmYWxzZSl9XHJcblx0XHRcdFx0XHRcdFx0PC9tb3Rpb24udWw+XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0pfVxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBidWlsZFRoaXJkTGV2ZWwgPSAocGFnZXM6IFBhZ2VJdGVtW10sIHJvdXRlOiBzdHJpbmcsIGlzT3BlbmVkOmJvb2xlYW4pID0+IHtcclxuXHRcdHJldHVybiBwYWdlcy5tYXAoKHApID0+IChcclxuXHRcdFx0PG1vdGlvbi5saSBrZXk9e3AuX2lkfSB2YXJpYW50cz17dmFyaWFudHNDaGlsZHJlbn0+XHJcblx0XHRcdFx0PExpbmsgaHJlZj17YC8ke3JvdXRlfS8ke3AuYWxpYXN9YH0+XHJcblx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHR0YWJJbmRleD17aXNPcGVuZWQgPyAwIDogLTF9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLnRoaXJkTGV2ZWwsIHtcclxuXHRcdFx0XHRcdFx0XHRbc3R5bGVzLnRoaXJkTGV2ZWxBY3RpdmVdOiBgLyR7cm91dGV9LyR7cC5hbGlhc31gID09IHJvdXRlci5hc1BhdGgsXHJcblx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7cC5jYXRlZ29yeX1cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdDwvbW90aW9uLmxpPlxyXG5cdFx0KSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0gcm9sZT1cIm5hdmlnYXRpb25cIj57YnVpbGRGaXJzdExldmVsKCl9PC9uYXY+O1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=