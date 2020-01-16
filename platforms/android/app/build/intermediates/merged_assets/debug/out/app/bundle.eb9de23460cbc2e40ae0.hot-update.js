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
            user.image = "https://img.icons8.com/ios/16/000000/user-male-circle.png";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvVXNlckxpc3QudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxrQkFEQTtBQUVBO0FBQUE7QUFBQSxHQUZBOztBQUdBO0FBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUE7QUFGQTtBQURBO0FBTUEsR0FWQTs7QUFXQTtBQUNBLDhEQURBOztBQUVBO0FBQ0E7QUFDQSxLQUpBOztBQUtBO0FBQ0E7QUFDQTs7QUFQQSxJQVhBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQTtBQUdBLEdBekJBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsR0FoQ0E7QUFpQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FKQTtBQUtBLDBDQUNBLFdBREE7QUFFQTtBQUZBO0FBSUE7O0FBQ0E7QUFBQTtBQUFBO0FBZEE7QUFlQSxLQWhCQTs7QUFpQkE7QUFBQTtBQUNBO0FBREE7QUFFQSxLQW5CQTs7QUFvQkE7QUFBQTs7QUFBQTtBQUNBOztBQUNBO0FBRkE7QUFHQSxLQXZCQTs7QUF3QkE7QUFBQTs7QUFBQTtBQUNBOztBQUNBO0FBRkE7QUFHQSxLQTNCQTs7QUE0QkE7QUFDQTtBQUNBOztBQTlCQTtBQWpDQSxHIiwiZmlsZSI6ImJ1bmRsZS5lYjlkZTIzNDYwY2JjMmU0MGFlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHZ1ZS9jb21wb25lbnRcblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcbmltcG9ydCBMaXN0U2Nyb2xsVmlldyBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RTY3JvbGxWaWV3LnZ1ZSdcbmltcG9ydCB7IGdldEFsbFVzZXJzIH0gZnJvbSAnLi4vX3NoYXJlZC9maXJlYmFzZS91c2Vycy50cydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVXNlckxpc3QnLFxuICBjb21wb25lbnRzOiB7IExpc3RTY3JvbGxWaWV3IH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDogbWFwU3RhdGUoe1xuICAgIHJvbGU6IHN0YXRlID0+IHN0YXRlLmF1dGhlbnRpY2F0aW9uTW9kdWxlLnVzZXJDb250ZXh0LnJvbGUsXG4gICAgbG9hZGluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmdcbiAgICB9LFxuICAgIGl0ZW1zKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXNcbiAgICB9LFxuICB9KSxcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coYFVzZXJMaXN0IDo6IG1vdW50ZWRgKVxuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5nZXRVc2VyTGlzdCgpXG4gICAgfSlcbiAgfSxcbiAgdXBkYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coYFVzZXJMaXN0IDo6IHVwZGF0ZWRgKVxuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coYGxvYWRpbmcgOjogJHt0aGlzLnN0YXRlLmxvYWRpbmd9YClcbiAgICAgIGNvbnNvbGUubG9nKGBpdGVtcyA6OiAke0pTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuaXRlbXMpfWApXG4gICAgfSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIGdldFVzZXJMaXN0KCkge1xuICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nID0gdHJ1ZVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0QWxsVXNlcnMoKVxuICAgICAgaWYgKCFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICBjb25zdCB1c2VyTGlzdCA9IHJlc3VsdC5qc29uLnVzZXJzLm1hcCh1c2VyID0+IHtcbiAgICAgICAgICB1c2VyLm5hbWUgPSB1c2VyLmRpc3BsYXlOYW1lXG4gICAgICAgICAgdXNlci5pbWFnZSA9IGBodHRwczovL2ltZy5pY29uczguY29tL2lvcy8xNi8wMDAwMDAvdXNlci1tYWxlLWNpcmNsZS5wbmdgXG4gICAgICAgICAgcmV0dXJuIHVzZXJcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgIGl0ZW1zOiB1c2VyTGlzdCxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxuICAgIH0sXG4gICAgYXN5bmMgb25JdGVtVGFwKGV2ZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9LFxuICAgIGFzeW5jIG9uSXRlbURlbGV0ZWQoaXRlbSkge1xuICAgICAgYWxlcnQoYCR7aXRlbS5uYW1lfSBpcyBkZWxldGVkYClcbiAgICAgIHRoaXMuJHJlZnMubGlzdC5yZWZyZXNoKClcbiAgICB9LFxuICAgIGFzeW5jIG9uSXRlbU1hcmtlZChpdGVtKSB7XG4gICAgICBhbGVydChgJHtpdGVtLm5hbWV9IGlzIG1hcmtlZGApXG4gICAgICB0aGlzLiRyZWZzLmxpc3QucmVmcmVzaCgpXG4gICAgfSxcbiAgICBvbk5hdmlnYXRpb25CdXR0b25UYXAoKSB7XG4gICAgICB0aGlzLiRuYXZpZ2F0ZUJhY2soKVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD5cbjx0ZW1wbGF0ZT5cbiAgPFBhZ2U+XG4gICAgPEFjdGlvbkJhcj5cbiAgICAgIDxCdXR0b24gQHRhcD1cIm9uTmF2aWdhdGlvbkJ1dHRvblRhcFwiIHRleHQ9XCJCYWNrXCIgLz5cbiAgICA8L0FjdGlvbkJhcj5cbiAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XG4gICAgICA8IS0tIDxBY3Rpdml0eUluZGljYXRvclxuICAgICAgICA6dmlzaWJpbGl0eT1cInN0YXRlLmxvYWRpbmcgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXCJcbiAgICAgICAgOmJ1c3k9XCJzdGF0ZS5sb2FkaW5nXCJcbiAgICAgID48L0FjdGl2aXR5SW5kaWNhdG9yPiAtLT5cbiAgICAgIDxMaXN0U2Nyb2xsVmlld1xuICAgICAgICByZWY9XCJsaXN0XCJcbiAgICAgICAgdi1pZj1cIiFzdGF0ZS5sb2FkaW5nXCJcbiAgICAgICAgOml0ZW1zPVwic3RhdGUuaXRlbXNcIlxuICAgICAgICA6cHVsbFRvUmVmcmVzaD1cImZhbHNlXCJcbiAgICAgICAgOml0ZW1SZW9yZGVyPVwiZmFsc2VcIlxuICAgICAgICA6c3dpcGVBY3Rpb25zPVwidHJ1ZVwiXG4gICAgICAgIEBpdGVtVGFwPVwib25JdGVtVGFwXCJcbiAgICAgICAgQGl0ZW1EZWxldGVkPVwib25JdGVtRGVsZXRlZFwiXG4gICAgICAgIEBpdGVtTWFya2VkPVwib25JdGVtTWFya2VkXCJcbiAgICAgID5cbiAgICAgIDwvTGlzdFNjcm9sbFZpZXc+XG4gICAgPC9TdGFja0xheW91dD5cbiAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuQWN0aW9uQmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblNjcm9sbHZpZXcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==