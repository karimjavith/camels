webpackHotUpdate("bundle",{

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
              _c("text-field", {
                attrs: {
                  value: _vm.user.emal,
                  returnKeyType: "next",
                  type: "email"
                }
              }),
              _c(
                "StackLayout",
                { staticClass: "input-field" },
                [
                  _c("TextField", {
                    ref: "password",
                    staticClass: "input nt-input",
                    attrs: {
                      returnKeyType: "next",
                      hint: "*********",
                      secure: "true",
                      text: _vm.user.password
                    },
                    on: {
                      returnPress: _vm.focusLoginButton,
                      textChange: function($event) {
                        return _vm.$set(_vm.user, "password", $event.value)
                      }
                    }
                  }),
                  _c("StackLayout", { staticClass: "hr-light" })
                ],
                1
              ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9Mb2dpbi52dWU/ZTliYyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUywwQkFBMEIsRUFBRTtBQUMxQztBQUNBO0FBQ0E7QUFDQSxTQUFTLHNCQUFzQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLDhCQUE4QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsaUJBQWlCLDZCQUE2QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLHFDQUFxQywwQkFBMEI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QyxxQkFBcUI7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQSx3QkFBd0IsZ0NBQWdDO0FBQ3hELHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyRUEsd0ZBQW1EO0FBQ25ELCtFQUFrQztBQUNsQyxTQUFzRDtBQUNIO0FBQ25ELFFBQWE7QUFDYiwwR0FBNkQ7QUFDN0QsWUFBMkI7QUFDM0IsWUFBb0I7SUFDbEIsRUFBRSxFQUFFLFdBQTBCO0NBQy9CO0FBQ0QsbUNBQVcsQ0FBQyxPQUFPLEVBQUU7QUFFVztBQUNoQywwQkFBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBWTtBQUNwQiwwQkFBRyxDQUFDLEdBQUcsQ0FBQyxhQUFXLENBQUM7QUFFcEIsNEJBQTBEO0FBQzFELGNBQTREO0FBQ0s7QUFDakUsK0RBQXVDO0FBQ3ZDLHdFQUFxQztBQUNyQyxrQ0FBbUM7QUFFbkMsMERBQTJCO0FBQzNCLGVBQUssQ0FBQyxHQUFzQztBQUU1QyxJQUFJLFVBQVc7QUFDdUI7SUFDcEMsMENBQVcsQ0FBQyxPQUF3RDtDQUNyRTtLQUFNLElBQVc7SUFDaEIsSUFBd0I7SUFDdEIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxJQUFJLE9BQU8sQ0FBQztRQUNWLE1BQU0sRUFBRSxpQ0FBaUM7UUFDekMsSUFBSSxFQUFFLEVBQUU7UUFDUixRQUFRLEVBQUUsQ0FBSTtLQUNmLENBQUMsQ0FDSDtDQUNGO0FBQ0QsdUZBQVE7S0FDTCxJQUFJLENBQUM7SUFDSiwwREFBa0Y7SUFDbEYsb0VBQTZCO0lBQzdCLDRCQUE0QixFQUFFLElBQUk7SUFDbEMscUJBQXFCLEVBQUUsVUFBUyxNQUFXO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQXVCLHdEQUFTO1FBQzVDLGVBQUssQ0FBQyxRQUFRLENBQUMsMEdBQTZDO0lBQzlELENBQUM7SUFDRCw2Q0FBaUMsaUVBQU07SUFDdkMsdUJBQXFEO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBWSxPQUFPLENBQUMsR0FBUTtRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQVcsRUFBZTtFQUN2QztJQUNELDJCQUEyQixFQUFFLFVBQVMsR0FBYTtRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztJQUNoRCxDQUFDO0NBQ0YsQ0FBQztLQUNELElBQUksQ0FDSCwrQ0FBQztJQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEVBQXdCO0FBQ3RDLENBQUMsRUFDRCxVQUFDLEtBQVU7SUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUEyQiwrQ0FBTztBQUNoRCxDQUFDLENBQ0Y7QUFDSCxVQUFVLENBQUMsa0RBQUM7SUFDVixxREFBUyxhQUFLO1NBQ1gsVUFBVSxDQUFDO1FBQ1YsSUFBSSxFQUFFLGFBQW1DO1FBQ3pDLE9BQU8sRUFBRTtZQUNQLG1GQUFtRjtDQUN6RTtZQUNWLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDUjtRQUNELFNBQXlEO1FBQ3pELFdBQVcsRUFBRSxtQkFBd0M7UUFDckQsT0FBTyxFQUFNO1FBQ2IsZ0JBQWdCLEVBQUU7WUFDaEIsS0FBZ0c7WUFDaEcsV0FBMEM7UUFDQTtDQUMzQztRQUNELFFBQVEsRUFBRSxDQUFDLFNBQVMsRUFBRSxRQUFTO1FBQy9CLEdBQXdDO1FBQ3hDLFNBQVMsRUFBRSxjQUFNLGNBQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQXpCLENBQXlCO1FBQzFDLGlCQUFpQixFQUFFLE1BQXdDO0tBQzVELENBQUM7U0FDRCxJQUFJLENBQ0g7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDO0lBQy9DLENBQUMsRUFDRCxVQUFTLFlBQWlCO01BQ0M7SUFDM0IsQ0FBQyxDQUNGO0FBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQztBQUVSLGlEQUFvRTtBQUNwRSwwQkFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBd0I7QUFDNUMsTUFBK0Y7QUFFL0YsSUFBSSxHQUFHLEdBQUcsbUJBQUs7QUFFZixJQUFJLGdDQUFTLENBQUMsY0FBYyxDQUFDLEVBQUU7SUFDN0IsRUFBK0I7RUFDcUI7UUFDbEQsS0FBSyxFQUFFLFFBQXlCO0tBQ2pDLENBQUM7SUFDRixHQUFHLEdBQUcsV0FBSTtDQUNYO0FBRUQsR0FBUTtJQUNOLEtBQUs7SUFDTCxNQUFNLEVBQUUsV0FBQyxJQUFJLFFBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQU87Q0FDbEMsQ0FBQyxDQUFDLE1BQU0sRUFBRSIsImZpbGUiOiJidW5kbGUuMjVkY2E4ODIzNWNlNDMwNTBhYzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwidHJ1ZVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibnQtZm9ybSBmb3JtXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ0ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLmVtYWwsXG4gICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBcIm5leHRcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dCBudC1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwibmV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiKioqKioqKioqXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc2VjdXJlOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0udXNlci5wYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblByZXNzOiBfdm0uZm9jdXNMb2dpbkJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChfdm0udXNlciwgXCJwYXNzd29yZFwiLCAkZXZlbnQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICByZWY6IFwibG9naW5CdXR0b25cIixcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgbS10LTIwIC1wcmltYXJ5IC1yb3VuZGVkLXNtXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJMb2cgSW5cIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnN1Ym1pdCB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJudC1sYWJlbCBsb2dpbi1sYWJlbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiRm9yZ290IHlvdXIgcGFzc3dvcmQ/XCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5mb3Jnb3RQYXNzd29yZCB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IFZ1ZURldnRvb2xzIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUtZGV2dG9vbHMnXG5pbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnXG5pbXBvcnQgUmFkTGlzdFZpZXcgZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L3Z1ZSdcbmltcG9ydCBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJ1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHsgVE5TRm9udEljb24sIGZvbnRpY29uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWZvbnRpY29uJ1xuLy8gVE5TRm9udEljb24uZGVidWcgPSB0cnVlXG5UTlNGb250SWNvbi5wYXRocyA9IHtcbiAgZmE6ICcuL2Fzc2V0cy9mb250YXdlc29tZS5jc3MnLFxufVxuVE5TRm9udEljb24ubG9hZENzcygpXG5cblZ1ZS5maWx0ZXIoJ2ZvbnRpY29uJywgZm9udGljb24pXG5WdWUudXNlKFZ1ZURldnRvb2xzKVxuVnVlLnVzZShSYWRMaXN0VmlldylcblxuaW1wb3J0IHsgY3Jhc2hseXRpY3MgfSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJ1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nXG5pbXBvcnQgeyBnZXRTdHJpbmcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJ1xuaW1wb3J0IFRoZW1lIGZyb20gJ0BuYXRpdmVzY3JpcHQvdGhlbWUnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi92aWV3cy9Mb2dpbi52dWUnXG5pbXBvcnQgSG9tZSBmcm9tICcuL3ZpZXdzL0hvbWUudnVlJ1xuXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcblRoZW1lLnNldE1vZGUoVGhlbWUuTGlnaHQpIC8vIE9yIFRoZW1lLkxpZ2h0XG5cbmlmIChpc0FuZHJvaWQpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGNyYXNobHl0aWNzLnNlbmRDcmFzaExvZyhuZXcgamF2YS5sYW5nLkV4Y2VwdGlvbignQ3Jhc2ggRXhjZXB0aW9uJykpXG59IGVsc2UgaWYgKGlzSU9TKSB7XG4gIGNyYXNobHl0aWNzLnNlbmRDcmFzaExvZyhcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgbmV3IE5TRXJyb3Ioe1xuICAgICAgZG9tYWluOiAnU2hpcGxvb3BIdHRwUmVzcG9uc2VFcnJvckRvbWFpbicsXG4gICAgICBjb2RlOiA0MixcbiAgICAgIHVzZXJJbmZvOiBudWxsLFxuICAgIH0pXG4gIClcbn1cbmZpcmViYXNlXG4gIC5pbml0KHtcbiAgICAvLyBPcHRpb25hbGx5IHBhc3MgaW4gcHJvcGVydGllcyBmb3IgZGF0YWJhc2UsIGF1dGhlbnRpY2F0aW9uIGFuZCBjbG91ZCBtZXNzYWdpbmcsXG4gICAgLy8gc2VlIHRoZWlyIHJlc3BlY3RpdmUgZG9jcy5cbiAgICBjcmFzaGx5dGljc0NvbGxlY3Rpb25FbmFibGVkOiB0cnVlLFxuICAgIG9uRHluYW1pY0xpbmtDYWxsYmFjazogZnVuY3Rpb24ocmVzdWx0OiBhbnkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEeW5hbWljIGxpbmsgOjogJyArIHJlc3VsdC51cmwpXG4gICAgICBzdG9yZS5kaXNwYXRjaCgnYXV0aGVudGljYXRpb25Nb2R1bGUvc2V0Q3JlYXRlUGFzc3dvcmRQYWdlJylcbiAgICB9LFxuICAgIHNob3dOb3RpZmljYXRpb25zV2hlbkluRm9yZWdyb3VuZDogdHJ1ZSxcbiAgICBvbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrOiAobWVzc2FnZTogZmlyZWJhc2UuTWVzc2FnZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYFRpdGxlIDo6ICR7bWVzc2FnZS50aXRsZX1gKVxuICAgICAgY29uc29sZS5sb2coYEJvZHkgOjogJHttZXNzYWdlLmJvZHl9YClcbiAgICB9LFxuICAgIG9uUHVzaFRva2VuUmVjZWl2ZWRDYWxsYmFjazogZnVuY3Rpb24odG9rZW46IHN0cmluZykge1xuICAgICAgY29uc29sZS5sb2coJ0ZpcmViYXNlIHB1c2ggdG9rZW4gOjogJyArIHRva2VuKVxuICAgIH0sXG4gIH0pXG4gIC50aGVuKFxuICAgICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdmaXJlYmFzZS5pbml0IDo6IGRvbmUnKVxuICAgIH0sXG4gICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yIDo6ICR7ZXJyb3J9YClcbiAgICB9XG4gIClcbnNldFRpbWVvdXQoKCkgPT4ge1xuICBmaXJlYmFzZS5hZG1vYlxuICAgIC5zaG93QmFubmVyKHtcbiAgICAgIHNpemU6IGZpcmViYXNlLmFkbW9iLkFEX1NJWkUuU01BUlRfQkFOTkVSLCAvLyBzZWUgZmlyZWJhc2UuYWRtb2IuQURfU0laRSBmb3IgYWxsIG9wdGlvbnNcbiAgICAgIG1hcmdpbnM6IHtcbiAgICAgICAgLy8gb3B0aW9uYWwgbnIgb2YgZGV2aWNlIGluZGVwZW5kZW50IHBpeGVscyBmcm9tIHRoZSB0b3Agb3IgYm90dG9tIChkb24ndCBzZXQgYm90aClcbiAgICAgICAgYm90dG9tOiAxMCxcbiAgICAgICAgdG9wOiAtMSxcbiAgICAgIH0sXG4gICAgICBhbmRyb2lkQmFubmVySWQ6ICdjYS1hcHAtcHViLTk3OTExNzk5MTA3NzU1NjEvNzQ1OTYyNjczMycsXG4gICAgICBpb3NCYW5uZXJJZDogJ2NhLWFwcC1wdWItOTc5MTE3OTkxMDc3NTU2MS83NDU5NjI2NzMzJyxcbiAgICAgIHRlc3Rpbmc6IHRydWUsIC8vIHdoZW4gbm90IHJ1bm5pbmcgaW4gcHJvZHVjdGlvbiBzZXQgdGhpcyB0byB0cnVlLCBHb29nbGUgZG9lc24ndCBsaWtlIGl0IGFueSBvdGhlciB3YXlcbiAgICAgIGlvc1Rlc3REZXZpY2VJZHM6IFtcbiAgICAgICAgLy9BbmRyb2lkIGF1dG9tYXRpY2FsbHkgYWRkcyB0aGUgY29ubmVjdGVkIGRldmljZSBhcyB0ZXN0IGRldmljZSB3aXRoIHRlc3Rpbmc6dHJ1ZSwgaU9TIGRvZXMgbm90XG4gICAgICAgICc0NWQ3N2JmNTEzZGZhYmMyOTQ5YmEwNTNkYTgzYzBjN2I3ZTg3NzE1JywgLy8gRWRkeSdzIGlQaG9uZSA2c1xuICAgICAgICAnZmVlNGNmMzE5YTI0MmVhYjQ3MDE1NDNlNGMxNmRiODljNzIyNzMxZicsIC8vIEVkZHkncyBpUGFkIFByb1xuICAgICAgXSxcbiAgICAgIGtleXdvcmRzOiBbJ2NyaWNrZXQnLCAnbG9uZG9uJ10sIC8vIGFkZCBrZXl3b3JkcyBmb3IgYWQgdGFyZ2V0aW5nXG4gICAgICBvbk9wZW5lZDogKCkgPT4gY29uc29sZS5sb2coJ0FkIG9wZW5lZCcpLFxuICAgICAgb25DbGlja2VkOiAoKSA9PiBjb25zb2xlLmxvZygnQWQgY2xpY2tlZCcpLFxuICAgICAgb25MZWZ0QXBwbGljYXRpb246ICgpID0+IGNvbnNvbGUubG9nKCdBZCBsZWZ0IGFwcGxpY2F0aW9uJyksXG4gICAgfSlcbiAgICAudGhlbihcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnQWRNb2IgYmFubmVyIHN0YXR1cyA6OiBTaG93aW5nJylcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbihlcnJvck1lc3NhZ2U6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpXG4gICAgICB9XG4gICAgKVxufSwgNTAwMClcblxuLy8gUHJpbnRzIFZ1ZSBsb2dzIHdoZW4gLS1lbnYucHJvZHVjdGlvbiBpcyAqTk9UKiBzZXQgd2hpbGUgYnVpbGRpbmdcblZ1ZS5jb25maWcuc2lsZW50ID0gVE5TX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG5WdWUucmVnaXN0ZXJFbGVtZW50KCdSYWRTaWRlRHJhd2VyJywgKCkgPT4gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInKS5SYWRTaWRlRHJhd2VyKVxuXG5sZXQgYXBwID0gTG9naW5cblxuaWYgKGdldFN0cmluZygnY2FtZWxzLXRva2VuJykpIHtcbiAgY29uc29sZS5sb2coYHRva2VuIGV4aXN0cyA6OiBgKVxuICBzdG9yZS5kaXNwYXRjaCgnYXV0aGVudGljYXRpb25Nb2R1bGUvc2V0QXV0aFRva2VuJywge1xuICAgIHRva2VuOiBnZXRTdHJpbmcoJ2NhbWVscy10b2tlbicpLFxuICB9KVxuICBhcHAgPSBIb21lXG59XG5cbm5ldyBWdWUoe1xuICBzdG9yZSxcbiAgcmVuZGVyOiBoID0+IGgoJ0ZyYW1lJywgW2goYXBwKV0pLFxufSkuJHN0YXJ0KClcbiJdLCJzb3VyY2VSb290IjoiIn0=