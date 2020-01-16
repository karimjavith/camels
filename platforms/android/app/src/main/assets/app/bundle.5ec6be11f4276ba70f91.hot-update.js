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
    updateValue: function updateValue(value) {
      this.$emit('handleOnChange', {
        modelkey,
        value
      });
    }
  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9JbnB1dFRleHQudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7QUFDQSxtQkFEQTtBQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQUtBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBTEE7QUFTQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQVRBO0FBYUE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FiQTtBQWlCQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQUNBO0FBSkEsS0FqQkE7QUF1QkE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0F2QkE7QUEyQkE7QUFDQSxtQkFEQTtBQUVBO0FBRkE7QUEzQkEsR0FGQTs7QUFrQ0E7QUFDQTtBQUNBLEdBcENBOztBQXFDQSxjQXJDQTtBQXNDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBdENBLEciLCJmaWxlIjoiYnVuZGxlLjVlYzZiZTExZjQyNzZiYTcwZjkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2dpdGh1Yi5jb20vbXNhZWxpY2VzL25zLXVpLXZ1ZS1kZW1vL2Jsb2IvbWFzdGVyL2FwcC92aWV3cy9MaXN0LnZ1ZVxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0lucHV0VGV4dCcsXG4gIHByb3BzOiB7XG4gICAgbW9kZWxrZXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAga2V5Ym9hcmRUeXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndGV4dCcsXG4gICAgfSxcbiAgICBwbGFjZUhvbGRlclRleHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgcmV0dXJuUHJlc3M6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmV0dXJuS2V5VHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ25leHQnLFxuICAgIH0sXG4gICAgc2VjdXJlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge31cbiAgfSxcbiAgY29tcHV0ZWQ6IHt9LFxuICBtZXRob2RzOiB7XG4gICAgdXBkYXRlVmFsdWU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB0aGlzLiRlbWl0KCdoYW5kbGVPbkNoYW5nZScsIHsgbW9kZWxrZXksIHZhbHVlIH0pXG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuPHRlbXBsYXRlPlxuICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJudC1pbnB1dCBpbnB1dC1maWVsZFwiPlxuICAgIDxUZXh0RmllbGRcbiAgICAgIDp2YWx1ZT1cInZhbHVlXCJcbiAgICAgIHYtb246aW5wdXQ9XCJ1cGRhdGVWYWx1ZSgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICBAcmV0dXJuUHJlc3M9XCJyZXR1cm5QcmVzc1wiXG4gICAgICA6cmV0dXJuS2V5VHlwZT1cInJldHVybktleVR5cGVcIlxuICAgICAgOmhpbnQ9XCJwbGFjZUhvbGRlclRleHRcIlxuICAgICAgOmtleWJvYXJkVHlwZT1cImtleWJvYXJkVHlwZVwiXG4gICAgICA6c2VjdXJlPVwic2VjdXJlXCJcbiAgICAgIGNsYXNzPVwiaW5wdXQgbnQtaW5wdXRcIlxuICAgICAgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiXG4gICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiXG4gICAgLz5cbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XG4gIDwvU3RhY2tMYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5pbnB1dC1maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDI1O1xuXG4gIC5pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxODtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGxhY2Vob2xkZXItY29sb3I6ICNhOGE4YTg7XG4gIH1cbn1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9