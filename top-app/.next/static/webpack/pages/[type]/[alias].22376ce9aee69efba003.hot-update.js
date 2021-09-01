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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/app.context */ "./context/app.context.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Menu.module.css */ "./layout/Menu/Menu.module.css");
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/helpers */ "./helpers/helpers.tsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");



var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\layout\\Menu\\Menu.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var Menu = function Menu() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_app_context__WEBPACK_IMPORTED_MODULE_3__["AppContext"]),
      menu = _useContext.menu,
      setMenu = _useContext.setMenu,
      firstCategory = _useContext.firstCategory;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(undefined),
      announce = _useState[0],
      setAnnounce = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var shouldReducedMotion = useReducedMotion();
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
        setAnnounce(m.isOpened ? "closed" : "opened");
        m.isOpened = !m.isOpened;
      }

      return m;
    }));
  };

  var buildFirstLevel = function buildFirstLevel() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.firstLevelList,
      children: _helpers_helpers__WEBPACK_IMPORTED_MODULE_8__["firstLevelMenu"].map(function (m) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          "aria-expanded": m.id == firstCategory,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/".concat(m.route),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.firstLevel, Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.firstLevelActive, m.id == firstCategory)),
                children: [m.icon, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: m.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 7
          }, _this), m.id == firstCategory && buildSecondLevel(m)]
        }, m.route, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 4
    }, _this);
  };

  var buildSecondLevel = function buildSecondLevel(menuItem) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.secondBlock,
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
            className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.secondLevel,
            onClick: function onClick() {
              return openSecondLevel(m._id.secondCategory);
            },
            "aria-expanded": m.isOpened,
            children: m._id.secondCategory
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 8
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].ul, {
            layout: true,
            variants: variants,
            initial: m.isOpened ? "visible" : "hidden",
            animate: m.isOpened ? "visible" : "hidden",
            className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.secondLevelBlock),
            children: buildThirdLevel(m.pages, menuItem.route, (_m$isOpened = m.isOpened) !== null && _m$isOpened !== void 0 ? _m$isOpened : false)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 8
          }, _this)]
        }, m._id.secondCategory, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 7
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 4
    }, _this);
  };

  var buildThirdLevel = function buildThirdLevel(pages, route, isOpened) {
    return pages.map(function (p) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].li, {
        variants: variantsChildren,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/".concat(route, "/").concat(p.alias),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            tabIndex: isOpened ? 0 : -1,
            className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.thirdLevel, Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.thirdLevelActive, "/".concat(route, "/").concat(p.alias) == router.asPath)),
            "aria-current": "/".concat(route, "/").concat(p.alias) == router.asPath ? "page" : false,
            children: p.category
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 6
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 5
        }, _this)
      }, p._id, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 4
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.menu,
    role: "navigation",
    children: [announce && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      role: "log",
      className: "visualyHidden",
      children: announce == "opened" ? "развернуто" : "свернуто"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }, _this), buildFirstLevel()]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 139,
    columnNumber: 3
  }, _this);
};

_s(Menu, "l2jr1vlEO0zqtjVzNTwnJX9QBYI=", true, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L01lbnUvTWVudS50c3giXSwibmFtZXMiOlsiTWVudSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwibWVudSIsInNldE1lbnUiLCJmaXJzdENhdGVnb3J5IiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJhbm5vdW5jZSIsInNldEFubm91bmNlIiwicm91dGVyIiwidXNlUm91dGVyIiwic2hvdWxkUmVkdWNlZE1vdGlvbiIsInVzZVJlZHVjZWRNb3Rpb24iLCJ2YXJpYW50cyIsInZpc2libGUiLCJtYXJnaW5Cb3R0b20iLCJ0cmFuc2l0aW9uIiwid2hlbiIsInN0YWdnZXJDaGlsZHJlbiIsImhpZGRlbiIsInZhcmlhbnRzQ2hpbGRyZW4iLCJvcGFjaXR5IiwiaGVpZ2h0Iiwib3BlblNlY29uZExldmVsS2V5Iiwia2V5Iiwic2Vjb25kQ2F0ZWdvcnkiLCJjb2RlIiwicHJldmVudERlZmF1bHQiLCJvcGVuU2Vjb25kTGV2ZWwiLCJtYXAiLCJtIiwiX2lkIiwiaXNPcGVuZWQiLCJidWlsZEZpcnN0TGV2ZWwiLCJzdHlsZXMiLCJmaXJzdExldmVsTGlzdCIsImZpcnN0TGV2ZWxNZW51IiwiaWQiLCJyb3V0ZSIsImNuIiwiZmlyc3RMZXZlbCIsImZpcnN0TGV2ZWxBY3RpdmUiLCJpY29uIiwibmFtZSIsImJ1aWxkU2Vjb25kTGV2ZWwiLCJtZW51SXRlbSIsInNlY29uZEJsb2NrIiwicGFnZXMiLCJwIiwiYWxpYXMiLCJpbmNsdWRlcyIsImFzUGF0aCIsInNwbGl0Iiwic2Vjb25kTGV2ZWwiLCJzZWNvbmRMZXZlbEJsb2NrIiwiYnVpbGRUaGlyZExldmVsIiwidGhpcmRMZXZlbCIsInRoaXJkTGV2ZWxBY3RpdmUiLCJjYXRlZ29yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsSUFBSSxH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RCxFQUZkO0FBS0MsNEJBQWMsV0FBSWIsS0FBSixjQUFhVSxDQUFDLENBQUNDLEtBQWYsS0FBMEJ4QyxNQUFNLENBQUMwQyxNQUFqQyxHQUEwQyxNQUExQyxHQUFtRCxLQUxsRTtBQUFBLHNCQU9FSCxDQUFDLENBQUNVO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxTQUFnQlYsQ0FBQyxDQUFDakIsR0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURnQjtBQUFBLEtBQVYsQ0FBUDtBQWVBLEdBaEJEOztBQWtCQSxzQkFDQztBQUFLLGFBQVMsRUFBRUcsdURBQU0sQ0FBQ2hDLElBQXZCO0FBQTZCLFFBQUksRUFBQyxZQUFsQztBQUFBLGVBQ0VLLFFBQVEsaUJBQUk7QUFBTSxVQUFJLEVBQUMsS0FBWDtBQUFpQixlQUFTLEVBQUMsZUFBM0I7QUFBQSxnQkFBNENBLFFBQVEsSUFBSSxRQUFaLEdBQXVCLFlBQXZCLEdBQXNDO0FBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEZCxFQUVFMEIsZUFBZSxFQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQU1BLENBcklNOztHQUFNbEMsSTtVQUdHVyxxRDs7O0tBSEhYLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3R5cGVdL1thbGlhc10uMjIzNzZjZTlhZWU2OWVmYmEwMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIEtleWJvYXJkRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9hcHAuY29udGV4dFwiO1xyXG5pbXBvcnQgeyBGaXJzdExldmVsTWVudUl0ZW0sIFBhZ2VJdGVtIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvbWVudS5pbnRlZmFjZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL01lbnUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgZmlyc3RMZXZlbE1lbnUgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWVudSA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0Y29uc3QgeyBtZW51LCBzZXRNZW51LCBmaXJzdENhdGVnb3J5IH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG5cdGNvbnN0IFthbm5vdW5jZSwgc2V0QW5ub3VuY2VdID0gdXNlU3RhdGU8XCJjbG9zZWRcIiB8IFwib3BlbmVkXCIgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3Qgc2hvdWxkUmVkdWNlZE1vdGlvbiA9IHVzZVJlZHVjZWRNb3Rpb24oKVxyXG5cclxuXHRjb25zdCB2YXJpYW50cyA9IHtcclxuXHRcdHZpc2libGU6IHtcclxuXHRcdFx0bWFyZ2luQm90dG9tOiAyMCxcclxuXHRcdFx0dHJhbnNpdGlvbjoge1xyXG5cdFx0XHRcdHdoZW46IFwiYmVmb3JlQ2hpbGRyZW5cIixcclxuXHRcdFx0XHRzdGFnZ2VyQ2hpbGRyZW46IDAuMSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRoaWRkZW46IHtcclxuXHRcdFx0bWFyZ2luQm90dG9tOiAwLFxyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHRjb25zdCB2YXJpYW50c0NoaWxkcmVuID0ge1xyXG5cdFx0dmlzaWJsZToge1xyXG5cdFx0XHRvcGFjaXR5OiAxLFxyXG5cdFx0XHRoZWlnaHQ6IDI5LFxyXG5cdFx0fSxcclxuXHRcdGhpZGRlbjoge1xyXG5cdFx0XHRvcGFjaXR5OiAwLFxyXG5cdFx0XHRoZWlnaHQ6IDAsXHJcblx0XHR9LFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9wZW5TZWNvbmRMZXZlbEtleSA9IChrZXk6IEtleWJvYXJkRXZlbnQsIHNlY29uZENhdGVnb3J5OiBzdHJpbmcpID0+IHtcclxuXHRcdGlmIChrZXkuY29kZSA9PSBcIlNwYWNlXCIgfHwga2V5LmNvZGUgPT0gXCJFbnRlclwiKSB7XHJcblx0XHRcdGtleS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRcdG9wZW5TZWNvbmRMZXZlbChzZWNvbmRDYXRlZ29yeSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IG9wZW5TZWNvbmRMZXZlbCA9IChzZWNvbmRDYXRlZ29yeTogc3RyaW5nKSA9PiB7XHJcblx0XHRzZXRNZW51ICYmXHJcblx0XHRcdHNldE1lbnUoXHJcblx0XHRcdFx0bWVudS5tYXAoKG0pID0+IHtcclxuXHRcdFx0XHRcdGlmIChtLl9pZC5zZWNvbmRDYXRlZ29yeSA9PSBzZWNvbmRDYXRlZ29yeSkge1xyXG5cdFx0XHRcdFx0XHRzZXRBbm5vdW5jZShtLmlzT3BlbmVkID8gXCJjbG9zZWRcIiA6IFwib3BlbmVkXCIpXHJcblx0XHRcdFx0XHRcdG0uaXNPcGVuZWQgPSAhbS5pc09wZW5lZDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBtO1xyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGJ1aWxkRmlyc3RMZXZlbCA9ICgpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDx1bCBjbGFzc05hbWU9e3N0eWxlcy5maXJzdExldmVsTGlzdH0+XHJcblx0XHRcdFx0e2ZpcnN0TGV2ZWxNZW51Lm1hcCgobSkgPT4gKFxyXG5cdFx0XHRcdFx0PGxpIGtleT17bS5yb3V0ZX0gYXJpYS1leHBhbmRlZD17bS5pZCA9PSBmaXJzdENhdGVnb3J5fT5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC8ke20ucm91dGV9YH0+XHJcblx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLmZpcnN0TGV2ZWwsIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbc3R5bGVzLmZpcnN0TGV2ZWxBY3RpdmVdOiBtLmlkID09IGZpcnN0Q2F0ZWdvcnksXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7bS5pY29ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57bS5uYW1lfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHR7bS5pZCA9PSBmaXJzdENhdGVnb3J5ICYmIGJ1aWxkU2Vjb25kTGV2ZWwobSl9XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBidWlsZFNlY29uZExldmVsID0gKG1lbnVJdGVtOiBGaXJzdExldmVsTWVudUl0ZW0pID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDx1bCBjbGFzc05hbWU9e3N0eWxlcy5zZWNvbmRCbG9ja30+XHJcblx0XHRcdFx0e21lbnUubWFwKChtKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAobS5wYWdlcy5tYXAoKHApID0+IHAuYWxpYXMpLmluY2x1ZGVzKHJvdXRlci5hc1BhdGguc3BsaXQoXCIvXCIpWzJdKSkge1xyXG5cdFx0XHRcdFx0XHRtLmlzT3BlbmVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8bGkga2V5PXttLl9pZC5zZWNvbmRDYXRlZ29yeX0+XHJcblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0dGFiSW5kZXg9ezB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbktleURvd249eyhrZXk6IEtleWJvYXJkRXZlbnQpID0+IG9wZW5TZWNvbmRMZXZlbEtleShrZXksIG0uX2lkLnNlY29uZENhdGVnb3J5KX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZExldmVsfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gb3BlblNlY29uZExldmVsKG0uX2lkLnNlY29uZENhdGVnb3J5KX1cclxuXHRcdFx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9e20uaXNPcGVuZWR9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0e20uX2lkLnNlY29uZENhdGVnb3J5fVxyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDxtb3Rpb24udWxcclxuXHRcdFx0XHRcdFx0XHRcdGxheW91dFxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudHM9e3ZhcmlhbnRzfVxyXG5cdFx0XHRcdFx0XHRcdFx0aW5pdGlhbD17bS5pc09wZW5lZCA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIn1cclxuXHRcdFx0XHRcdFx0XHRcdGFuaW1hdGU9e20uaXNPcGVuZWQgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlcy5zZWNvbmRMZXZlbEJsb2NrKX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7YnVpbGRUaGlyZExldmVsKG0ucGFnZXMsIG1lbnVJdGVtLnJvdXRlLCBtLmlzT3BlbmVkID8/IGZhbHNlKX1cclxuXHRcdFx0XHRcdFx0XHQ8L21vdGlvbi51bD5cclxuXHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSl9XHJcblx0XHRcdDwvdWw+XHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGJ1aWxkVGhpcmRMZXZlbCA9IChwYWdlczogUGFnZUl0ZW1bXSwgcm91dGU6IHN0cmluZywgaXNPcGVuZWQ6Ym9vbGVhbikgPT4ge1xyXG5cdFx0cmV0dXJuIHBhZ2VzLm1hcCgocCkgPT4gKFxyXG5cdFx0XHQ8bW90aW9uLmxpIGtleT17cC5faWR9IHZhcmlhbnRzPXt2YXJpYW50c0NoaWxkcmVufT5cclxuXHRcdFx0XHQ8TGluayBocmVmPXtgLyR7cm91dGV9LyR7cC5hbGlhc31gfT5cclxuXHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdHRhYkluZGV4PXtpc09wZW5lZCA/IDAgOiAtMX1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZXMudGhpcmRMZXZlbCwge1xyXG5cdFx0XHRcdFx0XHRcdFtzdHlsZXMudGhpcmRMZXZlbEFjdGl2ZV06IGAvJHtyb3V0ZX0vJHtwLmFsaWFzfWAgPT0gcm91dGVyLmFzUGF0aCxcclxuXHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRcdGFyaWEtY3VycmVudD17YC8ke3JvdXRlfS8ke3AuYWxpYXN9YCA9PSByb3V0ZXIuYXNQYXRoID8gXCJwYWdlXCIgOiBmYWxzZX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0e3AuY2F0ZWdvcnl9XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHQ8L21vdGlvbi5saT5cclxuXHRcdCkpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9IHJvbGU9XCJuYXZpZ2F0aW9uXCI+XHJcblx0XHRcdHthbm5vdW5jZSAmJiA8c3BhbiByb2xlPVwibG9nXCIgY2xhc3NOYW1lPVwidmlzdWFseUhpZGRlblwiPnthbm5vdW5jZSA9PSBcIm9wZW5lZFwiID8gXCLRgNCw0LfQstC10YDQvdGD0YLQvlwiIDogXCLRgdCy0LXRgNC90YPRgtC+XCJ9PC9zcGFuPn1cclxuXHRcdFx0e2J1aWxkRmlyc3RMZXZlbCgpfVxyXG5cdFx0PC9uYXY+XHJcblx0KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==