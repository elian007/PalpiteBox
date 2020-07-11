module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/get-promo.js":
/*!********************************!*\
  !*** ./pages/api/get-promo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-spreadsheet */ \"google-spreadsheet\");\n/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__);\n\nconst doc = new google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__[\"GoogleSpreadsheet\"](process.env.SHEET_DOC_ID);\n\nconst fromBase64 = value => {\n  const buff = Buffer.from(value, 'base64');\n  return buff.toString('ascii');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  try {\n    // await doc.useServiceAccountAuth(credentials);\n    await doc.useServiceAccountAuth({\n      client_email: process.env.SHEET_CLIENT_EMAIL,\n      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)\n    });\n    await doc.loadInfo();\n    const sheet = doc.sheetsByIndex[2];\n    await sheet.loadCells(\"A3:B3\");\n    const mostrarPromocaoCell = sheet.getCell(2, 0);\n    const textoCell = sheet.getCell(2, 1);\n    res.end(JSON.stringify({\n      showCoupon: mostrarPromocaoCell.value === \"VERDADEIRO\",\n      message: textoCell.value\n    }));\n  } catch (err) {\n    res.end(JSON.stringify({\n      showCoupon: false,\n      message: \"\"\n    }));\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ2V0LXByb21vLmpzPzYwNDIiXSwibmFtZXMiOlsiZG9jIiwiR29vZ2xlU3ByZWFkc2hlZXQiLCJwcm9jZXNzIiwiZW52IiwiU0hFRVRfRE9DX0lEIiwiZnJvbUJhc2U2NCIsInZhbHVlIiwiYnVmZiIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsInJlcSIsInJlcyIsInVzZVNlcnZpY2VBY2NvdW50QXV0aCIsImNsaWVudF9lbWFpbCIsIlNIRUVUX0NMSUVOVF9FTUFJTCIsInByaXZhdGVfa2V5IiwiU0hFRVRfUFJJVkFURV9LRVkiLCJsb2FkSW5mbyIsInNoZWV0Iiwic2hlZXRzQnlJbmRleCIsImxvYWRDZWxscyIsIm1vc3RyYXJQcm9tb2Nhb0NlbGwiLCJnZXRDZWxsIiwidGV4dG9DZWxsIiwiZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInNob3dDb3Vwb24iLCJtZXNzYWdlIiwiZXJyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLEdBQUcsR0FBRyxJQUFJQyxvRUFBSixDQUFzQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFlBQWxDLENBQVo7O0FBRUEsTUFBTUMsVUFBVSxHQUFHQyxLQUFLLElBQUk7QUFDMUIsUUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUgsS0FBWixFQUFtQixRQUFuQixDQUFiO0FBQ0EsU0FBT0MsSUFBSSxDQUFDRyxRQUFMLENBQWMsT0FBZCxDQUFQO0FBQ0QsQ0FIRDs7QUFLZSxzRUFBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLE1BQUk7QUFDSDtBQUNDLFVBQU1aLEdBQUcsQ0FBQ2EscUJBQUosQ0FBMEI7QUFDOUJDLGtCQUFZLEVBQUVaLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWSxrQkFESTtBQUU5QkMsaUJBQVcsRUFBRVgsVUFBVSxDQUFDSCxPQUFPLENBQUNDLEdBQVIsQ0FBWWMsaUJBQWI7QUFGTyxLQUExQixDQUFOO0FBSUEsVUFBTWpCLEdBQUcsQ0FBQ2tCLFFBQUosRUFBTjtBQUVBLFVBQU1DLEtBQUssR0FBR25CLEdBQUcsQ0FBQ29CLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBZDtBQUNBLFVBQU1ELEtBQUssQ0FBQ0UsU0FBTixDQUFnQixPQUFoQixDQUFOO0FBRUEsVUFBTUMsbUJBQW1CLEdBQUdILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FBNUI7QUFFQSxVQUFNQyxTQUFTLEdBQUdMLEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FBbEI7QUFFQVgsT0FBRyxDQUFDYSxHQUFKLENBQ0VDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2JDLGdCQUFVLEVBQUVOLG1CQUFtQixDQUFDaEIsS0FBcEIsS0FBOEIsWUFEN0I7QUFFYnVCLGFBQU8sRUFBRUwsU0FBUyxDQUFDbEI7QUFGTixLQUFmLENBREY7QUFNRCxHQXJCRCxDQXFCRSxPQUFPd0IsR0FBUCxFQUFZO0FBQ1psQixPQUFHLENBQUNhLEdBQUosQ0FDRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDYkMsZ0JBQVUsRUFBRSxLQURDO0FBRWJDLGFBQU8sRUFBRTtBQUZJLEtBQWYsQ0FERjtBQU1EO0FBQ0YsQ0E5QkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2V0LXByb21vLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29vZ2xlU3ByZWFkc2hlZXQgfSBmcm9tIFwiZ29vZ2xlLXNwcmVhZHNoZWV0XCI7XG5cbmNvbnN0IGRvYyA9IG5ldyBHb29nbGVTcHJlYWRzaGVldChwcm9jZXNzLmVudi5TSEVFVF9ET0NfSUQpO1xuXG5jb25zdCBmcm9tQmFzZTY0ID0gdmFsdWUgPT4ge1xuICBjb25zdCBidWZmID0gQnVmZmVyLmZyb20odmFsdWUsICdiYXNlNjQnKVxuICByZXR1cm4gYnVmZi50b1N0cmluZygnYXNjaWknKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgIC8vIGF3YWl0IGRvYy51c2VTZXJ2aWNlQWNjb3VudEF1dGgoY3JlZGVudGlhbHMpO1xuICAgIGF3YWl0IGRvYy51c2VTZXJ2aWNlQWNjb3VudEF1dGgoe1xuICAgICAgY2xpZW50X2VtYWlsOiBwcm9jZXNzLmVudi5TSEVFVF9DTElFTlRfRU1BSUwsXG4gICAgICBwcml2YXRlX2tleTogZnJvbUJhc2U2NChwcm9jZXNzLmVudi5TSEVFVF9QUklWQVRFX0tFWSlcbiAgICB9KVxuICAgIGF3YWl0IGRvYy5sb2FkSW5mbygpO1xuXG4gICAgY29uc3Qgc2hlZXQgPSBkb2Muc2hlZXRzQnlJbmRleFsyXTtcbiAgICBhd2FpdCBzaGVldC5sb2FkQ2VsbHMoXCJBMzpCM1wiKTtcblxuICAgIGNvbnN0IG1vc3RyYXJQcm9tb2Nhb0NlbGwgPSBzaGVldC5nZXRDZWxsKDIsIDApO1xuXG4gICAgY29uc3QgdGV4dG9DZWxsID0gc2hlZXQuZ2V0Q2VsbCgyLCAxKTtcblxuICAgIHJlcy5lbmQoXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHNob3dDb3Vwb246IG1vc3RyYXJQcm9tb2Nhb0NlbGwudmFsdWUgPT09IFwiVkVSREFERUlST1wiLFxuICAgICAgICBtZXNzYWdlOiB0ZXh0b0NlbGwudmFsdWUsXG4gICAgICB9KVxuICAgICk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJlcy5lbmQoXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHNob3dDb3Vwb246IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlwiLFxuICAgICAgfSlcbiAgICApO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/get-promo.js\n");

/***/ }),

/***/ 4:
/*!**************************************!*\
  !*** multi ./pages/api/get-promo.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/elian/Projeto-PalpiteBox/pages/api/get-promo.js */"./pages/api/get-promo.js");


/***/ }),

/***/ "google-spreadsheet":
/*!*************************************!*\
  !*** external "google-spreadsheet" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"google-spreadsheet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnb29nbGUtc3ByZWFkc2hlZXRcIj80MTkzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imdvb2dsZS1zcHJlYWRzaGVldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdvb2dsZS1zcHJlYWRzaGVldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///google-spreadsheet\n");

/***/ })

/******/ });