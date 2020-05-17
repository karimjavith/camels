// @vue/component

<script>
import { mapState, mapActions } from 'vuex'
import Invite from './Invite.vue'
import UserList from './UserList.vue'
import Profile from './Profile.vue'
import ChangePassword from './ChangePassword.vue'
import Login from './Login.vue'
import BaseIcon from '../components/BaseIcons.vue'
import { logout } from '../_shared/firebase/users.ts'
import { AppRoles } from '../_shared/enum'
import { Icons } from '../types/EIconName.ts'

export default {
  name: 'Account',
  components: { BaseIcon },
  data() {
    return {
      state: {
        loading: true,
        defaultMeIcon: Icons.Me,
        items: [
          {
            role: AppRoles.Admin,
            primaryText: 'Invite',
            component: Invite,
            primaryIcon: Icons.Invite,
          },
          {
            role: AppRoles.Admin,
            primaryText: 'Users',
            component: UserList,
            primaryIcon: Icons.Users,
          },
          {
            role: AppRoles.User,
            primaryText: 'Profile',
            component: Profile,
            primaryIcon: Icons.Users,
          },
          {
            role: AppRoles.User,
            primaryText: 'Change Password',
            component: ChangePassword,
            primaryIcon: Icons.ChangePassword,
          },
          {
            role: AppRoles.User,
            primaryText: 'Sign out',
            primaryIcon: Icons.SignOut,
          },
        ],
      },
    }
  },
  computed: mapState({
    role: state => state.authenticationModule.userContext.role,
  }),
  created: async function() {
    await this.loadItems()
    this.state.loading = false
  },
  methods: {
    ...mapActions('authenticationModule', {
      clearGlobalLoginState: 'signedOut',
    }),
    async loadItems() {
      this.state = {
        ...this.state,
        items: this.state.items.filter(x => {
          if (x.role === AppRoles.User) return true
          return x.role === this.role
        }),
      }
    },
    async onSignOutTap() {
      await logout()
      this.clearGlobalLoginState()
      this.$navigateTo(Login, { clearHistory: true })
    },
    async onItemTap(event) {
      if (event.item.primaryText === 'Sign out') {
        return await this.onSignOutTap()
      }
      await this.$navigateTo(event.item.component)
    },
  },
}
</script>
<template>
  <StackLayout class="container">
    <ActivityIndicator
      :visibility="state.loading ? 'visible' : 'collapse'"
      :busy="state.loading"
      class="nt-activity-indicator"
    />
    <GridLayout v-if="!state.loading" rows="150, *">
      <FlexBoxLayout justifyContent="center" class="m-24" row="0">
        <BaseIcon :name="state.defaultMeIcon" :size="64" />
      </FlexBoxLayout>

      <StackLayout class="m-24" row="1">
        <ListView
          v-if="!state.loading"
          @itemTap="onItemTap"
          for="item in state.items"
          separatorColor="transparent"
          height="100%"
        >
          <v-template>
            <GridLayout columns="50, *" rows="*" class="item">
              <BaseIcon
                :name="item.primaryIcon"
                :state="item.primaryIconState"
                :size="20"
                col="0"
                class="primaryIcon"
              />
              <FlexBoxLayout rowspan="2" col="1">
                <label :text="item.primaryText" class="primaryText" />
                <BaseIcon v-if="item.primaryTag" :name="item.primaryTag" class="primaryTag" />
                <label :text="item.secondaryText" class="secondaryText p" />
                <BaseIcon
                  v-if="item.secondaryIcon"
                  :name="item.secondaryIcon"
                  :state="item.secondaryIconState"
                  class="secondaryIcon"
                />
              </FlexBoxLayout>
            </GridLayout>
          </v-template>
        </ListView>
      </StackLayout>
    </GridLayout>
  </StackLayout>
</template>

<style scoped lang="scss">
@import '~/_app.common';
.container {
  background-color: $base-bg;
}
.item {
  height: 60;
  @extend .container;
}
.nt-activity-indicator {
  height: 100%;
}
</style>
