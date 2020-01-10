// @vue/component

<script>
import { mapState, mapActions } from "vuex";
import Login from "./Login.vue";
import InviteComponent from "./Invite.vue";
import { TAuthState } from "../types/TState";
import { logout } from "../_shared/firbase.ts";
export default {
  name: "Home",
  components: { InviteComponent },
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
    ...mapActions("authenticationModule", {
      clearGlobalLoginState: "signedOut"
    }),
    redirectToLogin() {
      this.$navigateTo("Login");
    },
    checkAuthentication() {
      if (!this.token) {
        this.$navigateTo("Login");
      }
    },
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
    async onSignOutTap() {
      const result = await logout();
      this.clearGlobalLoginState();
      this.$navigateTo(Login);
    },
    onInviteTap() {
      this.$refs.drawer.nativeView.toggleDrawerState();
      this.currentView = "Invite";
    },
    onHomeTap() {
      this.msg = "Hello world!!";
      this.$refs.drawer.nativeView.toggleDrawerState();
      this.currentView = "";
    },
    onMenuTap() {
      this.$refs.drawer.nativeView.toggleDrawerState();
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
        <Button text="menu" @tap="onMenuTap" />
        <Label text="Camels" fontSize="18" verticalAlignment="center" />
      </StackLayout>
    </ActionBar>

    <RadSideDrawer ref="drawer" class="sideStackLayout">
      <StackLayout ~drawerContent>
        <Button class="drawer-item" text="Home" @tap="onHomeTap" />
        <Button
          class="drawer-item"
          v-if="role === 1"
          text="Invite"
          @tap="onInviteTap"
        />
        <Button class="drawer-item" text="Sign out" @tap="onSignOutTap" />
      </StackLayout>

      <StackLayout ~mainContent>
        <Label :text="msg" v-if="!currentView" class="drawerContentText" />
        <StackLayout orientation="Horizontal" v-if="currentView === 'Invite'">
          <invite-component />
        </StackLayout>
      </StackLayout>
    </RadSideDrawer>
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

.drawer-header {
  padding: 50 16 16 16;
  margin-bottom: 16;
  /* background-color: #c19a6b; */
  /* color: #ffffff; */
  font-size: 24;
}

.drawer-item {
  padding: 8 16;
  color: #333333;
  font-size: 16;
}
</style>
