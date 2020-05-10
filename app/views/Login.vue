<script>
const dialogs = require('tns-core-modules/ui/dialogs')
import { mapActions, mapState } from 'vuex'
import { login, sendPasswordResetEmail } from '../_shared/firebase/users.ts'
import ValidationService from '../_shared/validation.ts'
import { ToastService } from '../_shared/Toasty.ts'
import Index from './Index.vue'
import CreatePassword from './CreatePassword.vue'
import BaseButton from '../components/BaseButton.vue'
import BaseFormFields from '../components/BaseFormFields.vue'

export default {
  name: 'Login',
  components: { BaseButton, BaseFormFields },
  data() {
    return {
      state: {
        user: {
          email: '',
          password: '',
        },
        userMetadata: [
          {
            index: 0,
            type: 'text',
            name: 'email',
            model: '',
            returnPressElm: 'password',
            hint: 'johndoe@gmail.com',
            keyboardType: 'email',
            isSecure: false,
            returnKeyType: 'next',
          },
          {
            index: 1,
            type: 'text',
            name: 'password',
            model: '',
            returnPressElm: 'loginButton',
            hint: '********',
            keyboardType: 'password',
            isSecure: true,
            returnKeyType: 'next',
          },
        ],
        loading: false,
        focusSubmitButton: false,
      },
    }
  },
  computed: mapState({
    userContext: state => state.authenticationModule.userContext,
  }),
  watch: {
    userContext(newValue) {
      if (newValue && newValue.invited && !newValue.loggedIn) {
        if (newValue.invited) {
          this.navigateToPasswordCreationPage()
        }
      }
    },
  },
  methods: {
    ...mapActions('authenticationModule', {
      setGlobalLoginState: 'signedIn',
    }),
    focusPassword() {
      this.$refs.password.nativeView.focus()
    },
    focusSubmitButton() {
      this.state = { ...this.state, focusSubmitButton: true }
    },
    navigateToPasswordCreationPage() {
      this.$navigateTo(CreatePassword, { clearHistory: true })
    },
    handleOnTextChange({ key, value }) {
      this.state = { ...this.state, user: { ...this.state.user, [key]: value } }
    },
    handleFormValidation() {
      const { email, password } = this.state.user
      if (!email || !password) {
        return { isValid: false, message: 'Please provide both an email address and password.' }
      }

      if (!ValidationService.isEmailValid(email)) {
        return { isValid: false, message: 'Please provide valid email.' }
      }
      if (ValidationService.isMinimumLengthValid(password, 6)) {
        return { isValid: false, message: 'Password should be of minimum 6 characters' }
      }
      return { isValid: true }
    },
    handleOnSubmit() {
      this.state = { ...this.state, loading: true, focusSubmitButton: false }
      const { isValid, message } = this.handleFormValidation()
      if (!isValid) {
        ToastService(message, '#ffbfc4', '#32364c').show()
        this.state = { ...this.state, loading: false }
        return
      }
      this.login()
    },
    async login() {
      const { uid, token, role, isError } = await login(
        this.state.user.email,
        this.state.user.password
      )

      if (!isError) {
        this.setGlobalLoginState({ token, uid, role, loggedIn: true })
        this.$navigateTo(Index, { clearHistory: true })
      }
      this.state = { ...this.state, loading: false }
    },

    forgotPassword() {
      prompt({
        title: 'Forgot Password',
        message: 'Enter the email address you used to register for Camels to reset your password.',
        inputType: dialogs.inputType.email,
        defaultText: '',
        okButtonText: 'Send me a link',
        cancelButtonText: 'Cancel',
      }).then(async data => {
        if (data.result) {
          await sendPasswordResetEmail(data.text)
        }
      })
    },
  },
}
</script>

<template>
  <Page actionBarHidden="true" class="nt-page page">
    <FlexboxLayout>
      <StackLayout class="nt-form form">
        <Image class="logo nt-image" src="~/assets/images/logo.png" stretch="aspectFill" />
        <Label class="header" text="Camels CC"></Label>
        <GridLayout rows="auto, auto, auto">
          <BaseFormFields
            :key="state.userMetadata.length"
            :metadata="state.userMetadata"
            @handleFinalReturnCb="focusSubmitButton"
            @handleOnTextChange="handleOnTextChange"
          />

          <ActivityIndicator :busy="state.loading" rowspan="3"></ActivityIndicator>
        </GridLayout>
        <BaseButton
          ref="loginButton"
          :loading="state.loading"
          @handleOnClick="handleOnSubmit"
          :focusButton="state.focusSubmitButton"
          class="m-t-20 sign-in"
          refFromParent="loginButton"
          text="Log In"
        ></BaseButton>
        <Label @tap="forgotPassword" text="Forgot your password?" class="nt-label login-label" />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<style scoped lang="scss">
@import '~/_app.common';
Page {
  align-items: center;
  flex-direction: column;
  .header {
    horizontal-align: center;
    font-size: 20;
    font-weight: 500;
    margin-bottom: 32;
    text-align: center;
    color: $text-color;
  }

  .logo {
    margin-bottom: 16;
    font-weight: bold;
    width: 80;
    height: 80;
  }

  .form {
    margin-left: 30;
    margin-right: 30;
    flex-grow: 2;
    vertical-align: middle;
    .login-label {
      horizontal-align: center;
      font-size: 14;
      color: $hovered-text;
      text-decoration: underline;
    }
    .sign-in {
      width: 227;
    }
  }
}
</style>
