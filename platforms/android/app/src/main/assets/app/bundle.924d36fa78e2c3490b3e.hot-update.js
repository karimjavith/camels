webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Invite.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_firbase_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./_shared/firbase.ts");
/* harmony import */ var _shared_firbase_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shared_firbase_ts__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      email: ""
    };
  },

  methods: {
    createguid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    },

    focusSubmitButton() {
      this.$refs.submitButton.nativeView.focus();
    },

    sendInvite() {
      var _this = this;

      return _asyncToGenerator(function* () {
        var result = yield Object(_shared_firbase_ts__WEBPACK_IMPORTED_MODULE_0__["sendSignInLink"])(_this.email);

        if (!result.isError) {
          var createUserResult = yield Object(_shared_firbase_ts__WEBPACK_IMPORTED_MODULE_0__["addInvitesToCollection"])(_this.email);
          console.log(result);

          if (result && !result.isError) {
            _this.email = "";
          }
        }
      })();
    },

    onNavigationButtonTap() {
      this.$navigateBack();
    }

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9JbnZpdGUudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQSxHQUxBOztBQU1BO0FBQ0E7QUFDQSwrRUFDQSxDQURBLEVBRUE7QUFDQTtBQUFBLFlBQ0EsZ0NBREE7QUFFQTtBQUNBLE9BTkE7QUFPQSxLQVRBOztBQVVBO0FBQ0E7QUFDQSxLQVpBOztBQWFBO0FBQUE7O0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVNBLEtBdEJBOztBQXdCQTtBQUNBO0FBQ0E7O0FBMUJBO0FBTkEsRyIsImZpbGUiOiJidW5kbGUuOTI0ZDM2ZmE3OGUyYzM0OTBiM2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XHJcbmltcG9ydCB7XHJcbiAgc2VuZFNpZ25JbkxpbmssXHJcbiAgYWRkSW52aXRlc1RvQ29sbGVjdGlvbixcclxuICBjcmVhdGVVc2VyXHJcbn0gZnJvbSBcIi4uL19zaGFyZWQvZmlyYmFzZS50c1wiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVtYWlsOiBcIlwiXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgY3JlYXRlZ3VpZCgpIHtcclxuICAgICAgcmV0dXJuIFwieHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4XCIucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihcclxuICAgICAgICBjXHJcbiAgICAgICkge1xyXG4gICAgICAgIHZhciByID0gKE1hdGgucmFuZG9tKCkgKiAxNikgfCAwLFxyXG4gICAgICAgICAgdiA9IGMgPT0gXCJ4XCIgPyByIDogKHIgJiAweDMpIHwgMHg4O1xyXG4gICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZm9jdXNTdWJtaXRCdXR0b24oKSB7XHJcbiAgICAgIHRoaXMuJHJlZnMuc3VibWl0QnV0dG9uLm5hdGl2ZVZpZXcuZm9jdXMoKTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBzZW5kSW52aXRlKCkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kU2lnbkluTGluayh0aGlzLmVtYWlsKTtcclxuICAgICAgaWYgKCFyZXN1bHQuaXNFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZVVzZXJSZXN1bHQgPSBhd2FpdCBhZGRJbnZpdGVzVG9Db2xsZWN0aW9uKHRoaXMuZW1haWwpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAmJiAhcmVzdWx0LmlzRXJyb3IpIHtcclxuICAgICAgICAgIHRoaXMuZW1haWwgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbk5hdmlnYXRpb25CdXR0b25UYXAoKSB7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlQmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48dGVtcGxhdGU+XHJcbiAgPFBhZ2U+XHJcbiAgICA8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIj5cclxuICAgICAgPEFjdGlvbkJhcj5cclxuICAgICAgICA8QnV0dG9uIHRleHQ9XCJCYWNrXCIgQHRhcD1cIm9uTmF2aWdhdGlvbkJ1dHRvblRhcFwiIC8+XHJcbiAgICAgIDwvQWN0aW9uQmFyPlxyXG4gICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJmb3JtXCI+XHJcbiAgICAgICAgPExhYmVsIGNsYXNzPVwiaGVhZGVyXCIgdGV4dD1cIkludml0ZSB0aGUgY2FtZWxcIiAvPlxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgbWFyZ2luQm90dG9tPVwiMjVcIj5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIGhpbnQ9XCJuYW1lQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCJcclxuICAgICAgICAgICAgdi1tb2RlbD1cImVtYWlsXCJcclxuICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cIm5leHRcIlxyXG4gICAgICAgICAgICBAcmV0dXJuUHJlc3M9XCJmb2N1c1N1Ym1pdEJ1dHRvblwiXHJcbiAgICAgICAgICAgIGZvbnRTaXplPVwiMThcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICByZWY9XCJzdWJtaXRCdXR0b25cIlxyXG4gICAgICAgICAgdGV4dD1cIlNlbmQgSW52aXRlXCJcclxuICAgICAgICAgIEB0YXA9XCJzZW5kSW52aXRlXCJcclxuICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9TdGFja0xheW91dD5cclxuICAgIDwvRmxleGJveExheW91dD5cclxuICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbkFjdGlvbkJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uZm9ybSB7XHJcbiAgcGFkZGluZzogMTA7XHJcbiAgZmxleC1ncm93OiAyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3MDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuICAuaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxODtcclxuICAgIHBsYWNlaG9sZGVyLWNvbG9yOiAjYThhOGE4O1xyXG4gIH1cclxufVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9