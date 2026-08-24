/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/login/route";
exports.ids = ["app/api/auth/login/route"];
exports.modules = {

/***/ "(rsc)/./app/api/auth/login/route.ts":
/*!*************************************!*\
  !*** ./app/api/auth/login/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n\n\nasync function POST(request) {\n    const { email, password } = await request.json();\n    if (typeof email !== \"string\" || typeof password !== \"string\") return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Email and password are required.\"\n    }, {\n        status: 400\n    });\n    const user = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authenticate)(email, password);\n    if (!user) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Invalid email or password.\"\n    }, {\n        status: 401\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        redirectTo: (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.dashboardPath)(user)\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvbG9naW4vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ2M7QUFFbEQsZUFBZUcsS0FBS0MsT0FBZ0I7SUFDekMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHLE1BQU1GLFFBQVFHLElBQUk7SUFDOUMsSUFBSSxPQUFPRixVQUFVLFlBQVksT0FBT0MsYUFBYSxVQUFVLE9BQU9OLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFtQyxHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUNySixNQUFNQyxPQUFPVCx1REFBWUEsQ0FBQ0ksT0FBT0M7SUFDakMsSUFBSSxDQUFDSSxNQUFNLE9BQU9WLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUE2QixHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUMzRixPQUFPVCxxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1FBQUVJLFlBQVlULHdEQUFhQSxDQUFDUTtJQUFNO0FBQzdEIiwic291cmNlcyI6WyJDOlxcU3R1ZHlfTWF0ZXJpYWxcXHByb2plY3RzXFxIb3NwaXRhbFxcYXBwXFxhcGlcXGF1dGhcXGxvZ2luXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0ZSwgZGFzaGJvYXJkUGF0aCB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICBpZiAodHlwZW9mIGVtYWlsICE9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBwYXNzd29yZCAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRW1haWwgYW5kIHBhc3N3b3JkIGFyZSByZXF1aXJlZC5cIiB9LCB7IHN0YXR1czogNDAwIH0pO1xuICBjb25zdCB1c2VyID0gYXV0aGVudGljYXRlKGVtYWlsLCBwYXNzd29yZCk7XG4gIGlmICghdXNlcikgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZC5cIiB9LCB7IHN0YXR1czogNDAxIH0pO1xuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyByZWRpcmVjdFRvOiBkYXNoYm9hcmRQYXRoKHVzZXIpIH0pO1xufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImF1dGhlbnRpY2F0ZSIsImRhc2hib2FyZFBhdGgiLCJQT1NUIiwicmVxdWVzdCIsImVtYWlsIiwicGFzc3dvcmQiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJ1c2VyIiwicmVkaXJlY3RUbyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/login/route.ts\n");

/***/ }),

/***/ "(rsc)/./backend/users.ts":
/*!**************************!*\
  !*** ./backend/users.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   users: () => (/* binding */ users)\n/* harmony export */ });\nconst users = [\n    {\n        id: \"1\",\n        name: \"John Doe\",\n        email: \"user@example.com\",\n        password: \"user123\",\n        role: \"patient\",\n        slug: \"john-doe\"\n    },\n    {\n        id: \"2\",\n        name: \"Dr. Sarah\",\n        email: \"doctor@example.com\",\n        password: \"doctor123\",\n        role: \"doctor\",\n        slug: \"dr-sarah\"\n    },\n    {\n        id: \"STF001\",\n        name: \"Rahul Sharma\",\n        email: \"rahul.sharma@hospitaldemo.in\",\n        password: \"rahul123\",\n        role: \"staff\",\n        slug: \"STF001\"\n    },\n    {\n        id: \"STF002\",\n        name: \"Anjali Verma\",\n        email: \"anjali.verma@hospitaldemo.in\",\n        password: \"anjali123\",\n        role: \"staff\",\n        slug: \"STF002\"\n    },\n    {\n        id: \"STF003\",\n        name: \"Vikram Singh\",\n        email: \"vikram.singh@hospitaldemo.in\",\n        password: \"vikram123\",\n        role: \"staff\",\n        slug: \"STF003\"\n    },\n    {\n        id: \"STF004\",\n        name: \"Sneha Patel\",\n        email: \"sneha.patel@hospitaldemo.in\",\n        password: \"sneha123\",\n        role: \"staff\",\n        slug: \"STF004\"\n    },\n    {\n        id: \"4\",\n        name: \"Admin 01\",\n        email: \"admin@example.com\",\n        password: \"admin123\",\n        role: \"admin\",\n        slug: \"admin-01\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9iYWNrZW5kL3VzZXJzLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFJTyxNQUFNQSxRQUFnQjtJQUMzQjtRQUFFQyxJQUFJO1FBQUtDLE1BQU07UUFBWUMsT0FBTztRQUFvQkMsVUFBVTtRQUFXQyxNQUFNO1FBQVdDLE1BQU07SUFBVztJQUMvRztRQUFFTCxJQUFJO1FBQUtDLE1BQU07UUFBYUMsT0FBTztRQUFzQkMsVUFBVTtRQUFhQyxNQUFNO1FBQVVDLE1BQU07SUFBVztJQUNuSDtRQUNFTCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsSUFBSTtRQUFLQyxNQUFNO1FBQVlDLE9BQU87UUFBcUJDLFVBQVU7UUFBWUMsTUFBTTtRQUFTQyxNQUFNO0lBQVc7Q0FDaEgsQ0FBQyIsInNvdXJjZXMiOlsiQzpcXFN0dWR5X01hdGVyaWFsXFxwcm9qZWN0c1xcSG9zcGl0YWxcXGJhY2tlbmRcXHVzZXJzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIFVzZXJSb2xlID0gXCJwYXRpZW50XCIgfCBcImRvY3RvclwiIHwgXCJzdGFmZlwiIHwgXCJhZG1pblwiO1xuXG5leHBvcnQgdHlwZSBVc2VyID0geyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGVtYWlsOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmc7IHJvbGU6IFVzZXJSb2xlOyBzbHVnOiBzdHJpbmcgfTtcblxuZXhwb3J0IGNvbnN0IHVzZXJzOiBVc2VyW10gPSBbXG4gIHsgaWQ6IFwiMVwiLCBuYW1lOiBcIkpvaG4gRG9lXCIsIGVtYWlsOiBcInVzZXJAZXhhbXBsZS5jb21cIiwgcGFzc3dvcmQ6IFwidXNlcjEyM1wiLCByb2xlOiBcInBhdGllbnRcIiwgc2x1ZzogXCJqb2huLWRvZVwiIH0sXG4gIHsgaWQ6IFwiMlwiLCBuYW1lOiBcIkRyLiBTYXJhaFwiLCBlbWFpbDogXCJkb2N0b3JAZXhhbXBsZS5jb21cIiwgcGFzc3dvcmQ6IFwiZG9jdG9yMTIzXCIsIHJvbGU6IFwiZG9jdG9yXCIsIHNsdWc6IFwiZHItc2FyYWhcIiB9LFxuICB7XG4gICAgaWQ6IFwiU1RGMDAxXCIsXG4gICAgbmFtZTogXCJSYWh1bCBTaGFybWFcIixcbiAgICBlbWFpbDogXCJyYWh1bC5zaGFybWFAaG9zcGl0YWxkZW1vLmluXCIsXG4gICAgcGFzc3dvcmQ6IFwicmFodWwxMjNcIixcbiAgICByb2xlOiBcInN0YWZmXCIsXG4gICAgc2x1ZzogXCJTVEYwMDFcIlxuICB9LFxuICB7XG4gICAgaWQ6IFwiU1RGMDAyXCIsXG4gICAgbmFtZTogXCJBbmphbGkgVmVybWFcIixcbiAgICBlbWFpbDogXCJhbmphbGkudmVybWFAaG9zcGl0YWxkZW1vLmluXCIsXG4gICAgcGFzc3dvcmQ6IFwiYW5qYWxpMTIzXCIsXG4gICAgcm9sZTogXCJzdGFmZlwiLFxuICAgIHNsdWc6IFwiU1RGMDAyXCJcbiAgfSxcbiAge1xuICAgIGlkOiBcIlNURjAwM1wiLFxuICAgIG5hbWU6IFwiVmlrcmFtIFNpbmdoXCIsXG4gICAgZW1haWw6IFwidmlrcmFtLnNpbmdoQGhvc3BpdGFsZGVtby5pblwiLFxuICAgIHBhc3N3b3JkOiBcInZpa3JhbTEyM1wiLFxuICAgIHJvbGU6IFwic3RhZmZcIixcbiAgICBzbHVnOiBcIlNURjAwM1wiXG4gIH0sXG4gIHtcbiAgICBpZDogXCJTVEYwMDRcIixcbiAgICBuYW1lOiBcIlNuZWhhIFBhdGVsXCIsXG4gICAgZW1haWw6IFwic25laGEucGF0ZWxAaG9zcGl0YWxkZW1vLmluXCIsXG4gICAgcGFzc3dvcmQ6IFwic25laGExMjNcIixcbiAgICByb2xlOiBcInN0YWZmXCIsXG4gICAgc2x1ZzogXCJTVEYwMDRcIlxuICB9LFxuICB7IFxuICAgIGlkOiBcIjRcIiwgbmFtZTogXCJBZG1pbiAwMVwiLCBlbWFpbDogXCJhZG1pbkBleGFtcGxlLmNvbVwiLCBwYXNzd29yZDogXCJhZG1pbjEyM1wiLCByb2xlOiBcImFkbWluXCIsIHNsdWc6IFwiYWRtaW4tMDFcIiB9XG5dO1xuIl0sIm5hbWVzIjpbInVzZXJzIiwiaWQiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInJvbGUiLCJzbHVnIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./backend/users.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authenticate: () => (/* binding */ authenticate),\n/* harmony export */   dashboardPath: () => (/* binding */ dashboardPath),\n/* harmony export */   findUserForRole: () => (/* binding */ findUserForRole)\n/* harmony export */ });\n/* harmony import */ var _backend_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/backend/users */ \"(rsc)/./backend/users.ts\");\n\nfunction authenticate(email, password) {\n    return _backend_users__WEBPACK_IMPORTED_MODULE_0__.users.find((user)=>user.email === email && user.password === password);\n}\nfunction findUserForRole(role, slug) {\n    return _backend_users__WEBPACK_IMPORTED_MODULE_0__.users.find((user)=>user.role === role && user.slug === slug);\n}\nfunction dashboardPath(user) {\n    return `/${user.role}/${user.slug}`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtFO0FBRTNELFNBQVNDLGFBQWFDLEtBQWEsRUFBRUMsUUFBZ0I7SUFDMUQsT0FBT0gsaURBQUtBLENBQUNJLElBQUksQ0FBQyxDQUFDQyxPQUFTQSxLQUFLSCxLQUFLLEtBQUtBLFNBQVNHLEtBQUtGLFFBQVEsS0FBS0E7QUFDeEU7QUFFTyxTQUFTRyxnQkFBZ0JDLElBQWMsRUFBRUMsSUFBWTtJQUMxRCxPQUFPUixpREFBS0EsQ0FBQ0ksSUFBSSxDQUFDLENBQUNDLE9BQVNBLEtBQUtFLElBQUksS0FBS0EsUUFBUUYsS0FBS0csSUFBSSxLQUFLQTtBQUNsRTtBQUVPLFNBQVNDLGNBQWNKLElBQWlDO0lBQzdELE9BQU8sQ0FBQyxDQUFDLEVBQUVBLEtBQUtFLElBQUksQ0FBQyxDQUFDLEVBQUVGLEtBQUtHLElBQUksRUFBRTtBQUNyQyIsInNvdXJjZXMiOlsiQzpcXFN0dWR5X01hdGVyaWFsXFxwcm9qZWN0c1xcSG9zcGl0YWxcXGxpYlxcYXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VycywgdHlwZSBVc2VyLCB0eXBlIFVzZXJSb2xlIH0gZnJvbSBcIkAvYmFja2VuZC91c2Vyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gYXV0aGVudGljYXRlKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBVc2VyIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIHVzZXJzLmZpbmQoKHVzZXIpID0+IHVzZXIuZW1haWwgPT09IGVtYWlsICYmIHVzZXIucGFzc3dvcmQgPT09IHBhc3N3b3JkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRVc2VyRm9yUm9sZShyb2xlOiBVc2VyUm9sZSwgc2x1Zzogc3RyaW5nKTogVXNlciB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiB1c2Vycy5maW5kKCh1c2VyKSA9PiB1c2VyLnJvbGUgPT09IHJvbGUgJiYgdXNlci5zbHVnID09PSBzbHVnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhc2hib2FyZFBhdGgodXNlcjogUGljazxVc2VyLCBcInJvbGVcIiB8IFwic2x1Z1wiPik6IHN0cmluZyB7XG4gIHJldHVybiBgLyR7dXNlci5yb2xlfS8ke3VzZXIuc2x1Z31gO1xufVxuIl0sIm5hbWVzIjpbInVzZXJzIiwiYXV0aGVudGljYXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImZpbmQiLCJ1c2VyIiwiZmluZFVzZXJGb3JSb2xlIiwicm9sZSIsInNsdWciLCJkYXNoYm9hcmRQYXRoIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CStudy_Material%5Cprojects%5CHospital%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CStudy_Material%5Cprojects%5CHospital&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CStudy_Material%5Cprojects%5CHospital%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CStudy_Material%5Cprojects%5CHospital&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Study_Material_projects_Hospital_app_api_auth_login_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/login/route.ts */ \"(rsc)/./app/api/auth/login/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/login/route\",\n        pathname: \"/api/auth/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/login/route\"\n    },\n    resolvedPagePath: \"C:\\\\Study_Material\\\\projects\\\\Hospital\\\\app\\\\api\\\\auth\\\\login\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Study_Material_projects_Hospital_app_api_auth_login_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbG9naW4lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDU3R1ZHlfTWF0ZXJpYWwlNUNwcm9qZWN0cyU1Q0hvc3BpdGFsJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDU3R1ZHlfTWF0ZXJpYWwlNUNwcm9qZWN0cyU1Q0hvc3BpdGFsJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUN1QjtBQUNwRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcU3R1ZHlfTWF0ZXJpYWxcXFxccHJvamVjdHNcXFxcSG9zcGl0YWxcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXGxvZ2luXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL2xvZ2luL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9sb2dpblwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9sb2dpbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFN0dWR5X01hdGVyaWFsXFxcXHByb2plY3RzXFxcXEhvc3BpdGFsXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxsb2dpblxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CStudy_Material%5Cprojects%5CHospital%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CStudy_Material%5Cprojects%5CHospital&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CStudy_Material%5Cprojects%5CHospital%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CStudy_Material%5Cprojects%5CHospital&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();