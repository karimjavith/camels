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
          console.log(data[uid]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLGVBREE7QUFFQTtBQUFBO0FBQUE7QUFBQSxHQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsR0FSQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUxBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVkEsR0FUQTs7QUFxQkE7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQTtBQUZBO0FBREE7QUFNQSxHQTVCQTs7QUE2QkE7QUFDQSxnRUFEQTtBQUVBO0FBRkEsSUE3QkE7QUFpQ0EsNkJBQ0E7QUFDQSxtQ0FEQTtBQUVBO0FBRkEsSUFEQTtBQUtBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FWQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsS0FqQkE7O0FBbUJBO0FBQUE7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQVRBO0FBVUEsS0E3QkE7O0FBK0JBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsS0FqQ0E7O0FBa0NBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsS0FwQ0E7O0FBc0NBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBLGlCQUNBLGlGQUhBO0FBSUEsMEJBSkE7QUFLQSx1QkFMQTtBQU1BLDBCQU5BO0FBT0E7QUFQQSxTQVFBLElBUkEsQ0FRQTtBQUNBLDBCQUNBO0FBQ0EsT0FYQTtBQVlBLEtBbkRBOztBQXFEQTtBQUNBO0FBQ0EsS0F2REE7O0FBd0RBO0FBQ0E7QUFDQSxLQTFEQTs7QUE0REE7QUFDQTtBQUNBLHVCQURBO0FBRUEsMEJBRkE7QUFHQTtBQUhBO0FBS0E7O0FBbEVBO0FBakNBLEc7Ozs7Ozs7Ozs7QUNQQSx3RkFBb0Q7QUFDcEQsK0VBQW1DO0FBQ25DLElBQUksS0FBMEI7QUFDUDtDQUN0QjtBQUVELDBHQUE4RDtBQUM5RCxZQUFnRTtBQUNoRSxZQUF3QztBQUN4QyxtQkFBMkM7QUFDM0MsSUFBTSxtQkFBbUIsR0FBRyx1QkFBUSw2REFBdUMsQ0FBQyxDQUFDO0FBRTdFLDBEQUE0QjtBQUNpQjtBQUM3QyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsd0JBQWdDO0FBRXpELG1CQUFtQjtBQUNuQiw0QkFBeUU7QUFDekUsSUFBSTtBQUNJO0tBQ0wsSUFBSSxDQUFDO0lBQ0osZ0ZBQWtGO0lBQ2xGLDZCQUE2QjtJQUM3QixzQ0FBc0M7SUFDdEMsZUFBMkM7UUFDekMsS0FBSyxDQUFhO0FBQzJDO0lBQy9ELENBQUM7Q0FDRixDQUFDO0tBQ0QsSUFDQztJQUNFLElBQWtDO0FBQ3BDLENBQUMsRUFDRCxVQUFDLEtBQVU7SUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF3QixLQUFPLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQ0YsQ0FBQztBQUNKLFFBQVEsQ0FBQyxnQ0FBZ0MsQ0FBQyxVQUFTLEVBQVk7UUFBVixZQUFHO0lBQ3RELEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNYLEtBQUs7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUNILHlGQUFvRTtBQUNwRSxxQkFBNkM7QUFFN0MsMEJBQUcsQ0FBQyxlQUFlLENBQ2pCLGVBQWUsRUFDZixFQUNBO0FBRUYsSUFBSSxrRUFBb0IsRUFBMkI7SUFDakQsZUFBSyxDQUFDLFFBQVEsQ0FBQyxnREFBbUMsQ0FBRTtRQUNsRCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBVSxpREFBZ0I7UUFDL0Q7Q0FDSjtBQUVELENBQVE7SUFDTixLQUFLO0lBQ0wsTUFBTSxFQUFFLFdBQUMsSUFBSSxRQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFRO0NBQ3BDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyIsImZpbGUiOiJidW5kbGUuN2NiOGFkNjdlYzhmODc3ZmJjOTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XHJcbmNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5pbXBvcnQgeyBtYXBTdGF0ZSwgbWFwQWN0aW9ucyB9IGZyb20gXCJ2dWV4XCI7XHJcbmltcG9ydCB7IGxvZ2luLCBnZXRSb2xlcyB9IGZyb20gXCIuLi9fc2hhcmVkL2ZpcmJhc2UudHNcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZS52dWVcIjtcclxuaW1wb3J0IENyZWF0ZVBhc3N3b3JkIGZyb20gXCIuL0NyZWF0ZVBhc3N3b3JkLnZ1ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiTG9naW5cIixcclxuICBjb21wb25lbnRzOiB7IEhvbWUsIENyZWF0ZVBhc3N3b3JkIH0sXHJcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJtb3VudGVkXCIpO1xyXG4gICAgICB0aGlzLmNoZWNrQXV0aGVudGljYXRpb24oKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIHRva2VuKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICBpZiAobmV3VmFsdWUgfHwgb2xkVmFsdWUpIHtcclxuICAgICAgICB0aGlzLm5hdmlnYXRlVG9Ib21lUGFnZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgaW52aXRlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgaWYgKG5ld1ZhbHVlICYmICF0aGlzLnRva2VuKSB7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvUGFzc3dvcmRDcmVhdGlvblBhZ2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcclxuICAgIHRva2VuOiBzdGF0ZSA9PiBzdGF0ZS5hdXRoZW50aWNhdGlvbk1vZHVsZS51c2VyQ29udGV4dC50b2tlbixcclxuICAgIGludml0ZWQ6IHN0YXRlID0+IHN0YXRlLmF1dGhlbnRpY2F0aW9uTW9kdWxlLnVzZXJDb250ZXh0Lmludml0ZWRcclxuICB9KSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAuLi5tYXBBY3Rpb25zKFwiYXV0aGVudGljYXRpb25Nb2R1bGVcIiwge1xyXG4gICAgICBzZXRHbG9iYWxMb2dpblN0YXRlOiBcInNpZ25lZEluXCIsXHJcbiAgICAgIHNldFVzZXJSb2xlOiBcInNldFVzZXJSb2xlXCJcclxuICAgIH0pLFxyXG4gICAgY2hlY2tBdXRoZW50aWNhdGlvbigpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy50b2tlbik7XHJcbiAgICAgIGlmICh0aGlzLnRva2VuKSB7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvSG9tZVBhZ2UoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgaWYgKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCkge1xyXG4gICAgICAgIHRoaXMuYWxlcnQoXCJQbGVhc2UgcHJvdmlkZSBib3RoIGFuIGVtYWlsIGFkZHJlc3MgYW5kIHBhc3N3b3JkLlwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBsb2dpbigpIHtcclxuICAgICAgY29uc3QgeyB1aWQsIHRva2VuIH0gPSBhd2FpdCBsb2dpbih0aGlzLnVzZXIuZW1haWwsIHRoaXMudXNlci5wYXNzd29yZCk7XHJcbiAgICAgIHRoaXMuc2V0R2xvYmFsTG9naW5TdGF0ZSh7IHRva2VuIH0pO1xyXG4gICAgICBjb25zdCByb2xlcyA9IGF3YWl0IGdldFJvbGVzKCk7XHJcbiAgICAgIGNvbnN0IGRvY3MgPSBhd2FpdCByb2xlcy5nZXQoKTtcclxuICAgICAgaWYgKGRvY3MuZXhpc3RzKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGRvY3MuZGF0YSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFbdWlkXSk7XHJcbiAgICAgICAgdGhpcy5zZXRVc2VyUm9sZShkYXRhW3VpZF0ucm9sZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbmF2aWdhdGVUb0hvbWVQYWdlKCkge1xyXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUsIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgfSxcclxuICAgIG5hdmlnYXRlVG9QYXNzd29yZENyZWF0aW9uUGFnZSgpIHtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhDcmVhdGVQYXNzd29yZCwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGZvcmdvdFBhc3N3b3JkKCkge1xyXG4gICAgICBwcm9tcHQoe1xyXG4gICAgICAgIHRpdGxlOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxyXG4gICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICBcIkVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSB1c2VkIHRvIHJlZ2lzdGVyIGZvciBDYW1lbHMgdG8gcmVzZXQgeW91ciBwYXNzd29yZC5cIixcclxuICAgICAgICBpbnB1dFR5cGU6IFwiZW1haWxcIixcclxuICAgICAgICBkZWZhdWx0VGV4dDogXCJcIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXHJcbiAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgZm9jdXNQYXNzd29yZCgpIHtcclxuICAgICAgdGhpcy4kcmVmcy5wYXNzd29yZC5uYXRpdmVWaWV3LmZvY3VzKCk7XHJcbiAgICB9LFxyXG4gICAgZm9jdXNMb2dpbkJ1dHRvbigpIHtcclxuICAgICAgdGhpcy4kcmVmcy5sb2dpbkJ1dHRvbi5uYXRpdmVWaWV3LmZvY3VzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFsZXJ0KG1lc3NhZ2UpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KHtcclxuICAgICAgICB0aXRsZTogXCJDYW1lbHNcIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48dGVtcGxhdGU+XHJcbiAgPFBhZ2UgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJwYWdlXCI+XHJcbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvcm1cIj5cclxuICAgICAgICA8IS0tIDxJbWFnZSBjbGFzcz1cImxvZ29cIiBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvTmF0aXZlU2NyaXB0LVZ1ZS5wbmdcIiAvPlxyXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cImhlYWRlclwiIHRleHQ9XCJDYW1lbHNcIiAvPiAtLT5cclxuXHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBtYXJnaW5Cb3R0b209XCIyNVwiPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcclxuICAgICAgICAgICAgaGludD1cInlvdW5hbWVAZ21haWwuY29tXCJcclxuICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCJcclxuICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIlxyXG4gICAgICAgICAgICB2LW1vZGVsPVwidXNlci5lbWFpbFwiXHJcbiAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJuZXh0XCJcclxuICAgICAgICAgICAgQHJldHVyblByZXNzPVwiZm9jdXNQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGZvbnRTaXplPVwiMThcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIG1hcmdpbkJvdHRvbT1cIjI1XCI+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHJlZj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIGhpbnQ9XCIqKioqKioqKipcIlxyXG4gICAgICAgICAgICBzZWN1cmU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIucGFzc3dvcmRcIlxyXG4gICAgICAgICAgICA6cmV0dXJuS2V5VHlwZT1cInRva2VuID8gJ2RvbmUnIDogJ25leHQnXCJcclxuICAgICAgICAgICAgQHJldHVyblByZXNzPVwiZm9jdXNMb2dpbkJ1dHRvblwiXHJcbiAgICAgICAgICAgIGZvbnRTaXplPVwiMThcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICByZWY9XCJsb2dpbkJ1dHRvblwiXHJcbiAgICAgICAgICB0ZXh0PVwiTG9nIEluXCJcclxuICAgICAgICAgIEB0YXA9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxMYWJlbFxyXG4gICAgICAgICAgdGV4dD1cIkZvcmdvdCB5b3VyIHBhc3N3b3JkP1wiXHJcbiAgICAgICAgICBjbGFzcz1cImxvZ2luLWxhYmVsXCJcclxuICAgICAgICAgIEB0YXA9XCJmb3Jnb3RQYXNzd29yZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9TdGFja0xheW91dD5cclxuICAgIDwvRmxleGJveExheW91dD5cclxuICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbi5wYWdlIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBtYXJnaW4tbGVmdDogMzA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMDtcclxuICBmbGV4LWdyb3c6IDI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEyO1xyXG4gIGhlaWdodDogOTA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI1O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNzA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjYzE5YTZiO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDI1O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMTg7XHJcbiAgcGxhY2Vob2xkZXItY29sb3I6ICNhOGE4YTg7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCAuaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogNTQ7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgaGVpZ2h0OiA1MDtcclxuICBtYXJnaW46IDMwIDUgMTUgNTtcclxuICBib3JkZXItcmFkaXVzOiA1O1xyXG4gIGZvbnQtc2l6ZTogMTY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmxvZ2luLWxhYmVsIHtcclxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNjtcclxufVxyXG5cclxuLnNpZ24tdXAtbGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwO1xyXG59XHJcblxyXG4uYm9sZCB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiaW1wb3J0IFZ1ZURldnRvb2xzIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlLWRldnRvb2xzXCI7XHJcbmltcG9ydCBWdWUgZnJvbSBcIm5hdGl2ZXNjcmlwdC12dWVcIjtcclxuaWYgKFROU19FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgVnVlLnVzZShWdWVEZXZ0b29scyk7XHJcbn1cclxuXHJcbi8vIGltcG9ydCB7IGNyYXNobHl0aWNzIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcclxuLy8gaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbmltcG9ydCBUaGVtZSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC90aGVtZVwiO1xyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vY29tcG9uZW50cy9Mb2dpbi52dWVcIjtcclxuY29uc3QgQXBwbGljYXRpb25TZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG5cclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3N0b3JlXCI7XHJcblRoZW1lLnNldE1vZGUoVGhlbWUuTGlnaHQpOyAvLyBPciBUaGVtZS5MaWdodFxyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5cclxuLy8gaWYgKGlzQW5kcm9pZCkge1xyXG4vLyAgIGNyYXNobHl0aWNzLnNlbmRDcmFzaExvZyhuZXcgamF2YS5sYW5nLkV4Y2VwdGlvbihcInRlc3QgRXhjZXB0aW9uXCIpKTtcclxuLy8gfVxyXG5maXJlYmFzZVxyXG4gIC5pbml0KHtcclxuICAgIC8vIE9wdGlvbmFsbHkgcGFzcyBpbiBwcm9wZXJ0aWVzIGZvciBkYXRhYmFzZSwgYXV0aGVudGljYXRpb24gYW5kIGNsb3VkIG1lc3NhZ2luZyxcclxuICAgIC8vIHNlZSB0aGVpciByZXNwZWN0aXZlIGRvY3MuXHJcbiAgICAvLyBjcmFzaGx5dGljc0NvbGxlY3Rpb25FbmFibGVkOiB0cnVlLFxyXG4gICAgb25EeW5hbWljTGlua0NhbGxiYWNrOiBmdW5jdGlvbihyZXN1bHQ6IGFueSkge1xyXG4gICAgICBhbGVydChyZXN1bHQudXJsKTtcclxuICAgICAgc3RvcmUuZGlzcGF0Y2goXCJhdXRoZW50aWNhdGlvbk1vZHVsZS9zZXRDcmVhdGVQYXNzd29yZFBhZ2VcIik7XHJcbiAgICB9XHJcbiAgfSlcclxuICAudGhlbihcclxuICAgICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XHJcbiAgICB9LFxyXG4gICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3I6ICR7ZXJyb3J9YCk7XHJcbiAgICB9XHJcbiAgKTtcclxuZmlyZWJhc2UuYWRkT25EeW5hbWljTGlua1JlY2VpdmVkQ2FsbGJhY2soZnVuY3Rpb24oeyB1cmwgfTogYW55KSB7XHJcbiAgYWxlcnQodXJsKTtcclxuICAvLyAuLlxyXG59KTtcclxuLy8gUHJpbnRzIFZ1ZSBsb2dzIHdoZW4gLS1lbnYucHJvZHVjdGlvbiBpcyAqTk9UKiBzZXQgd2hpbGUgYnVpbGRpbmdcclxuVnVlLmNvbmZpZy5zaWxlbnQgPSBUTlNfRU5WID09PSBcInByb2R1Y3Rpb25cIjtcclxuXHJcblZ1ZS5yZWdpc3RlckVsZW1lbnQoXHJcbiAgXCJSYWRTaWRlRHJhd2VyXCIsXHJcbiAgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCIpLlJhZFNpZGVEcmF3ZXJcclxuKTtcclxuXHJcbmlmIChBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhcImNhbWVscy10b2tlblwiKSkge1xyXG4gIHN0b3JlLmRpc3BhdGNoKFwiYXV0aGVudGljYXRpb25Nb2R1bGUvc2V0QXV0aFRva2VuXCIsIHtcclxuICAgIHRva2VuOiBKU09OLnBhcnNlKEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY2FtZWxzLXRva2VuXCIpKVxyXG4gIH0pO1xyXG59XHJcblxyXG5uZXcgVnVlKHtcclxuICBzdG9yZSxcclxuICByZW5kZXI6IGggPT4gaChcIkZyYW1lXCIsIFtoKExvZ2luKV0pXHJcbn0pLiRzdGFydCgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9