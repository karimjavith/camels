webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/UserList.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_ListScrollView_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/ListScrollView.vue");
/* harmony import */ var _shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./_shared/firebase/users.ts");
/* harmony import */ var _shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_2__);
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
            user.image = "<img src=\"https://img.icons8.com/ios/16/000000/user-male-circle.png\">";
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
      return _asyncToGenerator(function* () {
        return;
      })();
    },

    onItemDeleted(item) {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        alert("".concat(item.name, " is deleted"));

        _this2.$refs.list.refresh();
      })();
    },

    onItemMarked(item) {
      var _this3 = this;

      return _asyncToGenerator(function* () {
        alert("".concat(item.name, " is marked"));

        _this3.$refs.list.refresh();
      })();
    },

    onNavigationButtonTap() {
      this.$navigateBack();
    }

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvVXNlckxpc3QudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxrQkFEQTtBQUVBO0FBQUE7QUFBQSxHQUZBOztBQUdBO0FBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUE7QUFGQTtBQURBO0FBTUEsR0FWQTs7QUFXQTtBQUNBLDhEQURBOztBQUVBO0FBQ0E7QUFDQSxLQUpBOztBQUtBO0FBQ0E7QUFDQTs7QUFQQSxJQVhBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQTtBQUdBLEdBekJBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsR0FoQ0E7QUFpQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FKQTtBQUtBLDBDQUNBLFdBREE7QUFFQTtBQUZBO0FBSUE7O0FBQ0E7QUFBQTtBQUFBO0FBZEE7QUFlQSxLQWhCQTs7QUFpQkE7QUFBQTtBQUNBO0FBREE7QUFFQSxLQW5CQTs7QUFvQkE7QUFBQTs7QUFBQTtBQUNBOztBQUNBO0FBRkE7QUFHQSxLQXZCQTs7QUF3QkE7QUFBQTs7QUFBQTtBQUNBOztBQUNBO0FBRkE7QUFHQSxLQTNCQTs7QUE0QkE7QUFDQTtBQUNBOztBQTlCQTtBQWpDQSxHIiwiZmlsZSI6ImJ1bmRsZS4yM2IwZTRiZTdhOTE4MzkzNTMyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHZ1ZS9jb21wb25lbnRcblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcbmltcG9ydCBMaXN0U2Nyb2xsVmlldyBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RTY3JvbGxWaWV3LnZ1ZSdcbmltcG9ydCB7IGdldEFsbFVzZXJzIH0gZnJvbSAnLi4vX3NoYXJlZC9maXJlYmFzZS91c2Vycy50cydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVXNlckxpc3QnLFxuICBjb21wb25lbnRzOiB7IExpc3RTY3JvbGxWaWV3IH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDogbWFwU3RhdGUoe1xuICAgIHJvbGU6IHN0YXRlID0+IHN0YXRlLmF1dGhlbnRpY2F0aW9uTW9kdWxlLnVzZXJDb250ZXh0LnJvbGUsXG4gICAgbG9hZGluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmdcbiAgICB9LFxuICAgIGl0ZW1zKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXNcbiAgICB9LFxuICB9KSxcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coYFVzZXJMaXN0IDo6IG1vdW50ZWRgKVxuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5nZXRVc2VyTGlzdCgpXG4gICAgfSlcbiAgfSxcbiAgdXBkYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coYFVzZXJMaXN0IDo6IHVwZGF0ZWRgKVxuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coYGxvYWRpbmcgOjogJHt0aGlzLnN0YXRlLmxvYWRpbmd9YClcbiAgICAgIGNvbnNvbGUubG9nKGBpdGVtcyA6OiAke0pTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuaXRlbXMpfWApXG4gICAgfSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIGdldFVzZXJMaXN0KCkge1xuICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nID0gdHJ1ZVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0QWxsVXNlcnMoKVxuICAgICAgaWYgKCFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICBjb25zdCB1c2VyTGlzdCA9IHJlc3VsdC5qc29uLnVzZXJzLm1hcCh1c2VyID0+IHtcbiAgICAgICAgICB1c2VyLm5hbWUgPSB1c2VyLmRpc3BsYXlOYW1lXG4gICAgICAgICAgdXNlci5pbWFnZSA9IGA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzE2LzAwMDAwMC91c2VyLW1hbGUtY2lyY2xlLnBuZ1wiPmBcbiAgICAgICAgICByZXR1cm4gdXNlclxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgaXRlbXM6IHVzZXJMaXN0LFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSB9XG4gICAgfSxcbiAgICBhc3luYyBvbkl0ZW1UYXAoZXZlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH0sXG4gICAgYXN5bmMgb25JdGVtRGVsZXRlZChpdGVtKSB7XG4gICAgICBhbGVydChgJHtpdGVtLm5hbWV9IGlzIGRlbGV0ZWRgKVxuICAgICAgdGhpcy4kcmVmcy5saXN0LnJlZnJlc2goKVxuICAgIH0sXG4gICAgYXN5bmMgb25JdGVtTWFya2VkKGl0ZW0pIHtcbiAgICAgIGFsZXJ0KGAke2l0ZW0ubmFtZX0gaXMgbWFya2VkYClcbiAgICAgIHRoaXMuJHJlZnMubGlzdC5yZWZyZXNoKClcbiAgICB9LFxuICAgIG9uTmF2aWdhdGlvbkJ1dHRvblRhcCgpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlQmFjaygpXG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuPHRlbXBsYXRlPlxuICA8UGFnZT5cbiAgICA8QWN0aW9uQmFyPlxuICAgICAgPEJ1dHRvbiBAdGFwPVwib25OYXZpZ2F0aW9uQnV0dG9uVGFwXCIgdGV4dD1cIkJhY2tcIiAvPlxuICAgIDwvQWN0aW9uQmFyPlxuICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgIDwhLS0gPEFjdGl2aXR5SW5kaWNhdG9yXG4gICAgICAgIDp2aXNpYmlsaXR5PVwic3RhdGUubG9hZGluZyA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcIlxuICAgICAgICA6YnVzeT1cInN0YXRlLmxvYWRpbmdcIlxuICAgICAgPjwvQWN0aXZpdHlJbmRpY2F0b3I+IC0tPlxuICAgICAgPExpc3RTY3JvbGxWaWV3XG4gICAgICAgIHJlZj1cImxpc3RcIlxuICAgICAgICB2LWlmPVwiIXN0YXRlLmxvYWRpbmdcIlxuICAgICAgICA6aXRlbXM9XCJzdGF0ZS5pdGVtc1wiXG4gICAgICAgIDpwdWxsVG9SZWZyZXNoPVwiZmFsc2VcIlxuICAgICAgICA6aXRlbVJlb3JkZXI9XCJmYWxzZVwiXG4gICAgICAgIDpzd2lwZUFjdGlvbnM9XCJ0cnVlXCJcbiAgICAgICAgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIlxuICAgICAgICBAaXRlbURlbGV0ZWQ9XCJvbkl0ZW1EZWxldGVkXCJcbiAgICAgICAgQGl0ZW1NYXJrZWQ9XCJvbkl0ZW1NYXJrZWRcIlxuICAgICAgPlxuICAgICAgPC9MaXN0U2Nyb2xsVmlldz5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG5BY3Rpb25CYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuU2Nyb2xsdmlldyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9