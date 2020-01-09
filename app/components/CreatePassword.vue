<script>
export default {
  data() {
    return {
      user: {
        password: "",
        confirmPassword: ""
      }
    };
  },
  methods: {
    focusConfirmPassword() {
      this.$refs.confirmPassword.nativeView.focus();
    },
    focusSubmitButton() {
      this.$refs.submitButton.nativeView.focus();
    }
  }
};
</script>

<template>
  <Page actionBarHidden="true">
    <FlexboxLayout class="page">
      <StackLayout class="form">
        <Image class="logo" src="~/assets/images/NativeScript-Vue.png" />
        <Label class="header" text="Camels" />

        <StackLayout class="input-field" marginBottom="25">
          <TextField
            ref="password"
            class="input"
            hint="*********"
            secure="true"
            v-model="user.password"
            :returnKeyType="token ? 'done' : 'next'"
            @returnPress="focusConfirmPassword"
            fontSize="18"
          />
          <StackLayout class="hr-light" />
        </StackLayout>
        <StackLayout class="input-field" marginBottom="25">
          <TextField
            ref="confirmPassword"
            class="input"
            hint="confirm Password"
            secure="true"
            v-model="user.confirmPassword"
            :returnKeyType="token ? 'done' : 'next'"
            @returnPress="focusSubmitButton"
            fontSize="18"
          />
          <StackLayout class="hr-light" />
        </StackLayout>

        <Button
          ref="submitButton"
          text="Complete"
          @tap="submit"
          class="btn btn-primary m-t-20"
        />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<style scoped lang="scss">
.page {
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
