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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
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
                  lineNumber: 73,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 7
          }, _this), m.id == firstCategory && buildSecondLevel(m)]
        }, m.route, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
            lineNumber: 94,
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
            lineNumber: 103,
            columnNumber: 8
          }, _this)]
        }, m._id.secondCategory, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 7
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
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
            lineNumber: 123,
            columnNumber: 6
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 5
        }, _this)
      }, p._id, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 4
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.menu,
    role: "navigation",
    children: [announce && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      role: "lo",
      className: "visualyHidden",
      children: announce == "opened" ? "развернуто" : "свернуто"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }, _this), buildFirstLevel()]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 137,
    columnNumber: 3
  }, _this);
};

_s(Menu, "WVr8jR6cfVb4YgXxWJ7lJQCBNxs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L01lbnUvTWVudS50c3giXSwibmFtZXMiOlsiTWVudSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwibWVudSIsInNldE1lbnUiLCJmaXJzdENhdGVnb3J5IiwidXNlU3RhdGUiLCJhbm5vdW5jZSIsInNldEFubm91bmNlIiwicm91dGVyIiwidXNlUm91dGVyIiwidmFyaWFudHMiLCJ2aXNpYmxlIiwibWFyZ2luQm90dG9tIiwidHJhbnNpdGlvbiIsIndoZW4iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJoaWRkZW4iLCJ2YXJpYW50c0NoaWxkcmVuIiwib3BhY2l0eSIsImhlaWdodCIsIm9wZW5TZWNvbmRMZXZlbEtleSIsImtleSIsInNlY29uZENhdGVnb3J5IiwiY29kZSIsInByZXZlbnREZWZhdWx0Iiwib3BlblNlY29uZExldmVsIiwibWFwIiwibSIsIl9pZCIsImlzT3BlbmVkIiwiYnVpbGRGaXJzdExldmVsIiwiZmlyc3RMZXZlbE1lbnUiLCJpZCIsInJvdXRlIiwiY24iLCJzdHlsZXMiLCJmaXJzdExldmVsIiwiZmlyc3RMZXZlbEFjdGl2ZSIsImljb24iLCJuYW1lIiwiYnVpbGRTZWNvbmRMZXZlbCIsIm1lbnVJdGVtIiwic2Vjb25kQmxvY2siLCJwYWdlcyIsInAiLCJhbGlhcyIsImluY2x1ZGVzIiwiYXNQYXRoIiwic3BsaXQiLCJzZWNvbmRMZXZlbCIsInNlY29uZExldmVsQmxvY2siLCJidWlsZFRoaXJkTGV2ZWwiLCJ0aGlyZExldmVsIiwidGhpcmRMZXZlbEFjdGl2ZSIsImNhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFtQjtBQUFBOztBQUFBLG9CQUNHQyx3REFBVSxDQUFDQywrREFBRCxDQURiO0FBQUEsTUFD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LEVBQUMsWUFBbEM7QUFBQSxlQUNFSSxRQUFRLGlCQUFJO0FBQU0sVUFBSSxFQUFDLElBQVg7QUFBZ0IsZUFBUyxFQUFDLGVBQTFCO0FBQUEsZ0JBQTJDQSxRQUFRLElBQUksUUFBWixHQUF1QixZQUF2QixHQUFzQztBQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRGQsRUFFRXdCLGVBQWUsRUFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFNQSxDQWxJTTs7R0FBTS9CLEk7VUFHR1UscUQ7OztLQUhIVixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU5ZmUyYjBhNzJmYTIwZDE3M2ExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCBLZXlib2FyZEV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvYXBwLmNvbnRleHRcIjtcclxuaW1wb3J0IHsgRmlyc3RMZXZlbE1lbnVJdGVtLCBQYWdlSXRlbSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL21lbnUuaW50ZWZhY2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9NZW51Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IGZpcnN0TGV2ZWxNZW51IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyBzcGF3biB9IGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWVudSA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0Y29uc3QgeyBtZW51LCBzZXRNZW51LCBmaXJzdENhdGVnb3J5IH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG5cdGNvbnN0IFthbm5vdW5jZSwgc2V0QW5ub3VuY2VdID0gdXNlU3RhdGU8XCJjbG9zZWRcIiB8IFwib3BlbmVkXCIgfCB1bmRlZmluZWQ+KCk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IHZhcmlhbnRzID0ge1xyXG5cdFx0dmlzaWJsZToge1xyXG5cdFx0XHRtYXJnaW5Cb3R0b206IDIwLFxyXG5cdFx0XHR0cmFuc2l0aW9uOiB7XHJcblx0XHRcdFx0d2hlbjogXCJiZWZvcmVDaGlsZHJlblwiLFxyXG5cdFx0XHRcdHN0YWdnZXJDaGlsZHJlbjogMC4xLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdGhpZGRlbjoge1xyXG5cdFx0XHRtYXJnaW5Cb3R0b206IDAsXHJcblx0XHR9LFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IHZhcmlhbnRzQ2hpbGRyZW4gPSB7XHJcblx0XHR2aXNpYmxlOiB7XHJcblx0XHRcdG9wYWNpdHk6IDEsXHJcblx0XHRcdGhlaWdodDogMjksXHJcblx0XHR9LFxyXG5cdFx0aGlkZGVuOiB7XHJcblx0XHRcdG9wYWNpdHk6IDAsXHJcblx0XHRcdGhlaWdodDogMCxcclxuXHRcdH0sXHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb3BlblNlY29uZExldmVsS2V5ID0gKGtleTogS2V5Ym9hcmRFdmVudCwgc2Vjb25kQ2F0ZWdvcnk6IHN0cmluZykgPT4ge1xyXG5cdFx0aWYgKGtleS5jb2RlID09IFwiU3BhY2VcIiB8fCBrZXkuY29kZSA9PSBcIkVudGVyXCIpIHtcclxuXHRcdFx0a2V5LnByZXZlbnREZWZhdWx0KClcclxuXHRcdFx0b3BlblNlY29uZExldmVsKHNlY29uZENhdGVnb3J5KVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3Qgb3BlblNlY29uZExldmVsID0gKHNlY29uZENhdGVnb3J5OiBzdHJpbmcpID0+IHtcclxuXHRcdHNldE1lbnUgJiZcclxuXHRcdFx0c2V0TWVudShcclxuXHRcdFx0XHRtZW51Lm1hcCgobSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKG0uX2lkLnNlY29uZENhdGVnb3J5ID09IHNlY29uZENhdGVnb3J5KSB7XHJcblx0XHRcdFx0XHRcdG0uaXNPcGVuZWQgPSAhbS5pc09wZW5lZDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBtO1xyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGJ1aWxkRmlyc3RMZXZlbCA9ICgpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDx1bD5cclxuXHRcdFx0XHR7Zmlyc3RMZXZlbE1lbnUubWFwKChtKSA9PiAoXHJcblx0XHRcdFx0XHQ8bGkga2V5PXttLnJvdXRlfSBhcmlhLWV4cGFuZGVkPXttLmlkID09IGZpcnN0Q2F0ZWdvcnl9PlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgLyR7bS5yb3V0ZX1gfT5cclxuXHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZXMuZmlyc3RMZXZlbCwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFtzdHlsZXMuZmlyc3RMZXZlbEFjdGl2ZV06IG0uaWQgPT0gZmlyc3RDYXRlZ29yeSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHttLmljb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPnttLm5hbWV9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdHttLmlkID09IGZpcnN0Q2F0ZWdvcnkgJiYgYnVpbGRTZWNvbmRMZXZlbChtKX1cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvdWw+XHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGJ1aWxkU2Vjb25kTGV2ZWwgPSAobWVudUl0ZW06IEZpcnN0TGV2ZWxNZW51SXRlbSkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PHVsIGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZEJsb2NrfT5cclxuXHRcdFx0XHR7bWVudS5tYXAoKG0pID0+IHtcclxuXHRcdFx0XHRcdGlmIChtLnBhZ2VzLm1hcCgocCkgPT4gcC5hbGlhcykuaW5jbHVkZXMocm91dGVyLmFzUGF0aC5zcGxpdChcIi9cIilbMl0pKSB7XHJcblx0XHRcdFx0XHRcdG0uaXNPcGVuZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDxsaSBrZXk9e20uX2lkLnNlY29uZENhdGVnb3J5fT5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHR0YWJJbmRleD17MH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uS2V5RG93bj17KGtleTogS2V5Ym9hcmRFdmVudCkgPT4gb3BlblNlY29uZExldmVsS2V5KGtleSwgbS5faWQuc2Vjb25kQ2F0ZWdvcnkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kTGV2ZWx9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBvcGVuU2Vjb25kTGV2ZWwobS5faWQuc2Vjb25kQ2F0ZWdvcnkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD17bS5pc09wZW5lZH1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7bS5faWQuc2Vjb25kQ2F0ZWdvcnl9XHJcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PG1vdGlvbi51bFxyXG5cdFx0XHRcdFx0XHRcdFx0bGF5b3V0XHJcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50cz17dmFyaWFudHN9XHJcblx0XHRcdFx0XHRcdFx0XHRpbml0aWFsPXttLmlzT3BlbmVkID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifVxyXG5cdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZT17bS5pc09wZW5lZCA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIn1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLnNlY29uZExldmVsQmxvY2spfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHtidWlsZFRoaXJkTGV2ZWwobS5wYWdlcywgbWVudUl0ZW0ucm91dGUsIG0uaXNPcGVuZWQgPz8gZmFsc2UpfVxyXG5cdFx0XHRcdFx0XHRcdDwvbW90aW9uLnVsPlxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9KX1cclxuXHRcdFx0PC91bD5cclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYnVpbGRUaGlyZExldmVsID0gKHBhZ2VzOiBQYWdlSXRlbVtdLCByb3V0ZTogc3RyaW5nLCBpc09wZW5lZDpib29sZWFuKSA9PiB7XHJcblx0XHRyZXR1cm4gcGFnZXMubWFwKChwKSA9PiAoXHJcblx0XHRcdDxtb3Rpb24ubGkga2V5PXtwLl9pZH0gdmFyaWFudHM9e3ZhcmlhbnRzQ2hpbGRyZW59PlxyXG5cdFx0XHRcdDxMaW5rIGhyZWY9e2AvJHtyb3V0ZX0vJHtwLmFsaWFzfWB9PlxyXG5cdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0dGFiSW5kZXg9e2lzT3BlbmVkID8gMCA6IC0xfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlcy50aGlyZExldmVsLCB7XHJcblx0XHRcdFx0XHRcdFx0W3N0eWxlcy50aGlyZExldmVsQWN0aXZlXTogYC8ke3JvdXRlfS8ke3AuYWxpYXN9YCA9PSByb3V0ZXIuYXNQYXRoLFxyXG5cdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0e3AuY2F0ZWdvcnl9XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHQ8L21vdGlvbi5saT5cclxuXHRcdCkpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9IHJvbGU9XCJuYXZpZ2F0aW9uXCI+XHJcblx0XHRcdHthbm5vdW5jZSAmJiA8c3BhbiByb2xlPVwibG9cIiBjbGFzc05hbWU9XCJ2aXN1YWx5SGlkZGVuXCI+e2Fubm91bmNlID09IFwib3BlbmVkXCIgPyBcItGA0LDQt9Cy0LXRgNC90YPRgtC+XCIgOiBcItGB0LLQtdGA0L3Rg9GC0L5cIn08L3NwYW4+fVxyXG5cdFx0XHR7YnVpbGRGaXJzdExldmVsKCl9XHJcblx0XHQ8L25hdj5cclxuXHQpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9