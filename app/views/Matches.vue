// @vue/component

<script>
import { mapState } from 'vuex'
import { topmost } from 'tns-core-modules/ui/frame'
import { ToastService } from '../_shared/Toasty'
import MatchDetails from './MatchDetails.vue'
import BaseCard from '../components/BaseCard.vue'
import MatchForm from './MatchForm.vue'
import Login from './Login.vue'
import { AppRoles } from '../_shared/enum'
import { getAllMatches, updateMatchStatusForUser, removeMatch } from '../_shared/firebase/matches'
import { MatchStatus } from '../types/EMatchStatus'
import { MatchAvailabilityStatus } from '../types/EMatchAvailabilityStatus.ts'
import { HttpStatusCode } from '../_shared/http/http'
import DateService from '../_shared/date.ts'
import { loader as Loader, options } from '../_shared/loader.ts'
import { Icons } from '../types/EIconName.ts'

export default {
  name: 'Matches',
  components: { BaseCard },
  data() {
    return {
      state: {
        icons: Icons,
        items: [],
        itemsLoaded: false,
      },
    }
  },
  computed: mapState({
    role: state => state.authenticationModule.userContext.role,
    uid: state => state.authenticationModule.userContext.uid,
  }),
  created: async function() {
    Loader.show(options)
    await this.getMatches()
  },
  mounted: function() {},
  updated: function() {
    if (topmost().ios) {
      let navigationBar = topmost().ios.controller.navigationBar
      navigationBar.translucent = false
      // eslint-disable-next-line no-undef
      navigationBar.setBackgroundImageForBarMetrics(UIImage.new(), UIBarMetrics.Default)
      // eslint-disable-next-line no-undef
      navigationBar.shadowImage = UIImage.new()
    }
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
              match.key = `${match.id} - ${match.opponent}`
              match.title = match.opponent
              match.body = `${match.venue} - ${new Date(match.date).toLocaleDateString()} @ ${
                match.time
              }`
              match.showEditOption = this.role === AppRoles.Admin
              if (match.status === MatchStatus.ON) {
                match.showActionItems = true
                match.actionItemText = 'Can you play?'
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
        Loader.hide()
      } catch (e) {
        Loader.hide()
      }
      this.state = { ...this.state, itemsLoaded: true }
    },
    async handleOnAddClick(item) {
      const matchDate =
        item && item.date
          ? DateService.toLocalDateFormat(item.date)
          : DateService.toLocalDateFormat(new Date())
      const matchTime =
        item && item.time
          ? DateService.toLocalTimeFormat(item.time)
          : DateService.toLocalTimeFormat('00:00')

      this.$navigateTo(MatchForm, {
        props: {
          cb: this.handleModalCb,
          itemId: item && item.id,
          venue: item && item.venue,
          postCode: item && item.postCode,
          date: item && matchDate,
          time: item && matchTime,
          opponent: item && item.opponent,
        },
      })
    },
    async handleModalCb() {
      await this.getMatches()
      this.$refs.matchList.nativeView.refresh()
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
        this.handleOnAddClick(item)
      }
    },
    async handleOnItemDelete(item) {
      const acknowledge = await confirm({
        title: 'Delete Match',
        message: `Are you sure that you want to delete match vs ${item.opponent}`,
        okButtonText: 'Yes, I confirm',
        cancelButtonText: 'No, ignore',
      })
      Loader.show(options)
      if (acknowledge) {
        const result = await removeMatch(item.id)
        if (result && !result.isError) {
          await this.getMatches()
          this.$refs.matchList.nativeView.refresh()
          await this.$emit('onMatchEventSetIndexCb', 1)
        }
      }
      Loader.hide()
    },
    async handlOnCancel(data) {
      const result = await updateMatchStatusForUser(data.id, this.uid, MatchAvailabilityStatus.NO)
      if (!result.isError) {
        ToastService('All done. Try to make it for next match', '#a5d6a7').show()
        await this.$emit('onMatchEventSetIndexCb', 1)
      } else {
        data.cb(data.cancelIsActive, data.okIsActive)
        ToastService('Oops! Try again later', '#ffbfc4').show()
      }
    },
    async handleOnOk(data) {
      const result = await updateMatchStatusForUser(data.id, this.uid, MatchAvailabilityStatus.YES)
      if (!result.isError) {
        ToastService('Cool! See you on the field', '#a5d6a7').show()
        await this.$emit('onMatchEventSetIndexCb', 1)
      } else {
        data.cb(data.cancelIsActive, data.okIsActive)
        ToastService('Oops! Try again later', '#ffbfc4').show()
      }
    },
  },
}
</script>
<template>
  <StackLayout class="container">
    <GridLayout rows="*">
      <FlexBoxLayout
        v-if="state.items.length === 0 && state.itemsLoaded"
        flex="1"
        row="0"
        justifyContent="center"
        class="m-t-10"
      >
        <Label class="nt-label h3" text="No schedule yet.." />
      </FlexBoxLayout>
      <ListView
        ref="matchList"
        v-if="state.items.length > 0"
        for="item in state.items"
        height="100%"
        row="1"
        separatorColor="transparent"
      >
        <v-template>
          <StackLayout class="item" orientation="vertical">
            <BaseCard
              :key="item.key"
              @handleOnItemClick="handleOnItemClick"
              @handleOnItemEdit="handleOnItemEdit"
              @handleOnItemDelete="handleOnItemDelete"
              @handleOnCancel="handlOnCancel"
              @handleOnOk="handleOnOk"
              :item="item"
              :shouldUpdateLocalState="true"
              refFromParent="matchesCardList"
            />
          </StackLayout>
        </v-template>
      </ListView>
    </GridLayout>
  </StackLayout>
</template>

<style scoped lang="scss">
@import '~/_app.common';
.container {
  background-color: $base-bg;
}
.item {
  @extend .container;
}
</style>
