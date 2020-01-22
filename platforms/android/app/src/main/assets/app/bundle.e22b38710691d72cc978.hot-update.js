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
          status: _types_EMatchStatus__WEBPACK_IMPORTED_MODULE_2__["MatchStatus"].ON,
          date: _this2.getDateToLocalString(_this2.state.match.date),
          time: _this2.getTimeToLocalString(_this2.state.match.time)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvTWF0Y2hGb3JtLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsbUJBREE7QUFFQTtBQUFBO0FBQUEsR0FGQTtBQUdBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUpBLEtBREE7QUFPQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQVBBO0FBV0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FYQTtBQWVBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBZkE7QUFtQkE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FuQkE7QUF1QkE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0F2QkE7QUEyQkE7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUEzQkEsR0FIQTs7QUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLGlDQUZBO0FBR0EsaURBSEE7QUFJQSxrR0FKQTtBQUtBO0FBTEEsU0FEQTtBQVFBO0FBQ0EsMkJBREE7QUFFQSxpQ0FGQTtBQUdBLHVDQUhBO0FBSUEsZ0NBQ0E7QUFDQSx5QkFEQTtBQUVBLGdDQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkEsV0FEQSxFQU9BO0FBQ0EsNEJBREE7QUFFQSxtQ0FGQTtBQUdBLG9CQUhBO0FBSUEseUJBQ0E7QUFBQTtBQUFBLGFBREEsRUFFQTtBQUNBO0FBQ0EsdUJBQ0EseUtBRkE7QUFHQTtBQUhBO0FBREEsYUFGQTtBQUpBLFdBUEEsRUFzQkE7QUFDQSx3QkFEQTtBQUVBLCtCQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBLFdBdEJBLEVBNEJBO0FBQ0Esd0JBREE7QUFFQSwrQkFGQTtBQUdBLG9CQUhBO0FBSUE7QUFKQSxXQTVCQSxFQWtDQTtBQUNBLDRCQURBO0FBRUEsbUNBRkE7QUFHQSxvQkFIQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQSxXQWxDQTtBQUpBLFNBUkE7QUFzREEsc0JBdERBO0FBdURBO0FBdkRBO0FBREE7QUEyREEsR0EvRkE7O0FBZ0dBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7O0FBSUE7QUFDQTtBQUNBLHlGQUNBLENBREEsY0FDQSxzQkFEQTtBQUVBLEtBUkE7O0FBU0E7QUFDQTtBQUNBO0FBQ0EsS0FaQTs7QUFhQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBRUEsS0FmQTs7QUFnQkE7QUFBQTs7QUFBQTtBQUNBOztBQUNBOztBQUNBOztBQUNBLFlBQ0EsNkJBQ0EscUJBREEsSUFFQSx3QkFGQSxJQUdBLHdCQUpBLEVBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBQ0E7QUFBQTtBQUFBOztBQUNBLDZDQUNBLGtCQURBO0FBRUEsOENBRkE7QUFHQSxvRkFIQTtBQUlBLG9FQUpBO0FBS0E7QUFMQTs7QUFPQSxxQ0FDQSx5R0FEQSxHQUVBLDBGQUZBO0FBR0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQS9CQTtBQWdDQTs7QUFoREE7QUFoR0EsRyIsImZpbGUiOiJidW5kbGUuZTIyYjM4NzEwNjkxZDcyY2M5NzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5pbXBvcnQgQmFzZUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0Jhc2VCdXR0b24udnVlJ1xuaW1wb3J0IHsgY3JlYXRlTWF0Y2gsIHVwZGF0ZU1hdGNoIH0gZnJvbSAnLi4vX3NoYXJlZC9maXJlYmFzZS9tYXRjaGVzJ1xuaW1wb3J0IHsgTWF0Y2hTdGF0dXMgfSBmcm9tICcuLi90eXBlcy9FTWF0Y2hTdGF0dXMnXG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuLi9fc2hhcmVkL1RvYXN0eS50cydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTWF0Y2hGb3JtJyxcbiAgY29tcG9uZW50czogeyBCYXNlQnV0dG9uIH0sXG4gIHByb3BzOiB7XG4gICAgY2I6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfSxcbiAgICB9LFxuICAgIGl0ZW1JZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICB2ZW51ZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICBwb3N0Q29kZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICBkYXRlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBuZXcgRGF0ZSgpLFxuICAgIH0sXG4gICAgdGltZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICBvcHBvbmVudDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgbWF0Y2g6IHtcbiAgICAgICAgICB2ZW51ZTogdGhpcy52ZW51ZSxcbiAgICAgICAgICBwb3N0Q29kZTogdGhpcy5wb3N0Q29kZSxcbiAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSh0aGlzLmRhdGUpIHx8IG5ldyBEYXRlKCksXG4gICAgICAgICAgdGltZTogdGhpcy50aW1lIHx8IGAke25ldyBEYXRlKCkuZ2V0SG91cnMoKX06JHtuZXcgRGF0ZSgpLmdldE1pbnV0ZXMoKX1gLFxuICAgICAgICAgIG9wcG9uZW50OiB0aGlzLm9wcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBtYXRjaE1ldGFEYXRhOiB7XG4gICAgICAgICAgaXNSZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgY29tbWl0TW9kZTogJ0ltbWVkaWF0ZScsXG4gICAgICAgICAgdmFsaWRhdGlvbk1vZGU6ICdPbkxvc3RGb2N1cycsXG4gICAgICAgICAgcHJvcGVydHlBbm5vdGF0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAndmVudWUnLFxuICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ1ZlbnVlJyxcbiAgICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICAgIHZhbGlkYXRvcnM6IFt7IG5hbWU6ICdOb25FbXB0eScgfSwgeyBuYW1lOiAnTWF4aW11bUxlbmd0aCcsIHBhcmFtczogeyBsZW5ndGg6IDIwIH0gfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAncG9zdENvZGUnLFxuICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ1Bvc3Rjb2RlJyxcbiAgICAgICAgICAgICAgaW5kZXg6IDEsXG4gICAgICAgICAgICAgIHZhbGlkYXRvcnM6IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdOb25FbXB0eScgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVnRXg6XG4gICAgICAgICAgICAgICAgICAgICAgJ14oW0dnXVtJaV1bUnJdIDBbQWFdezJ9KXwoKChbQS1aYS16XVswLTldezEsMn0pfCgoW0EtWmEtel1bQS1IYS1oSi1Zai15XVswLTldezEsMn0pfCgoW0FaYS16XVswLTldW0EtWmEtel0pfChbQS1aYS16XVtBLUhhLWhKLVlqLXldWzAtOV0/W0EtWmEtel0pKSkpWzAtOV1bQS1aYS16XXsyfSkkJyxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnUGxlYXNlIHByb3ZpZGUgdmFsaWQgcG9zdGNvZGUnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2RhdGUnLFxuICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0RhdGUnLFxuICAgICAgICAgICAgICBpbmRleDogMixcbiAgICAgICAgICAgICAgZWRpdG9yOiAnRGF0ZVBpY2tlcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAndGltZScsXG4gICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnVGltZScsXG4gICAgICAgICAgICAgIGluZGV4OiAzLFxuICAgICAgICAgICAgICBlZGl0b3I6ICdUaW1lUGlja2VyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdvcHBvbmVudCcsXG4gICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnT3Bwb25lbnQnLFxuICAgICAgICAgICAgICBpbmRleDogNCxcbiAgICAgICAgICAgICAgdmFsaWRhdG9yczogW3sgbmFtZTogJ05vbkVtcHR5JyB9LCB7IG5hbWU6ICdNYXhpbXVtTGVuZ3RoJywgcGFyYW1zOiB7IGxlbmd0aDogMjAgfSB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGlzRm9ybVZhbGlkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZm9jdXNTdWJtaXRCdXR0b24oKSB7XG4gICAgICB0aGlzLiRyZWZzLnN1Ym1pdEJ1dHRvbi5uYXRpdmVWaWV3LmZvY3VzKClcbiAgICB9LFxuICAgIGdldERhdGVUb0xvY2FsU3RyaW5nKGRhdGUpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKGRhdGUudmFsdWUpXG4gICAgICByZXR1cm4gYCR7c2VsZWN0ZWREYXRlLmdldEZ1bGxZZWFyKCl9LyR7c2VsZWN0ZWREYXRlLmdldE1vbnRoKCkgK1xuICAgICAgICAxfS8ke3NlbGVjdGVkRGF0ZS5nZXREYXRlKCl9YFxuICAgIH0sXG4gICAgZ2V0VGltZVRvTG9jYWxTdHJpbmcodGltZSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRUaW1lID0gbmV3IERhdGUodGltZS52YWx1ZSlcbiAgICAgIHJldHVybiBgJHtzZWxlY3RlZFRpbWUuZ2V0SG91cnMoKX06JHtzZWxlY3RlZFRpbWUuZ2V0TWludXRlcygpfWBcbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZU9uUHJvcGVydHlWYWxpZGF0ZWQoeyBvYmplY3QsIHByb3BlcnR5TmFtZSwgZW50aXR5UHJvcGVydHkgfSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgaXNGb3JtVmFsaWQ6IGVudGl0eVByb3BlcnR5LmlzVmFsaWQgfVxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlT25TdWJtaXQoKSB7XG4gICAgICBjb25zdCB2ZW51ZSA9IHRoaXMuJHJlZnMubWF0Y2hmb3JtLmdldFByb3BlcnR5QnlOYW1lKCd2ZW51ZScpXG4gICAgICBjb25zdCBwb3N0Q29kZSA9IHRoaXMuJHJlZnMubWF0Y2hmb3JtLmdldFByb3BlcnR5QnlOYW1lKCdwb3N0Q29kZScpXG4gICAgICBjb25zdCBvcHBvbmVudCA9IHRoaXMuJHJlZnMubWF0Y2hmb3JtLmdldFByb3BlcnR5QnlOYW1lKCdvcHBvbmVudCcpXG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLnN0YXRlLmlzRm9ybVZhbGlkIHx8XG4gICAgICAgICF2ZW51ZS52YWx1ZUNhbmRpZGF0ZSB8fFxuICAgICAgICAhcG9zdENvZGUudmFsdWVDYW5kaWRhdGUgfHxcbiAgICAgICAgIW9wcG9uZW50LnZhbHVlQ2FuZGlkYXRlXG4gICAgICApIHtcbiAgICAgICAgVG9hc3RTZXJ2aWNlKCdJbnZhbGlkIGVudHJpZXMuIFBsZWFzZSBmaWxsIHVwIGFsbCB0aGUgcmVzcGVjdGl2ZSBkZXRhaWxzJywgJyNiZTUxMzgnKS5zaG93KClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJHJlZnMuZGF0YWZvcm0uY29tbWl0QWxsKClcbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IHRydWUgfVxuICAgICAgY29uc3QgbWF0Y2hEZXRhaWxzID0ge1xuICAgICAgICAuLi50aGlzLnN0YXRlLm1hdGNoLFxuICAgICAgICBhZGRyZXNzOiB0aGlzLnN0YXRlLm1hdGNoLnBvc3RDb2RlLFxuICAgICAgICBzdGF0dXM6IE1hdGNoU3RhdHVzLk9OLFxuICAgICAgICBkYXRlOiB0aGlzLmdldERhdGVUb0xvY2FsU3RyaW5nKHRoaXMuc3RhdGUubWF0Y2guZGF0ZSksXG4gICAgICAgIHRpbWU6IHRoaXMuZ2V0VGltZVRvTG9jYWxTdHJpbmcodGhpcy5zdGF0ZS5tYXRjaC50aW1lKSxcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuaXRlbUlkXG4gICAgICAgID8gdXBkYXRlTWF0Y2godGhpcy5pdGVtSWQsIG1hdGNoRGV0YWlscylcbiAgICAgICAgOiBjcmVhdGVNYXRjaChtYXRjaERldGFpbHMpXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhY3Rpb25cbiAgICAgIGlmIChyZXN1bHQgJiYgIXJlc3VsdC5pc0Vycm9yKSB7XG4gICAgICAgIHRoaXMuJG1vZGFsLmNsb3NlKClcbiAgICAgICAgdGhpcy5jYigpXG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSB9XG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxNb2RhbFN0YWNrIGNsYXNzPVwibW9kYWwtY29udGFpbmVyXCI+XG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibW9kYWxcIj5cbiAgICAgIDxTdGFja0xheW91dCBtYXJnaW4tYm90dG9tPVwiMjVcIj5cbiAgICAgICAgPExhYmVsXG4gICAgICAgICAgOnRleHQ9XCJpdGVtSWQgPyAnRWRpdCBNYXRjaCcgOiAnQ3JlYXRlIE1hdGNoJ1wiXG4gICAgICAgICAgY2xhc3M9XCJoMiBudC1sYWJlbCBtLTEwIGZvbnQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAvPlxuICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgIDxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHNjcm9sbEJhckluZGljYXRvclZpc2libGU9XCJmYWxzZVwiPlxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJudC1mb3JtXCI+XG4gICAgICAgICAgPFJhZERhdGFGb3JtXG4gICAgICAgICAgICByZWY9XCJtYXRjaGZvcm1cIlxuICAgICAgICAgICAgOnNvdXJjZT1cInN0YXRlLm1hdGNoXCJcbiAgICAgICAgICAgIDptZXRhZGF0YT1cInN0YXRlLm1hdGNoTWV0YURhdGFcIlxuICAgICAgICAgICAgQHByb3BlcnR5VmFsaWRhdGVkPVwiaGFuZGxlT25Qcm9wZXJ0eVZhbGlkYXRlZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvUmFkRGF0YUZvcm0+XG4gICAgICAgICAgPEJhc2VCdXR0b25cbiAgICAgICAgICAgIDpsb2FkaW5nPVwic3RhdGUubG9hZGluZ1wiXG4gICAgICAgICAgICBAaGFuZGxlT25DbGljaz1cImhhbmRsZU9uU3VibWl0XCJcbiAgICAgICAgICAgIDp0ZXh0PVwiaXRlbUlkID8gJ1VwZGF0ZSBNYXRjaCcgOiAnQ3JlYXRlIE1hdGNoJ1wiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdtLXQtMjAnOiB0cnVlLCAnLXByaW1hcnknOiB0cnVlLCAnLXJvdW5kZWQtbGcnOiB0cnVlIH1cIlxuICAgICAgICAgICAgcmVmRnJvbVBhcmVudD1cIm1hdGNoU3VibWl0QnV0dG9uXCJcbiAgICAgICAgICA+PC9CYXNlQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHJlZj1cImNsb3NlQnV0dG9uXCJcbiAgICAgICAgICAgIEB0YXA9XCIkbW9kYWwuY2xvc2VcIlxuICAgICAgICAgICAgdGV4dD1cIkNsb3NlXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIG0tdC0yMCAtcm91bmRlZC1sZyAtc2Vjb25kYXJ5IC1vdXRsaW5lXCJcbiAgICAgICAgICAvPiA8L1N0YWNrTGF5b3V0XG4gICAgICA+PC9TY3JvbGxWaWV3PlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIDwvTW9kYWxTdGFjaz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgJ34vX2FwcC5jb21tb24nO1xuU2Nyb2xsdmlldyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDI1O1xuICBwYWRkaW5nLWJvdHRvbTogMTA7XG4gIC5tb2RhbCB7XG4gICAgbWFyZ2luOiAyMDtcbiAgICBtYXJnaW4tdG9wOiAzNTtcbiAgICBib3JkZXItcmFkaXVzOiA4O1xuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbiAgICB3aWR0aDogODAlO1xuICAgIFJhZERhdGFGb3JtIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLm50LWlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmlucHV0IHtcbiAgICAgIHBsYWNlaG9sZGVyLWNvbG9yOiAjYThhOGE4O1xuICAgICAgZm9udC1zaXplOiAxNjtcbiAgICB9XG4gICAgLm5vLWJvcmRlciB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICB9XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==