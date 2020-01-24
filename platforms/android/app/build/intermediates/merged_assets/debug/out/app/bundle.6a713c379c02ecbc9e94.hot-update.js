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
                "FlexBoxLayout",
                {
                  attrs: { flexDirection: "column", justifyContent: "center" }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9NYXRjaGVzLnZ1ZT9mZjA1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsNEJBQTRCLEVBQUU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLDRCQUE0QixFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS42YTcxM2MzNzljMDJlY2JjOWU5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpdml0eUluZGljYXRvclwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRlciBudC1hY3Rpdml0eS1pbmRpY2F0b3JcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBfdm0ubG9hZGluZyA/IFwidmlzaWJsZVwiIDogXCJjb2xsYXBzZVwiLFxuICAgICAgICAgIGJ1c3k6IF92bS5sb2FkaW5nLFxuICAgICAgICAgIHdpZHRoOiBcIjIwXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjIwXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0ucm9sZSA9PT0gMVxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJEb2NrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHN0cmV0Y2hMYXN0Q2hpbGQ6IFwiZmFsc2VcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiQmFzZUJ1dHRvbldpdGhJY29uXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogXCJOZXcgTWF0Y2hcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwiZmEtcGx1cy1jaXJjbGVcIixcbiAgICAgICAgICAgICAgICAgIGRvYzogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBoYW5kbGVPbkNsaWNrOiBfdm0uaGFuZGxlT25DcmVhdGVNYXRjaENsaWNrIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLnN0YXRlLml0ZW1zLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcIkZsZXhCb3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibnQtbGFiZWwgaDNcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJObyBzY2hlZHVsZSB5ZXQuLlwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLnN0YXRlLml0ZW1zLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gX2MoXCJCYXNlQ2FyZExpc3RTY3JvbGxWaWV3XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5zdGF0ZS5pdGVtcyxcbiAgICAgICAgICAgICAgICAgIHJlZkZyb21QYXJlbnQ6IFwibWF0Y2hlc0NhcmRMaXN0XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVPbkl0ZW1DbGljazogX3ZtLmhhbmRsZU9uSXRlbUNsaWNrLFxuICAgICAgICAgICAgICAgICAgaGFuZGxlT25JdGVtRWRpdDogX3ZtLmhhbmRsZU9uSXRlbUVkaXQsXG4gICAgICAgICAgICAgICAgICBoYW5kbGVPbkl0ZW1EZWxldGU6IF92bS5oYW5kbGVPbkl0ZW1EZWxldGUsXG4gICAgICAgICAgICAgICAgICBoYW5kbGVPbkNhbmNlbDogX3ZtLmhhbmRsT25DYW5jZWwsXG4gICAgICAgICAgICAgICAgICBoYW5kbGVPbk9rOiBfdm0uaGFuZGxlT25Pa1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==