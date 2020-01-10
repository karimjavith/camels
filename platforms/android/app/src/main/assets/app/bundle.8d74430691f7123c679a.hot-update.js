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
          console.log(docs);

          _this.setUserRole(data[uid].role);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLGVBREE7QUFFQTtBQUFBO0FBQUE7QUFBQSxHQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsR0FSQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUxBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVkEsR0FUQTs7QUFxQkE7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQTtBQUZBO0FBREE7QUFNQSxHQTVCQTs7QUE2QkE7QUFDQSxnRUFEQTtBQUVBO0FBRkEsSUE3QkE7QUFpQ0EsNkJBQ0E7QUFDQSxtQ0FEQTtBQUVBO0FBRkEsSUFEQTtBQUtBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FWQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsS0FqQkE7O0FBbUJBO0FBQUE7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQVRBO0FBVUEsS0E3QkE7O0FBK0JBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsS0FqQ0E7O0FBa0NBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsS0FwQ0E7O0FBc0NBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBLGlCQUNBLGlGQUhBO0FBSUEsMEJBSkE7QUFLQSx1QkFMQTtBQU1BLDBCQU5BO0FBT0E7QUFQQSxTQVFBLElBUkEsQ0FRQTtBQUNBLDBCQUNBO0FBQ0EsT0FYQTtBQVlBLEtBbkRBOztBQXFEQTtBQUNBO0FBQ0EsS0F2REE7O0FBd0RBO0FBQ0E7QUFDQSxLQTFEQTs7QUE0REE7QUFDQTtBQUNBLHVCQURBO0FBRUEsMEJBRkE7QUFHQTtBQUhBO0FBS0E7O0FBbEVBO0FBakNBLEc7Ozs7Ozs7Ozs7QUNQQSx3RkFBb0Q7QUFDcEQsK0VBQW1DO0FBQ25DLElBQUksS0FBMEI7QUFDUDtDQUN0QjtBQUVELDBHQUE4RDtBQUM5RCxZQUFnRTtBQUNoRSxZQUF3QztBQUN4QyxtQkFBMkM7QUFDM0MsSUFBTSxtQkFBbUIsR0FBRyx1QkFBUSw2REFBdUMsQ0FBQyxDQUFDO0FBRTdFLDBEQUE0QjtBQUNpQjtBQUM3QyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsd0JBQWdDO0FBRXpELG1CQUFtQjtBQUNuQiw0QkFBeUU7QUFDekUsSUFBSTtBQUNJO0tBQ0wsSUFBSSxDQUFDO0lBQ0osZ0ZBQWtGO0lBQ2xGLDZCQUE2QjtJQUM3QixzQ0FBc0M7SUFDdEMsZUFBMkM7UUFDekMsS0FBSyxDQUFhO0FBQzJDO0lBQy9ELENBQUM7Q0FDRixDQUFDO0tBQ0QsSUFDQztJQUNFLElBQWtDO0FBQ3BDLENBQUMsRUFDRCxVQUFDLEtBQVU7SUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF3QixLQUFPLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQ0YsQ0FBQztBQUNKLFFBQVEsQ0FBQyxnQ0FBZ0MsQ0FBQyxVQUFTLEVBQVk7UUFBVixZQUFHO0lBQ3RELEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNYLEtBQUs7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUNILHlGQUFvRTtBQUNwRSxxQkFBNkM7QUFFN0MsMEJBQUcsQ0FBQyxlQUFlLENBQ2pCLGVBQWUsRUFDZixFQUNBO0FBRUYsSUFBSSxrRUFBb0IsRUFBMkI7SUFDakQsZUFBSyxDQUFDLFFBQVEsQ0FBQyxnREFBbUMsQ0FBRTtRQUNsRCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBVSxpREFBZ0I7UUFDL0Q7Q0FDSjtBQUVELENBQVE7SUFDTixLQUFLO0lBQ0wsTUFBTSxFQUFFLFdBQUMsSUFBSSxRQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFRO0NBQ3BDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyIsImZpbGUiOiJidW5kbGUuOGQ3NDQzMDY5MWY3MTIzYzY3OWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XHJcbmNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5pbXBvcnQgeyBtYXBTdGF0ZSwgbWFwQWN0aW9ucyB9IGZyb20gXCJ2dWV4XCI7XHJcbmltcG9ydCB7IGxvZ2luLCBnZXRSb2xlcyB9IGZyb20gXCIuLi9fc2hhcmVkL2ZpcmJhc2UudHNcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZS52dWVcIjtcclxuaW1wb3J0IENyZWF0ZVBhc3N3b3JkIGZyb20gXCIuL0NyZWF0ZVBhc3N3b3JkLnZ1ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiTG9naW5cIixcclxuICBjb21wb25lbnRzOiB7IEhvbWUsIENyZWF0ZVBhc3N3b3JkIH0sXHJcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJtb3VudGVkXCIpO1xyXG4gICAgICB0aGlzLmNoZWNrQXV0aGVudGljYXRpb24oKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIHRva2VuKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICBpZiAobmV3VmFsdWUgfHwgb2xkVmFsdWUpIHtcclxuICAgICAgICB0aGlzLm5hdmlnYXRlVG9Ib21lUGFnZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgaW52aXRlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgaWYgKG5ld1ZhbHVlICYmICF0aGlzLnRva2VuKSB7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvUGFzc3dvcmRDcmVhdGlvblBhZ2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcclxuICAgIHRva2VuOiBzdGF0ZSA9PiBzdGF0ZS5hdXRoZW50aWNhdGlvbk1vZHVsZS51c2VyQ29udGV4dC50b2tlbixcclxuICAgIGludml0ZWQ6IHN0YXRlID0+IHN0YXRlLmF1dGhlbnRpY2F0aW9uTW9kdWxlLnVzZXJDb250ZXh0Lmludml0ZWRcclxuICB9KSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAuLi5tYXBBY3Rpb25zKFwiYXV0aGVudGljYXRpb25Nb2R1bGVcIiwge1xyXG4gICAgICBzZXRHbG9iYWxMb2dpblN0YXRlOiBcInNpZ25lZEluXCIsXHJcbiAgICAgIHNldFVzZXJSb2xlOiBcInNldFVzZXJSb2xlXCJcclxuICAgIH0pLFxyXG4gICAgY2hlY2tBdXRoZW50aWNhdGlvbigpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy50b2tlbik7XHJcbiAgICAgIGlmICh0aGlzLnRva2VuKSB7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvSG9tZVBhZ2UoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgaWYgKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCkge1xyXG4gICAgICAgIHRoaXMuYWxlcnQoXCJQbGVhc2UgcHJvdmlkZSBib3RoIGFuIGVtYWlsIGFkZHJlc3MgYW5kIHBhc3N3b3JkLlwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBsb2dpbigpIHtcclxuICAgICAgY29uc3QgeyB1aWQsIHRva2VuIH0gPSBhd2FpdCBsb2dpbih0aGlzLnVzZXIuZW1haWwsIHRoaXMudXNlci5wYXNzd29yZCk7XHJcbiAgICAgIHRoaXMuc2V0R2xvYmFsTG9naW5TdGF0ZSh7IHRva2VuIH0pO1xyXG4gICAgICBjb25zdCByb2xlcyA9IGF3YWl0IGdldFJvbGVzKCk7XHJcbiAgICAgIGNvbnN0IGRvY3MgPSBhd2FpdCByb2xlcy5nZXQoKTtcclxuICAgICAgaWYgKGRvY3MuZXhpc3RzKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGRvY3MuZGF0YSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRvY3MpO1xyXG4gICAgICAgIHRoaXMuc2V0VXNlclJvbGUoZGF0YVt1aWRdLnJvbGUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5hdmlnYXRlVG9Ib21lUGFnZSgpIHtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH0sXHJcbiAgICBuYXZpZ2F0ZVRvUGFzc3dvcmRDcmVhdGlvblBhZ2UoKSB7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oQ3JlYXRlUGFzc3dvcmQsIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBmb3Jnb3RQYXNzd29yZCgpIHtcclxuICAgICAgcHJvbXB0KHtcclxuICAgICAgICB0aXRsZTogXCJGb3Jnb3QgUGFzc3dvcmRcIixcclxuICAgICAgICBtZXNzYWdlOlxyXG4gICAgICAgICAgXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgQ2FtZWxzIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXCIsXHJcbiAgICAgICAgaW5wdXRUeXBlOiBcImVtYWlsXCIsXHJcbiAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxyXG4gICAgICB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGZvY3VzUGFzc3dvcmQoKSB7XHJcbiAgICAgIHRoaXMuJHJlZnMucGFzc3dvcmQubmF0aXZlVmlldy5mb2N1cygpO1xyXG4gICAgfSxcclxuICAgIGZvY3VzTG9naW5CdXR0b24oKSB7XHJcbiAgICAgIHRoaXMuJHJlZnMubG9naW5CdXR0b24ubmF0aXZlVmlldy5mb2N1cygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhbGVydChtZXNzYWdlKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCh7XHJcbiAgICAgICAgdGl0bGU6IFwiQ2FtZWxzXCIsXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXHJcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDxQYWdlIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIj5cclxuICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwicGFnZVwiPlxyXG4gICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJmb3JtXCI+XHJcbiAgICAgICAgPCEtLSA8SW1hZ2UgY2xhc3M9XCJsb2dvXCIgc3JjPVwifi9hc3NldHMvaW1hZ2VzL05hdGl2ZVNjcmlwdC1WdWUucG5nXCIgLz5cclxuICAgICAgICA8TGFiZWwgY2xhc3M9XCJoZWFkZXJcIiB0ZXh0PVwiQ2FtZWxzXCIgLz4gLS0+XHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgbWFyZ2luQm90dG9tPVwiMjVcIj5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIGhpbnQ9XCJ5b3VuYW1lQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCJcclxuICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuZW1haWxcIlxyXG4gICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwibmV4dFwiXHJcbiAgICAgICAgICAgIEByZXR1cm5QcmVzcz1cImZvY3VzUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBtYXJnaW5Cb3R0b209XCIyNVwiPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICByZWY9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICBoaW50PVwiKioqKioqKioqXCJcclxuICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLnBhc3N3b3JkXCJcclxuICAgICAgICAgICAgOnJldHVybktleVR5cGU9XCJ0b2tlbiA/ICdkb25lJyA6ICduZXh0J1wiXHJcbiAgICAgICAgICAgIEByZXR1cm5QcmVzcz1cImZvY3VzTG9naW5CdXR0b25cIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgcmVmPVwibG9naW5CdXR0b25cIlxyXG4gICAgICAgICAgdGV4dD1cIkxvZyBJblwiXHJcbiAgICAgICAgICBAdGFwPVwic3VibWl0XCJcclxuICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8TGFiZWxcclxuICAgICAgICAgIHRleHQ9XCJGb3Jnb3QgeW91ciBwYXNzd29yZD9cIlxyXG4gICAgICAgICAgY2xhc3M9XCJsb2dpbi1sYWJlbFwiXHJcbiAgICAgICAgICBAdGFwPVwiZm9yZ290UGFzc3dvcmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICA8L0ZsZXhib3hMYXlvdXQ+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4ucGFnZSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwO1xyXG4gIG1hcmdpbi1yaWdodDogMzA7XHJcbiAgZmxleC1ncm93OiAyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMjtcclxuICBoZWlnaHQ6IDkwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDcwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2MxOWE2YjtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAyNTtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBmb250LXNpemU6IDE4O1xyXG4gIHBsYWNlaG9sZGVyLWNvbG9yOiAjYThhOGE4O1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQgLmlucHV0IHtcclxuICBmb250LXNpemU6IDU0O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGhlaWdodDogNTA7XHJcbiAgbWFyZ2luOiAzMCA1IDE1IDU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTtcclxuICBmb250LXNpemU6IDE2O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5sb2dpbi1sYWJlbCB7XHJcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTY7XHJcbn1cclxuXHJcbi5zaWduLXVwLWxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMDtcclxufVxyXG5cclxuLmJvbGQge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBWdWVEZXZ0b29scyBmcm9tIFwibmF0aXZlc2NyaXB0LXZ1ZS1kZXZ0b29sc1wiO1xyXG5pbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XHJcbmlmIChUTlNfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gIFZ1ZS51c2UoVnVlRGV2dG9vbHMpO1xyXG59XHJcblxyXG4vLyBpbXBvcnQgeyBjcmFzaGx5dGljcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XHJcbi8vIGltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG5pbXBvcnQgVGhlbWUgZnJvbSBcIkBuYXRpdmVzY3JpcHQvdGhlbWVcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuL2NvbXBvbmVudHMvTG9naW4udnVlXCI7XHJcbmNvbnN0IEFwcGxpY2F0aW9uU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9zdG9yZVwiO1xyXG5UaGVtZS5zZXRNb2RlKFRoZW1lLkxpZ2h0KTsgLy8gT3IgVGhlbWUuTGlnaHRcclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuXHJcbi8vIGlmIChpc0FuZHJvaWQpIHtcclxuLy8gICBjcmFzaGx5dGljcy5zZW5kQ3Jhc2hMb2cobmV3IGphdmEubGFuZy5FeGNlcHRpb24oXCJ0ZXN0IEV4Y2VwdGlvblwiKSk7XHJcbi8vIH1cclxuZmlyZWJhc2VcclxuICAuaW5pdCh7XHJcbiAgICAvLyBPcHRpb25hbGx5IHBhc3MgaW4gcHJvcGVydGllcyBmb3IgZGF0YWJhc2UsIGF1dGhlbnRpY2F0aW9uIGFuZCBjbG91ZCBtZXNzYWdpbmcsXHJcbiAgICAvLyBzZWUgdGhlaXIgcmVzcGVjdGl2ZSBkb2NzLlxyXG4gICAgLy8gY3Jhc2hseXRpY3NDb2xsZWN0aW9uRW5hYmxlZDogdHJ1ZSxcclxuICAgIG9uRHluYW1pY0xpbmtDYWxsYmFjazogZnVuY3Rpb24ocmVzdWx0OiBhbnkpIHtcclxuICAgICAgYWxlcnQocmVzdWx0LnVybCk7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKFwiYXV0aGVudGljYXRpb25Nb2R1bGUvc2V0Q3JlYXRlUGFzc3dvcmRQYWdlXCIpO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgLnRoZW4oXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xyXG4gICAgfSxcclxuICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yOiAke2Vycm9yfWApO1xyXG4gICAgfVxyXG4gICk7XHJcbmZpcmViYXNlLmFkZE9uRHluYW1pY0xpbmtSZWNlaXZlZENhbGxiYWNrKGZ1bmN0aW9uKHsgdXJsIH06IGFueSkge1xyXG4gIGFsZXJ0KHVybCk7XHJcbiAgLy8gLi5cclxufSk7XHJcbi8vIFByaW50cyBWdWUgbG9ncyB3aGVuIC0tZW52LnByb2R1Y3Rpb24gaXMgKk5PVCogc2V0IHdoaWxlIGJ1aWxkaW5nXHJcblZ1ZS5jb25maWcuc2lsZW50ID0gVE5TX0VOViA9PT0gXCJwcm9kdWN0aW9uXCI7XHJcblxyXG5WdWUucmVnaXN0ZXJFbGVtZW50KFxyXG4gIFwiUmFkU2lkZURyYXdlclwiLFxyXG4gICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiKS5SYWRTaWRlRHJhd2VyXHJcbik7XHJcblxyXG5pZiAoQXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoXCJjYW1lbHMtdG9rZW5cIikpIHtcclxuICBzdG9yZS5kaXNwYXRjaChcImF1dGhlbnRpY2F0aW9uTW9kdWxlL3NldEF1dGhUb2tlblwiLCB7XHJcbiAgICB0b2tlbjogSlNPTi5wYXJzZShBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhcImNhbWVscy10b2tlblwiKSlcclxuICB9KTtcclxufVxyXG5cclxubmV3IFZ1ZSh7XHJcbiAgc3RvcmUsXHJcbiAgcmVuZGVyOiBoID0+IGgoXCJGcmFtZVwiLCBbaChMb2dpbildKVxyXG59KS4kc3RhcnQoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==