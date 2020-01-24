webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Login_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./views/Login.vue");
/* harmony import */ var _shared_firebase_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./_shared/firebase/home.ts");
/* harmony import */ var _shared_firebase_home__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shared_firebase_home__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_Toasty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./_shared/Toasty.ts");
/* harmony import */ var _shared_Toasty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shared_Toasty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BaseButtonWithIcon_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/BaseButtonWithIcon.vue");
/* harmony import */ var _components_BaseButton_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/BaseButton.vue");
/* harmony import */ var _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./types/EMatchAvailabilityStatus.ts");
/* harmony import */ var _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_http_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./_shared/http/http.ts");
/* harmony import */ var _shared_http_http__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_shared_http_http__WEBPACK_IMPORTED_MODULE_7__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Home',
  components: {
    BaseButtonWithIcon: _components_BaseButtonWithIcon_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    BaseButton: _components_BaseButton_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
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
        var result = yield Object(_shared_firebase_home__WEBPACK_IMPORTED_MODULE_2__["getUpcomingMatchDetails"])(_this.userContext.uid);

        if (result.status === _shared_http_http__WEBPACK_IMPORTED_MODULE_7__["HttpStatusCode"].Unauthorized) {
          _this.$navigateTo(_Login_vue__WEBPACK_IMPORTED_MODULE_1__["default"], {
            clearHistory: true
          });
        }

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
        var result = yield Object(_shared_firebase_home__WEBPACK_IMPORTED_MODULE_2__["patchUserMatchStatus"])(_this2.matchDetails.id, {
          uid: _this2.userContext.uid,
          status: _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_6__["MatchAvailabilityStatus"].NO
        });

        if (!result.isError) {
          _this2.$emit('onMatchEventSetIndexCb');

          Object(_shared_Toasty__WEBPACK_IMPORTED_MODULE_3__["ToastService"])('All done', '#a5d6a7').show();
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
        var result = yield Object(_shared_firebase_home__WEBPACK_IMPORTED_MODULE_2__["patchUserMatchStatus"])(_this3.matchDetails.id, {
          uid: _this3.userContext.uid,
          status: _types_EMatchAvailabilityStatus__WEBPACK_IMPORTED_MODULE_6__["MatchAvailabilityStatus"].YES
        });

        if (!result.isError) {
          _this3.$emit('onMatchEventSetIndexCb');

          Object(_shared_Toasty__WEBPACK_IMPORTED_MODULE_3__["ToastService"])('All done', '#a5d6a7').show();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvSG9tZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxjQURBO0FBRUE7QUFBQTtBQUFBO0FBQUEsR0FGQTtBQUdBLFdBSEE7O0FBSUE7QUFDQTtBQUNBO0FBQ0EscUJBREE7QUFFQTtBQUZBO0FBREE7QUFNQSxHQVhBOztBQVlBO0FBQ0EsZ0VBREE7O0FBRUE7QUFDQTtBQUNBLEtBSkE7O0FBS0E7QUFDQTtBQUNBOztBQVBBLElBWkE7QUFxQkE7QUFDQTtBQUNBLEdBdkJBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLEdBN0JBO0FBOEJBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQWxDQTtBQW9DQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUNBLFdBREE7QUFFQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBbkJBO0FBb0JBLEtBckJBOztBQXNCQTtBQUFBOztBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQSxxQ0FEQTtBQUVBO0FBRkE7O0FBSUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBWEE7QUFZQSxLQWxDQTs7QUFtQ0E7QUFBQTs7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0EscUNBREE7QUFFQTtBQUZBOztBQUlBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQVhBO0FBWUEsS0EvQ0E7O0FBZ0RBO0FBQ0E7QUFDQSxLQWxEQTs7QUFtREE7QUFDQTtBQUNBO0FBQ0Esa0RBSEEsQ0FLQTs7QUFDQTtBQUNBLHNEQURBLENBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDQSxRQURBLEVBRUEsUUFGQTtBQUlBLFNBTkEsTUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0RUE7QUFwQ0EsRyIsImZpbGUiOiJidW5kbGUuZTJlODVmM2FiMWU5ZGFjMDQ1YTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBTdGF0ZSB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbi52dWUnXG5pbXBvcnQgeyBnZXRVcGNvbWluZ01hdGNoRGV0YWlscywgcGF0Y2hVc2VyTWF0Y2hTdGF0dXMgfSBmcm9tICcuLi9fc2hhcmVkL2ZpcmViYXNlL2hvbWUnXG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuLi9fc2hhcmVkL1RvYXN0eSdcbmltcG9ydCBCYXNlQnV0dG9uV2l0aEljb24gZnJvbSAnLi4vY29tcG9uZW50cy9CYXNlQnV0dG9uV2l0aEljb24udnVlJ1xuaW1wb3J0IEJhc2VCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CYXNlQnV0dG9uLnZ1ZSdcbmltcG9ydCB7IE1hdGNoQXZhaWxhYmlsaXR5U3RhdHVzIH0gZnJvbSAnLi4vdHlwZXMvRU1hdGNoQXZhaWxhYmlsaXR5U3RhdHVzJ1xuaW1wb3J0IHsgSHR0cFN0YXR1c0NvZGUgfSBmcm9tICcuLi9fc2hhcmVkL2h0dHAvaHR0cCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnSG9tZScsXG4gIGNvbXBvbmVudHM6IHsgQmFzZUJ1dHRvbldpdGhJY29uLCBCYXNlQnV0dG9uIH0sXG4gIHByb3BzOiB7fSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgdXBjb21pbmdNYXRjaDoge30sXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcbiAgICB1c2VyQ29udGV4dDogc3RhdGUgPT4gc3RhdGUuYXV0aGVudGljYXRpb25Nb2R1bGUudXNlckNvbnRleHQsXG4gICAgbG9hZGluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmdcbiAgICB9LFxuICAgIG1hdGNoRGV0YWlscygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnVwY29taW5nTWF0Y2hcbiAgICB9LFxuICB9KSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coYEhvbWUgOjogQ3JlYXRlZGApXG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coYEhvbWUgOjogbW91bnRlZGApXG4gICAgICB0aGlzLmdldFVwY29taW5nTWF0Y2hEZXRhaWxzKClcbiAgICB9KVxuICB9LFxuICB1cGRhdGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBIb21lIDo6IHVwZGF0ZWRgKVxuICAgIH0pXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIGdldFVwY29taW5nTWF0Y2hEZXRhaWxzKCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0VXBjb21pbmdNYXRjaERldGFpbHModGhpcy51c2VyQ29udGV4dC51aWQpXG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gSHR0cFN0YXR1c0NvZGUuVW5hdXRob3JpemVkKSB7XG4gICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTG9naW4sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pXG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0ICYmICFyZXN1bHQuaXNFcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhgLS0tLS0tLS0tLS0tLWApXG4gICAgICAgIGNvbnNvbGUubG9nKGBVcGNvbWluZyBtYXRjaCBkZXRhaWxzYClcbiAgICAgICAgaWYgKHJlc3VsdC5qc29uLmNvdW50ID4gMCkge1xuICAgICAgICAgIGNvbnN0IG1hdGNoRGV0YWlscyA9IE9iamVjdC52YWx1ZXMocmVzdWx0Lmpzb24ubWF0Y2gpWzBdXG4gICAgICAgICAgY29uc29sZS5sb2cobWF0Y2hEZXRhaWxzKVxuICAgICAgICAgIGNvbnNvbGUubG9nKGAtLS0tLS0tLS0tLS0tLS0tYClcbiAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIHVwY29taW5nTWF0Y2g6IHsgLi4ubWF0Y2hEZXRhaWxzLCBkYXRlOiBuZXcgRGF0ZShtYXRjaERldGFpbHMuZGF0ZSkudG9EYXRlU3RyaW5nKCkgfSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlT25Ob0NsaWNrKCkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwYXRjaFVzZXJNYXRjaFN0YXR1cyh0aGlzLm1hdGNoRGV0YWlscy5pZCwge1xuICAgICAgICB1aWQ6IHRoaXMudXNlckNvbnRleHQudWlkLFxuICAgICAgICBzdGF0dXM6IE1hdGNoQXZhaWxhYmlsaXR5U3RhdHVzLk5PLFxuICAgICAgfSlcbiAgICAgIGlmICghcmVzdWx0LmlzRXJyb3IpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnb25NYXRjaEV2ZW50U2V0SW5kZXhDYicpXG4gICAgICAgIFRvYXN0U2VydmljZSgnQWxsIGRvbmUnLCAnI2E1ZDZhNycpLnNob3coKVxuICAgICAgICBhd2FpdCB0aGlzLmdldFVwY29taW5nTWF0Y2hEZXRhaWxzKClcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZU9uWWVzQ2xpY2soKSB7XG4gICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH1cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBhdGNoVXNlck1hdGNoU3RhdHVzKHRoaXMubWF0Y2hEZXRhaWxzLmlkLCB7XG4gICAgICAgIHVpZDogdGhpcy51c2VyQ29udGV4dC51aWQsXG4gICAgICAgIHN0YXR1czogTWF0Y2hBdmFpbGFiaWxpdHlTdGF0dXMuWUVTLFxuICAgICAgfSlcbiAgICAgIGlmICghcmVzdWx0LmlzRXJyb3IpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnb25NYXRjaEV2ZW50U2V0SW5kZXhDYicpXG4gICAgICAgIFRvYXN0U2VydmljZSgnQWxsIGRvbmUnLCAnI2E1ZDZhNycpLnNob3coKVxuICAgICAgICBhd2FpdCB0aGlzLmdldFVwY29taW5nTWF0Y2hEZXRhaWxzKClcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICB9LFxuICAgIGhhbmRsZU9uVmlld0FsbE1hdGNoZXNDbGljaygpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ29uSG9tZUV2ZW50U2V0SW5kZXhDYicsIDEpXG4gICAgfSxcbiAgICBvblNjcm9sbDogZnVuY3Rpb24oKSB7XG4gICAgICAvL2FjY2VzcyB0byB0aGUgbmF0aXZlIGV2ZW50XG4gICAgICBjb25zdCBzY3JvbGxWaWV3ID0gdGhpcy4kcmVmcy5zY3JvbGxWaWV3Lm5hdGl2ZVZpZXdcbiAgICAgIGNvbnN0IHRvcFZpZXcgPSB0aGlzLiRyZWZzLnRvcFZpZXcubmF0aXZlVmlld1xuXG4gICAgICAvLyBpZiB0aGUgb2Zmc2V0IGlzIGxlc3MgdGhhbiB0aGUgaGVpZ2h0IG9mIHRoZSBoZWFkZXIuXG4gICAgICBpZiAoc2Nyb2xsVmlldy52ZXJ0aWNhbE9mZnNldCA8IDI1MCkge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBzY3JvbGxWaWV3LnZlcnRpY2FsT2Zmc2V0IC8gMS42NSAvLyB5b3UgY2FuIGFkanVzdCB0aGlzIG51bWJlciB0byBtYWtlIHRoZSBwYXJhbGxheCBtb3JlIHN1YnRsZSBvciBkcmFtYXRpY1xuICAgICAgICBpZiAoc2Nyb2xsVmlldy5pb3MpIHtcbiAgICAgICAgICAvLyBpT1MgYWRqdXN0IHRoZSBwb3NpdGlvbiB3aXRoIGFuIGFuaW1hdGlvbiB0byBjcmVhdGUgYSBzbW90aGVyIHNjcm9sbGluZyBlZmZlY3QuXG4gICAgICAgICAgdG9wVmlldy5hbmltYXRlKHsgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IG9mZnNldCB9IH0pLnRoZW4oXG4gICAgICAgICAgICAoKSA9PiB7fSxcbiAgICAgICAgICAgICgpID0+IHt9XG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEFuZHJvaWQsIGFuaW1hdGlvbnMgYXJlIGplcmt5IHNvIGluc3RlYWQganVzdCBhZGp1c3QgdGhlIHBvc2l0aW9uIHdpdGhvdXQgYW5pbWF0aW9uLlxuICAgICAgICAgIHRvcFZpZXcudHJhbnNsYXRlWSA9IE1hdGguZmxvb3Iob2Zmc2V0KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxTdGFja0xheW91dCBjbGFzcz1cImltYWdlXCI+XG4gICAgPEFjdGl2aXR5SW5kaWNhdG9yXG4gICAgICA6dmlzaWJpbGl0eT1cImxvYWRpbmcgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXCJcbiAgICAgIDpidXN5PVwibG9hZGluZ1wiXG4gICAgICBjbGFzcz1cIm50LWFjdGl2aXR5LWluZGljYXRvciBsb2FkZXJcIlxuICAgICAgbGVmdD1cIjEwMFwiXG4gICAgICB0b3A9XCIxMDBcIlxuICAgID48L0FjdGl2aXR5SW5kaWNhdG9yPlxuICAgIDxTY3JvbGxWaWV3IHJlZj1cInNjcm9sbFZpZXdcIiBAc2Nyb2xsPVwib25TY3JvbGxcIj5cbiAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgPFN0YWNrTGF5b3V0IHJlZj1cInRvcFZpZXdcIiBoZWlnaHQ9XCI1MDBcIj5cbiAgICAgICAgICA8IS0tIHRoaXMgaXMgdGhlIGhlYWRlciBmb3IgY29sbGFwc2luZyAtLS0+XG4gICAgICAgICAgPCEtLSBOb3RlOiB0aGlzIGNhbiBiZSBhbnkgdHlwZSBvZiBsYXlvdXQgeW91IHdhbnQgLS0+XG4gICAgICAgICAgPEZsZXhCb3hMYXlvdXQgZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICAgIHRleHQ9XCJDYW1lbHNcIlxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgdGV4dEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwiMzZcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9XCIxMjBcIlxuICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlZTXCIgY29sb3I9XCJ3aGl0ZVwiIHRleHRBbGlnbm1lbnQ9XCJjZW50ZXJcIiBmb250U2l6ZT1cIjIwXCIgbWFyZ2luVG9wPVwiMTBcIiAvPlxuICAgICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICAgIHYtaWY9XCIhbWF0Y2hEZXRhaWxzLm9wcG9uZW50XCJcbiAgICAgICAgICAgICAgdGV4dD1cIi0tLS0tXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBmb250U2l6ZT1cIjM2XCJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiMTBcIlxuICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TGFiZWxcbiAgICAgICAgICAgICAgdi1pZj1cIm1hdGNoRGV0YWlscy5vcHBvbmVudFwiXG4gICAgICAgICAgICAgIDp0ZXh0PVwibWF0Y2hEZXRhaWxzLm9wcG9uZW50XCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBmb250U2l6ZT1cIjM2XCJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiMTBcIlxuICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GbGV4Qm94TGF5b3V0PlxuICAgICAgICAgIDxGbGV4Qm94TGF5b3V0IHYtaWY9XCJtYXRjaERldGFpbHMudmVudWVcIiBmbGV4PVwiMVwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgY2xhc3M9XCJtLXQtMTBcIj5cbiAgICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgZm9udFNpemU9XCIxNlwiXG4gICAgICAgICAgICAgIG1hcmdpblRvcD1cIjUwXCJcbiAgICAgICAgICAgICAgPnt7IG1hdGNoRGV0YWlscy52ZW51ZSB9fSAsIHt7IG1hdGNoRGV0YWlscy5wb3N0Q29kZSB9fTwvTGFiZWxcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L0ZsZXhCb3hMYXlvdXQ+XG4gICAgICAgICAgPEZsZXhCb3hMYXlvdXQgdi1pZj1cIiFtYXRjaERldGFpbHMudmVudWVcIiBmbGV4PVwiMVwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgY2xhc3M9XCJtLXQtMTBcIj5cbiAgICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgZm9udFNpemU9XCIxNlwiXG4gICAgICAgICAgICAgIG1hcmdpblRvcD1cIjUwXCJcbiAgICAgICAgICAgICAgPi0tLS0tLSwgLS0tLS08L0xhYmVsXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9GbGV4Qm94TGF5b3V0PlxuICAgICAgICAgIDxGbGV4Qm94TGF5b3V0IHYtaWY9XCJtYXRjaERldGFpbHMudmVudWVcIiBmbGV4PVwiMVwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8TGFiZWxcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgdGV4dEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwiMTZcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9XCIxMFwiXG4gICAgICAgICAgICAgID57eyBtYXRjaERldGFpbHMuZGF0ZSB9fSBAIHt7IG1hdGNoRGV0YWlscy50aW1lIH19PC9MYWJlbFxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvRmxleEJveExheW91dD5cbiAgICAgICAgICA8RmxleEJveExheW91dCB2LWlmPVwiIW1hdGNoRGV0YWlscy5kYXRlXCIgZmxleD1cIjFcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuICAgICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBmb250U2l6ZT1cIjE2XCJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiMTBcIlxuICAgICAgICAgICAgICA+LS0vLS0vLS0tLSAtLTotLTwvTGFiZWxcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L0ZsZXhCb3hMYXlvdXQ+XG4gICAgICAgICAgPEZsZXhCb3hMYXlvdXQgdi1pZj1cIm1hdGNoRGV0YWlscy5pZFwiIGZsZXg9XCIxXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBjbGFzcz1cIm0tdC0yNVwiPlxuICAgICAgICAgICAgPEJhc2VCdXR0b25XaXRoSWNvblxuICAgICAgICAgICAgICA6c3R5bGVPYmplY3Q9XCJ7XG4gICAgICAgICAgICAgICAgY29sb3I6IG1hdGNoRGV0YWlscy5teVN0YXR1cyA9PT0gMSA8PCAxID8gJyNmZjQzNTAnIDogJyM4ODhlOTAnLFxuICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgQGhhbmRsZU9uQ2xpY2s9XCJoYW5kbGVPbk5vQ2xpY2tcIlxuICAgICAgICAgICAgICB0ZXh0PVwiTm90IEluXCJcbiAgICAgICAgICAgICAgaWNvbj1cImZhLXRpbWVzLWNpcmNsZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJhc2VCdXR0b25XaXRoSWNvblxuICAgICAgICAgICAgICA6c3R5bGVPYmplY3Q9XCJ7XG4gICAgICAgICAgICAgICAgY29sb3I6IG1hdGNoRGV0YWlscy5teVN0YXR1cyA9PT0gMSA8PCAwID8gJ2dyZWVuJyA6ICcjODg4ZTkwJyxcbiAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgIEBoYW5kbGVPbkNsaWNrPVwiaGFuZGxlT25ZZXNDbGlja1wiXG4gICAgICAgICAgICAgIHRleHQ9XCJJIGFtIEluXCJcbiAgICAgICAgICAgICAgaWNvbj1cImZhLWNoZWNrLWNpcmNsZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmxleEJveExheW91dD5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPFN0YWNrTGF5b3V0IHdpZHRoPVwiMTAwJVwiIHBhZGRpbmc9XCIxMFwiPlxuICAgICAgICAgIDwhLS1BZGQgeW91ciBwYWdlIGNvbnRlbnQgaGVyZS0tPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgPC9TdGFja0xheW91dD5cbiAgICA8L1Njcm9sbFZpZXc+XG4gICAgPEZsZXhCb3hMYXlvdXQgZmxleD1cIjFcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGNsYXNzPVwibS10LTEwXCI+XG4gICAgICA8QmFzZUJ1dHRvblxuICAgICAgICA6Y2xhc3M9XCJ7ICdtLXQtMjAnOiB0cnVlLCAnLXByaW1hcnknOiB0cnVlIH1cIlxuICAgICAgICBAaGFuZGxlT25DbGljaz1cImhhbmRsZU9uVmlld0FsbE1hdGNoZXNDbGlja1wiXG4gICAgICAgIDpsb2FkaW5nPVwiZmFsc2VcIlxuICAgICAgICByZWZGcm9tUGFyZW50PVwidmlld2FsbG1hdGNoZXNcIlxuICAgICAgICB0ZXh0PVwiVmlldyBBbGwgTWF0Y2hlc1wiXG4gICAgICAvPiA8L0ZsZXhCb3hMYXlvdXRcbiAgPjwvU3RhY2tMYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG5TY3JvbGxWaWV3IHtcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbi50LTE2IHtcbiAgZm9udC1zaXplOiAxNjtcbn1cbi5pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSksXG4gICAgdXJsKCd+L2Fzc2V0cy9pbWFnZXMvaG9tZS5qcGcnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEFkZCB0aGUgYmx1ciBlZmZlY3QgKi9cbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgLW1vei1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgLW8tZmlsdGVyOiBibHVyKDVweCk7XG4gIC1tcy1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgZmlsdGVyOiBibHVyKDVweCk7XG4gIC5sb2FkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gIH1cbn1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9