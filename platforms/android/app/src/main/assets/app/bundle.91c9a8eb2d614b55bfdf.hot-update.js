webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/BaseModal.vue?vue&type=script&lang=js&":
false,

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/Matches.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_BaseCardListScrollView_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/BaseCardListScrollView.vue");
/* harmony import */ var _components_BaseButtonWithIcon_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/BaseButtonWithIcon.vue");
/* harmony import */ var _MatchForm_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./views/MatchForm.vue");
/* harmony import */ var _shared_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./_shared/enum.ts");
/* harmony import */ var _shared_enum__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shared_enum__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_firebase_matches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./_shared/firebase/matches.ts");
/* harmony import */ var _shared_firebase_matches__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shared_firebase_matches__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _types_EMatchStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./types/EMatchStatus.ts");
/* harmony import */ var _types_EMatchStatus__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_types_EMatchStatus__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./types/EMatchAvailabilityStatus.ts");
/* harmony import */ var _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_7__);
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
    MatchForm: _MatchForm_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
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
          var result = yield Object(_shared_firebase_matches__WEBPACK_IMPORTED_MODULE_5__["getAllMatches"])(_this.uid);

          if (!result.json.isError) {
            var matches = Object.values(result.json.data).map(match => {
              match.title = "Camels vs ".concat(match.opponent);
              match.statusIcon = match.status === _types_EMatchStatus__WEBPACK_IMPORTED_MODULE_6__["MatchStatus"].ON ? 'fa-toggle-on' : 'fa-toggle-off';
              match.body = "".concat(match.venue, " - ").concat(match.date, " @ ").concat(match.time);

              if (match.status === _types_EMatchStatus__WEBPACK_IMPORTED_MODULE_6__["MatchStatus"].ON) {
                match.showActionItems = true;
                var matchDateTime = "".concat(match.date.split('/').reverse().join('/'), " ").concat(match.time);
                match.actionButtonDisabled = new Date(Date.parse(matchDateTime)).toLocaleString() < new Date().toLocaleString();
                match.cancelText = match.actionButtonDisabled ? "Not Played" : "Not in";
                match.okText = match.actionButtonDisabled ? "Played" : "I am in";

                if (match.myStatus === _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_7__["MatchAvailabilityStatus"].YES) {
                  match.okTextIcon = 'fa-check-circle';
                  match.okTextStyles = {
                    color: 'green'
                  };
                } else if (match.myStatus === _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_7__["MatchAvailabilityStatus"].NO) {
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
        //   this.state = { ...this.state, showModal: true }
        _this2.$showModal(_MatchForm_vue__WEBPACK_IMPORTED_MODULE_3__["default"], {
          props: {},
          fullscreen: false,
          animated: true,
          stretched: false,
          dimAmount: 0.5 // Sets the alpha of the background dim,

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
        var result = yield Object(_shared_firebase_matches__WEBPACK_IMPORTED_MODULE_5__["updateMatchStatusForUser"])(data.id, _this5.uid, _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_7__["MatchAvailabilityStatus"].NO);

        if (!result.isError) {
          yield _this5.getMatches();
        }
      })();
    },

    handleOnOk(data) {
      var _this6 = this;

      return _asyncToGenerator(function* () {
        var result = yield Object(_shared_firebase_matches__WEBPACK_IMPORTED_MODULE_5__["updateMatchStatusForUser"])(data.id, _this6.uid, _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_7__["MatchAvailabilityStatus"].YES);

        if (!result.isError) {
          yield _this6.getMatches();
        }
      })();
    }

  }
});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/BaseModal.vue?vue&type=style&index=0&id=08a8e591&scoped=true&lang=css&":
false,

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/BaseModal.vue?vue&type=template&id=08a8e591&scoped=true&":
false,

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

/***/ "./components/BaseModal.vue":
false,

/***/ "./components/BaseModal.vue?vue&type=script&lang=js&":
false,

/***/ "./components/BaseModal.vue?vue&type=style&index=0&id=08a8e591&scoped=true&lang=css&":
false,

/***/ "./components/BaseModal.vue?vue&type=template&id=08a8e591&scoped=true&":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvTWF0Y2hlcy52dWUiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvTWF0Y2hlcy52dWU/ZmYwNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsaUJBREE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBRkE7O0FBR0E7QUFDQTtBQUNBO0FBQ0EscUJBREE7QUFFQSxpQkFGQTtBQUdBO0FBSEE7QUFEQTtBQU9BLEdBWEE7O0FBWUE7QUFDQSw4REFEQTtBQUVBLDREQUZBOztBQUdBO0FBQ0E7QUFDQSxLQUxBOztBQU1BO0FBQ0E7QUFDQTs7QUFSQSxJQVpBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBLEdBekJBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQTtBQUdBLEdBL0JBO0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsR0F0Q0E7QUF1Q0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSx5REFDQSxLQURBLENBQ0EsR0FEQSxFQUVBLE9BRkEsR0FHQSxJQUhBLENBR0EsR0FIQSxlQUdBLFVBSEE7QUFJQSw2Q0FDQSxrRkFEQTtBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLGlCQUhBLE1BR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxhQXZCQTtBQXdCQSw0Q0FDQSxXQURBO0FBRUE7QUFGQTtBQUlBOztBQUNBO0FBQUE7QUFBQTtBQUNBLFNBakNBLENBaUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFwQ0E7QUFxQ0EsS0F0Q0E7O0FBdUNBO0FBQUE7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSwyQkFGQTtBQUdBLHdCQUhBO0FBSUEsMEJBSkE7QUFLQSx3QkFMQSxDQUtBOztBQUxBO0FBRkE7QUFTQSxLQWhEQTs7QUFpREE7QUFBQTs7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBRUEsS0FuREE7O0FBb0RBO0FBQUE7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUVBLEtBdERBOztBQXVEQTtBQUFBOztBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQSxLQTVEQTs7QUE2REE7QUFBQTs7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBS0E7O0FBbEVBO0FBdkNBLEc7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUyw0QkFBNEIsRUFBRTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsNEJBQTRCLEVBQUU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjkxYzlhOGViMmQ2MTRiNTViZmRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdnVlL2NvbXBvbmVudFxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwU3RhdGUgfSBmcm9tICd2dWV4J1xuaW1wb3J0IEJhc2VDYXJkTGlzdFNjcm9sbFZpZXcgZnJvbSAnLi4vY29tcG9uZW50cy9CYXNlQ2FyZExpc3RTY3JvbGxWaWV3LnZ1ZSdcbmltcG9ydCBCYXNlQnV0dG9uV2l0aEljb24gZnJvbSAnLi4vY29tcG9uZW50cy9CYXNlQnV0dG9uV2l0aEljb24udnVlJ1xuaW1wb3J0IE1hdGNoRm9ybSBmcm9tICcuL01hdGNoRm9ybS52dWUnXG5pbXBvcnQgeyBBcHBSb2xlcyB9IGZyb20gJy4uL19zaGFyZWQvZW51bSdcbmltcG9ydCB7IGdldEFsbE1hdGNoZXMsIHVwZGF0ZU1hdGNoU3RhdHVzRm9yVXNlciB9IGZyb20gJy4uL19zaGFyZWQvZmlyZWJhc2UvbWF0Y2hlcydcbmltcG9ydCB7IE1hdGNoU3RhdHVzIH0gZnJvbSAnLi4vdHlwZXMvRU1hdGNoU3RhdHVzJ1xuaW1wb3J0IHsgTWF0Y2hBdmFpbGFiaWxpdHlTdGF0dXMgfSBmcm9tICcuLi90eXBlcy9FTWF0Y2hBdmFpbGFiaWxpdHlTdGF0dXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ01hdGNoZXMnLFxuICBjb21wb25lbnRzOiB7IEJhc2VDYXJkTGlzdFNjcm9sbFZpZXcsIEJhc2VCdXR0b25XaXRoSWNvbiwgTWF0Y2hGb3JtIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgc2hvd01vZGFsOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDogbWFwU3RhdGUoe1xuICAgIHJvbGU6IHN0YXRlID0+IHN0YXRlLmF1dGhlbnRpY2F0aW9uTW9kdWxlLnVzZXJDb250ZXh0LnJvbGUsXG4gICAgdWlkOiBzdGF0ZSA9PiBzdGF0ZS5hdXRoZW50aWNhdGlvbk1vZHVsZS51c2VyQ29udGV4dC51aWQsXG4gICAgbG9hZGluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmdcbiAgICB9LFxuICAgIGl0ZW1zKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXNcbiAgICB9LFxuICB9KSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdGF0ZS5sb2FkaW5nID0gdHJ1ZVxuICAgIGNvbnNvbGUubG9nKGBNYXRjaGVzIDo6IGNyZWF0ZWRgKVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhgTWF0Y2hlcyA6OiBtb3VudGVkYClcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZ2V0TWF0Y2hlcygpXG4gICAgfSlcbiAgfSxcbiAgdXBkYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coYE1hdGNoZXMgOjogdXBkYXRlZGApXG4gICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhgbG9hZGluZyA6OiAke3RoaXMuc3RhdGUubG9hZGluZ31gKVxuICAgICAgY29uc29sZS5sb2coYGl0ZW1zIDo6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5pdGVtcyl9YClcbiAgICB9KVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgZ2V0TWF0Y2hlcygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldEFsbE1hdGNoZXModGhpcy51aWQpXG4gICAgICAgIGlmICghcmVzdWx0Lmpzb24uaXNFcnJvcikge1xuICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBPYmplY3QudmFsdWVzKHJlc3VsdC5qc29uLmRhdGEpLm1hcChtYXRjaCA9PiB7XG4gICAgICAgICAgICBtYXRjaC50aXRsZSA9IGBDYW1lbHMgdnMgJHttYXRjaC5vcHBvbmVudH1gXG4gICAgICAgICAgICBtYXRjaC5zdGF0dXNJY29uID0gbWF0Y2guc3RhdHVzID09PSBNYXRjaFN0YXR1cy5PTiA/ICdmYS10b2dnbGUtb24nIDogJ2ZhLXRvZ2dsZS1vZmYnXG4gICAgICAgICAgICBtYXRjaC5ib2R5ID0gYCR7bWF0Y2gudmVudWV9IC0gJHttYXRjaC5kYXRlfSBAICR7bWF0Y2gudGltZX1gXG4gICAgICAgICAgICBpZiAobWF0Y2guc3RhdHVzID09PSBNYXRjaFN0YXR1cy5PTikge1xuICAgICAgICAgICAgICBtYXRjaC5zaG93QWN0aW9uSXRlbXMgPSB0cnVlXG4gICAgICAgICAgICAgIGNvbnN0IG1hdGNoRGF0ZVRpbWUgPSBgJHttYXRjaC5kYXRlXG4gICAgICAgICAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgICAgICAgICAgLmpvaW4oJy8nKX0gJHttYXRjaC50aW1lfWBcbiAgICAgICAgICAgICAgbWF0Y2guYWN0aW9uQnV0dG9uRGlzYWJsZWQgPVxuICAgICAgICAgICAgICAgIG5ldyBEYXRlKERhdGUucGFyc2UobWF0Y2hEYXRlVGltZSkpLnRvTG9jYWxlU3RyaW5nKCkgPCBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKClcbiAgICAgICAgICAgICAgbWF0Y2guY2FuY2VsVGV4dCA9IG1hdGNoLmFjdGlvbkJ1dHRvbkRpc2FibGVkID8gYE5vdCBQbGF5ZWRgIDogYE5vdCBpbmBcbiAgICAgICAgICAgICAgbWF0Y2gub2tUZXh0ID0gbWF0Y2guYWN0aW9uQnV0dG9uRGlzYWJsZWQgPyBgUGxheWVkYCA6IGBJIGFtIGluYFxuICAgICAgICAgICAgICBpZiAobWF0Y2gubXlTdGF0dXMgPT09IE1hdGNoQXZhaWxhYmlsaXR5U3RhdHVzLllFUykge1xuICAgICAgICAgICAgICAgIG1hdGNoLm9rVGV4dEljb24gPSAnZmEtY2hlY2stY2lyY2xlJ1xuICAgICAgICAgICAgICAgIG1hdGNoLm9rVGV4dFN0eWxlcyA9IHsgY29sb3I6ICdncmVlbicgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoLm15U3RhdHVzID09PSBNYXRjaEF2YWlsYWJpbGl0eVN0YXR1cy5OTykge1xuICAgICAgICAgICAgICAgIG1hdGNoLmNhbmNlbFRleHRJY29uID0gJ2ZhLXRpbWVzLWNpcmNsZSdcbiAgICAgICAgICAgICAgICBtYXRjaC5jYW5jZWxUZXh0U3R5bGVzID0geyBjb2xvcjogJ3JlZCcgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgaXRlbXM6IG1hdGNoZXMsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlT25DbGljayhldmVudCkge1xuICAgICAgLy8gICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBzaG93TW9kYWw6IHRydWUgfVxuICAgICAgdGhpcy4kc2hvd01vZGFsKE1hdGNoRm9ybSwge1xuICAgICAgICBwcm9wczoge30sXG4gICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgc3RyZXRjaGVkOiBmYWxzZSxcbiAgICAgICAgZGltQW1vdW50OiAwLjUsIC8vIFNldHMgdGhlIGFscGhhIG9mIHRoZSBiYWNrZ3JvdW5kIGRpbSxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBhc3luYyBoYW5kbGVPbk9rRGlhbG9nKGRhdGEpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIHNob3dNb2RhbDogZmFsc2UgfVxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlT25DYW5jZWxEaWFsb2coZGF0YSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgc2hvd01vZGFsOiBmYWxzZSB9XG4gICAgfSxcbiAgICBhc3luYyBoYW5kbE9uQ2FuY2VsKGRhdGEpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHVwZGF0ZU1hdGNoU3RhdHVzRm9yVXNlcihkYXRhLmlkLCB0aGlzLnVpZCwgTWF0Y2hBdmFpbGFiaWxpdHlTdGF0dXMuTk8pXG4gICAgICBpZiAoIXJlc3VsdC5pc0Vycm9yKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0TWF0Y2hlcygpXG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBoYW5kbGVPbk9rKGRhdGEpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHVwZGF0ZU1hdGNoU3RhdHVzRm9yVXNlcihkYXRhLmlkLCB0aGlzLnVpZCwgTWF0Y2hBdmFpbGFiaWxpdHlTdGF0dXMuWUVTKVxuICAgICAgaWYgKCFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICBhd2FpdCB0aGlzLmdldE1hdGNoZXMoKVxuICAgICAgfVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD5cbjx0ZW1wbGF0ZT5cbiAgPFN0YWNrTGF5b3V0PlxuICAgIDxBY3Rpdml0eUluZGljYXRvclxuICAgICAgOnZpc2liaWxpdHk9XCJzdGF0ZS5sb2FkaW5nID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ1wiXG4gICAgICA6YnVzeT1cInN0YXRlLmxvYWRpbmdcIlxuICAgICAgd2lkdGg9XCIyMFwiXG4gICAgICBoZWlnaHQ9XCIyMFwiXG4gICAgICBjbGFzcz1cImxvYWRlclwiXG4gICAgPjwvQWN0aXZpdHlJbmRpY2F0b3I+XG4gICAgPERvY2tMYXlvdXQgdi1pZj1cInJvbGUgPT09IDFcIiBzdHJldGNoTGFzdENoaWxkPVwiZmFsc2VcIj5cbiAgICAgIDxCYXNlQnV0dG9uV2l0aEljb25cbiAgICAgICAgQGhhbmRsZU9uQ2xpY2s9XCJoYW5kbGVPbkNsaWNrXCJcbiAgICAgICAgdGV4dD1cIk5ldyBNYXRjaFwiXG4gICAgICAgIGljb249XCJmYS1wbHVzLWNpcmNsZVwiXG4gICAgICAgIGRvYz1cInJpZ2h0XCJcbiAgICAgIC8+XG4gICAgPC9Eb2NrTGF5b3V0PlxuICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgIDxCYXNlQ2FyZExpc3RTY3JvbGxWaWV3XG4gICAgICAgIHJlZj1cImxpc3RcIlxuICAgICAgICA6aXRlbXM9XCJzdGF0ZS5pdGVtc1wiXG4gICAgICAgIEBoYW5kbGVPbkNhbmNlbD1cImhhbmRsT25DYW5jZWxcIlxuICAgICAgICBAaGFuZGxlT25Paz1cImhhbmRsZU9uT2tcIlxuICAgICAgPlxuICAgICAgPC9CYXNlQ2FyZExpc3RTY3JvbGxWaWV3PlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIDwvU3RhY2tMYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG5zY3JvbGx2aWV3IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuPC9zdHlsZT5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJTdGFja0xheW91dFwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aXZpdHlJbmRpY2F0b3JcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkZXJcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBfdm0uc3RhdGUubG9hZGluZyA/IFwidmlzaWJsZVwiIDogXCJjb2xsYXBzZVwiLFxuICAgICAgICAgIGJ1c3k6IF92bS5zdGF0ZS5sb2FkaW5nLFxuICAgICAgICAgIHdpZHRoOiBcIjIwXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjIwXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0ucm9sZSA9PT0gMVxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJEb2NrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHN0cmV0Y2hMYXN0Q2hpbGQ6IFwiZmFsc2VcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiQmFzZUJ1dHRvbldpdGhJY29uXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogXCJOZXcgTWF0Y2hcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwiZmEtcGx1cy1jaXJjbGVcIixcbiAgICAgICAgICAgICAgICAgIGRvYzogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBoYW5kbGVPbkNsaWNrOiBfdm0uaGFuZGxlT25DbGljayB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiQmFzZUNhcmRMaXN0U2Nyb2xsVmlld1wiLCB7XG4gICAgICAgICAgICByZWY6IFwibGlzdFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5zdGF0ZS5pdGVtcyB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaGFuZGxlT25DYW5jZWw6IF92bS5oYW5kbE9uQ2FuY2VsLFxuICAgICAgICAgICAgICBoYW5kbGVPbk9rOiBfdm0uaGFuZGxlT25Pa1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=