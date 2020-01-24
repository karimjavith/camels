<script>
import Login from './Login.vue'
import { updatePassword } from '../_shared/firebase/users.ts'
import { ToastService } from '../_shared/Toasty.ts'
import BaseButton from '../components/BaseButton.vue'

export default {
  name: 'ChangePassword',
  components: { BaseButton },
  data() {
    return {
      state: {
        loading: false,

        formValidation: {},
        user: {
          password: '',
          confirmPassword: '',
        },
        userMetadata: {
          isReadOnly: false,
          commitMode: 'Immediate',
          validationMode: 'OnLostFocus',
          propertyAnnotations: [
            {
              name: 'password',
              displayName: 'Password',
              editor: 'Password',
              index: 0,
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
        formValidation: {
          ...this.state.formValidation,
          [propertyName]: { name: propertyName, isValid: entityProperty.isValid },
        },
      }
    },
    async handleOnSubmit() {
      const userPassword = this.$refs.changePasswordForm.getPropertyByName('password')
      const userConfirmPassword = this.$refs.changePasswordForm.getPropertyByName('confirmPassword')
      if (this.state.formValidation) {
        const isAnyFieldInvalid = Object.values(this.state.formValidation).filter(x => !x.isValid)
        if (isAnyFieldInvalid.length > 0) {
          isAnyFieldInvalid.forEach(x => {
            this.$refs.changePasswordForm.notifyValidated(x.name, false)
          })
          ToastService(`Invalid entries - Please try again`, '#be5138').show()
          return
        }
      }
      if (!userPassword.valueCandidate || !userConfirmPassword.valueCandidate) {
        ToastService('Invalid entries. Please fill up all the respective details', '#be5138').show()
        return
      }
      if (userPassword.valueCandidate !== userConfirmPassword.valueCandidate) {
        ToastService('Invalid entries. Password do not match', '#be5138').show()
        return
      }

      this.$refs.changePasswordForm.commitAll()
      this.state = { ...this.state, loading: true }
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
      <RadDataForm
        ref="changePasswordForm"
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
