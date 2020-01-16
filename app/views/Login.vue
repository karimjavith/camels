<script>
import { mapActions, mapState } from 'vuex'
import { login } from '../_shared/firebase/users.ts'
import Home from './Home.vue'
import CreatePassword from './CreatePassword.vue'
import InputText from '../components/InputText.vue'

export default {
  name: 'Login',
  components: { InputText },
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    }
  },
  computed: mapState({
    userContext: state => state.authenticationModule.userContext,
  }),
  watch: {
    userContext(newValue) {
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
      console.log('login :: mounted')
    })
  },
  updated: function() {
    console.log('login :: updated')
  },
  methods: {
    ...mapActions('authenticationModule', {
      setGlobalLoginState: 'signedIn',
    }),

    navigateToPasswordCreationPage() {
      this.$navigateTo(CreatePassword, { clearHistory: true })
    },
    submit() {
      if (!this.user.email || !this.user.password) {
        this.alert('Please provide both an email address and password.')
        return
      }
      this.login()
    },

    async login() {
      const { uid, token, role, isError } = await login(this.user.email, this.user.password)
      if (!isError) {
        this.setGlobalLoginState({ token, uid, role, loggedIn: true })
        this.$navigateTo(Home, { clearHistory: true })
      }
    },

    forgotPassword() {
      prompt({
        title: 'Forgot Password',
        message: 'Enter the email address you used to register for Camels to reset your password.',
        inputType: 'email',
        defaultText: '',
        okButtonText: 'Ok',
        cancelButtonText: 'Cancel',
      }).then(data => {
        if (data.result) {
          console.log(`Email for password reset :: ${data.result}`)
        }
      })
    },

    focusPassword() {
      this.$refs.password.nativeView.focus()
    },
    focusLoginButton() {
      this.$refs.loginButton.nativeView.focus()
    },
    handleOnChange(data) {
      this.user[data['modelkey']] = data['value']
    },
    alert(message) {
      return alert({
        title: 'Camels',
        okButtonText: 'OK',
        message: message,
      })
    },
  },
}
</script>

<template>
  <Page actionBarHidden="true">
    <FlexboxLayout class="page">
      <StackLayout class="nt-form form">
        <Image class="logo nt-image" src="~/assets/images/NativeScript-Vue.png" />
        <Label class="header" text="Camels" />
        <input-text
          v-model="user.email"
          @handleOnChange="handleOnChange"
          @returnPress="focusPassword"
          modelkey="email"
          returnKeyType="next"
          keyboardType="email"
          placeHolderText="name@camels.com"
        ></input-text>
        <input-text
          ref="password"
          v-model="user.password"
          :secure="true"
          @handleOnChange="handleOnChange"
          @returnPress="focusLoginButton"
          modelkey="password"
          returnKeyType="next"
          keyboardType="password"
          placeHolderText="***********"
        ></input-text>

        <Button
          ref="loginButton"
          @tap="submit"
          text="Log In"
          class="btn btn-primary m-t-20 -primary -rounded-sm"
        />
        <Label @tap="forgotPassword" text="Forgot your password?" class="nt-label login-label" />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<style scoped lang="scss">
Page {
  align-items: center;
  flex-direction: column;
}

.form {
  margin-left: 30;
  margin-right: 30;
  flex-grow: 2;
  vertical-align: middle;
}

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

.btn-primary {
  height: 50;
  margin: 30 5 15 5;
  font-size: 16;
  font-weight: 500;
}

.login-label {
  horizontal-align: center;
  font-size: 16;
}

.sign-up-label {
  margin-bottom: 20;
}

.bold {
  color: #000000;
}
</style>
