module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bgFo");
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("kh7S");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ZwSt");









function Home({
  menu
}) {
  const {
    0: raiting,
    1: setRaiting
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(4);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "b"], {
      appearance: "primary",
      arrow: "down",
      children: "Button"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "b"], {
      appearance: "ghost",
      arrow: "right",
      children: "Button"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_2__[/* P */ "h"], {
      size: "l",
      children: "Big"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_2__[/* P */ "h"], {
      children: "Middle"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_2__[/* P */ "h"], {
      size: "s",
      children: "Small"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_2__[/* Tag */ "o"], {
      size: "s",
      color: "ghost",
      children: "Ghost"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_2__[/* Tag */ "o"], {
      size: "m",
      color: "primary",
      children: "Ghost"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_2__[/* Tag */ "o"], {
      size: "m",
      color: "green",
      children: "Ghost"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_2__[/* Tag */ "o"], {
      size: "m",
      color: "grey",
      children: "Ghost"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_2__[/* Tag */ "o"], {
      size: "m",
      color: "red",
      children: "Ghost"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_2__[/* Raiting */ "j"], {
      raiting: raiting,
      isEditable: true,
      setRaiting: setRaiting
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "g"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_2__[/* Textarea */ "p"], {
      placeholder: "textarea"
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_layout_Layout__WEBPACK_IMPORTED_MODULE_3__[/* withLayout */ "a"])(Home));
const getStaticProps = async () => {
  const firstCategory = 0;
  const {
    data: menu
  } = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(_helpers_api__WEBPACK_IMPORTED_MODULE_5__[/* API */ "a"].topPage.find, {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6M2e":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"reviewForm": "ReviewForm_reviewForm__2oDvX",
	"title": "ReviewForm_title__ZAmwH",
	"description": "ReviewForm_description__2P6nE",
	"submit": "ReviewForm_submit__6o1NK",
	"info": "ReviewForm_info__gk2Wq",
	"raiting": "ReviewForm_raiting__Q7-3l",
	"success": "ReviewForm_success__1PxdQ",
	"error": "ReviewForm_error__1x3DR",
	"close": "ReviewForm_close__3G2UH",
	"successTitle": "ReviewForm_successTitle__2_be0"
};


/***/ }),

/***/ "7H+Z":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"up": "Up_up__3KzNw"
};


/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "8OQS":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "ApWs":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"product": "Product_product__j12ex",
	"logo": "Product_logo__3z5y8",
	"title": "Product_title__yOJRp",
	"tags": "Product_tags__2oUt0",
	"rateTitle": "Product_rateTitle__yDk8r",
	"price": "Product_price__3fvYx",
	"priceTitle": "Product_priceTitle__ZbTfu",
	"credit": "Product_credit__1z2mo",
	"creditTitle": "Product_creditTitle__-2dg5",
	"raiting": "Product_raiting__2zddI",
	"hr": "Product_hr__31mKj",
	"description": "Product_description__5N5oC",
	"actions": "Product_actions__1QRFO",
	"feature": "Product_feature__1k8VA",
	"category": "Product_category__MGr8h",
	"month": "Product_month__3Em86",
	"oldPrice": "Product_oldPrice__2KEqo",
	"reviewButton": "Product_reviewButton__qV0PV",
	"advBlock": "Product_advBlock__3iL2I",
	"advTitle": "Product_advTitle__1BAaL",
	"advantages": "Product_advantages__3HI7r",
	"disadvantages": "Product_disadvantages__2Y3Up",
	"characteristics": "Product_characteristics__1kcp_",
	"characteristicsName": "Product_characteristicsName__1uV6B",
	"characteristicsValue": "Product_characteristicsValue__2gp3L",
	"characteristicsDots": "Product_characteristicsDots__CM4z5",
	"reviews": "Product_reviews__21_7b",
	"hr2": "Product_hr2__3kPXg"
};


/***/ }),

/***/ "BTiB":
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "EZXF":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textareaWrapper": "Textarea_textareaWrapper__3CfUL",
	"textarea": "Textarea_textarea__1bUYO",
	"input": "Textarea_input__3g4nk",
	"error": "Textarea_error__dWH7F",
	"errorMessage": "Textarea_errorMessage__1i5zL"
};


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "G4Kv":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"firstLevel": "Menu_firstLevel__hBZRC",
	"firstLevelList": "Menu_firstLevelList__2Bx4t",
	"firstLevelActive": "Menu_firstLevelActive__2M7tl",
	"secondLevel": "Menu_secondLevel__1KUlK",
	"secondBlock": "Menu_secondBlock__3sffl",
	"secondLevelBlock": "Menu_secondLevelBlock__3gEEJ",
	"thirdLevel": "Menu_thirdLevel__3DGzo",
	"thirdLevelActive": "Menu_thirdLevelActive__17LGQ"
};


/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "JH6J":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sidebar": "Sidebar_sidebar__3cjmk"
};


/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KwAr":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button": "ButtonIcon_button__lXRGS",
	"primary": "ButtonIcon_primary__106oE",
	"white": "ButtonIcon_white__-iRBb"
};


/***/ }),

/***/ "M7CX":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"review": "Review_review__1Sq6r",
	"description": "Review_description__maqX-",
	"date": "Review_date__eXUpN",
	"name": "Review_name__2EJrf",
	"title": "Review_title__16XJg",
	"raiting": "Review_raiting__rfnFR"
};


/***/ }),

/***/ "MUuK":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"inputWrapper": "Input_inputWrapper__1gsYI",
	"input": "Input_input__3ySuD",
	"error": "Input_error__5u74E",
	"errorMessage": "Input_errorMessage__2eRQY"
};


/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "OupB":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "Header_header__3jBud",
	"mobileMenu": "Header_mobileMenu__1Fd2I",
	"menuClose": "Header_menuClose__AHduM"
};


/***/ }),

/***/ "RdwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopLevelCategory; });
let TopLevelCategory;

(function (TopLevelCategory) {
  TopLevelCategory[TopLevelCategory["Courses"] = 0] = "Courses";
  TopLevelCategory[TopLevelCategory["Services"] = 1] = "Services";
  TopLevelCategory[TopLevelCategory["Books"] = 2] = "Books";
  TopLevelCategory[TopLevelCategory["Products"] = 3] = "Products";
})(TopLevelCategory || (TopLevelCategory = {}));

/***/ }),

/***/ "Sb1L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortEnum; });
let SortEnum;

(function (SortEnum) {
  SortEnum[SortEnum["Rating"] = 0] = "Rating";
  SortEnum[SortEnum["Price"] = 1] = "Price";
})(SortEnum || (SortEnum = {}));

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "VG+4":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"filled": "Raiting_filled__bOgro",
	"star": "Raiting_star__3jUpr",
	"editable": "Raiting_editable__30-GK",
	"error": "Raiting_error__2z2uB",
	"raitingWrapper": "Raiting_raitingWrapper__3f0X_",
	"errorMessage": "Raiting_errorMessage__191b4"
};


/***/ }),

/***/ "VJUS":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"advanatge": "Advantages_advanatge__1drHY",
	"title": "Advantages_title__drzh4",
	"vline": "Advantages_vline__1FwSx"
};


/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "ZJlY":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "Card_card__K0CRX",
	"blue": "Card_blue__1W0l3"
};


/***/ }),

/***/ "ZwSt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API; });
const API = {
  topPage: {
    find: "https://courses-top.ru" + "/api/top-page/find",
    byAlias: "https://courses-top.ru" + "/api/top-page/byAlias/"
  },
  product: {
    find: "https://courses-top.ru" + "/api/product/find"
  },
  review: {
    createDemo: "https://courses-top.ru" + "/api/review/create-demo"
  }
};

/***/ }),

/***/ "aNPC":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"tag": "Tag_tag__11TEs",
	"s": "Tag_s__1PVV-",
	"m": "Tag_m__2inzq",
	"ghost": "Tag_ghost__1uvh6",
	"red": "Tag_red__1xC_m",
	"grey": "Tag_grey__1Qy6F",
	"green": "Tag_green__hpixn",
	"primary": "Tag_primary__1-SdR"
};


/***/ }),

/***/ "b5Lm":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"search": "Search_search__8E97I",
	"inputSearch": "Search_inputSearch__3vedU",
	"button": "Search_button__2Me6i"
};


/***/ }),

/***/ "bgFo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ Htag; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ Button; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ P; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ Tag; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ Raiting; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ Card; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Advantages; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ Sort; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ Input; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ Textarea; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ Search; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ Product; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ Divider; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ Review; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ ReviewForm; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ Up; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ ButtonIcon; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./components/Htag/Htag.module.css
var Htag_module = __webpack_require__("yg5/");
var Htag_module_default = /*#__PURE__*/__webpack_require__.n(Htag_module);

// CONCATENATED MODULE: ./components/Htag/Htag.tsx



const Htag = ({
  tag,
  children
}) => {
  switch (tag) {
    case "h1":
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        className: Htag_module_default.a.h1,
        children: children
      });

    case "h2":
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
        className: Htag_module_default.a.h2,
        children: children
      });

    case "h3":
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: Htag_module_default.a.h3,
        children: children
      });

    default:
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {});
  }
};
// EXTERNAL MODULE: ./components/Button/Button.module.css
var Button_module = __webpack_require__("kfyG");
var Button_module_default = /*#__PURE__*/__webpack_require__.n(Button_module);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./components/Button/arrow.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgArrow(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", _extends({
    width: 6,
    height: 10,
    fill: "#3B434E",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M5.715 4.61L1.265.16A.543.543 0 00.878 0a.543.543 0 00-.386.16L.164.487a.548.548 0 000 .774L3.9 4.998.16 8.739a.543.543 0 00-.16.387c0 .146.057.284.16.387l.327.327c.103.103.24.16.387.16a.543.543 0 00.387-.16l4.454-4.454a.544.544 0 00.16-.388.544.544 0 00-.16-.388z"
  })));
}

/* harmony default export */ var Button_arrow = (SvgArrow);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__("wmQq");

// CONCATENATED MODULE: ./components/Button/Button.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Button = (_ref) => {
  let {
    appearance,
    arrow = "none",
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["appearance", "arrow", "children", "className"]);

  const scale = Object(external_framer_motion_["useMotionValue"])(1);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_framer_motion_["motion"].button, _objectSpread(_objectSpread({
    whileHover: {
      scale: 1.05
    },
    className: external_classnames_default()(Button_module_default.a.button, className, {
      [Button_module_default.a.primary]: appearance == "primary",
      [Button_module_default.a.ghost]: appearance == "ghost"
    }),
    style: {
      scale
    }
  }, props), {}, {
    children: [children, arrow != "none" && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: external_classnames_default()(Button_module_default.a.arrow, {
        [Button_module_default.a.down]: arrow == "down"
      }),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_arrow, {})
    })]
  }));
};
// EXTERNAL MODULE: ./components/P/P.module.css
var P_module = __webpack_require__("ifTy");
var P_module_default = /*#__PURE__*/__webpack_require__.n(P_module);

// CONCATENATED MODULE: ./components/P/P.tsx


function P_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function P_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { P_ownKeys(Object(source), true).forEach(function (key) { P_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { P_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function P_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function P_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = P_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function P_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const P = (_ref) => {
  let {
    size = "m",
    children,
    className
  } = _ref,
      props = P_objectWithoutProperties(_ref, ["size", "children", "className"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", P_objectSpread(P_objectSpread({
    className: external_classnames_default()(P_module_default.a.p, className, {
      [P_module_default.a.s]: size == "s",
      [P_module_default.a.m]: size == "m",
      [P_module_default.a.l]: size == "l"
    })
  }, props), {}, {
    children: children
  }));
};
// EXTERNAL MODULE: ./components/Tag/Tag.module.css
var Tag_module = __webpack_require__("aNPC");
var Tag_module_default = /*#__PURE__*/__webpack_require__.n(Tag_module);

// CONCATENATED MODULE: ./components/Tag/Tag.tsx



function Tag_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Tag_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Tag_ownKeys(Object(source), true).forEach(function (key) { Tag_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Tag_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Tag_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Tag_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Tag_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Tag_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Tag = (_ref) => {
  let {
    size = "s",
    children,
    color = "ghost",
    href,
    className
  } = _ref,
      props = Tag_objectWithoutProperties(_ref, ["size", "children", "color", "href", "className"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", Tag_objectSpread(Tag_objectSpread({
    className: external_classnames_default()(Tag_module_default.a.tag, className, {
      [Tag_module_default.a.s]: size == "s",
      [Tag_module_default.a.m]: size == "m",
      [Tag_module_default.a.ghost]: color == "ghost",
      [Tag_module_default.a.red]: color == "red",
      [Tag_module_default.a.grey]: color == "grey",
      [Tag_module_default.a.green]: color == "green",
      [Tag_module_default.a.primary]: color == "primary"
    })
  }, props), {}, {
    children: href ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: href,
      children: children
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
      children: children
    })
  }));
};
// EXTERNAL MODULE: ./components/Raiting/Raiting.module.css
var Raiting_module = __webpack_require__("VG+4");
var Raiting_module_default = /*#__PURE__*/__webpack_require__.n(Raiting_module);

// CONCATENATED MODULE: ./components/Raiting/star.svg
var star_path;

function star_extends() { star_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return star_extends.apply(this, arguments); }



function SvgStar(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", star_extends({
    width: 20,
    height: 20,
    fill: "#E2E2E2",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), star_path || (star_path = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M19.948 7.557a1.072 1.072 0 00-.915-.762l-5.773-.547L10.978.674A1.063 1.063 0 0010 0c-.427 0-.81.264-.977.674L6.74 6.248l-5.774.547c-.424.04-.782.34-.915.762-.131.422-.01.886.31 1.179l4.365 3.993-1.287 5.914c-.094.435.067.885.413 1.146a1.029 1.029 0 001.169.054L10 16.736l4.977 3.107c.366.227.825.206 1.17-.054.346-.261.507-.71.413-1.146l-1.287-5.914 4.365-3.993c.32-.293.441-.756.31-1.18z"
  })));
}

/* harmony default export */ var star = (SvgStar);
// CONCATENATED MODULE: ./components/Raiting/Raiting.tsx




function Raiting_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Raiting_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Raiting_ownKeys(Object(source), true).forEach(function (key) { Raiting_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Raiting_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Raiting_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Raiting_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Raiting_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Raiting_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Raiting = /*#__PURE__*/Object(external_react_["forwardRef"])((_ref, ref) => {
  let {
    isEditable = false,
    raiting,
    setRaiting,
    error,
    tabIndex
  } = _ref,
      props = Raiting_objectWithoutProperties(_ref, ["isEditable", "raiting", "setRaiting", "error", "tabIndex"]);

  const {
    0: raitingArray,
    1: setRaitingArray
  } = Object(external_react_["useState"])(new Array(5).fill( /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {})));
  const raitingArrayRef = Object(external_react_["useRef"])([]);
  Object(external_react_["useEffect"])(() => {
    constructRaiting(raiting);
  }, [raiting, tabIndex]);

  const computeFocus = (r, i) => {
    if (!isEditable) {
      return -1;
    }

    if (!raiting && i == 0) {
      return tabIndex !== null && tabIndex !== void 0 ? tabIndex : 0;
    }

    if (r == i + 1) {
      return tabIndex !== null && tabIndex !== void 0 ? tabIndex : 0;
    }

    return -1;
  };

  const constructRaiting = currentRaiting => {
    const updatedArray = raitingArray.map((el, index) => {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: external_classnames_default()(Raiting_module_default.a.star, {
          [Raiting_module_default.a.filled]: index < currentRaiting,
          [Raiting_module_default.a.editable]: isEditable
        }),
        onMouseEnter: () => changeDisplay(index + 1),
        onMouseLeave: () => changeDisplay(raiting),
        onClick: () => onClick(index + 1),
        tabIndex: computeFocus(raiting, index),
        onKeyDown: handelKey,
        ref: r => {
          var _raitingArrayRef$curr;

          return (_raitingArrayRef$curr = raitingArrayRef.current) === null || _raitingArrayRef$curr === void 0 ? void 0 : _raitingArrayRef$curr.push(r);
        },
        role: isEditable ? "slider" : "",
        "aria-invalid": error ? true : false,
        "aria-valuenow": raiting,
        "aria-valuemax": 5,
        "aria-label": isEditable ? "Укажите рейтиг" : "рейтинг " + raiting,
        "aria-valuemin": 1,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(star, {})
      });
    });
    setRaitingArray(updatedArray);
  };

  const changeDisplay = index => {
    if (!isEditable) {
      return;
    }

    constructRaiting(index);
  };

  const onClick = index => {
    if (!isEditable || !setRaiting) {
      return;
    }

    setRaiting(index);
  };

  const handelKey = e => {
    if (!isEditable || !setRaiting) {
      return;
    }

    if (e.code == "ArrowRight" || e.code == "ArrowUp") {
      var _raitingArrayRef$curr2;

      if (!raiting) {
        setRaiting(1);
      } else {
        e.preventDefault();
        setRaiting(raiting < 5 ? raiting + 1 : 5);
      }

      (_raitingArrayRef$curr2 = raitingArrayRef.current[raiting]) === null || _raitingArrayRef$curr2 === void 0 ? void 0 : _raitingArrayRef$curr2.focus();
    }

    if (e.code == "ArrowLeft" || e.code == "ArrowDown") {
      var _raitingArrayRef$curr3;

      if (!raiting) {
        setRaiting(1);
      } else {
        e.preventDefault();
        setRaiting(raiting > 1 ? raiting - 1 : 1);
      }

      (_raitingArrayRef$curr3 = raitingArrayRef.current[raiting - 2]) === null || _raitingArrayRef$curr3 === void 0 ? void 0 : _raitingArrayRef$curr3.focus();
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", Raiting_objectSpread(Raiting_objectSpread({}, props), {}, {
    ref: ref,
    className: external_classnames_default()(Raiting_module_default.a.raitingWrapper, {
      [Raiting_module_default.a.error]: error
    }),
    children: [raitingArray.map((el, index) => {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        children: el
      }, index);
    }), error && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      role: "alert",
      className: Raiting_module_default.a.errorMessage,
      children: error.message
    })]
  }));
});
// EXTERNAL MODULE: ./components/Card/Card.module.css
var Card_module = __webpack_require__("ZJlY");
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);

// CONCATENATED MODULE: ./components/Card/Card.tsx


function Card_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Card_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Card_ownKeys(Object(source), true).forEach(function (key) { Card_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Card_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Card_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Card_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Card_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Card_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Card = /*#__PURE__*/Object(external_react_["forwardRef"])((_ref, ref) => {
  let {
    color = "white",
    children,
    className
  } = _ref,
      props = Card_objectWithoutProperties(_ref, ["color", "children", "className"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", Card_objectSpread(Card_objectSpread({
    className: external_classnames_default()(Card_module_default.a.card, className, {
      [Card_module_default.a.blue]: color == "blue"
    })
  }, props), {}, {
    ref: ref,
    children: children
  }));
});
// EXTERNAL MODULE: ./components/Advantages/Advantages.module.css
var Advantages_module = __webpack_require__("VJUS");
var Advantages_module_default = /*#__PURE__*/__webpack_require__.n(Advantages_module);

// CONCATENATED MODULE: ./components/Advantages/check.svg
var _circle, _g, _defs;

function check_extends() { check_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return check_extends.apply(this, arguments); }



function SvgCheck(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", check_extends({
    width: 50,
    height: 50,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _circle || (_circle = /*#__PURE__*/external_react_["createElement"]("circle", {
    cx: 25,
    cy: 25,
    r: 25,
    fill: "#C8F8E4"
  })), _g || (_g = /*#__PURE__*/external_react_["createElement"]("g", {
    clipPath: "url(#check_svg__clip0)"
  }, /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M36.297 20.368l-12.661 12.66a2.402 2.402 0 01-3.397 0l-6.536-6.536a2.402 2.402 0 013.397-3.397l4.838 4.838L32.9 16.971a2.402 2.402 0 013.397 3.397z",
    fill: "#1DC37E"
  }))), _defs || (_defs = /*#__PURE__*/external_react_["createElement"]("defs", null, /*#__PURE__*/external_react_["createElement"]("clipPath", {
    id: "check_svg__clip0"
  }, /*#__PURE__*/external_react_["createElement"]("path", {
    fill: "#fff",
    transform: "translate(13 13)",
    d: "M0 0h24v24H0z"
  })))));
}

/* harmony default export */ var check = (SvgCheck);
// CONCATENATED MODULE: ./components/Advantages/Advantages.tsx






const Advantages = ({
  advantages
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: advantages.map(a => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Advantages_module_default.a.advanatge,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(check, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Advantages_module_default.a.title,
        children: a.title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Advantages_module_default.a.vline
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: a.description
      })]
    }, a._id))
  });
};
// EXTERNAL MODULE: ./components/Sort/Sort.props.ts
var Sort_props = __webpack_require__("Sb1L");

// EXTERNAL MODULE: ./components/Sort/Sort.module.css
var Sort_module = __webpack_require__("lRkB");
var Sort_module_default = /*#__PURE__*/__webpack_require__.n(Sort_module);

// CONCATENATED MODULE: ./components/Sort/sort.svg
var _rect, _rect2, _rect3;

function sort_extends() { sort_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return sort_extends.apply(this, arguments); }



function SvgSort(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", sort_extends({
    width: 20,
    height: 13,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _rect || (_rect = /*#__PURE__*/external_react_["createElement"]("rect", {
    width: 20,
    height: 3,
    rx: 1.5,
    fill: "#7653FC"
  })), _rect2 || (_rect2 = /*#__PURE__*/external_react_["createElement"]("rect", {
    y: 5,
    width: 14,
    height: 3,
    rx: 1.5,
    fill: "#7653FC"
  })), _rect3 || (_rect3 = /*#__PURE__*/external_react_["createElement"]("rect", {
    y: 10,
    width: 8,
    height: 3,
    rx: 1.5,
    fill: "#7653FC"
  })));
}

/* harmony default export */ var Sort_sort = (SvgSort);
// CONCATENATED MODULE: ./components/Sort/Sort.tsx



function Sort_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Sort_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Sort_ownKeys(Object(source), true).forEach(function (key) { Sort_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Sort_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Sort_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Sort_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Sort_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Sort_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Sort = (_ref) => {
  let {
    sort,
    setSort,
    className
  } = _ref,
      props = Sort_objectWithoutProperties(_ref, ["sort", "setSort", "className"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", Sort_objectSpread(Sort_objectSpread({
    className: external_classnames_default()(Sort_module_default.a.sort, className)
  }, props), {}, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Sort_module_default.a.sortName,
      id: "sort",
      children: "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
      id: "rating",
      onClick: () => setSort(Sort_props["a" /* SortEnum */].Rating),
      className: external_classnames_default()({
        [Sort_module_default.a.active]: sort == Sort_props["a" /* SortEnum */].Rating
      }),
      "aria-selected": sort == Sort_props["a" /* SortEnum */].Rating,
      "aria-labelledby": "sort rating",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Sort_sort, {
        className: Sort_module_default.a.sortIcon
      }), "\u041F\u043E \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0443"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
      id: "price",
      onClick: () => setSort(Sort_props["a" /* SortEnum */].Price),
      className: external_classnames_default()({
        [Sort_module_default.a.active]: sort == Sort_props["a" /* SortEnum */].Price
      }),
      "aria-selected": sort == Sort_props["a" /* SortEnum */].Price,
      "aria-labelledby": "sort price",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Sort_sort, {
        className: Sort_module_default.a.sortIcon
      }), "\u041F\u043E \u0446\u0435\u043D\u0435"]
    })]
  }));
};
// EXTERNAL MODULE: ./components/Input/Input.module.css
var Input_module = __webpack_require__("MUuK");
var Input_module_default = /*#__PURE__*/__webpack_require__.n(Input_module);

// CONCATENATED MODULE: ./components/Input/Input.tsx



function Input_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Input_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Input_ownKeys(Object(source), true).forEach(function (key) { Input_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Input_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Input_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Input_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Input_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Input_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Input = /*#__PURE__*/Object(external_react_["forwardRef"])((_ref, ref) => {
  let {
    className,
    error
  } = _ref,
      props = Input_objectWithoutProperties(_ref, ["className", "error"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: external_classnames_default()(Input_module_default.a.inputWrapper, className),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", Input_objectSpread({
      className: external_classnames_default()(Input_module_default.a.input, {
        [Input_module_default.a.error]: error
      }),
      ref: ref
    }, props)), error && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      role: "alert",
      className: Input_module_default.a.errorMessage,
      children: error.message
    })]
  });
});
// EXTERNAL MODULE: ./components/Textarea/Textarea.module.css
var Textarea_module = __webpack_require__("EZXF");
var Textarea_module_default = /*#__PURE__*/__webpack_require__.n(Textarea_module);

// CONCATENATED MODULE: ./components/Textarea/Textarea.tsx



function Textarea_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Textarea_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Textarea_ownKeys(Object(source), true).forEach(function (key) { Textarea_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Textarea_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Textarea_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Textarea_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Textarea_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Textarea_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Textarea = /*#__PURE__*/Object(external_react_["forwardRef"])((_ref, ref) => {
  let {
    className,
    error
  } = _ref,
      props = Textarea_objectWithoutProperties(_ref, ["className", "error"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: external_classnames_default()(Textarea_module_default.a.textareaWrapper, className),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("textarea", Textarea_objectSpread({
      className: external_classnames_default()(Textarea_module_default.a.textarea, {
        [Textarea_module_default.a.error]: error
      }),
      ref: ref
    }, props)), error && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      role: "alert",
      className: Textarea_module_default.a.errorMessage,
      children: error.message
    })]
  });
});
// EXTERNAL MODULE: ./components/Search/Search.module.css
var Search_module = __webpack_require__("b5Lm");
var Search_module_default = /*#__PURE__*/__webpack_require__.n(Search_module);

// CONCATENATED MODULE: ./components/Search/glass.svg
var glass_path;

function glass_extends() { glass_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return glass_extends.apply(this, arguments); }



function SvgGlass(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", glass_extends({
    width: 15,
    height: 15,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), glass_path || (glass_path = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M14.772 13.663L11.074 9.95a5.913 5.913 0 001.472-3.894C12.546 2.716 9.732 0 6.273 0 2.814 0 0 2.717 0 6.056c0 3.34 2.814 6.057 6.273 6.057a6.36 6.36 0 003.594-1.096l3.726 3.74a.827.827 0 00.59.243.83.83 0 00.566-.22.772.772 0 00.023-1.117zM6.272 1.58c2.558 0 4.637 2.008 4.637 4.476 0 2.469-2.08 4.477-4.636 4.477-2.557 0-4.637-2.008-4.637-4.477 0-2.468 2.08-4.476 4.637-4.476z",
    fill: "#fff"
  })));
}

/* harmony default export */ var glass = (SvgGlass);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/Search/Search.tsx



function Search_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Search_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Search_ownKeys(Object(source), true).forEach(function (key) { Search_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Search_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Search_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Search_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Search_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Search_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Search = (_ref) => {
  let {
    children,
    className
  } = _ref,
      props = Search_objectWithoutProperties(_ref, ["children", "className"]);

  const {
    0: search,
    1: setSearch
  } = Object(external_react_["useState"])("");
  const router = Object(router_["useRouter"])();

  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search
      }
    });
  };

  const handleKeyDown = e => {
    if (e.key == "Enter") {
      goToSearch();
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", Search_objectSpread(Search_objectSpread({
    className: external_classnames_default()(className, Search_module_default.a.search)
  }, props), {}, {
    role: "search",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Input, {
      className: Search_module_default.a.inputSearch,
      placeholder: "\u041F\u043E\u0438\u0441\u043A...",
      value: search,
      onChange: e => setSearch(e.target.value),
      onKeyDown: handleKeyDown
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button, {
      appearance: "primary",
      className: Search_module_default.a.button,
      onClick: goToSearch,
      "aria-label": "\u0418\u0441\u043A\u0430\u0442\u044C \u043F\u043E \u0441\u0430\u0439\u0442\u0443",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(glass, {})
    })]
  }));
};
// EXTERNAL MODULE: ./components/Product/Product.module.css
var Product_module = __webpack_require__("ApWs");
var Product_module_default = /*#__PURE__*/__webpack_require__.n(Product_module);

// EXTERNAL MODULE: ./helpers/helpers.tsx + 3 modules
var helpers = __webpack_require__("mmV+");

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// CONCATENATED MODULE: ./components/Product/Product.tsx



function Product_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Product_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Product_ownKeys(Object(source), true).forEach(function (key) { Product_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Product_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Product_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Product_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Product_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Product_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Product = Object(external_framer_motion_["motion"])( /*#__PURE__*/Object(external_react_["forwardRef"])((_ref, ref) => {
  var _product$reviewAvg, _product$reviewAvg2;

  let {
    product,
    className
  } = _ref,
      props = Product_objectWithoutProperties(_ref, ["product", "className"]);

  const {
    0: isReviewOpened,
    1: setIsReviewOpened
  } = Object(external_react_["useState"])(false);
  const reviewRef = Object(external_react_["useRef"])(null);
  const variants = {
    visible: {
      opacity: 1,
      height: "auto"
    },
    hidden: {
      opacity: 0,
      height: 0
    }
  };

  const scrollToReview = () => {
    var _reviewRef$current, _reviewRef$current2;

    setIsReviewOpened(true);
    (_reviewRef$current = reviewRef.current) === null || _reviewRef$current === void 0 ? void 0 : _reviewRef$current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    (_reviewRef$current2 = reviewRef.current) === null || _reviewRef$current2 === void 0 ? void 0 : _reviewRef$current2.focus();
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", Product_objectSpread(Product_objectSpread({
    className: className
  }, props), {}, {
    ref: ref,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card, {
      className: Product_module_default.a.product,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Product_module_default.a.logo,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
          src: "https://courses-top.ru" + product.image,
          alt: product.title,
          width: 70,
          height: 70
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Product_module_default.a.title,
        children: product.title
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Product_module_default.a.price,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "visualyHidden",
            children: "\u0426\u0435\u043D\u0430"
          }), Object(helpers["c" /* priceRu */])(product.price)]
        }), product.oldPrice && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Tag, {
          className: Product_module_default.a.oldPrice,
          color: "green",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "visualyHidden",
            children: "\u0421\u043A\u0438\u0434\u043A\u0430"
          }), Object(helpers["c" /* priceRu */])(product.price - product.oldPrice)]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Product_module_default.a.credit,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "visualyHidden",
            children: "\u041A\u0440\u0435\u0434\u0438\u0442"
          }), Object(helpers["c" /* priceRu */])(product.credit), "/", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: Product_module_default.a.month,
            children: "\u043C\u0435\u0441"
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Product_module_default.a.raiting,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: "visualyHidden",
          children: "Рейтинг " + ((_product$reviewAvg = product.reviewAvg) !== null && _product$reviewAvg !== void 0 ? _product$reviewAvg : product.initialRating)
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Raiting, {
          raiting: (_product$reviewAvg2 = product.reviewAvg) !== null && _product$reviewAvg2 !== void 0 ? _product$reviewAvg2 : product.initialRating
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Product_module_default.a.tags,
        children: product.categories.map(c => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Tag, {
          className: Product_module_default.a.category,
          color: "ghost",
          children: c
        }, c))
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Product_module_default.a.priceTitle,
        "aria-hidden": "true",
        children: "\u0446\u0435\u043D\u0430"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Product_module_default.a.creditTitle,
        "aria-hidden": "true",
        children: "\u043A\u0440\u0435\u0434\u0438\u0442"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Product_module_default.a.rateTitle,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          href: "#ref",
          onClick: scrollToReview,
          children: [product.reviewCount, " ", Object(helpers["a" /* declOfNum */])(product.reviewCount, ["отзыв", "отзыва", "отзывов"])]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Divider, {
        className: Product_module_default.a.hr
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Product_module_default.a.description,
        children: product.description
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Product_module_default.a.feature,
        children: product.characteristics.map(c => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Product_module_default.a.characteristics,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: Product_module_default.a.characteristicsName,
            children: c.name
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: Product_module_default.a.characteristicsDots
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: Product_module_default.a.characteristicsValue,
            children: c.value
          })]
        }, c.name))
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Product_module_default.a.advBlock,
        children: [product.advantages && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Product_module_default.a.advantages,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: Product_module_default.a.advTitle,
            children: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: product.advantages
          })]
        }), product.disadvantages && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Product_module_default.a.disadvantages,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: Product_module_default.a.advTitle,
            children: "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043A\u0438"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: product.disadvantages
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Divider, {
        className: external_classnames_default()(Product_module_default.a.hr, Product_module_default.a.hr2)
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Product_module_default.a.actions,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button, {
          appearance: "primary",
          children: "\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button, {
          appearance: "ghost",
          arrow: isReviewOpened ? "down" : "right",
          className: Product_module_default.a.reviewButton,
          onClick: () => setIsReviewOpened(!isReviewOpened),
          "aria-expanded": isReviewOpened,
          children: "\u0427\u0438\u0442\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432\u044B"
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
      animate: isReviewOpened ? "visible" : "hidden",
      variants: variants,
      initial: "hidden",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card, {
        color: "blue",
        className: external_classnames_default()(Product_module_default.a.reviews),
        ref: reviewRef,
        tabIndex: isReviewOpened ? 0 : -1,
        children: [product.reviews.map(r => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Review, {
            review: r
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Divider, {})]
        }, r._id)), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ReviewForm, {
          productId: product._id,
          isOpened: isReviewOpened
        })]
      })
    })]
  }));
}));
// EXTERNAL MODULE: ./components/Divider/Divider.module.css
var Divider_module = __webpack_require__("lkR/");
var Divider_module_default = /*#__PURE__*/__webpack_require__.n(Divider_module);

// CONCATENATED MODULE: ./components/Divider/Divider.tsx


function Divider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Divider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Divider_ownKeys(Object(source), true).forEach(function (key) { Divider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Divider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Divider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Divider_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Divider_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Divider_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Divider = (_ref) => {
  let {
    className
  } = _ref,
      props = Divider_objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", Divider_objectSpread({
    className: external_classnames_default()(className, Divider_module_default.a.hr)
  }, props));
};
// EXTERNAL MODULE: ./components/Review/Review.module.css
var Review_module = __webpack_require__("M7CX");
var Review_module_default = /*#__PURE__*/__webpack_require__.n(Review_module);

// CONCATENATED MODULE: ./components/Review/user.svg
var user_path, _path2, _path3;

function user_extends() { user_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return user_extends.apply(this, arguments); }



function SvgUser(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", user_extends({
    width: 30,
    height: 30,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), user_path || (user_path = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M15 0C6.729 0 0 6.729 0 15s6.729 15 15 15 15-6.729 15-15S23.271 0 15 0zm0 27.625C8.038 27.625 2.375 21.961 2.375 15S8.038 2.375 15 2.375c6.961 0 12.625 5.664 12.625 12.625 0 6.962-5.664 12.625-12.625 12.625z",
    fill: "#7653FC"
  })), _path2 || (_path2 = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M15 17.662c-4.219 0-8.166 2.115-11.113 5.956l1.883 1.445c2.489-3.241 5.767-5.027 9.23-5.027s6.741 1.786 9.23 5.027l1.883-1.445C23.165 19.777 19.22 17.662 15 17.662z",
    fill: "#7653FC"
  })), _path3 || (_path3 = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M15 5.383c-3.405 0-6.174 2.787-6.174 6.213 0 3.427 2.77 6.214 6.174 6.214 3.404 0 6.174-2.787 6.174-6.214 0-3.426-2.77-6.213-6.174-6.213zm0 10.052c-2.095 0-3.8-1.722-3.8-3.839s1.705-3.839 3.8-3.839c2.095 0 3.8 1.723 3.8 3.84 0 2.116-1.705 3.838-3.8 3.838z",
    fill: "#7653FC"
  })));
}

/* harmony default export */ var user = (SvgUser);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__("9BML");

// EXTERNAL MODULE: external "date-fns/locale"
var locale_ = __webpack_require__("tDG4");

// CONCATENATED MODULE: ./components/Review/Review.tsx



function Review_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Review_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Review_ownKeys(Object(source), true).forEach(function (key) { Review_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Review_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Review_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Review_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Review_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Review_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Review = (_ref) => {
  let {
    review,
    className
  } = _ref,
      props = Review_objectWithoutProperties(_ref, ["review", "className"]);

  const {
    name,
    title,
    description,
    createdAt,
    rating
  } = review;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", Review_objectSpread(Review_objectSpread({
    className: external_classnames_default()(Review_module_default.a.review, className)
  }, props), {}, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(user, {
      className: Review_module_default.a.user
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Review_module_default.a.title,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
        className: Review_module_default.a.name,
        children: [name, ":"]
      }), "\xA0\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        children: title
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Review_module_default.a.date,
      children: Object(external_date_fns_["format"])(new Date(createdAt), "dd MMMM yyyy", {
        locale: locale_["ru"]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Review_module_default.a.raiting,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Raiting, {
        raiting: rating
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Review_module_default.a.description,
      children: description
    })]
  }));
};
// EXTERNAL MODULE: ./components/ReviewForm/ReviewForm.module.css
var ReviewForm_module = __webpack_require__("6M2e");
var ReviewForm_module_default = /*#__PURE__*/__webpack_require__.n(ReviewForm_module);

// CONCATENATED MODULE: ./components/ReviewForm/close.svg
var close_path;

function close_extends() { close_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return close_extends.apply(this, arguments); }



function SvgClose(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", close_extends({
    width: 12,
    height: 12,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), close_path || (close_path = /*#__PURE__*/external_react_["createElement"]("path", {
    stroke: "#1CC37E",
    strokeWidth: 3,
    d: "M2.061 1.939l8.485 8.486M1.939 10.425l8.486-8.486"
  })));
}

/* harmony default export */ var ReviewForm_close = (SvgClose);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./helpers/api.ts
var api = __webpack_require__("ZwSt");

// CONCATENATED MODULE: ./components/ReviewForm/ReviewForm.tsx



function ReviewForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ReviewForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ReviewForm_ownKeys(Object(source), true).forEach(function (key) { ReviewForm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ReviewForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ReviewForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ReviewForm_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ReviewForm_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ReviewForm_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const ReviewForm = (_ref) => {
  let {
    productId,
    isOpened,
    className
  } = _ref,
      props = ReviewForm_objectWithoutProperties(_ref, ["productId", "isOpened", "className"]);

  const {
    0: isSuccess,
    1: setIsSuccess
  } = Object(external_react_["useState"])(false);
  const {
    0: error,
    1: setIsError
  } = Object(external_react_["useState"])();
  const {
    register,
    control,
    handleSubmit,
    formState: {
      errors
    },
    reset,
    clearErrors
  } = Object(external_react_hook_form_["useForm"])();

  const onSubmit = async formData => {
    try {
      const {
        data
      } = await external_axios_default.a.post(api["a" /* API */].review.createDemo, ReviewForm_objectSpread(ReviewForm_objectSpread({}, formData), {}, {
        productId
      }));

      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setIsError("Что-то пошло не так");
      }
    } catch (e) {// setIsError(e.message);
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
    onSubmit: handleSubmit(onSubmit),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", ReviewForm_objectSpread(ReviewForm_objectSpread({
      className: external_classnames_default()(ReviewForm_module_default.a.reviewForm, className)
    }, props), {}, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Input, ReviewForm_objectSpread(ReviewForm_objectSpread({}, register("name", {
        required: {
          value: true,
          message: "Заполните имя"
        }
      })), {}, {
        placeholder: "\u0418\u043C\u044F",
        error: errors.name,
        tabIndex: isOpened ? 0 : -1,
        "aria-invalid": errors.name ? true : false
      })), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input, ReviewForm_objectSpread(ReviewForm_objectSpread({}, register("title", {
        required: {
          value: true,
          message: "Заполните заголовок"
        }
      })), {}, {
        className: ReviewForm_module_default.a.title,
        placeholder: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
        error: errors.title,
        tabIndex: isOpened ? 0 : -1,
        "aria-invalid": errors.title ? true : false
      })), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: ReviewForm_module_default.a.raiting,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: "\u041E\u0446\u0435\u043D\u043A\u0430:"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_hook_form_["Controller"], {
          control: control,
          name: "rating",
          rules: {
            required: {
              value: true,
              message: "Укажите рейтинг"
            }
          },
          render: ({
            field
          }) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Raiting, {
            raiting: field.value,
            ref: field.ref,
            isEditable: true,
            setRaiting: field.onChange,
            error: errors.rating,
            tabIndex: isOpened ? 0 : -1
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Textarea, ReviewForm_objectSpread(ReviewForm_objectSpread({}, register("description", {
        required: {
          value: true,
          message: "Заполните отзыв"
        }
      })), {}, {
        className: ReviewForm_module_default.a.description,
        placeholder: "\u0422\u0435\u043A\u0441\u0442 \u043E\u0442\u0437\u044B\u0432\u0430",
        error: errors.description,
        tabIndex: isOpened ? 0 : -1,
        "aria-label": "\u0442\u0435\u043A\u0441\u0442 \u043E\u0442\u0437\u044B\u0432\u0430",
        "aria-invalid": errors.description ? true : false
      })), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: ReviewForm_module_default.a.submit,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button, {
          appearance: "primary",
          tabIndex: isOpened ? 0 : -1,
          onClick: () => clearErrors(),
          children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: ReviewForm_module_default.a.info,
          children: "* \u041F\u0435\u0440\u0435\u0434 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0435\u0439 \u043E\u0442\u0437\u044B\u0432 \u043F\u0440\u043E\u0439\u0434\u0435\u0442 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u043C\u043E\u0434\u0435\u0440\u0430\u0446\u0438\u044E \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443"
        })]
      })]
    })), isSuccess && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: ReviewForm_module_default.a.success,
      role: "alert",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: ReviewForm_module_default.a.successTitle,
        children: "\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: ReviewForm_module_default.a.description,
        children: "\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432 \u0431\u0443\u0434\u0435\u0442 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: ReviewForm_module_default.a.close,
        onClick: () => setIsSuccess(false),
        "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043E\u043F\u043E\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ReviewForm_close, {})
      })]
    }), error && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: ReviewForm_module_default.a.error,
      role: "alert",
      children: ["\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443", /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: ReviewForm_module_default.a.close,
        onClick: () => setIsError(undefined),
        "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043E\u043F\u043E\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ReviewForm_close, {})
      })]
    })]
  });
};
// EXTERNAL MODULE: ./components/Up/Up.module.css
var Up_module = __webpack_require__("7H+Z");
var Up_module_default = /*#__PURE__*/__webpack_require__.n(Up_module);

// CONCATENATED MODULE: ./components/hooks/useScrollY.ts

const useScrollY = () => {
  const isBrowser = false;
  const {
    0: scroolY,
    1: setScrollY
  } = Object(external_react_["useState"])(0);

  const handleScroll = () => {
    const currentScrollY = isBrowser ? window.scrollY : 0;
    setScrollY(currentScrollY);
  };

  Object(external_react_["useEffect"])(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return scroolY;
};
// CONCATENATED MODULE: ./components/Up/Up.tsx






const Up = () => {
  const controls = Object(external_framer_motion_["useAnimation"])();
  const y = useScrollY();
  Object(external_react_["useEffect"])(() => {
    controls.start({
      opacity: y / document.body.scrollHeight
    });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
    className: Up_module_default.a.up,
    animate: controls,
    initial: {
      opacity: 0
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ButtonIcon, {
      appearance: "primary",
      icon: "up",
      onClick: scrollToTop,
      "aria-label": "\u041D\u0430\u0432\u0435\u0440\u0445"
    })
  });
};
// CONCATENATED MODULE: ./components/ButtonIcon/up.svg
var up_rect, up_path;

function up_extends() { up_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return up_extends.apply(this, arguments); }



function SvgUp(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", up_extends({
    width: 21,
    height: 13,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), up_rect || (up_rect = /*#__PURE__*/external_react_["createElement"]("rect", {
    y: 9.9,
    width: 14,
    height: 3,
    rx: 1.5,
    transform: "rotate(-45 0 9.9)",
    fill: "#fff"
  })), up_path || (up_path = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M9.06 1.232a1.5 1.5 0 012.122 0L18.96 9.01a1.5 1.5 0 11-2.121 2.122L9.06 3.354a1.5 1.5 0 010-2.122z",
    fill: "#fff"
  })));
}

/* harmony default export */ var up = (SvgUp);
// CONCATENATED MODULE: ./components/ButtonIcon/close.svg
var close_rect, close_rect2;

function ButtonIcon_close_extends() { ButtonIcon_close_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ButtonIcon_close_extends.apply(this, arguments); }



function close_SvgClose(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", ButtonIcon_close_extends({
    width: 19,
    height: 19,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), close_rect || (close_rect = /*#__PURE__*/external_react_["createElement"]("rect", {
    y: 16.51,
    width: 23,
    height: 3,
    rx: 1.5,
    transform: "rotate(-45 0 16.51)",
    fill: "#7653FC"
  })), close_rect2 || (close_rect2 = /*#__PURE__*/external_react_["createElement"]("rect", {
    x: 2.253,
    width: 23,
    height: 3,
    rx: 1.5,
    transform: "rotate(45 2.253 0)",
    fill: "#7653FC"
  })));
}

/* harmony default export */ var ButtonIcon_close = (close_SvgClose);
// CONCATENATED MODULE: ./components/ButtonIcon/menu.svg
var menu_rect, menu_rect2, menu_rect3;

function menu_extends() { menu_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return menu_extends.apply(this, arguments); }



function SvgMenu(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", menu_extends({
    width: 20,
    height: 17,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), menu_rect || (menu_rect = /*#__PURE__*/external_react_["createElement"]("rect", {
    width: 20,
    height: 3,
    rx: 1.5,
    fill: "#7653FC"
  })), menu_rect2 || (menu_rect2 = /*#__PURE__*/external_react_["createElement"]("rect", {
    y: 7,
    width: 20,
    height: 3,
    rx: 1.5,
    fill: "#7653FC"
  })), menu_rect3 || (menu_rect3 = /*#__PURE__*/external_react_["createElement"]("rect", {
    y: 14,
    width: 20,
    height: 3,
    rx: 1.5,
    fill: "#7653FC"
  })));
}

/* harmony default export */ var menu = (SvgMenu);
// CONCATENATED MODULE: ./components/ButtonIcon/ButtonIcon.props.ts



const icons = {
  up: up,
  close: ButtonIcon_close,
  menu: menu
};
// EXTERNAL MODULE: ./components/ButtonIcon/ButtonIcon.module.css
var ButtonIcon_module = __webpack_require__("KwAr");
var ButtonIcon_module_default = /*#__PURE__*/__webpack_require__.n(ButtonIcon_module);

// CONCATENATED MODULE: ./components/ButtonIcon/ButtonIcon.tsx


function ButtonIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ButtonIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ButtonIcon_ownKeys(Object(source), true).forEach(function (key) { ButtonIcon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ButtonIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ButtonIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ButtonIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ButtonIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ButtonIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ButtonIcon = (_ref) => {
  let {
    appearance,
    icon,
    className
  } = _ref,
      props = ButtonIcon_objectWithoutProperties(_ref, ["appearance", "icon", "className"]);

  const IconComp = icons[icon];
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", ButtonIcon_objectSpread(ButtonIcon_objectSpread({
    className: external_classnames_default()(ButtonIcon_module_default.a.button, className, {
      [ButtonIcon_module_default.a.primary]: appearance == "primary",
      [ButtonIcon_module_default.a.white]: appearance == "white"
    })
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(IconComp, {})
  }));
};
// CONCATENATED MODULE: ./components/index.ts


















/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("8OQS"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains,
  enableBlurryPlaceholder: configEnableBlurryPlaceholder
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","enableBlurryPlaceholder":false} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(element, placeholder) {
  if (placeholder === 'blur' && element) {
    if (element.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      element.style.backgroundImage = 'none';
    } else {
      element.onload = () => {
        element.style.backgroundImage = 'none';
      };
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (!configEnableBlurryPlaceholder) {
    placeholder = 'empty';
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  const MIN_IMG_SIZE_FOR_PLACEHOLDER = 5000;
  const tooSmallForBlurryPlaceholder = widthInt && heightInt && widthInt * heightInt < MIN_IMG_SIZE_FOR_PLACEHOLDER;
  const shouldShowBlurryPlaceholder = placeholder === 'blur' && !tooSmallForBlurryPlaceholder;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, shouldShowBlurryPlaceholder ? {
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "e4eH":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "Footer_footer__3l6yP"
};


/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "ifTy":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"p": "P_p__1diXQ",
	"s": "P_s__35XSw",
	"m": "P_m__3Ruez",
	"l": "P_l__sxHpZ"
};


/***/ }),

/***/ "kfyG":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button": "Button_button__sL3tD",
	"primary": "Button_primary__2zal1",
	"ghost": "Button_ghost__2SQcx",
	"arrow": "Button_arrow__-Cxtw",
	"down": "Button_down__3uNGg"
};


/***/ }),

/***/ "kh7S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ withLayout; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./layout/Layout.module.css
var Layout_module = __webpack_require__("lDNE");
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./layout/Header/Header.module.css
var Header_module = __webpack_require__("OupB");
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./layout/logo.svg
var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgLogo(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", _extends({
    width: 159,
    height: 44,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M71.14 23.695c0 2.22-.37 4.16-1.11 5.82-.72 1.64-1.83 2.92-3.33 3.84-1.5.92-3.42 1.38-5.76 1.38-2.32 0-4.24-.46-5.76-1.38-1.5-.92-2.62-2.21-3.36-3.87-.72-1.66-1.08-3.6-1.08-5.82s.36-4.15 1.08-5.79c.74-1.64 1.86-2.91 3.36-3.81 1.52-.92 3.45-1.38 5.79-1.38 2.32 0 4.23.46 5.73 1.38 1.5.9 2.61 2.18 3.33 3.84.74 1.64 1.11 3.57 1.11 5.79zm-15.63 0c0 2.24.43 4.01 1.29 5.31.86 1.28 2.24 1.92 4.14 1.92 1.94 0 3.33-.64 4.17-1.92.84-1.3 1.26-3.07 1.26-5.31 0-2.26-.42-4.03-1.26-5.31-.84-1.28-2.22-1.92-4.14-1.92-1.92 0-3.31.64-4.17 1.92-.86 1.28-1.29 3.05-1.29 5.31zm46.084-10.68l-5.46 21.42h-5.16l-2.91-11.25c-.06-.22-.14-.55-.24-.99-.08-.44-.18-.92-.3-1.44-.1-.52-.19-1.01-.27-1.47-.08-.48-.14-.85-.18-1.11-.02.26-.08.63-.18 1.11-.08.46-.17.95-.27 1.47-.1.5-.2.98-.3 1.44-.1.44-.18.78-.24 1.02l-2.88 11.22h-5.16l-5.46-21.42h4.47l2.73 11.7c.12.46.25 1.04.39 1.74s.27 1.4.39 2.1c.12.7.21 1.29.27 1.77.06-.5.15-1.09.27-1.77.12-.7.24-1.37.36-2.01.14-.66.26-1.17.36-1.53l3.12-12h4.29l3.12 12c.1.34.21.84.33 1.5a52.947 52.947 0 01.66 3.81c.06-.5.15-1.09.27-1.77.12-.7.25-1.4.39-2.1.16-.7.29-1.28.39-1.74l2.73-11.7h4.47zm2.694 21.42v-21.42h4.53v17.67h8.7v3.75h-13.23zM128.352 32.835c.368 0 .704-.024 1.008-.072.32-.048.608-.12.864-.216v.792a5.586 5.586 0 01-.864.24c-.32.064-.68.096-1.08.096-1.104 0-1.896-.312-2.376-.936-.48-.624-.72-1.536-.72-2.736v-8.472h-1.92v-.624l1.92-.216.288-3.072h.648v3.096h4.032v.816h-4.032v8.4c0 .944.16 1.664.48 2.16.336.496.92.744 1.752.744zm15.051-5.76c0 1.28-.208 2.416-.624 3.408-.4.992-1.016 1.776-1.848 2.352-.832.56-1.872.84-3.12.84-1.2 0-2.216-.28-3.048-.84-.816-.56-1.44-1.336-1.872-2.328-.416-.992-.624-2.136-.624-3.432 0-2.032.496-3.64 1.488-4.824 1.008-1.184 2.4-1.776 4.176-1.776 1.264 0 2.296.288 3.096.864.8.576 1.392 1.36 1.776 2.352.4.992.6 2.12.6 3.384zm-10.176 0c0 1.712.376 3.104 1.128 4.176.752 1.056 1.904 1.584 3.456 1.584 1.072 0 1.952-.24 2.64-.72.688-.496 1.192-1.176 1.512-2.04.32-.864.48-1.864.48-3 0-1.088-.152-2.064-.456-2.928-.304-.864-.792-1.552-1.464-2.064-.656-.512-1.52-.768-2.592-.768-1.52 0-2.688.512-3.504 1.536-.8 1.008-1.2 2.416-1.2 4.224zm19.225-6.6c1.664 0 2.936.552 3.816 1.656.896 1.104 1.344 2.72 1.344 4.848 0 2.144-.472 3.8-1.416 4.968-.944 1.152-2.256 1.728-3.936 1.728-1.2 0-2.16-.272-2.88-.816-.704-.544-1.2-1.2-1.488-1.968h-.048c.016.48.024.976.024 1.488.016.496.024.976.024 1.44v5.232h-.912V20.715h.768l.096 2.784h.048a4.496 4.496 0 01.888-1.464c.4-.464.904-.84 1.512-1.128.608-.288 1.328-.432 2.16-.432zm-.072.84c-1.488 0-2.608.496-3.36 1.488-.736.976-1.112 2.368-1.128 4.176v.144c0 1.936.376 3.376 1.128 4.32.752.928 1.816 1.392 3.192 1.392 1.408 0 2.496-.504 3.264-1.512.784-1.008 1.176-2.456 1.176-4.344 0-3.776-1.424-5.664-4.272-5.664zM41 1.744a1.19 1.19 0 00-1.201-1.18 1.19 1.19 0 00-1.201 1.18c0 1.279-1.137 2.359-2.483 2.359h-5.418c-3.09-1.544-6.608-2.359-10.197-2.359-3.59 0-7.108.815-10.197 2.359H4.9c-1.353 0-2.497-1.08-2.497-2.36a1.19 1.19 0 00-1.2-1.178A1.19 1.19 0 000 1.744v3.538c0 2.188.882 4.25 2.484 5.812C.856 13.706 0 16.569 0 19.434c0 9.754 9.196 17.69 20.5 17.69S41 29.188 41 19.434c0-2.86-.854-5.72-2.477-8.33C40.053 9.612 41 7.553 41 5.283V1.744zM20.5 4.103c1.914 0 3.802.258 5.6.757a10.807 10.807 0 00-5.593 4.998 10.804 10.804 0 00-5.598-5 20.943 20.943 0 015.591-.755zm0 19.579c.45.732 1.01 1.39 1.661 1.952L20.5 28.71l-1.661-3.076a8.355 8.355 0 001.661-1.952zm-7.207 1.649c-3.312 0-6.006-2.645-6.006-5.897 0-3.251 2.694-5.897 6.006-5.897 3.312 0 6.006 2.646 6.006 5.897 0 3.252-2.694 5.897-6.006 5.897zm8.408-5.897c0-.094.003-.187.007-.28a1.15 1.15 0 00.014-.172v-.022c.247-3.03 2.836-5.423 5.985-5.423 3.312 0 6.006 2.646 6.006 5.897 0 3.252-2.694 5.897-6.006 5.897-3.312 0-6.006-2.645-6.006-5.897zM2.426 5.806A4.967 4.967 0 004.9 6.46h5.992c2.248 0 4.361.86 5.95 2.423a8.137 8.137 0 012.38 4.7 8.452 8.452 0 00-5.175-2.372 1.222 1.222 0 00-.28-.033H8.503a6.21 6.21 0 01-3.525-1.087 1.187 1.187 0 00-.396-.296c-1.202-.976-2.01-2.393-2.156-3.99zm36.172 13.628c0 8.454-8.119 15.331-18.098 15.331-9.98 0-18.098-6.877-18.098-15.33 0-2.36.694-4.732 2.015-6.921a8.568 8.568 0 003.06.963c-1.596 1.504-2.592 3.618-2.592 5.957 0 4.552 3.772 8.255 8.408 8.255a8.49 8.49 0 003.526-.761l2.62 4.852c.208.386.616.627 1.061.627.445 0 .853-.241 1.061-.627l2.62-4.852a8.49 8.49 0 003.526.761c4.636 0 8.408-3.703 8.408-8.255 0-2.338-.995-4.452-2.591-5.956a8.593 8.593 0 003.064-.957c1.318 2.188 2.01 4.556 2.01 6.913zm-2.2-9.619a1.196 1.196 0 00-.357.266 6.184 6.184 0 01-3.53 1.098h-5.263c-.093 0-.184.011-.272.031a8.452 8.452 0 00-5.18 2.358 8.138 8.138 0 012.378-4.684 8.431 8.431 0 015.95-2.423h5.991c.873 0 1.716-.226 2.458-.649-.148 1.606-.963 3.027-2.174 4.003z",
    fill: "#7653FC"
  })), _path2 || (_path2 = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M13.5 16.683l1.01 2.591h3.27l-2.645 1.602 1.01 2.59-2.645-1.6-2.645 1.6 1.01-2.59-2.645-1.602h3.27l1.01-2.59zM27.5 16.683l1.01 2.591h3.27l-2.645 1.602 1.01 2.59-2.645-1.6-2.645 1.6 1.01-2.59-2.645-1.602h3.27l1.01-2.59z",
    fill: "#7653FC"
  })));
}

/* harmony default export */ var logo = (SvgLogo);
// EXTERNAL MODULE: ./components/index.ts + 29 modules
var components = __webpack_require__("bgFo");

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__("wmQq");

// EXTERNAL MODULE: ./layout/Sidebar/Sidebar.module.css
var Sidebar_module = __webpack_require__("JH6J");
var Sidebar_module_default = /*#__PURE__*/__webpack_require__.n(Sidebar_module);

// EXTERNAL MODULE: ./interfaces/toppage.interface.ts
var toppage_interface = __webpack_require__("RdwS");

// CONCATENATED MODULE: ./context/app.context.tsx



const AppContext = /*#__PURE__*/Object(external_react_["createContext"])({
  menu: [],
  firstCategory: toppage_interface["a" /* TopLevelCategory */].Courses
});
const AppContextProvider = ({
  menu,
  firstCategory,
  children
}) => {
  const {
    0: menuState,
    1: setMenuState
  } = Object(external_react_["useState"])(menu);

  const setMenu = newMenu => {
    setMenuState(newMenu);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(AppContext.Provider, {
    value: {
      menu: menuState,
      firstCategory,
      setMenu
    },
    children: children
  });
};
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./layout/Menu/Menu.module.css
var Menu_module = __webpack_require__("G4Kv");
var Menu_module_default = /*#__PURE__*/__webpack_require__.n(Menu_module);

// EXTERNAL MODULE: ./helpers/helpers.tsx + 3 modules
var helpers = __webpack_require__("mmV+");

// CONCATENATED MODULE: ./layout/Menu/Menu.tsx










const Menu = () => {
  const {
    menu,
    setMenu,
    firstCategory
  } = Object(external_react_["useContext"])(AppContext);
  const {
    0: announce,
    1: setAnnounce
  } = Object(external_react_["useState"])(undefined);
  const router = Object(router_["useRouter"])();
  const shouldReducedMotion = Object(external_framer_motion_["useReducedMotion"])();
  const variants = {
    visible: {
      marginBottom: 20,
      transition: shouldReducedMotion ? {} : {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    hidden: {
      marginBottom: 0
    }
  };
  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29
    },
    hidden: {
      opacity: shouldReducedMotion ? 1 : 0,
      height: 0
    }
  };

  const openSecondLevelKey = (key, secondCategory) => {
    if (key.code == "Space" || key.code == "Enter") {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const openSecondLevel = secondCategory => {
    setMenu && setMenu(menu.map(m => {
      if (m._id.secondCategory == secondCategory) {
        setAnnounce(m.isOpened ? "closed" : "opened");
        m.isOpened = !m.isOpened;
      }

      return m;
    }));
  };

  const buildFirstLevel = () => {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
      className: Menu_module_default.a.firstLevelList,
      children: helpers["b" /* firstLevelMenu */].map(m => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
        "aria-expanded": m.id == firstCategory,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: `/${m.route}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: external_classnames_default()(Menu_module_default.a.firstLevel, {
                [Menu_module_default.a.firstLevelActive]: m.id == firstCategory
              }),
              children: [m.icon, /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: m.name
              })]
            })
          })
        }), m.id == firstCategory && buildSecondLevel(m)]
      }, m.route))
    });
  };

  const buildSecondLevel = menuItem => {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
      className: Menu_module_default.a.secondBlock,
      children: menu.map(m => {
        var _m$isOpened;

        if (m.pages.map(p => p.alias).includes(router.asPath.split("/")[2])) {
          m.isOpened = true;
        }

        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            tabIndex: 0,
            onKeyDown: key => openSecondLevelKey(key, m._id.secondCategory),
            className: Menu_module_default.a.secondLevel,
            onClick: () => openSecondLevel(m._id.secondCategory),
            "aria-expanded": m.isOpened,
            children: m._id.secondCategory
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].ul, {
            layout: true,
            variants: variants,
            initial: m.isOpened ? "visible" : "hidden",
            animate: m.isOpened ? "visible" : "hidden",
            className: external_classnames_default()(Menu_module_default.a.secondLevelBlock),
            children: buildThirdLevel(m.pages, menuItem.route, (_m$isOpened = m.isOpened) !== null && _m$isOpened !== void 0 ? _m$isOpened : false)
          })]
        }, m._id.secondCategory);
      })
    });
  };

  const buildThirdLevel = (pages, route, isOpened) => {
    return pages.map(p => /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].li, {
      variants: variantsChildren,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: `/${route}/${p.alias}`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          tabIndex: isOpened ? 0 : -1,
          className: external_classnames_default()(Menu_module_default.a.thirdLevel, {
            [Menu_module_default.a.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
          }),
          "aria-current": `/${route}/${p.alias}` == router.asPath ? "page" : false,
          children: p.category
        })
      })
    }, p._id));
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("nav", {
    className: Menu_module_default.a.menu,
    role: "navigation",
    children: [announce && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      role: "log",
      className: "visualyHidden",
      children: announce == "opened" ? "развернуто" : "свернуто"
    }), buildFirstLevel()]
  });
};
// CONCATENATED MODULE: ./layout/Sidebar/Sidebar.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Sidebar = (_ref) => {
  let {
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", _objectSpread(_objectSpread({
    className: external_classnames_default()(className, Sidebar_module_default.a.sidebar)
  }, props), {}, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(logo, {
      className: Sidebar_module_default.a.logo
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components["m" /* Search */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Menu, {})]
  }));
};
// CONCATENATED MODULE: ./layout/Header/Header.tsx



function Header_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Header_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Header_ownKeys(Object(source), true).forEach(function (key) { Header_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Header_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Header_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Header_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Header_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const Header = (_ref) => {
  let {
    className
  } = _ref,
      props = Header_objectWithoutProperties(_ref, ["className"]);

  const {
    0: isOpened,
    1: setIsOpened
  } = Object(external_react_["useState"])(false);
  const router = Object(router_["useRouter"])();
  const shouldReducedMotion = Object(external_framer_motion_["useReducedMotion"])();
  Object(external_react_["useEffect"])(() => {
    setIsOpened(false);
  }, [router]);
  const variants = {
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
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", Header_objectSpread(Header_objectSpread({
    className: external_classnames_default()(className, Header_module_default.a.header)
  }, props), {}, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(logo, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components["c" /* ButtonIcon */], {
      appearance: "white",
      icon: "menu",
      onClick: () => setIsOpened(true)
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_framer_motion_["motion"].div, {
      className: Header_module_default.a.mobileMenu,
      variants: variants,
      initial: "closed",
      animate: isOpened ? "opened" : "closed",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Sidebar, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components["c" /* ButtonIcon */], {
        className: Header_module_default.a.menuClose,
        appearance: "white",
        icon: "close",
        onClick: () => setIsOpened(false)
      })]
    })]
  }));
};
// EXTERNAL MODULE: ./layout/Footer/Footer.module.css
var Footer_module = __webpack_require__("e4eH");
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__("9BML");

// CONCATENATED MODULE: ./layout/Footer/Footer.tsx



function Footer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Footer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Footer_ownKeys(Object(source), true).forEach(function (key) { Footer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Footer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Footer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Footer_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Footer_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Footer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Footer = (_ref) => {
  let {
    className
  } = _ref,
      props = Footer_objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("footer", Footer_objectSpread(Footer_objectSpread({
    className: external_classnames_default()(className, Footer_module_default.a.footer)
  }, props), {}, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: ["OwlTop \xA9 2020 - ", Object(external_date_fns_["format"])(new Date(), "yyyy"), " \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: "#",
      target: "_blank",
      children: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: "#",
      target: "_blank",
      children: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
    })]
  }));
};
// CONCATENATED MODULE: ./layout/Layout.tsx



function Layout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Layout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Layout_ownKeys(Object(source), true).forEach(function (key) { Layout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Layout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Layout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Layout_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Layout_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Layout_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const Layout = (_ref) => {
  let {
    children
  } = _ref,
      props = Layout_objectWithoutProperties(_ref, ["children"]);

  const {
    0: isSkipLinkDisplayed,
    1: setIsSkipLinkDisplayed
  } = Object(external_react_["useState"])(false);
  const bodyRef = Object(external_react_["useRef"])(null);

  const skipContentAction = key => {
    if (key.code == "Space" || key.code == "Enter") {
      var _bodyRef$current;

      key.preventDefault();
      (_bodyRef$current = bodyRef.current) === null || _bodyRef$current === void 0 ? void 0 : _bodyRef$current.focus();
    }

    setIsSkipLinkDisplayed(false);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Layout_module_default.a.wrapper,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      tabIndex: 0,
      className: external_classnames_default()(Layout_module_default.a.skipLink, {
        [Layout_module_default.a.displayed]: isSkipLinkDisplayed
      }),
      onFocus: () => setIsSkipLinkDisplayed(true),
      onKeyDown: skipContentAction,
      children: "\u0421\u0440\u0430\u0437\u0443 \u043A \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044E"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {
      className: Layout_module_default.a.header
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Sidebar, {
      className: Layout_module_default.a.sidebar
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("main", {
      className: Layout_module_default.a.body,
      ref: bodyRef,
      tabIndex: 0,
      role: "main",
      children: children
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {
      className: Layout_module_default.a.footer
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components["q" /* Up */], {})]
  });
};

const withLayout = Component => {
  return function withLayoutnComponent(props) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(AppContextProvider, {
      menu: props.menu,
      firstCategory: props.firstCategory,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Layout, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, Layout_objectSpread({}, props))
      })
    });
  };
};

/***/ }),

/***/ "lDNE":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "Layout_wrapper__3IvBy",
	"header": "Layout_header__2M2F8",
	"sidebar": "Layout_sidebar__205yA",
	"body": "Layout_body__3X1_m",
	"footer": "Layout_footer__196lU",
	"skipLink": "Layout_skipLink__8x5aj",
	"displayed": "Layout_displayed__16VJ-"
};


/***/ }),

/***/ "lRkB":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sortIcon": "Sort_sortIcon__3bwoK",
	"active": "Sort_active__1xADx",
	"sortName": "Sort_sortName__39H9n",
	"sort": "Sort_sort__3eCh2"
};


/***/ }),

/***/ "lkR/":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"hr": "Divider_hr__3DpPQ"
};


/***/ }),

/***/ "mmV+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ firstLevelMenu; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ priceRu; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ declOfNum; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./helpers/icons/courses.svg
var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgCourses(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", _extends({
    width: 24,
    height: 24,
    fill: "#787D85",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M12 12.892l-6.328-2.541v1.836c0 2.004 2.72 3.515 6.328 3.515s6.328-1.51 6.328-3.515V10.35L12 12.892z"
  })), _path2 || (_path2 = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M24 16.405c0-.915-.59-1.688-1.406-1.98V7.143L24 6.562 12 1.747 0 6.562l12 4.815 9.188-3.67v6.719a2.106 2.106 0 00-1.407 1.98c0 .838.495 1.557 1.205 1.897l-1.168 3.505 1.333.445.74-2.218.74 2.218 1.333-.445-1.169-3.505A2.106 2.106 0 0024 16.405z"
  })));
}

/* harmony default export */ var courses = (SvgCourses);
// CONCATENATED MODULE: ./helpers/icons/books.svg
var books_path, books_path2;

function books_extends() { books_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return books_extends.apply(this, arguments); }



function SvgBooks(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", books_extends({
    width: 24,
    height: 23,
    fill: "#787D85",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), books_path || (books_path = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M5.06 3.75h-.002a.73.73 0 00-.502.195.648.648 0 00-.21.476v10.06c0 .369.321.67.716.67 1.666.004 4.457.33 6.382 2.218V6.841a.613.613 0 00-.098-.34C9.766 4.117 6.73 3.754 5.06 3.75zM19.654 14.48V4.42c0-.18-.074-.349-.21-.476a.73.73 0 00-.502-.194h-.001c-1.67.003-4.707.366-6.287 2.752a.613.613 0 00-.098.34v10.527c1.925-1.888 4.716-2.214 6.382-2.217.395-.002.716-.302.716-.671z"
  })), books_path2 || (books_path2 = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M21.285 6.07h-.52v8.41c0 .943-.818 1.71-1.825 1.713-1.413.003-3.742.262-5.392 1.726 2.853-.655 5.862-.229 7.576.137a.751.751 0 00.607-.13.652.652 0 00.269-.523V6.74c0-.37-.321-.671-.715-.671zM3.234 14.48V6.07h-.518c-.395 0-.716.3-.716.67v10.662c0 .206.098.397.269.524a.75.75 0 00.607.13c1.714-.366 4.723-.792 7.576-.137-1.65-1.464-3.98-1.723-5.393-1.726-1.006-.002-1.825-.77-1.825-1.712z"
  })));
}

/* harmony default export */ var books = (SvgBooks);
// CONCATENATED MODULE: ./helpers/icons/products.svg
var products_path;

function products_extends() { products_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return products_extends.apply(this, arguments); }



function SvgProducts(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", products_extends({
    width: 24,
    height: 23,
    fill: "#787D85",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), products_path || (products_path = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M15.09 4.168l-8.168 3.92-3.247-1.497 8.024-3.714a.697.697 0 01.585 0l2.806 1.291zM20.316 6.59l-8.311 3.86-3.113-1.437-.45-.214 8.177-3.92.45.214 3.247 1.498zM11.338 11.563l-.008 8.123-7.961-3.895A.648.648 0 013 15.218V7.703l3.373 1.558v2.74c0 .35.306.641.675.641.37 0 .675-.29.675-.642V9.895l.45.205 3.165 1.463zM20.991 7.712l-8.303 3.843-.008 8.122L21 15.604l-.009-7.892z"
  })));
}

/* harmony default export */ var products = (SvgProducts);
// EXTERNAL MODULE: ./interfaces/toppage.interface.ts
var toppage_interface = __webpack_require__("RdwS");

// CONCATENATED MODULE: ./helpers/helpers.tsx





const firstLevelMenu = [{
  route: "courses",
  name: "Курсы",
  icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(courses, {}),
  id: toppage_interface["a" /* TopLevelCategory */].Courses
}, // { route: "services", name: "Сервисы", icon: <ServicesIcon></ServicesIcon>, id: TopLevelCategory.Services },
{
  route: "books",
  name: "Книги",
  icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(books, {}),
  id: toppage_interface["a" /* TopLevelCategory */].Books
}, {
  route: "products",
  name: "Продукты",
  icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(products, {}),
  id: toppage_interface["a" /* TopLevelCategory */].Products
}];
const priceRu = price => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").concat(" ₽");
const declOfNum = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
};

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "tDG4":
/***/ (function(module, exports) {

module.exports = require("date-fns/locale");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wmQq":
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "yg5/":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"h1": "Htag_h1__15c8R",
	"h2": "Htag_h2__38T7C",
	"h3": "Htag_h3__1L-7T"
};


/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });