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
          _this3.state = _objectSpread({}, _this3.state, {
            count: result.json.count
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/Index.vue?vue&type=template&id=7914b933&scoped=true&":
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
    {
      staticClass: "nt-page",
      attrs: { actionBarHidden: "true" },
      on: { loaded: _vm.handleOnPageLoaded }
    },
    [
      _c(
        "BottomNavigation",
        {
          staticClass: "nt-bottom-navigation",
          attrs: { id: "bottonNavigation", "selected-index": "0" }
        },
        [
          _c(
            "TabStrip",
            {
              staticClass: "nt-tab-strip",
              attrs: { id: "tabStrip" },
              on: { itemTap: _vm.onTabItemTap }
            },
            [
              _c(
                "TabStripItem",
                { staticClass: "tabstripitem nt-tab-strip__item" },
                [
                  _c("Image", {
                    staticClass: "hide",
                    attrs: { src: "~/assets/images/fa-home.svg" }
                  }),
                  _c(
                    "Label",
                    { staticClass: "fas t-16 nt-label" },
                    [
                      _c(
                        "FormattedString",
                        [
                          _c("Span", { staticClass: "fas t-16  nt-icon" }, [
                            _vm._v(" " + _vm._s(_vm._f("fonticon")("fa-home")))
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabStripItem",
                {
                  staticClass: "tabstripitem nt-tab-strip__item",
                  attrs: { id: "matchesTab", name: "matches" }
                },
                [
                  _c("Image", {
                    staticClass: "hide",
                    attrs: { src: "~/assets/images/fa-home.svg" }
                  }),
                  _c(
                    "Label",
                    { staticClass: "fas t-16 nt-label" },
                    [
                      _c(
                        "FormattedString",
                        [
                          _c("Span", { staticClass: "fas t-16  nt-icon" }, [
                            _vm._v(
                              " " +
                                _vm._s(_vm._f("fonticon")("fa-baseball-ball"))
                            )
                          ]),
                          _vm.notRespondedMatchCount
                            ? _c("Span", {
                                staticClass: "fas",
                                attrs: {
                                  text: _vm.notRespondedMatchCount,
                                  color: "red",
                                  "android:style":
                                    "font-size:25;margin-top:-15",
                                  "ios:style": "font-size:30;margin-top:-15"
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabStripItem",
                { staticClass: "tabstripitem nt-tab-strip__item" },
                [
                  _c("Image", {
                    staticClass: "hide",
                    attrs: { src: "~/assets/images/fa-home.svg" }
                  }),
                  _c("Label", {
                    staticClass: "fa t-16 nt-label",
                    attrs: { text: _vm._f("fonticon")("fa-user-circle") }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "TabContentItem",
            { staticClass: "nt-tab-content__item" },
            [
              _vm.state.item.index === 0
                ? _c("Home", {
                    on: {
                      onHomeEventSetIndexCb: _vm.onHomeEventSetIndexCb,
                      onMatchEventSetIndexCb: _vm.onMatchEventSetIndexCb
                    }
                  })
                : _vm._e()
            ],
            1
          ),
          _c(
            "TabContentItem",
            { staticClass: "nt-tab-content__item" },
            [
              _c(
                "FlexBoxLayout",
                { attrs: { flexDirection: "column", flexGrow: "1" } },
                [
                  _vm.state.item.index === 1
                    ? _c("Matches", {
                        on: {
                          onMatchEventSetIndexCb: _vm.onMatchEventSetIndexCb
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ],
            1
          ),
          _c(
            "TabContentItem",
            { staticClass: "nt-tab-content__item" },
            [_c("StackLayout", [_c("Account")], 1)],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3ZpZXdzL0luZGV4LnZ1ZT84NGI5Iiwid2VicGFjazovLy8uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsZUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FGQTtBQUdBLFdBSEE7O0FBSUE7QUFDQTtBQUNBO0FBQ0EscUJBREE7QUFFQTtBQUNBO0FBREEsU0FGQTtBQUtBO0FBTEE7QUFEQTtBQVNBLEdBZEE7O0FBZUE7QUFDQSxnRUFEQTs7QUFFQTtBQUNBO0FBQ0EsS0FKQTs7QUFNQTtBQUNBO0FBQ0E7O0FBUkEsSUFmQTtBQXlCQTtBQUNBO0FBQ0EsR0EzQkE7QUE0QkE7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQ0EsU0FOQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BLEtBVEE7QUFVQSxHQXZDQTtBQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxHQTdDQTtBQStDQSw2QkFDQTtBQUNBO0FBREEsSUFEQTtBQUlBO0FBQ0E7QUFDQSxLQU5BOztBQU9BO0FBQUE7O0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBUkE7QUFTQSxLQWhCQTs7QUFpQkE7QUFBQTs7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVJBO0FBU0EsS0ExQkE7O0FBMkJBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLEtBN0JBOztBQThCQTtBQUNBO0FB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QWE7QUFDYixxQkFBcUI7QUFDckIsd0RBQXdEO0FBQ3hELE1BQVc7QUFDWCxzQ0FBc0M7QUFDdEMsb0NBQW9DO0FBQ3BDLFVBQVU7QUFDVixRQUFRO0FBQ1IsTUFBVztBQUVYLG1EQUFvRTtBQUNwRSwwQkFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxLQUFpQjtBQUU1QyxNQUF5QjtBQUN6QixFQUErRjtBQUMvRix1QkFBeUY7QUFDekYsMEJBQUcsQ0FBQyxjQUErQztBQUNuRCxxQkFBeUI7QUFFekIsSUFBSSxHQUFHLEdBQUcsbUJBQUs7QUFFZixHQUErQjtJQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQXNGO0lBQ2xHLGVBQW9EO1FBQ2xELEtBQUssRUFBRSxLQUF5QjtLQUNqQyxDQUFDO0lBQ0YsR0FBRyxHQUFHLFNBQUs7Q0FDWjtBQUVELElBQUksa0JBQUk7SUFDTixLQUFLO0lBQ0wsTUFBTSxDQUEyQjtDQUNsQyxDQUFDLENBQUMsTUFBTSxFQUFFIiwiZmlsZSI6ImJ1bmRsZS43YjI1MTI2YzViZDE5YjQ4YmJkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbnZhciBnZXRWaWV3QnlJZCA9IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3JykuZ2V0Vmlld0J5SWRcbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luLnZ1ZSdcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZS52dWUnXG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL0FjY291bnQudnVlJ1xuaW1wb3J0IE1hdGNoZXMgZnJvbSAnLi9NYXRjaGVzLnZ1ZSdcbmltcG9ydCB7IGNoZWNrSWZUb2tlbklzVmFsaWQgfSBmcm9tICcuLi9fc2hhcmVkL2ZpcmViYXNlL3VzZXJzJ1xuaW1wb3J0IHsgZ2V0VW5yZWFkTWF0Y2hDb3VudCB9IGZyb20gJy4uL19zaGFyZWQvZmlyZWJhc2UvaG9tZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnSW5kZXgnLFxuICBjb21wb25lbnRzOiB7IEhvbWUsIEFjY291bnQsIE1hdGNoZXMgfSxcbiAgcHJvcHM6IHt9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGNvdW50OiAwLFxuICAgICAgfSxcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiBtYXBTdGF0ZSh7XG4gICAgdXNlckNvbnRleHQ6IHN0YXRlID0+IHN0YXRlLmF1dGhlbnRpY2F0aW9uTW9kdWxlLnVzZXJDb250ZXh0LFxuICAgIGxvYWRpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkaW5nXG4gICAgfSxcblxuICAgIG5vdFJlc3BvbmRlZE1hdGNoQ291bnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jb3VudFxuICAgIH0sXG4gIH0pLFxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhgSW5kZXggOjogQ3JlYXRlZGApXG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coYEluZGV4IDo6IG1vdW50ZWRgKVxuICAgICAgdGhpcy5jaGVja0F1dGhlbnRpY2F0aW9uKCkudGhlbihhc3luYyByZXN1bHQgPT4ge1xuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gMSkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0VW5yZWFkTWF0Y2hDb3VudCgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSB9XG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG4gIHVwZGF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coYGNvdW50IC0tLS0gJHt0aGlzLnN0YXRlLmNvdW50fWApXG4gICAgICBjb25zb2xlLmxvZyhgSW5kZXggOjogdXBkYXRlZGApXG4gICAgfSlcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucygnYXV0aGVudGljYXRpb25Nb2R1bGUnLCB7XG4gICAgICBzZXRHbG9iYWxMb2dpblN0YXRlOiAnc2lnbmVkSW4nLFxuICAgIH0pLFxuICAgIHJlZGlyZWN0VG9Mb2dpbigpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTG9naW4pXG4gICAgfSxcbiAgICBhc3luYyBjaGVja0F1dGhlbnRpY2F0aW9uKCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2hlY2tJZlRva2VuSXNWYWxpZCgpXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5pc0Vycm9yKSB7XG4gICAgICAgIHRoaXMucmVkaXJlY3RUb0xvZ2luKClcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgdWlkLCByb2xlIH0gPSByZXN1bHQuanNvbi51c2VyXG4gICAgICB0aGlzLnNldEdsb2JhbExvZ2luU3RhdGUoeyB1aWQsIHJvbGUsIGxvZ2dlZEluOiB0cnVlLCB0b2tlbjogdGhpcy51c2VyQ29udGV4dC50b2tlbiB9KVxuICAgICAgcmV0dXJuIHsgc3RhdHVzOiAxIH1cbiAgICB9LFxuICAgIGFzeW5jIGdldFVucmVhZE1hdGNoQ291bnQoKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRVbnJlYWRNYXRjaENvdW50KHRoaXMudXNlckNvbnRleHQudWlkKVxuICAgICAgaWYgKHJlc3VsdCAmJiAhcmVzdWx0LmlzRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coYC0tLS0tLS0tLS0tLS1gKVxuICAgICAgICBjb25zb2xlLmxvZyhgdW5yZWFkIGNvdW50IGRldGFpbHNgKVxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQuanNvbikpXG4gICAgICAgIGNvbnNvbGUubG9nKGAtLS0tLS0tLS0tLS0tLS0tYClcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgY291bnQ6IHJlc3VsdC5qc29uLmNvdW50IH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uVGFiSXRlbVRhcChldmVudCkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgaXRlbTogeyBpbmRleDogZXZlbnQuaW5kZXggfSB9XG4gICAgfSxcbiAgICBoYW5kbGVPblBhZ2VMb2FkZWQoYXJncykge1xuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgcGFyZW50T2JqZWN0OiBhcmdzLm9iamVjdCB9XG4gICAgfSxcbiAgICBvbkhvbWVFdmVudFNldEluZGV4Q2IoaW5kZXgpIHtcbiAgICAgIGNvbnN0IGJvdHRvbk5hdmlnYXRpb24gPSBnZXRWaWV3QnlJZCh0aGlzLnN0YXRlLnBhcmVudE9iamVjdCwgJ2JvdHRvbk5hdmlnYXRpb24nKVxuICAgICAgYm90dG9uTmF2aWdhdGlvbi5zZWxlY3RlZEluZGV4ID0gaW5kZXhcbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGl0ZW06IHsgaW5kZXggfSB9XG4gICAgfSxcbiAgICBvbk1hdGNoRXZlbnRTZXRJbmRleENiKGluZGV4KSB7XG4gICAgICB0aGlzLmdldFVucmVhZE1hdGNoQ291bnQoKVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8UGFnZSBAbG9hZGVkPVwiaGFuZGxlT25QYWdlTG9hZGVkXCIgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwibnQtcGFnZVwiPlxuICAgIDxCb3R0b21OYXZpZ2F0aW9uIGlkPVwiYm90dG9uTmF2aWdhdGlvblwiIHNlbGVjdGVkLWluZGV4PVwiMFwiIGNsYXNzPVwibnQtYm90dG9tLW5hdmlnYXRpb25cIj5cbiAgICAgIDwhLS0gVGhlIGJvdHRvbSB0YWIgVUkgaXMgY3JlYXRlZCB2aWEgVGFiU3RyaXAgKHRoZSBjb250YWluaWVyKSBhbmQgVGFiU3RyaXBJdGVtIChmb3IgZWFjaCB0YWIpLS0+XG4gICAgICA8VGFiU3RyaXAgaWQ9XCJ0YWJTdHJpcFwiIEBpdGVtVGFwPVwib25UYWJJdGVtVGFwXCIgY2xhc3M9XCJudC10YWItc3RyaXBcIj5cbiAgICAgICAgPFRhYlN0cmlwSXRlbSBjbGFzcz1cInRhYnN0cmlwaXRlbSBudC10YWItc3RyaXBfX2l0ZW1cIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwifi9hc3NldHMvaW1hZ2VzL2ZhLWhvbWUuc3ZnXCIgY2xhc3M9XCJoaWRlXCI+PC9JbWFnZT5cblxuICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImZhcyB0LTE2IG50LWxhYmVsXCI+XG4gICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cImZhcyB0LTE2ICBudC1pY29uXCI+IHt7ICdmYS1ob21lJyB8IGZvbnRpY29uIH19PC9TcGFuPlxuICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+PC9MYWJlbFxuICAgICAgICAgID5cbiAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgIDxUYWJTdHJpcEl0ZW0gaWQ9XCJtYXRjaGVzVGFiXCIgbmFtZT1cIm1hdGNoZXNcIiBjbGFzcz1cInRhYnN0cmlwaXRlbSBudC10YWItc3RyaXBfX2l0ZW1cIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwifi9hc3NldHMvaW1hZ2VzL2ZhLWhvbWUuc3ZnXCIgY2xhc3M9XCJoaWRlXCI+PC9JbWFnZT5cbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJmYXMgdC0xNiBudC1sYWJlbFwiPlxuICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYXMgdC0xNiAgbnQtaWNvblwiPiB7eyAnZmEtYmFzZWJhbGwtYmFsbCcgfCBmb250aWNvbiB9fTwvU3Bhbj5cbiAgICAgICAgICAgICAgPFNwYW5cbiAgICAgICAgICAgICAgICB2LWlmPVwibm90UmVzcG9uZGVkTWF0Y2hDb3VudFwiXG4gICAgICAgICAgICAgICAgOnRleHQ9XCJub3RSZXNwb25kZWRNYXRjaENvdW50XCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgYW5kcm9pZDpzdHlsZT1cImZvbnQtc2l6ZToyNTttYXJnaW4tdG9wOi0xNVwiXG4gICAgICAgICAgICAgICAgaW9zOnN0eWxlPVwiZm9udC1zaXplOjMwO21hcmdpbi10b3A6LTE1XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZhc1wiXG4gICAgICAgICAgICAgIC8+IDwvRm9ybWF0dGVkU3RyaW5nXG4gICAgICAgICAgPjwvTGFiZWw+XG4gICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICA8VGFiU3RyaXBJdGVtIGNsYXNzPVwidGFic3RyaXBpdGVtIG50LXRhYi1zdHJpcF9faXRlbVwiPlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvZmEtaG9tZS5zdmdcIiBjbGFzcz1cImhpZGVcIj48L0ltYWdlPlxuICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIidmYS11c2VyLWNpcmNsZScgfCBmb250aWNvblwiIGNsYXNzPVwiZmEgdC0xNiBudC1sYWJlbFwiIC8+XG4gICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgPC9UYWJTdHJpcD5cblxuICAgICAgPCEtLSBUaGUgbnVtYmVyIG9mIFRhYkNvbnRlbnRJdGVtIGNvbXBvbmVudHMgc2hvdWxkIGNvcmVzcG9uZCB0byB0aGUgbnVtYmVyIG9mIFRhYlN0cmlwSXRlbSBjb21wb25lbnRzIC0tPlxuICAgICAgPFRhYkNvbnRlbnRJdGVtIGNsYXNzPVwibnQtdGFiLWNvbnRlbnRfX2l0ZW1cIj5cbiAgICAgICAgPEhvbWVcbiAgICAgICAgICB2LWlmPVwic3RhdGUuaXRlbS5pbmRleCA9PT0gMFwiXG4gICAgICAgICAgQG9uSG9tZUV2ZW50U2V0SW5kZXhDYj1cIm9uSG9tZUV2ZW50U2V0SW5kZXhDYlwiXG4gICAgICAgICAgQG9uTWF0Y2hFdmVudFNldEluZGV4Q2I9XCJvbk1hdGNoRXZlbnRTZXRJbmRleENiXCJcbiAgICAgICAgLz5cbiAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG4gICAgICA8VGFiQ29udGVudEl0ZW0gY2xhc3M9XCJudC10YWItY29udGVudF9faXRlbVwiPlxuICAgICAgICA8RmxleEJveExheW91dCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZmxleEdyb3c9XCIxXCI+XG4gICAgICAgICAgPE1hdGNoZXMgdi1pZj1cInN0YXRlLml0ZW0uaW5kZXggPT09IDFcIiBAb25NYXRjaEV2ZW50U2V0SW5kZXhDYj1cIm9uTWF0Y2hFdmVudFNldEluZGV4Q2JcIiAvPlxuICAgICAgICA8L0ZsZXhCb3hMYXlvdXQ+XG4gICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgICAgPFRhYkNvbnRlbnRJdGVtIGNsYXNzPVwibnQtdGFiLWNvbnRlbnRfX2l0ZW1cIj5cbiAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgIDxBY2NvdW50IC8+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgIDwvQm90dG9tTmF2aWdhdGlvbj5cbiAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuLyogYm90dG9tLW5hdmlnYXRpb24gKi9cbi50YWJzdHJpcGl0ZW0ge1xuICAuaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuVGFiU3RyaXBJdGVtLnRhYnN0cmlwaXRlbTphY3RpdmUge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udC0xNiB7XG4gIGZvbnQtc2l6ZTogMTY7XG59XG4vKiBib3R0b20gbmF2IGJhciAqL1xuLm5hdiB7XG4gIGhlaWdodDogNTA7XG59XG48L3N0eWxlPlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJudC1wYWdlXCIsXG4gICAgICBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwidHJ1ZVwiIH0sXG4gICAgICBvbjogeyBsb2FkZWQ6IF92bS5oYW5kbGVPblBhZ2VMb2FkZWQgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQm90dG9tTmF2aWdhdGlvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibnQtYm90dG9tLW5hdmlnYXRpb25cIixcbiAgICAgICAgICBhdHRyczogeyBpZDogXCJib3R0b25OYXZpZ2F0aW9uXCIsIFwic2VsZWN0ZWQtaW5kZXhcIjogXCIwXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlRhYlN0cmlwXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm50LXRhYi1zdHJpcFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ0YWJTdHJpcFwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5vblRhYkl0ZW1UYXAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJUYWJTdHJpcEl0ZW1cIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYnN0cmlwaXRlbSBudC10YWItc3RyaXBfX2l0ZW1cIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoaWRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZmEtaG9tZS5zdmdcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmFzIHQtMTYgbnQtbGFiZWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgdC0xNiAgbnQtaWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1ob21lXCIpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiU3RyaXBJdGVtXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFic3RyaXBpdGVtIG50LXRhYi1zdHJpcF9faXRlbVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibWF0Y2hlc1RhYlwiLCBuYW1lOiBcIm1hdGNoZXNcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGlkZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2ZhLWhvbWUuc3ZnXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZhcyB0LTE2IG50LWxhYmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIHQtMTYgIG50LWljb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1iYXNlYmFsbC1iYWxsXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ub3RSZXNwb25kZWRNYXRjaENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0ubm90UmVzcG9uZGVkTWF0Y2hDb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFuZHJvaWQ6c3R5bGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplOjI1O21hcmdpbi10b3A6LTE1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpb3M6c3R5bGVcIjogXCJmb250LXNpemU6MzA7bWFyZ2luLXRvcDotMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiU3RyaXBJdGVtXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWJzdHJpcGl0ZW0gbnQtdGFiLXN0cmlwX19pdGVtXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGlkZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2ZhLWhvbWUuc3ZnXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgdC0xNiBudC1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLXVzZXItY2lyY2xlXCIpIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiVGFiQ29udGVudEl0ZW1cIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibnQtdGFiLWNvbnRlbnRfX2l0ZW1cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uc3RhdGUuaXRlbS5pbmRleCA9PT0gMFxuICAgICAgICAgICAgICAgID8gX2MoXCJIb21lXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBvbkhvbWVFdmVudFNldEluZGV4Q2I6IF92bS5vbkhvbWVFdmVudFNldEluZGV4Q2IsXG4gICAgICAgICAgICAgICAgICAgICAgb25NYXRjaEV2ZW50U2V0SW5kZXhDYjogX3ZtLm9uTWF0Y2hFdmVudFNldEluZGV4Q2JcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlRhYkNvbnRlbnRJdGVtXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm50LXRhYi1jb250ZW50X19pdGVtXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJGbGV4Qm94TGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBmbGV4R3JvdzogXCIxXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5zdGF0ZS5pdGVtLmluZGV4ID09PSAxXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJNYXRjaGVzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uTWF0Y2hFdmVudFNldEluZGV4Q2I6IF92bS5vbk1hdGNoRXZlbnRTZXRJbmRleENiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlRhYkNvbnRlbnRJdGVtXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm50LXRhYi1jb250ZW50X19pdGVtXCIgfSxcbiAgICAgICAgICAgIFtfYyhcIlN0YWNrTGF5b3V0XCIsIFtfYyhcIkFjY291bnRcIildLCAxKV0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgVnVlRGV2dG9vbHMgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZS1kZXZ0b29scydcbmltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSdcbmltcG9ydCBSYWRMaXN0VmlldyBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvdnVlJ1xuaW1wb3J0IHsgTW9kYWxTdGFjaywgb3ZlcnJpZGVNb2RhbFZpZXdNZXRob2QsIFZ1ZVdpbmRvd2VkTW9kYWwgfSBmcm9tICduYXRpdmVzY3JpcHQtd2luZG93ZWQtbW9kYWwnXG5pbXBvcnQgRGF0ZVRpbWVQaWNrZXIgZnJvbSAnbmF0aXZlc2NyaXB0LWRhdGV0aW1lcGlja2VyL3Z1ZSdcbmltcG9ydCBSYWREYXRhRm9ybSBmcm9tICduYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vdnVlJ1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgeyBUTlNGb250SWNvbiwgZm9udGljb24gfSBmcm9tICduYXRpdmVzY3JpcHQtZm9udGljb24nXG4vLyBUTlNGb250SWNvbi5kZWJ1ZyA9IHRydWVcblROU0ZvbnRJY29uLnBhdGhzID0ge1xuICBmYTogJy4vYXNzZXRzL2ZvbnRhd2Vzb21lLmNzcycsXG59XG5UTlNGb250SWNvbi5sb2FkQ3NzKClcblxuVnVlLmZpbHRlcignZm9udGljb24nLCBmb250aWNvbilcblZ1ZS51c2UoVnVlRGV2dG9vbHMpXG5WdWUudXNlKFJhZExpc3RWaWV3KVxuVnVlLnVzZShSYWREYXRhRm9ybSlcbi8vIEB0cy1pZ25vcmVcblZ1ZS51c2UoRGF0ZVRpbWVQaWNrZXIpXG5cbmltcG9ydCB7IGNyYXNobHl0aWNzIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSdcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJ1xuaW1wb3J0IHsgZ2V0U3RyaW5nIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncydcbmltcG9ydCBUaGVtZSBmcm9tICdAbmF0aXZlc2NyaXB0L3RoZW1lJ1xuaW1wb3J0IExvZ2luIGZyb20gJy4vdmlld3MvTG9naW4udnVlJ1xuaW1wb3J0IEluZGV4IGZyb20gJy4vdmlld3MvSW5kZXgudnVlJ1xuXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcblRoZW1lLnNldE1vZGUoVGhlbWUuTGlnaHQpIC8vIE9yIFRoZW1lLkxpZ2h0XG5cbmlmIChpc0FuZHJvaWQpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGNyYXNobHl0aWNzLnNlbmRDcmFzaExvZyhuZXcgamF2YS5sYW5nLkV4Y2VwdGlvbignQ3Jhc2ggRXhjZXB0aW9uJykpXG59IGVsc2UgaWYgKGlzSU9TKSB7XG4gIGNyYXNobHl0aWNzLnNlbmRDcmFzaExvZyhcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgbmV3IE5TRXJyb3Ioe1xuICAgICAgZG9tYWluOiAnU2hpcGxvb3BIdHRwUmVzcG9uc2VFcnJvckRvbWFpbicsXG4gICAgICBjb2RlOiA0MixcbiAgICAgIHVzZXJJbmZvOiBudWxsLFxuICAgIH0pXG4gIClcbn1cbmZpcmViYXNlXG4gIC5pbml0KHtcbiAgICAvLyBPcHRpb25hbGx5IHBhc3MgaW4gcHJvcGVydGllcyBmb3IgZGF0YWJhc2UsIGF1dGhlbnRpY2F0aW9uIGFuZCBjbG91ZCBtZXNzYWdpbmcsXG4gICAgLy8gc2VlIHRoZWlyIHJlc3BlY3RpdmUgZG9jcy5cbiAgICBjcmFzaGx5dGljc0NvbGxlY3Rpb25FbmFibGVkOiB0cnVlLFxuICAgIG9uRHluYW1pY0xpbmtDYWxsYmFjazogZnVuY3Rpb24ocmVzdWx0OiBhbnkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEeW5hbWljIGxpbmsgOjogJyArIHJlc3VsdC51cmwpXG4gICAgICBzdG9yZS5kaXNwYXRjaCgnYXV0aGVudGljYXRpb25Nb2R1bGUvc2V0Q3JlYXRlUGFzc3dvcmRQYWdlJylcbiAgICB9LFxuICAgIHNob3dOb3RpZmljYXRpb25zV2hlbkluRm9yZWdyb3VuZDogdHJ1ZSxcbiAgICBvbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrOiAobWVzc2FnZTogZmlyZWJhc2UuTWVzc2FnZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYFRpdGxlIDo6ICR7bWVzc2FnZS50aXRsZX1gKVxuICAgICAgY29uc29sZS5sb2coYEJvZHkgOjogJHttZXNzYWdlLmJvZHl9YClcbiAgICB9LFxuICAgIG9uUHVzaFRva2VuUmVjZWl2ZWRDYWxsYmFjazogZnVuY3Rpb24odG9rZW46IHN0cmluZykge1xuICAgICAgY29uc29sZS5sb2coJ0ZpcmViYXNlIHB1c2ggdG9rZW4gOjogJyArIHRva2VuKVxuICAgIH0sXG4gIH0pXG4gIC50aGVuKFxuICAgICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdmaXJlYmFzZS5pbml0IDo6IGRvbmUnKVxuICAgIH0sXG4gICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yIDo6ICR7ZXJyb3J9YClcbiAgICB9XG4gIClcbi8vIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICBmaXJlYmFzZS5hZG1vYlxuLy8gICAgIC5zaG93QmFubmVyKHtcbi8vICAgICAgIHNpemU6IGZpcmViYXNlLmFkbW9iLkFEX1NJWkUuU01BUlRfQkFOTkVSLCAvLyBzZWUgZmlyZWJhc2UuYWRtb2IuQURfU0laRSBmb3IgYWxsIG9wdGlvbnNcbi8vICAgICAgIG1hcmdpbnM6IHtcbi8vICAgICAgICAgLy8gb3B0aW9uYWwgbnIgb2YgZGV2aWNlIGluZGVwZW5kZW50IHBpeGVscyBmcm9tIHRoZSB0b3Agb3IgYm90dG9tIChkb24ndCBzZXQgYm90aClcbi8vICAgICAgICAgYm90dG9tOiAxMCxcbi8vICAgICAgICAgdG9wOiAtMSxcbi8vICAgICAgIH0sXG4vLyAgICAgICBhbmRyb2lkQmFubmVySWQ6ICdjYS1hcHAtcHViLTk3OTExNzk5MTA3NzU1NjEvNzQ1OTYyNjczMycsXG4vLyAgICAgICBpb3NCYW5uZXJJZDogJ2NhLWFwcC1wdWItOTc5MTE3OTkxMDc3NTU2MS83NDU5NjI2NzMzJyxcbi8vICAgICAgIHRlc3Rpbmc6IHRydWUsIC8vIHdoZW4gbm90IHJ1bm5pbmcgaW4gcHJvZHVjdGlvbiBzZXQgdGhpcyB0byB0cnVlLCBHb29nbGUgZG9lc24ndCBsaWtlIGl0IGFueSBvdGhlciB3YXlcbi8vICAgICAgIGlvc1Rlc3REZXZpY2VJZHM6IFtcbi8vICAgICAgICAgLy9BbmRyb2lkIGF1dG9tYXRpY2FsbHkgYWRkcyB0aGUgY29ubmVjdGVkIGRldmljZSBhcyB0ZXN0IGRldmljZSB3aXRoIHRlc3Rpbmc6dHJ1ZSwgaU9TIGRvZXMgbm90XG4vLyAgICAgICAgICc0NWQ3N2JmNTEzZGZhYmMyOTQ5YmEwNTNkYTgzYzBjN2I3ZTg3NzE1JywgLy8gRWRkeSdzIGlQaG9uZSA2c1xuLy8gICAgICAgICAnZmVlNGNmMzE5YTI0MmVhYjQ3MDE1NDNlNGMxNmRiODljNzIyNzMxZicsIC8vIEVkZHkncyBpUGFkIFByb1xuLy8gICAgICAgXSxcbi8vICAgICAgIGtleXdvcmRzOiBbJ2NyaWNrZXQnLCAnbG9uZG9uJ10sIC8vIGFkZCBrZXl3b3JkcyBmb3IgYWQgdGFyZ2V0aW5nXG4vLyAgICAgICBvbk9wZW5lZDogKCkgPT4gY29uc29sZS5sb2coJ0FkIG9wZW5lZCcpLFxuLy8gICAgICAgb25DbGlja2VkOiAoKSA9PiBjb25zb2xlLmxvZygnQWQgY2xpY2tlZCcpLFxuLy8gICAgICAgb25MZWZ0QXBwbGljYXRpb246ICgpID0+IGNvbnNvbGUubG9nKCdBZCBsZWZ0IGFwcGxpY2F0aW9uJyksXG4vLyAgICAgfSlcbi8vICAgICAudGhlbihcbi8vICAgICAgIGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnQWRNb2IgYmFubmVyIHN0YXR1cyA6OiBTaG93aW5nJylcbi8vICAgICAgIH0sXG4vLyAgICAgICBmdW5jdGlvbihlcnJvck1lc3NhZ2U6IGFueSkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpXG4vLyAgICAgICB9XG4vLyAgICAgKVxuLy8gfSwgNTAwMClcblxuLy8gUHJpbnRzIFZ1ZSBsb2dzIHdoZW4gLS1lbnYucHJvZHVjdGlvbiBpcyAqTk9UKiBzZXQgd2hpbGUgYnVpbGRpbmdcblZ1ZS5jb25maWcuc2lsZW50ID0gVE5TX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG5cbm92ZXJyaWRlTW9kYWxWaWV3TWV0aG9kKClcblZ1ZS5yZWdpc3RlckVsZW1lbnQoJ1JhZFNpZGVEcmF3ZXInLCAoKSA9PiByZXF1aXJlKCduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcicpLlJhZFNpZGVEcmF3ZXIpXG5WdWUucmVnaXN0ZXJFbGVtZW50KCdDYXJkVmlldycsICgpID0+IHJlcXVpcmUoJ0Buc3R1ZGlvL25hdGl2ZXNjcmlwdC1jYXJkdmlldycpLkNhcmRWaWV3KVxuVnVlLnJlZ2lzdGVyRWxlbWVudCgnTW9kYWxTdGFjaycsICgpID0+IE1vZGFsU3RhY2spXG5WdWUudXNlKFZ1ZVdpbmRvd2VkTW9kYWwpXG5cbmxldCBhcHAgPSBMb2dpblxuXG5pZiAoZ2V0U3RyaW5nKCdjYW1lbHMtdG9rZW4nKSkge1xuICBjb25zb2xlLmxvZyhgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXRva2VuIGV4aXN0cyA6OiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1gKVxuICBzdG9yZS5kaXNwYXRjaCgnYXV0aGVudGljYXRpb25Nb2R1bGUvc2V0QXV0aFRva2VuJywge1xuICAgIHRva2VuOiBnZXRTdHJpbmcoJ2NhbWVscy10b2tlbicpLFxuICB9KVxuICBhcHAgPSBJbmRleFxufVxuXG5uZXcgVnVlKHtcbiAgc3RvcmUsXG4gIHJlbmRlcjogaCA9PiBoKCdGcmFtZScsIFtoKGFwcCldKSxcbn0pLiRzdGFydCgpXG4iXSwic291cmNlUm9vdCI6IiJ9