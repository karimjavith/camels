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
      console.log(data);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9MaXN0U2Nyb2xsVmlldy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQTtBQUNBLHdCQURBO0FBRUE7QUFDQTtBQUNBLGlCQURBO0FBRUE7QUFDQTtBQUNBO0FBSkEsS0FEQTtBQU9BO0FBQ0EsbUJBREE7QUFFQTtBQUNBO0FBSEEsS0FQQTtBQVlBO0FBQ0EsbUJBREE7QUFFQTtBQUNBO0FBSEEsS0FaQTtBQWlCQTtBQUNBLG1CQURBO0FBRUE7QUFDQTtBQUhBO0FBakJBLEdBRkE7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBLEdBL0JBOztBQWdDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBOztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLEtBUEE7O0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxLQVZBOztBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXJCQTs7QUFzQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTFCQTs7QUEyQkE7QUFBQTtBQUFBO0FBQUE7QUFDQSx5Q0FEQSxDQUVBOztBQUNBO0FBQ0E7QUFDQSxLQWhDQTs7QUFpQ0E7QUFDQTtBQUNBOztBQW5DQTtBQWhDQSxHIiwiZmlsZSI6ImJ1bmRsZS43ZmU2Y2VkZGM5OTJhOTZiMDIwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9naXRodWIuY29tL21zYWVsaWNlcy9ucy11aS12dWUtZGVtby9ibG9iL21hc3Rlci9hcHAvdmlld3MvTGlzdC52dWVcbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdMaXN0U2Nyb2xsVmlldycsXG4gIHByb3BzOiB7XG4gICAgaXRlbXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfSxcbiAgICB9LFxuICAgIHB1bGxUb1JlZnJlc2g6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdnVlL3JlcXVpcmUtdmFsaWQtZGVmYXVsdC1wcm9wXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICAgIGl0ZW1SZW9yZGVyOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZ1ZS9yZXF1aXJlLXZhbGlkLWRlZmF1bHQtcHJvcFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgICBzd2lwZUFjdGlvbnM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdnVlL3JlcXVpcmUtdmFsaWQtZGVmYXVsdC1wcm9wXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBtYXJrVGV4dDogJ01hcmsnLFxuICAgICAgfSxcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkl0ZW1UYXAoZXZlbnQpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2l0ZW1UYXAnLCBldmVudClcbiAgICB9LFxuICAgIG9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZCh7IG9iamVjdCB9KSB7XG4gICAgICBjb25zb2xlLmxvZygnUHVsbGluZy4uLicpXG4gICAgICB0aGlzLiRlbWl0KCdwdWxsaW5nJywgb2JqZWN0KVxuICAgIH0sXG4gICAgb25JdGVtUmVvcmRlcmVkKHsgaW5kZXgsIGRhdGEsIG9iamVjdCB9KSB7XG4gICAgICBjb25zb2xlLmxvZyhgSXRlbSByZW9yZGVyZWQgZnJvbSBpbmRleCAke2luZGV4fSB0byAke2RhdGEudGFyZ2V0SW5kZXh9YClcbiAgICB9LFxuICAgIG9uU3dpcGVTdGFydGVkKHsgZGF0YSwgb2JqZWN0IH0pIHtcbiAgICAgIGNvbnNvbGUubG9nKGBTd2lwZSBzdGFydGVkYClcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICBjb25zdCBzd2lwZUxpbWl0cyA9IGRhdGEuc3dpcGVMaW1pdHNcbiAgICAgIGNvbnN0IHN3aXBlVmlldyA9IG9iamVjdFxuICAgICAgY29uc3QgbGVmdEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQoJ21hcmstdmlldycpXG4gICAgICBjb25zdCByaWdodEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQoJ2RlbGV0ZS12aWV3JylcbiAgICAgIHN3aXBlTGltaXRzLmxlZnQgPSBsZWZ0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKClcbiAgICAgIHN3aXBlTGltaXRzLnJpZ2h0ID0gcmlnaHRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKVxuICAgICAgc3dpcGVMaW1pdHMudGhyZXNob2xkID0gbGVmdEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpIC8gMlxuICAgIH0sXG4gICAgb25MZWZ0U3dpcGVDbGljayh7IG9iamVjdCB9KSB7XG4gICAgICBjb25zb2xlLmxvZygnbGVmdCBhY3Rpb24gdGFwcGVkJylcbiAgICAgIHRoaXMuJGVtaXQoJ2l0ZW1NYXJrZWQnLCBvYmplY3QuYmluZGluZ0NvbnRleHQpXG4gICAgICB0aGlzLiRyZWZzLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKVxuICAgIH0sXG4gICAgb25SaWdodFN3aXBlQ2xpY2soeyBvYmplY3QgfSkge1xuICAgICAgY29uc29sZS5sb2coJ3JpZ2h0IGFjdGlvbiB0YXBwZWQnKVxuICAgICAgLy8gcmVtb3ZlIGl0ZW1cbiAgICAgIHRoaXMuJGVtaXQoJ2l0ZW1EZWxldGVkJywgb2JqZWN0LmJpbmRpbmdDb250ZXh0KVxuICAgICAgdGhpcy4kcmVmcy5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKClcbiAgICB9LFxuICAgIHJlZnJlc2goKSB7XG4gICAgICB0aGlzLiRyZWZzLmxpc3RWaWV3LnJlZnJlc2goKVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD5cbjx0ZW1wbGF0ZT5cbiAgPFJhZExpc3RWaWV3XG4gICAgcmVmPVwibGlzdFZpZXdcIlxuICAgIDpwdWxsVG9SZWZyZXNoPVwicHVsbFRvUmVmcmVzaFwiXG4gICAgOml0ZW1SZW9yZGVyPVwiaXRlbVJlb3JkZXJcIlxuICAgIDpzd2lwZUFjdGlvbnM9XCJzd2lwZUFjdGlvbnNcIlxuICAgIEBpdGVtVGFwPVwib25JdGVtVGFwXCJcbiAgICBAcHVsbFRvUmVmcmVzaEluaXRpYXRlZD1cIm9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZFwiXG4gICAgQGl0ZW1SZW9yZGVyZWQ9XCJvbkl0ZW1SZW9yZGVyZWRcIlxuICAgIEBpdGVtU3dpcGVQcm9ncmVzc1N0YXJ0ZWQ9XCJvblN3aXBlU3RhcnRlZFwiXG4gICAgZm9yPVwiaXRlbSBpbiBpdGVtc1wiXG4gID5cbiAgICA8di10ZW1wbGF0ZT5cbiAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCI1MCwgKlwiIHJvd3M9XCIqXCIgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgIDxJbWFnZSA6c3JjPVwiaXRlbS5pbWFnZVwiIGNvbD1cIjBcIiBjbGFzcz1cInRodW1ibmFpbFwiIC8+XG4gICAgICAgIDxTdGFja0xheW91dCBjb2w9XCIxXCI+XG4gICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiaXRlbS5uYW1lXCIgY2xhc3M9XCJoMlwiIGNvbD1cIjFcIiAvPlxuICAgICAgICAgIDxsYWJlbCA6dGV4dD1cIml0ZW0uZGVzY3JpcHRpb25cIiBjbGFzcz1cInBcIiBjb2w9XCIxXCIgLz5cbiAgICAgICAgICA8TGFiZWxcbiAgICAgICAgICAgIDp0ZXh0PVwiaXRlbS5zZWNvbmRhcnlJY29uIHwgZm9udGljb25cIlxuICAgICAgICAgICAgdi1pZj1cIkJvb2xlYW4oaXRlbS5zZWNvbmRhcnlJY29uKVwiXG4gICAgICAgICAgICBjbGFzcz1cImZhIHQtMTZcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgPC92LXRlbXBsYXRlPlxuXG4gICAgPHYtdGVtcGxhdGUgbmFtZT1cIml0ZW1zd2lwZVwiPlxuICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cImF1dG8sICosIGF1dG9cIiBiYWNrZ3JvdW5kQ29sb3I9XCJXaGl0ZVwiPlxuICAgICAgICA8U3RhY2tMYXlvdXRcbiAgICAgICAgICBpZD1cIm1hcmstdmlld1wiXG4gICAgICAgICAgQHRhcD1cIm9uTGVmdFN3aXBlQ2xpY2tcIlxuICAgICAgICAgIGNvbD1cIjBcIlxuICAgICAgICAgIGNsYXNzPVwic3dpcGUtaXRlbSBsZWZ0XCJcbiAgICAgICAgICBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIlxuICAgICAgICA+XG4gICAgICAgICAgPExhYmVsIDp0ZXh0PVwic3RhdGUubWFya1RleHRcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICA8U3RhY2tMYXlvdXRcbiAgICAgICAgICBpZD1cImRlbGV0ZS12aWV3XCJcbiAgICAgICAgICBAdGFwPVwib25SaWdodFN3aXBlQ2xpY2tcIlxuICAgICAgICAgIGNvbD1cIjJcIlxuICAgICAgICAgIGNsYXNzPVwic3dpcGUtaXRlbSByaWdodFwiXG4gICAgICAgICAgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiZGVsZXRlXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgIDwvR3JpZExheW91dD5cbiAgICA8L3YtdGVtcGxhdGU+XG4gIDwvUmFkTGlzdFZpZXc+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi50LTE2IHtcbiAgZm9udC1zaXplOiAxNjtcbn1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9