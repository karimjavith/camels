// @vue/component

<script>
import BaseListView from '../components/BaseListView.vue'
import { getMatchDetailsForAdmin, getMatchDetailsForUser } from '../_shared/firebase/matches'
import { AppRoles } from '../_shared/enum'
import { MatchAvailabilityStatus } from '../types/EMatchAvailabilityStatus'
import { Icons } from '../types/EIconName.ts'
import { IconStatus } from '../types/EIconStatus.ts'
import { HttpStatusCode } from '../_shared/http/http'
import Login from '../views/Login'

export default {
  name: 'MatchDetails',
  components: { BaseListView },
  props: {
    role: {
      type: Number,
      default: 0,
    },
    matchId: {
      type: String,
      default: '',
    },
    uid: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      state: {
        loading: true,
        items: [],
        icons: Icons,
      },
    }
  },
  computed: {
    loading() {
      return this.state.loading
    },
    items() {
      return this.state.items
    },
  },
  created: async function() {
    this.state.loading = true
    await this.getMatchDetails()
  },
  methods: {
    async getMatchDetails() {
      const matchDetailsPromise =
        this.role === AppRoles.Admin
          ? getMatchDetailsForAdmin(this.matchId)
          : getMatchDetailsForUser(this.matchId, this.uid)
      const result = await matchDetailsPromise
      if (result.status === HttpStatusCode.Unauthorized) {
        this.$navigateTo(Login, { clearHistory: true })
      }
      if (!result.isError) {
        const userList = Object.values(result.json.data.squad).map(user => {
          user.primaryText = user.displayName || 'Unknown'
          //   if (user.type) {
          // const type = Object.entries(user.type).find(([key, value]) => value)[0]

          user.primaryIcon = Icons.Cricket
          //   }
          if (user.status in MatchAvailabilityStatus) {
            user.secondaryIconState =
              user.status === MatchAvailabilityStatus.YES ? IconStatus.Active : IconStatus.Default
            user.secondaryLabel = user.status === MatchAvailabilityStatus.YES ? 'YES' : 'NO'
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

    onNavigationButtonTap() {
      this.$navigateBack()
    },
  },
}
</script>
<template>
  <Page class="nt-page">
    <ActionBar class="nt-action-bar" title="Squad status">
      <NavigationButton
        @tap="onNavigationButtonTap"
        ios.systemIcon="9"
        ios.position="left"
        text="Back"
        android.systemIcon="ic_menu_back"
      ></NavigationButton>
    </ActionBar>
    <StackLayout>
      <ActivityIndicator
        :visibility="state.loading ? 'visible' : 'collapse'"
        :busy="state.loading"
        class="loader nt-activity-indicator"
      ></ActivityIndicator>
      <StackLayout v-if="!state.loading" orientation="vertical" class="m-12" row="0">
        <ScrollView orientation="horizontal" scrollBarIndicatorVisible="false">
          <BaseListView :items="state.items" refFromParent="userStatuslist"></BaseListView>
        </ScrollView>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<style scoped lang="scss">
@import '~/_app.common';
.loader {
  margin-left: 30;
  margin-right: 30;
  vertical-align: middle;
  align-content: center;
  justify-items: center;
  height: 100%;
}
ScrollView {
  height: 100%;
}
</style>
