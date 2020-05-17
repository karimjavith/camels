// @vue/component

<script>
import { mapState } from 'vuex'
import { getProfile, updateProfile } from '../_shared/firebase/profile.ts'

export default {
  name: 'Profile',
  components: {},
  data() {
    return {
      state: {
        loading: true,
        items: {},
        playerType: ['batsman', 'bowler', 'wicketKeeper', 'allRounder'],
        selectedType: '',
      },
    }
  },
  computed: mapState({
    loading() {
      return this.state.loading
    },
    items() {
      return this.state.items
    },
    uid: state => state.authenticationModule.userContext.uid,
  }),
  created: async function() {
    this.state.loading = true
    await this.getProfileDetails()
  },
  methods: {
    async getProfileDetails() {
      const result = await getProfile(this.uid)
      if (!result.isError) {
        const items = result.json.profile
        this.state = { ...this.state, items, loading: false }
        return null
      }
      this.state = { ...this.state, loading: false }
      return null
    },
    async handleOnTypeChange(event) {
      const name = event.object.name
      try {
        await updateProfile(this.uid, { ...this.state.items.type, [name]: event.value })
      } catch (e) {
        this.state.items.type = { ...this.state.items.type, [name]: !event.value }
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
    <ActionBar class="nt-action-bar" title="Profile">
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
      <StackLayout v-show="!state.loading" class="m-t-16">
        <FlexBoxLayout class="type"><Label>I am a ...</Label></FlexBoxLayout>
        <FlexBoxLayout :key="type" v-for="type in state.playerType" class="type">
          <Label>{{ type.toString().toLocaleUpperCase() }}</Label>
          <Switch :name="type" @checkedChange="handleOnTypeChange" v-if="!state.items.type" />
          <Switch
            :name="type"
            @checkedChange="handleOnTypeChange"
            v-else
            :checked="state.items.type[type]"
          />
        </FlexBoxLayout>
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
.type {
  width: 100%;
  padding: 12 24;
  justify-content: space-between;
}
Scrollview {
  height: 100%;
}
</style>
