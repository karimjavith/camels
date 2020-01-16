<script>
import Login from './Login.vue'
import { signup } from '../_shared/firebase/users.ts'
export default {
  name: 'CreatePassword',
  data() {
    return {
      user: {
        email: '',
        password: '',
        confirmPassword: '',
      },
    }
  },
  methods: {
    focusPassword() {
      this.$refs.password.nativeView.focus()
    },
    focusConfirmPassword() {
      this.$refs.confirmPassword.nativeView.focus()
    },
    focusSubmitButton() {
      this.$refs.submitButton.nativeView.focus()
    },
    async submit() {
      console.log('Sign up fired')
      const result = await signup(this.user.email, this.user.password)
      console.log(result)
      if (result && !result.isError) {
        this.$navigateTo(Login, { clearHistory: true })
      } else {
        alert(result.message)
      }
    },
  },
}
</script>

<template>
  <Page actionBarHidden="true">
    <FlexboxLayout class="page">
      <StackLayout class="nt-form form">
        <Image class="logo" src="~/assets/images/NativeScript-Vue.png" />
        <Label class="header" text="Camels" />
        <StackLayout class="nt-input input-field" margin-bottom="25">
          <TextField
            ref="email"
            v-model="user.email"
            @returnPress="focusPassword"
            returnKeyType="next"
            class="nt-input input"
            hint="camel@gmail.com"
            type="email"
            font-size="18"
          />
          <StackLayout class="hr-light" />
        </StackLayout>
        <StackLayout class="nt-input input-field" margin-bottom="25">
          <TextField
            ref="password"
            v-model="user.password"
            @returnPress="focusConfirmPassword"
            returnKeyType="next"
            class="nt-input input"
            hint="*********"
            secure="true"
            font-size="18"
          />
          <StackLayout class="hr-light" />
        </StackLayout>
        <StackLayout class="nt-input input-field" margin-bottom="25">
          <TextField
            ref="confirmPassword"
            v-model="user.confirmPassword"
            @returnPress="focusSubmitButton"
            returnKeyType="next"
            class="nt-input input"
            hint="confirm Password"
            secure="true"
            font-size="18"
          />
          <StackLayout class="hr-light" />
        </StackLayout>

        <Button
          ref="submitButton"
          @tap="submit"
          text="Sign up"
          class="btn btn-primary m-t-20 -rounded-sm -primary"
        />
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

.input-field {
  margin-bottom: 25;
}

.input {
  font-size: 18;
  placeholder-color: #a8a8a8;
}

.input-field .input {
  font-size: 54;
}

.btn-primary {
  height: 50;
  margin: 30 5 15 5;
  border-radius: 5;
  font-size: 16;
  font-weight: 500;
}

.login-label {
  horizontal-align: center;
  font-size: 16;
}

.bold {
  color: #000000;
}
</style>
