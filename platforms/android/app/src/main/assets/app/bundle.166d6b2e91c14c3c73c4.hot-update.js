webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/BaseModal.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BaseModal',
  props: ['children', 'title', 'cancelText', 'okText'],

  data() {
    return {};
  },

  computed: {},
  methods: {
    handleOnCancelDialog: function handleOnCancelDialog(event) {
      this.$emit('handleOnCancelDialog', {
        action: false
      });
    },
    handleOnOkDialog: function handleOnOkDialog(event) {
      this.$emit('handleOnOkDialog', {
        action: true
      });
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/Matches.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_BaseCardListScrollView_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/BaseCardListScrollView.vue");
/* harmony import */ var _components_BaseButtonWithIcon_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/BaseButtonWithIcon.vue");
/* harmony import */ var _components_BaseModal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/BaseModal.vue");
/* harmony import */ var _MatchForm_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./views/MatchForm.vue");
/* harmony import */ var _shared_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./_shared/enum.ts");
/* harmony import */ var _shared_enum__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shared_enum__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_firebase_matches__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./_shared/firebase/matches.ts");
/* harmony import */ var _shared_firebase_matches__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shared_firebase_matches__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _types_EMatchStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./types/EMatchStatus.ts");
/* harmony import */ var _types_EMatchStatus__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_types_EMatchStatus__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./types/EMatchAvailabilityStatus.ts");
/* harmony import */ var _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_8__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//









/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Matches',
  components: {
    BaseCardListScrollView: _components_BaseCardListScrollView_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    BaseButtonWithIcon: _components_BaseButtonWithIcon_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BaseModal: _components_BaseModal_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    MatchForm: _MatchForm_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },

  data() {
    return {
      state: {
        loading: true,
        items: [],
        showModal: false
      }
    };
  },

  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    role: state => state.authenticationModule.userContext.role,
    uid: state => state.authenticationModule.userContext.uid,

    loading() {
      return this.state.loading;
    },

    items() {
      return this.state.items;
    }

  }),
  created: function created() {
    this.state.loading = true;
    console.log("Matches :: created");
  },
  mounted: function mounted() {
    console.log("Matches :: mounted");
    this.$nextTick(function () {
      this.getMatches();
    });
  },
  updated: function updated() {
    console.log("Matches :: updated");
    this.$nextTick(function () {
      console.log("loading :: ".concat(this.state.loading));
      console.log("items :: ".concat(JSON.stringify(this.state.items)));
    });
  },
  methods: {
    getMatches() {
      var _this = this;

      return _asyncToGenerator(function* () {
        try {
          var result = yield Object(_shared_firebase_matches__WEBPACK_IMPORTED_MODULE_6__["getAllMatches"])(_this.uid);

          if (!result.json.isError) {
            var matches = Object.values(result.json.data).map(match => {
              match.title = "Camels vs ".concat(match.opponent);
              match.statusIcon = match.status === _types_EMatchStatus__WEBPACK_IMPORTED_MODULE_7__["MatchStatus"].ON ? 'fa-toggle-on' : 'fa-toggle-off';
              match.body = "".concat(match.venue, " - ").concat(match.date, " @ ").concat(match.time);

              if (match.status === _types_EMatchStatus__WEBPACK_IMPORTED_MODULE_7__["MatchStatus"].ON) {
                match.showActionItems = true;
                var matchDateTime = "".concat(match.date.split('/').reverse().join('/'), " ").concat(match.time);
                match.actionButtonDisabled = new Date(Date.parse(matchDateTime)).toLocaleString() < new Date().toLocaleString();
                match.cancelText = match.actionButtonDisabled ? "Not Played" : "Not in";
                match.okText = match.actionButtonDisabled ? "Played" : "I am in";

                if (match.myStatus === _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_8__["MatchAvailabilityStatus"].YES) {
                  match.okTextIcon = 'fa-check-circle';
                  match.okTextStyles = {
                    color: 'green'
                  };
                } else if (match.myStatus === _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_8__["MatchAvailabilityStatus"].NO) {
                  match.cancelTextIcon = 'fa-times-circle';
                  match.cancelTextStyles = {
                    color: 'red'
                  };
                }
              }

              return match;
            });
            _this.state = _objectSpread({}, _this.state, {
              items: matches
            });
          }

          _this.state = _objectSpread({}, _this.state, {
            loading: false
          });
        } catch (e) {
          _this.state = _objectSpread({}, _this.state, {
            loading: false
          });
        }
      })();
    },

    handleOnClick(event) {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        _this2.state = _objectSpread({}, _this2.state, {
          showModal: true
        });
      })();
    },

    handleOnOkDialog(data) {
      var _this3 = this;

      return _asyncToGenerator(function* () {
        _this3.state = _objectSpread({}, _this3.state, {
          showModal: false
        });
      })();
    },

    handleOnCancelDialog(data) {
      var _this4 = this;

      return _asyncToGenerator(function* () {
        _this4.state = _objectSpread({}, _this4.state, {
          showModal: false
        });
      })();
    },

    handlOnCancel(data) {
      var _this5 = this;

      return _asyncToGenerator(function* () {
        var result = yield Object(_shared_firebase_matches__WEBPACK_IMPORTED_MODULE_6__["updateMatchStatusForUser"])(data.id, _this5.uid, _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_8__["MatchAvailabilityStatus"].NO);

        if (!result.isError) {
          yield _this5.getMatches();
        }
      })();
    },

    handleOnOk(data) {
      var _this6 = this;

      return _asyncToGenerator(function* () {
        var result = yield Object(_shared_firebase_matches__WEBPACK_IMPORTED_MODULE_6__["updateMatchStatusForUser"])(data.id, _this6.uid, _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_8__["MatchAvailabilityStatus"].YES);

        if (!result.isError) {
          yield _this6.getMatches();
        }
      })();
    }

  }
});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/BaseModal.vue?vue&type=style&index=0&id=08a8e591&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n@keyframes show-data-v-08a8e591 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n.dialogOpen .content[data-v-08a8e591],\n.dialogOpen .action-bar[data-v-08a8e591] {\n  opacity: 0.2;\n}\n.dialog-wrapper[data-v-08a8e591] {\n  visibility: visible;\n  animation-name: show-data-v-08a8e591;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n}\n.dialog-wrapper[data-v-08a8e591] {\n  visibility: collapse;\n  opacity: 0;\n}\n.dialog[data-v-08a8e591] {\n  border-width: 1 0 1 0;\n  border-color: black;\n  background-color: white;\n  width: 100%;\n  margin-top: 100;\n  padding: 20;\n}\n.dialog label[data-v-08a8e591] {\n  margin: 0 15 15 15;\n  color: black;\n}\n", ""]);


    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/BaseModal.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/BaseModal.vue?vue&type=template&id=08a8e591&scoped=true&":
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
    "AbsoluteLayout",
    { staticClass: "dialog-wrapper" },
    [
      _c(
        "StackLayout",
        { staticClass: "dialog" },
        [
          _c("Label", {
            staticClass: "h3",
            attrs: { text: _vm.title, textWrap: "true" }
          }),
          _c(_vm.children, { tag: "component" }),
          _c("Button", {
            staticClass: "btn btn-primary",
            attrs: { text: _vm.cancelText },
            on: { tap: _vm.handleOnCancelDialog }
          }),
          _c("Button", {
            staticClass: "btn btn-outline",
            attrs: { text: _vm.okText },
            on: { tap: _vm.handleOnOkDialog }
          })
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/Invite.vue?vue&type=template&id=71f91110&scoped=true&":
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
    [
      _c(
        "ActionBar",
        [
          _c("ActionItem", {
            attrs: {
              "ios.systemIcon": "9",
              "ios.position": "left",
              "android.systemIcon": "ic_menu_back"
            },
            on: { tap: _vm.onNavigationButtonTap }
          })
        ],
        1
      ),
      _c(
        "StackLayout",
        { staticClass: "form" },
        [
          _c("Label", {
            staticClass: "header",
            attrs: { text: "Invite the camel" }
          }),
          _c(
            "StackLayout",
            { staticClass: "input-field", attrs: { "margin-bottom": "25" } },
            [
              _c("TextField", {
                staticClass: "input",
                attrs: {
                  hint: "name@gmail.com",
                  "keyboard-type": "email",
                  autocorrect: "false",
                  "autocapitalization-type": "none",
                  "return-key-type": "next",
                  "font-size": "18",
                  text: _vm.email
                },
                on: {
                  returnPress: _vm.focusSubmitButton,
                  textChange: function($event) {
                    _vm.email = $event.value
                  }
                }
              }),
              _c("StackLayout", { staticClass: "hr-light" })
            ],
            1
          ),
          _c("Button", {
            ref: "submitButton",
            staticClass: "btn btn-primary m-t-20",
            attrs: { text: "Send Invite" },
            on: { tap: _vm.sendInvite }
          })
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/Matches.vue?vue&type=template&id=13571a58&scoped=true&":
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
    "StackLayout",
    [
      _c("ActivityIndicator", {
        staticClass: "loader",
        attrs: {
          visibility: _vm.state.loading ? "visible" : "collapse",
          busy: _vm.state.loading,
          width: "20",
          height: "20"
        }
      }),
      _vm.state.showModal
        ? _c("BaseModal", {
            attrs: {
              children: _vm.MatchForm,
              title: "New Match",
              cancelText: "Cancel",
              okText: "Create Match"
            },
            on: {
              handleOnOkDialog: _vm.handleOnOkDialog,
              handleOnCancelDialog: _vm.handleOnCancelDialog
            }
          })
        : _vm._e(),
      _vm.role === 1
        ? _c(
            "DockLayout",
            { attrs: { stretchLastChild: "false" } },
            [
              _c("BaseButtonWithIcon", {
                attrs: {
                  text: "New Match",
                  icon: "fa-plus-circle",
                  doc: "right"
                },
                on: { handleOnClick: _vm.handleOnClick }
              })
            ],
            1
          )
        : _vm._e(),
      _c(
        "StackLayout",
        { attrs: { orientation: "horizontal" } },
        [
          _c("BaseCardListScrollView", {
            ref: "list",
            attrs: { items: _vm.state.items },
            on: {
              handleOnCancel: _vm.handlOnCancel,
              handleOnOk: _vm.handleOnOk
            }
          })
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

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./_shared/Loader.ts": "./_shared/Loader.ts",
	"./_shared/enum.ts": "./_shared/enum.ts",
	"./_shared/firebase.js": "./_shared/firebase.js",
	"./_shared/firebase/matches.ts": "./_shared/firebase/matches.ts",
	"./_shared/firebase/users.ts": "./_shared/firebase/users.ts",
	"./_shared/http/http.ts": "./_shared/http/http.ts",
	"./_shared/http/httpHelper.ts": "./_shared/http/httpHelper.ts",
	"./app.scss": "./app.scss",
	"./assets/fontawesome.css": "./assets/fontawesome.css",
	"./main.ts": "./main.ts",
	"./store.ts": "./store.ts",
	"./types/EMatchAvailabilityStatus.ts": "./types/EMatchAvailabilityStatus.ts",
	"./types/EMatchStatus.ts": "./types/EMatchStatus.ts",
	"./types/TMatchDetails.ts": "./types/TMatchDetails.ts",
	"./types/TMessage.ts": "./types/TMessage.ts",
	"./types/TState.ts": "./types/TState.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./components/BaseModal.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModal_vue_vue_type_template_id_08a8e591_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/BaseModal.vue?vue&type=template&id=08a8e591&scoped=true&");
/* harmony import */ var _BaseModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/BaseModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BaseModal_vue_vue_type_style_index_0_id_08a8e591_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/BaseModal.vue?vue&type=style&index=0&id=08a8e591&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BaseModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BaseModal_vue_vue_type_template_id_08a8e591_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BaseModal_vue_vue_type_template_id_08a8e591_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "08a8e591",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('08a8e591')) {
      api.createRecord('08a8e591', component.options)
    } else {
      api.reload('08a8e591', component.options)
    }
    module.hot.accept("./components/BaseModal.vue?vue&type=template&id=08a8e591&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _BaseModal_vue_vue_type_template_id_08a8e591_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/BaseModal.vue?vue&type=template&id=08a8e591&scoped=true&");
(function () {
      api.rerender('08a8e591', {
        render: _BaseModal_vue_vue_type_template_id_08a8e591_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _BaseModal_vue_vue_type_template_id_08a8e591_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/BaseModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/BaseModal.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/BaseModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/BaseModal.vue?vue&type=style&index=0&id=08a8e591&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseModal_vue_vue_type_style_index_0_id_08a8e591_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/BaseModal.vue?vue&type=style&index=0&id=08a8e591&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseModal_vue_vue_type_style_index_0_id_08a8e591_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseModal_vue_vue_type_style_index_0_id_08a8e591_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseModal_vue_vue_type_style_index_0_id_08a8e591_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseModal_vue_vue_type_style_index_0_id_08a8e591_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseModal_vue_vue_type_style_index_0_id_08a8e591_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/BaseModal.vue?vue&type=template&id=08a8e591&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseModal_vue_vue_type_template_id_08a8e591_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/BaseModal.vue?vue&type=template&id=08a8e591&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseModal_vue_vue_type_template_id_08a8e591_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseModal_vue_vue_type_template_id_08a8e591_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/BaseModalTemplate.ts":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9CYXNlTW9kYWwudnVlIiwid2VicGFjazovLy92aWV3cy9NYXRjaGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jhc2VNb2RhbC52dWU/NWFjYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jhc2VNb2RhbC52dWU/YmE1ZCIsIndlYnBhY2s6Ly8vLi92aWV3cy9JbnZpdGUudnVlPzFhNmMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvTWF0Y2hlcy52dWU/ZmYwNSIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmFzZU1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jhc2VNb2RhbC52dWU/NDM5YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jhc2VNb2RhbC52dWU/YjMwMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jhc2VNb2RhbC52dWU/NmEyYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBO0FBQ0EsbUJBREE7QUFFQSxzREFGQTs7QUFHQTtBQUNBO0FBQ0EsR0FMQTs7QUFNQSxjQU5BO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLEtBSEE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFQQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxpQkFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUZBOztBQUdBO0FBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUEsaUJBRkE7QUFHQTtBQUhBO0FBREE7QUFPQSxHQVhBOztBQVlBO0FBQ0EsOERBREE7QUFFQSw0REFGQTs7QUFHQTtBQUNBO0FBQ0EsS0FMQTs7QUFNQTtBQUNBO0FBQ0E7O0FBUkEsSUFaQTtB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Q0w7QUFDcUM7OztBQUc3RjtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwrRUFBTTtBQUNSLEVBQUUsZ0dBQU07QUFDUixFQUFFLHlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUFtRztBQUN2SCxjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQix1RUFBNEQsRUFBRTtBQUFBO0FBQ3BGO0FBQ0EsZ0JBQWdCLGdHQUFNO0FBQ3RCLHlCQUF5Qix5R0FBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQXlLLENBQWdCLDZPQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBN0w7QUFBQTtBQUFBO0FBQUE7QUFBNlksQ0FBZ0IsNGJBQUcsRUFBQyxDOzs7Ozs7OztBQ0FqYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiYnVuZGxlLjE2NmQ2YjJlOTFjMTRjM2M3M2M0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2dpdGh1Yi5jb20vbXNhZWxpY2VzL25zLXVpLXZ1ZS1kZW1vL2Jsb2IvbWFzdGVyL2FwcC92aWV3cy9MaXN0LnZ1ZVxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0Jhc2VNb2RhbCcsXG4gIHByb3BzOiBbJ2NoaWxkcmVuJywgJ3RpdGxlJywgJ2NhbmNlbFRleHQnLCAnb2tUZXh0J10sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH0sXG4gIGNvbXB1dGVkOiB7fSxcbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZU9uQ2FuY2VsRGlhbG9nOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgdGhpcy4kZW1pdCgnaGFuZGxlT25DYW5jZWxEaWFsb2cnLCB7IGFjdGlvbjogZmFsc2UgfSlcbiAgICB9LFxuICAgIGhhbmRsZU9uT2tEaWFsb2c6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB0aGlzLiRlbWl0KCdoYW5kbGVPbk9rRGlhbG9nJywgeyBhY3Rpb246IHRydWUgfSlcbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG48dGVtcGxhdGU+XG4gIDxBYnNvbHV0ZUxheW91dCBjbGFzcz1cImRpYWxvZy13cmFwcGVyXCI+XG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZGlhbG9nXCI+XG4gICAgICA8TGFiZWwgY2xhc3M9XCJoM1wiIDp0ZXh0PVwidGl0bGVcIiB0ZXh0V3JhcD1cInRydWVcIj48L0xhYmVsPlxuICAgICAgPCEtLSBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdnVlL3JlcXVpcmUtY29tcG9uZW50LWlzIC0tPlxuICAgICAgPGNvbXBvbmVudCB2LWJpbmQ6aXM9XCJjaGlsZHJlblwiPjwvY29tcG9uZW50PlxuXG4gICAgICA8QnV0dG9uIDp0ZXh0PVwiY2FuY2VsVGV4dFwiIEB0YXA9XCJoYW5kbGVPbkNhbmNlbERpYWxvZ1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIDp0ZXh0PVwib2tUZXh0XCIgQHRhcD1cImhhbmRsZU9uT2tEaWFsb2dcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZVwiPjwvQnV0dG9uPlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIDwvQWJzb2x1dGVMYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkPlxuQGtleWZyYW1lcyBzaG93IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uZGlhbG9nT3BlbiAuY29udGVudCxcbi5kaWFsb2dPcGVuIC5hY3Rpb24tYmFyIHtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG4uZGlhbG9nLXdyYXBwZXIge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBhbmltYXRpb24tbmFtZTogc2hvdztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmRpYWxvZy13cmFwcGVyIHtcbiAgdmlzaWJpbGl0eTogY29sbGFwc2U7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5kaWFsb2cge1xuICBib3JkZXItd2lkdGg6IDEgMCAxIDA7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTAwO1xuICBwYWRkaW5nOiAyMDtcbn1cblxuLmRpYWxvZyBsYWJlbCB7XG4gIG1hcmdpbjogMCAxNSAxNSAxNTtcbiAgY29sb3I6IGJsYWNrO1xufVxuPC9zdHlsZT5cbiIsIi8vIEB2dWUvY29tcG9uZW50XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBTdGF0ZSB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgQmFzZUNhcmRMaXN0U2Nyb2xsVmlldyBmcm9tICcuLi9jb21wb25lbnRzL0Jhc2VDYXJkTGlzdFNjcm9sbFZpZXcudnVlJ1xuaW1wb3J0IEJhc2VCdXR0b25XaXRoSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0Jhc2VCdXR0b25XaXRoSWNvbi52dWUnXG5pbXBvcnQgQmFzZU1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvQmFzZU1vZGFsLnZ1ZSdcbmltcG9ydCBNYXRjaEZvcm0gZnJvbSAnLi9NYXRjaEZvcm0udnVlJ1xuaW1wb3J0IHsgQXBwUm9sZXMgfSBmcm9tICcuLi9fc2hhcmVkL2VudW0nXG5pbXBvcnQgeyBnZXRBbGxNYXRjaGVzLCB1cGRhdGVNYXRjaFN0YXR1c0ZvclVzZXIgfSBmcm9tICcuLi9fc2hhcmVkL2ZpcmViYXNlL21hdGNoZXMnXG5pbXBvcnQgeyBNYXRjaFN0YXR1cyB9IGZyb20gJy4uL3R5cGVzL0VNYXRjaFN0YXR1cydcbmltcG9ydCB7IE1hdGNoQXZhaWxhYmlsaXR5U3RhdHVzIH0gZnJvbSAnLi4vdHlwZXMvRU1hdGNoQXZhaWxhYmlsaXR5U3RhdHVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdNYXRjaGVzJyxcbiAgY29tcG9uZW50czogeyBCYXNlQ2FyZExpc3RTY3JvbGxWaWV3LCBCYXNlQnV0dG9uV2l0aEljb24sIEJhc2VNb2RhbCwgTWF0Y2hGb3JtIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgc2hvd01vZGFsOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDogbWFwU3RhdGUoe1xuICAgIHJvbGU6IHN0YXRlID0+IHN0YXRlLmF1dGhlbnRpY2F0aW9uTW9kdWxlLnVzZXJDb250ZXh0LnJvbGUsXG4gICAgdWlkOiBzdGF0ZSA9PiBzdGF0ZS5hdXRoZW50aWNhdGlvbk1vZHVsZS51c2VyQ29udGV4dC51aWQsXG4gICAgbG9hZGluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmdcbiAgICB9LFxuICAgIGl0ZW1zKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXNcbiAgICB9LFxuICB9KSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdGF0ZS5sb2FkaW5nID0gdHJ1ZVxuICAgIGNvbnNvbGUubG9nKGBNYXRjaGVzIDo6IGNyZWF0ZWRgKVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhgTWF0Y2hlcyA6OiBtb3VudGVkYClcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZ2V0TWF0Y2hlcygpXG4gICAgfSlcbiAgfSxcbiAgdXBkYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coYE1hdGNoZXMgOjogdXBkYXRlZGApXG4gICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhgbG9hZGluZyA6OiAke3RoaXMuc3RhdGUubG9hZGluZ31gKVxuICAgICAgY29uc29sZS5sb2coYGl0ZW1zIDo6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5pdGVtcyl9YClcbiAgICB9KVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgZ2V0TWF0Y2hlcygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldEFsbE1hdGNoZXModGhpcy51aWQpXG4gICAgICAgIGlmICghcmVzdWx0Lmpzb24uaXNFcnJvcikge1xuICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBPYmplY3QudmFsdWVzKHJlc3VsdC5qc29uLmRhdGEpLm1hcChtYXRjaCA9PiB7XG4gICAgICAgICAgICBtYXRjaC50aXRsZSA9IGBDYW1lbHMgdnMgJHttYXRjaC5vcHBvbmVudH1gXG4gICAgICAgICAgICBtYXRjaC5zdGF0dXNJY29uID0gbWF0Y2guc3RhdHVzID09PSBNYXRjaFN0YXR1cy5PTiA/ICdmYS10b2dnbGUtb24nIDogJ2ZhLXRvZ2dsZS1vZmYnXG4gICAgICAgICAgICBtYXRjaC5ib2R5ID0gYCR7bWF0Y2gudmVudWV9IC0gJHttYXRjaC5kYXRlfSBAICR7bWF0Y2gudGltZX1gXG4gICAgICAgICAgICBpZiAobWF0Y2guc3RhdHVzID09PSBNYXRjaFN0YXR1cy5PTikge1xuICAgICAgICAgICAgICBtYXRjaC5zaG93QWN0aW9uSXRlbXMgPSB0cnVlXG4gICAgICAgICAgICAgIGNvbnN0IG1hdGNoRGF0ZVRpbWUgPSBgJHttYXRjaC5kYXRlXG4gICAgICAgICAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgICAgICAgICAgLmpvaW4oJy8nKX0gJHttYXRjaC50aW1lfWBcbiAgICAgICAgICAgICAgbWF0Y2guYWN0aW9uQnV0dG9uRGlzYWJsZWQgPVxuICAgICAgICAgICAgICAgIG5ldyBEYXRlKERhdGUucGFyc2UobWF0Y2hEYXRlVGltZSkpLnRvTG9jYWxlU3RyaW5nKCkgPCBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKClcbiAgICAgICAgICAgICAgbWF0Y2guY2FuY2VsVGV4dCA9IG1hdGNoLmFjdGlvbkJ1dHRvbkRpc2FibGVkID8gYE5vdCBQbGF5ZWRgIDogYE5vdCBpbmBcbiAgICAgICAgICAgICAgbWF0Y2gub2tUZXh0ID0gbWF0Y2guYWN0aW9uQnV0dG9uRGlzYWJsZWQgPyBgUGxheWVkYCA6IGBJIGFtIGluYFxuICAgICAgICAgICAgICBpZiAobWF0Y2gubXlTdGF0dXMgPT09IE1hdGNoQXZhaWxhYmlsaXR5U3RhdHVzLllFUykge1xuICAgICAgICAgICAgICAgIG1hdGNoLm9rVGV4dEljb24gPSAnZmEtY2hlY2stY2lyY2xlJ1xuICAgICAgICAgICAgICAgIG1hdGNoLm9rVGV4dFN0eWxlcyA9IHsgY29sb3I6ICdncmVlbicgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoLm15U3RhdHVzID09PSBNYXRjaEF2YWlsYWJpbGl0eVN0YXR1cy5OTykge1xuICAgICAgICAgICAgICAgIG1hdGNoLmNhbmNlbFRleHRJY29uID0gJ2ZhLXRpbWVzLWNpcmNsZSdcbiAgICAgICAgICAgICAgICBtYXRjaC5jYW5jZWxUZXh0U3R5bGVzID0geyBjb2xvcjogJ3JlZCcgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgaXRlbXM6IG1hdGNoZXMsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlT25DbGljayhldmVudCkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgc2hvd01vZGFsOiB0cnVlIH1cbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZU9uT2tEaWFsb2coZGF0YSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgc2hvd01vZGFsOiBmYWxzZSB9XG4gICAgfSxcbiAgICBhc3luYyBoYW5kbGVPbkNhbmNlbERpYWxvZyhkYXRhKSB7XG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBzaG93TW9kYWw6IGZhbHNlIH1cbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsT25DYW5jZWwoZGF0YSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXBkYXRlTWF0Y2hTdGF0dXNGb3JVc2VyKGRhdGEuaWQsIHRoaXMudWlkLCBNYXRjaEF2YWlsYWJpbGl0eVN0YXR1cy5OTylcbiAgICAgIGlmICghcmVzdWx0LmlzRXJyb3IpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRNYXRjaGVzKClcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZU9uT2soZGF0YSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXBkYXRlTWF0Y2hTdGF0dXNGb3JVc2VyKGRhdGEuaWQsIHRoaXMudWlkLCBNYXRjaEF2YWlsYWJpbGl0eVN0YXR1cy5ZRVMpXG4gICAgICBpZiAoIXJlc3VsdC5pc0Vycm9yKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0TWF0Y2hlcygpXG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuPHRlbXBsYXRlPlxuICA8U3RhY2tMYXlvdXQ+XG4gICAgPEFjdGl2aXR5SW5kaWNhdG9yXG4gICAgICA6dmlzaWJpbGl0eT1cInN0YXRlLmxvYWRpbmcgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXCJcbiAgICAgIDpidXN5PVwic3RhdGUubG9hZGluZ1wiXG4gICAgICB3aWR0aD1cIjIwXCJcbiAgICAgIGhlaWdodD1cIjIwXCJcbiAgICAgIGNsYXNzPVwibG9hZGVyXCJcbiAgICA+PC9BY3Rpdml0eUluZGljYXRvcj5cbiAgICA8QmFzZU1vZGFsXG4gICAgICB2LWlmPVwic3RhdGUuc2hvd01vZGFsXCJcbiAgICAgIDpjaGlsZHJlbj1cIk1hdGNoRm9ybVwiXG4gICAgICBAaGFuZGxlT25Pa0RpYWxvZz1cImhhbmRsZU9uT2tEaWFsb2dcIlxuICAgICAgQGhhbmRsZU9uQ2FuY2VsRGlhbG9nPVwiaGFuZGxlT25DYW5jZWxEaWFsb2dcIlxuICAgICAgdGl0bGU9XCJOZXcgTWF0Y2hcIlxuICAgICAgY2FuY2VsVGV4dD1cIkNhbmNlbFwiXG4gICAgICBva1RleHQ9XCJDcmVhdGUgTWF0Y2hcIlxuICAgIC8+XG4gICAgPERvY2tMYXlvdXQgdi1pZj1cInJvbGUgPT09IDFcIiBzdHJldGNoTGFzdENoaWxkPVwiZmFsc2VcIj5cbiAgICAgIDxCYXNlQnV0dG9uV2l0aEljb25cbiAgICAgICAgQGhhbmRsZU9uQ2xpY2s9XCJoYW5kbGVPbkNsaWNrXCJcbiAgICAgICAgdGV4dD1cIk5ldyBNYXRjaFwiXG4gICAgICAgIGljb249XCJmYS1wbHVzLWNpcmNsZVwiXG4gICAgICAgIGRvYz1cInJpZ2h0XCJcbiAgICAgIC8+XG4gICAgPC9Eb2NrTGF5b3V0PlxuICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgIDxCYXNlQ2FyZExpc3RTY3JvbGxWaWV3XG4gICAgICAgIHJlZj1cImxpc3RcIlxuICAgICAgICA6aXRlbXM9XCJzdGF0ZS5pdGVtc1wiXG4gICAgICAgIEBoYW5kbGVPbkNhbmNlbD1cImhhbmRsT25DYW5jZWxcIlxuICAgICAgICBAaGFuZGxlT25Paz1cImhhbmRsZU9uT2tcIlxuICAgICAgPlxuICAgICAgPC9CYXNlQ2FyZExpc3RTY3JvbGxWaWV3PlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIDwvU3RhY2tMYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG5zY3JvbGx2aWV3IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuQGtleWZyYW1lcyBzaG93LWRhdGEtdi0wOGE4ZTU5MSB7XFxuZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbnRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxufVxcbi5kaWFsb2dPcGVuIC5jb250ZW50W2RhdGEtdi0wOGE4ZTU5MV0sXFxuLmRpYWxvZ09wZW4gLmFjdGlvbi1iYXJbZGF0YS12LTA4YThlNTkxXSB7XFxuICBvcGFjaXR5OiAwLjI7XFxufVxcbi5kaWFsb2ctd3JhcHBlcltkYXRhLXYtMDhhOGU1OTFdIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBhbmltYXRpb24tbmFtZTogc2hvdy1kYXRhLXYtMDhhOGU1OTE7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuLmRpYWxvZy13cmFwcGVyW2RhdGEtdi0wOGE4ZTU5MV0ge1xcbiAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uZGlhbG9nW2RhdGEtdi0wOGE4ZTU5MV0ge1xcbiAgYm9yZGVyLXdpZHRoOiAxIDAgMSAwO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxMDA7XFxuICBwYWRkaW5nOiAyMDtcXG59XFxuLmRpYWxvZyBsYWJlbFtkYXRhLXYtMDhhOGU1OTFdIHtcXG4gIG1hcmdpbjogMCAxNSAxNSAxNTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXCIsIFwiXCJdKTtcblxuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0Jhc2VNb2RhbC52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJBYnNvbHV0ZUxheW91dFwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZGlhbG9nLXdyYXBwZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGlhbG9nXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDNcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS50aXRsZSwgdGV4dFdyYXA6IFwidHJ1ZVwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhfdm0uY2hpbGRyZW4sIHsgdGFnOiBcImNvbXBvbmVudFwiIH0pLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLmNhbmNlbFRleHQgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmhhbmRsZU9uQ2FuY2VsRGlhbG9nIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5va1RleHQgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmhhbmRsZU9uT2tEaWFsb2cgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkFjdGlvbkl0ZW1cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJpb3Muc3lzdGVtSWNvblwiOiBcIjlcIixcbiAgICAgICAgICAgICAgXCJpb3MucG9zaXRpb25cIjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgIFwiYW5kcm9pZC5zeXN0ZW1JY29uXCI6IFwiaWNfbWVudV9iYWNrXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbk5hdmlnYXRpb25CdXR0b25UYXAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm1cIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoZWFkZXJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiSW52aXRlIHRoZSBjYW1lbFwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIiwgYXR0cnM6IHsgXCJtYXJnaW4tYm90dG9tXCI6IFwiMjVcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBoaW50OiBcIm5hbWVAZ21haWwuY29tXCIsXG4gICAgICAgICAgICAgICAgICBcImtleWJvYXJkLXR5cGVcIjogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgIFwiYXV0b2NhcGl0YWxpemF0aW9uLXR5cGVcIjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICBcInJldHVybi1rZXktdHlwZVwiOiBcIm5leHRcIixcbiAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMThcIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5lbWFpbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblByZXNzOiBfdm0uZm9jdXNTdWJtaXRCdXR0b24sXG4gICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmVtYWlsID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0XCIgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICByZWY6IFwic3VibWl0QnV0dG9uXCIsXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlNlbmQgSW52aXRlXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnNlbmRJbnZpdGUgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJTdGFja0xheW91dFwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aXZpdHlJbmRpY2F0b3JcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkZXJcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBfdm0uc3RhdGUubG9hZGluZyA/IFwidmlzaWJsZVwiIDogXCJjb2xsYXBzZVwiLFxuICAgICAgICAgIGJ1c3k6IF92bS5zdGF0ZS5sb2FkaW5nLFxuICAgICAgICAgIHdpZHRoOiBcIjIwXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjIwXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uc3RhdGUuc2hvd01vZGFsXG4gICAgICAgID8gX2MoXCJCYXNlTW9kYWxcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgY2hpbGRyZW46IF92bS5NYXRjaEZvcm0sXG4gICAgICAgICAgICAgIHRpdGxlOiBcIk5ldyBNYXRjaFwiLFxuICAgICAgICAgICAgICBjYW5jZWxUZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgICAgICAgICBva1RleHQ6IFwiQ3JlYXRlIE1hdGNoXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBoYW5kbGVPbk9rRGlhbG9nOiBfdm0uaGFuZGxlT25Pa0RpYWxvZyxcbiAgICAgICAgICAgICAgaGFuZGxlT25DYW5jZWxEaWFsb2c6IF92bS5oYW5kbGVPbkNhbmNlbERpYWxvZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0ucm9sZSA9PT0gMVxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJEb2NrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHN0cmV0Y2hMYXN0Q2hpbGQ6IFwiZmFsc2VcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiQmFzZUJ1dHRvbldpdGhJY29uXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogXCJOZXcgTWF0Y2hcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwiZmEtcGx1cy1jaXJjbGVcIixcbiAgICAgICAgICAgICAgICAgIGRvYzogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBoYW5kbGVPbkNsaWNrOiBfdm0uaGFuZGxlT25DbGljayB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiQmFzZUNhcmRMaXN0U2Nyb2xsVmlld1wiLCB7XG4gICAgICAgICAgICByZWY6IFwibGlzdFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5zdGF0ZS5pdGVtcyB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaGFuZGxlT25DYW5jZWw6IF92bS5oYW5kbE9uQ2FuY2VsLFxuICAgICAgICAgICAgICBoYW5kbGVPbk9rOiBfdm0uaGFuZGxlT25Pa1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciBtYXAgPSB7XG5cdFwiLi9fc2hhcmVkL0xvYWRlci50c1wiOiBcIi4vX3NoYXJlZC9Mb2FkZXIudHNcIixcblx0XCIuL19zaGFyZWQvZW51bS50c1wiOiBcIi4vX3NoYXJlZC9lbnVtLnRzXCIsXG5cdFwiLi9fc2hhcmVkL2ZpcmViYXNlLmpzXCI6IFwiLi9fc2hhcmVkL2ZpcmViYXNlLmpzXCIsXG5cdFwiLi9fc2hhcmVkL2ZpcmViYXNlL21hdGNoZXMudHNcIjogXCIuL19zaGFyZWQvZmlyZWJhc2UvbWF0Y2hlcy50c1wiLFxuXHRcIi4vX3NoYXJlZC9maXJlYmFzZS91c2Vycy50c1wiOiBcIi4vX3NoYXJlZC9maXJlYmFzZS91c2Vycy50c1wiLFxuXHRcIi4vX3NoYXJlZC9odHRwL2h0dHAudHNcIjogXCIuL19zaGFyZWQvaHR0cC9odHRwLnRzXCIsXG5cdFwiLi9fc2hhcmVkL2h0dHAvaHR0cEhlbHBlci50c1wiOiBcIi4vX3NoYXJlZC9odHRwL2h0dHBIZWxwZXIudHNcIixcblx0XCIuL2FwcC5zY3NzXCI6IFwiLi9hcHAuc2Nzc1wiLFxuXHRcIi4vYXNzZXRzL2ZvbnRhd2Vzb21lLmNzc1wiOiBcIi4vYXNzZXRzL2ZvbnRhd2Vzb21lLmNzc1wiLFxuXHRcIi4vbWFpbi50c1wiOiBcIi4vbWFpbi50c1wiLFxuXHRcIi4vc3RvcmUudHNcIjogXCIuL3N0b3JlLnRzXCIsXG5cdFwiLi90eXBlcy9FTWF0Y2hBdmFpbGFiaWxpdHlTdGF0dXMudHNcIjogXCIuL3R5cGVzL0VNYXRjaEF2YWlsYWJpbGl0eVN0YXR1cy50c1wiLFxuXHRcIi4vdHlwZXMvRU1hdGNoU3RhdHVzLnRzXCI6IFwiLi90eXBlcy9FTWF0Y2hTdGF0dXMudHNcIixcblx0XCIuL3R5cGVzL1RNYXRjaERldGFpbHMudHNcIjogXCIuL3R5cGVzL1RNYXRjaERldGFpbHMudHNcIixcblx0XCIuL3R5cGVzL1RNZXNzYWdlLnRzXCI6IFwiLi90eXBlcy9UTWVzc2FnZS50c1wiLFxuXHRcIi4vdHlwZXMvVFN0YXRlLnRzXCI6IFwiLi90eXBlcy9UU3RhdGUudHNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9CYXNlTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA4YThlNTkxJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Jhc2VNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Jhc2VNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQmFzZU1vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA4YThlNTkxJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwOGE4ZTU5MVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEthcmltIE1vaGFtZWRcXFxcZGV2XFxcXGNhbWVsc2NjXFxcXGNhbWVsc1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwOGE4ZTU5MScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwOGE4ZTU5MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwOGE4ZTU5MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQmFzZU1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wOGE4ZTU5MSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwOGE4ZTU5MScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9CYXNlTW9kYWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2VNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CYXNlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CYXNlTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDhhOGU1OTEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZU1vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA4YThlNTkxJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2VNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDhhOGU1OTEmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9