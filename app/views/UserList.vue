// @vue/component

<script>
import { mapState, mapActions } from 'vuex'
import BaseListScrollView from '../components/BaseListScrollView.vue'
import { getAllUsers, updateUser, removeUser } from '../_shared/firebase/users.ts'
import { AppRoles } from '../_shared/enum'

export default {
  name: 'UserList',
  components: { BaseListScrollView },
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
          user.name = user.displayName
          user.icon = `fa-user`
          if (user.role === AppRoles.Admin) {
            user.secondaryIcon = 'fa-universal-access'
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
      this.$refs.userlist.refresh()
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
      this.$refs.userlist.refresh()
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
  <Page>
    <ActionBar>
      <Button @tap="onNavigationButtonTap" text="Back" />
    </ActionBar>
    <StackLayout orientation="horizontal">
      <ActivityIndicator
        :visibility="state.loading ? 'visible' : 'collapse'"
        :busy="state.loading"
        width="20"
        height="20"
        class="loader"
      ></ActivityIndicator>
      <StackLayout v-show="!state.loading" orientation="horizontal">
        <BaseListScrollView
          ref="userlist"
          :items="state.items"
          @itemTap="onItemTap"
          @itemDeleted="onItemDeleted"
          @itemMarked="onItemMarked"
          :swipeActions="true"
        >
        </BaseListScrollView>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<style scoped lang="scss">
ActionBar {
  background-color: #ffffff;
}
.loader {
  margin-left: 30;
  margin-right: 30;
  flex-grow: 2;
  vertical-align: middle;
}
Scrollview {
  height: 100%;
}
</style>
