import devtools from "@vue/devtools";
import Vue from "nativescript-vue";
import { crashlytics } from "nativescript-plugin-firebase";
import { isAndroid, isIOS } from "tns-core-modules/platform";
import App from "./components/App.vue";
import Login from "./components/Login.vue";

import store from "./store";
const firebase = require("nativescript-plugin-firebase");
if (TNS_ENV !== "production") {
  devtools.connect("localhost", 3000);
  // Vue.use(devtools);
}
if (isAndroid) {
  crashlytics.sendCrashLog(new java.lang.Exception("test Exception"));
}
firebase
  .init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
    crashlyticsCollectionEnabled: true
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

new Vue({
  store,
  render: h => h("frame", [h(Login)])
}).$start();
