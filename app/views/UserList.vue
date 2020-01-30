// @vue/component

<script>
import { mapState, mapActions } from 'vuex'
import BaseListView from '../components/BaseListView.vue'
import { getAllUsers, updateUser, removeUser } from '../_shared/firebase/users.ts'
import { AppRoles } from '../_shared/enum'
import { Icons } from '../types/EIconName.ts'

export default {
  name: 'UserList',
  components: { BaseListView },
  data() {
    return {
      state: {
        loading: true,
        items: [],
      },
    }
  },
  computed: mapState({
    role: state => state.authenticationModule.userContext.role,
    loading() {
      return this.state.loading
    },
    items() {
      return this.state.items
    },
  }),
  created: function() {
    this.state.loading = true
    console.log(`UserList :: created`)
  },
  mounted: function() {
    console.log(`UserList :: mounted`)
    this.$nextTick(function() {
      this.getUserList()
    })
  },
  updated: function() {
    console.log(`UserList :: updated`)
    this.$nextTick(function() {
      console.log(`loading :: ${this.state.loading}`)
      console.log(`items :: ${JSON.stringify(this.state.items)}`)
    })
  },
  methods: {
    async getUserList() {
      const result = await getAllUsers()
      if (!result.isError) {
        const userList = result.json.users.map(user => {
          user.primaryText = user.displayName
          user.primaryIcon = Icons.Me
          if (user.role === AppRoles.Admin) {
            user.primaryTag = Icons.Admin
          }
          return user
        })
        this.state = {
          ...this.state,
          items: userList,
        }
      }
      this.state = { ...this.state, loading: false }
      return
    },
    async onItemTap(event) {},
    async onItemDeleted(item) {
      const message = `Are you sure you want to remove the camel ?`
      const okButtonText = `Yes, I confirm`
      const cancelButtonText = `Keep the camel`
      const promptPromise = await prompt({
        title: 'Remove camel',
        message,
        okButtonText,
        cancelButtonText,
      })
      if (promptPromise.result) {
        this.state = {
          ...this.state,
          loading: true,
        }
        const result = await removeUser(item.uid)
        if (!result.isError) {
          await this.getUserList()
        }
      }
      this.state = {
        ...this.state,
        loading: false,
      }
    },
    async onItemMarked(item) {
      const message =
        item.role !== AppRoles.Admin
          ? `Assign admin role to ${item.name} ?`
          : `Remove admin access ?`
      const okButtonText = item.role !== AppRoles.Admin ? `Assign` : `Remove access`
      const cancelButtonText = item.role !== AppRoles.Admin ? `Don't assign` : `Keep the role`
      const promptPromise = await prompt({
        title: 'Admin role',
        message,
        okButtonText,
        cancelButtonText,
      })
      if (promptPromise.result) {
        this.state = {
          ...this.state,
          loading: true,
        }
        const result = await updateUser(item.uid, {
          displayName: item.displayName,
          role: item.role === AppRoles.Admin ? AppRoles.User : AppRoles.Admin,
        })
        if (!result.isError) {
          await this.getUserList()
        }
      }
      this.state = {
        ...this.state,
        loading: false,
      }
    },
    onNavigationButtonTap() {
      this.$navigateBack()
    },
  },
}
</script>
<template>
  <Page class="nt-page">
    <ActionBar class="nt-action-bar" title="Users">
      <NavigationButton
        @tap="onNavigationButtonTap"
        ios.systemIcon="9"
        ios.position="left"
        text="Back"
        android.systemIcon="ic_menu_back"
      ></NavigationButton>
    </ActionBar>
    <StackLayout orientation="horizontal">
      <ActivityIndicator
        :visibility="state.loading ? 'visible' : 'collapse'"
        :busy="state.loading"
        class="loader nt-activity-indicator"
      ></ActivityIndicator>
      <StackLayout v-show="!state.loading" class="m-12">
        <BaseListView
          :items="state.items"
          @itemTap="onItemTap"
          @itemDeleted="onItemDeleted"
          @itemMarked="onItemMarked"
          :swipeActions="true"
          refFromParent="userList"
        ></BaseListView>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<style scoped lang="scss">
.loader {
  margin-left: 175;
  vertical-align: middle;
  align-items: center;
  flex-direction: column;
}
Scrollview {
  height: 100%;
}
</style>
