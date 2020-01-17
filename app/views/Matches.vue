// @vue/component

<script>
import { mapState } from 'vuex'
import BaseCardListScrollView from '../components/BaseCardListScrollView.vue'
import BaseButtonWithIcon from '../components/BaseButtonWithIcon.vue'
import MatchForm from './MatchForm.vue'
import { AppRoles } from '../_shared/enum'
import { getAllMatches, updateMatchStatusForUser } from '../_shared/firebase/matches'
import { MatchStatus } from '../types/EMatchStatus'
import { MatchAvailabilityStatus } from '../types/EMatchAvailabilityStatus'

export default {
  name: 'Matches',
  components: { BaseCardListScrollView, BaseButtonWithIcon, MatchForm },
  data() {
    return {
      state: {
        loading: true,
        items: [],
        showModal: false,
      },
    }
  },
  computed: mapState({
    role: state => state.authenticationModule.userContext.role,
    uid: state => state.authenticationModule.userContext.uid,
    loading() {
      return this.state.loading
    },
    items() {
      return this.state.items
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
      console.log(`items :: ${JSON.stringify(this.state.items)}`)
    })
  },
  methods: {
    async getMatches() {
      try {
        const result = await getAllMatches(this.uid)
        if (!result.json.isError) {
          const matches = Object.values(result.json.data).map(match => {
            match.title = `Camels vs ${match.opponent}`
            match.statusIcon = match.status === MatchStatus.ON ? 'fa-toggle-on' : 'fa-toggle-off'
            match.body = `${match.venue} - ${match.date} @ ${match.time}`
            if (match.status === MatchStatus.ON) {
              match.showActionItems = true
              const matchDateTime = `${match.date
                .split('/')
                .reverse()
                .join('/')} ${match.time}`
              match.actionButtonDisabled =
                new Date(Date.parse(matchDateTime)).toLocaleString() < new Date().toLocaleString()
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
        }
        this.state = { ...this.state, loading: false }
      } catch (e) {
        this.state = { ...this.state, loading: false }
      }
    },
    async handleOnClick(event) {
      //   this.state = { ...this.state, showModal: true }
      this.$showModal(MatchForm, {
        props: {},
        fullscreen: false,
        animated: true,
        stretched: false,
        dimAmount: 0.5, // Sets the alpha of the background dim,
      })
    },
    async handleOnOkDialog(data) {
      this.state = { ...this.state, showModal: false }
    },
    async handleOnCancelDialog(data) {
      this.state = { ...this.state, showModal: false }
    },
    async handlOnCancel(data) {
      const result = await updateMatchStatusForUser(data.id, this.uid, MatchAvailabilityStatus.NO)
      if (!result.isError) {
        await this.getMatches()
      }
    },
    async handleOnOk(data) {
      const result = await updateMatchStatusForUser(data.id, this.uid, MatchAvailabilityStatus.YES)
      if (!result.isError) {
        await this.getMatches()
      }
    },
  },
}
</script>
<template>
  <StackLayout>
    <ActivityIndicator
      :visibility="state.loading ? 'visible' : 'collapse'"
      :busy="state.loading"
      width="20"
      height="20"
      class="loader"
    ></ActivityIndicator>
    <DockLayout v-if="role === 1" stretchLastChild="false">
      <BaseButtonWithIcon
        @handleOnClick="handleOnClick"
        text="New Match"
        icon="fa-plus-circle"
        doc="right"
      />
    </DockLayout>
    <StackLayout orientation="horizontal">
      <BaseCardListScrollView
        ref="list"
        :items="state.items"
        @handleOnCancel="handlOnCancel"
        @handleOnOk="handleOnOk"
      >
      </BaseCardListScrollView>
    </StackLayout>
  </StackLayout>
</template>

<style scoped lang="scss"></style>
