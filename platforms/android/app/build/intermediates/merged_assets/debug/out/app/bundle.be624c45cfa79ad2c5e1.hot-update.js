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
        var promptPromise = yield prompt({
          title: 'Mark as Admin',
          message: "Assign admin role to ".concat(item.name, " ?"),
          okButtonText: 'Assign',
          cancelButtonText: "Don't assign"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvVXNlckxpc3QudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0Esa0JBREE7QUFFQTtBQUFBO0FBQUEsR0FGQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBO0FBRkE7QUFEQTtBQU1BLEdBVkE7O0FBV0E7QUFDQSw4REFEQTs7QUFFQTtBQUNBO0FBQ0EsS0FKQTs7QUFLQTtBQUNBO0FBQ0E7O0FBUEEsSUFYQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQXpCQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLEdBaENBO0FBaUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsV0FQQTtBQVFBLDBDQUNBLFdBREE7QUFFQTtBQUZBO0FBSUE7O0FBQ0E7QUFBQTtBQUFBO0FBakJBO0FBa0JBLEtBbkJBOztBQW9CQTtBQUFBO0FBQUEsS0FwQkE7O0FBcUJBO0FBQUE7O0FBQUE7QUFDQTs7QUFDQTtBQUZBO0FBR0EsS0F4QkE7O0FBeUJBO0FBQUE7O0FBQUE7QUFDQTtBQUNBLGdDQURBO0FBRUEsa0VBRkE7QUFHQSxnQ0FIQTtBQUlBO0FBSkE7O0FBTUE7QUFDQTtBQUNBOztBQUNBO0FBVkE7QUFXQSxLQXBDQTs7QUFxQ0E7QUFDQTtBQUNBOztBQXZDQTtBQWpDQSxHIiwiZmlsZSI6ImJ1bmRsZS5iZTYyNGM0NWNmYTc5YWQyYzVlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHZ1ZS9jb21wb25lbnRcblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcbmltcG9ydCBMaXN0U2Nyb2xsVmlldyBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RTY3JvbGxWaWV3LnZ1ZSdcbmltcG9ydCB7IGdldEFsbFVzZXJzIH0gZnJvbSAnLi4vX3NoYXJlZC9maXJlYmFzZS91c2Vycy50cydcbmltcG9ydCB7IEFwcFJvbGVzIH0gZnJvbSAnLi4vX3NoYXJlZC9lbnVtJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdVc2VyTGlzdCcsXG4gIGNvbXBvbmVudHM6IHsgTGlzdFNjcm9sbFZpZXcgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgfSxcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiBtYXBTdGF0ZSh7XG4gICAgcm9sZTogc3RhdGUgPT4gc3RhdGUuYXV0aGVudGljYXRpb25Nb2R1bGUudXNlckNvbnRleHQucm9sZSxcbiAgICBsb2FkaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubG9hZGluZ1xuICAgIH0sXG4gICAgaXRlbXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtc1xuICAgIH0sXG4gIH0pLFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhgVXNlckxpc3QgOjogbW91bnRlZGApXG4gICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmdldFVzZXJMaXN0KClcbiAgICB9KVxuICB9LFxuICB1cGRhdGVkOiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhgVXNlckxpc3QgOjogdXBkYXRlZGApXG4gICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhgbG9hZGluZyA6OiAke3RoaXMuc3RhdGUubG9hZGluZ31gKVxuICAgICAgY29uc29sZS5sb2coYGl0ZW1zIDo6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5pdGVtcyl9YClcbiAgICB9KVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgZ2V0VXNlckxpc3QoKSB7XG4gICAgICB0aGlzLnN0YXRlLmxvYWRpbmcgPSB0cnVlXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRBbGxVc2VycygpXG4gICAgICBpZiAoIXJlc3VsdC5pc0Vycm9yKSB7XG4gICAgICAgIGNvbnN0IHVzZXJMaXN0ID0gcmVzdWx0Lmpzb24udXNlcnMubWFwKHVzZXIgPT4ge1xuICAgICAgICAgIHVzZXIubmFtZSA9IHVzZXIuZGlzcGxheU5hbWVcbiAgICAgICAgICB1c2VyLmltYWdlID0gYGh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzE2LzAwMDAwMC91c2VyLW1hbGUtY2lyY2xlLnBuZ2BcbiAgICAgICAgICBpZiAodXNlci5yb2xlID09PSBBcHBSb2xlcy5BZG1pbikge1xuICAgICAgICAgICAgdXNlci5zZWNvbmRhcnlJY29uID0gJ2ZhLXVuaXZlcnNhbC1hY2Nlc3MnXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB1c2VyXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICBpdGVtczogdXNlckxpc3QsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICB9LFxuICAgIGFzeW5jIG9uSXRlbVRhcChldmVudCkge30sXG4gICAgYXN5bmMgb25JdGVtRGVsZXRlZChpdGVtKSB7XG4gICAgICBhbGVydChgJHtpdGVtLm5hbWV9IGlzIGRlbGV0ZWRgKVxuICAgICAgdGhpcy4kcmVmcy51c2VybGlzdC5yZWZyZXNoKClcbiAgICB9LFxuICAgIGFzeW5jIG9uSXRlbU1hcmtlZChpdGVtKSB7XG4gICAgICBjb25zdCBwcm9tcHRQcm9taXNlID0gYXdhaXQgcHJvbXB0KHtcbiAgICAgICAgdGl0bGU6ICdNYXJrIGFzIEFkbWluJyxcbiAgICAgICAgbWVzc2FnZTogYEFzc2lnbiBhZG1pbiByb2xlIHRvICR7aXRlbS5uYW1lfSA/YCxcbiAgICAgICAgb2tCdXR0b25UZXh0OiAnQXNzaWduJyxcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogYERvbid0IGFzc2lnbmAsXG4gICAgICB9KVxuICAgICAgaWYgKHByb21wdFByb21pc2UucmVzdWx0KSB7XG4gICAgICAgIGFsZXJ0KGAke3Byb21wdFByb21pc2UucmVzdWx0fSBpcyBtYXJrZWRgKVxuICAgICAgfVxuICAgICAgdGhpcy4kcmVmcy51c2VybGlzdC5yZWZyZXNoKClcbiAgICB9LFxuICAgIG9uTmF2aWdhdGlvbkJ1dHRvblRhcCgpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlQmFjaygpXG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuPHRlbXBsYXRlPlxuICA8UGFnZT5cbiAgICA8QWN0aW9uQmFyPlxuICAgICAgPEJ1dHRvbiBAdGFwPVwib25OYXZpZ2F0aW9uQnV0dG9uVGFwXCIgdGV4dD1cIkJhY2tcIiAvPlxuICAgIDwvQWN0aW9uQmFyPlxuICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgIDwhLS0gPEFjdGl2aXR5SW5kaWNhdG9yXG4gICAgICAgIDp2aXNpYmlsaXR5PVwic3RhdGUubG9hZGluZyA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcIlxuICAgICAgICA6YnVzeT1cInN0YXRlLmxvYWRpbmdcIlxuICAgICAgPjwvQWN0aXZpdHlJbmRpY2F0b3I+IC0tPlxuICAgICAgPExpc3RTY3JvbGxWaWV3XG4gICAgICAgIHJlZj1cInVzZXJsaXN0XCJcbiAgICAgICAgOml0ZW1zPVwic3RhdGUuaXRlbXNcIlxuICAgICAgICBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiXG4gICAgICAgIEBpdGVtRGVsZXRlZD1cIm9uSXRlbURlbGV0ZWRcIlxuICAgICAgICBAaXRlbU1hcmtlZD1cIm9uSXRlbU1hcmtlZFwiXG4gICAgICAgIDpzd2lwZUFjdGlvbnM9XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgIDwvTGlzdFNjcm9sbFZpZXc+XG4gICAgPC9TdGFja0xheW91dD5cbiAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuQWN0aW9uQmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblNjcm9sbHZpZXcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==