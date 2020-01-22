// @vue/component

<script>
import { mapState, mapActions } from 'vuex'
import Invite from './Invite.vue'
import UserList from './UserList.vue'
import Login from './Login.vue'
import BaseListView from '../components/BaseListView.vue'
import { logout } from '../_shared/firebase/users.ts'
import { AppRoles } from '../_shared/enum'

export default {
  name: 'Account',
  components: { BaseListView },
  data() {
    return {
      state: {
        items: [
          {
            role: AppRoles.Admin,
            name: 'Invite',
            component: Invite,
            icon: 'fa-user-plus',
          },
          {
            role: AppRoles.Admin,
            name: 'Users',
            component: UserList,
            icon: 'fa-user',
          },
          {
            role: AppRoles.User,
            name: 'Sign out',
            icon: 'fa-power-off',
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
      if (event.item.name === 'Sign out') {
        return await this.onSignOutTap()
      }
      await this.$navigateTo(event.item.component)
    },
  },
}
</script>
<template>
  <StackLayout orientation="horizontal">
    <BaseListView @itemTap="onItemTap" :items="items" refFromParent="accountList"> </BaseListView>
  </StackLayout>
</template>

<style scoped lang="scss">
scrollview {
  height: 100%;
}
</style>
