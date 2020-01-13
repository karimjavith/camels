module.exports = {
  root: true,
  "extends": [
    // use the recommended rule set for both plain javascript and vue
    "eslint:recommended",
    "plugin:vue/recommended",
    'plugin:prettier-vue/recommended',
    'prettier/vue',
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "sourceType": "module",
    "allowImportExportEverywhere": false
  },
  "globals": {
    "require": "readonly",
    "TNS_ENV": "readonly"
  },
  settings: {
    'prettier-vue': {
      // Settings for how to process Vue SFC Blocks
      SFCBlocks: {
        /**
         * Use prettier to process `<template>` blocks or not
         *
         * If set to `false`, remember not to `extends: ['prettier/vue']`, as you need the rules from `eslint-plugin-vue` to lint `<template>` blocks
         *
         * @default true
         */
        template: false,
 
        /**
         * Use prettier to process `<script>` blocks or not
         *
         * @default true
         */
        script: true,
 
        /**
         * Use prettier to process `<style>` blocks or not
         *
         * @default true
         */
        style: true,
 
        // Settings for how to process custom blocks
        customBlocks: {
          // Treat the `<docs>` block as a `.markdown` file
          docs: { lang: 'markdown' },
 
          // Treat the `<config>` block as a `.json` file
          config: { lang: 'json' },
 
          // Treat the `<module>` block as a `.js` file
          module: { lang: 'js' },
 
          // Ignore `<comments>` block (omit it or set it to `false` to ignore the block)
          comments: false,
 
          // Other custom blocks that are not listed here will be ignored
        },
      },
 
      // Use prettierrc for prettier options or not (default: `true`)
      usePrettierrc: true,
 
      // Set the options for `prettier.getFileInfo`.
      // @see https://prettier.io/docs/en/api.html#prettiergetfileinfofilepath-options
      fileInfoOptions: {
        // Path to ignore file (default: `'.prettierignore'`)
        // Notice that the ignore file is only used for this plugin
        ignorePath: '.testignore',
 
        // Process the files in `node_modules` or not (default: `false`)
        withNodeModules: false,
      },
    },
  },
  "plugins": ["vue", "nativescript"],
  "rules": {
    "nativescript/no-short-imports": 1,
    // we should always disable console logs and debugging in production
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off", 
    "eol-last": 0,
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "max-len": 0,
    "max-lines": 0,
    "unicode-bom":0,
    "linebreak-style": 0,
    "no-unused-vars": 1,
    "vue/attribute-hyphenation": 0,
    'prettier-vue/prettier': [
      'error',
      {
        // Override all options of `prettier` here
        // @see https://prettier.io/docs/en/options.html
        printWidth: 100,
        singleQuote: true,
        semi: false,
        trailingComma: 'es5',
        endOfLine:"lf"
      },
    ],
  }
}
