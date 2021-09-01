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
      className: s,
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
      lineNumber: 139,
      columnNumber: 17
    }, _this), buildFirstLevel()]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 138,
    columnNumber: 3
  }, _this);
};

_s(Menu, "2kAAuTyRyq69G70V1vaB1cehFrc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L01lbnUvTWVudS50c3giXSwibmFtZXMiOlsiTWVudSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwibWVudSIsInNldE1lbnUiLCJmaXJzdENhdGVnb3J5IiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJhbm5vdW5jZSIsInNldEFubm91bmNlIiwicm91dGVyIiwidXNlUm91dGVyIiwidmFyaWFudHMiLCJ2aXNpYmxlIiwibWFyZ2luQm90dG9tIiwidHJhbnNpdGlvbiIsIndoZW4iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJoaWRkZW4iLCJ2YXJpYW50c0NoaWxkcmVuIiwib3BhY2l0eSIsImhlaWdodCIsIm9wZW5TZWNvbmRMZXZlbEtleSIsImtleSIsInNlY29uZENhdGVnb3J5IiwiY29kZSIsInByZXZlbnREZWZhdWx0Iiwib3BlblNlY29uZExldmVsIiwibWFwIiwibSIsIl9pZCIsImlzT3BlbmVkIiwiYnVpbGRGaXJzdExldmVsIiwicyIsImZpcnN0TGV2ZWxNZW51IiwiaWQiLCJyb3V0ZSIsImNuIiwic3R5bGVzIiwiZmlyc3RMZXZlbCIsImZpcnN0TGV2ZWxBY3RpdmUiLCJpY29uIiwibmFtZSIsImJ1aWxkU2Vjb25kTGV2ZWwiLCJtZW51SXRlbSIsInNlY29uZEJsb2NrIiwicGFnZXMiLCJwIiwiYWxpYXMiLCJpbmNsdWRlcyIsImFzUGF0aCIsInNwbGl0Iiwic2Vjb25kTGV2ZWwiLCJzZWNvbmRMZXZlbEJsb2NrIiwiYnVpbGRUaGlyZExldmVsIiwidGhpcmRMZXZlbCIsInRoaXJkTGV2ZWxBY3RpdmUiLCJjYXRlZ29yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR08sSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBbUI7QUFBQTs7QUFBQSxvQkFDR0Msd0RBQVUsQ0FBQ0MsK0RB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bEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURnQjtBQUFBLEtBQVYsQ0FBUDtBQWNBLEdBZkQ7O0FBaUJBLHNCQUNDO0FBQUssYUFBUyxFQUFFUSx1REFBTSxDQUFDbkMsSUFBdkI7QUFBNkIsUUFBSSxFQUFDLFlBQWxDO0FBQUEsZUFDRUssUUFBUSxpQkFBSTtBQUFNLFVBQUksRUFBQyxLQUFYO0FBQWlCLGVBQVMsRUFBQyxlQUEzQjtBQUFBLGdCQUE0Q0EsUUFBUSxJQUFJLFFBQVosR0FBdUIsWUFBdkIsR0FBc0M7QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURkLEVBRUV3QixlQUFlLEVBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBTUEsQ0FuSU07O0dBQU1oQyxJO1VBR0dXLHFEOzs7S0FISFgsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bdHlwZV0vW2FsaWFzXS4zZDdmMzJhY2QxM2IyOGRmMmI5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgS2V5Ym9hcmRFdmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L2FwcC5jb250ZXh0XCI7XHJcbmltcG9ydCB7IEZpcnN0TGV2ZWxNZW51SXRlbSwgUGFnZUl0ZW0gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9tZW51LmludGVmYWNlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTWVudS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBmaXJzdExldmVsTWVudSB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgc3Bhd24gfSBmcm9tIFwiY2hpbGRfcHJvY2Vzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnUgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IHsgbWVudSwgc2V0TWVudSwgZmlyc3RDYXRlZ29yeSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuXHRjb25zdCBbYW5ub3VuY2UsIHNldEFubm91bmNlXSA9IHVzZVN0YXRlPFwiY2xvc2VkXCIgfCBcIm9wZW5lZFwiIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRjb25zdCB2YXJpYW50cyA9IHtcclxuXHRcdHZpc2libGU6IHtcclxuXHRcdFx0bWFyZ2luQm90dG9tOiAyMCxcclxuXHRcdFx0dHJhbnNpdGlvbjoge1xyXG5cdFx0XHRcdHdoZW46IFwiYmVmb3JlQ2hpbGRyZW5cIixcclxuXHRcdFx0XHRzdGFnZ2VyQ2hpbGRyZW46IDAuMSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRoaWRkZW46IHtcclxuXHRcdFx0bWFyZ2luQm90dG9tOiAwLFxyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHRjb25zdCB2YXJpYW50c0NoaWxkcmVuID0ge1xyXG5cdFx0dmlzaWJsZToge1xyXG5cdFx0XHRvcGFjaXR5OiAxLFxyXG5cdFx0XHRoZWlnaHQ6IDI5LFxyXG5cdFx0fSxcclxuXHRcdGhpZGRlbjoge1xyXG5cdFx0XHRvcGFjaXR5OiAwLFxyXG5cdFx0XHRoZWlnaHQ6IDAsXHJcblx0XHR9LFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9wZW5TZWNvbmRMZXZlbEtleSA9IChrZXk6IEtleWJvYXJkRXZlbnQsIHNlY29uZENhdGVnb3J5OiBzdHJpbmcpID0+IHtcclxuXHRcdGlmIChrZXkuY29kZSA9PSBcIlNwYWNlXCIgfHwga2V5LmNvZGUgPT0gXCJFbnRlclwiKSB7XHJcblx0XHRcdGtleS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRcdG9wZW5TZWNvbmRMZXZlbChzZWNvbmRDYXRlZ29yeSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IG9wZW5TZWNvbmRMZXZlbCA9IChzZWNvbmRDYXRlZ29yeTogc3RyaW5nKSA9PiB7XHJcblx0XHRzZXRNZW51ICYmXHJcblx0XHRcdHNldE1lbnUoXHJcblx0XHRcdFx0bWVudS5tYXAoKG0pID0+IHtcclxuXHRcdFx0XHRcdGlmIChtLl9pZC5zZWNvbmRDYXRlZ29yeSA9PSBzZWNvbmRDYXRlZ29yeSkge1xyXG5cdFx0XHRcdFx0XHRzZXRBbm5vdW5jZShtLmlzT3BlbmVkID8gXCJjbG9zZWRcIiA6IFwib3BlbmVkXCIpXHJcblx0XHRcdFx0XHRcdG0uaXNPcGVuZWQgPSAhbS5pc09wZW5lZDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBtO1xyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGJ1aWxkRmlyc3RMZXZlbCA9ICgpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDx1bCBjbGFzc05hbWU9e3N9PlxyXG5cdFx0XHRcdHtmaXJzdExldmVsTWVudS5tYXAoKG0pID0+IChcclxuXHRcdFx0XHRcdDxsaSBrZXk9e20ucm91dGV9IGFyaWEtZXhwYW5kZWQ9e20uaWQgPT0gZmlyc3RDYXRlZ29yeX0+XHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvJHttLnJvdXRlfWB9PlxyXG5cdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlcy5maXJzdExldmVsLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0W3N0eWxlcy5maXJzdExldmVsQWN0aXZlXTogbS5pZCA9PSBmaXJzdENhdGVnb3J5LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e20uaWNvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e20ubmFtZX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0e20uaWQgPT0gZmlyc3RDYXRlZ29yeSAmJiBidWlsZFNlY29uZExldmVsKG0pfVxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC91bD5cclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYnVpbGRTZWNvbmRMZXZlbCA9IChtZW51SXRlbTogRmlyc3RMZXZlbE1lbnVJdGVtKSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kQmxvY2t9PlxyXG5cdFx0XHRcdHttZW51Lm1hcCgobSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKG0ucGFnZXMubWFwKChwKSA9PiBwLmFsaWFzKS5pbmNsdWRlcyhyb3V0ZXIuYXNQYXRoLnNwbGl0KFwiL1wiKVsyXSkpIHtcclxuXHRcdFx0XHRcdFx0bS5pc09wZW5lZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PGxpIGtleT17bS5faWQuc2Vjb25kQ2F0ZWdvcnl9PlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdHRhYkluZGV4PXswfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25LZXlEb3duPXsoa2V5OiBLZXlib2FyZEV2ZW50KSA9PiBvcGVuU2Vjb25kTGV2ZWxLZXkoa2V5LCBtLl9pZC5zZWNvbmRDYXRlZ29yeSl9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5zZWNvbmRMZXZlbH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9wZW5TZWNvbmRMZXZlbChtLl9pZC5zZWNvbmRDYXRlZ29yeSl9XHJcblx0XHRcdFx0XHRcdFx0XHRhcmlhLWV4cGFuZGVkPXttLmlzT3BlbmVkfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHttLl9pZC5zZWNvbmRDYXRlZ29yeX1cclxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8bW90aW9uLnVsXHJcblx0XHRcdFx0XHRcdFx0XHRsYXlvdXRcclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnRzPXt2YXJpYW50c31cclxuXHRcdFx0XHRcdFx0XHRcdGluaXRpYWw9e20uaXNPcGVuZWQgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9XHJcblx0XHRcdFx0XHRcdFx0XHRhbmltYXRlPXttLmlzT3BlbmVkID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZXMuc2Vjb25kTGV2ZWxCbG9jayl9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0e2J1aWxkVGhpcmRMZXZlbChtLnBhZ2VzLCBtZW51SXRlbS5yb3V0ZSwgbS5pc09wZW5lZCA/PyBmYWxzZSl9XHJcblx0XHRcdFx0XHRcdFx0PC9tb3Rpb24udWw+XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0pfVxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBidWlsZFRoaXJkTGV2ZWwgPSAocGFnZXM6IFBhZ2VJdGVtW10sIHJvdXRlOiBzdHJpbmcsIGlzT3BlbmVkOmJvb2xlYW4pID0+IHtcclxuXHRcdHJldHVybiBwYWdlcy5tYXAoKHApID0+IChcclxuXHRcdFx0PG1vdGlvbi5saSBrZXk9e3AuX2lkfSB2YXJpYW50cz17dmFyaWFudHNDaGlsZHJlbn0+XHJcblx0XHRcdFx0PExpbmsgaHJlZj17YC8ke3JvdXRlfS8ke3AuYWxpYXN9YH0+XHJcblx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHR0YWJJbmRleD17aXNPcGVuZWQgPyAwIDogLTF9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLnRoaXJkTGV2ZWwsIHtcclxuXHRcdFx0XHRcdFx0XHRbc3R5bGVzLnRoaXJkTGV2ZWxBY3RpdmVdOiBgLyR7cm91dGV9LyR7cC5hbGlhc31gID09IHJvdXRlci5hc1BhdGgsXHJcblx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7cC5jYXRlZ29yeX1cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdDwvbW90aW9uLmxpPlxyXG5cdFx0KSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0gcm9sZT1cIm5hdmlnYXRpb25cIj5cclxuXHRcdFx0e2Fubm91bmNlICYmIDxzcGFuIHJvbGU9XCJsb2dcIiBjbGFzc05hbWU9XCJ2aXN1YWx5SGlkZGVuXCI+e2Fubm91bmNlID09IFwib3BlbmVkXCIgPyBcItGA0LDQt9Cy0LXRgNC90YPRgtC+XCIgOiBcItGB0LLQtdGA0L3Rg9GC0L5cIn08L3NwYW4+fVxyXG5cdFx0XHR7YnVpbGRGaXJzdExldmVsKCl9XHJcblx0XHQ8L25hdj5cclxuXHQpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9