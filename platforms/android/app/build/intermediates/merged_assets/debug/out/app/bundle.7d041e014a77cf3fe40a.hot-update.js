webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ListScrollView.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ListScrollView',
  props: {
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    pullToRefresh: {
      type: Boolean,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: false
    },
    itemReorder: {
      type: Boolean,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: false
    },
    swipeActions: {
      type: Boolean,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: false
    }
  },

  data() {
    return {
      state: {
        markText: 'Mark'
      }
    };
  },

  methods: {
    onItemTap(event) {
      this.$emit('itemTap', event);
    },

    onPullToRefreshInitiated(_ref) {
      var {
        object
      } = _ref;
      console.log('Pulling...');
      this.$emit('pulling', object);
    },

    onItemReordered(_ref2) {
      var {
        index,
        data,
        object
      } = _ref2;
      console.log("Item reordered from index ".concat(index, " to ").concat(data.targetIndex));
    },

    onSwipeStarted(_ref3) {
      var {
        data,
        object
      } = _ref3;
      console.log("Swipe started");
      var swipeLimits = data.swipeLimits;
      var swipeView = object;
      var leftItem = swipeView.getViewById('mark-view');
      var rightItem = swipeView.getViewById('delete-view');
      swipeLimits.left = leftItem.getMeasuredWidth();
      swipeLimits.right = rightItem.getMeasuredWidth();
      swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    },

    onLeftSwipeClick(_ref4) {
      var {
        object
      } = _ref4;
      console.log('left action tapped');
      this.$emit('itemMarked', object.bindingContext);
      this.$refs.listView.notifySwipeToExecuteFinished();
    },

    onRightSwipeClick(_ref5) {
      var {
        object
      } = _ref5;
      console.log('right action tapped'); // remove item

      this.$emit('itemDeleted', object.bindingContext);
      this.$refs.listView.notifySwipeToExecuteFinished();
    },

    refresh() {
      this.$refs.listView.refresh();
    }

  }
});

/***/ }),

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
        console.log(item);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9MaXN0U2Nyb2xsVmlldy52dWUiLCJ3ZWJwYWNrOi8vL3ZpZXdzL1VzZXJMaXN0LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBO0FBQ0Esd0JBREE7QUFFQTtBQUNBO0FBQ0EsaUJBREE7QUFFQTtBQUNBO0FBQ0E7QUFKQSxLQURBO0FBT0E7QUFDQSxtQkFEQTtBQUVBO0FBQ0E7QUFIQSxLQVBBO0FBWUE7QUFDQSxtQkFEQTtBQUVBO0FBQ0E7QUFIQSxLQVpBO0FBaUJBO0FBQ0EsbUJBREE7QUFFQTtBQUNBO0FBSEE7QUFqQkEsR0FGQTs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0EsR0EvQkE7O0FBZ0NBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsS0FQQTs7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLEtBVkE7O0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXBCQTs7QUFxQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXpCQTs7QUEwQkE7QUFBQTtBQUFBO0FBQUE7QUFDQSx5Q0FEQSxDQUVBOztBQUNBO0FBQ0E7QUFDQSxLQS9CQTs7QUFnQ0E7QUFDQTtBQUNBOztBQWxDQTtBQWhDQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0Esa0JBREE7QUFFQTtBQUFBO0FBQUEsR0FGQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBO0FBRkE7QUFEQTtBQU1BLEdBVkE7O0FBV0E7QUFDQSw4REFEQTs7QUFFQTtBQUNBO0FBQ0EsS0FKQTs7QUFLQTtBQUNBO0FBQ0E7O0FBUEEsSUFYQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQXpCQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLEdBaENBO0FBaUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsV0FQQTtBQVFBLDBDQUNBLFdBREE7QUFFQTtBQUZBO0FBSUE7O0FBQ0E7QUFBQTtBQUFBO0FBakJBO0FBa0JBLEtBbkJBOztBQW9CQTtBQUFBO0FBQUEsS0FwQkE7O0FBcUJBO0FBQUE7O0FBQUE7QUFDQTs7QUFDQTtBQUZBO0FBR0EsS0F4QkE7O0FBeUJBO0FBQUE7O0FBQUE7QUFDQTtBQUNBLHNCQUNBLDJHQUNBLFNBREEsaUNBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBLGlCQUZBO0FBR0Esc0JBSEE7QUFJQTtBQUpBOztBQU1BO0FBQ0E7QUFDQTs7QUFDQTtBQWpCQTtBQWtCQSxLQTNDQTs7QUE0Q0E7QUFDQTtBQUNBOztBQTlDQTtBQWpDQSxHIiwiZmlsZSI6ImJ1bmRsZS43ZDA0MWUwMTRhNzdjZjNmZTQwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9naXRodWIuY29tL21zYWVsaWNlcy9ucy11aS12dWUtZGVtby9ibG9iL21hc3Rlci9hcHAvdmlld3MvTGlzdC52dWVcbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdMaXN0U2Nyb2xsVmlldycsXG4gIHByb3BzOiB7XG4gICAgaXRlbXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfSxcbiAgICB9LFxuICAgIHB1bGxUb1JlZnJlc2g6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdnVlL3JlcXVpcmUtdmFsaWQtZGVmYXVsdC1wcm9wXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICAgIGl0ZW1SZW9yZGVyOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZ1ZS9yZXF1aXJlLXZhbGlkLWRlZmF1bHQtcHJvcFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgICBzd2lwZUFjdGlvbnM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdnVlL3JlcXVpcmUtdmFsaWQtZGVmYXVsdC1wcm9wXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBtYXJrVGV4dDogJ01hcmsnLFxuICAgICAgfSxcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkl0ZW1UYXAoZXZlbnQpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2l0ZW1UYXAnLCBldmVudClcbiAgICB9LFxuICAgIG9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZCh7IG9iamVjdCB9KSB7XG4gICAgICBjb25zb2xlLmxvZygnUHVsbGluZy4uLicpXG4gICAgICB0aGlzLiRlbWl0KCdwdWxsaW5nJywgb2JqZWN0KVxuICAgIH0sXG4gICAgb25JdGVtUmVvcmRlcmVkKHsgaW5kZXgsIGRhdGEsIG9iamVjdCB9KSB7XG4gICAgICBjb25zb2xlLmxvZyhgSXRlbSByZW9yZGVyZWQgZnJvbSBpbmRleCAke2luZGV4fSB0byAke2RhdGEudGFyZ2V0SW5kZXh9YClcbiAgICB9LFxuICAgIG9uU3dpcGVTdGFydGVkKHsgZGF0YSwgb2JqZWN0IH0pIHtcbiAgICAgIGNvbnNvbGUubG9nKGBTd2lwZSBzdGFydGVkYClcbiAgICAgIGNvbnN0IHN3aXBlTGltaXRzID0gZGF0YS5zd2lwZUxpbWl0c1xuICAgICAgY29uc3Qgc3dpcGVWaWV3ID0gb2JqZWN0XG4gICAgICBjb25zdCBsZWZ0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZCgnbWFyay12aWV3JylcbiAgICAgIGNvbnN0IHJpZ2h0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZCgnZGVsZXRlLXZpZXcnKVxuICAgICAgc3dpcGVMaW1pdHMubGVmdCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKVxuICAgICAgc3dpcGVMaW1pdHMucmlnaHQgPSByaWdodEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpXG4gICAgICBzd2lwZUxpbWl0cy50aHJlc2hvbGQgPSBsZWZ0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCkgLyAyXG4gICAgfSxcbiAgICBvbkxlZnRTd2lwZUNsaWNrKHsgb2JqZWN0IH0pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdsZWZ0IGFjdGlvbiB0YXBwZWQnKVxuICAgICAgdGhpcy4kZW1pdCgnaXRlbU1hcmtlZCcsIG9iamVjdC5iaW5kaW5nQ29udGV4dClcbiAgICAgIHRoaXMuJHJlZnMubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpXG4gICAgfSxcbiAgICBvblJpZ2h0U3dpcGVDbGljayh7IG9iamVjdCB9KSB7XG4gICAgICBjb25zb2xlLmxvZygncmlnaHQgYWN0aW9uIHRhcHBlZCcpXG4gICAgICAvLyByZW1vdmUgaXRlbVxuICAgICAgdGhpcy4kZW1pdCgnaXRlbURlbGV0ZWQnLCBvYmplY3QuYmluZGluZ0NvbnRleHQpXG4gICAgICB0aGlzLiRyZWZzLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKVxuICAgIH0sXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgIHRoaXMuJHJlZnMubGlzdFZpZXcucmVmcmVzaCgpXG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuPHRlbXBsYXRlPlxuICA8UmFkTGlzdFZpZXdcbiAgICByZWY9XCJsaXN0Vmlld1wiXG4gICAgOnB1bGxUb1JlZnJlc2g9XCJwdWxsVG9SZWZyZXNoXCJcbiAgICA6aXRlbVJlb3JkZXI9XCJpdGVtUmVvcmRlclwiXG4gICAgOnN3aXBlQWN0aW9ucz1cInN3aXBlQWN0aW9uc1wiXG4gICAgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIlxuICAgIEBwdWxsVG9SZWZyZXNoSW5pdGlhdGVkPVwib25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkXCJcbiAgICBAaXRlbVJlb3JkZXJlZD1cIm9uSXRlbVJlb3JkZXJlZFwiXG4gICAgQGl0ZW1Td2lwZVByb2dyZXNzU3RhcnRlZD1cIm9uU3dpcGVTdGFydGVkXCJcbiAgICBmb3I9XCJpdGVtIGluIGl0ZW1zXCJcbiAgPlxuICAgIDx2LXRlbXBsYXRlPlxuICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjUwLCAqXCIgcm93cz1cIipcIiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgPEltYWdlIDpzcmM9XCJpdGVtLmltYWdlXCIgY29sPVwiMFwiIGNsYXNzPVwidGh1bWJuYWlsXCIgLz5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGNvbD1cIjFcIj5cbiAgICAgICAgICA8bGFiZWwgOnRleHQ9XCJpdGVtLm5hbWVcIiBjbGFzcz1cImgyXCIgY29sPVwiMVwiIC8+XG4gICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiaXRlbS5kZXNjcmlwdGlvblwiIGNsYXNzPVwicFwiIGNvbD1cIjFcIiAvPlxuICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgOnRleHQ9XCJpdGVtLnNlY29uZGFyeUljb24gfCBmb250aWNvblwiXG4gICAgICAgICAgICB2LWlmPVwiQm9vbGVhbihpdGVtLnNlY29uZGFyeUljb24pXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZmEgdC0xNlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgIDwvR3JpZExheW91dD5cbiAgICA8L3YtdGVtcGxhdGU+XG5cbiAgICA8di10ZW1wbGF0ZSBuYW1lPVwiaXRlbXN3aXBlXCI+XG4gICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiYXV0bywgKiwgYXV0b1wiIGJhY2tncm91bmRDb2xvcj1cIldoaXRlXCI+XG4gICAgICAgIDxTdGFja0xheW91dFxuICAgICAgICAgIGlkPVwibWFyay12aWV3XCJcbiAgICAgICAgICBAdGFwPVwib25MZWZ0U3dpcGVDbGlja1wiXG4gICAgICAgICAgY29sPVwiMFwiXG4gICAgICAgICAgY2xhc3M9XCJzd2lwZS1pdGVtIGxlZnRcIlxuICAgICAgICAgIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJzdGF0ZS5tYXJrVGV4dFwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDxTdGFja0xheW91dFxuICAgICAgICAgIGlkPVwiZGVsZXRlLXZpZXdcIlxuICAgICAgICAgIEB0YXA9XCJvblJpZ2h0U3dpcGVDbGlja1wiXG4gICAgICAgICAgY29sPVwiMlwiXG4gICAgICAgICAgY2xhc3M9XCJzd2lwZS1pdGVtIHJpZ2h0XCJcbiAgICAgICAgICBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIlxuICAgICAgICA+XG4gICAgICAgICAgPExhYmVsIHRleHQ9XCJkZWxldGVcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgPC9HcmlkTGF5b3V0PlxuICAgIDwvdi10ZW1wbGF0ZT5cbiAgPC9SYWRMaXN0Vmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLnQtMTYge1xuICBmb250LXNpemU6IDE2O1xufVxuPC9zdHlsZT5cbiIsIi8vIEB2dWUvY29tcG9uZW50XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBTdGF0ZSwgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgTGlzdFNjcm9sbFZpZXcgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0U2Nyb2xsVmlldy52dWUnXG5pbXBvcnQgeyBnZXRBbGxVc2VycyB9IGZyb20gJy4uL19zaGFyZWQvZmlyZWJhc2UvdXNlcnMudHMnXG5pbXBvcnQgeyBBcHBSb2xlcyB9IGZyb20gJy4uL19zaGFyZWQvZW51bSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVXNlckxpc3QnLFxuICBjb21wb25lbnRzOiB7IExpc3RTY3JvbGxWaWV3IH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDogbWFwU3RhdGUoe1xuICAgIHJvbGU6IHN0YXRlID0+IHN0YXRlLmF1dGhlbnRpY2F0aW9uTW9kdWxlLnVzZXJDb250ZXh0LnJvbGUsXG4gICAgbG9hZGluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmdcbiAgICB9LFxuICAgIGl0ZW1zKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXNcbiAgICB9LFxuICB9KSxcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coYFVzZXJMaXN0IDo6IG1vdW50ZWRgKVxuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5nZXRVc2VyTGlzdCgpXG4gICAgfSlcbiAgfSxcbiAgdXBkYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coYFVzZXJMaXN0IDo6IHVwZGF0ZWRgKVxuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coYGxvYWRpbmcgOjogJHt0aGlzLnN0YXRlLmxvYWRpbmd9YClcbiAgICAgIGNvbnNvbGUubG9nKGBpdGVtcyA6OiAke0pTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuaXRlbXMpfWApXG4gICAgfSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIGdldFVzZXJMaXN0KCkge1xuICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nID0gdHJ1ZVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0QWxsVXNlcnMoKVxuICAgICAgaWYgKCFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICBjb25zdCB1c2VyTGlzdCA9IHJlc3VsdC5qc29uLnVzZXJzLm1hcCh1c2VyID0+IHtcbiAgICAgICAgICB1c2VyLm5hbWUgPSB1c2VyLmRpc3BsYXlOYW1lXG4gICAgICAgICAgdXNlci5pbWFnZSA9IGBodHRwczovL2ltZy5pY29uczguY29tL2lvcy8xNi8wMDAwMDAvdXNlci1tYWxlLWNpcmNsZS5wbmdgXG4gICAgICAgICAgaWYgKHVzZXIucm9sZSA9PT0gQXBwUm9sZXMuQWRtaW4pIHtcbiAgICAgICAgICAgIHVzZXIuc2Vjb25kYXJ5SWNvbiA9ICdmYS11bml2ZXJzYWwtYWNjZXNzJ1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdXNlclxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgaXRlbXM6IHVzZXJMaXN0LFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSB9XG4gICAgfSxcbiAgICBhc3luYyBvbkl0ZW1UYXAoZXZlbnQpIHt9LFxuICAgIGFzeW5jIG9uSXRlbURlbGV0ZWQoaXRlbSkge1xuICAgICAgYWxlcnQoYCR7aXRlbS5uYW1lfSBpcyBkZWxldGVkYClcbiAgICAgIHRoaXMuJHJlZnMudXNlcmxpc3QucmVmcmVzaCgpXG4gICAgfSxcbiAgICBhc3luYyBvbkl0ZW1NYXJrZWQoaXRlbSkge1xuICAgICAgY29uc29sZS5sb2coaXRlbSlcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgICBpdGVtLnJvbGUgIT09IEFwcFJvbGVzLkFkbWluXG4gICAgICAgICAgPyBgQXNzaWduIGFkbWluIHJvbGUgdG8gJHtpdGVtLm5hbWV9ID9gXG4gICAgICAgICAgOiBgUmVtb3ZlIGFkbWluIGFjY2VzcyA/YFxuICAgICAgY29uc3Qgb2tCdXR0b25UZXh0ID0gaXRlbS5yb2xlICE9PSBBcHBSb2xlcy5BZG1pbiA/IGBBc3NpZ25gIDogYFJlbW92ZSBhY2Nlc3NgXG4gICAgICBjb25zdCBjYW5jZWxCdXR0b25UZXh0ID0gaXRlbS5yb2xlICE9PSBBcHBSb2xlcy5BZG1pbiA/IGBEb24ndCBhc3NpZ25gIDogYEtlZXAgdGhlIHJvbGVgXG4gICAgICBjb25zdCBwcm9tcHRQcm9taXNlID0gYXdhaXQgcHJvbXB0KHtcbiAgICAgICAgdGl0bGU6ICdNYXJrIGFzIEFkbWluJyxcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgb2tCdXR0b25UZXh0LFxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0LFxuICAgICAgfSlcbiAgICAgIGlmIChwcm9tcHRQcm9taXNlLnJlc3VsdCkge1xuICAgICAgICBhbGVydChgJHtwcm9tcHRQcm9taXNlLnJlc3VsdH0gaXMgbWFya2VkYClcbiAgICAgIH1cbiAgICAgIHRoaXMuJHJlZnMudXNlcmxpc3QucmVmcmVzaCgpXG4gICAgfSxcbiAgICBvbk5hdmlnYXRpb25CdXR0b25UYXAoKSB7XG4gICAgICB0aGlzLiRuYXZpZ2F0ZUJhY2soKVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD5cbjx0ZW1wbGF0ZT5cbiAgPFBhZ2U+XG4gICAgPEFjdGlvbkJhcj5cbiAgICAgIDxCdXR0b24gQHRhcD1cIm9uTmF2aWdhdGlvbkJ1dHRvblRhcFwiIHRleHQ9XCJCYWNrXCIgLz5cbiAgICA8L0FjdGlvbkJhcj5cbiAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XG4gICAgICA8IS0tIDxBY3Rpdml0eUluZGljYXRvclxuICAgICAgICA6dmlzaWJpbGl0eT1cInN0YXRlLmxvYWRpbmcgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXCJcbiAgICAgICAgOmJ1c3k9XCJzdGF0ZS5sb2FkaW5nXCJcbiAgICAgID48L0FjdGl2aXR5SW5kaWNhdG9yPiAtLT5cbiAgICAgIDxMaXN0U2Nyb2xsVmlld1xuICAgICAgICByZWY9XCJ1c2VybGlzdFwiXG4gICAgICAgIDppdGVtcz1cInN0YXRlLml0ZW1zXCJcbiAgICAgICAgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIlxuICAgICAgICBAaXRlbURlbGV0ZWQ9XCJvbkl0ZW1EZWxldGVkXCJcbiAgICAgICAgQGl0ZW1NYXJrZWQ9XCJvbkl0ZW1NYXJrZWRcIlxuICAgICAgICA6c3dpcGVBY3Rpb25zPVwidHJ1ZVwiXG4gICAgICA+XG4gICAgICA8L0xpc3RTY3JvbGxWaWV3PlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbkFjdGlvbkJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5TY3JvbGx2aWV3IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=