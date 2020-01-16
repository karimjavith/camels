webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/TextField.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TextField',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeHolderText: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    returnPress: {
      type: Function,
      default: function _default() {
        return;
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

  methods: {
    onReturnPress(event) {
      this.$emit('onTextReturnPress', event);
    }

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
        attrs: {
          "v-model": _vm.value,
          returnKeyType: _vm.returnKeyType,
          hint: _vm.placeHolderText,
          keyboardType: _vm.type,
          autocorrect: "false",
          autocapitalizationType: "none"
        },
        on: { returnPress: _vm.onReturnPress }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9UZXh0RmllbGQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGV4dEZpZWxkLnZ1ZT85ZmNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7QUFDQSxtQkFEQTtBQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQUtBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBTEE7QUFTQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQVRBO0FBYUE7QUFDQSxvQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUpBLEtBYkE7QUFtQkE7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUFuQkEsR0FGQTs7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0EsR0FoQ0E7O0FBaUNBO0FBQ0E7QUFDQTtBQUNBOztBQUhBO0FBakNBLEc7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxzQ0FBc0M7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsYUFBYTtBQUNiLE9BQU87QUFDUCx5QkFBeUIsMEJBQTBCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuYmI0MGYzNjMzOTEzM2QxYmI3YjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tc2FlbGljZXMvbnMtdWktdnVlLWRlbW8vYmxvYi9tYXN0ZXIvYXBwL3ZpZXdzL0xpc3QudnVlXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVGV4dEZpZWxkJyxcbiAgcHJvcHM6IHtcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndGV4dCcsXG4gICAgfSxcbiAgICBwbGFjZUhvbGRlclRleHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgcmV0dXJuUHJlc3M6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfSxcbiAgICB9LFxuICAgIHJldHVybktleVR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICduZXh0JyxcbiAgICB9LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBtYXJrVGV4dDogJ01hcmsnLFxuICAgICAgfSxcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvblJldHVyblByZXNzKGV2ZW50KSB7XG4gICAgICB0aGlzLiRlbWl0KCdvblRleHRSZXR1cm5QcmVzcycsIGV2ZW50KVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD5cbjx0ZW1wbGF0ZT5cbiAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibnQtaW5wdXQgaW5wdXQtZmllbGRcIj5cbiAgICA8VGV4dEZpZWxkXG4gICAgICA6di1tb2RlbD1cInZhbHVlXCJcbiAgICAgIEByZXR1cm5QcmVzcz1cIm9uUmV0dXJuUHJlc3NcIlxuICAgICAgOnJldHVybktleVR5cGU9XCJyZXR1cm5LZXlUeXBlXCJcbiAgICAgIDpoaW50PVwicGxhY2VIb2xkZXJUZXh0XCJcbiAgICAgIDprZXlib2FyZFR5cGU9XCJ0eXBlXCJcbiAgICAgIGNsYXNzPVwiaW5wdXQgbnQtaW5wdXRcIlxuICAgICAgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiXG4gICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiXG4gICAgLz5cbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XG4gIDwvU3RhY2tMYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5pbnB1dC1maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDI1O1xuXG4gIC5pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxODtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGxhY2Vob2xkZXItY29sb3I6ICNhOGE4YTg7XG4gIH1cbn1cbjwvc3R5bGU+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm50LWlucHV0IGlucHV0LWZpZWxkXCIgfSxcbiAgICBbXG4gICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0IG50LWlucHV0XCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgXCJ2LW1vZGVsXCI6IF92bS52YWx1ZSxcbiAgICAgICAgICByZXR1cm5LZXlUeXBlOiBfdm0ucmV0dXJuS2V5VHlwZSxcbiAgICAgICAgICBoaW50OiBfdm0ucGxhY2VIb2xkZXJUZXh0LFxuICAgICAgICAgIGtleWJvYXJkVHlwZTogX3ZtLnR5cGUsXG4gICAgICAgICAgYXV0b2NvcnJlY3Q6IFwiZmFsc2VcIixcbiAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlOiBcIm5vbmVcIlxuICAgICAgICB9LFxuICAgICAgICBvbjogeyByZXR1cm5QcmVzczogX3ZtLm9uUmV0dXJuUHJlc3MgfVxuICAgICAgfSksXG4gICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==