webpackHotUpdate("bundle",{

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/BaseListView.vue?vue&type=template&id=9c8161a2&":
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
      ref: _vm.refFromParent,
      staticClass: "nt-list-view",
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
                "FlexBoxLayout",
                { staticClass: "item", attrs: { columns: "50, *", rows: "*" } },
                [
                  _c("Label", {
                    staticClass: "thumbnail fa t-16 nt-icon",
                    attrs: { text: _vm._f("fonticon")(item.icon), col: "0" }
                  }),
                  _c(
                    "FlexBoxLayout",
                    { attrs: { col: "1" } },
                    [
                      _c("label", {
                        staticClass: "h3 t-24",
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
                    "FlexBoxLayout",
                    {
                      staticClass: "swipe-item left",
                      attrs: { id: "mark-view", col: "0" },
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
                    "FlexBoxLayout",
                    {
                      staticClass: "swipe-item right",
                      attrs: { id: "delete-view", col: "2" },
                      on: { tap: _vm.onRightSwipeClick }
                    },
                    [
                      _c("Label", {
                        staticClass: "fa",
                        attrs: {
                          text: _vm._f("fonticon")("fa-trash"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jhc2VMaXN0Vmlldy52dWU/M2I1OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw4QkFBOEIsOEJBQThCLEVBQUU7QUFDL0U7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EscUJBQXFCLFNBQVMsV0FBVyxFQUFFO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsZ0JBQWdCLG9CQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDRCQUE0QjtBQUMxRCwyQkFBMkI7QUFDM0IscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDhCQUE4QjtBQUM1RCwyQkFBMkI7QUFDM0IscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuYTJiMjk1MTNiZDA5NjUwZTU0MGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJSYWRMaXN0Vmlld1wiLFxuICAgIHtcbiAgICAgIHJlZjogX3ZtLnJlZkZyb21QYXJlbnQsXG4gICAgICBzdGF0aWNDbGFzczogXCJudC1saXN0LXZpZXdcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHB1bGxUb1JlZnJlc2g6IF92bS5wdWxsVG9SZWZyZXNoLFxuICAgICAgICBpdGVtUmVvcmRlcjogX3ZtLml0ZW1SZW9yZGVyLFxuICAgICAgICBzd2lwZUFjdGlvbnM6IF92bS5zd2lwZUFjdGlvbnMsXG4gICAgICAgIGl0ZW1zOiBfdm0uaXRlbXMsXG4gICAgICAgIFwiK2FsaWFzXCI6IFwiaXRlbVwiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgaXRlbVRhcDogX3ZtLm9uSXRlbVRhcCxcbiAgICAgICAgcHVsbFRvUmVmcmVzaEluaXRpYXRlZDogX3ZtLm9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZCxcbiAgICAgICAgaXRlbVJlb3JkZXJlZDogX3ZtLm9uSXRlbVJlb3JkZXJlZCxcbiAgICAgICAgaXRlbVN3aXBlUHJvZ3Jlc3NTdGFydGVkOiBfdm0ub25Td2lwZVN0YXJ0ZWRcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwiRmxleEJveExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaXRlbVwiLCBhdHRyczogeyBjb2x1bW5zOiBcIjUwLCAqXCIsIHJvd3M6IFwiKlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGh1bWJuYWlsIGZhIHQtMTYgbnQtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShpdGVtLmljb24pLCBjb2w6IFwiMFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRmxleEJveExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbDogXCIxXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMyB0LTI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBpdGVtLm5hbWUsIGNvbDogXCIxXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogaXRlbS5kZXNjcmlwdGlvbiwgY29sOiBcIjFcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbihpdGVtLnNlY29uZGFyeUljb24pXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIHQtMTZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoaXRlbS5zZWNvbmRhcnlJY29uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdKVxuICAgICAgfSksXG4gICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICBhdHRyczogeyBuYW1lOiBcIml0ZW1zd2lwZVwiIH0sXG4gICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHVtbnM6IFwiYXV0bywgKiwgYXV0b1wiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiV2hpdGVcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGbGV4Qm94TGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzd2lwZS1pdGVtIGxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJtYXJrLXZpZXdcIiwgY29sOiBcIjBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uTGVmdFN3aXBlQ2xpY2sgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uc3RhdGUubWFya1RleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZsZXhCb3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN3aXBlLWl0ZW0gcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJkZWxldGUtdmlld1wiLCBjb2w6IFwiMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25SaWdodFN3aXBlQ2xpY2sgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS10cmFzaFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF0pXG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==