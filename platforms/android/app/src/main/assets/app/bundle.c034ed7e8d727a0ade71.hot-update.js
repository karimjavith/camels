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
      }],
      showList: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BY2NvdW50LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsaUJBREE7O0FBRUE7QUFDQTtBQUNBLGNBQ0E7QUFDQSxlQURBO0FBRUEsc0JBRkE7QUFHQSxzRUFIQTtBQUlBLGVBSkE7QUFLQSxhQUNBO0FBTkEsT0FEQSxFQVNBO0FBQ0Esd0JBREE7QUFFQSxlQUZBO0FBR0EsYUFDQTtBQUpBLE9BVEEsQ0FEQTtBQWlCQTtBQWpCQTtBQW1CQSxHQXRCQTs7QUF1QkE7QUFDQSw4REFEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEE7QUFJQTs7QUFQQSxJQXZCQTtBQWdDQSw2QkFDQTtBQUNBO0FBREEsSUFEQTtBQUlBO0FBQUE7O0FBQUE7QUFDQTs7QUFDQTs7QUFDQTtBQUhBO0FBSUEsS0FSQTs7QUFTQTtBQUFBOztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBSkE7QUFLQTs7QUFkQTtBQWhDQSxHIiwiZmlsZSI6ImJ1bmRsZS5jMDM0ZWQ3ZThkNzI3YTBhZGU3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHZ1ZS9jb21wb25lbnRcclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zIH0gZnJvbSBcInZ1ZXhcIjtcclxuaW1wb3J0IEludml0ZSBmcm9tIFwiLi9JbnZpdGUudnVlXCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpbi52dWVcIjtcclxuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSBcIi4uL19zaGFyZWQvZmlyYmFzZS50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiQWNjb3VudFwiLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJvbGU6IDEsXHJcbiAgICAgICAgICBuYW1lOiBcIkludml0ZVwiLFxyXG4gICAgICAgICAgY29tcG9uZW50OiBJbnZpdGUsXHJcbiAgICAgICAgICB0eXBlOiAxLFxyXG4gICAgICAgICAgc3JjOlxyXG4gICAgICAgICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi8xLnBuZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIlNpZ24gb3V0XCIsXHJcbiAgICAgICAgICB0eXBlOiAxLFxyXG4gICAgICAgICAgc3JjOlxyXG4gICAgICAgICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi8xLnBuZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBzaG93TGlzdDogdHJ1ZVxyXG4gICAgfTtcclxuICB9LFxyXG4gIGNvbXB1dGVkOiBtYXBTdGF0ZSh7XHJcbiAgICByb2xlOiBzdGF0ZSA9PiBzdGF0ZS5hdXRoZW50aWNhdGlvbk1vZHVsZS51c2VyQ29udGV4dC5yb2xlLFxyXG4gICAgZW50aXRsZWRJdGVtcyhzdGF0ZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoeCA9PiB7XHJcbiAgICAgICAgaWYgKHgudHlwZSA9PT0gMSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHgucm9sZSA9PT0gdGhpcy5yb2xlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAuLi5tYXBBY3Rpb25zKFwiYXV0aGVudGljYXRpb25Nb2R1bGVcIiwge1xyXG4gICAgICBjbGVhckdsb2JhbExvZ2luU3RhdGU6IFwic2lnbmVkT3V0XCJcclxuICAgIH0pLFxyXG4gICAgYXN5bmMgb25TaWduT3V0VGFwKCkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBsb2dvdXQoKTtcclxuICAgICAgdGhpcy5jbGVhckdsb2JhbExvZ2luU3RhdGUoKTtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhMb2dpbik7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgb25JdGVtVGFwKGV2ZW50KSB7XHJcbiAgICAgIGlmIChldmVudC5pdGVtLm5hbWUgPT09IFwiU2lnbiBvdXRcIikge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLm9uU2lnbk91dFRhcCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oZXZlbnQuaXRlbS5jb21wb25lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbjx0ZW1wbGF0ZT5cclxuICA8IS0tIDxTY3JvbGxWaWV3IGNsYXNzPVwic2Nyb2xsdmlld1wiPiAtLT5cclxuICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XHJcbiAgICA8TGlzdFZpZXdcclxuICAgICAgZm9yPVwiaXRlbSBpbiBlbnRpdGxlZEl0ZW1zXCJcclxuICAgICAgY2xhc3M9XCJsaXN0LWdyb3VwXCJcclxuICAgICAgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIlxyXG4gICAgPlxyXG4gICAgICA8di10ZW1wbGF0ZT5cclxuICAgICAgICA8IS0tIFNob3dzIHRoZSBsaXN0IGl0ZW0gbGFiZWwgaW4gdGhlIGRlZmF1bHQgY29sb3IgYW5kIHN0eWxlLiAtLT5cclxuICAgICAgICA8R3JpZExheW91dCBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiIHJvd3M9XCIqXCIgY29sdW1ucz1cImF1dG8sICpcIj5cclxuICAgICAgICAgIDxJbWFnZSByb3c9XCIwXCIgY29sPVwiMFwiIDpzcmM9XCJpdGVtLnNyY1wiIGNsYXNzPVwidGh1bWIgaW1nLWNpcmNsZVwiIC8+XHJcbiAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjFcIiA6dGV4dD1cIml0ZW0ubmFtZVwiIC8+XHJcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICA8L3YtdGVtcGxhdGU+XHJcbiAgICA8L0xpc3RWaWV3PlxyXG4gIDwvU3RhY2tMYXlvdXQ+XHJcbiAgPCEtLSA8L1Njcm9sbFZpZXc+IC0tPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4uc2Nyb2xsdmlldyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=