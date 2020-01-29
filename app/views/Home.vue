<script>
import { mapState } from 'vuex'
import Login from './Login.vue'
import { getUpcomingMatchDetails, patchUserMatchStatus } from '../_shared/firebase/home'
import { ToastService } from '../_shared/Toasty'
import BaseButtonWithIcon from '../components/BaseButtonWithIcon.vue'
import BaseButton from '../components/BaseButton.vue'
import { MatchAvailabilityStatus } from '../types/EMatchAvailabilityStatus'
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
        loading: true,
        upcomingMatch: {},
        icons: Icons,
        iconStatus: IconStatus,
        availabilityStatus: MatchAvailabilityStatus,
      },
    }
  },
  computed: mapState({
    userContext: state => state.authenticationModule.userContext,
    loading() {
      return this.state.loading
    },
    matchDetails() {
      return this.state.upcomingMatch
    },
  }),
  created: function() {
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

      this.state = { ...this.state, loading: false }
    },
    async handleOnNoClick() {
      this.state = { ...this.state, loading: true }
      const result = await patchUserMatchStatus(this.matchDetails.id, {
        uid: this.userContext.uid,
        status: MatchAvailabilityStatus.NO,
      })
      if (!result.isError) {
        this.$emit('onMatchEventSetIndexCb', 0)
        ToastService('All done', '#a5d6a7').show()
        await this.getUpcomingMatchDetails()
      }
      this.state = { ...this.state, loading: false }
    },
    async handleOnYesClick() {
      this.state = { ...this.state, loading: true }
      const result = await patchUserMatchStatus(this.matchDetails.id, {
        uid: this.userContext.uid,
        status: MatchAvailabilityStatus.YES,
      })
      if (!result.isError) {
        this.$emit('onMatchEventSetIndexCb', 0)
        ToastService('All done', '#a5d6a7').show()
        await this.getUpcomingMatchDetails()
      }
      this.state = { ...this.state, loading: false }
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
    <ActivityIndicator
      :visibility="loading ? 'visible' : 'collapse'"
      :busy="loading"
      class="nt-activity-indicator loader"
      left="100"
      top="100"
    ></ActivityIndicator>
    <ScrollView ref="scrollView" @scroll="onScroll">
      <StackLayout>
        <StackLayout ref="topView" height="500">
          <!-- this is the header for collapsing --->
          <!-- Note: this can be any type of layout you want -->
          <FlexBoxLayout flexDirection="column">
            <Label
              text="Camels"
              color="white"
              textAlignment="center"
              fontSize="36"
              marginTop="120"
              textTransform="uppercase"
            />
            <Label text="VS" color="white" textAlignment="center" fontSize="20" marginTop="10" />
            <Label
              v-if="!matchDetails.opponent"
              text="-----"
              color="white"
              textAlignment="center"
              fontSize="36"
              marginTop="10"
              textTransform="uppercase"
            />
            <Label
              v-if="matchDetails.opponent"
              :text="matchDetails.opponent"
              color="white"
              textAlignment="center"
              fontSize="36"
              marginTop="10"
              textTransform="uppercase"
            />
          </FlexBoxLayout>
          <FlexBoxLayout v-if="matchDetails.venue" flex="1" justifyContent="center" class="m-t-10">
            <Label
              color="white"
              fontWeight="bold"
              textAlignment="center"
              fontSize="16"
              marginTop="50"
              >{{ matchDetails.venue }} , {{ matchDetails.postCode }}</Label
            >
          </FlexBoxLayout>
          <FlexBoxLayout v-if="!matchDetails.venue" flex="1" justifyContent="center" class="m-t-10">
            <Label
              color="white"
              fontWeight="bold"
              textAlignment="center"
              fontSize="16"
              marginTop="50"
              >------, -----</Label
            >
          </FlexBoxLayout>
          <FlexBoxLayout v-if="matchDetails.venue" flex="1" justifyContent="center">
            <Label
              color="white"
              fontWeight="bold"
              textAlignment="center"
              fontSize="16"
              marginTop="10"
              >{{ matchDetails.date }} @ {{ matchDetails.time }}</Label
            >
          </FlexBoxLayout>
          <FlexBoxLayout v-if="!matchDetails.date" flex="1" justifyContent="center">
            <Label
              color="white"
              fontWeight="bold"
              textAlignment="center"
              fontSize="16"
              marginTop="10"
              >--/--/---- --:--</Label
            >
          </FlexBoxLayout>
          <FlexBoxLayout
            v-if="matchDetails.id"
            flex="1"
            justifyContent="center"
            flexDirection="column"
            class="m-t-25"
          >
            <BaseButtonWithIcon
              :styleObject="{
                color:
                  matchDetails.myStatus === state.availabilityStatus.Yes ? '#ff4350' : '#888e90',
                width: '100px',
              }"
              @handleOnClick="handleOnNoClick"
              :icon="state.icons.No"
              :iconState="state.iconStatus.Active"
              text="Not In"
            />
            <BaseButtonWithIcon
              :styleObject="{
                color: matchDetails.myStatus === state.availabilityStatus.No ? 'green' : '#888e90',
                width: '100px',
              }"
              @handleOnClick="handleOnYesClick"
              :icon="state.icons.Yes"
              :iconState="state.iconStatus.Active"
              text="I am In"
            />
          </FlexBoxLayout>
        </StackLayout>
        <StackLayout width="100%" padding="10">
          <!--Add your page content here-->
        </StackLayout>
      </StackLayout>
    </ScrollView>
    <FlexBoxLayout flex="1" justifyContent="center" class="m-t-10">
      <BaseButton
        :class="{ 'm-t-20': true, '-primary': true }"
        @handleOnClick="handleOnViewAllMatchesClick"
        :loading="false"
        refFromParent="viewallmatches"
        text="View All Matches"
      /> </FlexBoxLayout
  ></StackLayout>
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
  /* Add the blur effect */
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
  .loader {
    position: absolute;
    left: 50%;
    top: 50%;
  }
}
</style>
