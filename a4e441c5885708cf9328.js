/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './assets/styles/style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ \"./src/scripts/keys.js\");\n\r\n\r\n\r\nconst keyboardButtons = [\r\n  \"Backquote\", \"Digit1\", \"Digit2\", \"Digit3\", \"Digit4\", \"Digit5\", \"Digit6\", \"Digit7\", \"Digit8\", \"Digit9\", \"Digit0\", \"Minus\", \"Equal\", \"Backspace\",\r\n  \"Tab\", \"KeyQ\", \"KeyW\", \"KeyE\", \"KeyR\", \"KeyT\", \"KeyY\", \"KeyU\", \"KeyI\", \"KeyO\", \"KeyP\", \"BracketLeft\", \"BracketRight\", \"Delete\",\r\n  \"CapsLock\", \"KeyA\", \"KeyS\", \"KeyD\", \"KeyF\", \"KeyG\", \"KeyH\", \"KeyJ\", \"KeyK\", \"KeyL\", \"Semicolon\", \"Quote\", \"Enter\",\r\n  \"ShiftLeft\", \"Backslash\", \"KeyZ\", \"KeyX\", \"KeyC\", \"KeyV\", \"KeyB\", \"KeyN\", \"KeyM\", \"Comma\", \"Period\", \"Slash\", \"ArrowUp\", \"ShiftRight\",\r\n  \"ControlLeft\", \"MetaLeft\", \"AltLeft\", \"Space\", \"AltRight\", \"ControlRight\", \"ArrowLeft\", \"ArrowDown\", \"ArrowRight\"\r\n];\r\n\r\nconst keyboardButtonsFunctional = [\r\n  \"Backquote\", \"Backspace\", \"Tab\", \"Delete\", \"CapsLock\", \"Enter\", \"ShiftLeft\", \"ArrowUp\", \"ShiftRight\", \"ControlLeft\", \"MetaLeft\", \"AltLeft\", \"AltRight\", \"ControlRight\", \"ArrowLeft\", \"ArrowDown\", \"ArrowRight\"\r\n]\r\n\r\n/*document.addEventListener('keydown', function (event) {\r\n  let key;\r\n  let code;\r\n  key = event.key;\r\n  code = event.code;\r\n  console.log(code);\r\n  keyBoardObject[code] = key;\r\n  console.log(keyBoardObject);\r\n})*/\r\n\r\nlet wrapper = document.createElement('div');\r\nwrapper.className = \"wrapper\";\r\ndocument.body.append(wrapper);\r\n\r\nwrapper.insertAdjacentHTML('afterbegin', '<textarea class=\"output\" name=\"output\" cols=\"147\" rows=\"10\" placeholder=\"Start tipping\"></textarea>');\r\n\r\nlet keyboardContainer = document.createElement('div');\r\nkeyboardContainer.className = \"keyboardContainer\";\r\nwrapper.append(keyboardContainer);\r\n\r\nconst createKeyBoard = () => {\r\n  let result = '';\r\n  for (let i = 0; i < keyboardButtons.length; i++){\r\n    if(\r\n      keyboardButtons[i] === \"Backquote\" ||\r\n      keyboardButtons[i] === \"Backspace\" || \r\n      keyboardButtons[i] === \"Tab\" || \r\n      keyboardButtons[i] === \"Delete\" || \r\n      keyboardButtons[i] === \"CapsLock\" ||\r\n      keyboardButtons[i] === \"Enter\" ||\r\n      keyboardButtons[i] === \"ShiftLeft\" || \r\n      keyboardButtons[i] === \"ArrowUp\" || \r\n      keyboardButtons[i] === \"ShiftRight\" ||\r\n      keyboardButtons[i] === \"ControlLeft\" || \r\n      keyboardButtons[i] === \"MetaLeft\" || \r\n      keyboardButtons[i] === \"AltLeft\" || \r\n      keyboardButtons[i] === \"AltRight\" || \r\n      keyboardButtons[i] === \"ControlRight\" || \r\n      keyboardButtons[i] === \"ArrowLeft\" || \r\n      keyboardButtons[i] === \"ArrowDown\" || \r\n      keyboardButtons[i] === \"ArrowRight\"\r\n    ) {\r\n      if (\r\n        keyboardButtons[i] === \"Backspace\" ||\r\n        keyboardButtons[i] === \"Enter\" \r\n      ) {\r\n        result += `<div class='button functional_buttons functional_buttons_flexGrowDouble' data='${keyboardButtons[i]}'>${_keys_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][keyboardButtons[i]]}</div>`\r\n      } else if (\r\n        keyboardButtons[i] === \"Tab\" || \r\n        keyboardButtons[i] === \"Delete\" || \r\n        keyboardButtons[i] === \"ControlLeft\" || \r\n        keyboardButtons[i] === \"ControlRight\"\r\n      ) {\r\n        result += `<div class='button functional_buttons functional_buttons_flexGrowOneHalf' data='${keyboardButtons[i]}'>${_keys_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][keyboardButtons[i]]}</div>`\r\n      } else if (keyboardButtons[i] === \"CapsLock\") {\r\n        result += `<div class='button functional_buttons capsLock_button' data='${keyboardButtons[i]}'>${_keys_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][keyboardButtons[i]]}</div>`\r\n      } else if (keyboardButtons[i] === \"ShiftLeft\") {\r\n        result += `<div class='button functional_buttons shiftLeft_button' data='${keyboardButtons[i]}'>${_keys_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][keyboardButtons[i]]}</div>`\r\n      } else if (keyboardButtons[i] === \"ShiftRight\") {\r\n        result += `<div class='button functional_buttons' data='${keyboardButtons[i]}'>${_keys_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][keyboardButtons[i]]}</div>`\r\n      } else {\r\n        result += `<div class='button functional_buttons' data='${keyboardButtons[i]}'>${_keys_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][keyboardButtons[i]]}</div>`\r\n      }   \r\n    } else if (keyboardButtons[i] === \"Space\") {\r\n      result += `<div class='button space_button' data='${keyboardButtons[i]}'>${_keys_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][keyboardButtons[i]]}</div>`\r\n    } else {\r\n      result += `<div class='button' data='${keyboardButtons[i]}'>${_keys_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][keyboardButtons[i]]}</div>`\r\n    }\r\n\r\n  }\r\n  keyboardContainer.insertAdjacentHTML('beforeend', result);\r\n}\r\n\r\ncreateKeyBoard();\r\n\r\ndocument.addEventListener('keydown', function (event) {\r\n  document.querySelector(`.keyboardContainer .button[data='${event.code}']`).classList.add('active');\r\n});\r\n\r\ndocument.addEventListener('keyup', function (event) {\r\n  document.querySelector(`.keyboardContainer .button[data='${event.code}']`).classList.remove('active');\r\n});\r\n\n\n//# sourceURL=webpack://virtual_keyboard/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/keys.js":
/*!*****************************!*\
  !*** ./src/scripts/keys.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst keyBoardObject = {\r\n  \"Backquote\": \"`\",\r\n  \"Digit1\": \"1\",\r\n  \"Digit2\": \"2\",\r\n  \"Digit3\": \"3\",\r\n  \"Digit4\": \"4\",\r\n  \"Digit5\": \"5\",\r\n  \"Digit6\": \"6\",\r\n  \"Digit7\": \"7\",\r\n  \"Digit8\": \"8\",\r\n  \"Digit9\": \"9\",\r\n  \"Digit0\": \"0\",\r\n  \"Minus\": \"-\",\r\n  \"Equal\": \"=\",\r\n  \"Backspace\": \"Backspace\",\r\n  \"Tab\": \"Tab\",\r\n  \"KeyQ\": \"q\",\r\n  \"KeyW\": \"w\",\r\n  \"KeyE\": \"e\",\r\n  \"KeyR\": \"r\",\r\n  \"KeyT\": \"t\",\r\n  \"KeyY\": \"y\",\r\n  \"KeyU\": \"u\",\r\n  \"KeyI\": \"i\",\r\n  \"KeyO\": \"o\",\r\n  \"KeyP\": \"p\",\r\n  \"BracketLeft\": \"[\",\r\n  \"BracketRight\": \"]\",\r\n  \"Delete\": \"Delete\",\r\n  \"CapsLock\": \"CapsLock\",\r\n  \"KeyA\": \"a\",\r\n  \"KeyS\": \"s\",\r\n  \"KeyD\": \"d\",\r\n  \"KeyF\": \"f\",\r\n  \"KeyG\": \"g\",\r\n  \"KeyH\": \"h\",\r\n  \"KeyJ\": \"j\",\r\n  \"KeyK\": \"k\",\r\n  \"KeyL\": \"l\",\r\n  \"Semicolon\": \";\",\r\n  \"Quote\": \"'\",\r\n  \"Enter\": \"Enter\",\r\n  \"ShiftLeft\": \"Shift\",\r\n  \"Backslash\": \"\\\\\",\r\n  \"KeyZ\": \"z\",\r\n  \"KeyX\": \"x\",\r\n  \"KeyC\": \"c\",\r\n  \"KeyV\": \"v\",\r\n  \"KeyB\": \"b\",\r\n  \"KeyN\": \"n\",\r\n  \"KeyM\": \"m\",\r\n  \"Comma\": \",\",\r\n  \"Period\": \".\",\r\n  \"Slash\": \"/\",\r\n  \"ArrowUp\": \"↑\",\r\n  \"ShiftRight\": \"Shift\",\r\n  \"ControlLeft\": \"Control\",\r\n  \"MetaLeft\": \"Meta\",\r\n  \"AltLeft\": \"Alt\",\r\n  \"Space\": \" \",\r\n  \"AltRight\": \"Alt\",\r\n  \"ControlRight\": \"Control\",\r\n  \"ArrowLeft\": \"←\",\r\n  \"ArrowDown\": \"↓\",\r\n  \"ArrowRight\": \"→\"\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyBoardObject);\n\n//# sourceURL=webpack://virtual_keyboard/./src/scripts/keys.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;