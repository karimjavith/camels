webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _shared_firbase_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./_shared/firbase.ts");
/* harmony import */ var _shared_firbase_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_firbase_ts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _CreatePassword_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/CreatePassword.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firebaseWebApi = __webpack_require__("../node_modules/nativescript-plugin-firebase/app/index.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Login",
  components: {
    Home: _Home_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    CreatePassword: _CreatePassword_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      console.log("mounted");
      this.checkAuthentication();
    });
  },
  watch: {
    token(newValue, oldValue) {
      if (newValue || oldValue) {
        this.navigateToHomePage();
      }
    },

    invited(newValue, oldValue) {
      if (newValue && !this.token) {
        this.navigateToPasswordCreationPage();
      }
    }

  },

  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },

  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    token: state => state.authenticationModule.userContext.token,
    invited: state => state.authenticationModule.userContext.invited
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("authenticationModule", {
    setGlobalLoginState: "signedIn",
    setUserRole: "setUserRole"
  }), {
    checkAuthentication() {
      console.log(this.token);

      if (this.token) {
        this.navigateToHomePage();
      }
    },

    submit() {
      if (!this.user.email || !this.user.password) {
        this.alert("Please provide both an email address and password.");
        return;
      }

      this.login();
    },

    login() {
      var _this = this;

      return _asyncToGenerator(function* () {
        var {
          uid,
          token
        } = yield Object(_shared_firbase_ts__WEBPACK_IMPORTED_MODULE_1__["login"])(_this.user.email, _this.user.password);

        _this.setGlobalLoginState({
          token
        });

        var roles = yield Object(_shared_firbase_ts__WEBPACK_IMPORTED_MODULE_1__["getRoles"])();
        var docs = yield roles.get();

        if (docs.exists) {
          var data = docs.data();

          _this.setUserRole({
            role: data[uid].role
          });
        }
      })();
    },

    navigateToHomePage() {
      this.$navigateTo(_Home_vue__WEBPACK_IMPORTED_MODULE_2__["default"], {
        clearHistory: true
      });
    },

    navigateToPasswordCreationPage() {
      this.$navigateTo(_CreatePassword_vue__WEBPACK_IMPORTED_MODULE_3__["default"], {
        clearHistory: true
      });
    },

    forgotPassword() {
      prompt({
        title: "Forgot Password",
        message: "Enter the email address you used to register for Camels to reset your password.",
        inputType: "email",
        defaultText: "",
        okButtonText: "Ok",
        cancelButtonText: "Cancel"
      }).then(data => {
        if (data.result) {}
      });
    },

    focusPassword() {
      this.$refs.password.nativeView.focus();
    },

    focusLoginButton() {
      this.$refs.loginButton.nativeView.focus();
    },

    alert(message) {
      return alert({
        title: "Camels",
        okButtonText: "OK",
        message: message
      });
    }

  })
});

/***/ }),

/***/ "./main.ts":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
        let applicationCheckPlatform = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("../node_modules/tslib/tslib.es6.js");
var nativescript_vue_devtools_1 = tslib_1.__importDefault(__webpack_require__("../node_modules/nativescript-vue-devtools/index.js"));
var nativescript_vue_1 = tslib_1.__importDefault(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"));
if (true) {
    nativescript_vue_1.default.use(nativescript_vue_devtools_1.default);
}
// import { crashlytics } from "nativescript-plugin-firebase";
// import { isAndroid, isIOS } from "tns-core-modules/platform";
var theme_1 = tslib_1.__importDefault(__webpack_require__("../node_modules/@nativescript/theme/index.js"));
var Login_vue_1 = tslib_1.__importDefault(__webpack_require__("./components/Login.vue"));
var ApplicationSettings = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");
var store_1 = tslib_1.__importDefault(__webpack_require__("./store.ts"));
theme_1.default.setMode(theme_1.default.Light); // Or Theme.Light
var firebase = __webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js");
// if (isAndroid) {
//   crashlytics.sendCrashLog(new java.lang.Exception("test Exception"));
// }
firebase
    .init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
    // crashlyticsCollectionEnabled: true,
    onDynamicLinkCallback: function (result) {
        alert(result.url);
        store_1.default.dispatch("authenticationModule/setCreatePasswordPage");
    }
})
    .then(function () {
    console.log("firebase.init done");
}, function (error) {
    console.log("firebase.init error: " + error);
});
firebase.addOnDynamicLinkReceivedCallback(function (_a) {
    var url = _a.url;
    alert(url);
    // ..
});
// Prints Vue logs when --env.production is *NOT* set while building
nativescript_vue_1.default.config.silent = "development" === "production";
nativescript_vue_1.default.registerElement("RadSideDrawer", function () { return __webpack_require__("../node_modules/nativescript-ui-sidedrawer/ui-sidedrawer.js").RadSideDrawer; });
if (ApplicationSettings.getString("camels-token")) {
    store_1.default.dispatch("authenticationModule/setAuthToken", {
        token: JSON.parse(ApplicationSettings.getString("camels-token"))
    });
}
new nativescript_vue_1.default({
    store: store_1.default,
    render: function (h) { return h("Frame", [h(Login_vue_1.default)]); }
}).$start();

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLGVBREE7QUFFQTtBQUFBO0FBQUE7QUFBQSxHQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsR0FSQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUxBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVkEsR0FUQTs7QUFxQkE7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQTtBQUZBO0FBREE7QUFNQSxHQTVCQTs7QUE2QkE7QUFDQSxnRUFEQTtBQUVBO0FBRkEsSUE3QkE7QUFpQ0EsNkJBQ0E7QUFDQSxtQ0FEQTtBQUVBO0FBRkEsSUFEQTtBQUtBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FWQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsS0FqQkE7O0FBbUJBO0FBQUE7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUkE7QUFTQSxLQTVCQTs7QUE4QkE7QUFDQTtBQUFBO0FBQUE7QUFDQSxLQWhDQTs7QUFpQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxLQW5DQTs7QUFxQ0E7QUFDQTtBQUNBLGdDQURBO0FBRUEsaUJBQ0EsaUZBSEE7QUFJQSwwQkFKQTtBQUtBLHVCQUxBO0FBTUEsMEJBTkE7QUFPQTtBQVBBLFNBUUEsSUFSQSxDQVFBO0FBQ0EsMEJBQ0E7QUFDQSxPQVhBO0FBWUEsS0FsREE7O0FBb0RBO0FBQ0E7QUFDQSxLQXREQTs7QUF1REE7QUFDQTtBQUNBLEtBekRBOztBQTJEQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSwwQkFGQTtBQUdBO0FBSEE7QUFLQTs7QUFqRUE7QUFqQ0EsRzs7Ozs7Ozs7OztBQ1BBLHdGQUFvRDtBQUNwRCwrRUFBbUM7QUFDbkMsSUFBSSxLQUEwQjtBQUNQO0NBQ3RCO0FBRUQsMEdBQThEO0FBQzlELFlBQWdFO0FBQ2hFLFlBQXdDO0FBQ3hDLG1CQUEyQztBQUMzQyxJQUFNLG1CQUFtQixHQUFHLHVCQUFRLDZEQUF1QyxDQUFDLENBQUM7QUFFN0UsMERBQTRCO0FBQ2lCO0FBQzdDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyx3QkFBZ0M7QUFFekQsbUJBQW1CO0FBQ25CLDRCQUF5RTtBQUN6RSxJQUFJO0FBQ0k7S0FDTCxJQUFJLENBQUM7SUFDSixnRkFBa0Y7SUFDbEYsNkJBQTZCO0lBQzdCLHNDQUFzQztJQUN0QyxlQUEyQztRQUN6QyxLQUFLLENBQWE7QUFDMkM7SUFDL0QsQ0FBQztDQUNGLENBQUM7S0FDRCxJQUNDO0lBQ0UsSUFBa0M7QUFDcEMsQ0FBQyxFQUNELFVBQUMsS0FBVTtJQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQXdCLEtBQU8sQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FDRixDQUFDO0FBQ0osUUFBUSxDQUFDLGdDQUFnQyxDQUFDLFVBQVMsRUFBWTtRQUFWLFlBQUc7SUFDdEQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1gsS0FBSztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ0gseUZBQW9FO0FBQ3BFLHFCQUE2QztBQUU3QywwQkFBRyxDQUFDLGVBQWUsQ0FDakIsZUFBZSxFQUNmLEVBQ0E7QUFFRixJQUFJLGtFQUFvQixFQUEyQjtJQUNqRCxlQUFLLENBQUMsUUFBUSxDQUFDLGdEQUFtQyxDQUFFO1FBQ2xELEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLHNCQUFVLGlEQUFnQjtRQUMvRDtDQUNKO0FBRUQsQ0FBUTtJQUNOLEtBQUs7SUFDTCxNQUFNLEVBQUUsV0FBQyxJQUFJLFFBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQVE7Q0FDcEMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS4xODg2Y2Y1ZWI5NjY3Y2U3OTA3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cclxuY29uc3QgZmlyZWJhc2VXZWJBcGkgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XHJcbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zIH0gZnJvbSBcInZ1ZXhcIjtcclxuaW1wb3J0IHsgbG9naW4sIGdldFJvbGVzIH0gZnJvbSBcIi4uL19zaGFyZWQvZmlyYmFzZS50c1wiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lLnZ1ZVwiO1xyXG5pbXBvcnQgQ3JlYXRlUGFzc3dvcmQgZnJvbSBcIi4vQ3JlYXRlUGFzc3dvcmQudnVlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJMb2dpblwiLFxyXG4gIGNvbXBvbmVudHM6IHsgSG9tZSwgQ3JlYXRlUGFzc3dvcmQgfSxcclxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm1vdW50ZWRcIik7XHJcbiAgICAgIHRoaXMuY2hlY2tBdXRoZW50aWNhdGlvbigpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgdG9rZW4obmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgIGlmIChuZXdWYWx1ZSB8fCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMubmF2aWdhdGVUb0hvbWVQYWdlKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpbnZpdGVkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICBpZiAobmV3VmFsdWUgJiYgIXRoaXMudG9rZW4pIHtcclxuICAgICAgICB0aGlzLm5hdmlnYXRlVG9QYXNzd29yZENyZWF0aW9uUGFnZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSxcclxuICBjb21wdXRlZDogbWFwU3RhdGUoe1xyXG4gICAgdG9rZW46IHN0YXRlID0+IHN0YXRlLmF1dGhlbnRpY2F0aW9uTW9kdWxlLnVzZXJDb250ZXh0LnRva2VuLFxyXG4gICAgaW52aXRlZDogc3RhdGUgPT4gc3RhdGUuYXV0aGVudGljYXRpb25Nb2R1bGUudXNlckNvbnRleHQuaW52aXRlZFxyXG4gIH0pLFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC4uLm1hcEFjdGlvbnMoXCJhdXRoZW50aWNhdGlvbk1vZHVsZVwiLCB7XHJcbiAgICAgIHNldEdsb2JhbExvZ2luU3RhdGU6IFwic2lnbmVkSW5cIixcclxuICAgICAgc2V0VXNlclJvbGU6IFwic2V0VXNlclJvbGVcIlxyXG4gICAgfSksXHJcbiAgICBjaGVja0F1dGhlbnRpY2F0aW9uKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRva2VuKTtcclxuICAgICAgaWYgKHRoaXMudG9rZW4pIHtcclxuICAgICAgICB0aGlzLm5hdmlnYXRlVG9Ib21lUGFnZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICBpZiAoIXRoaXMudXNlci5lbWFpbCB8fCAhdGhpcy51c2VyLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgdGhpcy5hbGVydChcIlBsZWFzZSBwcm92aWRlIGJvdGggYW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmQuXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIGxvZ2luKCkge1xyXG4gICAgICBjb25zdCB7IHVpZCwgdG9rZW4gfSA9IGF3YWl0IGxvZ2luKHRoaXMudXNlci5lbWFpbCwgdGhpcy51c2VyLnBhc3N3b3JkKTtcclxuICAgICAgdGhpcy5zZXRHbG9iYWxMb2dpblN0YXRlKHsgdG9rZW4gfSk7XHJcbiAgICAgIGNvbnN0IHJvbGVzID0gYXdhaXQgZ2V0Um9sZXMoKTtcclxuICAgICAgY29uc3QgZG9jcyA9IGF3YWl0IHJvbGVzLmdldCgpO1xyXG4gICAgICBpZiAoZG9jcy5leGlzdHMpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gZG9jcy5kYXRhKCk7XHJcbiAgICAgICAgdGhpcy5zZXRVc2VyUm9sZSh7IHJvbGU6IGRhdGFbdWlkXS5yb2xlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5hdmlnYXRlVG9Ib21lUGFnZSgpIHtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH0sXHJcbiAgICBuYXZpZ2F0ZVRvUGFzc3dvcmRDcmVhdGlvblBhZ2UoKSB7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oQ3JlYXRlUGFzc3dvcmQsIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBmb3Jnb3RQYXNzd29yZCgpIHtcclxuICAgICAgcHJvbXB0KHtcclxuICAgICAgICB0aXRsZTogXCJGb3Jnb3QgUGFzc3dvcmRcIixcclxuICAgICAgICBtZXNzYWdlOlxyXG4gICAgICAgICAgXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgQ2FtZWxzIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXCIsXHJcbiAgICAgICAgaW5wdXRUeXBlOiBcImVtYWlsXCIsXHJcbiAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxyXG4gICAgICB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGZvY3VzUGFzc3dvcmQoKSB7XHJcbiAgICAgIHRoaXMuJHJlZnMucGFzc3dvcmQubmF0aXZlVmlldy5mb2N1cygpO1xyXG4gICAgfSxcclxuICAgIGZvY3VzTG9naW5CdXR0b24oKSB7XHJcbiAgICAgIHRoaXMuJHJlZnMubG9naW5CdXR0b24ubmF0aXZlVmlldy5mb2N1cygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhbGVydChtZXNzYWdlKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCh7XHJcbiAgICAgICAgdGl0bGU6IFwiQ2FtZWxzXCIsXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXHJcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDxQYWdlIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIj5cclxuICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwicGFnZVwiPlxyXG4gICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJmb3JtXCI+XHJcbiAgICAgICAgPCEtLSA8SW1hZ2UgY2xhc3M9XCJsb2dvXCIgc3JjPVwifi9hc3NldHMvaW1hZ2VzL05hdGl2ZVNjcmlwdC1WdWUucG5nXCIgLz5cclxuICAgICAgICA8TGFiZWwgY2xhc3M9XCJoZWFkZXJcIiB0ZXh0PVwiQ2FtZWxzXCIgLz4gLS0+XHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgbWFyZ2luQm90dG9tPVwiMjVcIj5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIGhpbnQ9XCJ5b3VuYW1lQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCJcclxuICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuZW1haWxcIlxyXG4gICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwibmV4dFwiXHJcbiAgICAgICAgICAgIEByZXR1cm5QcmVzcz1cImZvY3VzUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBtYXJnaW5Cb3R0b209XCIyNVwiPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICByZWY9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICBoaW50PVwiKioqKioqKioqXCJcclxuICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLnBhc3N3b3JkXCJcclxuICAgICAgICAgICAgOnJldHVybktleVR5cGU9XCJ0b2tlbiA/ICdkb25lJyA6ICduZXh0J1wiXHJcbiAgICAgICAgICAgIEByZXR1cm5QcmVzcz1cImZvY3VzTG9naW5CdXR0b25cIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgcmVmPVwibG9naW5CdXR0b25cIlxyXG4gICAgICAgICAgdGV4dD1cIkxvZyBJblwiXHJcbiAgICAgICAgICBAdGFwPVwic3VibWl0XCJcclxuICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8TGFiZWxcclxuICAgICAgICAgIHRleHQ9XCJGb3Jnb3QgeW91ciBwYXNzd29yZD9cIlxyXG4gICAgICAgICAgY2xhc3M9XCJsb2dpbi1sYWJlbFwiXHJcbiAgICAgICAgICBAdGFwPVwiZm9yZ290UGFzc3dvcmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICA8L0ZsZXhib3hMYXlvdXQ+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4ucGFnZSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwO1xyXG4gIG1hcmdpbi1yaWdodDogMzA7XHJcbiAgZmxleC1ncm93OiAyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMjtcclxuICBoZWlnaHQ6IDkwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDcwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2MxOWE2YjtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAyNTtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBmb250LXNpemU6IDE4O1xyXG4gIHBsYWNlaG9sZGVyLWNvbG9yOiAjYThhOGE4O1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQgLmlucHV0IHtcclxuICBmb250LXNpemU6IDU0O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGhlaWdodDogNTA7XHJcbiAgbWFyZ2luOiAzMCA1IDE1IDU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTtcclxuICBmb250LXNpemU6IDE2O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5sb2dpbi1sYWJlbCB7XHJcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTY7XHJcbn1cclxuXHJcbi5zaWduLXVwLWxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMDtcclxufVxyXG5cclxuLmJvbGQge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBWdWVEZXZ0b29scyBmcm9tIFwibmF0aXZlc2NyaXB0LXZ1ZS1kZXZ0b29sc1wiO1xyXG5pbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XHJcbmlmIChUTlNfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gIFZ1ZS51c2UoVnVlRGV2dG9vbHMpO1xyXG59XHJcblxyXG4vLyBpbXBvcnQgeyBjcmFzaGx5dGljcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XHJcbi8vIGltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG5pbXBvcnQgVGhlbWUgZnJvbSBcIkBuYXRpdmVzY3JpcHQvdGhlbWVcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuL2NvbXBvbmVudHMvTG9naW4udnVlXCI7XHJcbmNvbnN0IEFwcGxpY2F0aW9uU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9zdG9yZVwiO1xyXG5UaGVtZS5zZXRNb2RlKFRoZW1lLkxpZ2h0KTsgLy8gT3IgVGhlbWUuTGlnaHRcclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuXHJcbi8vIGlmIChpc0FuZHJvaWQpIHtcclxuLy8gICBjcmFzaGx5dGljcy5zZW5kQ3Jhc2hMb2cobmV3IGphdmEubGFuZy5FeGNlcHRpb24oXCJ0ZXN0IEV4Y2VwdGlvblwiKSk7XHJcbi8vIH1cclxuZmlyZWJhc2VcclxuICAuaW5pdCh7XHJcbiAgICAvLyBPcHRpb25hbGx5IHBhc3MgaW4gcHJvcGVydGllcyBmb3IgZGF0YWJhc2UsIGF1dGhlbnRpY2F0aW9uIGFuZCBjbG91ZCBtZXNzYWdpbmcsXHJcbiAgICAvLyBzZWUgdGhlaXIgcmVzcGVjdGl2ZSBkb2NzLlxyXG4gICAgLy8gY3Jhc2hseXRpY3NDb2xsZWN0aW9uRW5hYmxlZDogdHJ1ZSxcclxuICAgIG9uRHluYW1pY0xpbmtDYWxsYmFjazogZnVuY3Rpb24ocmVzdWx0OiBhbnkpIHtcclxuICAgICAgYWxlcnQocmVzdWx0LnVybCk7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKFwiYXV0aGVudGljYXRpb25Nb2R1bGUvc2V0Q3JlYXRlUGFzc3dvcmRQYWdlXCIpO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgLnRoZW4oXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xyXG4gICAgfSxcclxuICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yOiAke2Vycm9yfWApO1xyXG4gICAgfVxyXG4gICk7XHJcbmZpcmViYXNlLmFkZE9uRHluYW1pY0xpbmtSZWNlaXZlZENhbGxiYWNrKGZ1bmN0aW9uKHsgdXJsIH06IGFueSkge1xyXG4gIGFsZXJ0KHVybCk7XHJcbiAgLy8gLi5cclxufSk7XHJcbi8vIFByaW50cyBWdWUgbG9ncyB3aGVuIC0tZW52LnByb2R1Y3Rpb24gaXMgKk5PVCogc2V0IHdoaWxlIGJ1aWxkaW5nXHJcblZ1ZS5jb25maWcuc2lsZW50ID0gVE5TX0VOViA9PT0gXCJwcm9kdWN0aW9uXCI7XHJcblxyXG5WdWUucmVnaXN0ZXJFbGVtZW50KFxyXG4gIFwiUmFkU2lkZURyYXdlclwiLFxyXG4gICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiKS5SYWRTaWRlRHJhd2VyXHJcbik7XHJcblxyXG5pZiAoQXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoXCJjYW1lbHMtdG9rZW5cIikpIHtcclxuICBzdG9yZS5kaXNwYXRjaChcImF1dGhlbnRpY2F0aW9uTW9kdWxlL3NldEF1dGhUb2tlblwiLCB7XHJcbiAgICB0b2tlbjogSlNPTi5wYXJzZShBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhcImNhbWVscy10b2tlblwiKSlcclxuICB9KTtcclxufVxyXG5cclxubmV3IFZ1ZSh7XHJcbiAgc3RvcmUsXHJcbiAgcmVuZGVyOiBoID0+IGgoXCJGcmFtZVwiLCBbaChMb2dpbildKVxyXG59KS4kc3RhcnQoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==