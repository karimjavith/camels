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
    { attrs: { orientation: "horizonatal" } },
    [
      _c("Label", {
        staticClass: "h2 m-t-20 nt-label",
        attrs: { text: "Matches", height: "70" }
      }),
      _c("ActivityIndicator", {
        staticClass: "loader nt-activity-indicator",
        attrs: {
          visibility: _vm.loading ? "visible" : "collapse",
          busy: _vm.loading,
          width: "20",
          height: "20"
        }
      }),
      _c("BaseButtonWithIcon", {
        attrs: { text: "New Match", icon: "fa-plus-circle", doc: "right" },
        on: { handleOnClick: _vm.handleOnCreateMatchClick }
      }),
      _c(
        "StackLayout",
        [
          _vm.state.items.length === 0 && !_vm.loading
            ? _c(
                "FlexBoxLayout",
                {
                  staticClass: "m-t-10",
                  attrs: { flex: "1", justifyContent: "center" }
                },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9NYXRjaGVzLnZ1ZT9mZjA1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUyw2QkFBNkIsRUFBRTtBQUM3QztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxnQkFBZ0IsMERBQTBEO0FBQzFFLGFBQWE7QUFDYixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmVkZDJlM2Y4YjBlZTBlMTUyNTQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b25hdGFsXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJoMiBtLXQtMjAgbnQtbGFiZWxcIixcbiAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJNYXRjaGVzXCIsIGhlaWdodDogXCI3MFwiIH1cbiAgICAgIH0pLFxuICAgICAgX2MoXCJBY3Rpdml0eUluZGljYXRvclwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRlciBudC1hY3Rpdml0eS1pbmRpY2F0b3JcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBfdm0ubG9hZGluZyA/IFwidmlzaWJsZVwiIDogXCJjb2xsYXBzZVwiLFxuICAgICAgICAgIGJ1c3k6IF92bS5sb2FkaW5nLFxuICAgICAgICAgIHdpZHRoOiBcIjIwXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjIwXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfYyhcIkJhc2VCdXR0b25XaXRoSWNvblwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTmV3IE1hdGNoXCIsIGljb246IFwiZmEtcGx1cy1jaXJjbGVcIiwgZG9jOiBcInJpZ2h0XCIgfSxcbiAgICAgICAgb246IHsgaGFuZGxlT25DbGljazogX3ZtLmhhbmRsZU9uQ3JlYXRlTWF0Y2hDbGljayB9XG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uc3RhdGUuaXRlbXMubGVuZ3RoID09PSAwICYmICFfdm0ubG9hZGluZ1xuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcIkZsZXhCb3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLXQtMTBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsZXg6IFwiMVwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibnQtbGFiZWwgaDNcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJObyBzY2hlZHVsZSB5ZXQuLlwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLnN0YXRlLml0ZW1zLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gX2MoXCJCYXNlQ2FyZExpc3RTY3JvbGxWaWV3XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5zdGF0ZS5pdGVtcyxcbiAgICAgICAgICAgICAgICAgIHJlZkZyb21QYXJlbnQ6IFwibWF0Y2hlc0NhcmRMaXN0XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVPbkl0ZW1DbGljazogX3ZtLmhhbmRsZU9uSXRlbUNsaWNrLFxuICAgICAgICAgICAgICAgICAgaGFuZGxlT25JdGVtRWRpdDogX3ZtLmhhbmRsZU9uSXRlbUVkaXQsXG4gICAgICAgICAgICAgICAgICBoYW5kbGVPbkl0ZW1EZWxldGU6IF92bS5oYW5kbGVPbkl0ZW1EZWxldGUsXG4gICAgICAgICAgICAgICAgICBoYW5kbGVPbkNhbmNlbDogX3ZtLmhhbmRsT25DYW5jZWwsXG4gICAgICAgICAgICAgICAgICBoYW5kbGVPbk9rOiBfdm0uaGFuZGxlT25Pa1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==