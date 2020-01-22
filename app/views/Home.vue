<script>
import { mapState, mapActions } from 'vuex'
import Login from './Login.vue'
import Account from './Account.vue'
import Matches from './Matches.vue'
import { checkIfTokenIsValid } from '../_shared/firebase/users.ts'
import CreatePassword from './CreatePassword.vue'

export default {
  name: 'Home',
  components: { Account, Matches },
  props: {},
  data() {
    return {
      state: {
        loading: true,
        item: {
          index: 0,
        },
      },
    }
  },
  computed: mapState({
    userContext: state => state.authenticationModule.userContext,
    loading() {
      return this.state.loading
    },
  }),
  created: function() {
    console.log(`Home :: Created`)
  },
  mounted: function() {
    this.$nextTick(function() {
      console.log(`Home :: mounted`)
      this.checkAuthentication()
    })
  },
  updated: function() {
    this.$nextTick(function() {
      console.log(`Home :: updated`)
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
      this.state = { ...this.state, loading: false }
    },
    onTabItemTap(event) {
      this.state = { ...this.state, item: { index: event.index } }
    },
  },
}
</script>

<template>
  <Page actionBarHidden="true" class="nt-page">
    <ActivityIndicator :busy="state.loading" class="nt-activity-indicator"></ActivityIndicator>
    <BottomNavigation selected-index="0" class="nt-bottom-navigation">
      <!-- The bottom tab UI is created via TabStrip (the containier) and TabStripItem (for each tab)-->
      <TabStrip @itemTap="onTabItemTap" class="nt-tab-strip">
        <TabStripItem class="tabstripitem nt-tab-strip__item">
          <Image src="~/assets/images/fa-home.svg" class="hide"></Image>
          <Label :text="'fa-home' | fonticon" class="fa t-16 nt-label" />
        </TabStripItem>
        <TabStripItem name="matches" class="tabstripitem nt-tab-strip__item">
          <Image src="~/assets/images/fa-home.svg" class="hide"></Image>
          <Label :text="'fa-baseball-ball' | fonticon" class="fa t-16 nt-label" />
        </TabStripItem>
        <TabStripItem class="tabstripitem nt-tab-strip__item">
          <Image src="~/assets/images/fa-home.svg" class="hide"></Image>
          <Label :text="'fa-user-circle' | fonticon" class="fa t-16 nt-label" />
        </TabStripItem>
      </TabStrip>

      <!-- The number of TabContentItem components should corespond to the number of TabStripItem components -->
      <TabContentItem class="nt-tab-content__item">
        <StackLayout orientation="Horizontal">
          <Label v-if="!state.loading" text="Home" class="h2 p-10 nt-label" />
        </StackLayout>
      </TabContentItem>
      <TabContentItem class="nt-tab-content__item">
        <FlexBoxLayout flexDirection="column" flexGrow="1">
          <Label text="Matches" class="h2 m-10 nt-label" height="70" />
          <Matches v-if="state.item.index === 1" />
        </FlexBoxLayout>
      </TabContentItem>
      <TabContentItem class="nt-tab-content__item">
        <StackLayout>
          <Label text="Account" class="h2 p-10 nt-label" />
          <Account />
        </StackLayout>
      </TabContentItem>
    </BottomNavigation>
  </Page>
</template>

<style scoped lang="scss">
/* bottom-navigation */
.tabstripitem {
  .hide {
    display: none;
  }
}
TabStripItem.tabstripitem:active {
  font-weight: 500;
}

.t-16 {
  font-size: 16;
}
</style>
