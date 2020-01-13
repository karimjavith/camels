// src/vue-shims.d.ts

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'nativescript-vue-devtools' {
  import VueDevtools from 'nativescript-vue-devtools'
  export default VueDevtools
}

// declare module 'nativescript-fonticon' {
//   import * from 'nativescript-fonticon'
//   export { nativeScriptFontIcon }
// }
