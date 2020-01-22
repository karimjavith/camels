webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/MatchForm.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BaseButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/BaseButton.vue");
/* harmony import */ var _shared_firebase_matches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./_shared/firebase/matches.ts");
/* harmony import */ var _shared_firebase_matches__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_firebase_matches__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types_EMatchStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./types/EMatchStatus.ts");
/* harmony import */ var _types_EMatchStatus__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types_EMatchStatus__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_Toasty_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./_shared/Toasty.ts");
/* harmony import */ var _shared_Toasty_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shared_Toasty_ts__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MatchForm',
  components: {
    BaseButton: _components_BaseButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    cb: {
      type: Function,
      default: function _default() {
        return;
      }
    },
    itemId: {
      type: String,
      default: ''
    },
    venue: {
      type: String,
      default: ''
    },
    postCode: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: new Date()
    },
    time: {
      type: String,
      default: ''
    },
    opponent: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      state: {
        match: {
          venue: this.venue,
          postCode: this.postCode,
          date: new Date(this.date) || new Date(),
          time: this.time || "".concat(new Date().getHours(), ":").concat(new Date().getMinutes()),
          opponent: this.opponent
        },
        matchMetaData: {
          isReadOnly: false,
          commitMode: 'Immediate',
          validationMode: 'OnLostFocus',
          propertyAnnotations: [{
            name: 'venue',
            displayName: 'Venue',
            index: 0,
            validators: [{
              name: 'NonEmpty'
            }, {
              name: 'MaximumLength',
              params: {
                length: 20
              }
            }]
          }, {
            name: 'postCode',
            displayName: 'Postcode',
            index: 1,
            validators: [{
              name: 'NonEmpty'
            }, {
              params: {
                regEx: '^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})$',
                errorMessage: 'Please provide valid postcode'
              }
            }]
          }, {
            name: 'date',
            displayName: 'Date',
            index: 2,
            editor: 'DatePicker'
          }, {
            name: 'time',
            displayName: 'Time',
            index: 3,
            editor: 'TimePicker'
          }, {
            name: 'opponent',
            displayName: 'Opponent',
            index: 4,
            validators: [{
              name: 'NonEmpty'
            }, {
              name: 'MaximumLength',
              params: {
                length: 20
              }
            }]
          }]
        },
        loading: false,
        isFormValid: false
      }
    };
  },

  methods: {
    focusSubmitButton() {
      this.$refs.submitButton.nativeView.focus();
    },

    getDateToLocalString(date) {
      var selectedDate = new Date(date.value);
      return "".concat(selectedDate.getFullYear(), "/").concat(selectedDate.getMonth() + 1, "/").concat(selectedDate.getDate());
    },

    getTimeToLocalString(time) {
      var selectedTime = new Date(time.value);
      return "".concat(selectedTime.getHours(), ":").concat(selectedTime.getMinutes());
    },

    handleOnPropertyValidated(_ref) {
      var _this = this;

      return _asyncToGenerator(function* () {
        var {
          object,
          propertyName,
          entityProperty
        } = _ref;
        _this.state = _objectSpread({}, _this.state, {
          isFormValid: entityProperty.isValid
        });
      })();
    },

    handleOnSubmit() {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        var venue = _this2.$refs.matchform.getPropertyByName('venue');

        var postCode = _this2.$refs.matchform.getPropertyByName('postCode');

        var opponent = _this2.$refs.matchform.getPropertyByName('opponent');

        if (!_this2.state.isFormValid || !venue.valueCandidate || !postCode.valueCandidate || !opponent.valueCandidate) {
          Object(_shared_Toasty_ts__WEBPACK_IMPORTED_MODULE_3__["ToastService"])('Invalid entries. Please fill up all the respective details', '#be5138').show();
          return;
        }

        _this2.$refs.dataform.commitAll();

        _this2.state = _objectSpread({}, _this2.state, {
          loading: true
        });

        var matchDetails = _objectSpread({}, _this2.state.match, {
          address: _this2.state.match.postCode,
          status: _types_EMatchStatus__WEBPACK_IMPORTED_MODULE_2__["MatchStatus"].ON
        });

        var action = _this2.itemId ? Object(_shared_firebase_matches__WEBPACK_IMPORTED_MODULE_1__["updateMatch"])(_this2.itemId, matchDetails) : Object(_shared_firebase_matches__WEBPACK_IMPORTED_MODULE_1__["createMatch"])(matchDetails);
        var result = yield action;

        if (result && !result.isError) {
          _this2.$modal.close();

          _this2.cb();
        }

        _this2.state = _objectSpread({}, _this2.state, {
          loading: false
        });
      })();
    }

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvTWF0Y2hGb3JtLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsbUJBREE7QUFFQTtBQUFBO0FBQUEsR0FGQTtBQUdBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUpBLEtBREE7QUFPQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQVBBO0FBV0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FYQTtBQWVBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBZkE7QUFtQkE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FuQkE7QUF1QkE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0F2QkE7QUEyQkE7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUEzQkEsR0FIQTs7QUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLGlDQUZBO0FBR0EsaURBSEE7QUFJQSxrR0FKQTtBQUtBO0FBTEEsU0FEQTtBQVFBO0FBQ0EsMkJBREE7QUFFQSxpQ0FGQTtBQUdBLHVDQUhBO0FBSUEsZ0NBQ0E7QUFDQSx5QkFEQTtBQUVBLGdDQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkEsV0FEQSxFQU9BO0FBQ0EsNEJBREE7QUFFQSxtQ0FGQTtBQUdBLG9CQUhBO0FBSUEseUJBQ0E7QUFBQTtBQUFBLGFBREEsRUFFQTtBQUNBO0FBQ0EsdUJBQ0EseUtBRkE7QUFHQTtBQUhBO0FBREEsYUFGQTtBQUpBLFdBUEEsRUFzQkE7QUFDQSx3QkFEQTtBQUVBLCtCQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBLFdBdEJBLEVBNEJBO0FBQ0Esd0JBREE7QUFFQSwrQkFGQTtBQUdBLG9CQUhBO0FBSUE7QUFKQSxXQTVCQSxFQWtDQTtBQUNBLDRCQURBO0FBRUEsbUNBRkE7QUFHQSxvQkFIQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQSxXQWxDQTtBQUpBLFNBUkE7QUFzREEsc0JBdERBO0FBdURBO0FBdkRBO0FBREE7QUEyREEsR0EvRkE7O0FBZ0dBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7O0FBSUE7QUFDQTtBQUNBLHlGQUNBLENBREEsY0FDQSxzQkFEQTtBQUVBLEtBUkE7O0FBU0E7QUFDQTtBQUNBO0FBQ0EsS0FaQTs7QUFhQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBRUEsS0FmQTs7QUFnQkE7QUFBQTs7QUFBQTtBQUNBOztBQUNBOztBQUNBOztBQUNBLFlBQ0EsNkJBQ0EscUJBREEsSUFFQSx3QkFGQSxJQUdBLHdCQUpBLEVBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBQ0E7QUFBQTtBQUFBOztBQUNBLDZDQUNBLGtCQURBO0FBRUEsOENBRkE7QUFHQTtBQUhBOztBQUtBLHFDQUNBLHlHQURBLEdBRUEsMEZBRkE7QUFHQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBN0JBO0FBOEJBOztBQTlDQTtBQWhHQSxHIiwiZmlsZSI6ImJ1bmRsZS5mMDAxNjY0MjM2ZjY5MGQwNGUxNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbmltcG9ydCBCYXNlQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQmFzZUJ1dHRvbi52dWUnXG5pbXBvcnQgeyBjcmVhdGVNYXRjaCwgdXBkYXRlTWF0Y2ggfSBmcm9tICcuLi9fc2hhcmVkL2ZpcmViYXNlL21hdGNoZXMnXG5pbXBvcnQgeyBNYXRjaFN0YXR1cyB9IGZyb20gJy4uL3R5cGVzL0VNYXRjaFN0YXR1cydcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4uL19zaGFyZWQvVG9hc3R5LnRzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdNYXRjaEZvcm0nLFxuICBjb21wb25lbnRzOiB7IEJhc2VCdXR0b24gfSxcbiAgcHJvcHM6IHtcbiAgICBjYjoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICBkZWZhdWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9LFxuICAgIH0sXG4gICAgaXRlbUlkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIHZlbnVlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIHBvc3RDb2RlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIGRhdGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG5ldyBEYXRlKCksXG4gICAgfSxcbiAgICB0aW1lOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIG9wcG9uZW50OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBtYXRjaDoge1xuICAgICAgICAgIHZlbnVlOiB0aGlzLnZlbnVlLFxuICAgICAgICAgIHBvc3RDb2RlOiB0aGlzLnBvc3RDb2RlLFxuICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKHRoaXMuZGF0ZSkgfHwgbmV3IERhdGUoKSxcbiAgICAgICAgICB0aW1lOiB0aGlzLnRpbWUgfHwgYCR7bmV3IERhdGUoKS5nZXRIb3VycygpfToke25ldyBEYXRlKCkuZ2V0TWludXRlcygpfWAsXG4gICAgICAgICAgb3Bwb25lbnQ6IHRoaXMub3Bwb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIG1hdGNoTWV0YURhdGE6IHtcbiAgICAgICAgICBpc1JlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICBjb21taXRNb2RlOiAnSW1tZWRpYXRlJyxcbiAgICAgICAgICB2YWxpZGF0aW9uTW9kZTogJ09uTG9zdEZvY3VzJyxcbiAgICAgICAgICBwcm9wZXJ0eUFubm90YXRpb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICd2ZW51ZScsXG4gICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnVmVudWUnLFxuICAgICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICAgICAgdmFsaWRhdG9yczogW3sgbmFtZTogJ05vbkVtcHR5JyB9LCB7IG5hbWU6ICdNYXhpbXVtTGVuZ3RoJywgcGFyYW1zOiB7IGxlbmd0aDogMjAgfSB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdwb3N0Q29kZScsXG4gICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnUG9zdGNvZGUnLFxuICAgICAgICAgICAgICBpbmRleDogMSxcbiAgICAgICAgICAgICAgdmFsaWRhdG9yczogW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogJ05vbkVtcHR5JyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICByZWdFeDpcbiAgICAgICAgICAgICAgICAgICAgICAnXihbR2ddW0lpXVtScl0gMFtBYV17Mn0pfCgoKFtBLVphLXpdWzAtOV17MSwyfSl8KChbQS1aYS16XVtBLUhhLWhKLVlqLXldWzAtOV17MSwyfSl8KChbQVphLXpdWzAtOV1bQS1aYS16XSl8KFtBLVphLXpdW0EtSGEtaEotWWoteV1bMC05XT9bQS1aYS16XSkpKSlbMC05XVtBLVphLXpdezJ9KSQnLFxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdQbGVhc2UgcHJvdmlkZSB2YWxpZCBwb3N0Y29kZScsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnZGF0ZScsXG4gICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnRGF0ZScsXG4gICAgICAgICAgICAgIGluZGV4OiAyLFxuICAgICAgICAgICAgICBlZGl0b3I6ICdEYXRlUGlja2VyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICd0aW1lJyxcbiAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdUaW1lJyxcbiAgICAgICAgICAgICAgaW5kZXg6IDMsXG4gICAgICAgICAgICAgIGVkaXRvcjogJ1RpbWVQaWNrZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ29wcG9uZW50JyxcbiAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdPcHBvbmVudCcsXG4gICAgICAgICAgICAgIGluZGV4OiA0LFxuICAgICAgICAgICAgICB2YWxpZGF0b3JzOiBbeyBuYW1lOiAnTm9uRW1wdHknIH0sIHsgbmFtZTogJ01heGltdW1MZW5ndGgnLCBwYXJhbXM6IHsgbGVuZ3RoOiAyMCB9IH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgaXNGb3JtVmFsaWQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBmb2N1c1N1Ym1pdEJ1dHRvbigpIHtcbiAgICAgIHRoaXMuJHJlZnMuc3VibWl0QnV0dG9uLm5hdGl2ZVZpZXcuZm9jdXMoKVxuICAgIH0sXG4gICAgZ2V0RGF0ZVRvTG9jYWxTdHJpbmcoZGF0ZSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUoZGF0ZS52YWx1ZSlcbiAgICAgIHJldHVybiBgJHtzZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKX0vJHtzZWxlY3RlZERhdGUuZ2V0TW9udGgoKSArXG4gICAgICAgIDF9LyR7c2VsZWN0ZWREYXRlLmdldERhdGUoKX1gXG4gICAgfSxcbiAgICBnZXRUaW1lVG9Mb2NhbFN0cmluZyh0aW1lKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFRpbWUgPSBuZXcgRGF0ZSh0aW1lLnZhbHVlKVxuICAgICAgcmV0dXJuIGAke3NlbGVjdGVkVGltZS5nZXRIb3VycygpfToke3NlbGVjdGVkVGltZS5nZXRNaW51dGVzKCl9YFxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlT25Qcm9wZXJ0eVZhbGlkYXRlZCh7IG9iamVjdCwgcHJvcGVydHlOYW1lLCBlbnRpdHlQcm9wZXJ0eSB9KSB7XG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBpc0Zvcm1WYWxpZDogZW50aXR5UHJvcGVydHkuaXNWYWxpZCB9XG4gICAgfSxcbiAgICBhc3luYyBoYW5kbGVPblN1Ym1pdCgpIHtcbiAgICAgIGNvbnN0IHZlbnVlID0gdGhpcy4kcmVmcy5tYXRjaGZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ3ZlbnVlJylcbiAgICAgIGNvbnN0IHBvc3RDb2RlID0gdGhpcy4kcmVmcy5tYXRjaGZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ3Bvc3RDb2RlJylcbiAgICAgIGNvbnN0IG9wcG9uZW50ID0gdGhpcy4kcmVmcy5tYXRjaGZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ29wcG9uZW50JylcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuc3RhdGUuaXNGb3JtVmFsaWQgfHxcbiAgICAgICAgIXZlbnVlLnZhbHVlQ2FuZGlkYXRlIHx8XG4gICAgICAgICFwb3N0Q29kZS52YWx1ZUNhbmRpZGF0ZSB8fFxuICAgICAgICAhb3Bwb25lbnQudmFsdWVDYW5kaWRhdGVcbiAgICAgICkge1xuICAgICAgICBUb2FzdFNlcnZpY2UoJ0ludmFsaWQgZW50cmllcy4gUGxlYXNlIGZpbGwgdXAgYWxsIHRoZSByZXNwZWN0aXZlIGRldGFpbHMnLCAnI2JlNTEzOCcpLnNob3coKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy4kcmVmcy5kYXRhZm9ybS5jb21taXRBbGwoKVxuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgICBjb25zdCBtYXRjaERldGFpbHMgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUubWF0Y2gsXG4gICAgICAgIGFkZHJlc3M6IHRoaXMuc3RhdGUubWF0Y2gucG9zdENvZGUsXG4gICAgICAgIHN0YXR1czogTWF0Y2hTdGF0dXMuT04sXG4gICAgICB9XG4gICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLml0ZW1JZFxuICAgICAgICA/IHVwZGF0ZU1hdGNoKHRoaXMuaXRlbUlkLCBtYXRjaERldGFpbHMpXG4gICAgICAgIDogY3JlYXRlTWF0Y2gobWF0Y2hEZXRhaWxzKVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYWN0aW9uXG4gICAgICBpZiAocmVzdWx0ICYmICFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICB0aGlzLiRtb2RhbC5jbG9zZSgpXG4gICAgICAgIHRoaXMuY2IoKVxuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8TW9kYWxTdGFjayBjbGFzcz1cIm1vZGFsLWNvbnRhaW5lclwiPlxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1vZGFsXCI+XG4gICAgICA8U3RhY2tMYXlvdXQgbWFyZ2luLWJvdHRvbT1cIjI1XCI+XG4gICAgICAgIDxMYWJlbFxuICAgICAgICAgIDp0ZXh0PVwiaXRlbUlkID8gJ0VkaXQgTWF0Y2gnIDogJ0NyZWF0ZSBNYXRjaCdcIlxuICAgICAgICAgIGNsYXNzPVwiaDIgbnQtbGFiZWwgbS0xMCBmb250LXdlaWdodC1ib2xkXCJcbiAgICAgICAgLz5cbiAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICA8U2Nyb2xsVmlldyBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBzY3JvbGxCYXJJbmRpY2F0b3JWaXNpYmxlPVwiZmFsc2VcIj5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibnQtZm9ybVwiPlxuICAgICAgICAgIDxSYWREYXRhRm9ybVxuICAgICAgICAgICAgcmVmPVwibWF0Y2hmb3JtXCJcbiAgICAgICAgICAgIDpzb3VyY2U9XCJzdGF0ZS5tYXRjaFwiXG4gICAgICAgICAgICA6bWV0YWRhdGE9XCJzdGF0ZS5tYXRjaE1ldGFEYXRhXCJcbiAgICAgICAgICAgIEBwcm9wZXJ0eVZhbGlkYXRlZD1cImhhbmRsZU9uUHJvcGVydHlWYWxpZGF0ZWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L1JhZERhdGFGb3JtPlxuICAgICAgICAgIDxCYXNlQnV0dG9uXG4gICAgICAgICAgICA6bG9hZGluZz1cInN0YXRlLmxvYWRpbmdcIlxuICAgICAgICAgICAgQGhhbmRsZU9uQ2xpY2s9XCJoYW5kbGVPblN1Ym1pdFwiXG4gICAgICAgICAgICA6dGV4dD1cIml0ZW1JZCA/ICdVcGRhdGUgTWF0Y2gnIDogJ0NyZWF0ZSBNYXRjaCdcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnbS10LTIwJzogdHJ1ZSwgJy1wcmltYXJ5JzogdHJ1ZSwgJy1yb3VuZGVkLWxnJzogdHJ1ZSB9XCJcbiAgICAgICAgICAgIHJlZkZyb21QYXJlbnQ9XCJtYXRjaFN1Ym1pdEJ1dHRvblwiXG4gICAgICAgICAgPjwvQmFzZUJ1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICByZWY9XCJjbG9zZUJ1dHRvblwiXG4gICAgICAgICAgICBAdGFwPVwiJG1vZGFsLmNsb3NlXCJcbiAgICAgICAgICAgIHRleHQ9XCJDbG9zZVwiXG4gICAgICAgICAgICBjbGFzcz1cImJ0biBtLXQtMjAgLXJvdW5kZWQtbGcgLXNlY29uZGFyeSAtb3V0bGluZVwiXG4gICAgICAgICAgLz4gPC9TdGFja0xheW91dFxuICAgICAgPjwvU2Nyb2xsVmlldz5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICA8L01vZGFsU3RhY2s+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG5AaW1wb3J0ICd+L19hcHAuY29tbW9uJztcblNjcm9sbHZpZXcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tb2RhbC1jb250YWluZXIge1xuICBwYWRkaW5nOiAyNTtcbiAgcGFkZGluZy1ib3R0b206IDEwO1xuICAubW9kYWwge1xuICAgIG1hcmdpbjogMjA7XG4gICAgbWFyZ2luLXRvcDogMzU7XG4gICAgYm9yZGVyLXJhZGl1czogODtcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBSYWREYXRhRm9ybSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC5udC1pbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pbnB1dCB7XG4gICAgICBwbGFjZWhvbGRlci1jb2xvcjogI2E4YThhODtcbiAgICAgIGZvbnQtc2l6ZTogMTY7XG4gICAgfVxuICAgIC5uby1ib3JkZXIge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgfVxufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=