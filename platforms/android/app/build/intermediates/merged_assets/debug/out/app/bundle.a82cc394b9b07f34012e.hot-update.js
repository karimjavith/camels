webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/Matches.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _MatchDetails_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./views/MatchDetails.vue");
/* harmony import */ var _components_BaseCardListScrollView_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/BaseCardListScrollView.vue");
/* harmony import */ var _components_BaseButtonWithIcon_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/BaseButtonWithIcon.vue");
/* harmony import */ var _MatchForm_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./views/MatchForm.vue");
/* harmony import */ var _Login_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./views/Login.vue");
/* harmony import */ var _shared_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./_shared/enum.ts");
/* harmony import */ var _shared_enum__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shared_enum__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_firebase_matches__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./_shared/firebase/matches.ts");
/* harmony import */ var _shared_firebase_matches__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_shared_firebase_matches__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _types_EMatchStatus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./types/EMatchStatus.ts");
/* harmony import */ var _types_EMatchStatus__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_types_EMatchStatus__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./types/EMatchAvailabilityStatus.ts");
/* harmony import */ var _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_http_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./_shared/http/http.ts");
/* harmony import */ var _shared_http_http__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_shared_http_http__WEBPACK_IMPORTED_MODULE_10__);
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
    BaseCardListScrollView: _components_BaseCardListScrollView_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BaseButtonWithIcon: _components_BaseButtonWithIcon_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
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
    });
  },
  methods: {
    getMatches() {
      var _this = this;

      return _asyncToGenerator(function* () {
        try {
          var result = yield Object(_shared_firebase_matches__WEBPACK_IMPORTED_MODULE_7__["getAllMatches"])(_this.uid);

          if (result.status === _shared_http_http__WEBPACK_IMPORTED_MODULE_10__["HttpStatusCode"].Unauthorized) {
            _this.$navigateTo(_Login_vue__WEBPACK_IMPORTED_MODULE_5__["default"], {
              clearHistory: true
            });
          }

          if (!result.isError) {
            var {
              data,
              count
            } = result.json;

            if (count > 0) {
              var matches = Object.values(data).map(match => {
                match.title = "Camels vs ".concat(match.opponent);
                match.statusIcon = 'fa-dot-circle';
                match.statusIconStyle = match.status === _types_EMatchStatus__WEBPACK_IMPORTED_MODULE_8__["MatchStatus"].ON ? {
                  color: 'green'
                } : {
                  color: 'grey'
                };
                match.body = "".concat(match.venue, " - ").concat(new Date(match.date).toLocaleDateString(), " @ ").concat(match.time);
                match.showEditOption = _this.role === _shared_enum__WEBPACK_IMPORTED_MODULE_6__["AppRoles"].Admin;
                match.showDeleteOption = _this.role === _shared_enum__WEBPACK_IMPORTED_MODULE_6__["AppRoles"].Admin;

                if (match.status === _types_EMatchStatus__WEBPACK_IMPORTED_MODULE_8__["MatchStatus"].ON) {
                  match.showActionItems = true;
                  var matchDateTime = "".concat(match.date.split('/').reverse().join('-'), " ").concat(match.time);
                  match.actionButtonDisabled = new Date(matchDateTime) < new Date();
                  match.cancelText = match.actionButtonDisabled ? "Not Played" : "Not in";
                  match.okText = match.actionButtonDisabled ? "Played" : "I am in";

                  if (match.myStatus === _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_9__["MatchAvailabilityStatus"].YES) {
                    match.okTextIcon = 'fa-check-circle';
                    match.okTextStyles = {
                      color: 'green'
                    };
                  } else if (match.myStatus === _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_9__["MatchAvailabilityStatus"].NO) {
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
            } else {
              _this.state = _objectSpread({}, _this.state, {
                items: []
              });
            }
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

    handleOnCreateMatchClick(item) {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        _this2.$showModal(_MatchForm_vue__WEBPACK_IMPORTED_MODULE_4__["default"], {
          props: {
            cb: _this2.handleModalCb,
            itemId: item && item.id,
            venue: item && item.venue,
            postCode: item && item.postCode,
            date: item && item.date,
            time: item && item.time,
            opponent: item && item.opponent
          },
          fullscreen: false,
          animated: true,
          stretched: true,
          dimAmount: 0.5 // Sets the alpha of the background dim,

        });
      })();
    },

    handleModalCb() {
      var _this3 = this;

      return _asyncToGenerator(function* () {
        _this3.state = _objectSpread({}, _this3.state, {
          loading: true
        });

        _this3.$emit('onMatchEventSetIndexCb');

        yield _this3.getMatches();
      })();
    },

    handleOnItemClick(item) {
      var _this4 = this;

      return _asyncToGenerator(function* () {
        if (_this4.role === _shared_enum__WEBPACK_IMPORTED_MODULE_6__["AppRoles"].Admin) {
          _this4.$showModal(_MatchDetails_vue__WEBPACK_IMPORTED_MODULE_1__["default"], {
            props: {
              role: _this4.role,
              matchId: item.id,
              uid: _this4.uid
            },
            fullscreen: false,
            animated: true,
            stretched: true,
            dimAmount: 0.5 // Sets the alpha of the background dim,

          });
        }
      })();
    },

    handleOnItemEdit(item) {
      var _this5 = this;

      return _asyncToGenerator(function* () {
        if (_this5.role === _shared_enum__WEBPACK_IMPORTED_MODULE_6__["AppRoles"].Admin) {
          _this5.handleOnCreateMatchClick(item);
        }
      })();
    },

    handleOnItemDelete(item) {
      var _this6 = this;

      return _asyncToGenerator(function* () {
        var acknowledge = yield confirm({
          title: 'Delete Match',
          message: "Are you sure that you want to delete match vs ".concat(item.opponent),
          okButtonText: 'Yes, I confirm',
          cancelButtonText: 'No, ignore'
        });

        if (acknowledge) {
          _this6.state = _objectSpread({}, _this6.state, {
            loading: true
          });
          var result = yield Object(_shared_firebase_matches__WEBPACK_IMPORTED_MODULE_7__["removeMatch"])(item.id);
          console.log(result);

          if (result && !result.isError) {
            yield _this6.getMatches();
          }
        }
      })();
    },

    handlOnCancel(data) {
      var _this7 = this;

      return _asyncToGenerator(function* () {
        _this7.state = _objectSpread({}, _this7.state, {
          loading: true
        });
        var result = yield Object(_shared_firebase_matches__WEBPACK_IMPORTED_MODULE_7__["updateMatchStatusForUser"])(data.id, _this7.uid, _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_9__["MatchAvailabilityStatus"].NO);

        if (!result.isError) {
          _this7.$emit('onMatchEventSetIndexCb');

          yield _this7.getMatches();
        }

        _this7.state = _objectSpread({}, _this7.state, {
          loading: false
        });
      })();
    },

    handleOnOk(data) {
      var _this8 = this;

      return _asyncToGenerator(function* () {
        _this8.state = _objectSpread({}, _this8.state, {
          loading: true
        });
        var result = yield Object(_shared_firebase_matches__WEBPACK_IMPORTED_MODULE_7__["updateMatchStatusForUser"])(data.id, _this8.uid, _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_9__["MatchAvailabilityStatus"].YES);

        if (!result.isError) {
          _this8.$emit('onMatchEventSetIndexCb');

          yield _this8.getMatches();
        }

        _this8.state = _objectSpread({}, _this8.state, {
          loading: false
        });
      })();
    }

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvTWF0Y2hlcy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxpQkFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBLEdBRkE7O0FBR0E7QUFDQTtBQUNBO0FBQ0EscUJBREE7QUFFQTtBQUZBO0FBREE7QUFNQSxHQVZBOztBQVdBO0FBQ0EsOERBREE7QUFFQSw0REFGQTs7QUFHQTtBQUNBO0FBQ0E7O0FBTEEsSUFYQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQSxHQXJCQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQTNCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQWpDQTtBQWtDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREE7QUFFQSwySEFDQSxVQURBO0FBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsMkRBQ0EsS0FEQSxDQUNBLEdBREEsRUFFQSxPQUZBLEdBR0EsSUFIQSxDQUdBLEdBSEEsZUFHQSxVQUhBO0FBSUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxtQkFIQSxNQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0EsZUE1QkE7QUE2QkEsOENBQ0EsV0FEQTtBQUVBO0FBRkE7QUFJQSxhQWxDQSxNQWtDQTtBQUNBLDhDQUNBLFdBREE7QUFFQTtBQUZBO0FBSUE7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQSxTQWpEQSxDQWlEQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBcERBO0FBcURBLEtBdERBOztBQXVEQTtBQUFBOztBQUFBO0FBQ0E7QUFDQTtBQUNBLG9DQURBO0FBRUEsbUNBRkE7QUFHQSxxQ0FIQTtBQUlBLDJDQUpBO0FBS0EsbUNBTEE7QUFNQSxtQ0FOQTtBQU9BO0FBUEEsV0FEQTtBQVVBLDJCQVZBO0FBV0Esd0JBWEE7QUFZQSx5QkFaQTtBQWFBLHdCQWJBLENBYUE7O0FBYkE7QUFEQTtBQWdCQSxLQXZFQTs7QUF3RUE7QUFBQTs7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFDQTs7QUFDQTtBQUhBO0FBSUEsS0E1RUE7O0FBNkVBO0FBQUE7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLDhCQUZBO0FBR0E7QUFIQSxhQURBO0FBTUEsNkJBTkE7QUFPQSwwQkFQQTtBQVFBLDJCQVJBO0FBU0EsMEJBVEEsQ0FTQTs7QUFUQTtBQVdBO0FBYkE7QUFjQSxLQTNGQTs7QUE0RkE7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSUEsS0FoR0E7O0FBaUdBO0FBQUE7O0FBQUE7QUFDQTtBQUNBLCtCQURBO0FBRUEseUZBRkE7QUFHQSx3Q0FIQTtBQUlBO0FBSkE7O0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFlQSxLQWhIQTs7QUFpSEE7QUFBQTs7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFQQTtBQVFBLEtBekhBOztBQTBIQTtBQUFBOztBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQVBBO0FBUUE7O0FBbElBO0FBbENBLEciLCJmaWxlIjoiYnVuZGxlLmE4MmNjMzk0YjliMDdmMzQwMTJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdnVlL2NvbXBvbmVudFxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwU3RhdGUgfSBmcm9tICd2dWV4J1xuaW1wb3J0IE1hdGNoRGV0YWlscyBmcm9tICcuL01hdGNoRGV0YWlscy52dWUnXG5pbXBvcnQgQmFzZUNhcmRMaXN0U2Nyb2xsVmlldyBmcm9tICcuLi9jb21wb25lbnRzL0Jhc2VDYXJkTGlzdFNjcm9sbFZpZXcudnVlJ1xuaW1wb3J0IEJhc2VCdXR0b25XaXRoSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0Jhc2VCdXR0b25XaXRoSWNvbi52dWUnXG5pbXBvcnQgTWF0Y2hGb3JtIGZyb20gJy4vTWF0Y2hGb3JtLnZ1ZSdcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luLnZ1ZSdcbmltcG9ydCB7IEFwcFJvbGVzIH0gZnJvbSAnLi4vX3NoYXJlZC9lbnVtJ1xuaW1wb3J0IHsgZ2V0QWxsTWF0Y2hlcywgdXBkYXRlTWF0Y2hTdGF0dXNGb3JVc2VyLCByZW1vdmVNYXRjaCB9IGZyb20gJy4uL19zaGFyZWQvZmlyZWJhc2UvbWF0Y2hlcydcbmltcG9ydCB7IE1hdGNoU3RhdHVzIH0gZnJvbSAnLi4vdHlwZXMvRU1hdGNoU3RhdHVzJ1xuaW1wb3J0IHsgTWF0Y2hBdmFpbGFiaWxpdHlTdGF0dXMgfSBmcm9tICcuLi90eXBlcy9FTWF0Y2hBdmFpbGFiaWxpdHlTdGF0dXMnXG5pbXBvcnQgeyBIdHRwU3RhdHVzQ29kZSB9IGZyb20gJy4uL19zaGFyZWQvaHR0cC9odHRwJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdNYXRjaGVzJyxcbiAgY29tcG9uZW50czogeyBCYXNlQ2FyZExpc3RTY3JvbGxWaWV3LCBCYXNlQnV0dG9uV2l0aEljb24gfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgfSxcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiBtYXBTdGF0ZSh7XG4gICAgcm9sZTogc3RhdGUgPT4gc3RhdGUuYXV0aGVudGljYXRpb25Nb2R1bGUudXNlckNvbnRleHQucm9sZSxcbiAgICB1aWQ6IHN0YXRlID0+IHN0YXRlLmF1dGhlbnRpY2F0aW9uTW9kdWxlLnVzZXJDb250ZXh0LnVpZCxcbiAgICBsb2FkaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubG9hZGluZ1xuICAgIH0sXG4gIH0pLFxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0YXRlLmxvYWRpbmcgPSB0cnVlXG4gICAgY29uc29sZS5sb2coYE1hdGNoZXMgOjogY3JlYXRlZGApXG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKGBNYXRjaGVzIDo6IG1vdW50ZWRgKVxuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5nZXRNYXRjaGVzKClcbiAgICB9KVxuICB9LFxuICB1cGRhdGVkOiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhgTWF0Y2hlcyA6OiB1cGRhdGVkYClcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBsb2FkaW5nIDo6ICR7dGhpcy5zdGF0ZS5sb2FkaW5nfWApXG4gICAgfSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIGdldE1hdGNoZXMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRBbGxNYXRjaGVzKHRoaXMudWlkKVxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gSHR0cFN0YXR1c0NvZGUuVW5hdXRob3JpemVkKSB7XG4gICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhMb2dpbiwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3VsdC5pc0Vycm9yKSB7XG4gICAgICAgICAgY29uc3QgeyBkYXRhLCBjb3VudCB9ID0gcmVzdWx0Lmpzb25cbiAgICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gT2JqZWN0LnZhbHVlcyhkYXRhKS5tYXAobWF0Y2ggPT4ge1xuICAgICAgICAgICAgICBtYXRjaC50aXRsZSA9IGBDYW1lbHMgdnMgJHttYXRjaC5vcHBvbmVudH1gXG4gICAgICAgICAgICAgIG1hdGNoLnN0YXR1c0ljb24gPSAnZmEtZG90LWNpcmNsZSdcbiAgICAgICAgICAgICAgbWF0Y2guc3RhdHVzSWNvblN0eWxlID1cbiAgICAgICAgICAgICAgICBtYXRjaC5zdGF0dXMgPT09IE1hdGNoU3RhdHVzLk9OID8geyBjb2xvcjogJ2dyZWVuJyB9IDogeyBjb2xvcjogJ2dyZXknIH1cbiAgICAgICAgICAgICAgbWF0Y2guYm9keSA9IGAke21hdGNoLnZlbnVlfSAtICR7bmV3IERhdGUobWF0Y2guZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9IEAgJHtcbiAgICAgICAgICAgICAgICBtYXRjaC50aW1lXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICAgIG1hdGNoLnNob3dFZGl0T3B0aW9uID0gdGhpcy5yb2xlID09PSBBcHBSb2xlcy5BZG1pblxuICAgICAgICAgICAgICBtYXRjaC5zaG93RGVsZXRlT3B0aW9uID0gdGhpcy5yb2xlID09PSBBcHBSb2xlcy5BZG1pblxuICAgICAgICAgICAgICBpZiAobWF0Y2guc3RhdHVzID09PSBNYXRjaFN0YXR1cy5PTikge1xuICAgICAgICAgICAgICAgIG1hdGNoLnNob3dBY3Rpb25JdGVtcyA9IHRydWVcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaERhdGVUaW1lID0gYCR7bWF0Y2guZGF0ZVxuICAgICAgICAgICAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgICAgICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCctJyl9ICR7bWF0Y2gudGltZX1gXG4gICAgICAgICAgICAgICAgbWF0Y2guYWN0aW9uQnV0dG9uRGlzYWJsZWQgPSBuZXcgRGF0ZShtYXRjaERhdGVUaW1lKSA8IG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgICBtYXRjaC5jYW5jZWxUZXh0ID0gbWF0Y2guYWN0aW9uQnV0dG9uRGlzYWJsZWQgPyBgTm90IFBsYXllZGAgOiBgTm90IGluYFxuICAgICAgICAgICAgICAgIG1hdGNoLm9rVGV4dCA9IG1hdGNoLmFjdGlvbkJ1dHRvbkRpc2FibGVkID8gYFBsYXllZGAgOiBgSSBhbSBpbmBcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gubXlTdGF0dXMgPT09IE1hdGNoQXZhaWxhYmlsaXR5U3RhdHVzLllFUykge1xuICAgICAgICAgICAgICAgICAgbWF0Y2gub2tUZXh0SWNvbiA9ICdmYS1jaGVjay1jaXJjbGUnXG4gICAgICAgICAgICAgICAgICBtYXRjaC5va1RleHRTdHlsZXMgPSB7IGNvbG9yOiAnZ3JlZW4nIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoLm15U3RhdHVzID09PSBNYXRjaEF2YWlsYWJpbGl0eVN0YXR1cy5OTykge1xuICAgICAgICAgICAgICAgICAgbWF0Y2guY2FuY2VsVGV4dEljb24gPSAnZmEtdGltZXMtY2lyY2xlJ1xuICAgICAgICAgICAgICAgICAgbWF0Y2guY2FuY2VsVGV4dFN0eWxlcyA9IHsgY29sb3I6ICdyZWQnIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IG1hdGNoZXMsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBoYW5kbGVPbkNyZWF0ZU1hdGNoQ2xpY2soaXRlbSkge1xuICAgICAgdGhpcy4kc2hvd01vZGFsKE1hdGNoRm9ybSwge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGNiOiB0aGlzLmhhbmRsZU1vZGFsQ2IsXG4gICAgICAgICAgaXRlbUlkOiBpdGVtICYmIGl0ZW0uaWQsXG4gICAgICAgICAgdmVudWU6IGl0ZW0gJiYgaXRlbS52ZW51ZSxcbiAgICAgICAgICBwb3N0Q29kZTogaXRlbSAmJiBpdGVtLnBvc3RDb2RlLFxuICAgICAgICAgIGRhdGU6IGl0ZW0gJiYgaXRlbS5kYXRlLFxuICAgICAgICAgIHRpbWU6IGl0ZW0gJiYgaXRlbS50aW1lLFxuICAgICAgICAgIG9wcG9uZW50OiBpdGVtICYmIGl0ZW0ub3Bwb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgc3RyZXRjaGVkOiB0cnVlLFxuICAgICAgICBkaW1BbW91bnQ6IDAuNSwgLy8gU2V0cyB0aGUgYWxwaGEgb2YgdGhlIGJhY2tncm91bmQgZGltLFxuICAgICAgfSlcbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZU1vZGFsQ2IoKSB7XG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH1cbiAgICAgIHRoaXMuJGVtaXQoJ29uTWF0Y2hFdmVudFNldEluZGV4Q2InKVxuICAgICAgYXdhaXQgdGhpcy5nZXRNYXRjaGVzKClcbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZU9uSXRlbUNsaWNrKGl0ZW0pIHtcbiAgICAgIGlmICh0aGlzLnJvbGUgPT09IEFwcFJvbGVzLkFkbWluKSB7XG4gICAgICAgIHRoaXMuJHNob3dNb2RhbChNYXRjaERldGFpbHMsIHtcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcm9sZTogdGhpcy5yb2xlLFxuICAgICAgICAgICAgbWF0Y2hJZDogaXRlbS5pZCxcbiAgICAgICAgICAgIHVpZDogdGhpcy51aWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICBzdHJldGNoZWQ6IHRydWUsXG4gICAgICAgICAgZGltQW1vdW50OiAwLjUsIC8vIFNldHMgdGhlIGFscGhhIG9mIHRoZSBiYWNrZ3JvdW5kIGRpbSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZU9uSXRlbUVkaXQoaXRlbSkge1xuICAgICAgaWYgKHRoaXMucm9sZSA9PT0gQXBwUm9sZXMuQWRtaW4pIHtcbiAgICAgICAgdGhpcy5oYW5kbGVPbkNyZWF0ZU1hdGNoQ2xpY2soaXRlbSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZU9uSXRlbURlbGV0ZShpdGVtKSB7XG4gICAgICBjb25zdCBhY2tub3dsZWRnZSA9IGF3YWl0IGNvbmZpcm0oe1xuICAgICAgICB0aXRsZTogJ0RlbGV0ZSBNYXRjaCcsXG4gICAgICAgIG1lc3NhZ2U6IGBBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBkZWxldGUgbWF0Y2ggdnMgJHtpdGVtLm9wcG9uZW50fWAsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogJ1llcywgSSBjb25maXJtJyxcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vLCBpZ25vcmUnLFxuICAgICAgfSlcbiAgICAgIGlmIChhY2tub3dsZWRnZSkge1xuICAgICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVtb3ZlTWF0Y2goaXRlbS5pZClcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICBpZiAocmVzdWx0ICYmICFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0TWF0Y2hlcygpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsT25DYW5jZWwoZGF0YSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1cGRhdGVNYXRjaFN0YXR1c0ZvclVzZXIoZGF0YS5pZCwgdGhpcy51aWQsIE1hdGNoQXZhaWxhYmlsaXR5U3RhdHVzLk5PKVxuICAgICAgaWYgKCFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICB0aGlzLiRlbWl0KCdvbk1hdGNoRXZlbnRTZXRJbmRleENiJylcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRNYXRjaGVzKClcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZU9uT2soZGF0YSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1cGRhdGVNYXRjaFN0YXR1c0ZvclVzZXIoZGF0YS5pZCwgdGhpcy51aWQsIE1hdGNoQXZhaWxhYmlsaXR5U3RhdHVzLllFUylcbiAgICAgIGlmICghcmVzdWx0LmlzRXJyb3IpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnb25NYXRjaEV2ZW50U2V0SW5kZXhDYicpXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0TWF0Y2hlcygpXG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSB9XG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuPHRlbXBsYXRlPlxuICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9uYXRhbFwiPlxuICAgIDxMYWJlbCB0ZXh0PVwiTWF0Y2hlc1wiIGNsYXNzPVwiaDEgbS10LTIwIG0tbC0yMCBudC1sYWJlbFwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgaGVpZ2h0PVwiNzBcIiAvPlxuICAgIDxBY3Rpdml0eUluZGljYXRvclxuICAgICAgOnZpc2liaWxpdHk9XCJsb2FkaW5nID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ1wiXG4gICAgICA6YnVzeT1cImxvYWRpbmdcIlxuICAgICAgd2lkdGg9XCIyMFwiXG4gICAgICBoZWlnaHQ9XCIyMFwiXG4gICAgICBjbGFzcz1cImxvYWRlciBudC1hY3Rpdml0eS1pbmRpY2F0b3JcIlxuICAgID48L0FjdGl2aXR5SW5kaWNhdG9yPlxuICAgIDxCYXNlQnV0dG9uV2l0aEljb25cbiAgICAgIEBoYW5kbGVPbkNsaWNrPVwiaGFuZGxlT25DcmVhdGVNYXRjaENsaWNrXCJcbiAgICAgIHRleHQ9XCJOZXcgTWF0Y2hcIlxuICAgICAgaWNvbj1cImZhLXBsdXMtY2lyY2xlXCJcbiAgICAgIGRvYz1cInJpZ2h0XCJcbiAgICAvPlxuICAgIDxTdGFja0xheW91dD5cbiAgICAgIDxGbGV4Qm94TGF5b3V0XG4gICAgICAgIHYtaWY9XCJzdGF0ZS5pdGVtcy5sZW5ndGggPT09IDAgJiYgIWxvYWRpbmdcIlxuICAgICAgICBmbGV4PVwiMVwiXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgY2xhc3M9XCJtLXQtMTBcIlxuICAgICAgPlxuICAgICAgICA8TGFiZWwgY2xhc3M9XCJudC1sYWJlbCBoM1wiIHRleHQ9XCJObyBzY2hlZHVsZSB5ZXQuLlwiIC8+XG4gICAgICA8L0ZsZXhCb3hMYXlvdXQ+XG4gICAgICA8QmFzZUNhcmRMaXN0U2Nyb2xsVmlld1xuICAgICAgICB2LWlmPVwic3RhdGUuaXRlbXMubGVuZ3RoID4gMFwiXG4gICAgICAgIDppdGVtcz1cInN0YXRlLml0ZW1zXCJcbiAgICAgICAgQGhhbmRsZU9uSXRlbUNsaWNrPVwiaGFuZGxlT25JdGVtQ2xpY2tcIlxuICAgICAgICBAaGFuZGxlT25JdGVtRWRpdD1cImhhbmRsZU9uSXRlbUVkaXRcIlxuICAgICAgICBAaGFuZGxlT25JdGVtRGVsZXRlPVwiaGFuZGxlT25JdGVtRGVsZXRlXCJcbiAgICAgICAgQGhhbmRsZU9uQ2FuY2VsPVwiaGFuZGxPbkNhbmNlbFwiXG4gICAgICAgIEBoYW5kbGVPbk9rPVwiaGFuZGxlT25Pa1wiXG4gICAgICAgIHJlZkZyb21QYXJlbnQ9XCJtYXRjaGVzQ2FyZExpc3RcIlxuICAgICAgPjwvQmFzZUNhcmRMaXN0U2Nyb2xsVmlldz5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICA8L1N0YWNrTGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9