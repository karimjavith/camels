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
            [propertyName]: {
              name: propertyName,
              isValid: entityProperty.isValid
            }
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

        if (_this2.state.formValidation) {
          var isAnyFieldInvalid = Object.values(_this2.state.formValidation).filter(x => !x.isValid);
          console.log(JSON.stringify(isAnyFieldInvalid));

          if (isAnyFieldInvalid.length > 0) {
            isAnyFieldInvalid.forEach(x => {
              _this2.$refs.dataform.notifyValidated(x.name, false);
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvTWF0Y2hGb3JtLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsbUJBREE7QUFFQTtBQUFBO0FBQUEsR0FGQTtBQUdBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUpBLEtBREE7QUFPQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQVBBO0FBV0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FYQTtBQWVBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBZkE7QUFtQkE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FuQkE7QUF1QkE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0F2QkE7QUEyQkE7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUEzQkEsR0FIQTs7QUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLGlDQUZBO0FBR0EsaURBSEE7QUFJQSxrR0FKQTtBQUtBO0FBTEEsU0FEQTtBQVFBO0FBQ0EsMkJBREE7QUFFQSxpQ0FGQTtBQUdBLHVDQUhBO0FBSUEsZ0NBQ0E7QUFDQSx5QkFEQTtBQUVBLGdDQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkEsV0FEQSxFQU9BO0FBQ0EsNEJBREE7QUFFQSxtQ0FGQTtBQUdBLG9CQUhBO0FBSUEseUJBQ0E7QUFBQTtBQUFBLGFBREEsRUFFQTtBQUNBLDJCQURBO0FBRUE7QUFDQSx1QkFDQSx5S0FGQTtBQUdBO0FBSEE7QUFGQSxhQUZBO0FBSkEsV0FQQSxFQXVCQTtBQUNBLHdCQURBO0FBRUEsK0JBRkE7QUFHQSxvQkFIQTtBQUlBO0FBSkEsV0F2QkEsRUE2QkE7QUFDQSx3QkFEQTtBQUVBLCtCQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBLFdBN0JBLEVBbUNBO0FBQ0EsNEJBREE7QUFFQSxtQ0FGQTtBQUdBLG9CQUhBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBLFdBbkNBO0FBSkEsU0FSQTtBQXVEQSxzQkF2REE7QUF3REE7QUF4REE7QUFEQTtBQTREQSxHQWhHQTs7QUFpR0E7QUFDQTtBQUNBO0FBQ0EsS0FIQTs7QUFJQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLHdDQUNBLFdBREE7QUFFQSw0Q0FDQSwwQkFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFGQTtBQURBO0FBUUEsS0FaQTs7QUFhQTtBQUFBOztBQUFBO0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0EsNkNBQ0Esa0JBREE7QUFFQSw4Q0FGQTtBQUdBO0FBSEE7O0FBS0EscUNBQ0EseUdBREEsR0FFQSwwRkFGQTtBQUdBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFuQ0E7QUFvQ0E7O0FBakRBO0FBakdBLEciLCJmaWxlIjoiYnVuZGxlLmRhOGI2ZDJmYzE5YTA2MmQzNTBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuaW1wb3J0IEJhc2VCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CYXNlQnV0dG9uLnZ1ZSdcbmltcG9ydCB7IGNyZWF0ZU1hdGNoLCB1cGRhdGVNYXRjaCB9IGZyb20gJy4uL19zaGFyZWQvZmlyZWJhc2UvbWF0Y2hlcydcbmltcG9ydCB7IE1hdGNoU3RhdHVzIH0gZnJvbSAnLi4vdHlwZXMvRU1hdGNoU3RhdHVzJ1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi4vX3NoYXJlZC9Ub2FzdHkudHMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ01hdGNoRm9ybScsXG4gIGNvbXBvbmVudHM6IHsgQmFzZUJ1dHRvbiB9LFxuICBwcm9wczoge1xuICAgIGNiOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH0sXG4gICAgfSxcbiAgICBpdGVtSWQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgdmVudWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgcG9zdENvZGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgZGF0ZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogbmV3IERhdGUoKSxcbiAgICB9LFxuICAgIHRpbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgb3Bwb25lbnQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIG1hdGNoOiB7XG4gICAgICAgICAgdmVudWU6IHRoaXMudmVudWUsXG4gICAgICAgICAgcG9zdENvZGU6IHRoaXMucG9zdENvZGUsXG4gICAgICAgICAgZGF0ZTogbmV3IERhdGUodGhpcy5kYXRlKSB8fCBuZXcgRGF0ZSgpLFxuICAgICAgICAgIHRpbWU6IHRoaXMudGltZSB8fCBgJHtuZXcgRGF0ZSgpLmdldEhvdXJzKCl9OiR7bmV3IERhdGUoKS5nZXRNaW51dGVzKCl9YCxcbiAgICAgICAgICBvcHBvbmVudDogdGhpcy5vcHBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgbWF0Y2hNZXRhRGF0YToge1xuICAgICAgICAgIGlzUmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIGNvbW1pdE1vZGU6ICdJbW1lZGlhdGUnLFxuICAgICAgICAgIHZhbGlkYXRpb25Nb2RlOiAnT25Mb3N0Rm9jdXMnLFxuICAgICAgICAgIHByb3BlcnR5QW5ub3RhdGlvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3ZlbnVlJyxcbiAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdWZW51ZScsXG4gICAgICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgICAgICB2YWxpZGF0b3JzOiBbeyBuYW1lOiAnTm9uRW1wdHknIH0sIHsgbmFtZTogJ01heGltdW1MZW5ndGgnLCBwYXJhbXM6IHsgbGVuZ3RoOiAyMCB9IH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3Bvc3RDb2RlJyxcbiAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdQb3N0Y29kZScsXG4gICAgICAgICAgICAgIGluZGV4OiAxLFxuICAgICAgICAgICAgICB2YWxpZGF0b3JzOiBbXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTm9uRW1wdHknIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ1JlZ0V4JyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICByZWdFeDpcbiAgICAgICAgICAgICAgICAgICAgICAnXihbR2ddW0lpXVtScl0gMFtBYV17Mn0pfCgoKFtBLVphLXpdWzAtOV17MSwyfSl8KChbQS1aYS16XVtBLUhhLWhKLVlqLXldWzAtOV17MSwyfSl8KChbQVphLXpdWzAtOV1bQS1aYS16XSl8KFtBLVphLXpdW0EtSGEtaEotWWoteV1bMC05XT9bQS1aYS16XSkpKSlbMC05XVtBLVphLXpdezJ9KSQnLFxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdQbGVhc2UgcHJvdmlkZSB2YWxpZCBwb3N0Y29kZScsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnZGF0ZScsXG4gICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnRGF0ZScsXG4gICAgICAgICAgICAgIGluZGV4OiAyLFxuICAgICAgICAgICAgICBlZGl0b3I6ICdEYXRlUGlja2VyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICd0aW1lJyxcbiAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdUaW1lJyxcbiAgICAgICAgICAgICAgaW5kZXg6IDMsXG4gICAgICAgICAgICAgIGVkaXRvcjogJ1RpbWVQaWNrZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ29wcG9uZW50JyxcbiAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdPcHBvbmVudCcsXG4gICAgICAgICAgICAgIGluZGV4OiA0LFxuICAgICAgICAgICAgICB2YWxpZGF0b3JzOiBbeyBuYW1lOiAnTm9uRW1wdHknIH0sIHsgbmFtZTogJ01heGltdW1MZW5ndGgnLCBwYXJhbXM6IHsgbGVuZ3RoOiAyMCB9IH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZm9ybVZhbGlkYXRpb246IHt9LFxuICAgICAgfSxcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBmb2N1c1N1Ym1pdEJ1dHRvbigpIHtcbiAgICAgIHRoaXMuJHJlZnMuc3VibWl0QnV0dG9uLm5hdGl2ZVZpZXcuZm9jdXMoKVxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlT25Qcm9wZXJ0eVZhbGlkYXRlZCh7IG9iamVjdCwgcHJvcGVydHlOYW1lLCBlbnRpdHlQcm9wZXJ0eSB9KSB7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICBmb3JtVmFsaWRhdGlvbjoge1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUuZm9ybVZhbGlkYXRpb24sXG4gICAgICAgICAgW3Byb3BlcnR5TmFtZV06IHsgbmFtZTogcHJvcGVydHlOYW1lLCBpc1ZhbGlkOiBlbnRpdHlQcm9wZXJ0eS5pc1ZhbGlkIH0sXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBoYW5kbGVPblN1Ym1pdCgpIHtcbiAgICAgIGNvbnN0IHZlbnVlID0gdGhpcy4kcmVmcy5tYXRjaGZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ3ZlbnVlJylcbiAgICAgIGNvbnN0IHBvc3RDb2RlID0gdGhpcy4kcmVmcy5tYXRjaGZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ3Bvc3RDb2RlJylcbiAgICAgIGNvbnN0IG9wcG9uZW50ID0gdGhpcy4kcmVmcy5tYXRjaGZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ29wcG9uZW50JylcbiAgICAgIGlmICh0aGlzLnN0YXRlLmZvcm1WYWxpZGF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGlzQW55RmllbGRJbnZhbGlkID0gT2JqZWN0LnZhbHVlcyh0aGlzLnN0YXRlLmZvcm1WYWxpZGF0aW9uKS5maWx0ZXIoeCA9PiAheC5pc1ZhbGlkKVxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShpc0FueUZpZWxkSW52YWxpZCkpXG4gICAgICAgIGlmIChpc0FueUZpZWxkSW52YWxpZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaXNBbnlGaWVsZEludmFsaWQuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMuZGF0YWZvcm0ubm90aWZ5VmFsaWRhdGVkKHgubmFtZSwgZmFsc2UpXG4gICAgICAgICAgfSlcbiAgICAgICAgICBUb2FzdFNlcnZpY2UoYEludmFsaWQgZW50cmllcyAtIFBsZWFzZSB0cnkgYWdhaW5gLCAnI2JlNTEzOCcpLnNob3coKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXZlbnVlLnZhbHVlQ2FuZGlkYXRlIHx8ICFwb3N0Q29kZS52YWx1ZUNhbmRpZGF0ZSB8fCAhb3Bwb25lbnQudmFsdWVDYW5kaWRhdGUpIHtcbiAgICAgICAgVG9hc3RTZXJ2aWNlKCdJbnZhbGlkIGVudHJpZXMuIFBsZWFzZSBmaWxsIHVwIGFsbCB0aGUgcmVzcGVjdGl2ZSBkZXRhaWxzJywgJyNiZTUxMzgnKS5zaG93KClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJHJlZnMubWF0Y2hmb3JtLmNvbW1pdEFsbCgpXG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH1cbiAgICAgIGNvbnN0IG1hdGNoRGV0YWlscyA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5tYXRjaCxcbiAgICAgICAgYWRkcmVzczogdGhpcy5zdGF0ZS5tYXRjaC5wb3N0Q29kZSxcbiAgICAgICAgc3RhdHVzOiBNYXRjaFN0YXR1cy5PTixcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuaXRlbUlkXG4gICAgICAgID8gdXBkYXRlTWF0Y2godGhpcy5pdGVtSWQsIG1hdGNoRGV0YWlscylcbiAgICAgICAgOiBjcmVhdGVNYXRjaChtYXRjaERldGFpbHMpXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhY3Rpb25cbiAgICAgIGlmIChyZXN1bHQgJiYgIXJlc3VsdC5pc0Vycm9yKSB7XG4gICAgICAgIHRoaXMuJG1vZGFsLmNsb3NlKClcbiAgICAgICAgdGhpcy5jYigpXG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSB9XG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxNb2RhbFN0YWNrIGNsYXNzPVwibW9kYWwtY29udGFpbmVyXCI+XG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibW9kYWxcIj5cbiAgICAgIDxTdGFja0xheW91dCBtYXJnaW4tYm90dG9tPVwiMjVcIj5cbiAgICAgICAgPExhYmVsXG4gICAgICAgICAgOnRleHQ9XCJpdGVtSWQgPyAnRWRpdCBNYXRjaCcgOiAnQ3JlYXRlIE1hdGNoJ1wiXG4gICAgICAgICAgY2xhc3M9XCJoMiBudC1sYWJlbCBtLTEwIGZvbnQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAvPlxuICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgIDxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHNjcm9sbEJhckluZGljYXRvclZpc2libGU9XCJmYWxzZVwiPlxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJudC1mb3JtXCI+XG4gICAgICAgICAgPFJhZERhdGFGb3JtXG4gICAgICAgICAgICByZWY9XCJtYXRjaGZvcm1cIlxuICAgICAgICAgICAgOnNvdXJjZT1cInN0YXRlLm1hdGNoXCJcbiAgICAgICAgICAgIDptZXRhZGF0YT1cInN0YXRlLm1hdGNoTWV0YURhdGFcIlxuICAgICAgICAgICAgQHByb3BlcnR5VmFsaWRhdGVkPVwiaGFuZGxlT25Qcm9wZXJ0eVZhbGlkYXRlZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvUmFkRGF0YUZvcm0+XG4gICAgICAgICAgPEJhc2VCdXR0b25cbiAgICAgICAgICAgIDpsb2FkaW5nPVwic3RhdGUubG9hZGluZ1wiXG4gICAgICAgICAgICBAaGFuZGxlT25DbGljaz1cImhhbmRsZU9uU3VibWl0XCJcbiAgICAgICAgICAgIDp0ZXh0PVwiaXRlbUlkID8gJ1VwZGF0ZSBNYXRjaCcgOiAnQ3JlYXRlIE1hdGNoJ1wiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdtLXQtMjAnOiB0cnVlLCAnLXByaW1hcnknOiB0cnVlLCAnLXJvdW5kZWQtbGcnOiB0cnVlIH1cIlxuICAgICAgICAgICAgcmVmRnJvbVBhcmVudD1cIm1hdGNoU3VibWl0QnV0dG9uXCJcbiAgICAgICAgICA+PC9CYXNlQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHJlZj1cImNsb3NlQnV0dG9uXCJcbiAgICAgICAgICAgIEB0YXA9XCIkbW9kYWwuY2xvc2VcIlxuICAgICAgICAgICAgdGV4dD1cIkNsb3NlXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIG0tdC0yMCAtcm91bmRlZC1sZyAtc2Vjb25kYXJ5IC1vdXRsaW5lXCJcbiAgICAgICAgICAvPiA8L1N0YWNrTGF5b3V0XG4gICAgICA+PC9TY3JvbGxWaWV3PlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIDwvTW9kYWxTdGFjaz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgJ34vX2FwcC5jb21tb24nO1xuU2Nyb2xsdmlldyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDI1O1xuICBwYWRkaW5nLWJvdHRvbTogMTA7XG4gIC5tb2RhbCB7XG4gICAgbWFyZ2luOiAyMDtcbiAgICBtYXJnaW4tdG9wOiAzNTtcbiAgICBib3JkZXItcmFkaXVzOiA4O1xuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbiAgICB3aWR0aDogODAlO1xuICAgIFJhZERhdGFGb3JtIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLm50LWlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmlucHV0IHtcbiAgICAgIHBsYWNlaG9sZGVyLWNvbG9yOiAjYThhOGE4O1xuICAgICAgZm9udC1zaXplOiAxNjtcbiAgICB9XG4gICAgLm5vLWJvcmRlciB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICB9XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==