// @ts-ignore
import VueDevtools from 'nativescript-vue-devtools'
import Vue from 'nativescript-vue'
import RadListView from 'nativescript-ui-listview/vue'
import DateTimePicker from 'nativescript-datetimepicker/vue'
var firebase = require('nativescript-plugin-firebase')
Vue.use(VueDevtools)
Vue.use(RadListView)
// @ts-ignore
Vue.use(DateTimePicker)

import { crashlytics } from 'nativescript-plugin-firebase'
import { isAndroid, isIOS } from 'tns-core-modules/platform'
import { getString } from 'tns-core-modules/application-settings'
import Theme from '@nativescript/theme'
import Login from './views/Login.vue'
import Index from './views/Index.vue'

import store from './store'
Theme.setMode(Theme.Light) // Or Theme.Light
firebase
  .init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs and 'iOSEmulatorFlush' to flush token before init.
    iOSEmulatorFlush: true,
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
    crashlyticsCollectionEnabled: true,
    onDynamicLinkCallback: function(result: any) {
      store.dispatch('authenticationModule/setCreatePasswordPage')
    },
    showNotificationsWhenInForeground: true,
    // @ts-ignore
    onMessageReceivedCallback: (message: firebase.Message) => {},
    onPushTokenReceivedCallback: function(token: string) {},
  })
  .then(
    () => {
      console.log('firebase.init :: done')
    },
    (error: any) => {
      console.log(`firebase.init error :: ${error}`)
    }
  )

if (isAndroid) {
  // eslint-disable-next-line no-undef
  // @ts-ignore
  // eslint-disable-next-line no-undef
  crashlytics.sendCrashLog(new java.lang.Exception('Crash Exception'))
} else if (isIOS) {
  crashlytics.sendCrashLog(
    // @ts-ignore
    // eslint-disable-next-line no-undef
    new NSError({
      domain: 'ShiploopHttpResponseErrorDomain',
      code: 42,
      // @ts-ignore
      userInfo: null,
    })
  )
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === 'production'

Vue.registerElement('CardView', () => require('@nstudio/nativescript-cardview').CardView)
let app = Login

if (getString('camels-token')) {
  store.dispatch('authenticationModule/setAuthToken', {
    token: getString('camels-token'),
  })
  app = Index
}

new Vue({
  store,
  render: (h: any) => h('Frame', [h(app)]), // @ts-ignore
}).$start()
