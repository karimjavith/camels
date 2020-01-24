webpackHotUpdate("bundle",{

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/Home.vue?vue&type=template&id=2f2be7e4&scoped=true&":
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
    { staticClass: "image" },
    [
      _c("ActivityIndicator", {
        staticClass: "nt-activity-indicator loader",
        attrs: {
          visibility: _vm.loading ? "visible" : "collapse",
          busy: _vm.loading,
          left: "100",
          top: "100"
        }
      }),
      _c(
        "ScrollView",
        { ref: "scrollView", on: { scroll: _vm.onScroll } },
        [
          _c(
            "StackLayout",
            [
              _c(
                "StackLayout",
                { ref: "topView", attrs: { height: "500" } },
                [
                  _c(
                    "FlexBoxLayout",
                    { attrs: { flexDirection: "column" } },
                    [
                      _c("Label", {
                        attrs: {
                          text: "Camels",
                          color: "white",
                          textAlignment: "center",
                          fontSize: "36",
                          marginTop: "120",
                          textTransform: "uppercase"
                        }
                      }),
                      _c("Label", {
                        attrs: {
                          text: "VS",
                          color: "white",
                          textAlignment: "center",
                          fontSize: "20",
                          marginTop: "10"
                        }
                      }),
                      !_vm.matchDetails.opponent
                        ? _c("Label", {
                            attrs: {
                              text: "-----",
                              color: "white",
                              textAlignment: "center",
                              fontSize: "36",
                              marginTop: "10",
                              textTransform: "uppercase"
                            }
                          })
                        : _vm._e(),
                      _vm.matchDetails.opponent
                        ? _c("Label", {
                            attrs: {
                              text: _vm.matchDetails.opponent,
                              color: "white",
                              textAlignment: "center",
                              fontSize: "36",
                              marginTop: "10",
                              textTransform: "uppercase"
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm.matchDetails.venue
                    ? _c(
                        "FlexBoxLayout",
                        {
                          staticClass: "m-t-10",
                          attrs: { flex: "1", justifyContent: "center" }
                        },
                        [
                          _c(
                            "Label",
                            {
                              attrs: {
                                color: "white",
                                fontWeight: "bold",
                                textAlignment: "center",
                                fontSize: "16",
                                marginTop: "50"
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.matchDetails.venue) +
                                  " , " +
                                  _vm._s(_vm.matchDetails.postCode)
                              )
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  !_vm.matchDetails.venue
                    ? _c(
                        "FlexBoxLayout",
                        {
                          staticClass: "m-t-10",
                          attrs: { flex: "1", justifyContent: "center" }
                        },
                        [
                          _c(
                            "Label",
                            {
                              attrs: {
                                color: "white",
                                fontWeight: "bold",
                                textAlignment: "center",
                                fontSize: "16",
                                marginTop: "50"
                              }
                            },
                            [_vm._v("------, -----")]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm.matchDetails.venue
                    ? _c(
                        "FlexBoxLayout",
                        { attrs: { flex: "1", justifyContent: "center" } },
                        [
                          _c(
                            "Label",
                            {
                              attrs: {
                                color: "white",
                                fontWeight: "bold",
                                textAlignment: "center",
                                fontSize: "16",
                                marginTop: "10"
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.matchDetails.date) +
                                  " @ " +
                                  _vm._s(_vm.matchDetails.time)
                              )
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  !_vm.matchDetails.date
                    ? _c(
                        "FlexBoxLayout",
                        { attrs: { flex: "1", justifyContent: "center" } },
                        [
                          _c(
                            "Label",
                            {
                              attrs: {
                                color: "white",
                                fontWeight: "bold",
                                textAlignment: "center",
                                fontSize: "16",
                                marginTop: "10"
                              }
                            },
                            [_vm._v("--/--/---- --:--")]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm.matchDetails.id
                    ? _c(
                        "FlexBoxLayout",
                        {
                          staticClass: "m-t-25",
                          attrs: { flex: "1", justifyContent: "center" }
                        },
                        [
                          _c("BaseButtonWithIcon", {
                            attrs: {
                              styleObject: {
                                color:
                                  _vm.matchDetails.myStatus === 1 << 1
                                    ? "#ff4350"
                                    : "#888e90"
                              },
                              text: "Not In",
                              icon: "fa-times-circle"
                            },
                            on: { handleOnClick: _vm.handleOnNoClick }
                          }),
                          _c("BaseButtonWithIcon", {
                            attrs: {
                              styleObject: {
                                color:
                                  _vm.matchDetails.myStatus === 1 << 0
                                    ? "green"
                                    : "#888e90"
                              },
                              text: "I am In",
                              icon: "fa-check-circle"
                            },
                            on: { handleOnClick: _vm.handleOnYesClick }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              ),
              _c("StackLayout", { attrs: { width: "100%", padding: "10" } })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "FlexBoxLayout",
        {
          staticClass: "m-t-10",
          attrs: { flex: "1", justifyContent: "center" }
        },
        [
          _c("BaseButton", {
            class: { "m-t-20": true, "-primary": true },
            attrs: {
              loading: false,
              refFromParent: "viewallmatches",
              text: "View All Matches"
            },
            on: { handleOnClick: _vm.handleOnViewAllMatchesClick }
          })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9Ib21lLnZ1ZT9lMWZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUJBQXVCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUyx5QkFBeUIsdUJBQXVCLEVBQUU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHlCQUF5QixnQkFBZ0IsRUFBRTtBQUM1RDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUywwQkFBMEIsRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFNBQVMsc0NBQXNDLEVBQUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsU0FBUyxzQ0FBc0MsRUFBRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixpQ0FBaUM7QUFDakMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBQ2pDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLCtCQUErQixFQUFFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixpQkFBaUI7QUFDakIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuYTY0YjAyZGVjYTkyNzcyZjY3ODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJTdGFja0xheW91dFwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aXZpdHlJbmRpY2F0b3JcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJudC1hY3Rpdml0eS1pbmRpY2F0b3IgbG9hZGVyXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogX3ZtLmxvYWRpbmcgPyBcInZpc2libGVcIiA6IFwiY29sbGFwc2VcIixcbiAgICAgICAgICBidXN5OiBfdm0ubG9hZGluZyxcbiAgICAgICAgICBsZWZ0OiBcIjEwMFwiLFxuICAgICAgICAgIHRvcDogXCIxMDBcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgeyByZWY6IFwic2Nyb2xsVmlld1wiLCBvbjogeyBzY3JvbGw6IF92bS5vblNjcm9sbCB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgcmVmOiBcInRvcFZpZXdcIiwgYXR0cnM6IHsgaGVpZ2h0OiBcIjUwMFwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGbGV4Qm94TGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQ2FtZWxzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjM2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJWU1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICFfdm0ubWF0Y2hEZXRhaWxzLm9wcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIi0tLS0tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjM2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5tYXRjaERldGFpbHMub3Bwb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5tYXRjaERldGFpbHMub3Bwb25lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjM2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0ubWF0Y2hEZXRhaWxzLnZlbnVlXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZsZXhCb3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS10LTEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsZXg6IFwiMVwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubWF0Y2hEZXRhaWxzLnZlbnVlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgLCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5tYXRjaERldGFpbHMucG9zdENvZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICFfdm0ubWF0Y2hEZXRhaWxzLnZlbnVlXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZsZXhCb3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS10LTEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsZXg6IFwiMVwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiLS0tLS0tLCAtLS0tLVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0ubWF0Y2hEZXRhaWxzLnZlbnVlXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZsZXhCb3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmxleDogXCIxXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm1hdGNoRGV0YWlscy5kYXRlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgQCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5tYXRjaERldGFpbHMudGltZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgIV92bS5tYXRjaERldGFpbHMuZGF0ZVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGbGV4Qm94TGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsZXg6IFwiMVwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCItLS8tLS8tLS0tIC0tOi0tXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5tYXRjaERldGFpbHMuaWRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRmxleEJveExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLXQtMjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxleDogXCIxXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQmFzZUJ1dHRvbldpdGhJY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVPYmplY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1hdGNoRGV0YWlscy5teVN0YXR1cyA9PT0gMSA8PCAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiI2ZmNDM1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiIzg4OGU5MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJOb3QgSW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiZmEtdGltZXMtY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGhhbmRsZU9uQ2xpY2s6IF92bS5oYW5kbGVPbk5vQ2xpY2sgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJCYXNlQnV0dG9uV2l0aEljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZU9iamVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWF0Y2hEZXRhaWxzLm15U3RhdHVzID09PSAxIDw8IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiIzg4OGU5MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJJIGFtIEluXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImZhLWNoZWNrLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBoYW5kbGVPbkNsaWNrOiBfdm0uaGFuZGxlT25ZZXNDbGljayB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgYXR0cnM6IHsgd2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nOiBcIjEwXCIgfSB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJGbGV4Qm94TGF5b3V0XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLXQtMTBcIixcbiAgICAgICAgICBhdHRyczogeyBmbGV4OiBcIjFcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJCYXNlQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGNsYXNzOiB7IFwibS10LTIwXCI6IHRydWUsIFwiLXByaW1hcnlcIjogdHJ1ZSB9LFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgIHJlZkZyb21QYXJlbnQ6IFwidmlld2FsbG1hdGNoZXNcIixcbiAgICAgICAgICAgICAgdGV4dDogXCJWaWV3IEFsbCBNYXRjaGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyBoYW5kbGVPbkNsaWNrOiBfdm0uaGFuZGxlT25WaWV3QWxsTWF0Y2hlc0NsaWNrIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9