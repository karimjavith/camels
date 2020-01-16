webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/InputText.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'InputText',
  props: {
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
    return {
      state: {
        model: this.value
      }
    };
  },

  computed: {
    model() {
      return this.state.model;
    }

  },
  methods: {}
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
          returnKeyType: _vm.returnKeyType,
          hint: _vm.placeHolderText,
          keyboardType: _vm.keyboardType,
          secure: _vm.secure,
          autocorrect: "false",
          autocapitalizationType: "none",
          text: _vm.state.model
        },
        on: {
          returnPress: _vm.returnPress,
          textChange: function($event) {
            return _vm.$set(_vm.state, "model", $event.value)
          }
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9JbnB1dFRleHQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW5wdXRUZXh0LnZ1ZT80ZTc2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7QUFDQSxtQkFEQTtBQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQUtBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBTEE7QUFTQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQVRBO0FBYUE7QUFDQSxvQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUpBLEtBYkE7QUFtQkE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FuQkE7QUF1QkE7QUFDQSxtQkFEQTtBQUVBO0FBRkE7QUF2QkEsR0FGQTs7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0EsR0FwQ0E7O0FBcUNBO0FBQ0E7QUFDQTtBQUNBOztBQUhBLEdBckNBO0FBMENBO0FBMUNBLEc7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxzQ0FBc0M7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AseUJBQXlCLDBCQUEwQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjEyYTA4ZDAzODdmM2JjNDczZjBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2dpdGh1Yi5jb20vbXNhZWxpY2VzL25zLXVpLXZ1ZS1kZW1vL2Jsb2IvbWFzdGVyL2FwcC92aWV3cy9MaXN0LnZ1ZVxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0lucHV0VGV4dCcsXG4gIHByb3BzOiB7XG4gICAga2V5Ym9hcmRUeXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndGV4dCcsXG4gICAgfSxcbiAgICBwbGFjZUhvbGRlclRleHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgcmV0dXJuUHJlc3M6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmV0dXJuS2V5VHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ25leHQnLFxuICAgIH0sXG4gICAgc2VjdXJlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgbW9kZWw6IHRoaXMudmFsdWUsXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBtb2RlbCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLm1vZGVsXG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge30sXG59XG48L3NjcmlwdD5cbjx0ZW1wbGF0ZT5cbiAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibnQtaW5wdXQgaW5wdXQtZmllbGRcIj5cbiAgICA8VGV4dEZpZWxkXG4gICAgICB2LW1vZGVsPVwic3RhdGUubW9kZWxcIlxuICAgICAgQHJldHVyblByZXNzPVwicmV0dXJuUHJlc3NcIlxuICAgICAgOnJldHVybktleVR5cGU9XCJyZXR1cm5LZXlUeXBlXCJcbiAgICAgIDpoaW50PVwicGxhY2VIb2xkZXJUZXh0XCJcbiAgICAgIDprZXlib2FyZFR5cGU9XCJrZXlib2FyZFR5cGVcIlxuICAgICAgOnNlY3VyZT1cInNlY3VyZVwiXG4gICAgICBjbGFzcz1cImlucHV0IG50LWlucHV0XCJcbiAgICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxuICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIlxuICAgIC8+XG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxuICA8L1N0YWNrTGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uaW5wdXQtZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAyNTtcblxuICAuaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBsYWNlaG9sZGVyLWNvbG9yOiAjYThhOGE4O1xuICB9XG59XG48L3N0eWxlPlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJudC1pbnB1dCBpbnB1dC1maWVsZFwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dCBudC1pbnB1dFwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHJldHVybktleVR5cGU6IF92bS5yZXR1cm5LZXlUeXBlLFxuICAgICAgICAgIGhpbnQ6IF92bS5wbGFjZUhvbGRlclRleHQsXG4gICAgICAgICAga2V5Ym9hcmRUeXBlOiBfdm0ua2V5Ym9hcmRUeXBlLFxuICAgICAgICAgIHNlY3VyZTogX3ZtLnNlY3VyZSxcbiAgICAgICAgICBhdXRvY29ycmVjdDogXCJmYWxzZVwiLFxuICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgIHRleHQ6IF92bS5zdGF0ZS5tb2RlbFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHJldHVyblByZXNzOiBfdm0ucmV0dXJuUHJlc3MsXG4gICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoX3ZtLnN0YXRlLCBcIm1vZGVsXCIsICRldmVudC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0XCIgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=