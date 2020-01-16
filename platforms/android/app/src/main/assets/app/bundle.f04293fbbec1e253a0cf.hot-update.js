webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/TextField.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TextField',
  props: {
    keyboardType: {
      type: String,
      default: 'text'
    },
    placeHolderText: {
      type: String,
      default: ''
    },
    // value: {
    //   type: String,
    //   default: '',
    // },
    returnPress: {
      type: Function,
      default: function _default() {
        return null;
      }
    },
    returnKeyType: {
      type: String,
      default: 'next'
    }
  },

  data() {
    return {
      state: {
        markText: 'Mark'
      }
    };
  },

  methods: {// onReturnPress(event) {
    //   this.$emit('onTextReturnPress', event)
    // },
  }
});

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/TextField.vue?vue&type=template&id=210072fc&":
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
    { staticClass: "nt-input input-field" },
    [
      _c("TextField", {
        staticClass: "input nt-input",
        attrs: { autocorrect: "false", "autocapitalization-type": "none" }
      }),
      _c("StackLayout", { staticClass: "hr-light" })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9UZXh0RmllbGQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGV4dEZpZWxkLnZ1ZT85ZmNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7QUFDQSxtQkFEQTtBQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQUtBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBTEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQTtBQUNBO0FBQ0E7QUFKQSxLQWJBO0FBbUJBO0FBQ0Esa0JBREE7QUFFQTtBQUZBO0FBbkJBLEdBRkE7O0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBLEdBaENBOztBQWlDQSxZQUNBO0FBQ0E7QUFDQTtBQUhBO0FBakNBLEc7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxzQ0FBc0M7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUCx5QkFBeUIsMEJBQTBCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuZjA0MjkzZmJiZWMxZTI1M2EwY2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tc2FlbGljZXMvbnMtdWktdnVlLWRlbW8vYmxvYi9tYXN0ZXIvYXBwL3ZpZXdzL0xpc3QudnVlXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVGV4dEZpZWxkJyxcbiAgcHJvcHM6IHtcbiAgICBrZXlib2FyZFR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0JyxcbiAgICB9LFxuICAgIHBsYWNlSG9sZGVyVGV4dDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICAvLyB2YWx1ZToge1xuICAgIC8vICAgdHlwZTogU3RyaW5nLFxuICAgIC8vICAgZGVmYXVsdDogJycsXG4gICAgLy8gfSxcbiAgICByZXR1cm5QcmVzczoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICBkZWZhdWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgfSxcbiAgICByZXR1cm5LZXlUeXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnbmV4dCcsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgbWFya1RleHQ6ICdNYXJrJyxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLy8gb25SZXR1cm5QcmVzcyhldmVudCkge1xuICAgIC8vICAgdGhpcy4kZW1pdCgnb25UZXh0UmV0dXJuUHJlc3MnLCBldmVudClcbiAgICAvLyB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG48dGVtcGxhdGU+XG4gIDxTdGFja0xheW91dCBjbGFzcz1cIm50LWlucHV0IGlucHV0LWZpZWxkXCI+XG4gICAgPCEtLSA8VGV4dEZpZWxkXG4gICAgICB2LW1vZGVsPVwidmFsdWVcIlxuICAgICAgQHJldHVyblByZXNzPVwicmV0dXJuUHJlc3NcIlxuICAgICAgOnJldHVybktleVR5cGU9XCJyZXR1cm5LZXlUeXBlXCJcbiAgICAgIDpoaW50PVwicGxhY2VIb2xkZXJUZXh0XCJcbiAgICAgIDprZXlib2FyZFR5cGU9XCJrZXlib2FyZFR5cGVcIlxuICAgICAgY2xhc3M9XCJpbnB1dCBudC1pbnB1dFwiXG4gICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCJcbiAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCJcbiAgICAvPiAtLT5cbiAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXQgbnQtaW5wdXRcIiBhdXRvY29ycmVjdD1cImZhbHNlXCIgYXV0b2NhcGl0YWxpemF0aW9uLXR5cGU9XCJub25lXCIgLz5cbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XG4gIDwvU3RhY2tMYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5pbnB1dC1maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDI1O1xuXG4gIC5pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxODtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGxhY2Vob2xkZXItY29sb3I6ICNhOGE4YTg7XG4gIH1cbn1cbjwvc3R5bGU+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm50LWlucHV0IGlucHV0LWZpZWxkXCIgfSxcbiAgICBbXG4gICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0IG50LWlucHV0XCIsXG4gICAgICAgIGF0dHJzOiB7IGF1dG9jb3JyZWN0OiBcImZhbHNlXCIsIFwiYXV0b2NhcGl0YWxpemF0aW9uLXR5cGVcIjogXCJub25lXCIgfVxuICAgICAgfSksXG4gICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==