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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9MaXN0U2Nyb2xsVmlldy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQTtBQUNBLHdCQURBO0FBRUE7QUFDQTtBQUNBLGlCQURBO0FBRUE7QUFDQTtBQUNBO0FBSkEsS0FEQTtBQU9BO0FBQ0EsbUJBREE7QUFFQTtBQUNBO0FBSEEsS0FQQTtBQVlBO0FBQ0EsbUJBREE7QUFFQTtBQUNBO0FBSEEsS0FaQTtBQWlCQTtBQUNBLG1CQURBO0FBRUE7QUFDQTtBQUhBO0FBakJBLEdBRkE7QUF5QkE7QUFDQTtBQUNBO0FBQ0EsS0FIQTs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxLQVBBOztBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsS0FWQTs7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBcEJBOztBQXFCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBekJBOztBQTBCQTtBQUFBO0FBQUE7QUFBQTtBQUNBLHlDQURBLENBRUE7O0FBQ0E7QUFDQTtBQUNBLEtBL0JBOztBQWdDQTtBQUNBO0FBQ0E7O0FBbENBO0FBekJBLEciLCJmaWxlIjoiYnVuZGxlLjg4MjQyZDM0Yzg2OWRkYWI1OTIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2dpdGh1Yi5jb20vbXNhZWxpY2VzL25zLXVpLXZ1ZS1kZW1vL2Jsb2IvbWFzdGVyL2FwcC92aWV3cy9MaXN0LnZ1ZVxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0xpc3RTY3JvbGxWaWV3JyxcbiAgcHJvcHM6IHtcbiAgICBpdGVtczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9LFxuICAgIH0sXG4gICAgcHVsbFRvUmVmcmVzaDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB2dWUvcmVxdWlyZS12YWxpZC1kZWZhdWx0LXByb3BcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgaXRlbVJlb3JkZXI6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdnVlL3JlcXVpcmUtdmFsaWQtZGVmYXVsdC1wcm9wXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICAgIHN3aXBlQWN0aW9uczoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB2dWUvcmVxdWlyZS12YWxpZC1kZWZhdWx0LXByb3BcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkl0ZW1UYXAoZXZlbnQpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2l0ZW1UYXAnLCBldmVudClcbiAgICB9LFxuICAgIG9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZCh7IG9iamVjdCB9KSB7XG4gICAgICBjb25zb2xlLmxvZygnUHVsbGluZy4uLicpXG4gICAgICB0aGlzLiRlbWl0KCdwdWxsaW5nJywgb2JqZWN0KVxuICAgIH0sXG4gICAgb25JdGVtUmVvcmRlcmVkKHsgaW5kZXgsIGRhdGEsIG9iamVjdCB9KSB7XG4gICAgICBjb25zb2xlLmxvZyhgSXRlbSByZW9yZGVyZWQgZnJvbSBpbmRleCAke2luZGV4fSB0byAke2RhdGEudGFyZ2V0SW5kZXh9YClcbiAgICB9LFxuICAgIG9uU3dpcGVTdGFydGVkKHsgZGF0YSwgb2JqZWN0IH0pIHtcbiAgICAgIGNvbnNvbGUubG9nKGBTd2lwZSBzdGFydGVkYClcbiAgICAgIGNvbnN0IHN3aXBlTGltaXRzID0gZGF0YS5zd2lwZUxpbWl0c1xuICAgICAgY29uc3Qgc3dpcGVWaWV3ID0gb2JqZWN0XG4gICAgICBjb25zdCBsZWZ0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZCgnbWFyay12aWV3JylcbiAgICAgIGNvbnN0IHJpZ2h0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZCgnZGVsZXRlLXZpZXcnKVxuICAgICAgc3dpcGVMaW1pdHMubGVmdCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKVxuICAgICAgc3dpcGVMaW1pdHMucmlnaHQgPSByaWdodEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpXG4gICAgICBzd2lwZUxpbWl0cy50aHJlc2hvbGQgPSBsZWZ0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCkgLyAyXG4gICAgfSxcbiAgICBvbkxlZnRTd2lwZUNsaWNrKHsgb2JqZWN0IH0pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdsZWZ0IGFjdGlvbiB0YXBwZWQnKVxuICAgICAgdGhpcy4kZW1pdCgnaXRlbU1hcmtlZCcsIG9iamVjdC5iaW5kaW5nQ29udGV4dClcbiAgICAgIHRoaXMuJHJlZnMubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpXG4gICAgfSxcbiAgICBvblJpZ2h0U3dpcGVDbGljayh7IG9iamVjdCB9KSB7XG4gICAgICBjb25zb2xlLmxvZygncmlnaHQgYWN0aW9uIHRhcHBlZCcpXG4gICAgICAvLyByZW1vdmUgaXRlbVxuICAgICAgdGhpcy4kZW1pdCgnaXRlbURlbGV0ZWQnLCBvYmplY3QuYmluZGluZ0NvbnRleHQpXG4gICAgICB0aGlzLiRyZWZzLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKVxuICAgIH0sXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgIHRoaXMuJHJlZnMubGlzdFZpZXcucmVmcmVzaCgpXG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuPHRlbXBsYXRlPlxuICA8UmFkTGlzdFZpZXdcbiAgICByZWY9XCJsaXN0Vmlld1wiXG4gICAgOnB1bGxUb1JlZnJlc2g9XCJwdWxsVG9SZWZyZXNoXCJcbiAgICA6aXRlbVJlb3JkZXI9XCJpdGVtUmVvcmRlclwiXG4gICAgOnN3aXBlQWN0aW9ucz1cInN3aXBlQWN0aW9uc1wiXG4gICAgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIlxuICAgIEBwdWxsVG9SZWZyZXNoSW5pdGlhdGVkPVwib25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkXCJcbiAgICBAaXRlbVJlb3JkZXJlZD1cIm9uSXRlbVJlb3JkZXJlZFwiXG4gICAgQGl0ZW1Td2lwZVByb2dyZXNzU3RhcnRlZD1cIm9uU3dpcGVTdGFydGVkXCJcbiAgICBmb3I9XCJpdGVtIGluIGl0ZW1zXCJcbiAgPlxuICAgIDx2LXRlbXBsYXRlPlxuICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjUwLCAqXCIgcm93cz1cIipcIiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgPEltYWdlIDpzcmM9XCJpdGVtLmltYWdlXCIgY29sPVwiMFwiIGNsYXNzPVwidGh1bWJuYWlsXCIgLz5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGNvbD1cIjFcIj5cbiAgICAgICAgICA8bGFiZWwgOnRleHQ9XCJpdGVtLm5hbWVcIiBjbGFzcz1cImgyXCIgY29sPVwiMVwiIC8+XG4gICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiaXRlbS5kZXNjcmlwdGlvblwiIGNsYXNzPVwicFwiIGNvbD1cIjFcIiAvPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgPC9HcmlkTGF5b3V0PlxuICAgIDwvdi10ZW1wbGF0ZT5cblxuICAgIDx2LXRlbXBsYXRlIG5hbWU9XCJpdGVtc3dpcGVcIj5cbiAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCJhdXRvLCAqLCBhdXRvXCIgYmFja2dyb3VuZENvbG9yPVwiV2hpdGVcIj5cbiAgICAgICAgPFN0YWNrTGF5b3V0XG4gICAgICAgICAgaWQ9XCJtYXJrLXZpZXdcIlxuICAgICAgICAgIEB0YXA9XCJvbkxlZnRTd2lwZUNsaWNrXCJcbiAgICAgICAgICBjb2w9XCIwXCJcbiAgICAgICAgICBjbGFzcz1cInN3aXBlLWl0ZW0gbGVmdFwiXG4gICAgICAgICAgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxMYWJlbCB0ZXh0PVwibWFya1wiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDxTdGFja0xheW91dFxuICAgICAgICAgIGlkPVwiZGVsZXRlLXZpZXdcIlxuICAgICAgICAgIEB0YXA9XCJvblJpZ2h0U3dpcGVDbGlja1wiXG4gICAgICAgICAgY29sPVwiMlwiXG4gICAgICAgICAgY2xhc3M9XCJzd2lwZS1pdGVtIHJpZ2h0XCJcbiAgICAgICAgICBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIlxuICAgICAgICA+XG4gICAgICAgICAgPExhYmVsIHRleHQ9XCJkZWxldGVcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgPC9HcmlkTGF5b3V0PlxuICAgIDwvdi10ZW1wbGF0ZT5cbiAgPC9SYWRMaXN0Vmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9