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

        _this7.$emit('onMatchEventSetIndexCb');

        var result = yield Object(_shared_firebase_matches__WEBPACK_IMPORTED_MODULE_7__["updateMatchStatusForUser"])(data.id, _this7.uid, _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_9__["MatchAvailabilityStatus"].NO);

        if (!result.isError) {
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

        _this8.$emit('onMatchEventSetIndexCb');

        var result = yield Object(_shared_firebase_matches__WEBPACK_IMPORTED_MODULE_7__["updateMatchStatusForUser"])(data.id, _this8.uid, _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_9__["MatchAvailabilityStatus"].YES);

        if (!result.isError) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvTWF0Y2hlcy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxpQkFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBLEdBRkE7O0FBR0E7QUFDQTtBQUNBO0FBQ0EscUJBREE7QUFFQTtBQUZBO0FBREE7QUFNQSxHQVZBOztBQVdBO0FBQ0EsOERBREE7QUFFQSw0REFGQTs7QUFHQTtBQUNBO0FBQ0E7O0FBTEEsSUFYQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQSxHQXJCQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQTNCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQWpDQTtBQWtDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREE7QUFFQSwySEFDQSxVQURBO0FBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsMkRBQ0EsS0FEQSxDQUNBLEdBREEsRUFFQSxPQUZBLEdBR0EsSUFIQSxDQUdBLEdBSEEsZUFHQSxVQUhBO0FBSUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxtQkFIQSxNQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0EsZUE1QkE7QUE2QkEsOENBQ0EsV0FEQTtBQUVBO0FBRkE7QUFJQSxhQWxDQSxNQWtDQTtBQUNBLDhDQUNBLFdBREE7QUFFQTtBQUZBO0FBSUE7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQSxTQWpEQSxDQWlEQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBcERBO0FBcURBLEtBdERBOztBQXVEQTtBQUFBOztBQUFBO0FBQ0E7QUFDQTtBQUNBLG9DQURBO0FBRUEsbUNBRkE7QUFHQSxxQ0FIQTtBQUlBLDJDQUpBO0FBS0EsbUNBTEE7QUFNQSxtQ0FOQTtBQU9BO0FBUEEsV0FEQTtBQVVBLDJCQVZBO0FBV0Esd0JBWEE7QUFZQSx5QkFaQTtBQWFBLHdCQWJBLENBYUE7O0FBYkE7QUFEQTtBQWdCQSxLQXZFQTs7QUF3RUE7QUFBQTs7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFDQTs7QUFDQTtBQUhBO0FBSUEsS0E1RUE7O0FBNkVBO0FBQUE7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLDhCQUZBO0FBR0E7QUFIQSxhQURBO0FBTUEsNkJBTkE7QUFPQSwwQkFQQTtBQVFBLDJCQVJBO0FBU0EsMEJBVEEsQ0FTQTs7QUFUQTtBQVdBO0FBYkE7QUFjQSxLQTNGQTs7QUE0RkE7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSUEsS0FoR0E7O0FBaUdBO0FBQUE7O0FBQUE7QUFDQTtBQUNBLCtCQURBO0FBRUEseUZBRkE7QUFHQSx3Q0FIQTtBQUlBO0FBSkE7O0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFlQSxLQWhIQTs7QUFpSEE7QUFBQTs7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBUEE7QUFRQSxLQXpIQTs7QUEwSEE7QUFBQTs7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBUEE7QUFRQTs7QUFsSUE7QUFsQ0EsRyIsImZpbGUiOiJidW5kbGUuNTU3ZGZiYThjNWQ2MWY4YjUyNGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB2dWUvY29tcG9uZW50XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBTdGF0ZSB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgTWF0Y2hEZXRhaWxzIGZyb20gJy4vTWF0Y2hEZXRhaWxzLnZ1ZSdcbmltcG9ydCBCYXNlQ2FyZExpc3RTY3JvbGxWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvQmFzZUNhcmRMaXN0U2Nyb2xsVmlldy52dWUnXG5pbXBvcnQgQmFzZUJ1dHRvbldpdGhJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvQmFzZUJ1dHRvbldpdGhJY29uLnZ1ZSdcbmltcG9ydCBNYXRjaEZvcm0gZnJvbSAnLi9NYXRjaEZvcm0udnVlJ1xuaW1wb3J0IExvZ2luIGZyb20gJy4vTG9naW4udnVlJ1xuaW1wb3J0IHsgQXBwUm9sZXMgfSBmcm9tICcuLi9fc2hhcmVkL2VudW0nXG5pbXBvcnQgeyBnZXRBbGxNYXRjaGVzLCB1cGRhdGVNYXRjaFN0YXR1c0ZvclVzZXIsIHJlbW92ZU1hdGNoIH0gZnJvbSAnLi4vX3NoYXJlZC9maXJlYmFzZS9tYXRjaGVzJ1xuaW1wb3J0IHsgTWF0Y2hTdGF0dXMgfSBmcm9tICcuLi90eXBlcy9FTWF0Y2hTdGF0dXMnXG5pbXBvcnQgeyBNYXRjaEF2YWlsYWJpbGl0eVN0YXR1cyB9IGZyb20gJy4uL3R5cGVzL0VNYXRjaEF2YWlsYWJpbGl0eVN0YXR1cydcbmltcG9ydCB7IEh0dHBTdGF0dXNDb2RlIH0gZnJvbSAnLi4vX3NoYXJlZC9odHRwL2h0dHAnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ01hdGNoZXMnLFxuICBjb21wb25lbnRzOiB7IEJhc2VDYXJkTGlzdFNjcm9sbFZpZXcsIEJhc2VCdXR0b25XaXRoSWNvbiB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICBpdGVtczogW10sXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcbiAgICByb2xlOiBzdGF0ZSA9PiBzdGF0ZS5hdXRoZW50aWNhdGlvbk1vZHVsZS51c2VyQ29udGV4dC5yb2xlLFxuICAgIHVpZDogc3RhdGUgPT4gc3RhdGUuYXV0aGVudGljYXRpb25Nb2R1bGUudXNlckNvbnRleHQudWlkLFxuICAgIGxvYWRpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkaW5nXG4gICAgfSxcbiAgfSksXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3RhdGUubG9hZGluZyA9IHRydWVcbiAgICBjb25zb2xlLmxvZyhgTWF0Y2hlcyA6OiBjcmVhdGVkYClcbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coYE1hdGNoZXMgOjogbW91bnRlZGApXG4gICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmdldE1hdGNoZXMoKVxuICAgIH0pXG4gIH0sXG4gIHVwZGF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKGBNYXRjaGVzIDo6IHVwZGF0ZWRgKVxuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coYGxvYWRpbmcgOjogJHt0aGlzLnN0YXRlLmxvYWRpbmd9YClcbiAgICB9KVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgZ2V0TWF0Y2hlcygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldEFsbE1hdGNoZXModGhpcy51aWQpXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBIdHRwU3RhdHVzQ29kZS5VbmF1dGhvcml6ZWQpIHtcbiAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzdWx0LmlzRXJyb3IpIHtcbiAgICAgICAgICBjb25zdCB7IGRhdGEsIGNvdW50IH0gPSByZXN1bHQuanNvblxuICAgICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBPYmplY3QudmFsdWVzKGRhdGEpLm1hcChtYXRjaCA9PiB7XG4gICAgICAgICAgICAgIG1hdGNoLnRpdGxlID0gYENhbWVscyB2cyAke21hdGNoLm9wcG9uZW50fWBcbiAgICAgICAgICAgICAgbWF0Y2guc3RhdHVzSWNvbiA9ICdmYS1kb3QtY2lyY2xlJ1xuICAgICAgICAgICAgICBtYXRjaC5zdGF0dXNJY29uU3R5bGUgPVxuICAgICAgICAgICAgICAgIG1hdGNoLnN0YXR1cyA9PT0gTWF0Y2hTdGF0dXMuT04gPyB7IGNvbG9yOiAnZ3JlZW4nIH0gOiB7IGNvbG9yOiAnZ3JleScgfVxuICAgICAgICAgICAgICBtYXRjaC5ib2R5ID0gYCR7bWF0Y2gudmVudWV9IC0gJHtuZXcgRGF0ZShtYXRjaC5kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX0gQCAke1xuICAgICAgICAgICAgICAgIG1hdGNoLnRpbWVcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgbWF0Y2guc2hvd0VkaXRPcHRpb24gPSB0aGlzLnJvbGUgPT09IEFwcFJvbGVzLkFkbWluXG4gICAgICAgICAgICAgIG1hdGNoLnNob3dEZWxldGVPcHRpb24gPSB0aGlzLnJvbGUgPT09IEFwcFJvbGVzLkFkbWluXG4gICAgICAgICAgICAgIGlmIChtYXRjaC5zdGF0dXMgPT09IE1hdGNoU3RhdHVzLk9OKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2guc2hvd0FjdGlvbkl0ZW1zID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoRGF0ZVRpbWUgPSBgJHttYXRjaC5kYXRlXG4gICAgICAgICAgICAgICAgICAuc3BsaXQoJy8nKVxuICAgICAgICAgICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy0nKX0gJHttYXRjaC50aW1lfWBcbiAgICAgICAgICAgICAgICBtYXRjaC5hY3Rpb25CdXR0b25EaXNhYmxlZCA9IG5ldyBEYXRlKG1hdGNoRGF0ZVRpbWUpIDwgbmV3IERhdGUoKVxuICAgICAgICAgICAgICAgIG1hdGNoLmNhbmNlbFRleHQgPSBtYXRjaC5hY3Rpb25CdXR0b25EaXNhYmxlZCA/IGBOb3QgUGxheWVkYCA6IGBOb3QgaW5gXG4gICAgICAgICAgICAgICAgbWF0Y2gub2tUZXh0ID0gbWF0Y2guYWN0aW9uQnV0dG9uRGlzYWJsZWQgPyBgUGxheWVkYCA6IGBJIGFtIGluYFxuICAgICAgICAgICAgICAgIGlmIChtYXRjaC5teVN0YXR1cyA9PT0gTWF0Y2hBdmFpbGFiaWxpdHlTdGF0dXMuWUVTKSB7XG4gICAgICAgICAgICAgICAgICBtYXRjaC5va1RleHRJY29uID0gJ2ZhLWNoZWNrLWNpcmNsZSdcbiAgICAgICAgICAgICAgICAgIG1hdGNoLm9rVGV4dFN0eWxlcyA9IHsgY29sb3I6ICdncmVlbicgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWF0Y2gubXlTdGF0dXMgPT09IE1hdGNoQXZhaWxhYmlsaXR5U3RhdHVzLk5PKSB7XG4gICAgICAgICAgICAgICAgICBtYXRjaC5jYW5jZWxUZXh0SWNvbiA9ICdmYS10aW1lcy1jaXJjbGUnXG4gICAgICAgICAgICAgICAgICBtYXRjaC5jYW5jZWxUZXh0U3R5bGVzID0geyBjb2xvcjogJ3JlZCcgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgICBpdGVtczogbWF0Y2hlcyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZU9uQ3JlYXRlTWF0Y2hDbGljayhpdGVtKSB7XG4gICAgICB0aGlzLiRzaG93TW9kYWwoTWF0Y2hGb3JtLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgY2I6IHRoaXMuaGFuZGxlTW9kYWxDYixcbiAgICAgICAgICBpdGVtSWQ6IGl0ZW0gJiYgaXRlbS5pZCxcbiAgICAgICAgICB2ZW51ZTogaXRlbSAmJiBpdGVtLnZlbnVlLFxuICAgICAgICAgIHBvc3RDb2RlOiBpdGVtICYmIGl0ZW0ucG9zdENvZGUsXG4gICAgICAgICAgZGF0ZTogaXRlbSAmJiBpdGVtLmRhdGUsXG4gICAgICAgICAgdGltZTogaXRlbSAmJiBpdGVtLnRpbWUsXG4gICAgICAgICAgb3Bwb25lbnQ6IGl0ZW0gJiYgaXRlbS5vcHBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICBzdHJldGNoZWQ6IHRydWUsXG4gICAgICAgIGRpbUFtb3VudDogMC41LCAvLyBTZXRzIHRoZSBhbHBoYSBvZiB0aGUgYmFja2dyb3VuZCBkaW0sXG4gICAgICB9KVxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlTW9kYWxDYigpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IHRydWUgfVxuICAgICAgdGhpcy4kZW1pdCgnb25NYXRjaEV2ZW50U2V0SW5kZXhDYicpXG4gICAgICBhd2FpdCB0aGlzLmdldE1hdGNoZXMoKVxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlT25JdGVtQ2xpY2soaXRlbSkge1xuICAgICAgaWYgKHRoaXMucm9sZSA9PT0gQXBwUm9sZXMuQWRtaW4pIHtcbiAgICAgICAgdGhpcy4kc2hvd01vZGFsKE1hdGNoRGV0YWlscywge1xuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICByb2xlOiB0aGlzLnJvbGUsXG4gICAgICAgICAgICBtYXRjaElkOiBpdGVtLmlkLFxuICAgICAgICAgICAgdWlkOiB0aGlzLnVpZCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxuICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgIHN0cmV0Y2hlZDogdHJ1ZSxcbiAgICAgICAgICBkaW1BbW91bnQ6IDAuNSwgLy8gU2V0cyB0aGUgYWxwaGEgb2YgdGhlIGJhY2tncm91bmQgZGltLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlT25JdGVtRWRpdChpdGVtKSB7XG4gICAgICBpZiAodGhpcy5yb2xlID09PSBBcHBSb2xlcy5BZG1pbikge1xuICAgICAgICB0aGlzLmhhbmRsZU9uQ3JlYXRlTWF0Y2hDbGljayhpdGVtKVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlT25JdGVtRGVsZXRlKGl0ZW0pIHtcbiAgICAgIGNvbnN0IGFja25vd2xlZGdlID0gYXdhaXQgY29uZmlybSh7XG4gICAgICAgIHRpdGxlOiAnRGVsZXRlIE1hdGNoJyxcbiAgICAgICAgbWVzc2FnZTogYEFyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIGRlbGV0ZSBtYXRjaCB2cyAke2l0ZW0ub3Bwb25lbnR9YCxcbiAgICAgICAgb2tCdXR0b25UZXh0OiAnWWVzLCBJIGNvbmZpcm0nLFxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm8sIGlnbm9yZScsXG4gICAgICB9KVxuICAgICAgaWYgKGFja25vd2xlZGdlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IHRydWUgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZW1vdmVNYXRjaChpdGVtLmlkKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgIGlmIChyZXN1bHQgJiYgIXJlc3VsdC5pc0Vycm9yKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5nZXRNYXRjaGVzKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxPbkNhbmNlbChkYXRhKSB7XG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH1cbiAgICAgIHRoaXMuJGVtaXQoJ29uTWF0Y2hFdmVudFNldEluZGV4Q2InKVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXBkYXRlTWF0Y2hTdGF0dXNGb3JVc2VyKGRhdGEuaWQsIHRoaXMudWlkLCBNYXRjaEF2YWlsYWJpbGl0eVN0YXR1cy5OTylcbiAgICAgIGlmICghcmVzdWx0LmlzRXJyb3IpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRNYXRjaGVzKClcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZU9uT2soZGF0YSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgICB0aGlzLiRlbWl0KCdvbk1hdGNoRXZlbnRTZXRJbmRleENiJylcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHVwZGF0ZU1hdGNoU3RhdHVzRm9yVXNlcihkYXRhLmlkLCB0aGlzLnVpZCwgTWF0Y2hBdmFpbGFiaWxpdHlTdGF0dXMuWUVTKVxuICAgICAgaWYgKCFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICBhd2FpdCB0aGlzLmdldE1hdGNoZXMoKVxuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD5cbjx0ZW1wbGF0ZT5cbiAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbmF0YWxcIj5cbiAgICA8TGFiZWwgdGV4dD1cIk1hdGNoZXNcIiBjbGFzcz1cImgxIG0tdC0yMCBtLWwtMjAgbnQtbGFiZWxcIiBmb250V2VpZ2h0PVwiYm9sZFwiIGhlaWdodD1cIjcwXCIgLz5cbiAgICA8QWN0aXZpdHlJbmRpY2F0b3JcbiAgICAgIDp2aXNpYmlsaXR5PVwibG9hZGluZyA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcIlxuICAgICAgOmJ1c3k9XCJsb2FkaW5nXCJcbiAgICAgIHdpZHRoPVwiMjBcIlxuICAgICAgaGVpZ2h0PVwiMjBcIlxuICAgICAgY2xhc3M9XCJsb2FkZXIgbnQtYWN0aXZpdHktaW5kaWNhdG9yXCJcbiAgICA+PC9BY3Rpdml0eUluZGljYXRvcj5cbiAgICA8QmFzZUJ1dHRvbldpdGhJY29uXG4gICAgICBAaGFuZGxlT25DbGljaz1cImhhbmRsZU9uQ3JlYXRlTWF0Y2hDbGlja1wiXG4gICAgICB0ZXh0PVwiTmV3IE1hdGNoXCJcbiAgICAgIGljb249XCJmYS1wbHVzLWNpcmNsZVwiXG4gICAgICBkb2M9XCJyaWdodFwiXG4gICAgLz5cbiAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICA8RmxleEJveExheW91dFxuICAgICAgICB2LWlmPVwic3RhdGUuaXRlbXMubGVuZ3RoID09PSAwICYmICFsb2FkaW5nXCJcbiAgICAgICAgZmxleD1cIjFcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgIGNsYXNzPVwibS10LTEwXCJcbiAgICAgID5cbiAgICAgICAgPExhYmVsIGNsYXNzPVwibnQtbGFiZWwgaDNcIiB0ZXh0PVwiTm8gc2NoZWR1bGUgeWV0Li5cIiAvPlxuICAgICAgPC9GbGV4Qm94TGF5b3V0PlxuICAgICAgPEJhc2VDYXJkTGlzdFNjcm9sbFZpZXdcbiAgICAgICAgdi1pZj1cInN0YXRlLml0ZW1zLmxlbmd0aCA+IDBcIlxuICAgICAgICA6aXRlbXM9XCJzdGF0ZS5pdGVtc1wiXG4gICAgICAgIEBoYW5kbGVPbkl0ZW1DbGljaz1cImhhbmRsZU9uSXRlbUNsaWNrXCJcbiAgICAgICAgQGhhbmRsZU9uSXRlbUVkaXQ9XCJoYW5kbGVPbkl0ZW1FZGl0XCJcbiAgICAgICAgQGhhbmRsZU9uSXRlbURlbGV0ZT1cImhhbmRsZU9uSXRlbURlbGV0ZVwiXG4gICAgICAgIEBoYW5kbGVPbkNhbmNlbD1cImhhbmRsT25DYW5jZWxcIlxuICAgICAgICBAaGFuZGxlT25Paz1cImhhbmRsZU9uT2tcIlxuICAgICAgICByZWZGcm9tUGFyZW50PVwibWF0Y2hlc0NhcmRMaXN0XCJcbiAgICAgID48L0Jhc2VDYXJkTGlzdFNjcm9sbFZpZXc+XG4gICAgPC9TdGFja0xheW91dD5cbiAgPC9TdGFja0xheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==