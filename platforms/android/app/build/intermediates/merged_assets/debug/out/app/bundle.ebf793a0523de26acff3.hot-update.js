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
    role: state => state.authenticationModule.userContext.role,

    listOfItems(state) {
      return this.listOfItems.filter(x => x.role === state.role);
    }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BY2NvdW50LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLGlCQURBOztBQUVBO0FBQ0E7QUFDQSxvQkFDQTtBQUFBO0FBQUE7QUFBQSxPQURBLEVBRUE7QUFBQTtBQUFBO0FBQUEsT0FGQTtBQURBO0FBTUEsR0FUQTs7QUFVQTtBQUNBLDhEQURBOztBQUVBO0FBQ0E7QUFDQTs7QUFKQSxJQVZBO0FBZ0JBLDZCQUNBO0FBQ0E7QUFEQSxJQURBO0FBSUE7QUFBQTs7QUFBQTtBQUNBOztBQUNBOztBQUNBO0FBSEE7QUFJQSxLQVJBOztBQVNBO0FBQUE7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFKQTtBQUtBOztBQWRBO0FBaEJBLEciLCJmaWxlIjoiYnVuZGxlLmViZjc5M2EwNTIzZGUyNmFjZmYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPExpc3RWaWV3IGZvcj1cIml0ZW0gaW4gbGlzdE9mSXRlbXNcIiBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiPlxyXG4gICAgPHYtdGVtcGxhdGU+XHJcbiAgICAgIDwhLS0gU2hvd3MgdGhlIGxpc3QgaXRlbSBsYWJlbCBpbiB0aGUgZGVmYXVsdCBjb2xvciBhbmQgc3R5bGUuIC0tPlxyXG4gICAgICA8TGFiZWwgOnRleHQ9XCJpdGVtLm5hbWVcIiAvPlxyXG4gICAgPC92LXRlbXBsYXRlPlxyXG4gIDwvTGlzdFZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBtYXBTdGF0ZSwgbWFwQWN0aW9ucyB9IGZyb20gXCJ2dWV4XCI7XHJcbmltcG9ydCBJbnZpdGUgZnJvbSBcIi4vSW52aXRlLnZ1ZVwiO1xyXG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tIFwiLi4vX3NoYXJlZC9maXJiYXNlLnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJBY2NvdW50XCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxpc3RPZkl0ZW1zOiBbXHJcbiAgICAgICAgeyByb2xlOiAxLCBuYW1lOiBcIkludml0ZVwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIlNpZ24gb3V0XCIsIHJvbGU6IHVuZGVmaW5lZCB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfSxcclxuICBjb21wdXRlZDogbWFwU3RhdGUoe1xyXG4gICAgcm9sZTogc3RhdGUgPT4gc3RhdGUuYXV0aGVudGljYXRpb25Nb2R1bGUudXNlckNvbnRleHQucm9sZSxcclxuICAgIGxpc3RPZkl0ZW1zKHN0YXRlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmxpc3RPZkl0ZW1zLmZpbHRlcih4ID0+IHgucm9sZSA9PT0gc3RhdGUucm9sZSk7XHJcbiAgICB9XHJcbiAgfSksXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLi4ubWFwQWN0aW9ucyhcImF1dGhlbnRpY2F0aW9uTW9kdWxlXCIsIHtcclxuICAgICAgY2xlYXJHbG9iYWxMb2dpblN0YXRlOiBcInNpZ25lZE91dFwiXHJcbiAgICB9KSxcclxuICAgIGFzeW5jIG9uU2lnbk91dFRhcCgpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbG9nb3V0KCk7XHJcbiAgICAgIHRoaXMuY2xlYXJHbG9iYWxMb2dpblN0YXRlKCk7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTG9naW4pO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIG9uSXRlbVRhcChldmVudCkge1xyXG4gICAgICBpZiAoZXZlbnQubmFtZSA9PT0gXCJTaWduIG91dFwiKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5vblNpZ25PdXRUYXAoKTtcclxuICAgICAgfVxyXG4gICAgICBhd2FpdCB0aGlzLiRuYXZpZ2F0ZVRvKGV2ZW50Lm5hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+PC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==