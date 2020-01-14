webpackHotUpdate("bundle",{

/***/ "./_shared/firbase.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("../node_modules/tslib/tslib.es6.js");
var firebaseApi = tslib_1.__importStar(__webpack_require__("../node_modules/nativescript-plugin-firebase/app/index.js"));
var application_settings_1 = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");
var http_1 = __webpack_require__("./_shared/http.ts");
var baseUrl = 'https://us-central1-camels-dev.cloudfunctions.net/api';
function getJson(response) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var e_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, response.json()];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    e_1 = _a.sent();
                    return [2 /*return*/, null];
                case 3: return [2 /*return*/];
            }
        });
    });
}
var handleException = function (error, type) {
    console.log(error);
    alert(type + ': ' + error.message);
    return { message: error.message, type: type, isError: true, status: error.status, json: '' };
};
function handleResponse(response) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var ok, json, message;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(response.status === http_1.HttpStatusCode.Unauthorized)) return [3 /*break*/, 2];
                    return [4 /*yield*/, handleException({ status: response.status }, 'Unauthorised')];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    ok = response.status === http_1.HttpStatusCode.OK || response.status === http_1.HttpStatusCode.Created;
                    return [4 /*yield*/, getJson(response)];
                case 3:
                    json = _a.sent();
                    if (json == null) {
                        return [2 /*return*/, {
                                fieldErrors: {},
                                json: null,
                                status: response.status,
                                message: '',
                            }];
                    }
                    else {
                        message = json.message;
                        return [2 /*return*/, {
                                fieldErrors: ok ? {} : json.errors,
                                json: ok ? json : null,
                                status: response.status,
                                message: message,
                                isError: !ok ? true : false,
                            }];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
var login = function (email, password) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var user_1, e_2;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, firebaseApi.auth().signInWithEmailAndPassword(email, password)];
            case 1:
                user_1 = (_a.sent()).user;
                console.log('Firebase login success');
                return [2 /*return*/, user_1.getIdTokenResult().then(function (result) {
                        var userData = { uid: user_1.uid, token: result.token, role: result.claims['role'] };
                        console.log(userData);
                        application_settings_1.setString('camels-token', userData.token);
                        return userData;
                    })];
            case 2:
                e_2 = _a.sent();
                return [2 /*return*/, handleException(e_2, 'Login failed')];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
var logout = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var data, e_3;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, firebaseApi.auth().signOut()];
            case 1:
                data = _a.sent();
                application_settings_1.remove('camels-token');
                console.log('Firebase logout success');
                return [2 /*return*/, data];
            case 2:
                e_3 = _a.sent();
                return [2 /*return*/, handleException(e_3, 'Logout failed')];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.logout = logout;
var getUser = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var response, e_4;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, http_1.httpGet(baseUrl + ("/users/" + id))];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, handleResponse(response)];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                e_4 = _a.sent();
                return [2 /*return*/, handleException(e_4, 'fetch failed')];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getUser = getUser;
var sendSignInLink = function (email) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var fn, result, e_5;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                fn = firebaseApi.functions().httpsCallable('sendMailForFunctions', 'us-central1');
                return [4 /*yield*/, fn({
                        email: email,
                        link: 'https://camels.page.link/zXbp',
                        token: application_settings_1.getString('camels-token'),
                    })];
            case 1:
                result = _a.sent();
                console.log(result);
                return [2 /*return*/, result];
            case 2:
                e_5 = _a.sent();
                return [2 /*return*/, handleException(e_5, 'Sending link failed')];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.sendSignInLink = sendSignInLink;
var createUser = function (email, password) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var response, e_6;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, http_1.httpPost(baseUrl + '/createUser', {
                        email: email,
                        password: password,
                        displayName: email,
                        role: 'user',
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, handleResponse(response)];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                e_6 = _a.sent();
                return [2 /*return*/, handleException(e_6, 'Creating user failed')];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
var signup = function (email, password) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var response, e_7;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('signup for ' + email);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, http_1.httpPost(baseUrl + '/signup', {
                        email: email,
                        password: password,
                        displayName: email,
                        role: 'user',
                    })];
            case 2:
                response = _a.sent();
                console.log(response);
                return [4 /*yield*/, handleResponse(response)];
            case 3: return [2 /*return*/, _a.sent()];
            case 4:
                e_7 = _a.sent();
                return [2 /*return*/, handleException(e_7, 'Sign up failed')];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.signup = signup;
var addInvitesToCollection = function (email) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var inviteCollection, e_8;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, firebaseApi.firestore().collection('invites')];
            case 1:
                inviteCollection = _a.sent();
                inviteCollection.doc(email).set({
                    status: true,
                });
                alert('Yayyy!! Invite sent to the camel');
                return [2 /*return*/, inviteCollection];
            case 2:
                e_8 = _a.sent();
                return [2 /*return*/, handleException(e_8, 'Add invitiee failed')];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addInvitesToCollection = addInvitesToCollection;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9fc2hhcmVkL2ZpcmJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEseUhBQStEO0FBQy9ELG9JQUFvRjtBQUNwRixzREFBNkY7QUFHN0YsSUFBTSxPQUFPLEdBQUcsdURBQXVEO0FBRXZFLFNBQWUsT0FBTyxDQUFDLFFBQTRCOzs7Ozs7O29CQUV4QyxxQkFBTSxRQUFRLENBQUMsSUFBSSxFQUFFO3dCQUE1QixzQkFBTyxTQUFxQjs7O29CQUU1QixzQkFBTyxJQUFJOzs7OztDQUVkO0FBRUQsSUFBTSxlQUFlLEdBQUcsVUFBQyxLQUFVLEVBQUUsSUFBWTtJQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNsQixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ2xDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLFFBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO0FBQ3hGLENBQUM7QUFFRCxTQUFlLGNBQWMsQ0FBQyxRQUE0Qjs7Ozs7O3lCQUNwRCxTQUFRLENBQUMsTUFBTSxLQUFLLHFCQUFjLENBQUMsWUFBWSxHQUEvQyx3QkFBK0M7b0JBQzFDLHFCQUFNLGVBQWUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsY0FBYyxDQUFDO3dCQUF6RSxzQkFBTyxTQUFrRTs7b0JBRXJFLEVBQUUsR0FBRyxRQUFRLENBQUMsTUFBTSxLQUFLLHFCQUFjLENBQUMsRUFBRSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUsscUJBQWMsQ0FBQyxPQUFPO29CQUNqRixxQkFBTSxPQUFPLENBQUMsUUFBUSxDQUFDOztvQkFBOUIsSUFBSSxHQUFHLFNBQXVCO29CQUVwQyxJQUFJLElBQUksSUFBSSxJQUFJLEVB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R0FBRyxDQUFDO29CQUM5QixNQUFNLEVBQUUsSUFBSTtpQkFDYixDQUFDO2dCQUNGLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQztnQkFDekMsc0JBQU8sZ0JBQWdCOzs7Z0JBRXZCLHNCQUFPLGVBQWUsQ0FBQyxHQUFDLEVBQUUscUJBQXFCLENBQUM7Ozs7S0FFbkQ7QUFDNEQsd0RBQXNCIiwiZmlsZSI6ImJ1bmRsZS4xNTBlYWRlMzg5MmQ5ZTI3MDYyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZmlyZWJhc2VBcGkgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHAnXG5pbXBvcnQgeyBzZXRTdHJpbmcsIHJlbW92ZSwgZ2V0U3RyaW5nIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncydcbmltcG9ydCB7IGh0dHBHZXQsIGh0dHBQb3N0LCBJSHR0cEJhc2ljUmVzcG9uc2UsIElIdHRwUmVzcG9uc2UsIEh0dHBTdGF0dXNDb2RlIH0gZnJvbSAnLi9odHRwJ1xuaW1wb3J0IHsgSWRUb2tlblJlc3VsdCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnXG5cbmNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1jYW1lbHMtZGV2LmNsb3VkZnVuY3Rpb25zLm5ldC9hcGknXG5cbmFzeW5jIGZ1bmN0aW9uIGdldEpzb24ocmVzcG9uc2U6IElIdHRwQmFzaWNSZXNwb25zZSk6IFByb21pc2U8YW55PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVFeGNlcHRpb24gPSAoZXJyb3I6IGFueSwgdHlwZTogc3RyaW5nKSA9PiB7XG4gIGNvbnNvbGUubG9nKGVycm9yKVxuICBhbGVydCh0eXBlICsgJzogJyArIGVycm9yLm1lc3NhZ2UpXG4gIHJldHVybiB7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsIHR5cGUsIGlzRXJyb3I6IHRydWUsIHN0YXR1czogZXJyb3Iuc3RhdHVzLCBqc29uOiAnJyB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlOiBJSHR0cEJhc2ljUmVzcG9uc2UpOiBQcm9taXNlPElIdHRwUmVzcG9uc2U+IHtcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gSHR0cFN0YXR1c0NvZGUuVW5hdXRob3JpemVkKSB7XG4gICAgcmV0dXJuIGF3YWl0IGhhbmRsZUV4Y2VwdGlvbih7IHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzIH0sICdVbmF1dGhvcmlzZWQnKVxuICB9XG4gIGNvbnN0IG9rID0gcmVzcG9uc2Uuc3RhdHVzID09PSBIdHRwU3RhdHVzQ29kZS5PSyB8fCByZXNwb25zZS5zdGF0dXMgPT09IEh0dHBTdGF0dXNDb2RlLkNyZWF0ZWRcbiAgY29uc3QganNvbiA9IGF3YWl0IGdldEpzb24ocmVzcG9uc2UpXG5cbiAgaWYgKGpzb24gPT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZEVycm9yczoge30sXG4gICAgICBqc29uOiBudWxsLFxuICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICBtZXNzYWdlOiAnJyxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGpzb24ubWVzc2FnZVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkRXJyb3JzOiBvayA/IHt9IDoganNvbi5lcnJvcnMsXG4gICAgICBqc29uOiBvayA/IGpzb24gOiBudWxsLFxuICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICBtZXNzYWdlLFxuICAgICAgaXNFcnJvcjogIW9rID8gdHJ1ZSA6IGZhbHNlLFxuICAgIH1cbiAgfVxufVxuY29uc3QgbG9naW4gPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdXNlciB9ID0gYXdhaXQgZmlyZWJhc2VBcGkuYXV0aCgpLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICBjb25zb2xlLmxvZygnRmlyZWJhc2UgbG9naW4gc3VjY2VzcycpXG4gICAgcmV0dXJuIHVzZXIuZ2V0SWRUb2tlblJlc3VsdCgpLnRoZW4oKHJlc3VsdDogSWRUb2tlblJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgdXNlckRhdGEgPSB7IHVpZDogdXNlci51aWQsIHRva2VuOiByZXN1bHQudG9rZW4sIHJvbGU6IHJlc3VsdC5jbGFpbXNbJ3JvbGUnXSB9XG4gICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSlcbiAgICAgIHNldFN0cmluZygnY2FtZWxzLXRva2VuJywgdXNlckRhdGEudG9rZW4pXG4gICAgICByZXR1cm4gdXNlckRhdGFcbiAgICB9KVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnTG9naW4gZmFpbGVkJylcbiAgfVxufVxuY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmaXJlYmFzZUFwaS5hdXRoKCkuc2lnbk91dCgpXG4gICAgcmVtb3ZlKCdjYW1lbHMtdG9rZW4nKVxuICAgIGNvbnNvbGUubG9nKCdGaXJlYmFzZSBsb2dvdXQgc3VjY2VzcycpXG4gICAgcmV0dXJuIGRhdGFcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ0xvZ291dCBmYWlsZWQnKVxuICB9XG59XG5jb25zdCBnZXRVc2VyID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGh0dHBHZXQoYmFzZVVybCArIGAvdXNlcnMvJHtpZH1gKVxuICAgIHJldHVybiBhd2FpdCBoYW5kbGVSZXNwb25zZShyZXNwb25zZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ2ZldGNoIGZhaWxlZCcpXG4gIH1cbn1cbmNvbnN0IHNlbmRTaWduSW5MaW5rID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmbiA9IGZpcmViYXNlQXBpLmZ1bmN0aW9ucygpLmh0dHBzQ2FsbGFibGUoJ3NlbmRNYWlsRm9yRnVuY3Rpb25zJywgJ3VzLWNlbnRyYWwxJylcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmbih7XG4gICAgICBlbWFpbCxcbiAgICAgIGxpbms6ICdodHRwczovL2NhbWVscy5wYWdlLmxpbmsvelhicCcsXG4gICAgICB0b2tlbjogZ2V0U3RyaW5nKCdjYW1lbHMtdG9rZW4nKSxcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGUsICdTZW5kaW5nIGxpbmsgZmFpbGVkJylcbiAgfVxufVxuY29uc3QgY3JlYXRlVXNlciA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBodHRwUG9zdChiYXNlVXJsICsgJy9jcmVhdGVVc2VyJywge1xuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZCxcbiAgICAgIGRpc3BsYXlOYW1lOiBlbWFpbCxcbiAgICAgIHJvbGU6ICd1c2VyJyxcbiAgICB9KVxuICAgIHJldHVybiBhd2FpdCBoYW5kbGVSZXNwb25zZShyZXNwb25zZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ0NyZWF0aW5nIHVzZXIgZmFpbGVkJylcbiAgfVxufVxuY29uc3Qgc2lnbnVwID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgY29uc29sZS5sb2coJ3NpZ251cCBmb3IgJyArIGVtYWlsKVxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaHR0cFBvc3QoYmFzZVVybCArICcvc2lnbnVwJywge1xuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZCxcbiAgICAgIGRpc3BsYXlOYW1lOiBlbWFpbCxcbiAgICAgIHJvbGU6ICd1c2VyJyxcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgIHJldHVybiBhd2FpdCBoYW5kbGVSZXNwb25zZShyZXNwb25zZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ1NpZ24gdXAgZmFpbGVkJylcbiAgfVxufVxuY29uc3QgYWRkSW52aXRlc1RvQ29sbGVjdGlvbiA9IGFzeW5jIChlbWFpbDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52aXRlQ29sbGVjdGlvbiA9IGF3YWl0IGZpcmViYXNlQXBpLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2ludml0ZXMnKVxuICAgIGludml0ZUNvbGxlY3Rpb24uZG9jKGVtYWlsKS5zZXQoe1xuICAgICAgc3RhdHVzOiB0cnVlLFxuICAgIH0pXG4gICAgYWxlcnQoJ1lheXl5ISEgSW52aXRlIHNlbnQgdG8gdGhlIGNhbWVsJylcbiAgICByZXR1cm4gaW52aXRlQ29sbGVjdGlvblxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnQWRkIGludml0aWVlIGZhaWxlZCcpXG4gIH1cbn1cbmV4cG9ydCB7IGxvZ2luLCBsb2dvdXQsIGdldFVzZXIsIHNlbmRTaWduSW5MaW5rLCBjcmVhdGVVc2VyLCBhZGRJbnZpdGVzVG9Db2xsZWN0aW9uLCBzaWdudXAgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==