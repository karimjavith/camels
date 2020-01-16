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
      return this.value;
    },

    value() {
      return this.state.model;
    }

  },
  methods: {}
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9JbnB1dFRleHQudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7QUFDQSxtQkFEQTtBQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQUtBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBTEE7QUFTQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQVRBO0FBYUE7QUFDQSxvQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUpBLEtBYkE7QUFtQkE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FuQkE7QUF1QkE7QUFDQSxtQkFEQTtBQUVBO0FBRkE7QUF2QkEsR0FGQTs7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0EsR0FwQ0E7O0FBcUNBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7O0FBSUE7QUFDQTtBQUNBOztBQU5BLEdBckNBO0FBNkNBO0FBN0NBLEciLCJmaWxlIjoiYnVuZGxlLmMyZmZkMzAxZDM0Y2Q2YzQ4YTcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2dpdGh1Yi5jb20vbXNhZWxpY2VzL25zLXVpLXZ1ZS1kZW1vL2Jsb2IvbWFzdGVyL2FwcC92aWV3cy9MaXN0LnZ1ZVxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0lucHV0VGV4dCcsXG4gIHByb3BzOiB7XG4gICAga2V5Ym9hcmRUeXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndGV4dCcsXG4gICAgfSxcbiAgICBwbGFjZUhvbGRlclRleHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgcmV0dXJuUHJlc3M6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmV0dXJuS2V5VHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ25leHQnLFxuICAgIH0sXG4gICAgc2VjdXJlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgbW9kZWw6IHRoaXMudmFsdWUsXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBtb2RlbCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlXG4gICAgfSxcbiAgICB2YWx1ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLm1vZGVsXG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge30sXG59XG48L3NjcmlwdD5cbjx0ZW1wbGF0ZT5cbiAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibnQtaW5wdXQgaW5wdXQtZmllbGRcIj5cbiAgICA8VGV4dEZpZWxkXG4gICAgICB2LW1vZGVsPVwic3RhdGUubW9kZWxcIlxuICAgICAgQHJldHVyblByZXNzPVwicmV0dXJuUHJlc3NcIlxuICAgICAgOnJldHVybktleVR5cGU9XCJyZXR1cm5LZXlUeXBlXCJcbiAgICAgIDpoaW50PVwicGxhY2VIb2xkZXJUZXh0XCJcbiAgICAgIDprZXlib2FyZFR5cGU9XCJrZXlib2FyZFR5cGVcIlxuICAgICAgOnNlY3VyZT1cInNlY3VyZVwiXG4gICAgICBjbGFzcz1cImlucHV0IG50LWlucHV0XCJcbiAgICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxuICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIlxuICAgIC8+XG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxuICA8L1N0YWNrTGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uaW5wdXQtZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAyNTtcblxuICAuaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBsYWNlaG9sZGVyLWNvbG9yOiAjYThhOGE4O1xuICB9XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==