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
        count: 0,
        renderKey: 0
      }
    };
  },

  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    userContext: state => state.authenticationModule.userContext,

    loading() {
      return this.state.loading;
    },

    notRespondedMatchCount() {
      return this.state.renderKey++;
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
      console.log("count ---- ".concat(this.notRespondedMatchCount));
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
                  key: _vm.notRespondedMatchCount,
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
                          _vm.state.count
                            ? _c("Span", {
                                staticClass: "fas",
                                attrs: {
                                  text: _vm.state.count,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3ZpZXdzL0luZGV4LnZ1ZT84NGI5Iiwid2VicGFjazovLy8uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsZUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FGQTtBQUdBLFdBSEE7O0FBSUE7QUFDQTtBQUNBO0FBQ0EscUJBREE7QUFFQTtBQUNBO0FBREEsU0FGQTtBQUtBLGdCQUxBO0FBTUE7QUFOQTtBQURBO0FBVUEsR0FmQTs7QUFnQkE7QUFDQSxnRUFEQTs7QUFFQTtBQUNBO0FBQ0EsS0FKQTs7QUFNQTtBQUNBO0FBQ0E7O0FBUkEsSUFoQkE7QUEwQkE7QUFDQTtBQUNBLEdBNUJBO0FBNkJBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUNBLFNBTkE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQSxLQVRBO0FBVUEsR0F4Q0E7QUF5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsR0E5Q0E7QUFnREEsNkJBQ0E7QUFDQTtBQURBLElBREE7QUFJQTtBQUNBO0FBQ0EsS0FOQTs7QUFPQTtBQUFBOztBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQVJBO0FBU0EsS0FoQkE7O0FBaUJBO0FBQUE7O0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFSQTtBQVNBLEtBMUJBOztBQTJCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxLQTdCQTs7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QUFDckUsU0FBUztBQUNULGFBQWE7QUFDYixxQkFBcUI7QUFDckIsd0RBQXdEO0FBQ3hELE1BQVc7QUFDWCxzQ0FBc0M7QUFDdEMsb0NBQW9DO0FBQ3BDLFVBQVU7QUFDVixRQUFRO0FBQ1IsTUFBVztBQUVYLG1EQUFvRTtBQUNwRSwwQkFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxLQUFpQjtBQUU1QyxNQUF5QjtBQUN6QixFQUErRjtBQUMvRix1QkFBeUY7QUFDekYsMEJBQUcsQ0FBQyxjQUErQztBQUNuRCxxQkFBeUI7QUFFekIsSUFBSSxHQUFHLEdBQUcsbUJBQUs7QUFFZixHQUErQjtJQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQXNGO0lBQ2xHLGVBQW9EO1FBQ2xELEtBQUssRUFBRSxLQUF5QjtLQUNqQyxDQUFDO0lBQ0YsR0FBRyxHQUFHLFNBQUs7Q0FDWjtBQUVELElBQUksa0JBQUk7SUFDTixLQUFLO0lBQ0wsTUFBTSxDQUEyQjtDQUNsQyxDQUFDLENBQUMsTUFBTSxFQUFFIiwiZmlsZSI6ImJ1bmRsZS5iMDQyYWI3MjZkZjQzNjM2MDU1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbnZhciBnZXRWaWV3QnlJZCA9IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3JykuZ2V0Vmlld0J5SWRcbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luLnZ1ZSdcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZS52dWUnXG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL0FjY291bnQudnVlJ1xuaW1wb3J0IE1hdGNoZXMgZnJvbSAnLi9NYXRjaGVzLnZ1ZSdcbmltcG9ydCB7IGNoZWNrSWZUb2tlbklzVmFsaWQgfSBmcm9tICcuLi9fc2hhcmVkL2ZpcmViYXNlL3VzZXJzJ1xuaW1wb3J0IHsgZ2V0VW5yZWFkTWF0Y2hDb3VudCB9IGZyb20gJy4uL19zaGFyZWQvZmlyZWJhc2UvaG9tZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnSW5kZXgnLFxuICBjb21wb25lbnRzOiB7IEhvbWUsIEFjY291bnQsIE1hdGNoZXMgfSxcbiAgcHJvcHM6IHt9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGNvdW50OiAwLFxuICAgICAgICByZW5kZXJLZXk6IDAsXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcbiAgICB1c2VyQ29udGV4dDogc3RhdGUgPT4gc3RhdGUuYXV0aGVudGljYXRpb25Nb2R1bGUudXNlckNvbnRleHQsXG4gICAgbG9hZGluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmdcbiAgICB9LFxuXG4gICAgbm90UmVzcG9uZGVkTWF0Y2hDb3VudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnJlbmRlcktleSsrXG4gICAgfSxcbiAgfSksXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKGBJbmRleCA6OiBDcmVhdGVkYClcbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhgSW5kZXggOjogbW91bnRlZGApXG4gICAgICB0aGlzLmNoZWNrQXV0aGVudGljYXRpb24oKS50aGVuKGFzeW5jIHJlc3VsdCA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAxKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5nZXRVbnJlYWRNYXRjaENvdW50KClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcbiAgdXBkYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhgY291bnQgLS0tLSAke3RoaXMubm90UmVzcG9uZGVkTWF0Y2hDb3VudH1gKVxuICAgICAgY29uc29sZS5sb2coYEluZGV4IDo6IHVwZGF0ZWRgKVxuICAgIH0pXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoJ2F1dGhlbnRpY2F0aW9uTW9kdWxlJywge1xuICAgICAgc2V0R2xvYmFsTG9naW5TdGF0ZTogJ3NpZ25lZEluJyxcbiAgICB9KSxcbiAgICByZWRpcmVjdFRvTG9naW4oKSB7XG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luKVxuICAgIH0sXG4gICAgYXN5bmMgY2hlY2tBdXRoZW50aWNhdGlvbigpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNoZWNrSWZUb2tlbklzVmFsaWQoKVxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuaXNFcnJvcikge1xuICAgICAgICB0aGlzLnJlZGlyZWN0VG9Mb2dpbigpXG4gICAgICB9XG4gICAgICBjb25zdCB7IHVpZCwgcm9sZSB9ID0gcmVzdWx0Lmpzb24udXNlclxuICAgICAgdGhpcy5zZXRHbG9iYWxMb2dpblN0YXRlKHsgdWlkLCByb2xlLCBsb2dnZWRJbjogdHJ1ZSwgdG9rZW46IHRoaXMudXNlckNvbnRleHQudG9rZW4gfSlcbiAgICAgIHJldHVybiB7IHN0YXR1czogMSB9XG4gICAgfSxcbiAgICBhc3luYyBnZXRVbnJlYWRNYXRjaENvdW50KCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0VW5yZWFkTWF0Y2hDb3VudCh0aGlzLnVzZXJDb250ZXh0LnVpZClcbiAgICAgIGlmIChyZXN1bHQgJiYgIXJlc3VsdC5pc0Vycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAtLS0tLS0tLS0tLS0tYClcbiAgICAgICAgY29uc29sZS5sb2coYHVucmVhZCBjb3VudCBkZXRhaWxzYClcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0Lmpzb24pKVxuICAgICAgICBjb25zb2xlLmxvZyhgLS0tLS0tLS0tLS0tLS0tLWApXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGNvdW50OiByZXN1bHQuanNvbi5jb3VudCB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvblRhYkl0ZW1UYXAoZXZlbnQpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGl0ZW06IHsgaW5kZXg6IGV2ZW50LmluZGV4IH0gfVxuICAgIH0sXG4gICAgaGFuZGxlT25QYWdlTG9hZGVkKGFyZ3MpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIHBhcmVudE9iamVjdDogYXJncy5vYmplY3QgfVxuICAgIH0sXG4gICAgb25Ib21lRXZlbnRTZXRJbmRleENiKGluZGV4KSB7XG4gICAgICBjb25zdCBib3R0b25OYXZpZ2F0aW9uID0gZ2V0Vmlld0J5SWQodGhpcy5zdGF0ZS5wYXJlbnRPYmplY3QsICdib3R0b25OYXZpZ2F0aW9uJylcbiAgICAgIGJvdHRvbk5hdmlnYXRpb24uc2VsZWN0ZWRJbmRleCA9IGluZGV4XG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBpdGVtOiB7IGluZGV4IH0gfVxuICAgIH0sXG4gICAgb25NYXRjaEV2ZW50U2V0SW5kZXhDYihpbmRleCkge1xuICAgICAgdGhpcy5nZXRVbnJlYWRNYXRjaENvdW50KClcbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPFBhZ2UgQGxvYWRlZD1cImhhbmRsZU9uUGFnZUxvYWRlZFwiIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIiBjbGFzcz1cIm50LXBhZ2VcIj5cbiAgICA8Qm90dG9tTmF2aWdhdGlvbiBpZD1cImJvdHRvbk5hdmlnYXRpb25cIiBzZWxlY3RlZC1pbmRleD1cIjBcIiBjbGFzcz1cIm50LWJvdHRvbS1uYXZpZ2F0aW9uXCI+XG4gICAgICA8IS0tIFRoZSBib3R0b20gdGFiIFVJIGlzIGNyZWF0ZWQgdmlhIFRhYlN0cmlwICh0aGUgY29udGFpbmllcikgYW5kIFRhYlN0cmlwSXRlbSAoZm9yIGVhY2ggdGFiKS0tPlxuICAgICAgPFRhYlN0cmlwIGlkPVwidGFiU3RyaXBcIiBAaXRlbVRhcD1cIm9uVGFiSXRlbVRhcFwiIGNsYXNzPVwibnQtdGFiLXN0cmlwXCI+XG4gICAgICAgIDxUYWJTdHJpcEl0ZW0gY2xhc3M9XCJ0YWJzdHJpcGl0ZW0gbnQtdGFiLXN0cmlwX19pdGVtXCI+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9mYS1ob21lLnN2Z1wiIGNsYXNzPVwiaGlkZVwiPjwvSW1hZ2U+XG5cbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJmYXMgdC0xNiBudC1sYWJlbFwiPlxuICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYXMgdC0xNiAgbnQtaWNvblwiPiB7eyAnZmEtaG9tZScgfCBmb250aWNvbiB9fTwvU3Bhbj5cbiAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPjwvTGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICA8VGFiU3RyaXBJdGVtXG4gICAgICAgICAgaWQ9XCJtYXRjaGVzVGFiXCJcbiAgICAgICAgICA6a2V5PVwibm90UmVzcG9uZGVkTWF0Y2hDb3VudFwiXG4gICAgICAgICAgbmFtZT1cIm1hdGNoZXNcIlxuICAgICAgICAgIGNsYXNzPVwidGFic3RyaXBpdGVtIG50LXRhYi1zdHJpcF9faXRlbVwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwifi9hc3NldHMvaW1hZ2VzL2ZhLWhvbWUuc3ZnXCIgY2xhc3M9XCJoaWRlXCI+PC9JbWFnZT5cbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJmYXMgdC0xNiBudC1sYWJlbFwiPlxuICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XCJmYXMgdC0xNiAgbnQtaWNvblwiPiB7eyAnZmEtYmFzZWJhbGwtYmFsbCcgfCBmb250aWNvbiB9fTwvU3Bhbj5cbiAgICAgICAgICAgICAgPFNwYW5cbiAgICAgICAgICAgICAgICB2LWlmPVwic3RhdGUuY291bnRcIlxuICAgICAgICAgICAgICAgIDp0ZXh0PVwic3RhdGUuY291bnRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgICBhbmRyb2lkOnN0eWxlPVwiZm9udC1zaXplOjI1O21hcmdpbi10b3A6LTE1XCJcbiAgICAgICAgICAgICAgICBpb3M6c3R5bGU9XCJmb250LXNpemU6MzA7bWFyZ2luLXRvcDotMTVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZmFzXCJcbiAgICAgICAgICAgICAgLz4gPC9Gb3JtYXR0ZWRTdHJpbmdcbiAgICAgICAgICA+PC9MYWJlbD5cbiAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgIDxUYWJTdHJpcEl0ZW0gY2xhc3M9XCJ0YWJzdHJpcGl0ZW0gbnQtdGFiLXN0cmlwX19pdGVtXCI+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9mYS1ob21lLnN2Z1wiIGNsYXNzPVwiaGlkZVwiPjwvSW1hZ2U+XG4gICAgICAgICAgPExhYmVsIDp0ZXh0PVwiJ2ZhLXVzZXItY2lyY2xlJyB8IGZvbnRpY29uXCIgY2xhc3M9XCJmYSB0LTE2IG50LWxhYmVsXCIgLz5cbiAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICA8L1RhYlN0cmlwPlxuXG4gICAgICA8IS0tIFRoZSBudW1iZXIgb2YgVGFiQ29udGVudEl0ZW0gY29tcG9uZW50cyBzaG91bGQgY29yZXNwb25kIHRvIHRoZSBudW1iZXIgb2YgVGFiU3RyaXBJdGVtIGNvbXBvbmVudHMgLS0+XG4gICAgICA8VGFiQ29udGVudEl0ZW0gY2xhc3M9XCJudC10YWItY29udGVudF9faXRlbVwiPlxuICAgICAgICA8SG9tZVxuICAgICAgICAgIHYtaWY9XCJzdGF0ZS5pdGVtLmluZGV4ID09PSAwXCJcbiAgICAgICAgICBAb25Ib21lRXZlbnRTZXRJbmRleENiPVwib25Ib21lRXZlbnRTZXRJbmRleENiXCJcbiAgICAgICAgICBAb25NYXRjaEV2ZW50U2V0SW5kZXhDYj1cIm9uTWF0Y2hFdmVudFNldEluZGV4Q2JcIlxuICAgICAgICAvPlxuICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICAgIDxUYWJDb250ZW50SXRlbSBjbGFzcz1cIm50LXRhYi1jb250ZW50X19pdGVtXCI+XG4gICAgICAgIDxGbGV4Qm94TGF5b3V0IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBmbGV4R3Jvdz1cIjFcIj5cbiAgICAgICAgICA8TWF0Y2hlcyB2LWlmPVwic3RhdGUuaXRlbS5pbmRleCA9PT0gMVwiIEBvbk1hdGNoRXZlbnRTZXRJbmRleENiPVwib25NYXRjaEV2ZW50U2V0SW5kZXhDYlwiIC8+XG4gICAgICAgIDwvRmxleEJveExheW91dD5cbiAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG4gICAgICA8VGFiQ29udGVudEl0ZW0gY2xhc3M9XCJudC10YWItY29udGVudF9faXRlbVwiPlxuICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgPEFjY291bnQgLz5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG4gICAgPC9Cb3R0b21OYXZpZ2F0aW9uPlxuICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4vKiBib3R0b20tbmF2aWdhdGlvbiAqL1xuLnRhYnN0cmlwaXRlbSB7XG4gIC5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5UYWJTdHJpcEl0ZW0udGFic3RyaXBpdGVtOmFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50LTE2IHtcbiAgZm9udC1zaXplOiAxNjtcbn1cbi8qIGJvdHRvbSBuYXYgYmFyICovXG4ubmF2IHtcbiAgaGVpZ2h0OiA1MDtcbn1cbjwvc3R5bGU+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm50LXBhZ2VcIixcbiAgICAgIGF0dHJzOiB7IGFjdGlvbkJhckhpZGRlbjogXCJ0cnVlXCIgfSxcbiAgICAgIG9uOiB7IGxvYWRlZDogX3ZtLmhhbmRsZU9uUGFnZUxvYWRlZCB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJCb3R0b21OYXZpZ2F0aW9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJudC1ib3R0b20tbmF2aWdhdGlvblwiLFxuICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImJvdHRvbk5hdmlnYXRpb25cIiwgXCJzZWxlY3RlZC1pbmRleFwiOiBcIjBcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiVGFiU3RyaXBcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibnQtdGFiLXN0cmlwXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInRhYlN0cmlwXCIgfSxcbiAgICAgICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLm9uVGFiSXRlbVRhcCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlRhYlN0cmlwSXRlbVwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFic3RyaXBpdGVtIG50LXRhYi1zdHJpcF9faXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mYS1ob21lLnN2Z1wiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmYXMgdC0xNiBudC1sYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyB0LTE2ICBudC1pY29uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uX2YoXCJmb250aWNvblwiKShcImZhLWhvbWVcIikpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJUYWJTdHJpcEl0ZW1cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IF92bS5ub3RSZXNwb25kZWRNYXRjaENvdW50LFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFic3RyaXBpdGVtIG50LXRhYi1zdHJpcF9faXRlbVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibWF0Y2hlc1RhYlwiLCBuYW1lOiBcIm1hdGNoZXNcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGlkZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2ZhLWhvbWUuc3ZnXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZhcyB0LTE2IG50LWxhYmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIHQtMTYgIG50LWljb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1iYXNlYmFsbC1iYWxsXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zdGF0ZS5jb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnN0YXRlLmNvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5kcm9pZDpzdHlsZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemU6MjU7bWFyZ2luLXRvcDotMTVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlvczpzdHlsZVwiOiBcImZvbnQtc2l6ZTozMDttYXJnaW4tdG9wOi0xNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJUYWJTdHJpcEl0ZW1cIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYnN0cmlwaXRlbSBudC10YWItc3RyaXBfX2l0ZW1cIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoaWRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZmEtaG9tZS5zdmdcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSB0LTE2IG50LWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtdXNlci1jaXJjbGVcIikgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJUYWJDb250ZW50SXRlbVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJudC10YWItY29udGVudF9faXRlbVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5zdGF0ZS5pdGVtLmluZGV4ID09PSAwXG4gICAgICAgICAgICAgICAgPyBfYyhcIkhvbWVcIiwge1xuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIG9uSG9tZUV2ZW50U2V0SW5kZXhDYjogX3ZtLm9uSG9tZUV2ZW50U2V0SW5kZXhDYixcbiAgICAgICAgICAgICAgICAgICAgICBvbk1hdGNoRXZlbnRTZXRJbmRleENiOiBfdm0ub25NYXRjaEV2ZW50U2V0SW5kZXhDYlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiVGFiQ29udGVudEl0ZW1cIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibnQtdGFiLWNvbnRlbnRfX2l0ZW1cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkZsZXhCb3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGZsZXhHcm93OiBcIjFcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLnN0YXRlLml0ZW0uaW5kZXggPT09IDFcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcIk1hdGNoZXNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25NYXRjaEV2ZW50U2V0SW5kZXhDYjogX3ZtLm9uTWF0Y2hFdmVudFNldEluZGV4Q2JcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiVGFiQ29udGVudEl0ZW1cIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibnQtdGFiLWNvbnRlbnRfX2l0ZW1cIiB9LFxuICAgICAgICAgICAgW19jKFwiU3RhY2tMYXlvdXRcIiwgW19jKFwiQWNjb3VudFwiKV0sIDEpXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBWdWVEZXZ0b29scyBmcm9tICduYXRpdmVzY3JpcHQtdnVlLWRldnRvb2xzJ1xuaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJ1xuaW1wb3J0IFJhZExpc3RWaWV3IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldy92dWUnXG5pbXBvcnQgeyBNb2RhbFN0YWNrLCBvdmVycmlkZU1vZGFsVmlld01ldGhvZCwgVnVlV2luZG93ZWRNb2RhbCB9IGZyb20gJ25hdGl2ZXNjcmlwdC13aW5kb3dlZC1tb2RhbCdcbmltcG9ydCBEYXRlVGltZVBpY2tlciBmcm9tICduYXRpdmVzY3JpcHQtZGF0ZXRpbWVwaWNrZXIvdnVlJ1xuaW1wb3J0IFJhZERhdGFGb3JtIGZyb20gJ25hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS92dWUnXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSdcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IFROU0ZvbnRJY29uLCBmb250aWNvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1mb250aWNvbidcbi8vIFROU0ZvbnRJY29uLmRlYnVnID0gdHJ1ZVxuVE5TRm9udEljb24ucGF0aHMgPSB7XG4gIGZhOiAnLi9hc3NldHMvZm9udGF3ZXNvbWUuY3NzJyxcbn1cblROU0ZvbnRJY29uLmxvYWRDc3MoKVxuXG5WdWUuZmlsdGVyKCdmb250aWNvbicsIGZvbnRpY29uKVxuVnVlLnVzZShWdWVEZXZ0b29scylcblZ1ZS51c2UoUmFkTGlzdFZpZXcpXG5WdWUudXNlKFJhZERhdGFGb3JtKVxuLy8gQHRzLWlnbm9yZVxuVnVlLnVzZShEYXRlVGltZVBpY2tlcilcblxuaW1wb3J0IHsgY3Jhc2hseXRpY3MgfSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJ1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nXG5pbXBvcnQgeyBnZXRTdHJpbmcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJ1xuaW1wb3J0IFRoZW1lIGZyb20gJ0BuYXRpdmVzY3JpcHQvdGhlbWUnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi92aWV3cy9Mb2dpbi52dWUnXG5pbXBvcnQgSW5kZXggZnJvbSAnLi92aWV3cy9JbmRleC52dWUnXG5cbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xuVGhlbWUuc2V0TW9kZShUaGVtZS5MaWdodCkgLy8gT3IgVGhlbWUuTGlnaHRcblxuaWYgKGlzQW5kcm9pZCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgY3Jhc2hseXRpY3Muc2VuZENyYXNoTG9nKG5ldyBqYXZhLmxhbmcuRXhjZXB0aW9uKCdDcmFzaCBFeGNlcHRpb24nKSlcbn0gZWxzZSBpZiAoaXNJT1MpIHtcbiAgY3Jhc2hseXRpY3Muc2VuZENyYXNoTG9nKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBuZXcgTlNFcnJvcih7XG4gICAgICBkb21haW46ICdTaGlwbG9vcEh0dHBSZXNwb25zZUVycm9yRG9tYWluJyxcbiAgICAgIGNvZGU6IDQyLFxuICAgICAgdXNlckluZm86IG51bGwsXG4gICAgfSlcbiAgKVxufVxuZmlyZWJhc2VcbiAgLmluaXQoe1xuICAgIC8vIE9wdGlvbmFsbHkgcGFzcyBpbiBwcm9wZXJ0aWVzIGZvciBkYXRhYmFzZSwgYXV0aGVudGljYXRpb24gYW5kIGNsb3VkIG1lc3NhZ2luZyxcbiAgICAvLyBzZWUgdGhlaXIgcmVzcGVjdGl2ZSBkb2NzLlxuICAgIGNyYXNobHl0aWNzQ29sbGVjdGlvbkVuYWJsZWQ6IHRydWUsXG4gICAgb25EeW5hbWljTGlua0NhbGxiYWNrOiBmdW5jdGlvbihyZXN1bHQ6IGFueSkge1xuICAgICAgY29uc29sZS5sb2coJ0R5bmFtaWMgbGluayA6OiAnICsgcmVzdWx0LnVybClcbiAgICAgIHN0b3JlLmRpc3BhdGNoKCdhdXRoZW50aWNhdGlvbk1vZHVsZS9zZXRDcmVhdGVQYXNzd29yZFBhZ2UnKVxuICAgIH0sXG4gICAgc2hvd05vdGlmaWNhdGlvbnNXaGVuSW5Gb3JlZ3JvdW5kOiB0cnVlLFxuICAgIG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IChtZXNzYWdlOiBmaXJlYmFzZS5NZXNzYWdlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgVGl0bGUgOjogJHttZXNzYWdlLnRpdGxlfWApXG4gICAgICBjb25zb2xlLmxvZyhgQm9keSA6OiAke21lc3NhZ2UuYm9keX1gKVxuICAgIH0sXG4gICAgb25QdXNoVG9rZW5SZWNlaXZlZENhbGxiYWNrOiBmdW5jdGlvbih0b2tlbjogc3RyaW5nKSB7XG4gICAgICBjb25zb2xlLmxvZygnRmlyZWJhc2UgcHVzaCB0b2tlbiA6OiAnICsgdG9rZW4pXG4gICAgfSxcbiAgfSlcbiAgLnRoZW4oXG4gICAgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2ZpcmViYXNlLmluaXQgOjogZG9uZScpXG4gICAgfSxcbiAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3IgOjogJHtlcnJvcn1gKVxuICAgIH1cbiAgKVxuLy8gc2V0VGltZW91dCgoKSA9PiB7XG4vLyAgIGZpcmViYXNlLmFkbW9iXG4vLyAgICAgLnNob3dCYW5uZXIoe1xuLy8gICAgICAgc2l6ZTogZmlyZWJhc2UuYWRtb2IuQURfU0laRS5TTUFSVF9CQU5ORVIsIC8vIHNlZSBmaXJlYmFzZS5hZG1vYi5BRF9TSVpFIGZvciBhbGwgb3B0aW9uc1xuLy8gICAgICAgbWFyZ2luczoge1xuLy8gICAgICAgICAvLyBvcHRpb25hbCBuciBvZiBkZXZpY2UgaW5kZXBlbmRlbnQgcGl4ZWxzIGZyb20gdGhlIHRvcCBvciBib3R0b20gKGRvbid0IHNldCBib3RoKVxuLy8gICAgICAgICBib3R0b206IDEwLFxuLy8gICAgICAgICB0b3A6IC0xLFxuLy8gICAgICAgfSxcbi8vICAgICAgIGFuZHJvaWRCYW5uZXJJZDogJ2NhLWFwcC1wdWItOTc5MTE3OTkxMDc3NTU2MS83NDU5NjI2NzMzJyxcbi8vICAgICAgIGlvc0Jhbm5lcklkOiAnY2EtYXBwLXB1Yi05NzkxMTc5OTEwNzc1NTYxLzc0NTk2MjY3MzMnLFxuLy8gICAgICAgdGVzdGluZzogdHJ1ZSwgLy8gd2hlbiBub3QgcnVubmluZyBpbiBwcm9kdWN0aW9uIHNldCB0aGlzIHRvIHRydWUsIEdvb2dsZSBkb2Vzbid0IGxpa2UgaXQgYW55IG90aGVyIHdheVxuLy8gICAgICAgaW9zVGVzdERldmljZUlkczogW1xuLy8gICAgICAgICAvL0FuZHJvaWQgYXV0b21hdGljYWxseSBhZGRzIHRoZSBjb25uZWN0ZWQgZGV2aWNlIGFzIHRlc3QgZGV2aWNlIHdpdGggdGVzdGluZzp0cnVlLCBpT1MgZG9lcyBub3Rcbi8vICAgICAgICAgJzQ1ZDc3YmY1MTNkZmFiYzI5NDliYTA1M2RhODNjMGM3YjdlODc3MTUnLCAvLyBFZGR5J3MgaVBob25lIDZzXG4vLyAgICAgICAgICdmZWU0Y2YzMTlhMjQyZWFiNDcwMTU0M2U0YzE2ZGI4OWM3MjI3MzFmJywgLy8gRWRkeSdzIGlQYWQgUHJvXG4vLyAgICAgICBdLFxuLy8gICAgICAga2V5d29yZHM6IFsnY3JpY2tldCcsICdsb25kb24nXSwgLy8gYWRkIGtleXdvcmRzIGZvciBhZCB0YXJnZXRpbmdcbi8vICAgICAgIG9uT3BlbmVkOiAoKSA9PiBjb25zb2xlLmxvZygnQWQgb3BlbmVkJyksXG4vLyAgICAgICBvbkNsaWNrZWQ6ICgpID0+IGNvbnNvbGUubG9nKCdBZCBjbGlja2VkJyksXG4vLyAgICAgICBvbkxlZnRBcHBsaWNhdGlvbjogKCkgPT4gY29uc29sZS5sb2coJ0FkIGxlZnQgYXBwbGljYXRpb24nKSxcbi8vICAgICB9KVxuLy8gICAgIC50aGVuKFxuLy8gICAgICAgZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdBZE1vYiBiYW5uZXIgc3RhdHVzIDo6IFNob3dpbmcnKVxuLy8gICAgICAgfSxcbi8vICAgICAgIGZ1bmN0aW9uKGVycm9yTWVzc2FnZTogYW55KSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSlcbi8vICAgICAgIH1cbi8vICAgICApXG4vLyB9LCA1MDAwKVxuXG4vLyBQcmludHMgVnVlIGxvZ3Mgd2hlbiAtLWVudi5wcm9kdWN0aW9uIGlzICpOT1QqIHNldCB3aGlsZSBidWlsZGluZ1xuVnVlLmNvbmZpZy5zaWxlbnQgPSBUTlNfRU5WID09PSAncHJvZHVjdGlvbidcblxub3ZlcnJpZGVNb2RhbFZpZXdNZXRob2QoKVxuVnVlLnJlZ2lzdGVyRWxlbWVudCgnUmFkU2lkZURyYXdlcicsICgpID0+IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJykuUmFkU2lkZURyYXdlcilcblZ1ZS5yZWdpc3RlckVsZW1lbnQoJ0NhcmRWaWV3JywgKCkgPT4gcmVxdWlyZSgnQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWNhcmR2aWV3JykuQ2FyZFZpZXcpXG5WdWUucmVnaXN0ZXJFbGVtZW50KCdNb2RhbFN0YWNrJywgKCkgPT4gTW9kYWxTdGFjaylcblZ1ZS51c2UoVnVlV2luZG93ZWRNb2RhbClcblxubGV0IGFwcCA9IExvZ2luXG5cbmlmIChnZXRTdHJpbmcoJ2NhbWVscy10b2tlbicpKSB7XG4gIGNvbnNvbGUubG9nKGAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tdG9rZW4gZXhpc3RzIDo6IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWApXG4gIHN0b3JlLmRpc3BhdGNoKCdhdXRoZW50aWNhdGlvbk1vZHVsZS9zZXRBdXRoVG9rZW4nLCB7XG4gICAgdG9rZW46IGdldFN0cmluZygnY2FtZWxzLXRva2VuJyksXG4gIH0pXG4gIGFwcCA9IEluZGV4XG59XG5cbm5ldyBWdWUoe1xuICBzdG9yZSxcbiAgcmVuZGVyOiBoID0+IGgoJ0ZyYW1lJywgW2goYXBwKV0pLFxufSkuJHN0YXJ0KClcbiJdLCJzb3VyY2VSb290IjoiIn0=