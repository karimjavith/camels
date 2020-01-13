import VueDevtools from 'nativescript-vue-devtools'
import Vue from 'nativescript-vue'
import RadListView from 'nativescript-ui-listview/vue'
// @ts-ignore
import { TNSFontIcon, fonticon } from 'nativescript-fonticon'
// TNSFontIcon.debug = true
TNSFontIcon.paths = {
  fa: './assets/fontawesome.css',
}
TNSFontIcon.loadCss()

Vue.filter('fonticon', fonticon)
Vue.use(VueDevtools)
Vue.use(RadListView)

import { crashlytics } from 'nativescript-plugin-firebase'
import { isAndroid, isIOS } from 'tns-core-modules/platform'
import Theme from '@nativescript/theme'
import Login from './views/Login.vue'
const ApplicationSettings = require('tns-core-modules/application-settings')

import store from './store'
Theme.setMode(Theme.Light) // Or Theme.Light
const firebase = require('nativescript-plugin-firebase')

if (isAndroid) {
  // eslint-disable-next-line no-undef
  crashlytics.sendCrashLog(new java.lang.Exception('Crash Exception'))
} else if (isIOS) {
  crashlytics.sendCrashLog(
    // @ts-ignore
    // eslint-disable-next-line no-undef
    new NSError({
      domain: 'ShiploopHttpResponseErrorDomain',
      code: 42,
      userInfo: null,
    })
  )
}
firebase
  .init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
    crashlyticsCollectionEnabled: true,
    onDynamicLinkCallback: function(result: any) {
      alert(result.url)
      store.dispatch('authenticationModule/setCreatePasswordPage')
    },
  })
  .then(
    () => {
      console.log('firebase.init done')
    },
    (error: any) => {
      console.log(`firebase.init error: ${error}`)
    }
  )
setTimeout(() => {
  firebase.admob
    .showBanner({
      size: firebase.admob.AD_SIZE.SMART_BANNER, // see firebase.admob.AD_SIZE for all options
      margins: {
        // optional nr of device independent pixels from the top or bottom (don't set both)
        bottom: 10,
        top: -1,
      },
      androidBannerId: 'ca-app-pub-9791179910775561/7459626733',
      iosBannerId: 'ca-app-pub-9791179910775561/7459626733',
      testing: true, // when not running in production set this to true, Google doesn't like it any other way
      iosTestDeviceIds: [
        //Android automatically adds the connected device as test device with testing:true, iOS does not
        '45d77bf513dfabc2949ba053da83c0c7b7e87715', // Eddy's iPhone 6s
        'fee4cf319a242eab4701543e4c16db89c722731f', // Eddy's iPad Pro
      ],
      keywords: ['cricket', 'london'], // add keywords for ad targeting
      onOpened: () => console.log('Ad opened'),
      onClicked: () => console.log('Ad clicked'),
      onLeftApplication: () => console.log('Ad left application'),
    })
    .then(
      function() {
        console.log('AdMob banner showing')
      },
      function(errorMessage: any) {
        console.log(errorMessage)
      }
    )
}, 5000)
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === 'production'

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)
if (ApplicationSettings.getString('camels-token')) {
  store.dispatch('authenticationModule/setAuthToken', {
    token: JSON.parse(ApplicationSettings.getString('camels-token')),
  })
}

new Vue({
  store,
  render: h => h('Frame', [h(Login)]),
}).$start()
