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
                { staticClass: "item" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jhc2VMaXN0Vmlldy52dWU/M2I1OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EscUJBQXFCLFNBQVMsV0FBVyxFQUFFO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsZ0JBQWdCLG9CQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDRCQUE0QjtBQUMxRCwyQkFBMkI7QUFDM0IscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDhCQUE4QjtBQUM1RCwyQkFBMkI7QUFDM0IscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuZmM2YjlhYjRhOTllN2MzNTFiODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJSYWRMaXN0Vmlld1wiLFxuICAgIHtcbiAgICAgIHJlZjogX3ZtLnJlZkZyb21QYXJlbnQsXG4gICAgICBzdGF0aWNDbGFzczogXCJudC1saXN0LXZpZXdcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHB1bGxUb1JlZnJlc2g6IF92bS5wdWxsVG9SZWZyZXNoLFxuICAgICAgICBpdGVtUmVvcmRlcjogX3ZtLml0ZW1SZW9yZGVyLFxuICAgICAgICBzd2lwZUFjdGlvbnM6IF92bS5zd2lwZUFjdGlvbnMsXG4gICAgICAgIGl0ZW1zOiBfdm0uaXRlbXMsXG4gICAgICAgIFwiK2FsaWFzXCI6IFwiaXRlbVwiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgaXRlbVRhcDogX3ZtLm9uSXRlbVRhcCxcbiAgICAgICAgcHVsbFRvUmVmcmVzaEluaXRpYXRlZDogX3ZtLm9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZCxcbiAgICAgICAgaXRlbVJlb3JkZXJlZDogX3ZtLm9uSXRlbVJlb3JkZXJlZCxcbiAgICAgICAgaXRlbVN3aXBlUHJvZ3Jlc3NTdGFydGVkOiBfdm0ub25Td2lwZVN0YXJ0ZWRcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwiRmxleEJveExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRodW1ibmFpbCBmYSB0LTE2IG50LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoaXRlbS5pY29uKSwgY29sOiBcIjBcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZsZXhCb3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2w6IFwiMVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDMgdC0yNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogaXRlbS5uYW1lLCBjb2w6IFwiMVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IGl0ZW0uZGVzY3JpcHRpb24sIGNvbDogXCIxXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4oaXRlbS5zZWNvbmRhcnlJY29uKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSB0LTE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKGl0ZW0uc2Vjb25kYXJ5SWNvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXSlcbiAgICAgIH0pLFxuICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJpdGVtc3dpcGVcIiB9LFxuICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2x1bW5zOiBcImF1dG8sICosIGF1dG9cIiwgYmFja2dyb3VuZENvbG9yOiBcIldoaXRlXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRmxleEJveExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3dpcGUtaXRlbSBsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibWFyay12aWV3XCIsIGNvbDogXCIwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkxlZnRTd2lwZUNsaWNrIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnN0YXRlLm1hcmtUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGbGV4Qm94TGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzd2lwZS1pdGVtIHJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiZGVsZXRlLXZpZXdcIiwgY29sOiBcIjJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uUmlnaHRTd2lwZUNsaWNrIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtdHJhc2hcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdKVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=