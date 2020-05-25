<script>
import { mapState } from 'vuex'
import Login from './Login.vue'
import { getUpcomingMatchDetails, patchUserMatchStatus } from '../_shared/firebase/home'
import { ToastService } from '../_shared/Toasty'
import { MatchAvailabilityStatus } from '../types/EMatchAvailabilityStatus.ts'
import { HttpStatusCode } from '../_shared/http/http'
import { Icons } from '../types/EIconName.ts'
import { IconStatus } from '../types/EIconStatus.ts'

export default {
  name: 'Home',
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
  computed: {
    ...mapState({
      userContext: state => state.authenticationModule.userContext,
    }),

    matchDetails() {
      return this.state.upcomingMatch
    },
  },
  created: function() {
    this.getMatchDetails()
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
          this.state.columns = totalSquad * 10 + '*,' + (150 - totalSquad * 10) + '*'
          this.state.upcomingMatch = {
            ...matchDetails,
            date: new Date(matchDetails.date).toDateString(),
            totalSquad,
          }
        }
      }
      this.state.loading = false
    },
    async handleOnNoClick() {
      const prevState = this.state.upcomingMatch.myStatus
      this.state.upcomingMatch.myStatus = this.state.availabilityStatus.NO

      const result = await patchUserMatchStatus(this.matchDetails.id, {
        uid: this.userContext.uid,
        status: MatchAvailabilityStatus.NO,
      })
      if (!result.isError) {
        this.$emit('onMatchEventSetIndexCb', 0)
        ToastService('Thank you for the vote', '#a5d6a7', '#3a7e3c').show()
      } else {
        this.state.upcomingMatch.myStatus = prevState
      }
    },
    async handleOnYesClick() {
      const prevState = this.state.upcomingMatch.myStatus
      this.state.upcomingMatch.myStatus = this.state.availabilityStatus.YES
      const result = await patchUserMatchStatus(this.matchDetails.id, {
        uid: this.userContext.uid,
        status: MatchAvailabilityStatus.YES,
      })
      if (!result.isError) {
        this.$emit('onMatchEventSetIndexCb', 0)
        ToastService('Thank you for the vote', '#a5d6a7', '#3a7e3c').show()
      } else {
        this.state.upcomingMatch.myStatus = prevState
      }
    },
    handleOnViewAllMatchesClick() {
      this.$emit('onHomeEventSetIndexCb', 1)
    },
  },
}
</script>

<template>
  <ScrollView class="container">
    <FlexBoxLayout flexDirection="column" justifyContent="center" alignItems="center">
      <Label text="Upcoming Match" textAlignment="center" class="h2" marginTop="16" />

      <FlexBoxLayout class="main-content">
        <FlexBoxLayout
          justifyContent="center"
          alignItems="center"
          marginTop="16"
          class="teamholder"
        >
          <FlexBoxLayout
            flexDirection="column"
            alignItems="center"
            alignContent="center"
            class="teamholder--content"
          >
            <StackLayout v-shadow="2" class="logocontainer">
              <Label v-show="state.loading" class="placeholder-circle"/>
              <Image
                v-show="!state.loading"
                src="~/assets/images/logo.png"
                class="teamlogo"
                stretch="aspectFill"
            /></StackLayout>

            <Label v-show="state.loading" class="placeholder teamname" marginTop="12" />
            <Label v-show="!state.loading" text="Camels" class="h4 teamname" marginTop="12" />
          </FlexBoxLayout>
          <Label v-show="state.loading" marginLeft="24" marginRight="24" />
          <Label v-if="!state.loading" text="VS" class="h3" marginLeft="24" marginRight="24" />

          <FlexBoxLayout
            flexDirection="column"
            alignItems="center"
            alignContent="center"
            class="teamholder--content"
          >
            <StackLayout v-shadow="2" class="logocontainer">
              <Label v-show="state.loading" class="placeholder-circle" />
              <Image
                v-show="!state.loading"
                src="https://img.freepik.com/free-vector/stadium-of-cricket_1284-6362.jpg"
                class="teamlogo"
                stretch="aspectFill"
              />
            </StackLayout>
            <Label v-show="state.loading" class="placeholder teamname" marginTop="12" />
            <Label
              v-if="!state.loading"
              :text="matchDetails.opponent"
              class="h4 teamname"
              marginTop="12"
            />
          </FlexBoxLayout>
        </FlexBoxLayout>

        <Label v-show="state.loading" class="placeholder h3 info" marginTop="16" />
        <Label v-if="!state.loading" textAlignment="center" class="h3 info" marginTop="16"
          >{{ matchDetails.venue }} , {{ matchDetails.postCode }}</Label
        >

        <Label v-show="state.loading" class="placeholder h3" marginTop="8" />
        <Label v-if="!state.loading" textAlignment="center" class="h3" marginTop="8"
          >{{ matchDetails.date }} @ {{ matchDetails.time }}</Label
        >

        <Label v-show="state.loading" class="placeholder" marginTop="24" />
        <Label v-show="!state.loading" textAlignment="center" class="h3" marginTop="24"
          >Can you play?</Label
        >
        <FlexBoxLayout v-if="!state.loading" class="m-t-1 m-l-15 m-r-15">
          <Button
            :key="state.availabilityStatus"
            @tap="handleOnNoClick"
            :class="[
              '-rounded-lg votebutton',
              { active: matchDetails.myStatus === state.availabilityStatus.NO },
            ]"
            text="I can't"
          />
          <Button
            :key="state.availabilityStatus"
            @tap="handleOnYesClick"
            :class="[
              '-rounded-lg votebutton',
              { active: matchDetails.myStatus === state.availabilityStatus.YES },
            ]"
            text="I can"
          />
        </FlexBoxLayout>

        <Label v-show="state.loading" class="placeholder squadstatus-holder" marginTop="16" />
        <FlexBoxLayout
          v-if="!state.loading"
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
      </FlexBoxLayout>
      <Label v-show="state.loading" class="placeholder actionbutton" />
      <Button
        v-show="!state.loading"
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
.main-content {
  flex-direction: column;
  min-height: 450;
}
.actionbutton {
  width: 227;
  margin-top: 16;
  font-size: 14;
}
.teamholder {
  min-height: 128;
  &--content {
    width: 128;
    height: 128;
  }
}
.logocontainer {
  border-radius: 50%;
  width: 64;
  height: 64;
  padding: 4;
  border-width: 1px;
  border-color: $border-color-light;
}
.teamlogo {
  width: 64;
  height: 64;
  border-radius: 50%;
}
.teamname {
  transform: translateY(10);
  font-weight: 500;
}
.info {
  border-radius: 25%;
  width: 320;
  height: 32;
  background-color: $hovered-bg;
}
.votebutton {
  background-color: $hovered-bg;
  color: $text-color;
  font-size: 14;
  padding: 32;
  &.active {
    background-color: $accent-light;
    color: $accent;
    font-weight: 500;
  }
}
.squadstatus-holder {
  margin-top: 25;
  max-width: 400;
  width: 250;
  height: 80;
}
.progressbar {
  height: 5;
  margin: 10;
  border-width: 0;
  border-radius: 10;
  background-color: $hovered-bg;
}
.progressbar-value {
  background: $accent;
}
.placeholder {
  border-radius: 25%;
  min-width: 100;
  height: 16;
  background-color: $hovered-bg;
  &-circle {
    width: 64;
    height: 64;
    border-radius: 50%;
    background-color: $hovered-bg;
  }
}
</style>
