webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/MatchForm.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./views/Login.vue");
/* harmony import */ var _shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./_shared/firebase/users.ts");
/* harmony import */ var _shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MatchForm',

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
        var result = yield Object(_shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_1__["signup"])(_this.user.email, _this.user.password);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvTWF0Y2hGb3JtLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQURBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQURBO0FBRUEsb0JBRkE7QUFHQTtBQUhBO0FBREE7QUFPQSxHQVZBOztBQVdBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7O0FBSUE7QUFDQTtBQUNBLEtBTkE7O0FBT0E7QUFDQTtBQUNBLEtBVEE7O0FBVUE7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLFNBRkEsTUFFQTtBQUNBO0FBQ0E7QUFSQTtBQVNBOztBQW5CQTtBQVhBLEciLCJmaWxlIjoiYnVuZGxlLjQ5YjkxMDAwMTBkYjIzYzE4NzhkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuaW1wb3J0IExvZ2luIGZyb20gJy4vTG9naW4udnVlJ1xuaW1wb3J0IHsgc2lnbnVwIH0gZnJvbSAnLi4vX3NoYXJlZC9maXJlYmFzZS91c2Vycy50cydcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ01hdGNoRm9ybScsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIGNvbmZpcm1QYXNzd29yZDogJycsXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGZvY3VzUGFzc3dvcmQoKSB7XG4gICAgICB0aGlzLiRyZWZzLnBhc3N3b3JkLm5hdGl2ZVZpZXcuZm9jdXMoKVxuICAgIH0sXG4gICAgZm9jdXNDb25maXJtUGFzc3dvcmQoKSB7XG4gICAgICB0aGlzLiRyZWZzLmNvbmZpcm1QYXNzd29yZC5uYXRpdmVWaWV3LmZvY3VzKClcbiAgICB9LFxuICAgIGZvY3VzU3VibWl0QnV0dG9uKCkge1xuICAgICAgdGhpcy4kcmVmcy5zdWJtaXRCdXR0b24ubmF0aXZlVmlldy5mb2N1cygpXG4gICAgfSxcbiAgICBhc3luYyBzdWJtaXQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnU2lnbiB1cCBmaXJlZCcpXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWdudXAodGhpcy51c2VyLmVtYWlsLCB0aGlzLnVzZXIucGFzc3dvcmQpXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICBpZiAocmVzdWx0ICYmICFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQocmVzdWx0Lm1lc3NhZ2UpXG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxTdGFja0xheW91dCBjbGFzcz1cIm50LWZvcm0gZm9ybVwiPlxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm50LWlucHV0IGlucHV0LWZpZWxkXCIgbWFyZ2luLWJvdHRvbT1cIjI1XCI+XG4gICAgICA8VGV4dEZpZWxkXG4gICAgICAgIHJlZj1cImVtYWlsXCJcbiAgICAgICAgdi1tb2RlbD1cInVzZXIuZW1haWxcIlxuICAgICAgICBAcmV0dXJuUHJlc3M9XCJmb2N1c1Bhc3N3b3JkXCJcbiAgICAgICAgcmV0dXJuS2V5VHlwZT1cIm5leHRcIlxuICAgICAgICBjbGFzcz1cIm50LWlucHV0IGlucHV0XCJcbiAgICAgICAgaGludD1cImNhbWVsQGdtYWlsLmNvbVwiXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgIGZvbnQtc2l6ZT1cIjE4XCJcbiAgICAgIC8+XG4gICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XG4gICAgPC9TdGFja0xheW91dD5cbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJudC1pbnB1dCBpbnB1dC1maWVsZFwiIG1hcmdpbi1ib3R0b209XCIyNVwiPlxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICByZWY9XCJwYXNzd29yZFwiXG4gICAgICAgIHYtbW9kZWw9XCJ1c2VyLnBhc3N3b3JkXCJcbiAgICAgICAgQHJldHVyblByZXNzPVwiZm9jdXNDb25maXJtUGFzc3dvcmRcIlxuICAgICAgICByZXR1cm5LZXlUeXBlPVwibmV4dFwiXG4gICAgICAgIGNsYXNzPVwibnQtaW5wdXQgaW5wdXRcIlxuICAgICAgICBoaW50PVwiKioqKioqKioqXCJcbiAgICAgICAgc2VjdXJlPVwidHJ1ZVwiXG4gICAgICAgIGZvbnQtc2l6ZT1cIjE4XCJcbiAgICAgIC8+XG4gICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XG4gICAgPC9TdGFja0xheW91dD5cbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJudC1pbnB1dCBpbnB1dC1maWVsZFwiIG1hcmdpbi1ib3R0b209XCIyNVwiPlxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICByZWY9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICB2LW1vZGVsPVwidXNlci5jb25maXJtUGFzc3dvcmRcIlxuICAgICAgICBAcmV0dXJuUHJlc3M9XCJmb2N1c1N1Ym1pdEJ1dHRvblwiXG4gICAgICAgIHJldHVybktleVR5cGU9XCJuZXh0XCJcbiAgICAgICAgY2xhc3M9XCJudC1pbnB1dCBpbnB1dFwiXG4gICAgICAgIGhpbnQ9XCJjb25maXJtIFBhc3N3b3JkXCJcbiAgICAgICAgc2VjdXJlPVwidHJ1ZVwiXG4gICAgICAgIGZvbnQtc2l6ZT1cIjE4XCJcbiAgICAgIC8+XG4gICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XG4gICAgPC9TdGFja0xheW91dD5cblxuICAgIDxCdXR0b25cbiAgICAgIHJlZj1cInN1Ym1pdEJ1dHRvblwiXG4gICAgICBAdGFwPVwic3VibWl0XCJcbiAgICAgIHRleHQ9XCJTaWduIHVwXCJcbiAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMCAtcm91bmRlZC1zbSAtcHJpbWFyeVwiXG4gICAgLz5cbiAgPC9TdGFja0xheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbi5mb3JtIHtcbiAgbWFyZ2luLWxlZnQ6IDMwO1xuICBtYXJnaW4tcmlnaHQ6IDMwO1xuICBmbGV4LWdyb3c6IDI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5pbnB1dC1maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDI1O1xufVxuXG4uaW5wdXQge1xuICBmb250LXNpemU6IDE4O1xuICBwbGFjZWhvbGRlci1jb2xvcjogI2E4YThhODtcbn1cblxuLmlucHV0LWZpZWxkIC5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogNTQ7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGhlaWdodDogNTA7XG4gIG1hcmdpbjogMzAgNSAxNSA1O1xuICBib3JkZXItcmFkaXVzOiA1O1xuICBmb250LXNpemU6IDE2O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubG9naW4tbGFiZWwge1xuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTY7XG59XG5cbi5ib2xkIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==