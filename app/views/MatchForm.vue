<script>
import Login from './Login.vue'
import { signup } from '../_shared/firebase/users.ts'
export default {
  name: 'MatchForm',
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
  <ModalStack class="modal-container">
    <StackLayout class="modal">
      <ScrollView>
        <StackLayout class="nt-form form">
          <StackLayout class="nt-input" margin-bottom="25">
            <TextField
              ref="venue"
              v-model="user.email"
              @returnPress="focusPassword"
              returnKeyType="next"
              class="nt-input input"
              hint="venue"
              type="text"
              font-size="18"
            />
            <StackLayout class="hr-light" />
          </StackLayout>
          <StackLayout class="nt-input" margin-bottom="25">
            <TextField
              ref="date"
              v-model="user.password"
              @returnPress="focusConfirmPassword"
              returnKeyType="next"
              class="nt-input input"
              hint="Date"
              secure="true"
              type="date"
              font-size="18"
            />
            <StackLayout class="hr-light" />
          </StackLayout>
          <StackLayout class="nt-input" margin-bottom="25">
            <TextField
              ref="time"
              v-model="user.confirmPassword"
              @returnPress="focusSubmitButton"
              returnKeyType="next"
              class="nt-input input"
              hint="time"
              secure="true"
              font-size="18"
            />
            <StackLayout class="hr-light" />
          </StackLayout>
          <StackLayout class="nt-input" margin-bottom="25">
            <TextField
              ref="opponent"
              v-model="user.confirmPassword"
              returnKeyType="next"
              class="nt-input input"
              hint="opponent"
              secure="true"
              font-size="18"
            />
            <StackLayout class="hr-light" />
          </StackLayout>

          <Button
            ref="submitButton"
            @tap="submit"
            text="Create Match"
            class="btn m-t-20 -rounded-lg -primary"
          /> </StackLayout
      ></ScrollView>
    </StackLayout>
  </ModalStack>
</template>

<style scoped lang="scss">
Scrollview {
  height: 80%;
}
.modal {
  margin: 20;
  margin-top: 35;
  border-radius: 8;
  horizontal-align: center;
  vertical-align: middle;
  background-color: white;
  width: 80%;
}

.modal-container {
  padding: 25;
  padding-bottom: 10;
}

.form {
  margin-left: 30;
  margin-right: 30;
  flex-grow: 2;
  vertical-align: middle;
}

.input {
  placeholder-color: #a8a8a8;
}

.login-label {
  horizontal-align: center;
  font-size: 16;
}

.bold {
  color: #000000;
}
</style>
