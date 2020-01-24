webpackHotUpdate("bundle",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9JbmRleC52dWU/ODRiOSIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDBCQUEwQjtBQUN4QyxXQUFXO0FBQ1gsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlEQUFpRDtBQUNsRTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxxQkFBcUIsbUNBQW1DO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLG1DQUFtQztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLHFCQUFxQixtQ0FBbUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsbUNBQW1DO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRCw2REFBNkQ7QUFDN0Q7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlEQUFpRDtBQUNsRTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJB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YUFBYTtBQUNiLHFCQUFxQjtBQUNyQix3REFBd0Q7QUFDeEQsTUFBVztBQUNYLHNDQUFzQztBQUN0QyxvQ0FBb0M7QUFDcEMsVUFBVTtBQUNWLFFBQVE7QUFDUixNQUFXO0FBRVgsbURBQW9FO0FBQ3BFLDBCQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLEtBQWlCO0FBRTVDLE1BQXlCO0FBQ3pCLEVBQStGO0FBQy9GLHVCQUF5RjtBQUN6RiwwQkFBRyxDQUFDLGNBQStDO0FBQ25ELHFCQUF5QjtBQUV6QixJQUFJLEdBQUcsR0FBRyxtQkFBSztBQUVmLEdBQStCO0lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBc0Y7SUFDbEcsZUFBb0Q7UUFDbEQsS0FBSyxFQUFFLEtBQXlCO0tBQ2pDLENBQUM7SUFDRixHQUFHLEdBQUcsU0FBSztDQUNaO0FBRUQsSUFBSSxrQkFBSTtJQUNOLEtBQUs7SUFDTCxNQUFNLENBQTJCO0NBQ2xDLENBQUMsQ0FBQyxNQUFNLEVBQUUiLCJmaWxlIjoiYnVuZGxlLmQ5YjRkNzU1YmU3NzVhMDZlMGNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm50LXBhZ2VcIixcbiAgICAgIGF0dHJzOiB7IGFjdGlvbkJhckhpZGRlbjogXCJ0cnVlXCIgfSxcbiAgICAgIG9uOiB7IGxvYWRlZDogX3ZtLmhhbmRsZU9uUGFnZUxvYWRlZCB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJCb3R0b21OYXZpZ2F0aW9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJudC1ib3R0b20tbmF2aWdhdGlvblwiLFxuICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImJvdHRvbk5hdmlnYXRpb25cIiwgXCJzZWxlY3RlZC1pbmRleFwiOiBcIjBcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiVGFiU3RyaXBcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibnQtdGFiLXN0cmlwXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInRhYlN0cmlwXCIgfSxcbiAgICAgICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLm9uVGFiSXRlbVRhcCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlRhYlN0cmlwSXRlbVwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFic3RyaXBpdGVtIG50LXRhYi1zdHJpcF9faXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mYS1ob21lLnN2Z1wiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmYXMgdC0xNiBudC1sYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyB0LTE2ICBudC1pY29uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uX2YoXCJmb250aWNvblwiKShcImZhLWhvbWVcIikpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJUYWJTdHJpcEl0ZW1cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJzdHJpcGl0ZW0gbnQtdGFiLXN0cmlwX19pdGVtXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJtYXRjaGVzVGFiXCIsIG5hbWU6IFwibWF0Y2hlc1wiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoaWRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZmEtaG9tZS5zdmdcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmFzIHQtMTYgbnQtbGFiZWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgdC0xNiAgbnQtaWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX2YoXCJmb250aWNvblwiKShcImZhLWJhc2ViYWxsLWJhbGxcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnN0YXRlLmNvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uc3RhdGUuY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmRyb2lkOnN0eWxlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZToyNTttYXJnaW4tdG9wOi0xNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW9zOnN0eWxlXCI6IFwiZm9udC1zaXplOjMwO21hcmdpbi10b3A6LTE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlRhYlN0cmlwSXRlbVwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFic3RyaXBpdGVtIG50LXRhYi1zdHJpcF9faXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mYS1ob21lLnN2Z1wiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIHQtMTYgbnQtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS11c2VyLWNpcmNsZVwiKSB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlRhYkNvbnRlbnRJdGVtXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm50LXRhYi1jb250ZW50X19pdGVtXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLnN0YXRlLml0ZW0uaW5kZXggPT09IDBcbiAgICAgICAgICAgICAgICA/IF9jKFwiSG9tZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgb25Ib21lRXZlbnRTZXRJbmRleENiOiBfdm0ub25Ib21lRXZlbnRTZXRJbmRleENiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uTWF0Y2hFdmVudFNldEluZGV4Q2I6IF92bS5vbk1hdGNoRXZlbnRTZXRJbmRleENiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJUYWJDb250ZW50SXRlbVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJudC10YWItY29udGVudF9faXRlbVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiRmxleEJveExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZmxleEdyb3c6IFwiMVwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uc3RhdGUuaXRlbS5pbmRleCA9PT0gMVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiTWF0Y2hlc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1hdGNoRXZlbnRTZXRJbmRleENiOiBfdm0ub25NYXRjaEV2ZW50U2V0SW5kZXhDYlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJUYWJDb250ZW50SXRlbVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJudC10YWItY29udGVudF9faXRlbVwiIH0sXG4gICAgICAgICAgICBbX2MoXCJTdGFja0xheW91dFwiLCBbX2MoXCJBY2NvdW50XCIpXSwgMSldLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IFZ1ZURldnRvb2xzIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUtZGV2dG9vbHMnXG5pbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnXG5pbXBvcnQgUmFkTGlzdFZpZXcgZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L3Z1ZSdcbmltcG9ydCB7IE1vZGFsU3RhY2ssIG92ZXJyaWRlTW9kYWxWaWV3TWV0aG9kLCBWdWVXaW5kb3dlZE1vZGFsIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXdpbmRvd2VkLW1vZGFsJ1xuaW1wb3J0IERhdGVUaW1lUGlja2VyIGZyb20gJ25hdGl2ZXNjcmlwdC1kYXRldGltZXBpY2tlci92dWUnXG5pbXBvcnQgUmFkRGF0YUZvcm0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL3Z1ZSdcbmltcG9ydCBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJ1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHsgVE5TRm9udEljb24sIGZvbnRpY29uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWZvbnRpY29uJ1xuLy8gVE5TRm9udEljb24uZGVidWcgPSB0cnVlXG5UTlNGb250SWNvbi5wYXRocyA9IHtcbiAgZmE6ICcuL2Fzc2V0cy9mb250YXdlc29tZS5jc3MnLFxufVxuVE5TRm9udEljb24ubG9hZENzcygpXG5cblZ1ZS5maWx0ZXIoJ2ZvbnRpY29uJywgZm9udGljb24pXG5WdWUudXNlKFZ1ZURldnRvb2xzKVxuVnVlLnVzZShSYWRMaXN0VmlldylcblZ1ZS51c2UoUmFkRGF0YUZvcm0pXG4vLyBAdHMtaWdub3JlXG5WdWUudXNlKERhdGVUaW1lUGlja2VyKVxuXG5pbXBvcnQgeyBjcmFzaGx5dGljcyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnXG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSdcbmltcG9ydCB7IGdldFN0cmluZyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnXG5pbXBvcnQgVGhlbWUgZnJvbSAnQG5hdGl2ZXNjcmlwdC90aGVtZSdcbmltcG9ydCBMb2dpbiBmcm9tICcuL3ZpZXdzL0xvZ2luLnZ1ZSdcbmltcG9ydCBJbmRleCBmcm9tICcuL3ZpZXdzL0luZGV4LnZ1ZSdcblxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXG5UaGVtZS5zZXRNb2RlKFRoZW1lLkxpZ2h0KSAvLyBPciBUaGVtZS5MaWdodFxuXG5pZiAoaXNBbmRyb2lkKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBjcmFzaGx5dGljcy5zZW5kQ3Jhc2hMb2cobmV3IGphdmEubGFuZy5FeGNlcHRpb24oJ0NyYXNoIEV4Y2VwdGlvbicpKVxufSBlbHNlIGlmIChpc0lPUykge1xuICBjcmFzaGx5dGljcy5zZW5kQ3Jhc2hMb2coXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIG5ldyBOU0Vycm9yKHtcbiAgICAgIGRvbWFpbjogJ1NoaXBsb29wSHR0cFJlc3BvbnNlRXJyb3JEb21haW4nLFxuICAgICAgY29kZTogNDIsXG4gICAgICB1c2VySW5mbzogbnVsbCxcbiAgICB9KVxuICApXG59XG5maXJlYmFzZVxuICAuaW5pdCh7XG4gICAgLy8gT3B0aW9uYWxseSBwYXNzIGluIHByb3BlcnRpZXMgZm9yIGRhdGFiYXNlLCBhdXRoZW50aWNhdGlvbiBhbmQgY2xvdWQgbWVzc2FnaW5nLFxuICAgIC8vIHNlZSB0aGVpciByZXNwZWN0aXZlIGRvY3MuXG4gICAgY3Jhc2hseXRpY3NDb2xsZWN0aW9uRW5hYmxlZDogdHJ1ZSxcbiAgICBvbkR5bmFtaWNMaW5rQ2FsbGJhY2s6IGZ1bmN0aW9uKHJlc3VsdDogYW55KSB7XG4gICAgICBjb25zb2xlLmxvZygnRHluYW1pYyBsaW5rIDo6ICcgKyByZXN1bHQudXJsKVxuICAgICAgc3RvcmUuZGlzcGF0Y2goJ2F1dGhlbnRpY2F0aW9uTW9kdWxlL3NldENyZWF0ZVBhc3N3b3JkUGFnZScpXG4gICAgfSxcbiAgICBzaG93Tm90aWZpY2F0aW9uc1doZW5JbkZvcmVncm91bmQ6IHRydWUsXG4gICAgb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazogKG1lc3NhZ2U6IGZpcmViYXNlLk1lc3NhZ2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBUaXRsZSA6OiAke21lc3NhZ2UudGl0bGV9YClcbiAgICAgIGNvbnNvbGUubG9nKGBCb2R5IDo6ICR7bWVzc2FnZS5ib2R5fWApXG4gICAgfSxcbiAgICBvblB1c2hUb2tlblJlY2VpdmVkQ2FsbGJhY2s6IGZ1bmN0aW9uKHRva2VuOiBzdHJpbmcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdGaXJlYmFzZSBwdXNoIHRva2VuIDo6ICcgKyB0b2tlbilcbiAgICB9LFxuICB9KVxuICAudGhlbihcbiAgICAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZmlyZWJhc2UuaW5pdCA6OiBkb25lJylcbiAgICB9LFxuICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvciA6OiAke2Vycm9yfWApXG4gICAgfVxuICApXG4vLyBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgZmlyZWJhc2UuYWRtb2Jcbi8vICAgICAuc2hvd0Jhbm5lcih7XG4vLyAgICAgICBzaXplOiBmaXJlYmFzZS5hZG1vYi5BRF9TSVpFLlNNQVJUX0JBTk5FUiwgLy8gc2VlIGZpcmViYXNlLmFkbW9iLkFEX1NJWkUgZm9yIGFsbCBvcHRpb25zXG4vLyAgICAgICBtYXJnaW5zOiB7XG4vLyAgICAgICAgIC8vIG9wdGlvbmFsIG5yIG9mIGRldmljZSBpbmRlcGVuZGVudCBwaXhlbHMgZnJvbSB0aGUgdG9wIG9yIGJvdHRvbSAoZG9uJ3Qgc2V0IGJvdGgpXG4vLyAgICAgICAgIGJvdHRvbTogMTAsXG4vLyAgICAgICAgIHRvcDogLTEsXG4vLyAgICAgICB9LFxuLy8gICAgICAgYW5kcm9pZEJhbm5lcklkOiAnY2EtYXBwLXB1Yi05NzkxMTc5OTEwNzc1NTYxLzc0NTk2MjY3MzMnLFxuLy8gICAgICAgaW9zQmFubmVySWQ6ICdjYS1hcHAtcHViLTk3OTExNzk5MTA3NzU1NjEvNzQ1OTYyNjczMycsXG4vLyAgICAgICB0ZXN0aW5nOiB0cnVlLCAvLyB3aGVuIG5vdCBydW5uaW5nIGluIHByb2R1Y3Rpb24gc2V0IHRoaXMgdG8gdHJ1ZSwgR29vZ2xlIGRvZXNuJ3QgbGlrZSBpdCBhbnkgb3RoZXIgd2F5XG4vLyAgICAgICBpb3NUZXN0RGV2aWNlSWRzOiBbXG4vLyAgICAgICAgIC8vQW5kcm9pZCBhdXRvbWF0aWNhbGx5IGFkZHMgdGhlIGNvbm5lY3RlZCBkZXZpY2UgYXMgdGVzdCBkZXZpY2Ugd2l0aCB0ZXN0aW5nOnRydWUsIGlPUyBkb2VzIG5vdFxuLy8gICAgICAgICAnNDVkNzdiZjUxM2RmYWJjMjk0OWJhMDUzZGE4M2MwYzdiN2U4NzcxNScsIC8vIEVkZHkncyBpUGhvbmUgNnNcbi8vICAgICAgICAgJ2ZlZTRjZjMxOWEyNDJlYWI0NzAxNTQzZTRjMTZkYjg5YzcyMjczMWYnLCAvLyBFZGR5J3MgaVBhZCBQcm9cbi8vICAgICAgIF0sXG4vLyAgICAgICBrZXl3b3JkczogWydjcmlja2V0JywgJ2xvbmRvbiddLCAvLyBhZGQga2V5d29yZHMgZm9yIGFkIHRhcmdldGluZ1xuLy8gICAgICAgb25PcGVuZWQ6ICgpID0+IGNvbnNvbGUubG9nKCdBZCBvcGVuZWQnKSxcbi8vICAgICAgIG9uQ2xpY2tlZDogKCkgPT4gY29uc29sZS5sb2coJ0FkIGNsaWNrZWQnKSxcbi8vICAgICAgIG9uTGVmdEFwcGxpY2F0aW9uOiAoKSA9PiBjb25zb2xlLmxvZygnQWQgbGVmdCBhcHBsaWNhdGlvbicpLFxuLy8gICAgIH0pXG4vLyAgICAgLnRoZW4oXG4vLyAgICAgICBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ0FkTW9iIGJhbm5lciBzdGF0dXMgOjogU2hvd2luZycpXG4vLyAgICAgICB9LFxuLy8gICAgICAgZnVuY3Rpb24oZXJyb3JNZXNzYWdlOiBhbnkpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKVxuLy8gICAgICAgfVxuLy8gICAgIClcbi8vIH0sIDUwMDApXG5cbi8vIFByaW50cyBWdWUgbG9ncyB3aGVuIC0tZW52LnByb2R1Y3Rpb24gaXMgKk5PVCogc2V0IHdoaWxlIGJ1aWxkaW5nXG5WdWUuY29uZmlnLnNpbGVudCA9IFROU19FTlYgPT09ICdwcm9kdWN0aW9uJ1xuXG5vdmVycmlkZU1vZGFsVmlld01ldGhvZCgpXG5WdWUucmVnaXN0ZXJFbGVtZW50KCdSYWRTaWRlRHJhd2VyJywgKCkgPT4gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInKS5SYWRTaWRlRHJhd2VyKVxuVnVlLnJlZ2lzdGVyRWxlbWVudCgnQ2FyZFZpZXcnLCAoKSA9PiByZXF1aXJlKCdAbnN0dWRpby9uYXRpdmVzY3JpcHQtY2FyZHZpZXcnKS5DYXJkVmlldylcblZ1ZS5yZWdpc3RlckVsZW1lbnQoJ01vZGFsU3RhY2snLCAoKSA9PiBNb2RhbFN0YWNrKVxuVnVlLnVzZShWdWVXaW5kb3dlZE1vZGFsKVxuXG5sZXQgYXBwID0gTG9naW5cblxuaWYgKGdldFN0cmluZygnY2FtZWxzLXRva2VuJykpIHtcbiAgY29uc29sZS5sb2coYC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS10b2tlbiBleGlzdHMgOjogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYClcbiAgc3RvcmUuZGlzcGF0Y2goJ2F1dGhlbnRpY2F0aW9uTW9kdWxlL3NldEF1dGhUb2tlbicsIHtcbiAgICB0b2tlbjogZ2V0U3RyaW5nKCdjYW1lbHMtdG9rZW4nKSxcbiAgfSlcbiAgYXBwID0gSW5kZXhcbn1cblxubmV3IFZ1ZSh7XG4gIHN0b3JlLFxuICByZW5kZXI6IGggPT4gaCgnRnJhbWUnLCBbaChhcHApXSksXG59KS4kc3RhcnQoKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==