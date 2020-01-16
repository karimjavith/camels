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
var updateUser = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var response, e_10;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, http_1.httpPost(baseUrl + ("/" + id), { data: data })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, httpHelper_1.handleResponse(response)];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                e_10 = _a.sent();
                return [2 /*return*/, httpHelper_1.handleException(e_10, 'Update failed')];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateUser = updateUser;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9fc2hhcmVkL2ZpcmViYXNlL3VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDhJQUFtRDtBQUNuRCx5SEFBK0Q7QUFDL0Qsb0lBQW9GO0FBQ3BGLDJEQUFnRTtBQUVoRSx1RUFBb0U7QUFFcEUsSUFBTSxPQUFPLEdBQUcsNkRBQTZEO0FBQzdFLElBQU0sS0FBSyxHQUFHLFVBQU8sS0FBYSxFQUFFLFFBQWdCOzs7Ozs7Z0JBRS9CLHFCQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDOztnQkFBN0UsU0FBUyxVQUFvRSxNQUF6RTtnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDO2dCQUNyQyxzQkFBTyxNQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFxQjt3QkFDeEQsSUFBTSxRQUFRLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTt3QkFDcEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7d0JBQ3JCLGdDQUFTLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUM7d0JBQ3pDLE9BQU8sUUFBUTtvQkFDakIsQ0FBQyxDQUFDOzs7Z0JBRUYsc0JBQU8sNEJBQWUsQ0FBQyxHQUFDLEVBQUUsY0FBYyxDQUFDOzs7O0tBRTVDO0FBeUdDLHNCQUFLO0FBeEdQLElBQU0sTUFBTSxHQUFHOzs7Ozs7Z0JBRUUscUJBQU0sV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRTs7Z0JBQXpDLElBQUksR0FBRyxTQUFrQztnQkFDL0MsNkJBQU0sQ0FBQyxjQUFjLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMs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QyxHQUFHLENBQUMsUUFBUSxDQUFDO2dCQUNkLHFCQUFNLDJCQUFjLENBQUMsUUFBUSxDQUFDO29CQUFyQyxzQkFBTyxTQUE4Qjs7O2dCQUVyQyxzQkFBTyw0QkFBZSxDQUFDLEdBQUMsRUFBRSxnQkFBZ0IsQ0FBQzs7OztLQUU5QztBQTZCQyx3QkFBTTtBQTVCUixJQUFNLHNCQUFzQixHQUFHLFVBQU8sS0FBYTs7Ozs7O2dCQUV0QixxQkFBTSxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQzs7Z0JBQXRFLGdCQUFnQixHQUFHLFNBQW1EO2dCQUM1RSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUM5QixNQUFNLEVBQUUsSUFBSTtpQkFDYixDQUFDO2dCQUNGLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQztnQkFDekMsc0JBQU8sZ0JBQWdCOzs7Z0JBRXZCLHNCQUFPLDRCQUFlLENBQUMsR0FBQyxFQUFFLHFCQUFxQixDQUFDOzs7O0tBRW5EO0FBZ0JDLHdEQUFzQjtBQWZ4QixJQUFNLFVBQVUsR0FBRyxVQUFPLEVBQVUsRUFBRSxJQUE0Qjs7Ozs7O2dCQUU3QyxxQkFBTSxlQUFRLENBQUMsT0FBTyxJQUFHLE1BQUksRUFBSSxHQUFFLEVBQUUsSUFBSSxRQUFFLENBQUM7O2dCQUF2RCxRQUFRLEdBQUcsU0FBNEM7Z0JBQ3RELHFCQUFNLDJCQUFjLENBQUMsUUFBUSxDQUFDO29CQUFyQyxzQkFBTyxTQUE4Qjs7O2dCQUVyQyxzQkFBTyw0QkFBZSxDQUFDLElBQUMsRUFBRSxlQUFlLENBQUM7Ozs7S0FFN0M7QUFXQyxnQ0FBVSIsImZpbGUiOiJidW5kbGUuN2I3MDg5ODI0OWMxMzVkZjNiNTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJ1xuaW1wb3J0ICogYXMgZmlyZWJhc2VBcGkgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHAnXG5pbXBvcnQgeyBzZXRTdHJpbmcsIHJlbW92ZSwgZ2V0U3RyaW5nIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncydcbmltcG9ydCB7IGh0dHBHZXQsIGh0dHBQb3N0LCBIdHRwU3RhdHVzQ29kZSB9IGZyb20gJy4uL2h0dHAvaHR0cCdcbmltcG9ydCB7IElkVG9rZW5SZXN1bHQgfSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJ1xuaW1wb3J0IHsgaGFuZGxlRXhjZXB0aW9uLCBoYW5kbGVSZXNwb25zZSB9IGZyb20gJy4uL2h0dHAvaHR0cEhlbHBlcidcblxuY29uc3QgYmFzZVVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWNhbWVscy1kZXYuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS91c2VycydcbmNvbnN0IGxvZ2luID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHVzZXIgfSA9IGF3YWl0IGZpcmViYXNlQXBpLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgY29uc29sZS5sb2coJ0ZpcmViYXNlIGxvZ2luIHN1Y2Nlc3MnKVxuICAgIHJldHVybiB1c2VyLmdldElkVG9rZW5SZXN1bHQoKS50aGVuKChyZXN1bHQ6IElkVG9rZW5SZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0geyB1aWQ6IHVzZXIudWlkLCB0b2tlbjogcmVzdWx0LnRva2VuLCByb2xlOiByZXN1bHQuY2xhaW1zWydyb2xlJ10gfVxuICAgICAgY29uc29sZS5sb2codXNlckRhdGEpXG4gICAgICBzZXRTdHJpbmcoJ2NhbWVscy10b2tlbicsIHVzZXJEYXRhLnRva2VuKVxuICAgICAgcmV0dXJuIHVzZXJEYXRhXG4gICAgfSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ0xvZ2luIGZhaWxlZCcpXG4gIH1cbn1cbmNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmlyZWJhc2VBcGkuYXV0aCgpLnNpZ25PdXQoKVxuICAgIHJlbW92ZSgnY2FtZWxzLXRva2VuJylcbiAgICBjb25zb2xlLmxvZygnRmlyZWJhc2UgbG9nb3V0IHN1Y2Nlc3MnKVxuICAgIHJldHVybiBkYXRhXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGUsICdMb2dvdXQgZmFpbGVkJylcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBjaGVja0lmVG9rZW5Jc1ZhbGlkKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGh0dHBHZXQoYmFzZVVybCArICcvdmVyaWZ5SWRUb2tlbicpXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IEh0dHBTdGF0dXNDb2RlLk9LKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKVxuICAgIH1cbiAgICByZXR1cm4geyB2ZXJpZmllZDogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyB2ZXJpZmllZDogZmFsc2UgfVxuICB9XG59XG5jb25zdCBnZXRVc2VyID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGh0dHBHZXQoYmFzZVVybCArIGAvJHtpZH1gKVxuICAgIHJldHVybiBhd2FpdCBoYW5kbGVSZXNwb25zZShyZXNwb25zZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ2ZldGNoIGZhaWxlZCcpXG4gIH1cbn1cblxuY29uc3QgZ2V0QWxsVXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBodHRwR2V0KGJhc2VVcmwpXG4gICAgcmV0dXJuIGF3YWl0IGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnZmV0Y2ggZmFpbGVkJylcbiAgfVxufVxuY29uc3Qgc2VuZFNpZ25JbkxpbmsgPSBhc3luYyAoZW1haWw6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGZuID0gZmlyZWJhc2VBcGkuZnVuY3Rpb25zKCkuaHR0cHNDYWxsYWJsZSgnc2VuZE1haWxGb3JGdW5jdGlvbnMnLCAndXMtY2VudHJhbDEnKVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZuKHtcbiAgICAgIGVtYWlsLFxuICAgICAgbGluazogJ2h0dHBzOi8vY2FtZWxzLnBhZ2UubGluay96WGJwJyxcbiAgICAgIHRva2VuOiBnZXRTdHJpbmcoJ2NhbWVscy10b2tlbicpLFxuICAgIH0pXG4gICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgIHJldHVybiByZXN1bHRcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ1NlbmRpbmcgbGluayBmYWlsZWQnKVxuICB9XG59XG5jb25zdCBjcmVhdGVVc2VyID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGh0dHBQb3N0KGJhc2VVcmwgKyAnL2NyZWF0ZScsIHtcbiAgICAgIGVtYWlsLFxuICAgICAgcGFzc3dvcmQsXG4gICAgICBkaXNwbGF5TmFtZTogZW1haWwsXG4gICAgICByb2xlOiAndXNlcicsXG4gICAgfSlcbiAgICByZXR1cm4gYXdhaXQgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGUsICdDcmVhdGluZyB1c2VyIGZhaWxlZCcpXG4gIH1cbn1cbmNvbnN0IHNpZ251cCA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdzaWdudXAgZm9yICcgKyBlbWFpbClcbiAgdHJ5IHtcbiAgICBjb25zdCBwdXNoVG9rZW4gPSBhd2FpdCBmaXJlYmFzZS5nZXRDdXJyZW50UHVzaFRva2VuKClcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGh0dHBQb3N0KGJhc2VVcmwgKyAnL3NpZ251cCcsIHtcbiAgICAgIGVtYWlsLFxuICAgICAgcGFzc3dvcmQsXG4gICAgICBkaXNwbGF5TmFtZTogZW1haWwsXG4gICAgICByb2xlOiAndXNlcicsXG4gICAgICBwdXNoVG9rZW4sXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICByZXR1cm4gYXdhaXQgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGUsICdTaWduIHVwIGZhaWxlZCcpXG4gIH1cbn1cbmNvbnN0IGFkZEludml0ZXNUb0NvbGxlY3Rpb24gPSBhc3luYyAoZW1haWw6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGludml0ZUNvbGxlY3Rpb24gPSBhd2FpdCBmaXJlYmFzZUFwaS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdpbnZpdGVzJylcbiAgICBpbnZpdGVDb2xsZWN0aW9uLmRvYyhlbWFpbCkuc2V0KHtcbiAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICB9KVxuICAgIGFsZXJ0KCdZYXl5eSEhIEludml0ZSBzZW50IHRvIHRoZSBjYW1lbCcpXG4gICAgcmV0dXJuIGludml0ZUNvbGxlY3Rpb25cbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ0FkZCBpbnZpdGllZSBmYWlsZWQnKVxuICB9XG59XG5jb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKGlkOiBzdHJpbmcsIGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGh0dHBQb3N0KGJhc2VVcmwgKyBgLyR7aWR9YCwgeyBkYXRhIH0pXG4gICAgcmV0dXJuIGF3YWl0IGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnVXBkYXRlIGZhaWxlZCcpXG4gIH1cbn1cbmV4cG9ydCB7XG4gIGxvZ2luLFxuICBsb2dvdXQsXG4gIGdldFVzZXIsXG4gIGdldEFsbFVzZXJzLFxuICBzZW5kU2lnbkluTGluayxcbiAgY3JlYXRlVXNlcixcbiAgYWRkSW52aXRlc1RvQ29sbGVjdGlvbixcbiAgc2lnbnVwLFxuICBjaGVja0lmVG9rZW5Jc1ZhbGlkLFxuICB1cGRhdGVVc2VyLFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==