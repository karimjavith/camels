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
                    if (!!ok) return [3 /*break*/, 4];
                    return [4 /*yield*/, handleException({ status: response.status }, 'Error')];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [4 /*yield*/, getJson(response)];
                case 5:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9fc2hhcmVkL2ZpcmJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEseUhBQStEO0FBQy9ELG9JQUFvRjtBQUNwRixzREFBNkY7QUFHN0YsSUFBTSxPQUFPLEdBQUcsdURBQXVEO0FBRXZFLFNBQWUsT0FBTyxDQUFDLFFBQTRCOzs7Ozs7O29CQUV4QyxxQkFBTSxRQUFRLENBQUMsSUFBSSxFQUFFO3dCQUE1QixzQkFBTyxTQUFxQjs7O29CQUU1QixzQkFBTyxJQUFJOzs7OztDQUVkO0FBRUQsSUFBTSxlQUFlLEdBQUcsVUFBQyxLQUFVLEVBQUUsSUFBWTtJQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNsQixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ2xDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLFFBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO0FBQ3hGLENBQUM7QUFFRCxTQUFlLGNBQWMsQ0FBQyxRQUE0Qjs7Ozs7O3lCQUNwRCxTQUFRLENBQUMsTUFBTSxLQUFLLHFCQUFjLENBQUMsWUFBWSxHQUEvQyx3QkFBK0M7b0JBQzFDLHFCQUFNLGVBQWUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsY0FBYyxDQUFDO3dCQUF6RSxzQkFBTyxTQUFrRTs7b0JBRXJFLEVBQUUsR0FBRyxRQUFRLENBQUMsTUFBTSxLQUFLLHFCQUFjLENBQUMsRUFBRSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUsscUJBQWMsQ0FBQyxPQUFPO3lCQUMxRixDQUFDLEVBQUUsRUFBSCx3QkFBRztvQkFDRSxxQkFBTSxlQUFlLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxF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RyxTQUFtRDtnQkFDNUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztvQkFDOUIsTUFBTSxFQUFFLElBQUk7aUJBQ2IsQ0FBQztnQkFDRixLQUFLLENBQUMsa0NBQWtDLENBQUM7Z0JBQ3pDLHNCQUFPLGdCQUFnQjs7O2dCQUV2QixzQkFBTyxlQUFlLENBQUMsR0FBQyxFQUFFLHFCQUFxQixDQUFDOzs7O0tBRW5EO0FBQzRELHdEQUFzQiIsImZpbGUiOiJidW5kbGUuNWU2Y2VhYjlhOWQ4YmY4M2NjMmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZpcmViYXNlQXBpIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwJ1xuaW1wb3J0IHsgc2V0U3RyaW5nLCByZW1vdmUsIGdldFN0cmluZyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnXG5pbXBvcnQgeyBodHRwR2V0LCBodHRwUG9zdCwgSUh0dHBCYXNpY1Jlc3BvbnNlLCBJSHR0cFJlc3BvbnNlLCBIdHRwU3RhdHVzQ29kZSB9IGZyb20gJy4vaHR0cCdcbmltcG9ydCB7IElkVG9rZW5SZXN1bHQgfSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJ1xuXG5jb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtY2FtZWxzLWRldi5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpJ1xuXG5hc3luYyBmdW5jdGlvbiBnZXRKc29uKHJlc3BvbnNlOiBJSHR0cEJhc2ljUmVzcG9uc2UpOiBQcm9taXNlPGFueT4ge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlRXhjZXB0aW9uID0gKGVycm9yOiBhbnksIHR5cGU6IHN0cmluZykgPT4ge1xuICBjb25zb2xlLmxvZyhlcnJvcilcbiAgYWxlcnQodHlwZSArICc6ICcgKyBlcnJvci5tZXNzYWdlKVxuICByZXR1cm4geyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLCB0eXBlLCBpc0Vycm9yOiB0cnVlLCBzdGF0dXM6IGVycm9yLnN0YXR1cywganNvbjogJycgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVSZXNwb25zZShyZXNwb25zZTogSUh0dHBCYXNpY1Jlc3BvbnNlKTogUHJvbWlzZTxJSHR0cFJlc3BvbnNlPiB7XG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IEh0dHBTdGF0dXNDb2RlLlVuYXV0aG9yaXplZCkge1xuICAgIHJldHVybiBhd2FpdCBoYW5kbGVFeGNlcHRpb24oeyBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyB9LCAnVW5hdXRob3Jpc2VkJylcbiAgfVxuICBjb25zdCBvayA9IHJlc3BvbnNlLnN0YXR1cyA9PT0gSHR0cFN0YXR1c0NvZGUuT0sgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSBIdHRwU3RhdHVzQ29kZS5DcmVhdGVkXG4gIGlmICghb2spIHtcbiAgICByZXR1cm4gYXdhaXQgaGFuZGxlRXhjZXB0aW9uKHsgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMgfSwgJ0Vycm9yJylcbiAgfVxuICBjb25zdCBqc29uID0gYXdhaXQgZ2V0SnNvbihyZXNwb25zZSlcblxuICBpZiAoanNvbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkRXJyb3JzOiB7fSxcbiAgICAgIGpzb246IG51bGwsXG4gICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIG1lc3NhZ2U6ICcnLFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ganNvbi5tZXNzYWdlXG5cbiAgICByZXR1cm4ge1xuICAgICAgZmllbGRFcnJvcnM6IG9rID8ge30gOiBqc29uLmVycm9ycyxcbiAgICAgIGpzb246IG9rID8ganNvbiA6IG51bGwsXG4gICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIG1lc3NhZ2UsXG4gICAgfVxuICB9XG59XG5jb25zdCBsb2dpbiA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1c2VyIH0gPSBhd2FpdCBmaXJlYmFzZUFwaS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgIGNvbnNvbGUubG9nKCdGaXJlYmFzZSBsb2dpbiBzdWNjZXNzJylcbiAgICByZXR1cm4gdXNlci5nZXRJZFRva2VuUmVzdWx0KCkudGhlbigocmVzdWx0OiBJZFRva2VuUmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCB1c2VyRGF0YSA9IHsgdWlkOiB1c2VyLnVpZCwgdG9rZW46IHJlc3VsdC50b2tlbiwgcm9sZTogcmVzdWx0LmNsYWltc1sncm9sZSddIH1cbiAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKVxuICAgICAgc2V0U3RyaW5nKCdjYW1lbHMtdG9rZW4nLCB1c2VyRGF0YS50b2tlbilcbiAgICAgIHJldHVybiB1c2VyRGF0YVxuICAgIH0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGUsICdMb2dpbiBmYWlsZWQnKVxuICB9XG59XG5jb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZpcmViYXNlQXBpLmF1dGgoKS5zaWduT3V0KClcbiAgICByZW1vdmUoJ2NhbWVscy10b2tlbicpXG4gICAgY29uc29sZS5sb2coJ0ZpcmViYXNlIGxvZ291dCBzdWNjZXNzJylcbiAgICByZXR1cm4gZGF0YVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnTG9nb3V0IGZhaWxlZCcpXG4gIH1cbn1cbmNvbnN0IGdldFVzZXIgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaHR0cEdldChiYXNlVXJsICsgYC91c2Vycy8ke2lkfWApXG4gICAgcmV0dXJuIGF3YWl0IGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnZmV0Y2ggZmFpbGVkJylcbiAgfVxufVxuY29uc3Qgc2VuZFNpZ25JbkxpbmsgPSBhc3luYyAoZW1haWw6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGZuID0gZmlyZWJhc2VBcGkuZnVuY3Rpb25zKCkuaHR0cHNDYWxsYWJsZSgnc2VuZE1haWxGb3JGdW5jdGlvbnMnLCAndXMtY2VudHJhbDEnKVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZuKHtcbiAgICAgIGVtYWlsLFxuICAgICAgbGluazogJ2h0dHBzOi8vY2FtZWxzLnBhZ2UubGluay96WGJwJyxcbiAgICAgIHRva2VuOiBnZXRTdHJpbmcoJ2NhbWVscy10b2tlbicpLFxuICAgIH0pXG4gICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgIHJldHVybiByZXN1bHRcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ1NlbmRpbmcgbGluayBmYWlsZWQnKVxuICB9XG59XG5jb25zdCBjcmVhdGVVc2VyID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGh0dHBQb3N0KGJhc2VVcmwgKyAnL2NyZWF0ZVVzZXInLCB7XG4gICAgICBlbWFpbCxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgZGlzcGxheU5hbWU6IGVtYWlsLFxuICAgICAgcm9sZTogJ3VzZXInLFxuICAgIH0pXG4gICAgcmV0dXJuIGF3YWl0IGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnQ3JlYXRpbmcgdXNlciBmYWlsZWQnKVxuICB9XG59XG5jb25zdCBzaWdudXAgPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICBjb25zb2xlLmxvZygnc2lnbnVwIGZvciAnICsgZW1haWwpXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBodHRwUG9zdChiYXNlVXJsICsgJy9zaWdudXAnLCB7XG4gICAgICBlbWFpbCxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgZGlzcGxheU5hbWU6IGVtYWlsLFxuICAgICAgcm9sZTogJ3VzZXInLFxuICAgIH0pXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgcmV0dXJuIGF3YWl0IGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnU2lnbiB1cCBmYWlsZWQnKVxuICB9XG59XG5jb25zdCBhZGRJbnZpdGVzVG9Db2xsZWN0aW9uID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbnZpdGVDb2xsZWN0aW9uID0gYXdhaXQgZmlyZWJhc2VBcGkuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignaW52aXRlcycpXG4gICAgaW52aXRlQ29sbGVjdGlvbi5kb2MoZW1haWwpLnNldCh7XG4gICAgICBzdGF0dXM6IHRydWUsXG4gICAgfSlcbiAgICBhbGVydCgnWWF5eXkhISBJbnZpdGUgc2VudCB0byB0aGUgY2FtZWwnKVxuICAgIHJldHVybiBpbnZpdGVDb2xsZWN0aW9uXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGUsICdBZGQgaW52aXRpZWUgZmFpbGVkJylcbiAgfVxufVxuZXhwb3J0IHsgbG9naW4sIGxvZ291dCwgZ2V0VXNlciwgc2VuZFNpZ25JbkxpbmssIGNyZWF0ZVVzZXIsIGFkZEludml0ZXNUb0NvbGxlY3Rpb24sIHNpZ251cCB9XG4iXSwic291cmNlUm9vdCI6IiJ9