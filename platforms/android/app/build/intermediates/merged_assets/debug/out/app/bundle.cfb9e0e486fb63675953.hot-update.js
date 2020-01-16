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
            user.icon = "fa-user";

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

          if (!result.isError) {
            yield _this3.getUserList();
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvVXNlckxpc3QudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0Esa0JBREE7QUFFQTtBQUFBO0FBQUEsR0FGQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBO0FBRkE7QUFEQTtBQU1BLEdBVkE7O0FBV0E7QUFDQSw4REFEQTs7QUFFQTtBQUNBO0FBQ0EsS0FKQTs7QUFLQTtBQUNBO0FBQ0E7O0FBUEEsSUFYQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQXpCQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLEdBaENBO0FBaUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsV0FQQTtBQVFBLDBDQUNBLFdBREE7QUFFQTtBQUZBO0FBSUE7O0FBQ0E7QUFBQTtBQUFBO0FBakJBO0FBa0JBLEtBbkJBOztBQW9CQTtBQUFBO0FBQUEsS0FwQkE7O0FBcUJBO0FBQUE7O0FBQUE7QUFDQTs7QUFDQTtBQUZBO0FBR0EsS0F4QkE7O0FBeUJBO0FBQUE7O0FBQUE7QUFDQSxzQkFDQSwyR0FDQSxTQURBLGlDQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSxpQkFGQTtBQUdBLHNCQUhBO0FBSUE7QUFKQTs7QUFNQTtBQUNBO0FBQ0EseUNBREE7QUFFQTtBQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBdEJBO0FBdUJBLEtBaERBOztBQWlEQTtBQUNBO0FBQ0E7O0FBbkRBO0FBakNBLEciLCJmaWxlIjoiYnVuZGxlLmNmYjllMGU0ODZmYjYzNjc1OTUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdnVlL2NvbXBvbmVudFxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwU3RhdGUsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuaW1wb3J0IExpc3RTY3JvbGxWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdFNjcm9sbFZpZXcudnVlJ1xuaW1wb3J0IHsgZ2V0QWxsVXNlcnMsIHVwZGF0ZVVzZXIgfSBmcm9tICcuLi9fc2hhcmVkL2ZpcmViYXNlL3VzZXJzLnRzJ1xuaW1wb3J0IHsgQXBwUm9sZXMgfSBmcm9tICcuLi9fc2hhcmVkL2VudW0nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1VzZXJMaXN0JyxcbiAgY29tcG9uZW50czogeyBMaXN0U2Nyb2xsVmlldyB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICBpdGVtczogW10sXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcbiAgICByb2xlOiBzdGF0ZSA9PiBzdGF0ZS5hdXRoZW50aWNhdGlvbk1vZHVsZS51c2VyQ29udGV4dC5yb2xlLFxuICAgIGxvYWRpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkaW5nXG4gICAgfSxcbiAgICBpdGVtcygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLml0ZW1zXG4gICAgfSxcbiAgfSksXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKGBVc2VyTGlzdCA6OiBtb3VudGVkYClcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZ2V0VXNlckxpc3QoKVxuICAgIH0pXG4gIH0sXG4gIHVwZGF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKGBVc2VyTGlzdCA6OiB1cGRhdGVkYClcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBsb2FkaW5nIDo6ICR7dGhpcy5zdGF0ZS5sb2FkaW5nfWApXG4gICAgICBjb25zb2xlLmxvZyhgaXRlbXMgOjogJHtKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLml0ZW1zKX1gKVxuICAgIH0pXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBnZXRVc2VyTGlzdCgpIHtcbiAgICAgIHRoaXMuc3RhdGUubG9hZGluZyA9IHRydWVcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldEFsbFVzZXJzKClcbiAgICAgIGlmICghcmVzdWx0LmlzRXJyb3IpIHtcbiAgICAgICAgY29uc3QgdXNlckxpc3QgPSByZXN1bHQuanNvbi51c2Vycy5tYXAodXNlciA9PiB7XG4gICAgICAgICAgdXNlci5uYW1lID0gdXNlci5kaXNwbGF5TmFtZVxuICAgICAgICAgIHVzZXIuaWNvbiA9IGBmYS11c2VyYFxuICAgICAgICAgIGlmICh1c2VyLnJvbGUgPT09IEFwcFJvbGVzLkFkbWluKSB7XG4gICAgICAgICAgICB1c2VyLnNlY29uZGFyeUljb24gPSAnZmEtdW5pdmVyc2FsLWFjY2VzcydcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHVzZXJcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgIGl0ZW1zOiB1c2VyTGlzdCxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxuICAgIH0sXG4gICAgYXN5bmMgb25JdGVtVGFwKGV2ZW50KSB7fSxcbiAgICBhc3luYyBvbkl0ZW1EZWxldGVkKGl0ZW0pIHtcbiAgICAgIGFsZXJ0KGAke2l0ZW0ubmFtZX0gaXMgZGVsZXRlZGApXG4gICAgICB0aGlzLiRyZWZzLnVzZXJsaXN0LnJlZnJlc2goKVxuICAgIH0sXG4gICAgYXN5bmMgb25JdGVtTWFya2VkKGl0ZW0pIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgICBpdGVtLnJvbGUgIT09IEFwcFJvbGVzLkFkbWluXG4gICAgICAgICAgPyBgQXNzaWduIGFkbWluIHJvbGUgdG8gJHtpdGVtLm5hbWV9ID9gXG4gICAgICAgICAgOiBgUmVtb3ZlIGFkbWluIGFjY2VzcyA/YFxuICAgICAgY29uc3Qgb2tCdXR0b25UZXh0ID0gaXRlbS5yb2xlICE9PSBBcHBSb2xlcy5BZG1pbiA/IGBBc3NpZ25gIDogYFJlbW92ZSBhY2Nlc3NgXG4gICAgICBjb25zdCBjYW5jZWxCdXR0b25UZXh0ID0gaXRlbS5yb2xlICE9PSBBcHBSb2xlcy5BZG1pbiA/IGBEb24ndCBhc3NpZ25gIDogYEtlZXAgdGhlIHJvbGVgXG4gICAgICBjb25zdCBwcm9tcHRQcm9taXNlID0gYXdhaXQgcHJvbXB0KHtcbiAgICAgICAgdGl0bGU6ICdNYXJrIGFzIEFkbWluJyxcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgb2tCdXR0b25UZXh0LFxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0LFxuICAgICAgfSlcbiAgICAgIGlmIChwcm9tcHRQcm9taXNlLnJlc3VsdCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1cGRhdGVVc2VyKGl0ZW0udWlkLCB7XG4gICAgICAgICAgZGlzcGxheU5hbWU6IGl0ZW0uZGlzcGxheU5hbWUsXG4gICAgICAgICAgcm9sZTogaXRlbS5yb2xlID09PSBBcHBSb2xlcy5BZG1pbiA/IEFwcFJvbGVzLlVzZXIgOiBBcHBSb2xlcy5BZG1pbixcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKCFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0VXNlckxpc3QoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLiRyZWZzLnVzZXJsaXN0LnJlZnJlc2goKVxuICAgIH0sXG4gICAgb25OYXZpZ2F0aW9uQnV0dG9uVGFwKCkge1xuICAgICAgdGhpcy4kbmF2aWdhdGVCYWNrKClcbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG48dGVtcGxhdGU+XG4gIDxQYWdlPlxuICAgIDxBY3Rpb25CYXI+XG4gICAgICA8QnV0dG9uIEB0YXA9XCJvbk5hdmlnYXRpb25CdXR0b25UYXBcIiB0ZXh0PVwiQmFja1wiIC8+XG4gICAgPC9BY3Rpb25CYXI+XG4gICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgPCEtLSA8QWN0aXZpdHlJbmRpY2F0b3JcbiAgICAgICAgOnZpc2liaWxpdHk9XCJzdGF0ZS5sb2FkaW5nID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ1wiXG4gICAgICAgIDpidXN5PVwic3RhdGUubG9hZGluZ1wiXG4gICAgICA+PC9BY3Rpdml0eUluZGljYXRvcj4gLS0+XG4gICAgICA8TGlzdFNjcm9sbFZpZXdcbiAgICAgICAgcmVmPVwidXNlcmxpc3RcIlxuICAgICAgICA6aXRlbXM9XCJzdGF0ZS5pdGVtc1wiXG4gICAgICAgIEBpdGVtVGFwPVwib25JdGVtVGFwXCJcbiAgICAgICAgQGl0ZW1EZWxldGVkPVwib25JdGVtRGVsZXRlZFwiXG4gICAgICAgIEBpdGVtTWFya2VkPVwib25JdGVtTWFya2VkXCJcbiAgICAgICAgOnN3aXBlQWN0aW9ucz1cInRydWVcIlxuICAgICAgPlxuICAgICAgPC9MaXN0U2Nyb2xsVmlldz5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG5BY3Rpb25CYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuU2Nyb2xsdmlldyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9