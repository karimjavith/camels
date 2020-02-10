<script>
import { mapState } from 'vuex'
import Login from './Login.vue'
import { getUpcomingMatchDetails, patchUserMatchStatus } from '../_shared/firebase/home'
import { ToastService } from '../_shared/Toasty'
import BaseButtonWithIcon from '../components/BaseButtonWithIcon.vue'
import BaseButton from '../components/BaseButton.vue'
import { MatchAvailabilityStatus } from '../types/EMatchAvailabilityStatus.ts'
import { HttpStatusCode } from '../_shared/http/http'
import { Icons } from '../types/EIconName.ts'
import { IconStatus } from '../types/EIconStatus.ts'
import { loader as Loader, options } from '../_shared/loader.ts'

export default {
  name: 'Home',
  components: { BaseButtonWithIcon, BaseButton },
  props: {},
  data() {
    return {
      state: {
        upcomingMatch: {},
        icons: Icons,
        iconStatus: IconStatus,
        availabilityStatus: MatchAvailabilityStatus,
      },
    }
  },
  computed: mapState({
    userContext: state => state.authenticationModule.userContext,
    matchDetails() {
      return this.state.upcomingMatch
    },
  }),
  created: function() {
    Loader.show(options)
    this.$nextTick(function() {
      console.log(`Home :: mounted`)
      this.getUpcomingMatchDetails()
    })
  },

  methods: {
    async getUpcomingMatchDetails() {
      const result = await getUpcomingMatchDetails(this.userContext.uid)
      if (result.status === HttpStatusCode.Unauthorized) {
        this.$navigateTo(Login, { clearHistory: true })
      }
      if (result && !result.isError) {
        console.log(`-------------`)
        console.log(`Upcoming match details`)
        if (result.json.count > 0) {
          const matchDetails = Object.values(result.json.match)[0]
          console.log(matchDetails)
          console.log(`----------------`)
          this.state = {
            ...this.state,
            upcomingMatch: { ...matchDetails, date: new Date(matchDetails.date).toDateString() },
          }
        }
      }

      Loader.hide()
    },
    async handleOnNoClick() {
      Loader.show(options)
      const result = await patchUserMatchStatus(this.matchDetails.id, {
        uid: this.userContext.uid,
        status: MatchAvailabilityStatus.NO,
      })
      if (!result.isError) {
        this.$emit('onMatchEventSetIndexCb', 0)
        this.state = {
          ...this.state,
          upcomingMatch: {
            ...this.state.upcomingMatch,
            myStatus: this.state.availabilityStatus.NO,
          },
        }
        ToastService('All done', '#a5d6a7').show()
      }
      Loader.hide()
    },
    async handleOnYesClick() {
      Loader.show(options)
      const result = await patchUserMatchStatus(this.matchDetails.id, {
        uid: this.userContext.uid,
        status: MatchAvailabilityStatus.YES,
      })
      if (!result.isError) {
        this.$emit('onMatchEventSetIndexCb', 0)
        this.state = {
          ...this.state,
          upcomingMatch: {
            ...this.state.upcomingMatch,
            myStatus: this.state.availabilityStatus.YES,
          },
        }
        ToastService('All done', '#a5d6a7').show()
      }
      Loader.hide()
    },
    handleOnViewAllMatchesClick() {
      this.$emit('onHomeEventSetIndexCb', 1)
    },
  },
}
</script>

<template>
  <DockLayout class="image">
    <ScrollView dock="top" height="80%">
      <GridLayout rows="auto, auto, auto, auto, auto, auto" height="auto">
        <FlexBoxLayout row="0" flexDirection="column">
          <Label
            v-if="Boolean(matchDetails.opponent)"
            :marginTop="matchDetails.myStatus !== state.availabilityStatus.NOTRESPONDED ? 150 : 50"
            text="Upcoming match!"
            color="white"
            textAlignment="center"
            textTransform="uppercase"
            class="h2"
          />
        </FlexBoxLayout>
        <FlexBoxLayout row="1" flexDirection="column">
          <Label
            :marginTop="Boolean(matchDetails.opponent) ? 25 : 150"
            text="Camels"
            color="white"
            textAlignment="center"
            class="h2"
            textTransform="uppercase"
          />
          <Label text="VS" color="white" textAlignment="center" fontSize="16" marginTop="10" />
          <Label
            v-if="!matchDetails.opponent"
            text="-----"
            color="white"
            textAlignment="center"
            class="h2"
            marginTop="10"
            textTransform="uppercase"
          />
          <Label
            v-if="matchDetails.opponent"
            :text="matchDetails.opponent"
            color="white"
            textAlignment="center"
            class="h2"
            marginTop="10"
            textTransform="uppercase"
          />
        </FlexBoxLayout>
        <FlexBoxLayout
          v-if="matchDetails.venue"
          row="2"
          flex="1"
          justifyContent="center"
          class="m-t-10"
        >
          <Label color="white" fontWeight="bold" textAlignment="center" class="h3" marginTop="50"
            >{{ matchDetails.venue }} , {{ matchDetails.postCode }}</Label
          >
        </FlexBoxLayout>
        <FlexBoxLayout
          v-if="!matchDetails.venue"
          row="2"
          flex="1"
          justifyContent="center"
          class="m-t-10"
        >
          <Label color="white" fontWeight="bold" textAlignment="center" class="h4" marginTop="50"
            >------, -----</Label
          >
        </FlexBoxLayout>
        <FlexBoxLayout v-if="matchDetails.venue" row="3" flex="1" justifyContent="center">
          <Label color="white" fontWeight="bold" textAlignment="center" class="h3" marginTop="10"
            >{{ matchDetails.date }} @ {{ matchDetails.time }}</Label
          >
        </FlexBoxLayout>
        <FlexBoxLayout v-if="!matchDetails.date" row="3" flex="1" justifyContent="center">
          <Label color="white" fontWeight="bold" textAlignment="center" class="h4" marginTop="10"
            >--/--/---- --:--</Label
          >
        </FlexBoxLayout>
        <FlexBoxLayout
          v-if="matchDetails.myStatus === state.availabilityStatus.NOTRESPONDED"
          row="4"
          flex="1"
          justifyContent="center"
        >
          <Label color="white" fontWeight="bold" textAlignment="center" class="h2" marginTop="25"
            >Are you game?</Label
          >
        </FlexBoxLayout>
        <FlexBoxLayout
          v-if="matchDetails.myStatus === state.availabilityStatus.NOTRESPONDED"
          row="5"
          flex="1"
          justifyContent="center"
          class="m-t-5 p-l-15 p-r-15"
        >
          <BaseButtonWithIcon
            @handleOnClick="handleOnNoClick"
            :icon="state.icons.No"
            :isActive="matchDetails.myStatus === state.availabilityStatus.NO"
            text="Not In"
          />
          <BaseButtonWithIcon
            @handleOnClick="handleOnYesClick"
            :icon="state.icons.Yes"
            :isActive="matchDetails.myStatus === state.availabilityStatus.YES"
            text="I am In"
          />
        </FlexBoxLayout>
      </GridLayout>
    </ScrollView>
    <StackLayout width="250" height="20%" dock="bottom">
      <BaseButton
        :class="{ 'm-t-20': true, '-primary': true }"
        @handleOnClick="handleOnViewAllMatchesClick"
        refFromParent="viewallmatches"
        text="View All Matches"
      />
    </StackLayout>
  </DockLayout>
</template>

<style scoped lang="scss">
.image {
  background-image: url('~/assets/images/home.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
