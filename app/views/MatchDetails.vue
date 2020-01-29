// @vue/component

<script>
import BaseListView from '../components/BaseListView.vue'
import { getMatchDetailsForAdmin, getMatchDetailsForUser } from '../_shared/firebase/matches'
import { AppRoles } from '../_shared/enum'
import { MatchAvailabilityStatus } from '../types/EMatchAvailabilityStatus'
import { Icons } from '../types/EIconName.ts'

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
          user.name = user.displayName || 'Unknown'
          user.icon = this.state.icons.Me
          if (user.status in MatchAvailabilityStatus) {
            user.secondaryIcon =
              user.status === MatchAvailabilityStatus.YES
                ? this.state.icons.Yes
                : this.state.icons.No
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
  },
}
</script>
<template>
  <ModalStack class="modal-container">
    <StackLayout class="modal">
      <ActivityIndicator
        :visibility="state.loading ? 'visible' : 'collapse'"
        :busy="state.loading"
        width="20"
        height="20"
        class="loader nt-activity-indicator"
      ></ActivityIndicator>
      <StackLayout v-show="!state.loading" orientation="vertical" class="nt-form m-l-15  m-r-15">
        <Label class="h2 p-b-15 nt-label" text="User Status List" />
        <ScrollView orientation="horizontal" scrollBarIndicatorVisible="false"
          ><BaseListView :items="state.items" refFromParent="userStatuslist"> </BaseListView
        ></ScrollView>
      </StackLayout>
      <StackLayout orientation="horizontal">
        <Button @tap="$modal.close" text="close" class="-primary nt-button -rounded-lg" />
      </StackLayout>
    </StackLayout>
  </ModalStack>
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
