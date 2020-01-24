webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _shared_firebase_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./_shared/firebase/home.ts");
/* harmony import */ var _shared_firebase_home__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_firebase_home__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Toasty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./_shared/Toasty.ts");
/* harmony import */ var _shared_Toasty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shared_Toasty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_BaseButtonWithIcon_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/BaseButtonWithIcon.vue");
/* harmony import */ var _components_BaseButton_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/BaseButton.vue");
/* harmony import */ var _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./types/EMatchAvailabilityStatus.ts");
/* harmony import */ var _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Home',
  components: {
    BaseButtonWithIcon: _components_BaseButtonWithIcon_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    BaseButton: _components_BaseButton_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {},

  data() {
    return {
      state: {
        loading: true,
        upcomingMatch: {}
      }
    };
  },

  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    userContext: state => state.authenticationModule.userContext,

    loading() {
      return this.state.loading;
    },

    matchDetails() {
      return this.state.upcomingMatch;
    }

  }),
  created: function created() {
    console.log("Home :: Created");
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      console.log("Home :: mounted");
      this.getUpcomingMatchDetails();
    });
  },
  updated: function updated() {
    this.$nextTick(function () {
      console.log("Home :: updated");
    });
  },
  methods: {
    getUpcomingMatchDetails() {
      var _this = this;

      return _asyncToGenerator(function* () {
        var result = yield Object(_shared_firebase_home__WEBPACK_IMPORTED_MODULE_1__["getUpcomingMatchDetails"])(_this.userContext.uid);

        if (result && !result.isError) {
          console.log("-------------");
          console.log("Upcoming match details");
          console.log(result.json);
          var matchDetails = result.json.match && Object.values(result.json.match);

          if (matchDetails.length) {
            matchDetails = matchDetails[0];
            console.log(matchDetails);
            console.log("----------------");
            _this.state = _objectSpread({}, _this.state, {
              upcomingMatch: _objectSpread({}, matchDetails, {
                date: new Date(matchDetails.date).toDateString()
              })
            });
          }
        }

        _this.state = _objectSpread({}, _this.state, {
          loading: false
        });
      })();
    },

    handleOnNoClick() {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        _this2.state = _objectSpread({}, _this2.state, {
          loading: true
        });
        var result = yield Object(_shared_firebase_home__WEBPACK_IMPORTED_MODULE_1__["patchUserMatchStatus"])(_this2.matchDetails.id, {
          uid: _this2.userContext.uid,
          status: _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_5__["MatchAvailabilityStatus"].NO
        });

        if (!result.isError) {
          Object(_shared_Toasty__WEBPACK_IMPORTED_MODULE_2__["ToastService"])('All done', '#a5d6a7').show();
          yield _this2.getUpcomingMatchDetails();
        }

        _this2.$emit('onMatchEventSetIndexCb');

        _this2.state = _objectSpread({}, _this2.state, {
          loading: false
        });
      })();
    },

    handleOnYesClick() {
      var _this3 = this;

      return _asyncToGenerator(function* () {
        _this3.state = _objectSpread({}, _this3.state, {
          loading: true
        });
        var result = yield Object(_shared_firebase_home__WEBPACK_IMPORTED_MODULE_1__["patchUserMatchStatus"])(_this3.matchDetails.id, {
          uid: _this3.userContext.uid,
          status: _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_5__["MatchAvailabilityStatus"].YES
        });

        if (!result.isError) {
          Object(_shared_Toasty__WEBPACK_IMPORTED_MODULE_2__["ToastService"])('All done', '#a5d6a7').show();
          yield _this3.getUpcomingMatchDetails();
        }

        _this3.$emit('onMatchEventSetIndexCb');

        _this3.state = _objectSpread({}, _this3.state, {
          loading: false
        });
      })();
    },

    handleOnViewAllMatchesClick() {
      this.$emit('onHomeEventSetIndexCb', 1);
    },

    onScroll: function onScroll() {
      //access to the native event
      var scrollView = this.$refs.scrollView.nativeView;
      var topView = this.$refs.topView.nativeView; // if the offset is less than the height of the header.

      if (scrollView.verticalOffset < 250) {
        var offset = scrollView.verticalOffset / 1.65; // you can adjust this number to make the parallax more subtle or dramatic

        if (scrollView.ios) {
          // iOS adjust the position with an animation to create a smother scrolling effect.
          topView.animate({
            translate: {
              x: 0,
              y: offset
            }
          }).then(() => {}, () => {});
        } else {
          // Android, animations are jerky so instead just adjust the position without animation.
          topView.translateY = Math.floor(offset);
        }
      }
    }
  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvSG9tZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLGNBREE7QUFFQTtBQUFBO0FBQUE7QUFBQSxHQUZBO0FBR0EsV0FIQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBO0FBRkE7QUFEQTtBQU1BLEdBWEE7O0FBWUE7QUFDQSxnRUFEQTs7QUFFQTtBQUNBO0FBQ0EsS0FKQTs7QUFLQTtBQUNBO0FBQ0E7O0FBUEEsSUFaQTtBQXFCQTtBQUNBO0FBQ0EsR0F2QkE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsR0E3QkE7QUE4QkE7QUFDQTtBQUNBO0FBQ0EsS0FGQTtBQUdBLEdBbENBO0FBb0NBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FDQSxXQURBO0FBRUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQWxCQTtBQW1CQSxLQXBCQTs7QUFxQkE7QUFBQTs7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0EscUNBREE7QUFFQTtBQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQUE7QUFBQTtBQVhBO0FBWUEsS0FqQ0E7O0FBa0NBO0FBQUE7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBLHFDQURBO0FBRUE7QUFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFYQTtBQVlBLEtBOUNBOztBQStDQTtBQUNBO0FBQ0EsS0FqREE7O0FBa0RBO0FBQ0E7QUFDQTtBQUNBLGtEQUhBLENBS0E7O0FBQ0E7QUFDQSxzREFEQSxDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ0EsUUFEQSxFQUVBLFFBRkE7QUFJQSxTQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckVBO0FBcENBLEciLCJmaWxlIjoiYnVuZGxlLjBmNDY4YzhkZmFlOTIxZjA5MTQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuaW1wb3J0IHsgbWFwU3RhdGUgfSBmcm9tICd2dWV4J1xuaW1wb3J0IHsgZ2V0VXBjb21pbmdNYXRjaERldGFpbHMsIHBhdGNoVXNlck1hdGNoU3RhdHVzIH0gZnJvbSAnLi4vX3NoYXJlZC9maXJlYmFzZS9ob21lJ1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi4vX3NoYXJlZC9Ub2FzdHknXG5pbXBvcnQgQmFzZUJ1dHRvbldpdGhJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvQmFzZUJ1dHRvbldpdGhJY29uLnZ1ZSdcbmltcG9ydCBCYXNlQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQmFzZUJ1dHRvbi52dWUnXG5pbXBvcnQgeyBNYXRjaEF2YWlsYWJpbGl0eVN0YXR1cyB9IGZyb20gJy4uL3R5cGVzL0VNYXRjaEF2YWlsYWJpbGl0eVN0YXR1cydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnSG9tZScsXG4gIGNvbXBvbmVudHM6IHsgQmFzZUJ1dHRvbldpdGhJY29uLCBCYXNlQnV0dG9uIH0sXG4gIHByb3BzOiB7fSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgdXBjb21pbmdNYXRjaDoge30sXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcbiAgICB1c2VyQ29udGV4dDogc3RhdGUgPT4gc3RhdGUuYXV0aGVudGljYXRpb25Nb2R1bGUudXNlckNvbnRleHQsXG4gICAgbG9hZGluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmdcbiAgICB9LFxuICAgIG1hdGNoRGV0YWlscygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnVwY29taW5nTWF0Y2hcbiAgICB9LFxuICB9KSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coYEhvbWUgOjogQ3JlYXRlZGApXG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coYEhvbWUgOjogbW91bnRlZGApXG4gICAgICB0aGlzLmdldFVwY29taW5nTWF0Y2hEZXRhaWxzKClcbiAgICB9KVxuICB9LFxuICB1cGRhdGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBIb21lIDo6IHVwZGF0ZWRgKVxuICAgIH0pXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIGdldFVwY29taW5nTWF0Y2hEZXRhaWxzKCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0VXBjb21pbmdNYXRjaERldGFpbHModGhpcy51c2VyQ29udGV4dC51aWQpXG4gICAgICBpZiAocmVzdWx0ICYmICFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhgLS0tLS0tLS0tLS0tLWApXG4gICAgICAgIGNvbnNvbGUubG9nKGBVcGNvbWluZyBtYXRjaCBkZXRhaWxzYClcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0Lmpzb24pXG4gICAgICAgIGxldCBtYXRjaERldGFpbHMgPSByZXN1bHQuanNvbi5tYXRjaCAmJiBPYmplY3QudmFsdWVzKHJlc3VsdC5qc29uLm1hdGNoKVxuICAgICAgICBpZiAobWF0Y2hEZXRhaWxzLmxlbmd0aCkge1xuICAgICAgICAgIG1hdGNoRGV0YWlscyA9IG1hdGNoRGV0YWlsc1swXVxuICAgICAgICAgIGNvbnNvbGUubG9nKG1hdGNoRGV0YWlscylcbiAgICAgICAgICBjb25zb2xlLmxvZyhgLS0tLS0tLS0tLS0tLS0tLWApXG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICB1cGNvbWluZ01hdGNoOiB7IC4uLm1hdGNoRGV0YWlscywgZGF0ZTogbmV3IERhdGUobWF0Y2hEZXRhaWxzLmRhdGUpLnRvRGF0ZVN0cmluZygpIH0sXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZU9uTm9DbGljaygpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IHRydWUgfVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcGF0Y2hVc2VyTWF0Y2hTdGF0dXModGhpcy5tYXRjaERldGFpbHMuaWQsIHtcbiAgICAgICAgdWlkOiB0aGlzLnVzZXJDb250ZXh0LnVpZCxcbiAgICAgICAgc3RhdHVzOiBNYXRjaEF2YWlsYWJpbGl0eVN0YXR1cy5OTyxcbiAgICAgIH0pXG4gICAgICBpZiAoIXJlc3VsdC5pc0Vycm9yKSB7XG4gICAgICAgIFRvYXN0U2VydmljZSgnQWxsIGRvbmUnLCAnI2E1ZDZhNycpLnNob3coKVxuICAgICAgICBhd2FpdCB0aGlzLmdldFVwY29taW5nTWF0Y2hEZXRhaWxzKClcbiAgICAgIH1cbiAgICAgIHRoaXMuJGVtaXQoJ29uTWF0Y2hFdmVudFNldEluZGV4Q2InKVxuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlT25ZZXNDbGljaygpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IHRydWUgfVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcGF0Y2hVc2VyTWF0Y2hTdGF0dXModGhpcy5tYXRjaERldGFpbHMuaWQsIHtcbiAgICAgICAgdWlkOiB0aGlzLnVzZXJDb250ZXh0LnVpZCxcbiAgICAgICAgc3RhdHVzOiBNYXRjaEF2YWlsYWJpbGl0eVN0YXR1cy5ZRVMsXG4gICAgICB9KVxuICAgICAgaWYgKCFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICBUb2FzdFNlcnZpY2UoJ0FsbCBkb25lJywgJyNhNWQ2YTcnKS5zaG93KClcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRVcGNvbWluZ01hdGNoRGV0YWlscygpXG4gICAgICB9XG4gICAgICB0aGlzLiRlbWl0KCdvbk1hdGNoRXZlbnRTZXRJbmRleENiJylcbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICB9LFxuICAgIGhhbmRsZU9uVmlld0FsbE1hdGNoZXNDbGljaygpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ29uSG9tZUV2ZW50U2V0SW5kZXhDYicsIDEpXG4gICAgfSxcbiAgICBvblNjcm9sbDogZnVuY3Rpb24oKSB7XG4gICAgICAvL2FjY2VzcyB0byB0aGUgbmF0aXZlIGV2ZW50XG4gICAgICBjb25zdCBzY3JvbGxWaWV3ID0gdGhpcy4kcmVmcy5zY3JvbGxWaWV3Lm5hdGl2ZVZpZXdcbiAgICAgIGNvbnN0IHRvcFZpZXcgPSB0aGlzLiRyZWZzLnRvcFZpZXcubmF0aXZlVmlld1xuXG4gICAgICAvLyBpZiB0aGUgb2Zmc2V0IGlzIGxlc3MgdGhhbiB0aGUgaGVpZ2h0IG9mIHRoZSBoZWFkZXIuXG4gICAgICBpZiAoc2Nyb2xsVmlldy52ZXJ0aWNhbE9mZnNldCA8IDI1MCkge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBzY3JvbGxWaWV3LnZlcnRpY2FsT2Zmc2V0IC8gMS42NSAvLyB5b3UgY2FuIGFkanVzdCB0aGlzIG51bWJlciB0byBtYWtlIHRoZSBwYXJhbGxheCBtb3JlIHN1YnRsZSBvciBkcmFtYXRpY1xuICAgICAgICBpZiAoc2Nyb2xsVmlldy5pb3MpIHtcbiAgICAgICAgICAvLyBpT1MgYWRqdXN0IHRoZSBwb3NpdGlvbiB3aXRoIGFuIGFuaW1hdGlvbiB0byBjcmVhdGUgYSBzbW90aGVyIHNjcm9sbGluZyBlZmZlY3QuXG4gICAgICAgICAgdG9wVmlldy5hbmltYXRlKHsgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IG9mZnNldCB9IH0pLnRoZW4oXG4gICAgICAgICAgICAoKSA9PiB7fSxcbiAgICAgICAgICAgICgpID0+IHt9XG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEFuZHJvaWQsIGFuaW1hdGlvbnMgYXJlIGplcmt5IHNvIGluc3RlYWQganVzdCBhZGp1c3QgdGhlIHBvc2l0aW9uIHdpdGhvdXQgYW5pbWF0aW9uLlxuICAgICAgICAgIHRvcFZpZXcudHJhbnNsYXRlWSA9IE1hdGguZmxvb3Iob2Zmc2V0KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxTdGFja0xheW91dCBjbGFzcz1cImltYWdlXCI+XG4gICAgPEFjdGl2aXR5SW5kaWNhdG9yXG4gICAgICA6dmlzaWJpbGl0eT1cImxvYWRpbmcgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXCJcbiAgICAgIDpidXN5PVwibG9hZGluZ1wiXG4gICAgICBjbGFzcz1cIm50LWFjdGl2aXR5LWluZGljYXRvciBsb2FkZXJcIlxuICAgICAgbGVmdD1cIjEwMFwiXG4gICAgICB0b3A9XCIxMDBcIlxuICAgID48L0FjdGl2aXR5SW5kaWNhdG9yPlxuICAgIDxTY3JvbGxWaWV3IHJlZj1cInNjcm9sbFZpZXdcIiBAc2Nyb2xsPVwib25TY3JvbGxcIj5cbiAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgPFN0YWNrTGF5b3V0IHJlZj1cInRvcFZpZXdcIiBoZWlnaHQ9XCI1MDBcIj5cbiAgICAgICAgICA8IS0tIHRoaXMgaXMgdGhlIGhlYWRlciBmb3IgY29sbGFwc2luZyAtLS0+XG4gICAgICAgICAgPCEtLSBOb3RlOiB0aGlzIGNhbiBiZSBhbnkgdHlwZSBvZiBsYXlvdXQgeW91IHdhbnQgLS0+XG4gICAgICAgICAgPEZsZXhCb3hMYXlvdXQgZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICAgIHRleHQ9XCJDYW1lbHNcIlxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgdGV4dEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwiMzZcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9XCIxMjBcIlxuICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlZTXCIgY29sb3I9XCJ3aGl0ZVwiIHRleHRBbGlnbm1lbnQ9XCJjZW50ZXJcIiBmb250U2l6ZT1cIjIwXCIgbWFyZ2luVG9wPVwiMTBcIiAvPlxuICAgICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICAgIDp0ZXh0PVwibWF0Y2hEZXRhaWxzLm9wcG9uZW50XCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBmb250U2l6ZT1cIjM2XCJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiMTBcIlxuICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GbGV4Qm94TGF5b3V0PlxuICAgICAgICAgIDxGbGV4Qm94TGF5b3V0IHYtaWY9XCJtYXRjaERldGFpbHMudmVudWVcIiBmbGV4PVwiMVwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgY2xhc3M9XCJtLXQtMTBcIj5cbiAgICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgZm9udFNpemU9XCIxNlwiXG4gICAgICAgICAgICAgIG1hcmdpblRvcD1cIjUwXCJcbiAgICAgICAgICAgICAgPnt7IG1hdGNoRGV0YWlscy52ZW51ZSB9fSAsIHt7IG1hdGNoRGV0YWlscy5wb3N0Q29kZSB9fTwvTGFiZWxcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L0ZsZXhCb3hMYXlvdXQ+XG4gICAgICAgICAgPEZsZXhCb3hMYXlvdXQgdi1pZj1cIiFtYXRjaERldGFpbHMudmVudWVcIiBmbGV4PVwiMVwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgY2xhc3M9XCJtLXQtMTBcIj5cbiAgICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgZm9udFNpemU9XCIxNlwiXG4gICAgICAgICAgICAgIG1hcmdpblRvcD1cIjUwXCJcbiAgICAgICAgICAgICAgPi0tPC9MYWJlbFxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvRmxleEJveExheW91dD5cbiAgICAgICAgICA8RmxleEJveExheW91dCB2LWlmPVwibWF0Y2hEZXRhaWxzLnZlbnVlXCIgZmxleD1cIjFcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuICAgICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBmb250U2l6ZT1cIjE2XCJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiMTBcIlxuICAgICAgICAgICAgICA+e3sgbWF0Y2hEZXRhaWxzLmRhdGUgfX0gQCB7eyBtYXRjaERldGFpbHMudGltZSB9fTwvTGFiZWxcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L0ZsZXhCb3hMYXlvdXQ+XG4gICAgICAgICAgPEZsZXhCb3hMYXlvdXQgdi1pZj1cIiFtYXRjaERldGFpbHMuZGF0ZVwiIGZsZXg9XCIxXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgZm9udFNpemU9XCIxNlwiXG4gICAgICAgICAgICAgIG1hcmdpblRvcD1cIjEwXCJcbiAgICAgICAgICAgICAgPi0tPC9MYWJlbFxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvRmxleEJveExheW91dD5cbiAgICAgICAgICA8RmxleEJveExheW91dCB2LWlmPVwibWF0Y2hEZXRhaWxzLmlkXCIgZmxleD1cIjFcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGNsYXNzPVwibS10LTI1XCI+XG4gICAgICAgICAgICA8QmFzZUJ1dHRvbldpdGhJY29uXG4gICAgICAgICAgICAgIDpzdHlsZU9iamVjdD1cIntcbiAgICAgICAgICAgICAgICBjb2xvcjogbWF0Y2hEZXRhaWxzLm15U3RhdHVzID09PSAxIDw8IDEgPyAnI2ZmNDM1MCcgOiAnIzg4OGU5MCcsXG4gICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICBAaGFuZGxlT25DbGljaz1cImhhbmRsZU9uTm9DbGlja1wiXG4gICAgICAgICAgICAgIHRleHQ9XCJOb3QgSW5cIlxuICAgICAgICAgICAgICBpY29uPVwiZmEtdGltZXMtY2lyY2xlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QmFzZUJ1dHRvbldpdGhJY29uXG4gICAgICAgICAgICAgIDpzdHlsZU9iamVjdD1cIntcbiAgICAgICAgICAgICAgICBjb2xvcjogbWF0Y2hEZXRhaWxzLm15U3RhdHVzID09PSAxIDw8IDAgPyAnZ3JlZW4nIDogJyM4ODhlOTAnLFxuICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgQGhhbmRsZU9uQ2xpY2s9XCJoYW5kbGVPblllc0NsaWNrXCJcbiAgICAgICAgICAgICAgdGV4dD1cIkkgYW0gSW5cIlxuICAgICAgICAgICAgICBpY29uPVwiZmEtY2hlY2stY2lyY2xlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GbGV4Qm94TGF5b3V0PlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICA8U3RhY2tMYXlvdXQgd2lkdGg9XCIxMDAlXCIgcGFkZGluZz1cIjEwXCI+XG4gICAgICAgICAgPCEtLUFkZCB5b3VyIHBhZ2UgY29udGVudCBoZXJlLS0+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwvU2Nyb2xsVmlldz5cbiAgICA8RmxleEJveExheW91dCBmbGV4PVwiMVwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgY2xhc3M9XCJtLXQtMTBcIj5cbiAgICAgIDxCYXNlQnV0dG9uXG4gICAgICAgIDpjbGFzcz1cInsgJ20tdC0yMCc6IHRydWUsICctcHJpbWFyeSc6IHRydWUgfVwiXG4gICAgICAgIEBoYW5kbGVPbkNsaWNrPVwiaGFuZGxlT25WaWV3QWxsTWF0Y2hlc0NsaWNrXCJcbiAgICAgICAgOmxvYWRpbmc9XCJmYWxzZVwiXG4gICAgICAgIHJlZkZyb21QYXJlbnQ9XCJ2aWV3YWxsbWF0Y2hlc1wiXG4gICAgICAgIHRleHQ9XCJWaWV3IEFsbCBNYXRjaGVzXCJcbiAgICAgIC8+IDwvRmxleEJveExheW91dFxuICA+PC9TdGFja0xheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cblNjcm9sbFZpZXcge1xuICBoZWlnaHQ6IDgwJTtcbn1cblxuLnQtMTYge1xuICBmb250LXNpemU6IDE2O1xufVxuLmltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKSxcbiAgICB1cmwoJ34vYXNzZXRzL2ltYWdlcy9ob21lLmpwZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xuICAtd2Via2l0LWZpbHRlcjogYmx1cig1cHgpO1xuICAtbW96LWZpbHRlcjogYmx1cig1cHgpO1xuICAtby1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgLW1zLWZpbHRlcjogYmx1cig1cHgpO1xuICBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgLmxvYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgfVxufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=