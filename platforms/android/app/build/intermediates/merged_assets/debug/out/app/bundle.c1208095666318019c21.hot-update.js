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
                                isError: response.status !== http_1.HttpStatusCode.OK ? true : false,
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


/***/ }),

/***/ "./_shared/http.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("../node_modules/tslib/tslib.es6.js");
var application_settings_1 = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");
var standardHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    Authorization: "Bearer ",
};
var fetchOptions = {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: tslib_1.__assign({}, standardHeaders),
    redirect: 'follow',
    referrer: 'no-referrer',
};
var postOptions = tslib_1.__assign(tslib_1.__assign({}, fetchOptions), { method: 'POST' });
var deleteOptions = tslib_1.__assign(tslib_1.__assign({}, fetchOptions), { method: 'DELETE' });
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["Post"] = "POST";
    HttpMethod["Get"] = "GET";
    HttpMethod["Delete"] = "DELETE";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["Created"] = 201] = "Created";
    HttpStatusCode[HttpStatusCode["BadRequest"] = 400] = "BadRequest";
    HttpStatusCode[HttpStatusCode["Unauthorized"] = 401] = "Unauthorized";
    HttpStatusCode[HttpStatusCode["Forbidden"] = 403] = "Forbidden";
    HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
    HttpStatusCode[HttpStatusCode["UnprocessableEntity"] = 422] = "UnprocessableEntity";
    HttpStatusCode[HttpStatusCode["InternalServerError"] = 500] = "InternalServerError";
    HttpStatusCode[HttpStatusCode["Other"] = 999] = "Other";
})(HttpStatusCode = exports.HttpStatusCode || (exports.HttpStatusCode = {}));
function httpGet(url) {
    return fetch(url, tslib_1.__assign(tslib_1.__assign({}, fetchOptions), { method: HttpMethod.Get, headers: tslib_1.__assign(tslib_1.__assign({}, standardHeaders), { Authorization: "Bearer " + application_settings_1.getString('camels-token') }) }));
}
exports.httpGet = httpGet;
function httpDelete(url) {
    return fetch(url, deleteOptions);
}
exports.httpDelete = httpDelete;
function httpPost(url, data) {
    console.log('post obj - ' + JSON.stringify(data));
    return fetch(url, tslib_1.__assign(tslib_1.__assign({}, postOptions), { headers: tslib_1.__assign(tslib_1.__assign({}, standardHeaders), { Authorization: "Bearer " + application_settings_1.getString('camels-token') }), body: JSON.stringify(data) }));
}
exports.httpPost = httpPost;
exports.default = { httpGet: httpGet, httpPost: httpPost, httpDelete: httpDelete };


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9fc2hhcmVkL2ZpcmJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vX3NoYXJlZC9odHRwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHlIQUErRDtBQUMvRCxvSUFBb0Y7QUFDcEYsc0RBQTZGO0FBRzdGLElBQU0sT0FBTyxHQUFHLHVEQUF1RDtBQUV2RSxTQUFlLE9BQU8sQ0FBQyxRQUE0Qjs7Ozs7OztvQkFFeEMscUJBQU0sUUFBUSxDQUFDLElBQUksRUFBRTt3QkFBNUIsc0JBQU8sU0FBcUI7OztvQkFFNUIsc0JBQU8sSUFBSTs7Ozs7Q0FFZDtBQUVELElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBVSxFQUFFLElBQVk7SUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDbEIsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUNsQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxRQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUN4RixDQUFDO0FBRUQsU0FBZSxjQUFjLENBQUMsUUFBNEI7Ozs7Ozt5QkFDcEQsU0FBUSxDQUFDLE1BQU0sS0FBSyxxQkFBYyxDQUFDLFlBQVksR0FBL0Msd0JBQStDO29CQUMxQyxxQkFBTSxlQUFlLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLGNBQWMsQ0FBQzt3QkFBekUsc0JBQU8sU0FBa0U7O29CQUVyRSxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sS0FBSyxxQkFBYyxDQUFDLEVBQUUsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLHFCQUFjLENBQUMsT0FBTztvQkFDakYscUJBQU0sT0FBTyxDQUFDLFFBQVEsQ0FBQzs7b0JBQTlCLElBQUksR0FBRyxTQUF1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c0JBQWMsS0FBZCxzQkFBYyxRQVV6QjtBQWtCRCxTQUFnQixPQUFPLENBQUMsR0FBVztJQUNqQyxPQUFPLEtBQUssQ0FBQyxHQUFHLHdDQUNYLFlBQVksS0FDZixNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFDdEIsT0FBTyx3Q0FBTyxlQUFlLEtBQUUsYUFBYSxFQUFFLFlBQVUsZ0NBQVMsQ0FBQyxjQUFjLENBQUcsT0FDbkY7QUFDSixDQUFDO0FBTkQsMEJBTUM7QUFFRCxTQUFnQixVQUFVLENBQUMsR0FBVztJQUNwQyxPQUFPLEtBQUssQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDO0FBQ2xDLENBQUM7QUFGRCxnQ0FFQztBQUVELFNBQWdCLFFBQVEsQ0FBQyxHQUFXLEVBQUUsSUFBWTtJQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELE9BQU8sS0FBSyxDQUFDLEdBQUcsd0NBQ1gsV0FBVyxLQUNkLE9BQU8sd0NBQU8sZUFBZSxLQUFFLGFBQWEsRUFBRSxZQUFVLGdDQUFTLENBQUMsY0FBYyxDQUFHLEtBQ25GLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUMxQjtBQUNKLENBQUM7QUFQRCw0QkFPQztBQUVELGtCQUFlLEVBQUUsT0FBTyxXQUFFLFFBQVEsWUFBRSxVQUFVLGNBQUUiLCJmaWxlIjoiYnVuZGxlLmMxMjA4MDk1NjY2MzE4MDE5YzIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmaXJlYmFzZUFwaSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2FwcCdcbmltcG9ydCB7IHNldFN0cmluZywgcmVtb3ZlLCBnZXRTdHJpbmcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJ1xuaW1wb3J0IHsgaHR0cEdldCwgaHR0cFBvc3QsIElIdHRwQmFzaWNSZXNwb25zZSwgSUh0dHBSZXNwb25zZSwgSHR0cFN0YXR1c0NvZGUgfSBmcm9tICcuL2h0dHAnXG5pbXBvcnQgeyBJZFRva2VuUmVzdWx0IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSdcblxuY29uc3QgYmFzZVVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWNhbWVscy1kZXYuY2xvdWRmdW5jdGlvbnMubmV0L2FwaSdcblxuYXN5bmMgZnVuY3Rpb24gZ2V0SnNvbihyZXNwb25zZTogSUh0dHBCYXNpY1Jlc3BvbnNlKTogUHJvbWlzZTxhbnk+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmNvbnN0IGhhbmRsZUV4Y2VwdGlvbiA9IChlcnJvcjogYW55LCB0eXBlOiBzdHJpbmcpID0+IHtcbiAgY29uc29sZS5sb2coZXJyb3IpXG4gIGFsZXJ0KHR5cGUgKyAnOiAnICsgZXJyb3IubWVzc2FnZSlcbiAgcmV0dXJuIHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSwgdHlwZSwgaXNFcnJvcjogdHJ1ZSwgc3RhdHVzOiBlcnJvci5zdGF0dXMsIGpzb246ICcnIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2UocmVzcG9uc2U6IElIdHRwQmFzaWNSZXNwb25zZSk6IFByb21pc2U8SUh0dHBSZXNwb25zZT4ge1xuICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSBIdHRwU3RhdHVzQ29kZS5VbmF1dGhvcml6ZWQpIHtcbiAgICByZXR1cm4gYXdhaXQgaGFuZGxlRXhjZXB0aW9uKHsgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMgfSwgJ1VuYXV0aG9yaXNlZCcpXG4gIH1cbiAgY29uc3Qgb2sgPSByZXNwb25zZS5zdGF0dXMgPT09IEh0dHBTdGF0dXNDb2RlLk9LIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gSHR0cFN0YXR1c0NvZGUuQ3JlYXRlZFxuICBjb25zdCBqc29uID0gYXdhaXQgZ2V0SnNvbihyZXNwb25zZSlcblxuICBpZiAoanNvbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkRXJyb3JzOiB7fSxcbiAgICAgIGpzb246IG51bGwsXG4gICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIG1lc3NhZ2U6ICcnLFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ganNvbi5tZXNzYWdlXG5cbiAgICByZXR1cm4ge1xuICAgICAgZmllbGRFcnJvcnM6IG9rID8ge30gOiBqc29uLmVycm9ycyxcbiAgICAgIGpzb246IG9rID8ganNvbiA6IG51bGwsXG4gICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBpc0Vycm9yOiByZXNwb25zZS5zdGF0dXMgIT09IEh0dHBTdGF0dXNDb2RlLk9LID8gdHJ1ZSA6IGZhbHNlLFxuICAgIH1cbiAgfVxufVxuY29uc3QgbG9naW4gPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdXNlciB9ID0gYXdhaXQgZmlyZWJhc2VBcGkuYXV0aCgpLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICBjb25zb2xlLmxvZygnRmlyZWJhc2UgbG9naW4gc3VjY2VzcycpXG4gICAgcmV0dXJuIHVzZXIuZ2V0SWRUb2tlblJlc3VsdCgpLnRoZW4oKHJlc3VsdDogSWRUb2tlblJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgdXNlckRhdGEgPSB7IHVpZDogdXNlci51aWQsIHRva2VuOiByZXN1bHQudG9rZW4sIHJvbGU6IHJlc3VsdC5jbGFpbXNbJ3JvbGUnXSB9XG4gICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSlcbiAgICAgIHNldFN0cmluZygnY2FtZWxzLXRva2VuJywgdXNlckRhdGEudG9rZW4pXG4gICAgICByZXR1cm4gdXNlckRhdGFcbiAgICB9KVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnTG9naW4gZmFpbGVkJylcbiAgfVxufVxuY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmaXJlYmFzZUFwaS5hdXRoKCkuc2lnbk91dCgpXG4gICAgcmVtb3ZlKCdjYW1lbHMtdG9rZW4nKVxuICAgIGNvbnNvbGUubG9nKCdGaXJlYmFzZSBsb2dvdXQgc3VjY2VzcycpXG4gICAgcmV0dXJuIGRhdGFcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ0xvZ291dCBmYWlsZWQnKVxuICB9XG59XG5jb25zdCBnZXRVc2VyID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGh0dHBHZXQoYmFzZVVybCArIGAvdXNlcnMvJHtpZH1gKVxuICAgIHJldHVybiBhd2FpdCBoYW5kbGVSZXNwb25zZShyZXNwb25zZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ2ZldGNoIGZhaWxlZCcpXG4gIH1cbn1cbmNvbnN0IHNlbmRTaWduSW5MaW5rID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmbiA9IGZpcmViYXNlQXBpLmZ1bmN0aW9ucygpLmh0dHBzQ2FsbGFibGUoJ3NlbmRNYWlsRm9yRnVuY3Rpb25zJywgJ3VzLWNlbnRyYWwxJylcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmbih7XG4gICAgICBlbWFpbCxcbiAgICAgIGxpbms6ICdodHRwczovL2NhbWVscy5wYWdlLmxpbmsvelhicCcsXG4gICAgICB0b2tlbjogZ2V0U3RyaW5nKCdjYW1lbHMtdG9rZW4nKSxcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGUsICdTZW5kaW5nIGxpbmsgZmFpbGVkJylcbiAgfVxufVxuY29uc3QgY3JlYXRlVXNlciA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBodHRwUG9zdChiYXNlVXJsICsgJy9jcmVhdGVVc2VyJywge1xuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZCxcbiAgICAgIGRpc3BsYXlOYW1lOiBlbWFpbCxcbiAgICAgIHJvbGU6ICd1c2VyJyxcbiAgICB9KVxuICAgIHJldHVybiBhd2FpdCBoYW5kbGVSZXNwb25zZShyZXNwb25zZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ0NyZWF0aW5nIHVzZXIgZmFpbGVkJylcbiAgfVxufVxuY29uc3Qgc2lnbnVwID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgY29uc29sZS5sb2coJ3NpZ251cCBmb3IgJyArIGVtYWlsKVxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaHR0cFBvc3QoYmFzZVVybCArICcvc2lnbnVwJywge1xuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZCxcbiAgICAgIGRpc3BsYXlOYW1lOiBlbWFpbCxcbiAgICAgIHJvbGU6ICd1c2VyJyxcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgIHJldHVybiBhd2FpdCBoYW5kbGVSZXNwb25zZShyZXNwb25zZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ1NpZ24gdXAgZmFpbGVkJylcbiAgfVxufVxuY29uc3QgYWRkSW52aXRlc1RvQ29sbGVjdGlvbiA9IGFzeW5jIChlbWFpbDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52aXRlQ29sbGVjdGlvbiA9IGF3YWl0IGZpcmViYXNlQXBpLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2ludml0ZXMnKVxuICAgIGludml0ZUNvbGxlY3Rpb24uZG9jKGVtYWlsKS5zZXQoe1xuICAgICAgc3RhdHVzOiB0cnVlLFxuICAgIH0pXG4gICAgYWxlcnQoJ1lheXl5ISEgSW52aXRlIHNlbnQgdG8gdGhlIGNhbWVsJylcbiAgICByZXR1cm4gaW52aXRlQ29sbGVjdGlvblxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnQWRkIGludml0aWVlIGZhaWxlZCcpXG4gIH1cbn1cbmV4cG9ydCB7IGxvZ2luLCBsb2dvdXQsIGdldFVzZXIsIHNlbmRTaWduSW5MaW5rLCBjcmVhdGVVc2VyLCBhZGRJbnZpdGVzVG9Db2xsZWN0aW9uLCBzaWdudXAgfVxuIiwiaW1wb3J0IHsgZ2V0U3RyaW5nIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncydcblxuY29uc3Qgc3RhbmRhcmRIZWFkZXJzOiBIZWFkZXJzSW5pdCA9IHtcbiAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcbiAgQXV0aG9yaXphdGlvbjogYEJlYXJlciBgLFxufVxuXG5jb25zdCBmZXRjaE9wdGlvbnM6IFJlcXVlc3RJbml0ID0ge1xuICBtb2RlOiAnY29ycycsIC8vIG5vLWNvcnMsIGNvcnMsICpzYW1lLW9yaWdpblxuICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJywgLy8gaW5jbHVkZSwgKnNhbWUtb3JpZ2luLCBvbWl0XG4gIGhlYWRlcnM6IHtcbiAgICAuLi5zdGFuZGFyZEhlYWRlcnMsXG4gIH0sXG4gIHJlZGlyZWN0OiAnZm9sbG93JywgLy8gbWFudWFsLCAqZm9sbG93LCBlcnJvclxuICByZWZlcnJlcjogJ25vLXJlZmVycmVyJyxcbn1cblxuY29uc3QgcG9zdE9wdGlvbnM6IFJlcXVlc3RJbml0ID0ge1xuICAuLi5mZXRjaE9wdGlvbnMsXG4gIG1ldGhvZDogJ1BPU1QnLFxufVxuXG5jb25zdCBkZWxldGVPcHRpb25zOiBSZXF1ZXN0SW5pdCA9IHtcbiAgLi4uZmV0Y2hPcHRpb25zLFxuICBtZXRob2Q6ICdERUxFVEUnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElIdHRwQmFzaWNSZXNwb25zZSB7XG4gIGpzb24oKTogUHJvbWlzZTxhbnk+XG4gIHN0YXR1czogbnVtYmVyXG4gIHN0YXR1c1RleHQ6IHN0cmluZ1xuICBoZWFkZXJzOiBIZWFkZXJzXG4gIHVybD86IHN0cmluZ1xuICB0ZXh0PzogYW55XG59XG5leHBvcnQgZW51bSBIdHRwTWV0aG9kIHtcbiAgUG9zdCA9ICdQT1NUJyxcbiAgR2V0ID0gJ0dFVCcsXG4gIERlbGV0ZSA9ICdERUxFVEUnLFxufVxuXG5leHBvcnQgZW51bSBIdHRwU3RhdHVzQ29kZSB7XG4gIE9LID0gMjAwLFxuICBDcmVhdGVkID0gMjAxLFxuICBCYWRSZXF1ZXN0ID0gNDAwLFxuICBVbmF1dGhvcml6ZWQgPSA0MDEsXG4gIEZvcmJpZGRlbiA9IDQwMyxcbiAgTm90Rm91bmQgPSA0MDQsXG4gIFVucHJvY2Vzc2FibGVFbnRpdHkgPSA0MjIsXG4gIEludGVybmFsU2VydmVyRXJyb3IgPSA1MDAsXG4gIE90aGVyID0gOTk5LFxufVxuXG5leHBvcnQgdHlwZSBUcmFuc2xhdGlvbnMgPSB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG5cbmV4cG9ydCB0eXBlIFBvc3RlZFZhbHVlcyA9IHsgW2tleTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IHR5cGUgRmllbGRFcnJvclZhbHVlcyA9IHsgW2tleTogc3RyaW5nXTogQXJyYXk8c3RyaW5nPiB9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUh0dHBSZXNwb25zZSB7XG4gIG1lc3NhZ2U/OiBzdHJpbmdcbiAgc3RhdHVzOiBudW1iZXJcbiAganNvbjogYW55XG4gIGZpZWxkRXJyb3JzPzogRmllbGRFcnJvclZhbHVlc1xuICB1cmw/OiBzdHJpbmdcbiAgdGV4dD86IGFueVxuICBpc0Vycm9yPzogYm9vbGVhblxufVxuXG5leHBvcnQgZnVuY3Rpb24gaHR0cEdldCh1cmw6IHN0cmluZyk6IFByb21pc2U8SUh0dHBCYXNpY1Jlc3BvbnNlPiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAuLi5mZXRjaE9wdGlvbnMsXG4gICAgbWV0aG9kOiBIdHRwTWV0aG9kLkdldCxcbiAgICBoZWFkZXJzOiB7IC4uLnN0YW5kYXJkSGVhZGVycywgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldFN0cmluZygnY2FtZWxzLXRva2VuJyl9YCB9LFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaHR0cERlbGV0ZSh1cmw6IHN0cmluZyk6IFByb21pc2U8SUh0dHBCYXNpY1Jlc3BvbnNlPiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIGRlbGV0ZU9wdGlvbnMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodHRwUG9zdCh1cmw6IHN0cmluZywgZGF0YTogb2JqZWN0KTogUHJvbWlzZTxJSHR0cEJhc2ljUmVzcG9uc2U+IHtcbiAgY29uc29sZS5sb2coJ3Bvc3Qgb2JqIC0gJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLi4ucG9zdE9wdGlvbnMsXG4gICAgaGVhZGVyczogeyAuLi5zdGFuZGFyZEhlYWRlcnMsIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRTdHJpbmcoJ2NhbWVscy10b2tlbicpfWAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgLy8gYm9keSBkYXRhIHR5cGUgbXVzdCBtYXRjaCBcIkNvbnRlbnQtVHlwZVwiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgaHR0cEdldCwgaHR0cFBvc3QsIGh0dHBEZWxldGUgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==