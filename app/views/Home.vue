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
    console.log(`Home :: Created`)
  },
  mounted: function() {
    this.$nextTick(function() {
      console.log(`Home :: mounted`)
      this.getUpcomingMatchDetails()
    })
  },
  updated: function() {
    this.$nextTick(function() {
      console.log(`Home :: updated`)
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
    onScroll: function() {
      //access to the native event
      const scrollView = this.$refs.scrollView.nativeView
      const topView = this.$refs.topView.nativeView

      // if the offset is less than the height of the header.
      if (scrollView.verticalOffset < 250) {
        const offset = scrollView.verticalOffset / 1.65 // you can adjust this number to make the parallax more subtle or dramatic
        if (scrollView.ios) {
          // iOS adjust the position with an animation to create a smother scrolling effect.
          topView.animate({ translate: { x: 0, y: offset } }).then(
            () => {},
            () => {}
          )
        } else {
          // Android, animations are jerky so instead just adjust the position without animation.
          topView.translateY = Math.floor(offset)
        }
      }
    },
  },
}
</script>

<template>
  <StackLayout class="image">
    <ScrollView ref="scrollView" @scroll="onScroll">
      <GridLayout ref="topView" rows="auto, auto, auto, auto" height="520">
        <FlexBoxLayout row="0" flexDirection="column">
          <Label
            text="Camels"
            color="white"
            textAlignment="center"
            fontSize="24"
            marginTop="100"
            textTransform="uppercase"
          />
          <Label text="VS" color="white" textAlignment="center" fontSize="16" marginTop="10" />
          <Label
            v-if="!matchDetails.opponent"
            text="-----"
            color="white"
            textAlignment="center"
            fontSize="24"
            marginTop="10"
            textTransform="uppercase"
          />
          <Label
            v-if="matchDetails.opponent"
            :text="matchDetails.opponent"
            color="white"
            textAlignment="center"
            fontSize="24"
            marginTop="10"
            textTransform="uppercase"
          />
        </FlexBoxLayout>
        <FlexBoxLayout
          v-if="matchDetails.venue"
          row="1"
          flex="1"
          justifyContent="center"
          class="m-t-10"
        >
          <Label color="white" fontWeight="bold" textAlignment="center" fontSize="16" marginTop="50"
            >{{ matchDetails.venue }} , {{ matchDetails.postCode }}</Label
          >
        </FlexBoxLayout>
        <FlexBoxLayout
          v-if="!matchDetails.venue"
          row="1"
          flex="1"
          justifyContent="center"
          class="m-t-10"
        >
          <Label color="white" fontWeight="bold" textAlignment="center" fontSize="16" marginTop="50"
            >------, -----</Label
          >
        </FlexBoxLayout>
        <FlexBoxLayout v-if="matchDetails.venue" row="2" flex="1" justifyContent="center">
          <Label color="white" fontWeight="bold" textAlignment="center" fontSize="16" marginTop="10"
            >{{ matchDetails.date }} @ {{ matchDetails.time }}</Label
          >
        </FlexBoxLayout>
        <FlexBoxLayout v-if="!matchDetails.date" row="2" flex="1" justifyContent="center">
          <Label color="white" fontWeight="bold" textAlignment="center" fontSize="16" marginTop="10"
            >--/--/---- --:--</Label
          >
        </FlexBoxLayout>
        <FlexBoxLayout
          v-if="matchDetails.id"
          row="3"
          flex="1"
          justifyContent="center"
          class="m-t-25 p-l-15 p-r-15"
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
    <StackLayout flex="1" justifyContent="center" class="m-t-10">
      <BaseButton
        :class="{ 'm-t-20': true, '-primary': true }"
        @handleOnClick="handleOnViewAllMatchesClick"
        refFromParent="viewallmatches"
        text="View All Matches"
      />
    </StackLayout>
  </StackLayout>
</template>

<style scoped lang="scss">
ScrollView {
  height: 80%;
}
.image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('~/assets/images/home.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  .loader {
    position: absolute;
    left: 50%;
    top: 50%;
  }
}
</style>
