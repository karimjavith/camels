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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3ZpZXdzL0luZGV4LnZ1ZT84NGI5Iiwid2VicGFjazovLy8uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsZUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FGQTtBQUdBLFdBSEE7O0FBSUE7QUFDQTtBQUNBO0FBQ0EscUJBREE7QUFFQTtBQUNBO0FBREEsU0FGQTtBQUtBO0FBTEE7QUFEQTtBQVNBLEdBZEE7O0FBZUE7QUFDQSxnRUFEQTs7QUFFQTtBQUNBO0FBQ0EsS0FKQTs7QUFNQTtBQUNBO0FBQ0E7O0FBUkEsSUFmQTtBQXlCQTtBQUNBO0FBQ0EsR0EzQkE7QUE0QkE7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQ0EsU0FOQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BLEtBVEE7QUFVQSxHQXZDQTtBQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxHQTdDQTtBQStDQSw2QkFDQTtBQUNBO0FBREEsSUFEQTtBQUlBO0FBQ0E7QUFDQSxLQU5BOztBQU9BO0FBQUE7O0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBUkE7QUFTQSxLQWhCQTs7QUFpQkE7QUFBQTs7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVJBO0FBU0EsS0ExQkE7O0FBMkJBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLEtBN0JBOztBQThCQTtBQUNBO0FB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Q1QsYUFBYTtBQUNiLHFCQUFxQjtBQUNyQix3REFBd0Q7QUFDeEQsTUFBVztBQUNYLHNDQUFzQztBQUN0QyxvQ0FBb0M7QUFDcEMsVUFBVTtBQUNWLFFBQVE7QUFDUixNQUFXO0FBRVgsbURBQW9FO0FBQ3BFLDBCQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLEtBQWlCO0FBRTVDLE1BQXlCO0FBQ3pCLEVBQStGO0FBQy9GLHVCQUF5RjtBQUN6RiwwQkFBRyxDQUFDLGNBQStDO0FBQ25ELHFCQUF5QjtBQUV6QixJQUFJLEdBQUcsR0FBRyxtQkFBSztBQUVmLEdBQStCO0lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBc0Y7SUFDbEcsZUFBb0Q7UUFDbEQsS0FBSyxFQUFFLEtBQXlCO0tBQ2pDLENBQUM7SUFDRixHQUFHLEdBQUcsU0FBSztDQUNaO0FBRUQsSUFBSSxrQkFBSTtJQUNOLEtBQUs7SUFDTCxNQUFNLENBQTJCO0NBQ2xDLENBQUMsQ0FBQyxNQUFNLEVBQUUiLCJmaWxlIjoiYnVuZGxlLjU5MjliYmI5MDFhNTE2ZmE2YjVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxudmFyIGdldFZpZXdCeUlkID0gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXcnKS5nZXRWaWV3QnlJZFxuaW1wb3J0IHsgbWFwU3RhdGUsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuaW1wb3J0IExvZ2luIGZyb20gJy4vTG9naW4udnVlJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lLnZ1ZSdcbmltcG9ydCBBY2NvdW50IGZyb20gJy4vQWNjb3VudC52dWUnXG5pbXBvcnQgTWF0Y2hlcyBmcm9tICcuL01hdGNoZXMudnVlJ1xuaW1wb3J0IHsgY2hlY2tJZlRva2VuSXNWYWxpZCB9IGZyb20gJy4uL19zaGFyZWQvZmlyZWJhc2UvdXNlcnMnXG5pbXBvcnQgeyBnZXRVbnJlYWRNYXRjaENvdW50IH0gZnJvbSAnLi4vX3NoYXJlZC9maXJlYmFzZS9ob21lJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdJbmRleCcsXG4gIGNvbXBvbmVudHM6IHsgSG9tZSwgQWNjb3VudCwgTWF0Y2hlcyB9LFxuICBwcm9wczoge30sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgfSxcbiAgICAgICAgY291bnQ6IDAsXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcbiAgICB1c2VyQ29udGV4dDogc3RhdGUgPT4gc3RhdGUuYXV0aGVudGljYXRpb25Nb2R1bGUudXNlckNvbnRleHQsXG4gICAgbG9hZGluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmdcbiAgICB9LFxuXG4gICAgbm90UmVzcG9uZGVkTWF0Y2hDb3VudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmNvdW50XG4gICAgfSxcbiAgfSksXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKGBJbmRleCA6OiBDcmVhdGVkYClcbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhgSW5kZXggOjogbW91bnRlZGApXG4gICAgICB0aGlzLmNoZWNrQXV0aGVudGljYXRpb24oKS50aGVuKGFzeW5jIHJlc3VsdCA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAxKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5nZXRVbnJlYWRNYXRjaENvdW50KClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcbiAgdXBkYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhgY291bnQgLS0tLSAke3RoaXMuc3RhdGUuY291bnR9YClcbiAgICAgIGNvbnNvbGUubG9nKGBJbmRleCA6OiB1cGRhdGVkYClcbiAgICB9KVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBBY3Rpb25zKCdhdXRoZW50aWNhdGlvbk1vZHVsZScsIHtcbiAgICAgIHNldEdsb2JhbExvZ2luU3RhdGU6ICdzaWduZWRJbicsXG4gICAgfSksXG4gICAgcmVkaXJlY3RUb0xvZ2luKCkge1xuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhMb2dpbilcbiAgICB9LFxuICAgIGFzeW5jIGNoZWNrQXV0aGVudGljYXRpb24oKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjaGVja0lmVG9rZW5Jc1ZhbGlkKClcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmlzRXJyb3IpIHtcbiAgICAgICAgdGhpcy5yZWRpcmVjdFRvTG9naW4oKVxuICAgICAgfVxuICAgICAgY29uc3QgeyB1aWQsIHJvbGUgfSA9IHJlc3VsdC5qc29uLnVzZXJcbiAgICAgIHRoaXMuc2V0R2xvYmFsTG9naW5TdGF0ZSh7IHVpZCwgcm9sZSwgbG9nZ2VkSW46IHRydWUsIHRva2VuOiB0aGlzLnVzZXJDb250ZXh0LnRva2VuIH0pXG4gICAgICByZXR1cm4geyBzdGF0dXM6IDEgfVxuICAgIH0sXG4gICAgYXN5bmMgZ2V0VW5yZWFkTWF0Y2hDb3VudCgpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFVucmVhZE1hdGNoQ291bnQodGhpcy51c2VyQ29udGV4dC51aWQpXG4gICAgICBpZiAocmVzdWx0ICYmICFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhgLS0tLS0tLS0tLS0tLWApXG4gICAgICAgIGNvbnNvbGUubG9nKGB1bnJlYWQgY291bnQgZGV0YWlsc2ApXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKSlcbiAgICAgICAgY29uc29sZS5sb2coYC0tLS0tLS0tLS0tLS0tLS1gKVxuICAgICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBjb3VudDogcmVzdWx0Lmpzb24uY291bnQgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25UYWJJdGVtVGFwKGV2ZW50KSB7XG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBpdGVtOiB7IGluZGV4OiBldmVudC5pbmRleCB9IH1cbiAgICB9LFxuICAgIGhhbmRsZU9uUGFnZUxvYWRlZChhcmdzKSB7XG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBwYXJlbnRPYmplY3Q6IGFyZ3Mub2JqZWN0IH1cbiAgICB9LFxuICAgIG9uSG9tZUV2ZW50U2V0SW5kZXhDYihpbmRleCkge1xuICAgICAgY29uc3QgYm90dG9uTmF2aWdhdGlvbiA9IGdldFZpZXdCeUlkKHRoaXMuc3RhdGUucGFyZW50T2JqZWN0LCAnYm90dG9uTmF2aWdhdGlvbicpXG4gICAgICBib3R0b25OYXZpZ2F0aW9uLnNlbGVjdGVkSW5kZXggPSBpbmRleFxuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgaXRlbTogeyBpbmRleCB9IH1cbiAgICB9LFxuICAgIG9uTWF0Y2hFdmVudFNldEluZGV4Q2IoaW5kZXgpIHtcbiAgICAgIHRoaXMuZ2V0VW5yZWFkTWF0Y2hDb3VudCgpXG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxQYWdlIEBsb2FkZWQ9XCJoYW5kbGVPblBhZ2VMb2FkZWRcIiBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJudC1wYWdlXCI+XG4gICAgPEJvdHRvbU5hdmlnYXRpb24gaWQ9XCJib3R0b25OYXZpZ2F0aW9uXCIgc2VsZWN0ZWQtaW5kZXg9XCIwXCIgY2xhc3M9XCJudC1ib3R0b20tbmF2aWdhdGlvblwiPlxuICAgICAgPCEtLSBUaGUgYm90dG9tIHRhYiBVSSBpcyBjcmVhdGVkIHZpYSBUYWJTdHJpcCAodGhlIGNvbnRhaW5pZXIpIGFuZCBUYWJTdHJpcEl0ZW0gKGZvciBlYWNoIHRhYiktLT5cbiAgICAgIDxUYWJTdHJpcCBpZD1cInRhYlN0cmlwXCIgQGl0ZW1UYXA9XCJvblRhYkl0ZW1UYXBcIiBjbGFzcz1cIm50LXRhYi1zdHJpcFwiPlxuICAgICAgICA8VGFiU3RyaXBJdGVtIGNsYXNzPVwidGFic3RyaXBpdGVtIG50LXRhYi1zdHJpcF9faXRlbVwiPlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvZmEtaG9tZS5zdmdcIiBjbGFzcz1cImhpZGVcIj48L0ltYWdlPlxuXG4gICAgICAgICAgPExhYmVsIGNsYXNzPVwiZmFzIHQtMTYgbnQtbGFiZWxcIj5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFzIHQtMTYgIG50LWljb25cIj4ge3sgJ2ZhLWhvbWUnIHwgZm9udGljb24gfX08L1NwYW4+XG4gICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz48L0xhYmVsXG4gICAgICAgICAgPlxuICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgPFRhYlN0cmlwSXRlbVxuICAgICAgICAgIGlkPVwibWF0Y2hlc1RhYlwiXG4gICAgICAgICAgOmtleT1cIm5vdFJlc3BvbmRlZE1hdGNoQ291bnRcIlxuICAgICAgICAgIG5hbWU9XCJtYXRjaGVzXCJcbiAgICAgICAgICBjbGFzcz1cInRhYnN0cmlwaXRlbSBudC10YWItc3RyaXBfX2l0ZW1cIlxuICAgICAgICA+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9mYS1ob21lLnN2Z1wiIGNsYXNzPVwiaGlkZVwiPjwvSW1hZ2U+XG4gICAgICAgICAgPExhYmVsIGNsYXNzPVwiZmFzIHQtMTYgbnQtbGFiZWxcIj5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVwiZmFzIHQtMTYgIG50LWljb25cIj4ge3sgJ2ZhLWJhc2ViYWxsLWJhbGwnIHwgZm9udGljb24gfX08L1NwYW4+XG4gICAgICAgICAgICAgIDxTcGFuXG4gICAgICAgICAgICAgICAgdi1pZj1cIm5vdFJlc3BvbmRlZE1hdGNoQ291bnRcIlxuICAgICAgICAgICAgICAgIDp0ZXh0PVwibm90UmVzcG9uZGVkTWF0Y2hDb3VudFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICAgIGFuZHJvaWQ6c3R5bGU9XCJmb250LXNpemU6MjU7bWFyZ2luLXRvcDotMTVcIlxuICAgICAgICAgICAgICAgIGlvczpzdHlsZT1cImZvbnQtc2l6ZTozMDttYXJnaW4tdG9wOi0xNVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmYXNcIlxuICAgICAgICAgICAgICAvPiA8L0Zvcm1hdHRlZFN0cmluZ1xuICAgICAgICAgID48L0xhYmVsPlxuICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgPFRhYlN0cmlwSXRlbSBjbGFzcz1cInRhYnN0cmlwaXRlbSBudC10YWItc3RyaXBfX2l0ZW1cIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwifi9hc3NldHMvaW1hZ2VzL2ZhLWhvbWUuc3ZnXCIgY2xhc3M9XCJoaWRlXCI+PC9JbWFnZT5cbiAgICAgICAgICA8TGFiZWwgOnRleHQ9XCInZmEtdXNlci1jaXJjbGUnIHwgZm9udGljb25cIiBjbGFzcz1cImZhIHQtMTYgbnQtbGFiZWxcIiAvPlxuICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgIDwvVGFiU3RyaXA+XG5cbiAgICAgIDwhLS0gVGhlIG51bWJlciBvZiBUYWJDb250ZW50SXRlbSBjb21wb25lbnRzIHNob3VsZCBjb3Jlc3BvbmQgdG8gdGhlIG51bWJlciBvZiBUYWJTdHJpcEl0ZW0gY29tcG9uZW50cyAtLT5cbiAgICAgIDxUYWJDb250ZW50SXRlbSBjbGFzcz1cIm50LXRhYi1jb250ZW50X19pdGVtXCI+XG4gICAgICAgIDxIb21lXG4gICAgICAgICAgdi1pZj1cInN0YXRlLml0ZW0uaW5kZXggPT09IDBcIlxuICAgICAgICAgIEBvbkhvbWVFdmVudFNldEluZGV4Q2I9XCJvbkhvbWVFdmVudFNldEluZGV4Q2JcIlxuICAgICAgICAgIEBvbk1hdGNoRXZlbnRTZXRJbmRleENiPVwib25NYXRjaEV2ZW50U2V0SW5kZXhDYlwiXG4gICAgICAgIC8+XG4gICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgICAgPFRhYkNvbnRlbnRJdGVtIGNsYXNzPVwibnQtdGFiLWNvbnRlbnRfX2l0ZW1cIj5cbiAgICAgICAgPEZsZXhCb3hMYXlvdXQgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGZsZXhHcm93PVwiMVwiPlxuICAgICAgICAgIDxNYXRjaGVzIHYtaWY9XCJzdGF0ZS5pdGVtLmluZGV4ID09PSAxXCIgQG9uTWF0Y2hFdmVudFNldEluZGV4Q2I9XCJvbk1hdGNoRXZlbnRTZXRJbmRleENiXCIgLz5cbiAgICAgICAgPC9GbGV4Qm94TGF5b3V0PlxuICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICAgIDxUYWJDb250ZW50SXRlbSBjbGFzcz1cIm50LXRhYi1jb250ZW50X19pdGVtXCI+XG4gICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICA8QWNjb3VudCAvPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICA8L0JvdHRvbU5hdmlnYXRpb24+XG4gIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbi8qIGJvdHRvbS1uYXZpZ2F0aW9uICovXG4udGFic3RyaXBpdGVtIHtcbiAgLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblRhYlN0cmlwSXRlbS50YWJzdHJpcGl0ZW06YWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnQtMTYge1xuICBmb250LXNpemU6IDE2O1xufVxuLyogYm90dG9tIG5hdiBiYXIgKi9cbi5uYXYge1xuICBoZWlnaHQ6IDUwO1xufVxuPC9zdHlsZT5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibnQtcGFnZVwiLFxuICAgICAgYXR0cnM6IHsgYWN0aW9uQmFySGlkZGVuOiBcInRydWVcIiB9LFxuICAgICAgb246IHsgbG9hZGVkOiBfdm0uaGFuZGxlT25QYWdlTG9hZGVkIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkJvdHRvbU5hdmlnYXRpb25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm50LWJvdHRvbS1uYXZpZ2F0aW9uXCIsXG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiYm90dG9uTmF2aWdhdGlvblwiLCBcInNlbGVjdGVkLWluZGV4XCI6IFwiMFwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJUYWJTdHJpcFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJudC10YWItc3RyaXBcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwidGFiU3RyaXBcIiB9LFxuICAgICAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0ub25UYWJJdGVtVGFwIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiU3RyaXBJdGVtXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWJzdHJpcGl0ZW0gbnQtdGFiLXN0cmlwX19pdGVtXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGlkZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2ZhLWhvbWUuc3ZnXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZhcyB0LTE2IG50LWxhYmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIHQtMTYgIG50LWljb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtaG9tZVwiKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlRhYlN0cmlwSXRlbVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogX3ZtLm5vdFJlc3BvbmRlZE1hdGNoQ291bnQsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJzdHJpcGl0ZW0gbnQtdGFiLXN0cmlwX19pdGVtXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJtYXRjaGVzVGFiXCIsIG5hbWU6IFwibWF0Y2hlc1wiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoaWRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZmEtaG9tZS5zdmdcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmFzIHQtMTYgbnQtbGFiZWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgdC0xNiAgbnQtaWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX2YoXCJmb250aWNvblwiKShcImZhLWJhc2ViYWxsLWJhbGxcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm5vdFJlc3BvbmRlZE1hdGNoQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5ub3RSZXNwb25kZWRNYXRjaENvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5kcm9pZDpzdHlsZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemU6MjU7bWFyZ2luLXRvcDotMTVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlvczpzdHlsZVwiOiBcImZvbnQtc2l6ZTozMDttYXJnaW4tdG9wOi0xNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJUYWJTdHJpcEl0ZW1cIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYnN0cmlwaXRlbSBudC10YWItc3RyaXBfX2l0ZW1cIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoaWRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZmEtaG9tZS5zdmdcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSB0LTE2IG50LWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtdXNlci1jaXJjbGVcIikgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJUYWJDb250ZW50SXRlbVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJudC10YWItY29udGVudF9faXRlbVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5zdGF0ZS5pdGVtLmluZGV4ID09PSAwXG4gICAgICAgICAgICAgICAgPyBfYyhcIkhvbWVcIiwge1xuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIG9uSG9tZUV2ZW50U2V0SW5kZXhDYjogX3ZtLm9uSG9tZUV2ZW50U2V0SW5kZXhDYixcbiAgICAgICAgICAgICAgICAgICAgICBvbk1hdGNoRXZlbnRTZXRJbmRleENiOiBfdm0ub25NYXRjaEV2ZW50U2V0SW5kZXhDYlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiVGFiQ29udGVudEl0ZW1cIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibnQtdGFiLWNvbnRlbnRfX2l0ZW1cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkZsZXhCb3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGZsZXhHcm93OiBcIjFcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLnN0YXRlLml0ZW0uaW5kZXggPT09IDFcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcIk1hdGNoZXNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25NYXRjaEV2ZW50U2V0SW5kZXhDYjogX3ZtLm9uTWF0Y2hFdmVudFNldEluZGV4Q2JcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiVGFiQ29udGVudEl0ZW1cIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibnQtdGFiLWNvbnRlbnRfX2l0ZW1cIiB9LFxuICAgICAgICAgICAgW19jKFwiU3RhY2tMYXlvdXRcIiwgW19jKFwiQWNjb3VudFwiKV0sIDEpXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBWdWVEZXZ0b29scyBmcm9tICduYXRpdmVzY3JpcHQtdnVlLWRldnRvb2xzJ1xuaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJ1xuaW1wb3J0IFJhZExpc3RWaWV3IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldy92dWUnXG5pbXBvcnQgeyBNb2RhbFN0YWNrLCBvdmVycmlkZU1vZGFsVmlld01ldGhvZCwgVnVlV2luZG93ZWRNb2RhbCB9IGZyb20gJ25hdGl2ZXNjcmlwdC13aW5kb3dlZC1tb2RhbCdcbmltcG9ydCBEYXRlVGltZVBpY2tlciBmcm9tICduYXRpdmVzY3JpcHQtZGF0ZXRpbWVwaWNrZXIvdnVlJ1xuaW1wb3J0IFJhZERhdGFGb3JtIGZyb20gJ25hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS92dWUnXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSdcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IFROU0ZvbnRJY29uLCBmb250aWNvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1mb250aWNvbidcbi8vIFROU0ZvbnRJY29uLmRlYnVnID0gdHJ1ZVxuVE5TRm9udEljb24ucGF0aHMgPSB7XG4gIGZhOiAnLi9hc3NldHMvZm9udGF3ZXNvbWUuY3NzJyxcbn1cblROU0ZvbnRJY29uLmxvYWRDc3MoKVxuXG5WdWUuZmlsdGVyKCdmb250aWNvbicsIGZvbnRpY29uKVxuVnVlLnVzZShWdWVEZXZ0b29scylcblZ1ZS51c2UoUmFkTGlzdFZpZXcpXG5WdWUudXNlKFJhZERhdGFGb3JtKVxuLy8gQHRzLWlnbm9yZVxuVnVlLnVzZShEYXRlVGltZVBpY2tlcilcblxuaW1wb3J0IHsgY3Jhc2hseXRpY3MgfSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJ1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nXG5pbXBvcnQgeyBnZXRTdHJpbmcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJ1xuaW1wb3J0IFRoZW1lIGZyb20gJ0BuYXRpdmVzY3JpcHQvdGhlbWUnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi92aWV3cy9Mb2dpbi52dWUnXG5pbXBvcnQgSW5kZXggZnJvbSAnLi92aWV3cy9JbmRleC52dWUnXG5cbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xuVGhlbWUuc2V0TW9kZShUaGVtZS5MaWdodCkgLy8gT3IgVGhlbWUuTGlnaHRcblxuaWYgKGlzQW5kcm9pZCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgY3Jhc2hseXRpY3Muc2VuZENyYXNoTG9nKG5ldyBqYXZhLmxhbmcuRXhjZXB0aW9uKCdDcmFzaCBFeGNlcHRpb24nKSlcbn0gZWxzZSBpZiAoaXNJT1MpIHtcbiAgY3Jhc2hseXRpY3Muc2VuZENyYXNoTG9nKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBuZXcgTlNFcnJvcih7XG4gICAgICBkb21haW46ICdTaGlwbG9vcEh0dHBSZXNwb25zZUVycm9yRG9tYWluJyxcbiAgICAgIGNvZGU6IDQyLFxuICAgICAgdXNlckluZm86IG51bGwsXG4gICAgfSlcbiAgKVxufVxuZmlyZWJhc2VcbiAgLmluaXQoe1xuICAgIC8vIE9wdGlvbmFsbHkgcGFzcyBpbiBwcm9wZXJ0aWVzIGZvciBkYXRhYmFzZSwgYXV0aGVudGljYXRpb24gYW5kIGNsb3VkIG1lc3NhZ2luZyxcbiAgICAvLyBzZWUgdGhlaXIgcmVzcGVjdGl2ZSBkb2NzLlxuICAgIGNyYXNobHl0aWNzQ29sbGVjdGlvbkVuYWJsZWQ6IHRydWUsXG4gICAgb25EeW5hbWljTGlua0NhbGxiYWNrOiBmdW5jdGlvbihyZXN1bHQ6IGFueSkge1xuICAgICAgY29uc29sZS5sb2coJ0R5bmFtaWMgbGluayA6OiAnICsgcmVzdWx0LnVybClcbiAgICAgIHN0b3JlLmRpc3BhdGNoKCdhdXRoZW50aWNhdGlvbk1vZHVsZS9zZXRDcmVhdGVQYXNzd29yZFBhZ2UnKVxuICAgIH0sXG4gICAgc2hvd05vdGlmaWNhdGlvbnNXaGVuSW5Gb3JlZ3JvdW5kOiB0cnVlLFxuICAgIG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IChtZXNzYWdlOiBmaXJlYmFzZS5NZXNzYWdlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgVGl0bGUgOjogJHttZXNzYWdlLnRpdGxlfWApXG4gICAgICBjb25zb2xlLmxvZyhgQm9keSA6OiAke21lc3NhZ2UuYm9keX1gKVxuICAgIH0sXG4gICAgb25QdXNoVG9rZW5SZWNlaXZlZENhbGxiYWNrOiBmdW5jdGlvbih0b2tlbjogc3RyaW5nKSB7XG4gICAgICBjb25zb2xlLmxvZygnRmlyZWJhc2UgcHVzaCB0b2tlbiA6OiAnICsgdG9rZW4pXG4gICAgfSxcbiAgfSlcbiAgLnRoZW4oXG4gICAgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2ZpcmViYXNlLmluaXQgOjogZG9uZScpXG4gICAgfSxcbiAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3IgOjogJHtlcnJvcn1gKVxuICAgIH1cbiAgKVxuLy8gc2V0VGltZW91dCgoKSA9PiB7XG4vLyAgIGZpcmViYXNlLmFkbW9iXG4vLyAgICAgLnNob3dCYW5uZXIoe1xuLy8gICAgICAgc2l6ZTogZmlyZWJhc2UuYWRtb2IuQURfU0laRS5TTUFSVF9CQU5ORVIsIC8vIHNlZSBmaXJlYmFzZS5hZG1vYi5BRF9TSVpFIGZvciBhbGwgb3B0aW9uc1xuLy8gICAgICAgbWFyZ2luczoge1xuLy8gICAgICAgICAvLyBvcHRpb25hbCBuciBvZiBkZXZpY2UgaW5kZXBlbmRlbnQgcGl4ZWxzIGZyb20gdGhlIHRvcCBvciBib3R0b20gKGRvbid0IHNldCBib3RoKVxuLy8gICAgICAgICBib3R0b206IDEwLFxuLy8gICAgICAgICB0b3A6IC0xLFxuLy8gICAgICAgfSxcbi8vICAgICAgIGFuZHJvaWRCYW5uZXJJZDogJ2NhLWFwcC1wdWItOTc5MTE3OTkxMDc3NTU2MS83NDU5NjI2NzMzJyxcbi8vICAgICAgIGlvc0Jhbm5lcklkOiAnY2EtYXBwLXB1Yi05NzkxMTc5OTEwNzc1NTYxLzc0NTk2MjY3MzMnLFxuLy8gICAgICAgdGVzdGluZzogdHJ1ZSwgLy8gd2hlbiBub3QgcnVubmluZyBpbiBwcm9kdWN0aW9uIHNldCB0aGlzIHRvIHRydWUsIEdvb2dsZSBkb2Vzbid0IGxpa2UgaXQgYW55IG90aGVyIHdheVxuLy8gICAgICAgaW9zVGVzdERldmljZUlkczogW1xuLy8gICAgICAgICAvL0FuZHJvaWQgYXV0b21hdGljYWxseSBhZGRzIHRoZSBjb25uZWN0ZWQgZGV2aWNlIGFzIHRlc3QgZGV2aWNlIHdpdGggdGVzdGluZzp0cnVlLCBpT1MgZG9lcyBub3Rcbi8vICAgICAgICAgJzQ1ZDc3YmY1MTNkZmFiYzI5NDliYTA1M2RhODNjMGM3YjdlODc3MTUnLCAvLyBFZGR5J3MgaVBob25lIDZzXG4vLyAgICAgICAgICdmZWU0Y2YzMTlhMjQyZWFiNDcwMTU0M2U0YzE2ZGI4OWM3MjI3MzFmJywgLy8gRWRkeSdzIGlQYWQgUHJvXG4vLyAgICAgICBdLFxuLy8gICAgICAga2V5d29yZHM6IFsnY3JpY2tldCcsICdsb25kb24nXSwgLy8gYWRkIGtleXdvcmRzIGZvciBhZCB0YXJnZXRpbmdcbi8vICAgICAgIG9uT3BlbmVkOiAoKSA9PiBjb25zb2xlLmxvZygnQWQgb3BlbmVkJyksXG4vLyAgICAgICBvbkNsaWNrZWQ6ICgpID0+IGNvbnNvbGUubG9nKCdBZCBjbGlja2VkJyksXG4vLyAgICAgICBvbkxlZnRBcHBsaWNhdGlvbjogKCkgPT4gY29uc29sZS5sb2coJ0FkIGxlZnQgYXBwbGljYXRpb24nKSxcbi8vICAgICB9KVxuLy8gICAgIC50aGVuKFxuLy8gICAgICAgZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdBZE1vYiBiYW5uZXIgc3RhdHVzIDo6IFNob3dpbmcnKVxuLy8gICAgICAgfSxcbi8vICAgICAgIGZ1bmN0aW9uKGVycm9yTWVzc2FnZTogYW55KSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSlcbi8vICAgICAgIH1cbi8vICAgICApXG4vLyB9LCA1MDAwKVxuXG4vLyBQcmludHMgVnVlIGxvZ3Mgd2hlbiAtLWVudi5wcm9kdWN0aW9uIGlzICpOT1QqIHNldCB3aGlsZSBidWlsZGluZ1xuVnVlLmNvbmZpZy5zaWxlbnQgPSBUTlNfRU5WID09PSAncHJvZHVjdGlvbidcblxub3ZlcnJpZGVNb2RhbFZpZXdNZXRob2QoKVxuVnVlLnJlZ2lzdGVyRWxlbWVudCgnUmFkU2lkZURyYXdlcicsICgpID0+IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJykuUmFkU2lkZURyYXdlcilcblZ1ZS5yZWdpc3RlckVsZW1lbnQoJ0NhcmRWaWV3JywgKCkgPT4gcmVxdWlyZSgnQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWNhcmR2aWV3JykuQ2FyZFZpZXcpXG5WdWUucmVnaXN0ZXJFbGVtZW50KCdNb2RhbFN0YWNrJywgKCkgPT4gTW9kYWxTdGFjaylcblZ1ZS51c2UoVnVlV2luZG93ZWRNb2RhbClcblxubGV0IGFwcCA9IExvZ2luXG5cbmlmIChnZXRTdHJpbmcoJ2NhbWVscy10b2tlbicpKSB7XG4gIGNvbnNvbGUubG9nKGAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tdG9rZW4gZXhpc3RzIDo6IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWApXG4gIHN0b3JlLmRpc3BhdGNoKCdhdXRoZW50aWNhdGlvbk1vZHVsZS9zZXRBdXRoVG9rZW4nLCB7XG4gICAgdG9rZW46IGdldFN0cmluZygnY2FtZWxzLXRva2VuJyksXG4gIH0pXG4gIGFwcCA9IEluZGV4XG59XG5cbm5ldyBWdWUoe1xuICBzdG9yZSxcbiAgcmVuZGVyOiBoID0+IGgoJ0ZyYW1lJywgW2goYXBwKV0pLFxufSkuJHN0YXJ0KClcbiJdLCJzb3VyY2VSb290IjoiIn0=