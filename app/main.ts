import VueDevtools from 'nativescript-vue-devtools'
import Vue from 'nativescript-vue'
import RadListView from 'nativescript-ui-listview/vue'
import { ModalStack, overrideModalViewMethod, VueWindowedModal } from 'nativescript-windowed-modal'
import firebase from 'nativescript-plugin-firebase'
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
import { getString } from 'tns-core-modules/application-settings'
import Theme from '@nativescript/theme'
import Login from './views/Login.vue'
import Home from './views/Home.vue'

import store from './store'
Theme.setMode(Theme.Light) // Or Theme.Light

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
      console.log('Dynamic link :: ' + result.url)
      store.dispatch('authenticationModule/setCreatePasswordPage')
    },
    showNotificationsWhenInForeground: true,
    onMessageReceivedCallback: (message: firebase.Message) => {
      console.log(`Title :: ${message.title}`)
      console.log(`Body :: ${message.body}`)
    },
    onPushTokenReceivedCallback: function(token: string) {
      console.log('Firebase push token :: ' + token)
    },
  })
  .then(
    () => {
      console.log('firebase.init :: done')
    },
    (error: any) => {
      console.log(`firebase.init error :: ${error}`)
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
        console.log('AdMob banner status :: Showing')
      },
      function(errorMessage: any) {
        console.log(errorMessage)
      }
    )
}, 5000)

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === 'production'

overrideModalViewMethod()
Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)
Vue.registerElement('CardView', () => require('@nstudio/nativescript-cardview').CardView)
Vue.registerElement('ModalStack', () => ModalStack)
Vue.use(VueWindowedModal)

let app = Login

if (getString('camels-token')) {
  console.log(`token exists :: `)
  store.dispatch('authenticationModule/setAuthToken', {
    token: getString('camels-token'),
  })
  app = Home
}

new Vue({
  store,
  render: h => h('Frame', [h(app)]),
}).$start()
