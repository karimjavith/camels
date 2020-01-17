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
        //   this.state = { ...this.state, showModal: true }
        _this2.$showModal(_MatchForm_vue__WEBPACK_IMPORTED_MODULE_4__["default"], {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvTWF0Y2hlcy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLGlCQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBRkE7O0FBR0E7QUFDQTtBQUNBO0FBQ0EscUJBREE7QUFFQSxpQkFGQTtBQUdBO0FBSEE7QUFEQTtBQU9BLEdBWEE7O0FBWUE7QUFDQSw4REFEQTtBQUVBLDREQUZBOztBQUdBO0FBQ0E7QUFDQSxLQUxBOztBQU1BO0FBQ0E7QUFDQTs7QUFSQSxJQVpBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBLEdBekJBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQTtBQUdBLEdBL0JBO0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsR0F0Q0E7QUF1Q0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSx5REFDQSxLQURBLENBQ0EsR0FEQSxFQUVBLE9BRkEsR0FHQSxJQUhBLENBR0EsR0FIQSxlQUdBLFVBSEE7QUFJQSw2Q0FDQSxrRkFEQTtBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLGlCQUhBLE1BR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxhQXZCQTtBQXdCQSw0Q0FDQSxXQURBO0FBRUE7QUFGQTtBQUlBOztBQUNBO0FBQUE7QUFBQTtBQUNBLFNBakNBLENBaUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFwQ0E7QUFxQ0EsS0F0Q0E7O0FBdUNBO0FBQUE7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSwyQkFGQTtBQUdBLHdCQUhBO0FBSUEsMEJBSkE7QUFLQSx3QkFMQSxDQUtBOztBQUxBO0FBRkE7QUFTQSxLQWhEQTs7QUFpREE7QUFBQTs7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBRUEsS0FuREE7O0FBb0RBO0FBQUE7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUVBLEtBdERBOztBQXVEQTtBQUFBOztBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQSxLQTVEQTs7QUE2REE7QUFBQTs7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBS0E7O0FBbEVBO0FBdkNBLEciLCJmaWxlIjoiYnVuZGxlLjU4MGYxMWNiYWY1ZWNmOWRhMGQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdnVlL2NvbXBvbmVudFxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwU3RhdGUgfSBmcm9tICd2dWV4J1xuaW1wb3J0IEJhc2VDYXJkTGlzdFNjcm9sbFZpZXcgZnJvbSAnLi4vY29tcG9uZW50cy9CYXNlQ2FyZExpc3RTY3JvbGxWaWV3LnZ1ZSdcbmltcG9ydCBCYXNlQnV0dG9uV2l0aEljb24gZnJvbSAnLi4vY29tcG9uZW50cy9CYXNlQnV0dG9uV2l0aEljb24udnVlJ1xuaW1wb3J0IEJhc2VNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL0Jhc2VNb2RhbC52dWUnXG5pbXBvcnQgTWF0Y2hGb3JtIGZyb20gJy4vTWF0Y2hGb3JtLnZ1ZSdcbmltcG9ydCB7IEFwcFJvbGVzIH0gZnJvbSAnLi4vX3NoYXJlZC9lbnVtJ1xuaW1wb3J0IHsgZ2V0QWxsTWF0Y2hlcywgdXBkYXRlTWF0Y2hTdGF0dXNGb3JVc2VyIH0gZnJvbSAnLi4vX3NoYXJlZC9maXJlYmFzZS9tYXRjaGVzJ1xuaW1wb3J0IHsgTWF0Y2hTdGF0dXMgfSBmcm9tICcuLi90eXBlcy9FTWF0Y2hTdGF0dXMnXG5pbXBvcnQgeyBNYXRjaEF2YWlsYWJpbGl0eVN0YXR1cyB9IGZyb20gJy4uL3R5cGVzL0VNYXRjaEF2YWlsYWJpbGl0eVN0YXR1cydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTWF0Y2hlcycsXG4gIGNvbXBvbmVudHM6IHsgQmFzZUNhcmRMaXN0U2Nyb2xsVmlldywgQmFzZUJ1dHRvbldpdGhJY29uLCBCYXNlTW9kYWwsIE1hdGNoRm9ybSB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICBpdGVtczogW10sXG4gICAgICAgIHNob3dNb2RhbDogZmFsc2UsXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcbiAgICByb2xlOiBzdGF0ZSA9PiBzdGF0ZS5hdXRoZW50aWNhdGlvbk1vZHVsZS51c2VyQ29udGV4dC5yb2xlLFxuICAgIHVpZDogc3RhdGUgPT4gc3RhdGUuYXV0aGVudGljYXRpb25Nb2R1bGUudXNlckNvbnRleHQudWlkLFxuICAgIGxvYWRpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkaW5nXG4gICAgfSxcbiAgICBpdGVtcygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLml0ZW1zXG4gICAgfSxcbiAgfSksXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3RhdGUubG9hZGluZyA9IHRydWVcbiAgICBjb25zb2xlLmxvZyhgTWF0Y2hlcyA6OiBjcmVhdGVkYClcbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coYE1hdGNoZXMgOjogbW91bnRlZGApXG4gICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmdldE1hdGNoZXMoKVxuICAgIH0pXG4gIH0sXG4gIHVwZGF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKGBNYXRjaGVzIDo6IHVwZGF0ZWRgKVxuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coYGxvYWRpbmcgOjogJHt0aGlzLnN0YXRlLmxvYWRpbmd9YClcbiAgICAgIGNvbnNvbGUubG9nKGBpdGVtcyA6OiAke0pTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuaXRlbXMpfWApXG4gICAgfSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIGdldE1hdGNoZXMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRBbGxNYXRjaGVzKHRoaXMudWlkKVxuICAgICAgICBpZiAoIXJlc3VsdC5qc29uLmlzRXJyb3IpIHtcbiAgICAgICAgICBjb25zdCBtYXRjaGVzID0gT2JqZWN0LnZhbHVlcyhyZXN1bHQuanNvbi5kYXRhKS5tYXAobWF0Y2ggPT4ge1xuICAgICAgICAgICAgbWF0Y2gudGl0bGUgPSBgQ2FtZWxzIHZzICR7bWF0Y2gub3Bwb25lbnR9YFxuICAgICAgICAgICAgbWF0Y2guc3RhdHVzSWNvbiA9IG1hdGNoLnN0YXR1cyA9PT0gTWF0Y2hTdGF0dXMuT04gPyAnZmEtdG9nZ2xlLW9uJyA6ICdmYS10b2dnbGUtb2ZmJ1xuICAgICAgICAgICAgbWF0Y2guYm9keSA9IGAke21hdGNoLnZlbnVlfSAtICR7bWF0Y2guZGF0ZX0gQCAke21hdGNoLnRpbWV9YFxuICAgICAgICAgICAgaWYgKG1hdGNoLnN0YXR1cyA9PT0gTWF0Y2hTdGF0dXMuT04pIHtcbiAgICAgICAgICAgICAgbWF0Y2guc2hvd0FjdGlvbkl0ZW1zID0gdHJ1ZVxuICAgICAgICAgICAgICBjb25zdCBtYXRjaERhdGVUaW1lID0gYCR7bWF0Y2guZGF0ZVxuICAgICAgICAgICAgICAgIC5zcGxpdCgnLycpXG4gICAgICAgICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgICAgICAgIC5qb2luKCcvJyl9ICR7bWF0Y2gudGltZX1gXG4gICAgICAgICAgICAgIG1hdGNoLmFjdGlvbkJ1dHRvbkRpc2FibGVkID1cbiAgICAgICAgICAgICAgICBuZXcgRGF0ZShEYXRlLnBhcnNlKG1hdGNoRGF0ZVRpbWUpKS50b0xvY2FsZVN0cmluZygpIDwgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpXG4gICAgICAgICAgICAgIG1hdGNoLmNhbmNlbFRleHQgPSBtYXRjaC5hY3Rpb25CdXR0b25EaXNhYmxlZCA/IGBOb3QgUGxheWVkYCA6IGBOb3QgaW5gXG4gICAgICAgICAgICAgIG1hdGNoLm9rVGV4dCA9IG1hdGNoLmFjdGlvbkJ1dHRvbkRpc2FibGVkID8gYFBsYXllZGAgOiBgSSBhbSBpbmBcbiAgICAgICAgICAgICAgaWYgKG1hdGNoLm15U3RhdHVzID09PSBNYXRjaEF2YWlsYWJpbGl0eVN0YXR1cy5ZRVMpIHtcbiAgICAgICAgICAgICAgICBtYXRjaC5va1RleHRJY29uID0gJ2ZhLWNoZWNrLWNpcmNsZSdcbiAgICAgICAgICAgICAgICBtYXRjaC5va1RleHRTdHlsZXMgPSB7IGNvbG9yOiAnZ3JlZW4nIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaC5teVN0YXR1cyA9PT0gTWF0Y2hBdmFpbGFiaWxpdHlTdGF0dXMuTk8pIHtcbiAgICAgICAgICAgICAgICBtYXRjaC5jYW5jZWxUZXh0SWNvbiA9ICdmYS10aW1lcy1jaXJjbGUnXG4gICAgICAgICAgICAgICAgbWF0Y2guY2FuY2VsVGV4dFN0eWxlcyA9IHsgY29sb3I6ICdyZWQnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoXG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIGl0ZW1zOiBtYXRjaGVzLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZU9uQ2xpY2soZXZlbnQpIHtcbiAgICAgIC8vICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgc2hvd01vZGFsOiB0cnVlIH1cbiAgICAgIHRoaXMuJHNob3dNb2RhbChNYXRjaEZvcm0sIHtcbiAgICAgICAgcHJvcHM6IHt9LFxuICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIHN0cmV0Y2hlZDogZmFsc2UsXG4gICAgICAgIGRpbUFtb3VudDogMC41LCAvLyBTZXRzIHRoZSBhbHBoYSBvZiB0aGUgYmFja2dyb3VuZCBkaW0sXG4gICAgICB9KVxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlT25Pa0RpYWxvZyhkYXRhKSB7XG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBzaG93TW9kYWw6IGZhbHNlIH1cbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZU9uQ2FuY2VsRGlhbG9nKGRhdGEpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIHNob3dNb2RhbDogZmFsc2UgfVxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxPbkNhbmNlbChkYXRhKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1cGRhdGVNYXRjaFN0YXR1c0ZvclVzZXIoZGF0YS5pZCwgdGhpcy51aWQsIE1hdGNoQXZhaWxhYmlsaXR5U3RhdHVzLk5PKVxuICAgICAgaWYgKCFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICBhd2FpdCB0aGlzLmdldE1hdGNoZXMoKVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlT25PayhkYXRhKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1cGRhdGVNYXRjaFN0YXR1c0ZvclVzZXIoZGF0YS5pZCwgdGhpcy51aWQsIE1hdGNoQXZhaWxhYmlsaXR5U3RhdHVzLllFUylcbiAgICAgIGlmICghcmVzdWx0LmlzRXJyb3IpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRNYXRjaGVzKClcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG48dGVtcGxhdGU+XG4gIDxTdGFja0xheW91dD5cbiAgICA8QWN0aXZpdHlJbmRpY2F0b3JcbiAgICAgIDp2aXNpYmlsaXR5PVwic3RhdGUubG9hZGluZyA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcIlxuICAgICAgOmJ1c3k9XCJzdGF0ZS5sb2FkaW5nXCJcbiAgICAgIHdpZHRoPVwiMjBcIlxuICAgICAgaGVpZ2h0PVwiMjBcIlxuICAgICAgY2xhc3M9XCJsb2FkZXJcIlxuICAgID48L0FjdGl2aXR5SW5kaWNhdG9yPlxuICAgIDxCYXNlTW9kYWxcbiAgICAgIHYtaWY9XCJzdGF0ZS5zaG93TW9kYWxcIlxuICAgICAgOmNoaWxkcmVuPVwiTWF0Y2hGb3JtXCJcbiAgICAgIEBoYW5kbGVPbk9rRGlhbG9nPVwiaGFuZGxlT25Pa0RpYWxvZ1wiXG4gICAgICBAaGFuZGxlT25DYW5jZWxEaWFsb2c9XCJoYW5kbGVPbkNhbmNlbERpYWxvZ1wiXG4gICAgICB0aXRsZT1cIk5ldyBNYXRjaFwiXG4gICAgICBjYW5jZWxUZXh0PVwiQ2FuY2VsXCJcbiAgICAgIG9rVGV4dD1cIkNyZWF0ZSBNYXRjaFwiXG4gICAgLz5cbiAgICA8RG9ja0xheW91dCB2LWlmPVwicm9sZSA9PT0gMVwiIHN0cmV0Y2hMYXN0Q2hpbGQ9XCJmYWxzZVwiPlxuICAgICAgPEJhc2VCdXR0b25XaXRoSWNvblxuICAgICAgICBAaGFuZGxlT25DbGljaz1cImhhbmRsZU9uQ2xpY2tcIlxuICAgICAgICB0ZXh0PVwiTmV3IE1hdGNoXCJcbiAgICAgICAgaWNvbj1cImZhLXBsdXMtY2lyY2xlXCJcbiAgICAgICAgZG9jPVwicmlnaHRcIlxuICAgICAgLz5cbiAgICA8L0RvY2tMYXlvdXQ+XG4gICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgPEJhc2VDYXJkTGlzdFNjcm9sbFZpZXdcbiAgICAgICAgcmVmPVwibGlzdFwiXG4gICAgICAgIDppdGVtcz1cInN0YXRlLml0ZW1zXCJcbiAgICAgICAgQGhhbmRsZU9uQ2FuY2VsPVwiaGFuZGxPbkNhbmNlbFwiXG4gICAgICAgIEBoYW5kbGVPbk9rPVwiaGFuZGxlT25Pa1wiXG4gICAgICA+XG4gICAgICA8L0Jhc2VDYXJkTGlzdFNjcm9sbFZpZXc+XG4gICAgPC9TdGFja0xheW91dD5cbiAgPC9TdGFja0xheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbnNjcm9sbHZpZXcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==