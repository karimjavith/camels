webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/UserList.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_ListScrollView_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/ListScrollView.vue");
/* harmony import */ var _shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./_shared/firebase/users.ts");
/* harmony import */ var _shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_2__);
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
  methods: {
    getUserList() {
      var _this = this;

      return _asyncToGenerator(function* () {
        _this.state.loading = true;
        var result = yield Object(_shared_firebase_users_ts__WEBPACK_IMPORTED_MODULE_2__["getAllUsers"])();
        console.log(result.json);

        if (!result.isError) {
          var userList = result.json.map(user => {
            user.name = user.displayName;
            user.image = "<img src=\"https://img.icons8.com/ios/16/000000/user-male-circle.png\">";
            return user;
          });
          _this.state.items = userList;
        }

        _this.state.loading = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvVXNlckxpc3QudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxrQkFEQTtBQUVBO0FBQUE7QUFBQSxHQUZBOztBQUdBO0FBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUE7QUFGQTtBQURBO0FBTUEsR0FWQTs7QUFXQTtBQUNBLDhEQURBOztBQUVBO0FBQ0E7QUFDQSxLQUpBOztBQUtBO0FBQ0E7QUFDQTs7QUFQQSxJQVhBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQTtBQUdBLEdBekJBO0FBMEJBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FKQTtBQUtBO0FBQ0E7O0FBQ0E7QUFaQTtBQWFBLEtBZEE7O0FBZUE7QUFBQTtBQUNBO0FBREE7QUFFQSxLQWpCQTs7QUFrQkE7QUFBQTs7QUFBQTtBQUNBOztBQUNBO0FBRkE7QUFHQSxLQXJCQTs7QUFzQkE7QUFBQTs7QUFBQTtBQUNBOztBQUNBO0FBRkE7QUFHQSxLQXpCQTs7QUEwQkE7QUFDQTtBQUNBOztBQTVCQTtBQTFCQSxHIiwiZmlsZSI6ImJ1bmRsZS42YjI2ZmZhM2MzOTJmZTI3M2NjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHZ1ZS9jb21wb25lbnRcblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcbmltcG9ydCBMaXN0U2Nyb2xsVmlldyBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RTY3JvbGxWaWV3LnZ1ZSdcbmltcG9ydCB7IGdldEFsbFVzZXJzIH0gZnJvbSAnLi4vX3NoYXJlZC9maXJlYmFzZS91c2Vycy50cydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVXNlckxpc3QnLFxuICBjb21wb25lbnRzOiB7IExpc3RTY3JvbGxWaWV3IH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDogbWFwU3RhdGUoe1xuICAgIHJvbGU6IHN0YXRlID0+IHN0YXRlLmF1dGhlbnRpY2F0aW9uTW9kdWxlLnVzZXJDb250ZXh0LnJvbGUsXG4gICAgbG9hZGluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmdcbiAgICB9LFxuICAgIGl0ZW1zKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXNcbiAgICB9LFxuICB9KSxcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coYFVzZXJMaXN0IDo6IG1vdW50ZWRgKVxuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5nZXRVc2VyTGlzdCgpXG4gICAgfSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIGdldFVzZXJMaXN0KCkge1xuICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nID0gdHJ1ZVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0QWxsVXNlcnMoKVxuICAgICAgY29uc29sZS5sb2cocmVzdWx0Lmpzb24pXG4gICAgICBpZiAoIXJlc3VsdC5pc0Vycm9yKSB7XG4gICAgICAgIGNvbnN0IHVzZXJMaXN0ID0gcmVzdWx0Lmpzb24ubWFwKHVzZXIgPT4ge1xuICAgICAgICAgIHVzZXIubmFtZSA9IHVzZXIuZGlzcGxheU5hbWVcbiAgICAgICAgICB1c2VyLmltYWdlID0gYDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMTYvMDAwMDAwL3VzZXItbWFsZS1jaXJjbGUucG5nXCI+YFxuICAgICAgICAgIHJldHVybiB1c2VyXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc3RhdGUuaXRlbXMgPSB1c2VyTGlzdFxuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nID0gZmFsc2VcbiAgICB9LFxuICAgIGFzeW5jIG9uSXRlbVRhcChldmVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfSxcbiAgICBhc3luYyBvbkl0ZW1EZWxldGVkKGl0ZW0pIHtcbiAgICAgIGFsZXJ0KGAke2l0ZW0ubmFtZX0gaXMgZGVsZXRlZGApXG4gICAgICB0aGlzLiRyZWZzLmxpc3QucmVmcmVzaCgpXG4gICAgfSxcbiAgICBhc3luYyBvbkl0ZW1NYXJrZWQoaXRlbSkge1xuICAgICAgYWxlcnQoYCR7aXRlbS5uYW1lfSBpcyBtYXJrZWRgKVxuICAgICAgdGhpcy4kcmVmcy5saXN0LnJlZnJlc2goKVxuICAgIH0sXG4gICAgb25OYXZpZ2F0aW9uQnV0dG9uVGFwKCkge1xuICAgICAgdGhpcy4kbmF2aWdhdGVCYWNrKClcbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG48dGVtcGxhdGU+XG4gIDxQYWdlPlxuICAgIDxBY3Rpb25CYXI+XG4gICAgICA8QnV0dG9uIEB0YXA9XCJvbk5hdmlnYXRpb25CdXR0b25UYXBcIiB0ZXh0PVwiQmFja1wiIC8+XG4gICAgPC9BY3Rpb25CYXI+XG4gICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yXG4gICAgICAgIDp2aXNpYmlsaXR5PVwic3RhdGUubG9hZGluZyA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcIlxuICAgICAgICA6YnVzeT1cInN0YXRlLmxvYWRpbmdcIlxuICAgICAgPjwvQWN0aXZpdHlJbmRpY2F0b3I+XG4gICAgICA8TGlzdFNjcm9sbFZpZXdcbiAgICAgICAgcmVmPVwibGlzdFwiXG4gICAgICAgIHYtaWY9XCIhc3RhdGUubG9hZGluZ1wiXG4gICAgICAgIDppdGVtcz1cInN0YXRlLml0ZW1zXCJcbiAgICAgICAgOnB1bGxUb1JlZnJlc2g9XCJmYWxzZVwiXG4gICAgICAgIDppdGVtUmVvcmRlcj1cImZhbHNlXCJcbiAgICAgICAgOnN3aXBlQWN0aW9ucz1cInRydWVcIlxuICAgICAgICBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiXG4gICAgICAgIEBpdGVtRGVsZXRlZD1cIm9uSXRlbURlbGV0ZWRcIlxuICAgICAgICBAaXRlbU1hcmtlZD1cIm9uSXRlbU1hcmtlZFwiXG4gICAgICA+XG4gICAgICA8L0xpc3RTY3JvbGxWaWV3PlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbkFjdGlvbkJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5TY3JvbGx2aWV3IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=