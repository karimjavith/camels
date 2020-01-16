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
      console.log("Swipe started"); // if (object.bindingContext.secondaryIcon) {
      //   this.state = { ...this.state, markText: 'Unmark' }
      // }

      var swipeLimits = data.swipeLimits;
      var swipeView = object;
      var leftItem = swipeView.getViewById('mark-view');
      var rightItem = swipeView.getViewById('delete-view');
      swipeLimits.left = leftItem.getMeasuredWidth();
      swipeLimits.right = rightItem.getMeasuredWidth();
      console.log(swipeLimits);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9MaXN0U2Nyb2xsVmlldy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQTtBQUNBLHdCQURBO0FBRUE7QUFDQTtBQUNBLGlCQURBO0FBRUE7QUFDQTtBQUNBO0FBSkEsS0FEQTtBQU9BO0FBQ0EsbUJBREE7QUFFQTtBQUNBO0FBSEEsS0FQQTtBQVlBO0FBQ0EsbUJBREE7QUFFQTtBQUNBO0FBSEEsS0FaQTtBQWlCQTtBQUNBLG1CQURBO0FBRUE7QUFDQTtBQUhBO0FBakJBLEdBRkE7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBLEdBL0JBOztBQWdDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBOztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLEtBUEE7O0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxLQVZBOztBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxtQ0FEQSxDQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F4QkE7O0FBeUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E3QkE7O0FBOEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0EseUNBREEsQ0FFQTs7QUFDQTtBQUNBO0FBQ0EsS0FuQ0E7O0FBb0NBO0FBQ0E7QUFDQTs7QUF0Q0E7QUFoQ0EsRyIsImZpbGUiOiJidW5kbGUuZWJiYTUxMTAxNzFiMDkxNzVkYTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tc2FlbGljZXMvbnMtdWktdnVlLWRlbW8vYmxvYi9tYXN0ZXIvYXBwL3ZpZXdzL0xpc3QudnVlXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTGlzdFNjcm9sbFZpZXcnLFxuICBwcm9wczoge1xuICAgIGl0ZW1zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gW11cbiAgICAgIH0sXG4gICAgfSxcbiAgICBwdWxsVG9SZWZyZXNoOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZ1ZS9yZXF1aXJlLXZhbGlkLWRlZmF1bHQtcHJvcFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgICBpdGVtUmVvcmRlcjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB2dWUvcmVxdWlyZS12YWxpZC1kZWZhdWx0LXByb3BcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgc3dpcGVBY3Rpb25zOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZ1ZS9yZXF1aXJlLXZhbGlkLWRlZmF1bHQtcHJvcFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgbWFya1RleHQ6ICdNYXJrJyxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25JdGVtVGFwKGV2ZW50KSB7XG4gICAgICB0aGlzLiRlbWl0KCdpdGVtVGFwJywgZXZlbnQpXG4gICAgfSxcbiAgICBvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWQoeyBvYmplY3QgfSkge1xuICAgICAgY29uc29sZS5sb2coJ1B1bGxpbmcuLi4nKVxuICAgICAgdGhpcy4kZW1pdCgncHVsbGluZycsIG9iamVjdClcbiAgICB9LFxuICAgIG9uSXRlbVJlb3JkZXJlZCh7IGluZGV4LCBkYXRhLCBvYmplY3QgfSkge1xuICAgICAgY29uc29sZS5sb2coYEl0ZW0gcmVvcmRlcmVkIGZyb20gaW5kZXggJHtpbmRleH0gdG8gJHtkYXRhLnRhcmdldEluZGV4fWApXG4gICAgfSxcbiAgICBvblN3aXBlU3RhcnRlZCh7IGRhdGEsIG9iamVjdCB9KSB7XG4gICAgICBjb25zb2xlLmxvZyhgU3dpcGUgc3RhcnRlZGApXG4gICAgICAvLyBpZiAob2JqZWN0LmJpbmRpbmdDb250ZXh0LnNlY29uZGFyeUljb24pIHtcbiAgICAgIC8vICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbWFya1RleHQ6ICdVbm1hcmsnIH1cbiAgICAgIC8vIH1cbiAgICAgIGNvbnN0IHN3aXBlTGltaXRzID0gZGF0YS5zd2lwZUxpbWl0c1xuICAgICAgY29uc3Qgc3dpcGVWaWV3ID0gb2JqZWN0XG4gICAgICBjb25zdCBsZWZ0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZCgnbWFyay12aWV3JylcbiAgICAgIGNvbnN0IHJpZ2h0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZCgnZGVsZXRlLXZpZXcnKVxuICAgICAgc3dpcGVMaW1pdHMubGVmdCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKVxuICAgICAgc3dpcGVMaW1pdHMucmlnaHQgPSByaWdodEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpXG4gICAgICBjb25zb2xlLmxvZyhzd2lwZUxpbWl0cylcbiAgICAgIHN3aXBlTGltaXRzLnRocmVzaG9sZCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKSAvIDJcbiAgICB9LFxuICAgIG9uTGVmdFN3aXBlQ2xpY2soeyBvYmplY3QgfSkge1xuICAgICAgY29uc29sZS5sb2coJ2xlZnQgYWN0aW9uIHRhcHBlZCcpXG4gICAgICB0aGlzLiRlbWl0KCdpdGVtTWFya2VkJywgb2JqZWN0LmJpbmRpbmdDb250ZXh0KVxuICAgICAgdGhpcy4kcmVmcy5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKClcbiAgICB9LFxuICAgIG9uUmlnaHRTd2lwZUNsaWNrKHsgb2JqZWN0IH0pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdyaWdodCBhY3Rpb24gdGFwcGVkJylcbiAgICAgIC8vIHJlbW92ZSBpdGVtXG4gICAgICB0aGlzLiRlbWl0KCdpdGVtRGVsZXRlZCcsIG9iamVjdC5iaW5kaW5nQ29udGV4dClcbiAgICAgIHRoaXMuJHJlZnMubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpXG4gICAgfSxcbiAgICByZWZyZXNoKCkge1xuICAgICAgdGhpcy4kcmVmcy5saXN0Vmlldy5yZWZyZXNoKClcbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG48dGVtcGxhdGU+XG4gIDxSYWRMaXN0Vmlld1xuICAgIHJlZj1cImxpc3RWaWV3XCJcbiAgICA6cHVsbFRvUmVmcmVzaD1cInB1bGxUb1JlZnJlc2hcIlxuICAgIDppdGVtUmVvcmRlcj1cIml0ZW1SZW9yZGVyXCJcbiAgICA6c3dpcGVBY3Rpb25zPVwic3dpcGVBY3Rpb25zXCJcbiAgICBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiXG4gICAgQHB1bGxUb1JlZnJlc2hJbml0aWF0ZWQ9XCJvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWRcIlxuICAgIEBpdGVtUmVvcmRlcmVkPVwib25JdGVtUmVvcmRlcmVkXCJcbiAgICBAaXRlbVN3aXBlUHJvZ3Jlc3NTdGFydGVkPVwib25Td2lwZVN0YXJ0ZWRcIlxuICAgIGZvcj1cIml0ZW0gaW4gaXRlbXNcIlxuICA+XG4gICAgPHYtdGVtcGxhdGU+XG4gICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiNTAsICpcIiByb3dzPVwiKlwiIGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICA8SW1hZ2UgOnNyYz1cIml0ZW0uaW1hZ2VcIiBjb2w9XCIwXCIgY2xhc3M9XCJ0aHVtYm5haWxcIiAvPlxuICAgICAgICA8U3RhY2tMYXlvdXQgY29sPVwiMVwiPlxuICAgICAgICAgIDxsYWJlbCA6dGV4dD1cIml0ZW0ubmFtZVwiIGNsYXNzPVwiaDJcIiBjb2w9XCIxXCIgLz5cbiAgICAgICAgICA8bGFiZWwgOnRleHQ9XCJpdGVtLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJwXCIgY29sPVwiMVwiIC8+XG4gICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICA6dGV4dD1cIml0ZW0uc2Vjb25kYXJ5SWNvbiB8IGZvbnRpY29uXCJcbiAgICAgICAgICAgIHYtaWY9XCJCb29sZWFuKGl0ZW0uc2Vjb25kYXJ5SWNvbilcIlxuICAgICAgICAgICAgY2xhc3M9XCJmYSB0LTE2XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgPC9HcmlkTGF5b3V0PlxuICAgIDwvdi10ZW1wbGF0ZT5cblxuICAgIDx2LXRlbXBsYXRlIG5hbWU9XCJpdGVtc3dpcGVcIj5cbiAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCJhdXRvLCAqLCBhdXRvXCIgYmFja2dyb3VuZENvbG9yPVwiV2hpdGVcIj5cbiAgICAgICAgPFN0YWNrTGF5b3V0XG4gICAgICAgICAgaWQ9XCJtYXJrLXZpZXdcIlxuICAgICAgICAgIEB0YXA9XCJvbkxlZnRTd2lwZUNsaWNrXCJcbiAgICAgICAgICBjb2w9XCIwXCJcbiAgICAgICAgICBjbGFzcz1cInN3aXBlLWl0ZW0gbGVmdFwiXG4gICAgICAgICAgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInN0YXRlLm1hcmtUZXh0XCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPFN0YWNrTGF5b3V0XG4gICAgICAgICAgaWQ9XCJkZWxldGUtdmlld1wiXG4gICAgICAgICAgQHRhcD1cIm9uUmlnaHRTd2lwZUNsaWNrXCJcbiAgICAgICAgICBjb2w9XCIyXCJcbiAgICAgICAgICBjbGFzcz1cInN3aXBlLWl0ZW0gcmlnaHRcIlxuICAgICAgICAgIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8TGFiZWwgdGV4dD1cImRlbGV0ZVwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgPC92LXRlbXBsYXRlPlxuICA8L1JhZExpc3RWaWV3PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4udC0xNiB7XG4gIGZvbnQtc2l6ZTogMTY7XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==