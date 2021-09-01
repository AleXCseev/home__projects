webpackHotUpdate_N_E("pages/[type]/[alias]",{

/***/ "./layout/Header/Header.tsx":
/*!**********************************!*\
  !*** ./layout/Header/Header.tsx ***!
  \**********************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.module.css */ "./layout/Header/Header.module.css");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logo.svg */ "./layout/logo.svg");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components */ "./components/index.ts");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Sidebar/Sidebar */ "./layout/Sidebar/Sidebar.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\layout\\Header\\Header.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var Header = function Header(_ref) {
  _s();

  var className = _ref.className,
      props = Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["className"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      isOpened = _useState[0],
      setIsOpened = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    setIsOpened(false);
  }, [router]);
  var variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20
      }
    },
    closed: {
      opacity: shouldReducedMotion ? 1 : 0,
      x: "100%"
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("header", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, _Header_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header)
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_logo_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_7__["ButtonIcon"], {
      appearance: "white",
      icon: "menu",
      onClick: function onClick() {
        return setIsOpened(true);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__["motion"].div, {
      className: _Header_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.mobileMenu,
      variants: variants,
      initial: "closed",
      animate: isOpened ? "opened" : "closed",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_9__["Sidebar"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_7__["ButtonIcon"], {
        className: _Header_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuClose,
        appearance: "white",
        icon: "close",
        onClick: function onClick() {
          return setIsOpened(false);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 3
  }, _this);
};

_s(Header, "FgWqgGdH7ctEM4eWSJAozcvftYE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"]];
});

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L0hlYWRlci9IZWFkZXIudHN4Il0sIm5hbWVzIjpbIkhlYWRlciIsImNsYXNzTmFtZSIsInByb3BzIiwidXNlU3RhdGUiLCJpc09wZW5lZCIsInNldElzT3BlbmVkIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidmFyaWFudHMiLCJvcGVuZWQiLCJvcGFjaXR5IiwieCIsInRyYW5zaXRpb24iLCJzdGlmZm5lc3MiLCJjbG9zZWQiLCJzaG91bGRSZWR1Y2VkTW90aW9uIiwiY24iLCJzdHlsZXMiLCJoZWFkZXIiLCJtb2JpbGVNZW51IiwibWVudUNsb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXVEO0FBQUE7O0FBQUEsTUFBcERDLFNBQW9ELFFBQXBEQSxTQUFvRDtBQUFBLE1BQXRDQyxLQUFzQzs7QUFBQSxrQkFDNUNDLHNEQUFRLENBQVUsS0FBVixDQURvQztBQUFBLE1BQ3JFQyxRQURxRTtBQUFBLE1BQzNEQyxXQUQyRDs7QUFFNUUsTUFBTUMsTUFBTSxHQUFHQyw4REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZkgsZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBLEdBRlEsRUFFTixDQUFDQyxNQUFELENBRk0sQ0FBVDtBQUlBLE1BQU1HLFFBQVEsR0FBRztBQUNoQkMsVUFBTSxFQUFFO0FBQ1BDLGFBQU8sRUFBRSxDQURGO0FBRVBDLE9BQUMsRUFBRSxDQUZJO0FBR1BDLGdCQUFVLEVBQUU7QUFDWEMsaUJBQVMsRUFBRTtBQURBO0FBSEwsS0FEUTtBQVFoQkMsVUFBTSxFQUFFO0FBQ1BKLGFBQU8sRUFBRUssbUJBQW1CLEdBQUcsQ0FBSCxHQUFPLENBRDVCO0FBRVBKLE9BQUMsRUFBRTtBQUZJO0FBUlEsR0FBakI7QUFjQSxzQkFDQztBQUFRLGFBQVMsRUFBRUssaURBQUUsQ0FBQ2hCLFNBQUQsRUFBWWlCLHlEQUFNLENBQUNDLE1BQW5CO0FBQXJCLEtBQXFEakIsS0FBckQ7QUFBQSw0QkFDQyxxRUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFFQyxxRUFBQyxzREFBRDtBQUFZLGdCQUFVLEVBQUMsT0FBdkI7QUFBK0IsVUFBSSxFQUFDLE1BQXBDO0FBQTJDLGFBQU8sRUFBRTtBQUFBLGVBQU1HLFdBQVcsQ0FBQyxJQUFELENBQWpCO0FBQUE7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZELGVBR0MscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0MsZUFBUyxFQUFFYSx5REFBTSxDQUFDRSxVQURuQjtBQUVDLGNBQVEsRUFBRVgsUUFGWDtBQUdDLGFBQU8sRUFBRSxRQUhWO0FBSUMsYUFBTyxFQUFFTCxRQUFRLEdBQUcsUUFBSCxHQUFjLFFBSmhDO0FBQUEsOEJBTUMscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5ELGVBT0MscUVBQUMsc0RBQUQ7QUFDQyxpQkFBUyxFQUFFYyx5REFBTSxDQUFDRyxTQURuQjtBQUVDLGtCQUFVLEVBQUMsT0FGWjtBQUdDLFlBQUksRUFBQyxPQUhOO0FBSUMsZUFBTyxFQUFFO0FBQUEsaUJBQU1oQixXQUFXLENBQUMsS0FBRCxDQUFqQjtBQUFBO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBb0JBLENBMUNNOztHQUFNTCxNO1VBRUdPLHNEOzs7S0FGSFAsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bdHlwZV0vW2FsaWFzXS45MTRhYTM5MGM3ZjMzODcyNmM5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi9IZWFkZXIucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9IZWFkZXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uL2xvZ28uc3ZnXCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uSWNvbiB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiLi4vU2lkZWJhci9TaWRlYmFyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBIZWFkZXJQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRjb25zdCBbaXNPcGVuZWQsIHNldElzT3BlbmVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRJc09wZW5lZChmYWxzZSlcclxuXHR9LCBbcm91dGVyXSk7XHJcblxyXG5cdGNvbnN0IHZhcmlhbnRzID0ge1xyXG5cdFx0b3BlbmVkOiB7XHJcblx0XHRcdG9wYWNpdHk6IDEsXHJcblx0XHRcdHg6IDAsXHJcblx0XHRcdHRyYW5zaXRpb246IHtcclxuXHRcdFx0XHRzdGlmZm5lc3M6IDIwXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjbG9zZWQ6IHtcclxuXHRcdFx0b3BhY2l0eTogc2hvdWxkUmVkdWNlZE1vdGlvbiA/IDEgOiAwLFxyXG5cdFx0XHR4OiBcIjEwMCVcIixcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8aGVhZGVyIGNsYXNzTmFtZT17Y24oY2xhc3NOYW1lLCBzdHlsZXMuaGVhZGVyKX0gey4uLnByb3BzfT5cclxuXHRcdFx0PExvZ28+PC9Mb2dvPlxyXG5cdFx0XHQ8QnV0dG9uSWNvbiBhcHBlYXJhbmNlPVwid2hpdGVcIiBpY29uPVwibWVudVwiIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbmVkKHRydWUpfT48L0J1dHRvbkljb24+XHJcblx0XHRcdDxtb3Rpb24uZGl2IFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLm1vYmlsZU1lbnV9XHJcblx0XHRcdFx0dmFyaWFudHM9e3ZhcmlhbnRzfVxyXG5cdFx0XHRcdGluaXRpYWw9e1wiY2xvc2VkXCJ9XHJcblx0XHRcdFx0YW5pbWF0ZT17aXNPcGVuZWQgPyBcIm9wZW5lZFwiIDogXCJjbG9zZWRcIn1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxTaWRlYmFyPjwvU2lkZWJhcj5cclxuXHRcdFx0XHQ8QnV0dG9uSWNvbiBcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLm1lbnVDbG9zZX0gXHJcblx0XHRcdFx0XHRhcHBlYXJhbmNlPVwid2hpdGVcIiBcclxuXHRcdFx0XHRcdGljb249XCJjbG9zZVwiIFxyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0SXNPcGVuZWQoZmFsc2UpfVxyXG5cdFx0XHRcdD48L0J1dHRvbkljb24+XHJcblx0XHRcdDwvbW90aW9uLmRpdj5cclxuXHRcdDwvaGVhZGVyPlxyXG5cdCk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=