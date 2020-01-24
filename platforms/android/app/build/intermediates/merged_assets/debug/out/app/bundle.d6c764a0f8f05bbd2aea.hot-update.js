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
        [
          _vm.state.items.length === 0
            ? _c(
                "FlexBoxLayout",
                { attrs: { flexDirection: "column", alignContent: "center" } },
                [
                  _c("Label", {
                    staticClass: "nt-label h3",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9NYXRjaGVzLnZ1ZT9mZjA1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsNEJBQTRCLEVBQUU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyxrREFBa0QsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuZDZjNzY0YTBmOGYwNWJiZDJhZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJTdGFja0xheW91dFwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aXZpdHlJbmRpY2F0b3JcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkZXIgbnQtYWN0aXZpdHktaW5kaWNhdG9yXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogX3ZtLmxvYWRpbmcgPyBcInZpc2libGVcIiA6IFwiY29sbGFwc2VcIixcbiAgICAgICAgICBidXN5OiBfdm0ubG9hZGluZyxcbiAgICAgICAgICB3aWR0aDogXCIyMFwiLFxuICAgICAgICAgIGhlaWdodDogXCIyMFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLnJvbGUgPT09IDFcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiRG9ja0xheW91dFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBzdHJldGNoTGFzdENoaWxkOiBcImZhbHNlXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkJhc2VCdXR0b25XaXRoSWNvblwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiTmV3IE1hdGNoXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcImZhLXBsdXMtY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgICBkb2M6IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgaGFuZGxlT25DbGljazogX3ZtLmhhbmRsZU9uQ3JlYXRlTWF0Y2hDbGljayB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uc3RhdGUuaXRlbXMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiRmxleEJveExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgYWxpZ25Db250ZW50OiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibnQtbGFiZWwgaDNcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJObyBzY2hlZHVsZSB5ZXQuLlwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLnN0YXRlLml0ZW1zLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gX2MoXCJCYXNlQ2FyZExpc3RTY3JvbGxWaWV3XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5zdGF0ZS5pdGVtcyxcbiAgICAgICAgICAgICAgICAgIHJlZkZyb21QYXJlbnQ6IFwibWF0Y2hlc0NhcmRMaXN0XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVPbkl0ZW1DbGljazogX3ZtLmhhbmRsZU9uSXRlbUNsaWNrLFxuICAgICAgICAgICAgICAgICAgaGFuZGxlT25JdGVtRWRpdDogX3ZtLmhhbmRsZU9uSXRlbUVkaXQsXG4gICAgICAgICAgICAgICAgICBoYW5kbGVPbkl0ZW1EZWxldGU6IF92bS5oYW5kbGVPbkl0ZW1EZWxldGUsXG4gICAgICAgICAgICAgICAgICBoYW5kbGVPbkNhbmNlbDogX3ZtLmhhbmRsT25DYW5jZWwsXG4gICAgICAgICAgICAgICAgICBoYW5kbGVPbk9rOiBfdm0uaGFuZGxlT25Pa1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==