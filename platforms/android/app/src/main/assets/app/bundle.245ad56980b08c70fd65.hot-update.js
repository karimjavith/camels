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
      this[data.modelKey] = data.value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvTG9naW4udnVlIiwid2VicGFjazovLy8uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxlQURBO0FBRUE7QUFBQTtBQUFBLEdBRkE7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQTtBQUZBO0FBREE7QUFNQSxHQVZBOztBQVdBO0FBQ0E7QUFEQSxJQVhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFSQSxHQWRBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQTVCQTtBQTZCQTtBQUNBO0FBQ0EsR0EvQkE7QUFnQ0EsNkJBQ0E7QUFDQTtBQURBLElBREE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBLEtBUEE7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLEtBZEE7O0FBZ0JBO0FBQUE7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUlBLEtBcEJBOztBQXNCQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSxrR0FGQTtBQUdBLDBCQUhBO0FBSUEsdUJBSkE7QUFLQSwwQkFMQTtBQU1BO0FBTkEsU0FPQSxJQVBBLENBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVhBO0FBWUEsS0FuQ0E7O0FBcUNBO0FBQ0E7QUFDQSxLQXZDQTs7QUF3Q0E7QUFDQTtBQUNBLEtBMUNBOztBQTJDQTtBQUNBO0FBQ0E7QUFDQSxLQTlDQTs7QUErQ0E7QUFDQTtBQUNBLHVCQURBO0FBRUEsMEJBRkE7QUFHQTtBQUhBO0FBS0E7O0FBckRBO0FBaENBLEc7Ozs7Ozs7Ozs7QUNQQSx3RkFBbUQ7QUFDbkQsK0VBQWtDO0FBQ2xDLFNBQXNEO0FBQ0g7QUFDbkQs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TztDQUNsQyxDQUFDLENBQUMsTUFBTSxFQUFFIiwiZmlsZSI6ImJ1bmRsZS4yNDVhZDU2OTgwYjA4YzcwZmQ2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcFN0YXRlIH0gZnJvbSAndnVleCdcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi4vX3NoYXJlZC9maXJlYmFzZS91c2Vycy50cydcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZS52dWUnXG5pbXBvcnQgQ3JlYXRlUGFzc3dvcmQgZnJvbSAnLi9DcmVhdGVQYXNzd29yZC52dWUnXG5pbXBvcnQgSW5wdXRUZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvSW5wdXRUZXh0LnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTG9naW4nLFxuICBjb21wb25lbnRzOiB7IElucHV0VGV4dCB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyOiB7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgfSxcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiBtYXBTdGF0ZSh7XG4gICAgdXNlckNvbnRleHQ6IHN0YXRlID0+IHN0YXRlLmF1dGhlbnRpY2F0aW9uTW9kdWxlLnVzZXJDb250ZXh0LFxuICB9KSxcbiAgd2F0Y2g6IHtcbiAgICB1c2VyQ29udGV4dChuZXdWYWx1ZSkge1xuICAgICAgaWYgKG5ld1ZhbHVlICYmIG5ld1ZhbHVlLmludml0ZWQgJiYgIW5ld1ZhbHVlLmxvZ2dlZEluKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBpbnZpdGVkIC0gd2F0Y2hlZCA6OiAke25ld1ZhbHVlLmludml0ZWR9YClcbiAgICAgICAgaWYgKG5ld1ZhbHVlLmludml0ZWQpIHtcbiAgICAgICAgICB0aGlzLm5hdmlnYXRlVG9QYXNzd29yZENyZWF0aW9uUGFnZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiA6OiBtb3VudGVkJylcbiAgICB9KVxuICB9LFxuICB1cGRhdGVkOiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnbG9naW4gOjogdXBkYXRlZCcpXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBBY3Rpb25zKCdhdXRoZW50aWNhdGlvbk1vZHVsZScsIHtcbiAgICAgIHNldEdsb2JhbExvZ2luU3RhdGU6ICdzaWduZWRJbicsXG4gICAgfSksXG5cbiAgICBuYXZpZ2F0ZVRvUGFzc3dvcmRDcmVhdGlvblBhZ2UoKSB7XG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKENyZWF0ZVBhc3N3b3JkLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KVxuICAgIH0sXG4gICAgc3VibWl0KCkge1xuICAgICAgaWYgKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCkge1xuICAgICAgICB0aGlzLmFsZXJ0KCdQbGVhc2UgcHJvdmlkZSBib3RoIGFuIGVtYWlsIGFkZHJlc3MgYW5kIHBhc3N3b3JkLicpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdGhpcy5sb2dpbigpXG4gICAgfSxcblxuICAgIGFzeW5jIGxvZ2luKCkge1xuICAgICAgY29uc3QgeyB1aWQsIHRva2VuLCByb2xlIH0gPSBhd2FpdCBsb2dpbih0aGlzLnVzZXIuZW1haWwsIHRoaXMudXNlci5wYXNzd29yZClcbiAgICAgIHRoaXMuc2V0R2xvYmFsTG9naW5TdGF0ZSh7IHRva2VuLCB1aWQsIHJvbGUsIGxvZ2dlZEluOiB0cnVlIH0pXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUsIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pXG4gICAgfSxcblxuICAgIGZvcmdvdFBhc3N3b3JkKCkge1xuICAgICAgcHJvbXB0KHtcbiAgICAgICAgdGl0bGU6ICdGb3Jnb3QgUGFzc3dvcmQnLFxuICAgICAgICBtZXNzYWdlOiAnRW50ZXIgdGhlIGVtYWlsIGFkZHJlc3MgeW91IHVzZWQgdG8gcmVnaXN0ZXIgZm9yIENhbWVscyB0byByZXNldCB5b3VyIHBhc3N3b3JkLicsXG4gICAgICAgIGlucHV0VHlwZTogJ2VtYWlsJyxcbiAgICAgICAgZGVmYXVsdFRleHQ6ICcnLFxuICAgICAgICBva0J1dHRvblRleHQ6ICdPaycsXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYEVtYWlsIGZvciBwYXNzd29yZCByZXNldCA6OiAke2RhdGEucmVzdWx0fWApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcblxuICAgIGZvY3VzUGFzc3dvcmQoKSB7XG4gICAgICB0aGlzLiRyZWZzLnBhc3N3b3JkLm5hdGl2ZVZpZXcuZm9jdXMoKVxuICAgIH0sXG4gICAgZm9jdXNMb2dpbkJ1dHRvbigpIHtcbiAgICAgIHRoaXMuJHJlZnMubG9naW5CdXR0b24ubmF0aXZlVmlldy5mb2N1cygpXG4gICAgfSxcbiAgICBoYW5kbGVPbkNoYW5nZShkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgdGhpc1tkYXRhLm1vZGVsS2V5XSA9IGRhdGEudmFsdWVcbiAgICB9LFxuICAgIGFsZXJ0KG1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiBhbGVydCh7XG4gICAgICAgIHRpdGxlOiAnQ2FtZWxzJyxcbiAgICAgICAgb2tCdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgfSlcbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPFBhZ2UgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiPlxuICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwicGFnZVwiPlxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibnQtZm9ybSBmb3JtXCI+XG4gICAgICAgIDwhLS0gPEltYWdlIGNsYXNzPVwibG9nbyBudC1pbWFnZVwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9OYXRpdmVTY3JpcHQtVnVlLnBuZ1wiIC8+XG4gICAgICAgIDxMYWJlbCBjbGFzcz1cImhlYWRlclwiIHRleHQ9XCJDYW1lbHNcIiAvPiAtLT5cbiAgICAgICAgPGlucHV0LXRleHRcbiAgICAgICAgICA6bW9kZWxrZXk9XCJ1c2VyLmVtYWlsXCJcbiAgICAgICAgICB2LW1vZGVsPVwidXNlci5lbWFpbFwiXG4gICAgICAgICAgQGhhbmRsZU9uQ2hhbmdlPVwiaGFuZGxlT25DaGFuZ2VcIlxuICAgICAgICAgIEByZXR1cm5QcmVzcz1cImZvY3VzUGFzc3dvcmRcIlxuICAgICAgICAgIHJldHVybktleVR5cGU9XCJuZXh0XCJcbiAgICAgICAgICBrZXlib2FyZFR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcGxhY2VIb2xkZXJUZXh0PVwibmFtZUBjYW1lbHMuY29tXCJcbiAgICAgICAgPjwvaW5wdXQtdGV4dD5cbiAgICAgICAgPGlucHV0LXRleHRcbiAgICAgICAgICByZWY9XCJwYXNzd29yZFwiXG4gICAgICAgICAgOm1vZGVsa2V5PVwidXNlci5wYXNzd29yZFwiXG4gICAgICAgICAgdi1tb2RlbD1cInVzZXIucGFzc3dvcmRcIlxuICAgICAgICAgIDpzZWN1cmU9XCJ0cnVlXCJcbiAgICAgICAgICA6aGFuZGxlT25DaGFuZ2U9XCJoYW5kbGVPbkNoYW5nZVwiXG4gICAgICAgICAgQHJldHVyblByZXNzPVwiZm9jdXNMb2dpbkJ1dHRvblwiXG4gICAgICAgICAgcmV0dXJuS2V5VHlwZT1cIm5leHRcIlxuICAgICAgICAgIGtleWJvYXJkVHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBwbGFjZUhvbGRlclRleHQ9XCIqKioqKioqKioqKlwiXG4gICAgICAgID48L2lucHV0LXRleHQ+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHJlZj1cImxvZ2luQnV0dG9uXCJcbiAgICAgICAgICBAdGFwPVwic3VibWl0XCJcbiAgICAgICAgICB0ZXh0PVwiTG9nIEluXCJcbiAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjAgLXByaW1hcnkgLXJvdW5kZWQtc21cIlxuICAgICAgICAvPlxuICAgICAgICA8TGFiZWwgQHRhcD1cImZvcmdvdFBhc3N3b3JkXCIgdGV4dD1cIkZvcmdvdCB5b3VyIHBhc3N3b3JkP1wiIGNsYXNzPVwibnQtbGFiZWwgbG9naW4tbGFiZWxcIiAvPlxuICAgICAgPC9TdGFja0xheW91dD5cbiAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cblBhZ2Uge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZm9ybSB7XG4gIG1hcmdpbi1sZWZ0OiAzMDtcbiAgbWFyZ2luLXJpZ2h0OiAzMDtcbiAgZmxleC1ncm93OiAyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbi1ib3R0b206IDEyO1xuICBoZWlnaHQ6IDkwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhlYWRlciB7XG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogNzA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNjMTlhNmI7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGhlaWdodDogNTA7XG4gIG1hcmdpbjogMzAgNSAxNSA1O1xuICBmb250LXNpemU6IDE2O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubG9naW4tbGFiZWwge1xuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTY7XG59XG5cbi5zaWduLXVwLWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMjA7XG59XG5cbi5ib2xkIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IFZ1ZURldnRvb2xzIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUtZGV2dG9vbHMnXG5pbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnXG5pbXBvcnQgUmFkTGlzdFZpZXcgZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L3Z1ZSdcbmltcG9ydCBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJ1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHsgVE5TRm9udEljb24sIGZvbnRpY29uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWZvbnRpY29uJ1xuLy8gVE5TRm9udEljb24uZGVidWcgPSB0cnVlXG5UTlNGb250SWNvbi5wYXRocyA9IHtcbiAgZmE6ICcuL2Fzc2V0cy9mb250YXdlc29tZS5jc3MnLFxufVxuVE5TRm9udEljb24ubG9hZENzcygpXG5cblZ1ZS5maWx0ZXIoJ2ZvbnRpY29uJywgZm9udGljb24pXG5WdWUudXNlKFZ1ZURldnRvb2xzKVxuVnVlLnVzZShSYWRMaXN0VmlldylcblxuaW1wb3J0IHsgY3Jhc2hseXRpY3MgfSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJ1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nXG5pbXBvcnQgeyBnZXRTdHJpbmcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJ1xuaW1wb3J0IFRoZW1lIGZyb20gJ0BuYXRpdmVzY3JpcHQvdGhlbWUnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi92aWV3cy9Mb2dpbi52dWUnXG5pbXBvcnQgSG9tZSBmcm9tICcuL3ZpZXdzL0hvbWUudnVlJ1xuXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcblRoZW1lLnNldE1vZGUoVGhlbWUuTGlnaHQpIC8vIE9yIFRoZW1lLkxpZ2h0XG5cbmlmIChpc0FuZHJvaWQpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGNyYXNobHl0aWNzLnNlbmRDcmFzaExvZyhuZXcgamF2YS5sYW5nLkV4Y2VwdGlvbignQ3Jhc2ggRXhjZXB0aW9uJykpXG59IGVsc2UgaWYgKGlzSU9TKSB7XG4gIGNyYXNobHl0aWNzLnNlbmRDcmFzaExvZyhcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgbmV3IE5TRXJyb3Ioe1xuICAgICAgZG9tYWluOiAnU2hpcGxvb3BIdHRwUmVzcG9uc2VFcnJvckRvbWFpbicsXG4gICAgICBjb2RlOiA0MixcbiAgICAgIHVzZXJJbmZvOiBudWxsLFxuICAgIH0pXG4gIClcbn1cbmZpcmViYXNlXG4gIC5pbml0KHtcbiAgICAvLyBPcHRpb25hbGx5IHBhc3MgaW4gcHJvcGVydGllcyBmb3IgZGF0YWJhc2UsIGF1dGhlbnRpY2F0aW9uIGFuZCBjbG91ZCBtZXNzYWdpbmcsXG4gICAgLy8gc2VlIHRoZWlyIHJlc3BlY3RpdmUgZG9jcy5cbiAgICBjcmFzaGx5dGljc0NvbGxlY3Rpb25FbmFibGVkOiB0cnVlLFxuICAgIG9uRHluYW1pY0xpbmtDYWxsYmFjazogZnVuY3Rpb24ocmVzdWx0OiBhbnkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEeW5hbWljIGxpbmsgOjogJyArIHJlc3VsdC51cmwpXG4gICAgICBzdG9yZS5kaXNwYXRjaCgnYXV0aGVudGljYXRpb25Nb2R1bGUvc2V0Q3JlYXRlUGFzc3dvcmRQYWdlJylcbiAgICB9LFxuICAgIHNob3dOb3RpZmljYXRpb25zV2hlbkluRm9yZWdyb3VuZDogdHJ1ZSxcbiAgICBvbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrOiAobWVzc2FnZTogZmlyZWJhc2UuTWVzc2FnZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYFRpdGxlIDo6ICR7bWVzc2FnZS50aXRsZX1gKVxuICAgICAgY29uc29sZS5sb2coYEJvZHkgOjogJHttZXNzYWdlLmJvZHl9YClcbiAgICB9LFxuICAgIG9uUHVzaFRva2VuUmVjZWl2ZWRDYWxsYmFjazogZnVuY3Rpb24odG9rZW46IHN0cmluZykge1xuICAgICAgY29uc29sZS5sb2coJ0ZpcmViYXNlIHB1c2ggdG9rZW4gOjogJyArIHRva2VuKVxuICAgIH0sXG4gIH0pXG4gIC50aGVuKFxuICAgICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdmaXJlYmFzZS5pbml0IDo6IGRvbmUnKVxuICAgIH0sXG4gICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yIDo6ICR7ZXJyb3J9YClcbiAgICB9XG4gIClcbnNldFRpbWVvdXQoKCkgPT4ge1xuICBmaXJlYmFzZS5hZG1vYlxuICAgIC5zaG93QmFubmVyKHtcbiAgICAgIHNpemU6IGZpcmViYXNlLmFkbW9iLkFEX1NJWkUuU01BUlRfQkFOTkVSLCAvLyBzZWUgZmlyZWJhc2UuYWRtb2IuQURfU0laRSBmb3IgYWxsIG9wdGlvbnNcbiAgICAgIG1hcmdpbnM6IHtcbiAgICAgICAgLy8gb3B0aW9uYWwgbnIgb2YgZGV2aWNlIGluZGVwZW5kZW50IHBpeGVscyBmcm9tIHRoZSB0b3Agb3IgYm90dG9tIChkb24ndCBzZXQgYm90aClcbiAgICAgICAgYm90dG9tOiAxMCxcbiAgICAgICAgdG9wOiAtMSxcbiAgICAgIH0sXG4gICAgICBhbmRyb2lkQmFubmVySWQ6ICdjYS1hcHAtcHViLTk3OTExNzk5MTA3NzU1NjEvNzQ1OTYyNjczMycsXG4gICAgICBpb3NCYW5uZXJJZDogJ2NhLWFwcC1wdWItOTc5MTE3OTkxMDc3NTU2MS83NDU5NjI2NzMzJyxcbiAgICAgIHRlc3Rpbmc6IHRydWUsIC8vIHdoZW4gbm90IHJ1bm5pbmcgaW4gcHJvZHVjdGlvbiBzZXQgdGhpcyB0byB0cnVlLCBHb29nbGUgZG9lc24ndCBsaWtlIGl0IGFueSBvdGhlciB3YXlcbiAgICAgIGlvc1Rlc3REZXZpY2VJZHM6IFtcbiAgICAgICAgLy9BbmRyb2lkIGF1dG9tYXRpY2FsbHkgYWRkcyB0aGUgY29ubmVjdGVkIGRldmljZSBhcyB0ZXN0IGRldmljZSB3aXRoIHRlc3Rpbmc6dHJ1ZSwgaU9TIGRvZXMgbm90XG4gICAgICAgICc0NWQ3N2JmNTEzZGZhYmMyOTQ5YmEwNTNkYTgzYzBjN2I3ZTg3NzE1JywgLy8gRWRkeSdzIGlQaG9uZSA2c1xuICAgICAgICAnZmVlNGNmMzE5YTI0MmVhYjQ3MDE1NDNlNGMxNmRiODljNzIyNzMxZicsIC8vIEVkZHkncyBpUGFkIFByb1xuICAgICAgXSxcbiAgICAgIGtleXdvcmRzOiBbJ2NyaWNrZXQnLCAnbG9uZG9uJ10sIC8vIGFkZCBrZXl3b3JkcyBmb3IgYWQgdGFyZ2V0aW5nXG4gICAgICBvbk9wZW5lZDogKCkgPT4gY29uc29sZS5sb2coJ0FkIG9wZW5lZCcpLFxuICAgICAgb25DbGlja2VkOiAoKSA9PiBjb25zb2xlLmxvZygnQWQgY2xpY2tlZCcpLFxuICAgICAgb25MZWZ0QXBwbGljYXRpb246ICgpID0+IGNvbnNvbGUubG9nKCdBZCBsZWZ0IGFwcGxpY2F0aW9uJyksXG4gICAgfSlcbiAgICAudGhlbihcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnQWRNb2IgYmFubmVyIHN0YXR1cyA6OiBTaG93aW5nJylcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbihlcnJvck1lc3NhZ2U6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpXG4gICAgICB9XG4gICAgKVxufSwgNTAwMClcblxuLy8gUHJpbnRzIFZ1ZSBsb2dzIHdoZW4gLS1lbnYucHJvZHVjdGlvbiBpcyAqTk9UKiBzZXQgd2hpbGUgYnVpbGRpbmdcblZ1ZS5jb25maWcuc2lsZW50ID0gVE5TX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG5WdWUucmVnaXN0ZXJFbGVtZW50KCdSYWRTaWRlRHJhd2VyJywgKCkgPT4gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInKS5SYWRTaWRlRHJhd2VyKVxuXG5sZXQgYXBwID0gTG9naW5cblxuaWYgKGdldFN0cmluZygnY2FtZWxzLXRva2VuJykpIHtcbiAgY29uc29sZS5sb2coYHRva2VuIGV4aXN0cyA6OiBgKVxuICBzdG9yZS5kaXNwYXRjaCgnYXV0aGVudGljYXRpb25Nb2R1bGUvc2V0QXV0aFRva2VuJywge1xuICAgIHRva2VuOiBnZXRTdHJpbmcoJ2NhbWVscy10b2tlbicpLFxuICB9KVxuICBhcHAgPSBIb21lXG59XG5cbm5ldyBWdWUoe1xuICBzdG9yZSxcbiAgcmVuZGVyOiBoID0+IGgoJ0ZyYW1lJywgW2goYXBwKV0pLFxufSkuJHN0YXJ0KClcbiJdLCJzb3VyY2VSb290IjoiIn0=