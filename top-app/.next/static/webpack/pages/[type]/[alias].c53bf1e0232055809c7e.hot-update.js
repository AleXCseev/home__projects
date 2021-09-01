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
  var shouldReducedMotion = useReducedMotion();
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
      lineNumber: 36,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_7__["ButtonIcon"], {
      appearance: "white",
      icon: "menu",
      onClick: function onClick() {
        return setIsOpened(true);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__["motion"].div, {
      className: _Header_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.mobileMenu,
      variants: variants,
      initial: "closed",
      animate: isOpened ? "opened" : "closed",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_9__["Sidebar"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
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
        lineNumber: 45,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 3
  }, _this);
};

_s(Header, "4PympBu7ioS7C00jYu08re5WON8=", true, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L0hlYWRlci9IZWFkZXIudHN4Il0sIm5hbWVzIjpbIkhlYWRlciIsImNsYXNzTmFtZSIsInByb3BzIiwidXNlU3RhdGUiLCJpc09wZW5lZCIsInNldElzT3BlbmVkIiwicm91dGVyIiwidXNlUm91dGVyIiwic2hvdWxkUmVkdWNlZE1vdGlvbiIsInVzZVJlZHVjZWRNb3Rpb24iLCJ1c2VFZmZlY3QiLCJ2YXJpYW50cyIsIm9wZW5lZCIsIm9wYWNpdHkiLCJ4IiwidHJhbnNpdGlvbiIsInN0aWZmbmVzcyIsImNsb3NlZCIsImNuIiwic3R5bGVzIiwiaGVhZGVyIiwibW9iaWxlTWVudSIsIm1lbnVDbG9zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUF1RDtBQUFBOztBQUFBLE1BQXBEQyxTQUFvRCxRQUFwREEsU0FBb0Q7QUFBQSxNQUF0Q0MsS0FBc0M7O0FBQUEsa0JBQzVDQyxzREFBUSxDQUFVLEtBQVYsQ0FEb0M7QUFBQSxNQUNyRUMsUUFEcUU7QUFBQSxNQUMzREMsV0FEMkQ7O0FBRTVFLE1BQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBR0MsZ0JBQWdCLEVBQTVDO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNmTCxlQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0EsR0FGUSxFQUVOLENBQUNDLE1BQUQsQ0FGTSxDQUFUO0FBSUEsTUFBTUssUUFBUSxHQUFHO0FBQ2hCQyxVQUFNLEVBQUU7QUFDUEMsYUFBTyxFQUFFLENBREY7QUFFUEMsT0FBQyxFQUFFLENBRkk7QUFHUEMsZ0JBQVUsRUFBRTtBQUNYQyxpQkFBUyxFQUFFO0FBREE7QUFITCxLQURRO0FBUWhCQyxVQUFNLEVBQUU7QUFDUEosYUFBTyxFQUFFTCxtQkFBbUIsR0FBRyxDQUFILEdBQU8sQ0FENUI7QUFFUE0sT0FBQyxFQUFFO0FBRkk7QUFSUSxHQUFqQjtBQWNBLHNCQUNDO0FBQVEsYUFBUyxFQUFFSSxpREFBRSxDQUFDakIsU0FBRCxFQUFZa0IseURBQU0sQ0FBQ0MsTUFBbkI7QUFBckIsS0FBcURsQixLQUFyRDtBQUFBLDRCQUNDLHFFQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUVDLHFFQUFDLHNEQUFEO0FBQVksZ0JBQVUsRUFBQyxPQUF2QjtBQUErQixVQUFJLEVBQUMsTUFBcEM7QUFBMkMsYUFBTyxFQUFFO0FBQUEsZUFBTUcsV0FBVyxDQUFDLElBQUQsQ0FBakI7QUFBQTtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQsZUFHQyxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDQyxlQUFTLEVBQUVjLHlEQUFNLENBQUNFLFVBRG5CO0FBRUMsY0FBUSxFQUFFVixRQUZYO0FBR0MsYUFBTyxFQUFFLFFBSFY7QUFJQyxhQUFPLEVBQUVQLFFBQVEsR0FBRyxRQUFILEdBQWMsUUFKaEM7QUFBQSw4QkFNQyxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkQsZUFPQyxxRUFBQyxzREFBRDtBQUNDLGlCQUFTLEVBQUVlLHlEQUFNLENBQUNHLFNBRG5CO0FBRUMsa0JBQVUsRUFBQyxPQUZaO0FBR0MsWUFBSSxFQUFDLE9BSE47QUFJQyxlQUFPLEVBQUU7QUFBQSxpQkFBTWpCLFdBQVcsQ0FBQyxLQUFELENBQWpCO0FBQUE7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFvQkEsQ0EzQ007O0dBQU1MLE07VUFFR08sc0Q7OztLQUZIUCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1t0eXBlXS9bYWxpYXNdLmM1M2JmMWUwMjMyMDU1ODA5YzdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkZXJQcm9wcyB9IGZyb20gXCIuL0hlYWRlci5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0hlYWRlci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vbG9nby5zdmdcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b25JY29uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gXCIuLi9TaWRlYmFyL1NpZGViYXJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IEhlYWRlclByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IFtpc09wZW5lZCwgc2V0SXNPcGVuZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHRjb25zdCBzaG91bGRSZWR1Y2VkTW90aW9uID0gdXNlUmVkdWNlZE1vdGlvbigpXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRJc09wZW5lZChmYWxzZSlcclxuXHR9LCBbcm91dGVyXSk7XHJcblxyXG5cdGNvbnN0IHZhcmlhbnRzID0ge1xyXG5cdFx0b3BlbmVkOiB7XHJcblx0XHRcdG9wYWNpdHk6IDEsXHJcblx0XHRcdHg6IDAsXHJcblx0XHRcdHRyYW5zaXRpb246IHtcclxuXHRcdFx0XHRzdGlmZm5lc3M6IDIwXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjbG9zZWQ6IHtcclxuXHRcdFx0b3BhY2l0eTogc2hvdWxkUmVkdWNlZE1vdGlvbiA/IDEgOiAwLFxyXG5cdFx0XHR4OiBcIjEwMCVcIixcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8aGVhZGVyIGNsYXNzTmFtZT17Y24oY2xhc3NOYW1lLCBzdHlsZXMuaGVhZGVyKX0gey4uLnByb3BzfT5cclxuXHRcdFx0PExvZ28+PC9Mb2dvPlxyXG5cdFx0XHQ8QnV0dG9uSWNvbiBhcHBlYXJhbmNlPVwid2hpdGVcIiBpY29uPVwibWVudVwiIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbmVkKHRydWUpfT48L0J1dHRvbkljb24+XHJcblx0XHRcdDxtb3Rpb24uZGl2IFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLm1vYmlsZU1lbnV9XHJcblx0XHRcdFx0dmFyaWFudHM9e3ZhcmlhbnRzfVxyXG5cdFx0XHRcdGluaXRpYWw9e1wiY2xvc2VkXCJ9XHJcblx0XHRcdFx0YW5pbWF0ZT17aXNPcGVuZWQgPyBcIm9wZW5lZFwiIDogXCJjbG9zZWRcIn1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxTaWRlYmFyPjwvU2lkZWJhcj5cclxuXHRcdFx0XHQ8QnV0dG9uSWNvbiBcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLm1lbnVDbG9zZX0gXHJcblx0XHRcdFx0XHRhcHBlYXJhbmNlPVwid2hpdGVcIiBcclxuXHRcdFx0XHRcdGljb249XCJjbG9zZVwiIFxyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0SXNPcGVuZWQoZmFsc2UpfVxyXG5cdFx0XHRcdD48L0J1dHRvbkljb24+XHJcblx0XHRcdDwvbW90aW9uLmRpdj5cclxuXHRcdDwvaGVhZGVyPlxyXG5cdCk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=