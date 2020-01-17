<script>
import { sendSignInLink, addInvitesToCollection } from '../_shared/firebase/users.ts'
export default {
  data() {
    return {
      email: '',
    }
  },
  methods: {
    createguid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
      })
    },
    focusSubmitButton() {
      this.$refs.submitButton.nativeView.focus()
    },
    async sendInvite() {
      const result = await sendSignInLink(this.email)
      if (!result.isError) {
        const createUserResult = await addInvitesToCollection(this.email)
        console.log(createUserResult)
        if (createUserResult && !createUserResult.isError) {
          this.email = ''
        }
      } else {
        const { message } = result
        alert(message)
      }
    },

    onNavigationButtonTap() {
      this.$navigateBack()
    },
  },
}
</script>

<template>
  <Page>
    <!-- <FlexboxLayout class="page"> -->
    <ActionBar>
      <ActionItem
        @tap="onNavigationButtonTap"
        ios.systemIcon="9"
        ios.position="left"
        android.systemIcon="ic_menu_back"
      ></ActionItem>
    </ActionBar>
    <StackLayout class="form">
      <Label class="header" text="Invite the camel" />
      <StackLayout class="input-field" margin-bottom="25">
        <TextField
          v-model="email"
          @returnPress="focusSubmitButton"
          class="input"
          hint="name@gmail.com"
          keyboard-type="email"
          autocorrect="false"
          autocapitalization-type="none"
          return-key-type="next"
          font-size="18"
        />
        <StackLayout class="hr-light" />
      </StackLayout>

      <Button
        ref="submitButton"
        @tap="sendInvite"
        text="Send Invite"
        class="btn btn-primary m-t-20"
      />
    </StackLayout>
    <!-- </FlexboxLayout> -->
  </Page>
</template>

<style scoped lang="scss">
ActionBar {
  background-color: #ffffff;
}
.form {
  padding: 10;
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
