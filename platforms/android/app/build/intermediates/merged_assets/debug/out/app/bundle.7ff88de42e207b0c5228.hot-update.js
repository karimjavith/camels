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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvVXNlckxpc3QudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxrQkFEQTtBQUVBO0FBQUE7QUFBQSxHQUZBOztBQUdBO0FBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUE7QUFGQTtBQURBO0FBTUEsR0FWQTs7QUFXQTtBQUNBLDhEQURBOztBQUVBO0FBQ0E7QUFDQSxLQUpBOztBQUtBO0FBQ0E7QUFDQTs7QUFQQSxJQVhBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQXhCQTtBQXlCQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUpBO0FBS0E7QUFDQTs7QUFDQTtBQVhBO0FBWUEsS0FiQTs7QUFjQTtBQUFBO0FBQ0E7QUFEQTtBQUVBLEtBaEJBOztBQWlCQTtBQUFBOztBQUFBO0FBQ0E7O0FBQ0E7QUFGQTtBQUdBLEtBcEJBOztBQXFCQTtBQUFBOztBQUFBO0FBQ0E7O0FBQ0E7QUFGQTtBQUdBLEtBeEJBOztBQXlCQTtBQUNBO0FBQ0E7O0FBM0JBO0FBekJBLEciLCJmaWxlIjoiYnVuZGxlLjdmZjg4ZGU0MmUyMDdiMGM1MjI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdnVlL2NvbXBvbmVudFxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwU3RhdGUsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuaW1wb3J0IExpc3RTY3JvbGxWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdFNjcm9sbFZpZXcudnVlJ1xuaW1wb3J0IHsgZ2V0QWxsVXNlcnMgfSBmcm9tICcuLi9fc2hhcmVkL2ZpcmViYXNlL3VzZXJzLnRzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdVc2VyTGlzdCcsXG4gIGNvbXBvbmVudHM6IHsgTGlzdFNjcm9sbFZpZXcgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgfSxcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiBtYXBTdGF0ZSh7XG4gICAgcm9sZTogc3RhdGUgPT4gc3RhdGUuYXV0aGVudGljYXRpb25Nb2R1bGUudXNlckNvbnRleHQucm9sZSxcbiAgICBsb2FkaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubG9hZGluZ1xuICAgIH0sXG4gICAgaXRlbXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtc1xuICAgIH0sXG4gIH0pLFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZ2V0VXNlckxpc3QoKVxuICAgIH0pXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBnZXRVc2VyTGlzdCgpIHtcbiAgICAgIHRoaXMuc3RhdGUubG9hZGluZyA9IHRydWVcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldEFsbFVzZXJzKClcbiAgICAgIGlmICghcmVzdWx0LmlzRXJyb3IpIHtcbiAgICAgICAgY29uc3QgdXNlckxpc3QgPSByZXN1bHQuanNvbi5tYXAodXNlciA9PiB7XG4gICAgICAgICAgdXNlci5uYW1lID0gdXNlci5kaXNwbGF5TmFtZVxuICAgICAgICAgIHVzZXIuaW1hZ2UgPSBgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8xNi8wMDAwMDAvdXNlci1tYWxlLWNpcmNsZS5wbmdcIj5gXG4gICAgICAgICAgcmV0dXJuIHVzZXJcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zdGF0ZS5pdGVtcyA9IHVzZXJMaXN0XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlLmxvYWRpbmcgPSBmYWxzZVxuICAgIH0sXG4gICAgYXN5bmMgb25JdGVtVGFwKGV2ZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9LFxuICAgIGFzeW5jIG9uSXRlbURlbGV0ZWQoaXRlbSkge1xuICAgICAgYWxlcnQoYCR7aXRlbS5uYW1lfSBpcyBkZWxldGVkYClcbiAgICAgIHRoaXMuJHJlZnMubGlzdC5yZWZyZXNoKClcbiAgICB9LFxuICAgIGFzeW5jIG9uSXRlbU1hcmtlZChpdGVtKSB7XG4gICAgICBhbGVydChgJHtpdGVtLm5hbWV9IGlzIG1hcmtlZGApXG4gICAgICB0aGlzLiRyZWZzLmxpc3QucmVmcmVzaCgpXG4gICAgfSxcbiAgICBvbk5hdmlnYXRpb25CdXR0b25UYXAoKSB7XG4gICAgICB0aGlzLiRuYXZpZ2F0ZUJhY2soKVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD5cbjx0ZW1wbGF0ZT5cbiAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgIDxBY3Rpb25CYXI+XG4gICAgICA8QnV0dG9uIEB0YXA9XCJvbk5hdmlnYXRpb25CdXR0b25UYXBcIiB0ZXh0PVwiQmFja1wiIC8+XG4gICAgPC9BY3Rpb25CYXI+XG4gICAgPEFjdGl2aXR5SW5kaWNhdG9yXG4gICAgICA6dmlzaWJpbGl0eT1cInN0YXRlLmxvYWRpbmcgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXCJcbiAgICAgIDpidXN5PVwic3RhdGUubG9hZGluZ1wiXG4gICAgPjwvQWN0aXZpdHlJbmRpY2F0b3I+XG4gICAgPExpc3RTY3JvbGxWaWV3XG4gICAgICByZWY9XCJsaXN0XCJcbiAgICAgIHYtaWY9XCIhc3RhdGUubG9hZGluZ1wiXG4gICAgICA6aXRlbXM9XCJzdGF0ZS5pdGVtc1wiXG4gICAgICA6cHVsbFRvUmVmcmVzaD1cImZhbHNlXCJcbiAgICAgIDppdGVtUmVvcmRlcj1cImZhbHNlXCJcbiAgICAgIDpzd2lwZUFjdGlvbnM9XCJ0cnVlXCJcbiAgICAgIEBpdGVtVGFwPVwib25JdGVtVGFwXCJcbiAgICAgIEBpdGVtRGVsZXRlZD1cIm9uSXRlbURlbGV0ZWRcIlxuICAgICAgQGl0ZW1NYXJrZWQ9XCJvbkl0ZW1NYXJrZWRcIlxuICAgID5cbiAgICA8L0xpc3RTY3JvbGxWaWV3PlxuICA8L1N0YWNrTGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuc2Nyb2xsdmlldyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9