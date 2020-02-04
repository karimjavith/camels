// @vue/component

<script>
import { mapState } from 'vuex'
import { topmost } from 'tns-core-modules/ui/frame'
import MatchDetails from './MatchDetails.vue'
import BaseCard from '../components/BaseCard.vue'
import BaseButtonWithIcon from '../components/BaseButtonWithIcon.vue'
import MatchForm from './MatchForm.vue'
import Login from './Login.vue'
import { AppRoles } from '../_shared/enum'
import { getAllMatches, updateMatchStatusForUser, removeMatch } from '../_shared/firebase/matches'
import { MatchStatus } from '../types/EMatchStatus'
import { MatchAvailabilityStatus } from '../types/EMatchAvailabilityStatus.ts'
import { HttpStatusCode } from '../_shared/http/http'
import DateService from '../_shared/date.ts'
import { Icons } from '../types/EIconName.ts'

export default {
  name: 'Matches',
  components: { BaseButtonWithIcon, BaseCard },
  data() {
    return {
      state: {
        loading: true,
        icons: Icons,
        items: [],
      },
    }
  },
  computed: mapState({
    role: state => state.authenticationModule.userContext.role,
    uid: state => state.authenticationModule.userContext.uid,
    loading() {
      return this.state.loading
    },
  }),
  created: function() {
    this.state.loading = true
    console.log(`Matches :: created`)
  },
  mounted: function() {
    console.log(`Matches :: mounted`)
    this.$nextTick(function() {
      this.getMatches()
    })
  },
  updated: function() {
    if (topmost().ios) {
      let navigationBar = topmost().ios.controller.navigationBar
      navigationBar.translucent = false
      // eslint-disable-next-line no-undef
      navigationBar.setBackgroundImageForBarMetrics(UIImage.new(), UIBarMetrics.Default)
      // eslint-disable-next-line no-undef
      navigationBar.shadowImage = UIImage.new()
    }
    console.log(`Matches :: updated`)
    this.$nextTick(function() {
      console.log(`loading :: ${this.state.loading}`)
    })
  },
  methods: {
    async getMatches() {
      try {
        const result = await getAllMatches(this.uid)
        if (result.status === HttpStatusCode.Unauthorized) {
          this.$navigateTo(Login, { clearHistory: true })
        }
        if (!result.isError) {
          const { data, count } = result.json
          if (count > 0) {
            const matches = Object.values(data).map(match => {
              match.title = match.opponent
              match.body = `${match.venue} - ${new Date(match.date).toLocaleDateString()} @ ${
                match.time
              }`
              match.showEditOption = this.role === AppRoles.Admin
              match.showDeleteOption = this.role === AppRoles.Admin
              if (match.status === MatchStatus.ON) {
                match.showActionItems = true
                match.actionItemText = 'Are you game?'
                const matchDateTime = `${match.date
                  .split('/')
                  .reverse()
                  .join('-')} ${match.time}`
                match.actionButtonDisabled = new Date(matchDateTime) < new Date()
                match.okIcon = Icons.Yes
                match.cancelIcon = Icons.No
                if (match.myStatus === MatchAvailabilityStatus.YES) {
                  match.okIsActive = true
                } else if (match.myStatus === MatchAvailabilityStatus.NO) {
                  match.cancelIsActive = true
                }
              }
              return match
            })
            this.state = {
              ...this.state,
              items: matches,
            }
          } else {
            this.state = {
              ...this.state,
              items: [],
            }
          }
        }
        this.state = { ...this.state, loading: false }
      } catch (e) {
        this.state = { ...this.state, loading: false }
      }
    },
    async handleOnCreateMatchClick(item) {
      const matchDate = item.date
        ? DateService.toLocalDateFormat(item.date)
        : DateService.toLocalDateFormat(new Date())
      const matchTime = item.time
        ? DateService.toLocalTimeFormat(item.time)
        : DateService.toLocalTimeFormat(new Date())
      this.$showModal(MatchForm, {
        props: {
          cb: this.handleModalCb,
          itemId: item && item.id,
          venue: item && item.venue,
          postCode: item && item.postCode,
          date: item && matchDate,
          time: item && matchTime,
          opponent: item && item.opponent,
        },
        fullscreen: false,
        animated: true,
        stretched: true,
        dimAmount: 0.5, // Sets the alpha of the background dim,
      })
    },
    async handleModalCb() {
      this.state = { ...this.state, loading: true }
      await this.getMatches()
      this.$emit('onMatchEventSetIndexCb', 1)
    },
    async handleOnItemClick(item) {
      if (this.role === AppRoles.Admin) {
        this.$navigateTo(MatchDetails, {
          props: {
            role: this.role,
            matchId: item.id,
            uid: this.uid,
          },
        })
      }
    },
    async handleOnItemEdit(item) {
      if (this.role === AppRoles.Admin) {
        this.handleOnCreateMatchClick(item)
      }
    },
    async handleOnItemDelete(item) {
      const acknowledge = await confirm({
        title: 'Delete Match',
        message: `Are you sure that you want to delete match vs ${item.opponent}`,
        okButtonText: 'Yes, I confirm',
        cancelButtonText: 'No, ignore',
      })
      if (acknowledge) {
        this.state = { ...this.state, loading: true }
        const result = await removeMatch(item.id)
        console.log(result)
        if (result && !result.isError) {
          await this.getMatches()
        }
      }
    },
    async handlOnCancel(data) {
      this.state = { ...this.state, loading: true }
      const result = await updateMatchStatusForUser(data.id, this.uid, MatchAvailabilityStatus.NO)
      if (!result.isError) {
        await this.$emit('onMatchEventSetIndexCb', 1)
        const updatedItems = this.state.items.map(x => {
          if (x.id === data.id) {
            x.myStatus = MatchAvailabilityStatus.NO
            x.cancelIsActive = true
            x.okIsActive = false
          }
          return x
        })
        this.state = { ...this.state, ...this.state.items, ...updatedItems }
      }
      this.state = { ...this.state, loading: false }
    },
    async handleOnOk(data) {
      this.state = { ...this.state, loading: true }
      const result = await updateMatchStatusForUser(data.id, this.uid, MatchAvailabilityStatus.YES)
      if (!result.isError) {
        await this.$emit('onMatchEventSetIndexCb', 1)
        const updatedItems = this.state.items.map(x => {
          if (x.id === data.id) {
            x.myStatus = MatchAvailabilityStatus.YES
            x.cancelIsActive = false
            x.okIsActive = true
          }
          return x
        })

        this.state = { ...this.state, ...this.state.items, ...updatedItems }
      }
      this.state = { ...this.state, loading: false }
    },
  },
}
</script>
<template>
  <StackLayout orientation="horizonatal">
    <ActivityIndicator
      :visibility="loading ? 'visible' : 'collapse'"
      :busy="loading"
      width="20"
      height="20"
      class="loader nt-activity-indicator"
    ></ActivityIndicator>
    <BaseButtonWithIcon
      :primary="false"
      @handleOnClick="handleOnCreateMatchClick"
      :icon="state.icons.Cricket"
      text="New Match"
    />
    <StackLayout>
      <FlexBoxLayout
        v-if="state.items.length === 0 && !loading"
        flex="1"
        justifyContent="center"
        class="m-t-10"
      >
        <Label class="nt-label h3" text="No schedule yet.." />
      </FlexBoxLayout>
      <ScrollView v-if="state.items.length > 0">
        <ListView for="item in state.items">
          <v-template>
            <BaseCard
              @handleOnItemClick="handleOnItemClick"
              @handleOnItemEdit="handleOnItemEdit"
              @handleOnItemDelete="handleOnItemDelete"
              @handleOnCancel="handlOnCancel"
              @handleOnOk="handleOnOk"
              :item="item"
              refFromParent="matchesCardList"
            />
          </v-template>
        </ListView>
      </ScrollView>
    </StackLayout>
  </StackLayout>
</template>

<style scoped lang="scss">
ScrollView {
  height: 100%;
}
</style>
