// @vue/component

<script>
import { mapState, mapActions } from 'vuex'
import Invite from './Invite.vue'
import UserList from './UserList.vue'
import ChangePassword from './ChangePassword.vue'
import Login from './Login.vue'
import BaseListView from '../components/BaseListView.vue'
import { logout } from '../_shared/firebase/users.ts'
import { AppRoles } from '../_shared/enum'
import { Icons } from '../types/EIconName.ts'

export default {
  name: 'Account',
  components: { BaseListView },
  data() {
    return {
      state: {
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
    items() {
      return this.state.items.filter(x => {
        if (x.role === AppRoles.User) return true
        return x.role === this.role
      })
    },
  }),
  methods: {
    ...mapActions('authenticationModule', {
      clearGlobalLoginState: 'signedOut',
    }),
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
  <StackLayout>
    <StackLayout alignItems="center">
      <Image src="~/assets/images/profile.png" class="accountPic"></Image>
    </StackLayout>

    <StackLayout class="m-12">
      <BaseListView @itemTap="onItemTap" :items="items" refFromParent="accountList"></BaseListView>
    </StackLayout>
  </StackLayout>
</template>

<style scoped lang="scss">
scrollview {
  height: 100%;
  .accountPic {
    width: 150;
    height: 150;
    border-radius: 100;
    margin: 20;
    border-color: #4db8ff;
    border-width: 1;
  }
}
</style>
