// @vue/component
<template>
  <Page>
    <ActionBar>
      <StackLayout orientation="horizontal">
        <Image
          src="~/assets/images/NativeScript-Vue.png"
          width="40"
          height="40"
          verticalAlignment="center"
        />
        <Label text="Camels" fontSize="24" verticalAlignment="center" />
      </StackLayout>
    </ActionBar>

    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent backgroundColor="#ffffff">
        <Label class="drawer-header" text="Home" />

        <Label class="drawer-item" text="Item 1" />
        <Label class="drawer-item" text="Item 2" />
        <Label class="drawer-item" text="Item 3" />
      </StackLayout>

      <GridLayout ~mainContent columns="*" rows="*">
        <Label class="message" :text="msg" col="0" row="0" />
      </GridLayout>
    </RadSideDrawer>
  </Page>
</template>

<script lang="ts">
export default {
  data() {
    return {
      msg: "Hello World!"
    };
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #c19a6b;
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
  background-color: #c19a6b;
  color: #ffffff;
  font-size: 24;
}

.drawer-item {
  padding: 8 16;
  color: #333333;
  font-size: 16;
}
</style>
