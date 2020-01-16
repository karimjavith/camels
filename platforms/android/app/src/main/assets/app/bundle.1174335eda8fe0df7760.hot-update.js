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
    }

  },
  methods: {
    updateValue: function updateValue(value) {
      this.$emit('input', value);
    }
  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9JbnB1dFRleHQudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7QUFDQSxtQkFEQTtBQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQUtBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBTEE7QUFTQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQVRBO0FBYUE7QUFDQSxvQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUpBLEtBYkE7QUFtQkE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FuQkE7QUF1QkE7QUFDQSxtQkFEQTtBQUVBO0FBRkE7QUF2QkEsR0FGQTs7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0EsR0FwQ0E7O0FBcUNBO0FBQ0E7QUFDQTtBQUNBOztBQUhBLEdBckNBO0FBMENBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUExQ0EsRyIsImZpbGUiOiJidW5kbGUuMTE3NDMzNWVkYThmZTBkZjc3NjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tc2FlbGljZXMvbnMtdWktdnVlLWRlbW8vYmxvYi9tYXN0ZXIvYXBwL3ZpZXdzL0xpc3QudnVlXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnSW5wdXRUZXh0JyxcbiAgcHJvcHM6IHtcbiAgICBrZXlib2FyZFR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0JyxcbiAgICB9LFxuICAgIHBsYWNlSG9sZGVyVGV4dDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICByZXR1cm5QcmVzczoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICBkZWZhdWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgfSxcbiAgICByZXR1cm5LZXlUeXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnbmV4dCcsXG4gICAgfSxcbiAgICBzZWN1cmU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBtb2RlbDogdGhpcy52YWx1ZSxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIG1vZGVsKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdXBkYXRlVmFsdWU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD5cbjx0ZW1wbGF0ZT5cbiAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibnQtaW5wdXQgaW5wdXQtZmllbGRcIj5cbiAgICA8VGV4dEZpZWxkXG4gICAgICB2LW1vZGVsPVwic3RhdGUubW9kZWxcIlxuICAgICAgQHJldHVyblByZXNzPVwicmV0dXJuUHJlc3NcIlxuICAgICAgOnJldHVybktleVR5cGU9XCJyZXR1cm5LZXlUeXBlXCJcbiAgICAgIDpoaW50PVwicGxhY2VIb2xkZXJUZXh0XCJcbiAgICAgIDprZXlib2FyZFR5cGU9XCJrZXlib2FyZFR5cGVcIlxuICAgICAgOnNlY3VyZT1cInNlY3VyZVwiXG4gICAgICBjbGFzcz1cImlucHV0IG50LWlucHV0XCJcbiAgICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxuICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIlxuICAgIC8+XG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxuICA8L1N0YWNrTGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uaW5wdXQtZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAyNTtcblxuICAuaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBsYWNlaG9sZGVyLWNvbG9yOiAjYThhOGE4O1xuICB9XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==