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
        userMetadata: {
          isReadOnly: false,
          commitMode: 'Immediate',
          validationMode: 'Immediate',
          propertyAnnotations: [
            {
              name: 'email',
              displayName: 'E-Mail',
              index: 0,
              editor: 'Email',
              validators: [
                {
                  name: 'NonEmpty',
                },
                {
                  name: 'RegEx',
                  params: {
                    regEx:
                      '[a-zA-Z0-9\\+\\.\\_\\%\\-\\+]{1,256}\\@[a-zA-Z0-9][a-zA-Z0-9\\-]{0,64}(\\.[a-zA-Z0-9][a-zA-Z0-9\\-]{0,25})+',
                    errorMessage: 'Please provide your valid email.',
                  },
                },
              ],
            },
            {
              name: 'password',
              displayName: 'Password',
              editor: 'Password',
              index: 1,
              validators: [
                {
                  name: 'NonEmpty',
                },
                {
                  name: 'MinimumLength',
                  params: {
                    length: 6,
                  },
                },
              ],
            },
          ],
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

    navigateToPasswordCreationPage() {
      this.$navigateTo(CreatePassword, { clearHistory: true })
    },
    handleOnSubmit() {
      this.state = { ...this.state, loading: true }
      const userEmail = this.$refs.dataform.getPropertyByName('email')
      const userPassword = this.$refs.dataform.getPropertyByName('password')
      if (!userEmail.valueCandidate || !userPassword.valueCandidate) {
        ToastService('Please provide both an email address and password.', '#be5138').show()
        this.$refs.dataform.notifyValidated('email', false)
        this.$refs.dataform.notifyValidated('password', false)
        this.state = { ...this.state, loading: false }
        return
      }
      if (userPassword.valueCandidate.length < 6) {
        ToastService('Password should be of minimum 6 characters', '#be5138').show()
        this.$refs.dataform.notifyValidated('email', false)
        this.$refs.dataform.notifyValidated('password', false)
        this.state = { ...this.state, loading: false }
        return
      }
      this.$refs.dataform.commitAll()
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
        <RadDataForm ref="dataform" :source="state.user" :metadata="state.userMetadata">
        </RadDataForm>
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
  width: 150;
  height: 150;
}

.header {
  horizontal-align: center;
  font-size: 25;
  font-weight: 600;
  margin-bottom: 70;
  text-align: center;
  color: #c19a6b;
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
