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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9MaXN0U2Nyb2xsVmlldy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQTtBQUNBLHdCQURBO0FBRUE7QUFDQTtBQUNBLGlCQURBO0FBRUE7QUFDQTtBQUNBO0FBSkEsS0FEQTtBQU9BO0FBQ0EsbUJBREE7QUFFQTtBQUNBO0FBSEEsS0FQQTtBQVlBO0FBQ0EsbUJBREE7QUFFQTtBQUNBO0FBSEEsS0FaQTtBQWlCQTtBQUNBLG1CQURBO0FBRUE7QUFDQTtBQUhBO0FBakJBLEdBRkE7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBLEdBL0JBOztBQWdDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBOztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLEtBUEE7O0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxLQVZBOztBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FwQkE7O0FBcUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F6QkE7O0FBMEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0EseUNBREEsQ0FFQTs7QUFDQTtBQUNBO0FBQ0EsS0EvQkE7O0FBZ0NBO0FBQ0E7QUFDQTs7QUFsQ0E7QUFoQ0EsRyIsImZpbGUiOiJidW5kbGUuZDc3MWZmNzViOGNiZTI3NWVkZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tc2FlbGljZXMvbnMtdWktdnVlLWRlbW8vYmxvYi9tYXN0ZXIvYXBwL3ZpZXdzL0xpc3QudnVlXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTGlzdFNjcm9sbFZpZXcnLFxuICBwcm9wczoge1xuICAgIGl0ZW1zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gW11cbiAgICAgIH0sXG4gICAgfSxcbiAgICBwdWxsVG9SZWZyZXNoOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZ1ZS9yZXF1aXJlLXZhbGlkLWRlZmF1bHQtcHJvcFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgICBpdGVtUmVvcmRlcjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB2dWUvcmVxdWlyZS12YWxpZC1kZWZhdWx0LXByb3BcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgc3dpcGVBY3Rpb25zOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZ1ZS9yZXF1aXJlLXZhbGlkLWRlZmF1bHQtcHJvcFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgbWFya1RleHQ6ICdNYXJrJyxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25JdGVtVGFwKGV2ZW50KSB7XG4gICAgICB0aGlzLiRlbWl0KCdpdGVtVGFwJywgZXZlbnQpXG4gICAgfSxcbiAgICBvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWQoeyBvYmplY3QgfSkge1xuICAgICAgY29uc29sZS5sb2coJ1B1bGxpbmcuLi4nKVxuICAgICAgdGhpcy4kZW1pdCgncHVsbGluZycsIG9iamVjdClcbiAgICB9LFxuICAgIG9uSXRlbVJlb3JkZXJlZCh7IGluZGV4LCBkYXRhLCBvYmplY3QgfSkge1xuICAgICAgY29uc29sZS5sb2coYEl0ZW0gcmVvcmRlcmVkIGZyb20gaW5kZXggJHtpbmRleH0gdG8gJHtkYXRhLnRhcmdldEluZGV4fWApXG4gICAgfSxcbiAgICBvblN3aXBlU3RhcnRlZCh7IGRhdGEsIG9iamVjdCB9KSB7XG4gICAgICBjb25zb2xlLmxvZyhgU3dpcGUgc3RhcnRlZGApXG4gICAgICBjb25zdCBzd2lwZUxpbWl0cyA9IGRhdGEuc3dpcGVMaW1pdHNcbiAgICAgIGNvbnN0IHN3aXBlVmlldyA9IG9iamVjdFxuICAgICAgY29uc3QgbGVmdEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQoJ21hcmstdmlldycpXG4gICAgICBjb25zdCByaWdodEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQoJ2RlbGV0ZS12aWV3JylcbiAgICAgIHN3aXBlTGltaXRzLmxlZnQgPSBsZWZ0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKClcbiAgICAgIHN3aXBlTGltaXRzLnJpZ2h0ID0gcmlnaHRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKVxuICAgICAgc3dpcGVMaW1pdHMudGhyZXNob2xkID0gbGVmdEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpIC8gMlxuICAgIH0sXG4gICAgb25MZWZ0U3dpcGVDbGljayh7IG9iamVjdCB9KSB7XG4gICAgICBjb25zb2xlLmxvZygnbGVmdCBhY3Rpb24gdGFwcGVkJylcbiAgICAgIHRoaXMuJGVtaXQoJ2l0ZW1NYXJrZWQnLCBvYmplY3QuYmluZGluZ0NvbnRleHQpXG4gICAgICB0aGlzLiRyZWZzLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKVxuICAgIH0sXG4gICAgb25SaWdodFN3aXBlQ2xpY2soeyBvYmplY3QgfSkge1xuICAgICAgY29uc29sZS5sb2coJ3JpZ2h0IGFjdGlvbiB0YXBwZWQnKVxuICAgICAgLy8gcmVtb3ZlIGl0ZW1cbiAgICAgIHRoaXMuJGVtaXQoJ2l0ZW1EZWxldGVkJywgb2JqZWN0LmJpbmRpbmdDb250ZXh0KVxuICAgICAgdGhpcy4kcmVmcy5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKClcbiAgICB9LFxuICAgIHJlZnJlc2goKSB7XG4gICAgICB0aGlzLiRyZWZzLmxpc3RWaWV3LnJlZnJlc2goKVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD5cbjx0ZW1wbGF0ZT5cbiAgPFJhZExpc3RWaWV3XG4gICAgcmVmPVwibGlzdFZpZXdcIlxuICAgIDpwdWxsVG9SZWZyZXNoPVwicHVsbFRvUmVmcmVzaFwiXG4gICAgOml0ZW1SZW9yZGVyPVwiaXRlbVJlb3JkZXJcIlxuICAgIDpzd2lwZUFjdGlvbnM9XCJzd2lwZUFjdGlvbnNcIlxuICAgIEBpdGVtVGFwPVwib25JdGVtVGFwXCJcbiAgICBAcHVsbFRvUmVmcmVzaEluaXRpYXRlZD1cIm9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZFwiXG4gICAgQGl0ZW1SZW9yZGVyZWQ9XCJvbkl0ZW1SZW9yZGVyZWRcIlxuICAgIEBpdGVtU3dpcGVQcm9ncmVzc1N0YXJ0ZWQ9XCJvblN3aXBlU3RhcnRlZFwiXG4gICAgZm9yPVwiaXRlbSBpbiBpdGVtc1wiXG4gID5cbiAgICA8di10ZW1wbGF0ZT5cbiAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCI1MCwgKlwiIHJvd3M9XCIqXCIgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgIDxJbWFnZSA6c3JjPVwiaXRlbS5pbWFnZVwiIGNvbD1cIjBcIiBjbGFzcz1cInRodW1ibmFpbFwiIC8+XG4gICAgICAgIDxTdGFja0xheW91dCBjb2w9XCIxXCI+XG4gICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiaXRlbS5uYW1lXCIgY2xhc3M9XCJoMlwiIGNvbD1cIjFcIiAvPlxuICAgICAgICAgIDxsYWJlbCA6dGV4dD1cIml0ZW0uZGVzY3JpcHRpb25cIiBjbGFzcz1cInBcIiBjb2w9XCIxXCIgLz5cbiAgICAgICAgICA8TGFiZWxcbiAgICAgICAgICAgIDp0ZXh0PVwiaXRlbS5zZWNvbmRhcnlJY29uIHwgZm9udGljb25cIlxuICAgICAgICAgICAgdi1pZj1cIkJvb2xlYW4oaXRlbS5zZWNvbmRhcnlJY29uKVwiXG4gICAgICAgICAgICBjbGFzcz1cImZhIHQtMTZcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgPC92LXRlbXBsYXRlPlxuXG4gICAgPHYtdGVtcGxhdGUgbmFtZT1cIml0ZW1zd2lwZVwiPlxuICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cImF1dG8sICosIGF1dG9cIiBiYWNrZ3JvdW5kQ29sb3I9XCJXaGl0ZVwiPlxuICAgICAgICA8U3RhY2tMYXlvdXRcbiAgICAgICAgICBpZD1cIm1hcmstdmlld1wiXG4gICAgICAgICAgQHRhcD1cIm9uTGVmdFN3aXBlQ2xpY2tcIlxuICAgICAgICAgIGNvbD1cIjBcIlxuICAgICAgICAgIGNsYXNzPVwic3dpcGUtaXRlbSBsZWZ0XCJcbiAgICAgICAgICBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIlxuICAgICAgICA+XG4gICAgICAgICAgPExhYmVsIHRleHQ9XCJtYXJrXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPFN0YWNrTGF5b3V0XG4gICAgICAgICAgaWQ9XCJkZWxldGUtdmlld1wiXG4gICAgICAgICAgQHRhcD1cIm9uUmlnaHRTd2lwZUNsaWNrXCJcbiAgICAgICAgICBjb2w9XCIyXCJcbiAgICAgICAgICBjbGFzcz1cInN3aXBlLWl0ZW0gcmlnaHRcIlxuICAgICAgICAgIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8TGFiZWwgdGV4dD1cImRlbGV0ZVwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgPC92LXRlbXBsYXRlPlxuICA8L1JhZExpc3RWaWV3PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4udC0xNiB7XG4gIGZvbnQtc2l6ZTogMTY7XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==