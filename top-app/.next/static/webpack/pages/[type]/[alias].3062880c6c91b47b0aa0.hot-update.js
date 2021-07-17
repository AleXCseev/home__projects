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
/* harmony import */ var C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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




var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\layout\\Menu\\Menu.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var Menu = function Menu() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_app_context__WEBPACK_IMPORTED_MODULE_3__["AppContext"]),
      menu = _useContext.menu,
      setMenu = _useContext.setMenu,
      firstCategory = _useContext.firstCategory;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var openSecondLevel = function openSecondLevel(secondCategory) {
    setMenu && setMenu(menu.map(function (m) {
      if (m._id.secondCategory == secondCategory) {
        m.isOpened = !m.isOpened;
      }

      return m;
    }));
  };

  var buildFirstLevel = function buildFirstLevel() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: _helpers_helpers__WEBPACK_IMPORTED_MODULE_8__["firstLevelMenu"].map(function (m) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/".concat(m.route),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.firstLevel, Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.firstLevelActive, m.id == firstCategory)),
                children: [m.icon, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: m.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, _this), m.id == firstCategory && buildSecondLevel(m)]
        }, m.route, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false);
  };

  var buildSecondLevel = function buildSecondLevel(menuItem) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.secondBlock,
      children: menu.map(function (m) {
        if (m.pages.map(function (p) {
          return p.alias;
        }).includes(router.asPath.split('/')[2])) {
          m.isOpened = true;
        }

        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.secondLevel,
            onClick: function onClick() {
              return openSecondLevel(m._id.secondCategory);
            },
            children: m._id.secondCategory
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.secondLevelBlock, Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.secondLevelBlockOpened, m.isOpened)),
            children: buildThirdLevel(m.pages, menuItem.route)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 29
          }, _this)]
        }, m._id.secondCategory, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, _this);
  };

  var buildThirdLevel = function buildThirdLevel(pages, route) {
    return pages.map(function (p) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/".concat(route, "/").concat(p.alias),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.thirdLevel, Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.thirdLevelActive, "/".concat(route, "/").concat(p.alias) == router.asPath)),
          children: p.category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.menu,
    children: buildFirstLevel()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L01lbnUvTWVudS50c3giXSwibmFtZXMiOlsiTWVudSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwibWVudSIsInNldE1lbnUiLCJmaXJzdENhdGVnb3J5Iiwicm91dGVyIiwidXNlUm91dGVyIiwib3BlblNlY29uZExldmVsIiwic2Vjb25kQ2F0ZWdvcnkiLCJtYXAiLCJtIiwiX2lkIiwiaXNPcGVuZWQiLCJidWlsZEZpcnN0TGV2ZWwiLCJmaXJzdExldmVsTWVudSIsInJvdXRlIiwiY24iLCJzdHlsZXMiLCJmaXJzdExldmVsIiwiZmlyc3RMZXZlbEFjdGl2ZSIsImlkIiwiaWNvbiIsIm5hbWUiLCJidWlsZFNlY29uZExldmVsIiwibWVudUl0ZW0iLCJzZWNvbmRCbG9jayIsInBhZ2VzIiwicCIsImFsaWFzIiwiaW5jbHVkZXMiLCJhc1BhdGgiLCJzcGxpdCIsInNlY29uZExldmVsIiwic2Vjb25kTGV2ZWxCbG9jayIsInNlY29uZExldmVsQmxvY2tPcGVuZWQiLCJidWlsZFRoaXJkTGV2ZWwiLCJ0aGlyZExldmVsIiwidGhpcmRMZXZlbEFjdGl2ZSIsImNhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBbUI7QUFBQTs7QUFBQSxvQkFFTUMsd0RBQVUsQ0FBQ0MsK0RBQUQsQ0FGaEI7QUFBQSxNQUUzQkMsSUFGMkIsZUFFM0JBLElBRjJCO0FBQUEsTUFFckJDLE9BRnFCLGVBRXJCQSxPQUZxQjtBQUFBLE1BRVpDLGFBRlksZUFFWkEsYUFGWTs7QUFHbkMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUVDLGNBQUYsRUFBNkI7QUFDakRMLFdBQU8sSUFBSUEs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QUFxQlgsS0FBckIsRUFBd0M7QUFDNUQsV0FDSVcsS0FBSyxDQUFDakIsR0FBTixDQUFXLFVBQUFrQixDQUFDO0FBQUEsMEJBQ1IscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLGFBQU1aLEtBQU4sY0FBZVksQ0FBQyxDQUFDQyxLQUFqQixDQUFWO0FBQUEsK0JBQ0k7QUFBRyxtQkFBUyxFQUFFWixpREFBRSxDQUFDQyx1REFBTSxDQUFDbUIsVUFBUix3SkFDWG5CLHVEQUFNLENBQUNvQixnQkFESSxFQUNlLFdBQUl0QixLQUFKLGNBQWFZLENBQUMsQ0FBQ0MsS0FBZixLQUEwQnZCLE1BQU0sQ0FBQ3lCLE1BRGhELEVBQWhCO0FBQUEsb0JBR01ILENBQUMsQ0FBQ1c7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURRO0FBQUEsS0FBWixDQURKO0FBV0gsR0FaRDs7QUFjQSxzQkFDSTtBQUFLLGFBQVMsRUFBRXJCLHVEQUFNLENBQUNmLElBQXZCO0FBQUEsY0FDS1csZUFBZTtBQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFNSCxDQWxGTTs7R0FBTWQsSTtVQUdNTyxxRDs7O0tBSE5QLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3R5cGVdL1thbGlhc10uMzA2Mjg4MGM2YzkxYjQ3YjBhYTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvYXBwLmNvbnRleHRcIlxyXG5pbXBvcnQgeyBGaXJzdExldmVsTWVudUl0ZW0sIFBhZ2VJdGVtIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvbWVudS5pbnRlZmFjZVwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTWVudS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCJcclxuaW1wb3J0IHsgZmlyc3RMZXZlbE1lbnUgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWVudSA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBtZW51LCBzZXRNZW51LCBmaXJzdENhdGVnb3J5IH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IG9wZW5TZWNvbmRMZXZlbCA9ICggc2Vjb25kQ2F0ZWdvcnk6c3RyaW5nICkgPT4ge1xyXG4gICAgICAgIHNldE1lbnUgJiYgc2V0TWVudShtZW51Lm1hcChtID0+IHtcclxuICAgICAgICAgICAgaWYobS5faWQuc2Vjb25kQ2F0ZWdvcnkgPT0gc2Vjb25kQ2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgICAgIG0uaXNPcGVuZWQgPSAhbS5pc09wZW5lZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtO1xyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1aWxkRmlyc3RMZXZlbCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgeyBmaXJzdExldmVsTWVudS5tYXAoIG0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXttLnJvdXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke20ucm91dGV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5maXJzdExldmVsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLmZpcnN0TGV2ZWxBY3RpdmVdOiBtLmlkID09IGZpcnN0Q2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG0uaWNvbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnsgbS5uYW1lIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge20uaWQgPT0gZmlyc3RDYXRlZ29yeSAmJiBidWlsZFNlY29uZExldmVsKG0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidWlsZFNlY29uZExldmVsID0gKG1lbnVJdGVtOiBGaXJzdExldmVsTWVudUl0ZW0pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZEJsb2NrfT5cclxuICAgICAgICAgICAgICAgIHsgbWVudS5tYXAoIG0gPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihtLnBhZ2VzLm1hcChwID0+IHAuYWxpYXMpLmluY2x1ZGVzKCByb3V0ZXIuYXNQYXRoLnNwbGl0KCcvJylbMl0gKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtLmlzT3BlbmVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bS5faWQuc2Vjb25kQ2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWNvbmRMZXZlbH0gb25DbGljaz17KCkgPT4gb3BlblNlY29uZExldmVsKG0uX2lkLnNlY29uZENhdGVnb3J5KX0+eyBtLl9pZC5zZWNvbmRDYXRlZ29yeSB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLnNlY29uZExldmVsQmxvY2ssIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIHN0eWxlcy5zZWNvbmRMZXZlbEJsb2NrT3BlbmVkIF06IG0uaXNPcGVuZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGJ1aWxkVGhpcmRMZXZlbChtLnBhZ2VzLCBtZW51SXRlbS5yb3V0ZSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnVpbGRUaGlyZExldmVsID0gKCBwYWdlczogUGFnZUl0ZW1bXSwgcm91dGU6IHN0cmluZyApID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBwYWdlcy5tYXAoIHAgPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3JvdXRlfS8ke3AuYWxpYXN9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbihzdHlsZXMudGhpcmRMZXZlbCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLnRoaXJkTGV2ZWxBY3RpdmVdOiBgLyR7cm91dGV9LyR7cC5hbGlhc31gID09IHJvdXRlci5hc1BhdGhcclxuICAgICAgICAgICAgICAgICAgICB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcC5jYXRlZ29yeSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICkpXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICAgICAge2J1aWxkRmlyc3RMZXZlbCgpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==