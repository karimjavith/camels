webpackHotUpdate("bundle",{

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/UserList.vue?vue&type=template&id=644241b8&scoped=true&":
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
    "Page",
    [
      _c(
        "ActionBar",
        [
          _c("Button", {
            attrs: { text: "Back" },
            on: { tap: _vm.onNavigationButtonTap }
          })
        ],
        1
      ),
      _c(
        "StackLayout",
        { attrs: { orientation: "horizontal" } },
        [
          _vm._v('\n      :busy="state.loading" >'),
          !_vm.state.loading
            ? _c("ListScrollView", {
                ref: "list",
                attrs: {
                  items: _vm.state.items,
                  pullToRefresh: false,
                  itemReorder: false,
                  swipeActions: true
                },
                on: {
                  itemTap: _vm.onItemTap,
                  itemDeleted: _vm.onItemDeleted,
                  itemMarked: _vm.onItemMarked
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
var staticRenderFns = []
render._withStripped = true



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9Vc2VyTGlzdC52dWU/NzIyMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGVBQWU7QUFDbkMsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLDRCQUE0QixFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmQzMzg3ZGJkZDNmMWQ1NzYxNDQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJCYWNrXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uTmF2aWdhdGlvbkJ1dHRvblRhcCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fdignXFxuICAgICAgOmJ1c3k9XCJzdGF0ZS5sb2FkaW5nXCIgPicpLFxuICAgICAgICAgICFfdm0uc3RhdGUubG9hZGluZ1xuICAgICAgICAgICAgPyBfYyhcIkxpc3RTY3JvbGxWaWV3XCIsIHtcbiAgICAgICAgICAgICAgICByZWY6IFwibGlzdFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLnN0YXRlLml0ZW1zLFxuICAgICAgICAgICAgICAgICAgcHVsbFRvUmVmcmVzaDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBpdGVtUmVvcmRlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBzd2lwZUFjdGlvbnM6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpdGVtVGFwOiBfdm0ub25JdGVtVGFwLFxuICAgICAgICAgICAgICAgICAgaXRlbURlbGV0ZWQ6IF92bS5vbkl0ZW1EZWxldGVkLFxuICAgICAgICAgICAgICAgICAgaXRlbU1hcmtlZDogX3ZtLm9uSXRlbU1hcmtlZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==