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

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

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
          var matchDetails = Object.values(result.json.match);

          if (matchDetails.length) {
            matchDetails = (_readOnlyError("matchDetails"), matchDetails[0]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvSG9tZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsY0FEQTtBQUVBO0FBQUE7QUFBQTtBQUFBLEdBRkE7QUFHQSxXQUhBOztBQUlBO0FBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUE7QUFGQTtBQURBO0FBTUEsR0FYQTs7QUFZQTtBQUNBLGdFQURBOztBQUVBO0FBQ0E7QUFDQSxLQUpBOztBQUtBO0FBQ0E7QUFDQTs7QUFQQSxJQVpBO0FBcUJBO0FBQ0E7QUFDQSxHQXZCQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxHQTdCQTtBQThCQTtBQUNBO0FBQ0E7QUFDQSxLQUZBO0FBR0EsR0FsQ0E7QUFvQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FDQSxXQURBO0FBRUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQWpCQTtBQWtCQSxLQW5CQTs7QUFvQkE7QUFBQTs7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0EscUNBREE7QUFFQTtBQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQUE7QUFBQTtBQVhBO0FBWUEsS0FoQ0E7O0FBaUNBO0FBQUE7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBLHFDQURBO0FBRUE7QUFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFYQTtBQVlBLEtBN0NBOztBQThDQTtBQUNBO0FBQ0EsS0FoREE7O0FBaURBO0FBQ0E7QUFDQTtBQUNBLGtEQUhBLENBS0E7O0FBQ0E7QUFDQSxzREFEQSxDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ0EsUUFEQSxFQUVBLFFBRkE7QUFJQSxTQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEVBO0FBcENBLEciLCJmaWxlIjoiYnVuZGxlLmU0NTg1MWRkNDE3ZmY0MzdkNjBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuaW1wb3J0IHsgbWFwU3RhdGUgfSBmcm9tICd2dWV4J1xuaW1wb3J0IHsgZ2V0VXBjb21pbmdNYXRjaERldGFpbHMsIHBhdGNoVXNlck1hdGNoU3RhdHVzIH0gZnJvbSAnLi4vX3NoYXJlZC9maXJlYmFzZS9ob21lJ1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi4vX3NoYXJlZC9Ub2FzdHknXG5pbXBvcnQgQmFzZUJ1dHRvbldpdGhJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvQmFzZUJ1dHRvbldpdGhJY29uLnZ1ZSdcbmltcG9ydCBCYXNlQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQmFzZUJ1dHRvbi52dWUnXG5pbXBvcnQgeyBNYXRjaEF2YWlsYWJpbGl0eVN0YXR1cyB9IGZyb20gJy4uL3R5cGVzL0VNYXRjaEF2YWlsYWJpbGl0eVN0YXR1cydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnSG9tZScsXG4gIGNvbXBvbmVudHM6IHsgQmFzZUJ1dHRvbldpdGhJY29uLCBCYXNlQnV0dG9uIH0sXG4gIHByb3BzOiB7fSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgdXBjb21pbmdNYXRjaDoge30sXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcbiAgICB1c2VyQ29udGV4dDogc3RhdGUgPT4gc3RhdGUuYXV0aGVudGljYXRpb25Nb2R1bGUudXNlckNvbnRleHQsXG4gICAgbG9hZGluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmdcbiAgICB9LFxuICAgIG1hdGNoRGV0YWlscygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnVwY29taW5nTWF0Y2hcbiAgICB9LFxuICB9KSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coYEhvbWUgOjogQ3JlYXRlZGApXG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coYEhvbWUgOjogbW91bnRlZGApXG4gICAgICB0aGlzLmdldFVwY29taW5nTWF0Y2hEZXRhaWxzKClcbiAgICB9KVxuICB9LFxuICB1cGRhdGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBIb21lIDo6IHVwZGF0ZWRgKVxuICAgIH0pXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIGdldFVwY29taW5nTWF0Y2hEZXRhaWxzKCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0VXBjb21pbmdNYXRjaERldGFpbHModGhpcy51c2VyQ29udGV4dC51aWQpXG4gICAgICBpZiAocmVzdWx0ICYmICFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhgLS0tLS0tLS0tLS0tLWApXG4gICAgICAgIGNvbnNvbGUubG9nKGBVcGNvbWluZyBtYXRjaCBkZXRhaWxzYClcbiAgICAgICAgY29uc3QgbWF0Y2hEZXRhaWxzID0gT2JqZWN0LnZhbHVlcyhyZXN1bHQuanNvbi5tYXRjaClcbiAgICAgICAgaWYgKG1hdGNoRGV0YWlscy5sZW5ndGgpIHtcbiAgICAgICAgICBtYXRjaERldGFpbHMgPSBtYXRjaERldGFpbHNbMF1cbiAgICAgICAgICBjb25zb2xlLmxvZyhtYXRjaERldGFpbHMpXG4gICAgICAgICAgY29uc29sZS5sb2coYC0tLS0tLS0tLS0tLS0tLS1gKVxuICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgdXBjb21pbmdNYXRjaDogeyAuLi5tYXRjaERldGFpbHMsIGRhdGU6IG5ldyBEYXRlKG1hdGNoRGV0YWlscy5kYXRlKS50b0RhdGVTdHJpbmcoKSB9LFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSB9XG4gICAgfSxcbiAgICBhc3luYyBoYW5kbGVPbk5vQ2xpY2soKSB7XG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH1cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBhdGNoVXNlck1hdGNoU3RhdHVzKHRoaXMubWF0Y2hEZXRhaWxzLmlkLCB7XG4gICAgICAgIHVpZDogdGhpcy51c2VyQ29udGV4dC51aWQsXG4gICAgICAgIHN0YXR1czogTWF0Y2hBdmFpbGFiaWxpdHlTdGF0dXMuTk8sXG4gICAgICB9KVxuICAgICAgaWYgKCFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICBUb2FzdFNlcnZpY2UoJ0FsbCBkb25lJywgJyNhNWQ2YTcnKS5zaG93KClcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRVcGNvbWluZ01hdGNoRGV0YWlscygpXG4gICAgICB9XG4gICAgICB0aGlzLiRlbWl0KCdvbk1hdGNoRXZlbnRTZXRJbmRleENiJylcbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZU9uWWVzQ2xpY2soKSB7XG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH1cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBhdGNoVXNlck1hdGNoU3RhdHVzKHRoaXMubWF0Y2hEZXRhaWxzLmlkLCB7XG4gICAgICAgIHVpZDogdGhpcy51c2VyQ29udGV4dC51aWQsXG4gICAgICAgIHN0YXR1czogTWF0Y2hBdmFpbGFiaWxpdHlTdGF0dXMuWUVTLFxuICAgICAgfSlcbiAgICAgIGlmICghcmVzdWx0LmlzRXJyb3IpIHtcbiAgICAgICAgVG9hc3RTZXJ2aWNlKCdBbGwgZG9uZScsICcjYTVkNmE3Jykuc2hvdygpXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0VXBjb21pbmdNYXRjaERldGFpbHMoKVxuICAgICAgfVxuICAgICAgdGhpcy4kZW1pdCgnb25NYXRjaEV2ZW50U2V0SW5kZXhDYicpXG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSB9XG4gICAgfSxcbiAgICBoYW5kbGVPblZpZXdBbGxNYXRjaGVzQ2xpY2soKSB7XG4gICAgICB0aGlzLiRlbWl0KCdvbkhvbWVFdmVudFNldEluZGV4Q2InLCAxKVxuICAgIH0sXG4gICAgb25TY3JvbGw6IGZ1bmN0aW9uKCkge1xuICAgICAgLy9hY2Nlc3MgdG8gdGhlIG5hdGl2ZSBldmVudFxuICAgICAgY29uc3Qgc2Nyb2xsVmlldyA9IHRoaXMuJHJlZnMuc2Nyb2xsVmlldy5uYXRpdmVWaWV3XG4gICAgICBjb25zdCB0b3BWaWV3ID0gdGhpcy4kcmVmcy50b3BWaWV3Lm5hdGl2ZVZpZXdcblxuICAgICAgLy8gaWYgdGhlIG9mZnNldCBpcyBsZXNzIHRoYW4gdGhlIGhlaWdodCBvZiB0aGUgaGVhZGVyLlxuICAgICAgaWYgKHNjcm9sbFZpZXcudmVydGljYWxPZmZzZXQgPCAyNTApIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gc2Nyb2xsVmlldy52ZXJ0aWNhbE9mZnNldCAvIDEuNjUgLy8geW91IGNhbiBhZGp1c3QgdGhpcyBudW1iZXIgdG8gbWFrZSB0aGUgcGFyYWxsYXggbW9yZSBzdWJ0bGUgb3IgZHJhbWF0aWNcbiAgICAgICAgaWYgKHNjcm9sbFZpZXcuaW9zKSB7XG4gICAgICAgICAgLy8gaU9TIGFkanVzdCB0aGUgcG9zaXRpb24gd2l0aCBhbiBhbmltYXRpb24gdG8gY3JlYXRlIGEgc21vdGhlciBzY3JvbGxpbmcgZWZmZWN0LlxuICAgICAgICAgIHRvcFZpZXcuYW5pbWF0ZSh7IHRyYW5zbGF0ZTogeyB4OiAwLCB5OiBvZmZzZXQgfSB9KS50aGVuKFxuICAgICAgICAgICAgKCkgPT4ge30sXG4gICAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBBbmRyb2lkLCBhbmltYXRpb25zIGFyZSBqZXJreSBzbyBpbnN0ZWFkIGp1c3QgYWRqdXN0IHRoZSBwb3NpdGlvbiB3aXRob3V0IGFuaW1hdGlvbi5cbiAgICAgICAgICB0b3BWaWV3LnRyYW5zbGF0ZVkgPSBNYXRoLmZsb29yKG9mZnNldClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJpbWFnZVwiPlxuICAgIDxBY3Rpdml0eUluZGljYXRvclxuICAgICAgOnZpc2liaWxpdHk9XCJsb2FkaW5nID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ1wiXG4gICAgICA6YnVzeT1cImxvYWRpbmdcIlxuICAgICAgY2xhc3M9XCJudC1hY3Rpdml0eS1pbmRpY2F0b3IgbG9hZGVyXCJcbiAgICAgIGxlZnQ9XCIxMDBcIlxuICAgICAgdG9wPVwiMTAwXCJcbiAgICA+PC9BY3Rpdml0eUluZGljYXRvcj5cbiAgICA8U2Nyb2xsVmlldyByZWY9XCJzY3JvbGxWaWV3XCIgQHNjcm9sbD1cIm9uU2Nyb2xsXCI+XG4gICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgIDxTdGFja0xheW91dCByZWY9XCJ0b3BWaWV3XCIgaGVpZ2h0PVwiNTAwXCI+XG4gICAgICAgICAgPCEtLSB0aGlzIGlzIHRoZSBoZWFkZXIgZm9yIGNvbGxhcHNpbmcgLS0tPlxuICAgICAgICAgIDwhLS0gTm90ZTogdGhpcyBjYW4gYmUgYW55IHR5cGUgb2YgbGF5b3V0IHlvdSB3YW50IC0tPlxuICAgICAgICAgIDxGbGV4Qm94TGF5b3V0IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgICB0ZXh0PVwiQ2FtZWxzXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBmb250U2l6ZT1cIjM2XCJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiMTIwXCJcbiAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJWU1wiIGNvbG9yPVwid2hpdGVcIiB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCIgZm9udFNpemU9XCIyMFwiIG1hcmdpblRvcD1cIjEwXCIgLz5cbiAgICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgICA6dGV4dD1cIm1hdGNoRGV0YWlscy5vcHBvbmVudFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgZm9udFNpemU9XCIzNlwiXG4gICAgICAgICAgICAgIG1hcmdpblRvcD1cIjEwXCJcbiAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmxleEJveExheW91dD5cbiAgICAgICAgICA8RmxleEJveExheW91dCB2LWlmPVwibWF0Y2hEZXRhaWxzLnZlbnVlXCIgZmxleD1cIjFcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGNsYXNzPVwibS10LTEwXCI+XG4gICAgICAgICAgICA8TGFiZWxcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgdGV4dEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwiMTZcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9XCI1MFwiXG4gICAgICAgICAgICAgID57eyBtYXRjaERldGFpbHMudmVudWUgfX0gLCB7eyBtYXRjaERldGFpbHMucG9zdENvZGUgfX08L0xhYmVsXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9GbGV4Qm94TGF5b3V0PlxuICAgICAgICAgIDxGbGV4Qm94TGF5b3V0IHYtaWY9XCIhbWF0Y2hEZXRhaWxzLnZlbnVlXCIgZmxleD1cIjFcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGNsYXNzPVwibS10LTEwXCI+XG4gICAgICAgICAgICA8TGFiZWxcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgdGV4dEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwiMTZcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9XCI1MFwiXG4gICAgICAgICAgICAgID4tLTwvTGFiZWxcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L0ZsZXhCb3hMYXlvdXQ+XG4gICAgICAgICAgPEZsZXhCb3hMYXlvdXQgdi1pZj1cIm1hdGNoRGV0YWlscy52ZW51ZVwiIGZsZXg9XCIxXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgZm9udFNpemU9XCIxNlwiXG4gICAgICAgICAgICAgIG1hcmdpblRvcD1cIjEwXCJcbiAgICAgICAgICAgICAgPnt7IG1hdGNoRGV0YWlscy5kYXRlIH19IEAge3sgbWF0Y2hEZXRhaWxzLnRpbWUgfX08L0xhYmVsXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9GbGV4Qm94TGF5b3V0PlxuICAgICAgICAgIDxGbGV4Qm94TGF5b3V0IHYtaWY9XCIhbWF0Y2hEZXRhaWxzLmRhdGVcIiBmbGV4PVwiMVwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8TGFiZWxcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgdGV4dEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwiMTZcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9XCIxMFwiXG4gICAgICAgICAgICAgID4tLTwvTGFiZWxcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L0ZsZXhCb3hMYXlvdXQ+XG4gICAgICAgICAgPEZsZXhCb3hMYXlvdXQgdi1pZj1cIm1hdGNoRGV0YWlscy5pZFwiIGZsZXg9XCIxXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBjbGFzcz1cIm0tdC0yNVwiPlxuICAgICAgICAgICAgPEJhc2VCdXR0b25XaXRoSWNvblxuICAgICAgICAgICAgICA6c3R5bGVPYmplY3Q9XCJ7XG4gICAgICAgICAgICAgICAgY29sb3I6IG1hdGNoRGV0YWlscy5teVN0YXR1cyA9PT0gMSA8PCAxID8gJyNmZjQzNTAnIDogJyM4ODhlOTAnLFxuICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgQGhhbmRsZU9uQ2xpY2s9XCJoYW5kbGVPbk5vQ2xpY2tcIlxuICAgICAgICAgICAgICB0ZXh0PVwiTm90IEluXCJcbiAgICAgICAgICAgICAgaWNvbj1cImZhLXRpbWVzLWNpcmNsZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJhc2VCdXR0b25XaXRoSWNvblxuICAgICAgICAgICAgICA6c3R5bGVPYmplY3Q9XCJ7XG4gICAgICAgICAgICAgICAgY29sb3I6IG1hdGNoRGV0YWlscy5teVN0YXR1cyA9PT0gMSA8PCAwID8gJ2dyZWVuJyA6ICcjODg4ZTkwJyxcbiAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgIEBoYW5kbGVPbkNsaWNrPVwiaGFuZGxlT25ZZXNDbGlja1wiXG4gICAgICAgICAgICAgIHRleHQ9XCJJIGFtIEluXCJcbiAgICAgICAgICAgICAgaWNvbj1cImZhLWNoZWNrLWNpcmNsZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmxleEJveExheW91dD5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPFN0YWNrTGF5b3V0IHdpZHRoPVwiMTAwJVwiIHBhZGRpbmc9XCIxMFwiPlxuICAgICAgICAgIDwhLS1BZGQgeW91ciBwYWdlIGNvbnRlbnQgaGVyZS0tPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgPC9TdGFja0xheW91dD5cbiAgICA8L1Njcm9sbFZpZXc+XG4gICAgPEZsZXhCb3hMYXlvdXQgZmxleD1cIjFcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGNsYXNzPVwibS10LTEwXCI+XG4gICAgICA8QmFzZUJ1dHRvblxuICAgICAgICA6Y2xhc3M9XCJ7ICdtLXQtMjAnOiB0cnVlLCAnLXByaW1hcnknOiB0cnVlIH1cIlxuICAgICAgICBAaGFuZGxlT25DbGljaz1cImhhbmRsZU9uVmlld0FsbE1hdGNoZXNDbGlja1wiXG4gICAgICAgIDpsb2FkaW5nPVwiZmFsc2VcIlxuICAgICAgICByZWZGcm9tUGFyZW50PVwidmlld2FsbG1hdGNoZXNcIlxuICAgICAgICB0ZXh0PVwiVmlldyBBbGwgTWF0Y2hlc1wiXG4gICAgICAvPiA8L0ZsZXhCb3hMYXlvdXRcbiAgPjwvU3RhY2tMYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG5TY3JvbGxWaWV3IHtcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbi50LTE2IHtcbiAgZm9udC1zaXplOiAxNjtcbn1cbi5pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSksXG4gICAgdXJsKCd+L2Fzc2V0cy9pbWFnZXMvaG9tZS5qcGcnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEFkZCB0aGUgYmx1ciBlZmZlY3QgKi9cbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgLW1vei1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgLW8tZmlsdGVyOiBibHVyKDVweCk7XG4gIC1tcy1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgZmlsdGVyOiBibHVyKDVweCk7XG4gIC5sb2FkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gIH1cbn1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9