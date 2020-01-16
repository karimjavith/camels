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
      default: false
    },
    itemReorder: {
      type: Boolean,
      default: false
    },
    swipeActions: {
      type: Boolean,
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ListScrollView.vue?vue&type=template&id=79f7486b&":
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
    "RadListView",
    {
      ref: "listView",
      attrs: {
        pullToRefresh: _vm.pullToRefresh,
        itemReorder: _vm.itemReorder,
        swipeActions: _vm.swipeActions,
        items: _vm.items,
        "+alias": "item"
      },
      on: {
        itemTap: _vm.onItemTap,
        pullToRefreshInitiated: _vm.onPullToRefreshInitiated,
        itemReordered: _vm.onItemReordered,
        itemSwipeProgressStarted: _vm.onSwipeStarted
      }
    },
    [
      _c("v-template", {
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var item = ref.item
              var $index = ref.$index
              var $even = ref.$even
              var $odd = ref.$odd
              return _c(
                "GridLayout",
                { staticClass: "item", attrs: { columns: "50, *", rows: "*" } },
                [
                  _c("label", {
                    staticClass: "thumbnail",
                    attrs: { text: item.icon, col: "0" }
                  }),
                  _c(
                    "StackLayout",
                    { attrs: { col: "1" } },
                    [
                      _c("label", {
                        staticClass: "h2",
                        attrs: { text: item.name, col: "1" }
                      }),
                      _c("label", {
                        staticClass: "p",
                        attrs: { text: item.description, col: "1" }
                      }),
                      Boolean(item.secondaryIcon)
                        ? _c("Label", {
                            staticClass: "fa t-16",
                            attrs: {
                              text: _vm._f("fonticon")(item.secondaryIcon)
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
          }
        ])
      }),
      _c("v-template", {
        attrs: { name: "itemswipe" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var item = ref.item
              var $index = ref.$index
              var $even = ref.$even
              var $odd = ref.$odd
              return _c(
                "GridLayout",
                {
                  attrs: { columns: "auto, *, auto", backgroundColor: "White" }
                },
                [
                  _c(
                    "StackLayout",
                    {
                      staticClass: "swipe-item left",
                      attrs: {
                        id: "mark-view",
                        col: "0",
                        orientation: "horizontal"
                      },
                      on: { tap: _vm.onLeftSwipeClick }
                    },
                    [
                      _c("Label", {
                        attrs: {
                          text: _vm.state.markText,
                          verticalAlignment: "center",
                          horizontalAlignment: "center"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    {
                      staticClass: "swipe-item right",
                      attrs: {
                        id: "delete-view",
                        col: "2",
                        orientation: "horizontal"
                      },
                      on: { tap: _vm.onRightSwipeClick }
                    },
                    [
                      _c("Label", {
                        attrs: {
                          text: "delete",
                          verticalAlignment: "center",
                          horizontalAlignment: "center"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9MaXN0U2Nyb2xsVmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaXN0U2Nyb2xsVmlldy52dWU/Y2ZhZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBO0FBQ0Esd0JBREE7QUFFQTtBQUNBO0FBQ0EsaUJBREE7QUFFQTtBQUNBO0FBQ0E7QUFKQSxLQURBO0FBT0E7QUFDQSxtQkFEQTtBQUVBO0FBRkEsS0FQQTtBQVdBO0FBQ0EsbUJBREE7QUFFQTtBQUZBLEtBWEE7QUFlQTtBQUNBLG1CQURBO0FBRUE7QUFGQTtBQWZBLEdBRkE7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBLEdBNUJBOztBQTZCQTtBQUNBO0FBQ0E7QUFDQSxLQUhBOztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLEtBUEE7O0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxLQVZBOztBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FwQkE7O0FBcUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F6QkE7O0FBMEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0EseUNBREEsQ0FFQTs7QUFDQTtBQUNBO0FBQ0EsS0EvQkE7O0FBZ0NBO0FBQ0E7QUFDQTs7QUFsQ0E7QUE3QkEsRzs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsOEJBQThCLDhCQUE4QixFQUFFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLHFCQUFxQixTQUFTLFdBQVcsRUFBRTtBQUMzQztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLGdCQUFnQixvQkFBb0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLDJCQUEyQjtBQUMzQixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QiwyQkFBMkI7QUFDM0IscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjliZmE2MjhhNjI3MjRlZDdlNWU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2dpdGh1Yi5jb20vbXNhZWxpY2VzL25zLXVpLXZ1ZS1kZW1vL2Jsb2IvbWFzdGVyL2FwcC92aWV3cy9MaXN0LnZ1ZVxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0xpc3RTY3JvbGxWaWV3JyxcbiAgcHJvcHM6IHtcbiAgICBpdGVtczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9LFxuICAgIH0sXG4gICAgcHVsbFRvUmVmcmVzaDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgaXRlbVJlb3JkZXI6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICAgIHN3aXBlQWN0aW9uczoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIG1hcmtUZXh0OiAnTWFyaycsXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uSXRlbVRhcChldmVudCkge1xuICAgICAgdGhpcy4kZW1pdCgnaXRlbVRhcCcsIGV2ZW50KVxuICAgIH0sXG4gICAgb25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkKHsgb2JqZWN0IH0pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQdWxsaW5nLi4uJylcbiAgICAgIHRoaXMuJGVtaXQoJ3B1bGxpbmcnLCBvYmplY3QpXG4gICAgfSxcbiAgICBvbkl0ZW1SZW9yZGVyZWQoeyBpbmRleCwgZGF0YSwgb2JqZWN0IH0pIHtcbiAgICAgIGNvbnNvbGUubG9nKGBJdGVtIHJlb3JkZXJlZCBmcm9tIGluZGV4ICR7aW5kZXh9IHRvICR7ZGF0YS50YXJnZXRJbmRleH1gKVxuICAgIH0sXG4gICAgb25Td2lwZVN0YXJ0ZWQoeyBkYXRhLCBvYmplY3QgfSkge1xuICAgICAgY29uc29sZS5sb2coYFN3aXBlIHN0YXJ0ZWRgKVxuICAgICAgY29uc3Qgc3dpcGVMaW1pdHMgPSBkYXRhLnN3aXBlTGltaXRzXG4gICAgICBjb25zdCBzd2lwZVZpZXcgPSBvYmplY3RcbiAgICAgIGNvbnN0IGxlZnRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkKCdtYXJrLXZpZXcnKVxuICAgICAgY29uc3QgcmlnaHRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkKCdkZWxldGUtdmlldycpXG4gICAgICBzd2lwZUxpbWl0cy5sZWZ0ID0gbGVmdEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpXG4gICAgICBzd2lwZUxpbWl0cy5yaWdodCA9IHJpZ2h0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKClcbiAgICAgIHN3aXBlTGltaXRzLnRocmVzaG9sZCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKSAvIDJcbiAgICB9LFxuICAgIG9uTGVmdFN3aXBlQ2xpY2soeyBvYmplY3QgfSkge1xuICAgICAgY29uc29sZS5sb2coJ2xlZnQgYWN0aW9uIHRhcHBlZCcpXG4gICAgICB0aGlzLiRlbWl0KCdpdGVtTWFya2VkJywgb2JqZWN0LmJpbmRpbmdDb250ZXh0KVxuICAgICAgdGhpcy4kcmVmcy5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKClcbiAgICB9LFxuICAgIG9uUmlnaHRTd2lwZUNsaWNrKHsgb2JqZWN0IH0pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdyaWdodCBhY3Rpb24gdGFwcGVkJylcbiAgICAgIC8vIHJlbW92ZSBpdGVtXG4gICAgICB0aGlzLiRlbWl0KCdpdGVtRGVsZXRlZCcsIG9iamVjdC5iaW5kaW5nQ29udGV4dClcbiAgICAgIHRoaXMuJHJlZnMubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpXG4gICAgfSxcbiAgICByZWZyZXNoKCkge1xuICAgICAgdGhpcy4kcmVmcy5saXN0Vmlldy5yZWZyZXNoKClcbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG48dGVtcGxhdGU+XG4gIDxSYWRMaXN0Vmlld1xuICAgIHJlZj1cImxpc3RWaWV3XCJcbiAgICA6cHVsbFRvUmVmcmVzaD1cInB1bGxUb1JlZnJlc2hcIlxuICAgIDppdGVtUmVvcmRlcj1cIml0ZW1SZW9yZGVyXCJcbiAgICA6c3dpcGVBY3Rpb25zPVwic3dpcGVBY3Rpb25zXCJcbiAgICBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiXG4gICAgQHB1bGxUb1JlZnJlc2hJbml0aWF0ZWQ9XCJvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWRcIlxuICAgIEBpdGVtUmVvcmRlcmVkPVwib25JdGVtUmVvcmRlcmVkXCJcbiAgICBAaXRlbVN3aXBlUHJvZ3Jlc3NTdGFydGVkPVwib25Td2lwZVN0YXJ0ZWRcIlxuICAgIGZvcj1cIml0ZW0gaW4gaXRlbXNcIlxuICA+XG4gICAgPHYtdGVtcGxhdGU+XG4gICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiNTAsICpcIiByb3dzPVwiKlwiIGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICA8bGFiZWwgOnRleHQ9XCJpdGVtLmljb25cIiBjb2w9XCIwXCIgY2xhc3M9XCJ0aHVtYm5haWxcIiAvPlxuICAgICAgICA8U3RhY2tMYXlvdXQgY29sPVwiMVwiPlxuICAgICAgICAgIDxsYWJlbCA6dGV4dD1cIml0ZW0ubmFtZVwiIGNsYXNzPVwiaDJcIiBjb2w9XCIxXCIgLz5cbiAgICAgICAgICA8bGFiZWwgOnRleHQ9XCJpdGVtLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJwXCIgY29sPVwiMVwiIC8+XG4gICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICA6dGV4dD1cIml0ZW0uc2Vjb25kYXJ5SWNvbiB8IGZvbnRpY29uXCJcbiAgICAgICAgICAgIHYtaWY9XCJCb29sZWFuKGl0ZW0uc2Vjb25kYXJ5SWNvbilcIlxuICAgICAgICAgICAgY2xhc3M9XCJmYSB0LTE2XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgPC9HcmlkTGF5b3V0PlxuICAgIDwvdi10ZW1wbGF0ZT5cblxuICAgIDx2LXRlbXBsYXRlIG5hbWU9XCJpdGVtc3dpcGVcIj5cbiAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCJhdXRvLCAqLCBhdXRvXCIgYmFja2dyb3VuZENvbG9yPVwiV2hpdGVcIj5cbiAgICAgICAgPFN0YWNrTGF5b3V0XG4gICAgICAgICAgaWQ9XCJtYXJrLXZpZXdcIlxuICAgICAgICAgIEB0YXA9XCJvbkxlZnRTd2lwZUNsaWNrXCJcbiAgICAgICAgICBjb2w9XCIwXCJcbiAgICAgICAgICBjbGFzcz1cInN3aXBlLWl0ZW0gbGVmdFwiXG4gICAgICAgICAgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInN0YXRlLm1hcmtUZXh0XCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPFN0YWNrTGF5b3V0XG4gICAgICAgICAgaWQ9XCJkZWxldGUtdmlld1wiXG4gICAgICAgICAgQHRhcD1cIm9uUmlnaHRTd2lwZUNsaWNrXCJcbiAgICAgICAgICBjb2w9XCIyXCJcbiAgICAgICAgICBjbGFzcz1cInN3aXBlLWl0ZW0gcmlnaHRcIlxuICAgICAgICAgIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8TGFiZWwgdGV4dD1cImRlbGV0ZVwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgPC92LXRlbXBsYXRlPlxuICA8L1JhZExpc3RWaWV3PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4udC0xNiB7XG4gIGZvbnQtc2l6ZTogMTY7XG59XG48L3N0eWxlPlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlJhZExpc3RWaWV3XCIsXG4gICAge1xuICAgICAgcmVmOiBcImxpc3RWaWV3XCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBwdWxsVG9SZWZyZXNoOiBfdm0ucHVsbFRvUmVmcmVzaCxcbiAgICAgICAgaXRlbVJlb3JkZXI6IF92bS5pdGVtUmVvcmRlcixcbiAgICAgICAgc3dpcGVBY3Rpb25zOiBfdm0uc3dpcGVBY3Rpb25zLFxuICAgICAgICBpdGVtczogX3ZtLml0ZW1zLFxuICAgICAgICBcIithbGlhc1wiOiBcIml0ZW1cIlxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGl0ZW1UYXA6IF92bS5vbkl0ZW1UYXAsXG4gICAgICAgIHB1bGxUb1JlZnJlc2hJbml0aWF0ZWQ6IF92bS5vblB1bGxUb1JlZnJlc2hJbml0aWF0ZWQsXG4gICAgICAgIGl0ZW1SZW9yZGVyZWQ6IF92bS5vbkl0ZW1SZW9yZGVyZWQsXG4gICAgICAgIGl0ZW1Td2lwZVByb2dyZXNzU3RhcnRlZDogX3ZtLm9uU3dpcGVTdGFydGVkXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIml0ZW1cIiwgYXR0cnM6IHsgY29sdW1uczogXCI1MCwgKlwiLCByb3dzOiBcIipcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRodW1ibmFpbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBpdGVtLmljb24sIGNvbDogXCIwXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbDogXCIxXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogaXRlbS5uYW1lLCBjb2w6IFwiMVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IGl0ZW0uZGVzY3JpcHRpb24sIGNvbDogXCIxXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4oaXRlbS5zZWNvbmRhcnlJY29uKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSB0LTE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKGl0ZW0uc2Vjb25kYXJ5SWNvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXSlcbiAgICAgIH0pLFxuICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJpdGVtc3dpcGVcIiB9LFxuICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2x1bW5zOiBcImF1dG8sICosIGF1dG9cIiwgYmFja2dyb3VuZENvbG9yOiBcIldoaXRlXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN3aXBlLWl0ZW0gbGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJtYXJrLXZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uTGVmdFN3aXBlQ2xpY2sgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uc3RhdGUubWFya1RleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzd2lwZS1pdGVtIHJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImRlbGV0ZS12aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vblJpZ2h0U3dpcGVDbGljayB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiZGVsZXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdKVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=