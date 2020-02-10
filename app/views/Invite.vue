<script>
import { sendSignInLink, addInvitesToCollection } from '../_shared/firebase/users.ts'
import ValidationService from '../_shared/validation.ts'
import { ToastService } from '../_shared/Toasty.ts'
import BaseButton from '../components/BaseButton.vue'
export default {
  components: { BaseButton },
  data() {
    return {
      state: { email: '', loading: false, focusSubmitButton: false },
    }
  },
  methods: {
    createguid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
      })
    },
    focusButton() {
      this.state = { ...this.state, focusSubmitButton: true }
    },
    handleFormValidation() {
      if (!this.state.email) {
        return { isValid: false, message: 'Please provide email address.' }
      }

      if (!ValidationService.isEmailValid(this.state.email)) {
        return { isValid: false, message: 'Please provide valid email.' }
      }
      return { isValid: true }
    },
    async sendInvite() {
      this.state = { ...this.state, focusSubmitButton: false }
      const { isValid, message } = this.handleFormValidation()
      if (!isValid) {
        ToastService(message, '#ffbfc4', '#32364c').show()
        return
      }
      this.state = { ...this.state, loading: true }
      const result = await sendSignInLink(this.state.email)
      if (!result.isError) {
        const createUserResult = await addInvitesToCollection(this.state.email)
        if (createUserResult && !createUserResult.isError) {
          this.state.email = ''
        }
      } else {
        const { message } = result
        ToastService(message).show()
      }
      this.state = { ...this.state, loading: false, focusSubmitButton: false }
    },

    onNavigationButtonTap() {
      this.$navigateBack()
    },
  },
}
</script>

<template>
  <Page class="nt-page">
    <ActionBar class="nt-action-bar" title="Invite">
      <NavigationButton
        @tap="onNavigationButtonTap"
        ios.systemIcon="9"
        ios.position="left"
        text="Back"
        android.systemIcon="ic_menu_back"
      ></NavigationButton>
    </ActionBar>
    <StackLayout class="nt-form form">
      <Label class="header h2 m-30" text="Invite the camel" />
      <StackLayout class="input-field" margin-bottom="25">
        <TextField
          v-model="state.email"
          @returnPress="focusButton"
          class="input"
          hint="name@gmail.com"
          keyboard-type="email"
          autocorrect="false"
          autocapitalization-type="none"
          returnKeyType="next"
          font-size="18"
        />
        <StackLayout class="hr-light" />
      </StackLayout>

      <BaseButton
        ref="submitButton"
        :loading="state.loading"
        @handleOnClick="sendInvite"
        :class="{ 'm-t-20': true, '-primary': true }"
        :focusButton="state.focusSubmitButton"
        refFromParent="submitButton"
        text="Send Invite"
      ></BaseButton>
    </StackLayout>
  </Page>
</template>

<style scoped lang="scss">
@import '~/_app.common';
.form {
  padding: 10;
  flex-grow: 2;
  vertical-align: middle;

  .header {
    horizontal-align: center;
    font-weight: 400;
    text-align: center;
    color: $text-color;
  }
  .input {
    font-size: 18;
    placeholder-color: #a8a8a8;
  }
}
</style>
