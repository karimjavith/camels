webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/CreatePassword.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./views/Login.vue");
/* harmony import */ var _shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./_shared/firebase/users.ts");
/* harmony import */ var _shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Toasty_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./_shared/Toasty.ts");
/* harmony import */ var _shared_Toasty_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shared_Toasty_ts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_BaseButton_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/BaseButton.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CreatePassword',
  components: {
    BaseButton: _components_BaseButton_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },

  data() {
    return {
      state: {
        loading: false,
        formValidation: {
          isValid: false,
          entityProperty: null
        },
        user: {
          displayName: '',
          email: '',
          password: '',
          confirmPassword: ''
        },
        userMetadata: {
          isReadOnly: false,
          commitMode: 'Immediate',
          validationMode: 'OnLostFocus',
          propertyAnnotations: [{
            name: 'displayName',
            displayName: 'Display Name',
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
            name: 'email',
            displayName: 'E-Mail',
            index: 1,
            editor: 'Email',
            validators: [{
              name: 'RegEx',
              params: {
                regEx: '[a-zA-Z0-9\\+\\.\\_\\%\\-\\+]{1,256}\\@[a-zA-Z0-9][a-zA-Z0-9\\-]{0,64}(\\.[a-zA-Z0-9][a-zA-Z0-9\\-]{0,25})+',
                errorMessage: 'Please provide your valid email.'
              }
            }]
          }, {
            name: 'password',
            displayName: 'Password',
            editor: 'Password',
            index: 2,
            validators: [{
              name: 'NonEmpty'
            }, {
              name: 'MinimumLength',
              params: {
                length: 6
              }
            }]
          }, {
            name: 'confirmPassword',
            displayName: 'Confirm Password',
            editor: 'Password',
            index: 3,
            validators: [{
              name: 'NonEmpty'
            }, {
              name: 'MinimumLength',
              params: {
                length: 6
              }
            }]
          }]
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
        var displayName = _this2.$refs.createPasswordForm.getPropertyByName('displayName');

        var userEmail = _this2.$refs.createPasswordForm.getPropertyByName('email');

        var userPassword = _this2.$refs.createPasswordForm.getPropertyByName('password');

        var userConfirmPassword = _this2.$refs.createPasswordForm.getPropertyByName('confirmPassword');

        if (!_this2.state.formValidation.isValid) {
          Object(_shared_Toasty_ts__WEBPACK_IMPORTED_MODULE_2__["ToastService"])("Invalid entries - ".concat(_this2.state.formValidation.entityProperty.valueCandidate), '#be5138').show();
          return;
        }

        if (!displayName.valueCandidate || !userEmail.valueCandidate || !userPassword.valueCandidate || !userConfirmPassword.valueCandidate) {
          Object(_shared_Toasty_ts__WEBPACK_IMPORTED_MODULE_2__["ToastService"])('Invalid entries. Please fill up all the respective details', '#be5138').show();
          return;
        }

        if (userPassword.valueCandidate !== userConfirmPassword.valueCandidate) {
          Object(_shared_Toasty_ts__WEBPACK_IMPORTED_MODULE_2__["ToastService"])('Invalid entries. Password do not match', '#be5138').show();
          return;
        }

        _this2.$refs.createPasswordForm.commitAll();

        _this2.state = _objectSpread({}, _this2.state, {
          loading: true
        });
        var result = yield Object(_shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_1__["signup"])(_this2.state.user.email, _this2.state.user.password, _this2.state.user.displayName);

        if (result && !result.isError) {
          _this2.$navigateTo(_Login_vue__WEBPACK_IMPORTED_MODULE_0__["default"], {
            clearHistory: true
          });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvQ3JlYXRlUGFzc3dvcmQudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLHdCQURBO0FBRUE7QUFBQTtBQUFBLEdBRkE7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFHQTtBQUNBLHdCQURBO0FBRUE7QUFGQSxTQUhBO0FBT0E7QUFDQSx5QkFEQTtBQUVBLG1CQUZBO0FBR0Esc0JBSEE7QUFJQTtBQUpBLFNBUEE7QUFhQTtBQUNBLDJCQURBO0FBRUEsaUNBRkE7QUFHQSx1Q0FIQTtBQUlBLGdDQUNBO0FBQ0EsK0JBREE7QUFFQSx1Q0FGQTtBQUdBLG9CQUhBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBLFdBREEsRUFPQTtBQUNBLHlCQURBO0FBRUEsaUNBRkE7QUFHQSxvQkFIQTtBQUlBLDJCQUpBO0FBS0EseUJBQ0E7QUFDQSwyQkFEQTtBQUVBO0FBQ0EsdUJBQ0EsNkdBRkE7QUFHQTtBQUhBO0FBRkEsYUFEQTtBQUxBLFdBUEEsRUF1QkE7QUFDQSw0QkFEQTtBQUVBLG1DQUZBO0FBR0EsOEJBSEE7QUFJQSxvQkFKQTtBQUtBLHlCQUNBO0FBQ0E7QUFEQSxhQURBLEVBSUE7QUFDQSxtQ0FEQTtBQUVBO0FBQ0E7QUFEQTtBQUZBLGFBSkE7QUFMQSxXQXZCQSxFQXdDQTtBQUNBLG1DQURBO0FBRUEsMkNBRkE7QUFHQSw4QkFIQTtBQUlBLG9CQUpBO0FBS0EseUJBQ0E7QUFDQTtBQURBLGFBREEsRUFJQTtBQUNBLG1DQURBO0FBRUE7QUFDQTtBQURBO0FBRkEsYUFKQTtBQUxBLFdBeENBO0FBSkE7QUFiQTtBQURBO0FBK0VBLEdBbkZBOztBQW9GQTtBQUNBO0FBQ0E7QUFDQSxLQUhBOztBQUlBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0Esd0NBQ0EsV0FEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQUtBLEtBVEE7O0FBVUE7QUFBQTs7QUFBQTtBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBO0FBQ0EsNkdBQ0EseURBREEsR0FFQSxTQUZBLEVBR0EsSUFIQTtBQUlBO0FBQ0E7O0FBQ0EsWUFDQSwrQkFDQSx5QkFEQSxJQUVBLDRCQUZBLElBR0EsbUNBSkEsRUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFDQTtBQUFBO0FBQUE7QUFDQSxvR0FDQSx1QkFEQSxFQUVBLDBCQUZBLEVBR0EsNkJBSEE7O0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFyQ0E7QUFzQ0E7O0FBaERBO0FBcEZBLEciLCJmaWxlIjoiYnVuZGxlLjcwYjY0NmU3MDQyZGJiOTE0YmFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuaW1wb3J0IExvZ2luIGZyb20gJy4vTG9naW4udnVlJ1xuaW1wb3J0IHsgc2lnbnVwIH0gZnJvbSAnLi4vX3NoYXJlZC9maXJlYmFzZS91c2Vycy50cydcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4uL19zaGFyZWQvVG9hc3R5LnRzJ1xuaW1wb3J0IEJhc2VCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CYXNlQnV0dG9uLnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnQ3JlYXRlUGFzc3dvcmQnLFxuICBjb21wb25lbnRzOiB7IEJhc2VCdXR0b24gfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG5cbiAgICAgICAgZm9ybVZhbGlkYXRpb246IHtcbiAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICAgICAgICBlbnRpdHlQcm9wZXJ0eTogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIGRpc3BsYXlOYW1lOiAnJyxcbiAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogJycsXG4gICAgICAgIH0sXG4gICAgICAgIHVzZXJNZXRhZGF0YToge1xuICAgICAgICAgIGlzUmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIGNvbW1pdE1vZGU6ICdJbW1lZGlhdGUnLFxuICAgICAgICAgIHZhbGlkYXRpb25Nb2RlOiAnT25Mb3N0Rm9jdXMnLFxuICAgICAgICAgIHByb3BlcnR5QW5ub3RhdGlvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2Rpc3BsYXlOYW1lJyxcbiAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdEaXNwbGF5IE5hbWUnLFxuICAgICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICAgICAgdmFsaWRhdG9yczogW3sgbmFtZTogJ05vbkVtcHR5JyB9LCB7IG5hbWU6ICdNYXhpbXVtTGVuZ3RoJywgcGFyYW1zOiB7IGxlbmd0aDogMjAgfSB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdlbWFpbCcsXG4gICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnRS1NYWlsJyxcbiAgICAgICAgICAgICAgaW5kZXg6IDEsXG4gICAgICAgICAgICAgIGVkaXRvcjogJ0VtYWlsJyxcbiAgICAgICAgICAgICAgdmFsaWRhdG9yczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdSZWdFeCcsXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVnRXg6XG4gICAgICAgICAgICAgICAgICAgICAgJ1thLXpBLVowLTlcXFxcK1xcXFwuXFxcXF9cXFxcJVxcXFwtXFxcXCtdezEsMjU2fVxcXFxAW2EtekEtWjAtOV1bYS16QS1aMC05XFxcXC1dezAsNjR9KFxcXFwuW2EtekEtWjAtOV1bYS16QS1aMC05XFxcXC1dezAsMjV9KSsnLFxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdQbGVhc2UgcHJvdmlkZSB5b3VyIHZhbGlkIGVtYWlsLicsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ1Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgZWRpdG9yOiAnUGFzc3dvcmQnLFxuICAgICAgICAgICAgICBpbmRleDogMixcbiAgICAgICAgICAgICAgdmFsaWRhdG9yczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdOb25FbXB0eScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnTWluaW11bUxlbmd0aCcsXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiA2LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2NvbmZpcm1QYXNzd29yZCcsXG4gICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnQ29uZmlybSBQYXNzd29yZCcsXG4gICAgICAgICAgICAgIGVkaXRvcjogJ1Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgaW5kZXg6IDMsXG4gICAgICAgICAgICAgIHZhbGlkYXRvcnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnTm9uRW1wdHknLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ01pbmltdW1MZW5ndGgnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aDogNixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZm9jdXNTdWJtaXRCdXR0b24oKSB7XG4gICAgICB0aGlzLiRyZWZzLnN1Ym1pdEJ1dHRvbi5uYXRpdmVWaWV3LmZvY3VzKClcbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZU9uUHJvcGVydHlWYWxpZGF0ZWQoeyBvYmplY3QsIHByb3BlcnR5TmFtZSwgZW50aXR5UHJvcGVydHkgfSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgZm9ybVZhbGlkYXRpb246IHsgZW50aXR5UHJvcGVydHksIGlzVmFsaWQ6IGVudGl0eVByb3BlcnR5LmlzVmFsaWQgfSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZU9uU3VibWl0KCkge1xuICAgICAgY29uc3QgZGlzcGxheU5hbWUgPSB0aGlzLiRyZWZzLmNyZWF0ZVBhc3N3b3JkRm9ybS5nZXRQcm9wZXJ0eUJ5TmFtZSgnZGlzcGxheU5hbWUnKVxuICAgICAgY29uc3QgdXNlckVtYWlsID0gdGhpcy4kcmVmcy5jcmVhdGVQYXNzd29yZEZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ2VtYWlsJylcbiAgICAgIGNvbnN0IHVzZXJQYXNzd29yZCA9IHRoaXMuJHJlZnMuY3JlYXRlUGFzc3dvcmRGb3JtLmdldFByb3BlcnR5QnlOYW1lKCdwYXNzd29yZCcpXG4gICAgICBjb25zdCB1c2VyQ29uZmlybVBhc3N3b3JkID0gdGhpcy4kcmVmcy5jcmVhdGVQYXNzd29yZEZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ2NvbmZpcm1QYXNzd29yZCcpXG4gICAgICBpZiAoIXRoaXMuc3RhdGUuZm9ybVZhbGlkYXRpb24uaXNWYWxpZCkge1xuICAgICAgICBUb2FzdFNlcnZpY2UoXG4gICAgICAgICAgYEludmFsaWQgZW50cmllcyAtICR7dGhpcy5zdGF0ZS5mb3JtVmFsaWRhdGlvbi5lbnRpdHlQcm9wZXJ0eS52YWx1ZUNhbmRpZGF0ZX1gLFxuICAgICAgICAgICcjYmU1MTM4J1xuICAgICAgICApLnNob3coKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgIWRpc3BsYXlOYW1lLnZhbHVlQ2FuZGlkYXRlIHx8XG4gICAgICAgICF1c2VyRW1haWwudmFsdWVDYW5kaWRhdGUgfHxcbiAgICAgICAgIXVzZXJQYXNzd29yZC52YWx1ZUNhbmRpZGF0ZSB8fFxuICAgICAgICAhdXNlckNvbmZpcm1QYXNzd29yZC52YWx1ZUNhbmRpZGF0ZVxuICAgICAgKSB7XG4gICAgICAgIFRvYXN0U2VydmljZSgnSW52YWxpZCBlbnRyaWVzLiBQbGVhc2UgZmlsbCB1cCBhbGwgdGhlIHJlc3BlY3RpdmUgZGV0YWlscycsICcjYmU1MTM4Jykuc2hvdygpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKHVzZXJQYXNzd29yZC52YWx1ZUNhbmRpZGF0ZSAhPT0gdXNlckNvbmZpcm1QYXNzd29yZC52YWx1ZUNhbmRpZGF0ZSkge1xuICAgICAgICBUb2FzdFNlcnZpY2UoJ0ludmFsaWQgZW50cmllcy4gUGFzc3dvcmQgZG8gbm90IG1hdGNoJywgJyNiZTUxMzgnKS5zaG93KClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJHJlZnMuY3JlYXRlUGFzc3dvcmRGb3JtLmNvbW1pdEFsbCgpXG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH1cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ251cChcbiAgICAgICAgdGhpcy5zdGF0ZS51c2VyLmVtYWlsLFxuICAgICAgICB0aGlzLnN0YXRlLnVzZXIucGFzc3dvcmQsXG4gICAgICAgIHRoaXMuc3RhdGUudXNlci5kaXNwbGF5TmFtZVxuICAgICAgKVxuICAgICAgaWYgKHJlc3VsdCAmJiAhcmVzdWx0LmlzRXJyb3IpIHtcbiAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhMb2dpbiwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8UGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJudC1wYWdlXCI+XG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibnQtZm9ybSBmb3JtXCI+XG4gICAgICA8SW1hZ2UgY2xhc3M9XCJsb2dvXCIgc3JjPVwifi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCIgLz5cbiAgICAgIDxSYWREYXRhRm9ybVxuICAgICAgICByZWY9XCJjcmVhdGVQYXNzd29yZEZvcm1cIlxuICAgICAgICA6c291cmNlPVwic3RhdGUudXNlclwiXG4gICAgICAgIDptZXRhZGF0YT1cInN0YXRlLnVzZXJNZXRhZGF0YVwiXG4gICAgICAgIEBwcm9wZXJ0eVZhbGlkYXRlZD1cImhhbmRsZU9uUHJvcGVydHlWYWxpZGF0ZWRcIlxuICAgICAgPlxuICAgICAgPC9SYWREYXRhRm9ybT5cbiAgICAgIDxCYXNlQnV0dG9uXG4gICAgICAgIDpsb2FkaW5nPVwic3RhdGUubG9hZGluZ1wiXG4gICAgICAgIEBoYW5kbGVPbkNsaWNrPVwiaGFuZGxlT25TdWJtaXRcIlxuICAgICAgICA6Y2xhc3M9XCJ7ICdtLXQtMjAnOiB0cnVlLCAnLXByaW1hcnknOiB0cnVlLCAnLXJvdW5kZWQtbGcnOiB0cnVlIH1cIlxuICAgICAgICByZWZGcm9tUGFyZW50PVwiY29uZmlybVBhc3N3b3JkU3VibWl0QnV0dG9uXCJcbiAgICAgICAgdGV4dD1cIlNpZ24gdXBcIlxuICAgICAgPjwvQmFzZUJ1dHRvbj5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4uZm9ybSB7XG4gIG1hcmdpbi1sZWZ0OiAzMDtcbiAgbWFyZ2luLXJpZ2h0OiAzMDtcbiAgZmxleC1ncm93OiAyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gIC5sb2dvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMjtcbiAgICBoZWlnaHQ6IDkwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA3MDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNjMTlhNmI7XG4gIH1cblxuICAuaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTg7XG4gICAgcGxhY2Vob2xkZXItY29sb3I6ICNhOGE4YTg7XG4gIH1cbn1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9