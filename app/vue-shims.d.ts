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
// 1. Make sure to import 'vue' before declaring augmented types
import Vue from 'vue'

// 2. Specify a file with the types you want to augment
//    Vue has the constructor type in types/vue.d.ts
declare module 'vue/types/vue' {
  // 3. Declare augmentation for Vue
  interface Vue {
    $navigateTo: Function
    state: any
  }
}
