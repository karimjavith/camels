<script>
const dialogs = require('tns-core-modules/ui/dialogs')
import { mapActions, mapState } from 'vuex'
import { login, sendPasswordResetEmail } from '../_shared/firebase/users.ts'
import { ToastService } from '../_shared/Toasty.ts'
import Index from './Index.vue'
import CreatePassword from './CreatePassword.vue'
import BaseButton from '../components/BaseButton.vue'

export default {
  name: 'Login',
  components: { BaseButton },
  data() {
    return {
      state: {
        user: {
          email: '',
          password: '',
        },
        loading: false,
      },
    }
  },
  computed: mapState({
    userContext: state => state.authenticationModule.userContext,
  }),
  watch: {
    userContext(newValue) {
      console.log(`invited -  :: ${newValue.invited}`)
      if (newValue && newValue.invited && !newValue.loggedIn) {
        console.log(`invited - watched :: ${newValue.invited}`)
        if (newValue.invited) {
          this.navigateToPasswordCreationPage()
        }
      }
    },
  },
  mounted: function() {
    this.$nextTick(function() {
      console.log('LOGIN :: mounted')
    })
  },
  updated: function() {
    console.log('LOGIN :: updated')
  },
  methods: {
    ...mapActions('authenticationModule', {
      setGlobalLoginState: 'signedIn',
    }),
    focusPassword() {
      this.$refs.password.nativeView.focus()
    },
    navigateToPasswordCreationPage() {
      this.$navigateTo(CreatePassword, { clearHistory: true })
    },
    handleFormValidation() {
      const { email, password } = this.state.user
      const regex = RegExp(
        '[a-zA-Z0-9\\+\\.\\_\\%\\-\\+]{1,256}\\@[a-zA-Z0-9][a-zA-Z0-9\\-]{0,64}(\\.[a-zA-Z0-9][a-zA-Z0-9\\-]{0,25})+'
      )
      if (!email || !password) {
        return { isValid: false, message: 'Please provide both an email address and password.' }
      }

      if (!regex.test(email)) {
        return { isValid: false, message: 'Please provide valid email.' }
      }
      if (password.length < 6) {
        return { isValid: false, message: 'Password should be of minimum 6 characters' }
      }
      return { isValid: true }
    },
    handleOnSubmit() {
      this.state = { ...this.state, loading: true }
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
          console.log(`Email for password reset :: ${JSON.stringify(data)}`)
          await sendPasswordResetEmail(data.text)
        }
      })
    },
  },
}
</script>

<template>
  <Page actionBarHidden="true" class="nt-page">
    <FlexboxLayout class="page">
      <StackLayout class="nt-form form">
        <Image class="logo nt-image" src="~/assets/images/logo.png" stretch="aspectFill" />
        <Label class="header" text="Camels CC"></Label>
         <GridLayout rows="auto, auto, auto">
                    <StackLayout row="0" class="input-field">
                        <TextField 
                        ref="email" 
                        :isEnabled="!state.loading" 
                        v-model="state.user.email" 
                        @returnPress="focusPassword" 
                        class="input" 
                        hint="Email" 
                            keyboardType="email" autocorrect="false"
                            autocapitalizationType="none" 
                            returnKeyType="next" ></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout row="1" class="input-field">
                        <TextField  ref="password" :isEnabled="!state.loading"
                             v-model="state.user.password" class="input" secure="true" hint="Password" returnKeyType="done" ></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <ActivityIndicator :busy="state.loading" rowSpan="3" ></ActivityIndicator>
                </GridLayout>
        <BaseButton
          :loading="state.loading"
          @handleOnClick="handleOnSubmit"
          :class="{ 'm-t-20': true, '-primary': true }"
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
    font-size: 25;
    font-weight: 600;
    margin-bottom: 56;
    text-align: center;
    color: $text-color;
  }

  .logo {
    margin-bottom: 16;
    font-weight: bold;
    width: 150;
    height: 100;
  }

  .form {
    margin-left: 30;
    margin-right: 30;
    flex-grow: 2;
    vertical-align: middle;
    .input-field {
      margin-bottom: 25;
      border: none;

      .input {
        font-size: 18;
        placeholder-color: #a8a8a8;
        border: none;
        border-color: transparent;
        border-bottom-color: $grey;
      }
    }
    .login-label {
      horizontal-align: center;
      font-size: 16;
    }
  }
}
</style>
