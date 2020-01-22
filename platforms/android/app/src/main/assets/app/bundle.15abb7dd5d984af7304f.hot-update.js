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
              name: 'RegEx',
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
        formValidation: {}
      }
    };
  },

  methods: {
    focusSubmitButton() {
      this.$refs.submitButton.nativeView.focus();
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
          formValidation: _objectSpread({}, _this.state.formValidation, {
            [propertyName]: entityProperty.isValid
          })
        });
      })();
    },

    handleOnSubmit() {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        var venue = _this2.$refs.matchform.getPropertyByName('venue');

        var postCode = _this2.$refs.matchform.getPropertyByName('postCode');

        var opponent = _this2.$refs.matchform.getPropertyByName('opponent');

        console.log("----------------".concat(JSON.stringify(_this2.state.formValidation)));

        if (_this2.state.formValidation.length > 0) {
          var isAnyFieldInvalid = Object.values(_this2.state.formValidation).map(x => !x);
          console.log(isAnyFieldInvalid);

          if (isAnyFieldInvalid.length > 0) {
            Object(_shared_Toasty_ts__WEBPACK_IMPORTED_MODULE_3__["ToastService"])("Invalid entries - Please try again", '#be5138').show();
            return;
          }
        }

        if (!venue.valueCandidate || !postCode.valueCandidate || !opponent.valueCandidate) {
          Object(_shared_Toasty_ts__WEBPACK_IMPORTED_MODULE_3__["ToastService"])('Invalid entries. Please fill up all the respective details', '#be5138').show();
          return;
        }

        _this2.$refs.matchform.commitAll();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvTWF0Y2hGb3JtLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsbUJBREE7QUFFQTtBQUFBO0FBQUEsR0FGQTtBQUdBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUpBLEtBREE7QUFPQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQVBBO0FBV0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FYQTtBQWVBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBZkE7QUFtQkE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FuQkE7QUF1QkE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0F2QkE7QUEyQkE7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUEzQkEsR0FIQTs7QUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLGlDQUZBO0FBR0EsaURBSEE7QUFJQSxrR0FKQTtBQUtBO0FBTEEsU0FEQTtBQVFBO0FBQ0EsMkJBREE7QUFFQSxpQ0FGQTtBQUdBLHVDQUhBO0FBSUEsZ0NBQ0E7QUFDQSx5QkFEQTtBQUVBLGdDQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkEsV0FEQSxFQU9BO0FBQ0EsNEJBREE7QUFFQSxtQ0FGQTtBQUdBLG9CQUhBO0FBSUEseUJBQ0E7QUFBQTtBQUFBLGFBREEsRUFFQTtBQUNBLDJCQURBO0FBRUE7QUFDQSx1QkFDQSx5S0FGQTtBQUdBO0FBSEE7QUFGQSxhQUZBO0FBSkEsV0FQQSxFQXVCQTtBQUNBLHdCQURBO0FBRUEsK0JBRkE7QUFHQSxvQkFIQTtBQUlBO0FBSkEsV0F2QkEsRUE2QkE7QUFDQSx3QkFEQTtBQUVBLCtCQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBLFdBN0JBLEVBbUNBO0FBQ0EsNEJBREE7QUFFQSxtQ0FGQTtBQUdBLG9CQUhBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBLFdBbkNBO0FBSkEsU0FSQTtBQXVEQSxzQkF2REE7QUF3REE7QUF4REE7QUFEQTtBQTREQSxHQWhHQTs7QUFpR0E7QUFDQTtBQUNBO0FBQ0EsS0FIQTs7QUFJQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLHdDQUNBLFdBREE7QUFFQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBS0EsS0FUQTs7QUFVQTtBQUFBOztBQUFBO0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBQ0E7QUFBQTtBQUFBOztBQUNBLDZDQUNBLGtCQURBO0FBRUEsOENBRkE7QUFHQTtBQUhBOztBQUtBLHFDQUNBLHlHQURBLEdBRUEsMEZBRkE7QUFHQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBakNBO0FBa0NBOztBQTVDQTtBQWpHQSxHIiwiZmlsZSI6ImJ1bmRsZS4xNWFiYjdkZDVkOTg0YWY3MzA0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbmltcG9ydCBCYXNlQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQmFzZUJ1dHRvbi52dWUnXG5pbXBvcnQgeyBjcmVhdGVNYXRjaCwgdXBkYXRlTWF0Y2ggfSBmcm9tICcuLi9fc2hhcmVkL2ZpcmViYXNlL21hdGNoZXMnXG5pbXBvcnQgeyBNYXRjaFN0YXR1cyB9IGZyb20gJy4uL3R5cGVzL0VNYXRjaFN0YXR1cydcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4uL19zaGFyZWQvVG9hc3R5LnRzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdNYXRjaEZvcm0nLFxuICBjb21wb25lbnRzOiB7IEJhc2VCdXR0b24gfSxcbiAgcHJvcHM6IHtcbiAgICBjYjoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICBkZWZhdWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9LFxuICAgIH0sXG4gICAgaXRlbUlkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIHZlbnVlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIHBvc3RDb2RlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIGRhdGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG5ldyBEYXRlKCksXG4gICAgfSxcbiAgICB0aW1lOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIG9wcG9uZW50OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBtYXRjaDoge1xuICAgICAgICAgIHZlbnVlOiB0aGlzLnZlbnVlLFxuICAgICAgICAgIHBvc3RDb2RlOiB0aGlzLnBvc3RDb2RlLFxuICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKHRoaXMuZGF0ZSkgfHwgbmV3IERhdGUoKSxcbiAgICAgICAgICB0aW1lOiB0aGlzLnRpbWUgfHwgYCR7bmV3IERhdGUoKS5nZXRIb3VycygpfToke25ldyBEYXRlKCkuZ2V0TWludXRlcygpfWAsXG4gICAgICAgICAgb3Bwb25lbnQ6IHRoaXMub3Bwb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIG1hdGNoTWV0YURhdGE6IHtcbiAgICAgICAgICBpc1JlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICBjb21taXRNb2RlOiAnSW1tZWRpYXRlJyxcbiAgICAgICAgICB2YWxpZGF0aW9uTW9kZTogJ09uTG9zdEZvY3VzJyxcbiAgICAgICAgICBwcm9wZXJ0eUFubm90YXRpb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICd2ZW51ZScsXG4gICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnVmVudWUnLFxuICAgICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICAgICAgdmFsaWRhdG9yczogW3sgbmFtZTogJ05vbkVtcHR5JyB9LCB7IG5hbWU6ICdNYXhpbXVtTGVuZ3RoJywgcGFyYW1zOiB7IGxlbmd0aDogMjAgfSB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdwb3N0Q29kZScsXG4gICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnUG9zdGNvZGUnLFxuICAgICAgICAgICAgICBpbmRleDogMSxcbiAgICAgICAgICAgICAgdmFsaWRhdG9yczogW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogJ05vbkVtcHR5JyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdSZWdFeCcsXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVnRXg6XG4gICAgICAgICAgICAgICAgICAgICAgJ14oW0dnXVtJaV1bUnJdIDBbQWFdezJ9KXwoKChbQS1aYS16XVswLTldezEsMn0pfCgoW0EtWmEtel1bQS1IYS1oSi1Zai15XVswLTldezEsMn0pfCgoW0FaYS16XVswLTldW0EtWmEtel0pfChbQS1aYS16XVtBLUhhLWhKLVlqLXldWzAtOV0/W0EtWmEtel0pKSkpWzAtOV1bQS1aYS16XXsyfSkkJyxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnUGxlYXNlIHByb3ZpZGUgdmFsaWQgcG9zdGNvZGUnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2RhdGUnLFxuICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0RhdGUnLFxuICAgICAgICAgICAgICBpbmRleDogMixcbiAgICAgICAgICAgICAgZWRpdG9yOiAnRGF0ZVBpY2tlcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAndGltZScsXG4gICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnVGltZScsXG4gICAgICAgICAgICAgIGluZGV4OiAzLFxuICAgICAgICAgICAgICBlZGl0b3I6ICdUaW1lUGlja2VyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdvcHBvbmVudCcsXG4gICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnT3Bwb25lbnQnLFxuICAgICAgICAgICAgICBpbmRleDogNCxcbiAgICAgICAgICAgICAgdmFsaWRhdG9yczogW3sgbmFtZTogJ05vbkVtcHR5JyB9LCB7IG5hbWU6ICdNYXhpbXVtTGVuZ3RoJywgcGFyYW1zOiB7IGxlbmd0aDogMjAgfSB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGZvcm1WYWxpZGF0aW9uOiB7fSxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZm9jdXNTdWJtaXRCdXR0b24oKSB7XG4gICAgICB0aGlzLiRyZWZzLnN1Ym1pdEJ1dHRvbi5uYXRpdmVWaWV3LmZvY3VzKClcbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZU9uUHJvcGVydHlWYWxpZGF0ZWQoeyBvYmplY3QsIHByb3BlcnR5TmFtZSwgZW50aXR5UHJvcGVydHkgfSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgZm9ybVZhbGlkYXRpb246IHsgLi4udGhpcy5zdGF0ZS5mb3JtVmFsaWRhdGlvbiwgW3Byb3BlcnR5TmFtZV06IGVudGl0eVByb3BlcnR5LmlzVmFsaWQgfSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZU9uU3VibWl0KCkge1xuICAgICAgY29uc3QgdmVudWUgPSB0aGlzLiRyZWZzLm1hdGNoZm9ybS5nZXRQcm9wZXJ0eUJ5TmFtZSgndmVudWUnKVxuICAgICAgY29uc3QgcG9zdENvZGUgPSB0aGlzLiRyZWZzLm1hdGNoZm9ybS5nZXRQcm9wZXJ0eUJ5TmFtZSgncG9zdENvZGUnKVxuICAgICAgY29uc3Qgb3Bwb25lbnQgPSB0aGlzLiRyZWZzLm1hdGNoZm9ybS5nZXRQcm9wZXJ0eUJ5TmFtZSgnb3Bwb25lbnQnKVxuICAgICAgY29uc29sZS5sb2coYC0tLS0tLS0tLS0tLS0tLS0ke0pTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuZm9ybVZhbGlkYXRpb24pfWApXG4gICAgICBpZiAodGhpcy5zdGF0ZS5mb3JtVmFsaWRhdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGlzQW55RmllbGRJbnZhbGlkID0gT2JqZWN0LnZhbHVlcyh0aGlzLnN0YXRlLmZvcm1WYWxpZGF0aW9uKS5tYXAoeCA9PiAheClcbiAgICAgICAgY29uc29sZS5sb2coaXNBbnlGaWVsZEludmFsaWQpXG4gICAgICAgIGlmIChpc0FueUZpZWxkSW52YWxpZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgVG9hc3RTZXJ2aWNlKGBJbnZhbGlkIGVudHJpZXMgLSBQbGVhc2UgdHJ5IGFnYWluYCwgJyNiZTUxMzgnKS5zaG93KClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF2ZW51ZS52YWx1ZUNhbmRpZGF0ZSB8fCAhcG9zdENvZGUudmFsdWVDYW5kaWRhdGUgfHwgIW9wcG9uZW50LnZhbHVlQ2FuZGlkYXRlKSB7XG4gICAgICAgIFRvYXN0U2VydmljZSgnSW52YWxpZCBlbnRyaWVzLiBQbGVhc2UgZmlsbCB1cCBhbGwgdGhlIHJlc3BlY3RpdmUgZGV0YWlscycsICcjYmU1MTM4Jykuc2hvdygpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLiRyZWZzLm1hdGNoZm9ybS5jb21taXRBbGwoKVxuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgICBjb25zdCBtYXRjaERldGFpbHMgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUubWF0Y2gsXG4gICAgICAgIGFkZHJlc3M6IHRoaXMuc3RhdGUubWF0Y2gucG9zdENvZGUsXG4gICAgICAgIHN0YXR1czogTWF0Y2hTdGF0dXMuT04sXG4gICAgICB9XG4gICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLml0ZW1JZFxuICAgICAgICA/IHVwZGF0ZU1hdGNoKHRoaXMuaXRlbUlkLCBtYXRjaERldGFpbHMpXG4gICAgICAgIDogY3JlYXRlTWF0Y2gobWF0Y2hEZXRhaWxzKVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYWN0aW9uXG4gICAgICBpZiAocmVzdWx0ICYmICFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICB0aGlzLiRtb2RhbC5jbG9zZSgpXG4gICAgICAgIHRoaXMuY2IoKVxuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8TW9kYWxTdGFjayBjbGFzcz1cIm1vZGFsLWNvbnRhaW5lclwiPlxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1vZGFsXCI+XG4gICAgICA8U3RhY2tMYXlvdXQgbWFyZ2luLWJvdHRvbT1cIjI1XCI+XG4gICAgICAgIDxMYWJlbFxuICAgICAgICAgIDp0ZXh0PVwiaXRlbUlkID8gJ0VkaXQgTWF0Y2gnIDogJ0NyZWF0ZSBNYXRjaCdcIlxuICAgICAgICAgIGNsYXNzPVwiaDIgbnQtbGFiZWwgbS0xMCBmb250LXdlaWdodC1ib2xkXCJcbiAgICAgICAgLz5cbiAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICA8U2Nyb2xsVmlldyBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBzY3JvbGxCYXJJbmRpY2F0b3JWaXNpYmxlPVwiZmFsc2VcIj5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibnQtZm9ybVwiPlxuICAgICAgICAgIDxSYWREYXRhRm9ybVxuICAgICAgICAgICAgcmVmPVwibWF0Y2hmb3JtXCJcbiAgICAgICAgICAgIDpzb3VyY2U9XCJzdGF0ZS5tYXRjaFwiXG4gICAgICAgICAgICA6bWV0YWRhdGE9XCJzdGF0ZS5tYXRjaE1ldGFEYXRhXCJcbiAgICAgICAgICAgIEBwcm9wZXJ0eVZhbGlkYXRlZD1cImhhbmRsZU9uUHJvcGVydHlWYWxpZGF0ZWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L1JhZERhdGFGb3JtPlxuICAgICAgICAgIDxCYXNlQnV0dG9uXG4gICAgICAgICAgICA6bG9hZGluZz1cInN0YXRlLmxvYWRpbmdcIlxuICAgICAgICAgICAgQGhhbmRsZU9uQ2xpY2s9XCJoYW5kbGVPblN1Ym1pdFwiXG4gICAgICAgICAgICA6dGV4dD1cIml0ZW1JZCA/ICdVcGRhdGUgTWF0Y2gnIDogJ0NyZWF0ZSBNYXRjaCdcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnbS10LTIwJzogdHJ1ZSwgJy1wcmltYXJ5JzogdHJ1ZSwgJy1yb3VuZGVkLWxnJzogdHJ1ZSB9XCJcbiAgICAgICAgICAgIHJlZkZyb21QYXJlbnQ9XCJtYXRjaFN1Ym1pdEJ1dHRvblwiXG4gICAgICAgICAgPjwvQmFzZUJ1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICByZWY9XCJjbG9zZUJ1dHRvblwiXG4gICAgICAgICAgICBAdGFwPVwiJG1vZGFsLmNsb3NlXCJcbiAgICAgICAgICAgIHRleHQ9XCJDbG9zZVwiXG4gICAgICAgICAgICBjbGFzcz1cImJ0biBtLXQtMjAgLXJvdW5kZWQtbGcgLXNlY29uZGFyeSAtb3V0bGluZVwiXG4gICAgICAgICAgLz4gPC9TdGFja0xheW91dFxuICAgICAgPjwvU2Nyb2xsVmlldz5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICA8L01vZGFsU3RhY2s+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG5AaW1wb3J0ICd+L19hcHAuY29tbW9uJztcblNjcm9sbHZpZXcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tb2RhbC1jb250YWluZXIge1xuICBwYWRkaW5nOiAyNTtcbiAgcGFkZGluZy1ib3R0b206IDEwO1xuICAubW9kYWwge1xuICAgIG1hcmdpbjogMjA7XG4gICAgbWFyZ2luLXRvcDogMzU7XG4gICAgYm9yZGVyLXJhZGl1czogODtcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBSYWREYXRhRm9ybSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC5udC1pbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pbnB1dCB7XG4gICAgICBwbGFjZWhvbGRlci1jb2xvcjogI2E4YThhODtcbiAgICAgIGZvbnQtc2l6ZTogMTY7XG4gICAgfVxuICAgIC5uby1ib3JkZXIge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgfVxufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=