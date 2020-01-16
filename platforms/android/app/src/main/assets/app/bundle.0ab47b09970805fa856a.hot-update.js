webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/InputText.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'InputText',
  props: {
    modelkey: {
      type: String,
      default: ''
    },
    keyboardType: {
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
        return null;
      }
    },
    returnKeyType: {
      type: String,
      default: 'next'
    },
    secure: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {};
  },

  computed: {},
  methods: {
    updateValue: function updateValue(event) {
      console.log(event); // this.$emit('handleOnChange', { modelkey: this.modelkey, value })
    }
  }
});

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/InputText.vue?vue&type=template&id=76700dcc&":
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
          value: _vm.value,
          returnKeyType: _vm.returnKeyType,
          hint: _vm.placeHolderText,
          keyboardType: _vm.keyboardType,
          secure: _vm.secure,
          autocorrect: "false",
          autocapitalizationType: "none"
        },
        on: { textChange: _vm.updateValue, returnPress: _vm.returnPress }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9JbnB1dFRleHQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW5wdXRUZXh0LnZ1ZT80ZTc2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7QUFDQSxtQkFEQTtBQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQUtBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBTEE7QUFTQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQVRBO0FBYUE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FiQTtBQWlCQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQUNBO0FBSkEsS0FqQkE7QUF1QkE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0F2QkE7QUEyQkE7QUFDQSxtQkFEQTtBQUVBO0FBRkE7QUEzQkEsR0FGQTs7QUFrQ0E7QUFDQTtBQUNBLEdBcENBOztBQXFDQSxjQXJDQTtBQXNDQTtBQUNBO0FBQ0EseUJBREEsQ0FFQTtBQUNBO0FBSkE7QUF0Q0EsRzs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHNDQUFzQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGFBQWE7QUFDYixPQUFPO0FBQ1AseUJBQXlCLDBCQUEwQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjBhYjQ3YjA5OTcwODA1ZmE4NTZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2dpdGh1Yi5jb20vbXNhZWxpY2VzL25zLXVpLXZ1ZS1kZW1vL2Jsb2IvbWFzdGVyL2FwcC92aWV3cy9MaXN0LnZ1ZVxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0lucHV0VGV4dCcsXG4gIHByb3BzOiB7XG4gICAgbW9kZWxrZXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAga2V5Ym9hcmRUeXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndGV4dCcsXG4gICAgfSxcbiAgICBwbGFjZUhvbGRlclRleHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgcmV0dXJuUHJlc3M6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmV0dXJuS2V5VHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ25leHQnLFxuICAgIH0sXG4gICAgc2VjdXJlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge31cbiAgfSxcbiAgY29tcHV0ZWQ6IHt9LFxuICBtZXRob2RzOiB7XG4gICAgdXBkYXRlVmFsdWU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICAgIC8vIHRoaXMuJGVtaXQoJ2hhbmRsZU9uQ2hhbmdlJywgeyBtb2RlbGtleTogdGhpcy5tb2RlbGtleSwgdmFsdWUgfSlcbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG48dGVtcGxhdGU+XG4gIDxTdGFja0xheW91dCBjbGFzcz1cIm50LWlucHV0IGlucHV0LWZpZWxkXCI+XG4gICAgPFRleHRGaWVsZFxuICAgICAgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgdi1vbjp0ZXh0Q2hhbmdlPVwidXBkYXRlVmFsdWVcIlxuICAgICAgQHJldHVyblByZXNzPVwicmV0dXJuUHJlc3NcIlxuICAgICAgOnJldHVybktleVR5cGU9XCJyZXR1cm5LZXlUeXBlXCJcbiAgICAgIDpoaW50PVwicGxhY2VIb2xkZXJUZXh0XCJcbiAgICAgIDprZXlib2FyZFR5cGU9XCJrZXlib2FyZFR5cGVcIlxuICAgICAgOnNlY3VyZT1cInNlY3VyZVwiXG4gICAgICBjbGFzcz1cImlucHV0IG50LWlucHV0XCJcbiAgICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxuICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIlxuICAgIC8+XG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxuICA8L1N0YWNrTGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uaW5wdXQtZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAyNTtcblxuICAuaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBsYWNlaG9sZGVyLWNvbG9yOiAjYThhOGE4O1xuICB9XG59XG48L3N0eWxlPlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJudC1pbnB1dCBpbnB1dC1maWVsZFwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dCBudC1pbnB1dFwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHZhbHVlOiBfdm0udmFsdWUsXG4gICAgICAgICAgcmV0dXJuS2V5VHlwZTogX3ZtLnJldHVybktleVR5cGUsXG4gICAgICAgICAgaGludDogX3ZtLnBsYWNlSG9sZGVyVGV4dCxcbiAgICAgICAgICBrZXlib2FyZFR5cGU6IF92bS5rZXlib2FyZFR5cGUsXG4gICAgICAgICAgc2VjdXJlOiBfdm0uc2VjdXJlLFxuICAgICAgICAgIGF1dG9jb3JyZWN0OiBcImZhbHNlXCIsXG4gICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZTogXCJub25lXCJcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgdGV4dENoYW5nZTogX3ZtLnVwZGF0ZVZhbHVlLCByZXR1cm5QcmVzczogX3ZtLnJldHVyblByZXNzIH1cbiAgICAgIH0pLFxuICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0XCIgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=