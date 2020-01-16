webpackHotUpdate("bundle",{

/***/ "./_shared/firebase/matches.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("../node_modules/tslib/tslib.es6.js");
var nativescript_plugin_firebase_1 = tslib_1.__importDefault(__webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js"));
var firebaseApi = tslib_1.__importStar(__webpack_require__("../node_modules/nativescript-plugin-firebase/app/index.js"));
var application_settings_1 = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");
var http_1 = __webpack_require__("./_shared/http/http.ts");
var baseUrl = 'https://us-central1-camels-dev.cloudfunctions.net/api/matches';
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
function checkIfTokenIsValid() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var result, e_4;
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
                    e_4 = _a.sent();
                    return [2 /*return*/, { verified: false }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.checkIfTokenIsValid = checkIfTokenIsValid;
var getUser = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var response, e_5;
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
                e_5 = _a.sent();
                return [2 /*return*/, handleException(e_5, 'fetch failed')];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getUser = getUser;
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
                return [2 /*return*/, handleException(e_6, 'Sending link failed')];
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
                e_7 = _a.sent();
                return [2 /*return*/, handleException(e_7, 'Creating user failed')];
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
                return [4 /*yield*/, handleResponse(response)];
            case 4: return [2 /*return*/, _a.sent()];
            case 5:
                e_8 = _a.sent();
                return [2 /*return*/, handleException(e_8, 'Sign up failed')];
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
                return [2 /*return*/, handleException(e_9, 'Add invitiee failed')];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addInvitesToCollection = addInvitesToCollection;


/***/ }),

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


/***/ }),

/***/ "./_shared/http/http.ts":
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
    HttpMethod["Patch"] = "PATCH";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9fc2hhcmVkL2ZpcmViYXNlL21hdGNoZXMudHMiLCJ3ZWJwYWNrOi8vLy4vX3NoYXJlZC9maXJlYmFzZS91c2Vycy50cyIsIndlYnBhY2s6Ly8vLi9fc2hhcmVkL2h0dHAvaHR0cC50cyIsIndlYnBhY2s6Ly8vLi9fc2hhcmVkL2h0dHAvaHR0cEhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw4SUFBbUQ7QUFDbkQseUhBQStEO0FBQy9ELG9JQUFvRjtBQUNwRiwyREFBbUc7QUFHbkcsSUFBTSxPQUFPLEdBQUcsK0RBQStEO0FBRS9FLFNBQWUsT0FBTyxDQUFDLFFBQTRCOzs7Ozs7O29CQUV4QyxxQkFBTSxRQUFRLENBQUMsSUFBSSxFQUFFO3dCQUE1QixzQkFBTyxTQUFxQjs7O29CQUU1QixzQkFBTyxJQUFJOzs7OztDQUVkO0FBRUQsSUFBTSxlQUFlLEdBQUcsVUFBQyxLQUFVLEVBQUUsSUFBWTtJQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNsQixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ2xDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLFFBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO0FBQ3hGLENBQUM7QUFFRCxTQUFlLGNBQWMsQ0FBQyxRQUE0Qjs7Ozs7O3lCQUNwRCxTQUFRLENBQUMsTUFBTSxLQUFLLHFCQUFjLENBQUMsWUFBWSxHQUEvQyx3QkFBK0M7b0JBQzFDLHFCQUFNLGVBQWUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsY0FBYyxDQUFDO3dCQUF6RSxzQkFBTyxTQUFrRTs7b0JBRXJFLEVBQUUsR0FBRyxRQUFRLENBQUMsTUFBTSxLQUFLLHFC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QUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNO2dDQUNsQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0NBQ3RCLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTTtnQ0FDdkIsT0FBTztnQ0FDUCxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSzs2QkFDNUI7cUJBQ0Y7Ozs7O0NBQ0Y7QUFFa0Msd0NBQWMiLCJmaWxlIjoiYnVuZGxlLjY4NjA4MWQxNGFkZjE4YzAyYmFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSdcbmltcG9ydCAqIGFzIGZpcmViYXNlQXBpIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwJ1xuaW1wb3J0IHsgc2V0U3RyaW5nLCByZW1vdmUsIGdldFN0cmluZyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnXG5pbXBvcnQgeyBodHRwR2V0LCBodHRwUG9zdCwgSHR0cFN0YXR1c0NvZGUsIElIdHRwQmFzaWNSZXNwb25zZSwgSUh0dHBSZXNwb25zZSB9IGZyb20gJy4uL2h0dHAvaHR0cCdcbmltcG9ydCB7IElkVG9rZW5SZXN1bHQgfSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJ1xuXG5jb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtY2FtZWxzLWRldi5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL21hdGNoZXMnXG5cbmFzeW5jIGZ1bmN0aW9uIGdldEpzb24ocmVzcG9uc2U6IElIdHRwQmFzaWNSZXNwb25zZSk6IFByb21pc2U8YW55PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVFeGNlcHRpb24gPSAoZXJyb3I6IGFueSwgdHlwZTogc3RyaW5nKSA9PiB7XG4gIGNvbnNvbGUubG9nKGVycm9yKVxuICBhbGVydCh0eXBlICsgJzogJyArIGVycm9yLm1lc3NhZ2UpXG4gIHJldHVybiB7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsIHR5cGUsIGlzRXJyb3I6IHRydWUsIHN0YXR1czogZXJyb3Iuc3RhdHVzLCBqc29uOiAnJyB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlOiBJSHR0cEJhc2ljUmVzcG9uc2UpOiBQcm9taXNlPElIdHRwUmVzcG9uc2U+IHtcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gSHR0cFN0YXR1c0NvZGUuVW5hdXRob3JpemVkKSB7XG4gICAgcmV0dXJuIGF3YWl0IGhhbmRsZUV4Y2VwdGlvbih7IHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzIH0sICdVbmF1dGhvcmlzZWQnKVxuICB9XG4gIGNvbnN0IG9rID0gcmVzcG9uc2Uuc3RhdHVzID09PSBIdHRwU3RhdHVzQ29kZS5PSyB8fCByZXNwb25zZS5zdGF0dXMgPT09IEh0dHBTdGF0dXNDb2RlLkNyZWF0ZWRcbiAgY29uc3QganNvbiA9IGF3YWl0IGdldEpzb24ocmVzcG9uc2UpXG5cbiAgaWYgKGpzb24gPT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZEVycm9yczoge30sXG4gICAgICBqc29uOiBudWxsLFxuICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICBtZXNzYWdlOiAnJyxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGpzb24ubWVzc2FnZVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkRXJyb3JzOiBvayA/IHt9IDoganNvbi5lcnJvcnMsXG4gICAgICBqc29uOiBvayA/IGpzb24gOiBudWxsLFxuICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICBtZXNzYWdlLFxuICAgICAgaXNFcnJvcjogIW9rID8gdHJ1ZSA6IGZhbHNlLFxuICAgIH1cbiAgfVxufVxuY29uc3QgbG9naW4gPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdXNlciB9ID0gYXdhaXQgZmlyZWJhc2VBcGkuYXV0aCgpLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICBjb25zb2xlLmxvZygnRmlyZWJhc2UgbG9naW4gc3VjY2VzcycpXG4gICAgcmV0dXJuIHVzZXIuZ2V0SWRUb2tlblJlc3VsdCgpLnRoZW4oKHJlc3VsdDogSWRUb2tlblJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgdXNlckRhdGEgPSB7IHVpZDogdXNlci51aWQsIHRva2VuOiByZXN1bHQudG9rZW4sIHJvbGU6IHJlc3VsdC5jbGFpbXNbJ3JvbGUnXSB9XG4gICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSlcbiAgICAgIHNldFN0cmluZygnY2FtZWxzLXRva2VuJywgdXNlckRhdGEudG9rZW4pXG4gICAgICByZXR1cm4gdXNlckRhdGFcbiAgICB9KVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnTG9naW4gZmFpbGVkJylcbiAgfVxufVxuY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmaXJlYmFzZUFwaS5hdXRoKCkuc2lnbk91dCgpXG4gICAgcmVtb3ZlKCdjYW1lbHMtdG9rZW4nKVxuICAgIGNvbnNvbGUubG9nKCdGaXJlYmFzZSBsb2dvdXQgc3VjY2VzcycpXG4gICAgcmV0dXJuIGRhdGFcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ0xvZ291dCBmYWlsZWQnKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrSWZUb2tlbklzVmFsaWQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgaHR0cEdldChiYXNlVXJsICsgJy92ZXJpZnlJZFRva2VuJylcbiAgICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gSHR0cFN0YXR1c0NvZGUuT0spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigpXG4gICAgfVxuICAgIHJldHVybiB7IHZlcmlmaWVkOiB0cnVlIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IHZlcmlmaWVkOiBmYWxzZSB9XG4gIH1cbn1cbmNvbnN0IGdldFVzZXIgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaHR0cEdldChiYXNlVXJsICsgYC91c2Vycy8ke2lkfWApXG4gICAgcmV0dXJuIGF3YWl0IGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnZmV0Y2ggZmFpbGVkJylcbiAgfVxufVxuY29uc3Qgc2VuZFNpZ25JbkxpbmsgPSBhc3luYyAoZW1haWw6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGZuID0gZmlyZWJhc2VBcGkuZnVuY3Rpb25zKCkuaHR0cHNDYWxsYWJsZSgnc2VuZE1haWxGb3JGdW5jdGlvbnMnLCAndXMtY2VudHJhbDEnKVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZuKHtcbiAgICAgIGVtYWlsLFxuICAgICAgbGluazogJ2h0dHBzOi8vY2FtZWxzLnBhZ2UubGluay96WGJwJyxcbiAgICAgIHRva2VuOiBnZXRTdHJpbmcoJ2NhbWVscy10b2tlbicpLFxuICAgIH0pXG4gICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgIHJldHVybiByZXN1bHRcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ1NlbmRpbmcgbGluayBmYWlsZWQnKVxuICB9XG59XG5jb25zdCBjcmVhdGVVc2VyID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGh0dHBQb3N0KGJhc2VVcmwgKyAnL2NyZWF0ZVVzZXInLCB7XG4gICAgICBlbWFpbCxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgZGlzcGxheU5hbWU6IGVtYWlsLFxuICAgICAgcm9sZTogJ3VzZXInLFxuICAgIH0pXG4gICAgcmV0dXJuIGF3YWl0IGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnQ3JlYXRpbmcgdXNlciBmYWlsZWQnKVxuICB9XG59XG5jb25zdCBzaWdudXAgPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICBjb25zb2xlLmxvZygnc2lnbnVwIGZvciAnICsgZW1haWwpXG4gIHRyeSB7XG4gICAgY29uc3QgcHVzaFRva2VuID0gYXdhaXQgZmlyZWJhc2UuZ2V0Q3VycmVudFB1c2hUb2tlbigpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBodHRwUG9zdChiYXNlVXJsICsgJy9zaWdudXAnLCB7XG4gICAgICBlbWFpbCxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgZGlzcGxheU5hbWU6IGVtYWlsLFxuICAgICAgcm9sZTogJ3VzZXInLFxuICAgICAgcHVzaFRva2VuLFxuICAgIH0pXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgcmV0dXJuIGF3YWl0IGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnU2lnbiB1cCBmYWlsZWQnKVxuICB9XG59XG5jb25zdCBhZGRJbnZpdGVzVG9Db2xsZWN0aW9uID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbnZpdGVDb2xsZWN0aW9uID0gYXdhaXQgZmlyZWJhc2VBcGkuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignaW52aXRlcycpXG4gICAgaW52aXRlQ29sbGVjdGlvbi5kb2MoZW1haWwpLnNldCh7XG4gICAgICBzdGF0dXM6IHRydWUsXG4gICAgfSlcbiAgICBhbGVydCgnWWF5eXkhISBJbnZpdGUgc2VudCB0byB0aGUgY2FtZWwnKVxuICAgIHJldHVybiBpbnZpdGVDb2xsZWN0aW9uXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGUsICdBZGQgaW52aXRpZWUgZmFpbGVkJylcbiAgfVxufVxuZXhwb3J0IHtcbiAgbG9naW4sXG4gIGxvZ291dCxcbiAgZ2V0VXNlcixcbiAgc2VuZFNpZ25JbkxpbmssXG4gIGNyZWF0ZVVzZXIsXG4gIGFkZEludml0ZXNUb0NvbGxlY3Rpb24sXG4gIHNpZ251cCxcbiAgY2hlY2tJZlRva2VuSXNWYWxpZCxcbn1cbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJ1xuaW1wb3J0ICogYXMgZmlyZWJhc2VBcGkgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHAnXG5pbXBvcnQgeyBzZXRTdHJpbmcsIHJlbW92ZSwgZ2V0U3RyaW5nIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncydcbmltcG9ydCB7IGh0dHBHZXQsIGh0dHBQb3N0LCBIdHRwU3RhdHVzQ29kZSB9IGZyb20gJy4uL2h0dHAvaHR0cCdcbmltcG9ydCB7IElkVG9rZW5SZXN1bHQgfSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJ1xuaW1wb3J0IHsgaGFuZGxlRXhjZXB0aW9uLCBoYW5kbGVSZXNwb25zZSB9IGZyb20gJy4uL2h0dHAvaHR0cEhlbHBlcidcblxuY29uc3QgYmFzZVVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWNhbWVscy1kZXYuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS91c2VycydcbmNvbnN0IGxvZ2luID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHVzZXIgfSA9IGF3YWl0IGZpcmViYXNlQXBpLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgY29uc29sZS5sb2coJ0ZpcmViYXNlIGxvZ2luIHN1Y2Nlc3MnKVxuICAgIHJldHVybiB1c2VyLmdldElkVG9rZW5SZXN1bHQoKS50aGVuKChyZXN1bHQ6IElkVG9rZW5SZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0geyB1aWQ6IHVzZXIudWlkLCB0b2tlbjogcmVzdWx0LnRva2VuLCByb2xlOiByZXN1bHQuY2xhaW1zWydyb2xlJ10gfVxuICAgICAgY29uc29sZS5sb2codXNlckRhdGEpXG4gICAgICBzZXRTdHJpbmcoJ2NhbWVscy10b2tlbicsIHVzZXJEYXRhLnRva2VuKVxuICAgICAgcmV0dXJuIHVzZXJEYXRhXG4gICAgfSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ0xvZ2luIGZhaWxlZCcpXG4gIH1cbn1cbmNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmlyZWJhc2VBcGkuYXV0aCgpLnNpZ25PdXQoKVxuICAgIHJlbW92ZSgnY2FtZWxzLXRva2VuJylcbiAgICBjb25zb2xlLmxvZygnRmlyZWJhc2UgbG9nb3V0IHN1Y2Nlc3MnKVxuICAgIHJldHVybiBkYXRhXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGUsICdMb2dvdXQgZmFpbGVkJylcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBjaGVja0lmVG9rZW5Jc1ZhbGlkKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGh0dHBHZXQoYmFzZVVybCArICcvdmVyaWZ5SWRUb2tlbicpXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IEh0dHBTdGF0dXNDb2RlLk9LKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKVxuICAgIH1cbiAgICByZXR1cm4geyB2ZXJpZmllZDogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyB2ZXJpZmllZDogZmFsc2UgfVxuICB9XG59XG5jb25zdCBnZXRVc2VyID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGh0dHBHZXQoYmFzZVVybCArIGAvJHtpZH1gKVxuICAgIHJldHVybiBhd2FpdCBoYW5kbGVSZXNwb25zZShyZXNwb25zZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ2ZldGNoIGZhaWxlZCcpXG4gIH1cbn1cblxuY29uc3QgZ2V0QWxsVXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBodHRwR2V0KGJhc2VVcmwpXG4gICAgcmV0dXJuIGF3YWl0IGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnZmV0Y2ggZmFpbGVkJylcbiAgfVxufVxuY29uc3Qgc2VuZFNpZ25JbkxpbmsgPSBhc3luYyAoZW1haWw6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGZuID0gZmlyZWJhc2VBcGkuZnVuY3Rpb25zKCkuaHR0cHNDYWxsYWJsZSgnc2VuZE1haWxGb3JGdW5jdGlvbnMnLCAndXMtY2VudHJhbDEnKVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZuKHtcbiAgICAgIGVtYWlsLFxuICAgICAgbGluazogJ2h0dHBzOi8vY2FtZWxzLnBhZ2UubGluay96WGJwJyxcbiAgICAgIHRva2VuOiBnZXRTdHJpbmcoJ2NhbWVscy10b2tlbicpLFxuICAgIH0pXG4gICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgIHJldHVybiByZXN1bHRcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ1NlbmRpbmcgbGluayBmYWlsZWQnKVxuICB9XG59XG5jb25zdCBjcmVhdGVVc2VyID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGh0dHBQb3N0KGJhc2VVcmwgKyAnL2NyZWF0ZScsIHtcbiAgICAgIGVtYWlsLFxuICAgICAgcGFzc3dvcmQsXG4gICAgICBkaXNwbGF5TmFtZTogZW1haWwsXG4gICAgICByb2xlOiAndXNlcicsXG4gICAgfSlcbiAgICByZXR1cm4gYXdhaXQgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGUsICdDcmVhdGluZyB1c2VyIGZhaWxlZCcpXG4gIH1cbn1cbmNvbnN0IHNpZ251cCA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdzaWdudXAgZm9yICcgKyBlbWFpbClcbiAgdHJ5IHtcbiAgICBjb25zdCBwdXNoVG9rZW4gPSBhd2FpdCBmaXJlYmFzZS5nZXRDdXJyZW50UHVzaFRva2VuKClcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGh0dHBQb3N0KGJhc2VVcmwgKyAnL3NpZ251cCcsIHtcbiAgICAgIGVtYWlsLFxuICAgICAgcGFzc3dvcmQsXG4gICAgICBkaXNwbGF5TmFtZTogZW1haWwsXG4gICAgICByb2xlOiAndXNlcicsXG4gICAgICBwdXNoVG9rZW4sXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICByZXR1cm4gYXdhaXQgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGUsICdTaWduIHVwIGZhaWxlZCcpXG4gIH1cbn1cbmNvbnN0IGFkZEludml0ZXNUb0NvbGxlY3Rpb24gPSBhc3luYyAoZW1haWw6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGludml0ZUNvbGxlY3Rpb24gPSBhd2FpdCBmaXJlYmFzZUFwaS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdpbnZpdGVzJylcbiAgICBpbnZpdGVDb2xsZWN0aW9uLmRvYyhlbWFpbCkuc2V0KHtcbiAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICB9KVxuICAgIGFsZXJ0KCdZYXl5eSEhIEludml0ZSBzZW50IHRvIHRoZSBjYW1lbCcpXG4gICAgcmV0dXJuIGludml0ZUNvbGxlY3Rpb25cbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oZSwgJ0FkZCBpbnZpdGllZSBmYWlsZWQnKVxuICB9XG59XG5jb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKGlkOiBzdHJpbmcsIGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGh0dHBQb3N0KGJhc2VVcmwgKyBgLyR7aWR9YCwgeyBkYXRhIH0pXG4gICAgcmV0dXJuIGF3YWl0IGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlLCAnVXBkYXRlIGZhaWxlZCcpXG4gIH1cbn1cbmV4cG9ydCB7XG4gIGxvZ2luLFxuICBsb2dvdXQsXG4gIGdldFVzZXIsXG4gIGdldEFsbFVzZXJzLFxuICBzZW5kU2lnbkluTGluayxcbiAgY3JlYXRlVXNlcixcbiAgYWRkSW52aXRlc1RvQ29sbGVjdGlvbixcbiAgc2lnbnVwLFxuICBjaGVja0lmVG9rZW5Jc1ZhbGlkLFxuICB1cGRhdGVVc2VyLFxufVxuIiwiaW1wb3J0IHsgZ2V0U3RyaW5nIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncydcblxuY29uc3Qgc3RhbmRhcmRIZWFkZXJzOiBIZWFkZXJzSW5pdCA9IHtcbiAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcbiAgQXV0aG9yaXphdGlvbjogYEJlYXJlciBgLFxufVxuXG5jb25zdCBmZXRjaE9wdGlvbnM6IFJlcXVlc3RJbml0ID0ge1xuICBtb2RlOiAnY29ycycsIC8vIG5vLWNvcnMsIGNvcnMsICpzYW1lLW9yaWdpblxuICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJywgLy8gaW5jbHVkZSwgKnNhbWUtb3JpZ2luLCBvbWl0XG4gIGhlYWRlcnM6IHtcbiAgICAuLi5zdGFuZGFyZEhlYWRlcnMsXG4gIH0sXG4gIHJlZGlyZWN0OiAnZm9sbG93JywgLy8gbWFudWFsLCAqZm9sbG93LCBlcnJvclxuICByZWZlcnJlcjogJ25vLXJlZmVycmVyJyxcbn1cblxuY29uc3QgcG9zdE9wdGlvbnM6IFJlcXVlc3RJbml0ID0ge1xuICAuLi5mZXRjaE9wdGlvbnMsXG4gIG1ldGhvZDogJ1BPU1QnLFxufVxuXG5jb25zdCBkZWxldGVPcHRpb25zOiBSZXF1ZXN0SW5pdCA9IHtcbiAgLi4uZmV0Y2hPcHRpb25zLFxuICBtZXRob2Q6ICdERUxFVEUnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElIdHRwQmFzaWNSZXNwb25zZSB7XG4gIGpzb24oKTogUHJvbWlzZTxhbnk+XG4gIHN0YXR1czogbnVtYmVyXG4gIHN0YXR1c1RleHQ6IHN0cmluZ1xuICBoZWFkZXJzOiBIZWFkZXJzXG4gIHVybD86IHN0cmluZ1xuICB0ZXh0PzogYW55XG59XG5leHBvcnQgZW51bSBIdHRwTWV0aG9kIHtcbiAgUG9zdCA9ICdQT1NUJyxcbiAgUGF0Y2ggPSAnUEFUQ0gnLFxuICBHZXQgPSAnR0VUJyxcbiAgRGVsZXRlID0gJ0RFTEVURScsXG59XG5cbmV4cG9ydCBlbnVtIEh0dHBTdGF0dXNDb2RlIHtcbiAgT0sgPSAyMDAsXG4gIENyZWF0ZWQgPSAyMDEsXG4gIEJhZFJlcXVlc3QgPSA0MDAsXG4gIFVuYXV0aG9yaXplZCA9IDQwMSxcbiAgRm9yYmlkZGVuID0gNDAzLFxuICBOb3RGb3VuZCA9IDQwNCxcbiAgVW5wcm9jZXNzYWJsZUVudGl0eSA9IDQyMixcbiAgSW50ZXJuYWxTZXJ2ZXJFcnJvciA9IDUwMCxcbiAgT3RoZXIgPSA5OTksXG59XG5cbmV4cG9ydCB0eXBlIFRyYW5zbGF0aW9ucyA9IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cblxuZXhwb3J0IHR5cGUgUG9zdGVkVmFsdWVzID0geyBba2V5OiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBGaWVsZEVycm9yVmFsdWVzID0geyBba2V5OiBzdHJpbmddOiBBcnJheTxzdHJpbmc+IH1cblxuZXhwb3J0IGludGVyZmFjZSBJSHR0cFJlc3BvbnNlIHtcbiAgbWVzc2FnZT86IHN0cmluZ1xuICBzdGF0dXM6IG51bWJlclxuICBqc29uOiBhbnlcbiAgZmllbGRFcnJvcnM/OiBGaWVsZEVycm9yVmFsdWVzXG4gIHVybD86IHN0cmluZ1xuICB0ZXh0PzogYW55XG4gIGlzRXJyb3I/OiBib29sZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodHRwR2V0KHVybDogc3RyaW5nKTogUHJvbWlzZTxJSHR0cEJhc2ljUmVzcG9uc2U+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC4uLmZldGNoT3B0aW9ucyxcbiAgICBtZXRob2Q6IEh0dHBNZXRob2QuR2V0LFxuICAgIGhlYWRlcnM6IHsgLi4uc3RhbmRhcmRIZWFkZXJzLCBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0U3RyaW5nKCdjYW1lbHMtdG9rZW4nKX1gIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodHRwRGVsZXRlKHVybDogc3RyaW5nKTogUHJvbWlzZTxJSHR0cEJhc2ljUmVzcG9uc2U+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwgZGVsZXRlT3B0aW9ucylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh0dHBQb3N0KHVybDogc3RyaW5nLCBkYXRhOiBvYmplY3QpOiBQcm9taXNlPElIdHRwQmFzaWNSZXNwb25zZT4ge1xuICBjb25zb2xlLmxvZygncG9zdCBvYmogLSAnICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAuLi5wb3N0T3B0aW9ucyxcbiAgICBoZWFkZXJzOiB7IC4uLnN0YW5kYXJkSGVhZGVycywgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldFN0cmluZygnY2FtZWxzLXRva2VuJyl9YCB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBodHRwR2V0LCBodHRwUG9zdCwgaHR0cERlbGV0ZSB9XG4iLCJpbXBvcnQgeyBJSHR0cEJhc2ljUmVzcG9uc2UsIElIdHRwUmVzcG9uc2UsIEh0dHBTdGF0dXNDb2RlIH0gZnJvbSAnLi9odHRwJ1xuYXN5bmMgZnVuY3Rpb24gZ2V0SnNvbihyZXNwb25zZTogSUh0dHBCYXNpY1Jlc3BvbnNlKTogUHJvbWlzZTxhbnk+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmNvbnN0IGhhbmRsZUV4Y2VwdGlvbiA9IChlcnJvcjogYW55LCB0eXBlOiBzdHJpbmcpID0+IHtcbiAgY29uc29sZS5sb2coZXJyb3IpXG4gIGFsZXJ0KHR5cGUgKyAnOiAnICsgZXJyb3IubWVzc2FnZSlcbiAgcmV0dXJuIHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSwgdHlwZSwgaXNFcnJvcjogdHJ1ZSwgc3RhdHVzOiBlcnJvci5zdGF0dXMsIGpzb246ICcnIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2UocmVzcG9uc2U6IElIdHRwQmFzaWNSZXNwb25zZSk6IFByb21pc2U8SUh0dHBSZXNwb25zZT4ge1xuICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSBIdHRwU3RhdHVzQ29kZS5VbmF1dGhvcml6ZWQpIHtcbiAgICByZXR1cm4gYXdhaXQgaGFuZGxlRXhjZXB0aW9uKHsgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMgfSwgJ1VuYXV0aG9yaXNlZCcpXG4gIH1cbiAgY29uc3Qgb2sgPSByZXNwb25zZS5zdGF0dXMgPT09IEh0dHBTdGF0dXNDb2RlLk9LIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gSHR0cFN0YXR1c0NvZGUuQ3JlYXRlZFxuICBjb25zdCBqc29uID0gYXdhaXQgZ2V0SnNvbihyZXNwb25zZSlcbiAgaWYgKGpzb24gPT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZEVycm9yczoge30sXG4gICAgICBqc29uOiBudWxsLFxuICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICBtZXNzYWdlOiAnJyxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGpzb24ubWVzc2FnZVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkRXJyb3JzOiBvayA/IHt9IDoganNvbi5lcnJvcnMsXG4gICAgICBqc29uOiBvayA/IGpzb24gOiBudWxsLFxuICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICBtZXNzYWdlLFxuICAgICAgaXNFcnJvcjogIW9rID8gdHJ1ZSA6IGZhbHNlLFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBnZXRKc29uLCBoYW5kbGVFeGNlcHRpb24sIGhhbmRsZVJlc3BvbnNlIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=