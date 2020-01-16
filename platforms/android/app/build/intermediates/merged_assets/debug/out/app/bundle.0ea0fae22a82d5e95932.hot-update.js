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
        var promptPromise = prompt({
          title: 'Mark as Admin',
          message: "Assign admin role to ".concat(item.name),
          okButtonText: 'Ok',
          cancelButtonText: 'Cancel'
        });

        if (promptPromise.result) {
          alert("".concat(promptPromise.result, " is marked"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvVXNlckxpc3QudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxrQkFEQTtBQUVBO0FBQUE7QUFBQSxHQUZBOztBQUdBO0FBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUE7QUFGQTtBQURBO0FBTUEsR0FWQTs7QUFXQTtBQUNBLDhEQURBOztBQUVBO0FBQ0E7QUFDQSxLQUpBOztBQUtBO0FBQ0E7QUFDQTs7QUFQQSxJQVhBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQTtBQUdBLEdBekJBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsR0FoQ0E7QUFpQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FKQTtBQUtBLDBDQUNBLFdBREE7QUFFQTtBQUZBO0FBSUE7O0FBQ0E7QUFBQTtBQUFBO0FBZEE7QUFlQSxLQWhCQTs7QUFpQkE7QUFBQTtBQUFBLEtBakJBOztBQWtCQTtBQUFBOztBQUFBO0FBQ0E7O0FBQ0E7QUFGQTtBQUdBLEtBckJBOztBQXNCQTtBQUFBOztBQUFBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBLDREQUZBO0FBR0EsNEJBSEE7QUFJQTtBQUpBOztBQU1BO0FBQ0E7QUFDQTs7QUFDQTtBQVZBO0FBV0EsS0FqQ0E7O0FBa0NBO0FBQ0E7QUFDQTs7QUFwQ0E7QUFqQ0EsRyIsImZpbGUiOiJidW5kbGUuMGVhMGZhZTIyYTgyZDVlOTU5MzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB2dWUvY29tcG9uZW50XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBTdGF0ZSwgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgTGlzdFNjcm9sbFZpZXcgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0U2Nyb2xsVmlldy52dWUnXG5pbXBvcnQgeyBnZXRBbGxVc2VycyB9IGZyb20gJy4uL19zaGFyZWQvZmlyZWJhc2UvdXNlcnMudHMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1VzZXJMaXN0JyxcbiAgY29tcG9uZW50czogeyBMaXN0U2Nyb2xsVmlldyB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICBpdGVtczogW10sXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcbiAgICByb2xlOiBzdGF0ZSA9PiBzdGF0ZS5hdXRoZW50aWNhdGlvbk1vZHVsZS51c2VyQ29udGV4dC5yb2xlLFxuICAgIGxvYWRpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkaW5nXG4gICAgfSxcbiAgICBpdGVtcygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLml0ZW1zXG4gICAgfSxcbiAgfSksXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKGBVc2VyTGlzdCA6OiBtb3VudGVkYClcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZ2V0VXNlckxpc3QoKVxuICAgIH0pXG4gIH0sXG4gIHVwZGF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKGBVc2VyTGlzdCA6OiB1cGRhdGVkYClcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBsb2FkaW5nIDo6ICR7dGhpcy5zdGF0ZS5sb2FkaW5nfWApXG4gICAgICBjb25zb2xlLmxvZyhgaXRlbXMgOjogJHtKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLml0ZW1zKX1gKVxuICAgIH0pXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBnZXRVc2VyTGlzdCgpIHtcbiAgICAgIHRoaXMuc3RhdGUubG9hZGluZyA9IHRydWVcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldEFsbFVzZXJzKClcbiAgICAgIGlmICghcmVzdWx0LmlzRXJyb3IpIHtcbiAgICAgICAgY29uc3QgdXNlckxpc3QgPSByZXN1bHQuanNvbi51c2Vycy5tYXAodXNlciA9PiB7XG4gICAgICAgICAgdXNlci5uYW1lID0gdXNlci5kaXNwbGF5TmFtZVxuICAgICAgICAgIHVzZXIuaW1hZ2UgPSBgaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMTYvMDAwMDAwL3VzZXItbWFsZS1jaXJjbGUucG5nYFxuICAgICAgICAgIHJldHVybiB1c2VyXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICBpdGVtczogdXNlckxpc3QsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICB9LFxuICAgIGFzeW5jIG9uSXRlbVRhcChldmVudCkge30sXG4gICAgYXN5bmMgb25JdGVtRGVsZXRlZChpdGVtKSB7XG4gICAgICBhbGVydChgJHtpdGVtLm5hbWV9IGlzIGRlbGV0ZWRgKVxuICAgICAgdGhpcy4kcmVmcy51c2VybGlzdC5yZWZyZXNoKClcbiAgICB9LFxuICAgIGFzeW5jIG9uSXRlbU1hcmtlZChpdGVtKSB7XG4gICAgICBjb25zdCBwcm9tcHRQcm9taXNlID0gcHJvbXB0KHtcbiAgICAgICAgdGl0bGU6ICdNYXJrIGFzIEFkbWluJyxcbiAgICAgICAgbWVzc2FnZTogYEFzc2lnbiBhZG1pbiByb2xlIHRvICR7aXRlbS5uYW1lfWAsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogJ09rJyxcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gICAgICB9KVxuICAgICAgaWYgKHByb21wdFByb21pc2UucmVzdWx0KSB7XG4gICAgICAgIGFsZXJ0KGAke3Byb21wdFByb21pc2UucmVzdWx0fSBpcyBtYXJrZWRgKVxuICAgICAgfVxuICAgICAgdGhpcy4kcmVmcy51c2VybGlzdC5yZWZyZXNoKClcbiAgICB9LFxuICAgIG9uTmF2aWdhdGlvbkJ1dHRvblRhcCgpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlQmFjaygpXG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuPHRlbXBsYXRlPlxuICA8UGFnZT5cbiAgICA8QWN0aW9uQmFyPlxuICAgICAgPEJ1dHRvbiBAdGFwPVwib25OYXZpZ2F0aW9uQnV0dG9uVGFwXCIgdGV4dD1cIkJhY2tcIiAvPlxuICAgIDwvQWN0aW9uQmFyPlxuICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgIDwhLS0gPEFjdGl2aXR5SW5kaWNhdG9yXG4gICAgICAgIDp2aXNpYmlsaXR5PVwic3RhdGUubG9hZGluZyA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcIlxuICAgICAgICA6YnVzeT1cInN0YXRlLmxvYWRpbmdcIlxuICAgICAgPjwvQWN0aXZpdHlJbmRpY2F0b3I+IC0tPlxuICAgICAgPExpc3RTY3JvbGxWaWV3XG4gICAgICAgIHJlZj1cInVzZXJsaXN0XCJcbiAgICAgICAgOml0ZW1zPVwic3RhdGUuaXRlbXNcIlxuICAgICAgICBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiXG4gICAgICAgIEBpdGVtRGVsZXRlZD1cIm9uSXRlbURlbGV0ZWRcIlxuICAgICAgICBAaXRlbU1hcmtlZD1cIm9uSXRlbU1hcmtlZFwiXG4gICAgICAgIDpzd2lwZUFjdGlvbnM9XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgIDwvTGlzdFNjcm9sbFZpZXc+XG4gICAgPC9TdGFja0xheW91dD5cbiAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuQWN0aW9uQmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblNjcm9sbHZpZXcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==