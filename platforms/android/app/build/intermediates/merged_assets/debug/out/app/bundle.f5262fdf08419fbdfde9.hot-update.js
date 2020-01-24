webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/Index.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Login_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./views/Login.vue");
/* harmony import */ var _Home_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./views/Home.vue");
/* harmony import */ var _Account_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./views/Account.vue");
/* harmony import */ var _Matches_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./views/Matches.vue");
/* harmony import */ var _shared_firebase_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./_shared/firebase/users.ts");
/* harmony import */ var _shared_firebase_users__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shared_firebase_users__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_firebase_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./_shared/firebase/home.ts");
/* harmony import */ var _shared_firebase_home__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shared_firebase_home__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getViewById = __webpack_require__("../node_modules/@nativescript/core/ui/core/view/view.js").getViewById;








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Index',
  components: {
    Home: _Home_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Account: _Account_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Matches: _Matches_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {},

  data() {
    return {
      state: {
        loading: true,
        item: {
          index: 0
        },
        count: 0
      }
    };
  },

  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    userContext: state => state.authenticationModule.userContext,

    loading() {
      return this.state.loading;
    },

    notRespondedMatchCount() {
      return this.state.count;
    }

  }),
  created: function created() {
    console.log("Index :: Created");
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      var _this = this;

      console.log("Index :: mounted");
      this.checkAuthentication().then(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(function* (result) {
          if (result.status === 1) {
            yield _this.getUnreadMatchCount();
          }

          _this.state = _objectSpread({}, _this.state, {
            loading: false
          });
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    });
  },
  updated: function updated() {
    this.$nextTick(function () {
      console.log("count ---- ".concat(this.state.count));
      console.log("Index :: updated");
    });
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('authenticationModule', {
    setGlobalLoginState: 'signedIn'
  }), {
    redirectToLogin() {
      this.$navigateTo(_Login_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
    },

    checkAuthentication() {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        var result = yield Object(_shared_firebase_users__WEBPACK_IMPORTED_MODULE_5__["checkIfTokenIsValid"])();
        console.log(result);

        if (result && result.isError) {
          _this2.redirectToLogin();
        }

        var {
          uid,
          role
        } = result.json.user;

        _this2.setGlobalLoginState({
          uid,
          role,
          loggedIn: true,
          token: _this2.userContext.token
        });

        return {
          status: 1
        };
      })();
    },

    getUnreadMatchCount() {
      var _this3 = this;

      return _asyncToGenerator(function* () {
        var result = yield Object(_shared_firebase_home__WEBPACK_IMPORTED_MODULE_6__["getUnreadMatchCount"])(_this3.userContext.uid);

        if (result && !result.isError) {
          console.log("-------------");
          console.log("unread count details");
          console.log(JSON.stringify(result.json));
          console.log("----------------");

          _this3.$nextTick(function () {
            this.state = _objectSpread({}, this.state, {
              count: result.json.count
            });
          });
        }
      })();
    },

    onTabItemTap(event) {
      this.state = _objectSpread({}, this.state, {
        item: {
          index: event.index
        }
      });
    },

    handleOnPageLoaded(args) {
      this.state = _objectSpread({}, this.state, {
        parentObject: args.object
      });
    },

    onHomeEventSetIndexCb(index) {
      var bottonNavigation = getViewById(this.state.parentObject, 'bottonNavigation');
      bottonNavigation.selectedIndex = index;
      this.state = _objectSpread({}, this.state, {
        item: {
          index
        }
      });
    },

    onMatchEventSetIndexCb(index) {
      this.getUnreadMatchCount();
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
var Index_vue_1 = tslib_1.__importDefault(__webpack_require__("./views/Index.vue"));
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
    app = Index_vue_1.default;
}
new nativescript_vue_1.default({
    store: store_1.default,
    render: function (h) { return h('Frame', [h(app)]); },
}).$start();

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvSW5kZXgudnVlIiwid2VicGFjazovLy8uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsZUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FGQTtBQUdBLFdBSEE7O0FBSUE7QUFDQTtBQUNBO0FBQ0EscUJBREE7QUFFQTtBQUNBO0FBREEsU0FGQTtBQUtBO0FBTEE7QUFEQTtBQVNBLEdBZEE7O0FBZUE7QUFDQSxnRUFEQTs7QUFFQTtBQUNBO0FBQ0EsS0FKQTs7QUFNQTtBQUNBO0FBQ0E7O0FBUkEsSUFmQTtBQXlCQTtBQUNBO0FBQ0EsR0EzQkE7QUE0QkE7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQ0EsU0FOQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BLEtBVEE7QUFVQSxHQXZDQTtBQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxHQTdDQTtBQStDQSw2QkFDQTtBQUNBO0FBREEsSUFEQTtBQUlBO0FBQ0E7QUFDQSxLQU5BOztBQU9BO0FBQUE7O0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBUkE7QUFTQSxLQWhCQTs7QUFpQkE7QUFBQTs7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxXQUZBO0FBR0E7QUFWQTtBQVdBLEtBNUJBOztBQTZCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxLQS9CQTs7QUFnQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxLQWxDQTs7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QUUsS0FBeUI7S0FDakMsQ0FBQztJQUNGLEdBQUcsR0FBRyxTQUFLO0NBQ1o7QUFFRCxJQUFJLGtCQUFJO0lBQ04sS0FBSztJQUNMLE1BQU0sQ0FBMkI7Q0FDbEMsQ0FBQyxDQUFDLE1BQU0sRUFBRSIsImZpbGUiOiJidW5kbGUuZjUyNjJmZGYwODQxOWZiZGZkZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG52YXIgZ2V0Vmlld0J5SWQgPSByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldycpLmdldFZpZXdCeUlkXG5pbXBvcnQgeyBtYXBTdGF0ZSwgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbi52dWUnXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUudnVlJ1xuaW1wb3J0IEFjY291bnQgZnJvbSAnLi9BY2NvdW50LnZ1ZSdcbmltcG9ydCBNYXRjaGVzIGZyb20gJy4vTWF0Y2hlcy52dWUnXG5pbXBvcnQgeyBjaGVja0lmVG9rZW5Jc1ZhbGlkIH0gZnJvbSAnLi4vX3NoYXJlZC9maXJlYmFzZS91c2VycydcbmltcG9ydCB7IGdldFVucmVhZE1hdGNoQ291bnQgfSBmcm9tICcuLi9fc2hhcmVkL2ZpcmViYXNlL2hvbWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0luZGV4JyxcbiAgY29tcG9uZW50czogeyBIb21lLCBBY2NvdW50LCBNYXRjaGVzIH0sXG4gIHByb3BzOiB7fSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgaXRlbToge1xuICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICB9LFxuICAgICAgICBjb3VudDogMCxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDogbWFwU3RhdGUoe1xuICAgIHVzZXJDb250ZXh0OiBzdGF0ZSA9PiBzdGF0ZS5hdXRoZW50aWNhdGlvbk1vZHVsZS51c2VyQ29udGV4dCxcbiAgICBsb2FkaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubG9hZGluZ1xuICAgIH0sXG5cbiAgICBub3RSZXNwb25kZWRNYXRjaENvdW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuY291bnRcbiAgICB9LFxuICB9KSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coYEluZGV4IDo6IENyZWF0ZWRgKVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBJbmRleCA6OiBtb3VudGVkYClcbiAgICAgIHRoaXMuY2hlY2tBdXRoZW50aWNhdGlvbigpLnRoZW4oYXN5bmMgcmVzdWx0ID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IDEpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLmdldFVucmVhZE1hdGNoQ291bnQoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuICB1cGRhdGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBjb3VudCAtLS0tICR7dGhpcy5zdGF0ZS5jb3VudH1gKVxuICAgICAgY29uc29sZS5sb2coYEluZGV4IDo6IHVwZGF0ZWRgKVxuICAgIH0pXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoJ2F1dGhlbnRpY2F0aW9uTW9kdWxlJywge1xuICAgICAgc2V0R2xvYmFsTG9naW5TdGF0ZTogJ3NpZ25lZEluJyxcbiAgICB9KSxcbiAgICByZWRpcmVjdFRvTG9naW4oKSB7XG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luKVxuICAgIH0sXG4gICAgYXN5bmMgY2hlY2tBdXRoZW50aWNhdGlvbigpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNoZWNrSWZUb2tlbklzVmFsaWQoKVxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuaXNFcnJvcikge1xuICAgICAgICB0aGlzLnJlZGlyZWN0VG9Mb2dpbigpXG4gICAgICB9XG4gICAgICBjb25zdCB7IHVpZCwgcm9sZSB9ID0gcmVzdWx0Lmpzb24udXNlclxuICAgICAgdGhpcy5zZXRHbG9iYWxMb2dpblN0YXRlKHsgdWlkLCByb2xlLCBsb2dnZWRJbjogdHJ1ZSwgdG9rZW46IHRoaXMudXNlckNvbnRleHQudG9rZW4gfSlcbiAgICAgIHJldHVybiB7IHN0YXR1czogMSB9XG4gICAgfSxcbiAgICBhc3luYyBnZXRVbnJlYWRNYXRjaENvdW50KCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0VW5yZWFkTWF0Y2hDb3VudCh0aGlzLnVzZXJDb250ZXh0LnVpZClcbiAgICAgIGlmIChyZXN1bHQgJiYgIXJlc3VsdC5pc0Vycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAtLS0tLS0tLS0tLS0tYClcbiAgICAgICAgY29uc29sZS5sb2coYHVucmVhZCBjb3VudCBkZXRhaWxzYClcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0Lmpzb24pKVxuICAgICAgICBjb25zb2xlLmxvZyhgLS0tLS0tLS0tLS0tLS0tLWApXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGNvdW50OiByZXN1bHQuanNvbi5jb3VudCB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBvblRhYkl0ZW1UYXAoZXZlbnQpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGl0ZW06IHsgaW5kZXg6IGV2ZW50LmluZGV4IH0gfVxuICAgIH0sXG4gICAgaGFuZGxlT25QYWdlTG9hZGVkKGFyZ3MpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIHBhcmVudE9iamVjdDogYXJncy5vYmplY3QgfVxuICAgIH0sXG4gICAgb25Ib21lRXZlbnRTZXRJbmRleENiKGluZGV4KSB7XG4gICAgICBjb25zdCBib3R0b25OYXZpZ2F0aW9uID0gZ2V0Vmlld0J5SWQodGhpcy5zdGF0ZS5wYXJlbnRPYmplY3QsICdib3R0b25OYXZpZ2F0aW9uJylcbiAgICAgIGJvdHRvbk5hdmlnYXRpb24uc2VsZWN0ZWRJbmRleCA9IGluZGV4XG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBpdGVtOiB7IGluZGV4IH0gfVxuICAgIH0sXG4gICAgb25NYXRjaEV2ZW50U2V0SW5kZXhDYihpbmRleCkge1xuICAgICAgdGhpcy5nZXRVbnJlYWRNYXRjaENvdW50KClcbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPFBhZ2UgQGxvYWRlZD1cImhhbmRsZU9uUGFnZUxvYWRlZFwiIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIiBjbGFzcz1cIm50LXBhZ2VcIj5cbiAgICA8Qm90dG9tTmF2aWdhdGlvbiBpZD1cImJvdHRvbk5hdmlnYXRpb25cIiBzZWxlY3RlZC1pbmRleD1cIjBcIiBjbGFzcz1cIm50LWJvdHRvbS1uYXZpZ2F0aW9uXCI+XG4gICAgICA8IS0tIFRoZSBib3R0b20gdGFiIFVJIGlzIGNyZWF0ZWQgdmlhIFRhYlN0cmlwICh0aGUgY29udGFpbmllcikgYW5kIFRhYlN0cmlwSXRlbSAoZm9yIGVhY2ggdGFiKS0tPlxuICAgICAgPFRhYlN0cmlwIGlkPVwidGFiU3RyaXBcIiBAaXRlbVRhcD1cIm9uVGFiSXRlbVRhcFwiIGNsYXNzPVwibnQtdGFiLXN0cmlwXCI+XG4gICAgICAgIDxUYWJTdHJpcEl0ZW0gY2xhc3M9XCJ0YWJzdHJpcGl0ZW0gbnQtdGFiLXN0cmlwX19pdGVtXCI+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9mYS1ob21lLnN2Z1wiIGNsYXNzPVwiaGlkZVwiPjwvSW1hZ2U+XG5cbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJmYXMgdC0xNiBudC1sYWJlbFwiPlxuICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYXMgdC0xNiAgbnQtaWNvblwiPiB7eyAnZmEtaG9tZScgfCBmb250aWNvbiB9fTwvU3Bhbj5cbiAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPjwvTGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICA8VGFiU3RyaXBJdGVtIGlkPVwibWF0Y2hlc1RhYlwiIG5hbWU9XCJtYXRjaGVzXCIgY2xhc3M9XCJ0YWJzdHJpcGl0ZW0gbnQtdGFiLXN0cmlwX19pdGVtXCI+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9mYS1ob21lLnN2Z1wiIGNsYXNzPVwiaGlkZVwiPjwvSW1hZ2U+XG4gICAgICAgICAgPExhYmVsIGNsYXNzPVwiZmFzIHQtMTYgbnQtbGFiZWxcIj5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFzIHQtMTYgIG50LWljb25cIj4ge3sgJ2ZhLWJhc2ViYWxsLWJhbGwnIHwgZm9udGljb24gfX08L1NwYW4+XG4gICAgICAgICAgICAgIDxTcGFuXG4gICAgICAgICAgICAgICAgdi1pZj1cIm5vdFJlc3BvbmRlZE1hdGNoQ291bnRcIlxuICAgICAgICAgICAgICAgIDp0ZXh0PVwibm90UmVzcG9uZGVkTWF0Y2hDb3VudFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICAgIGFuZHJvaWQ6c3R5bGU9XCJmb250LXNpemU6MjU7bWFyZ2luLXRvcDotMTVcIlxuICAgICAgICAgICAgICAgIGlvczpzdHlsZT1cImZvbnQtc2l6ZTozMDttYXJnaW4tdG9wOi0xNVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmYXNcIlxuICAgICAgICAgICAgICAvPiA8L0Zvcm1hdHRlZFN0cmluZ1xuICAgICAgICAgID48L0xhYmVsPlxuICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgPFRhYlN0cmlwSXRlbSBjbGFzcz1cInRhYnN0cmlwaXRlbSBudC10YWItc3RyaXBfX2l0ZW1cIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwifi9hc3NldHMvaW1hZ2VzL2ZhLWhvbWUuc3ZnXCIgY2xhc3M9XCJoaWRlXCI+PC9JbWFnZT5cbiAgICAgICAgICA8TGFiZWwgOnRleHQ9XCInZmEtdXNlci1jaXJjbGUnIHwgZm9udGljb25cIiBjbGFzcz1cImZhIHQtMTYgbnQtbGFiZWxcIiAvPlxuICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgIDwvVGFiU3RyaXA+XG5cbiAgICAgIDwhLS0gVGhlIG51bWJlciBvZiBUYWJDb250ZW50SXRlbSBjb21wb25lbnRzIHNob3VsZCBjb3Jlc3BvbmQgdG8gdGhlIG51bWJlciBvZiBUYWJTdHJpcEl0ZW0gY29tcG9uZW50cyAtLT5cbiAgICAgIDxUYWJDb250ZW50SXRlbSBjbGFzcz1cIm50LXRhYi1jb250ZW50X19pdGVtXCI+XG4gICAgICAgIDxIb21lXG4gICAgICAgICAgdi1pZj1cInN0YXRlLml0ZW0uaW5kZXggPT09IDBcIlxuICAgICAgICAgIEBvbkhvbWVFdmVudFNldEluZGV4Q2I9XCJvbkhvbWVFdmVudFNldEluZGV4Q2JcIlxuICAgICAgICAgIEBvbk1hdGNoRXZlbnRTZXRJbmRleENiPVwib25NYXRjaEV2ZW50U2V0SW5kZXhDYlwiXG4gICAgICAgIC8+XG4gICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgICAgPFRhYkNvbnRlbnRJdGVtIGNsYXNzPVwibnQtdGFiLWNvbnRlbnRfX2l0ZW1cIj5cbiAgICAgICAgPEZsZXhCb3hMYXlvdXQgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGZsZXhHcm93PVwiMVwiPlxuICAgICAgICAgIDxNYXRjaGVzIHYtaWY9XCJzdGF0ZS5pdGVtLmluZGV4ID09PSAxXCIgQG9uTWF0Y2hFdmVudFNldEluZGV4Q2I9XCJvbk1hdGNoRXZlbnRTZXRJbmRleENiXCIgLz5cbiAgICAgICAgPC9GbGV4Qm94TGF5b3V0PlxuICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICAgIDxUYWJDb250ZW50SXRlbSBjbGFzcz1cIm50LXRhYi1jb250ZW50X19pdGVtXCI+XG4gICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICA8QWNjb3VudCAvPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICA8L0JvdHRvbU5hdmlnYXRpb24+XG4gIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbi8qIGJvdHRvbS1uYXZpZ2F0aW9uICovXG4udGFic3RyaXBpdGVtIHtcbiAgLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblRhYlN0cmlwSXRlbS50YWJzdHJpcGl0ZW06YWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnQtMTYge1xuICBmb250LXNpemU6IDE2O1xufVxuLyogYm90dG9tIG5hdiBiYXIgKi9cbi5uYXYge1xuICBoZWlnaHQ6IDUwO1xufVxuPC9zdHlsZT5cbiIsImltcG9ydCBWdWVEZXZ0b29scyBmcm9tICduYXRpdmVzY3JpcHQtdnVlLWRldnRvb2xzJ1xuaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJ1xuaW1wb3J0IFJhZExpc3RWaWV3IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldy92dWUnXG5pbXBvcnQgeyBNb2RhbFN0YWNrLCBvdmVycmlkZU1vZGFsVmlld01ldGhvZCwgVnVlV2luZG93ZWRNb2RhbCB9IGZyb20gJ25hdGl2ZXNjcmlwdC13aW5kb3dlZC1tb2RhbCdcbmltcG9ydCBEYXRlVGltZVBpY2tlciBmcm9tICduYXRpdmVzY3JpcHQtZGF0ZXRpbWVwaWNrZXIvdnVlJ1xuaW1wb3J0IFJhZERhdGFGb3JtIGZyb20gJ25hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS92dWUnXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSdcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IFROU0ZvbnRJY29uLCBmb250aWNvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1mb250aWNvbidcbi8vIFROU0ZvbnRJY29uLmRlYnVnID0gdHJ1ZVxuVE5TRm9udEljb24ucGF0aHMgPSB7XG4gIGZhOiAnLi9hc3NldHMvZm9udGF3ZXNvbWUuY3NzJyxcbn1cblROU0ZvbnRJY29uLmxvYWRDc3MoKVxuXG5WdWUuZmlsdGVyKCdmb250aWNvbicsIGZvbnRpY29uKVxuVnVlLnVzZShWdWVEZXZ0b29scylcblZ1ZS51c2UoUmFkTGlzdFZpZXcpXG5WdWUudXNlKFJhZERhdGFGb3JtKVxuLy8gQHRzLWlnbm9yZVxuVnVlLnVzZShEYXRlVGltZVBpY2tlcilcblxuaW1wb3J0IHsgY3Jhc2hseXRpY3MgfSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJ1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nXG5pbXBvcnQgeyBnZXRTdHJpbmcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJ1xuaW1wb3J0IFRoZW1lIGZyb20gJ0BuYXRpdmVzY3JpcHQvdGhlbWUnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi92aWV3cy9Mb2dpbi52dWUnXG5pbXBvcnQgSW5kZXggZnJvbSAnLi92aWV3cy9JbmRleC52dWUnXG5cbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xuVGhlbWUuc2V0TW9kZShUaGVtZS5MaWdodCkgLy8gT3IgVGhlbWUuTGlnaHRcblxuaWYgKGlzQW5kcm9pZCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgY3Jhc2hseXRpY3Muc2VuZENyYXNoTG9nKG5ldyBqYXZhLmxhbmcuRXhjZXB0aW9uKCdDcmFzaCBFeGNlcHRpb24nKSlcbn0gZWxzZSBpZiAoaXNJT1MpIHtcbiAgY3Jhc2hseXRpY3Muc2VuZENyYXNoTG9nKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBuZXcgTlNFcnJvcih7XG4gICAgICBkb21haW46ICdTaGlwbG9vcEh0dHBSZXNwb25zZUVycm9yRG9tYWluJyxcbiAgICAgIGNvZGU6IDQyLFxuICAgICAgdXNlckluZm86IG51bGwsXG4gICAgfSlcbiAgKVxufVxuZmlyZWJhc2VcbiAgLmluaXQoe1xuICAgIC8vIE9wdGlvbmFsbHkgcGFzcyBpbiBwcm9wZXJ0aWVzIGZvciBkYXRhYmFzZSwgYXV0aGVudGljYXRpb24gYW5kIGNsb3VkIG1lc3NhZ2luZyxcbiAgICAvLyBzZWUgdGhlaXIgcmVzcGVjdGl2ZSBkb2NzLlxuICAgIGNyYXNobHl0aWNzQ29sbGVjdGlvbkVuYWJsZWQ6IHRydWUsXG4gICAgb25EeW5hbWljTGlua0NhbGxiYWNrOiBmdW5jdGlvbihyZXN1bHQ6IGFueSkge1xuICAgICAgY29uc29sZS5sb2coJ0R5bmFtaWMgbGluayA6OiAnICsgcmVzdWx0LnVybClcbiAgICAgIHN0b3JlLmRpc3BhdGNoKCdhdXRoZW50aWNhdGlvbk1vZHVsZS9zZXRDcmVhdGVQYXNzd29yZFBhZ2UnKVxuICAgIH0sXG4gICAgc2hvd05vdGlmaWNhdGlvbnNXaGVuSW5Gb3JlZ3JvdW5kOiB0cnVlLFxuICAgIG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IChtZXNzYWdlOiBmaXJlYmFzZS5NZXNzYWdlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgVGl0bGUgOjogJHttZXNzYWdlLnRpdGxlfWApXG4gICAgICBjb25zb2xlLmxvZyhgQm9keSA6OiAke21lc3NhZ2UuYm9keX1gKVxuICAgIH0sXG4gICAgb25QdXNoVG9rZW5SZWNlaXZlZENhbGxiYWNrOiBmdW5jdGlvbih0b2tlbjogc3RyaW5nKSB7XG4gICAgICBjb25zb2xlLmxvZygnRmlyZWJhc2UgcHVzaCB0b2tlbiA6OiAnICsgdG9rZW4pXG4gICAgfSxcbiAgfSlcbiAgLnRoZW4oXG4gICAgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2ZpcmViYXNlLmluaXQgOjogZG9uZScpXG4gICAgfSxcbiAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3IgOjogJHtlcnJvcn1gKVxuICAgIH1cbiAgKVxuLy8gc2V0VGltZW91dCgoKSA9PiB7XG4vLyAgIGZpcmViYXNlLmFkbW9iXG4vLyAgICAgLnNob3dCYW5uZXIoe1xuLy8gICAgICAgc2l6ZTogZmlyZWJhc2UuYWRtb2IuQURfU0laRS5TTUFSVF9CQU5ORVIsIC8vIHNlZSBmaXJlYmFzZS5hZG1vYi5BRF9TSVpFIGZvciBhbGwgb3B0aW9uc1xuLy8gICAgICAgbWFyZ2luczoge1xuLy8gICAgICAgICAvLyBvcHRpb25hbCBuciBvZiBkZXZpY2UgaW5kZXBlbmRlbnQgcGl4ZWxzIGZyb20gdGhlIHRvcCBvciBib3R0b20gKGRvbid0IHNldCBib3RoKVxuLy8gICAgICAgICBib3R0b206IDEwLFxuLy8gICAgICAgICB0b3A6IC0xLFxuLy8gICAgICAgfSxcbi8vICAgICAgIGFuZHJvaWRCYW5uZXJJZDogJ2NhLWFwcC1wdWItOTc5MTE3OTkxMDc3NTU2MS83NDU5NjI2NzMzJyxcbi8vICAgICAgIGlvc0Jhbm5lcklkOiAnY2EtYXBwLXB1Yi05NzkxMTc5OTEwNzc1NTYxLzc0NTk2MjY3MzMnLFxuLy8gICAgICAgdGVzdGluZzogdHJ1ZSwgLy8gd2hlbiBub3QgcnVubmluZyBpbiBwcm9kdWN0aW9uIHNldCB0aGlzIHRvIHRydWUsIEdvb2dsZSBkb2Vzbid0IGxpa2UgaXQgYW55IG90aGVyIHdheVxuLy8gICAgICAgaW9zVGVzdERldmljZUlkczogW1xuLy8gICAgICAgICAvL0FuZHJvaWQgYXV0b21hdGljYWxseSBhZGRzIHRoZSBjb25uZWN0ZWQgZGV2aWNlIGFzIHRlc3QgZGV2aWNlIHdpdGggdGVzdGluZzp0cnVlLCBpT1MgZG9lcyBub3Rcbi8vICAgICAgICAgJzQ1ZDc3YmY1MTNkZmFiYzI5NDliYTA1M2RhODNjMGM3YjdlODc3MTUnLCAvLyBFZGR5J3MgaVBob25lIDZzXG4vLyAgICAgICAgICdmZWU0Y2YzMTlhMjQyZWFiNDcwMTU0M2U0YzE2ZGI4OWM3MjI3MzFmJywgLy8gRWRkeSdzIGlQYWQgUHJvXG4vLyAgICAgICBdLFxuLy8gICAgICAga2V5d29yZHM6IFsnY3JpY2tldCcsICdsb25kb24nXSwgLy8gYWRkIGtleXdvcmRzIGZvciBhZCB0YXJnZXRpbmdcbi8vICAgICAgIG9uT3BlbmVkOiAoKSA9PiBjb25zb2xlLmxvZygnQWQgb3BlbmVkJyksXG4vLyAgICAgICBvbkNsaWNrZWQ6ICgpID0+IGNvbnNvbGUubG9nKCdBZCBjbGlja2VkJyksXG4vLyAgICAgICBvbkxlZnRBcHBsaWNhdGlvbjogKCkgPT4gY29uc29sZS5sb2coJ0FkIGxlZnQgYXBwbGljYXRpb24nKSxcbi8vICAgICB9KVxuLy8gICAgIC50aGVuKFxuLy8gICAgICAgZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdBZE1vYiBiYW5uZXIgc3RhdHVzIDo6IFNob3dpbmcnKVxuLy8gICAgICAgfSxcbi8vICAgICAgIGZ1bmN0aW9uKGVycm9yTWVzc2FnZTogYW55KSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSlcbi8vICAgICAgIH1cbi8vICAgICApXG4vLyB9LCA1MDAwKVxuXG4vLyBQcmludHMgVnVlIGxvZ3Mgd2hlbiAtLWVudi5wcm9kdWN0aW9uIGlzICpOT1QqIHNldCB3aGlsZSBidWlsZGluZ1xuVnVlLmNvbmZpZy5zaWxlbnQgPSBUTlNfRU5WID09PSAncHJvZHVjdGlvbidcblxub3ZlcnJpZGVNb2RhbFZpZXdNZXRob2QoKVxuVnVlLnJlZ2lzdGVyRWxlbWVudCgnUmFkU2lkZURyYXdlcicsICgpID0+IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJykuUmFkU2lkZURyYXdlcilcblZ1ZS5yZWdpc3RlckVsZW1lbnQoJ0NhcmRWaWV3JywgKCkgPT4gcmVxdWlyZSgnQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWNhcmR2aWV3JykuQ2FyZFZpZXcpXG5WdWUucmVnaXN0ZXJFbGVtZW50KCdNb2RhbFN0YWNrJywgKCkgPT4gTW9kYWxTdGFjaylcblZ1ZS51c2UoVnVlV2luZG93ZWRNb2RhbClcblxubGV0IGFwcCA9IExvZ2luXG5cbmlmIChnZXRTdHJpbmcoJ2NhbWVscy10b2tlbicpKSB7XG4gIGNvbnNvbGUubG9nKGAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tdG9rZW4gZXhpc3RzIDo6IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWApXG4gIHN0b3JlLmRpc3BhdGNoKCdhdXRoZW50aWNhdGlvbk1vZHVsZS9zZXRBdXRoVG9rZW4nLCB7XG4gICAgdG9rZW46IGdldFN0cmluZygnY2FtZWxzLXRva2VuJyksXG4gIH0pXG4gIGFwcCA9IEluZGV4XG59XG5cbm5ldyBWdWUoe1xuICBzdG9yZSxcbiAgcmVuZGVyOiBoID0+IGgoJ0ZyYW1lJywgW2goYXBwKV0pLFxufSkuJHN0YXJ0KClcbiJdLCJzb3VyY2VSb290IjoiIn0=