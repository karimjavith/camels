<script>
import { mapState } from 'vuex'
import Login from './Login.vue'
import Account from './Account.vue'
export default {
  name: 'Home',
  components: { Account },
  data() {
    return {
      msg: 'Hello world!!',
      currentView: null,
    }
  },
  computed: mapState({
    token: state => state.authenticationModule.userContext.token,
    role: state => state.authenticationModule.userContext.role,
  }),
  mounted: function() {
    this.$nextTick(function() {
      this.checkAuthentication()
    })
  },

  methods: {
    redirectToLogin() {
      this.$navigateTo(Login)
    },
    checkAuthentication() {
      if (!this.token) {
        this.$navigateTo(Login)
      }
    },
    onNavigationButtonTap() {
      Frame.topmost().goBack()
    },
    onHomeTap() {
      this.msg = 'Hello world!!'
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
      <TabStrip>
        <TabStripItem>
          <Label :text="'fa-home' | fonticon" class="fa t-16" />
        </TabStripItem>
        <TabStripItem>
          <Label :text="'fa-running' | fonticon" class="fa t-16" />
        </TabStripItem>
        <TabStripItem>
          <Label :text="'fa-user-circle' | fonticon" class="fa t-16" />
        </TabStripItem>
      </TabStrip>

      <!-- The number of TabContentItem components should corespond to the number of TabStripItem components -->
      <TabContentItem>
        <StackLayout orientation="Horizontal">
          <Label text="Home" class="h2" />
        </StackLayout>
      </TabContentItem>
      <TabContentItem>
        <StackLayout orientation="Horizontal">
          <Label text="Matches" class="h2" />
        </StackLayout>
      </TabContentItem>
      <TabContentItem>
        <StackLayout>
          <Label text="Account" class="h2" />
          <account />
        </StackLayout>
      </TabContentItem>
    </BottomNavigation>
  </Page>
</template>

<style scoped>
ActionBar {
  color: #ffffff;
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
