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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L01lbnUvTWVudS50c3giXSwibmFtZXMiOlsiTWVudSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwibWVudSIsInNldE1lbnUiLCJmaXJzdENhdGVnb3J5Iiwicm91dGVyIiwidXNlUm91dGVyIiwidmFyaWFudHMiLCJ2aXNpYmxlIiwibWFyZ2luQm90dG9tIiwidHJhbnNpdGlvbiIsIndoZW4iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJoaWRkZW4iLCJ2YXJpYW50c0NoaWxkcmVuIiwib3BhY2l0eSIsImhlaWdodCIsIm9wZW5TZWNvbmRMZXZlbEtleSIsImtleSIsInNlY29uZENhdGVnb3J5IiwiY29kZSIsInByZXZlbnREZWZhdWx0Iiwib3BlblNlY29uZExldmVsIiwibWFwIiwibSIsIl9pZCIsImlzT3BlbmVkIiwiYnVpbGRGaXJzdExldmVsIiwiZmlyc3RMZXZlbE1lbnUiLCJyb3V0ZSIsImNuIiwic3R5bGVzIiwiZmlyc3RMZXZlbCIsImZpcnN0TGV2ZWxBY3RpdmUiLCJpZCIsImljb24iLCJuYW1lIiwiYnVpbGRTZWNvbmRMZXZlbCIsIm1lbnVJdGVtIiwic2Vjb25kQmxvY2siLCJwYWdlcyIsInAiLCJhbGlhcyIsImluY2x1ZGVzIiwiYXNQYXRoIiwic3BsaXQiLCJzZWNvbmRMZXZlbCIsInNlY29uZExldmVsQmxvY2siLCJidWlsZFRoaXJkTGV2ZWwiLCJ0aGlyZExldmVsIiwidGhpcmRMZXZlbEFjdGl2ZSIsImNhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFtQjtBQUFBOztBQUFBLG9CQUNHQyx3REFBVSxDQUFDQywrREFBRCxDQURiO0FBQUEsTUFDOUJDLElBRDhCLGVBQzlCQSxJQUQ4QjtBQUFBLE1BQ3hCQyxP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aG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIEtleWJvYXJkRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L2FwcC5jb250ZXh0XCI7XHJcbmltcG9ydCB7IEZpcnN0TGV2ZWxNZW51SXRlbSwgUGFnZUl0ZW0gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9tZW51LmludGVmYWNlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTWVudS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBmaXJzdExldmVsTWVudSB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRjb25zdCB7IG1lbnUsIHNldE1lbnUsIGZpcnN0Q2F0ZWdvcnkgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IHZhcmlhbnRzID0ge1xyXG5cdFx0dmlzaWJsZToge1xyXG5cdFx0XHRtYXJnaW5Cb3R0b206IDIwLFxyXG5cdFx0XHR0cmFuc2l0aW9uOiB7XHJcblx0XHRcdFx0d2hlbjogXCJiZWZvcmVDaGlsZHJlblwiLFxyXG5cdFx0XHRcdHN0YWdnZXJDaGlsZHJlbjogMC4xLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdGhpZGRlbjoge1xyXG5cdFx0XHRtYXJnaW5Cb3R0b206IDAsXHJcblx0XHR9LFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IHZhcmlhbnRzQ2hpbGRyZW4gPSB7XHJcblx0XHR2aXNpYmxlOiB7XHJcblx0XHRcdG9wYWNpdHk6IDEsXHJcblx0XHRcdGhlaWdodDogMjksXHJcblx0XHR9LFxyXG5cdFx0aGlkZGVuOiB7XHJcblx0XHRcdG9wYWNpdHk6IDAsXHJcblx0XHRcdGhlaWdodDogMCxcclxuXHRcdH0sXHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb3BlblNlY29uZExldmVsS2V5ID0gKGtleTogS2V5Ym9hcmRFdmVudCwgc2Vjb25kQ2F0ZWdvcnk6IHN0cmluZykgPT4ge1xyXG5cdFx0aWYgKGtleS5jb2RlID09IFwiU3BhY2VcIiB8fCBrZXkuY29kZSA9PSBcIkVudGVyXCIpIHtcclxuXHRcdFx0a2V5LnByZXZlbnREZWZhdWx0KClcclxuXHRcdFx0b3BlblNlY29uZExldmVsKHNlY29uZENhdGVnb3J5KVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3Qgb3BlblNlY29uZExldmVsID0gKHNlY29uZENhdGVnb3J5OiBzdHJpbmcpID0+IHtcclxuXHRcdHNldE1lbnUgJiZcclxuXHRcdFx0c2V0TWVudShcclxuXHRcdFx0XHRtZW51Lm1hcCgobSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKG0uX2lkLnNlY29uZENhdGVnb3J5ID09IHNlY29uZENhdGVnb3J5KSB7XHJcblx0XHRcdFx0XHRcdG0uaXNPcGVuZWQgPSAhbS5pc09wZW5lZDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBtO1xyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGJ1aWxkRmlyc3RMZXZlbCA9ICgpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDx1bD5cclxuXHRcdFx0XHR7Zmlyc3RMZXZlbE1lbnUubWFwKChtKSA9PiAoXHJcblx0XHRcdFx0XHQ8bGkga2V5PXttLnJvdXRlfT5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC8ke20ucm91dGV9YH0+XHJcblx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLmZpcnN0TGV2ZWwsIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbc3R5bGVzLmZpcnN0TGV2ZWxBY3RpdmVdOiBtLmlkID09IGZpcnN0Q2F0ZWdvcnksXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7bS5pY29ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57bS5uYW1lfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHR7bS5pZCA9PSBmaXJzdENhdGVnb3J5ICYmIGJ1aWxkU2Vjb25kTGV2ZWwobSl9XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBidWlsZFNlY29uZExldmVsID0gKG1lbnVJdGVtOiBGaXJzdExldmVsTWVudUl0ZW0pID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kQmxvY2t9PlxyXG5cdFx0XHRcdHttZW51Lm1hcCgobSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKG0ucGFnZXMubWFwKChwKSA9PiBwLmFsaWFzKS5pbmNsdWRlcyhyb3V0ZXIuYXNQYXRoLnNwbGl0KFwiL1wiKVsyXSkpIHtcclxuXHRcdFx0XHRcdFx0bS5pc09wZW5lZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PGRpdiBrZXk9e20uX2lkLnNlY29uZENhdGVnb3J5fT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHR0YWJJbmRleD17MH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uS2V5RG93bj17KGtleTogS2V5Ym9hcmRFdmVudCkgPT4gb3BlblNlY29uZExldmVsS2V5KGtleSwgbS5faWQuc2Vjb25kQ2F0ZWdvcnkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kTGV2ZWx9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBvcGVuU2Vjb25kTGV2ZWwobS5faWQuc2Vjb25kQ2F0ZWdvcnkpfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHttLl9pZC5zZWNvbmRDYXRlZ29yeX1cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0bGF5b3V0XHJcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50cz17dmFyaWFudHN9XHJcblx0XHRcdFx0XHRcdFx0XHRpbml0aWFsPXttLmlzT3BlbmVkID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifVxyXG5cdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZT17bS5pc09wZW5lZCA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIn1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLnNlY29uZExldmVsQmxvY2spfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHtidWlsZFRoaXJkTGV2ZWwobS5wYWdlcywgbWVudUl0ZW0ucm91dGUsIG0uaXNPcGVuZWQgPz8gZmFsc2UpfVxyXG5cdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0pfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYnVpbGRUaGlyZExldmVsID0gKHBhZ2VzOiBQYWdlSXRlbVtdLCByb3V0ZTogc3RyaW5nLCBpc09wZW5lZDpib29sZWFuKSA9PiB7XHJcblx0XHRyZXR1cm4gcGFnZXMubWFwKChwKSA9PiAoXHJcblx0XHRcdDxtb3Rpb24uZGl2IGtleT17cC5faWR9IHZhcmlhbnRzPXt2YXJpYW50c0NoaWxkcmVufT5cclxuXHRcdFx0XHQ8TGluayBocmVmPXtgLyR7cm91dGV9LyR7cC5hbGlhc31gfT5cclxuXHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdHRhYkluZGV4PXtpc09wZW5lZCA/IDAgOiAtMX1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZXMudGhpcmRMZXZlbCwge1xyXG5cdFx0XHRcdFx0XHRcdFtzdHlsZXMudGhpcmRMZXZlbEFjdGl2ZV06IGAvJHtyb3V0ZX0vJHtwLmFsaWFzfWAgPT0gcm91dGVyLmFzUGF0aCxcclxuXHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHtwLmNhdGVnb3J5fVxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0PC9tb3Rpb24uZGl2PlxyXG5cdFx0KSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0gcm9sZT1cIm5hdmlnYXRpb25cIj57YnVpbGRGaXJzdExldmVsKCl9PC9uYXY+O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9