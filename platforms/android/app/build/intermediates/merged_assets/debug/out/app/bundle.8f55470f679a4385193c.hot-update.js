webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Account.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Invite_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Invite.vue");
/* harmony import */ var _shared_firbase_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./_shared/firbase.ts");
/* harmony import */ var _shared_firbase_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shared_firbase_ts__WEBPACK_IMPORTED_MODULE_2__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Account",

  data() {
    return {
      listOfItems: [{
        role: 1,
        name: "Invite"
      }, {
        name: "Sign out",
        role: undefined
      }]
    };
  },

  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    role: state => state.authenticationModule.userContext.role // listOfItems(state) {
    //   return this.listOfItems.filter(x => x.role === state.role);
    // }

  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("authenticationModule", {
    clearGlobalLoginState: "signedOut"
  }), {
    onSignOutTap() {
      var _this = this;

      return _asyncToGenerator(function* () {
        var result = yield Object(_shared_firbase_ts__WEBPACK_IMPORTED_MODULE_2__["logout"])();

        _this.clearGlobalLoginState();

        _this.$navigateTo(Login);
      })();
    },

    onItemTap(event) {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        if (event.name === "Sign out") {
          yield _this2.onSignOutTap();
        }

        yield _this2.$navigateTo(event.name);
      })();
    }

  })
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BY2NvdW50LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLGlCQURBOztBQUVBO0FBQ0E7QUFDQSxvQkFDQTtBQUFBO0FBQUE7QUFBQSxPQURBLEVBRUE7QUFBQTtBQUFBO0FBQUEsT0FGQTtBQURBO0FBTUEsR0FUQTs7QUFVQTtBQUNBLDhEQURBLENBRUE7QUFDQTtBQUNBOztBQUpBLElBVkE7QUFnQkEsNkJBQ0E7QUFDQTtBQURBLElBREE7QUFJQTtBQUFBOztBQUFBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFIQTtBQUlBLEtBUkE7O0FBU0E7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUpBO0FBS0E7O0FBZEE7QUFoQkEsRyIsImZpbGUiOiJidW5kbGUuOGY1NTQ3MGY2NzlhNDM4NTE5M2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8TGlzdFZpZXcgZm9yPVwiaXRlbSBpbiBsaXN0T2ZJdGVtc1wiIEBpdGVtVGFwPVwib25JdGVtVGFwXCI+XHJcbiAgICA8di10ZW1wbGF0ZT5cclxuICAgICAgPCEtLSBTaG93cyB0aGUgbGlzdCBpdGVtIGxhYmVsIGluIHRoZSBkZWZhdWx0IGNvbG9yIGFuZCBzdHlsZS4gLS0+XHJcbiAgICAgIDxMYWJlbCA6dGV4dD1cIml0ZW0ubmFtZVwiIC8+XHJcbiAgICA8L3YtdGVtcGxhdGU+XHJcbiAgPC9MaXN0Vmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zIH0gZnJvbSBcInZ1ZXhcIjtcclxuaW1wb3J0IEludml0ZSBmcm9tIFwiLi9JbnZpdGUudnVlXCI7XHJcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gXCIuLi9fc2hhcmVkL2ZpcmJhc2UudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIkFjY291bnRcIixcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGlzdE9mSXRlbXM6IFtcclxuICAgICAgICB7IHJvbGU6IDEsIG5hbWU6IFwiSW52aXRlXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiU2lnbiBvdXRcIiwgcm9sZTogdW5kZWZpbmVkIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9LFxyXG4gIGNvbXB1dGVkOiBtYXBTdGF0ZSh7XHJcbiAgICByb2xlOiBzdGF0ZSA9PiBzdGF0ZS5hdXRoZW50aWNhdGlvbk1vZHVsZS51c2VyQ29udGV4dC5yb2xlXHJcbiAgICAvLyBsaXN0T2ZJdGVtcyhzdGF0ZSkge1xyXG4gICAgLy8gICByZXR1cm4gdGhpcy5saXN0T2ZJdGVtcy5maWx0ZXIoeCA9PiB4LnJvbGUgPT09IHN0YXRlLnJvbGUpO1xyXG4gICAgLy8gfVxyXG4gIH0pLFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC4uLm1hcEFjdGlvbnMoXCJhdXRoZW50aWNhdGlvbk1vZHVsZVwiLCB7XHJcbiAgICAgIGNsZWFyR2xvYmFsTG9naW5TdGF0ZTogXCJzaWduZWRPdXRcIlxyXG4gICAgfSksXHJcbiAgICBhc3luYyBvblNpZ25PdXRUYXAoKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGxvZ291dCgpO1xyXG4gICAgICB0aGlzLmNsZWFyR2xvYmFsTG9naW5TdGF0ZSgpO1xyXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luKTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBvbkl0ZW1UYXAoZXZlbnQpIHtcclxuICAgICAgaWYgKGV2ZW50Lm5hbWUgPT09IFwiU2lnbiBvdXRcIikge1xyXG4gICAgICAgIGF3YWl0IHRoaXMub25TaWduT3V0VGFwKCk7XHJcbiAgICAgIH1cclxuICAgICAgYXdhaXQgdGhpcy4kbmF2aWdhdGVUbyhldmVudC5uYW1lKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=