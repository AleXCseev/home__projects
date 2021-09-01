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

  var _useState = useState(),
      _useState2 = Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      announce = _useState2[0],
      setAnnounce = _useState2[1];

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

_s(Menu, "WVr8jR6cfVb4YgXxWJ7lJQCBNxs=", false, function () {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L01lbnUvTWVudS50c3giXSwibmFtZXMiOlsiTWVudSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwibWVudSIsInNldE1lbnUiLCJmaXJzdENhdGVnb3J5IiwidXNlU3RhdGUiLCJhbm5vdW5jZSIsInNldEFubm91bmNlIiwicm91dGVyIiwidXNlUm91dGVyIiwidmFyaWFudHMiLCJ2aXNpYmxlIiwibWFyZ2luQm90dG9tIiwidHJhbnNpdGlvbiIsIndoZW4iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJoaWRkZW4iLCJ2YXJpYW50c0NoaWxkcmVuIiwib3BhY2l0eSIsImhlaWdodCIsIm9wZW5TZWNvbmRMZXZlbEtleSIsImtleSIsInNlY29uZENhdGVnb3J5IiwiY29kZSIsInByZXZlbnREZWZhdWx0Iiwib3BlblNlY29uZExldmVsIiwibWFwIiwibSIsIl9pZCIsImlzT3BlbmVkIiwiYnVpbGRGaXJzdExldmVsIiwiZmlyc3RMZXZlbE1lbnUiLCJpZCIsInJvdXRlIiwiY24iLCJzdHlsZXMiLCJmaXJzdExldmVsIiwiZmlyc3RMZXZlbEFjdGl2ZSIsImljb24iLCJuYW1lIiwiYnVpbGRTZWNvbmRMZXZlbCIsIm1lbnVJdGVtIiwic2Vjb25kQmxvY2siLCJwYWdlcyIsInAiLCJhbGlhcyIsImluY2x1ZGVzIiwiYXNQYXRoIiwic3BsaXQiLCJzZWNvbmRMZXZlbCIsInNlY29uZExldmVsQmxvY2siLCJidWlsZFRoaXJkTGV2ZWwiLCJ0aGlyZExldmVsIiwidGhpcmRMZXZlbEFjdGl2ZSIsImNhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQW1CO0FBQUE7O0FBQUEsb0JBQ0dDLHdEQUFVLENBQUNDLCtEQUFELENBRGI7QUFBQSxN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QixRQUFJLEVBQUMsWUFBbEM7QUFBQSxjQUFnRDRCLGVBQWU7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0EsQ0E3SE07O0dBQU0vQixJO1VBR0dVLHFEOzs7S0FISFYsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bdHlwZV0vW2FsaWFzXS5jZjhlZmExNDkzMGQ2OGQ0N2VmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgS2V5Ym9hcmRFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvYXBwLmNvbnRleHRcIjtcclxuaW1wb3J0IHsgRmlyc3RMZXZlbE1lbnVJdGVtLCBQYWdlSXRlbSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL21lbnUuaW50ZWZhY2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9NZW51Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IGZpcnN0TGV2ZWxNZW51IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnUgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IHsgbWVudSwgc2V0TWVudSwgZmlyc3RDYXRlZ29yeSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuXHRjb25zdCBbYW5ub3VuY2UsIHNldEFubm91bmNlXSA9IHVzZVN0YXRlKClcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Y29uc3QgdmFyaWFudHMgPSB7XHJcblx0XHR2aXNpYmxlOiB7XHJcblx0XHRcdG1hcmdpbkJvdHRvbTogMjAsXHJcblx0XHRcdHRyYW5zaXRpb246IHtcclxuXHRcdFx0XHR3aGVuOiBcImJlZm9yZUNoaWxkcmVuXCIsXHJcblx0XHRcdFx0c3RhZ2dlckNoaWxkcmVuOiAwLjEsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0aGlkZGVuOiB7XHJcblx0XHRcdG1hcmdpbkJvdHRvbTogMCxcclxuXHRcdH0sXHJcblx0fTtcclxuXHJcblx0Y29uc3QgdmFyaWFudHNDaGlsZHJlbiA9IHtcclxuXHRcdHZpc2libGU6IHtcclxuXHRcdFx0b3BhY2l0eTogMSxcclxuXHRcdFx0aGVpZ2h0OiAyOSxcclxuXHRcdH0sXHJcblx0XHRoaWRkZW46IHtcclxuXHRcdFx0b3BhY2l0eTogMCxcclxuXHRcdFx0aGVpZ2h0OiAwLFxyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvcGVuU2Vjb25kTGV2ZWxLZXkgPSAoa2V5OiBLZXlib2FyZEV2ZW50LCBzZWNvbmRDYXRlZ29yeTogc3RyaW5nKSA9PiB7XHJcblx0XHRpZiAoa2V5LmNvZGUgPT0gXCJTcGFjZVwiIHx8IGtleS5jb2RlID09IFwiRW50ZXJcIikge1xyXG5cdFx0XHRrZXkucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHRvcGVuU2Vjb25kTGV2ZWwoc2Vjb25kQ2F0ZWdvcnkpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBvcGVuU2Vjb25kTGV2ZWwgPSAoc2Vjb25kQ2F0ZWdvcnk6IHN0cmluZykgPT4ge1xyXG5cdFx0c2V0TWVudSAmJlxyXG5cdFx0XHRzZXRNZW51KFxyXG5cdFx0XHRcdG1lbnUubWFwKChtKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAobS5faWQuc2Vjb25kQ2F0ZWdvcnkgPT0gc2Vjb25kQ2F0ZWdvcnkpIHtcclxuXHRcdFx0XHRcdFx0bS5pc09wZW5lZCA9ICFtLmlzT3BlbmVkO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIG07XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYnVpbGRGaXJzdExldmVsID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PHVsPlxyXG5cdFx0XHRcdHtmaXJzdExldmVsTWVudS5tYXAoKG0pID0+IChcclxuXHRcdFx0XHRcdDxsaSBrZXk9e20ucm91dGV9IGFyaWEtZXhwYW5kZWQ9e20uaWQgPT0gZmlyc3RDYXRlZ29yeX0+XHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvJHttLnJvdXRlfWB9PlxyXG5cdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlcy5maXJzdExldmVsLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0W3N0eWxlcy5maXJzdExldmVsQWN0aXZlXTogbS5pZCA9PSBmaXJzdENhdGVnb3J5LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e20uaWNvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e20ubmFtZX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0e20uaWQgPT0gZmlyc3RDYXRlZ29yeSAmJiBidWlsZFNlY29uZExldmVsKG0pfVxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC91bD5cclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYnVpbGRTZWNvbmRMZXZlbCA9IChtZW51SXRlbTogRmlyc3RMZXZlbE1lbnVJdGVtKSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kQmxvY2t9PlxyXG5cdFx0XHRcdHttZW51Lm1hcCgobSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKG0ucGFnZXMubWFwKChwKSA9PiBwLmFsaWFzKS5pbmNsdWRlcyhyb3V0ZXIuYXNQYXRoLnNwbGl0KFwiL1wiKVsyXSkpIHtcclxuXHRcdFx0XHRcdFx0bS5pc09wZW5lZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PGxpIGtleT17bS5faWQuc2Vjb25kQ2F0ZWdvcnl9PlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdHRhYkluZGV4PXswfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25LZXlEb3duPXsoa2V5OiBLZXlib2FyZEV2ZW50KSA9PiBvcGVuU2Vjb25kTGV2ZWxLZXkoa2V5LCBtLl9pZC5zZWNvbmRDYXRlZ29yeSl9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5zZWNvbmRMZXZlbH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9wZW5TZWNvbmRMZXZlbChtLl9pZC5zZWNvbmRDYXRlZ29yeSl9XHJcblx0XHRcdFx0XHRcdFx0XHRhcmlhLWV4cGFuZGVkPXttLmlzT3BlbmVkfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHttLl9pZC5zZWNvbmRDYXRlZ29yeX1cclxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8bW90aW9uLnVsXHJcblx0XHRcdFx0XHRcdFx0XHRsYXlvdXRcclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnRzPXt2YXJpYW50c31cclxuXHRcdFx0XHRcdFx0XHRcdGluaXRpYWw9e20uaXNPcGVuZWQgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9XHJcblx0XHRcdFx0XHRcdFx0XHRhbmltYXRlPXttLmlzT3BlbmVkID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZXMuc2Vjb25kTGV2ZWxCbG9jayl9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0e2J1aWxkVGhpcmRMZXZlbChtLnBhZ2VzLCBtZW51SXRlbS5yb3V0ZSwgbS5pc09wZW5lZCA/PyBmYWxzZSl9XHJcblx0XHRcdFx0XHRcdFx0PC9tb3Rpb24udWw+XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0pfVxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBidWlsZFRoaXJkTGV2ZWwgPSAocGFnZXM6IFBhZ2VJdGVtW10sIHJvdXRlOiBzdHJpbmcsIGlzT3BlbmVkOmJvb2xlYW4pID0+IHtcclxuXHRcdHJldHVybiBwYWdlcy5tYXAoKHApID0+IChcclxuXHRcdFx0PG1vdGlvbi5saSBrZXk9e3AuX2lkfSB2YXJpYW50cz17dmFyaWFudHNDaGlsZHJlbn0+XHJcblx0XHRcdFx0PExpbmsgaHJlZj17YC8ke3JvdXRlfS8ke3AuYWxpYXN9YH0+XHJcblx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHR0YWJJbmRleD17aXNPcGVuZWQgPyAwIDogLTF9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLnRoaXJkTGV2ZWwsIHtcclxuXHRcdFx0XHRcdFx0XHRbc3R5bGVzLnRoaXJkTGV2ZWxBY3RpdmVdOiBgLyR7cm91dGV9LyR7cC5hbGlhc31gID09IHJvdXRlci5hc1BhdGgsXHJcblx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7cC5jYXRlZ29yeX1cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdDwvbW90aW9uLmxpPlxyXG5cdFx0KSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0gcm9sZT1cIm5hdmlnYXRpb25cIj57YnVpbGRGaXJzdExldmVsKCl9PC9uYXY+O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9