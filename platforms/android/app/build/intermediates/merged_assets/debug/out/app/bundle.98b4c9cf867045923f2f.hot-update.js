webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/UserList.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_ListScrollView_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/ListScrollView.vue");
/* harmony import */ var _shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./_shared/firebase/users.ts");
/* harmony import */ var _shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./_shared/enum.ts");
/* harmony import */ var _shared_enum__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shared_enum__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UserList',
  components: {
    ListScrollView: _components_ListScrollView_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },

  data() {
    return {
      state: {
        loading: true,
        items: []
      }
    };
  },

  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    role: state => state.authenticationModule.userContext.role,

    loading() {
      return this.state.loading;
    },

    items() {
      return this.state.items;
    }

  }),
  mounted: function mounted() {
    console.log("UserList :: mounted");
    this.$nextTick(function () {
      this.getUserList();
    });
  },
  updated: function updated() {
    console.log("UserList :: updated");
    this.$nextTick(function () {
      console.log("loading :: ".concat(this.state.loading));
      console.log("items :: ".concat(JSON.stringify(this.state.items)));
    });
  },
  methods: {
    getUserList() {
      var _this = this;

      return _asyncToGenerator(function* () {
        _this.state.loading = true;
        var result = yield Object(_shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_2__["getAllUsers"])();

        if (!result.isError) {
          var userList = result.json.users.map(user => {
            user.name = user.displayName;
            user.image = "https://img.icons8.com/ios/16/000000/user-male-circle.png";

            if (user.role === _shared_enum__WEBPACK_IMPORTED_MODULE_3__["AppRoles"].Admin) {
              user.secondaryIcon = 'fa-universal-access';
            }

            return user;
          });
          _this.state = _objectSpread({}, _this.state, {
            items: userList
          });
        }

        _this.state = _objectSpread({}, _this.state, {
          loading: false
        });
      })();
    },

    onItemTap(event) {
      return _asyncToGenerator(function* () {})();
    },

    onItemDeleted(item) {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        alert("".concat(item.name, " is deleted"));

        _this2.$refs.userlist.refresh();
      })();
    },

    onItemMarked(item) {
      var _this3 = this;

      return _asyncToGenerator(function* () {
        var message = item.role !== _shared_enum__WEBPACK_IMPORTED_MODULE_3__["AppRoles"].Admin ? "Assign admin role to ".concat(item.name, " ?") : "Remove admin access ?";
        var okButtonText = item.role !== _shared_enum__WEBPACK_IMPORTED_MODULE_3__["AppRoles"].Admin ? "Assign" : "Remove access";
        var cancelButtonText = item.role !== _shared_enum__WEBPACK_IMPORTED_MODULE_3__["AppRoles"].Admin ? "Don't assign" : "Keep the role";
        var promptPromise = yield prompt({
          title: 'Mark as Admin',
          message,
          okButtonText,
          cancelButtonText
        });

        if (promptPromise.result) {
          var result = yield Object(_shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_2__["updateUser"])(item.uid, {
            displayName: item.displayName,
            role: item.role === _shared_enum__WEBPACK_IMPORTED_MODULE_3__["AppRoles"].Admin ? _shared_enum__WEBPACK_IMPORTED_MODULE_3__["AppRoles"].User : _shared_enum__WEBPACK_IMPORTED_MODULE_3__["AppRoles"].Admin
          });
        }

        _this3.$refs.userlist.refresh();
      })();
    },

    onNavigationButtonTap() {
      this.$navigateBack();
    }

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvVXNlckxpc3QudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0Esa0JBREE7QUFFQTtBQUFBO0FBQUEsR0FGQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBO0FBRkE7QUFEQTtBQU1BLEdBVkE7O0FBV0E7QUFDQSw4REFEQTs7QUFFQTtBQUNBO0FBQ0EsS0FKQTs7QUFLQTtBQUNBO0FBQ0E7O0FBUEEsSUFYQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQXpCQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLEdBaENBO0FBaUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsV0FQQTtBQVFBLDBDQUNBLFdBREE7QUFFQTtBQUZBO0FBSUE7O0FBQ0E7QUFBQTtBQUFBO0FBakJBO0FBa0JBLEtBbkJBOztBQW9CQTtBQUFBO0FBQUEsS0FwQkE7O0FBcUJBO0FBQUE7O0FBQUE7QUFDQTs7QUFDQTtBQUZBO0FBR0EsS0F4QkE7O0FBeUJBO0FBQUE7O0FBQUE7QUFDQSxzQkFDQSwyR0FDQSxTQURBLGlDQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSxpQkFGQTtBQUdBLHNCQUhBO0FBSUE7QUFKQTs7QUFNQTtBQUNBO0FBQ0EseUNBREE7QUFFQTtBQUZBO0FBSUE7O0FBQ0E7QUFuQkE7QUFvQkEsS0E3Q0E7O0FBOENBO0FBQ0E7QUFDQTs7QUFoREE7QUFqQ0EsRyIsImZpbGUiOiJidW5kbGUuOThiNGM5Y2Y4NjcwNDU5MjNmMmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB2dWUvY29tcG9uZW50XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBTdGF0ZSwgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgTGlzdFNjcm9sbFZpZXcgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0U2Nyb2xsVmlldy52dWUnXG5pbXBvcnQgeyBnZXRBbGxVc2VycywgdXBkYXRlVXNlciB9IGZyb20gJy4uL19zaGFyZWQvZmlyZWJhc2UvdXNlcnMudHMnXG5pbXBvcnQgeyBBcHBSb2xlcyB9IGZyb20gJy4uL19zaGFyZWQvZW51bSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVXNlckxpc3QnLFxuICBjb21wb25lbnRzOiB7IExpc3RTY3JvbGxWaWV3IH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDogbWFwU3RhdGUoe1xuICAgIHJvbGU6IHN0YXRlID0+IHN0YXRlLmF1dGhlbnRpY2F0aW9uTW9kdWxlLnVzZXJDb250ZXh0LnJvbGUsXG4gICAgbG9hZGluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmdcbiAgICB9LFxuICAgIGl0ZW1zKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXNcbiAgICB9LFxuICB9KSxcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coYFVzZXJMaXN0IDo6IG1vdW50ZWRgKVxuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5nZXRVc2VyTGlzdCgpXG4gICAgfSlcbiAgfSxcbiAgdXBkYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coYFVzZXJMaXN0IDo6IHVwZGF0ZWRgKVxuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coYGxvYWRpbmcgOjogJHt0aGlzLnN0YXRlLmxvYWRpbmd9YClcbiAgICAgIGNvbnNvbGUubG9nKGBpdGVtcyA6OiAke0pTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuaXRlbXMpfWApXG4gICAgfSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIGdldFVzZXJMaXN0KCkge1xuICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nID0gdHJ1ZVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0QWxsVXNlcnMoKVxuICAgICAgaWYgKCFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICBjb25zdCB1c2VyTGlzdCA9IHJlc3VsdC5qc29uLnVzZXJzLm1hcCh1c2VyID0+IHtcbiAgICAgICAgICB1c2VyLm5hbWUgPSB1c2VyLmRpc3BsYXlOYW1lXG4gICAgICAgICAgdXNlci5pbWFnZSA9IGBodHRwczovL2ltZy5pY29uczguY29tL2lvcy8xNi8wMDAwMDAvdXNlci1tYWxlLWNpcmNsZS5wbmdgXG4gICAgICAgICAgaWYgKHVzZXIucm9sZSA9PT0gQXBwUm9sZXMuQWRtaW4pIHtcbiAgICAgICAgICAgIHVzZXIuc2Vjb25kYXJ5SWNvbiA9ICdmYS11bml2ZXJzYWwtYWNjZXNzJ1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdXNlclxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgaXRlbXM6IHVzZXJMaXN0LFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSB9XG4gICAgfSxcbiAgICBhc3luYyBvbkl0ZW1UYXAoZXZlbnQpIHt9LFxuICAgIGFzeW5jIG9uSXRlbURlbGV0ZWQoaXRlbSkge1xuICAgICAgYWxlcnQoYCR7aXRlbS5uYW1lfSBpcyBkZWxldGVkYClcbiAgICAgIHRoaXMuJHJlZnMudXNlcmxpc3QucmVmcmVzaCgpXG4gICAgfSxcbiAgICBhc3luYyBvbkl0ZW1NYXJrZWQoaXRlbSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAgIGl0ZW0ucm9sZSAhPT0gQXBwUm9sZXMuQWRtaW5cbiAgICAgICAgICA/IGBBc3NpZ24gYWRtaW4gcm9sZSB0byAke2l0ZW0ubmFtZX0gP2BcbiAgICAgICAgICA6IGBSZW1vdmUgYWRtaW4gYWNjZXNzID9gXG4gICAgICBjb25zdCBva0J1dHRvblRleHQgPSBpdGVtLnJvbGUgIT09IEFwcFJvbGVzLkFkbWluID8gYEFzc2lnbmAgOiBgUmVtb3ZlIGFjY2Vzc2BcbiAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvblRleHQgPSBpdGVtLnJvbGUgIT09IEFwcFJvbGVzLkFkbWluID8gYERvbid0IGFzc2lnbmAgOiBgS2VlcCB0aGUgcm9sZWBcbiAgICAgIGNvbnN0IHByb21wdFByb21pc2UgPSBhd2FpdCBwcm9tcHQoe1xuICAgICAgICB0aXRsZTogJ01hcmsgYXMgQWRtaW4nLFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICBva0J1dHRvblRleHQsXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQsXG4gICAgICB9KVxuICAgICAgaWYgKHByb21wdFByb21pc2UucmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHVwZGF0ZVVzZXIoaXRlbS51aWQsIHtcbiAgICAgICAgICBkaXNwbGF5TmFtZTogaXRlbS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICByb2xlOiBpdGVtLnJvbGUgPT09IEFwcFJvbGVzLkFkbWluID8gQXBwUm9sZXMuVXNlciA6IEFwcFJvbGVzLkFkbWluLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhpcy4kcmVmcy51c2VybGlzdC5yZWZyZXNoKClcbiAgICB9LFxuICAgIG9uTmF2aWdhdGlvbkJ1dHRvblRhcCgpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlQmFjaygpXG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuPHRlbXBsYXRlPlxuICA8UGFnZT5cbiAgICA8QWN0aW9uQmFyPlxuICAgICAgPEJ1dHRvbiBAdGFwPVwib25OYXZpZ2F0aW9uQnV0dG9uVGFwXCIgdGV4dD1cIkJhY2tcIiAvPlxuICAgIDwvQWN0aW9uQmFyPlxuICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgIDwhLS0gPEFjdGl2aXR5SW5kaWNhdG9yXG4gICAgICAgIDp2aXNpYmlsaXR5PVwic3RhdGUubG9hZGluZyA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcIlxuICAgICAgICA6YnVzeT1cInN0YXRlLmxvYWRpbmdcIlxuICAgICAgPjwvQWN0aXZpdHlJbmRpY2F0b3I+IC0tPlxuICAgICAgPExpc3RTY3JvbGxWaWV3XG4gICAgICAgIHJlZj1cInVzZXJsaXN0XCJcbiAgICAgICAgOml0ZW1zPVwic3RhdGUuaXRlbXNcIlxuICAgICAgICBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiXG4gICAgICAgIEBpdGVtRGVsZXRlZD1cIm9uSXRlbURlbGV0ZWRcIlxuICAgICAgICBAaXRlbU1hcmtlZD1cIm9uSXRlbU1hcmtlZFwiXG4gICAgICAgIDpzd2lwZUFjdGlvbnM9XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgIDwvTGlzdFNjcm9sbFZpZXc+XG4gICAgPC9TdGFja0xheW91dD5cbiAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuQWN0aW9uQmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblNjcm9sbHZpZXcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==