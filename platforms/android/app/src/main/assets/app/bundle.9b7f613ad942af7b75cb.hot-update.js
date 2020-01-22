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
          var isAnyFieldInvalid = Object.values(_this2.state.formValidation).map(x => !x.isValid);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvTWF0Y2hGb3JtLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsbUJBREE7QUFFQTtBQUFBO0FBQUEsR0FGQTtBQUdBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUpBLEtBREE7QUFPQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQVBBO0FBV0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FYQTtBQWVBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBZkE7QUFtQkE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FuQkE7QUF1QkE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0F2QkE7QUEyQkE7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUEzQkEsR0FIQTs7QUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLGlDQUZBO0FBR0EsaURBSEE7QUFJQSxrR0FKQTtBQUtBO0FBTEEsU0FEQTtBQVFBO0FBQ0EsMkJBREE7QUFFQSxpQ0FGQTtBQUdBLHVDQUhBO0FBSUEsZ0NBQ0E7QUFDQSx5QkFEQTtBQUVBLGdDQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkEsV0FEQSxFQU9BO0FBQ0EsNEJBREE7QUFFQSxtQ0FGQTtBQUdBLG9CQUhBO0FBSUEseUJBQ0E7QUFBQTtBQUFBLGFBREEsRUFFQTtBQUNBLDJCQURBO0FBRUE7QUFDQSx1QkFDQSx5S0FGQTtBQUdBO0FBSEE7QUFGQSxhQUZBO0FBSkEsV0FQQSxFQXVCQTtBQUNBLHdCQURBO0FBRUEsK0JBRkE7QUFHQSxvQkFIQTtBQUlBO0FBSkEsV0F2QkEsRUE2QkE7QUFDQSx3QkFEQTtBQUVBLCtCQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBLFdBN0JBLEVBbUNBO0FBQ0EsNEJBREE7QUFFQSxtQ0FGQTtBQUdBLG9CQUhBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBLFdBbkNBO0FBSkEsU0FSQTtBQXVEQSxzQkF2REE7QUF3REE7QUF4REE7QUFEQTtBQTREQSxHQWhHQTs7QUFpR0E7QUFDQTtBQUNBO0FBQ0EsS0FIQTs7QUFJQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLHdDQUNBLFdBREE7QUFFQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBS0EsS0FUQTs7QUFVQTtBQUFBOztBQUFBO0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUNBO0FBQUE7QUFBQTs7QUFDQSw2Q0FDQSxrQkFEQTtBQUVBLDhDQUZBO0FBR0E7QUFIQTs7QUFLQSxxQ0FDQSx5R0FEQSxHQUVBLDBGQUZBO0FBR0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQS9CQTtBQWdDQTs7QUExQ0E7QUFqR0EsRyIsImZpbGUiOiJidW5kbGUuOWI3ZjYxM2FkOTQyYWY3Yjc1Y2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5pbXBvcnQgQmFzZUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0Jhc2VCdXR0b24udnVlJ1xuaW1wb3J0IHsgY3JlYXRlTWF0Y2gsIHVwZGF0ZU1hdGNoIH0gZnJvbSAnLi4vX3NoYXJlZC9maXJlYmFzZS9tYXRjaGVzJ1xuaW1wb3J0IHsgTWF0Y2hTdGF0dXMgfSBmcm9tICcuLi90eXBlcy9FTWF0Y2hTdGF0dXMnXG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuLi9fc2hhcmVkL1RvYXN0eS50cydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTWF0Y2hGb3JtJyxcbiAgY29tcG9uZW50czogeyBCYXNlQnV0dG9uIH0sXG4gIHByb3BzOiB7XG4gICAgY2I6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfSxcbiAgICB9LFxuICAgIGl0ZW1JZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICB2ZW51ZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICBwb3N0Q29kZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICBkYXRlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBuZXcgRGF0ZSgpLFxuICAgIH0sXG4gICAgdGltZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICBvcHBvbmVudDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgbWF0Y2g6IHtcbiAgICAgICAgICB2ZW51ZTogdGhpcy52ZW51ZSxcbiAgICAgICAgICBwb3N0Q29kZTogdGhpcy5wb3N0Q29kZSxcbiAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSh0aGlzLmRhdGUpIHx8IG5ldyBEYXRlKCksXG4gICAgICAgICAgdGltZTogdGhpcy50aW1lIHx8IGAke25ldyBEYXRlKCkuZ2V0SG91cnMoKX06JHtuZXcgRGF0ZSgpLmdldE1pbnV0ZXMoKX1gLFxuICAgICAgICAgIG9wcG9uZW50OiB0aGlzLm9wcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBtYXRjaE1ldGFEYXRhOiB7XG4gICAgICAgICAgaXNSZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgY29tbWl0TW9kZTogJ0ltbWVkaWF0ZScsXG4gICAgICAgICAgdmFsaWRhdGlvbk1vZGU6ICdPbkxvc3RGb2N1cycsXG4gICAgICAgICAgcHJvcGVydHlBbm5vdGF0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAndmVudWUnLFxuICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ1ZlbnVlJyxcbiAgICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICAgIHZhbGlkYXRvcnM6IFt7IG5hbWU6ICdOb25FbXB0eScgfSwgeyBuYW1lOiAnTWF4aW11bUxlbmd0aCcsIHBhcmFtczogeyBsZW5ndGg6IDIwIH0gfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAncG9zdENvZGUnLFxuICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ1Bvc3Rjb2RlJyxcbiAgICAgICAgICAgICAgaW5kZXg6IDEsXG4gICAgICAgICAgICAgIHZhbGlkYXRvcnM6IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdOb25FbXB0eScgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnUmVnRXgnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ0V4OlxuICAgICAgICAgICAgICAgICAgICAgICdeKFtHZ11bSWldW1JyXSAwW0FhXXsyfSl8KCgoW0EtWmEtel1bMC05XXsxLDJ9KXwoKFtBLVphLXpdW0EtSGEtaEotWWoteV1bMC05XXsxLDJ9KXwoKFtBWmEtel1bMC05XVtBLVphLXpdKXwoW0EtWmEtel1bQS1IYS1oSi1Zai15XVswLTldP1tBLVphLXpdKSkpKVswLTldW0EtWmEtel17Mn0pJCcsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1BsZWFzZSBwcm92aWRlIHZhbGlkIHBvc3Rjb2RlJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdkYXRlJyxcbiAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdEYXRlJyxcbiAgICAgICAgICAgICAgaW5kZXg6IDIsXG4gICAgICAgICAgICAgIGVkaXRvcjogJ0RhdGVQaWNrZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3RpbWUnLFxuICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ1RpbWUnLFxuICAgICAgICAgICAgICBpbmRleDogMyxcbiAgICAgICAgICAgICAgZWRpdG9yOiAnVGltZVBpY2tlcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnb3Bwb25lbnQnLFxuICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ09wcG9uZW50JyxcbiAgICAgICAgICAgICAgaW5kZXg6IDQsXG4gICAgICAgICAgICAgIHZhbGlkYXRvcnM6IFt7IG5hbWU6ICdOb25FbXB0eScgfSwgeyBuYW1lOiAnTWF4aW11bUxlbmd0aCcsIHBhcmFtczogeyBsZW5ndGg6IDIwIH0gfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBmb3JtVmFsaWRhdGlvbjoge30sXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGZvY3VzU3VibWl0QnV0dG9uKCkge1xuICAgICAgdGhpcy4kcmVmcy5zdWJtaXRCdXR0b24ubmF0aXZlVmlldy5mb2N1cygpXG4gICAgfSxcbiAgICBhc3luYyBoYW5kbGVPblByb3BlcnR5VmFsaWRhdGVkKHsgb2JqZWN0LCBwcm9wZXJ0eU5hbWUsIGVudGl0eVByb3BlcnR5IH0pIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgIGZvcm1WYWxpZGF0aW9uOiB7IC4uLnRoaXMuc3RhdGUuZm9ybVZhbGlkYXRpb24sIFtwcm9wZXJ0eU5hbWVdOiBlbnRpdHlQcm9wZXJ0eS5pc1ZhbGlkIH0sXG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBoYW5kbGVPblN1Ym1pdCgpIHtcbiAgICAgIGNvbnN0IHZlbnVlID0gdGhpcy4kcmVmcy5tYXRjaGZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ3ZlbnVlJylcbiAgICAgIGNvbnN0IHBvc3RDb2RlID0gdGhpcy4kcmVmcy5tYXRjaGZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ3Bvc3RDb2RlJylcbiAgICAgIGNvbnN0IG9wcG9uZW50ID0gdGhpcy4kcmVmcy5tYXRjaGZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ29wcG9uZW50JylcbiAgICAgIGlmICh0aGlzLnN0YXRlLmZvcm1WYWxpZGF0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgaXNBbnlGaWVsZEludmFsaWQgPSBPYmplY3QudmFsdWVzKHRoaXMuc3RhdGUuZm9ybVZhbGlkYXRpb24pLm1hcCh4ID0+ICF4LmlzVmFsaWQpXG4gICAgICAgIGlmIChpc0FueUZpZWxkSW52YWxpZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgVG9hc3RTZXJ2aWNlKGBJbnZhbGlkIGVudHJpZXMgLSBQbGVhc2UgdHJ5IGFnYWluYCwgJyNiZTUxMzgnKS5zaG93KClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF2ZW51ZS52YWx1ZUNhbmRpZGF0ZSB8fCAhcG9zdENvZGUudmFsdWVDYW5kaWRhdGUgfHwgIW9wcG9uZW50LnZhbHVlQ2FuZGlkYXRlKSB7XG4gICAgICAgIFRvYXN0U2VydmljZSgnSW52YWxpZCBlbnRyaWVzLiBQbGVhc2UgZmlsbCB1cCBhbGwgdGhlIHJlc3BlY3RpdmUgZGV0YWlscycsICcjYmU1MTM4Jykuc2hvdygpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLiRyZWZzLm1hdGNoZm9ybS5jb21taXRBbGwoKVxuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgICBjb25zdCBtYXRjaERldGFpbHMgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUubWF0Y2gsXG4gICAgICAgIGFkZHJlc3M6IHRoaXMuc3RhdGUubWF0Y2gucG9zdENvZGUsXG4gICAgICAgIHN0YXR1czogTWF0Y2hTdGF0dXMuT04sXG4gICAgICB9XG4gICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLml0ZW1JZFxuICAgICAgICA/IHVwZGF0ZU1hdGNoKHRoaXMuaXRlbUlkLCBtYXRjaERldGFpbHMpXG4gICAgICAgIDogY3JlYXRlTWF0Y2gobWF0Y2hEZXRhaWxzKVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYWN0aW9uXG4gICAgICBpZiAocmVzdWx0ICYmICFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICB0aGlzLiRtb2RhbC5jbG9zZSgpXG4gICAgICAgIHRoaXMuY2IoKVxuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8TW9kYWxTdGFjayBjbGFzcz1cIm1vZGFsLWNvbnRhaW5lclwiPlxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1vZGFsXCI+XG4gICAgICA8U3RhY2tMYXlvdXQgbWFyZ2luLWJvdHRvbT1cIjI1XCI+XG4gICAgICAgIDxMYWJlbFxuICAgICAgICAgIDp0ZXh0PVwiaXRlbUlkID8gJ0VkaXQgTWF0Y2gnIDogJ0NyZWF0ZSBNYXRjaCdcIlxuICAgICAgICAgIGNsYXNzPVwiaDIgbnQtbGFiZWwgbS0xMCBmb250LXdlaWdodC1ib2xkXCJcbiAgICAgICAgLz5cbiAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICA8U2Nyb2xsVmlldyBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBzY3JvbGxCYXJJbmRpY2F0b3JWaXNpYmxlPVwiZmFsc2VcIj5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibnQtZm9ybVwiPlxuICAgICAgICAgIDxSYWREYXRhRm9ybVxuICAgICAgICAgICAgcmVmPVwibWF0Y2hmb3JtXCJcbiAgICAgICAgICAgIDpzb3VyY2U9XCJzdGF0ZS5tYXRjaFwiXG4gICAgICAgICAgICA6bWV0YWRhdGE9XCJzdGF0ZS5tYXRjaE1ldGFEYXRhXCJcbiAgICAgICAgICAgIEBwcm9wZXJ0eVZhbGlkYXRlZD1cImhhbmRsZU9uUHJvcGVydHlWYWxpZGF0ZWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L1JhZERhdGFGb3JtPlxuICAgICAgICAgIDxCYXNlQnV0dG9uXG4gICAgICAgICAgICA6bG9hZGluZz1cInN0YXRlLmxvYWRpbmdcIlxuICAgICAgICAgICAgQGhhbmRsZU9uQ2xpY2s9XCJoYW5kbGVPblN1Ym1pdFwiXG4gICAgICAgICAgICA6dGV4dD1cIml0ZW1JZCA/ICdVcGRhdGUgTWF0Y2gnIDogJ0NyZWF0ZSBNYXRjaCdcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnbS10LTIwJzogdHJ1ZSwgJy1wcmltYXJ5JzogdHJ1ZSwgJy1yb3VuZGVkLWxnJzogdHJ1ZSB9XCJcbiAgICAgICAgICAgIHJlZkZyb21QYXJlbnQ9XCJtYXRjaFN1Ym1pdEJ1dHRvblwiXG4gICAgICAgICAgPjwvQmFzZUJ1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICByZWY9XCJjbG9zZUJ1dHRvblwiXG4gICAgICAgICAgICBAdGFwPVwiJG1vZGFsLmNsb3NlXCJcbiAgICAgICAgICAgIHRleHQ9XCJDbG9zZVwiXG4gICAgICAgICAgICBjbGFzcz1cImJ0biBtLXQtMjAgLXJvdW5kZWQtbGcgLXNlY29uZGFyeSAtb3V0bGluZVwiXG4gICAgICAgICAgLz4gPC9TdGFja0xheW91dFxuICAgICAgPjwvU2Nyb2xsVmlldz5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICA8L01vZGFsU3RhY2s+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG5AaW1wb3J0ICd+L19hcHAuY29tbW9uJztcblNjcm9sbHZpZXcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tb2RhbC1jb250YWluZXIge1xuICBwYWRkaW5nOiAyNTtcbiAgcGFkZGluZy1ib3R0b206IDEwO1xuICAubW9kYWwge1xuICAgIG1hcmdpbjogMjA7XG4gICAgbWFyZ2luLXRvcDogMzU7XG4gICAgYm9yZGVyLXJhZGl1czogODtcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBSYWREYXRhRm9ybSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC5udC1pbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pbnB1dCB7XG4gICAgICBwbGFjZWhvbGRlci1jb2xvcjogI2E4YThhODtcbiAgICAgIGZvbnQtc2l6ZTogMTY7XG4gICAgfVxuICAgIC5uby1ib3JkZXIge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgfVxufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=