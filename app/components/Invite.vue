<script>
import {
  sendSignInLink,
  addInvitesToCollection,
  createUser
} from "../_shared/firbase.ts";
export default {
  data() {
    return {
      email: ""
    };
  },
  methods: {
    createguid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
        c
      ) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    },
    focusSubmitButton() {
      this.$refs.submitButton.nativeView.focus();
    },
    async sendInvite() {
      const result = await sendSignInLink(this.email);
      if (!result.isError) {
        const createUserResult = await addInvitesToCollection(this.email);
        console.log(result);
        if (result && !result.isError) {
          this.email = "";
        }
      }
    }
  }
};
</script>

<template>
  <FlexboxLayout class="page">
    <StackLayout class="form">
      <Label class="header" text="Invite the camel" />
      <StackLayout class="input-field" marginBottom="25">
        <TextField
          class="input"
          hint="name@gmail.com"
          keyboardType="email"
          autocorrect="false"
          autocapitalizationType="none"
          v-model="email"
          returnKeyType="next"
          @returnPress="focusSubmitButton"
          fontSize="18"
        />
        <StackLayout class="hr-light" />
      </StackLayout>

      <Button
        ref="submitButton"
        text="Send Invite"
        @tap="sendInvite"
        class="btn btn-primary m-t-20"
      />
    </StackLayout>
  </FlexboxLayout>
</template>

<style scoped lang="scss">
.form {
  margin-left: 100;
  margin-right: 100;
  flex-grow: 2;
  vertical-align: middle;

  .header {
    horizontal-align: center;
    font-size: 25;
    font-weight: 400;
    margin-bottom: 70;
    text-align: center;
    color: #000;
  }
  .input {
    font-size: 18;
    placeholder-color: #a8a8a8;
  }
}
</style>
