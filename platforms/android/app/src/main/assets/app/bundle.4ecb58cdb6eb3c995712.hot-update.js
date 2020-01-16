webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./_shared/firebase/users.ts");
/* harmony import */ var _shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./views/Home.vue");
/* harmony import */ var _CreatePassword_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./views/CreatePassword.vue");
/* harmony import */ var _components_InputText_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/InputText.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Login',
  components: {
    InputText: _components_InputText_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },

  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    };
  },

  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    userContext: state => state.authenticationModule.userContext
  }),
  watch: {
    userContext(newValue) {
      if (newValue && newValue.invited && !newValue.loggedIn) {
        console.log("invited - watched :: ".concat(newValue.invited));

        if (newValue.invited) {
          this.navigateToPasswordCreationPage();
        }
      }
    }

  },
  mounted: function mounted() {
    this.$nextTick(function () {
      console.log('login :: mounted');
    });
  },
  updated: function updated() {
    console.log('login :: updated');
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('authenticationModule', {
    setGlobalLoginState: 'signedIn'
  }), {
    navigateToPasswordCreationPage() {
      this.$navigateTo(_CreatePassword_vue__WEBPACK_IMPORTED_MODULE_3__["default"], {
        clearHistory: true
      });
    },

    submit() {
      if (!this.user.email || !this.user.password) {
        this.alert('Please provide both an email address and password.');
        return;
      }

      this.login();
    },

    login() {
      var _this = this;

      return _asyncToGenerator(function* () {
        var {
          uid,
          token,
          role
        } = yield Object(_shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_1__["login"])(_this.user.email, _this.user.password);

        _this.setGlobalLoginState({
          token,
          uid,
          role,
          loggedIn: true
        });

        _this.$navigateTo(_Home_vue__WEBPACK_IMPORTED_MODULE_2__["default"], {
          clearHistory: true
        });
      })();
    },

    forgotPassword() {
      prompt({
        title: 'Forgot Password',
        message: 'Enter the email address you used to register for Camels to reset your password.',
        inputType: 'email',
        defaultText: '',
        okButtonText: 'Ok',
        cancelButtonText: 'Cancel'
      }).then(data => {
        if (data.result) {
          console.log("Email for password reset :: ".concat(data.result));
        }
      });
    },

    focusPassword() {
      this.$refs.password.nativeView.focus();
    },

    focusLoginButton() {
      this.$refs.loginButton.nativeView.focus();
    },

    handleOnChange(_ref) {
      var {
        modelKey,
        value
      } = _ref;
      console.log(modelKey);
      this[modelKey] = value;
    },

    alert(message) {
      return alert({
        title: 'Camels',
        okButtonText: 'OK',
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
var vue_1 = tslib_1.__importDefault(__webpack_require__("../node_modules/nativescript-ui-listview/vue/index.js"));
var nativescript_plugin_firebase_1 = tslib_1.__importDefault(__webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js"));
// @ts-ignore
var nativescript_fonticon_1 = __webpack_require__("../node_modules/nativescript-fonticon/nativescript-fonticon.js");
// TNSFontIcon.debug = true
nativescript_fonticon_1.TNSFontIcon.paths = {
    fa: './assets/fontawesome.css',
};
nativescript_fonticon_1.TNSFontIcon.loadCss();
nativescript_vue_1.default.filter('fonticon', nativescript_fonticon_1.fonticon);
nativescript_vue_1.default.use(nativescript_vue_devtools_1.default);
nativescript_vue_1.default.use(vue_1.default);
var nativescript_plugin_firebase_2 = __webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js");
var platform_1 = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
var application_settings_1 = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");
var theme_1 = tslib_1.__importDefault(__webpack_require__("../node_modules/@nativescript/theme/index.js"));
var Login_vue_1 = tslib_1.__importDefault(__webpack_require__("./views/Login.vue"));
var Home_vue_1 = tslib_1.__importDefault(__webpack_require__("./views/Home.vue"));
var store_1 = tslib_1.__importDefault(__webpack_require__("./store.ts"));
theme_1.default.setMode(theme_1.default.Light); // Or Theme.Light
if (platform_1.isAndroid) {
    // eslint-disable-next-line no-undef
    nativescript_plugin_firebase_2.crashlytics.sendCrashLog(new java.lang.Exception('Crash Exception'));
}
else if (platform_1.isIOS) {
    nativescript_plugin_firebase_2.crashlytics.sendCrashLog(
    // @ts-ignore
    // eslint-disable-next-line no-undef
    new NSError({
        domain: 'ShiploopHttpResponseErrorDomain',
        code: 42,
        userInfo: null,
    }));
}
nativescript_plugin_firebase_1.default
    .init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
    crashlyticsCollectionEnabled: true,
    onDynamicLinkCallback: function (result) {
        console.log('Dynamic link :: ' + result.url);
        store_1.default.dispatch('authenticationModule/setCreatePasswordPage');
    },
    showNotificationsWhenInForeground: true,
    onMessageReceivedCallback: function (message) {
        console.log("Title :: " + message.title);
        console.log("Body :: " + message.body);
    },
    onPushTokenReceivedCallback: function (token) {
        console.log('Firebase push token :: ' + token);
    },
})
    .then(function () {
    console.log('firebase.init :: done');
}, function (error) {
    console.log("firebase.init error :: " + error);
});
setTimeout(function () {
    nativescript_plugin_firebase_1.default.admob
        .showBanner({
        size: nativescript_plugin_firebase_1.default.admob.AD_SIZE.SMART_BANNER,
        margins: {
            // optional nr of device independent pixels from the top or bottom (don't set both)
            bottom: 10,
            top: -1,
        },
        androidBannerId: 'ca-app-pub-9791179910775561/7459626733',
        iosBannerId: 'ca-app-pub-9791179910775561/7459626733',
        testing: true,
        iosTestDeviceIds: [
            //Android automatically adds the connected device as test device with testing:true, iOS does not
            '45d77bf513dfabc2949ba053da83c0c7b7e87715',
            'fee4cf319a242eab4701543e4c16db89c722731f',
        ],
        keywords: ['cricket', 'london'],
        onOpened: function () { return console.log('Ad opened'); },
        onClicked: function () { return console.log('Ad clicked'); },
        onLeftApplication: function () { return console.log('Ad left application'); },
    })
        .then(function () {
        console.log('AdMob banner status :: Showing');
    }, function (errorMessage) {
        console.log(errorMessage);
    });
}, 5000);
// Prints Vue logs when --env.production is *NOT* set while building
nativescript_vue_1.default.config.silent = "development" === 'production';
nativescript_vue_1.default.registerElement('RadSideDrawer', function () { return __webpack_require__("../node_modules/nativescript-ui-sidedrawer/ui-sidedrawer.js").RadSideDrawer; });
var app = Login_vue_1.default;
if (application_settings_1.getString('camels-token')) {
    console.log("token exists :: ");
    store_1.default.dispatch('authenticationModule/setAuthToken', {
        token: application_settings_1.getString('camels-token'),
    });
    app = Home_vue_1.default;
}
new nativescript_vue_1.default({
    store: store_1.default,
    render: function (h) { return h('Frame', [h(app)]); },
}).$start();

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvTG9naW4udnVlIiwid2VicGFjazovLy8uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxlQURBO0FBRUE7QUFBQTtBQUFBLEdBRkE7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQTtBQUZBO0FBREE7QUFNQSxHQVZBOztBQVdBO0FBQ0E7QUFEQSxJQVhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFSQSxHQWRBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQTVCQTtBQTZCQTtBQUNBO0FBQ0EsR0EvQkE7QUFnQ0EsNkJBQ0E7QUFDQTtBQURBLElBREE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBLEtBUEE7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLEtBZEE7O0FBZ0JBO0FBQUE7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUlBLEtBcEJBOztBQXNCQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSxrR0FGQTtBQUdBLDBCQUhBO0FBSUEsdUJBSkE7QUFLQSwwQkFMQTtBQU1BO0FBTkEsU0FPQSxJQVBBLENBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVhBO0FBWUEsS0FuQ0E7O0FBcUNBO0FBQ0E7QUFDQSxLQXZDQTs7QUF3Q0E7QUFDQTtBQUNBLEtBMUNBOztBQTJDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLEtBOUNBOztBQStDQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSwwQkFGQTtBQUdBO0FBSEE7QUFLQTs7QUFyREE7QUFoQ0EsRzs7Ozs7Ozs7OztBQ1BBLHdGQUFtRDtBQUNuRCwrRUFBa0M7QUFD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TyxFQUFFLENBQUMsQ0FBQyxDQUFPO0NBQ2xDLENBQUMsQ0FBQyxNQUFNLEVBQUUiLCJmaWxlIjoiYnVuZGxlLjRlY2I1OGNkYjZlYjNjOTk1NzEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwU3RhdGUgfSBmcm9tICd2dWV4J1xuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi9fc2hhcmVkL2ZpcmViYXNlL3VzZXJzLnRzJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lLnZ1ZSdcbmltcG9ydCBDcmVhdGVQYXNzd29yZCBmcm9tICcuL0NyZWF0ZVBhc3N3b3JkLnZ1ZSdcbmltcG9ydCBJbnB1dFRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9JbnB1dFRleHQudnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdMb2dpbicsXG4gIGNvbXBvbmVudHM6IHsgSW5wdXRUZXh0IH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcbiAgICB1c2VyQ29udGV4dDogc3RhdGUgPT4gc3RhdGUuYXV0aGVudGljYXRpb25Nb2R1bGUudXNlckNvbnRleHQsXG4gIH0pLFxuICB3YXRjaDoge1xuICAgIHVzZXJDb250ZXh0KG5ld1ZhbHVlKSB7XG4gICAgICBpZiAobmV3VmFsdWUgJiYgbmV3VmFsdWUuaW52aXRlZCAmJiAhbmV3VmFsdWUubG9nZ2VkSW4pIHtcbiAgICAgICAgY29uc29sZS5sb2coYGludml0ZWQgLSB3YXRjaGVkIDo6ICR7bmV3VmFsdWUuaW52aXRlZH1gKVxuICAgICAgICBpZiAobmV3VmFsdWUuaW52aXRlZCkge1xuICAgICAgICAgIHRoaXMubmF2aWdhdGVUb1Bhc3N3b3JkQ3JlYXRpb25QYWdlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coJ2xvZ2luIDo6IG1vdW50ZWQnKVxuICAgIH0pXG4gIH0sXG4gIHVwZGF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCdsb2dpbiA6OiB1cGRhdGVkJylcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoJ2F1dGhlbnRpY2F0aW9uTW9kdWxlJywge1xuICAgICAgc2V0R2xvYmFsTG9naW5TdGF0ZTogJ3NpZ25lZEluJyxcbiAgICB9KSxcblxuICAgIG5hdmlnYXRlVG9QYXNzd29yZENyZWF0aW9uUGFnZSgpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oQ3JlYXRlUGFzc3dvcmQsIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pXG4gICAgfSxcbiAgICBzdWJtaXQoKSB7XG4gICAgICBpZiAoIXRoaXMudXNlci5lbWFpbCB8fCAhdGhpcy51c2VyLnBhc3N3b3JkKSB7XG4gICAgICAgIHRoaXMuYWxlcnQoJ1BsZWFzZSBwcm92aWRlIGJvdGggYW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmQuJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLmxvZ2luKClcbiAgICB9LFxuXG4gICAgYXN5bmMgbG9naW4oKSB7XG4gICAgICBjb25zdCB7IHVpZCwgdG9rZW4sIHJvbGUgfSA9IGF3YWl0IGxvZ2luKHRoaXMudXNlci5lbWFpbCwgdGhpcy51c2VyLnBhc3N3b3JkKVxuICAgICAgdGhpcy5zZXRHbG9iYWxMb2dpblN0YXRlKHsgdG9rZW4sIHVpZCwgcm9sZSwgbG9nZ2VkSW46IHRydWUgfSlcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSlcbiAgICB9LFxuXG4gICAgZm9yZ290UGFzc3dvcmQoKSB7XG4gICAgICBwcm9tcHQoe1xuICAgICAgICB0aXRsZTogJ0ZvcmdvdCBQYXNzd29yZCcsXG4gICAgICAgIG1lc3NhZ2U6ICdFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgQ2FtZWxzIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuJyxcbiAgICAgICAgaW5wdXRUeXBlOiAnZW1haWwnLFxuICAgICAgICBkZWZhdWx0VGV4dDogJycsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogJ09rJyxcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgRW1haWwgZm9yIHBhc3N3b3JkIHJlc2V0IDo6ICR7ZGF0YS5yZXN1bHR9YClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgZm9jdXNQYXNzd29yZCgpIHtcbiAgICAgIHRoaXMuJHJlZnMucGFzc3dvcmQubmF0aXZlVmlldy5mb2N1cygpXG4gICAgfSxcbiAgICBmb2N1c0xvZ2luQnV0dG9uKCkge1xuICAgICAgdGhpcy4kcmVmcy5sb2dpbkJ1dHRvbi5uYXRpdmVWaWV3LmZvY3VzKClcbiAgICB9LFxuICAgIGhhbmRsZU9uQ2hhbmdlKHsgbW9kZWxLZXksIHZhbHVlIH0pIHtcbiAgICAgIGNvbnNvbGUubG9nKG1vZGVsS2V5KVxuICAgICAgdGhpc1ttb2RlbEtleV0gPSB2YWx1ZVxuICAgIH0sXG4gICAgYWxlcnQobWVzc2FnZSkge1xuICAgICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgICAgdGl0bGU6ICdDYW1lbHMnLFxuICAgICAgICBva0J1dHRvblRleHQ6ICdPSycsXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICB9KVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8UGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCI+XG4gICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJwYWdlXCI+XG4gICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJudC1mb3JtIGZvcm1cIj5cbiAgICAgICAgPCEtLSA8SW1hZ2UgY2xhc3M9XCJsb2dvIG50LWltYWdlXCIgc3JjPVwifi9hc3NldHMvaW1hZ2VzL05hdGl2ZVNjcmlwdC1WdWUucG5nXCIgLz5cbiAgICAgICAgPExhYmVsIGNsYXNzPVwiaGVhZGVyXCIgdGV4dD1cIkNhbWVsc1wiIC8+IC0tPlxuICAgICAgICA8aW5wdXQtdGV4dFxuICAgICAgICAgIDptb2RlbGtleT1cInVzZXIuZW1haWxcIlxuICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmVtYWlsXCJcbiAgICAgICAgICBAaGFuZGxlT25DaGFuZ2U9XCJoYW5kbGVPbkNoYW5nZVwiXG4gICAgICAgICAgQHJldHVyblByZXNzPVwiZm9jdXNQYXNzd29yZFwiXG4gICAgICAgICAgcmV0dXJuS2V5VHlwZT1cIm5leHRcIlxuICAgICAgICAgIGtleWJvYXJkVHlwZT1cImVtYWlsXCJcbiAgICAgICAgICBwbGFjZUhvbGRlclRleHQ9XCJuYW1lQGNhbWVscy5jb21cIlxuICAgICAgICA+PC9pbnB1dC10ZXh0PlxuICAgICAgICA8aW5wdXQtdGV4dFxuICAgICAgICAgIHJlZj1cInBhc3N3b3JkXCJcbiAgICAgICAgICA6bW9kZWxrZXk9XCJ1c2VyLnBhc3N3b3JkXCJcbiAgICAgICAgICB2LW1vZGVsPVwidXNlci5wYXNzd29yZFwiXG4gICAgICAgICAgOnNlY3VyZT1cInRydWVcIlxuICAgICAgICAgIDpoYW5kbGVPbkNoYW5nZT1cImhhbmRsZU9uQ2hhbmdlXCJcbiAgICAgICAgICBAcmV0dXJuUHJlc3M9XCJmb2N1c0xvZ2luQnV0dG9uXCJcbiAgICAgICAgICByZXR1cm5LZXlUeXBlPVwibmV4dFwiXG4gICAgICAgICAga2V5Ym9hcmRUeXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHBsYWNlSG9sZGVyVGV4dD1cIioqKioqKioqKioqXCJcbiAgICAgICAgPjwvaW5wdXQtdGV4dD5cblxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgcmVmPVwibG9naW5CdXR0b25cIlxuICAgICAgICAgIEB0YXA9XCJzdWJtaXRcIlxuICAgICAgICAgIHRleHQ9XCJMb2cgSW5cIlxuICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMCAtcHJpbWFyeSAtcm91bmRlZC1zbVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxMYWJlbCBAdGFwPVwiZm9yZ290UGFzc3dvcmRcIiB0ZXh0PVwiRm9yZ290IHlvdXIgcGFzc3dvcmQ/XCIgY2xhc3M9XCJudC1sYWJlbCBsb2dpbi1sYWJlbFwiIC8+XG4gICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwvRmxleGJveExheW91dD5cbiAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuUGFnZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb3JtIHtcbiAgbWFyZ2luLWxlZnQ6IDMwO1xuICBtYXJnaW4tcmlnaHQ6IDMwO1xuICBmbGV4LWdyb3c6IDI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luLWJvdHRvbTogMTI7XG4gIGhlaWdodDogOTA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaGVhZGVyIHtcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA3MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2MxOWE2Yjtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgaGVpZ2h0OiA1MDtcbiAgbWFyZ2luOiAzMCA1IDE1IDU7XG4gIGZvbnQtc2l6ZTogMTY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5sb2dpbi1sYWJlbCB7XG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNjtcbn1cblxuLnNpZ24tdXAtbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAyMDtcbn1cblxuLmJvbGQge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgVnVlRGV2dG9vbHMgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZS1kZXZ0b29scydcbmltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSdcbmltcG9ydCBSYWRMaXN0VmlldyBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvdnVlJ1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgeyBUTlNGb250SWNvbiwgZm9udGljb24gfSBmcm9tICduYXRpdmVzY3JpcHQtZm9udGljb24nXG4vLyBUTlNGb250SWNvbi5kZWJ1ZyA9IHRydWVcblROU0ZvbnRJY29uLnBhdGhzID0ge1xuICBmYTogJy4vYXNzZXRzL2ZvbnRhd2Vzb21lLmNzcycsXG59XG5UTlNGb250SWNvbi5sb2FkQ3NzKClcblxuVnVlLmZpbHRlcignZm9udGljb24nLCBmb250aWNvbilcblZ1ZS51c2UoVnVlRGV2dG9vbHMpXG5WdWUudXNlKFJhZExpc3RWaWV3KVxuXG5pbXBvcnQgeyBjcmFzaGx5dGljcyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnXG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSdcbmltcG9ydCB7IGdldFN0cmluZyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnXG5pbXBvcnQgVGhlbWUgZnJvbSAnQG5hdGl2ZXNjcmlwdC90aGVtZSdcbmltcG9ydCBMb2dpbiBmcm9tICcuL3ZpZXdzL0xvZ2luLnZ1ZSdcbmltcG9ydCBIb21lIGZyb20gJy4vdmlld3MvSG9tZS52dWUnXG5cbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xuVGhlbWUuc2V0TW9kZShUaGVtZS5MaWdodCkgLy8gT3IgVGhlbWUuTGlnaHRcblxuaWYgKGlzQW5kcm9pZCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgY3Jhc2hseXRpY3Muc2VuZENyYXNoTG9nKG5ldyBqYXZhLmxhbmcuRXhjZXB0aW9uKCdDcmFzaCBFeGNlcHRpb24nKSlcbn0gZWxzZSBpZiAoaXNJT1MpIHtcbiAgY3Jhc2hseXRpY3Muc2VuZENyYXNoTG9nKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBuZXcgTlNFcnJvcih7XG4gICAgICBkb21haW46ICdTaGlwbG9vcEh0dHBSZXNwb25zZUVycm9yRG9tYWluJyxcbiAgICAgIGNvZGU6IDQyLFxuICAgICAgdXNlckluZm86IG51bGwsXG4gICAgfSlcbiAgKVxufVxuZmlyZWJhc2VcbiAgLmluaXQoe1xuICAgIC8vIE9wdGlvbmFsbHkgcGFzcyBpbiBwcm9wZXJ0aWVzIGZvciBkYXRhYmFzZSwgYXV0aGVudGljYXRpb24gYW5kIGNsb3VkIG1lc3NhZ2luZyxcbiAgICAvLyBzZWUgdGhlaXIgcmVzcGVjdGl2ZSBkb2NzLlxuICAgIGNyYXNobHl0aWNzQ29sbGVjdGlvbkVuYWJsZWQ6IHRydWUsXG4gICAgb25EeW5hbWljTGlua0NhbGxiYWNrOiBmdW5jdGlvbihyZXN1bHQ6IGFueSkge1xuICAgICAgY29uc29sZS5sb2coJ0R5bmFtaWMgbGluayA6OiAnICsgcmVzdWx0LnVybClcbiAgICAgIHN0b3JlLmRpc3BhdGNoKCdhdXRoZW50aWNhdGlvbk1vZHVsZS9zZXRDcmVhdGVQYXNzd29yZFBhZ2UnKVxuICAgIH0sXG4gICAgc2hvd05vdGlmaWNhdGlvbnNXaGVuSW5Gb3JlZ3JvdW5kOiB0cnVlLFxuICAgIG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IChtZXNzYWdlOiBmaXJlYmFzZS5NZXNzYWdlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgVGl0bGUgOjogJHttZXNzYWdlLnRpdGxlfWApXG4gICAgICBjb25zb2xlLmxvZyhgQm9keSA6OiAke21lc3NhZ2UuYm9keX1gKVxuICAgIH0sXG4gICAgb25QdXNoVG9rZW5SZWNlaXZlZENhbGxiYWNrOiBmdW5jdGlvbih0b2tlbjogc3RyaW5nKSB7XG4gICAgICBjb25zb2xlLmxvZygnRmlyZWJhc2UgcHVzaCB0b2tlbiA6OiAnICsgdG9rZW4pXG4gICAgfSxcbiAgfSlcbiAgLnRoZW4oXG4gICAgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2ZpcmViYXNlLmluaXQgOjogZG9uZScpXG4gICAgfSxcbiAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3IgOjogJHtlcnJvcn1gKVxuICAgIH1cbiAgKVxuc2V0VGltZW91dCgoKSA9PiB7XG4gIGZpcmViYXNlLmFkbW9iXG4gICAgLnNob3dCYW5uZXIoe1xuICAgICAgc2l6ZTogZmlyZWJhc2UuYWRtb2IuQURfU0laRS5TTUFSVF9CQU5ORVIsIC8vIHNlZSBmaXJlYmFzZS5hZG1vYi5BRF9TSVpFIGZvciBhbGwgb3B0aW9uc1xuICAgICAgbWFyZ2luczoge1xuICAgICAgICAvLyBvcHRpb25hbCBuciBvZiBkZXZpY2UgaW5kZXBlbmRlbnQgcGl4ZWxzIGZyb20gdGhlIHRvcCBvciBib3R0b20gKGRvbid0IHNldCBib3RoKVxuICAgICAgICBib3R0b206IDEwLFxuICAgICAgICB0b3A6IC0xLFxuICAgICAgfSxcbiAgICAgIGFuZHJvaWRCYW5uZXJJZDogJ2NhLWFwcC1wdWItOTc5MTE3OTkxMDc3NTU2MS83NDU5NjI2NzMzJyxcbiAgICAgIGlvc0Jhbm5lcklkOiAnY2EtYXBwLXB1Yi05NzkxMTc5OTEwNzc1NTYxLzc0NTk2MjY3MzMnLFxuICAgICAgdGVzdGluZzogdHJ1ZSwgLy8gd2hlbiBub3QgcnVubmluZyBpbiBwcm9kdWN0aW9uIHNldCB0aGlzIHRvIHRydWUsIEdvb2dsZSBkb2Vzbid0IGxpa2UgaXQgYW55IG90aGVyIHdheVxuICAgICAgaW9zVGVzdERldmljZUlkczogW1xuICAgICAgICAvL0FuZHJvaWQgYXV0b21hdGljYWxseSBhZGRzIHRoZSBjb25uZWN0ZWQgZGV2aWNlIGFzIHRlc3QgZGV2aWNlIHdpdGggdGVzdGluZzp0cnVlLCBpT1MgZG9lcyBub3RcbiAgICAgICAgJzQ1ZDc3YmY1MTNkZmFiYzI5NDliYTA1M2RhODNjMGM3YjdlODc3MTUnLCAvLyBFZGR5J3MgaVBob25lIDZzXG4gICAgICAgICdmZWU0Y2YzMTlhMjQyZWFiNDcwMTU0M2U0YzE2ZGI4OWM3MjI3MzFmJywgLy8gRWRkeSdzIGlQYWQgUHJvXG4gICAgICBdLFxuICAgICAga2V5d29yZHM6IFsnY3JpY2tldCcsICdsb25kb24nXSwgLy8gYWRkIGtleXdvcmRzIGZvciBhZCB0YXJnZXRpbmdcbiAgICAgIG9uT3BlbmVkOiAoKSA9PiBjb25zb2xlLmxvZygnQWQgb3BlbmVkJyksXG4gICAgICBvbkNsaWNrZWQ6ICgpID0+IGNvbnNvbGUubG9nKCdBZCBjbGlja2VkJyksXG4gICAgICBvbkxlZnRBcHBsaWNhdGlvbjogKCkgPT4gY29uc29sZS5sb2coJ0FkIGxlZnQgYXBwbGljYXRpb24nKSxcbiAgICB9KVxuICAgIC50aGVuKFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBZE1vYiBiYW5uZXIgc3RhdHVzIDo6IFNob3dpbmcnKVxuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKGVycm9yTWVzc2FnZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSlcbiAgICAgIH1cbiAgICApXG59LCA1MDAwKVxuXG4vLyBQcmludHMgVnVlIGxvZ3Mgd2hlbiAtLWVudi5wcm9kdWN0aW9uIGlzICpOT1QqIHNldCB3aGlsZSBidWlsZGluZ1xuVnVlLmNvbmZpZy5zaWxlbnQgPSBUTlNfRU5WID09PSAncHJvZHVjdGlvbidcblZ1ZS5yZWdpc3RlckVsZW1lbnQoJ1JhZFNpZGVEcmF3ZXInLCAoKSA9PiByZXF1aXJlKCduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcicpLlJhZFNpZGVEcmF3ZXIpXG5cbmxldCBhcHAgPSBMb2dpblxuXG5pZiAoZ2V0U3RyaW5nKCdjYW1lbHMtdG9rZW4nKSkge1xuICBjb25zb2xlLmxvZyhgdG9rZW4gZXhpc3RzIDo6IGApXG4gIHN0b3JlLmRpc3BhdGNoKCdhdXRoZW50aWNhdGlvbk1vZHVsZS9zZXRBdXRoVG9rZW4nLCB7XG4gICAgdG9rZW46IGdldFN0cmluZygnY2FtZWxzLXRva2VuJyksXG4gIH0pXG4gIGFwcCA9IEhvbWVcbn1cblxubmV3IFZ1ZSh7XG4gIHN0b3JlLFxuICByZW5kZXI6IGggPT4gaCgnRnJhbWUnLCBbaChhcHApXSksXG59KS4kc3RhcnQoKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==