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
var enum_1 = __webpack_require__("./_shared/enum.ts");
var Toasty_1 = __webpack_require__("./_shared/Toasty.ts");
var baseUrl = 'https://us-central1-camels-dev.cloudfunctions.net/api/users';
var login = function (email, password) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var user_1, e_1, errorObj;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, firebaseApi.auth().signInWithEmailAndPassword(email, password)];
            case 1:
                user_1 = (_a.sent()).user;
                console.log('Firebase login success');
                return [2 /*return*/, user_1.getIdTokenResult(true).then(function (result) {
                        var userData = { uid: user_1.uid, token: result.token, role: result.claims['role'] };
                        console.log(userData);
                        application_settings_1.setString('camels-token', userData.token);
                        return userData;
                    })];
            case 2:
                e_1 = _a.sent();
                console.log(e_1);
                errorObj = tslib_1.__assign(tslib_1.__assign({}, e_1), { message: 'Invalid login' });
                return [2 /*return*/, httpHelper_1.handleException(errorObj, 'Login failed')];
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
        var response, e_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, http_1.httpGet(baseUrl + '/verifyIdToken')];
                case 1:
                    response = _a.sent();
                    if (response.status !== http_1.HttpStatusCode.OK) {
                        throw new Error();
                    }
                    return [4 /*yield*/, httpHelper_1.handleResponse(response)];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    e_3 = _a.sent();
                    return [2 /*return*/, httpHelper_1.handleException(e_3, 'Session expired')];
                case 4: return [2 /*return*/];
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
var signup = function (email, password, displayName) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var pushToken, response, e_8;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, nativescript_plugin_firebase_1.default.getCurrentPushToken()];
            case 1:
                pushToken = _a.sent();
                return [4 /*yield*/, http_1.httpPost(baseUrl + '/signup', {
                        email: email,
                        password: password,
                        displayName: displayName,
                        role: enum_1.AppRoles.User,
                        pushToken: pushToken,
                    })];
            case 2:
                response = _a.sent();
                console.log(response);
                if (response.status === http_1.HttpStatusCode.InternalServerError) {
                    throw new Error('Invalid entries');
                }
                return [4 /*yield*/, httpHelper_1.handleResponse(response)];
            case 3: return [2 /*return*/, _a.sent()];
            case 4:
                e_8 = _a.sent();
                return [2 /*return*/, httpHelper_1.handleException(e_8, 'Sign up failed')];
            case 5: return [2 /*return*/];
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
                return [4 /*yield*/, http_1.httpPatch(baseUrl + ("/" + id), {
                        displayName: data.displayName,
                        role: data.role,
                    })];
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
var removeUser = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var response, e_11;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, http_1.httpDelete(baseUrl + ("/" + id))];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, httpHelper_1.handleResponse(response)];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                e_11 = _a.sent();
                return [2 /*return*/, httpHelper_1.handleException(e_11, 'Delete failed')];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.removeUser = removeUser;
var sendPasswordResetEmail = function (email) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var e_12;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, firebaseApi.auth().sendPasswordResetEmail(email)];
            case 1:
                _a.sent();
                Toasty_1.ToastService('Email sent', '#a5d6a7').show();
                return [3 /*break*/, 3];
            case 2:
                e_12 = _a.sent();
                Toasty_1.ToastService('Something went wrong. Please try again later', '#ff4350').show();
                return [2 /*return*/];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.sendPasswordResetEmail = sendPasswordResetEmail;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9fc2hhcmVkL2ZpcmViYXNlL3VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDhJQUFtRDtBQUNuRCx5SEFBK0Q7QUFDL0Qsb0lBQW9GO0FBQ3BGLDJEQUF1RjtBQUV2Rix1RUFBb0U7QUFDcEUsc0RBQWtDO0FBRWxDLDBEQUF3QztBQUV4QyxJQUFNLE9BQU8sR0FBRyw2REFBNkQ7QUFDN0UsSUFBTSxLQUFLLEdBQUcsVUFBTyxLQUFhLEVBQUUsUUFBZ0I7Ozs7OztnQkFFL0IscUJBQU0sV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLDBCQUEwQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7O2dCQUE3RSxTQUFTLFVBQW9FLE1BQXpFO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3JDLHNCQUFPLE1BQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFxQjt3QkFDNUQsSUFBTSxRQUFRLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTt3QkFDcEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7d0JBQ3JCLGdDQUFTLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUM7d0JBQ3pDLE9BQU8sUUFBUTtvQkFDakIsQ0FBQyxDQUFDOzs7Z0JBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUM7Z0JBQ1IsUUFBUSx5Q0FBUSxHQUFDLEtBQUUsT0FBTyxFQUFFLGVBQWUsR0FBRTtnQkFDbkQsc0JBQU8sNEJBQWUsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDOzs7O0tBRW5EO0FBK0hDLHNCQUFLO0FBOUhQLElBQU0sTUFBTSxHQUFHOzs7Ozs7Z0JBRUUs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Q0FBQztvQkFBckMsc0JBQU8sU0FBOEI7OztnQkFFckMsc0JBQU8sNEJBQWUsQ0FBQyxJQUFDLEVBQUUsZUFBZSxDQUFDOzs7O0tBRTdDO0FBNEJDLGdDQUFVO0FBM0JaLElBQU0sVUFBVSxHQUFHLFVBQU8sRUFBVTs7Ozs7O2dCQUVmLHFCQUFNLGlCQUFVLENBQUMsT0FBTyxJQUFHLE1BQUksRUFBSSxFQUFDOztnQkFBL0MsUUFBUSxHQUFHLFNBQW9DO2dCQUM5QyxxQkFBTSwyQkFBYyxDQUFDLFFBQVEsQ0FBQztvQkFBckMsc0JBQU8sU0FBOEI7OztnQkFFckMsc0JBQU8sNEJBQWUsQ0FBQyxJQUFDLEVBQUUsZUFBZSxDQUFDOzs7O0tBRTdDO0FBcUJDLGdDQUFVO0FBcEJaLElBQU0sc0JBQXNCLEdBQUcsVUFBTyxLQUFhOzs7Ozs7Z0JBRS9DLHFCQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUM7O2dCQUF0RCxTQUFzRDtnQkFDdEQscUJBQVksQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFOzs7O2dCQUU1QyxxQkFBWSxDQUFDLDhDQUE4QyxFQUFFLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRTtnQkFDOUUsc0JBQU07Ozs7S0FFVDtBQWFDLHdEQUFzQiIsImZpbGUiOiJidW5kbGUuZjFjOTg5ZThjOGYwZWE2M2M3MjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJ1xuaW1wb3J0ICogYXMgZmlyZWJhc2VBcGkgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHAnXG5pbXBvcnQgeyBzZXRTdHJpbmcsIHJlbW92ZSwgZ2V0U3RyaW5nIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncydcbmltcG9ydCB7IGh0dHBHZXQsIGh0dHBQb3N0LCBodHRwUGF0Y2gsIEh0dHBTdGF0dXNDb2RlLCBodHRwRGVsZXRlIH0gZnJvbSAnLi4vaHR0cC9odHRwJ1xuaW1wb3J0IHsgSWRUb2tlblJlc3VsdCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnXG5pbXBvcnQgeyBoYW5kbGVFeGNlcHRpb24sIGhhbmRsZVJlc3BvbnNlIH0gZnJvbSAnLi4vaHR0cC9odHRwSGVscGVyJ1xuaW1wb3J0IHsgQXBwUm9sZXMgfSBmcm9tICcuLi9lbnVtJ1xuXG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuLi9Ub2FzdHknXG5cbmNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1jYW1lbHMtZGV2LmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvdXNlcnMnXG5jb25zdCBsb2dpbiA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1c2VyIH0gPSBhd2FpdCBmaXJlYmFzZUFwaS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgIGNvbnNvbGUubG9nKCdGaXJlYmFzZSBsb2dpbiBzdWNjZXNzJylcbiAgICByZXR1cm4gdXNlci5nZXRJZFRva2VuUmVzdWx0KHRydWUpLnRoZW4oKHJlc3VsdDogSWRUb2tlblJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgdXNlckRhdGEgPSB7IHVpZDogdXNlci51aWQsIHRva2VuOiByZXN1bHQudG9rZW4sIHJvbGU6IHJlc3VsdC5jbGFpbXNbJ3JvbGUnXSB9XG4gICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSlcbiAgICAgIHNldFN0cmluZygnY2FtZWxzLXRva2VuJywgdXNlckRhdGEudG9rZW4pXG4gICAgICByZXR1cm4gdXNlckRhdGFcbiAgICB9KVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBjb25zdCBlcnJvck9iaiA9IHsgLi4uZSwgbWVzc2FnZTogJ0ludmFsaWQgbG9naW4nIH1cbiAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGVycm9yT2JqLCAnTG9naW4gZmFpbGVkJylcbiAgfVxufVxuY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmaXJlYmFzZUFwaS5hdXRoKCkuc2lnbk91dCgpXG4gICAgcmVtb3ZlKCdjYW1lbHMtdG9rZW4nKVxuICAgIGNvbnNvbGUubG9nKCdGaXJlYmFzZSBsb2dvdXQgc3VjY2VzcycpXG4gICAgcmV0dXJuIGRhdGFcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ0xvZ291dCBmYWlsZWQnKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrSWZUb2tlbklzVmFsaWQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBodHRwR2V0KGJhc2VVcmwgKyAnL3ZlcmlmeUlkVG9rZW4nKVxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IEh0dHBTdGF0dXNDb2RlLk9LKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKVxuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGUsICdTZXNzaW9uIGV4cGlyZWQnKVxuICB9XG59XG5jb25zdCBnZXRVc2VyID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGh0dHBHZXQoYmFzZVVybCArIGAvJHtpZH1gKVxuICAgIHJldHVybiBhd2FpdCBoYW5kbGVSZXNwb25zZShyZXNwb25zZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ2ZldGNoIGZhaWxlZCcpXG4gIH1cbn1cblxuY29uc3QgZ2V0QWxsVXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBodHRwR2V0KGJhc2VVcmwpXG4gICAgcmV0dXJuIGF3YWl0IGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnZmV0Y2ggZmFpbGVkJylcbiAgfVxufVxuY29uc3Qgc2VuZFNpZ25JbkxpbmsgPSBhc3luYyAoZW1haWw6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGZuID0gZmlyZWJhc2VBcGkuZnVuY3Rpb25zKCkuaHR0cHNDYWxsYWJsZSgnc2VuZE1haWxGb3JGdW5jdGlvbnMnLCAndXMtY2VudHJhbDEnKVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZuKHtcbiAgICAgIGVtYWlsLFxuICAgICAgbGluazogJ2h0dHBzOi8vY2FtZWxzLnBhZ2UubGluay96WGJwJyxcbiAgICAgIHRva2VuOiBnZXRTdHJpbmcoJ2NhbWVscy10b2tlbicpLFxuICAgIH0pXG4gICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgIHJldHVybiByZXN1bHRcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ1NlbmRpbmcgbGluayBmYWlsZWQnKVxuICB9XG59XG5jb25zdCBjcmVhdGVVc2VyID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGh0dHBQb3N0KGJhc2VVcmwgKyAnL2NyZWF0ZScsIHtcbiAgICAgIGVtYWlsLFxuICAgICAgcGFzc3dvcmQsXG4gICAgICBkaXNwbGF5TmFtZTogZW1haWwsXG4gICAgICByb2xlOiAndXNlcicsXG4gICAgfSlcbiAgICByZXR1cm4gYXdhaXQgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGUsICdDcmVhdGluZyB1c2VyIGZhaWxlZCcpXG4gIH1cbn1cbmNvbnN0IHNpZ251cCA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBkaXNwbGF5TmFtZTogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcHVzaFRva2VuID0gYXdhaXQgZmlyZWJhc2UuZ2V0Q3VycmVudFB1c2hUb2tlbigpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBodHRwUG9zdChiYXNlVXJsICsgJy9zaWdudXAnLCB7XG4gICAgICBlbWFpbCxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgZGlzcGxheU5hbWUsXG4gICAgICByb2xlOiBBcHBSb2xlcy5Vc2VyLFxuICAgICAgcHVzaFRva2VuLFxuICAgIH0pXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gSHR0cFN0YXR1c0NvZGUuSW50ZXJuYWxTZXJ2ZXJFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGVudHJpZXMnKVxuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGUsICdTaWduIHVwIGZhaWxlZCcpXG4gIH1cbn1cbmNvbnN0IGFkZEludml0ZXNUb0NvbGxlY3Rpb24gPSBhc3luYyAoZW1haWw6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGludml0ZUNvbGxlY3Rpb24gPSBhd2FpdCBmaXJlYmFzZUFwaS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdpbnZpdGVzJylcbiAgICBpbnZpdGVDb2xsZWN0aW9uLmRvYyhlbWFpbCkuc2V0KHtcbiAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICB9KVxuICAgIGFsZXJ0KCdZYXl5eSEhIEludml0ZSBzZW50IHRvIHRoZSBjYW1lbCcpXG4gICAgcmV0dXJuIGludml0ZUNvbGxlY3Rpb25cbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ0FkZCBpbnZpdGllZSBmYWlsZWQnKVxuICB9XG59XG5jb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKGlkOiBzdHJpbmcsIGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGh0dHBQYXRjaChiYXNlVXJsICsgYC8ke2lkfWAsIHtcbiAgICAgIGRpc3BsYXlOYW1lOiBkYXRhLmRpc3BsYXlOYW1lLFxuICAgICAgcm9sZTogZGF0YS5yb2xlLFxuICAgIH0pXG4gICAgcmV0dXJuIGF3YWl0IGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnVXBkYXRlIGZhaWxlZCcpXG4gIH1cbn1cbmNvbnN0IHJlbW92ZVVzZXIgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaHR0cERlbGV0ZShiYXNlVXJsICsgYC8ke2lkfWApXG4gICAgcmV0dXJuIGF3YWl0IGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnRGVsZXRlIGZhaWxlZCcpXG4gIH1cbn1cbmNvbnN0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwgPSBhc3luYyAoZW1haWw6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IGZpcmViYXNlQXBpLmF1dGgoKS5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKVxuICAgIFRvYXN0U2VydmljZSgnRW1haWwgc2VudCcsICcjYTVkNmE3Jykuc2hvdygpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBUb2FzdFNlcnZpY2UoJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyJywgJyNmZjQzNTAnKS5zaG93KClcbiAgICByZXR1cm5cbiAgfVxufVxuZXhwb3J0IHtcbiAgbG9naW4sXG4gIGxvZ291dCxcbiAgZ2V0VXNlcixcbiAgZ2V0QWxsVXNlcnMsXG4gIHNlbmRTaWduSW5MaW5rLFxuICBjcmVhdGVVc2VyLFxuICBhZGRJbnZpdGVzVG9Db2xsZWN0aW9uLFxuICBzaWdudXAsXG4gIGNoZWNrSWZUb2tlbklzVmFsaWQsXG4gIHVwZGF0ZVVzZXIsXG4gIHJlbW92ZVVzZXIsXG4gIHNlbmRQYXNzd29yZFJlc2V0RW1haWwsXG59XG4iXSwic291cmNlUm9vdCI6IiJ9