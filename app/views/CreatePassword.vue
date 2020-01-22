<script>
import Login from './Login.vue'
import { signup } from '../_shared/firebase/users.ts'
import { ToastService } from '../_shared/Toasty.ts'
import BaseButton from '../components/BaseButton.vue'

export default {
  name: 'CreatePassword',
  components: { BaseButton },
  data() {
    return {
      state: {
        loading: false,

        formValidation: {
          isValid: false,
          entityProperty: null,
        },
        user: {
          displayName: '',
          email: '',
          password: '',
          confirmPassword: '',
        },
        userMetadata: {
          isReadOnly: false,
          commitMode: 'Immediate',
          validationMode: 'OnLostFocus',
          propertyAnnotations: [
            {
              name: 'displayName',
              displayName: 'Display Name',
              index: 0,
              validators: [{ name: 'NonEmpty' }, { name: 'MaximumLength', params: { length: 20 } }],
            },
            {
              name: 'email',
              displayName: 'E-Mail',
              index: 1,
              editor: 'Email',
              validators: [
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
              index: 2,
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
            {
              name: 'confirmPassword',
              displayName: 'Confirm Password',
              editor: 'Password',
              index: 3,
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
      },
    }
  },
  methods: {
    focusSubmitButton() {
      this.$refs.submitButton.nativeView.focus()
    },
    async handleOnPropertyValidated({ object, propertyName, entityProperty }) {
      this.state = {
        ...this.state,
        formValidation: { entityProperty, isValid: entityProperty.isValid },
      }
    },
    async handleOnSubmit() {
      const displayName = this.$refs.createPasswordForm.getPropertyByName('displayName')
      const userEmail = this.$refs.createPasswordForm.getPropertyByName('email')
      const userPassword = this.$refs.createPasswordForm.getPropertyByName('password')
      const userConfirmPassword = this.$refs.createPasswordForm.getPropertyByName('confirmPassword')
      if (!this.state.formValidation.isValid) {
        ToastService(
          `Invalid entries - ${this.state.formValidation.entityProperty.valueCandidate}`,
          '#be5138'
        ).show()
        return
      }
      if (
        !displayName.valueCandidate ||
        !userEmail.valueCandidate ||
        !userPassword.valueCandidate ||
        !userConfirmPassword.valueCandidate
      ) {
        ToastService('Invalid entries. Please fill up all the respective details', '#be5138').show()
        return
      }
      if (userPassword.valueCandidate !== userConfirmPassword.valueCandidate) {
        ToastService('Invalid entries. Password do not match', '#be5138').show()
        return
      }

      this.$refs.createPasswordForm.commitAll()
      this.state = { ...this.state, loading: true }
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
      <RadDataForm
        ref="createPasswordForm"
        :source="state.user"
        :metadata="state.userMetadata"
        @propertyValidated="handleOnPropertyValidated"
      >
      </RadDataForm>
      <BaseButton
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

  .input {
    font-size: 18;
    placeholder-color: #a8a8a8;
  }
}
</style>
