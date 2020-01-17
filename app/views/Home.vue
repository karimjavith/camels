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
  mounted: function() {
    this.$nextTick(function() {
      console.log(`Home :: mounted`)
      this.checkAuthentication()
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
      if (result.json && !result.json.verified) {
        this.$navigateTo(Login)
      }
      const { uid, role } = result.json.user
      this.setGlobalLoginState({ uid, role, loggedIn: true, token: this.userContext.token })
      this.state.loading = false
    },

    navigateToPasswordCreationPage() {
      this.$navigateTo(CreatePassword, { clearHistory: true })
    },
    onNavigationButtonTap() {
      // Frame.topmost().goBack()
    },
    onTabItemTap(event) {
      this.state = { ...this.state, item: { index: event.index } }
      console.log(this.state.item.index)
    },
  },
}
</script>

<template>
  <Page>
    <ActionBar>
      <StackLayout orientation="horizontal">
        <NavigationButton
          @tap="onNavigationButtonTap"
          text="Back"
          android-system-icon="ic_menu_back"
        />
        <Label text="Camels" font-size="18" vertical-alignment="center" />
      </StackLayout>
    </ActionBar>
    <BottomNavigation selected-index="0">
      <!-- The bottom tab UI is created via TabStrip (the containier) and TabStripItem (for each tab)-->
      <TabStrip @itemTap="onTabItemTap">
        <TabStripItem class="tabstripitem">
          <Label :text="'fa-home' | fonticon" class="fa t-16" />
          <Image src="font://&#xf00e;" class="fa hide"></Image>
        </TabStripItem>
        <TabStripItem name="matches" class="tabstripitem">
          <Label :text="'fa-running' | fonticon" class="fa t-16" />
          <Image src="font://&#xf00e;" class="fa hide"></Image>
        </TabStripItem>
        <TabStripItem class="tabstripitem">
          <Label :text="'fa-user-circle' | fonticon" class="fa t-16" />
          <Image src="font://&#xf00e;" class="fa hide"></Image>
        </TabStripItem>
      </TabStrip>

      <!-- The number of TabContentItem components should corespond to the number of TabStripItem components -->
      <TabContentItem>
        <StackLayout orientation="Horizontal">
          <Label v-if="!state.loading" text="Home" class="h2" />
        </StackLayout>
      </TabContentItem>
      <TabContentItem>
        <FlexBoxLayout flexDirection="column" flexGrow="1">
          <Label text="Matches" class="h2" height="70" />
          <Matches v-if="state.item.index === 1" />
        </FlexBoxLayout>
      </TabContentItem>
      <TabContentItem>
        <StackLayout>
          <Label text="Account" class="h2" />
          <Account />
        </StackLayout>
      </TabContentItem>
    </BottomNavigation>
  </Page>
</template>

<style scoped>
ActionBar {
  color: #ffffff;
}
.hide {
  height: 0;
  width: 0;
}

.title {
  text-align: left;
  padding-left: 16;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}

/* bottom-navigation */
TabStripItem.tabstripitem {
  background-color: teal;
}

TabStripItem.tabstripitem:active {
  background-color: yellowgreen;
}

.fas {
  font-family: 'Font Awesome 5 Free', 'fa-solid-900';
  font-weight: 900;
}

.t-16 {
  font-size: 16;
}
</style>
