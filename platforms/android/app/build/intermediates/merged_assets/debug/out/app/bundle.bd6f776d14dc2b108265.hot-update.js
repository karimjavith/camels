webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/CreatePassword.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./views/Login.vue");
/* harmony import */ var _shared_firbase_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./_shared/firbase.ts");
/* harmony import */ var _shared_firbase_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_firbase_ts__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CreatePassword',

  data() {
    return {
      user: {
        email: '',
        password: '',
        confirmPassword: ''
      }
    };
  },

  methods: {
    focusPassword() {
      this.$refs.password.nativeView.focus();
    },

    focusConfirmPassword() {
      this.$refs.confirmPassword.nativeView.focus();
    },

    focusSubmitButton() {
      this.$refs.submitButton.nativeView.focus();
    },

    submit() {
      var _this = this;

      return _asyncToGenerator(function* () {
        console.log('Sign up fired');
        var result = yield Object(_shared_firbase_ts__WEBPACK_IMPORTED_MODULE_1__["signup"])(_this.user.email, _this.user.password);
        console.log(result);

        if (result && !result.isError) {
          _this.$navigateTo(_Login_vue__WEBPACK_IMPORTED_MODULE_0__["default"], {
            clearHistory: true
          });
        } else {
          alert(result.message);
        }
      })();
    }

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvQ3JlYXRlUGFzc3dvcmQudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSxvQkFGQTtBQUdBO0FBSEE7QUFEQTtBQU9BLEdBVkE7O0FBV0E7QUFDQTtBQUNBO0FBQ0EsS0FIQTs7QUFJQTtBQUNBO0FBQ0EsS0FOQTs7QUFPQTtBQUNBO0FBQ0EsS0FUQTs7QUFVQTtBQUFBOztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQTtBQVJBO0FBU0E7O0FBbkJBO0FBWEEsRyIsImZpbGUiOiJidW5kbGUuYmQ2Zjc3NmQxNGRjMmIxMDgyNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbi52dWUnXG5pbXBvcnQgeyBzaWdudXAgfSBmcm9tICcuLi9fc2hhcmVkL2ZpcmJhc2UudHMnXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdDcmVhdGVQYXNzd29yZCcsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIGNvbmZpcm1QYXNzd29yZDogJycsXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGZvY3VzUGFzc3dvcmQoKSB7XG4gICAgICB0aGlzLiRyZWZzLnBhc3N3b3JkLm5hdGl2ZVZpZXcuZm9jdXMoKVxuICAgIH0sXG4gICAgZm9jdXNDb25maXJtUGFzc3dvcmQoKSB7XG4gICAgICB0aGlzLiRyZWZzLmNvbmZpcm1QYXNzd29yZC5uYXRpdmVWaWV3LmZvY3VzKClcbiAgICB9LFxuICAgIGZvY3VzU3VibWl0QnV0dG9uKCkge1xuICAgICAgdGhpcy4kcmVmcy5zdWJtaXRCdXR0b24ubmF0aXZlVmlldy5mb2N1cygpXG4gICAgfSxcbiAgICBhc3luYyBzdWJtaXQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnU2lnbiB1cCBmaXJlZCcpXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWdudXAodGhpcy51c2VyLmVtYWlsLCB0aGlzLnVzZXIucGFzc3dvcmQpXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICBpZiAocmVzdWx0ICYmICFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQocmVzdWx0Lm1lc3NhZ2UpXG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxQYWdlIGFjdGlvbi1iYXItaGlkZGVuPVwidHJ1ZVwiPlxuICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwicGFnZVwiPlxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICA8SW1hZ2UgY2xhc3M9XCJsb2dvXCIgc3JjPVwifi9hc3NldHMvaW1hZ2VzL05hdGl2ZVNjcmlwdC1WdWUucG5nXCIgLz5cbiAgICAgICAgPExhYmVsIGNsYXNzPVwiaGVhZGVyXCIgdGV4dD1cIkNhbWVsc1wiIC8+XG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgbWFyZ2luLWJvdHRvbT1cIjI1XCI+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgcmVmPVwiZW1haWxcIlxuICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuZW1haWxcIlxuICAgICAgICAgICAgOnJldHVybktleVR5cGU9XCInbmV4dCdcIlxuICAgICAgICAgICAgQHJldHVyblByZXNzPVwiZm9jdXNQYXNzd29yZFwiXG4gICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcbiAgICAgICAgICAgIGhpbnQ9XCJjYW1lbEBnbWFpbC5jb21cIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGZvbnQtc2l6ZT1cIjE4XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBtYXJnaW4tYm90dG9tPVwiMjVcIj5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICByZWY9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB2LW1vZGVsPVwidXNlci5wYXNzd29yZFwiXG4gICAgICAgICAgICA6cmV0dXJuS2V5VHlwZT1cIiduZXh0J1wiXG4gICAgICAgICAgICBAcmV0dXJuUHJlc3M9XCJmb2N1c0NvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcbiAgICAgICAgICAgIGhpbnQ9XCIqKioqKioqKipcIlxuICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiXG4gICAgICAgICAgICBmb250LXNpemU9XCIxOFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgbWFyZ2luLWJvdHRvbT1cIjI1XCI+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgcmVmPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICA6cmV0dXJuS2V5VHlwZT1cIiduZXh0J1wiXG4gICAgICAgICAgICBAcmV0dXJuUHJlc3M9XCJmb2N1c1N1Ym1pdEJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcbiAgICAgICAgICAgIGhpbnQ9XCJjb25maXJtIFBhc3N3b3JkXCJcbiAgICAgICAgICAgIHNlY3VyZT1cInRydWVcIlxuICAgICAgICAgICAgZm9udC1zaXplPVwiMThcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgIDxCdXR0b24gcmVmPVwic3VibWl0QnV0dG9uXCIgQHRhcD1cInN1Ym1pdFwiIHRleHQ9XCJTaWduIHVwXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCIgLz5cbiAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC9GbGV4Ym94TGF5b3V0PlxuICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4ucGFnZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb3JtIHtcbiAgbWFyZ2luLWxlZnQ6IDMwO1xuICBtYXJnaW4tcmlnaHQ6IDMwO1xuICBmbGV4LWdyb3c6IDI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luLWJvdHRvbTogMTI7XG4gIGhlaWdodDogOTA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaGVhZGVyIHtcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA3MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2MxOWE2Yjtcbn1cblxuLmlucHV0LWZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjU7XG59XG5cbi5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTg7XG4gIHBsYWNlaG9sZGVyLWNvbG9yOiAjYThhOGE4O1xufVxuXG4uaW5wdXQtZmllbGQgLmlucHV0IHtcbiAgZm9udC1zaXplOiA1NDtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgaGVpZ2h0OiA1MDtcbiAgbWFyZ2luOiAzMCA1IDE1IDU7XG4gIGJvcmRlci1yYWRpdXM6IDU7XG4gIGZvbnQtc2l6ZTogMTY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5sb2dpbi1sYWJlbCB7XG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNjtcbn1cblxuLmJvbGQge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9