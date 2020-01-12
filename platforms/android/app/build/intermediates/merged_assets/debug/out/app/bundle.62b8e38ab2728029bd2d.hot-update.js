webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Login_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _Invite_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Invite.vue");
/* harmony import */ var _Account_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/Account.vue");
/* harmony import */ var _types_TState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./types/TState.ts");
/* harmony import */ var _types_TState__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_types_TState__WEBPACK_IMPORTED_MODULE_4__);
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Home",
  components: {
    InviteComponent: _Invite_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      this.checkAuthentication();
    });
  },

  data() {
    return {
      msg: "Hello world!!",
      currentView: null
    };
  },

  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    token: state => state.authenticationModule.userContext.token,
    role: state => state.authenticationModule.userContext.role
  }),
  methods: {
    redirectToLogin() {
      this.$navigateTo("Login");
    },

    checkAuthentication() {
      if (!this.token) {
        this.$navigateTo("Login");
      }
    },

    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },

    onHomeTap() {
      this.msg = "Hello world!!";
    }

  }
});

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        [
          _c(
            "StackLayout",
            { attrs: { orientation: "horizontal" } },
            [
              _c("NavigationButton", {
                attrs: { text: "Back", "android.systemIcon": "ic_menu_back" },
                on: { tap: _vm.onNavigationButtonTap }
              }),
              _c("Button", {
                attrs: { text: "menu" },
                on: { tap: _vm.onMenuTap }
              }),
              _c("Label", {
                attrs: {
                  text: "Camels",
                  fontSize: "18",
                  verticalAlignment: "center"
                }
              }),
              _c("Button", {
                staticClass: "drawer-item",
                attrs: { text: "Sign out" },
                on: { tap: _vm.onSignOutTap }
              })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "BottomNavigation",
        { attrs: { selectedIndex: "0" } },
        [
          _c(
            "TabStrip",
            [
              _c(
                "TabStripItem",
                [
                  _c("Label", { attrs: { text: "Home" } }),
                  _c("Image", {
                    staticClass: "fas t-36",
                    attrs: { src: "font://&#xf015;" }
                  })
                ],
                1
              ),
              _c(
                "TabStripItem",
                { staticClass: "special" },
                [
                  _c("Label", { attrs: { text: "Matches" } }),
                  _c("Image", {
                    staticClass: "fas t-36",
                    attrs: { src: "font://&#xf007;" }
                  })
                ],
                1
              ),
              _c(
                "TabStripItem",
                { staticClass: "special" },
                [
                  _c("Label", { attrs: { text: "Me" } }),
                  _c("Image", {
                    staticClass: "fas t-36",
                    attrs: { src: "font://&#xf00e;" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "TabContentItem",
            [
              _c(
                "StackLayout",
                { attrs: { orientation: "Horizontal" } },
                [
                  _c("Label", { staticClass: "h2", attrs: { text: "Home" } }),
                  _c("Label", { attrs: { text: _vm.msg } })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "TabContentItem",
            [
              _c(
                "StackLayout",
                { attrs: { orientation: "Horizontal" } },
                [
                  _c("Label", {
                    staticClass: "h2",
                    attrs: { text: "Matches" }
                  }),
                  _c("Label", { attrs: { text: _vm.msg } })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "TabContentItem",
            [
              _c(
                "StackLayout",
                [
                  _c("Label", {
                    staticClass: "h2",
                    attrs: { text: "Account" }
                  }),
                  _c("Account")
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzQ5OWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FEQTtBQUVBO0FBQUE7QUFBQSxHQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FGQTtBQUdBLEdBUEE7O0FBUUE7QUFDQTtBQUNBLDBCQURBO0FBRUE7QUFGQTtBQUlBLEdBYkE7O0FBZUE7QUFDQSxnRUFEQTtBQUVBO0FBRkEsSUFmQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQSxLQUhBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FSQTs7QUFTQTtBQUNBO0FBQ0EsS0FYQTs7QUFZQTtBQUNBO0FBQ0E7O0FBZEE7QUFuQkEsRzs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsNEJBQTRCLEVBQUU7QUFDcEQ7QUFDQTtBQUNBLHdCQUF3QixxREFBcUQ7QUFDN0UscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZjtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxxQkFBcUIsRUFBRTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixTQUFTLGVBQWUsRUFBRTtBQUN6RDtBQUNBO0FBQ0EsNEJBQTRCLHNCQUFzQjtBQUNsRCxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQSwrQkFBK0IsU0FBUyxrQkFBa0IsRUFBRTtBQUM1RDtBQUNBO0FBQ0EsNEJBQTRCLHNCQUFzQjtBQUNsRCxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQSwrQkFBK0IsU0FBUyxhQUFhLEVBQUU7QUFDdkQ7QUFDQTtBQUNBLDRCQUE0QixzQkFBc0I7QUFDbEQsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyw0QkFBNEIsRUFBRTtBQUN4RDtBQUNBLCtCQUErQiw0QkFBNEIsZUFBZSxFQUFFO0FBQzVFLCtCQUErQixTQUFTLGdCQUFnQixFQUFFO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyw0QkFBNEIsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CLCtCQUErQixTQUFTLGdCQUFnQixFQUFFO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS42MmI4ZTM4YWIyNzI4MDI5YmQyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHZ1ZS9jb21wb25lbnRcblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zIH0gZnJvbSBcInZ1ZXhcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpbi52dWVcIjtcbmltcG9ydCBJbnZpdGVDb21wb25lbnQgZnJvbSBcIi4vSW52aXRlLnZ1ZVwiO1xuaW1wb3J0IEFjY291bnQgZnJvbSBcIi4vQWNjb3VudC52dWVcIjtcbmltcG9ydCB7IFRBdXRoU3RhdGUgfSBmcm9tIFwiLi4vdHlwZXMvVFN0YXRlXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiSG9tZVwiLFxuICBjb21wb25lbnRzOiB7IEludml0ZUNvbXBvbmVudCB9LFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuY2hlY2tBdXRoZW50aWNhdGlvbigpO1xuICAgIH0pO1xuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtc2c6IFwiSGVsbG8gd29ybGQhIVwiLFxuICAgICAgY3VycmVudFZpZXc6IG51bGxcbiAgICB9O1xuICB9LFxuXG4gIGNvbXB1dGVkOiBtYXBTdGF0ZSh7XG4gICAgdG9rZW46IHN0YXRlID0+IHN0YXRlLmF1dGhlbnRpY2F0aW9uTW9kdWxlLnVzZXJDb250ZXh0LnRva2VuLFxuICAgIHJvbGU6IHN0YXRlID0+IHN0YXRlLmF1dGhlbnRpY2F0aW9uTW9kdWxlLnVzZXJDb250ZXh0LnJvbGVcbiAgfSksXG4gIG1ldGhvZHM6IHtcbiAgICByZWRpcmVjdFRvTG9naW4oKSB7XG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFwiTG9naW5cIik7XG4gICAgfSxcbiAgICBjaGVja0F1dGhlbnRpY2F0aW9uKCkge1xuICAgICAgaWYgKCF0aGlzLnRva2VuKSB7XG4gICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oXCJMb2dpblwiKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uTmF2aWdhdGlvbkJ1dHRvblRhcCgpIHtcbiAgICAgIEZyYW1lLnRvcG1vc3QoKS5nb0JhY2soKTtcbiAgICB9LFxuICAgIG9uSG9tZVRhcCgpIHtcbiAgICAgIHRoaXMubXNnID0gXCJIZWxsbyB3b3JsZCEhXCI7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPFBhZ2U+XG4gICAgPEFjdGlvbkJhcj5cbiAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b25cbiAgICAgICAgICB0ZXh0PVwiQmFja1wiXG4gICAgICAgICAgYW5kcm9pZC5zeXN0ZW1JY29uPVwiaWNfbWVudV9iYWNrXCJcbiAgICAgICAgICBAdGFwPVwib25OYXZpZ2F0aW9uQnV0dG9uVGFwXCJcbiAgICAgICAgPjwvTmF2aWdhdGlvbkJ1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVwibWVudVwiIEB0YXA9XCJvbk1lbnVUYXBcIiAvPlxuICAgICAgICA8TGFiZWwgdGV4dD1cIkNhbWVsc1wiIGZvbnRTaXplPVwiMThcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG5cbiAgICAgICAgPEJ1dHRvbiBjbGFzcz1cImRyYXdlci1pdGVtXCIgdGV4dD1cIlNpZ24gb3V0XCIgQHRhcD1cIm9uU2lnbk91dFRhcFwiIC8+XG4gICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwvQWN0aW9uQmFyPlxuICAgIDxCb3R0b21OYXZpZ2F0aW9uIHNlbGVjdGVkSW5kZXg9XCIwXCI+XG4gICAgICA8IS0tIFRoZSBib3R0b20gdGFiIFVJIGlzIGNyZWF0ZWQgdmlhIFRhYlN0cmlwICh0aGUgY29udGFpbmllcikgYW5kIFRhYlN0cmlwSXRlbSAoZm9yIGVhY2ggdGFiKS0tPlxuICAgICAgPFRhYlN0cmlwPlxuICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiSG9tZVwiPjwvTGFiZWw+XG4gICAgICAgICAgPEltYWdlIHNyYz1cImZvbnQ6Ly8mI3hmMDE1O1wiIGNsYXNzPVwiZmFzIHQtMzZcIj48L0ltYWdlPlxuICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgPFRhYlN0cmlwSXRlbSBjbGFzcz1cInNwZWNpYWxcIj5cbiAgICAgICAgICA8TGFiZWwgdGV4dD1cIk1hdGNoZXNcIj48L0xhYmVsPlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCJmb250Oi8vJiN4ZjAwNztcIiBjbGFzcz1cImZhcyB0LTM2XCI+PC9JbWFnZT5cbiAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgIDxUYWJTdHJpcEl0ZW0gY2xhc3M9XCJzcGVjaWFsXCI+XG4gICAgICAgICAgPExhYmVsIHRleHQ9XCJNZVwiPjwvTGFiZWw+XG4gICAgICAgICAgPEltYWdlIHNyYz1cImZvbnQ6Ly8mI3hmMDBlO1wiIGNsYXNzPVwiZmFzIHQtMzZcIj48L0ltYWdlPlxuICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgIDwvVGFiU3RyaXA+XG5cbiAgICAgIDwhLS0gVGhlIG51bWJlciBvZiBUYWJDb250ZW50SXRlbSBjb21wb25lbnRzIHNob3VsZCBjb3Jlc3BvbmQgdG8gdGhlIG51bWJlciBvZiBUYWJTdHJpcEl0ZW0gY29tcG9uZW50cyAtLT5cbiAgICAgIDxUYWJDb250ZW50SXRlbT5cbiAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiSG9yaXpvbnRhbFwiPlxuICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiSG9tZVwiIGNsYXNzPVwiaDJcIj48L0xhYmVsPlxuXG4gICAgICAgICAgPExhYmVsIDp0ZXh0PVwibXNnXCI+PC9MYWJlbD5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG4gICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cIkhvcml6b250YWxcIj5cbiAgICAgICAgICA8TGFiZWwgdGV4dD1cIk1hdGNoZXNcIiBjbGFzcz1cImgyXCI+PC9MYWJlbD5cbiAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJtc2dcIj48L0xhYmVsPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICAgIDxUYWJDb250ZW50SXRlbT5cbiAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiQWNjb3VudFwiIGNsYXNzPVwiaDJcIj48L0xhYmVsPlxuICAgICAgICAgIDxBY2NvdW50IC8+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgIDwvQm90dG9tTmF2aWdhdGlvbj5cbiAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZD5cbkFjdGlvbkJhciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDE2O1xufVxuXG4ubWVzc2FnZSB7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi8qIGJvdHRvbS1uYXZpZ2F0aW9uICovXG5UYWJTdHJpcEl0ZW0udGFic3RyaXBpdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbn1cblxuVGFiU3RyaXBJdGVtLnRhYnN0cmlwaXRlbTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcbn1cblxuVGFiQ29udGVudEl0ZW0uZmlyc3QtdGFiY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHNlYXNoZWxsO1xuICBjb2xvcjogb2xpdmU7XG59XG5UYWJDb250ZW50SXRlbS5zZWNvbmQtdGFiY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JheTtcbiAgY29sb3I6IGFxdWFtYXJpbmU7XG59XG5UYWJDb250ZW50SXRlbS50aGlyZC10YWJjb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbn1cblxuLmZhcyB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIiwgXCJmYS1zb2xpZC05MDBcIjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLnQtMzYge1xuICBmb250LXNpemU6IDM2O1xufVxuPC9zdHlsZT5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJOYXZpZ2F0aW9uQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJhY2tcIiwgXCJhbmRyb2lkLnN5c3RlbUljb25cIjogXCJpY19tZW51X2JhY2tcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uTmF2aWdhdGlvbkJ1dHRvblRhcCB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJtZW51XCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbk1lbnVUYXAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQ2FtZWxzXCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOFwiLFxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJhd2VyLWl0ZW1cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlNpZ24gb3V0XCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vblNpZ25PdXRUYXAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJCb3R0b21OYXZpZ2F0aW9uXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgc2VsZWN0ZWRJbmRleDogXCIwXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlRhYlN0cmlwXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiU3RyaXBJdGVtXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiSG9tZVwiIH0gfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzIHQtMzZcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcImZvbnQ6Ly8mI3hmMDE1O1wiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiU3RyaXBJdGVtXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzcGVjaWFsXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJNYXRjaGVzXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgdC0zNlwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiZm9udDovLyYjeGYwMDc7XCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJUYWJTdHJpcEl0ZW1cIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNwZWNpYWxcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIk1lXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgdC0zNlwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiZm9udDovLyYjeGYwMGU7XCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJUYWJDb250ZW50SXRlbVwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJIb3Jpem9udGFsXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJoMlwiLCBhdHRyczogeyB0ZXh0OiBcIkhvbWVcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IF92bS5tc2cgfSB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlRhYkNvbnRlbnRJdGVtXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcIkhvcml6b250YWxcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgyXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTWF0Y2hlc1wiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IF92bS5tc2cgfSB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlRhYkNvbnRlbnRJdGVtXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJBY2NvdW50XCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkFjY291bnRcIilcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=