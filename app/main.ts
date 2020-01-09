import VueDevtools from "nativescript-vue-devtools";
import Vue from "nativescript-vue";
if (TNS_ENV !== "production") {
  Vue.use(VueDevtools);
}

// import { crashlytics } from "nativescript-plugin-firebase";
// import { isAndroid, isIOS } from "tns-core-modules/platform";
import Theme from "@nativescript/theme";
import Login from "./components/Login.vue";
const ApplicationSettings = require("tns-core-modules/application-settings");

import store from "./store";
Theme.setMode(Theme.Light); // Or Theme.Light
const firebase = require("nativescript-plugin-firebase");

// if (isAndroid) {
//   crashlytics.sendCrashLog(new java.lang.Exception("test Exception"));
// }
firebase
  .init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
    // crashlyticsCollectionEnabled: true,
    onDynamicLinkCallback: function(result: any) {
      store.dispatch("authenticationModule/setCreatePasswordPage");
    }
  })
  .then(
    () => {
      console.log("firebase.init done");
    },
    (error: any) => {
      console.log(`firebase.init error: ${error}`);
    }
  );

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === "production";

Vue.registerElement(
  "RadSideDrawer",
  () => require("nativescript-ui-sidedrawer").RadSideDrawer
);

if (ApplicationSettings.getString("camels-token")) {
  store.dispatch("authenticationModule/setAuthToken", {
    token: JSON.parse(ApplicationSettings.getString("camels-token"))
  });
}

new Vue({
  store,
  render: h => h("Frame", [h(Login)])
}).$start();
