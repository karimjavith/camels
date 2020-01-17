webpackHotUpdate("bundle",{

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
        items: []
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
        _this2.$showModal(_components_BaseModal_vue__WEBPACK_IMPORTED_MODULE_3__["default"], {
          props: {
            children: _MatchForm_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
          }
        });
      })();
    },

    handlOnCancel(data) {
      var _this3 = this;

      return _asyncToGenerator(function* () {
        var result = yield Object(_shared_firebase_matches__WEBPACK_IMPORTED_MODULE_6__["updateMatchStatusForUser"])(data.id, _this3.uid, _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_8__["MatchAvailabilityStatus"].NO);

        if (!result.isError) {
          yield _this3.getMatches();
        }
      })();
    },

    handleOnOk(data) {
      var _this4 = this;

      return _asyncToGenerator(function* () {
        var result = yield Object(_shared_firebase_matches__WEBPACK_IMPORTED_MODULE_6__["updateMatchStatusForUser"])(data.id, _this4.uid, _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_8__["MatchAvailabilityStatus"].YES);

        if (!result.isError) {
          yield _this4.getMatches();
        }
      })();
    }

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvTWF0Y2hlcy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLGlCQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBRkE7O0FBR0E7QUFDQTtBQUNBO0FBQ0EscUJBREE7QUFFQTtBQUZBO0FBREE7QUFNQSxHQVZBOztBQVdBO0FBQ0EsOERBREE7QUFFQSw0REFGQTs7QUFHQTtBQUNBO0FBQ0EsS0FMQTs7QUFNQTtBQUNBO0FBQ0E7O0FBUkEsSUFYQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQSxHQXhCQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQTlCQTtBQStCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLEdBckNBO0FBc0NBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EseURBQ0EsS0FEQSxDQUNBLEdBREEsRUFFQSxPQUZBLEdBR0EsSUFIQSxDQUdBLEdBSEEsZUFHQSxVQUhBO0FBSUEsNkNBQ0Esa0ZBREE7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxpQkFIQSxNQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0EsYUF2QkE7QUF3QkEsNENBQ0EsV0FEQTtBQUVBO0FBRkE7QUFJQTs7QUFDQTtBQUFBO0FBQUE7QUFDQSxTQWpDQSxDQWlDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBcENBO0FBcUNBLEtBdENBOztBQXVDQTtBQUFBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBTUEsS0E3Q0E7O0FBOENBO0FBQUE7O0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUtBLEtBbkRBOztBQW9EQTtBQUFBOztBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTs7QUF6REE7QUF0Q0EsRyIsImZpbGUiOiJidW5kbGUuMzhkOWYyNmQxZWFlYjQ2OGUzYjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB2dWUvY29tcG9uZW50XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBTdGF0ZSB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgQmFzZUNhcmRMaXN0U2Nyb2xsVmlldyBmcm9tICcuLi9jb21wb25lbnRzL0Jhc2VDYXJkTGlzdFNjcm9sbFZpZXcudnVlJ1xuaW1wb3J0IEJhc2VCdXR0b25XaXRoSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0Jhc2VCdXR0b25XaXRoSWNvbi52dWUnXG5pbXBvcnQgQmFzZU1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvQmFzZU1vZGFsLnZ1ZSdcbmltcG9ydCBNYXRjaEZvcm0gZnJvbSAnLi9NYXRjaEZvcm0udnVlJ1xuaW1wb3J0IHsgQXBwUm9sZXMgfSBmcm9tICcuLi9fc2hhcmVkL2VudW0nXG5pbXBvcnQgeyBnZXRBbGxNYXRjaGVzLCB1cGRhdGVNYXRjaFN0YXR1c0ZvclVzZXIgfSBmcm9tICcuLi9fc2hhcmVkL2ZpcmViYXNlL21hdGNoZXMnXG5pbXBvcnQgeyBNYXRjaFN0YXR1cyB9IGZyb20gJy4uL3R5cGVzL0VNYXRjaFN0YXR1cydcbmltcG9ydCB7IE1hdGNoQXZhaWxhYmlsaXR5U3RhdHVzIH0gZnJvbSAnLi4vdHlwZXMvRU1hdGNoQXZhaWxhYmlsaXR5U3RhdHVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdNYXRjaGVzJyxcbiAgY29tcG9uZW50czogeyBCYXNlQ2FyZExpc3RTY3JvbGxWaWV3LCBCYXNlQnV0dG9uV2l0aEljb24sIEJhc2VNb2RhbCwgTWF0Y2hGb3JtIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDogbWFwU3RhdGUoe1xuICAgIHJvbGU6IHN0YXRlID0+IHN0YXRlLmF1dGhlbnRpY2F0aW9uTW9kdWxlLnVzZXJDb250ZXh0LnJvbGUsXG4gICAgdWlkOiBzdGF0ZSA9PiBzdGF0ZS5hdXRoZW50aWNhdGlvbk1vZHVsZS51c2VyQ29udGV4dC51aWQsXG4gICAgbG9hZGluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmdcbiAgICB9LFxuICAgIGl0ZW1zKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXNcbiAgICB9LFxuICB9KSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdGF0ZS5sb2FkaW5nID0gdHJ1ZVxuICAgIGNvbnNvbGUubG9nKGBNYXRjaGVzIDo6IGNyZWF0ZWRgKVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhgTWF0Y2hlcyA6OiBtb3VudGVkYClcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZ2V0TWF0Y2hlcygpXG4gICAgfSlcbiAgfSxcbiAgdXBkYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coYE1hdGNoZXMgOjogdXBkYXRlZGApXG4gICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhgbG9hZGluZyA6OiAke3RoaXMuc3RhdGUubG9hZGluZ31gKVxuICAgICAgY29uc29sZS5sb2coYGl0ZW1zIDo6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5pdGVtcyl9YClcbiAgICB9KVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgZ2V0TWF0Y2hlcygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldEFsbE1hdGNoZXModGhpcy51aWQpXG4gICAgICAgIGlmICghcmVzdWx0Lmpzb24uaXNFcnJvcikge1xuICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBPYmplY3QudmFsdWVzKHJlc3VsdC5qc29uLmRhdGEpLm1hcChtYXRjaCA9PiB7XG4gICAgICAgICAgICBtYXRjaC50aXRsZSA9IGBDYW1lbHMgdnMgJHttYXRjaC5vcHBvbmVudH1gXG4gICAgICAgICAgICBtYXRjaC5zdGF0dXNJY29uID0gbWF0Y2guc3RhdHVzID09PSBNYXRjaFN0YXR1cy5PTiA/ICdmYS10b2dnbGUtb24nIDogJ2ZhLXRvZ2dsZS1vZmYnXG4gICAgICAgICAgICBtYXRjaC5ib2R5ID0gYCR7bWF0Y2gudmVudWV9IC0gJHttYXRjaC5kYXRlfSBAICR7bWF0Y2gudGltZX1gXG4gICAgICAgICAgICBpZiAobWF0Y2guc3RhdHVzID09PSBNYXRjaFN0YXR1cy5PTikge1xuICAgICAgICAgICAgICBtYXRjaC5zaG93QWN0aW9uSXRlbXMgPSB0cnVlXG4gICAgICAgICAgICAgIGNvbnN0IG1hdGNoRGF0ZVRpbWUgPSBgJHttYXRjaC5kYXRlXG4gICAgICAgICAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgICAgICAgICAgLmpvaW4oJy8nKX0gJHttYXRjaC50aW1lfWBcbiAgICAgICAgICAgICAgbWF0Y2guYWN0aW9uQnV0dG9uRGlzYWJsZWQgPVxuICAgICAgICAgICAgICAgIG5ldyBEYXRlKERhdGUucGFyc2UobWF0Y2hEYXRlVGltZSkpLnRvTG9jYWxlU3RyaW5nKCkgPCBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKClcbiAgICAgICAgICAgICAgbWF0Y2guY2FuY2VsVGV4dCA9IG1hdGNoLmFjdGlvbkJ1dHRvbkRpc2FibGVkID8gYE5vdCBQbGF5ZWRgIDogYE5vdCBpbmBcbiAgICAgICAgICAgICAgbWF0Y2gub2tUZXh0ID0gbWF0Y2guYWN0aW9uQnV0dG9uRGlzYWJsZWQgPyBgUGxheWVkYCA6IGBJIGFtIGluYFxuICAgICAgICAgICAgICBpZiAobWF0Y2gubXlTdGF0dXMgPT09IE1hdGNoQXZhaWxhYmlsaXR5U3RhdHVzLllFUykge1xuICAgICAgICAgICAgICAgIG1hdGNoLm9rVGV4dEljb24gPSAnZmEtY2hlY2stY2lyY2xlJ1xuICAgICAgICAgICAgICAgIG1hdGNoLm9rVGV4dFN0eWxlcyA9IHsgY29sb3I6ICdncmVlbicgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoLm15U3RhdHVzID09PSBNYXRjaEF2YWlsYWJpbGl0eVN0YXR1cy5OTykge1xuICAgICAgICAgICAgICAgIG1hdGNoLmNhbmNlbFRleHRJY29uID0gJ2ZhLXRpbWVzLWNpcmNsZSdcbiAgICAgICAgICAgICAgICBtYXRjaC5jYW5jZWxUZXh0U3R5bGVzID0geyBjb2xvcjogJ3JlZCcgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgaXRlbXM6IG1hdGNoZXMsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlT25DbGljayhldmVudCkge1xuICAgICAgdGhpcy4kc2hvd01vZGFsKEJhc2VNb2RhbCwge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGNoaWxkcmVuOiBNYXRjaEZvcm0sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxPbkNhbmNlbChkYXRhKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1cGRhdGVNYXRjaFN0YXR1c0ZvclVzZXIoZGF0YS5pZCwgdGhpcy51aWQsIE1hdGNoQXZhaWxhYmlsaXR5U3RhdHVzLk5PKVxuICAgICAgaWYgKCFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICBhd2FpdCB0aGlzLmdldE1hdGNoZXMoKVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlT25PayhkYXRhKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1cGRhdGVNYXRjaFN0YXR1c0ZvclVzZXIoZGF0YS5pZCwgdGhpcy51aWQsIE1hdGNoQXZhaWxhYmlsaXR5U3RhdHVzLllFUylcbiAgICAgIGlmICghcmVzdWx0LmlzRXJyb3IpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRNYXRjaGVzKClcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG48dGVtcGxhdGU+XG4gIDxTdGFja0xheW91dD5cbiAgICA8QWN0aXZpdHlJbmRpY2F0b3JcbiAgICAgIDp2aXNpYmlsaXR5PVwic3RhdGUubG9hZGluZyA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcIlxuICAgICAgOmJ1c3k9XCJzdGF0ZS5sb2FkaW5nXCJcbiAgICAgIHdpZHRoPVwiMjBcIlxuICAgICAgaGVpZ2h0PVwiMjBcIlxuICAgICAgY2xhc3M9XCJsb2FkZXJcIlxuICAgID48L0FjdGl2aXR5SW5kaWNhdG9yPlxuICAgIDxEb2NrTGF5b3V0IHYtaWY9XCJyb2xlID09PSAxXCIgc3RyZXRjaExhc3RDaGlsZD1cImZhbHNlXCI+XG4gICAgICA8QmFzZUJ1dHRvbldpdGhJY29uXG4gICAgICAgIEBoYW5kbGVPbkNsaWNrPVwiaGFuZGxlT25DbGlja1wiXG4gICAgICAgIHRleHQ9XCJOZXcgTWF0Y2hcIlxuICAgICAgICBpY29uPVwiZmEtcGx1cy1jaXJjbGVcIlxuICAgICAgICBkb2M9XCJyaWdodFwiXG4gICAgICAvPlxuICAgIDwvRG9ja0xheW91dD5cbiAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XG4gICAgICA8QmFzZUNhcmRMaXN0U2Nyb2xsVmlld1xuICAgICAgICByZWY9XCJsaXN0XCJcbiAgICAgICAgOml0ZW1zPVwic3RhdGUuaXRlbXNcIlxuICAgICAgICBAaGFuZGxlT25DYW5jZWw9XCJoYW5kbE9uQ2FuY2VsXCJcbiAgICAgICAgQGhhbmRsZU9uT2s9XCJoYW5kbGVPbk9rXCJcbiAgICAgID5cbiAgICAgIDwvQmFzZUNhcmRMaXN0U2Nyb2xsVmlldz5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICA8L1N0YWNrTGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuc2Nyb2xsdmlldyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9