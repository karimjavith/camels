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
        formValidation: {
          isValid: false,
          entityProperty: null
        }
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
          formValidation: {
            entityProperty,
            isValid: entityProperty.isValid
          }
        });
      })();
    },

    handleOnSubmit() {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        var venue = _this2.$refs.matchform.getPropertyByName('venue');

        var postCode = _this2.$refs.matchform.getPropertyByName('postCode');

        var opponent = _this2.$refs.matchform.getPropertyByName('opponent');

        if (!_this2.state.formValidation.isValid) {
          Object(_shared_Toasty_ts__WEBPACK_IMPORTED_MODULE_3__["ToastService"])("Invalid entries - ".concat(_this2.state.formValidation.entityProperty.valueCandidate), '#be5138').show();
          return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvTWF0Y2hGb3JtLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsbUJBREE7QUFFQTtBQUFBO0FBQUEsR0FGQTtBQUdBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUpBLEtBREE7QUFPQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQVBBO0FBV0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FYQTtBQWVBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBZkE7QUFtQkE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FuQkE7QUF1QkE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0F2QkE7QUEyQkE7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUEzQkEsR0FIQTs7QUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLGlDQUZBO0FBR0EsaURBSEE7QUFJQSxrR0FKQTtBQUtBO0FBTEEsU0FEQTtBQVFBO0FBQ0EsMkJBREE7QUFFQSxpQ0FGQTtBQUdBLHVDQUhBO0FBSUEsZ0NBQ0E7QUFDQSx5QkFEQTtBQUVBLGdDQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkEsV0FEQSxFQU9BO0FBQ0EsNEJBREE7QUFFQSxtQ0FGQTtBQUdBLG9CQUhBO0FBSUEseUJBQ0E7QUFBQTtBQUFBLGFBREEsRUFFQTtBQUNBO0FBQ0EsdUJBQ0EseUtBRkE7QUFHQTtBQUhBO0FBREEsYUFGQTtBQUpBLFdBUEEsRUFzQkE7QUFDQSx3QkFEQTtBQUVBLCtCQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBLFdBdEJBLEVBNEJBO0FBQ0Esd0JBREE7QUFFQSwrQkFGQTtBQUdBLG9CQUhBO0FBSUE7QUFKQSxXQTVCQSxFQWtDQTtBQUNBLDRCQURBO0FBRUEsbUNBRkE7QUFHQSxvQkFIQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQSxXQWxDQTtBQUpBLFNBUkE7QUFzREEsc0JBdERBO0FBdURBO0FBQ0Esd0JBREE7QUFFQTtBQUZBO0FBdkRBO0FBREE7QUE4REEsR0FsR0E7O0FBbUdBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7O0FBSUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSx3Q0FDQSxXQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBS0EsS0FUQTs7QUFVQTtBQUFBOztBQUFBO0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQSw2R0FDQSx5REFEQSxHQUVBLFNBRkEsRUFHQSxJQUhBO0FBSUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0EsNkNBQ0Esa0JBREE7QUFFQSw4Q0FGQTtBQUdBO0FBSEE7O0FBS0EscUNBQ0EseUdBREEsR0FFQSwwRkFGQTtBQUdBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUEvQkE7QUFnQ0E7O0FBMUNBO0FBbkdBLEciLCJmaWxlIjoiYnVuZGxlLmUwNTQzNjUyZTIxOGZkMmZkNWNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuaW1wb3J0IEJhc2VCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CYXNlQnV0dG9uLnZ1ZSdcbmltcG9ydCB7IGNyZWF0ZU1hdGNoLCB1cGRhdGVNYXRjaCB9IGZyb20gJy4uL19zaGFyZWQvZmlyZWJhc2UvbWF0Y2hlcydcbmltcG9ydCB7IE1hdGNoU3RhdHVzIH0gZnJvbSAnLi4vdHlwZXMvRU1hdGNoU3RhdHVzJ1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi4vX3NoYXJlZC9Ub2FzdHkudHMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ01hdGNoRm9ybScsXG4gIGNvbXBvbmVudHM6IHsgQmFzZUJ1dHRvbiB9LFxuICBwcm9wczoge1xuICAgIGNiOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH0sXG4gICAgfSxcbiAgICBpdGVtSWQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgdmVudWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgcG9zdENvZGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgZGF0ZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogbmV3IERhdGUoKSxcbiAgICB9LFxuICAgIHRpbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgb3Bwb25lbnQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIG1hdGNoOiB7XG4gICAgICAgICAgdmVudWU6IHRoaXMudmVudWUsXG4gICAgICAgICAgcG9zdENvZGU6IHRoaXMucG9zdENvZGUsXG4gICAgICAgICAgZGF0ZTogbmV3IERhdGUodGhpcy5kYXRlKSB8fCBuZXcgRGF0ZSgpLFxuICAgICAgICAgIHRpbWU6IHRoaXMudGltZSB8fCBgJHtuZXcgRGF0ZSgpLmdldEhvdXJzKCl9OiR7bmV3IERhdGUoKS5nZXRNaW51dGVzKCl9YCxcbiAgICAgICAgICBvcHBvbmVudDogdGhpcy5vcHBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgbWF0Y2hNZXRhRGF0YToge1xuICAgICAgICAgIGlzUmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIGNvbW1pdE1vZGU6ICdJbW1lZGlhdGUnLFxuICAgICAgICAgIHZhbGlkYXRpb25Nb2RlOiAnT25Mb3N0Rm9jdXMnLFxuICAgICAgICAgIHByb3BlcnR5QW5ub3RhdGlvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3ZlbnVlJyxcbiAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdWZW51ZScsXG4gICAgICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgICAgICB2YWxpZGF0b3JzOiBbeyBuYW1lOiAnTm9uRW1wdHknIH0sIHsgbmFtZTogJ01heGltdW1MZW5ndGgnLCBwYXJhbXM6IHsgbGVuZ3RoOiAyMCB9IH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3Bvc3RDb2RlJyxcbiAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdQb3N0Y29kZScsXG4gICAgICAgICAgICAgIGluZGV4OiAxLFxuICAgICAgICAgICAgICB2YWxpZGF0b3JzOiBbXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTm9uRW1wdHknIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ0V4OlxuICAgICAgICAgICAgICAgICAgICAgICdeKFtHZ11bSWldW1JyXSAwW0FhXXsyfSl8KCgoW0EtWmEtel1bMC05XXsxLDJ9KXwoKFtBLVphLXpdW0EtSGEtaEotWWoteV1bMC05XXsxLDJ9KXwoKFtBWmEtel1bMC05XVtBLVphLXpdKXwoW0EtWmEtel1bQS1IYS1oSi1Zai15XVswLTldP1tBLVphLXpdKSkpKVswLTldW0EtWmEtel17Mn0pJCcsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1BsZWFzZSBwcm92aWRlIHZhbGlkIHBvc3Rjb2RlJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdkYXRlJyxcbiAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdEYXRlJyxcbiAgICAgICAgICAgICAgaW5kZXg6IDIsXG4gICAgICAgICAgICAgIGVkaXRvcjogJ0RhdGVQaWNrZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3RpbWUnLFxuICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ1RpbWUnLFxuICAgICAgICAgICAgICBpbmRleDogMyxcbiAgICAgICAgICAgICAgZWRpdG9yOiAnVGltZVBpY2tlcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnb3Bwb25lbnQnLFxuICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ09wcG9uZW50JyxcbiAgICAgICAgICAgICAgaW5kZXg6IDQsXG4gICAgICAgICAgICAgIHZhbGlkYXRvcnM6IFt7IG5hbWU6ICdOb25FbXB0eScgfSwgeyBuYW1lOiAnTWF4aW11bUxlbmd0aCcsIHBhcmFtczogeyBsZW5ndGg6IDIwIH0gfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBmb3JtVmFsaWRhdGlvbjoge1xuICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgICAgICAgIGVudGl0eVByb3BlcnR5OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBmb2N1c1N1Ym1pdEJ1dHRvbigpIHtcbiAgICAgIHRoaXMuJHJlZnMuc3VibWl0QnV0dG9uLm5hdGl2ZVZpZXcuZm9jdXMoKVxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlT25Qcm9wZXJ0eVZhbGlkYXRlZCh7IG9iamVjdCwgcHJvcGVydHlOYW1lLCBlbnRpdHlQcm9wZXJ0eSB9KSB7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICBmb3JtVmFsaWRhdGlvbjogeyBlbnRpdHlQcm9wZXJ0eSwgaXNWYWxpZDogZW50aXR5UHJvcGVydHkuaXNWYWxpZCB9LFxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlT25TdWJtaXQoKSB7XG4gICAgICBjb25zdCB2ZW51ZSA9IHRoaXMuJHJlZnMubWF0Y2hmb3JtLmdldFByb3BlcnR5QnlOYW1lKCd2ZW51ZScpXG4gICAgICBjb25zdCBwb3N0Q29kZSA9IHRoaXMuJHJlZnMubWF0Y2hmb3JtLmdldFByb3BlcnR5QnlOYW1lKCdwb3N0Q29kZScpXG4gICAgICBjb25zdCBvcHBvbmVudCA9IHRoaXMuJHJlZnMubWF0Y2hmb3JtLmdldFByb3BlcnR5QnlOYW1lKCdvcHBvbmVudCcpXG4gICAgICBpZiAoIXRoaXMuc3RhdGUuZm9ybVZhbGlkYXRpb24uaXNWYWxpZCkge1xuICAgICAgICBUb2FzdFNlcnZpY2UoXG4gICAgICAgICAgYEludmFsaWQgZW50cmllcyAtICR7dGhpcy5zdGF0ZS5mb3JtVmFsaWRhdGlvbi5lbnRpdHlQcm9wZXJ0eS52YWx1ZUNhbmRpZGF0ZX1gLFxuICAgICAgICAgICcjYmU1MTM4J1xuICAgICAgICApLnNob3coKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICghdmVudWUudmFsdWVDYW5kaWRhdGUgfHwgIXBvc3RDb2RlLnZhbHVlQ2FuZGlkYXRlIHx8ICFvcHBvbmVudC52YWx1ZUNhbmRpZGF0ZSkge1xuICAgICAgICBUb2FzdFNlcnZpY2UoJ0ludmFsaWQgZW50cmllcy4gUGxlYXNlIGZpbGwgdXAgYWxsIHRoZSByZXNwZWN0aXZlIGRldGFpbHMnLCAnI2JlNTEzOCcpLnNob3coKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy4kcmVmcy5tYXRjaGZvcm0uY29tbWl0QWxsKClcbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IHRydWUgfVxuICAgICAgY29uc3QgbWF0Y2hEZXRhaWxzID0ge1xuICAgICAgICAuLi50aGlzLnN0YXRlLm1hdGNoLFxuICAgICAgICBhZGRyZXNzOiB0aGlzLnN0YXRlLm1hdGNoLnBvc3RDb2RlLFxuICAgICAgICBzdGF0dXM6IE1hdGNoU3RhdHVzLk9OLFxuICAgICAgfVxuICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5pdGVtSWRcbiAgICAgICAgPyB1cGRhdGVNYXRjaCh0aGlzLml0ZW1JZCwgbWF0Y2hEZXRhaWxzKVxuICAgICAgICA6IGNyZWF0ZU1hdGNoKG1hdGNoRGV0YWlscylcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFjdGlvblxuICAgICAgaWYgKHJlc3VsdCAmJiAhcmVzdWx0LmlzRXJyb3IpIHtcbiAgICAgICAgdGhpcy4kbW9kYWwuY2xvc2UoKVxuICAgICAgICB0aGlzLmNiKClcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPE1vZGFsU3RhY2sgY2xhc3M9XCJtb2RhbC1jb250YWluZXJcIj5cbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtb2RhbFwiPlxuICAgICAgPFN0YWNrTGF5b3V0IG1hcmdpbi1ib3R0b209XCIyNVwiPlxuICAgICAgICA8TGFiZWxcbiAgICAgICAgICA6dGV4dD1cIml0ZW1JZCA/ICdFZGl0IE1hdGNoJyA6ICdDcmVhdGUgTWF0Y2gnXCJcbiAgICAgICAgICBjbGFzcz1cImgyIG50LWxhYmVsIG0tMTAgZm9udC13ZWlnaHQtYm9sZFwiXG4gICAgICAgIC8+XG4gICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgPFNjcm9sbFZpZXcgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgc2Nyb2xsQmFySW5kaWNhdG9yVmlzaWJsZT1cImZhbHNlXCI+XG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm50LWZvcm1cIj5cbiAgICAgICAgICA8UmFkRGF0YUZvcm1cbiAgICAgICAgICAgIHJlZj1cIm1hdGNoZm9ybVwiXG4gICAgICAgICAgICA6c291cmNlPVwic3RhdGUubWF0Y2hcIlxuICAgICAgICAgICAgOm1ldGFkYXRhPVwic3RhdGUubWF0Y2hNZXRhRGF0YVwiXG4gICAgICAgICAgICBAcHJvcGVydHlWYWxpZGF0ZWQ9XCJoYW5kbGVPblByb3BlcnR5VmFsaWRhdGVkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9SYWREYXRhRm9ybT5cbiAgICAgICAgICA8QmFzZUJ1dHRvblxuICAgICAgICAgICAgOmxvYWRpbmc9XCJzdGF0ZS5sb2FkaW5nXCJcbiAgICAgICAgICAgIEBoYW5kbGVPbkNsaWNrPVwiaGFuZGxlT25TdWJtaXRcIlxuICAgICAgICAgICAgOnRleHQ9XCJpdGVtSWQgPyAnVXBkYXRlIE1hdGNoJyA6ICdDcmVhdGUgTWF0Y2gnXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ20tdC0yMCc6IHRydWUsICctcHJpbWFyeSc6IHRydWUsICctcm91bmRlZC1sZyc6IHRydWUgfVwiXG4gICAgICAgICAgICByZWZGcm9tUGFyZW50PVwibWF0Y2hTdWJtaXRCdXR0b25cIlxuICAgICAgICAgID48L0Jhc2VCdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgcmVmPVwiY2xvc2VCdXR0b25cIlxuICAgICAgICAgICAgQHRhcD1cIiRtb2RhbC5jbG9zZVwiXG4gICAgICAgICAgICB0ZXh0PVwiQ2xvc2VcIlxuICAgICAgICAgICAgY2xhc3M9XCJidG4gbS10LTIwIC1yb3VuZGVkLWxnIC1zZWNvbmRhcnkgLW91dGxpbmVcIlxuICAgICAgICAgIC8+IDwvU3RhY2tMYXlvdXRcbiAgICAgID48L1Njcm9sbFZpZXc+XG4gICAgPC9TdGFja0xheW91dD5cbiAgPC9Nb2RhbFN0YWNrPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCAnfi9fYXBwLmNvbW1vbic7XG5TY3JvbGx2aWV3IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubW9kYWwtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjU7XG4gIHBhZGRpbmctYm90dG9tOiAxMDtcbiAgLm1vZGFsIHtcbiAgICBtYXJnaW46IDIwO1xuICAgIG1hcmdpbi10b3A6IDM1O1xuICAgIGJvcmRlci1yYWRpdXM6IDg7XG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgUmFkRGF0YUZvcm0ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAubnQtaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5wdXQge1xuICAgICAgcGxhY2Vob2xkZXItY29sb3I6ICNhOGE4YTg7XG4gICAgICBmb250LXNpemU6IDE2O1xuICAgIH1cbiAgICAubm8tYm9yZGVyIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gIH1cbn1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9