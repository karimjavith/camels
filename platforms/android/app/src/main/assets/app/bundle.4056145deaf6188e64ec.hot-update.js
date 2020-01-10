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
          var data = JSON.stringify(docs.data());
          console.log(data);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLGVBREE7QUFFQTtBQUFBO0FBQUE7QUFBQSxHQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsR0FSQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUxBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVkEsR0FUQTs7QUFxQkE7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQTtBQUZBO0FBREE7QUFNQSxHQTVCQTs7QUE2QkE7QUFDQSxnRUFEQTtBQUVBO0FBRkEsSUE3QkE7QUFpQ0EsNkJBQ0E7QUFDQSxtQ0FEQTtBQUVBO0FBRkEsSUFEQTtBQUtBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FWQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsS0FqQkE7O0FBbUJBO0FBQUE7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQVRBO0FBVUEsS0E3QkE7O0FBK0JBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsS0FqQ0E7O0FBa0NBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsS0FwQ0E7O0FBc0NBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBLGlCQUNBLGlGQUhBO0FBSUEsMEJBSkE7QUFLQSx1QkFMQTtBQU1BLDBCQU5BO0FBT0E7QUFQQSxTQVFBLElBUkEsQ0FRQTtBQUNBLDBCQUNBO0FBQ0EsT0FYQTtBQVlBLEtBbkRBOztBQXFEQTtBQUNBO0FBQ0EsS0F2REE7O0FBd0RBO0FBQ0E7QUFDQSxLQTFEQTs7QUE0REE7QUFDQTtBQUNBLHVCQURBO0FBRUEsMEJBRkE7QUFHQTtBQUhBO0FBS0E7O0FBbEVBO0FBakNBLEc7Ozs7Ozs7Ozs7QUNQQSx3RkFBb0Q7QUFDcEQsK0VBQW1DO0FBQ25DLElBQUksS0FBMEI7QUFDUDtDQUN0QjtBQUVELDBHQUE4RDtBQUM5RCxZQUFnRTtBQUNoRSxZQUF3QztBQUN4QyxtQkFBMkM7QUFDM0MsSUFBTSxtQkFBbUIsR0FBRyx1QkFBUSw2REFBdUMsQ0FBQyxDQUFDO0FBRTdFLDBEQUE0QjtBQUNpQjtBQUM3QyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsd0JBQWdDO0FBRXpELG1CQUFtQjtBQUNuQiw0QkFBeUU7QUFDekUsSUFBSTtBQUNJO0tBQ0wsSUFBSSxDQUFDO0lBQ0osZ0ZBQWtGO0lBQ2xGLDZCQUE2QjtJQUM3QixzQ0FBc0M7SUFDdEMsZUFBMkM7UUFDekMsS0FBSyxDQUFhO0FBQzJDO0lBQy9ELENBQUM7Q0FDRixDQUFDO0tBQ0QsSUFDQztJQUNFLElBQWtDO0FBQ3BDLENBQUMsRUFDRCxVQUFDLEtBQVU7SUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF3QixLQUFPLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQ0YsQ0FBQztBQUNKLFFBQVEsQ0FBQyxnQ0FBZ0MsQ0FBQyxVQUFTLEVBQVk7UUFBVixZQUFHO0lBQ3RELEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNYLEtBQUs7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUNILHlGQUFvRTtBQUNwRSxxQkFBNkM7QUFFN0MsMEJBQUcsQ0FBQyxlQUFlLENBQ2pCLGVBQWUsRUFDZixFQUNBO0FBRUYsSUFBSSxrRUFBb0IsRUFBMkI7SUFDakQsZUFBSyxDQUFDLFFBQVEsQ0FBQyxnREFBbUMsQ0FBRTtRQUNsRCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBVSxpREFBZ0I7UUFDL0Q7Q0FDSjtBQUVELENBQVE7SUFDTixLQUFLO0lBQ0wsTUFBTSxFQUFFLFdBQUMsSUFBSSxRQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFRO0NBQ3BDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyIsImZpbGUiOiJidW5kbGUuNDA1NjE0NWRlYWY2MTg4ZTY0ZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XHJcbmNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5pbXBvcnQgeyBtYXBTdGF0ZSwgbWFwQWN0aW9ucyB9IGZyb20gXCJ2dWV4XCI7XHJcbmltcG9ydCB7IGxvZ2luLCBnZXRSb2xlcyB9IGZyb20gXCIuLi9fc2hhcmVkL2ZpcmJhc2UudHNcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZS52dWVcIjtcclxuaW1wb3J0IENyZWF0ZVBhc3N3b3JkIGZyb20gXCIuL0NyZWF0ZVBhc3N3b3JkLnZ1ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiTG9naW5cIixcclxuICBjb21wb25lbnRzOiB7IEhvbWUsIENyZWF0ZVBhc3N3b3JkIH0sXHJcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJtb3VudGVkXCIpO1xyXG4gICAgICB0aGlzLmNoZWNrQXV0aGVudGljYXRpb24oKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIHRva2VuKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICBpZiAobmV3VmFsdWUgfHwgb2xkVmFsdWUpIHtcclxuICAgICAgICB0aGlzLm5hdmlnYXRlVG9Ib21lUGFnZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgaW52aXRlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgaWYgKG5ld1ZhbHVlICYmICF0aGlzLnRva2VuKSB7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvUGFzc3dvcmRDcmVhdGlvblBhZ2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcclxuICAgIHRva2VuOiBzdGF0ZSA9PiBzdGF0ZS5hdXRoZW50aWNhdGlvbk1vZHVsZS51c2VyQ29udGV4dC50b2tlbixcclxuICAgIGludml0ZWQ6IHN0YXRlID0+IHN0YXRlLmF1dGhlbnRpY2F0aW9uTW9kdWxlLnVzZXJDb250ZXh0Lmludml0ZWRcclxuICB9KSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAuLi5tYXBBY3Rpb25zKFwiYXV0aGVudGljYXRpb25Nb2R1bGVcIiwge1xyXG4gICAgICBzZXRHbG9iYWxMb2dpblN0YXRlOiBcInNpZ25lZEluXCIsXHJcbiAgICAgIHNldFVzZXJSb2xlOiBcInNldFVzZXJSb2xlXCJcclxuICAgIH0pLFxyXG4gICAgY2hlY2tBdXRoZW50aWNhdGlvbigpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy50b2tlbik7XHJcbiAgICAgIGlmICh0aGlzLnRva2VuKSB7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvSG9tZVBhZ2UoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgaWYgKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCkge1xyXG4gICAgICAgIHRoaXMuYWxlcnQoXCJQbGVhc2UgcHJvdmlkZSBib3RoIGFuIGVtYWlsIGFkZHJlc3MgYW5kIHBhc3N3b3JkLlwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBsb2dpbigpIHtcclxuICAgICAgY29uc3QgeyB1aWQsIHRva2VuIH0gPSBhd2FpdCBsb2dpbih0aGlzLnVzZXIuZW1haWwsIHRoaXMudXNlci5wYXNzd29yZCk7XHJcbiAgICAgIHRoaXMuc2V0R2xvYmFsTG9naW5TdGF0ZSh7IHRva2VuIH0pO1xyXG4gICAgICBjb25zdCByb2xlcyA9IGF3YWl0IGdldFJvbGVzKCk7XHJcbiAgICAgIGNvbnN0IGRvY3MgPSBhd2FpdCByb2xlcy5nZXQoKTtcclxuICAgICAgaWYgKGRvY3MuZXhpc3RzKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRvY3MuZGF0YSgpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB0aGlzLnNldFVzZXJSb2xlKGRhdGFbdWlkXS5yb2xlKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBuYXZpZ2F0ZVRvSG9tZVBhZ2UoKSB7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICB9LFxyXG4gICAgbmF2aWdhdGVUb1Bhc3N3b3JkQ3JlYXRpb25QYWdlKCkge1xyXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKENyZWF0ZVBhc3N3b3JkLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgZm9yZ290UGFzc3dvcmQoKSB7XHJcbiAgICAgIHByb21wdCh7XHJcbiAgICAgICAgdGl0bGU6IFwiRm9yZ290IFBhc3N3b3JkXCIsXHJcbiAgICAgICAgbWVzc2FnZTpcclxuICAgICAgICAgIFwiRW50ZXIgdGhlIGVtYWlsIGFkZHJlc3MgeW91IHVzZWQgdG8gcmVnaXN0ZXIgZm9yIENhbWVscyB0byByZXNldCB5b3VyIHBhc3N3b3JkLlwiLFxyXG4gICAgICAgIGlucHV0VHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICAgIGRlZmF1bHRUZXh0OiBcIlwiLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcclxuICAgICAgfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBmb2N1c1Bhc3N3b3JkKCkge1xyXG4gICAgICB0aGlzLiRyZWZzLnBhc3N3b3JkLm5hdGl2ZVZpZXcuZm9jdXMoKTtcclxuICAgIH0sXHJcbiAgICBmb2N1c0xvZ2luQnV0dG9uKCkge1xyXG4gICAgICB0aGlzLiRyZWZzLmxvZ2luQnV0dG9uLm5hdGl2ZVZpZXcuZm9jdXMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgYWxlcnQobWVzc2FnZSkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgIHRpdGxlOiBcIkNhbWVsc1wiLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxyXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8UGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCI+XHJcbiAgICA8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIj5cclxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZm9ybVwiPlxyXG4gICAgICAgIDwhLS0gPEltYWdlIGNsYXNzPVwibG9nb1wiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9OYXRpdmVTY3JpcHQtVnVlLnBuZ1wiIC8+XHJcbiAgICAgICAgPExhYmVsIGNsYXNzPVwiaGVhZGVyXCIgdGV4dD1cIkNhbWVsc1wiIC8+IC0tPlxyXG5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIG1hcmdpbkJvdHRvbT1cIjI1XCI+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICBoaW50PVwieW91bmFtZUBnbWFpbC5jb21cIlxyXG4gICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmVtYWlsXCJcclxuICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cIm5leHRcIlxyXG4gICAgICAgICAgICBAcmV0dXJuUHJlc3M9XCJmb2N1c1Bhc3N3b3JkXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgbWFyZ2luQm90dG9tPVwiMjVcIj5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgcmVmPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcclxuICAgICAgICAgICAgaGludD1cIioqKioqKioqKlwiXHJcbiAgICAgICAgICAgIHNlY3VyZT1cInRydWVcIlxyXG4gICAgICAgICAgICB2LW1vZGVsPVwidXNlci5wYXNzd29yZFwiXHJcbiAgICAgICAgICAgIDpyZXR1cm5LZXlUeXBlPVwidG9rZW4gPyAnZG9uZScgOiAnbmV4dCdcIlxyXG4gICAgICAgICAgICBAcmV0dXJuUHJlc3M9XCJmb2N1c0xvZ2luQnV0dG9uXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHJlZj1cImxvZ2luQnV0dG9uXCJcclxuICAgICAgICAgIHRleHQ9XCJMb2cgSW5cIlxyXG4gICAgICAgICAgQHRhcD1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPExhYmVsXHJcbiAgICAgICAgICB0ZXh0PVwiRm9yZ290IHlvdXIgcGFzc3dvcmQ/XCJcclxuICAgICAgICAgIGNsYXNzPVwibG9naW4tbGFiZWxcIlxyXG4gICAgICAgICAgQHRhcD1cImZvcmdvdFBhc3N3b3JkXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgPC9GbGV4Ym94TGF5b3V0PlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuLnBhZ2Uge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwO1xyXG4gIGZsZXgtZ3JvdzogMjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTI7XHJcbiAgaGVpZ2h0OiA5MDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiA3MDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNjMTlhNmI7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjU7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxODtcclxuICBwbGFjZWhvbGRlci1jb2xvcjogI2E4YThhODtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIC5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiA1NDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBoZWlnaHQ6IDUwO1xyXG4gIG1hcmdpbjogMzAgNSAxNSA1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDU7XHJcbiAgZm9udC1zaXplOiAxNjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubG9naW4tbGFiZWwge1xyXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE2O1xyXG59XHJcblxyXG4uc2lnbi11cC1sYWJlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjA7XHJcbn1cclxuXHJcbi5ib2xkIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgVnVlRGV2dG9vbHMgZnJvbSBcIm5hdGl2ZXNjcmlwdC12dWUtZGV2dG9vbHNcIjtcclxuaW1wb3J0IFZ1ZSBmcm9tIFwibmF0aXZlc2NyaXB0LXZ1ZVwiO1xyXG5pZiAoVE5TX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICBWdWUudXNlKFZ1ZURldnRvb2xzKTtcclxufVxyXG5cclxuLy8gaW1wb3J0IHsgY3Jhc2hseXRpY3MgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG4vLyBpbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0IFRoZW1lIGZyb20gXCJAbmF0aXZlc2NyaXB0L3RoZW1lXCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9jb21wb25lbnRzL0xvZ2luLnZ1ZVwiO1xyXG5jb25zdCBBcHBsaWNhdGlvblNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vc3RvcmVcIjtcclxuVGhlbWUuc2V0TW9kZShUaGVtZS5MaWdodCk7IC8vIE9yIFRoZW1lLkxpZ2h0XHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcblxyXG4vLyBpZiAoaXNBbmRyb2lkKSB7XHJcbi8vICAgY3Jhc2hseXRpY3Muc2VuZENyYXNoTG9nKG5ldyBqYXZhLmxhbmcuRXhjZXB0aW9uKFwidGVzdCBFeGNlcHRpb25cIikpO1xyXG4vLyB9XHJcbmZpcmViYXNlXHJcbiAgLmluaXQoe1xyXG4gICAgLy8gT3B0aW9uYWxseSBwYXNzIGluIHByb3BlcnRpZXMgZm9yIGRhdGFiYXNlLCBhdXRoZW50aWNhdGlvbiBhbmQgY2xvdWQgbWVzc2FnaW5nLFxyXG4gICAgLy8gc2VlIHRoZWlyIHJlc3BlY3RpdmUgZG9jcy5cclxuICAgIC8vIGNyYXNobHl0aWNzQ29sbGVjdGlvbkVuYWJsZWQ6IHRydWUsXHJcbiAgICBvbkR5bmFtaWNMaW5rQ2FsbGJhY2s6IGZ1bmN0aW9uKHJlc3VsdDogYW55KSB7XHJcbiAgICAgIGFsZXJ0KHJlc3VsdC51cmwpO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaChcImF1dGhlbnRpY2F0aW9uTW9kdWxlL3NldENyZWF0ZVBhc3N3b3JkUGFnZVwiKTtcclxuICAgIH1cclxuICB9KVxyXG4gIC50aGVuKFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcclxuICAgIH0sXHJcbiAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKTtcclxuICAgIH1cclxuICApO1xyXG5maXJlYmFzZS5hZGRPbkR5bmFtaWNMaW5rUmVjZWl2ZWRDYWxsYmFjayhmdW5jdGlvbih7IHVybCB9OiBhbnkpIHtcclxuICBhbGVydCh1cmwpO1xyXG4gIC8vIC4uXHJcbn0pO1xyXG4vLyBQcmludHMgVnVlIGxvZ3Mgd2hlbiAtLWVudi5wcm9kdWN0aW9uIGlzICpOT1QqIHNldCB3aGlsZSBidWlsZGluZ1xyXG5WdWUuY29uZmlnLnNpbGVudCA9IFROU19FTlYgPT09IFwicHJvZHVjdGlvblwiO1xyXG5cclxuVnVlLnJlZ2lzdGVyRWxlbWVudChcclxuICBcIlJhZFNpZGVEcmF3ZXJcIixcclxuICAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIikuUmFkU2lkZURyYXdlclxyXG4pO1xyXG5cclxuaWYgKEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY2FtZWxzLXRva2VuXCIpKSB7XHJcbiAgc3RvcmUuZGlzcGF0Y2goXCJhdXRoZW50aWNhdGlvbk1vZHVsZS9zZXRBdXRoVG9rZW5cIiwge1xyXG4gICAgdG9rZW46IEpTT04ucGFyc2UoQXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoXCJjYW1lbHMtdG9rZW5cIikpXHJcbiAgfSk7XHJcbn1cclxuXHJcbm5ldyBWdWUoe1xyXG4gIHN0b3JlLFxyXG4gIHJlbmRlcjogaCA9PiBoKFwiRnJhbWVcIiwgW2goTG9naW4pXSlcclxufSkuJHN0YXJ0KCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=