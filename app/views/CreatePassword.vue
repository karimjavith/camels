<script>
import Login from './Login.vue'
import { signup } from '../_shared/firebase/users.ts'
import ValidationService from '../_shared/validation.ts'
import { ToastService } from '../_shared/Toasty.ts'
import BaseButton from '../components/BaseButton.vue'
import BaseFormFields from '../components/BaseFormFields.vue'

export default {
  name: 'CreatePassword',
  components: { BaseButton, BaseFormFields },
  data() {
    return {
      state: {
        loading: false,
        user: {
          displayName: '',
          email: '',
          password: '',
          confirmPassword: '',
        },
        userMetadata: [
          {
            index: 0,
            type: 'text',
            name: 'displayName',
            model: '',
            returnPressElm: 'email',
            hint: 'Display Name',
            keyboardType: 'text',
            isSecure: false,
            returnKeyType: 'next',
          },
          {
            index: 1,
            type: 'email',
            name: 'email',
            model: '',
            returnPressElm: 'password',
            hint: 'Email',
            keyboardType: 'email',
            isSecure: false,
            returnKeyType: 'next',
          },
          {
            index: 2,
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
            index: 3,
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
      const { displayName, email, password, confirmPassword } = this.state.user
      if (!displayName || !email || !password || !confirmPassword) {
        return { isValid: false, message: 'Please fill up the fields.' }
      }

      if (!ValidationService.isEmailValid(email)) {
        return { isValid: false, message: 'Please provide valid email.' }
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
      const result = await signup(
        this.state.user.email,
        this.state.user.password,
        this.state.user.displayName
      )
      if (result && !result.isError) {
        this.$navigateTo(Login, { clearHistory: true })
      }

      this.state = { ...this.state, loading: false }
    },
  },
}
</script>

<template>
  <Page actionBarHidden="true" class="nt-page">
    <StackLayout class="nt-form form">
      <Image class="logo" src="~/assets/images/logo.png" />
      <GridLayout rows="auto, auto, auto, auto">
        <BaseFormFields
          :key="state.userMetadata.length"
          :metadata="state.userMetadata"
          @handleFinalReturnCb="focusSubmitButton"
          @handleOnTextChange="handleOnTextChange"
        />
      </GridLayout>
      <BaseButton
        ref="createPasswordButton"
        :focusButton="state.focusSubmitButton"
        :loading="state.loading"
        @handleOnClick="handleOnSubmit"
        :class="{ 'm-t-20': true, '-primary': true, '-rounded-lg': true }"
        refFromParent="confirmPasswordSubmitButton"
        text="Sign up"
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
}
</style>
