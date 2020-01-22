// @vue/component

<script>
import { mapState } from 'vuex'
import MatchDetails from './MatchDetails.vue'
import BaseCardListScrollView from '../components/BaseCardListScrollView.vue'
import BaseButtonWithIcon from '../components/BaseButtonWithIcon.vue'
import MatchForm from './MatchForm.vue'
import Login from './Login.vue'
import { AppRoles } from '../_shared/enum'
import { getAllMatches, updateMatchStatusForUser, removeMatch } from '../_shared/firebase/matches'
import { MatchStatus } from '../types/EMatchStatus'
import { MatchAvailabilityStatus } from '../types/EMatchAvailabilityStatus'
import { HttpStatusCode } from '../_shared/http/http'

export default {
  name: 'Matches',
  components: { BaseCardListScrollView, BaseButtonWithIcon },
  data() {
    return {
      state: {
        loading: true,
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
              match.title = `Camels vs ${match.opponent}`
              match.statusIcon = 'fa-dot-circle'
              match.statusIconStyle =
                match.status === MatchStatus.ON ? { color: 'green' } : { color: 'grey' }
              match.body = `${match.venue} - ${new Date(match.date).toLocaleDateString()} @ ${
                match.time
              }`
              match.showEditOption = this.role === AppRoles.Admin
              match.showDeleteOption = this.role === AppRoles.Admin
              if (match.status === MatchStatus.ON) {
                match.showActionItems = true
                const matchDateTime = `${match.date
                  .split('/')
                  .reverse()
                  .join('-')} ${match.time}`
                match.actionButtonDisabled = new Date(matchDateTime) < new Date()
                match.cancelText = match.actionButtonDisabled ? `Not Played` : `Not in`
                match.okText = match.actionButtonDisabled ? `Played` : `I am in`
                if (match.myStatus === MatchAvailabilityStatus.YES) {
                  match.okTextIcon = 'fa-check-circle'
                  match.okTextStyles = { color: 'green' }
                } else if (match.myStatus === MatchAvailabilityStatus.NO) {
                  match.cancelTextIcon = 'fa-times-circle'
                  match.cancelTextStyles = { color: 'red' }
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
      this.$showModal(MatchForm, {
        props: {
          cb: this.handleModalCb,
          itemId: item && item.id,
          venue: item && item.venue,
          postCode: item && item.postCode,
          date: item && item.date,
          time: item && item.time,
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
    },
    async handleOnItemClick(item) {
      if (this.role === AppRoles.Admin) {
        this.$showModal(MatchDetails, {
          props: {
            role: this.role,
            matchId: item.id,
            uid: this.uid,
          },
          fullscreen: false,
          animated: true,
          stretched: true,
          dimAmount: 0.5, // Sets the alpha of the background dim,
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
        await this.getMatches()
      }
      this.state = { ...this.state, loading: false }
    },
    async handleOnOk(data) {
      this.state = { ...this.state, loading: true }
      const result = await updateMatchStatusForUser(data.id, this.uid, MatchAvailabilityStatus.YES)
      if (!result.isError) {
        await this.getMatches()
      }
      this.state = { ...this.state, loading: false }
    },
  },
}
</script>
<template>
  <StackLayout>
    <ActivityIndicator
      :visibility="loading ? 'visible' : 'collapse'"
      :busy="loading"
      width="20"
      height="20"
      class="loader nt-activity-indicator"
    ></ActivityIndicator>
    <DockLayout v-if="role === 1" stretchLastChild="false">
      <BaseButtonWithIcon
        @handleOnClick="handleOnCreateMatchClick"
        text="New Match"
        icon="fa-plus-circle"
        doc="right"
      />
    </DockLayout>
    <StackLayout orientation="horizontal">
      <BaseCardListScrollView
        :items="state.items"
        @handleOnItemClick="handleOnItemClick"
        @handleOnItemEdit="handleOnItemEdit"
        @handleOnItemDelete="handleOnItemDelete"
        @handleOnCancel="handlOnCancel"
        @handleOnOk="handleOnOk"
        refFromParent="matchesCardList"
      ></BaseCardListScrollView>
    </StackLayout>
  </StackLayout>
</template>

<style scoped lang="scss"></style>
