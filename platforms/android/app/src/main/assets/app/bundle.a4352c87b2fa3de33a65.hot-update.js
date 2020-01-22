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
      }).then(data => {
        if (data.result) {
          console.log("Email for password reset :: ".concat(data));
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvTG9naW4udnVlIiwid2VicGFjazovLy8uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsZUFEQTtBQUVBO0FBQUE7QUFBQSxHQUZBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBREE7QUFFQTtBQUZBLFNBREE7QUFLQTtBQUNBLDJCQURBO0FBRUEsaUNBRkE7QUFHQSxxQ0FIQTtBQUlBLGdDQUNBO0FBQ0EseUJBREE7QUFFQSxpQ0FGQTtBQUdBLG9CQUhBO0FBSUEsMkJBSkE7QUFLQSx5QkFDQTtBQUNBO0FBREEsYUFEQSxFQUlBO0FBQ0EsMkJBREE7QUFFQTtBQUNBLHVCQUNBLDZHQUZBO0FBR0E7QUFIQTtBQUZBLGFBSkE7QUFMQSxXQURBLEVBb0JBO0FBQ0EsNEJBREE7QUFFQSxtQ0FGQTtBQUdBLDhCQUhBO0FBSUEsb0JBSkE7QUFLQSx5QkFDQTtBQUNBO0FBREEsYUFEQSxFQUlBO0FBQ0EsbUNBREE7QUFFQTtBQUNBO0FBREE7QUFGQSxhQUpBO0FBTEEsV0FwQkE7QUFKQSxTQUxBO0FBZ0RBO0FBaERBO0FBREE7QUFvREEsR0F4REE7O0FBeURBO0FBQ0E7QUFEQSxJQXpEQTtBQTREQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVRBLEdBNURBO0FBdUVBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQTNFQTtBQTRFQTtBQUNBO0FBQ0EsR0E5RUE7QUErRUEsNkJBQ0E7QUFDQTtBQURBLElBREE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBLEtBUEE7O0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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VUFBVTtBQUNWLFFBQVE7QUFDUixNQUFXO0FBRVgsbURBQW9FO0FBQ3BFLDBCQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLEtBQWlCO0FBRTVDLE1BQXlCO0FBQ3pCLEVBQStGO0FBQy9GLHVCQUF5RjtBQUN6RiwwQkFBRyxDQUFDLGNBQStDO0FBQ25ELHFCQUF5QjtBQUV6QixJQUFJLEdBQUcsR0FBRyxtQkFBSztBQUVmLEdBQStCO0lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBc0Y7SUFDbEcsZUFBb0Q7UUFDbEQsS0FBSyxFQUFFLEtBQXlCO0tBQ2pDLENBQUM7SUFDRixHQUFHLEdBQUcsU0FBSTtDQUNYO0FBRUQsSUFBSSxrQkFBSTtJQUNOLEtBQUs7SUFDTCxNQUFNLENBQTJCO0NBQ2xDLENBQUMsQ0FBQyxNQUFNLEVBQUUiLCJmaWxlIjoiYnVuZGxlLmE0MzUyYzg3YjJmYTNkZTMzYTY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwU3RhdGUgfSBmcm9tICd2dWV4J1xuaW1wb3J0IHsgbG9naW4sIHNlbmRQYXNzd29yZFJlc2V0RW1haWwgfSBmcm9tICcuLi9fc2hhcmVkL2ZpcmViYXNlL3VzZXJzLnRzJ1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi4vX3NoYXJlZC9Ub2FzdHkudHMnXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUudnVlJ1xuaW1wb3J0IENyZWF0ZVBhc3N3b3JkIGZyb20gJy4vQ3JlYXRlUGFzc3dvcmQudnVlJ1xuaW1wb3J0IEJhc2VCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CYXNlQnV0dG9uLnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTG9naW4nLFxuICBjb21wb25lbnRzOiB7IEJhc2VCdXR0b24gfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIH0sXG4gICAgICAgIHVzZXJNZXRhZGF0YToge1xuICAgICAgICAgIGlzUmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIGNvbW1pdE1vZGU6ICdJbW1lZGlhdGUnLFxuICAgICAgICAgIHZhbGlkYXRpb25Nb2RlOiAnSW1tZWRpYXRlJyxcbiAgICAgICAgICBwcm9wZXJ0eUFubm90YXRpb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdlbWFpbCcsXG4gICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnRS1NYWlsJyxcbiAgICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICAgIGVkaXRvcjogJ0VtYWlsJyxcbiAgICAgICAgICAgICAgdmFsaWRhdG9yczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdOb25FbXB0eScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnUmVnRXgnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ0V4OlxuICAgICAgICAgICAgICAgICAgICAgICdbYS16QS1aMC05XFxcXCtcXFxcLlxcXFxfXFxcXCVcXFxcLVxcXFwrXXsxLDI1Nn1cXFxcQFthLXpBLVowLTldW2EtekEtWjAtOVxcXFwtXXswLDY0fShcXFxcLlthLXpBLVowLTldW2EtekEtWjAtOVxcXFwtXXswLDI1fSkrJyxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnUGxlYXNlIHByb3ZpZGUgeW91ciB2YWxpZCBlbWFpbC4nLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdQYXNzd29yZCcsXG4gICAgICAgICAgICAgIGVkaXRvcjogJ1Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgaW5kZXg6IDEsXG4gICAgICAgICAgICAgIHZhbGlkYXRvcnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnTm9uRW1wdHknLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ01pbmltdW1MZW5ndGgnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aDogNixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcbiAgICB1c2VyQ29udGV4dDogc3RhdGUgPT4gc3RhdGUuYXV0aGVudGljYXRpb25Nb2R1bGUudXNlckNvbnRleHQsXG4gIH0pLFxuICB3YXRjaDoge1xuICAgIHVzZXJDb250ZXh0KG5ld1ZhbHVlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgaW52aXRlZCAtICA6OiAke25ld1ZhbHVlLmludml0ZWR9YClcbiAgICAgIGlmIChuZXdWYWx1ZSAmJiBuZXdWYWx1ZS5pbnZpdGVkICYmICFuZXdWYWx1ZS5sb2dnZWRJbikge1xuICAgICAgICBjb25zb2xlLmxvZyhgaW52aXRlZCAtIHdhdGNoZWQgOjogJHtuZXdWYWx1ZS5pbnZpdGVkfWApXG4gICAgICAgIGlmIChuZXdWYWx1ZS5pbnZpdGVkKSB7XG4gICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvUGFzc3dvcmRDcmVhdGlvblBhZ2UoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygnTE9HSU4gOjogbW91bnRlZCcpXG4gICAgfSlcbiAgfSxcbiAgdXBkYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ0xPR0lOIDo6IHVwZGF0ZWQnKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucygnYXV0aGVudGljYXRpb25Nb2R1bGUnLCB7XG4gICAgICBzZXRHbG9iYWxMb2dpblN0YXRlOiAnc2lnbmVkSW4nLFxuICAgIH0pLFxuXG4gICAgbmF2aWdhdGVUb1Bhc3N3b3JkQ3JlYXRpb25QYWdlKCkge1xuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhDcmVhdGVQYXNzd29yZCwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSlcbiAgICB9LFxuICAgIGhhbmRsZU9uU3VibWl0KCkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgICBjb25zdCB1c2VyRW1haWwgPSB0aGlzLiRyZWZzLmRhdGFmb3JtLmdldFByb3BlcnR5QnlOYW1lKCdlbWFpbCcpXG4gICAgICBjb25zdCB1c2VyUGFzc3dvcmQgPSB0aGlzLiRyZWZzLmRhdGFmb3JtLmdldFByb3BlcnR5QnlOYW1lKCdwYXNzd29yZCcpXG4gICAgICBpZiAoIXVzZXJFbWFpbC52YWx1ZUNhbmRpZGF0ZSB8fCAhdXNlclBhc3N3b3JkLnZhbHVlQ2FuZGlkYXRlKSB7XG4gICAgICAgIFRvYXN0U2VydmljZSgnUGxlYXNlIHByb3ZpZGUgYm90aCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBwYXNzd29yZC4nLCAnI2JlNTEzOCcpLnNob3coKVxuICAgICAgICB0aGlzLiRyZWZzLmRhdGFmb3JtLm5vdGlmeVZhbGlkYXRlZCgnZW1haWwnLCBmYWxzZSlcbiAgICAgICAgdGhpcy4kcmVmcy5kYXRhZm9ybS5ub3RpZnlWYWxpZGF0ZWQoJ3Bhc3N3b3JkJywgZmFsc2UpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAodXNlclBhc3N3b3JkLnZhbHVlQ2FuZGlkYXRlLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgVG9hc3RTZXJ2aWNlKCdQYXNzd29yZCBzaG91bGQgYmUgb2YgbWluaW11bSA2IGNoYXJhY3RlcnMnLCAnI2JlNTEzOCcpLnNob3coKVxuICAgICAgICB0aGlzLiRyZWZzLmRhdGFmb3JtLm5vdGlmeVZhbGlkYXRlZCgnZW1haWwnLCBmYWxzZSlcbiAgICAgICAgdGhpcy4kcmVmcy5kYXRhZm9ybS5ub3RpZnlWYWxpZGF0ZWQoJ3Bhc3N3b3JkJywgZmFsc2UpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLiRyZWZzLmRhdGFmb3JtLmNvbW1pdEFsbCgpXG4gICAgICB0aGlzLmxvZ2luKClcbiAgICB9LFxuICAgIGFzeW5jIGxvZ2luKCkge1xuICAgICAgY29uc3QgeyB1aWQsIHRva2VuLCByb2xlLCBpc0Vycm9yIH0gPSBhd2FpdCBsb2dpbihcbiAgICAgICAgdGhpcy5zdGF0ZS51c2VyLmVtYWlsLFxuICAgICAgICB0aGlzLnN0YXRlLnVzZXIucGFzc3dvcmRcbiAgICAgIClcblxuICAgICAgaWYgKCFpc0Vycm9yKSB7XG4gICAgICAgIHRoaXMuc2V0R2xvYmFsTG9naW5TdGF0ZSh7IHRva2VuLCB1aWQsIHJvbGUsIGxvZ2dlZEluOiB0cnVlIH0pXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSlcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICB9LFxuXG4gICAgZm9yZ290UGFzc3dvcmQoKSB7XG4gICAgICBwcm9tcHQoe1xuICAgICAgICB0aXRsZTogJ0ZvcmdvdCBQYXNzd29yZCcsXG4gICAgICAgIG1lc3NhZ2U6ICdFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgQ2FtZWxzIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuJyxcbiAgICAgICAgaW5wdXRUeXBlOiAnZW1haWwnLFxuICAgICAgICBkZWZhdWx0VGV4dDogJycsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogJ09rJyxcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgRW1haWwgZm9yIHBhc3N3b3JkIHJlc2V0IDo6ICR7ZGF0YX1gKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8UGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJudC1wYWdlXCI+XG4gICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJwYWdlXCI+XG4gICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJudC1mb3JtIGZvcm1cIj5cbiAgICAgICAgPEltYWdlIGNsYXNzPVwibG9nbyBudC1pbWFnZVwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiIC8+XG4gICAgICAgIDxSYWREYXRhRm9ybSByZWY9XCJkYXRhZm9ybVwiIDpzb3VyY2U9XCJzdGF0ZS51c2VyXCIgOm1ldGFkYXRhPVwic3RhdGUudXNlck1ldGFkYXRhXCI+XG4gICAgICAgIDwvUmFkRGF0YUZvcm0+XG4gICAgICAgIDxCYXNlQnV0dG9uXG4gICAgICAgICAgOmxvYWRpbmc9XCJzdGF0ZS5sb2FkaW5nXCJcbiAgICAgICAgICBAaGFuZGxlT25DbGljaz1cImhhbmRsZU9uU3VibWl0XCJcbiAgICAgICAgICA6Y2xhc3M9XCJ7ICdtLXQtMjAnOiB0cnVlLCAnLXByaW1hcnknOiB0cnVlIH1cIlxuICAgICAgICAgIHJlZkZyb21QYXJlbnQ9XCJsb2dpbkJ1dHRvblwiXG4gICAgICAgICAgdGV4dD1cIkxvZyBJblwiXG4gICAgICAgID48L0Jhc2VCdXR0b24+XG4gICAgICAgIDxMYWJlbCBAdGFwPVwiZm9yZ290UGFzc3dvcmRcIiB0ZXh0PVwiRm9yZ290IHlvdXIgcGFzc3dvcmQ/XCIgY2xhc3M9XCJudC1sYWJlbCBsb2dpbi1sYWJlbFwiIC8+XG4gICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwvRmxleGJveExheW91dD5cbiAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuUGFnZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb3JtIHtcbiAgbWFyZ2luLWxlZnQ6IDMwO1xuICBtYXJnaW4tcmlnaHQ6IDMwO1xuICBmbGV4LWdyb3c6IDI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luLWJvdHRvbTogMTI7XG4gIGhlaWdodDogOTA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaGVhZGVyIHtcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA3MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2MxOWE2Yjtcbn1cblxuLmxvZ2luLWxhYmVsIHtcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2O1xufVxuXG4uc2lnbi11cC1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDIwO1xufVxuXG4uYm9sZCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuPC9zdHlsZT5cbiIsImltcG9ydCBWdWVEZXZ0b29scyBmcm9tICduYXRpdmVzY3JpcHQtdnVlLWRldnRvb2xzJ1xuaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJ1xuaW1wb3J0IFJhZExpc3RWaWV3IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldy92dWUnXG5pbXBvcnQgeyBNb2RhbFN0YWNrLCBvdmVycmlkZU1vZGFsVmlld01ldGhvZCwgVnVlV2luZG93ZWRNb2RhbCB9IGZyb20gJ25hdGl2ZXNjcmlwdC13aW5kb3dlZC1tb2RhbCdcbmltcG9ydCBEYXRlVGltZVBpY2tlciBmcm9tICduYXRpdmVzY3JpcHQtZGF0ZXRpbWVwaWNrZXIvdnVlJ1xuaW1wb3J0IFJhZERhdGFGb3JtIGZyb20gJ25hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS92dWUnXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSdcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IFROU0ZvbnRJY29uLCBmb250aWNvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1mb250aWNvbidcbi8vIFROU0ZvbnRJY29uLmRlYnVnID0gdHJ1ZVxuVE5TRm9udEljb24ucGF0aHMgPSB7XG4gIGZhOiAnLi9hc3NldHMvZm9udGF3ZXNvbWUuY3NzJyxcbn1cblROU0ZvbnRJY29uLmxvYWRDc3MoKVxuXG5WdWUuZmlsdGVyKCdmb250aWNvbicsIGZvbnRpY29uKVxuVnVlLnVzZShWdWVEZXZ0b29scylcblZ1ZS51c2UoUmFkTGlzdFZpZXcpXG5WdWUudXNlKFJhZERhdGFGb3JtKVxuLy8gQHRzLWlnbm9yZVxuVnVlLnVzZShEYXRlVGltZVBpY2tlcilcblxuaW1wb3J0IHsgY3Jhc2hseXRpY3MgfSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJ1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nXG5pbXBvcnQgeyBnZXRTdHJpbmcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJ1xuaW1wb3J0IFRoZW1lIGZyb20gJ0BuYXRpdmVzY3JpcHQvdGhlbWUnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi92aWV3cy9Mb2dpbi52dWUnXG5pbXBvcnQgSG9tZSBmcm9tICcuL3ZpZXdzL0hvbWUudnVlJ1xuXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcblRoZW1lLnNldE1vZGUoVGhlbWUuTGlnaHQpIC8vIE9yIFRoZW1lLkxpZ2h0XG5cbmlmIChpc0FuZHJvaWQpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGNyYXNobHl0aWNzLnNlbmRDcmFzaExvZyhuZXcgamF2YS5sYW5nLkV4Y2VwdGlvbignQ3Jhc2ggRXhjZXB0aW9uJykpXG59IGVsc2UgaWYgKGlzSU9TKSB7XG4gIGNyYXNobHl0aWNzLnNlbmRDcmFzaExvZyhcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgbmV3IE5TRXJyb3Ioe1xuICAgICAgZG9tYWluOiAnU2hpcGxvb3BIdHRwUmVzcG9uc2VFcnJvckRvbWFpbicsXG4gICAgICBjb2RlOiA0MixcbiAgICAgIHVzZXJJbmZvOiBudWxsLFxuICAgIH0pXG4gIClcbn1cbmZpcmViYXNlXG4gIC5pbml0KHtcbiAgICAvLyBPcHRpb25hbGx5IHBhc3MgaW4gcHJvcGVydGllcyBmb3IgZGF0YWJhc2UsIGF1dGhlbnRpY2F0aW9uIGFuZCBjbG91ZCBtZXNzYWdpbmcsXG4gICAgLy8gc2VlIHRoZWlyIHJlc3BlY3RpdmUgZG9jcy5cbiAgICBjcmFzaGx5dGljc0NvbGxlY3Rpb25FbmFibGVkOiB0cnVlLFxuICAgIG9uRHluYW1pY0xpbmtDYWxsYmFjazogZnVuY3Rpb24ocmVzdWx0OiBhbnkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEeW5hbWljIGxpbmsgOjogJyArIHJlc3VsdC51cmwpXG4gICAgICBzdG9yZS5kaXNwYXRjaCgnYXV0aGVudGljYXRpb25Nb2R1bGUvc2V0Q3JlYXRlUGFzc3dvcmRQYWdlJylcbiAgICB9LFxuICAgIHNob3dOb3RpZmljYXRpb25zV2hlbkluRm9yZWdyb3VuZDogdHJ1ZSxcbiAgICBvbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrOiAobWVzc2FnZTogZmlyZWJhc2UuTWVzc2FnZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYFRpdGxlIDo6ICR7bWVzc2FnZS50aXRsZX1gKVxuICAgICAgY29uc29sZS5sb2coYEJvZHkgOjogJHttZXNzYWdlLmJvZHl9YClcbiAgICB9LFxuICAgIG9uUHVzaFRva2VuUmVjZWl2ZWRDYWxsYmFjazogZnVuY3Rpb24odG9rZW46IHN0cmluZykge1xuICAgICAgY29uc29sZS5sb2coJ0ZpcmViYXNlIHB1c2ggdG9rZW4gOjogJyArIHRva2VuKVxuICAgIH0sXG4gIH0pXG4gIC50aGVuKFxuICAgICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdmaXJlYmFzZS5pbml0IDo6IGRvbmUnKVxuICAgIH0sXG4gICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yIDo6ICR7ZXJyb3J9YClcbiAgICB9XG4gIClcbi8vIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICBmaXJlYmFzZS5hZG1vYlxuLy8gICAgIC5zaG93QmFubmVyKHtcbi8vICAgICAgIHNpemU6IGZpcmViYXNlLmFkbW9iLkFEX1NJWkUuU01BUlRfQkFOTkVSLCAvLyBzZWUgZmlyZWJhc2UuYWRtb2IuQURfU0laRSBmb3IgYWxsIG9wdGlvbnNcbi8vICAgICAgIG1hcmdpbnM6IHtcbi8vICAgICAgICAgLy8gb3B0aW9uYWwgbnIgb2YgZGV2aWNlIGluZGVwZW5kZW50IHBpeGVscyBmcm9tIHRoZSB0b3Agb3IgYm90dG9tIChkb24ndCBzZXQgYm90aClcbi8vICAgICAgICAgYm90dG9tOiAxMCxcbi8vICAgICAgICAgdG9wOiAtMSxcbi8vICAgICAgIH0sXG4vLyAgICAgICBhbmRyb2lkQmFubmVySWQ6ICdjYS1hcHAtcHViLTk3OTExNzk5MTA3NzU1NjEvNzQ1OTYyNjczMycsXG4vLyAgICAgICBpb3NCYW5uZXJJZDogJ2NhLWFwcC1wdWItOTc5MTE3OTkxMDc3NTU2MS83NDU5NjI2NzMzJyxcbi8vICAgICAgIHRlc3Rpbmc6IHRydWUsIC8vIHdoZW4gbm90IHJ1bm5pbmcgaW4gcHJvZHVjdGlvbiBzZXQgdGhpcyB0byB0cnVlLCBHb29nbGUgZG9lc24ndCBsaWtlIGl0IGFueSBvdGhlciB3YXlcbi8vICAgICAgIGlvc1Rlc3REZXZpY2VJZHM6IFtcbi8vICAgICAgICAgLy9BbmRyb2lkIGF1dG9tYXRpY2FsbHkgYWRkcyB0aGUgY29ubmVjdGVkIGRldmljZSBhcyB0ZXN0IGRldmljZSB3aXRoIHRlc3Rpbmc6dHJ1ZSwgaU9TIGRvZXMgbm90XG4vLyAgICAgICAgICc0NWQ3N2JmNTEzZGZhYmMyOTQ5YmEwNTNkYTgzYzBjN2I3ZTg3NzE1JywgLy8gRWRkeSdzIGlQaG9uZSA2c1xuLy8gICAgICAgICAnZmVlNGNmMzE5YTI0MmVhYjQ3MDE1NDNlNGMxNmRiODljNzIyNzMxZicsIC8vIEVkZHkncyBpUGFkIFByb1xuLy8gICAgICAgXSxcbi8vICAgICAgIGtleXdvcmRzOiBbJ2NyaWNrZXQnLCAnbG9uZG9uJ10sIC8vIGFkZCBrZXl3b3JkcyBmb3IgYWQgdGFyZ2V0aW5nXG4vLyAgICAgICBvbk9wZW5lZDogKCkgPT4gY29uc29sZS5sb2coJ0FkIG9wZW5lZCcpLFxuLy8gICAgICAgb25DbGlja2VkOiAoKSA9PiBjb25zb2xlLmxvZygnQWQgY2xpY2tlZCcpLFxuLy8gICAgICAgb25MZWZ0QXBwbGljYXRpb246ICgpID0+IGNvbnNvbGUubG9nKCdBZCBsZWZ0IGFwcGxpY2F0aW9uJyksXG4vLyAgICAgfSlcbi8vICAgICAudGhlbihcbi8vICAgICAgIGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnQWRNb2IgYmFubmVyIHN0YXR1cyA6OiBTaG93aW5nJylcbi8vICAgICAgIH0sXG4vLyAgICAgICBmdW5jdGlvbihlcnJvck1lc3NhZ2U6IGFueSkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpXG4vLyAgICAgICB9XG4vLyAgICAgKVxuLy8gfSwgNTAwMClcblxuLy8gUHJpbnRzIFZ1ZSBsb2dzIHdoZW4gLS1lbnYucHJvZHVjdGlvbiBpcyAqTk9UKiBzZXQgd2hpbGUgYnVpbGRpbmdcblZ1ZS5jb25maWcuc2lsZW50ID0gVE5TX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG5cbm92ZXJyaWRlTW9kYWxWaWV3TWV0aG9kKClcblZ1ZS5yZWdpc3RlckVsZW1lbnQoJ1JhZFNpZGVEcmF3ZXInLCAoKSA9PiByZXF1aXJlKCduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcicpLlJhZFNpZGVEcmF3ZXIpXG5WdWUucmVnaXN0ZXJFbGVtZW50KCdDYXJkVmlldycsICgpID0+IHJlcXVpcmUoJ0Buc3R1ZGlvL25hdGl2ZXNjcmlwdC1jYXJkdmlldycpLkNhcmRWaWV3KVxuVnVlLnJlZ2lzdGVyRWxlbWVudCgnTW9kYWxTdGFjaycsICgpID0+IE1vZGFsU3RhY2spXG5WdWUudXNlKFZ1ZVdpbmRvd2VkTW9kYWwpXG5cbmxldCBhcHAgPSBMb2dpblxuXG5pZiAoZ2V0U3RyaW5nKCdjYW1lbHMtdG9rZW4nKSkge1xuICBjb25zb2xlLmxvZyhgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXRva2VuIGV4aXN0cyA6OiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1gKVxuICBzdG9yZS5kaXNwYXRjaCgnYXV0aGVudGljYXRpb25Nb2R1bGUvc2V0QXV0aFRva2VuJywge1xuICAgIHRva2VuOiBnZXRTdHJpbmcoJ2NhbWVscy10b2tlbicpLFxuICB9KVxuICBhcHAgPSBIb21lXG59XG5cbm5ldyBWdWUoe1xuICBzdG9yZSxcbiAgcmVuZGVyOiBoID0+IGgoJ0ZyYW1lJywgW2goYXBwKV0pLFxufSkuJHN0YXJ0KClcbiJdLCJzb3VyY2VSb290IjoiIn0=