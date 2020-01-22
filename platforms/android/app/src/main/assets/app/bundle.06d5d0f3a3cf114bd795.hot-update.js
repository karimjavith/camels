webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./_shared/firebase/users.ts");
/* harmony import */ var _shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Toasty_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./_shared/Toasty.ts");
/* harmony import */ var _shared_Toasty_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shared_Toasty_ts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Home_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./views/Home.vue");
/* harmony import */ var _CreatePassword_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./views/CreatePassword.vue");
/* harmony import */ var _components_BaseButton_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/BaseButton.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Login',
  components: {
    BaseButton: _components_BaseButton_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },

  data() {
    return {
      state: {
        user: {
          email: '',
          password: ''
        },
        userMetadata: {
          isReadOnly: false,
          commitMode: 'Immediate',
          validationMode: 'Immediate',
          propertyAnnotations: [{
            name: 'email',
            displayName: 'E-Mail',
            index: 0,
            editor: 'Email',
            validators: [{
              name: 'NonEmpty'
            }, {
              name: 'RegEx',
              params: {
                regEx: '[a-zA-Z0-9\\+\\.\\_\\%\\-\\+]{1,256}\\@[a-zA-Z0-9][a-zA-Z0-9\\-]{0,64}(\\.[a-zA-Z0-9][a-zA-Z0-9\\-]{0,25})+',
                errorMessage: 'Please provide your valid email.'
              }
            }]
          }, {
            name: 'password',
            displayName: 'Password',
            editor: 'Password',
            index: 1,
            validators: [{
              name: 'NonEmpty'
            }, {
              name: 'MinimumLength',
              params: {
                length: 6
              }
            }]
          }]
        },
        loading: false
      }
    };
  },

  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    userContext: state => state.authenticationModule.userContext
  }),
  watch: {
    userContext(newValue) {
      console.log("invited -  :: ".concat(newValue.invited));

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
      console.log('LOGIN :: mounted');
    });
  },
  updated: function updated() {
    console.log('LOGIN :: updated');
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('authenticationModule', {
    setGlobalLoginState: 'signedIn'
  }), {
    navigateToPasswordCreationPage() {
      this.$navigateTo(_CreatePassword_vue__WEBPACK_IMPORTED_MODULE_4__["default"], {
        clearHistory: true
      });
    },

    handleOnSubmit() {
      this.state = _objectSpread({}, this.state, {
        loading: true
      });
      var userEmail = this.$refs.dataform.getPropertyByName('email');
      var userPassword = this.$refs.dataform.getPropertyByName('password');

      if (!userEmail.valueCandidate || !userPassword.valueCandidate) {
        Object(_shared_Toasty_ts__WEBPACK_IMPORTED_MODULE_2__["ToastService"])('Please provide both an email address and password.', '#be5138').show();
        this.$refs.dataform.notifyValidated('email', false);
        this.$refs.dataform.notifyValidated('password', false);
        this.state = _objectSpread({}, this.state, {
          loading: false
        });
        return;
      }

      if (userPassword.valueCandidate.length < 6) {
        Object(_shared_Toasty_ts__WEBPACK_IMPORTED_MODULE_2__["ToastService"])('Password should be of minimum 6 characters', '#be5138').show();
        this.$refs.dataform.notifyValidated('email', false);
        this.$refs.dataform.notifyValidated('password', false);
        this.state = _objectSpread({}, this.state, {
          loading: false
        });
        return;
      }

      this.$refs.dataform.commitAll();
      this.login();
    },

    login() {
      var _this = this;

      return _asyncToGenerator(function* () {
        var {
          uid,
          token,
          role,
          isError
        } = yield Object(_shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_1__["login"])(_this.state.user.email, _this.state.user.password);

        if (!isError) {
          _this.setGlobalLoginState({
            token,
            uid,
            role,
            loggedIn: true
          });

          _this.$navigateTo(_Home_vue__WEBPACK_IMPORTED_MODULE_3__["default"], {
            clearHistory: true
          });
        }

        _this.state = _objectSpread({}, _this.state, {
          loading: false
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
      }).then(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(function* (data) {
          if (data.result) {
            console.log("Email for password reset :: ".concat(JSON.stringify(data)));
            yield Object(_shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_1__["sendPasswordResetEmail"])(data.text);
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
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
var nativescript_windowed_modal_1 = __webpack_require__("../node_modules/nativescript-windowed-modal/index.js");
var vue_2 = tslib_1.__importDefault(__webpack_require__("../node_modules/nativescript-datetimepicker/vue/index.js"));
var vue_3 = tslib_1.__importDefault(__webpack_require__("../node_modules/nativescript-ui-dataform/vue/index.js"));
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
nativescript_vue_1.default.use(vue_3.default);
// @ts-ignore
nativescript_vue_1.default.use(vue_2.default);
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
// setTimeout(() => {
//   firebase.admob
//     .showBanner({
//       size: firebase.admob.AD_SIZE.SMART_BANNER, // see firebase.admob.AD_SIZE for all options
//       margins: {
//         // optional nr of device independent pixels from the top or bottom (don't set both)
//         bottom: 10,
//         top: -1,
//       },
//       androidBannerId: 'ca-app-pub-9791179910775561/7459626733',
//       iosBannerId: 'ca-app-pub-9791179910775561/7459626733',
//       testing: true, // when not running in production set this to true, Google doesn't like it any other way
//       iosTestDeviceIds: [
//         //Android automatically adds the connected device as test device with testing:true, iOS does not
//         '45d77bf513dfabc2949ba053da83c0c7b7e87715', // Eddy's iPhone 6s
//         'fee4cf319a242eab4701543e4c16db89c722731f', // Eddy's iPad Pro
//       ],
//       keywords: ['cricket', 'london'], // add keywords for ad targeting
//       onOpened: () => console.log('Ad opened'),
//       onClicked: () => console.log('Ad clicked'),
//       onLeftApplication: () => console.log('Ad left application'),
//     })
//     .then(
//       function() {
//         console.log('AdMob banner status :: Showing')
//       },
//       function(errorMessage: any) {
//         console.log(errorMessage)
//       }
//     )
// }, 5000)
// Prints Vue logs when --env.production is *NOT* set while building
nativescript_vue_1.default.config.silent = "development" === 'production';
nativescript_windowed_modal_1.overrideModalViewMethod();
nativescript_vue_1.default.registerElement('RadSideDrawer', function () { return __webpack_require__("../node_modules/nativescript-ui-sidedrawer/ui-sidedrawer.js").RadSideDrawer; });
nativescript_vue_1.default.registerElement('CardView', function () { return __webpack_require__("../node_modules/@nstudio/nativescript-cardview/cardview.js").CardView; });
nativescript_vue_1.default.registerElement('ModalStack', function () { return nativescript_windowed_modal_1.ModalStack; });
nativescript_vue_1.default.use(nativescript_windowed_modal_1.VueWindowedModal);
var app = Login_vue_1.default;
if (application_settings_1.getString('camels-token')) {
    console.log("----------------------------------token exists :: ---------------------------------");
    store_1.default.dispatch('authenticationModule/setAuthToken', {
        token: application_settings_1.getString('camels-token'),
    });
    app = Home_vue_1.default;
}
new nativescript_vue_1.default({
    store: store_1.default,
    render: function (h) { return h('Frame', [h(app)]); },
}).$start();

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvTG9naW4udnVlIiwid2VicGFjazovLy8uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsZUFEQTtBQUVBO0FBQUE7QUFBQSxHQUZBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBREE7QUFFQTtBQUZBLFNBREE7QUFLQTtBQUNBLDJCQURBO0FBRUEsaUNBRkE7QUFHQSxxQ0FIQTtBQUlBLGdDQUNBO0FBQ0EseUJBREE7QUFFQSxpQ0FGQTtBQUdBLG9CQUhBO0FBSUEsMkJBSkE7QUFLQSx5QkFDQTtBQUNBO0FBREEsYUFEQSxFQUlBO0FBQ0EsMkJBREE7QUFFQTtBQUNBLHVCQUNBLDZHQUZBO0FBR0E7QUFIQTtBQUZBLGFBSkE7QUFMQSxXQURBLEVBb0JBO0FBQ0EsNEJBREE7QUFFQSxtQ0FGQTtBQUdBLDhCQUhBO0FBSUEsb0JBSkE7QUFLQSx5QkFDQTtBQUNBO0FBREEsYUFEQSxFQUlBO0FBQ0EsbUNBREE7QUFFQTtBQUNBO0FBREE7QUFGQSxhQUpBO0FBTEEsV0FwQkE7QUFKQSxTQUxBO0FBZ0RBO0FBaERBO0FBREE7QUFvREEsR0F4REE7O0FBeURBO0FBQ0E7QUFEQSxJQXpEQTtBQTREQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVRBLEdBNURBO0FBdUVBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQTNFQTtBQTRFQTtBQUNBO0FBQ0EsR0E5RUE7QUErRUEsNkJBQ0E7QUFDQTtBQURBLElBREE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBLEtBUEE7O0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDeEQsTUFBVztBQUNYLHNDQUFzQztBQUN0QyxvQ0FBb0M7QUFDcEMsVUFBVTtBQUNWLFFBQVE7QUFDUixNQUFXO0FBRVgsbURBQW9FO0FBQ3BFLDBCQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLEtBQWlCO0FBRTVDLE1BQXlCO0FBQ3pCLEVBQStGO0FBQy9GLHVCQUF5RjtBQUN6RiwwQkFBRyxDQUFDLGNBQStDO0FBQ25ELHFCQUF5QjtBQUV6QixJQUFJLEdBQUcsR0FBRyxtQkFBSztBQUVmLEdBQStCO0lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBc0Y7SUFDbEcsZUFBb0Q7UUFDbEQsS0FBSyxFQUFFLEtBQXlCO0tBQ2pDLENBQUM7SUFDRixHQUFHLEdBQUcsU0FBSTtDQUNYO0FBRUQsSUFBSSxrQkFBSTtJQUNOLEtBQUs7SUFDTCxNQUFNLENBQTJCO0NBQ2xDLENBQUMsQ0FBQyxNQUFNLEVBQUUiLCJmaWxlIjoiYnVuZGxlLjA2ZDVkMGYzYTNjZjExNGJkNzk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwU3RhdGUgfSBmcm9tICd2dWV4J1xuaW1wb3J0IHsgbG9naW4sIHNlbmRQYXNzd29yZFJlc2V0RW1haWwgfSBmcm9tICcuLi9fc2hhcmVkL2ZpcmViYXNlL3VzZXJzLnRzJ1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi4vX3NoYXJlZC9Ub2FzdHkudHMnXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUudnVlJ1xuaW1wb3J0IENyZWF0ZVBhc3N3b3JkIGZyb20gJy4vQ3JlYXRlUGFzc3dvcmQudnVlJ1xuaW1wb3J0IEJhc2VCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CYXNlQnV0dG9uLnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTG9naW4nLFxuICBjb21wb25lbnRzOiB7IEJhc2VCdXR0b24gfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIH0sXG4gICAgICAgIHVzZXJNZXRhZGF0YToge1xuICAgICAgICAgIGlzUmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIGNvbW1pdE1vZGU6ICdJbW1lZGlhdGUnLFxuICAgICAgICAgIHZhbGlkYXRpb25Nb2RlOiAnSW1tZWRpYXRlJyxcbiAgICAgICAgICBwcm9wZXJ0eUFubm90YXRpb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdlbWFpbCcsXG4gICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnRS1NYWlsJyxcbiAgICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICAgIGVkaXRvcjogJ0VtYWlsJyxcbiAgICAgICAgICAgICAgdmFsaWRhdG9yczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdOb25FbXB0eScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnUmVnRXgnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ0V4OlxuICAgICAgICAgICAgICAgICAgICAgICdbYS16QS1aMC05XFxcXCtcXFxcLlxcXFxfXFxcXCVcXFxcLVxcXFwrXXsxLDI1Nn1cXFxcQFthLXpBLVowLTldW2EtekEtWjAtOVxcXFwtXXswLDY0fShcXFxcLlthLXpBLVowLTldW2EtekEtWjAtOVxcXFwtXXswLDI1fSkrJyxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnUGxlYXNlIHByb3ZpZGUgeW91ciB2YWxpZCBlbWFpbC4nLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdQYXNzd29yZCcsXG4gICAgICAgICAgICAgIGVkaXRvcjogJ1Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgaW5kZXg6IDEsXG4gICAgICAgICAgICAgIHZhbGlkYXRvcnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnTm9uRW1wdHknLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ01pbmltdW1MZW5ndGgnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aDogNixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcbiAgICB1c2VyQ29udGV4dDogc3RhdGUgPT4gc3RhdGUuYXV0aGVudGljYXRpb25Nb2R1bGUudXNlckNvbnRleHQsXG4gIH0pLFxuICB3YXRjaDoge1xuICAgIHVzZXJDb250ZXh0KG5ld1ZhbHVlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgaW52aXRlZCAtICA6OiAke25ld1ZhbHVlLmludml0ZWR9YClcbiAgICAgIGlmIChuZXdWYWx1ZSAmJiBuZXdWYWx1ZS5pbnZpdGVkICYmICFuZXdWYWx1ZS5sb2dnZWRJbikge1xuICAgICAgICBjb25zb2xlLmxvZyhgaW52aXRlZCAtIHdhdGNoZWQgOjogJHtuZXdWYWx1ZS5pbnZpdGVkfWApXG4gICAgICAgIGlmIChuZXdWYWx1ZS5pbnZpdGVkKSB7XG4gICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvUGFzc3dvcmRDcmVhdGlvblBhZ2UoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygnTE9HSU4gOjogbW91bnRlZCcpXG4gICAgfSlcbiAgfSxcbiAgdXBkYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ0xPR0lOIDo6IHVwZGF0ZWQnKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucygnYXV0aGVudGljYXRpb25Nb2R1bGUnLCB7XG4gICAgICBzZXRHbG9iYWxMb2dpblN0YXRlOiAnc2lnbmVkSW4nLFxuICAgIH0pLFxuXG4gICAgbmF2aWdhdGVUb1Bhc3N3b3JkQ3JlYXRpb25QYWdlKCkge1xuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhDcmVhdGVQYXNzd29yZCwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSlcbiAgICB9LFxuICAgIGhhbmRsZU9uU3VibWl0KCkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgICBjb25zdCB1c2VyRW1haWwgPSB0aGlzLiRyZWZzLmRhdGFmb3JtLmdldFByb3BlcnR5QnlOYW1lKCdlbWFpbCcpXG4gICAgICBjb25zdCB1c2VyUGFzc3dvcmQgPSB0aGlzLiRyZWZzLmRhdGFmb3JtLmdldFByb3BlcnR5QnlOYW1lKCdwYXNzd29yZCcpXG4gICAgICBpZiAoIXVzZXJFbWFpbC52YWx1ZUNhbmRpZGF0ZSB8fCAhdXNlclBhc3N3b3JkLnZhbHVlQ2FuZGlkYXRlKSB7XG4gICAgICAgIFRvYXN0U2VydmljZSgnUGxlYXNlIHByb3ZpZGUgYm90aCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBwYXNzd29yZC4nLCAnI2JlNTEzOCcpLnNob3coKVxuICAgICAgICB0aGlzLiRyZWZzLmRhdGFmb3JtLm5vdGlmeVZhbGlkYXRlZCgnZW1haWwnLCBmYWxzZSlcbiAgICAgICAgdGhpcy4kcmVmcy5kYXRhZm9ybS5ub3RpZnlWYWxpZGF0ZWQoJ3Bhc3N3b3JkJywgZmFsc2UpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAodXNlclBhc3N3b3JkLnZhbHVlQ2FuZGlkYXRlLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgVG9hc3RTZXJ2aWNlKCdQYXNzd29yZCBzaG91bGQgYmUgb2YgbWluaW11bSA2IGNoYXJhY3RlcnMnLCAnI2JlNTEzOCcpLnNob3coKVxuICAgICAgICB0aGlzLiRyZWZzLmRhdGFmb3JtLm5vdGlmeVZhbGlkYXRlZCgnZW1haWwnLCBmYWxzZSlcbiAgICAgICAgdGhpcy4kcmVmcy5kYXRhZm9ybS5ub3RpZnlWYWxpZGF0ZWQoJ3Bhc3N3b3JkJywgZmFsc2UpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLiRyZWZzLmRhdGFmb3JtLmNvbW1pdEFsbCgpXG4gICAgICB0aGlzLmxvZ2luKClcbiAgICB9LFxuICAgIGFzeW5jIGxvZ2luKCkge1xuICAgICAgY29uc3QgeyB1aWQsIHRva2VuLCByb2xlLCBpc0Vycm9yIH0gPSBhd2FpdCBsb2dpbihcbiAgICAgICAgdGhpcy5zdGF0ZS51c2VyLmVtYWlsLFxuICAgICAgICB0aGlzLnN0YXRlLnVzZXIucGFzc3dvcmRcbiAgICAgIClcblxuICAgICAgaWYgKCFpc0Vycm9yKSB7XG4gICAgICAgIHRoaXMuc2V0R2xvYmFsTG9naW5TdGF0ZSh7IHRva2VuLCB1aWQsIHJvbGUsIGxvZ2dlZEluOiB0cnVlIH0pXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSlcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICB9LFxuXG4gICAgZm9yZ290UGFzc3dvcmQoKSB7XG4gICAgICBwcm9tcHQoe1xuICAgICAgICB0aXRsZTogJ0ZvcmdvdCBQYXNzd29yZCcsXG4gICAgICAgIG1lc3NhZ2U6ICdFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgQ2FtZWxzIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuJyxcbiAgICAgICAgaW5wdXRUeXBlOiAnZW1haWwnLFxuICAgICAgICBkZWZhdWx0VGV4dDogJycsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogJ09rJyxcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gICAgICB9KS50aGVuKGFzeW5jIGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgRW1haWwgZm9yIHBhc3N3b3JkIHJlc2V0IDo6ICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9YClcbiAgICAgICAgICBhd2FpdCBzZW5kUGFzc3dvcmRSZXNldEVtYWlsKGRhdGEudGV4dClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPFBhZ2UgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwibnQtcGFnZVwiPlxuICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwicGFnZVwiPlxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibnQtZm9ybSBmb3JtXCI+XG4gICAgICAgIDxJbWFnZSBjbGFzcz1cImxvZ28gbnQtaW1hZ2VcIiBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIiAvPlxuICAgICAgICA8UmFkRGF0YUZvcm0gcmVmPVwiZGF0YWZvcm1cIiA6c291cmNlPVwic3RhdGUudXNlclwiIDptZXRhZGF0YT1cInN0YXRlLnVzZXJNZXRhZGF0YVwiPlxuICAgICAgICA8L1JhZERhdGFGb3JtPlxuICAgICAgICA8QmFzZUJ1dHRvblxuICAgICAgICAgIDpsb2FkaW5nPVwic3RhdGUubG9hZGluZ1wiXG4gICAgICAgICAgQGhhbmRsZU9uQ2xpY2s9XCJoYW5kbGVPblN1Ym1pdFwiXG4gICAgICAgICAgOmNsYXNzPVwieyAnbS10LTIwJzogdHJ1ZSwgJy1wcmltYXJ5JzogdHJ1ZSB9XCJcbiAgICAgICAgICByZWZGcm9tUGFyZW50PVwibG9naW5CdXR0b25cIlxuICAgICAgICAgIHRleHQ9XCJMb2cgSW5cIlxuICAgICAgICA+PC9CYXNlQnV0dG9uPlxuICAgICAgICA8TGFiZWwgQHRhcD1cImZvcmdvdFBhc3N3b3JkXCIgdGV4dD1cIkZvcmdvdCB5b3VyIHBhc3N3b3JkP1wiIGNsYXNzPVwibnQtbGFiZWwgbG9naW4tbGFiZWxcIiAvPlxuICAgICAgPC9TdGFja0xheW91dD5cbiAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cblBhZ2Uge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZm9ybSB7XG4gIG1hcmdpbi1sZWZ0OiAzMDtcbiAgbWFyZ2luLXJpZ2h0OiAzMDtcbiAgZmxleC1ncm93OiAyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbi1ib3R0b206IDEyO1xuICBoZWlnaHQ6IDkwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhlYWRlciB7XG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogNzA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNjMTlhNmI7XG59XG5cbi5sb2dpbi1sYWJlbCB7XG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNjtcbn1cblxuLnNpZ24tdXAtbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAyMDtcbn1cblxuLmJvbGQge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgVnVlRGV2dG9vbHMgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZS1kZXZ0b29scydcbmltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSdcbmltcG9ydCBSYWRMaXN0VmlldyBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvdnVlJ1xuaW1wb3J0IHsgTW9kYWxTdGFjaywgb3ZlcnJpZGVNb2RhbFZpZXdNZXRob2QsIFZ1ZVdpbmRvd2VkTW9kYWwgfSBmcm9tICduYXRpdmVzY3JpcHQtd2luZG93ZWQtbW9kYWwnXG5pbXBvcnQgRGF0ZVRpbWVQaWNrZXIgZnJvbSAnbmF0aXZlc2NyaXB0LWRhdGV0aW1lcGlja2VyL3Z1ZSdcbmltcG9ydCBSYWREYXRhRm9ybSBmcm9tICduYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vdnVlJ1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgeyBUTlNGb250SWNvbiwgZm9udGljb24gfSBmcm9tICduYXRpdmVzY3JpcHQtZm9udGljb24nXG4vLyBUTlNGb250SWNvbi5kZWJ1ZyA9IHRydWVcblROU0ZvbnRJY29uLnBhdGhzID0ge1xuICBmYTogJy4vYXNzZXRzL2ZvbnRhd2Vzb21lLmNzcycsXG59XG5UTlNGb250SWNvbi5sb2FkQ3NzKClcblxuVnVlLmZpbHRlcignZm9udGljb24nLCBmb250aWNvbilcblZ1ZS51c2UoVnVlRGV2dG9vbHMpXG5WdWUudXNlKFJhZExpc3RWaWV3KVxuVnVlLnVzZShSYWREYXRhRm9ybSlcbi8vIEB0cy1pZ25vcmVcblZ1ZS51c2UoRGF0ZVRpbWVQaWNrZXIpXG5cbmltcG9ydCB7IGNyYXNobHl0aWNzIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSdcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJ1xuaW1wb3J0IHsgZ2V0U3RyaW5nIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncydcbmltcG9ydCBUaGVtZSBmcm9tICdAbmF0aXZlc2NyaXB0L3RoZW1lJ1xuaW1wb3J0IExvZ2luIGZyb20gJy4vdmlld3MvTG9naW4udnVlJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi92aWV3cy9Ib21lLnZ1ZSdcblxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXG5UaGVtZS5zZXRNb2RlKFRoZW1lLkxpZ2h0KSAvLyBPciBUaGVtZS5MaWdodFxuXG5pZiAoaXNBbmRyb2lkKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBjcmFzaGx5dGljcy5zZW5kQ3Jhc2hMb2cobmV3IGphdmEubGFuZy5FeGNlcHRpb24oJ0NyYXNoIEV4Y2VwdGlvbicpKVxufSBlbHNlIGlmIChpc0lPUykge1xuICBjcmFzaGx5dGljcy5zZW5kQ3Jhc2hMb2coXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIG5ldyBOU0Vycm9yKHtcbiAgICAgIGRvbWFpbjogJ1NoaXBsb29wSHR0cFJlc3BvbnNlRXJyb3JEb21haW4nLFxuICAgICAgY29kZTogNDIsXG4gICAgICB1c2VySW5mbzogbnVsbCxcbiAgICB9KVxuICApXG59XG5maXJlYmFzZVxuICAuaW5pdCh7XG4gICAgLy8gT3B0aW9uYWxseSBwYXNzIGluIHByb3BlcnRpZXMgZm9yIGRhdGFiYXNlLCBhdXRoZW50aWNhdGlvbiBhbmQgY2xvdWQgbWVzc2FnaW5nLFxuICAgIC8vIHNlZSB0aGVpciByZXNwZWN0aXZlIGRvY3MuXG4gICAgY3Jhc2hseXRpY3NDb2xsZWN0aW9uRW5hYmxlZDogdHJ1ZSxcbiAgICBvbkR5bmFtaWNMaW5rQ2FsbGJhY2s6IGZ1bmN0aW9uKHJlc3VsdDogYW55KSB7XG4gICAgICBjb25zb2xlLmxvZygnRHluYW1pYyBsaW5rIDo6ICcgKyByZXN1bHQudXJsKVxuICAgICAgc3RvcmUuZGlzcGF0Y2goJ2F1dGhlbnRpY2F0aW9uTW9kdWxlL3NldENyZWF0ZVBhc3N3b3JkUGFnZScpXG4gICAgfSxcbiAgICBzaG93Tm90aWZpY2F0aW9uc1doZW5JbkZvcmVncm91bmQ6IHRydWUsXG4gICAgb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazogKG1lc3NhZ2U6IGZpcmViYXNlLk1lc3NhZ2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBUaXRsZSA6OiAke21lc3NhZ2UudGl0bGV9YClcbiAgICAgIGNvbnNvbGUubG9nKGBCb2R5IDo6ICR7bWVzc2FnZS5ib2R5fWApXG4gICAgfSxcbiAgICBvblB1c2hUb2tlblJlY2VpdmVkQ2FsbGJhY2s6IGZ1bmN0aW9uKHRva2VuOiBzdHJpbmcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdGaXJlYmFzZSBwdXNoIHRva2VuIDo6ICcgKyB0b2tlbilcbiAgICB9LFxuICB9KVxuICAudGhlbihcbiAgICAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZmlyZWJhc2UuaW5pdCA6OiBkb25lJylcbiAgICB9LFxuICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvciA6OiAke2Vycm9yfWApXG4gICAgfVxuICApXG4vLyBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgZmlyZWJhc2UuYWRtb2Jcbi8vICAgICAuc2hvd0Jhbm5lcih7XG4vLyAgICAgICBzaXplOiBmaXJlYmFzZS5hZG1vYi5BRF9TSVpFLlNNQVJUX0JBTk5FUiwgLy8gc2VlIGZpcmViYXNlLmFkbW9iLkFEX1NJWkUgZm9yIGFsbCBvcHRpb25zXG4vLyAgICAgICBtYXJnaW5zOiB7XG4vLyAgICAgICAgIC8vIG9wdGlvbmFsIG5yIG9mIGRldmljZSBpbmRlcGVuZGVudCBwaXhlbHMgZnJvbSB0aGUgdG9wIG9yIGJvdHRvbSAoZG9uJ3Qgc2V0IGJvdGgpXG4vLyAgICAgICAgIGJvdHRvbTogMTAsXG4vLyAgICAgICAgIHRvcDogLTEsXG4vLyAgICAgICB9LFxuLy8gICAgICAgYW5kcm9pZEJhbm5lcklkOiAnY2EtYXBwLXB1Yi05NzkxMTc5OTEwNzc1NTYxLzc0NTk2MjY3MzMnLFxuLy8gICAgICAgaW9zQmFubmVySWQ6ICdjYS1hcHAtcHViLTk3OTExNzk5MTA3NzU1NjEvNzQ1OTYyNjczMycsXG4vLyAgICAgICB0ZXN0aW5nOiB0cnVlLCAvLyB3aGVuIG5vdCBydW5uaW5nIGluIHByb2R1Y3Rpb24gc2V0IHRoaXMgdG8gdHJ1ZSwgR29vZ2xlIGRvZXNuJ3QgbGlrZSBpdCBhbnkgb3RoZXIgd2F5XG4vLyAgICAgICBpb3NUZXN0RGV2aWNlSWRzOiBbXG4vLyAgICAgICAgIC8vQW5kcm9pZCBhdXRvbWF0aWNhbGx5IGFkZHMgdGhlIGNvbm5lY3RlZCBkZXZpY2UgYXMgdGVzdCBkZXZpY2Ugd2l0aCB0ZXN0aW5nOnRydWUsIGlPUyBkb2VzIG5vdFxuLy8gICAgICAgICAnNDVkNzdiZjUxM2RmYWJjMjk0OWJhMDUzZGE4M2MwYzdiN2U4NzcxNScsIC8vIEVkZHkncyBpUGhvbmUgNnNcbi8vICAgICAgICAgJ2ZlZTRjZjMxOWEyNDJlYWI0NzAxNTQzZTRjMTZkYjg5YzcyMjczMWYnLCAvLyBFZGR5J3MgaVBhZCBQcm9cbi8vICAgICAgIF0sXG4vLyAgICAgICBrZXl3b3JkczogWydjcmlja2V0JywgJ2xvbmRvbiddLCAvLyBhZGQga2V5d29yZHMgZm9yIGFkIHRhcmdldGluZ1xuLy8gICAgICAgb25PcGVuZWQ6ICgpID0+IGNvbnNvbGUubG9nKCdBZCBvcGVuZWQnKSxcbi8vICAgICAgIG9uQ2xpY2tlZDogKCkgPT4gY29uc29sZS5sb2coJ0FkIGNsaWNrZWQnKSxcbi8vICAgICAgIG9uTGVmdEFwcGxpY2F0aW9uOiAoKSA9PiBjb25zb2xlLmxvZygnQWQgbGVmdCBhcHBsaWNhdGlvbicpLFxuLy8gICAgIH0pXG4vLyAgICAgLnRoZW4oXG4vLyAgICAgICBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ0FkTW9iIGJhbm5lciBzdGF0dXMgOjogU2hvd2luZycpXG4vLyAgICAgICB9LFxuLy8gICAgICAgZnVuY3Rpb24oZXJyb3JNZXNzYWdlOiBhbnkpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKVxuLy8gICAgICAgfVxuLy8gICAgIClcbi8vIH0sIDUwMDApXG5cbi8vIFByaW50cyBWdWUgbG9ncyB3aGVuIC0tZW52LnByb2R1Y3Rpb24gaXMgKk5PVCogc2V0IHdoaWxlIGJ1aWxkaW5nXG5WdWUuY29uZmlnLnNpbGVudCA9IFROU19FTlYgPT09ICdwcm9kdWN0aW9uJ1xuXG5vdmVycmlkZU1vZGFsVmlld01ldGhvZCgpXG5WdWUucmVnaXN0ZXJFbGVtZW50KCdSYWRTaWRlRHJhd2VyJywgKCkgPT4gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInKS5SYWRTaWRlRHJhd2VyKVxuVnVlLnJlZ2lzdGVyRWxlbWVudCgnQ2FyZFZpZXcnLCAoKSA9PiByZXF1aXJlKCdAbnN0dWRpby9uYXRpdmVzY3JpcHQtY2FyZHZpZXcnKS5DYXJkVmlldylcblZ1ZS5yZWdpc3RlckVsZW1lbnQoJ01vZGFsU3RhY2snLCAoKSA9PiBNb2RhbFN0YWNrKVxuVnVlLnVzZShWdWVXaW5kb3dlZE1vZGFsKVxuXG5sZXQgYXBwID0gTG9naW5cblxuaWYgKGdldFN0cmluZygnY2FtZWxzLXRva2VuJykpIHtcbiAgY29uc29sZS5sb2coYC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS10b2tlbiBleGlzdHMgOjogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYClcbiAgc3RvcmUuZGlzcGF0Y2goJ2F1dGhlbnRpY2F0aW9uTW9kdWxlL3NldEF1dGhUb2tlbicsIHtcbiAgICB0b2tlbjogZ2V0U3RyaW5nKCdjYW1lbHMtdG9rZW4nKSxcbiAgfSlcbiAgYXBwID0gSG9tZVxufVxuXG5uZXcgVnVlKHtcbiAgc3RvcmUsXG4gIHJlbmRlcjogaCA9PiBoKCdGcmFtZScsIFtoKGFwcCldKSxcbn0pLiRzdGFydCgpXG4iXSwic291cmNlUm9vdCI6IiJ9