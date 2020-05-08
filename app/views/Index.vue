<script>
import { mapState, mapActions } from 'vuex'
import Login from './Login.vue'
import Home from './Home.vue'
import Account from './Account.vue'
import Matches from './Matches.vue'
import BaseIcon from '../components/BaseIcons.vue'
import { checkIfTokenIsValid } from '../_shared/firebase/users'
import { getUnreadMatchCount } from '../_shared/firebase/home'
import { Icons } from '../types/EIconName.ts'
import { IconStatus } from '../types/EIconStatus.ts'

export default {
  name: 'Index',
  components: { Home, Account, Matches, BaseIcon },
  props: {},
  data() {
    return {
      state: {
        loading: true,
        icons: Icons,
        iconStatus: IconStatus,
        item: {
          index: 0,
        },
        count: 0,
        title: {
          0: 'Home',
          1: 'Matches',
          2: 'Profile',
        },
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
  created: async function() {
    this.state.loading = true
    await this.checkAuthentication()
    await this.getUnreadMatchCount()
    this.state.loading = false
  },

  methods: {
    ...mapActions('authenticationModule', {
      setGlobalLoginState: 'signedIn',
    }),
    redirectToLogin() {
      this.$navigateTo(Login, { clearHistory: true })
    },
    async checkAuthentication() {
      const result = await checkIfTokenIsValid()
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
        this.state.count = result.json.count
      }
    },
    onTabItemTap(event) {
      this.state.item.index = event.index
    },
    handleOnMenuTap(index) {
      this.state.item.index = index
    },
    onHomeEventSetIndexCb(index) {
      this.state.item.index = index
    },
    async onMatchEventSetIndexCb() {
      await this.getUnreadMatchCount()
    },
    async handleOnAddNewItem() {
      await this.$refs.matchComponent.handleOnAddClick()
    },
  },
}
</script>

<template>
  <Page class="nt-page">
    <ActionBar :title="state.title[state.item.index]" class="nt-action-bar" flat="true">
      <ActionItem
        v-show="state.item.index === 1 && userContext.role === 1"
        @tap="handleOnAddNewItem"
        ios.systemIcon="4"
        android.systemIcon="ic_menu_add"
        ios:style="font-size:16"
        android:style="font-size:16"
        ios.position="right"
        android.position="right"
      ></ActionItem>
    </ActionBar>
    <ActivityIndicator
      :visibility="loading ? 'visible' : 'collapse'"
      :busy="loading"
      rowspan="3"
      class="nt-activity-indicator"
    />
    <StackLayout v-if="!loading">
      <StackLayout height="90%" width="100%">
        <Home
          v-if="state.item.index === 0 && !state.loading"
          @onHomeEventSetIndexCb="onHomeEventSetIndexCb"
          @onMatchEventSetIndexCb="onMatchEventSetIndexCb"
        />
        <Matches
          ref="matchComponent"
          v-if="state.item.index === 1 && !state.loading"
          @onMatchEventSetIndexCb="onMatchEventSetIndexCb"
        />
        <Account v-if="state.item.index === 2 && !state.loading" />
      </StackLayout>
      <StackLayout height="10%" class="bottomNavBar">
        <StackLayout orientation="horizontal">
          <StackLayout @tap="handleOnMenuTap(0)" class="navItem">
            <Label text android:class="notificationAndroid" ios:class="notification" opacity="0" />
            <BaseIcon
              :name="state.icons.Home"
              :state="state.item.index === 0 ? state.iconStatus.Active : state.iconStatus.Default"
              :size="24"
              android:style="margin-top:-15"
              ios:style="margin-top:-15"
            />
          </StackLayout>
          <StackLayout @tap="handleOnMenuTap(1)" class="navItem">
            <Label
              v-show="!state.count"
              text
              android:class="notificationAndroid"
              ios:class="notification"
              opacity="0"
            />
            <Label
              v-show="state.count"
              :text="state.count"
              android:class="notificationAndroid"
              ios:class="notification"
            />
            <BaseIcon
              :name="state.icons.Cricket"
              :state="state.item.index === 1 ? state.iconStatus.Active : state.iconStatus.Default"
              :size="24"
              android:style="margin-top:-15"
              ios:style="margin-top:-15"
            />
          </StackLayout>
          <StackLayout @tap="handleOnMenuTap(2)" class="navItem">
            <Label text android:class="notificationAndroid" ios:class="notification" opacity="0" />
            <BaseIcon
              :name="state.icons.Me"
              :state="state.item.index === 2 ? state.iconStatus.Active : state.iconStatus.Default"
              :size="24"
              android:style="margin-top:-15"
              ios:style="margin-top:-15"
            />
          </StackLayout>
        </StackLayout>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<style scoped lang="scss">
@import '~/_app.common';
/* bottom nav bar */
.bottomNavBar {
  background: $base-bg;
  padding: 1rem 0;
}
.notification {
  background: $accent;
  width: 25;
  height: 25;
  margin-top: 8%;
  margin-left: 42;
  border-radius: 30;
  z-index: 100;
  color: $base-bg;
  font-size: 13;
}

.notificationAndroid {
  background: $accent;
  width: 22;
  height: 22;
  margin-top: 12%;
  margin-left: 25;
  border-radius: 30;
  z-index: 100;
  color: $base-bg;
  font-size: 13;
  padding-top: 1;
}

.navItem {
  width: 33.33%;
  text-align: center;
}
</style>
