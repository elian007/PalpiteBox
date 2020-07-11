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

/***/ "./credentials.json":
/*!**************************!*\
  !*** ./credentials.json ***!
  \**************************/
/*! exports provided: type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"type\\\":\\\"service_account\\\",\\\"project_id\\\":\\\"palpitebox-282717\\\",\\\"private_key_id\\\":\\\"b95d07d1499d98c2ee82cb4296204c5ded79bbf9\\\",\\\"private_key\\\":\\\"-----BEGIN PRIVATE KEY-----\\\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCrixyoZQgO5hbr\\\\n6ZznYqekKKF+CIEI34Kc7Njp2x5cFr+PZnSv9mKWpC3KHwnAsfZNvN5nAWlLVaCg\\\\njO0bsGZHgSTi4giw2D0HXe5v2Y24/32Qm76c78cpb5xcEEWegdMTBKMIbuzandl/\\\\nUNpNabIe3m2ZMgugySSLQ7RGUuEg6zYrTv7qJ5KUwt1FlbpN8STL47yNEv3HznEI\\\\nrs/xRrjoP7WgjTb3rHbBApeeUGxO6YsKllWa+T38vU0diT00/5zd0JXawswieBZa\\\\ngX5kzHLmpmyvUIqcJT2ZNVq9da+lv0zvFRtDFyGr+vTVz2dO9WggPHhS0ZILh+rZ\\\\n0J5fyQnJAgMBAAECggEAIk5rWEgAQQ6F5f8t2F5z/VH83fowaAhfFCgPx1EBdNQ9\\\\n0h1g17H0DIFgAOyNJELS6cAMUFhJaP4CZilY3/E6uzEaId+nckqEhf0kiqzc+XLq\\\\n9ykWiUcwsto10HmWmrkG7+Y8/ppEdwIbdalDRzkMnLzJ+Vm3VpvzWYCcRHYdvNnJ\\\\nfgpYttHgiL21oXr6JDCNGnERapwLLyIGEH7pxhxI/S29QhySKBN1yYM/q+SXOlRX\\\\n7cLFS8S4J9h5Z8TA1YpkiPaC197wQxujtDYg/qCsFb/D5722rjxmqkIQoPwfQdqZ\\\\naLvRXCJuagDIiG68ulRXp2I67zZXGFB2hViznwbiiQKBgQDXFK7SO+pPzeHISuTF\\\\nLZLJFpdlJXr0GWIz3hvHUNS9Rt+dQ1NBUVHM8vtVClxrWFVvrfIxdKIcoPauesRm\\\\nphVPO9O5NQxly5+3PU3ucE1MsR76n5XTjrmHmASNHkgx2iADevEcRE7xcyh+/+83\\\\niJbVQoWCg5d1GGPN7GGYKLZzBQKBgQDMLfrMpZgvwAdFJGZ8/+Rzk6kGYZknunNd\\\\nRuqIeZMoFioM8NDU3yvbWVd8QQiPI+vexUqTJCmGHVQd0MssoZ9suyJ5oXLuwHpO\\\\nxLkwQGfaU+KcCUWIV4jQ5cNHMJc5h88Tyr4LojF3ax+pNf+mZyhrtYx9o18j63a3\\\\n4YE/oDb+9QKBgQCjc39sG8Z0wYS9n1T+GCU+FqIVZwdqrEO6IShBL8eM1Gip7fk+\\\\nYVtmAp5IQWh815OOHMY7GWT9lsIBVSEe1UbKgS/kx1DVp4qISdmIw+Wqy8w8ML0/\\\\nGm8agcerqwC4igjcPDkx/yNzUM3MvhmAvZfLGBO4XOLkRRXL78E3TnFhNQKBgBt8\\\\nHQSrTd8vpErkaX9uGtyMBfa78Jfue1UVFMEmTG7a/PIdAJ+HIyo1zpcFUheiqD+m\\\\nozFHbueEzyvsTU1GvGUwk6V33DbTZiNwS9V49gHnxNtoTBncXqhwJWdR3Sl7ZJ6v\\\\nbgG25Z3Dp9FpWW6W+FP3bmADO+1j5uk9y946vOx5AoGBAMRqB7S/Qa3506Oj5tEp\\\\ndPmK07urrt7DtO75bjqS3nMOQ+mPn3ef9LWoeAw3VgID30dmiLTp1RTgbUxK+VW7\\\\ntSSzZbZlAi1U6dS/i9c1ZZiHSLGXgR3zO3v62dLRZ1glyQ5SebC0FtriA5LhNeaU\\\\n4SuRhtycLy/+IguZYhUZacfo\\\\n-----END PRIVATE KEY-----\\\\n\\\",\\\"client_email\\\":\\\"palpitebox@palpitebox-282717.iam.gserviceaccount.com\\\",\\\"client_id\\\":\\\"112335637804981436950\\\",\\\"auth_uri\\\":\\\"https://accounts.google.com/o/oauth2/auth\\\",\\\"token_uri\\\":\\\"https://oauth2.googleapis.com/token\\\",\\\"auth_provider_x509_cert_url\\\":\\\"https://www.googleapis.com/oauth2/v1/certs\\\",\\\"client_x509_cert_url\\\":\\\"https://www.googleapis.com/robot/v1/metadata/x509/palpitebox%40palpitebox-282717.iam.gserviceaccount.com\\\"}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NyZWRlbnRpYWxzLmpzb24uanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./credentials.json\n");

/***/ }),

/***/ "./pages/api/get-promo.js":
/*!********************************!*\
  !*** ./pages/api/get-promo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-spreadsheet */ \"google-spreadsheet\");\n/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _credentials_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../credentials.json */ \"./credentials.json\");\nvar _credentials_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../credentials.json */ \"./credentials.json\", 1);\n\n\nconst doc = new google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__[\"GoogleSpreadsheet\"](\"1G_U7ODPp3tY22lO5fhURhxCtos6VAvQcGUJvRMsX1eE\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  try {\n    await doc.useServiceAccountAuth(_credentials_json__WEBPACK_IMPORTED_MODULE_1__);\n    await doc.loadInfo();\n    const sheet = doc.sheetsByIndex[2];\n    await sheet.loadCells(\"A3:B3\");\n    const mostrarPromocaoCell = sheet.getCell(2, 0);\n    const textoCell = sheet.getCell(2, 1);\n    res.end(JSON.stringify({\n      showCoupon: mostrarPromocaoCell.value === \"VERDADEIRO\",\n      message: textoCell.value\n    }));\n  } catch (err) {\n    res.end(JSON.stringify({\n      showCoupon: false,\n      message: \"\"\n    }));\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ2V0LXByb21vLmpzPzYwNDIiXSwibmFtZXMiOlsiZG9jIiwiR29vZ2xlU3ByZWFkc2hlZXQiLCJyZXEiLCJyZXMiLCJ1c2VTZXJ2aWNlQWNjb3VudEF1dGgiLCJjcmVkZW50aWFscyIsImxvYWRJbmZvIiwic2hlZXQiLCJzaGVldHNCeUluZGV4IiwibG9hZENlbGxzIiwibW9zdHJhclByb21vY2FvQ2VsbCIsImdldENlbGwiLCJ0ZXh0b0NlbGwiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2hvd0NvdXBvbiIsInZhbHVlIiwibWVzc2FnZSIsImVyciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQSxNQUFNQSxHQUFHLEdBQUcsSUFBSUMsb0VBQUosQ0FDViw4Q0FEVSxDQUFaO0FBSWUsc0VBQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNqQyxNQUFJO0FBQ0YsVUFBTUgsR0FBRyxDQUFDSSxxQkFBSixDQUEwQkMsOENBQTFCLENBQU47QUFDQSxVQUFNTCxHQUFHLENBQUNNLFFBQUosRUFBTjtBQUVBLFVBQU1DLEtBQUssR0FBR1AsR0FBRyxDQUFDUSxhQUFKLENBQWtCLENBQWxCLENBQWQ7QUFDQSxVQUFNRCxLQUFLLENBQUNFLFNBQU4sQ0FBZ0IsT0FBaEIsQ0FBTjtBQUVBLFVBQU1DLG1CQUFtQixHQUFHSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLENBQTVCO0FBRUEsVUFBTUMsU0FBUyxHQUFHTCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLENBQWxCO0FBRUFSLE9BQUcsQ0FBQ1UsR0FBSixDQUNFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNiQyxnQkFBVSxFQUFFTixtQkFBbUIsQ0FBQ08sS0FBcEIsS0FBOEIsWUFEN0I7QUFFYkMsYUFBTyxFQUFFTixTQUFTLENBQUNLO0FBRk4sS0FBZixDQURGO0FBTUQsR0FqQkQsQ0FpQkUsT0FBT0UsR0FBUCxFQUFZO0FBQ1poQixPQUFHLENBQUNVLEdBQUosQ0FDRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDYkMsZ0JBQVUsRUFBRSxLQURDO0FBRWJFLGFBQU8sRUFBRTtBQUZJLEtBQWYsQ0FERjtBQU1EO0FBQ0YsQ0ExQkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2V0LXByb21vLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29vZ2xlU3ByZWFkc2hlZXQgfSBmcm9tIFwiZ29vZ2xlLXNwcmVhZHNoZWV0XCI7XG5cbmltcG9ydCBjcmVkZW50aWFscyBmcm9tIFwiLi4vLi4vY3JlZGVudGlhbHMuanNvblwiO1xuXG5jb25zdCBkb2MgPSBuZXcgR29vZ2xlU3ByZWFkc2hlZXQoXG4gIFwiMUdfVTdPRFBwM3RZMjJsTzVmaFVSaHhDdG9zNlZBdlFjR1VKdlJNc1gxZUVcIlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgZG9jLnVzZVNlcnZpY2VBY2NvdW50QXV0aChjcmVkZW50aWFscyk7XG4gICAgYXdhaXQgZG9jLmxvYWRJbmZvKCk7XG5cbiAgICBjb25zdCBzaGVldCA9IGRvYy5zaGVldHNCeUluZGV4WzJdO1xuICAgIGF3YWl0IHNoZWV0LmxvYWRDZWxscyhcIkEzOkIzXCIpO1xuXG4gICAgY29uc3QgbW9zdHJhclByb21vY2FvQ2VsbCA9IHNoZWV0LmdldENlbGwoMiwgMCk7XG5cbiAgICBjb25zdCB0ZXh0b0NlbGwgPSBzaGVldC5nZXRDZWxsKDIsIDEpO1xuXG4gICAgcmVzLmVuZChcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgc2hvd0NvdXBvbjogbW9zdHJhclByb21vY2FvQ2VsbC52YWx1ZSA9PT0gXCJWRVJEQURFSVJPXCIsXG4gICAgICAgIG1lc3NhZ2U6IHRleHRvQ2VsbC52YWx1ZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLmVuZChcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgc2hvd0NvdXBvbjogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiXCIsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/get-promo.js\n");

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