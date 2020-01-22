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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvTWF0Y2hGb3JtLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsbUJBREE7QUFFQTtBQUFBO0FBQUEsR0FGQTtBQUdBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUpBLEtBREE7QUFPQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQVBBO0FBV0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FYQTtBQWVBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBZkE7QUFtQkE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FuQkE7QUF1QkE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0F2QkE7QUEyQkE7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUEzQkEsR0FIQTs7QUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLGlDQUZBO0FBR0EsaURBSEE7QUFJQSxrR0FKQTtBQUtBO0FBTEEsU0FEQTtBQVFBO0FBQ0EsMkJBREE7QUFFQSxpQ0FGQTtBQUdBLHVDQUhBO0FBSUEsZ0NBQ0E7QUFDQSx5QkFEQTtBQUVBLGdDQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkEsV0FEQSxFQU9BO0FBQ0EsNEJBREE7QUFFQSxtQ0FGQTtBQUdBLG9CQUhBO0FBSUEseUJBQ0E7QUFBQTtBQUFBLGFBREEsRUFFQTtBQUNBLDJCQURBO0FBRUE7QUFDQSx1QkFDQSx5S0FGQTtBQUdBO0FBSEE7QUFGQSxhQUZBO0FBSkEsV0FQQSxFQXVCQTtBQUNBLHdCQURBO0FBRUEsK0JBRkE7QUFHQSxvQkFIQTtBQUlBO0FBSkEsV0F2QkEsRUE2QkE7QUFDQSx3QkFEQTtBQUVBLCtCQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBLFdBN0JBLEVBbUNBO0FBQ0EsNEJBREE7QUFFQSxtQ0FGQTtBQUdBLG9CQUhBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBLFdBbkNBO0FBSkEsU0FSQTtBQXVEQSxzQkF2REE7QUF3REE7QUF4REE7QUFEQTtBQTREQSxHQWhHQTs7QUFpR0E7QUFDQTtBQUNBO0FBQ0EsS0FIQTs7QUFJQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLHdDQUNBLFdBREE7QUFFQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBS0EsS0FUQTs7QUFVQTtBQUFBOztBQUFBO0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBQ0E7QUFBQTtBQUFBOztBQUNBLDZDQUNBLGtCQURBO0FBRUEsOENBRkE7QUFHQTtBQUhBOztBQUtBLHFDQUNBLHlHQURBLEdBRUEsMEZBRkE7QUFHQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBaENBO0FBaUNBOztBQTNDQTtBQWpHQSxHIiwiZmlsZSI6ImJ1bmRsZS4wMjY1MDAxNWI5OTlhYTI2MTg5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbmltcG9ydCBCYXNlQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQmFzZUJ1dHRvbi52dWUnXG5pbXBvcnQgeyBjcmVhdGVNYXRjaCwgdXBkYXRlTWF0Y2ggfSBmcm9tICcuLi9fc2hhcmVkL2ZpcmViYXNlL21hdGNoZXMnXG5pbXBvcnQgeyBNYXRjaFN0YXR1cyB9IGZyb20gJy4uL3R5cGVzL0VNYXRjaFN0YXR1cydcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4uL19zaGFyZWQvVG9hc3R5LnRzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdNYXRjaEZvcm0nLFxuICBjb21wb25lbnRzOiB7IEJhc2VCdXR0b24gfSxcbiAgcHJvcHM6IHtcbiAgICBjYjoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICBkZWZhdWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9LFxuICAgIH0sXG4gICAgaXRlbUlkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIHZlbnVlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIHBvc3RDb2RlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIGRhdGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG5ldyBEYXRlKCksXG4gICAgfSxcbiAgICB0aW1lOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIG9wcG9uZW50OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBtYXRjaDoge1xuICAgICAgICAgIHZlbnVlOiB0aGlzLnZlbnVlLFxuICAgICAgICAgIHBvc3RDb2RlOiB0aGlzLnBvc3RDb2RlLFxuICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKHRoaXMuZGF0ZSkgfHwgbmV3IERhdGUoKSxcbiAgICAgICAgICB0aW1lOiB0aGlzLnRpbWUgfHwgYCR7bmV3IERhdGUoKS5nZXRIb3VycygpfToke25ldyBEYXRlKCkuZ2V0TWludXRlcygpfWAsXG4gICAgICAgICAgb3Bwb25lbnQ6IHRoaXMub3Bwb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIG1hdGNoTWV0YURhdGE6IHtcbiAgICAgICAgICBpc1JlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICBjb21taXRNb2RlOiAnSW1tZWRpYXRlJyxcbiAgICAgICAgICB2YWxpZGF0aW9uTW9kZTogJ09uTG9zdEZvY3VzJyxcbiAgICAgICAgICBwcm9wZXJ0eUFubm90YXRpb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICd2ZW51ZScsXG4gICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnVmVudWUnLFxuICAgICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICAgICAgdmFsaWRhdG9yczogW3sgbmFtZTogJ05vbkVtcHR5JyB9LCB7IG5hbWU6ICdNYXhpbXVtTGVuZ3RoJywgcGFyYW1zOiB7IGxlbmd0aDogMjAgfSB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdwb3N0Q29kZScsXG4gICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnUG9zdGNvZGUnLFxuICAgICAgICAgICAgICBpbmRleDogMSxcbiAgICAgICAgICAgICAgdmFsaWRhdG9yczogW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogJ05vbkVtcHR5JyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdSZWdFeCcsXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVnRXg6XG4gICAgICAgICAgICAgICAgICAgICAgJ14oW0dnXVtJaV1bUnJdIDBbQWFdezJ9KXwoKChbQS1aYS16XVswLTldezEsMn0pfCgoW0EtWmEtel1bQS1IYS1oSi1Zai15XVswLTldezEsMn0pfCgoW0FaYS16XVswLTldW0EtWmEtel0pfChbQS1aYS16XVtBLUhhLWhKLVlqLXldWzAtOV0/W0EtWmEtel0pKSkpWzAtOV1bQS1aYS16XXsyfSkkJyxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnUGxlYXNlIHByb3ZpZGUgdmFsaWQgcG9zdGNvZGUnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2RhdGUnLFxuICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0RhdGUnLFxuICAgICAgICAgICAgICBpbmRleDogMixcbiAgICAgICAgICAgICAgZWRpdG9yOiAnRGF0ZVBpY2tlcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAndGltZScsXG4gICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnVGltZScsXG4gICAgICAgICAgICAgIGluZGV4OiAzLFxuICAgICAgICAgICAgICBlZGl0b3I6ICdUaW1lUGlja2VyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdvcHBvbmVudCcsXG4gICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnT3Bwb25lbnQnLFxuICAgICAgICAgICAgICBpbmRleDogNCxcbiAgICAgICAgICAgICAgdmFsaWRhdG9yczogW3sgbmFtZTogJ05vbkVtcHR5JyB9LCB7IG5hbWU6ICdNYXhpbXVtTGVuZ3RoJywgcGFyYW1zOiB7IGxlbmd0aDogMjAgfSB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGZvcm1WYWxpZGF0aW9uOiB7fSxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZm9jdXNTdWJtaXRCdXR0b24oKSB7XG4gICAgICB0aGlzLiRyZWZzLnN1Ym1pdEJ1dHRvbi5uYXRpdmVWaWV3LmZvY3VzKClcbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZU9uUHJvcGVydHlWYWxpZGF0ZWQoeyBvYmplY3QsIHByb3BlcnR5TmFtZSwgZW50aXR5UHJvcGVydHkgfSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgZm9ybVZhbGlkYXRpb246IHsgLi4udGhpcy5zdGF0ZS5mb3JtVmFsaWRhdGlvbiwgW3Byb3BlcnR5TmFtZV06IGVudGl0eVByb3BlcnR5LmlzVmFsaWQgfSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZU9uU3VibWl0KCkge1xuICAgICAgY29uc3QgdmVudWUgPSB0aGlzLiRyZWZzLm1hdGNoZm9ybS5nZXRQcm9wZXJ0eUJ5TmFtZSgndmVudWUnKVxuICAgICAgY29uc3QgcG9zdENvZGUgPSB0aGlzLiRyZWZzLm1hdGNoZm9ybS5nZXRQcm9wZXJ0eUJ5TmFtZSgncG9zdENvZGUnKVxuICAgICAgY29uc3Qgb3Bwb25lbnQgPSB0aGlzLiRyZWZzLm1hdGNoZm9ybS5nZXRQcm9wZXJ0eUJ5TmFtZSgnb3Bwb25lbnQnKVxuICAgICAgaWYgKHRoaXMuc3RhdGUuZm9ybVZhbGlkYXRpb24ubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBpc0FueUZpZWxkSW52YWxpZCA9IE9iamVjdC52YWx1ZXModGhpcy5zdGF0ZS5mb3JtVmFsaWRhdGlvbikubWFwKHggPT4gIXgpXG4gICAgICAgIGNvbnNvbGUubG9nKGlzQW55RmllbGRJbnZhbGlkKVxuICAgICAgICBpZiAoaXNBbnlGaWVsZEludmFsaWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIFRvYXN0U2VydmljZShgSW52YWxpZCBlbnRyaWVzIC0gUGxlYXNlIHRyeSBhZ2FpbmAsICcjYmU1MTM4Jykuc2hvdygpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghdmVudWUudmFsdWVDYW5kaWRhdGUgfHwgIXBvc3RDb2RlLnZhbHVlQ2FuZGlkYXRlIHx8ICFvcHBvbmVudC52YWx1ZUNhbmRpZGF0ZSkge1xuICAgICAgICBUb2FzdFNlcnZpY2UoJ0ludmFsaWQgZW50cmllcy4gUGxlYXNlIGZpbGwgdXAgYWxsIHRoZSByZXNwZWN0aXZlIGRldGFpbHMnLCAnI2JlNTEzOCcpLnNob3coKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy4kcmVmcy5tYXRjaGZvcm0uY29tbWl0QWxsKClcbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IHRydWUgfVxuICAgICAgY29uc3QgbWF0Y2hEZXRhaWxzID0ge1xuICAgICAgICAuLi50aGlzLnN0YXRlLm1hdGNoLFxuICAgICAgICBhZGRyZXNzOiB0aGlzLnN0YXRlLm1hdGNoLnBvc3RDb2RlLFxuICAgICAgICBzdGF0dXM6IE1hdGNoU3RhdHVzLk9OLFxuICAgICAgfVxuICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5pdGVtSWRcbiAgICAgICAgPyB1cGRhdGVNYXRjaCh0aGlzLml0ZW1JZCwgbWF0Y2hEZXRhaWxzKVxuICAgICAgICA6IGNyZWF0ZU1hdGNoKG1hdGNoRGV0YWlscylcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFjdGlvblxuICAgICAgaWYgKHJlc3VsdCAmJiAhcmVzdWx0LmlzRXJyb3IpIHtcbiAgICAgICAgdGhpcy4kbW9kYWwuY2xvc2UoKVxuICAgICAgICB0aGlzLmNiKClcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPE1vZGFsU3RhY2sgY2xhc3M9XCJtb2RhbC1jb250YWluZXJcIj5cbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtb2RhbFwiPlxuICAgICAgPFN0YWNrTGF5b3V0IG1hcmdpbi1ib3R0b209XCIyNVwiPlxuICAgICAgICA8TGFiZWxcbiAgICAgICAgICA6dGV4dD1cIml0ZW1JZCA/ICdFZGl0IE1hdGNoJyA6ICdDcmVhdGUgTWF0Y2gnXCJcbiAgICAgICAgICBjbGFzcz1cImgyIG50LWxhYmVsIG0tMTAgZm9udC13ZWlnaHQtYm9sZFwiXG4gICAgICAgIC8+XG4gICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgPFNjcm9sbFZpZXcgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgc2Nyb2xsQmFySW5kaWNhdG9yVmlzaWJsZT1cImZhbHNlXCI+XG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm50LWZvcm1cIj5cbiAgICAgICAgICA8UmFkRGF0YUZvcm1cbiAgICAgICAgICAgIHJlZj1cIm1hdGNoZm9ybVwiXG4gICAgICAgICAgICA6c291cmNlPVwic3RhdGUubWF0Y2hcIlxuICAgICAgICAgICAgOm1ldGFkYXRhPVwic3RhdGUubWF0Y2hNZXRhRGF0YVwiXG4gICAgICAgICAgICBAcHJvcGVydHlWYWxpZGF0ZWQ9XCJoYW5kbGVPblByb3BlcnR5VmFsaWRhdGVkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9SYWREYXRhRm9ybT5cbiAgICAgICAgICA8QmFzZUJ1dHRvblxuICAgICAgICAgICAgOmxvYWRpbmc9XCJzdGF0ZS5sb2FkaW5nXCJcbiAgICAgICAgICAgIEBoYW5kbGVPbkNsaWNrPVwiaGFuZGxlT25TdWJtaXRcIlxuICAgICAgICAgICAgOnRleHQ9XCJpdGVtSWQgPyAnVXBkYXRlIE1hdGNoJyA6ICdDcmVhdGUgTWF0Y2gnXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ20tdC0yMCc6IHRydWUsICctcHJpbWFyeSc6IHRydWUsICctcm91bmRlZC1sZyc6IHRydWUgfVwiXG4gICAgICAgICAgICByZWZGcm9tUGFyZW50PVwibWF0Y2hTdWJtaXRCdXR0b25cIlxuICAgICAgICAgID48L0Jhc2VCdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgcmVmPVwiY2xvc2VCdXR0b25cIlxuICAgICAgICAgICAgQHRhcD1cIiRtb2RhbC5jbG9zZVwiXG4gICAgICAgICAgICB0ZXh0PVwiQ2xvc2VcIlxuICAgICAgICAgICAgY2xhc3M9XCJidG4gbS10LTIwIC1yb3VuZGVkLWxnIC1zZWNvbmRhcnkgLW91dGxpbmVcIlxuICAgICAgICAgIC8+IDwvU3RhY2tMYXlvdXRcbiAgICAgID48L1Njcm9sbFZpZXc+XG4gICAgPC9TdGFja0xheW91dD5cbiAgPC9Nb2RhbFN0YWNrPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCAnfi9fYXBwLmNvbW1vbic7XG5TY3JvbGx2aWV3IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubW9kYWwtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjU7XG4gIHBhZGRpbmctYm90dG9tOiAxMDtcbiAgLm1vZGFsIHtcbiAgICBtYXJnaW46IDIwO1xuICAgIG1hcmdpbi10b3A6IDM1O1xuICAgIGJvcmRlci1yYWRpdXM6IDg7XG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgUmFkRGF0YUZvcm0ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAubnQtaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5wdXQge1xuICAgICAgcGxhY2Vob2xkZXItY29sb3I6ICNhOGE4YTg7XG4gICAgICBmb250LXNpemU6IDE2O1xuICAgIH1cbiAgICAubm8tYm9yZGVyIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gIH1cbn1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9