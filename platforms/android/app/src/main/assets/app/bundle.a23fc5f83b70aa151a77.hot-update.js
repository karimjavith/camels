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
    { staticClass: "nt-page", attrs: { actionBarHidden: "true" } },
    [
      _c(
        "DockLayout",
        [
          _c(
            "StackLayout",
            { attrs: { dock: "top", height: "93%", width: "100%" } },
            [
              _vm.state.item.index === 0
                ? _c("Home", {
                    on: {
                      onHomeEventSetIndexCb: _vm.onHomeEventSetIndexCb,
                      onMatchEventSetIndexCb: _vm.onMatchEventSetIndexCb
                    }
                  })
                : _vm._e(),
              _vm.state.item.index === 1
                ? _c("Matches", {
                    on: { onMatchEventSetIndexCb: _vm.onMatchEventSetIndexCb }
                  })
                : _vm._e(),
              _vm.state.item.index === 2 ? _c("Account") : _vm._e()
            ],
            1
          ),
          _c(
            "StackLayout",
            {
              staticClass: "bottomNavBar",
              attrs: { dock: "bottom", height: "7%" }
            },
            [
              _c(
                "StackLayout",
                { attrs: { orientation: "horizontal" } },
                [
                  _c(
                    "StackLayout",
                    {
                      staticClass: "navItem",
                      on: {
                        tap: function($event) {
                          return _vm.handleOnMenuTap(0)
                        }
                      }
                    },
                    [
                      _c("Label", {
                        attrs: {
                          text: "",
                          "android:class": "notificationAndroid",
                          "ios:class": "notification",
                          opacity: "0"
                        }
                      }),
                      _c(
                        "Label",
                        {
                          staticClass: "fas",
                          class: { active: _vm.state.item.index === 0 },
                          attrs: {
                            "android:style": "font-size:25;margin-top:-15",
                            "ios:style": "font-size:30;margin-top:-15"
                          }
                        },
                        [_vm._v(_vm._s(_vm._f("fonticon")("fa-home")))]
                      )
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    {
                      staticClass: "navItem",
                      on: {
                        tap: function($event) {
                          return _vm.handleOnMenuTap(1)
                        }
                      }
                    },
                    [
                      _c("Label", {
                        attrs: {
                          text: _vm.state.count,
                          "android:class": "notificationAndroid",
                          "ios:class": "notification"
                        }
                      }),
                      _c("Image", {
                        attrs: {
                          "android:style":
                            "height:32;width:32;margin-top:-15;margin-left:-15",
                          "ios:style": "font-size:8;margin-top:-15",
                          src: "~/assets/images/fa-cricket.png"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    {
                      staticClass: "navItem",
                      on: {
                        tap: function($event) {
                          return _vm.handleOnMenuTap(2)
                        }
                      }
                    },
                    [
                      _c("Label", {
                        attrs: {
                          text: "",
                          "android:class": "notificationAndroid",
                          "ios:class": "notification",
                          opacity: "0"
                        }
                      }),
                      _c("Label", {
                        staticClass: "fas",
                        class: { active: _vm.state.item.index === 2 },
                        attrs: {
                          text: "",
                          "android:style": "font-size:25;margin-top:-15",
                          "ios:style": "font-size:30;margin-top:-15"
                        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9JbmRleC52dWU/ODRiOSIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssaUNBQWlDLDBCQUEwQixFQUFFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUyw0Q0FBNEMsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMsNEJBQTRCLEVBQUU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxxQ0FBcUM7QUFDdkU7QUFDQSwyREFBMkQ7QUFDM0QsdURBQXVEO0FBQ3ZEO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFNBQVMsZUFBZTtBQUMvRCxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QU8sS0FBaUI7QUFFNUMsTUFBeUI7QUFDekIsRUFBK0Y7QUFDL0YsdUJBQXlGO0FBQ3pGLDBCQUFHLENBQUMsY0FBK0M7QUFDbkQscUJBQXlCO0FBRXpCLElBQUksR0FBRyxHQUFHLG1CQUFLO0FBRWYsR0FBK0I7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFzRjtJQUNsRyxlQUFvRDtRQUNsRCxLQUFLLEVBQUUsS0FBeUI7S0FDakMsQ0FBQztJQUNGLEdBQUcsR0FBRyxTQUFLO0NBQ1o7QUFFRCxJQUFJLGtCQUFJO0lBQ04sS0FBSztJQUNMLE1BQU0sQ0FBMkI7Q0FDbEMsQ0FBQyxDQUFDLE1BQU0sRUFBRSIsImZpbGUiOiJidW5kbGUuYTIzZmM1ZjgzYjcwYWExNTFhNzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJudC1wYWdlXCIsIGF0dHJzOiB7IGFjdGlvbkJhckhpZGRlbjogXCJ0cnVlXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkRvY2tMYXlvdXRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBkb2NrOiBcInRvcFwiLCBoZWlnaHQ6IFwiOTMlXCIsIHdpZHRoOiBcIjEwMCVcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5zdGF0ZS5pdGVtLmluZGV4ID09PSAwXG4gICAgICAgICAgICAgICAgPyBfYyhcIkhvbWVcIiwge1xuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIG9uSG9tZUV2ZW50U2V0SW5kZXhDYjogX3ZtLm9uSG9tZUV2ZW50U2V0SW5kZXhDYixcbiAgICAgICAgICAgICAgICAgICAgICBvbk1hdGNoRXZlbnRTZXRJbmRleENiOiBfdm0ub25NYXRjaEV2ZW50U2V0SW5kZXhDYlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5zdGF0ZS5pdGVtLmluZGV4ID09PSAxXG4gICAgICAgICAgICAgICAgPyBfYyhcIk1hdGNoZXNcIiwge1xuICAgICAgICAgICAgICAgICAgICBvbjogeyBvbk1hdGNoRXZlbnRTZXRJbmRleENiOiBfdm0ub25NYXRjaEV2ZW50U2V0SW5kZXhDYiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5zdGF0ZS5pdGVtLmluZGV4ID09PSAyID8gX2MoXCJBY2NvdW50XCIpIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm90dG9tTmF2QmFyXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGRvY2s6IFwiYm90dG9tXCIsIGhlaWdodDogXCI3JVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdkl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5oYW5kbGVPbk1lbnVUYXAoMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5kcm9pZDpjbGFzc1wiOiBcIm5vdGlmaWNhdGlvbkFuZHJvaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpb3M6Y2xhc3NcIjogXCJub3RpZmljYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGFjdGl2ZTogX3ZtLnN0YXRlLml0ZW0uaW5kZXggPT09IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFuZHJvaWQ6c3R5bGVcIjogXCJmb250LXNpemU6MjU7bWFyZ2luLXRvcDotMTVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlvczpzdHlsZVwiOiBcImZvbnQtc2l6ZTozMDttYXJnaW4tdG9wOi0xNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uX2YoXCJmb250aWNvblwiKShcImZhLWhvbWVcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2SXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhhbmRsZU9uTWVudVRhcCgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnN0YXRlLmNvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFuZHJvaWQ6Y2xhc3NcIjogXCJub3RpZmljYXRpb25BbmRyb2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW9zOmNsYXNzXCI6IFwibm90aWZpY2F0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5kcm9pZDpzdHlsZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0OjMyO3dpZHRoOjMyO21hcmdpbi10b3A6LTE1O21hcmdpbi1sZWZ0Oi0xNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImlvczpzdHlsZVwiOiBcImZvbnQtc2l6ZTo4O21hcmdpbi10b3A6LTE1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZmEtY3JpY2tldC5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2SXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhhbmRsZU9uTWVudVRhcCgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmRyb2lkOmNsYXNzXCI6IFwibm90aWZpY2F0aW9uQW5kcm9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImlvczpjbGFzc1wiOiBcIm5vdGlmaWNhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBhY3RpdmU6IF92bS5zdGF0ZS5pdGVtLmluZGV4ID09PSAyIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIu+KvVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFuZHJvaWQ6c3R5bGVcIjogXCJmb250LXNpemU6MjU7bWFyZ2luLXRvcDotMTVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpb3M6c3R5bGVcIjogXCJmb250LXNpemU6MzA7bWFyZ2luLXRvcDotMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBWdWVEZXZ0b29scyBmcm9tICduYXRpdmVzY3JpcHQtdnVlLWRldnRvb2xzJ1xuaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJ1xuaW1wb3J0IFJhZExpc3RWaWV3IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldy92dWUnXG5pbXBvcnQgeyBNb2RhbFN0YWNrLCBvdmVycmlkZU1vZGFsVmlld01ldGhvZCwgVnVlV2luZG93ZWRNb2RhbCB9IGZyb20gJ25hdGl2ZXNjcmlwdC13aW5kb3dlZC1tb2RhbCdcbmltcG9ydCBEYXRlVGltZVBpY2tlciBmcm9tICduYXRpdmVzY3JpcHQtZGF0ZXRpbWVwaWNrZXIvdnVlJ1xuaW1wb3J0IFJhZERhdGFGb3JtIGZyb20gJ25hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS92dWUnXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSdcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IFROU0ZvbnRJY29uLCBmb250aWNvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1mb250aWNvbidcbi8vIFROU0ZvbnRJY29uLmRlYnVnID0gdHJ1ZVxuVE5TRm9udEljb24ucGF0aHMgPSB7XG4gIGZhOiAnLi9hc3NldHMvZm9udGF3ZXNvbWUuY3NzJyxcbn1cblROU0ZvbnRJY29uLmxvYWRDc3MoKVxuXG5WdWUuZmlsdGVyKCdmb250aWNvbicsIGZvbnRpY29uKVxuVnVlLnVzZShWdWVEZXZ0b29scylcblZ1ZS51c2UoUmFkTGlzdFZpZXcpXG5WdWUudXNlKFJhZERhdGFGb3JtKVxuLy8gQHRzLWlnbm9yZVxuVnVlLnVzZShEYXRlVGltZVBpY2tlcilcblxuaW1wb3J0IHsgY3Jhc2hseXRpY3MgfSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJ1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nXG5pbXBvcnQgeyBnZXRTdHJpbmcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJ1xuaW1wb3J0IFRoZW1lIGZyb20gJ0BuYXRpdmVzY3JpcHQvdGhlbWUnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi92aWV3cy9Mb2dpbi52dWUnXG5pbXBvcnQgSW5kZXggZnJvbSAnLi92aWV3cy9JbmRleC52dWUnXG5cbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xuVGhlbWUuc2V0TW9kZShUaGVtZS5MaWdodCkgLy8gT3IgVGhlbWUuTGlnaHRcblxuaWYgKGlzQW5kcm9pZCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgY3Jhc2hseXRpY3Muc2VuZENyYXNoTG9nKG5ldyBqYXZhLmxhbmcuRXhjZXB0aW9uKCdDcmFzaCBFeGNlcHRpb24nKSlcbn0gZWxzZSBpZiAoaXNJT1MpIHtcbiAgY3Jhc2hseXRpY3Muc2VuZENyYXNoTG9nKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBuZXcgTlNFcnJvcih7XG4gICAgICBkb21haW46ICdTaGlwbG9vcEh0dHBSZXNwb25zZUVycm9yRG9tYWluJyxcbiAgICAgIGNvZGU6IDQyLFxuICAgICAgdXNlckluZm86IG51bGwsXG4gICAgfSlcbiAgKVxufVxuZmlyZWJhc2VcbiAgLmluaXQoe1xuICAgIC8vIE9wdGlvbmFsbHkgcGFzcyBpbiBwcm9wZXJ0aWVzIGZvciBkYXRhYmFzZSwgYXV0aGVudGljYXRpb24gYW5kIGNsb3VkIG1lc3NhZ2luZyxcbiAgICAvLyBzZWUgdGhlaXIgcmVzcGVjdGl2ZSBkb2NzLlxuICAgIGNyYXNobHl0aWNzQ29sbGVjdGlvbkVuYWJsZWQ6IHRydWUsXG4gICAgb25EeW5hbWljTGlua0NhbGxiYWNrOiBmdW5jdGlvbihyZXN1bHQ6IGFueSkge1xuICAgICAgY29uc29sZS5sb2coJ0R5bmFtaWMgbGluayA6OiAnICsgcmVzdWx0LnVybClcbiAgICAgIHN0b3JlLmRpc3BhdGNoKCdhdXRoZW50aWNhdGlvbk1vZHVsZS9zZXRDcmVhdGVQYXNzd29yZFBhZ2UnKVxuICAgIH0sXG4gICAgc2hvd05vdGlmaWNhdGlvbnNXaGVuSW5Gb3JlZ3JvdW5kOiB0cnVlLFxuICAgIG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IChtZXNzYWdlOiBmaXJlYmFzZS5NZXNzYWdlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgVGl0bGUgOjogJHttZXNzYWdlLnRpdGxlfWApXG4gICAgICBjb25zb2xlLmxvZyhgQm9keSA6OiAke21lc3NhZ2UuYm9keX1gKVxuICAgIH0sXG4gICAgb25QdXNoVG9rZW5SZWNlaXZlZENhbGxiYWNrOiBmdW5jdGlvbih0b2tlbjogc3RyaW5nKSB7XG4gICAgICBjb25zb2xlLmxvZygnRmlyZWJhc2UgcHVzaCB0b2tlbiA6OiAnICsgdG9rZW4pXG4gICAgfSxcbiAgfSlcbiAgLnRoZW4oXG4gICAgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2ZpcmViYXNlLmluaXQgOjogZG9uZScpXG4gICAgfSxcbiAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3IgOjogJHtlcnJvcn1gKVxuICAgIH1cbiAgKVxuLy8gc2V0VGltZW91dCgoKSA9PiB7XG4vLyAgIGZpcmViYXNlLmFkbW9iXG4vLyAgICAgLnNob3dCYW5uZXIoe1xuLy8gICAgICAgc2l6ZTogZmlyZWJhc2UuYWRtb2IuQURfU0laRS5TTUFSVF9CQU5ORVIsIC8vIHNlZSBmaXJlYmFzZS5hZG1vYi5BRF9TSVpFIGZvciBhbGwgb3B0aW9uc1xuLy8gICAgICAgbWFyZ2luczoge1xuLy8gICAgICAgICAvLyBvcHRpb25hbCBuciBvZiBkZXZpY2UgaW5kZXBlbmRlbnQgcGl4ZWxzIGZyb20gdGhlIHRvcCBvciBib3R0b20gKGRvbid0IHNldCBib3RoKVxuLy8gICAgICAgICBib3R0b206IDEwLFxuLy8gICAgICAgICB0b3A6IC0xLFxuLy8gICAgICAgfSxcbi8vICAgICAgIGFuZHJvaWRCYW5uZXJJZDogJ2NhLWFwcC1wdWItOTc5MTE3OTkxMDc3NTU2MS83NDU5NjI2NzMzJyxcbi8vICAgICAgIGlvc0Jhbm5lcklkOiAnY2EtYXBwLXB1Yi05NzkxMTc5OTEwNzc1NTYxLzc0NTk2MjY3MzMnLFxuLy8gICAgICAgdGVzdGluZzogdHJ1ZSwgLy8gd2hlbiBub3QgcnVubmluZyBpbiBwcm9kdWN0aW9uIHNldCB0aGlzIHRvIHRydWUsIEdvb2dsZSBkb2Vzbid0IGxpa2UgaXQgYW55IG90aGVyIHdheVxuLy8gICAgICAgaW9zVGVzdERldmljZUlkczogW1xuLy8gICAgICAgICAvL0FuZHJvaWQgYXV0b21hdGljYWxseSBhZGRzIHRoZSBjb25uZWN0ZWQgZGV2aWNlIGFzIHRlc3QgZGV2aWNlIHdpdGggdGVzdGluZzp0cnVlLCBpT1MgZG9lcyBub3Rcbi8vICAgICAgICAgJzQ1ZDc3YmY1MTNkZmFiYzI5NDliYTA1M2RhODNjMGM3YjdlODc3MTUnLCAvLyBFZGR5J3MgaVBob25lIDZzXG4vLyAgICAgICAgICdmZWU0Y2YzMTlhMjQyZWFiNDcwMTU0M2U0YzE2ZGI4OWM3MjI3MzFmJywgLy8gRWRkeSdzIGlQYWQgUHJvXG4vLyAgICAgICBdLFxuLy8gICAgICAga2V5d29yZHM6IFsnY3JpY2tldCcsICdsb25kb24nXSwgLy8gYWRkIGtleXdvcmRzIGZvciBhZCB0YXJnZXRpbmdcbi8vICAgICAgIG9uT3BlbmVkOiAoKSA9PiBjb25zb2xlLmxvZygnQWQgb3BlbmVkJyksXG4vLyAgICAgICBvbkNsaWNrZWQ6ICgpID0+IGNvbnNvbGUubG9nKCdBZCBjbGlja2VkJyksXG4vLyAgICAgICBvbkxlZnRBcHBsaWNhdGlvbjogKCkgPT4gY29uc29sZS5sb2coJ0FkIGxlZnQgYXBwbGljYXRpb24nKSxcbi8vICAgICB9KVxuLy8gICAgIC50aGVuKFxuLy8gICAgICAgZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdBZE1vYiBiYW5uZXIgc3RhdHVzIDo6IFNob3dpbmcnKVxuLy8gICAgICAgfSxcbi8vICAgICAgIGZ1bmN0aW9uKGVycm9yTWVzc2FnZTogYW55KSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSlcbi8vICAgICAgIH1cbi8vICAgICApXG4vLyB9LCA1MDAwKVxuXG4vLyBQcmludHMgVnVlIGxvZ3Mgd2hlbiAtLWVudi5wcm9kdWN0aW9uIGlzICpOT1QqIHNldCB3aGlsZSBidWlsZGluZ1xuVnVlLmNvbmZpZy5zaWxlbnQgPSBUTlNfRU5WID09PSAncHJvZHVjdGlvbidcblxub3ZlcnJpZGVNb2RhbFZpZXdNZXRob2QoKVxuVnVlLnJlZ2lzdGVyRWxlbWVudCgnUmFkU2lkZURyYXdlcicsICgpID0+IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJykuUmFkU2lkZURyYXdlcilcblZ1ZS5yZWdpc3RlckVsZW1lbnQoJ0NhcmRWaWV3JywgKCkgPT4gcmVxdWlyZSgnQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWNhcmR2aWV3JykuQ2FyZFZpZXcpXG5WdWUucmVnaXN0ZXJFbGVtZW50KCdNb2RhbFN0YWNrJywgKCkgPT4gTW9kYWxTdGFjaylcblZ1ZS51c2UoVnVlV2luZG93ZWRNb2RhbClcblxubGV0IGFwcCA9IExvZ2luXG5cbmlmIChnZXRTdHJpbmcoJ2NhbWVscy10b2tlbicpKSB7XG4gIGNvbnNvbGUubG9nKGAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tdG9rZW4gZXhpc3RzIDo6IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWApXG4gIHN0b3JlLmRpc3BhdGNoKCdhdXRoZW50aWNhdGlvbk1vZHVsZS9zZXRBdXRoVG9rZW4nLCB7XG4gICAgdG9rZW46IGdldFN0cmluZygnY2FtZWxzLXRva2VuJyksXG4gIH0pXG4gIGFwcCA9IEluZGV4XG59XG5cbm5ldyBWdWUoe1xuICBzdG9yZSxcbiAgcmVuZGVyOiBoID0+IGgoJ0ZyYW1lJywgW2goYXBwKV0pLFxufSkuJHN0YXJ0KClcbiJdLCJzb3VyY2VSb290IjoiIn0=