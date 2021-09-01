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
        m.isOpened = !m.isOpened;
      }

      return m;
    }));
  };

  var buildFirstLevel = function buildFirstLevel() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: _helpers_helpers__WEBPACK_IMPORTED_MODULE_8__["firstLevelMenu"].map(function (m) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          "aria-ex": true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/".concat(m.route),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.firstLevel, Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.firstLevelActive, m.id == firstCategory)),
                children: [m.icon, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: m.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 7
          }, _this), m.id == firstCategory && buildSecondLevel(m)]
        }, m.route, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 4
    }, _this);
  };

  var buildSecondLevel = function buildSecondLevel(menuItem) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.secondBlock,
      children: menu.map(function (m) {
        var _m$isOpened;

        if (m.pages.map(function (p) {
          return p.alias;
        }).includes(router.asPath.split("/")[2])) {
          m.isOpened = true;
        }

        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            tabIndex: 0,
            onKeyDown: function onKeyDown(key) {
              return openSecondLevelKey(key, m._id.secondCategory);
            },
            className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.secondLevel,
            onClick: function onClick() {
              return openSecondLevel(m._id.secondCategory);
            },
            children: m._id.secondCategory
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 8
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].div, {
            layout: true,
            variants: variants,
            initial: m.isOpened ? "visible" : "hidden",
            animate: m.isOpened ? "visible" : "hidden",
            className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.secondLevelBlock),
            children: buildThirdLevel(m.pages, menuItem.route, (_m$isOpened = m.isOpened) !== null && _m$isOpened !== void 0 ? _m$isOpened : false)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 8
          }, _this)]
        }, m._id.secondCategory, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 7
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 4
    }, _this);
  };

  var buildThirdLevel = function buildThirdLevel(pages, route, isOpened) {
    return pages.map(function (p) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].div, {
        variants: variantsChildren,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/".concat(route, "/").concat(p.alias),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            tabIndex: isOpened ? 0 : -1,
            className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.thirdLevel, Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.thirdLevelActive, "/".concat(route, "/").concat(p.alias) == router.asPath)),
            children: p.category
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 6
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 5
        }, _this)
      }, p._id, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 4
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.menu,
    role: "navigation",
    children: buildFirstLevel()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 9
  }, _this);
};

_s(Menu, "YqHcl+I8m2ExHhmA1U37LWJvE/M=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L01lbnUvTWVudS50c3giXSwibmFtZXMiOlsiTWVudSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwibWVudSIsInNldE1lbnUiLCJmaXJzdENhdGVnb3J5Iiwicm91dGVyIiwidXNlUm91dGVyIiwidmFyaWFudHMiLCJ2aXNpYmxlIiwibWFyZ2luQm90dG9tIiwidHJhbnNpdGlvbiIsIndoZW4iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJoaWRkZW4iLCJ2YXJpYW50c0NoaWxkcmVuIiwib3BhY2l0eSIsImhlaWdodCIsIm9wZW5TZWNvbmRMZXZlbEtleSIsImtleSIsInNlY29uZENhdGVnb3J5IiwiY29kZSIsInByZXZlbnREZWZhdWx0Iiwib3BlblNlY29uZExldmVsIiwibWFwIiwibSIsIl9pZCIsImlzT3BlbmVkIiwiYnVpbGRGaXJzdExldmVsIiwiZmlyc3RMZXZlbE1lbnUiLCJyb3V0ZSIsImNuIiwic3R5bGVzIiwiZmlyc3RMZXZlbCIsImZpcnN0TGV2ZWxBY3RpdmUiLCJpZCIsImljb24iLCJuYW1lIiwiYnVpbGRTZWNvbmRMZXZlbCIsIm1lbnVJdGVtIiwic2Vjb25kQmxvY2siLCJwYWdlcyIsInAiLCJhbGlhcyIsImluY2x1ZGVzIiwiYXNQYXRoIiwic3BsaXQiLCJzZWNvbmRMZXZlbCIsInNlY29uZExldmVsQmxvY2siLCJidWlsZFRoaXJkTGV2ZWwiLCJ0aGlyZExldmVsIiwidGhpcmRMZXZlbEFjdGl2ZSIsImNhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFtQjtBQUFBOztBQUFBLG9CQUNHQyx3REFBVSxDQUFDQywrREFBRCxDQURiO0FBQUEsTUFDOUJDLElBRDhCLGVBQzlCQSxJQUQ4QjtBQUFBLE1BQ3hCQyxP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OGZlZmQxYWY4YTczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCBLZXlib2FyZEV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9hcHAuY29udGV4dFwiO1xyXG5pbXBvcnQgeyBGaXJzdExldmVsTWVudUl0ZW0sIFBhZ2VJdGVtIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvbWVudS5pbnRlZmFjZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL01lbnUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgZmlyc3RMZXZlbE1lbnUgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWVudSA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0Y29uc3QgeyBtZW51LCBzZXRNZW51LCBmaXJzdENhdGVnb3J5IH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRjb25zdCB2YXJpYW50cyA9IHtcclxuXHRcdHZpc2libGU6IHtcclxuXHRcdFx0bWFyZ2luQm90dG9tOiAyMCxcclxuXHRcdFx0dHJhbnNpdGlvbjoge1xyXG5cdFx0XHRcdHdoZW46IFwiYmVmb3JlQ2hpbGRyZW5cIixcclxuXHRcdFx0XHRzdGFnZ2VyQ2hpbGRyZW46IDAuMSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRoaWRkZW46IHtcclxuXHRcdFx0bWFyZ2luQm90dG9tOiAwLFxyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHRjb25zdCB2YXJpYW50c0NoaWxkcmVuID0ge1xyXG5cdFx0dmlzaWJsZToge1xyXG5cdFx0XHRvcGFjaXR5OiAxLFxyXG5cdFx0XHRoZWlnaHQ6IDI5LFxyXG5cdFx0fSxcclxuXHRcdGhpZGRlbjoge1xyXG5cdFx0XHRvcGFjaXR5OiAwLFxyXG5cdFx0XHRoZWlnaHQ6IDAsXHJcblx0XHR9LFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9wZW5TZWNvbmRMZXZlbEtleSA9IChrZXk6IEtleWJvYXJkRXZlbnQsIHNlY29uZENhdGVnb3J5OiBzdHJpbmcpID0+IHtcclxuXHRcdGlmIChrZXkuY29kZSA9PSBcIlNwYWNlXCIgfHwga2V5LmNvZGUgPT0gXCJFbnRlclwiKSB7XHJcblx0XHRcdGtleS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRcdG9wZW5TZWNvbmRMZXZlbChzZWNvbmRDYXRlZ29yeSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IG9wZW5TZWNvbmRMZXZlbCA9IChzZWNvbmRDYXRlZ29yeTogc3RyaW5nKSA9PiB7XHJcblx0XHRzZXRNZW51ICYmXHJcblx0XHRcdHNldE1lbnUoXHJcblx0XHRcdFx0bWVudS5tYXAoKG0pID0+IHtcclxuXHRcdFx0XHRcdGlmIChtLl9pZC5zZWNvbmRDYXRlZ29yeSA9PSBzZWNvbmRDYXRlZ29yeSkge1xyXG5cdFx0XHRcdFx0XHRtLmlzT3BlbmVkID0gIW0uaXNPcGVuZWQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gbTtcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBidWlsZEZpcnN0TGV2ZWwgPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8dWw+XHJcblx0XHRcdFx0e2ZpcnN0TGV2ZWxNZW51Lm1hcCgobSkgPT4gKFxyXG5cdFx0XHRcdFx0PGxpIGtleT17bS5yb3V0ZX0gYXJpYS1leD5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC8ke20ucm91dGV9YH0+XHJcblx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLmZpcnN0TGV2ZWwsIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbc3R5bGVzLmZpcnN0TGV2ZWxBY3RpdmVdOiBtLmlkID09IGZpcnN0Q2F0ZWdvcnksXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7bS5pY29ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57bS5uYW1lfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHR7bS5pZCA9PSBmaXJzdENhdGVnb3J5ICYmIGJ1aWxkU2Vjb25kTGV2ZWwobSl9XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBidWlsZFNlY29uZExldmVsID0gKG1lbnVJdGVtOiBGaXJzdExldmVsTWVudUl0ZW0pID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kQmxvY2t9PlxyXG5cdFx0XHRcdHttZW51Lm1hcCgobSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKG0ucGFnZXMubWFwKChwKSA9PiBwLmFsaWFzKS5pbmNsdWRlcyhyb3V0ZXIuYXNQYXRoLnNwbGl0KFwiL1wiKVsyXSkpIHtcclxuXHRcdFx0XHRcdFx0bS5pc09wZW5lZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PGRpdiBrZXk9e20uX2lkLnNlY29uZENhdGVnb3J5fT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHR0YWJJbmRleD17MH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uS2V5RG93bj17KGtleTogS2V5Ym9hcmRFdmVudCkgPT4gb3BlblNlY29uZExldmVsS2V5KGtleSwgbS5faWQuc2Vjb25kQ2F0ZWdvcnkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kTGV2ZWx9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBvcGVuU2Vjb25kTGV2ZWwobS5faWQuc2Vjb25kQ2F0ZWdvcnkpfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHttLl9pZC5zZWNvbmRDYXRlZ29yeX1cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0bGF5b3V0XHJcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50cz17dmFyaWFudHN9XHJcblx0XHRcdFx0XHRcdFx0XHRpbml0aWFsPXttLmlzT3BlbmVkID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifVxyXG5cdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZT17bS5pc09wZW5lZCA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIn1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLnNlY29uZExldmVsQmxvY2spfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHtidWlsZFRoaXJkTGV2ZWwobS5wYWdlcywgbWVudUl0ZW0ucm91dGUsIG0uaXNPcGVuZWQgPz8gZmFsc2UpfVxyXG5cdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0pfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYnVpbGRUaGlyZExldmVsID0gKHBhZ2VzOiBQYWdlSXRlbVtdLCByb3V0ZTogc3RyaW5nLCBpc09wZW5lZDpib29sZWFuKSA9PiB7XHJcblx0XHRyZXR1cm4gcGFnZXMubWFwKChwKSA9PiAoXHJcblx0XHRcdDxtb3Rpb24uZGl2IGtleT17cC5faWR9IHZhcmlhbnRzPXt2YXJpYW50c0NoaWxkcmVufT5cclxuXHRcdFx0XHQ8TGluayBocmVmPXtgLyR7cm91dGV9LyR7cC5hbGlhc31gfT5cclxuXHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdHRhYkluZGV4PXtpc09wZW5lZCA/IDAgOiAtMX1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZXMudGhpcmRMZXZlbCwge1xyXG5cdFx0XHRcdFx0XHRcdFtzdHlsZXMudGhpcmRMZXZlbEFjdGl2ZV06IGAvJHtyb3V0ZX0vJHtwLmFsaWFzfWAgPT0gcm91dGVyLmFzUGF0aCxcclxuXHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHtwLmNhdGVnb3J5fVxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0PC9tb3Rpb24uZGl2PlxyXG5cdFx0KSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0gcm9sZT1cIm5hdmlnYXRpb25cIj57YnVpbGRGaXJzdExldmVsKCl9PC9uYXY+O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9