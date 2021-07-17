webpackHotUpdate_N_E("pages/search",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L01lbnUvTWVudS50c3giXSwibmFtZXMiOlsiTWVudSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwibWVudSIsInNldE1lbnUiLCJmaXJzdENhdGVnb3J5Iiwicm91dGVyIiwidXNlUm91dGVyIiwib3BlblNlY29uZExldmVsIiwic2Vjb25kQ2F0ZWdvcnkiLCJtYXAiLCJtIiwiX2lkIiwiaXNPcGVuZWQiLCJidWlsZEZpcnN0TGV2ZWwiLCJmaXJzdExldmVsTWVudSIsInJvdXRlIiwiY24iLCJzdHlsZXMiLCJmaXJzdExldmVsIiwiZmlyc3RMZXZlbEFjdGl2ZSIsImlkIiwiaWNvbiIsIm5hbWUiLCJidWlsZFNlY29uZExldmVsIiwibWVudUl0ZW0iLCJzZWNvbmRCbG9jayIsInBhZ2VzIiwicCIsImFsaWFzIiwiaW5jbHVkZXMiLCJhc1BhdGgiLCJzcGxpdCIsInNlY29uZExldmVsIiwic2Vjb25kTGV2ZWxCbG9jayIsInNlY29uZExldmVsQmxvY2tPcGVuZWQiLCJidWlsZFRoaXJkTGV2ZWwiLCJ0aGlyZExldmVsIiwidGhpcmRMZXZlbEFjdGl2ZSIsImNhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBbUI7QUFBQTs7QUFBQSxvQkFFTUMsd0RBQVUsQ0FBQ0MsK0RBQUQsQ0FGaEI7QUFBQSxNQUUzQkMsSUFGMkIsZUFFM0JBLElBRjJCO0FBQUEsTUFFckJDLE9BRnFCLGVBRXJCQSxPQUZxQjtBQUFBLE1BRVpDLGFBRlksZUFFWkEsYUFGWTs7QUFHbkMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUVDLGNBQUYsRUFBNkI7QUFDakRMLFdBQU8sSUFBSUEs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QUFxQlgsS0FBckIsRUFBd0M7QUFDNUQsV0FDSVcsS0FBSyxDQUFDakIsR0FBTixDQUFXLFVBQUFrQixDQUFDO0FBQUEsMEJBQ1IscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLGFBQU1aLEtBQU4sY0FBZVksQ0FBQyxDQUFDQyxLQUFqQixDQUFWO0FBQUEsK0JBQ0k7QUFBRyxtQkFBUyxFQUFFWixpREFBRSxDQUFDQyx1REFBTSxDQUFDbUIsVUFBUix3SkFDWG5CLHVEQUFNLENBQUNvQixnQkFESSxFQUNlLFdBQUl0QixLQUFKLGNBQWFZLENBQUMsQ0FBQ0MsS0FBZixLQUEwQnZCLE1BQU0sQ0FBQ3lCLE1BRGhELEVBQWhCO0FBQUEsb0JBR01ILENBQUMsQ0FBQ1c7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURRO0FBQUEsS0FBWixDQURKO0FBV0gsR0FaRDs7QUFjQSxzQkFDSTtBQUFLLGFBQVMsRUFBRXJCLHVEQUFNLENBQUNmLElBQXZCO0FBQUEsY0FDS1csZUFBZTtBQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFNSCxDQWxGTTs7R0FBTWQsSTtVQUdNTyxxRDs7O0tBSE5QLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjMwNjI4ODBjNmM5MWI0N2IwYWEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L2FwcC5jb250ZXh0XCJcclxuaW1wb3J0IHsgRmlyc3RMZXZlbE1lbnVJdGVtLCBQYWdlSXRlbSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL21lbnUuaW50ZWZhY2VcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL01lbnUubW9kdWxlLmNzc1wiXHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiXHJcbmltcG9ydCB7IGZpcnN0TGV2ZWxNZW51IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnUgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgbWVudSwgc2V0TWVudSwgZmlyc3RDYXRlZ29yeSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBvcGVuU2Vjb25kTGV2ZWwgPSAoIHNlY29uZENhdGVnb3J5OnN0cmluZyApID0+IHtcclxuICAgICAgICBzZXRNZW51ICYmIHNldE1lbnUobWVudS5tYXAobSA9PiB7XHJcbiAgICAgICAgICAgIGlmKG0uX2lkLnNlY29uZENhdGVnb3J5ID09IHNlY29uZENhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgICAgICBtLmlzT3BlbmVkID0gIW0uaXNPcGVuZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbTtcclxuICAgICAgICB9KSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidWlsZEZpcnN0TGV2ZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHsgZmlyc3RMZXZlbE1lbnUubWFwKCBtID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bS5yb3V0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHttLnJvdXRlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMuZmlyc3RMZXZlbCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5maXJzdExldmVsQWN0aXZlXTogbS5pZCA9PSBmaXJzdENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtLmljb24gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57IG0ubmFtZSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttLmlkID09IGZpcnN0Q2F0ZWdvcnkgJiYgYnVpbGRTZWNvbmRMZXZlbChtKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnVpbGRTZWNvbmRMZXZlbCA9IChtZW51SXRlbTogRmlyc3RMZXZlbE1lbnVJdGVtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWNvbmRCbG9ja30+XHJcbiAgICAgICAgICAgICAgICB7IG1lbnUubWFwKCBtID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYobS5wYWdlcy5tYXAocCA9PiBwLmFsaWFzKS5pbmNsdWRlcyggcm91dGVyLmFzUGF0aC5zcGxpdCgnLycpWzJdICkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbS5pc09wZW5lZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e20uX2lkLnNlY29uZENhdGVnb3J5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kTGV2ZWx9IG9uQ2xpY2s9eygpID0+IG9wZW5TZWNvbmRMZXZlbChtLl9pZC5zZWNvbmRDYXRlZ29yeSl9PnsgbS5faWQuc2Vjb25kQ2F0ZWdvcnkgfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy5zZWNvbmRMZXZlbEJsb2NrLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyBzdHlsZXMuc2Vjb25kTGV2ZWxCbG9ja09wZW5lZCBdOiBtLmlzT3BlbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBidWlsZFRoaXJkTGV2ZWwobS5wYWdlcywgbWVudUl0ZW0ucm91dGUpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1aWxkVGhpcmRMZXZlbCA9ICggcGFnZXM6IFBhZ2VJdGVtW10sIHJvdXRlOiBzdHJpbmcgKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgcGFnZXMubWFwKCBwID0+IChcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtyb3V0ZX0vJHtwLmFsaWFzfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y24oc3R5bGVzLnRoaXJkTGV2ZWwsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy50aGlyZExldmVsQWN0aXZlXTogYC8ke3JvdXRlfS8ke3AuYWxpYXN9YCA9PSByb3V0ZXIuYXNQYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHAuY2F0ZWdvcnkgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICApKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XHJcbiAgICAgICAgICAgIHtidWlsZEZpcnN0TGV2ZWwoKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=