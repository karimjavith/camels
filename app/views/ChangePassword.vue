<script>
import { updatePassword } from '../_shared/firebase/users.ts'
import ValidationService from '../_shared/validation.ts'
import { ToastService } from '../_shared/Toasty.ts'
import BaseButton from '../components/BaseButton.vue'
import BaseFormFields from '../components/BaseFormFields.vue'

export default {
  name: 'ChangePassword',
  components: { BaseButton, BaseFormFields },
  data() {
    return {
      state: {
        loading: false,
        user: {
          password: '',
          confirmPassword: '',
        },
        userMetadata: [
          {
            index: 0,
            type: 'password',
            name: 'password',
            model: '',
            returnPressElm: 'confirmPassword',
            hint: 'Password',
            keyboardType: 'password',
            isSecure: true,
            returnKeyType: 'next',
          },
          {
            index: 1,
            type: 'password',
            name: 'confirmPassword',
            model: '',
            returnPressElm: 'confirmPasswordSubmitButton',
            hint: 'Confirm Password',
            keyboardType: 'password',
            isSecure: true,
            returnKeyType: 'next',
          },
        ],
      },
    }
  },
  methods: {
    focusSubmitButton() {
      this.state = { ...this.state, focusSubmitButton: true }
    },
    handleOnTextChange({ key, value }) {
      this.state = { ...this.state, user: { ...this.state.user, [key]: value } }
    },
    handleFormValidation() {
      const { password, confirmPassword } = this.state.user
      if (!password || !confirmPassword) {
        return { isValid: false, message: 'Please fill up the fields.' }
      }
      if (ValidationService.isMinimumLengthValid(password, 6)) {
        return { isValid: false, message: 'Password should be of minimum 6 characters' }
      }
      if (password !== confirmPassword) {
        return { isValid: false, message: 'Invalid entries. Password do not match.' }
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
      const result = await updatePassword(this.state.user.password)
      if (result && !result.isError) {
        ToastService('Password updated', '#a5d6a7').show()
        this.onNavigationButtonTap()
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
    <ActionBar class="nt-action-bar" title="Change Password">
      <NavigationButton
        @tap="onNavigationButtonTap"
        ios.systemIcon="9"
        ios.position="left"
        text="Back"
        android.systemIcon="ic_menu_back"
      ></NavigationButton>
    </ActionBar>
    <StackLayout class="nt-form form">
      <Image class="logo" stretch="aspectFit" src="~/assets/images/logo.png" />
      <GridLayout rows="auto, auto, auto">
        <BaseFormFields
          :key="state.userMetadata.length"
          :metadata="state.userMetadata"
          @handleFinalReturnCb="focusSubmitButton"
          @handleOnTextChange="handleOnTextChange"
        />
      </GridLayout>
      <BaseButton
        ref="changePasswordButton"
        :focusButton="state.focusSubmitButton"
        :loading="state.loading"
        @handleOnClick="handleOnSubmit"
        :class="{ 'm-t-20': true, '-primary': true, '-rounded-lg': true }"
        refFromParent="confirmPasswordSubmitButton"
        text="Change Password"
      ></BaseButton>
    </StackLayout>
  </Page>
</template>

<style scoped lang="scss">
.form {
  margin-left: 30;
  margin-right: 30;
  flex-grow: 2;
  vertical-align: middle;

  .logo {
    margin-bottom: 12;
    height: 90;
    font-weight: bold;
  }

  .header {
    horizontal-align: center;
    font-size: 25;
    font-weight: 600;
    margin-bottom: 70;
    text-align: center;
    color: #c19a6b;
  }

  .input {
    font-size: 18;
    placeholder-color: #a8a8a8;
  }
}
</style>
