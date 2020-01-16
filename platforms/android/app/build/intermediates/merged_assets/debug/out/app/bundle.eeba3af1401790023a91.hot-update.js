webpackHotUpdate("bundle",{

/***/ "./_shared/firebase/users.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("../node_modules/tslib/tslib.es6.js");
var nativescript_plugin_firebase_1 = tslib_1.__importDefault(__webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js"));
var firebaseApi = tslib_1.__importStar(__webpack_require__("../node_modules/nativescript-plugin-firebase/app/index.js"));
var application_settings_1 = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");
var http_1 = __webpack_require__("./_shared/http/http.ts");
var httpHelper_1 = __webpack_require__("./_shared/http/httpHelper.ts");
var baseUrl = 'https://us-central1-camels-dev.cloudfunctions.net/api/users';
var login = function (email, password) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var user_1, e_1;
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
                e_1 = _a.sent();
                return [2 /*return*/, httpHelper_1.handleException(e_1, 'Login failed')];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
var logout = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var data, e_2;
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
                e_2 = _a.sent();
                return [2 /*return*/, httpHelper_1.handleException(e_2, 'Logout failed')];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.logout = logout;
function checkIfTokenIsValid() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var result, e_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, http_1.httpGet(baseUrl + '/verifyIdToken')];
                case 1:
                    result = _a.sent();
                    if (result.status !== http_1.HttpStatusCode.OK) {
                        throw new Error();
                    }
                    return [2 /*return*/, { verified: true }];
                case 2:
                    e_3 = _a.sent();
                    return [2 /*return*/, { verified: false }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.checkIfTokenIsValid = checkIfTokenIsValid;
var getUser = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var response, e_4;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, http_1.httpGet(baseUrl + ("/" + id))];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, httpHelper_1.handleResponse(response)];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                e_4 = _a.sent();
                return [2 /*return*/, httpHelper_1.handleException(e_4, 'fetch failed')];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getUser = getUser;
var getAllUsers = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var response, e_5;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, http_1.httpGet(baseUrl)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, httpHelper_1.handleResponse(response)];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                e_5 = _a.sent();
                return [2 /*return*/, httpHelper_1.handleException(e_5, 'fetch failed')];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getAllUsers = getAllUsers;
var sendSignInLink = function (email) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var fn, result, e_6;
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
                e_6 = _a.sent();
                return [2 /*return*/, httpHelper_1.handleException(e_6, 'Sending link failed')];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.sendSignInLink = sendSignInLink;
var createUser = function (email, password) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var response, e_7;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, http_1.httpPost(baseUrl + '/create', {
                        email: email,
                        password: password,
                        displayName: email,
                        role: 'user',
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, httpHelper_1.handleResponse(response)];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                e_7 = _a.sent();
                return [2 /*return*/, httpHelper_1.handleException(e_7, 'Creating user failed')];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
var signup = function (email, password) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var pushToken, response, e_8;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('signup for ' + email);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, nativescript_plugin_firebase_1.default.getCurrentPushToken()];
            case 2:
                pushToken = _a.sent();
                return [4 /*yield*/, http_1.httpPost(baseUrl + '/signup', {
                        email: email,
                        password: password,
                        displayName: email,
                        role: 'user',
                        pushToken: pushToken,
                    })];
            case 3:
                response = _a.sent();
                console.log(response);
                return [4 /*yield*/, httpHelper_1.handleResponse(response)];
            case 4: return [2 /*return*/, _a.sent()];
            case 5:
                e_8 = _a.sent();
                return [2 /*return*/, httpHelper_1.handleException(e_8, 'Sign up failed')];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.signup = signup;
var addInvitesToCollection = function (email) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var inviteCollection, e_9;
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
                e_9 = _a.sent();
                return [2 /*return*/, httpHelper_1.handleException(e_9, 'Add invitiee failed')];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addInvitesToCollection = addInvitesToCollection;


/***/ }),

/***/ "./_shared/http/httpHelper.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("../node_modules/tslib/tslib.es6.js");
var http_1 = __webpack_require__("./_shared/http/http.ts");
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
exports.getJson = getJson;
var handleException = function (error, type) {
    console.log(error);
    alert(type + ': ' + error.message);
    return { message: error.message, type: type, isError: true, status: error.status, json: '' };
};
exports.handleException = handleException;
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
exports.handleResponse = handleResponse;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9fc2hhcmVkL2ZpcmViYXNlL3VzZXJzLnRzIiwid2VicGFjazovLy8uL19zaGFyZWQvaHR0cC9odHRwSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDhJQUFtRDtBQUNuRCx5SEFBK0Q7QUFDL0Qsb0lBQW9GO0FBQ3BGLDJEQUFnRTtBQUVoRSx1RUFBb0U7QUFFcEUsSUFBTSxPQUFPLEdBQUcsNkRBQTZEO0FBQzdFLElBQU0sS0FBSyxHQUFHLFVBQU8sS0FBYSxFQUFFLFFBQWdCOzs7Ozs7Z0JBRS9CLHFCQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDOztnQkFBN0UsU0FBUyxVQUFvRSxNQUF6RTtnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDO2dCQUNyQyxzQkFBTyxNQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFxQjt3QkFDeEQsSUFBTSxRQUFRLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTt3QkFDcEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7d0JBQ3JCLGdDQUFTLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUM7d0JBQ3pDLE9BQU8sUUFBUTtvQkFDakIsQ0FBQyxDQUFDOzs7Z0JBRUYsc0JBQU8sNEJBQWUsQ0FBQyxHQUFDLEVBQUUsY0FBYyxDQUFDOzs7O0tBRTVDO0FBaUdDLHNCQUFLO0FBaEdQLElBQU0sTUFBTSxHQUFHOzs7Ozs7Z0JBRUUscUJBQU0sV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRTs7Z0JBQXpDLElBQUksR0FBRyxTQUFrQztnQkFDL0MsNkJBQU0s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cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSdcbmltcG9ydCAqIGFzIGZpcmViYXNlQXBpIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwJ1xuaW1wb3J0IHsgc2V0U3RyaW5nLCByZW1vdmUsIGdldFN0cmluZyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnXG5pbXBvcnQgeyBodHRwR2V0LCBodHRwUG9zdCwgSHR0cFN0YXR1c0NvZGUgfSBmcm9tICcuLi9odHRwL2h0dHAnXG5pbXBvcnQgeyBJZFRva2VuUmVzdWx0IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSdcbmltcG9ydCB7IGhhbmRsZUV4Y2VwdGlvbiwgaGFuZGxlUmVzcG9uc2UgfSBmcm9tICcuLi9odHRwL2h0dHBIZWxwZXInXG5cbmNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1jYW1lbHMtZGV2LmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvdXNlcnMnXG5jb25zdCBsb2dpbiA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1c2VyIH0gPSBhd2FpdCBmaXJlYmFzZUFwaS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgIGNvbnNvbGUubG9nKCdGaXJlYmFzZSBsb2dpbiBzdWNjZXNzJylcbiAgICByZXR1cm4gdXNlci5nZXRJZFRva2VuUmVzdWx0KCkudGhlbigocmVzdWx0OiBJZFRva2VuUmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCB1c2VyRGF0YSA9IHsgdWlkOiB1c2VyLnVpZCwgdG9rZW46IHJlc3VsdC50b2tlbiwgcm9sZTogcmVzdWx0LmNsYWltc1sncm9sZSddIH1cbiAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKVxuICAgICAgc2V0U3RyaW5nKCdjYW1lbHMtdG9rZW4nLCB1c2VyRGF0YS50b2tlbilcbiAgICAgIHJldHVybiB1c2VyRGF0YVxuICAgIH0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGUsICdMb2dpbiBmYWlsZWQnKVxuICB9XG59XG5jb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZpcmViYXNlQXBpLmF1dGgoKS5zaWduT3V0KClcbiAgICByZW1vdmUoJ2NhbWVscy10b2tlbicpXG4gICAgY29uc29sZS5sb2coJ0ZpcmViYXNlIGxvZ291dCBzdWNjZXNzJylcbiAgICByZXR1cm4gZGF0YVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnTG9nb3V0IGZhaWxlZCcpXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tJZlRva2VuSXNWYWxpZCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBodHRwR2V0KGJhc2VVcmwgKyAnL3ZlcmlmeUlkVG9rZW4nKVxuICAgIGlmIChyZXN1bHQuc3RhdHVzICE9PSBIdHRwU3RhdHVzQ29kZS5PSykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKClcbiAgICB9XG4gICAgcmV0dXJuIHsgdmVyaWZpZWQ6IHRydWUgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgdmVyaWZpZWQ6IGZhbHNlIH1cbiAgfVxufVxuY29uc3QgZ2V0VXNlciA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBodHRwR2V0KGJhc2VVcmwgKyBgLyR7aWR9YClcbiAgICByZXR1cm4gYXdhaXQgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGUsICdmZXRjaCBmYWlsZWQnKVxuICB9XG59XG5cbmNvbnN0IGdldEFsbFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaHR0cEdldChiYXNlVXJsKVxuICAgIHJldHVybiBhd2FpdCBoYW5kbGVSZXNwb25zZShyZXNwb25zZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ2ZldGNoIGZhaWxlZCcpXG4gIH1cbn1cbmNvbnN0IHNlbmRTaWduSW5MaW5rID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmbiA9IGZpcmViYXNlQXBpLmZ1bmN0aW9ucygpLmh0dHBzQ2FsbGFibGUoJ3NlbmRNYWlsRm9yRnVuY3Rpb25zJywgJ3VzLWNlbnRyYWwxJylcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmbih7XG4gICAgICBlbWFpbCxcbiAgICAgIGxpbms6ICdodHRwczovL2NhbWVscy5wYWdlLmxpbmsvelhicCcsXG4gICAgICB0b2tlbjogZ2V0U3RyaW5nKCdjYW1lbHMtdG9rZW4nKSxcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGUsICdTZW5kaW5nIGxpbmsgZmFpbGVkJylcbiAgfVxufVxuY29uc3QgY3JlYXRlVXNlciA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBodHRwUG9zdChiYXNlVXJsICsgJy9jcmVhdGUnLCB7XG4gICAgICBlbWFpbCxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgZGlzcGxheU5hbWU6IGVtYWlsLFxuICAgICAgcm9sZTogJ3VzZXInLFxuICAgIH0pXG4gICAgcmV0dXJuIGF3YWl0IGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnQ3JlYXRpbmcgdXNlciBmYWlsZWQnKVxuICB9XG59XG5jb25zdCBzaWdudXAgPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICBjb25zb2xlLmxvZygnc2lnbnVwIGZvciAnICsgZW1haWwpXG4gIHRyeSB7XG4gICAgY29uc3QgcHVzaFRva2VuID0gYXdhaXQgZmlyZWJhc2UuZ2V0Q3VycmVudFB1c2hUb2tlbigpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBodHRwUG9zdChiYXNlVXJsICsgJy9zaWdudXAnLCB7XG4gICAgICBlbWFpbCxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgZGlzcGxheU5hbWU6IGVtYWlsLFxuICAgICAgcm9sZTogJ3VzZXInLFxuICAgICAgcHVzaFRva2VuLFxuICAgIH0pXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgcmV0dXJuIGF3YWl0IGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnU2lnbiB1cCBmYWlsZWQnKVxuICB9XG59XG5jb25zdCBhZGRJbnZpdGVzVG9Db2xsZWN0aW9uID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbnZpdGVDb2xsZWN0aW9uID0gYXdhaXQgZmlyZWJhc2VBcGkuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignaW52aXRlcycpXG4gICAgaW52aXRlQ29sbGVjdGlvbi5kb2MoZW1haWwpLnNldCh7XG4gICAgICBzdGF0dXM6IHRydWUsXG4gICAgfSlcbiAgICBhbGVydCgnWWF5eXkhISBJbnZpdGUgc2VudCB0byB0aGUgY2FtZWwnKVxuICAgIHJldHVybiBpbnZpdGVDb2xsZWN0aW9uXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGUsICdBZGQgaW52aXRpZWUgZmFpbGVkJylcbiAgfVxufVxuZXhwb3J0IHtcbiAgbG9naW4sXG4gIGxvZ291dCxcbiAgZ2V0VXNlcixcbiAgZ2V0QWxsVXNlcnMsXG4gIHNlbmRTaWduSW5MaW5rLFxuICBjcmVhdGVVc2VyLFxuICBhZGRJbnZpdGVzVG9Db2xsZWN0aW9uLFxuICBzaWdudXAsXG4gIGNoZWNrSWZUb2tlbklzVmFsaWQsXG59XG4iLCJpbXBvcnQgeyBJSHR0cEJhc2ljUmVzcG9uc2UsIElIdHRwUmVzcG9uc2UsIEh0dHBTdGF0dXNDb2RlIH0gZnJvbSAnLi9odHRwJ1xuYXN5bmMgZnVuY3Rpb24gZ2V0SnNvbihyZXNwb25zZTogSUh0dHBCYXNpY1Jlc3BvbnNlKTogUHJvbWlzZTxhbnk+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmNvbnN0IGhhbmRsZUV4Y2VwdGlvbiA9IChlcnJvcjogYW55LCB0eXBlOiBzdHJpbmcpID0+IHtcbiAgY29uc29sZS5sb2coZXJyb3IpXG4gIGFsZXJ0KHR5cGUgKyAnOiAnICsgZXJyb3IubWVzc2FnZSlcbiAgcmV0dXJuIHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSwgdHlwZSwgaXNFcnJvcjogdHJ1ZSwgc3RhdHVzOiBlcnJvci5zdGF0dXMsIGpzb246ICcnIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2UocmVzcG9uc2U6IElIdHRwQmFzaWNSZXNwb25zZSk6IFByb21pc2U8SUh0dHBSZXNwb25zZT4ge1xuICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSBIdHRwU3RhdHVzQ29kZS5VbmF1dGhvcml6ZWQpIHtcbiAgICByZXR1cm4gYXdhaXQgaGFuZGxlRXhjZXB0aW9uKHsgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMgfSwgJ1VuYXV0aG9yaXNlZCcpXG4gIH1cbiAgY29uc3Qgb2sgPSByZXNwb25zZS5zdGF0dXMgPT09IEh0dHBTdGF0dXNDb2RlLk9LIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gSHR0cFN0YXR1c0NvZGUuQ3JlYXRlZFxuICBjb25zdCBqc29uID0gYXdhaXQgZ2V0SnNvbihyZXNwb25zZSlcbiAgaWYgKGpzb24gPT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZEVycm9yczoge30sXG4gICAgICBqc29uOiBudWxsLFxuICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICBtZXNzYWdlOiAnJyxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGpzb24ubWVzc2FnZVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkRXJyb3JzOiBvayA/IHt9IDoganNvbi5lcnJvcnMsXG4gICAgICBqc29uOiBvayA/IGpzb24gOiBudWxsLFxuICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICBtZXNzYWdlLFxuICAgICAgaXNFcnJvcjogIW9rID8gdHJ1ZSA6IGZhbHNlLFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBnZXRKc29uLCBoYW5kbGVFeGNlcHRpb24sIGhhbmRsZVJlc3BvbnNlIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=