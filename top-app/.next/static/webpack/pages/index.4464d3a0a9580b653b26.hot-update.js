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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].ul, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L01lbnUvTWVudS50c3giXSwibmFtZXMiOlsiTWVudSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwibWVudSIsInNldE1lbnUiLCJmaXJzdENhdGVnb3J5Iiwicm91dGVyIiwidXNlUm91dGVyIiwidmFyaWFudHMiLCJ2aXNpYmxlIiwibWFyZ2luQm90dG9tIiwidHJhbnNpdGlvbiIsIndoZW4iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJoaWRkZW4iLCJ2YXJpYW50c0NoaWxkcmVuIiwib3BhY2l0eSIsImhlaWdodCIsIm9wZW5TZWNvbmRMZXZlbEtleSIsImtleSIsInNlY29uZENhdGVnb3J5IiwiY29kZSIsInByZXZlbnREZWZhdWx0Iiwib3BlblNlY29uZExldmVsIiwibWFwIiwibSIsIl9pZCIsImlzT3BlbmVkIiwiYnVpbGRGaXJzdExldmVsIiwiZmlyc3RMZXZlbE1lbnUiLCJpZCIsInJvdXRlIiwiY24iLCJzdHlsZXMiLCJmaXJzdExldmVsIiwiZmlyc3RMZXZlbEFjdGl2ZSIsImljb24iLCJuYW1lIiwiYnVpbGRTZWNvbmRMZXZlbCIsIm1lbnVJdGVtIiwic2Vjb25kQmxvY2siLCJwYWdlcyIsInAiLCJhbGlhcyIsImluY2x1ZGVzIiwiYXNQYXRoIiwic3BsaXQiLCJzZWNvbmRMZXZlbCIsInNlY29uZExldmVsQmxvY2siLCJidWlsZFRoaXJkTGV2ZWwiLCJ0aGlyZExldmVsIiwidGhpcmRMZXZlbEFjdGl2ZSIsImNhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFtQjtBQUFBOztBQUFBLG9CQUNHQyx3REFBVSxDQUFDQywrREFBRCxDQURiO0FBQUEsTUFDOUJDLElBRDhCLGVBQzlCQSxJQUQ4QjtBQUFBLE1BQ3hCQyxP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cGFnZXMvaW5kZXguNDQ2NGQzYTBhOTU4MGI2NTNiMjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIEtleWJvYXJkRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L2FwcC5jb250ZXh0XCI7XHJcbmltcG9ydCB7IEZpcnN0TGV2ZWxNZW51SXRlbSwgUGFnZUl0ZW0gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9tZW51LmludGVmYWNlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTWVudS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBmaXJzdExldmVsTWVudSB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRjb25zdCB7IG1lbnUsIHNldE1lbnUsIGZpcnN0Q2F0ZWdvcnkgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IHZhcmlhbnRzID0ge1xyXG5cdFx0dmlzaWJsZToge1xyXG5cdFx0XHRtYXJnaW5Cb3R0b206IDIwLFxyXG5cdFx0XHR0cmFuc2l0aW9uOiB7XHJcblx0XHRcdFx0d2hlbjogXCJiZWZvcmVDaGlsZHJlblwiLFxyXG5cdFx0XHRcdHN0YWdnZXJDaGlsZHJlbjogMC4xLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdGhpZGRlbjoge1xyXG5cdFx0XHRtYXJnaW5Cb3R0b206IDAsXHJcblx0XHR9LFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IHZhcmlhbnRzQ2hpbGRyZW4gPSB7XHJcblx0XHR2aXNpYmxlOiB7XHJcblx0XHRcdG9wYWNpdHk6IDEsXHJcblx0XHRcdGhlaWdodDogMjksXHJcblx0XHR9LFxyXG5cdFx0aGlkZGVuOiB7XHJcblx0XHRcdG9wYWNpdHk6IDAsXHJcblx0XHRcdGhlaWdodDogMCxcclxuXHRcdH0sXHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb3BlblNlY29uZExldmVsS2V5ID0gKGtleTogS2V5Ym9hcmRFdmVudCwgc2Vjb25kQ2F0ZWdvcnk6IHN0cmluZykgPT4ge1xyXG5cdFx0aWYgKGtleS5jb2RlID09IFwiU3BhY2VcIiB8fCBrZXkuY29kZSA9PSBcIkVudGVyXCIpIHtcclxuXHRcdFx0a2V5LnByZXZlbnREZWZhdWx0KClcclxuXHRcdFx0b3BlblNlY29uZExldmVsKHNlY29uZENhdGVnb3J5KVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3Qgb3BlblNlY29uZExldmVsID0gKHNlY29uZENhdGVnb3J5OiBzdHJpbmcpID0+IHtcclxuXHRcdHNldE1lbnUgJiZcclxuXHRcdFx0c2V0TWVudShcclxuXHRcdFx0XHRtZW51Lm1hcCgobSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKG0uX2lkLnNlY29uZENhdGVnb3J5ID09IHNlY29uZENhdGVnb3J5KSB7XHJcblx0XHRcdFx0XHRcdG0uaXNPcGVuZWQgPSAhbS5pc09wZW5lZDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBtO1xyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGJ1aWxkRmlyc3RMZXZlbCA9ICgpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDx1bD5cclxuXHRcdFx0XHR7Zmlyc3RMZXZlbE1lbnUubWFwKChtKSA9PiAoXHJcblx0XHRcdFx0XHQ8bGkga2V5PXttLnJvdXRlfSBhcmlhLWV4cGFuZGVkPXttLmlkID09IGZpcnN0Q2F0ZWdvcnl9PlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgLyR7bS5yb3V0ZX1gfT5cclxuXHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZXMuZmlyc3RMZXZlbCwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFtzdHlsZXMuZmlyc3RMZXZlbEFjdGl2ZV06IG0uaWQgPT0gZmlyc3RDYXRlZ29yeSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHttLmljb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPnttLm5hbWV9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdHttLmlkID09IGZpcnN0Q2F0ZWdvcnkgJiYgYnVpbGRTZWNvbmRMZXZlbChtKX1cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvdWw+XHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGJ1aWxkU2Vjb25kTGV2ZWwgPSAobWVudUl0ZW06IEZpcnN0TGV2ZWxNZW51SXRlbSkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PHVsIGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZEJsb2NrfT5cclxuXHRcdFx0XHR7bWVudS5tYXAoKG0pID0+IHtcclxuXHRcdFx0XHRcdGlmIChtLnBhZ2VzLm1hcCgocCkgPT4gcC5hbGlhcykuaW5jbHVkZXMocm91dGVyLmFzUGF0aC5zcGxpdChcIi9cIilbMl0pKSB7XHJcblx0XHRcdFx0XHRcdG0uaXNPcGVuZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDxsaSBrZXk9e20uX2lkLnNlY29uZENhdGVnb3J5fT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHR0YWJJbmRleD17MH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uS2V5RG93bj17KGtleTogS2V5Ym9hcmRFdmVudCkgPT4gb3BlblNlY29uZExldmVsS2V5KGtleSwgbS5faWQuc2Vjb25kQ2F0ZWdvcnkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kTGV2ZWx9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBvcGVuU2Vjb25kTGV2ZWwobS5faWQuc2Vjb25kQ2F0ZWdvcnkpfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHttLl9pZC5zZWNvbmRDYXRlZ29yeX1cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8bW90aW9uLnVsXHJcblx0XHRcdFx0XHRcdFx0XHRsYXlvdXRcclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnRzPXt2YXJpYW50c31cclxuXHRcdFx0XHRcdFx0XHRcdGluaXRpYWw9e20uaXNPcGVuZWQgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9XHJcblx0XHRcdFx0XHRcdFx0XHRhbmltYXRlPXttLmlzT3BlbmVkID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZXMuc2Vjb25kTGV2ZWxCbG9jayl9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0e2J1aWxkVGhpcmRMZXZlbChtLnBhZ2VzLCBtZW51SXRlbS5yb3V0ZSwgbS5pc09wZW5lZCA/PyBmYWxzZSl9XHJcblx0XHRcdFx0XHRcdFx0PC9tb3Rpb24udWw+XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0pfVxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBidWlsZFRoaXJkTGV2ZWwgPSAocGFnZXM6IFBhZ2VJdGVtW10sIHJvdXRlOiBzdHJpbmcsIGlzT3BlbmVkOmJvb2xlYW4pID0+IHtcclxuXHRcdHJldHVybiBwYWdlcy5tYXAoKHApID0+IChcclxuXHRcdFx0PG1vdGlvbi5saSBrZXk9e3AuX2lkfSB2YXJpYW50cz17dmFyaWFudHNDaGlsZHJlbn0+XHJcblx0XHRcdFx0PExpbmsgaHJlZj17YC8ke3JvdXRlfS8ke3AuYWxpYXN9YH0+XHJcblx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHR0YWJJbmRleD17aXNPcGVuZWQgPyAwIDogLTF9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLnRoaXJkTGV2ZWwsIHtcclxuXHRcdFx0XHRcdFx0XHRbc3R5bGVzLnRoaXJkTGV2ZWxBY3RpdmVdOiBgLyR7cm91dGV9LyR7cC5hbGlhc31gID09IHJvdXRlci5hc1BhdGgsXHJcblx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7cC5jYXRlZ29yeX1cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdDwvbW90aW9uLmxpPlxyXG5cdFx0KSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0gcm9sZT1cIm5hdmlnYXRpb25cIj57YnVpbGRGaXJzdExldmVsKCl9PC9uYXY+O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9