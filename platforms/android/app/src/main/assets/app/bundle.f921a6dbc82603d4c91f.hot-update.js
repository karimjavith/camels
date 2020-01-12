webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Account.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Invite_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Invite.vue");
/* harmony import */ var _Login_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _shared_firbase_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./_shared/firbase.ts");
/* harmony import */ var _shared_firbase_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shared_firbase_ts__WEBPACK_IMPORTED_MODULE_3__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Account",

  data() {
    return {
      items: [{
        role: 1,
        name: "Invite",
        component: _Invite_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
        type: 1,
        src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      }, {
        name: "Sign out",
        type: 1,
        src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      }]
    };
  },

  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    role: state => state.authenticationModule.userContext.role,

    entitledItems(state) {
      return this.items.filter(x => {
        if (x.type === 1) return true;
        return x.role === this.role;
      });
    }

  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("authenticationModule", {
    clearGlobalLoginState: "signedOut"
  }), {
    onSignOutTap() {
      var _this = this;

      return _asyncToGenerator(function* () {
        var result = yield Object(_shared_firbase_ts__WEBPACK_IMPORTED_MODULE_3__["logout"])();

        _this.clearGlobalLoginState();

        _this.$navigateTo(_Login_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
      })();
    },

    onItemTap(event) {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        if (event.item.name === "Sign out") {
          return yield _this2.onSignOutTap();
        }

        _this2.$navigateTo(event.item.component);
      })();
    }

  })
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BY2NvdW50LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsaUJBREE7O0FBRUE7QUFDQTtBQUNBLGNBQ0E7QUFDQSxlQURBO0FBRUEsc0JBRkE7QUFHQSxzRUFIQTtBQUlBLGVBSkE7QUFLQSxhQUNBO0FBTkEsT0FEQSxFQVNBO0FBQ0Esd0JBREE7QUFFQSxlQUZBO0FBR0EsYUFDQTtBQUpBLE9BVEE7QUFEQTtBQWtCQSxHQXJCQTs7QUFzQkE7QUFDQSw4REFEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEE7QUFJQTs7QUFQQSxJQXRCQTtBQStCQSw2QkFDQTtBQUNBO0FBREEsSUFEQTtBQUlBO0FBQUE7O0FBQUE7QUFDQTs7QUFDQTs7QUFDQTtBQUhBO0FBSUEsS0FSQTs7QUFTQTtBQUFBOztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBSkE7QUFLQTs7QUFkQTtBQS9CQSxHIiwiZmlsZSI6ImJ1bmRsZS5mOTIxYTZkYmM4MjYwM2Q0YzkxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHZ1ZS9jb21wb25lbnRcclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zIH0gZnJvbSBcInZ1ZXhcIjtcclxuaW1wb3J0IEludml0ZSBmcm9tIFwiLi9JbnZpdGUudnVlXCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpbi52dWVcIjtcclxuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSBcIi4uL19zaGFyZWQvZmlyYmFzZS50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiQWNjb3VudFwiLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJvbGU6IDEsXHJcbiAgICAgICAgICBuYW1lOiBcIkludml0ZVwiLFxyXG4gICAgICAgICAgY29tcG9uZW50OiBJbnZpdGUsXHJcbiAgICAgICAgICB0eXBlOiAxLFxyXG4gICAgICAgICAgc3JjOlxyXG4gICAgICAgICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi8xLnBuZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIlNpZ24gb3V0XCIsXHJcbiAgICAgICAgICB0eXBlOiAxLFxyXG4gICAgICAgICAgc3JjOlxyXG4gICAgICAgICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi8xLnBuZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcclxuICAgIHJvbGU6IHN0YXRlID0+IHN0YXRlLmF1dGhlbnRpY2F0aW9uTW9kdWxlLnVzZXJDb250ZXh0LnJvbGUsXHJcbiAgICBlbnRpdGxlZEl0ZW1zKHN0YXRlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcih4ID0+IHtcclxuICAgICAgICBpZiAoeC50eXBlID09PSAxKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4geC5yb2xlID09PSB0aGlzLnJvbGU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pLFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC4uLm1hcEFjdGlvbnMoXCJhdXRoZW50aWNhdGlvbk1vZHVsZVwiLCB7XHJcbiAgICAgIGNsZWFyR2xvYmFsTG9naW5TdGF0ZTogXCJzaWduZWRPdXRcIlxyXG4gICAgfSksXHJcbiAgICBhc3luYyBvblNpZ25PdXRUYXAoKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGxvZ291dCgpO1xyXG4gICAgICB0aGlzLmNsZWFyR2xvYmFsTG9naW5TdGF0ZSgpO1xyXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luKTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBvbkl0ZW1UYXAoZXZlbnQpIHtcclxuICAgICAgaWYgKGV2ZW50Lml0ZW0ubmFtZSA9PT0gXCJTaWduIG91dFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMub25TaWduT3V0VGFwKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhldmVudC5pdGVtLmNvbXBvbmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuPHRlbXBsYXRlPlxyXG4gIDwhLS0gPFNjcm9sbFZpZXcgY2xhc3M9XCJzY3JvbGx2aWV3XCI+IC0tPlxyXG4gIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cclxuICAgIDxMaXN0Vmlld1xyXG4gICAgICBmb3I9XCJpdGVtIGluIGVudGl0bGVkSXRlbXNcIlxyXG4gICAgICBjbGFzcz1cImxpc3QtZ3JvdXBcIlxyXG4gICAgICBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiXHJcbiAgICA+XHJcbiAgICAgIDx2LXRlbXBsYXRlPlxyXG4gICAgICAgIDwhLS0gU2hvd3MgdGhlIGxpc3QgaXRlbSBsYWJlbCBpbiB0aGUgZGVmYXVsdCBjb2xvciBhbmQgc3R5bGUuIC0tPlxyXG4gICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCIgcm93cz1cIipcIiBjb2x1bW5zPVwiYXV0bywgKlwiPlxyXG4gICAgICAgICAgPEltYWdlIHJvdz1cIjBcIiBjb2w9XCIwXCIgOnNyYz1cIml0ZW0uc3JjXCIgY2xhc3M9XCJ0aHVtYiBpbWctY2lyY2xlXCIgLz5cclxuICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMVwiIDp0ZXh0PVwiaXRlbS5uYW1lXCIgLz5cclxuICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgIDwvdi10ZW1wbGF0ZT5cclxuICAgIDwvTGlzdFZpZXc+XHJcbiAgPC9TdGFja0xheW91dD5cclxuICA8IS0tIDwvU2Nyb2xsVmlldz4gLS0+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbi5zY3JvbGx2aWV3IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==