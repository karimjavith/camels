<script>
import BaseButton from '../components/BaseButton.vue'
import { createMatch, updateMatch } from '../_shared/firebase/matches'
import { MatchStatus } from '../types/EMatchStatus'
import { ToastService } from '../_shared/Toasty.ts'
import DateService from '../_shared/date.ts'
import ValidationService from '../_shared/validation.ts'
import BaseFormFields from '../components/BaseFormFields.vue'

export default {
  name: 'MatchForm',
  components: { BaseButton, BaseFormFields },
  props: {
    cb: {
      type: Function,
      default: function() {
        return
      },
    },
    itemId: {
      type: String,
      default: '',
    },
    venue: {
      type: String,
      default: '',
    },
    postCode: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: DateService.toLocalDateFormat(new Date()),
    },
    time: {
      type: String,
      default: '00:00',
    },
    opponent: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      state: {
        match: {
          venue: this.venue,
          postCode: this.postCode,
          date: this.date,
          time: this.time,
          opponent: this.opponent,
        },
        matchMetaData: [
          {
            index: 0,
            type: 'text',
            name: 'venue',
            model: this.venue,
            returnPressElm: 'postCode',
            hint: 'Venue',
            keyboardType: 'text',
            isSecure: false,
            returnKeyType: 'next',
          },
          {
            index: 1,
            type: 'text',
            name: 'postCode',
            model: this.postCode,
            returnPressElm: 'date',
            hint: 'Postcode',
            keyboardType: 'text',
            isSecure: false,
            returnKeyType: 'next',
          },
          {
            index: 2,
            type: 'date',
            name: 'date',
            model: this.date,
            minDate: DateService.toLocalDateFormat(new Date()),
            returnPressElm: 'time',
            hint: 'Date',
            keyboardType: 'date',
            isSecure: false,
            returnKeyType: 'next',
          },
          {
            index: 3,
            type: 'text',
            name: 'time',
            model: this.time,
            returnPressElm: 'opponent',
            hint: 'Time',
            keyboardType: 'text',
            isSecure: false,
            returnKeyType: 'next',
          },
          {
            index: 4,
            type: 'text',
            name: 'opponent',
            model: this.opponent,
            returnPressElm: 'submitButton',
            hint: 'Opponent',
            keyboardType: 'text',
            isSecure: false,
            returnKeyType: 'next',
          },
        ],
        loading: false,
      },
    }
  },
  mounted: function() {
    this.$nextTick(function() {})
  },
  methods: {
    focusSubmitButton() {
      this.state = { ...this.state, focusSubmitButton: true }
    },
    handleOnTextChange({ key, value }) {
      this.state = { ...this.state, match: { ...this.state.match, [key]: value } }
    },
    handleFormValidation() {
      const { venue, postCode, date, time, opponent } = this.state.match
      if (!venue || !postCode || !opponent) {
        return { isValid: false, message: 'Please fill up the fields.' }
      }

      if (!ValidationService.isPostCodeValid(postCode)) {
        return { isValid: false, message: 'Please provide valid postcode.' }
      }
      return { isValid: true }
    },
    async handleOnSubmit() {
      this.state = { ...this.state, loading: true, focusSubmitButton: false }
      const { isValid, message } = this.handleFormValidation()
      if (!isValid) {
        ToastService(message, '#ffbfc4', '#32364c').show()
        this.state = { ...this.state, loading: false }
        return
      }
      const matchDetails = {
        ...this.state.match,
        address: this.state.match.postCode,
        status: MatchStatus.ON,
      }
      const action = this.itemId
        ? updateMatch(this.itemId, matchDetails)
        : createMatch(matchDetails)
      const result = await action
      if (result && !result.isError) {
        this.cb()
        this.$navigateBack()
      }
      this.state = { ...this.state, loading: false }
    },

    onNavigationButtonTap() {
      this.$navigateBack()
    },
  },
}
</script>

<template>
  <Page class="nt-page">
    <ActionBar :title="itemId ? 'Edit Match' : 'Create Match'" class="nt-action-bar">
      <NavigationButton
        @tap="onNavigationButtonTap"
        ios.systemIcon="9"
        ios.position="left"
        text="Back"
        android.systemIcon="ic_menu_back"
      ></NavigationButton>
    </ActionBar>
    <DockLayout>
      <ScrollView orientation="vertical" scrollBarIndicatorVisible="false" dock="top">
        <StackLayout class="nt-form">
          <GridLayout rows="auto, auto, auto, auto, auto">
            <BaseFormFields
              :key="state.matchMetaData.length"
              :metadata="state.matchMetaData"
              @handleFinalReturnCb="focusSubmitButton"
              @handleOnTextChange="handleOnTextChange"
            />
          </GridLayout>
        </StackLayout>
      </ScrollView>
      <StackLayout class="m-12" dock="bottom">
        <BaseButton
          ref="submitButton"
          :focusButton="state.focusSubmitButton"
          :loading="state.loading"
          @handleOnClick="handleOnSubmit"
          :text="itemId ? 'Update Match' : 'Create Match'"
          :class="{ 'm-t-20': true, '-primary': true, '-rounded-lg': true }"
          refFromParent="matchSubmitButton"
        ></BaseButton>
      </StackLayout>
    </DockLayout>
  </Page>
</template>

<style scoped lang="scss">
@import '~/_app.common';
Scrollview {
  height: 80%;
}
</style>
