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

        _this2.$refs.userlist.refresh();
      })();
    },

    onItemMarked(item) {
      var _this3 = this;

      return _asyncToGenerator(function* () {
        alert("".concat(item.name, " is marked"));

        _this3.$refs.userlist.refresh();
      })();
    },

    onNavigationButtonTap() {
      this.$navigateBack();
    }

  }
});

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/UserList.vue?vue&type=template&id=644241b8&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        [
          _c("Button", {
            attrs: { text: "Back" },
            on: { tap: _vm.onNavigationButtonTap }
          })
        ],
        1
      ),
      _c(
        "StackLayout",
        { attrs: { orientation: "horizontal" } },
        [
          !_vm.state.loading
            ? _c("ListScrollView", {
                ref: "userlist",
                attrs: {
                  items: _vm.state.items,
                  pullToRefresh: false,
                  itemReorder: false,
                  swipeActions: true
                },
                on: {
                  itemTap: _vm.onItemTap,
                  itemDeleted: _vm.onItemDeleted,
                  itemMarked: _vm.onItemMarked
                }
              })
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvVXNlckxpc3QudnVlIiwid2VicGFjazovLy8uL3ZpZXdzL1VzZXJMaXN0LnZ1ZT83MjIyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxrQkFEQTtBQUVBO0FBQUE7QUFBQSxHQUZBOztBQUdBO0FBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUE7QUFGQTtBQURBO0FBTUEsR0FWQTs7QUFXQTtBQUNBLDhEQURBOztBQUVBO0FBQ0E7QUFDQSxLQUpBOztBQUtBO0FBQ0E7QUFDQTs7QUFQQSxJQVhBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQTtBQUdBLEdBekJBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsR0FoQ0E7QUFpQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FKQTtBQUtBLDBDQUNBLFdBREE7QUFFQTtBQUZBO0FBSUE7O0FBQ0E7QUFBQTtBQUFBO0FBZEE7QUFlQSxLQWhCQTs7QUFpQkE7QUFBQTtBQUNBO0FBREE7QUFFQSxLQW5CQTs7QUFvQkE7QUFBQTs7QUFBQTtBQUNBOztBQUNBO0FBRkE7QUFHQSxLQXZCQTs7QUF3QkE7QUFBQTs7QUFBQTtBQUNBOztBQUNBO0FBRkE7QUFHQSxLQTNCQTs7QUE0QkE7QUFDQTtBQUNBOztBQTlCQTtBQWpDQSxHOzs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZUFBZTtBQUNuQyxpQkFBaUI7QUFDakIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsNEJBQTRCLEVBQUU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjNlZjAyZjI0ZWUwNjM4M2EzOTE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdnVlL2NvbXBvbmVudFxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwU3RhdGUsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuaW1wb3J0IExpc3RTY3JvbGxWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdFNjcm9sbFZpZXcudnVlJ1xuaW1wb3J0IHsgZ2V0QWxsVXNlcnMgfSBmcm9tICcuLi9fc2hhcmVkL2ZpcmViYXNlL3VzZXJzLnRzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdVc2VyTGlzdCcsXG4gIGNvbXBvbmVudHM6IHsgTGlzdFNjcm9sbFZpZXcgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgfSxcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiBtYXBTdGF0ZSh7XG4gICAgcm9sZTogc3RhdGUgPT4gc3RhdGUuYXV0aGVudGljYXRpb25Nb2R1bGUudXNlckNvbnRleHQucm9sZSxcbiAgICBsb2FkaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubG9hZGluZ1xuICAgIH0sXG4gICAgaXRlbXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtc1xuICAgIH0sXG4gIH0pLFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhgVXNlckxpc3QgOjogbW91bnRlZGApXG4gICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmdldFVzZXJMaXN0KClcbiAgICB9KVxuICB9LFxuICB1cGRhdGVkOiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhgVXNlckxpc3QgOjogdXBkYXRlZGApXG4gICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhgbG9hZGluZyA6OiAke3RoaXMuc3RhdGUubG9hZGluZ31gKVxuICAgICAgY29uc29sZS5sb2coYGl0ZW1zIDo6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5pdGVtcyl9YClcbiAgICB9KVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgZ2V0VXNlckxpc3QoKSB7XG4gICAgICB0aGlzLnN0YXRlLmxvYWRpbmcgPSB0cnVlXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRBbGxVc2VycygpXG4gICAgICBpZiAoIXJlc3VsdC5pc0Vycm9yKSB7XG4gICAgICAgIGNvbnN0IHVzZXJMaXN0ID0gcmVzdWx0Lmpzb24udXNlcnMubWFwKHVzZXIgPT4ge1xuICAgICAgICAgIHVzZXIubmFtZSA9IHVzZXIuZGlzcGxheU5hbWVcbiAgICAgICAgICB1c2VyLmltYWdlID0gYGh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzE2LzAwMDAwMC91c2VyLW1hbGUtY2lyY2xlLnBuZ2BcbiAgICAgICAgICByZXR1cm4gdXNlclxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgaXRlbXM6IHVzZXJMaXN0LFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSB9XG4gICAgfSxcbiAgICBhc3luYyBvbkl0ZW1UYXAoZXZlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH0sXG4gICAgYXN5bmMgb25JdGVtRGVsZXRlZChpdGVtKSB7XG4gICAgICBhbGVydChgJHtpdGVtLm5hbWV9IGlzIGRlbGV0ZWRgKVxuICAgICAgdGhpcy4kcmVmcy51c2VybGlzdC5yZWZyZXNoKClcbiAgICB9LFxuICAgIGFzeW5jIG9uSXRlbU1hcmtlZChpdGVtKSB7XG4gICAgICBhbGVydChgJHtpdGVtLm5hbWV9IGlzIG1hcmtlZGApXG4gICAgICB0aGlzLiRyZWZzLnVzZXJsaXN0LnJlZnJlc2goKVxuICAgIH0sXG4gICAgb25OYXZpZ2F0aW9uQnV0dG9uVGFwKCkge1xuICAgICAgdGhpcy4kbmF2aWdhdGVCYWNrKClcbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG48dGVtcGxhdGU+XG4gIDxQYWdlPlxuICAgIDxBY3Rpb25CYXI+XG4gICAgICA8QnV0dG9uIEB0YXA9XCJvbk5hdmlnYXRpb25CdXR0b25UYXBcIiB0ZXh0PVwiQmFja1wiIC8+XG4gICAgPC9BY3Rpb25CYXI+XG4gICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgPCEtLSA8QWN0aXZpdHlJbmRpY2F0b3JcbiAgICAgICAgOnZpc2liaWxpdHk9XCJzdGF0ZS5sb2FkaW5nID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ1wiXG4gICAgICAgIDpidXN5PVwic3RhdGUubG9hZGluZ1wiXG4gICAgICA+PC9BY3Rpdml0eUluZGljYXRvcj4gLS0+XG4gICAgICA8TGlzdFNjcm9sbFZpZXdcbiAgICAgICAgcmVmPVwidXNlcmxpc3RcIlxuICAgICAgICB2LWlmPVwiIXN0YXRlLmxvYWRpbmdcIlxuICAgICAgICA6aXRlbXM9XCJzdGF0ZS5pdGVtc1wiXG4gICAgICAgIEBpdGVtVGFwPVwib25JdGVtVGFwXCJcbiAgICAgICAgQGl0ZW1EZWxldGVkPVwib25JdGVtRGVsZXRlZFwiXG4gICAgICAgIEBpdGVtTWFya2VkPVwib25JdGVtTWFya2VkXCJcbiAgICAgICAgOnB1bGxUb1JlZnJlc2g9XCJmYWxzZVwiXG4gICAgICAgIDppdGVtUmVvcmRlcj1cImZhbHNlXCJcbiAgICAgICAgOnN3aXBlQWN0aW9ucz1cInRydWVcIlxuICAgICAgPlxuICAgICAgPC9MaXN0U2Nyb2xsVmlldz5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG5BY3Rpb25CYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuU2Nyb2xsdmlldyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjwvc3R5bGU+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJCYWNrXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uTmF2aWdhdGlvbkJ1dHRvblRhcCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgICFfdm0uc3RhdGUubG9hZGluZ1xuICAgICAgICAgICAgPyBfYyhcIkxpc3RTY3JvbGxWaWV3XCIsIHtcbiAgICAgICAgICAgICAgICByZWY6IFwidXNlcmxpc3RcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5zdGF0ZS5pdGVtcyxcbiAgICAgICAgICAgICAgICAgIHB1bGxUb1JlZnJlc2g6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgaXRlbVJlb3JkZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgc3dpcGVBY3Rpb25zOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaXRlbVRhcDogX3ZtLm9uSXRlbVRhcCxcbiAgICAgICAgICAgICAgICAgIGl0ZW1EZWxldGVkOiBfdm0ub25JdGVtRGVsZXRlZCxcbiAgICAgICAgICAgICAgICAgIGl0ZW1NYXJrZWQ6IF92bS5vbkl0ZW1NYXJrZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=