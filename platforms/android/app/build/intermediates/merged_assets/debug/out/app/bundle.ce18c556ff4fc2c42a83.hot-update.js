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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9NYXRjaGVzLnZ1ZT9mZjA1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsNEJBQTRCLEVBQUU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLDRCQUE0QixFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuY2UxOGM1NTZmZjRmYzJjNDJhODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJTdGFja0xheW91dFwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aXZpdHlJbmRpY2F0b3JcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkZXIgbnQtYWN0aXZpdHktaW5kaWNhdG9yXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogX3ZtLmxvYWRpbmcgPyBcInZpc2libGVcIiA6IFwiY29sbGFwc2VcIixcbiAgICAgICAgICBidXN5OiBfdm0ubG9hZGluZyxcbiAgICAgICAgICB3aWR0aDogXCIyMFwiLFxuICAgICAgICAgIGhlaWdodDogXCIyMFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLnJvbGUgPT09IDFcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiRG9ja0xheW91dFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBzdHJldGNoTGFzdENoaWxkOiBcImZhbHNlXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkJhc2VCdXR0b25XaXRoSWNvblwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiTmV3IE1hdGNoXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcImZhLXBsdXMtY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgICBkb2M6IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgaGFuZGxlT25DbGljazogX3ZtLmhhbmRsZU9uQ3JlYXRlTWF0Y2hDbGljayB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5zdGF0ZS5pdGVtcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IF9jKFwiQmFzZUNhcmRMaXN0U2Nyb2xsVmlld1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uc3RhdGUuaXRlbXMsXG4gICAgICAgICAgICAgICAgICByZWZGcm9tUGFyZW50OiBcIm1hdGNoZXNDYXJkTGlzdFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaGFuZGxlT25JdGVtQ2xpY2s6IF92bS5oYW5kbGVPbkl0ZW1DbGljayxcbiAgICAgICAgICAgICAgICAgIGhhbmRsZU9uSXRlbUVkaXQ6IF92bS5oYW5kbGVPbkl0ZW1FZGl0LFxuICAgICAgICAgICAgICAgICAgaGFuZGxlT25JdGVtRGVsZXRlOiBfdm0uaGFuZGxlT25JdGVtRGVsZXRlLFxuICAgICAgICAgICAgICAgICAgaGFuZGxlT25DYW5jZWw6IF92bS5oYW5kbE9uQ2FuY2VsLFxuICAgICAgICAgICAgICAgICAgaGFuZGxlT25PazogX3ZtLmhhbmRsZU9uT2tcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=