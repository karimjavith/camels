// @vue/component

<script>
import { mapState, mapActions } from "vuex";
import Login from "./Login.vue";
import Account from "./Account.vue";
import { TAuthState } from "../types/TState";
export default {
  name: "Home",
  components: { Account },
  mounted: function() {
    this.$nextTick(function() {
      this.checkAuthentication();
    });
  },
  data() {
    return {
      msg: "Hello world!!",
      currentView: null
    };
  },

  computed: mapState({
    token: state => state.authenticationModule.userContext.token,
    role: state => state.authenticationModule.userContext.role
  }),
  methods: {
    redirectToLogin() {
      this.$navigateTo(Login);
    },
    checkAuthentication() {
      if (!this.token) {
        this.$navigateTo(Login);
      }
    },
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
    onHomeTap() {
      this.msg = "Hello world!!";
    }
  }
};
</script>

<template>
  <Page>
    <ActionBar>
      <StackLayout orientation="horizontal">
        <NavigationButton
          text="Back"
          android.systemIcon="ic_menu_back"
          @tap="onNavigationButtonTap"
        ></NavigationButton>
        <Label text="Camels" fontSize="18" verticalAlignment="center" />
      </StackLayout>
    </ActionBar>
    <BottomNavigation selectedIndex="0">
      <!-- The bottom tab UI is created via TabStrip (the containier) and TabStripItem (for each tab)-->
      <TabStrip>
        <TabStripItem>
          <Label text="Home"></Label>
          <Image src="font://&#xf015;" class="fas t-36"></Image>
        </TabStripItem>
        <TabStripItem class="special">
          <Label text="Matches"></Label>
          <Image src="font://&#xf007;" class="fas t-36"></Image>
        </TabStripItem>
        <TabStripItem class="special">
          <Label text="Me"></Label>
          <Image src="font://&#xf00e;" class="fas t-36"></Image>
        </TabStripItem>
      </TabStrip>

      <!-- The number of TabContentItem components should corespond to the number of TabStripItem components -->
      <TabContentItem>
        <StackLayout orientation="Horizontal">
          <Label text="Home" class="h2"></Label>
        </StackLayout>
      </TabContentItem>
      <TabContentItem>
        <StackLayout orientation="Horizontal">
          <Label text="Matches" class="h2"></Label>
        </StackLayout>
      </TabContentItem>
      <TabContentItem>
        <StackLayout>
          <Label text="Account" class="h2"></Label>
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

TabContentItem.first-tabcontent {
  background-color: seashell;
  color: olive;
}
TabContentItem.second-tabcontent {
  background-color: slategray;
  color: aquamarine;
}
TabContentItem.third-tabcontent {
  background-color: blueviolet;
  color: antiquewhite;
}

.fas {
  font-family: "Font Awesome 5 Free", "fa-solid-900";
  font-weight: 900;
}

.t-36 {
  font-size: 36;
}
</style>
