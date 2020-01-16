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

    handleOnChange(data) {
      console.log(data);
      this[data] = data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvTG9naW4udnVlIiwid2VicGFjazovLy8uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxlQURBO0FBRUE7QUFBQTtBQUFBLEdBRkE7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQTtBQUZBO0FBREE7QUFNQSxHQVZBOztBQVdBO0FBQ0E7QUFEQSxJQVhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFSQSxHQWRBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQTVCQTtBQTZCQTtBQUNBO0FBQ0EsR0EvQkE7QUFnQ0EsNkJBQ0E7QUFDQTtBQURBLElBREE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBLEtBUEE7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLEtBZEE7O0FBZ0JBO0FBQUE7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUlBLEtBcEJBOztBQXNCQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSxrR0FGQTtBQUdBLDBCQUhBO0FBSUEsdUJBSkE7QUFLQSwwQkFMQTtBQU1BO0FBTkEsU0FPQSxJQVBBLENBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVhBO0FBWUEsS0FuQ0E7O0FBcUNBO0FBQ0E7QUFDQSxLQXZDQTs7QUF3Q0E7QUFDQTtBQUNBLEtBMUNBOztBQTJDQTtBQUNBO0FBQ0E7QUFDQSxLQTlDQTs7QUErQ0E7QUFDQTtBQUNBLHVCQURBO0FBRUEsMEJBRkE7QUFHQTtBQUhBO0FBS0E7O0FBckRBO0FBaENBLEc7Ozs7Ozs7Ozs7QUNQQSx3RkFBbUQ7QUFDbkQsK0VBQWtDO0FBQ2xDLFNBQXNEO0FBQ0g7QUFDbkQs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TztDQUNsQyxDQUFDLENBQUMsTUFBTSxFQUFFIiwiZmlsZSI6ImJ1bmRsZS5hMTFjOTYxMTU0MjdlMmMxNjAzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcFN0YXRlIH0gZnJvbSAndnVleCdcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi4vX3NoYXJlZC9maXJlYmFzZS91c2Vycy50cydcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZS52dWUnXG5pbXBvcnQgQ3JlYXRlUGFzc3dvcmQgZnJvbSAnLi9DcmVhdGVQYXNzd29yZC52dWUnXG5pbXBvcnQgSW5wdXRUZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvSW5wdXRUZXh0LnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTG9naW4nLFxuICBjb21wb25lbnRzOiB7IElucHV0VGV4dCB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyOiB7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgfSxcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiBtYXBTdGF0ZSh7XG4gICAgdXNlckNvbnRleHQ6IHN0YXRlID0+IHN0YXRlLmF1dGhlbnRpY2F0aW9uTW9kdWxlLnVzZXJDb250ZXh0LFxuICB9KSxcbiAgd2F0Y2g6IHtcbiAgICB1c2VyQ29udGV4dChuZXdWYWx1ZSkge1xuICAgICAgaWYgKG5ld1ZhbHVlICYmIG5ld1ZhbHVlLmludml0ZWQgJiYgIW5ld1ZhbHVlLmxvZ2dlZEluKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBpbnZpdGVkIC0gd2F0Y2hlZCA6OiAke25ld1ZhbHVlLmludml0ZWR9YClcbiAgICAgICAgaWYgKG5ld1ZhbHVlLmludml0ZWQpIHtcbiAgICAgICAgICB0aGlzLm5hdmlnYXRlVG9QYXNzd29yZENyZWF0aW9uUGFnZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiA6OiBtb3VudGVkJylcbiAgICB9KVxuICB9LFxuICB1cGRhdGVkOiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnbG9naW4gOjogdXBkYXRlZCcpXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBBY3Rpb25zKCdhdXRoZW50aWNhdGlvbk1vZHVsZScsIHtcbiAgICAgIHNldEdsb2JhbExvZ2luU3RhdGU6ICdzaWduZWRJbicsXG4gICAgfSksXG5cbiAgICBuYXZpZ2F0ZVRvUGFzc3dvcmRDcmVhdGlvblBhZ2UoKSB7XG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKENyZWF0ZVBhc3N3b3JkLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KVxuICAgIH0sXG4gICAgc3VibWl0KCkge1xuICAgICAgaWYgKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCkge1xuICAgICAgICB0aGlzLmFsZXJ0KCdQbGVhc2UgcHJvdmlkZSBib3RoIGFuIGVtYWlsIGFkZHJlc3MgYW5kIHBhc3N3b3JkLicpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdGhpcy5sb2dpbigpXG4gICAgfSxcblxuICAgIGFzeW5jIGxvZ2luKCkge1xuICAgICAgY29uc3QgeyB1aWQsIHRva2VuLCByb2xlIH0gPSBhd2FpdCBsb2dpbih0aGlzLnVzZXIuZW1haWwsIHRoaXMudXNlci5wYXNzd29yZClcbiAgICAgIHRoaXMuc2V0R2xvYmFsTG9naW5TdGF0ZSh7IHRva2VuLCB1aWQsIHJvbGUsIGxvZ2dlZEluOiB0cnVlIH0pXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUsIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pXG4gICAgfSxcblxuICAgIGZvcmdvdFBhc3N3b3JkKCkge1xuICAgICAgcHJvbXB0KHtcbiAgICAgICAgdGl0bGU6ICdGb3Jnb3QgUGFzc3dvcmQnLFxuICAgICAgICBtZXNzYWdlOiAnRW50ZXIgdGhlIGVtYWlsIGFkZHJlc3MgeW91IHVzZWQgdG8gcmVnaXN0ZXIgZm9yIENhbWVscyB0byByZXNldCB5b3VyIHBhc3N3b3JkLicsXG4gICAgICAgIGlucHV0VHlwZTogJ2VtYWlsJyxcbiAgICAgICAgZGVmYXVsdFRleHQ6ICcnLFxuICAgICAgICBva0J1dHRvblRleHQ6ICdPaycsXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYEVtYWlsIGZvciBwYXNzd29yZCByZXNldCA6OiAke2RhdGEucmVzdWx0fWApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcblxuICAgIGZvY3VzUGFzc3dvcmQoKSB7XG4gICAgICB0aGlzLiRyZWZzLnBhc3N3b3JkLm5hdGl2ZVZpZXcuZm9jdXMoKVxuICAgIH0sXG4gICAgZm9jdXNMb2dpbkJ1dHRvbigpIHtcbiAgICAgIHRoaXMuJHJlZnMubG9naW5CdXR0b24ubmF0aXZlVmlldy5mb2N1cygpXG4gICAgfSxcbiAgICBoYW5kbGVPbkNoYW5nZShkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgdGhpc1tkYXRhXSA9IGRhdGFcbiAgICB9LFxuICAgIGFsZXJ0KG1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiBhbGVydCh7XG4gICAgICAgIHRpdGxlOiAnQ2FtZWxzJyxcbiAgICAgICAgb2tCdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgfSlcbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPFBhZ2UgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiPlxuICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwicGFnZVwiPlxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibnQtZm9ybSBmb3JtXCI+XG4gICAgICAgIDwhLS0gPEltYWdlIGNsYXNzPVwibG9nbyBudC1pbWFnZVwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9OYXRpdmVTY3JpcHQtVnVlLnBuZ1wiIC8+XG4gICAgICAgIDxMYWJlbCBjbGFzcz1cImhlYWRlclwiIHRleHQ9XCJDYW1lbHNcIiAvPiAtLT5cbiAgICAgICAgPGlucHV0LXRleHRcbiAgICAgICAgICB2LW1vZGVsPVwidXNlci5lbWFpbFwiXG4gICAgICAgICAgQGhhbmRsZU9uQ2hhbmdlPVwiaGFuZGxlT25DaGFuZ2VcIlxuICAgICAgICAgIEByZXR1cm5QcmVzcz1cImZvY3VzUGFzc3dvcmRcIlxuICAgICAgICAgIG1vZGVsa2V5PVwidXNlci5lbWFpbFwiXG4gICAgICAgICAgcmV0dXJuS2V5VHlwZT1cIm5leHRcIlxuICAgICAgICAgIGtleWJvYXJkVHlwZT1cImVtYWlsXCJcbiAgICAgICAgICBwbGFjZUhvbGRlclRleHQ9XCJuYW1lQGNhbWVscy5jb21cIlxuICAgICAgICA+PC9pbnB1dC10ZXh0PlxuICAgICAgICA8aW5wdXQtdGV4dFxuICAgICAgICAgIHJlZj1cInBhc3N3b3JkXCJcbiAgICAgICAgICB2LW1vZGVsPVwidXNlci5wYXNzd29yZFwiXG4gICAgICAgICAgOnNlY3VyZT1cInRydWVcIlxuICAgICAgICAgIDpoYW5kbGVPbkNoYW5nZT1cImhhbmRsZU9uQ2hhbmdlXCJcbiAgICAgICAgICBAcmV0dXJuUHJlc3M9XCJmb2N1c0xvZ2luQnV0dG9uXCJcbiAgICAgICAgICBtb2RlbGtleT1cInVzZXIucGFzc3dvcmRcIlxuICAgICAgICAgIHJldHVybktleVR5cGU9XCJuZXh0XCJcbiAgICAgICAgICBrZXlib2FyZFR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgcGxhY2VIb2xkZXJUZXh0PVwiKioqKioqKioqKipcIlxuICAgICAgICA+PC9pbnB1dC10ZXh0PlxuXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICByZWY9XCJsb2dpbkJ1dHRvblwiXG4gICAgICAgICAgQHRhcD1cInN1Ym1pdFwiXG4gICAgICAgICAgdGV4dD1cIkxvZyBJblwiXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbS10LTIwIC1wcmltYXJ5IC1yb3VuZGVkLXNtXCJcbiAgICAgICAgLz5cbiAgICAgICAgPExhYmVsIEB0YXA9XCJmb3Jnb3RQYXNzd29yZFwiIHRleHQ9XCJGb3Jnb3QgeW91ciBwYXNzd29yZD9cIiBjbGFzcz1cIm50LWxhYmVsIGxvZ2luLWxhYmVsXCIgLz5cbiAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC9GbGV4Ym94TGF5b3V0PlxuICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG5QYWdlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZvcm0ge1xuICBtYXJnaW4tbGVmdDogMzA7XG4gIG1hcmdpbi1yaWdodDogMzA7XG4gIGZsZXgtZ3JvdzogMjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmxvZ28ge1xuICBtYXJnaW4tYm90dG9tOiAxMjtcbiAgaGVpZ2h0OiA5MDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5oZWFkZXIge1xuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDcwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjYzE5YTZiO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBoZWlnaHQ6IDUwO1xuICBtYXJnaW46IDMwIDUgMTUgNTtcbiAgZm9udC1zaXplOiAxNjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmxvZ2luLWxhYmVsIHtcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2O1xufVxuXG4uc2lnbi11cC1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDIwO1xufVxuXG4uYm9sZCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuPC9zdHlsZT5cbiIsImltcG9ydCBWdWVEZXZ0b29scyBmcm9tICduYXRpdmVzY3JpcHQtdnVlLWRldnRvb2xzJ1xuaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJ1xuaW1wb3J0IFJhZExpc3RWaWV3IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldy92dWUnXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSdcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IFROU0ZvbnRJY29uLCBmb250aWNvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1mb250aWNvbidcbi8vIFROU0ZvbnRJY29uLmRlYnVnID0gdHJ1ZVxuVE5TRm9udEljb24ucGF0aHMgPSB7XG4gIGZhOiAnLi9hc3NldHMvZm9udGF3ZXNvbWUuY3NzJyxcbn1cblROU0ZvbnRJY29uLmxvYWRDc3MoKVxuXG5WdWUuZmlsdGVyKCdmb250aWNvbicsIGZvbnRpY29uKVxuVnVlLnVzZShWdWVEZXZ0b29scylcblZ1ZS51c2UoUmFkTGlzdFZpZXcpXG5cbmltcG9ydCB7IGNyYXNobHl0aWNzIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSdcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJ1xuaW1wb3J0IHsgZ2V0U3RyaW5nIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncydcbmltcG9ydCBUaGVtZSBmcm9tICdAbmF0aXZlc2NyaXB0L3RoZW1lJ1xuaW1wb3J0IExvZ2luIGZyb20gJy4vdmlld3MvTG9naW4udnVlJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi92aWV3cy9Ib21lLnZ1ZSdcblxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXG5UaGVtZS5zZXRNb2RlKFRoZW1lLkxpZ2h0KSAvLyBPciBUaGVtZS5MaWdodFxuXG5pZiAoaXNBbmRyb2lkKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBjcmFzaGx5dGljcy5zZW5kQ3Jhc2hMb2cobmV3IGphdmEubGFuZy5FeGNlcHRpb24oJ0NyYXNoIEV4Y2VwdGlvbicpKVxufSBlbHNlIGlmIChpc0lPUykge1xuICBjcmFzaGx5dGljcy5zZW5kQ3Jhc2hMb2coXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIG5ldyBOU0Vycm9yKHtcbiAgICAgIGRvbWFpbjogJ1NoaXBsb29wSHR0cFJlc3BvbnNlRXJyb3JEb21haW4nLFxuICAgICAgY29kZTogNDIsXG4gICAgICB1c2VySW5mbzogbnVsbCxcbiAgICB9KVxuICApXG59XG5maXJlYmFzZVxuICAuaW5pdCh7XG4gICAgLy8gT3B0aW9uYWxseSBwYXNzIGluIHByb3BlcnRpZXMgZm9yIGRhdGFiYXNlLCBhdXRoZW50aWNhdGlvbiBhbmQgY2xvdWQgbWVzc2FnaW5nLFxuICAgIC8vIHNlZSB0aGVpciByZXNwZWN0aXZlIGRvY3MuXG4gICAgY3Jhc2hseXRpY3NDb2xsZWN0aW9uRW5hYmxlZDogdHJ1ZSxcbiAgICBvbkR5bmFtaWNMaW5rQ2FsbGJhY2s6IGZ1bmN0aW9uKHJlc3VsdDogYW55KSB7XG4gICAgICBjb25zb2xlLmxvZygnRHluYW1pYyBsaW5rIDo6ICcgKyByZXN1bHQudXJsKVxuICAgICAgc3RvcmUuZGlzcGF0Y2goJ2F1dGhlbnRpY2F0aW9uTW9kdWxlL3NldENyZWF0ZVBhc3N3b3JkUGFnZScpXG4gICAgfSxcbiAgICBzaG93Tm90aWZpY2F0aW9uc1doZW5JbkZvcmVncm91bmQ6IHRydWUsXG4gICAgb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazogKG1lc3NhZ2U6IGZpcmViYXNlLk1lc3NhZ2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBUaXRsZSA6OiAke21lc3NhZ2UudGl0bGV9YClcbiAgICAgIGNvbnNvbGUubG9nKGBCb2R5IDo6ICR7bWVzc2FnZS5ib2R5fWApXG4gICAgfSxcbiAgICBvblB1c2hUb2tlblJlY2VpdmVkQ2FsbGJhY2s6IGZ1bmN0aW9uKHRva2VuOiBzdHJpbmcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdGaXJlYmFzZSBwdXNoIHRva2VuIDo6ICcgKyB0b2tlbilcbiAgICB9LFxuICB9KVxuICAudGhlbihcbiAgICAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZmlyZWJhc2UuaW5pdCA6OiBkb25lJylcbiAgICB9LFxuICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvciA6OiAke2Vycm9yfWApXG4gICAgfVxuICApXG5zZXRUaW1lb3V0KCgpID0+IHtcbiAgZmlyZWJhc2UuYWRtb2JcbiAgICAuc2hvd0Jhbm5lcih7XG4gICAgICBzaXplOiBmaXJlYmFzZS5hZG1vYi5BRF9TSVpFLlNNQVJUX0JBTk5FUiwgLy8gc2VlIGZpcmViYXNlLmFkbW9iLkFEX1NJWkUgZm9yIGFsbCBvcHRpb25zXG4gICAgICBtYXJnaW5zOiB7XG4gICAgICAgIC8vIG9wdGlvbmFsIG5yIG9mIGRldmljZSBpbmRlcGVuZGVudCBwaXhlbHMgZnJvbSB0aGUgdG9wIG9yIGJvdHRvbSAoZG9uJ3Qgc2V0IGJvdGgpXG4gICAgICAgIGJvdHRvbTogMTAsXG4gICAgICAgIHRvcDogLTEsXG4gICAgICB9LFxuICAgICAgYW5kcm9pZEJhbm5lcklkOiAnY2EtYXBwLXB1Yi05NzkxMTc5OTEwNzc1NTYxLzc0NTk2MjY3MzMnLFxuICAgICAgaW9zQmFubmVySWQ6ICdjYS1hcHAtcHViLTk3OTExNzk5MTA3NzU1NjEvNzQ1OTYyNjczMycsXG4gICAgICB0ZXN0aW5nOiB0cnVlLCAvLyB3aGVuIG5vdCBydW5uaW5nIGluIHByb2R1Y3Rpb24gc2V0IHRoaXMgdG8gdHJ1ZSwgR29vZ2xlIGRvZXNuJ3QgbGlrZSBpdCBhbnkgb3RoZXIgd2F5XG4gICAgICBpb3NUZXN0RGV2aWNlSWRzOiBbXG4gICAgICAgIC8vQW5kcm9pZCBhdXRvbWF0aWNhbGx5IGFkZHMgdGhlIGNvbm5lY3RlZCBkZXZpY2UgYXMgdGVzdCBkZXZpY2Ugd2l0aCB0ZXN0aW5nOnRydWUsIGlPUyBkb2VzIG5vdFxuICAgICAgICAnNDVkNzdiZjUxM2RmYWJjMjk0OWJhMDUzZGE4M2MwYzdiN2U4NzcxNScsIC8vIEVkZHkncyBpUGhvbmUgNnNcbiAgICAgICAgJ2ZlZTRjZjMxOWEyNDJlYWI0NzAxNTQzZTRjMTZkYjg5YzcyMjczMWYnLCAvLyBFZGR5J3MgaVBhZCBQcm9cbiAgICAgIF0sXG4gICAgICBrZXl3b3JkczogWydjcmlja2V0JywgJ2xvbmRvbiddLCAvLyBhZGQga2V5d29yZHMgZm9yIGFkIHRhcmdldGluZ1xuICAgICAgb25PcGVuZWQ6ICgpID0+IGNvbnNvbGUubG9nKCdBZCBvcGVuZWQnKSxcbiAgICAgIG9uQ2xpY2tlZDogKCkgPT4gY29uc29sZS5sb2coJ0FkIGNsaWNrZWQnKSxcbiAgICAgIG9uTGVmdEFwcGxpY2F0aW9uOiAoKSA9PiBjb25zb2xlLmxvZygnQWQgbGVmdCBhcHBsaWNhdGlvbicpLFxuICAgIH0pXG4gICAgLnRoZW4oXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0FkTW9iIGJhbm5lciBzdGF0dXMgOjogU2hvd2luZycpXG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oZXJyb3JNZXNzYWdlOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKVxuICAgICAgfVxuICAgIClcbn0sIDUwMDApXG5cbi8vIFByaW50cyBWdWUgbG9ncyB3aGVuIC0tZW52LnByb2R1Y3Rpb24gaXMgKk5PVCogc2V0IHdoaWxlIGJ1aWxkaW5nXG5WdWUuY29uZmlnLnNpbGVudCA9IFROU19FTlYgPT09ICdwcm9kdWN0aW9uJ1xuVnVlLnJlZ2lzdGVyRWxlbWVudCgnUmFkU2lkZURyYXdlcicsICgpID0+IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJykuUmFkU2lkZURyYXdlcilcblxubGV0IGFwcCA9IExvZ2luXG5cbmlmIChnZXRTdHJpbmcoJ2NhbWVscy10b2tlbicpKSB7XG4gIGNvbnNvbGUubG9nKGB0b2tlbiBleGlzdHMgOjogYClcbiAgc3RvcmUuZGlzcGF0Y2goJ2F1dGhlbnRpY2F0aW9uTW9kdWxlL3NldEF1dGhUb2tlbicsIHtcbiAgICB0b2tlbjogZ2V0U3RyaW5nKCdjYW1lbHMtdG9rZW4nKSxcbiAgfSlcbiAgYXBwID0gSG9tZVxufVxuXG5uZXcgVnVlKHtcbiAgc3RvcmUsXG4gIHJlbmRlcjogaCA9PiBoKCdGcmFtZScsIFtoKGFwcCldKSxcbn0pLiRzdGFydCgpXG4iXSwic291cmNlUm9vdCI6IiJ9