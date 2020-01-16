webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ListScrollView.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

      if (object.bindingContext.secondaryIcon) {
        this.state = _objectSpread({}, this.state, {
          markText: 'Unmark'
        });
      }

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
                  _c("Image", {
                    staticClass: "thumbnail",
                    attrs: { src: item.image, col: "0" }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9MaXN0U2Nyb2xsVmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaXN0U2Nyb2xsVmlldy52dWU/Y2ZhZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0Esd0JBREE7QUFFQTtBQUNBO0FBQ0EsaUJBREE7QUFFQTtBQUNBO0FBQ0E7QUFKQSxLQURBO0FBT0E7QUFDQSxtQkFEQTtBQUVBO0FBQ0E7QUFIQSxLQVBBO0FBWUE7QUFDQSxtQkFEQTtBQUVBO0FBQ0E7QUFIQSxLQVpBO0FBaUJBO0FBQ0EsbUJBREE7QUFFQTtBQUNBO0FBSEE7QUFqQkEsR0FGQTs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0EsR0EvQkE7O0FBZ0NBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsS0FQQTs7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLEtBVkE7O0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXBCQTs7QUFxQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxLQTVCQTs7QUE2QkE7QUFBQTtBQUFBO0FBQUE7QUFDQSx5Q0FEQSxDQUVBOztBQUNBO0FBQ0E7QUFDQSxLQWxDQTs7QUFtQ0E7QUFDQTtBQUNBOztBQXJDQTtBQWhDQSxHOzs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw4QkFBOEIsOEJBQThCLEVBQUU7QUFDL0U7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EscUJBQXFCLFNBQVMsV0FBVyxFQUFFO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsZ0JBQWdCLG9CQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsMkJBQTJCO0FBQzNCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLDJCQUEyQjtBQUMzQixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuZjFjNjdkZmQwZDJlZWVhZGU1ZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tc2FlbGljZXMvbnMtdWktdnVlLWRlbW8vYmxvYi9tYXN0ZXIvYXBwL3ZpZXdzL0xpc3QudnVlXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTGlzdFNjcm9sbFZpZXcnLFxuICBwcm9wczoge1xuICAgIGl0ZW1zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gW11cbiAgICAgIH0sXG4gICAgfSxcbiAgICBwdWxsVG9SZWZyZXNoOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZ1ZS9yZXF1aXJlLXZhbGlkLWRlZmF1bHQtcHJvcFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgICBpdGVtUmVvcmRlcjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB2dWUvcmVxdWlyZS12YWxpZC1kZWZhdWx0LXByb3BcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgc3dpcGVBY3Rpb25zOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZ1ZS9yZXF1aXJlLXZhbGlkLWRlZmF1bHQtcHJvcFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgbWFya1RleHQ6ICdNYXJrJyxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25JdGVtVGFwKGV2ZW50KSB7XG4gICAgICB0aGlzLiRlbWl0KCdpdGVtVGFwJywgZXZlbnQpXG4gICAgfSxcbiAgICBvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWQoeyBvYmplY3QgfSkge1xuICAgICAgY29uc29sZS5sb2coJ1B1bGxpbmcuLi4nKVxuICAgICAgdGhpcy4kZW1pdCgncHVsbGluZycsIG9iamVjdClcbiAgICB9LFxuICAgIG9uSXRlbVJlb3JkZXJlZCh7IGluZGV4LCBkYXRhLCBvYmplY3QgfSkge1xuICAgICAgY29uc29sZS5sb2coYEl0ZW0gcmVvcmRlcmVkIGZyb20gaW5kZXggJHtpbmRleH0gdG8gJHtkYXRhLnRhcmdldEluZGV4fWApXG4gICAgfSxcbiAgICBvblN3aXBlU3RhcnRlZCh7IGRhdGEsIG9iamVjdCB9KSB7XG4gICAgICBjb25zb2xlLmxvZyhgU3dpcGUgc3RhcnRlZGApXG4gICAgICBjb25zdCBzd2lwZUxpbWl0cyA9IGRhdGEuc3dpcGVMaW1pdHNcbiAgICAgIGNvbnN0IHN3aXBlVmlldyA9IG9iamVjdFxuICAgICAgY29uc3QgbGVmdEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQoJ21hcmstdmlldycpXG4gICAgICBjb25zdCByaWdodEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQoJ2RlbGV0ZS12aWV3JylcbiAgICAgIHN3aXBlTGltaXRzLmxlZnQgPSBsZWZ0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKClcbiAgICAgIHN3aXBlTGltaXRzLnJpZ2h0ID0gcmlnaHRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKVxuICAgICAgc3dpcGVMaW1pdHMudGhyZXNob2xkID0gbGVmdEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpIC8gMlxuICAgIH0sXG4gICAgb25MZWZ0U3dpcGVDbGljayh7IG9iamVjdCB9KSB7XG4gICAgICBjb25zb2xlLmxvZygnbGVmdCBhY3Rpb24gdGFwcGVkJylcbiAgICAgIGlmIChvYmplY3QuYmluZGluZ0NvbnRleHQuc2Vjb25kYXJ5SWNvbikge1xuICAgICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBtYXJrVGV4dDogJ1VubWFyaycgfVxuICAgICAgfVxuICAgICAgdGhpcy4kZW1pdCgnaXRlbU1hcmtlZCcsIG9iamVjdC5iaW5kaW5nQ29udGV4dClcbiAgICAgIHRoaXMuJHJlZnMubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpXG4gICAgfSxcbiAgICBvblJpZ2h0U3dpcGVDbGljayh7IG9iamVjdCB9KSB7XG4gICAgICBjb25zb2xlLmxvZygncmlnaHQgYWN0aW9uIHRhcHBlZCcpXG4gICAgICAvLyByZW1vdmUgaXRlbVxuICAgICAgdGhpcy4kZW1pdCgnaXRlbURlbGV0ZWQnLCBvYmplY3QuYmluZGluZ0NvbnRleHQpXG4gICAgICB0aGlzLiRyZWZzLmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKVxuICAgIH0sXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgIHRoaXMuJHJlZnMubGlzdFZpZXcucmVmcmVzaCgpXG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuPHRlbXBsYXRlPlxuICA8UmFkTGlzdFZpZXdcbiAgICByZWY9XCJsaXN0Vmlld1wiXG4gICAgOnB1bGxUb1JlZnJlc2g9XCJwdWxsVG9SZWZyZXNoXCJcbiAgICA6aXRlbVJlb3JkZXI9XCJpdGVtUmVvcmRlclwiXG4gICAgOnN3aXBlQWN0aW9ucz1cInN3aXBlQWN0aW9uc1wiXG4gICAgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIlxuICAgIEBwdWxsVG9SZWZyZXNoSW5pdGlhdGVkPVwib25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkXCJcbiAgICBAaXRlbVJlb3JkZXJlZD1cIm9uSXRlbVJlb3JkZXJlZFwiXG4gICAgQGl0ZW1Td2lwZVByb2dyZXNzU3RhcnRlZD1cIm9uU3dpcGVTdGFydGVkXCJcbiAgICBmb3I9XCJpdGVtIGluIGl0ZW1zXCJcbiAgPlxuICAgIDx2LXRlbXBsYXRlPlxuICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjUwLCAqXCIgcm93cz1cIipcIiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgPEltYWdlIDpzcmM9XCJpdGVtLmltYWdlXCIgY29sPVwiMFwiIGNsYXNzPVwidGh1bWJuYWlsXCIgLz5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGNvbD1cIjFcIj5cbiAgICAgICAgICA8bGFiZWwgOnRleHQ9XCJpdGVtLm5hbWVcIiBjbGFzcz1cImgyXCIgY29sPVwiMVwiIC8+XG4gICAgICAgICAgPGxhYmVsIDp0ZXh0PVwiaXRlbS5kZXNjcmlwdGlvblwiIGNsYXNzPVwicFwiIGNvbD1cIjFcIiAvPlxuICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgOnRleHQ9XCJpdGVtLnNlY29uZGFyeUljb24gfCBmb250aWNvblwiXG4gICAgICAgICAgICB2LWlmPVwiQm9vbGVhbihpdGVtLnNlY29uZGFyeUljb24pXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZmEgdC0xNlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgIDwvR3JpZExheW91dD5cbiAgICA8L3YtdGVtcGxhdGU+XG5cbiAgICA8di10ZW1wbGF0ZSBuYW1lPVwiaXRlbXN3aXBlXCI+XG4gICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiYXV0bywgKiwgYXV0b1wiIGJhY2tncm91bmRDb2xvcj1cIldoaXRlXCI+XG4gICAgICAgIDxTdGFja0xheW91dFxuICAgICAgICAgIGlkPVwibWFyay12aWV3XCJcbiAgICAgICAgICBAdGFwPVwib25MZWZ0U3dpcGVDbGlja1wiXG4gICAgICAgICAgY29sPVwiMFwiXG4gICAgICAgICAgY2xhc3M9XCJzd2lwZS1pdGVtIGxlZnRcIlxuICAgICAgICAgIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJzdGF0ZS5tYXJrVGV4dFwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDxTdGFja0xheW91dFxuICAgICAgICAgIGlkPVwiZGVsZXRlLXZpZXdcIlxuICAgICAgICAgIEB0YXA9XCJvblJpZ2h0U3dpcGVDbGlja1wiXG4gICAgICAgICAgY29sPVwiMlwiXG4gICAgICAgICAgY2xhc3M9XCJzd2lwZS1pdGVtIHJpZ2h0XCJcbiAgICAgICAgICBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIlxuICAgICAgICA+XG4gICAgICAgICAgPExhYmVsIHRleHQ9XCJkZWxldGVcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgPC9HcmlkTGF5b3V0PlxuICAgIDwvdi10ZW1wbGF0ZT5cbiAgPC9SYWRMaXN0Vmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLnQtMTYge1xuICBmb250LXNpemU6IDE2O1xufVxuPC9zdHlsZT5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJSYWRMaXN0Vmlld1wiLFxuICAgIHtcbiAgICAgIHJlZjogXCJsaXN0Vmlld1wiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgcHVsbFRvUmVmcmVzaDogX3ZtLnB1bGxUb1JlZnJlc2gsXG4gICAgICAgIGl0ZW1SZW9yZGVyOiBfdm0uaXRlbVJlb3JkZXIsXG4gICAgICAgIHN3aXBlQWN0aW9uczogX3ZtLnN3aXBlQWN0aW9ucyxcbiAgICAgICAgaXRlbXM6IF92bS5pdGVtcyxcbiAgICAgICAgXCIrYWxpYXNcIjogXCJpdGVtXCJcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBpdGVtVGFwOiBfdm0ub25JdGVtVGFwLFxuICAgICAgICBwdWxsVG9SZWZyZXNoSW5pdGlhdGVkOiBfdm0ub25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkLFxuICAgICAgICBpdGVtUmVvcmRlcmVkOiBfdm0ub25JdGVtUmVvcmRlcmVkLFxuICAgICAgICBpdGVtU3dpcGVQcm9ncmVzc1N0YXJ0ZWQ6IF92bS5vblN3aXBlU3RhcnRlZFxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpdGVtXCIsIGF0dHJzOiB7IGNvbHVtbnM6IFwiNTAsICpcIiwgcm93czogXCIqXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aHVtYm5haWxcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBpdGVtLmltYWdlLCBjb2w6IFwiMFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2w6IFwiMVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IGl0ZW0ubmFtZSwgY29sOiBcIjFcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBpdGVtLmRlc2NyaXB0aW9uLCBjb2w6IFwiMVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuKGl0ZW0uc2Vjb25kYXJ5SWNvbilcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgdC0xNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShpdGVtLnNlY29uZGFyeUljb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF0pXG4gICAgICB9KSxcbiAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgIGF0dHJzOiB7IG5hbWU6IFwiaXRlbXN3aXBlXCIgfSxcbiAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sdW1uczogXCJhdXRvLCAqLCBhdXRvXCIsIGJhY2tncm91bmRDb2xvcjogXCJXaGl0ZVwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzd2lwZS1pdGVtIGxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibWFyay12aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkxlZnRTd2lwZUNsaWNrIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnN0YXRlLm1hcmtUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3dpcGUtaXRlbSByaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJkZWxldGUtdmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25SaWdodFN3aXBlQ2xpY2sgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcImRlbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXSlcbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9