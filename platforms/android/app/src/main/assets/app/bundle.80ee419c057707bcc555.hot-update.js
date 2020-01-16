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
      this[data['modelkey']] = data['value'];
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/Login.vue?vue&type=template&id=42bc5c4a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { attrs: { actionBarHidden: "true" } },
    [
      _c(
        "FlexboxLayout",
        { staticClass: "page" },
        [
          _c(
            "StackLayout",
            { staticClass: "nt-form form" },
            [
              _c("input-text", {
                attrs: {
                  modelkey: "user.email",
                  returnKeyType: "next",
                  keyboardType: "email",
                  placeHolderText: "name@camels.com"
                },
                on: {
                  handleOnChange: _vm.handleOnChange,
                  returnPress: _vm.focusPassword
                },
                model: {
                  value: _vm.user.email,
                  callback: function($$v) {
                    _vm.$set(_vm.user, "email", $$v)
                  },
                  expression: "user.email"
                }
              }),
              _c("input-text", {
                ref: "password",
                attrs: {
                  secure: true,
                  modelkey: "user.password",
                  returnKeyType: "next",
                  keyboardType: "password",
                  placeHolderText: "***********"
                },
                on: {
                  handleOnChange: _vm.handleOnChange,
                  returnPress: _vm.focusLoginButton
                },
                model: {
                  value: _vm.user.password,
                  callback: function($$v) {
                    _vm.$set(_vm.user, "password", $$v)
                  },
                  expression: "user.password"
                }
              }),
              _c("Button", {
                ref: "loginButton",
                staticClass: "btn btn-primary m-t-20 -primary -rounded-sm",
                attrs: { text: "Log In" },
                on: { tap: _vm.submit }
              }),
              _c("Label", {
                staticClass: "nt-label login-label",
                attrs: { text: "Forgot your password?" },
                on: { tap: _vm.forgotPassword }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvTG9naW4udnVlIiwid2VicGFjazovLy8uL3ZpZXdzL0xvZ2luLnZ1ZT9lOWJjIiwid2VicGFjazovLy8uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxlQURBO0FBRUE7QUFBQTtBQUFBLEdBRkE7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQTtBQUZBO0FBREE7QUFNQSxHQVZBOztBQVdBO0FBQ0E7QUFEQSxJQVhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFSQSxHQWRBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQTVCQTtBQTZCQTtBQUNBO0FBQ0EsR0EvQkE7QUFnQ0EsNkJBQ0E7QUFDQTtBQURBLElBREE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBLEtBUEE7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLEtBZEE7O0FBZ0JBO0FBQUE7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUlBLEtBcEJBOztBQXNCQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSxrR0FGQTtBQUdBLDBCQUhBO0FBSUEsdUJBSkE7QUFLQSwwQkFMQTtBQU1BO0FBTkEsU0FPQSxJQVBBLENBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVhBO0FBWUEsS0FuQ0E7O0FBcUNBO0FBQ0E7QUFDQSxLQXZDQTs7QUF3Q0E7QUFDQTtBQUNBLEtBMUNBOztBQTJDQTtBQUNBO0FBQ0EsS0E3Q0E7O0FBOENBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLDBCQUZBO0FBR0E7QUFIQTtBQUtBOztBQXBEQTtBQWhDQSxHOzs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFB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QU8sRUFBTTtRQUNiLGdCQUFnQixFQUFFO1lBQ2hCLEtBQWdHO1lBQ2hHLFdBQTBDO1FBQ0E7Q0FDM0M7UUFDRCxRQUFRLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUztRQUMvQixHQUF3QztRQUN4QyxTQUFTLEVBQUUsY0FBTSxjQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUF6QixDQUF5QjtRQUMxQyxpQkFBaUIsRUFBRSxNQUF3QztLQUM1RCxDQUFDO1NBQ0QsSUFBSSxDQUNIO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQztJQUMvQyxDQUFDLEVBQ0QsVUFBUyxZQUFpQjtNQUNDO0lBQzNCLENBQUMsQ0FDRjtBQUNMLENBQUMsRUFBRSxJQUFJLENBQUM7QUFFUixpREFBb0U7QUFDcEUsMEJBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQXdCO0FBQzVDLE1BQStGO0FBRS9GLElBQUksR0FBRyxHQUFHLG1CQUFLO0FBRWYsSUFBSSxnQ0FBUyxDQUFDLGNBQWMsQ0FBQyxFQUFFO0lBQzdCLEVBQStCO0VBQ3FCO1FBQ2xELEtBQUssRUFBRSxRQUF5QjtLQUNqQyxDQUFDO0lBQ0YsR0FBRyxHQUFHLFdBQUk7Q0FDWDtBQUVELEdBQVE7SUFDTixLQUFLO0lBQ0wsTUFBTSxFQUFFLFdBQUMsSUFBSSxRQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFPO0NBQ2xDLENBQUMsQ0FBQyxNQUFNLEVBQUUiLCJmaWxlIjoiYnVuZGxlLjgwZWU0MTljMDU3NzA3YmNjNTU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwU3RhdGUgfSBmcm9tICd2dWV4J1xuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi9fc2hhcmVkL2ZpcmViYXNlL3VzZXJzLnRzJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lLnZ1ZSdcbmltcG9ydCBDcmVhdGVQYXNzd29yZCBmcm9tICcuL0NyZWF0ZVBhc3N3b3JkLnZ1ZSdcbmltcG9ydCBJbnB1dFRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9JbnB1dFRleHQudnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdMb2dpbicsXG4gIGNvbXBvbmVudHM6IHsgSW5wdXRUZXh0IH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcbiAgICB1c2VyQ29udGV4dDogc3RhdGUgPT4gc3RhdGUuYXV0aGVudGljYXRpb25Nb2R1bGUudXNlckNvbnRleHQsXG4gIH0pLFxuICB3YXRjaDoge1xuICAgIHVzZXJDb250ZXh0KG5ld1ZhbHVlKSB7XG4gICAgICBpZiAobmV3VmFsdWUgJiYgbmV3VmFsdWUuaW52aXRlZCAmJiAhbmV3VmFsdWUubG9nZ2VkSW4pIHtcbiAgICAgICAgY29uc29sZS5sb2coYGludml0ZWQgLSB3YXRjaGVkIDo6ICR7bmV3VmFsdWUuaW52aXRlZH1gKVxuICAgICAgICBpZiAobmV3VmFsdWUuaW52aXRlZCkge1xuICAgICAgICAgIHRoaXMubmF2aWdhdGVUb1Bhc3N3b3JkQ3JlYXRpb25QYWdlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coJ2xvZ2luIDo6IG1vdW50ZWQnKVxuICAgIH0pXG4gIH0sXG4gIHVwZGF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCdsb2dpbiA6OiB1cGRhdGVkJylcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoJ2F1dGhlbnRpY2F0aW9uTW9kdWxlJywge1xuICAgICAgc2V0R2xvYmFsTG9naW5TdGF0ZTogJ3NpZ25lZEluJyxcbiAgICB9KSxcblxuICAgIG5hdmlnYXRlVG9QYXNzd29yZENyZWF0aW9uUGFnZSgpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oQ3JlYXRlUGFzc3dvcmQsIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pXG4gICAgfSxcbiAgICBzdWJtaXQoKSB7XG4gICAgICBpZiAoIXRoaXMudXNlci5lbWFpbCB8fCAhdGhpcy51c2VyLnBhc3N3b3JkKSB7XG4gICAgICAgIHRoaXMuYWxlcnQoJ1BsZWFzZSBwcm92aWRlIGJvdGggYW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmQuJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLmxvZ2luKClcbiAgICB9LFxuXG4gICAgYXN5bmMgbG9naW4oKSB7XG4gICAgICBjb25zdCB7IHVpZCwgdG9rZW4sIHJvbGUgfSA9IGF3YWl0IGxvZ2luKHRoaXMudXNlci5lbWFpbCwgdGhpcy51c2VyLnBhc3N3b3JkKVxuICAgICAgdGhpcy5zZXRHbG9iYWxMb2dpblN0YXRlKHsgdG9rZW4sIHVpZCwgcm9sZSwgbG9nZ2VkSW46IHRydWUgfSlcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSlcbiAgICB9LFxuXG4gICAgZm9yZ290UGFzc3dvcmQoKSB7XG4gICAgICBwcm9tcHQoe1xuICAgICAgICB0aXRsZTogJ0ZvcmdvdCBQYXNzd29yZCcsXG4gICAgICAgIG1lc3NhZ2U6ICdFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgQ2FtZWxzIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuJyxcbiAgICAgICAgaW5wdXRUeXBlOiAnZW1haWwnLFxuICAgICAgICBkZWZhdWx0VGV4dDogJycsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogJ09rJyxcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgRW1haWwgZm9yIHBhc3N3b3JkIHJlc2V0IDo6ICR7ZGF0YS5yZXN1bHR9YClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgZm9jdXNQYXNzd29yZCgpIHtcbiAgICAgIHRoaXMuJHJlZnMucGFzc3dvcmQubmF0aXZlVmlldy5mb2N1cygpXG4gICAgfSxcbiAgICBmb2N1c0xvZ2luQnV0dG9uKCkge1xuICAgICAgdGhpcy4kcmVmcy5sb2dpbkJ1dHRvbi5uYXRpdmVWaWV3LmZvY3VzKClcbiAgICB9LFxuICAgIGhhbmRsZU9uQ2hhbmdlKGRhdGEpIHtcbiAgICAgIHRoaXNbZGF0YVsnbW9kZWxrZXknXV0gPSBkYXRhWyd2YWx1ZSddXG4gICAgfSxcbiAgICBhbGVydChtZXNzYWdlKSB7XG4gICAgICByZXR1cm4gYWxlcnQoe1xuICAgICAgICB0aXRsZTogJ0NhbWVscycsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIH0pXG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxQYWdlIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIj5cbiAgICA8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIj5cbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm50LWZvcm0gZm9ybVwiPlxuICAgICAgICA8IS0tIDxJbWFnZSBjbGFzcz1cImxvZ28gbnQtaW1hZ2VcIiBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvTmF0aXZlU2NyaXB0LVZ1ZS5wbmdcIiAvPlxuICAgICAgICA8TGFiZWwgY2xhc3M9XCJoZWFkZXJcIiB0ZXh0PVwiQ2FtZWxzXCIgLz4gLS0+XG4gICAgICAgIDxpbnB1dC10ZXh0XG4gICAgICAgICAgdi1tb2RlbD1cInVzZXIuZW1haWxcIlxuICAgICAgICAgIEBoYW5kbGVPbkNoYW5nZT1cImhhbmRsZU9uQ2hhbmdlXCJcbiAgICAgICAgICBAcmV0dXJuUHJlc3M9XCJmb2N1c1Bhc3N3b3JkXCJcbiAgICAgICAgICBtb2RlbGtleT1cInVzZXIuZW1haWxcIlxuICAgICAgICAgIHJldHVybktleVR5cGU9XCJuZXh0XCJcbiAgICAgICAgICBrZXlib2FyZFR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcGxhY2VIb2xkZXJUZXh0PVwibmFtZUBjYW1lbHMuY29tXCJcbiAgICAgICAgPjwvaW5wdXQtdGV4dD5cbiAgICAgICAgPGlucHV0LXRleHRcbiAgICAgICAgICByZWY9XCJwYXNzd29yZFwiXG4gICAgICAgICAgdi1tb2RlbD1cInVzZXIucGFzc3dvcmRcIlxuICAgICAgICAgIDpzZWN1cmU9XCJ0cnVlXCJcbiAgICAgICAgICBAaGFuZGxlT25DaGFuZ2U9XCJoYW5kbGVPbkNoYW5nZVwiXG4gICAgICAgICAgQHJldHVyblByZXNzPVwiZm9jdXNMb2dpbkJ1dHRvblwiXG4gICAgICAgICAgbW9kZWxrZXk9XCJ1c2VyLnBhc3N3b3JkXCJcbiAgICAgICAgICByZXR1cm5LZXlUeXBlPVwibmV4dFwiXG4gICAgICAgICAga2V5Ym9hcmRUeXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHBsYWNlSG9sZGVyVGV4dD1cIioqKioqKioqKioqXCJcbiAgICAgICAgPjwvaW5wdXQtdGV4dD5cblxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgcmVmPVwibG9naW5CdXR0b25cIlxuICAgICAgICAgIEB0YXA9XCJzdWJtaXRcIlxuICAgICAgICAgIHRleHQ9XCJMb2cgSW5cIlxuICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMCAtcHJpbWFyeSAtcm91bmRlZC1zbVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxMYWJlbCBAdGFwPVwiZm9yZ290UGFzc3dvcmRcIiB0ZXh0PVwiRm9yZ290IHlvdXIgcGFzc3dvcmQ/XCIgY2xhc3M9XCJudC1sYWJlbCBsb2dpbi1sYWJlbFwiIC8+XG4gICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwvRmxleGJveExheW91dD5cbiAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuUGFnZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb3JtIHtcbiAgbWFyZ2luLWxlZnQ6IDMwO1xuICBtYXJnaW4tcmlnaHQ6IDMwO1xuICBmbGV4LWdyb3c6IDI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luLWJvdHRvbTogMTI7XG4gIGhlaWdodDogOTA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaGVhZGVyIHtcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA3MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2MxOWE2Yjtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgaGVpZ2h0OiA1MDtcbiAgbWFyZ2luOiAzMCA1IDE1IDU7XG4gIGZvbnQtc2l6ZTogMTY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5sb2dpbi1sYWJlbCB7XG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNjtcbn1cblxuLnNpZ24tdXAtbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAyMDtcbn1cblxuLmJvbGQge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbjwvc3R5bGU+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgYXR0cnM6IHsgYWN0aW9uQmFySGlkZGVuOiBcInRydWVcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiRmxleGJveExheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm50LWZvcm0gZm9ybVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXQtdGV4dFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG1vZGVsa2V5OiBcInVzZXIuZW1haWxcIixcbiAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwibmV4dFwiLFxuICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICBwbGFjZUhvbGRlclRleHQ6IFwibmFtZUBjYW1lbHMuY29tXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVPbkNoYW5nZTogX3ZtLmhhbmRsZU9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgcmV0dXJuUHJlc3M6IF92bS5mb2N1c1Bhc3N3b3JkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXNlciwgXCJlbWFpbFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmVtYWlsXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcImlucHV0LXRleHRcIiwge1xuICAgICAgICAgICAgICAgIHJlZjogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBzZWN1cmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtb2RlbGtleTogXCJ1c2VyLnBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBcIm5leHRcIixcbiAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgcGxhY2VIb2xkZXJUZXh0OiBcIioqKioqKioqKioqXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVPbkNoYW5nZTogX3ZtLmhhbmRsZU9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgcmV0dXJuUHJlc3M6IF92bS5mb2N1c0xvZ2luQnV0dG9uXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXNlciwgXCJwYXNzd29yZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgcmVmOiBcImxvZ2luQnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMCAtcHJpbWFyeSAtcm91bmRlZC1zbVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTG9nIEluXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zdWJtaXQgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibnQtbGFiZWwgbG9naW4tbGFiZWxcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkZvcmdvdCB5b3VyIHBhc3N3b3JkP1wiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZm9yZ290UGFzc3dvcmQgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBWdWVEZXZ0b29scyBmcm9tICduYXRpdmVzY3JpcHQtdnVlLWRldnRvb2xzJ1xuaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJ1xuaW1wb3J0IFJhZExpc3RWaWV3IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldy92dWUnXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSdcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IFROU0ZvbnRJY29uLCBmb250aWNvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1mb250aWNvbidcbi8vIFROU0ZvbnRJY29uLmRlYnVnID0gdHJ1ZVxuVE5TRm9udEljb24ucGF0aHMgPSB7XG4gIGZhOiAnLi9hc3NldHMvZm9udGF3ZXNvbWUuY3NzJyxcbn1cblROU0ZvbnRJY29uLmxvYWRDc3MoKVxuXG5WdWUuZmlsdGVyKCdmb250aWNvbicsIGZvbnRpY29uKVxuVnVlLnVzZShWdWVEZXZ0b29scylcblZ1ZS51c2UoUmFkTGlzdFZpZXcpXG5cbmltcG9ydCB7IGNyYXNobHl0aWNzIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSdcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJ1xuaW1wb3J0IHsgZ2V0U3RyaW5nIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncydcbmltcG9ydCBUaGVtZSBmcm9tICdAbmF0aXZlc2NyaXB0L3RoZW1lJ1xuaW1wb3J0IExvZ2luIGZyb20gJy4vdmlld3MvTG9naW4udnVlJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi92aWV3cy9Ib21lLnZ1ZSdcblxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXG5UaGVtZS5zZXRNb2RlKFRoZW1lLkxpZ2h0KSAvLyBPciBUaGVtZS5MaWdodFxuXG5pZiAoaXNBbmRyb2lkKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBjcmFzaGx5dGljcy5zZW5kQ3Jhc2hMb2cobmV3IGphdmEubGFuZy5FeGNlcHRpb24oJ0NyYXNoIEV4Y2VwdGlvbicpKVxufSBlbHNlIGlmIChpc0lPUykge1xuICBjcmFzaGx5dGljcy5zZW5kQ3Jhc2hMb2coXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIG5ldyBOU0Vycm9yKHtcbiAgICAgIGRvbWFpbjogJ1NoaXBsb29wSHR0cFJlc3BvbnNlRXJyb3JEb21haW4nLFxuICAgICAgY29kZTogNDIsXG4gICAgICB1c2VySW5mbzogbnVsbCxcbiAgICB9KVxuICApXG59XG5maXJlYmFzZVxuICAuaW5pdCh7XG4gICAgLy8gT3B0aW9uYWxseSBwYXNzIGluIHByb3BlcnRpZXMgZm9yIGRhdGFiYXNlLCBhdXRoZW50aWNhdGlvbiBhbmQgY2xvdWQgbWVzc2FnaW5nLFxuICAgIC8vIHNlZSB0aGVpciByZXNwZWN0aXZlIGRvY3MuXG4gICAgY3Jhc2hseXRpY3NDb2xsZWN0aW9uRW5hYmxlZDogdHJ1ZSxcbiAgICBvbkR5bmFtaWNMaW5rQ2FsbGJhY2s6IGZ1bmN0aW9uKHJlc3VsdDogYW55KSB7XG4gICAgICBjb25zb2xlLmxvZygnRHluYW1pYyBsaW5rIDo6ICcgKyByZXN1bHQudXJsKVxuICAgICAgc3RvcmUuZGlzcGF0Y2goJ2F1dGhlbnRpY2F0aW9uTW9kdWxlL3NldENyZWF0ZVBhc3N3b3JkUGFnZScpXG4gICAgfSxcbiAgICBzaG93Tm90aWZpY2F0aW9uc1doZW5JbkZvcmVncm91bmQ6IHRydWUsXG4gICAgb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazogKG1lc3NhZ2U6IGZpcmViYXNlLk1lc3NhZ2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBUaXRsZSA6OiAke21lc3NhZ2UudGl0bGV9YClcbiAgICAgIGNvbnNvbGUubG9nKGBCb2R5IDo6ICR7bWVzc2FnZS5ib2R5fWApXG4gICAgfSxcbiAgICBvblB1c2hUb2tlblJlY2VpdmVkQ2FsbGJhY2s6IGZ1bmN0aW9uKHRva2VuOiBzdHJpbmcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdGaXJlYmFzZSBwdXNoIHRva2VuIDo6ICcgKyB0b2tlbilcbiAgICB9LFxuICB9KVxuICAudGhlbihcbiAgICAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZmlyZWJhc2UuaW5pdCA6OiBkb25lJylcbiAgICB9LFxuICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvciA6OiAke2Vycm9yfWApXG4gICAgfVxuICApXG5zZXRUaW1lb3V0KCgpID0+IHtcbiAgZmlyZWJhc2UuYWRtb2JcbiAgICAuc2hvd0Jhbm5lcih7XG4gICAgICBzaXplOiBmaXJlYmFzZS5hZG1vYi5BRF9TSVpFLlNNQVJUX0JBTk5FUiwgLy8gc2VlIGZpcmViYXNlLmFkbW9iLkFEX1NJWkUgZm9yIGFsbCBvcHRpb25zXG4gICAgICBtYXJnaW5zOiB7XG4gICAgICAgIC8vIG9wdGlvbmFsIG5yIG9mIGRldmljZSBpbmRlcGVuZGVudCBwaXhlbHMgZnJvbSB0aGUgdG9wIG9yIGJvdHRvbSAoZG9uJ3Qgc2V0IGJvdGgpXG4gICAgICAgIGJvdHRvbTogMTAsXG4gICAgICAgIHRvcDogLTEsXG4gICAgICB9LFxuICAgICAgYW5kcm9pZEJhbm5lcklkOiAnY2EtYXBwLXB1Yi05NzkxMTc5OTEwNzc1NTYxLzc0NTk2MjY3MzMnLFxuICAgICAgaW9zQmFubmVySWQ6ICdjYS1hcHAtcHViLTk3OTExNzk5MTA3NzU1NjEvNzQ1OTYyNjczMycsXG4gICAgICB0ZXN0aW5nOiB0cnVlLCAvLyB3aGVuIG5vdCBydW5uaW5nIGluIHByb2R1Y3Rpb24gc2V0IHRoaXMgdG8gdHJ1ZSwgR29vZ2xlIGRvZXNuJ3QgbGlrZSBpdCBhbnkgb3RoZXIgd2F5XG4gICAgICBpb3NUZXN0RGV2aWNlSWRzOiBbXG4gICAgICAgIC8vQW5kcm9pZCBhdXRvbWF0aWNhbGx5IGFkZHMgdGhlIGNvbm5lY3RlZCBkZXZpY2UgYXMgdGVzdCBkZXZpY2Ugd2l0aCB0ZXN0aW5nOnRydWUsIGlPUyBkb2VzIG5vdFxuICAgICAgICAnNDVkNzdiZjUxM2RmYWJjMjk0OWJhMDUzZGE4M2MwYzdiN2U4NzcxNScsIC8vIEVkZHkncyBpUGhvbmUgNnNcbiAgICAgICAgJ2ZlZTRjZjMxOWEyNDJlYWI0NzAxNTQzZTRjMTZkYjg5YzcyMjczMWYnLCAvLyBFZGR5J3MgaVBhZCBQcm9cbiAgICAgIF0sXG4gICAgICBrZXl3b3JkczogWydjcmlja2V0JywgJ2xvbmRvbiddLCAvLyBhZGQga2V5d29yZHMgZm9yIGFkIHRhcmdldGluZ1xuICAgICAgb25PcGVuZWQ6ICgpID0+IGNvbnNvbGUubG9nKCdBZCBvcGVuZWQnKSxcbiAgICAgIG9uQ2xpY2tlZDogKCkgPT4gY29uc29sZS5sb2coJ0FkIGNsaWNrZWQnKSxcbiAgICAgIG9uTGVmdEFwcGxpY2F0aW9uOiAoKSA9PiBjb25zb2xlLmxvZygnQWQgbGVmdCBhcHBsaWNhdGlvbicpLFxuICAgIH0pXG4gICAgLnRoZW4oXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0FkTW9iIGJhbm5lciBzdGF0dXMgOjogU2hvd2luZycpXG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oZXJyb3JNZXNzYWdlOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKVxuICAgICAgfVxuICAgIClcbn0sIDUwMDApXG5cbi8vIFByaW50cyBWdWUgbG9ncyB3aGVuIC0tZW52LnByb2R1Y3Rpb24gaXMgKk5PVCogc2V0IHdoaWxlIGJ1aWxkaW5nXG5WdWUuY29uZmlnLnNpbGVudCA9IFROU19FTlYgPT09ICdwcm9kdWN0aW9uJ1xuVnVlLnJlZ2lzdGVyRWxlbWVudCgnUmFkU2lkZURyYXdlcicsICgpID0+IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJykuUmFkU2lkZURyYXdlcilcblxubGV0IGFwcCA9IExvZ2luXG5cbmlmIChnZXRTdHJpbmcoJ2NhbWVscy10b2tlbicpKSB7XG4gIGNvbnNvbGUubG9nKGB0b2tlbiBleGlzdHMgOjogYClcbiAgc3RvcmUuZGlzcGF0Y2goJ2F1dGhlbnRpY2F0aW9uTW9kdWxlL3NldEF1dGhUb2tlbicsIHtcbiAgICB0b2tlbjogZ2V0U3RyaW5nKCdjYW1lbHMtdG9rZW4nKSxcbiAgfSlcbiAgYXBwID0gSG9tZVxufVxuXG5uZXcgVnVlKHtcbiAgc3RvcmUsXG4gIHJlbmRlcjogaCA9PiBoKCdGcmFtZScsIFtoKGFwcCldKSxcbn0pLiRzdGFydCgpXG4iXSwic291cmNlUm9vdCI6IiJ9