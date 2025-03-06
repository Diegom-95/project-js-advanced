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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n  font-family: 'Nunito' sans-serif;\r\n  background: linear-gradient(135deg, #e0f2f7 #f0f8ff);\r\n  margin:0;\r\n  padding:0;\r\n  display:flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  min-height: 100vh;\r\n  overflow-x: hidden;\r\n  color: #333\r\n}\r\n\r\n/* LOGO*/\r\n\r\n.logo-container {\r\n  text-align: center;\r\n  padding: 15px 0;\r\n  width: 100%;\r\n  margin-top: 45px;\r\n}\r\n\r\n.logo {\r\n  max-width: 500px;\r\n  height: auto;\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\n\r\n/* MAIN*/\r\n\r\n.container {\r\n  text-align: center;\r\n  background-color: rgba(255, 255, 255, 0.9);\r\n  padding: 60px;\r\n  border-radius: 25px;\r\n  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.18);\r\n  width: 90%;\r\n  max-width: 1200px;\r\n  transition: all 0.3s ease-in-out;\r\n  margin-top: 20px;\r\n}\r\n\r\n.container:hover {\r\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nheader {\r\n  margin-bottom: 50px;\r\n}\r\n\r\nh1 {\r\n  font-size: 3rem;\r\n  font-weight: 700;\r\n  color: #2c3e50;\r\n  margin-bottom: 30px;\r\n  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);\r\n}\r\n\r\n.search-bar {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n#category {\r\n  padding: 16px 30px;\r\n  font-size: 1.2rem;\r\n  border: 2px solid #d1d1d1;\r\n  border-radius: 35px;\r\n  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.08);\r\n  width: 70%;\r\n  max-width: 500px;\r\n  margin-right: 20px;\r\n  transition: border-color 0.3s, box-shadow 0.3s;\r\n}\r\n\r\n#category:focus {\r\n  border-color: #3498db;\r\n  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1), 0 0 0 3px rgba(52, 152, 219, 0.15);\r\n  outline: none;\r\n}\r\n\r\n\r\nbutton {\r\n  padding: 16px 35px;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n  background: linear-gradient(135deg, #3498db, #2980b9);\r\n  color: white;\r\n  border: none;\r\n  border-radius: 35px;\r\n  transition: background 0.3s, transform 0.3s;\r\n  font-weight: 600;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\nbutton:hover {\r\n  background: linear-gradient(135deg, #2980b9, #1f618d);\r\n  transform: scale(1.03);\r\n}\r\n\r\n/* BOOKS*/\r\n\r\n#booksList {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n  gap: 60px; /* Aumentato il gap tra le colonne e le righe */\r\n  justify-items: center;\r\n  margin-top: 50px;\r\n}\r\n\r\n.book-item {\r\n  width: 100%;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  color: #3498db;\r\n  transition: transform 0.3s, box-shadow 0.3s;\r\n  border-radius: 15px;\r\n  padding: 20px;\r\n  background-color: rgba(255, 255, 255, 0.95);\r\n  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.12);\r\n  margin: 15px; /* Aggiunto margine esterno per separare ulteriormente gli elementi */\r\n}\r\n\r\n.book-item:hover {\r\n  transform: translateY(-8px);\r\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);\r\n  text-decoration: none;\r\n}\r\n\r\n.book-item img {\r\n  width: 200px;\r\n  height: 300px;\r\n  object-fit: cover;\r\n  margin-bottom: 20px;\r\n  border-radius: 12px;\r\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n#loadMoreBtn {\r\n  margin-top: 50px;\r\n  padding: 18px 40px;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n  background: linear-gradient(135deg, #27ae60, #219653);\r\n  color: white;\r\n  border: none;\r\n  border-radius: 35px;\r\n  transition: background 0.3s, transform 0.3s;\r\n  display: block;\r\n  margin: 50px auto 0;\r\n  font-weight: 600;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n#loadMoreBtn:hover {\r\n  background: linear-gradient(135deg, #219653, #1e8449);\r\n  transform: scale(1.03);\r\n}\r\n\r\n\r\n/* POPUP*/\r\n\r\n#bookPopup {\r\n  display: none;\r\n  position: fixed;\r\n  top: 0; \r\n  left: 0; \r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.6); \r\n  z-index: 10000;\r\n}\r\n\r\n#bookPopupContent {\r\n  background-color: rgba(255, 255, 255, 0.98);\r\n  padding: 25px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);\r\n  width: 90%;\r\n  max-width: 600px;\r\n  text-align: left;\r\n  position: absolute; \r\n  top: 50%; \r\n  left: 50%; \r\n  transform: translate(-50%, -50%); \r\n  color: #333;\r\n  overflow-y: auto;\r\n  max-height: 70vh;\r\n  font-size: 1rem;\r\n  line-height: 1.6;\r\n  word-wrap: break-word;\r\n}\r\n\r\n#bookPopupContent h2 {\r\n  font-size: 1.6rem; \r\n  font-weight: 600;\r\n  color: #2c3e50;\r\n  margin-bottom: 20px;\r\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);\r\n  text-align: left; \r\n}\r\n\r\n#bookPopupContent p {\r\n  font-size: 1rem;\r\n  line-height: 1.6;\r\n  margin-bottom: 20px; \r\n  word-wrap: break-word;\r\n}\r\n\r\n.closePopup {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 20px;\r\n  cursor: pointer;\r\n  font-size: 30px;\r\n  color: #555;\r\n  transition: color 0.3s;\r\n}\r\n\r\n.closePopup:hover {\r\n  color: #3498db;\r\n}\r\n\r\n\r\n/* MEDIA QUERY*/\r\n\r\n/* TABLET*/\r\n@media (max-width: 768px) {\r\n  .logo {\r\n      max-width: 300px; \r\n  }\r\n\r\n  .container {\r\n      padding: 40px;  \r\n      width: 95%; \r\n  }\r\n\r\n  h1 {\r\n      font-size: 2.5rem; \r\n  }\r\n\r\n  #category {\r\n      font-size: 1rem; \r\n  }\r\n\r\n  button {\r\n      font-size: 1rem; \r\n  }\r\n}\r\n\r\n/* Footer */\r\nfooter {\r\n  text-align: center;\r\n  margin-top: 50px;\r\n  padding: 10px 0;\r\n  width: 100%;\r\n  font-size: 1rem;\r\n  background-color: #f1f1f1;\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n\r\n.github-link {\r\n  font-size: 1.2rem;\r\n  color: #333;\r\n  text-decoration: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n\r\n.github-link i {\r\n  font-size: 1.5rem;\r\n  color: #333;\r\n  transition: color 0.3s;\r\n}\r\n\r\n\r\n.github-link:hover i {\r\n  color: #3498db;\r\n}\r\n\r\n\r\n.github-link:hover {\r\n  color: #3498db;\r\n}\r\n\r\n\r\n/* MOBILE */\r\n@media (max-width: 480px) {\r\n  .logo {\r\n      max-width: 200px; \r\n  }\r\n\r\n  .container {\r\n      padding: 30px; \r\n      width: 98%; \r\n  }\r\n\r\n  h1 {\r\n      font-size: 2rem; \r\n  }\r\n\r\n  #category {\r\n      font-size: 0.9rem; \r\n      padding: 12px 20px; \r\n  }\r\n\r\n  button {\r\n      font-size: 0.9rem; \r\n      padding: 12px 25px; \r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-official/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-official/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-official/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-official/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-official/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-official/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-official/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-official/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-official/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-official/./src/css/style.css?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n\r\n\r\nlet currentPage = 1;\r\nlet currentCategory = \"\";\r\nlet allBooks = [];\r\n\r\n// Popup creation\r\nconst bookPopup = document.createElement('div');\r\nbookPopup.id = 'bookPopup';\r\nbookPopup.style.display = 'none';\r\nbookPopup.innerHTML = `\r\n    <div id=\"bookPopupContent\">\r\n        <span class=\"closePopup\">&times;</span>\r\n        <div id=\"popupDetails\"></div>\r\n    </div>\r\n`;\r\ndocument.body.appendChild(bookPopup);\r\n\r\n\r\n// Closing Popup\r\nbookPopup.addEventListener('click', (e) => {\r\n    if (e.target.id === 'bookPopup' || e.target.classList.contains('closePopup')) {\r\n        bookPopup.style.display = 'none';\r\n    }\r\n});\r\n\r\n\r\n// Search functionality\r\ndocument.getElementById('searchBtn').addEventListener('click', function() {\r\n    const category = document.getElementById('category').value.trim().toLowerCase();\r\n    if (category === \"\") {\r\n        alert(\"Please enter a category.\");\r\n        return;\r\n    }\r\n    currentCategory = category;\r\n    currentPage = 1;\r\n    allBooks = [];\r\n    fetchBooks(category, currentPage);\r\n});\r\n\r\n// Loading multiple books\r\ndocument.getElementById('loadMoreBtn').addEventListener('click', function() {\r\n    currentPage++;\r\n    fetchBooks(currentCategory, currentPage);\r\n});\r\n\r\n\r\n// API request\r\nfunction fetchBooks(category, page) {\r\n    if (page === 1) {\r\n        document.getElementById('booksList').innerHTML = '';\r\n    }\r\n    const url = `https://openlibrary.org/subjects/${category}.json?page=${page}`;\r\n    axios.get(url).then((response) => {\r\n        const books = response.data.works;\r\n        if (books && books.length > 0) {\r\n            allBooks = [...allBooks, ...books];\r\n            displayBooks(allBooks);\r\n            document.getElementById('loadMoreBtn').style.display = \"block\";\r\n        } else {\r\n            document.getElementById('booksList').innerHTML = \"No books found for this category.\";\r\n            document.getElementById('loadMoreBtn').style.display = \"none\";\r\n        }\r\n    }).catch((error) => console.error(\"API request error:\", error));\r\n}\r\n\r\n// Viewing books\r\nfunction displayBooks(books) {\r\n    const booksList = document.getElementById('booksList');\r\n    const booksToDisplay = books.slice(0, currentPage * 32);\r\n    booksToDisplay.forEach((book) => {\r\n        const bookItem = document.createElement('div');\r\n        bookItem.classList.add('book-item');\r\n        const bookTitle = document.createElement('div');\r\n        bookTitle.textContent = `${book.title} - ${book.authors.map(author => author.name).join(', ')}`;\r\n        bookItem.appendChild(bookTitle);\r\n        if (book.cover_id) {\r\n            const coverImage = document.createElement('img');\r\n            coverImage.src = `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`;\r\n            bookItem.appendChild(coverImage);\r\n        }\r\n        bookItem.addEventListener('click', function() {\r\n            fetchBookDetails(book.key);\r\n        });\r\n        booksList.appendChild(bookItem);\r\n    });\r\n    if (booksToDisplay.length >= allBooks.length) {\r\n        document.getElementById('loadMoreBtn').style.display = \"none\";\r\n    }\r\n}\r\n\r\n\r\nfunction fetchBookDetails(bookKey) {\r\n    const url = `https://openlibrary.org${bookKey}.json`;\r\n    axios.get(url).then((response) => {\r\n        const book = response.data;\r\n        console.log(book); \r\n        \r\n        let authors = \"Author not available\";\r\n        if (book.authors && Array.isArray(book.authors) && book.authors.length > 0) {\r\n            const authorKey = book.authors[0].author.key; \r\n            axios.get(`https://openlibrary.org${authorKey}.json`).then((authorResponse) => {\r\n                const authorName = authorResponse.data.name;\r\n                authors = authorName ? authorName : \"Author not available\";\r\n                displayBookDetails(book, authors);\r\n            }).catch((error) => console.error(\"Error retrieving author details:\", error));\r\n        } else {\r\n            displayBookDetails(book, authors);\r\n        }\r\n    }).catch((error) => console.error(\"Error requesting book details:\", error));\r\n}\r\n\r\n\r\nfunction displayBookDetails(book, authors) {\r\n    let description = book.description;\r\n    if (typeof description === 'object' && description !== null && description.value) {\r\n        description = description.value;\r\n    }\r\n    description = description || \"Description not available\";\r\n\r\n\r\n    const details = `\r\n        <h2>${book.title}</h2>\r\n        <p><strong>Authors:</strong> ${authors}</p>\r\n        <p><strong>Description:</strong> ${description}</p>\r\n    `;\r\n\r\n\r\n    const popupDetails = document.getElementById('popupDetails');\r\n    if (popupDetails) {\r\n        popupDetails.innerHTML = details;\r\n    } else {\r\n        console.error(\"Element 'popupDetails' not found.\");\r\n    }\r\n\r\n\r\n    const bookPopup = document.getElementById('bookPopup');\r\n    if (bookPopup) {\r\n        bookPopup.style.display = 'block';\r\n    } else {\r\n        console.error(\"Element 'popupDetails' not found.\");\r\n    }\r\n}\r\n\r\n\r\ndocument.addEventListener('click', function(event) {\r\n    if (event.target.classList.contains('closePopup')) {\r\n        document.getElementById('bookPopup').style.display = 'none';\r\n    }\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-official/./src/js/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;