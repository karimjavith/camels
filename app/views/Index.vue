<script>
var getViewById = require('tns-core-modules/ui/core/view').getViewById
import { mapState, mapActions } from 'vuex'
import Login from './Login.vue'
import Home from './Home.vue'
import Account from './Account.vue'
import Matches from './Matches.vue'
import { checkIfTokenIsValid } from '../_shared/firebase/users'
import { getUnreadMatchCount } from '../_shared/firebase/home'

export default {
  name: 'Index',
  components: { Home, Account, Matches },
  props: {},
  data() {
    return {
      state: {
        loading: true,
        item: {
          index: 0,
        },
        count: 0,
      },
    }
  },
  computed: {
    loading() {
      return this.state.loading
    },

    ...mapState({
      userContext: state => state.authenticationModule.userContext,
    }),
  },
  created: function() {
    console.log(`Index :: Created`)
  },
  mounted: function() {
    this.$nextTick(function() {
      console.log(`Index :: mounted`)
      this.checkAuthentication().then(async result => {
        if (result.status === 1) {
          await this.getUnreadMatchCount()
        }

        this.state = { ...this.state, loading: false }
      })
    })
  },
  updated: function() {
    this.$nextTick(function() {
      console.log(`count ---- ${this.state.count}`)
      console.log(`Index :: updated`)
    })
  },

  methods: {
    ...mapActions('authenticationModule', {
      setGlobalLoginState: 'signedIn',
    }),
    redirectToLogin() {
      this.$navigateTo(Login)
    },
    async checkAuthentication() {
      const result = await checkIfTokenIsValid()
      console.log(result)
      if (result && result.isError) {
        this.redirectToLogin()
      }
      const { uid, role } = result.json.user
      this.setGlobalLoginState({ uid, role, loggedIn: true, token: this.userContext.token })
      return { status: 1 }
    },
    async getUnreadMatchCount() {
      const result = await getUnreadMatchCount(this.userContext.uid)
      if (result && !result.isError) {
        this.state = { ...this.state, count: result.json.count }
        this.$nextTick(function() {})
      }
    },
    onTabItemTap(event) {
      this.state = { ...this.state, item: { index: event.index } }
    },
    handleOnMenuTap(index) {
      this.state = { ...this.state, item: { index } }
    },
    onHomeEventSetIndexCb(index) {
      this.state = { ...this.state, item: { index } }
    },
    async onMatchEventSetIndexCb() {
      await this.getUnreadMatchCount()
    },
  },
}
</script>

<template>
  <Page actionBarHidden="true" class="nt-page">
    <DockLayout>
      <StackLayout dock="top" height="93%" width="100%" style="">
        <Home
          v-if="state.item.index === 0"
          @onHomeEventSetIndexCb="onHomeEventSetIndexCb"
          @onMatchEventSetIndexCb="onMatchEventSetIndexCb"
        />
        <Matches v-if="state.item.index === 1" @onMatchEventSetIndexCb="onMatchEventSetIndexCb" />
        <Account v-if="state.item.index === 2" />
      </StackLayout>
      <StackLayout dock="bottom" height="7%" class="bottomNavBar">
        <StackLayout orientation="horizontal">
          <StackLayout @tap="handleOnMenuTap(0)" class="navItem">
            <Label
              text=""
              android:class="notificationAndroid"
              ios:class="notification"
              opacity="0"
            />
            <Label
              :class="{ active: state.item.index === 0 }"
              android:style="font-size:25;margin-top:-15"
              ios:style="font-size:30;margin-top:-15"
              class="fas"
              >{{ 'fa-home' | fonticon }}</Label
            >
          </StackLayout>
          <StackLayout @tap="handleOnMenuTap(1)" class="navItem">
            <Label
              :text="state.count"
              android:class="notificationAndroid"
              ios:class="notification"
            />
            <Label
              :class="{ active: state.item.index === 1 }"
              android:style="font-size:25;margin-top:-15"
              ios:style="font-size:30;margin-top:-15"
              class="fas"
              >{{ 'fa-quidditch' | fonticon }}</Label
            >
          </StackLayout>
          <StackLayout @tap="handleOnMenuTap(2)" class="navItem">
            <Label
              text=""
              android:class="notificationAndroid"
              ios:class="notification"
              opacity="0"
            />
            <Label
              :class="{ active: state.item.index === 2 }"
              text=""
              android:style="font-size:25;margin-top:-15"
              ios:style="font-size:30;margin-top:-15"
              class="fas"
            />
          </StackLayout>
        </StackLayout>
      </StackLayout>
    </DockLayout>
  </Page>
</template>

<style scoped lang="scss">
@import '~/_app.common.scss';
.active {
  color: $accent;
}

.t-16 {
  font-size: 16;
}
/* bottom nav bar */
.bottomNavBar {
  background: $bg-color;
}

.notification {
  background: red;
  width: 25;
  height: 25;
  margin-top: 8%;
  margin-left: 25;
  border-radius: 30;
  z-index: 100;
  color: #fff;
  font-size: 13;
}

.notificationAndroid {
  background: red;
  width: 22;
  height: 22;
  margin-top: 12%;
  margin-left: 25;
  border-radius: 30;
  z-index: 100;
  color: #fff;
  font-size: 13;
  padding-top: 1;
}

.navItem {
  width: 33.33%;
  text-align: center;
}
</style>
