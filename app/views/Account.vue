// @vue/component

<script>
import { mapState, mapActions } from 'vuex'
import Invite from './Invite.vue'
import Login from './Login.vue'
import ListScrollView from '../components/ListScrollView.vue'
import { logout } from '../_shared/firbase.ts'
import { AppRoles } from '../_shared/enum'

export default {
  name: 'Account',
  components: { ListScrollView },
  data() {
    return {
      items: [
        {
          role: AppRoles.Admin,
          name: 'Invite',
          component: Invite,
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        },
        {
          role: AppRoles.User,
          name: 'Sign out',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        },
      ],
    }
  },
  computed: mapState({
    role: state => state.authenticationModule.userContext.role,
    entitledItems(state) {
      return this.items.filter(x => {
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
      const result = await logout()
      this.clearGlobalLoginState()
      this.$navigateTo(Login)
    },
    async onItemTap(event) {
      if (event.item.name === 'Sign out') {
        return await this.onSignOutTap()
      }
      this.$navigateTo(event.item.component)
    },
  },
}
</script>
<template>
  <StackLayout orientation="horizontal">
    <ListScrollView
      ref="list"
      :items="entitledItems"
      :pullToRefresh="false"
      :itemReorder="false"
      :swipeActions="false"
      @itemTap="onItemTap"
    >
    </ListScrollView>
  </StackLayout>
</template>

<style scoped lang="scss">
scrollview {
  height: 100%;
}
</style>
