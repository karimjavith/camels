webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/Account.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Invite_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./views/Invite.vue");
/* harmony import */ var _UserList_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./views/UserList.vue");
/* harmony import */ var _Login_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./views/Login.vue");
/* harmony import */ var _components_ListScrollView_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/ListScrollView.vue");
/* harmony import */ var _shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./_shared/firebase/users.ts");
/* harmony import */ var _shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./_shared/enum.ts");
/* harmony import */ var _shared_enum__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shared_enum__WEBPACK_IMPORTED_MODULE_6__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Account',
  components: {
    ListScrollView: _components_ListScrollView_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },

  data() {
    return {
      items: [{
        role: _shared_enum__WEBPACK_IMPORTED_MODULE_6__["AppRoles"].Admin,
        name: 'Invite',
        component: _Invite_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
        icon: 'fa-user-plus'
      }, {
        role: _shared_enum__WEBPACK_IMPORTED_MODULE_6__["AppRoles"].Admin,
        name: 'Users',
        component: _UserList_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
        icon: 'fa-user'
      }, {
        role: _shared_enum__WEBPACK_IMPORTED_MODULE_6__["AppRoles"].User,
        name: 'Sign out',
        icon: 'fa-power-off'
      }]
    };
  },

  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    role: state => state.authenticationModule.userContext.role,

    entitledItems(state) {
      return this.items.filter(x => {
        if (x.role === _shared_enum__WEBPACK_IMPORTED_MODULE_6__["AppRoles"].User) return true;
        return x.role === this.role;
      });
    }

  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('authenticationModule', {
    clearGlobalLoginState: 'signedOut'
  }), {
    onSignOutTap() {
      var _this = this;

      return _asyncToGenerator(function* () {
        yield Object(_shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_5__["logout"])();

        _this.clearGlobalLoginState();

        _this.$navigateTo(_Login_vue__WEBPACK_IMPORTED_MODULE_3__["default"], {
          clearHistory: true
        });
      })();
    },

    onItemTap(event) {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        if (event.item.name === 'Sign out') {
          return yield _this2.onSignOutTap();
        }

        _this2.$navigateTo(event.item.component);
      })();
    }

  })
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvQWNjb3VudC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxpQkFEQTtBQUVBO0FBQUE7QUFBQSxHQUZBOztBQUdBO0FBQ0E7QUFDQSxjQUNBO0FBQ0EseUVBREE7QUFFQSxzQkFGQTtBQUdBLHNFQUhBO0FBSUE7QUFKQSxPQURBLEVBT0E7QUFDQSx5RUFEQTtBQUVBLHFCQUZBO0FBR0Esd0VBSEE7QUFJQTtBQUpBLE9BUEEsRUFhQTtBQUNBLHdFQURBO0FBRUEsd0JBRkE7QUFHQTtBQUhBLE9BYkE7QUFEQTtBQXFCQSxHQXpCQTs7QUEwQkE7QUFDQSw4REFEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEE7QUFJQTs7QUFQQSxJQTFCQTtBQW1DQSw2QkFDQTtBQUNBO0FBREEsSUFEQTtBQUlBO0FBQUE7O0FBQUE7QUFDQTs7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUlBLEtBUkE7O0FBU0E7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUpBO0FBS0E7O0FBZEE7QUFuQ0EsRyIsImZpbGUiOiJidW5kbGUuZGQyY2Q2NjExZWNiNmI2OGYwZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB2dWUvY29tcG9uZW50XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBTdGF0ZSwgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgSW52aXRlIGZyb20gJy4vSW52aXRlLnZ1ZSdcbmltcG9ydCBVc2VyTGlzdCBmcm9tICcuL1VzZXJMaXN0LnZ1ZSdcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luLnZ1ZSdcbmltcG9ydCBMaXN0U2Nyb2xsVmlldyBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RTY3JvbGxWaWV3LnZ1ZSdcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJy4uL19zaGFyZWQvZmlyZWJhc2UvdXNlcnMudHMnXG5pbXBvcnQgeyBBcHBSb2xlcyB9IGZyb20gJy4uL19zaGFyZWQvZW51bSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnQWNjb3VudCcsXG4gIGNvbXBvbmVudHM6IHsgTGlzdFNjcm9sbFZpZXcgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHJvbGU6IEFwcFJvbGVzLkFkbWluLFxuICAgICAgICAgIG5hbWU6ICdJbnZpdGUnLFxuICAgICAgICAgIGNvbXBvbmVudDogSW52aXRlLFxuICAgICAgICAgIGljb246ICdmYS11c2VyLXBsdXMnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcm9sZTogQXBwUm9sZXMuQWRtaW4sXG4gICAgICAgICAgbmFtZTogJ1VzZXJzJyxcbiAgICAgICAgICBjb21wb25lbnQ6IFVzZXJMaXN0LFxuICAgICAgICAgIGljb246ICdmYS11c2VyJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHJvbGU6IEFwcFJvbGVzLlVzZXIsXG4gICAgICAgICAgbmFtZTogJ1NpZ24gb3V0JyxcbiAgICAgICAgICBpY29uOiAnZmEtcG93ZXItb2ZmJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDogbWFwU3RhdGUoe1xuICAgIHJvbGU6IHN0YXRlID0+IHN0YXRlLmF1dGhlbnRpY2F0aW9uTW9kdWxlLnVzZXJDb250ZXh0LnJvbGUsXG4gICAgZW50aXRsZWRJdGVtcyhzdGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKHggPT4ge1xuICAgICAgICBpZiAoeC5yb2xlID09PSBBcHBSb2xlcy5Vc2VyKSByZXR1cm4gdHJ1ZVxuICAgICAgICByZXR1cm4geC5yb2xlID09PSB0aGlzLnJvbGVcbiAgICAgIH0pXG4gICAgfSxcbiAgfSksXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBBY3Rpb25zKCdhdXRoZW50aWNhdGlvbk1vZHVsZScsIHtcbiAgICAgIGNsZWFyR2xvYmFsTG9naW5TdGF0ZTogJ3NpZ25lZE91dCcsXG4gICAgfSksXG4gICAgYXN5bmMgb25TaWduT3V0VGFwKCkge1xuICAgICAgYXdhaXQgbG9nb3V0KClcbiAgICAgIHRoaXMuY2xlYXJHbG9iYWxMb2dpblN0YXRlKClcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTG9naW4sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pXG4gICAgfSxcbiAgICBhc3luYyBvbkl0ZW1UYXAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5pdGVtLm5hbWUgPT09ICdTaWduIG91dCcpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMub25TaWduT3V0VGFwKClcbiAgICAgIH1cbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oZXZlbnQuaXRlbS5jb21wb25lbnQpXG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuPHRlbXBsYXRlPlxuICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XG4gICAgPExpc3RTY3JvbGxWaWV3IHJlZj1cImxpc3RcIiBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiIDppdGVtcz1cImVudGl0bGVkSXRlbXNcIj4gPC9MaXN0U2Nyb2xsVmlldz5cbiAgPC9TdGFja0xheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbnNjcm9sbHZpZXcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==