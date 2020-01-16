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

  methods: {
    onReturnPress(event) {
      this.$emit('onTextReturnPress', event);
    }

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9UZXh0RmllbGQudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7QUFDQSxtQkFEQTtBQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQUtBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBTEE7QUFTQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQVRBO0FBYUE7QUFDQSxvQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUpBLEtBYkE7QUFtQkE7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUFuQkEsR0FGQTs7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0EsR0FoQ0E7O0FBaUNBO0FBQ0E7QUFDQTtBQUNBOztBQUhBO0FBakNBLEciLCJmaWxlIjoiYnVuZGxlLjNiOTAwNGZlZGE0ZWJlNzg3ZGVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2dpdGh1Yi5jb20vbXNhZWxpY2VzL25zLXVpLXZ1ZS1kZW1vL2Jsb2IvbWFzdGVyL2FwcC92aWV3cy9MaXN0LnZ1ZVxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1RleHRGaWVsZCcsXG4gIHByb3BzOiB7XG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3RleHQnLFxuICAgIH0sXG4gICAgcGxhY2VIb2xkZXJUZXh0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIHJldHVyblByZXNzOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICB9LFxuICAgIHJldHVybktleVR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICduZXh0JyxcbiAgICB9LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBtYXJrVGV4dDogJ01hcmsnLFxuICAgICAgfSxcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvblJldHVyblByZXNzKGV2ZW50KSB7XG4gICAgICB0aGlzLiRlbWl0KCdvblRleHRSZXR1cm5QcmVzcycsIGV2ZW50KVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD5cbjx0ZW1wbGF0ZT5cbiAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibnQtaW5wdXQgaW5wdXQtZmllbGRcIj5cbiAgICA8VGV4dEZpZWxkXG4gICAgICB2LW1vZGVsPVwidmFsdWVcIlxuICAgICAgQHJldHVyblByZXNzPVwib25SZXR1cm5QcmVzc1wiXG4gICAgICA6cmV0dXJuS2V5VHlwZT1cInJldHVybktleVR5cGVcIlxuICAgICAgOmhpbnQ9XCJwbGFjZUhvbGRlclRleHRcIlxuICAgICAgOmtleWJvYXJkVHlwZT1cInR5cGVcIlxuICAgICAgY2xhc3M9XCJpbnB1dCBudC1pbnB1dFwiXG4gICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCJcbiAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCJcbiAgICAvPlxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cbiAgPC9TdGFja0xheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmlucHV0LWZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjU7XG5cbiAgLmlucHV0IHtcbiAgICBmb250LXNpemU6IDE4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwbGFjZWhvbGRlci1jb2xvcjogI2E4YThhODtcbiAgfVxufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=