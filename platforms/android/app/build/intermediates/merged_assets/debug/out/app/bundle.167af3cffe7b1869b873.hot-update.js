webpackHotUpdate("bundle",{

/***/ "./_shared/firebase/home.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("../node_modules/tslib/tslib.es6.js");
var http_1 = __webpack_require__("./_shared/http/http.ts");
var httpHelper_1 = __webpack_require__("./_shared/http/httpHelper.ts");
var baseUrl = 'https://us-central1-camels-dev.cloudfunctions.net/api/home';
var getUpcomingMatchDetails = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var response, e_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, http_1.httpGet(baseUrl + ("/matches/upcoming/" + id))];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, httpHelper_1.handleResponse(response)];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                e_1 = _a.sent();
                return [2 /*return*/, httpHelper_1.handleException(e_1, 'Cannot get upcoming match details')];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getUpcomingMatchDetails = getUpcomingMatchDetails;
var getUnreadMatchCount = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var response, e_2;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, http_1.httpGet(baseUrl + ("/matches/unreadCount/" + id))];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, httpHelper_1.handleResponse(response)];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                e_2 = _a.sent();
                return [2 /*return*/, httpHelper_1.handleException(e_2, 'Cannot get match count')];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getUnreadMatchCount = getUnreadMatchCount;
var patchUserMatchStatus = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var response, e_3;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, http_1.httpPatch(baseUrl + ("/matches/update/status/" + id), tslib_1.__assign({}, data))];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, httpHelper_1.handleResponse(response)];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                e_3 = _a.sent();
                return [2 /*return*/, httpHelper_1.handleException(e_3, 'Update failed')];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.patchUserMatchStatus = patchUserMatchStatus;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9fc2hhcmVkL2ZpcmViYXNlL2hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkRBQWlEO0FBQ2pELHVFQUFvRTtBQUVwRSxJQUFNLE9BQU8sR0FBRyw0REFBNEQ7QUFFNUUsSUFBTSx1QkFBdUIsR0FBRyxVQUFPLEVBQVU7Ozs7OztnQkFFNUIscUJBQU0sY0FBTyxDQUFDLE9BQU8sSUFBRyx1QkFBcUIsRUFBSSxFQUFDOztnQkFBN0QsUUFBUSxHQUFHLFNBQWtEO2dCQUM1RCxxQkFBTSwyQkFBYyxDQUFDLFFBQVEsQ0FBQztvQkFBckMsc0JBQU8sU0FBOEI7OztnQkFFckMsc0JBQU8sNEJBQWUsQ0FBQyxHQUFDLEVBQUUsbUNBQW1DLENBQUM7Ozs7S0FFakU7QUFrQlEsMERBQXVCO0FBakJoQyxJQUFNLG1CQUFtQixHQUFHLFVBQU8sRUFBVTs7Ozs7O2dCQUV4QixxQkFBTSxjQUFPLENBQUMsT0FBTyxJQUFHLDBCQUF3QixFQUFJLEVBQUM7O2dCQUFoRSxRQUFRLEdBQUcsU0FBcUQ7Z0JBQy9ELHFCQUFNLDJCQUFjLENBQUMsUUFBUSxDQUFDO29CQUFyQyxzQkFBTyxTQUE4Qjs7O2dCQUVyQyxzQkFBTyw0QkFBZSxDQUFDLEdBQUMsRUFBRSx3QkFBd0IsQ0FBQzs7OztLQUV0RDtBQVVpQyxrREFBbUI7QUFSckQsSUFBTSxvQkFBb0IsR0FBRyxVQUFPLEVBQVUsRUFBRSxJQUE0Qjs7Ozs7O2dCQUV2RCxxQkFBTSxnQkFBUyxDQUFDLE9BQU8sSUFBRyw0QkFBMEIsRUFBSSx3QkFBTyxJQUFJLEVBQUc7O2dCQUFqRixRQUFRLEdBQUcsU0FBc0U7Z0JBQ2hGLHFCQUFNLDJCQUFjLENBQUMsUUFBUSxDQUFDO29CQUFyQyxzQkFBTyxTQUE4Qjs7O2dCQUVyQyxzQkFBTyw0QkFBZSxDQUFDLEdBQUMsRUFBRSxlQUFlLENBQUM7Ozs7S0FFN0M7QUFDc0Qsb0RBQW9CIiwiZmlsZSI6ImJ1bmRsZS4xNjdhZjNjZmZlN2IxODY5Yjg3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaHR0cEdldCwgaHR0cFBhdGNoIH0gZnJvbSAnLi4vaHR0cC9odHRwJ1xuaW1wb3J0IHsgaGFuZGxlRXhjZXB0aW9uLCBoYW5kbGVSZXNwb25zZSB9IGZyb20gJy4uL2h0dHAvaHR0cEhlbHBlcidcblxuY29uc3QgYmFzZVVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWNhbWVscy1kZXYuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9ob21lJ1xuXG5jb25zdCBnZXRVcGNvbWluZ01hdGNoRGV0YWlscyA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBodHRwR2V0KGJhc2VVcmwgKyBgL21hdGNoZXMvdXBjb21pbmcvJHtpZH1gKVxuICAgIHJldHVybiBhd2FpdCBoYW5kbGVSZXNwb25zZShyZXNwb25zZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ0Nhbm5vdCBnZXQgdXBjb21pbmcgbWF0Y2ggZGV0YWlscycpXG4gIH1cbn1cbmNvbnN0IGdldFVucmVhZE1hdGNoQ291bnQgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaHR0cEdldChiYXNlVXJsICsgYC9tYXRjaGVzL3VucmVhZENvdW50LyR7aWR9YClcbiAgICByZXR1cm4gYXdhaXQgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGUsICdDYW5ub3QgZ2V0IG1hdGNoIGNvdW50JylcbiAgfVxufVxuXG5jb25zdCBwYXRjaFVzZXJNYXRjaFN0YXR1cyA9IGFzeW5jIChpZDogc3RyaW5nLCBkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBodHRwUGF0Y2goYmFzZVVybCArIGAvbWF0Y2hlcy91cGRhdGUvc3RhdHVzLyR7aWR9YCwgeyAuLi5kYXRhIH0pXG4gICAgcmV0dXJuIGF3YWl0IGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnVXBkYXRlIGZhaWxlZCcpXG4gIH1cbn1cbmV4cG9ydCB7IGdldFVwY29taW5nTWF0Y2hEZXRhaWxzLCBnZXRVbnJlYWRNYXRjaENvdW50LCBwYXRjaFVzZXJNYXRjaFN0YXR1cyB9XG4iXSwic291cmNlUm9vdCI6IiJ9