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
        staticClass: "h1 m-t-20 m-l-20 nt-label",
        attrs: { text: "Matches", fontWeight: "bold", height: "50" }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9NYXRjaGVzLnZ1ZT9mZjA1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUyw2QkFBNkIsRUFBRTtBQUM3QztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxnQkFBZ0IsMERBQTBEO0FBQzFFLGFBQWE7QUFDYixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjcwZGVhNDljZmVkYzcxOTM3NTY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b25hdGFsXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJoMSBtLXQtMjAgbS1sLTIwIG50LWxhYmVsXCIsXG4gICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTWF0Y2hlc1wiLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgaGVpZ2h0OiBcIjUwXCIgfVxuICAgICAgfSksXG4gICAgICBfYyhcIkFjdGl2aXR5SW5kaWNhdG9yXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGVyIG50LWFjdGl2aXR5LWluZGljYXRvclwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHZpc2liaWxpdHk6IF92bS5sb2FkaW5nID8gXCJ2aXNpYmxlXCIgOiBcImNvbGxhcHNlXCIsXG4gICAgICAgICAgYnVzeTogX3ZtLmxvYWRpbmcsXG4gICAgICAgICAgd2lkdGg6IFwiMjBcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMjBcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF9jKFwiQmFzZUJ1dHRvbldpdGhJY29uXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJOZXcgTWF0Y2hcIiwgaWNvbjogXCJmYS1wbHVzLWNpcmNsZVwiLCBkb2M6IFwicmlnaHRcIiB9LFxuICAgICAgICBvbjogeyBoYW5kbGVPbkNsaWNrOiBfdm0uaGFuZGxlT25DcmVhdGVNYXRjaENsaWNrIH1cbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5zdGF0ZS5pdGVtcy5sZW5ndGggPT09IDAgJiYgIV92bS5sb2FkaW5nXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiRmxleEJveExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm0tdC0xMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxleDogXCIxXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJudC1sYWJlbCBoM1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIk5vIHNjaGVkdWxlIHlldC4uXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uc3RhdGUuaXRlbXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBfYyhcIkJhc2VDYXJkTGlzdFNjcm9sbFZpZXdcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLnN0YXRlLml0ZW1zLFxuICAgICAgICAgICAgICAgICAgcmVmRnJvbVBhcmVudDogXCJtYXRjaGVzQ2FyZExpc3RcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGhhbmRsZU9uSXRlbUNsaWNrOiBfdm0uaGFuZGxlT25JdGVtQ2xpY2ssXG4gICAgICAgICAgICAgICAgICBoYW5kbGVPbkl0ZW1FZGl0OiBfdm0uaGFuZGxlT25JdGVtRWRpdCxcbiAgICAgICAgICAgICAgICAgIGhhbmRsZU9uSXRlbURlbGV0ZTogX3ZtLmhhbmRsZU9uSXRlbURlbGV0ZSxcbiAgICAgICAgICAgICAgICAgIGhhbmRsZU9uQ2FuY2VsOiBfdm0uaGFuZGxPbkNhbmNlbCxcbiAgICAgICAgICAgICAgICAgIGhhbmRsZU9uT2s6IF92bS5oYW5kbGVPbk9rXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9