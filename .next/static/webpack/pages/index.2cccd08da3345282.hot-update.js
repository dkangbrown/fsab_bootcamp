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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst Post = (param)=>{\n    let { title, body, question, ans1, ans2, ans3, correct, reset } = param;\n    _s();\n    const [isClicked, setIsClicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [gotAns, setGotAns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(reset);\n    const checkAns = (input)=>{\n        setGotAns(input == correct);\n    };\n    // TODO: Implement a component representing an already existing post\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        width: \"100%\",\n        borderWidth: \"1px\",\n        borderRadius: \"lg\",\n        overflow: \"hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                p: 4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        fontSize: \"xl\",\n                        fontWeight: 600,\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        fontSize: \"sm\",\n                        children: body\n                    }, void 0, false, {\n                        fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        onClick: ()=>setIsClicked(true),\n                        children: \"Show the Riddle\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        children: isClicked ? question : \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {\n                fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                p: 4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        fontSize: \"md\",\n                        fontWeight: 600,\n                        children: \"Choices\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                onClick: ()=>checkAns(\"1\"),\n                                children: ans1\n                            }, void 0, false, {\n                                fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                onClick: ()=>checkAns(\"2\"),\n                                children: ans2\n                            }, void 0, false, {\n                                fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                onClick: ()=>checkAns(\"3\"),\n                                children: ans3\n                            }, void 0, false, {\n                                fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, undefined),\n                            gotAns && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                children: \"You got the answer!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 22\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danielkang/Desktop/fsab_bootcamp/fsabfe/src/components/Post.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Post, \"wnPv3c2HD3zoR3cbBvpxnokaaFM=\");\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb3N0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFzRTtBQUNyQztBQWlCakMsTUFBTU0sT0FBTztRQUFDLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFTOztJQUM5RSxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1gsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDWSxRQUFRQyxVQUFVLEdBQUdiLCtDQUFRQSxDQUFDUztJQUVyQyxNQUFNSyxXQUFXLENBQUNDO1FBQ2hCRixVQUFVRSxTQUFTUDtJQUNyQjtJQUVBLG9FQUFvRTtJQUNwRSxxQkFDRSw4REFBQ1osaURBQUdBO1FBQUNvQixPQUFNO1FBQU9DLGFBQVk7UUFBTUMsY0FBYTtRQUFLQyxVQUFTOzswQkFDN0QsOERBQUN2QixpREFBR0E7Z0JBQUN3QixHQUFHOztrQ0FDTiw4REFBQ3RCLGtEQUFJQTt3QkFBQ3VCLFVBQVM7d0JBQUtDLFlBQVk7a0NBQzdCcEI7Ozs7OztrQ0FFSCw4REFBQ0osa0RBQUlBO3dCQUFDdUIsVUFBUztrQ0FBTWxCOzs7Ozs7a0NBQ3JCLDhEQUFDUixvREFBTUE7d0JBQUM0QixTQUFTLElBQU1aLGFBQWE7a0NBQU87Ozs7OztrQ0FDM0MsOERBQUNiLGtEQUFJQTtrQ0FBRVksWUFBWU4sV0FBVzs7Ozs7Ozs7Ozs7OzBCQUVoQyw4REFBQ1AscURBQU9BOzs7OzswQkFDUiw4REFBQ0QsaURBQUdBO2dCQUFDd0IsR0FBRzs7a0NBQ04sOERBQUN0QixrREFBSUE7d0JBQUN1QixVQUFTO3dCQUFLQyxZQUFZO2tDQUFLOzs7Ozs7a0NBR3JDLDhEQUFDdkIsb0RBQU1BOzswQ0FDTCw4REFBQ0osb0RBQU1BO2dDQUFDNEIsU0FBUyxJQUFNVCxTQUFTOzBDQUFPVDs7Ozs7OzBDQUN2Qyw4REFBQ1Ysb0RBQU1BO2dDQUFDNEIsU0FBUyxJQUFNVCxTQUFTOzBDQUFPUjs7Ozs7OzBDQUN2Qyw4REFBQ1gsb0RBQU1BO2dDQUFDNEIsU0FBUyxJQUFNVCxTQUFTOzBDQUFPUDs7Ozs7OzRCQUN0Q0ssd0JBQVUsOERBQUNkLGtEQUFJQTswQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNCO0dBakNNRztLQUFBQTtBQW1DTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qb3N0LnRzeD9kN2M0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgQm94LCBEaXZpZGVyLCBUZXh0LCBWU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb21tZW50IGZyb20gXCIuL0NvbW1lbnRcIjtcbmltcG9ydCBOZXdQb3N0TW9kYWwgZnJvbSBcIi4vTmV3UG9zdE1vZGFsXCI7XG5pbXBvcnQgaW5kZXggZnJvbSBcIkAvcGFnZXMvaW5kZXhcIlxuaW1wb3J0IHsgQW55QVJlY29yZCB9IGZyb20gXCJkbnNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgYm9keTogc3RyaW5nO1xuICBxdWVzdGlvbjogc3RyaW5nO1xuICBhbnMxOiBzdHJpbmc7XG4gIGFuczI6IHN0cmluZztcbiAgYW5zMzogc3RyaW5nO1xuICBjb3JyZWN0OiBzdHJpbmc7XG4gIHJlc2V0OiBib29sZWFuO1xufVxuXG5jb25zdCBQb3N0ID0gKHsgdGl0bGUsIGJvZHksIHF1ZXN0aW9uLCBhbnMxLCBhbnMyLCBhbnMzLCBjb3JyZWN0LCByZXNldCB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbaXNDbGlja2VkLCBzZXRJc0NsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZ290QW5zLCBzZXRHb3RBbnNdID0gdXNlU3RhdGUocmVzZXQpO1xuXG4gIGNvbnN0IGNoZWNrQW5zID0gKGlucHV0IDogc3RyaW5nKSA9PiB7XG4gICAgc2V0R290QW5zKGlucHV0ID09IGNvcnJlY3QpO1xuICB9XG5cbiAgLy8gVE9ETzogSW1wbGVtZW50IGEgY29tcG9uZW50IHJlcHJlc2VudGluZyBhbiBhbHJlYWR5IGV4aXN0aW5nIHBvc3RcbiAgcmV0dXJuIChcbiAgICA8Qm94IHdpZHRoPVwiMTAwJVwiIGJvcmRlcldpZHRoPVwiMXB4XCIgYm9yZGVyUmFkaXVzPVwibGdcIiBvdmVyZmxvdz1cImhpZGRlblwiPlxuICAgICAgPEJveCBwPXs0fT5cbiAgICAgICAgPFRleHQgZm9udFNpemU9XCJ4bFwiIGZvbnRXZWlnaHQ9ezYwMH0+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0IGZvbnRTaXplPVwic21cIj57Ym9keX08L1RleHQ+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNDbGlja2VkKHRydWUpfT5TaG93IHRoZSBSaWRkbGU8L0J1dHRvbj5cbiAgICAgICAgPFRleHQ+e2lzQ2xpY2tlZCA/IHF1ZXN0aW9uIDogXCJcIn08L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICAgIDxEaXZpZGVyIC8+XG4gICAgICA8Qm94IHA9ezR9PlxuICAgICAgICA8VGV4dCBmb250U2l6ZT1cIm1kXCIgZm9udFdlaWdodD17NjAwfT5cbiAgICAgICAgICBDaG9pY2VzXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFZTdGFjaz5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGNoZWNrQW5zKFwiMVwiKX0+e2FuczF9PC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjaGVja0FucyhcIjJcIil9PnthbnMyfTwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gY2hlY2tBbnMoXCIzXCIpfT57YW5zM308L0J1dHRvbj5cbiAgICAgICAgICB7Z290QW5zICYmIDxUZXh0PllvdSBnb3QgdGhlIGFuc3dlciE8L1RleHQ+fVxuICAgICAgICA8L1ZTdGFjaz5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJCb3giLCJEaXZpZGVyIiwiVGV4dCIsIlZTdGFjayIsInVzZVN0YXRlIiwiUG9zdCIsInRpdGxlIiwiYm9keSIsInF1ZXN0aW9uIiwiYW5zMSIsImFuczIiLCJhbnMzIiwiY29ycmVjdCIsInJlc2V0IiwiaXNDbGlja2VkIiwic2V0SXNDbGlja2VkIiwiZ290QW5zIiwic2V0R290QW5zIiwiY2hlY2tBbnMiLCJpbnB1dCIsIndpZHRoIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsInAiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Post.tsx\n"));

/***/ })

});