"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Post.tsx":
/*!*********************************!*\
  !*** ./src/components/Post.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comment */ \"./src/components/Comment.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Post = (param)=>{\n    let { title, body } = param;\n    _s();\n    const [isClicked, setIsClicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // TODO: Implement a component representing an already existing post\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        width: \"100%\",\n        borderWidth: \"1px\",\n        borderRadius: \"lg\",\n        overflow: \"hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                p: 4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                        fontSize: \"xl\",\n                        fontWeight: 600,\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                        fontSize: \"sm\",\n                        children: body\n                    }, void 0, false, {\n                        fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        onClick: ()=>setIsClicked(true)\n                    }, void 0, false, {\n                        fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                        children: isClicked ? \"\" : \"What is the tallest building?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Divider, {}, void 0, false, {\n                fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                p: 4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                        fontSize: \"md\",\n                        fontWeight: 600,\n                        children: \"Comments\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Comment__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                content: \"yaaaay!\",\n                                postedAt: new Date()\n                            }, void 0, false, {\n                                fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Comment__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                content: \"woo!\",\n                                postedAt: new Date()\n                            }, void 0, false, {\n                                fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Post, \"+2jvnzgqyS4sm44z1s1whgWD4Tg=\");\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb3N0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBc0U7QUFDckM7QUFDRDtBQVNoQyxNQUFNTyxPQUFPO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQVM7O0lBQ2xDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUUzQyxvRUFBb0U7SUFDcEUscUJBQ0UsOERBQUNKLGlEQUFHQTtRQUFDVyxPQUFNO1FBQU9DLGFBQVk7UUFBTUMsY0FBYTtRQUFLQyxVQUFTOzswQkFDN0QsOERBQUNkLGlEQUFHQTtnQkFBQ2UsR0FBRzs7a0NBQ04sOERBQUNiLGtEQUFJQTt3QkFBQ2MsVUFBUzt3QkFBS0MsWUFBWTtrQ0FDN0JWOzs7Ozs7a0NBRUgsOERBQUNMLGtEQUFJQTt3QkFBQ2MsVUFBUztrQ0FBTVI7Ozs7OztrQ0FDckIsOERBQUNULG9EQUFNQTt3QkFBQ21CLFNBQVMsSUFBTVIsYUFBYTs7Ozs7O2tDQUNwQyw4REFBQ1Isa0RBQUlBO2tDQUFFTyxZQUFZLEtBQUs7Ozs7Ozs7Ozs7OzswQkFFMUIsOERBQUNSLHFEQUFPQTs7Ozs7MEJBQ1IsOERBQUNELGlEQUFHQTtnQkFBQ2UsR0FBRzs7a0NBQ04sOERBQUNiLGtEQUFJQTt3QkFBQ2MsVUFBUzt3QkFBS0MsWUFBWTtrQ0FBSzs7Ozs7O2tDQUdyQyw4REFBQ2Qsb0RBQU1BOzswQ0FDTCw4REFBQ0UsZ0RBQU9BO2dDQUFDYyxTQUFRO2dDQUFVQyxVQUFVLElBQUlDOzs7Ozs7MENBQ3pDLDhEQUFDaEIsZ0RBQU9BO2dDQUFDYyxTQUFRO2dDQUFPQyxVQUFVLElBQUlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEQ7R0ExQk1mO0tBQUFBO0FBNEJOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Bvc3QudHN4P2Q3YzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBCb3gsIERpdmlkZXIsIFRleHQsIFZTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbW1lbnQgZnJvbSBcIi4vQ29tbWVudFwiO1xuaW1wb3J0IE5ld1Bvc3RNb2RhbCBmcm9tIFwiLi9OZXdQb3N0TW9kYWxcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgYm9keTogc3RyaW5nO1xuICBwb3N0ZWRBdDogRGF0ZTtcbn1cblxuY29uc3QgUG9zdCA9ICh7IHRpdGxlLCBib2R5IH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc0NsaWNrZWQsIHNldElzQ2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gVE9ETzogSW1wbGVtZW50IGEgY29tcG9uZW50IHJlcHJlc2VudGluZyBhbiBhbHJlYWR5IGV4aXN0aW5nIHBvc3RcbiAgcmV0dXJuIChcbiAgICA8Qm94IHdpZHRoPVwiMTAwJVwiIGJvcmRlcldpZHRoPVwiMXB4XCIgYm9yZGVyUmFkaXVzPVwibGdcIiBvdmVyZmxvdz1cImhpZGRlblwiPlxuICAgICAgPEJveCBwPXs0fT5cbiAgICAgICAgPFRleHQgZm9udFNpemU9XCJ4bFwiIGZvbnRXZWlnaHQ9ezYwMH0+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0IGZvbnRTaXplPVwic21cIj57Ym9keX08L1RleHQ+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNDbGlja2VkKHRydWUpfT48L0J1dHRvbj5cbiAgICAgICAgPFRleHQ+e2lzQ2xpY2tlZCA/IFwiXCIgOiBcIldoYXQgaXMgdGhlIHRhbGxlc3QgYnVpbGRpbmc/XCJ9PC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgICA8RGl2aWRlciAvPlxuICAgICAgPEJveCBwPXs0fT5cbiAgICAgICAgPFRleHQgZm9udFNpemU9XCJtZFwiIGZvbnRXZWlnaHQ9ezYwMH0+XG4gICAgICAgICAgQ29tbWVudHNcbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VlN0YWNrPlxuICAgICAgICAgIDxDb21tZW50IGNvbnRlbnQ9XCJ5YWFhYXkhXCIgcG9zdGVkQXQ9e25ldyBEYXRlKCl9IC8+XG4gICAgICAgICAgPENvbW1lbnQgY29udGVudD1cIndvbyFcIiBwb3N0ZWRBdD17bmV3IERhdGUoKX0gLz5cbiAgICAgICAgPC9WU3RhY2s+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiQm94IiwiRGl2aWRlciIsIlRleHQiLCJWU3RhY2siLCJ1c2VTdGF0ZSIsIkNvbW1lbnQiLCJQb3N0IiwidGl0bGUiLCJib2R5IiwiaXNDbGlja2VkIiwic2V0SXNDbGlja2VkIiwid2lkdGgiLCJib3JkZXJXaWR0aCIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwicCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm9uQ2xpY2siLCJjb250ZW50IiwicG9zdGVkQXQiLCJEYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Post.tsx\n"));

/***/ })

});