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
          yield _this7.$emit('onMatchEventSetIndexCb');
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
          yield _this8.$emit('onMatchEventSetIndexCb');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvTWF0Y2hlcy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxpQkFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBLEdBRkE7O0FBR0E7QUFDQTtBQUNBO0FBQ0EscUJBREE7QUFFQTtBQUZBO0FBREE7QUFNQSxHQVZBOztBQVdBO0FBQ0EsOERBREE7QUFFQSw0REFGQTs7QUFHQTtBQUNBO0FBQ0E7O0FBTEEsSUFYQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQSxHQXJCQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQTNCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQWpDQTtBQWtDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREE7QUFFQSwySEFDQSxVQURBO0FBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsMkRBQ0EsS0FEQSxDQUNBLEdBREEsRUFFQSxPQUZBLEdBR0EsSUFIQSxDQUdBLEdBSEEsZUFHQSxVQUhBO0FBSUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxtQkFIQSxNQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0EsZUE1QkE7QUE2QkEsOENBQ0EsV0FEQTtBQUVBO0FBRkE7QUFJQSxhQWxDQSxNQWtDQTtBQUNBLDhDQUNBLFdBREE7QUFFQTtBQUZBO0FBSUE7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQSxTQWpEQSxDQWlEQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBcERBO0FBcURBLEtBdERBOztBQXVEQTtBQUFBOztBQUFBO0FBQ0E7QUFDQTtBQUNBLG9DQURBO0FBRUEsbUNBRkE7QUFHQSxxQ0FIQTtBQUlBLDJDQUpBO0FBS0EsbUNBTEE7QUFNQSxtQ0FOQTtBQU9BO0FBUEEsV0FEQTtBQVVBLDJCQVZBO0FBV0Esd0JBWEE7QUFZQSx5QkFaQTtBQWFBLHdCQWJBLENBYUE7O0FBYkE7QUFEQTtBQWdCQSxLQXZFQTs7QUF3RUE7QUFBQTs7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFDQTs7QUFDQTtBQUhBO0FBSUEsS0E1RUE7O0FBNkVBO0FBQUE7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLDhCQUZBO0FBR0E7QUFIQSxhQURBO0FBTUEsNkJBTkE7QUFPQSwwQkFQQTtBQVFBLDJCQVJBO0FBU0EsMEJBVEEsQ0FTQTs7QUFUQTtBQVdBO0FBYkE7QUFjQSxLQTNGQTs7QUE0RkE7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSUEsS0FoR0E7O0FBaUdBO0FBQUE7O0FBQUE7QUFDQTtBQUNBLCtCQURBO0FBRUEseUZBRkE7QUFHQSx3Q0FIQTtBQUlBO0FBSkE7O0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFlQSxLQWhIQTs7QUFpSEE7QUFBQTs7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQVBBO0FBUUEsS0F6SEE7O0FBMEhBO0FBQUE7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFQQTtBQVFBOztBQWxJQTtBQWxDQSxHIiwiZmlsZSI6ImJ1bmRsZS4xYzcyZGVmYmZkZGQ4YzBjMDM3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHZ1ZS9jb21wb25lbnRcblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcFN0YXRlIH0gZnJvbSAndnVleCdcbmltcG9ydCBNYXRjaERldGFpbHMgZnJvbSAnLi9NYXRjaERldGFpbHMudnVlJ1xuaW1wb3J0IEJhc2VDYXJkTGlzdFNjcm9sbFZpZXcgZnJvbSAnLi4vY29tcG9uZW50cy9CYXNlQ2FyZExpc3RTY3JvbGxWaWV3LnZ1ZSdcbmltcG9ydCBCYXNlQnV0dG9uV2l0aEljb24gZnJvbSAnLi4vY29tcG9uZW50cy9CYXNlQnV0dG9uV2l0aEljb24udnVlJ1xuaW1wb3J0IE1hdGNoRm9ybSBmcm9tICcuL01hdGNoRm9ybS52dWUnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbi52dWUnXG5pbXBvcnQgeyBBcHBSb2xlcyB9IGZyb20gJy4uL19zaGFyZWQvZW51bSdcbmltcG9ydCB7IGdldEFsbE1hdGNoZXMsIHVwZGF0ZU1hdGNoU3RhdHVzRm9yVXNlciwgcmVtb3ZlTWF0Y2ggfSBmcm9tICcuLi9fc2hhcmVkL2ZpcmViYXNlL21hdGNoZXMnXG5pbXBvcnQgeyBNYXRjaFN0YXR1cyB9IGZyb20gJy4uL3R5cGVzL0VNYXRjaFN0YXR1cydcbmltcG9ydCB7IE1hdGNoQXZhaWxhYmlsaXR5U3RhdHVzIH0gZnJvbSAnLi4vdHlwZXMvRU1hdGNoQXZhaWxhYmlsaXR5U3RhdHVzJ1xuaW1wb3J0IHsgSHR0cFN0YXR1c0NvZGUgfSBmcm9tICcuLi9fc2hhcmVkL2h0dHAvaHR0cCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTWF0Y2hlcycsXG4gIGNvbXBvbmVudHM6IHsgQmFzZUNhcmRMaXN0U2Nyb2xsVmlldywgQmFzZUJ1dHRvbldpdGhJY29uIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDogbWFwU3RhdGUoe1xuICAgIHJvbGU6IHN0YXRlID0+IHN0YXRlLmF1dGhlbnRpY2F0aW9uTW9kdWxlLnVzZXJDb250ZXh0LnJvbGUsXG4gICAgdWlkOiBzdGF0ZSA9PiBzdGF0ZS5hdXRoZW50aWNhdGlvbk1vZHVsZS51c2VyQ29udGV4dC51aWQsXG4gICAgbG9hZGluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmdcbiAgICB9LFxuICB9KSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdGF0ZS5sb2FkaW5nID0gdHJ1ZVxuICAgIGNvbnNvbGUubG9nKGBNYXRjaGVzIDo6IGNyZWF0ZWRgKVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhgTWF0Y2hlcyA6OiBtb3VudGVkYClcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZ2V0TWF0Y2hlcygpXG4gICAgfSlcbiAgfSxcbiAgdXBkYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coYE1hdGNoZXMgOjogdXBkYXRlZGApXG4gICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhgbG9hZGluZyA6OiAke3RoaXMuc3RhdGUubG9hZGluZ31gKVxuICAgIH0pXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBnZXRNYXRjaGVzKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0QWxsTWF0Y2hlcyh0aGlzLnVpZClcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEh0dHBTdGF0dXNDb2RlLlVuYXV0aG9yaXplZCkge1xuICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTG9naW4sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICAgIGNvbnN0IHsgZGF0YSwgY291bnQgfSA9IHJlc3VsdC5qc29uXG4gICAgICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IE9iamVjdC52YWx1ZXMoZGF0YSkubWFwKG1hdGNoID0+IHtcbiAgICAgICAgICAgICAgbWF0Y2gudGl0bGUgPSBgQ2FtZWxzIHZzICR7bWF0Y2gub3Bwb25lbnR9YFxuICAgICAgICAgICAgICBtYXRjaC5zdGF0dXNJY29uID0gJ2ZhLWRvdC1jaXJjbGUnXG4gICAgICAgICAgICAgIG1hdGNoLnN0YXR1c0ljb25TdHlsZSA9XG4gICAgICAgICAgICAgICAgbWF0Y2guc3RhdHVzID09PSBNYXRjaFN0YXR1cy5PTiA/IHsgY29sb3I6ICdncmVlbicgfSA6IHsgY29sb3I6ICdncmV5JyB9XG4gICAgICAgICAgICAgIG1hdGNoLmJvZHkgPSBgJHttYXRjaC52ZW51ZX0gLSAke25ldyBEYXRlKG1hdGNoLmRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfSBAICR7XG4gICAgICAgICAgICAgICAgbWF0Y2gudGltZVxuICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICBtYXRjaC5zaG93RWRpdE9wdGlvbiA9IHRoaXMucm9sZSA9PT0gQXBwUm9sZXMuQWRtaW5cbiAgICAgICAgICAgICAgbWF0Y2guc2hvd0RlbGV0ZU9wdGlvbiA9IHRoaXMucm9sZSA9PT0gQXBwUm9sZXMuQWRtaW5cbiAgICAgICAgICAgICAgaWYgKG1hdGNoLnN0YXR1cyA9PT0gTWF0Y2hTdGF0dXMuT04pIHtcbiAgICAgICAgICAgICAgICBtYXRjaC5zaG93QWN0aW9uSXRlbXMgPSB0cnVlXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hEYXRlVGltZSA9IGAke21hdGNoLmRhdGVcbiAgICAgICAgICAgICAgICAgIC5zcGxpdCgnLycpXG4gICAgICAgICAgICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgICAgICAgICAgICAuam9pbignLScpfSAke21hdGNoLnRpbWV9YFxuICAgICAgICAgICAgICAgIG1hdGNoLmFjdGlvbkJ1dHRvbkRpc2FibGVkID0gbmV3IERhdGUobWF0Y2hEYXRlVGltZSkgPCBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgICAgbWF0Y2guY2FuY2VsVGV4dCA9IG1hdGNoLmFjdGlvbkJ1dHRvbkRpc2FibGVkID8gYE5vdCBQbGF5ZWRgIDogYE5vdCBpbmBcbiAgICAgICAgICAgICAgICBtYXRjaC5va1RleHQgPSBtYXRjaC5hY3Rpb25CdXR0b25EaXNhYmxlZCA/IGBQbGF5ZWRgIDogYEkgYW0gaW5gXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoLm15U3RhdHVzID09PSBNYXRjaEF2YWlsYWJpbGl0eVN0YXR1cy5ZRVMpIHtcbiAgICAgICAgICAgICAgICAgIG1hdGNoLm9rVGV4dEljb24gPSAnZmEtY2hlY2stY2lyY2xlJ1xuICAgICAgICAgICAgICAgICAgbWF0Y2gub2tUZXh0U3R5bGVzID0geyBjb2xvcjogJ2dyZWVuJyB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaC5teVN0YXR1cyA9PT0gTWF0Y2hBdmFpbGFiaWxpdHlTdGF0dXMuTk8pIHtcbiAgICAgICAgICAgICAgICAgIG1hdGNoLmNhbmNlbFRleHRJY29uID0gJ2ZhLXRpbWVzLWNpcmNsZSdcbiAgICAgICAgICAgICAgICAgIG1hdGNoLmNhbmNlbFRleHRTdHlsZXMgPSB7IGNvbG9yOiAncmVkJyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBtYXRjaFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBtYXRjaGVzLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlT25DcmVhdGVNYXRjaENsaWNrKGl0ZW0pIHtcbiAgICAgIHRoaXMuJHNob3dNb2RhbChNYXRjaEZvcm0sIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBjYjogdGhpcy5oYW5kbGVNb2RhbENiLFxuICAgICAgICAgIGl0ZW1JZDogaXRlbSAmJiBpdGVtLmlkLFxuICAgICAgICAgIHZlbnVlOiBpdGVtICYmIGl0ZW0udmVudWUsXG4gICAgICAgICAgcG9zdENvZGU6IGl0ZW0gJiYgaXRlbS5wb3N0Q29kZSxcbiAgICAgICAgICBkYXRlOiBpdGVtICYmIGl0ZW0uZGF0ZSxcbiAgICAgICAgICB0aW1lOiBpdGVtICYmIGl0ZW0udGltZSxcbiAgICAgICAgICBvcHBvbmVudDogaXRlbSAmJiBpdGVtLm9wcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIHN0cmV0Y2hlZDogdHJ1ZSxcbiAgICAgICAgZGltQW1vdW50OiAwLjUsIC8vIFNldHMgdGhlIGFscGhhIG9mIHRoZSBiYWNrZ3JvdW5kIGRpbSxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBhc3luYyBoYW5kbGVNb2RhbENiKCkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgICB0aGlzLiRlbWl0KCdvbk1hdGNoRXZlbnRTZXRJbmRleENiJylcbiAgICAgIGF3YWl0IHRoaXMuZ2V0TWF0Y2hlcygpXG4gICAgfSxcbiAgICBhc3luYyBoYW5kbGVPbkl0ZW1DbGljayhpdGVtKSB7XG4gICAgICBpZiAodGhpcy5yb2xlID09PSBBcHBSb2xlcy5BZG1pbikge1xuICAgICAgICB0aGlzLiRzaG93TW9kYWwoTWF0Y2hEZXRhaWxzLCB7XG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHJvbGU6IHRoaXMucm9sZSxcbiAgICAgICAgICAgIG1hdGNoSWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICB1aWQ6IHRoaXMudWlkLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXG4gICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgc3RyZXRjaGVkOiB0cnVlLFxuICAgICAgICAgIGRpbUFtb3VudDogMC41LCAvLyBTZXRzIHRoZSBhbHBoYSBvZiB0aGUgYmFja2dyb3VuZCBkaW0sXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBoYW5kbGVPbkl0ZW1FZGl0KGl0ZW0pIHtcbiAgICAgIGlmICh0aGlzLnJvbGUgPT09IEFwcFJvbGVzLkFkbWluKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlT25DcmVhdGVNYXRjaENsaWNrKGl0ZW0pXG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBoYW5kbGVPbkl0ZW1EZWxldGUoaXRlbSkge1xuICAgICAgY29uc3QgYWNrbm93bGVkZ2UgPSBhd2FpdCBjb25maXJtKHtcbiAgICAgICAgdGl0bGU6ICdEZWxldGUgTWF0Y2gnLFxuICAgICAgICBtZXNzYWdlOiBgQXJlIHlvdSBzdXJlIHRoYXQgeW91IHdhbnQgdG8gZGVsZXRlIG1hdGNoIHZzICR7aXRlbS5vcHBvbmVudH1gLFxuICAgICAgICBva0J1dHRvblRleHQ6ICdZZXMsIEkgY29uZmlybScsXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdObywgaWdub3JlJyxcbiAgICAgIH0pXG4gICAgICBpZiAoYWNrbm93bGVkZ2UpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlbW92ZU1hdGNoKGl0ZW0uaWQpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgaWYgKHJlc3VsdCAmJiAhcmVzdWx0LmlzRXJyb3IpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLmdldE1hdGNoZXMoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBoYW5kbE9uQ2FuY2VsKGRhdGEpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IHRydWUgfVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXBkYXRlTWF0Y2hTdGF0dXNGb3JVc2VyKGRhdGEuaWQsIHRoaXMudWlkLCBNYXRjaEF2YWlsYWJpbGl0eVN0YXR1cy5OTylcbiAgICAgIGlmICghcmVzdWx0LmlzRXJyb3IpIHtcbiAgICAgICAgYXdhaXQgdGhpcy4kZW1pdCgnb25NYXRjaEV2ZW50U2V0SW5kZXhDYicpXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0TWF0Y2hlcygpXG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSB9XG4gICAgfSxcbiAgICBhc3luYyBoYW5kbGVPbk9rKGRhdGEpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IHRydWUgfVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXBkYXRlTWF0Y2hTdGF0dXNGb3JVc2VyKGRhdGEuaWQsIHRoaXMudWlkLCBNYXRjaEF2YWlsYWJpbGl0eVN0YXR1cy5ZRVMpXG4gICAgICBpZiAoIXJlc3VsdC5pc0Vycm9yKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuJGVtaXQoJ29uTWF0Y2hFdmVudFNldEluZGV4Q2InKVxuICAgICAgICBhd2FpdCB0aGlzLmdldE1hdGNoZXMoKVxuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD5cbjx0ZW1wbGF0ZT5cbiAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbmF0YWxcIj5cbiAgICA8TGFiZWwgdGV4dD1cIk1hdGNoZXNcIiBjbGFzcz1cImgxIG0tdC0yMCBtLWwtMjAgbnQtbGFiZWxcIiBmb250V2VpZ2h0PVwiYm9sZFwiIGhlaWdodD1cIjcwXCIgLz5cbiAgICA8QWN0aXZpdHlJbmRpY2F0b3JcbiAgICAgIDp2aXNpYmlsaXR5PVwibG9hZGluZyA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcIlxuICAgICAgOmJ1c3k9XCJsb2FkaW5nXCJcbiAgICAgIHdpZHRoPVwiMjBcIlxuICAgICAgaGVpZ2h0PVwiMjBcIlxuICAgICAgY2xhc3M9XCJsb2FkZXIgbnQtYWN0aXZpdHktaW5kaWNhdG9yXCJcbiAgICA+PC9BY3Rpdml0eUluZGljYXRvcj5cbiAgICA8QmFzZUJ1dHRvbldpdGhJY29uXG4gICAgICBAaGFuZGxlT25DbGljaz1cImhhbmRsZU9uQ3JlYXRlTWF0Y2hDbGlja1wiXG4gICAgICB0ZXh0PVwiTmV3IE1hdGNoXCJcbiAgICAgIGljb249XCJmYS1wbHVzLWNpcmNsZVwiXG4gICAgICBkb2M9XCJyaWdodFwiXG4gICAgLz5cbiAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICA8RmxleEJveExheW91dFxuICAgICAgICB2LWlmPVwic3RhdGUuaXRlbXMubGVuZ3RoID09PSAwICYmICFsb2FkaW5nXCJcbiAgICAgICAgZmxleD1cIjFcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgIGNsYXNzPVwibS10LTEwXCJcbiAgICAgID5cbiAgICAgICAgPExhYmVsIGNsYXNzPVwibnQtbGFiZWwgaDNcIiB0ZXh0PVwiTm8gc2NoZWR1bGUgeWV0Li5cIiAvPlxuICAgICAgPC9GbGV4Qm94TGF5b3V0PlxuICAgICAgPEJhc2VDYXJkTGlzdFNjcm9sbFZpZXdcbiAgICAgICAgdi1pZj1cInN0YXRlLml0ZW1zLmxlbmd0aCA+IDBcIlxuICAgICAgICA6aXRlbXM9XCJzdGF0ZS5pdGVtc1wiXG4gICAgICAgIEBoYW5kbGVPbkl0ZW1DbGljaz1cImhhbmRsZU9uSXRlbUNsaWNrXCJcbiAgICAgICAgQGhhbmRsZU9uSXRlbUVkaXQ9XCJoYW5kbGVPbkl0ZW1FZGl0XCJcbiAgICAgICAgQGhhbmRsZU9uSXRlbURlbGV0ZT1cImhhbmRsZU9uSXRlbURlbGV0ZVwiXG4gICAgICAgIEBoYW5kbGVPbkNhbmNlbD1cImhhbmRsT25DYW5jZWxcIlxuICAgICAgICBAaGFuZGxlT25Paz1cImhhbmRsZU9uT2tcIlxuICAgICAgICByZWZGcm9tUGFyZW50PVwibWF0Y2hlc0NhcmRMaXN0XCJcbiAgICAgID48L0Jhc2VDYXJkTGlzdFNjcm9sbFZpZXc+XG4gICAgPC9TdGFja0xheW91dD5cbiAgPC9TdGFja0xheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==