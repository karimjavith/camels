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
          const totalSquad = Object.values(matchDetails.totalSquad).filter(x => x.status === 1)
            .length
          this.state.upcomingMatch = {
            ...matchDetails,
            date: new Date(matchDetails.date).toDateString(),
            totalSquad,
          }
          this.state.columns =
            Object.keys(totalSquad).length * 10 +
            '*,' +
            (150 - Object.keys(totalSquad).length * 10) +
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
      v-show="!state.loading && state.totalUpcomingMatchesCount > 0"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Label text="Upcoming Match" textAlignment="center" class="h2" marginTop="16" />

      <FlexBoxLayout alignContent="center" alignItems="center" marginTop="16">
        <FlexBoxLayout
          flexDirection="column"
          alignItems="center"
          alignContent="center"
          class="teamholder"
        >
          <StackLayout v-shadow="4" class="logocontainer"
            ><Image src="~/assets/images/logo.png" class="teamlogo" stretch="fill"
          /></StackLayout>
          <Label text="Camels" class="h3 teamname" marginTop="12" />
        </FlexBoxLayout>
        <Label text="VS" fontSize="14" marginLeft="24" marginRight="24" />

        <FlexBoxLayout
          flexDirection="column"
          alignItems="center"
          alignContent="center"
          class="teamholder"
        >
          <StackLayout v-shadow="4" class="logocontainer"
            ><Image
              src="https://img.freepik.com/free-vector/stadium-of-cricket_1284-6362.jpg"
              class="teamlogo"
              stretch="fill"
          /></StackLayout>
          <Label :text="matchDetails.opponent" class="h3 teamname" marginTop="12" />
        </FlexBoxLayout>
      </FlexBoxLayout>
      <Label textAlignment="center" class="h3" marginTop="28"
        >{{ matchDetails.venue }} , {{ matchDetails.postCode }}</Label
      >
      <Label textAlignment="center" class="h3" marginTop="8"
        >{{ matchDetails.date }} @ {{ matchDetails.time }}</Label
      >
      <Label textAlignment="center" class="h3" marginTop="24">Can you play?</Label>
      <FlexBoxLayout flex="1" justifyContent="center" class="m-t-1 p-l-15 p-r-15">
        <Button
          @tap="handleOnNoClick"
          :class="[{ active: matchDetails.myStatus === state.availabilityStatus.NO }]"
          class="votebutton"
          text="I can't"
        />
        <Button
          @tap="handleOnYesClick"
          :class="[{ active: matchDetails.myStatus === state.availabilityStatus.YES }]"
          class="votebutton"
          text="I can"
        />
      </FlexBoxLayout>
      <FlexBoxLayout
        flexDirection="column"
        alignItems="center"
        alignContent="center"
        class="squadstatus-holder"
      >
        <Label class="h3">Squad - {{ matchDetails.totalSquad }} / 15</Label>
        <GridLayout :columns="state.columns" class="progressbar">
          <StackLayout col="0" class="progressbar-value"></StackLayout>
        </GridLayout>
      </FlexBoxLayout>
      <Button
        v-shadow="2"
        @tap="handleOnViewAllMatchesClick"
        class="nt-btn btn-base -primary -rounded-lg actionbutton"
        text="View All Matches"
      />
    </FlexBoxLayout>
  </ScrollView>
</template>

<style scoped lang="scss">
@import '~/_app.common';
.container {
  background-color: $base-bg;
  height: 100%;
}
.actionbutton {
  width: 227;
  margin-top: 16;
}
.nt-activity-indicator {
  height: 100%;
}
.teamholder {
  width: 132;
}
.logocontainer {
  transform: translateY(10);
}
.teamlogo {
  width: 64;
  height: 64;
  padding: 8;
  border-radius: 50%;
}
.teamname {
  transform: translateY(10);
  font-weight: 500;
}
.votebutton {
  background-color: $hovered-bg;
  border-radius: 25;
  width: 64;
  height: 20;
  &.active {
    background-color: $accent;
    color: #ffffff;
  }
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
  background: $accent;
}
</style>
