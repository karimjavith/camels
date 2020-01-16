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
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    },
    pullToRefresh: {
      type: String,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: false
    },
    itemReorder: {
      type: String,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: false
    },
    swipeActions: {
      type: String,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: false
    }
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9MaXN0U2Nyb2xsVmlldy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQTtBQUNBLHdCQURBO0FBRUE7QUFDQTtBQUNBLGlCQURBO0FBRUE7QUFDQTtBQUhBLEtBREE7QUFNQTtBQUNBLGtCQURBO0FBRUE7QUFDQTtBQUhBLEtBTkE7QUFXQTtBQUNBLGtCQURBO0FBRUE7QUFDQTtBQUhBLEtBWEE7QUFnQkE7QUFDQSxrQkFEQTtBQUVBO0FBQ0E7QUFIQTtBQWhCQSxHQUZBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsS0FQQTs7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLEtBVkE7O0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXBCQTs7QUFxQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXpCQTs7QUEwQkE7QUFBQTtBQUFBO0FBQUE7QUFDQSx5Q0FEQSxDQUVBOztBQUNBO0FBQ0E7QUFDQSxLQS9CQTs7QUFnQ0E7QUFDQTtBQUNBOztBQWxDQTtBQXhCQSxHIiwiZmlsZSI6ImJ1bmRsZS45MWYzNDU1ZGUxODhmNTU5YmM1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9naXRodWIuY29tL21zYWVsaWNlcy9ucy11aS12dWUtZGVtby9ibG9iL21hc3Rlci9hcHAvdmlld3MvTGlzdC52dWVcbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdMaXN0U2Nyb2xsVmlldycsXG4gIHByb3BzOiB7XG4gICAgaXRlbXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZ1ZS9yZXF1aXJlLXZhbGlkLWRlZmF1bHQtcHJvcFxuICAgICAgZGVmYXVsdDogW10sXG4gICAgfSxcbiAgICBwdWxsVG9SZWZyZXNoOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdnVlL3JlcXVpcmUtdmFsaWQtZGVmYXVsdC1wcm9wXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICAgIGl0ZW1SZW9yZGVyOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdnVlL3JlcXVpcmUtdmFsaWQtZGVmYXVsdC1wcm9wXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICAgIHN3aXBlQWN0aW9uczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZ1ZS9yZXF1aXJlLXZhbGlkLWRlZmF1bHQtcHJvcFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uSXRlbVRhcChldmVudCkge1xuICAgICAgdGhpcy4kZW1pdCgnaXRlbVRhcCcsIGV2ZW50KVxuICAgIH0sXG4gICAgb25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkKHsgb2JqZWN0IH0pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQdWxsaW5nLi4uJylcbiAgICAgIHRoaXMuJGVtaXQoJ3B1bGxpbmcnLCBvYmplY3QpXG4gICAgfSxcbiAgICBvbkl0ZW1SZW9yZGVyZWQoeyBpbmRleCwgZGF0YSwgb2JqZWN0IH0pIHtcbiAgICAgIGNvbnNvbGUubG9nKGBJdGVtIHJlb3JkZXJlZCBmcm9tIGluZGV4ICR7aW5kZXh9IHRvICR7ZGF0YS50YXJnZXRJbmRleH1gKVxuICAgIH0sXG4gICAgb25Td2lwZVN0YXJ0ZWQoeyBkYXRhLCBvYmplY3QgfSkge1xuICAgICAgY29uc29sZS5sb2coYFN3aXBlIHN0YXJ0ZWRgKVxuICAgICAgY29uc3Qgc3dpcGVMaW1pdHMgPSBkYXRhLnN3aXBlTGltaXRzXG4gICAgICBjb25zdCBzd2lwZVZpZXcgPSBvYmplY3RcbiAgICAgIGNvbnN0IGxlZnRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkKCdtYXJrLXZpZXcnKVxuICAgICAgY29uc3QgcmlnaHRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkKCdkZWxldGUtdmlldycpXG4gICAgICBzd2lwZUxpbWl0cy5sZWZ0ID0gbGVmdEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpXG4gICAgICBzd2lwZUxpbWl0cy5yaWdodCA9IHJpZ2h0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKClcbiAgICAgIHN3aXBlTGltaXRzLnRocmVzaG9sZCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKSAvIDJcbiAgICB9LFxuICAgIG9uTGVmdFN3aXBlQ2xpY2soeyBvYmplY3QgfSkge1xuICAgICAgY29uc29sZS5sb2coJ2xlZnQgYWN0aW9uIHRhcHBlZCcpXG4gICAgICB0aGlzLiRlbWl0KCdpdGVtTWFya2VkJywgb2JqZWN0LmJpbmRpbmdDb250ZXh0KVxuICAgICAgdGhpcy4kcmVmcy5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKClcbiAgICB9LFxuICAgIG9uUmlnaHRTd2lwZUNsaWNrKHsgb2JqZWN0IH0pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdyaWdodCBhY3Rpb24gdGFwcGVkJylcbiAgICAgIC8vIHJlbW92ZSBpdGVtXG4gICAgICB0aGlzLiRlbWl0KCdpdGVtRGVsZXRlZCcsIG9iamVjdC5iaW5kaW5nQ29udGV4dClcbiAgICAgIHRoaXMuJHJlZnMubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpXG4gICAgfSxcbiAgICByZWZyZXNoKCkge1xuICAgICAgdGhpcy4kcmVmcy5saXN0Vmlldy5yZWZyZXNoKClcbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG48dGVtcGxhdGU+XG4gIDxSYWRMaXN0Vmlld1xuICAgIHJlZj1cImxpc3RWaWV3XCJcbiAgICBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiXG4gICAgQHB1bGxUb1JlZnJlc2hJbml0aWF0ZWQ9XCJvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWRcIlxuICAgIEBpdGVtUmVvcmRlcmVkPVwib25JdGVtUmVvcmRlcmVkXCJcbiAgICBAaXRlbVN3aXBlUHJvZ3Jlc3NTdGFydGVkPVwib25Td2lwZVN0YXJ0ZWRcIlxuICAgIGZvcj1cIml0ZW0gaW4gaXRlbXNcIlxuICAgIHB1bGxUb1JlZnJlc2g9XCJwdWxsVG9SZWZyZXNoXCJcbiAgICBpdGVtUmVvcmRlcj1cIml0ZW1SZW9yZGVyXCJcbiAgICBzd2lwZUFjdGlvbnM9XCJzd2lwZUFjdGlvbnNcIlxuICA+XG4gICAgPHYtdGVtcGxhdGU+XG4gICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiNTAsICpcIiByb3dzPVwiKlwiIGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICA8SW1hZ2UgOnNyYz1cIml0ZW0uaW1hZ2VcIiBjb2w9XCIwXCIgY2xhc3M9XCJ0aHVtYm5haWxcIiAvPlxuICAgICAgICA8U3RhY2tMYXlvdXQgY29sPVwiMVwiPlxuICAgICAgICAgIDxsYWJlbCA6dGV4dD1cIml0ZW0ubmFtZVwiIGNsYXNzPVwiaDJcIiBjb2w9XCIxXCIgLz5cbiAgICAgICAgICA8bGFiZWwgOnRleHQ9XCJpdGVtLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJwXCIgY29sPVwiMVwiIC8+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgPC92LXRlbXBsYXRlPlxuXG4gICAgPHYtdGVtcGxhdGUgbmFtZT1cIml0ZW1zd2lwZVwiPlxuICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cImF1dG8sICosIGF1dG9cIiBiYWNrZ3JvdW5kQ29sb3I9XCJXaGl0ZVwiPlxuICAgICAgICA8U3RhY2tMYXlvdXRcbiAgICAgICAgICBpZD1cIm1hcmstdmlld1wiXG4gICAgICAgICAgQHRhcD1cIm9uTGVmdFN3aXBlQ2xpY2tcIlxuICAgICAgICAgIGNvbD1cIjBcIlxuICAgICAgICAgIGNsYXNzPVwic3dpcGUtaXRlbSBsZWZ0XCJcbiAgICAgICAgICBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIlxuICAgICAgICA+XG4gICAgICAgICAgPExhYmVsIHRleHQ9XCJtYXJrXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPFN0YWNrTGF5b3V0XG4gICAgICAgICAgaWQ9XCJkZWxldGUtdmlld1wiXG4gICAgICAgICAgQHRhcD1cIm9uUmlnaHRTd2lwZUNsaWNrXCJcbiAgICAgICAgICBjb2w9XCIyXCJcbiAgICAgICAgICBjbGFzcz1cInN3aXBlLWl0ZW0gcmlnaHRcIlxuICAgICAgICAgIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8TGFiZWwgdGV4dD1cImRlbGV0ZVwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgPC92LXRlbXBsYXRlPlxuICA8L1JhZExpc3RWaWV3PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+PC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=