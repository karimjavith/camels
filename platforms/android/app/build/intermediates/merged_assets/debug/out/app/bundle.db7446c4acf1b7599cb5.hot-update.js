webpackHotUpdate("bundle",{

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
if (true) {
    nativescript_vue_1.default.use(nativescript_vue_devtools_1.default);
}
// import { crashlytics } from "nativescript-plugin-firebase";
// import { isAndroid, isIOS } from "tns-core-modules/platform";
var theme_1 = tslib_1.__importDefault(__webpack_require__("../node_modules/@nativescript/theme/index.js"));
var Login_vue_1 = tslib_1.__importDefault(__webpack_require__("./components/Login.vue"));
var ApplicationSettings = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");
var store_1 = tslib_1.__importDefault(__webpack_require__("./store.ts"));
theme_1.default.setMode(theme_1.default.Light); // Or Theme.Light
var firebase = __webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js");
// if (isAndroid) {
//   crashlytics.sendCrashLog(new java.lang.Exception("test Exception"));
// }
firebase
    .init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
    // crashlyticsCollectionEnabled: true,
    onDynamicLinkCallback: function (result) {
        alert(result.url);
        store_1.default.dispatch("authenticationModule/setCreatePasswordPage");
    }
})
    .then(function () {
    console.log("firebase.init done");
}, function (error) {
    console.log("firebase.init error: " + error);
});
firebase.addOnDynamicLinkReceivedCallback(function (_a) {
    var url = _a.url;
    alert(url);
    // ..
});
// Prints Vue logs when --env.production is *NOT* set while building
nativescript_vue_1.default.config.silent = "development" === "production";
nativescript_vue_1.default.registerElement("RadSideDrawer", function () { return __webpack_require__("../node_modules/nativescript-ui-sidedrawer/ui-sidedrawer.js").RadSideDrawer; });
if (ApplicationSettings.getString("camels-token")) {
    store_1.default.dispatch("authenticationModule/setAuthToken", {
        token: JSON.parse(ApplicationSettings.getString("camels-token"))
    });
}
new nativescript_vue_1.default({
    store: store_1.default,
    render: function (h) { return h("Frame", [h(Login_vue_1.default)]); }
}).$start();

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsd0ZBQW9EO0FBQ3BELCtFQUFtQztBQUNuQyxJQUFJLEtBQTBCO0FBQ1A7Q0FDdEI7QUFFRCwwR0FBOEQ7QUFDOUQsWUFBZ0U7QUFDaEUsWUFBd0M7QUFDeEMsbUJBQTJDO0FBQzNDLElBQU0sbUJBQW1CLEdBQUcsdUJBQVEsNkRBQXVDLENBQUMsQ0FBQztBQUU3RSwwREFBNEI7QUFDaUI7QUFDN0MsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLHdCQUFnQztBQUV6RCxtQkFBbUI7QUFDbkIsNEJBQXlFO0FBQ3pFLElBQUk7QUFDSTtLQUNMLElBQUksQ0FBQztJQUNKLGdGQUFrRjtJQUNsRiw2QkFBNkI7SUFDN0Isc0NBQXNDO0lBQ3RDLGVBQTJDO1FBQ3pDLEtBQUssQ0FBYTtBQUMyQztJQUMvRCxDQUFDO0NBQ0YsQ0FBQztLQUNELElBQ0M7SUFDRSxJQUFrQztBQUNwQyxDQUFDLEVBQ0QsVUFBQyxLQUFVO0lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBd0IsS0FBTyxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUNGLENBQUM7QUFDSixRQUFRLENBQUMsZ0NBQWdDLENBQUMsVUFBUyxFQUFZO1FBQVYsWUFBRztJQUN0RCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDWCxLQUFLO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDSCx5RkFBb0U7QUFDcEUscUJBQTZDO0FBRTdDLDBCQUFHLENBQUMsZUFBZSxDQUNqQixlQUFlLEVBQ2YsRUFDQTtBQUVGLElBQUksa0VBQW9CLEVBQTJCO0lBQ2pELGVBQUssQ0FBQyxRQUFRLENBQUMsZ0RBQW1DLENBQUU7UUFDbEQsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsc0JBQVUsaURBQWdCO1FBQy9EO0NBQ0o7QUFFRCxDQUFRO0lBQ04sS0FBSztJQUNMLE1BQU0sRUFBRSxXQUFDLElBQUksUUFBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBUTtDQUNwQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMiLCJmaWxlIjoiYnVuZGxlLmRiNzQ0NmM0YWNmMWI3NTk5Y2I1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlRGV2dG9vbHMgZnJvbSBcIm5hdGl2ZXNjcmlwdC12dWUtZGV2dG9vbHNcIjtcclxuaW1wb3J0IFZ1ZSBmcm9tIFwibmF0aXZlc2NyaXB0LXZ1ZVwiO1xyXG5pZiAoVE5TX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICBWdWUudXNlKFZ1ZURldnRvb2xzKTtcclxufVxyXG5cclxuLy8gaW1wb3J0IHsgY3Jhc2hseXRpY3MgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG4vLyBpbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0IFRoZW1lIGZyb20gXCJAbmF0aXZlc2NyaXB0L3RoZW1lXCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9jb21wb25lbnRzL0xvZ2luLnZ1ZVwiO1xyXG5jb25zdCBBcHBsaWNhdGlvblNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vc3RvcmVcIjtcclxuVGhlbWUuc2V0TW9kZShUaGVtZS5MaWdodCk7IC8vIE9yIFRoZW1lLkxpZ2h0XHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcblxyXG4vLyBpZiAoaXNBbmRyb2lkKSB7XHJcbi8vICAgY3Jhc2hseXRpY3Muc2VuZENyYXNoTG9nKG5ldyBqYXZhLmxhbmcuRXhjZXB0aW9uKFwidGVzdCBFeGNlcHRpb25cIikpO1xyXG4vLyB9XHJcbmZpcmViYXNlXHJcbiAgLmluaXQoe1xyXG4gICAgLy8gT3B0aW9uYWxseSBwYXNzIGluIHByb3BlcnRpZXMgZm9yIGRhdGFiYXNlLCBhdXRoZW50aWNhdGlvbiBhbmQgY2xvdWQgbWVzc2FnaW5nLFxyXG4gICAgLy8gc2VlIHRoZWlyIHJlc3BlY3RpdmUgZG9jcy5cclxuICAgIC8vIGNyYXNobHl0aWNzQ29sbGVjdGlvbkVuYWJsZWQ6IHRydWUsXHJcbiAgICBvbkR5bmFtaWNMaW5rQ2FsbGJhY2s6IGZ1bmN0aW9uKHJlc3VsdDogYW55KSB7XHJcbiAgICAgIGFsZXJ0KHJlc3VsdC51cmwpO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaChcImF1dGhlbnRpY2F0aW9uTW9kdWxlL3NldENyZWF0ZVBhc3N3b3JkUGFnZVwiKTtcclxuICAgIH1cclxuICB9KVxyXG4gIC50aGVuKFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcclxuICAgIH0sXHJcbiAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKTtcclxuICAgIH1cclxuICApO1xyXG5maXJlYmFzZS5hZGRPbkR5bmFtaWNMaW5rUmVjZWl2ZWRDYWxsYmFjayhmdW5jdGlvbih7IHVybCB9OiBhbnkpIHtcclxuICBhbGVydCh1cmwpO1xyXG4gIC8vIC4uXHJcbn0pO1xyXG4vLyBQcmludHMgVnVlIGxvZ3Mgd2hlbiAtLWVudi5wcm9kdWN0aW9uIGlzICpOT1QqIHNldCB3aGlsZSBidWlsZGluZ1xyXG5WdWUuY29uZmlnLnNpbGVudCA9IFROU19FTlYgPT09IFwicHJvZHVjdGlvblwiO1xyXG5cclxuVnVlLnJlZ2lzdGVyRWxlbWVudChcclxuICBcIlJhZFNpZGVEcmF3ZXJcIixcclxuICAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIikuUmFkU2lkZURyYXdlclxyXG4pO1xyXG5cclxuaWYgKEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY2FtZWxzLXRva2VuXCIpKSB7XHJcbiAgc3RvcmUuZGlzcGF0Y2goXCJhdXRoZW50aWNhdGlvbk1vZHVsZS9zZXRBdXRoVG9rZW5cIiwge1xyXG4gICAgdG9rZW46IEpTT04ucGFyc2UoQXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoXCJjYW1lbHMtdG9rZW5cIikpXHJcbiAgfSk7XHJcbn1cclxuXHJcbm5ldyBWdWUoe1xyXG4gIHN0b3JlLFxyXG4gIHJlbmRlcjogaCA9PiBoKFwiRnJhbWVcIiwgW2goTG9naW4pXSlcclxufSkuJHN0YXJ0KCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=