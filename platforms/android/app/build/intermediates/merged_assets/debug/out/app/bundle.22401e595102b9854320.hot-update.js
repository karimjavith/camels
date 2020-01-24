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
          setTimeout(() => {
            _this3.state = _objectSpread({}, _this3.state, {
              count: result.json.count
            });
          }, 25); // this.state = { ...this.state, count: result.json.count }
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
      var _this4 = this;

      return _asyncToGenerator(function* () {
        yield _this4.getUnreadMatchCount();
      })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvSW5kZXgudnVlIiwid2VicGFjazovLy8uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsZUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FGQTtBQUdBLFdBSEE7O0FBSUE7QUFDQTtBQUNBO0FBQ0EscUJBREE7QUFFQTtBQUNBO0FBREEsU0FGQTtBQUtBO0FBTEE7QUFEQTtBQVNBLEdBZEE7O0FBZUE7QUFDQSxnRUFEQTs7QUFFQTtBQUNBO0FBQ0EsS0FKQTs7QUFNQTtBQUNBO0FBQ0E7O0FBUkEsSUFmQTtBQXlCQTtBQUNBO0FBQ0EsR0EzQkE7QUE0QkE7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQ0EsU0FOQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BLEtBVEE7QUFVQSxHQXZDQTtBQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxHQTdDQTtBQStDQSw2QkFDQTtBQUNBO0FBREEsSUFEQTtBQUlBO0FBQ0E7QUFDQSxLQU5BOztBQU9BO0FBQUE7O0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBUkE7QUFTQSxLQWhCQTs7QUFpQkE7QUFBQTs7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLFdBRkEsRUFFQSxFQUZBLEVBTEEsQ0FRQTtBQUNBO0FBWEE7QUFZQSxLQTdCQTs7QUE4QkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsS0FoQ0E7O0FBaUNBO0FBQ0E7QUFB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QUFDLEtBQXNGO0lBQ2xHLGVBQW9EO1FBQ2xELEtBQUssRUFBRSxLQUF5QjtLQUNqQyxDQUFDO0lBQ0YsR0FBRyxHQUFHLFNBQUs7Q0FDWjtBQUVELElBQUksa0JBQUk7SUFDTixLQUFLO0lBQ0wsTUFBTSxDQUEyQjtDQUNsQyxDQUFDLENBQUMsTUFBTSxFQUFFIiwiZmlsZSI6ImJ1bmRsZS4yMjQwMWU1OTUxMDJiOTg1NDMyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbnZhciBnZXRWaWV3QnlJZCA9IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3JykuZ2V0Vmlld0J5SWRcbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luLnZ1ZSdcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZS52dWUnXG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL0FjY291bnQudnVlJ1xuaW1wb3J0IE1hdGNoZXMgZnJvbSAnLi9NYXRjaGVzLnZ1ZSdcbmltcG9ydCB7IGNoZWNrSWZUb2tlbklzVmFsaWQgfSBmcm9tICcuLi9fc2hhcmVkL2ZpcmViYXNlL3VzZXJzJ1xuaW1wb3J0IHsgZ2V0VW5yZWFkTWF0Y2hDb3VudCB9IGZyb20gJy4uL19zaGFyZWQvZmlyZWJhc2UvaG9tZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnSW5kZXgnLFxuICBjb21wb25lbnRzOiB7IEhvbWUsIEFjY291bnQsIE1hdGNoZXMgfSxcbiAgcHJvcHM6IHt9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGNvdW50OiAwLFxuICAgICAgfSxcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiBtYXBTdGF0ZSh7XG4gICAgdXNlckNvbnRleHQ6IHN0YXRlID0+IHN0YXRlLmF1dGhlbnRpY2F0aW9uTW9kdWxlLnVzZXJDb250ZXh0LFxuICAgIGxvYWRpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkaW5nXG4gICAgfSxcblxuICAgIG5vdFJlc3BvbmRlZE1hdGNoQ291bnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jb3VudFxuICAgIH0sXG4gIH0pLFxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhgSW5kZXggOjogQ3JlYXRlZGApXG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coYEluZGV4IDo6IG1vdW50ZWRgKVxuICAgICAgdGhpcy5jaGVja0F1dGhlbnRpY2F0aW9uKCkudGhlbihhc3luYyByZXN1bHQgPT4ge1xuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gMSkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0VW5yZWFkTWF0Y2hDb3VudCgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSB9XG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG4gIHVwZGF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coYGNvdW50IC0tLS0gJHt0aGlzLnN0YXRlLmNvdW50fWApXG4gICAgICBjb25zb2xlLmxvZyhgSW5kZXggOjogdXBkYXRlZGApXG4gICAgfSlcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucygnYXV0aGVudGljYXRpb25Nb2R1bGUnLCB7XG4gICAgICBzZXRHbG9iYWxMb2dpblN0YXRlOiAnc2lnbmVkSW4nLFxuICAgIH0pLFxuICAgIHJlZGlyZWN0VG9Mb2dpbigpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTG9naW4pXG4gICAgfSxcbiAgICBhc3luYyBjaGVja0F1dGhlbnRpY2F0aW9uKCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2hlY2tJZlRva2VuSXNWYWxpZCgpXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5pc0Vycm9yKSB7XG4gICAgICAgIHRoaXMucmVkaXJlY3RUb0xvZ2luKClcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgdWlkLCByb2xlIH0gPSByZXN1bHQuanNvbi51c2VyXG4gICAgICB0aGlzLnNldEdsb2JhbExvZ2luU3RhdGUoeyB1aWQsIHJvbGUsIGxvZ2dlZEluOiB0cnVlLCB0b2tlbjogdGhpcy51c2VyQ29udGV4dC50b2tlbiB9KVxuICAgICAgcmV0dXJuIHsgc3RhdHVzOiAxIH1cbiAgICB9LFxuICAgIGFzeW5jIGdldFVucmVhZE1hdGNoQ291bnQoKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRVbnJlYWRNYXRjaENvdW50KHRoaXMudXNlckNvbnRleHQudWlkKVxuICAgICAgaWYgKHJlc3VsdCAmJiAhcmVzdWx0LmlzRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coYC0tLS0tLS0tLS0tLS1gKVxuICAgICAgICBjb25zb2xlLmxvZyhgdW5yZWFkIGNvdW50IGRldGFpbHNgKVxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQuanNvbikpXG4gICAgICAgIGNvbnNvbGUubG9nKGAtLS0tLS0tLS0tLS0tLS0tYClcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgY291bnQ6IHJlc3VsdC5qc29uLmNvdW50IH1cbiAgICAgICAgfSwgMjUpXG4gICAgICAgIC8vIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGNvdW50OiByZXN1bHQuanNvbi5jb3VudCB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvblRhYkl0ZW1UYXAoZXZlbnQpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGl0ZW06IHsgaW5kZXg6IGV2ZW50LmluZGV4IH0gfVxuICAgIH0sXG4gICAgaGFuZGxlT25QYWdlTG9hZGVkKGFyZ3MpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIHBhcmVudE9iamVjdDogYXJncy5vYmplY3QgfVxuICAgIH0sXG4gICAgb25Ib21lRXZlbnRTZXRJbmRleENiKGluZGV4KSB7XG4gICAgICBjb25zdCBib3R0b25OYXZpZ2F0aW9uID0gZ2V0Vmlld0J5SWQodGhpcy5zdGF0ZS5wYXJlbnRPYmplY3QsICdib3R0b25OYXZpZ2F0aW9uJylcbiAgICAgIGJvdHRvbk5hdmlnYXRpb24uc2VsZWN0ZWRJbmRleCA9IGluZGV4XG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBpdGVtOiB7IGluZGV4IH0gfVxuICAgIH0sXG4gICAgYXN5bmMgb25NYXRjaEV2ZW50U2V0SW5kZXhDYihpbmRleCkge1xuICAgICAgYXdhaXQgdGhpcy5nZXRVbnJlYWRNYXRjaENvdW50KClcbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPFBhZ2UgQGxvYWRlZD1cImhhbmRsZU9uUGFnZUxvYWRlZFwiIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIiBjbGFzcz1cIm50LXBhZ2VcIj5cbiAgICA8Qm90dG9tTmF2aWdhdGlvbiBpZD1cImJvdHRvbk5hdmlnYXRpb25cIiBzZWxlY3RlZC1pbmRleD1cIjBcIiBjbGFzcz1cIm50LWJvdHRvbS1uYXZpZ2F0aW9uXCI+XG4gICAgICA8IS0tIFRoZSBib3R0b20gdGFiIFVJIGlzIGNyZWF0ZWQgdmlhIFRhYlN0cmlwICh0aGUgY29udGFpbmllcikgYW5kIFRhYlN0cmlwSXRlbSAoZm9yIGVhY2ggdGFiKS0tPlxuICAgICAgPFRhYlN0cmlwIGlkPVwidGFiU3RyaXBcIiBAaXRlbVRhcD1cIm9uVGFiSXRlbVRhcFwiIGNsYXNzPVwibnQtdGFiLXN0cmlwXCI+XG4gICAgICAgIDxUYWJTdHJpcEl0ZW0gY2xhc3M9XCJ0YWJzdHJpcGl0ZW0gbnQtdGFiLXN0cmlwX19pdGVtXCI+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9mYS1ob21lLnN2Z1wiIGNsYXNzPVwiaGlkZVwiPjwvSW1hZ2U+XG5cbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJmYXMgdC0xNiBudC1sYWJlbFwiPlxuICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYXMgdC0xNiAgbnQtaWNvblwiPiB7eyAnZmEtaG9tZScgfCBmb250aWNvbiB9fTwvU3Bhbj5cbiAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPjwvTGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICA8VGFiU3RyaXBJdGVtIGlkPVwibWF0Y2hlc1RhYlwiIG5hbWU9XCJtYXRjaGVzXCIgY2xhc3M9XCJ0YWJzdHJpcGl0ZW0gbnQtdGFiLXN0cmlwX19pdGVtXCI+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9mYS1ob21lLnN2Z1wiIGNsYXNzPVwiaGlkZVwiPjwvSW1hZ2U+XG4gICAgICAgICAgPExhYmVsIGNsYXNzPVwiZmFzIHQtMTYgbnQtbGFiZWxcIj5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFzIHQtMTYgIG50LWljb25cIj4ge3sgJ2ZhLWJhc2ViYWxsLWJhbGwnIHwgZm9udGljb24gfX08L1NwYW4+XG4gICAgICAgICAgICAgIDxTcGFuXG4gICAgICAgICAgICAgICAgdi1pZj1cInN0YXRlLmNvdW50XCJcbiAgICAgICAgICAgICAgICA6dGV4dD1cInN0YXRlLmNvdW50XCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgYW5kcm9pZDpzdHlsZT1cImZvbnQtc2l6ZToyNTttYXJnaW4tdG9wOi0xNVwiXG4gICAgICAgICAgICAgICAgaW9zOnN0eWxlPVwiZm9udC1zaXplOjMwO21hcmdpbi10b3A6LTE1XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZhc1wiXG4gICAgICAgICAgICAgIC8+IDwvRm9ybWF0dGVkU3RyaW5nXG4gICAgICAgICAgPjwvTGFiZWw+XG4gICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICA8VGFiU3RyaXBJdGVtIGNsYXNzPVwidGFic3RyaXBpdGVtIG50LXRhYi1zdHJpcF9faXRlbVwiPlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvZmEtaG9tZS5zdmdcIiBjbGFzcz1cImhpZGVcIj48L0ltYWdlPlxuICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIidmYS11c2VyLWNpcmNsZScgfCBmb250aWNvblwiIGNsYXNzPVwiZmEgdC0xNiBudC1sYWJlbFwiIC8+XG4gICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgPC9UYWJTdHJpcD5cblxuICAgICAgPCEtLSBUaGUgbnVtYmVyIG9mIFRhYkNvbnRlbnRJdGVtIGNvbXBvbmVudHMgc2hvdWxkIGNvcmVzcG9uZCB0byB0aGUgbnVtYmVyIG9mIFRhYlN0cmlwSXRlbSBjb21wb25lbnRzIC0tPlxuICAgICAgPFRhYkNvbnRlbnRJdGVtIGNsYXNzPVwibnQtdGFiLWNvbnRlbnRfX2l0ZW1cIj5cbiAgICAgICAgPEhvbWVcbiAgICAgICAgICB2LWlmPVwic3RhdGUuaXRlbS5pbmRleCA9PT0gMFwiXG4gICAgICAgICAgQG9uSG9tZUV2ZW50U2V0SW5kZXhDYj1cIm9uSG9tZUV2ZW50U2V0SW5kZXhDYlwiXG4gICAgICAgICAgQG9uTWF0Y2hFdmVudFNldEluZGV4Q2I9XCJvbk1hdGNoRXZlbnRTZXRJbmRleENiXCJcbiAgICAgICAgLz5cbiAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG4gICAgICA8VGFiQ29udGVudEl0ZW0gY2xhc3M9XCJudC10YWItY29udGVudF9faXRlbVwiPlxuICAgICAgICA8RmxleEJveExheW91dCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZmxleEdyb3c9XCIxXCI+XG4gICAgICAgICAgPE1hdGNoZXMgdi1pZj1cInN0YXRlLml0ZW0uaW5kZXggPT09IDFcIiBAb25NYXRjaEV2ZW50U2V0SW5kZXhDYj1cIm9uTWF0Y2hFdmVudFNldEluZGV4Q2JcIiAvPlxuICAgICAgICA8L0ZsZXhCb3hMYXlvdXQ+XG4gICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgICAgPFRhYkNvbnRlbnRJdGVtIGNsYXNzPVwibnQtdGFiLWNvbnRlbnRfX2l0ZW1cIj5cbiAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgIDxBY2NvdW50IC8+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgIDwvQm90dG9tTmF2aWdhdGlvbj5cbiAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuLyogYm90dG9tLW5hdmlnYXRpb24gKi9cbi50YWJzdHJpcGl0ZW0ge1xuICAuaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuVGFiU3RyaXBJdGVtLnRhYnN0cmlwaXRlbTphY3RpdmUge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udC0xNiB7XG4gIGZvbnQtc2l6ZTogMTY7XG59XG4vKiBib3R0b20gbmF2IGJhciAqL1xuLm5hdiB7XG4gIGhlaWdodDogNTA7XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IFZ1ZURldnRvb2xzIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUtZGV2dG9vbHMnXG5pbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnXG5pbXBvcnQgUmFkTGlzdFZpZXcgZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L3Z1ZSdcbmltcG9ydCB7IE1vZGFsU3RhY2ssIG92ZXJyaWRlTW9kYWxWaWV3TWV0aG9kLCBWdWVXaW5kb3dlZE1vZGFsIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXdpbmRvd2VkLW1vZGFsJ1xuaW1wb3J0IERhdGVUaW1lUGlja2VyIGZyb20gJ25hdGl2ZXNjcmlwdC1kYXRldGltZXBpY2tlci92dWUnXG5pbXBvcnQgUmFkRGF0YUZvcm0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL3Z1ZSdcbmltcG9ydCBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJ1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHsgVE5TRm9udEljb24sIGZvbnRpY29uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWZvbnRpY29uJ1xuLy8gVE5TRm9udEljb24uZGVidWcgPSB0cnVlXG5UTlNGb250SWNvbi5wYXRocyA9IHtcbiAgZmE6ICcuL2Fzc2V0cy9mb250YXdlc29tZS5jc3MnLFxufVxuVE5TRm9udEljb24ubG9hZENzcygpXG5cblZ1ZS5maWx0ZXIoJ2ZvbnRpY29uJywgZm9udGljb24pXG5WdWUudXNlKFZ1ZURldnRvb2xzKVxuVnVlLnVzZShSYWRMaXN0VmlldylcblZ1ZS51c2UoUmFkRGF0YUZvcm0pXG4vLyBAdHMtaWdub3JlXG5WdWUudXNlKERhdGVUaW1lUGlja2VyKVxuXG5pbXBvcnQgeyBjcmFzaGx5dGljcyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnXG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSdcbmltcG9ydCB7IGdldFN0cmluZyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnXG5pbXBvcnQgVGhlbWUgZnJvbSAnQG5hdGl2ZXNjcmlwdC90aGVtZSdcbmltcG9ydCBMb2dpbiBmcm9tICcuL3ZpZXdzL0xvZ2luLnZ1ZSdcbmltcG9ydCBJbmRleCBmcm9tICcuL3ZpZXdzL0luZGV4LnZ1ZSdcblxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXG5UaGVtZS5zZXRNb2RlKFRoZW1lLkxpZ2h0KSAvLyBPciBUaGVtZS5MaWdodFxuXG5pZiAoaXNBbmRyb2lkKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBjcmFzaGx5dGljcy5zZW5kQ3Jhc2hMb2cobmV3IGphdmEubGFuZy5FeGNlcHRpb24oJ0NyYXNoIEV4Y2VwdGlvbicpKVxufSBlbHNlIGlmIChpc0lPUykge1xuICBjcmFzaGx5dGljcy5zZW5kQ3Jhc2hMb2coXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIG5ldyBOU0Vycm9yKHtcbiAgICAgIGRvbWFpbjogJ1NoaXBsb29wSHR0cFJlc3BvbnNlRXJyb3JEb21haW4nLFxuICAgICAgY29kZTogNDIsXG4gICAgICB1c2VySW5mbzogbnVsbCxcbiAgICB9KVxuICApXG59XG5maXJlYmFzZVxuICAuaW5pdCh7XG4gICAgLy8gT3B0aW9uYWxseSBwYXNzIGluIHByb3BlcnRpZXMgZm9yIGRhdGFiYXNlLCBhdXRoZW50aWNhdGlvbiBhbmQgY2xvdWQgbWVzc2FnaW5nLFxuICAgIC8vIHNlZSB0aGVpciByZXNwZWN0aXZlIGRvY3MuXG4gICAgY3Jhc2hseXRpY3NDb2xsZWN0aW9uRW5hYmxlZDogdHJ1ZSxcbiAgICBvbkR5bmFtaWNMaW5rQ2FsbGJhY2s6IGZ1bmN0aW9uKHJlc3VsdDogYW55KSB7XG4gICAgICBjb25zb2xlLmxvZygnRHluYW1pYyBsaW5rIDo6ICcgKyByZXN1bHQudXJsKVxuICAgICAgc3RvcmUuZGlzcGF0Y2goJ2F1dGhlbnRpY2F0aW9uTW9kdWxlL3NldENyZWF0ZVBhc3N3b3JkUGFnZScpXG4gICAgfSxcbiAgICBzaG93Tm90aWZpY2F0aW9uc1doZW5JbkZvcmVncm91bmQ6IHRydWUsXG4gICAgb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazogKG1lc3NhZ2U6IGZpcmViYXNlLk1lc3NhZ2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBUaXRsZSA6OiAke21lc3NhZ2UudGl0bGV9YClcbiAgICAgIGNvbnNvbGUubG9nKGBCb2R5IDo6ICR7bWVzc2FnZS5ib2R5fWApXG4gICAgfSxcbiAgICBvblB1c2hUb2tlblJlY2VpdmVkQ2FsbGJhY2s6IGZ1bmN0aW9uKHRva2VuOiBzdHJpbmcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdGaXJlYmFzZSBwdXNoIHRva2VuIDo6ICcgKyB0b2tlbilcbiAgICB9LFxuICB9KVxuICAudGhlbihcbiAgICAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZmlyZWJhc2UuaW5pdCA6OiBkb25lJylcbiAgICB9LFxuICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvciA6OiAke2Vycm9yfWApXG4gICAgfVxuICApXG4vLyBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgZmlyZWJhc2UuYWRtb2Jcbi8vICAgICAuc2hvd0Jhbm5lcih7XG4vLyAgICAgICBzaXplOiBmaXJlYmFzZS5hZG1vYi5BRF9TSVpFLlNNQVJUX0JBTk5FUiwgLy8gc2VlIGZpcmViYXNlLmFkbW9iLkFEX1NJWkUgZm9yIGFsbCBvcHRpb25zXG4vLyAgICAgICBtYXJnaW5zOiB7XG4vLyAgICAgICAgIC8vIG9wdGlvbmFsIG5yIG9mIGRldmljZSBpbmRlcGVuZGVudCBwaXhlbHMgZnJvbSB0aGUgdG9wIG9yIGJvdHRvbSAoZG9uJ3Qgc2V0IGJvdGgpXG4vLyAgICAgICAgIGJvdHRvbTogMTAsXG4vLyAgICAgICAgIHRvcDogLTEsXG4vLyAgICAgICB9LFxuLy8gICAgICAgYW5kcm9pZEJhbm5lcklkOiAnY2EtYXBwLXB1Yi05NzkxMTc5OTEwNzc1NTYxLzc0NTk2MjY3MzMnLFxuLy8gICAgICAgaW9zQmFubmVySWQ6ICdjYS1hcHAtcHViLTk3OTExNzk5MTA3NzU1NjEvNzQ1OTYyNjczMycsXG4vLyAgICAgICB0ZXN0aW5nOiB0cnVlLCAvLyB3aGVuIG5vdCBydW5uaW5nIGluIHByb2R1Y3Rpb24gc2V0IHRoaXMgdG8gdHJ1ZSwgR29vZ2xlIGRvZXNuJ3QgbGlrZSBpdCBhbnkgb3RoZXIgd2F5XG4vLyAgICAgICBpb3NUZXN0RGV2aWNlSWRzOiBbXG4vLyAgICAgICAgIC8vQW5kcm9pZCBhdXRvbWF0aWNhbGx5IGFkZHMgdGhlIGNvbm5lY3RlZCBkZXZpY2UgYXMgdGVzdCBkZXZpY2Ugd2l0aCB0ZXN0aW5nOnRydWUsIGlPUyBkb2VzIG5vdFxuLy8gICAgICAgICAnNDVkNzdiZjUxM2RmYWJjMjk0OWJhMDUzZGE4M2MwYzdiN2U4NzcxNScsIC8vIEVkZHkncyBpUGhvbmUgNnNcbi8vICAgICAgICAgJ2ZlZTRjZjMxOWEyNDJlYWI0NzAxNTQzZTRjMTZkYjg5YzcyMjczMWYnLCAvLyBFZGR5J3MgaVBhZCBQcm9cbi8vICAgICAgIF0sXG4vLyAgICAgICBrZXl3b3JkczogWydjcmlja2V0JywgJ2xvbmRvbiddLCAvLyBhZGQga2V5d29yZHMgZm9yIGFkIHRhcmdldGluZ1xuLy8gICAgICAgb25PcGVuZWQ6ICgpID0+IGNvbnNvbGUubG9nKCdBZCBvcGVuZWQnKSxcbi8vICAgICAgIG9uQ2xpY2tlZDogKCkgPT4gY29uc29sZS5sb2coJ0FkIGNsaWNrZWQnKSxcbi8vICAgICAgIG9uTGVmdEFwcGxpY2F0aW9uOiAoKSA9PiBjb25zb2xlLmxvZygnQWQgbGVmdCBhcHBsaWNhdGlvbicpLFxuLy8gICAgIH0pXG4vLyAgICAgLnRoZW4oXG4vLyAgICAgICBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ0FkTW9iIGJhbm5lciBzdGF0dXMgOjogU2hvd2luZycpXG4vLyAgICAgICB9LFxuLy8gICAgICAgZnVuY3Rpb24oZXJyb3JNZXNzYWdlOiBhbnkpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKVxuLy8gICAgICAgfVxuLy8gICAgIClcbi8vIH0sIDUwMDApXG5cbi8vIFByaW50cyBWdWUgbG9ncyB3aGVuIC0tZW52LnByb2R1Y3Rpb24gaXMgKk5PVCogc2V0IHdoaWxlIGJ1aWxkaW5nXG5WdWUuY29uZmlnLnNpbGVudCA9IFROU19FTlYgPT09ICdwcm9kdWN0aW9uJ1xuXG5vdmVycmlkZU1vZGFsVmlld01ldGhvZCgpXG5WdWUucmVnaXN0ZXJFbGVtZW50KCdSYWRTaWRlRHJhd2VyJywgKCkgPT4gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInKS5SYWRTaWRlRHJhd2VyKVxuVnVlLnJlZ2lzdGVyRWxlbWVudCgnQ2FyZFZpZXcnLCAoKSA9PiByZXF1aXJlKCdAbnN0dWRpby9uYXRpdmVzY3JpcHQtY2FyZHZpZXcnKS5DYXJkVmlldylcblZ1ZS5yZWdpc3RlckVsZW1lbnQoJ01vZGFsU3RhY2snLCAoKSA9PiBNb2RhbFN0YWNrKVxuVnVlLnVzZShWdWVXaW5kb3dlZE1vZGFsKVxuXG5sZXQgYXBwID0gTG9naW5cblxuaWYgKGdldFN0cmluZygnY2FtZWxzLXRva2VuJykpIHtcbiAgY29uc29sZS5sb2coYC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS10b2tlbiBleGlzdHMgOjogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYClcbiAgc3RvcmUuZGlzcGF0Y2goJ2F1dGhlbnRpY2F0aW9uTW9kdWxlL3NldEF1dGhUb2tlbicsIHtcbiAgICB0b2tlbjogZ2V0U3RyaW5nKCdjYW1lbHMtdG9rZW4nKSxcbiAgfSlcbiAgYXBwID0gSW5kZXhcbn1cblxubmV3IFZ1ZSh7XG4gIHN0b3JlLFxuICByZW5kZXI6IGggPT4gaCgnRnJhbWUnLCBbaChhcHApXSksXG59KS4kc3RhcnQoKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==