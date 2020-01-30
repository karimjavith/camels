// @vue/component

<script>
import BaseListView from '../components/BaseListView.vue'
import { getMatchDetailsForAdmin, getMatchDetailsForUser } from '../_shared/firebase/matches'
import { AppRoles } from '../_shared/enum'
import { MatchAvailabilityStatus } from '../types/EMatchAvailabilityStatus'
import { Icons } from '../types/EIconName.ts'
import { IconStatus } from '../types/EIconStatus.ts'

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
  created: function() {
    this.state.loading = true
    console.log(`MatchDetails :: created`)
  },
  mounted: function() {
    console.log(`MatchDetails :: mounted`)
    this.$nextTick(function() {
      this.getMatchDetails()
    })
  },
  updated: function() {
    console.log(`MatchDetails :: updated`)
    this.$nextTick(function() {
      console.log(`loading :: ${this.state.loading}`)
      console.log(`items :: ${JSON.stringify(this.state.items)}`)
    })
  },
  methods: {
    async getMatchDetails() {
      const matchDetailsPromise =
        this.role === AppRoles.Admin
          ? getMatchDetailsForAdmin(this.matchId)
          : getMatchDetailsForUser(this.matchId, this.uid)
      const result = await matchDetailsPromise
      if (!result.isError) {
        const userList = Object.values(result.json.data.squad).map(user => {
          user.primaryText = user.displayName || 'Unknown'
          if (user.status in MatchAvailabilityStatus) {
            user.primaryIcon =
              user.status === MatchAvailabilityStatus.YES
                ? this.state.icons.Yes
                : this.state.icons.No
            user.primaryIconState =
              user.status === MatchAvailabilityStatus.YES ? IconStatus.Success : IconStatus.Error
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
        width="20"
        height="20"
        class="loader nt-activity-indicator"
        rowspan="3"
      ></ActivityIndicator>
      <StackLayout v-show="!state.loading" orientation="vertical" class="nt-form" row="0">
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
  flex-grow: 2;
  vertical-align: middle;
}
ScrollView {
  height: 70%;
}
.modal {
  margin: 20;
  margin-top: 35;
  border-radius: 8;
  horizontal-align: center;
  vertical-align: middle;
  background-color: $bg-color;
  width: 80%;
}

.modal-container {
  padding: 25;
  padding-bottom: 10;
}
</style>
