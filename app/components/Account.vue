// @vue/component

<script>
import { mapState, mapActions } from "vuex";
import Invite from "./Invite.vue";
import Login from "./Login.vue";
import { logout } from "../_shared/firbase.ts";

export default {
  name: "Account",
  data() {
    return {
      items: [
        {
          role: 1,
          name: "Invite",
          component: Invite,
          src:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        },
        {
          name: "Sign out",
          type: 1,
          src:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        }
      ]
    };
  },
  computed: mapState({
    role: state => state.authenticationModule.userContext.role,
    entitledItems(state) {
      return this.items.filter(x => {
        if (x.type === 1) return true;
        return x.role === this.role;
      });
    }
  }),
  methods: {
    ...mapActions("authenticationModule", {
      clearGlobalLoginState: "signedOut"
    }),
    async onSignOutTap() {
      const result = await logout();
      this.clearGlobalLoginState();
      this.$navigateTo(Login);
    },
    async onItemTap(event) {
      if (event.item.name === "Sign out") {
        return await this.onSignOutTap();
      }
      this.$navigateTo(event.item.component);
    }
  }
};
</script>
<template>
  <!-- <ScrollView class="scrollview"> -->
  <StackLayout orientation="horizontal">
    <ListView
      for="item in entitledItems"
      class="list-group"
      @itemTap="onItemTap"
    >
      <v-template>
        <!-- Shows the list item label in the default color and style. -->
        <GridLayout class="list-group-item" rows="*" columns="auto, *">
          <Image row="0" col="0" :src="item.src" class="thumb img-circle" />
          <Label row="0" col="1" :text="item.name" />
        </GridLayout>
      </v-template>
    </ListView>
  </StackLayout>
  <!-- </ScrollView> -->
</template>

<style scoped lang="scss">
.scrollview {
  height: 100%;
}
</style>
