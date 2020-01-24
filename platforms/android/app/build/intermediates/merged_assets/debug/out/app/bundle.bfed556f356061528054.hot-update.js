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

          if (result.json.count > 0) {
            var matchDetails = Object.values(result.json.match)[0];
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
          _this2.$emit('onMatchEventSetIndexCb');

          Object(_shared_Toasty__WEBPACK_IMPORTED_MODULE_2__["ToastService"])('All done', '#a5d6a7').show();
          yield _this2.getUpcomingMatchDetails();
        }

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
          _this3.$emit('onMatchEventSetIndexCb');

          Object(_shared_Toasty__WEBPACK_IMPORTED_MODULE_2__["ToastService"])('All done', '#a5d6a7').show();
          yield _this3.getUpcomingMatchDetails();
        }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvSG9tZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLGNBREE7QUFFQTtBQUFBO0FBQUE7QUFBQSxHQUZBO0FBR0EsV0FIQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBO0FBRkE7QUFEQTtBQU1BLEdBWEE7O0FBWUE7QUFDQSxnRUFEQTs7QUFFQTtBQUNBO0FBQ0EsS0FKQTs7QUFLQTtBQUNBO0FBQ0E7O0FBUEEsSUFaQTtBQXFCQTtBQUNBO0FBQ0EsR0F2QkE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsR0E3QkE7QUE4QkE7QUFDQTtBQUNBO0FBQ0EsS0FGQTtBQUdBLEdBbENBO0FBb0NBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUNBLFdBREE7QUFFQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBaEJBO0FBaUJBLEtBbEJBOztBQW1CQTtBQUFBOztBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQSxxQ0FEQTtBQUVBO0FBRkE7O0FBSUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBWEE7QUFZQSxLQS9CQTs7QUFnQ0E7QUFBQTs7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0EscUNBREE7QUFFQTtBQUZBOztBQUlBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQVhBO0FBWUEsS0E1Q0E7O0FBNkNBO0FBQ0E7QUFDQSxLQS9DQTs7QUFnREE7QUFDQTtBQUNBO0FBQ0Esa0RBSEEsQ0FLQTs7QUFDQTtBQUNBLHNEQURBLENBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDQSxRQURBLEVBRUEsUUFGQTtBQUlBLFNBTkEsTUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuRUE7QUFwQ0EsRyIsImZpbGUiOiJidW5kbGUuYmZlZDU1NmYzNTYwNjE1MjgwNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBTdGF0ZSB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgeyBnZXRVcGNvbWluZ01hdGNoRGV0YWlscywgcGF0Y2hVc2VyTWF0Y2hTdGF0dXMgfSBmcm9tICcuLi9fc2hhcmVkL2ZpcmViYXNlL2hvbWUnXG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuLi9fc2hhcmVkL1RvYXN0eSdcbmltcG9ydCBCYXNlQnV0dG9uV2l0aEljb24gZnJvbSAnLi4vY29tcG9uZW50cy9CYXNlQnV0dG9uV2l0aEljb24udnVlJ1xuaW1wb3J0IEJhc2VCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CYXNlQnV0dG9uLnZ1ZSdcbmltcG9ydCB7IE1hdGNoQXZhaWxhYmlsaXR5U3RhdHVzIH0gZnJvbSAnLi4vdHlwZXMvRU1hdGNoQXZhaWxhYmlsaXR5U3RhdHVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdIb21lJyxcbiAgY29tcG9uZW50czogeyBCYXNlQnV0dG9uV2l0aEljb24sIEJhc2VCdXR0b24gfSxcbiAgcHJvcHM6IHt9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICB1cGNvbWluZ01hdGNoOiB7fSxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDogbWFwU3RhdGUoe1xuICAgIHVzZXJDb250ZXh0OiBzdGF0ZSA9PiBzdGF0ZS5hdXRoZW50aWNhdGlvbk1vZHVsZS51c2VyQ29udGV4dCxcbiAgICBsb2FkaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubG9hZGluZ1xuICAgIH0sXG4gICAgbWF0Y2hEZXRhaWxzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudXBjb21pbmdNYXRjaFxuICAgIH0sXG4gIH0pLFxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhgSG9tZSA6OiBDcmVhdGVkYClcbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhgSG9tZSA6OiBtb3VudGVkYClcbiAgICAgIHRoaXMuZ2V0VXBjb21pbmdNYXRjaERldGFpbHMoKVxuICAgIH0pXG4gIH0sXG4gIHVwZGF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coYEhvbWUgOjogdXBkYXRlZGApXG4gICAgfSlcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgZ2V0VXBjb21pbmdNYXRjaERldGFpbHMoKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRVcGNvbWluZ01hdGNoRGV0YWlscyh0aGlzLnVzZXJDb250ZXh0LnVpZClcbiAgICAgIGlmIChyZXN1bHQgJiYgIXJlc3VsdC5pc0Vycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAtLS0tLS0tLS0tLS0tYClcbiAgICAgICAgY29uc29sZS5sb2coYFVwY29taW5nIG1hdGNoIGRldGFpbHNgKVxuICAgICAgICBpZiAocmVzdWx0Lmpzb24uY291bnQgPiAwKSB7XG4gICAgICAgICAgY29uc3QgbWF0Y2hEZXRhaWxzID0gT2JqZWN0LnZhbHVlcyhyZXN1bHQuanNvbi5tYXRjaClbMF1cbiAgICAgICAgICBjb25zb2xlLmxvZyhtYXRjaERldGFpbHMpXG4gICAgICAgICAgY29uc29sZS5sb2coYC0tLS0tLS0tLS0tLS0tLS1gKVxuICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgdXBjb21pbmdNYXRjaDogeyAuLi5tYXRjaERldGFpbHMsIGRhdGU6IG5ldyBEYXRlKG1hdGNoRGV0YWlscy5kYXRlKS50b0RhdGVTdHJpbmcoKSB9LFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSB9XG4gICAgfSxcbiAgICBhc3luYyBoYW5kbGVPbk5vQ2xpY2soKSB7XG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH1cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBhdGNoVXNlck1hdGNoU3RhdHVzKHRoaXMubWF0Y2hEZXRhaWxzLmlkLCB7XG4gICAgICAgIHVpZDogdGhpcy51c2VyQ29udGV4dC51aWQsXG4gICAgICAgIHN0YXR1czogTWF0Y2hBdmFpbGFiaWxpdHlTdGF0dXMuTk8sXG4gICAgICB9KVxuICAgICAgaWYgKCFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICB0aGlzLiRlbWl0KCdvbk1hdGNoRXZlbnRTZXRJbmRleENiJylcbiAgICAgICAgVG9hc3RTZXJ2aWNlKCdBbGwgZG9uZScsICcjYTVkNmE3Jykuc2hvdygpXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0VXBjb21pbmdNYXRjaERldGFpbHMoKVxuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlT25ZZXNDbGljaygpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IHRydWUgfVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcGF0Y2hVc2VyTWF0Y2hTdGF0dXModGhpcy5tYXRjaERldGFpbHMuaWQsIHtcbiAgICAgICAgdWlkOiB0aGlzLnVzZXJDb250ZXh0LnVpZCxcbiAgICAgICAgc3RhdHVzOiBNYXRjaEF2YWlsYWJpbGl0eVN0YXR1cy5ZRVMsXG4gICAgICB9KVxuICAgICAgaWYgKCFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICB0aGlzLiRlbWl0KCdvbk1hdGNoRXZlbnRTZXRJbmRleENiJylcbiAgICAgICAgVG9hc3RTZXJ2aWNlKCdBbGwgZG9uZScsICcjYTVkNmE3Jykuc2hvdygpXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0VXBjb21pbmdNYXRjaERldGFpbHMoKVxuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxuICAgIH0sXG4gICAgaGFuZGxlT25WaWV3QWxsTWF0Y2hlc0NsaWNrKCkge1xuICAgICAgdGhpcy4kZW1pdCgnb25Ib21lRXZlbnRTZXRJbmRleENiJywgMSlcbiAgICB9LFxuICAgIG9uU2Nyb2xsOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vYWNjZXNzIHRvIHRoZSBuYXRpdmUgZXZlbnRcbiAgICAgIGNvbnN0IHNjcm9sbFZpZXcgPSB0aGlzLiRyZWZzLnNjcm9sbFZpZXcubmF0aXZlVmlld1xuICAgICAgY29uc3QgdG9wVmlldyA9IHRoaXMuJHJlZnMudG9wVmlldy5uYXRpdmVWaWV3XG5cbiAgICAgIC8vIGlmIHRoZSBvZmZzZXQgaXMgbGVzcyB0aGFuIHRoZSBoZWlnaHQgb2YgdGhlIGhlYWRlci5cbiAgICAgIGlmIChzY3JvbGxWaWV3LnZlcnRpY2FsT2Zmc2V0IDwgMjUwKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHNjcm9sbFZpZXcudmVydGljYWxPZmZzZXQgLyAxLjY1IC8vIHlvdSBjYW4gYWRqdXN0IHRoaXMgbnVtYmVyIHRvIG1ha2UgdGhlIHBhcmFsbGF4IG1vcmUgc3VidGxlIG9yIGRyYW1hdGljXG4gICAgICAgIGlmIChzY3JvbGxWaWV3Lmlvcykge1xuICAgICAgICAgIC8vIGlPUyBhZGp1c3QgdGhlIHBvc2l0aW9uIHdpdGggYW4gYW5pbWF0aW9uIHRvIGNyZWF0ZSBhIHNtb3RoZXIgc2Nyb2xsaW5nIGVmZmVjdC5cbiAgICAgICAgICB0b3BWaWV3LmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogMCwgeTogb2Zmc2V0IH0gfSkudGhlbihcbiAgICAgICAgICAgICgpID0+IHt9LFxuICAgICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQW5kcm9pZCwgYW5pbWF0aW9ucyBhcmUgamVya3kgc28gaW5zdGVhZCBqdXN0IGFkanVzdCB0aGUgcG9zaXRpb24gd2l0aG91dCBhbmltYXRpb24uXG4gICAgICAgICAgdG9wVmlldy50cmFuc2xhdGVZID0gTWF0aC5mbG9vcihvZmZzZXQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaW1hZ2VcIj5cbiAgICA8QWN0aXZpdHlJbmRpY2F0b3JcbiAgICAgIDp2aXNpYmlsaXR5PVwibG9hZGluZyA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcIlxuICAgICAgOmJ1c3k9XCJsb2FkaW5nXCJcbiAgICAgIGNsYXNzPVwibnQtYWN0aXZpdHktaW5kaWNhdG9yIGxvYWRlclwiXG4gICAgICBsZWZ0PVwiMTAwXCJcbiAgICAgIHRvcD1cIjEwMFwiXG4gICAgPjwvQWN0aXZpdHlJbmRpY2F0b3I+XG4gICAgPFNjcm9sbFZpZXcgcmVmPVwic2Nyb2xsVmlld1wiIEBzY3JvbGw9XCJvblNjcm9sbFwiPlxuICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICA8U3RhY2tMYXlvdXQgcmVmPVwidG9wVmlld1wiIGhlaWdodD1cIjUwMFwiPlxuICAgICAgICAgIDwhLS0gdGhpcyBpcyB0aGUgaGVhZGVyIGZvciBjb2xsYXBzaW5nIC0tLT5cbiAgICAgICAgICA8IS0tIE5vdGU6IHRoaXMgY2FuIGJlIGFueSB0eXBlIG9mIGxheW91dCB5b3Ugd2FudCAtLT5cbiAgICAgICAgICA8RmxleEJveExheW91dCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8TGFiZWxcbiAgICAgICAgICAgICAgdGV4dD1cIkNhbWVsc1wiXG4gICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgZm9udFNpemU9XCIzNlwiXG4gICAgICAgICAgICAgIG1hcmdpblRvcD1cIjEyMFwiXG4gICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiVlNcIiBjb2xvcj1cIndoaXRlXCIgdGV4dEFsaWdubWVudD1cImNlbnRlclwiIGZvbnRTaXplPVwiMjBcIiBtYXJnaW5Ub3A9XCIxMFwiIC8+XG4gICAgICAgICAgICA8TGFiZWxcbiAgICAgICAgICAgICAgdi1pZj1cIiFtYXRjaERldGFpbHMub3Bwb25lbnRcIlxuICAgICAgICAgICAgICB0ZXh0PVwiLS0tLS1cIlxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgdGV4dEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwiMzZcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9XCIxMFwiXG4gICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgICB2LWlmPVwibWF0Y2hEZXRhaWxzLm9wcG9uZW50XCJcbiAgICAgICAgICAgICAgOnRleHQ9XCJtYXRjaERldGFpbHMub3Bwb25lbnRcIlxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgdGV4dEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwiMzZcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9XCIxMFwiXG4gICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0ZsZXhCb3hMYXlvdXQ+XG4gICAgICAgICAgPEZsZXhCb3hMYXlvdXQgdi1pZj1cIm1hdGNoRGV0YWlscy52ZW51ZVwiIGZsZXg9XCIxXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBjbGFzcz1cIm0tdC0xMFwiPlxuICAgICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBmb250U2l6ZT1cIjE2XCJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiNTBcIlxuICAgICAgICAgICAgICA+e3sgbWF0Y2hEZXRhaWxzLnZlbnVlIH19ICwge3sgbWF0Y2hEZXRhaWxzLnBvc3RDb2RlIH19PC9MYWJlbFxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvRmxleEJveExheW91dD5cbiAgICAgICAgICA8RmxleEJveExheW91dCB2LWlmPVwiIW1hdGNoRGV0YWlscy52ZW51ZVwiIGZsZXg9XCIxXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBjbGFzcz1cIm0tdC0xMFwiPlxuICAgICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBmb250U2l6ZT1cIjE2XCJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiNTBcIlxuICAgICAgICAgICAgICA+LS0tLS0tLCAtLS0tLTwvTGFiZWxcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L0ZsZXhCb3hMYXlvdXQ+XG4gICAgICAgICAgPEZsZXhCb3hMYXlvdXQgdi1pZj1cIm1hdGNoRGV0YWlscy52ZW51ZVwiIGZsZXg9XCIxXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgZm9udFNpemU9XCIxNlwiXG4gICAgICAgICAgICAgIG1hcmdpblRvcD1cIjEwXCJcbiAgICAgICAgICAgICAgPnt7IG1hdGNoRGV0YWlscy5kYXRlIH19IEAge3sgbWF0Y2hEZXRhaWxzLnRpbWUgfX08L0xhYmVsXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9GbGV4Qm94TGF5b3V0PlxuICAgICAgICAgIDxGbGV4Qm94TGF5b3V0IHYtaWY9XCIhbWF0Y2hEZXRhaWxzLmRhdGVcIiBmbGV4PVwiMVwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8TGFiZWxcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgdGV4dEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwiMTZcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9XCIxMFwiXG4gICAgICAgICAgICAgID4tLS8tLS8tLS0tIC0tOi0tPC9MYWJlbFxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvRmxleEJveExheW91dD5cbiAgICAgICAgICA8RmxleEJveExheW91dCB2LWlmPVwibWF0Y2hEZXRhaWxzLmlkXCIgZmxleD1cIjFcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGNsYXNzPVwibS10LTI1XCI+XG4gICAgICAgICAgICA8QmFzZUJ1dHRvbldpdGhJY29uXG4gICAgICAgICAgICAgIDpzdHlsZU9iamVjdD1cIntcbiAgICAgICAgICAgICAgICBjb2xvcjogbWF0Y2hEZXRhaWxzLm15U3RhdHVzID09PSAxIDw8IDEgPyAnI2ZmNDM1MCcgOiAnIzg4OGU5MCcsXG4gICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICBAaGFuZGxlT25DbGljaz1cImhhbmRsZU9uTm9DbGlja1wiXG4gICAgICAgICAgICAgIHRleHQ9XCJOb3QgSW5cIlxuICAgICAgICAgICAgICBpY29uPVwiZmEtdGltZXMtY2lyY2xlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QmFzZUJ1dHRvbldpdGhJY29uXG4gICAgICAgICAgICAgIDpzdHlsZU9iamVjdD1cIntcbiAgICAgICAgICAgICAgICBjb2xvcjogbWF0Y2hEZXRhaWxzLm15U3RhdHVzID09PSAxIDw8IDAgPyAnZ3JlZW4nIDogJyM4ODhlOTAnLFxuICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgQGhhbmRsZU9uQ2xpY2s9XCJoYW5kbGVPblllc0NsaWNrXCJcbiAgICAgICAgICAgICAgdGV4dD1cIkkgYW0gSW5cIlxuICAgICAgICAgICAgICBpY29uPVwiZmEtY2hlY2stY2lyY2xlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GbGV4Qm94TGF5b3V0PlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICA8U3RhY2tMYXlvdXQgd2lkdGg9XCIxMDAlXCIgcGFkZGluZz1cIjEwXCI+XG4gICAgICAgICAgPCEtLUFkZCB5b3VyIHBhZ2UgY29udGVudCBoZXJlLS0+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwvU2Nyb2xsVmlldz5cbiAgICA8RmxleEJveExheW91dCBmbGV4PVwiMVwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgY2xhc3M9XCJtLXQtMTBcIj5cbiAgICAgIDxCYXNlQnV0dG9uXG4gICAgICAgIDpjbGFzcz1cInsgJ20tdC0yMCc6IHRydWUsICctcHJpbWFyeSc6IHRydWUgfVwiXG4gICAgICAgIEBoYW5kbGVPbkNsaWNrPVwiaGFuZGxlT25WaWV3QWxsTWF0Y2hlc0NsaWNrXCJcbiAgICAgICAgOmxvYWRpbmc9XCJmYWxzZVwiXG4gICAgICAgIHJlZkZyb21QYXJlbnQ9XCJ2aWV3YWxsbWF0Y2hlc1wiXG4gICAgICAgIHRleHQ9XCJWaWV3IEFsbCBNYXRjaGVzXCJcbiAgICAgIC8+IDwvRmxleEJveExheW91dFxuICA+PC9TdGFja0xheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cblNjcm9sbFZpZXcge1xuICBoZWlnaHQ6IDgwJTtcbn1cblxuLnQtMTYge1xuICBmb250LXNpemU6IDE2O1xufVxuLmltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKSxcbiAgICB1cmwoJ34vYXNzZXRzL2ltYWdlcy9ob21lLmpwZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xuICAtd2Via2l0LWZpbHRlcjogYmx1cig1cHgpO1xuICAtbW96LWZpbHRlcjogYmx1cig1cHgpO1xuICAtby1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgLW1zLWZpbHRlcjogYmx1cig1cHgpO1xuICBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgLmxvYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgfVxufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=