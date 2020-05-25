// @vue/component

<script>
import { mapState } from 'vuex'
import { topmost } from 'tns-core-modules/ui/frame'
import { ToastService } from '../_shared/Toasty'
import MatchDetails from './MatchDetails.vue'
import BaseMatchCard from '../components/BaseMatchCard.vue'
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
  components: { BaseMatchCard },
  data() {
    return {
      state: {
        icons: Icons,
        items: [],
        itemsLoaded: false,
        loading: true,
      },
    }
  },
  computed: mapState({
    role: state => state.authenticationModule.userContext.role,
    uid: state => state.authenticationModule.userContext.uid,
  }),
  created: function() {
    this.getMatches()
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
              const totalSquad = Object.values(match.totalSquad).filter(x => x.status === 1).length
              const key = `${match.id} - ${match.opponent}`
              const title = match.opponent
              const body = `${match.venue} - ${new Date(match.date).toLocaleDateString()} @ ${
                match.time
              }`
              const showEditOption = this.role === AppRoles.Admin
              let showActionItems = false
              let actionItemText = ''
              let matchDateTime = ''
              let actionButtonDisabled = false
              let okIcon = ''
              let cancelIcon = ''
              let okIsActive = false
              let cancelIsActive = false
              if (match.status === MatchStatus.ON) {
                showActionItems = true
                actionItemText = 'Can you play?'
                matchDateTime = `${match.date
                  .split('/')
                  .reverse()
                  .join('-')} ${match.time}`
                actionButtonDisabled = new Date(matchDateTime) < new Date()
                okIcon = Icons.Yes
                cancelIcon = Icons.No
                if (match.myStatus === MatchAvailabilityStatus.YES) {
                  okIsActive = true
                } else if (match.myStatus === MatchAvailabilityStatus.NO) {
                  cancelIsActive = true
                }
              }
              return {
                id: match.id,
                venue: match.venue,
                postCode: match.postCode,
                date: match.date,
                time: match.time,
                opponent: match.opponent,
                totalSquad,
                key,
                title,
                body,
                showEditOption,
                showActionItems,
                actionItemText,
                actionButtonDisabled,
                okIcon,
                cancelIcon,
                cancelIsActive,
                okIsActive,
              }
            })
            this.state.items = matches
          } else {
            this.state.items = []
          }
        }
      } catch (e) {
        console.log(e)
      }
      this.state.itemsLoaded = true
      this.state.loading = false
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
      this.state.loading = true
      if (acknowledge) {
        const result = await removeMatch(item.id)
        if (result && !result.isError) {
          await this.getMatches()
          this.$refs.matchList.nativeView.refresh()
          await this.$emit('onMatchEventSetIndexCb', 1)
        }
      }
      this.state.loading = false
    },
    async handlOnCancel(data) {
      const result = await updateMatchStatusForUser(data.id, this.uid, MatchAvailabilityStatus.NO)
      if (!result.isError) {
        ToastService('All done. Try to make it for next match', '#a5d6a7', '#3a7e3c').show()
        await this.$emit('onMatchEventSetIndexCb', 1)
      } else {
        data.cb(data.cancelIsActive, data.okIsActive, data.totalSquad)
        ToastService('Oops! Try again later', '#ffbfc4', '#ff4350').show()
      }
    },
    async handleOnOk(data) {
      const result = await updateMatchStatusForUser(data.id, this.uid, MatchAvailabilityStatus.YES)
      if (!result.isError) {
        ToastService('Cool! See you on the field', '#a5d6a7', '#3a7e3c').show()
        await this.$emit('onMatchEventSetIndexCb', 1)
      } else {
        data.cb(data.cancelIsActive, data.okIsActive, data.totalSquad)
        ToastService('Oops! Try again later', '#ffbfc4', '#ff4350').show()
      }
    },
  },
}
</script>
<template>
  <StackLayout class="container">
    <GridLayout rows="*">
      <Label
        v-if="!state.loading && !state.items.length"
        class="nt-label h3"
        text="No schedule yet.."
      />
      <ListView v-show="state.loading" for="item in [1, 2]" height="100%" row="1"
        ><v-template>
          <StackLayout class="placeholder--card">
            <FlexBoxLayout class="placeholder--card-content">
              <FlexBoxLayout
                alignItems="center"
                justifyContent="center"
                marginTop="16"
                class="placeholder--card-content__teamholder"
              >
                <StackLayout marginRight="48"
                  ><Label class="h4 placeholder--card-content__circle" marginTop="4"
                /></StackLayout>
                <StackLayout marginLeft="48"
                  ><Label class="h4 placeholder--card-content__circle" marginTop="4"
                /></StackLayout>
              </FlexBoxLayout>
              <FlexBoxLayout
                flexDirection="column"
                alignItems="center"
                alignContent="center"
                marginTop="16"
              >
                <Label class="h4 placeholder--card-content__line" marginTop="4" />
              </FlexBoxLayout>
              <FlexBoxLayout
                flexDirection="column"
                alignItems="center"
                alignContent="center"
                marginTop="16"
              >
                <Label class="h4 placeholder--card-content__line" marginTop="4" />
              </FlexBoxLayout>
            </FlexBoxLayout>
          </StackLayout> </v-template
      ></ListView>

      <ListView
        ref="matchList"
        v-show="!state.loading && state.items.length > 0"
        for="item in state.items"
        height="100%"
        row="1"
      >
        <v-template>
          <BaseMatchCard
            :key="item.key"
            @handleOnItemClick="handleOnItemClick"
            @handleOnItemEdit="handleOnItemEdit"
            @handleOnItemDelete="handleOnItemDelete"
            @handleOnCancelCb="handlOnCancel"
            @handleOnOkCb="handleOnOk"
            :item="item"
            :shouldUpdateLocalState="true"
            refFromParent="matchesCardList"
          />
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
.nt-label {
  text-align: center;
}
.placeholder {
  &--card {
    height: 300;
    &-content {
      justify-content: center;
      flex-direction: column;
      &__teamholder {
        height: 64;
      }
      &__circle {
        width: 64;
        height: 64;
        border-radius: 50%;
        background-color: $hovered-bg;
      }
      &__line {
        border-radius: 25%;
        min-width: 250;
        height: 32;
        background-color: $hovered-bg;
      }
    }
  }
}
</style>
