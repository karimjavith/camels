webpackHotUpdate("bundle",{

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/Matches.vue?vue&type=template&id=13571a58&scoped=true&":
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
    "StackLayout",
    [
      _c("ActivityIndicator", {
        staticClass: "loader nt-activity-indicator",
        attrs: {
          visibility: _vm.loading ? "visible" : "collapse",
          busy: _vm.loading,
          width: "20",
          height: "20"
        }
      }),
      _vm.role === 1
        ? _c(
            "DockLayout",
            { attrs: { stretchLastChild: "false" } },
            [
              _c("BaseButtonWithIcon", {
                attrs: {
                  text: "New Match",
                  icon: "fa-plus-circle",
                  doc: "right"
                },
                on: { handleOnClick: _vm.handleOnCreateMatchClick }
              })
            ],
            1
          )
        : _vm._e(),
      _c(
        "StackLayout",
        { attrs: { orientation: "horizontal" } },
        [
          _vm.state.items.length === 0
            ? _c(
                "StackLayout",
                [
                  _c("Label", {
                    staticClass: "nt-label h4",
                    attrs: { text: "No schedule yet.." }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm.state.items.length > 0
            ? _c("BaseCardListScrollView", {
                attrs: {
                  items: _vm.state.items,
                  refFromParent: "matchesCardList"
                },
                on: {
                  handleOnItemClick: _vm.handleOnItemClick,
                  handleOnItemEdit: _vm.handleOnItemEdit,
                  handleOnItemDelete: _vm.handleOnItemDelete,
                  handleOnCancel: _vm.handlOnCancel,
                  handleOnOk: _vm.handleOnOk
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9NYXRjaGVzLnZ1ZT9mZjA1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsNEJBQTRCLEVBQUU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLDRCQUE0QixFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjA1NGY4YWFmMmMzY2JhMTg3YzcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGl2aXR5SW5kaWNhdG9yXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGVyIG50LWFjdGl2aXR5LWluZGljYXRvclwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHZpc2liaWxpdHk6IF92bS5sb2FkaW5nID8gXCJ2aXNpYmxlXCIgOiBcImNvbGxhcHNlXCIsXG4gICAgICAgICAgYnVzeTogX3ZtLmxvYWRpbmcsXG4gICAgICAgICAgd2lkdGg6IFwiMjBcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMjBcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5yb2xlID09PSAxXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcIkRvY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgc3RyZXRjaExhc3RDaGlsZDogXCJmYWxzZVwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJCYXNlQnV0dG9uV2l0aEljb25cIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIk5ldyBNYXRjaFwiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJmYS1wbHVzLWNpcmNsZVwiLFxuICAgICAgICAgICAgICAgICAgZG9jOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGhhbmRsZU9uQ2xpY2s6IF92bS5oYW5kbGVPbkNyZWF0ZU1hdGNoQ2xpY2sgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uc3RhdGUuaXRlbXMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibnQtbGFiZWwgaDRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJObyBzY2hlZHVsZSB5ZXQuLlwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLnN0YXRlLml0ZW1zLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gX2MoXCJCYXNlQ2FyZExpc3RTY3JvbGxWaWV3XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5zdGF0ZS5pdGVtcyxcbiAgICAgICAgICAgICAgICAgIHJlZkZyb21QYXJlbnQ6IFwibWF0Y2hlc0NhcmRMaXN0XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVPbkl0ZW1DbGljazogX3ZtLmhhbmRsZU9uSXRlbUNsaWNrLFxuICAgICAgICAgICAgICAgICAgaGFuZGxlT25JdGVtRWRpdDogX3ZtLmhhbmRsZU9uSXRlbUVkaXQsXG4gICAgICAgICAgICAgICAgICBoYW5kbGVPbkl0ZW1EZWxldGU6IF92bS5oYW5kbGVPbkl0ZW1EZWxldGUsXG4gICAgICAgICAgICAgICAgICBoYW5kbGVPbkNhbmNlbDogX3ZtLmhhbmRsT25DYW5jZWwsXG4gICAgICAgICAgICAgICAgICBoYW5kbGVPbk9rOiBfdm0uaGFuZGxlT25Pa1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==