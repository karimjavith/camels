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
    updateValue: function updateValue(_ref) {
      var {
        value
      } = _ref;
      this.$emit('handleOnChange', {
        modelkey: this.modelkey,
        value
      });
    }
  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9JbnB1dFRleHQudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7QUFDQSxtQkFEQTtBQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQUtBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBTEE7QUFTQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQVRBO0FBYUE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FiQTtBQWlCQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQUNBO0FBSkEsS0FqQkE7QUF1QkE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0F2QkE7QUEyQkE7QUFDQSxtQkFEQTtBQUVBO0FBRkE7QUEzQkEsR0FGQTs7QUFrQ0E7QUFDQTtBQUNBLEdBcENBOztBQXFDQSxjQXJDQTtBQXNDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBdENBLEciLCJmaWxlIjoiYnVuZGxlLjg5MDM2MDExNDdkNzY5YWI4MjBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2dpdGh1Yi5jb20vbXNhZWxpY2VzL25zLXVpLXZ1ZS1kZW1vL2Jsb2IvbWFzdGVyL2FwcC92aWV3cy9MaXN0LnZ1ZVxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0lucHV0VGV4dCcsXG4gIHByb3BzOiB7XG4gICAgbW9kZWxrZXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAga2V5Ym9hcmRUeXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndGV4dCcsXG4gICAgfSxcbiAgICBwbGFjZUhvbGRlclRleHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgcmV0dXJuUHJlc3M6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmV0dXJuS2V5VHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ25leHQnLFxuICAgIH0sXG4gICAgc2VjdXJlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge31cbiAgfSxcbiAgY29tcHV0ZWQ6IHt9LFxuICBtZXRob2RzOiB7XG4gICAgdXBkYXRlVmFsdWU6IGZ1bmN0aW9uKHsgdmFsdWUgfSkge1xuICAgICAgdGhpcy4kZW1pdCgnaGFuZGxlT25DaGFuZ2UnLCB7IG1vZGVsa2V5OiB0aGlzLm1vZGVsa2V5LCB2YWx1ZSB9KVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD5cbjx0ZW1wbGF0ZT5cbiAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibnQtaW5wdXQgaW5wdXQtZmllbGRcIj5cbiAgICA8VGV4dEZpZWxkXG4gICAgICA6dmFsdWU9XCJ2YWx1ZVwiXG4gICAgICBAdGV4dENoYW5nZT1cInVwZGF0ZVZhbHVlXCJcbiAgICAgIEByZXR1cm5QcmVzcz1cInJldHVyblByZXNzXCJcbiAgICAgIDpyZXR1cm5LZXlUeXBlPVwicmV0dXJuS2V5VHlwZVwiXG4gICAgICA6aGludD1cInBsYWNlSG9sZGVyVGV4dFwiXG4gICAgICA6a2V5Ym9hcmRUeXBlPVwia2V5Ym9hcmRUeXBlXCJcbiAgICAgIDpzZWN1cmU9XCJzZWN1cmVcIlxuICAgICAgY2xhc3M9XCJpbnB1dCBudC1pbnB1dFwiXG4gICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCJcbiAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCJcbiAgICAvPlxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cbiAgPC9TdGFja0xheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmlucHV0LWZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjU7XG5cbiAgLmlucHV0IHtcbiAgICBmb250LXNpemU6IDE4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwbGFjZWhvbGRlci1jb2xvcjogI2E4YThhODtcbiAgfVxufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=