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


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9fc2hhcmVkL2ZpcmViYXNlL3VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDhJQUFtRDtBQUNuRCx5SEFBK0Q7QUFDL0Qsb0lBQW9GO0FBQ3BGLDJEQUFnRTtBQUVoRSx1RUFBb0U7QUFFcEUsSUFBTSxPQUFPLEdBQUcsNkRBQTZEO0FBQzdFLElBQU0sS0FBSyxHQUFHLFVBQU8sS0FBYSxFQUFFLFFBQWdCOzs7Ozs7Z0JBRS9CLHFCQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDOztnQkFBN0UsU0FBUyxVQUFvRSxNQUF6RTtnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDO2dCQUNyQyxzQkFBTyxNQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFxQjt3QkFDeEQsSUFBTSxRQUFRLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTt3QkFDcEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7d0JBQ3JCLGdDQUFTLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUM7d0JBQ3pDLE9BQU8sUUFBUTtvQkFDakIsQ0FBQyxDQUFDOzs7Z0JBRUYsc0JBQU8sNEJBQWUsQ0FBQyxHQUFDLEVBQUUsY0FBYyxDQUFDOzs7O0tBRTVDO0FBaUdDLHNCQUFLO0FBaEdQLElBQU0sTUFBTSxHQUFHOzs7Ozs7Z0JBRUUscUJBQU0sV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRTs7Z0JBQXpDLElBQUksR0FBRyxTQUFrQztnQkFDL0MsNkJBQU0sQ0FBQyxjQUFjLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMs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QyxHQUFHLENBQUMsUUFBUSxDQUFDO2dCQUNkLHFCQUFNLDJCQUFjLENBQUMsUUFBUSxDQUFDO29CQUFyQyxzQkFBTyxTQUE4Qjs7O2dCQUVyQyxzQkFBTyw0QkFBZSxDQUFDLEdBQUMsRUFBRSxnQkFBZ0IsQ0FBQzs7OztLQUU5QztBQXFCQyx3QkFBTTtBQXBCUixJQUFNLHNCQUFzQixHQUFHLFVBQU8sS0FBYTs7Ozs7O2dCQUV0QixxQkFBTSxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQzs7Z0JBQXRFLGdCQUFnQixHQUFHLFNBQW1EO2dCQUM1RSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUM5QixNQUFNLEVBQUUsSUFBSTtpQkFDYixDQUFDO2dCQUNGLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQztnQkFDekMsc0JBQU8sZ0JBQWdCOzs7Z0JBRXZCLHNCQUFPLDRCQUFlLENBQUMsR0FBQyxFQUFFLHFCQUFxQixDQUFDOzs7O0tBRW5EO0FBUUMsd0RBQXNCIiwiZmlsZSI6ImJ1bmRsZS5lNzRlNWUwZmQ2OTYwYjYwOWZlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnXG5pbXBvcnQgKiBhcyBmaXJlYmFzZUFwaSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2FwcCdcbmltcG9ydCB7IHNldFN0cmluZywgcmVtb3ZlLCBnZXRTdHJpbmcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJ1xuaW1wb3J0IHsgaHR0cEdldCwgaHR0cFBvc3QsIEh0dHBTdGF0dXNDb2RlIH0gZnJvbSAnLi4vaHR0cC9odHRwJ1xuaW1wb3J0IHsgSWRUb2tlblJlc3VsdCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnXG5pbXBvcnQgeyBoYW5kbGVFeGNlcHRpb24sIGhhbmRsZVJlc3BvbnNlIH0gZnJvbSAnLi4vaHR0cC9odHRwSGVscGVyJ1xuXG5jb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtY2FtZWxzLWRldi5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL3VzZXJzJ1xuY29uc3QgbG9naW4gPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdXNlciB9ID0gYXdhaXQgZmlyZWJhc2VBcGkuYXV0aCgpLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICBjb25zb2xlLmxvZygnRmlyZWJhc2UgbG9naW4gc3VjY2VzcycpXG4gICAgcmV0dXJuIHVzZXIuZ2V0SWRUb2tlblJlc3VsdCgpLnRoZW4oKHJlc3VsdDogSWRUb2tlblJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgdXNlckRhdGEgPSB7IHVpZDogdXNlci51aWQsIHRva2VuOiByZXN1bHQudG9rZW4sIHJvbGU6IHJlc3VsdC5jbGFpbXNbJ3JvbGUnXSB9XG4gICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSlcbiAgICAgIHNldFN0cmluZygnY2FtZWxzLXRva2VuJywgdXNlckRhdGEudG9rZW4pXG4gICAgICByZXR1cm4gdXNlckRhdGFcbiAgICB9KVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnTG9naW4gZmFpbGVkJylcbiAgfVxufVxuY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmaXJlYmFzZUFwaS5hdXRoKCkuc2lnbk91dCgpXG4gICAgcmVtb3ZlKCdjYW1lbHMtdG9rZW4nKVxuICAgIGNvbnNvbGUubG9nKCdGaXJlYmFzZSBsb2dvdXQgc3VjY2VzcycpXG4gICAgcmV0dXJuIGRhdGFcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ0xvZ291dCBmYWlsZWQnKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrSWZUb2tlbklzVmFsaWQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgaHR0cEdldChiYXNlVXJsICsgJy92ZXJpZnlJZFRva2VuJylcbiAgICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gSHR0cFN0YXR1c0NvZGUuT0spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigpXG4gICAgfVxuICAgIHJldHVybiB7IHZlcmlmaWVkOiB0cnVlIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IHZlcmlmaWVkOiBmYWxzZSB9XG4gIH1cbn1cbmNvbnN0IGdldFVzZXIgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaHR0cEdldChiYXNlVXJsICsgYC8ke2lkfWApXG4gICAgcmV0dXJuIGF3YWl0IGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnZmV0Y2ggZmFpbGVkJylcbiAgfVxufVxuXG5jb25zdCBnZXRBbGxVc2VycyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGh0dHBHZXQoYmFzZVVybClcbiAgICByZXR1cm4gYXdhaXQgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGUsICdmZXRjaCBmYWlsZWQnKVxuICB9XG59XG5jb25zdCBzZW5kU2lnbkluTGluayA9IGFzeW5jIChlbWFpbDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZm4gPSBmaXJlYmFzZUFwaS5mdW5jdGlvbnMoKS5odHRwc0NhbGxhYmxlKCdzZW5kTWFpbEZvckZ1bmN0aW9ucycsICd1cy1jZW50cmFsMScpXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZm4oe1xuICAgICAgZW1haWwsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9jYW1lbHMucGFnZS5saW5rL3pYYnAnLFxuICAgICAgdG9rZW46IGdldFN0cmluZygnY2FtZWxzLXRva2VuJyksXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnU2VuZGluZyBsaW5rIGZhaWxlZCcpXG4gIH1cbn1cbmNvbnN0IGNyZWF0ZVVzZXIgPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaHR0cFBvc3QoYmFzZVVybCArICcvY3JlYXRlJywge1xuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZCxcbiAgICAgIGRpc3BsYXlOYW1lOiBlbWFpbCxcbiAgICAgIHJvbGU6ICd1c2VyJyxcbiAgICB9KVxuICAgIHJldHVybiBhd2FpdCBoYW5kbGVSZXNwb25zZShyZXNwb25zZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ0NyZWF0aW5nIHVzZXIgZmFpbGVkJylcbiAgfVxufVxuY29uc3Qgc2lnbnVwID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgY29uc29sZS5sb2coJ3NpZ251cCBmb3IgJyArIGVtYWlsKVxuICB0cnkge1xuICAgIGNvbnN0IHB1c2hUb2tlbiA9IGF3YWl0IGZpcmViYXNlLmdldEN1cnJlbnRQdXNoVG9rZW4oKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaHR0cFBvc3QoYmFzZVVybCArICcvc2lnbnVwJywge1xuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZCxcbiAgICAgIGRpc3BsYXlOYW1lOiBlbWFpbCxcbiAgICAgIHJvbGU6ICd1c2VyJyxcbiAgICAgIHB1c2hUb2tlbixcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgIHJldHVybiBhd2FpdCBoYW5kbGVSZXNwb25zZShyZXNwb25zZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ1NpZ24gdXAgZmFpbGVkJylcbiAgfVxufVxuY29uc3QgYWRkSW52aXRlc1RvQ29sbGVjdGlvbiA9IGFzeW5jIChlbWFpbDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52aXRlQ29sbGVjdGlvbiA9IGF3YWl0IGZpcmViYXNlQXBpLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2ludml0ZXMnKVxuICAgIGludml0ZUNvbGxlY3Rpb24uZG9jKGVtYWlsKS5zZXQoe1xuICAgICAgc3RhdHVzOiB0cnVlLFxuICAgIH0pXG4gICAgYWxlcnQoJ1lheXl5ISEgSW52aXRlIHNlbnQgdG8gdGhlIGNhbWVsJylcbiAgICByZXR1cm4gaW52aXRlQ29sbGVjdGlvblxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnQWRkIGludml0aWVlIGZhaWxlZCcpXG4gIH1cbn1cbmV4cG9ydCB7XG4gIGxvZ2luLFxuICBsb2dvdXQsXG4gIGdldFVzZXIsXG4gIGdldEFsbFVzZXJzLFxuICBzZW5kU2lnbkluTGluayxcbiAgY3JlYXRlVXNlcixcbiAgYWRkSW52aXRlc1RvQ29sbGVjdGlvbixcbiAgc2lnbnVwLFxuICBjaGVja0lmVG9rZW5Jc1ZhbGlkLFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==