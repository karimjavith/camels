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
  <Page class="nt-page">
    <ActionBar class="nt-action-bar" title="Invite">
      <NavigationButton
        @tap="onNavigationButtonTap"
        ios.systemIcon="9"
        ios.position="left"
        text="Back"
        android.systemIcon="ic_menu_back"
      ></NavigationButton>
    </ActionBar>
    <StackLayout class="nt-form form">
      <Label class="header h2 m-30" text="Invite the camel" />
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
        class="btn -primary -rounded-lg m-t-20"
      />
    </StackLayout>
    <!-- </FlexboxLayout> -->
  </Page>
</template>

<style scoped lang="scss">
@import '~/_app.common';
.form {
  padding: 10;
  flex-grow: 2;
  vertical-align: middle;

  .header {
    horizontal-align: center;
    font-weight: 400;
    text-align: center;
    color: $text-color;
  }
  .input {
    font-size: 18;
    placeholder-color: #a8a8a8;
  }
}
</style>
