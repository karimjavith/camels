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
        loading: true,
        columns: 50 + '*,' + (100 - 50) + '*',
        totalUpcomingMatchesCount: 0,
      },
    }
  },
  computed: mapState({
    userContext: state => state.authenticationModule.userContext,
    matchDetails() {
      return this.state.upcomingMatch
    },
  }),
  created: async function() {
    await this.getMatchDetails()
  },

  methods: {
    async getMatchDetails() {
      const result = await getUpcomingMatchDetails(this.userContext.uid)
      if (result.status === HttpStatusCode.Unauthorized) {
        this.$navigateTo(Login, { clearHistory: true })
      }
      if (result && !result.isError) {
        this.state.totalUpcomingMatchesCount = result.json.count
        if (result.json.count > 0) {
          const matchDetails = Object.values(result.json.match)[0]
          this.state.upcomingMatch = {
            ...matchDetails,
            date: new Date(matchDetails.date).toDateString(),
            totalSquad: Object.keys(matchDetails.totalSquad).length,
          }
          this.state.columns =
            Object.keys(matchDetails.totalSquad).length * 10 +
            '*,' +
            (110 - Object.keys(matchDetails.totalSquad).length * 10) +
            '*'
        }
      }
      this.state.loading = false
    },
    async handleOnNoClick() {
      this.state.loading = true
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
        this.state.loading = false
      }
    },
    async handleOnYesClick() {
      this.state.loading = true
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
      this.state.loading = false
    },
    handleOnViewAllMatchesClick() {
      this.$emit('onHomeEventSetIndexCb', 1)
    },
  },
}
</script>

<template>
  <ScrollView class="container">
    <ActivityIndicator
      :visibility="state.loading ? 'visible' : 'collapse'"
      :busy="state.loading"
      class="nt-activity-indicator"
    />
    <FlexBoxLayout
      v-if="!state.loading && state.totalUpcomingMatchesCount > 0"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Label
        text="Upcoming match"
        textAlignment="center"
        textTransform="uppercase"
        class="h2"
        marginTop="10"
      />

      <FlexBoxLayout alignContent="center" marginTop="25">
        <FlexBoxLayout flexDirection="column" alignItems="center" alignContent="center">
          <StackLayout v-shadow="4" class="logocontainer"
            ><Image src="~/assets/images/logo.png" class="teamlogo" stretch="aspectFill"
          /></StackLayout>
          <Label text="Camels" class="h3 teamname" marginTop="12" />
        </FlexBoxLayout>
        <Label text="VS" fontSize="14" marginLeft="20" marginRight="20" />

        <FlexBoxLayout flexDirection="column" alignItems="center" alignContent="center">
          <StackLayout v-shadow="4" class="logocontainer"
            ><Image
              src="https://img.freepik.com/free-vector/stadium-of-cricket_1284-6362.jpg"
              class="teamlogo"
              stretch="aspectFill"
          /></StackLayout>
          <Label :text="matchDetails.opponent" class="h3 teamname" marginTop="12" />
        </FlexBoxLayout>
      </FlexBoxLayout>
      <Label textAlignment="center" class="h3" marginTop="50"
        >{{ matchDetails.venue }} , {{ matchDetails.postCode }}</Label
      >
      <Label textAlignment="center" class="h3" marginTop="10"
        >{{ matchDetails.date }} @ {{ matchDetails.time }}</Label
      >
      <Label
        v-if="matchDetails.myStatus === state.availabilityStatus.NOTRESPONDED"
        textAlignment="center"
        class="h3"
        marginTop="25"
        >Can you play?</Label
      >
      <FlexBoxLayout
        v-if="matchDetails.myStatus === state.availabilityStatus.NOTRESPONDED"
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
      <FlexBoxLayout
        flexDirection="column"
        alignItems="center"
        alignContent="center"
        class="squadstatus-holder"
      >
        <Label class="h3">Squad - {{ matchDetails.totalSquad }} / 11</Label>
        <GridLayout :columns="state.columns" class="progressbar">
          <StackLayout col="0" class="progressbar-value"></StackLayout>
        </GridLayout>
      </FlexBoxLayout>
      <BaseButton
        :class="{ 'm-t-15': true, '-primary': true }"
        @handleOnClick="handleOnViewAllMatchesClick"
        class="actionbutton"
        refFromParent="viewallmatches"
        text="View All Matches"
      />
    </FlexBoxLayout>
    <FlexBoxLayout
      v-if="!state.loading && state.totalUpcomingMatchesCount === 0"
      flexDirection="column"
      alignItems="center"
      alignContent="center"
    >
      <BaseButton
        :class="{ 'm-t-15': true, '-primary': true }"
        @handleOnClick="handleOnViewAllMatchesClick"
        class="actionbutton"
        refFromParent="viewallmatches"
        text="View All Matches"
      />
    </FlexBoxLayout>
  </ScrollView>
</template>

<style scoped lang="scss">
@import '~/_app.common';
.container {
  background-color: $base-bg;
}
.actionbutton {
  width: 227;
}
.nt-activity-indicator {
  height: 100%;
}
.logocontainer {
  background-color: $base-bg;
  transform: translateY(10);
  border-radius: 50%;
  padding: 10;
}
.teamlogo {
  max-width: 64;
  width: 64;
  height: 64;
  max-height: 64;
  border-radius: 50%;
}
.teamname {
  transform: translateY(10);
  font-weight: 500;
}
.squadstatus-holder {
  margin-top: 25;
  max-width: 400;
  width: 250;
}
.progressbar {
  height: 5;
  margin: 10;
  border-width: 0;
  border-radius: 10;
  background: #eceff1;
}
.progressbar-value {
  background: #51bc6b;
}
</style>
