<script>
const firebaseWebApi = require("nativescript-plugin-firebase/app");
import { mapState, mapActions } from "vuex";
import { login, getRoles } from "../_shared/firbase.ts";
import Home from "./Home.vue";
import CreatePassword from "./CreatePassword.vue";

export default {
  name: "Login",
  components: { Home, CreatePassword },
  mounted: function() {
    this.$nextTick(function() {
      console.log("mounted");
      this.checkAuthentication();
    });
  },
  watch: {
    token(newValue, oldValue) {
      if (newValue || oldValue) {
        this.navigateToHomePage();
      }
    },
    invited(newValue, oldValue) {
      if (newValue && !this.token) {
        this.navigateToPasswordCreationPage();
      }
    }
  },
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  computed: mapState({
    token: state => state.authenticationModule.userContext.token,
    invited: state => state.authenticationModule.userContext.invited
  }),
  methods: {
    ...mapActions("authenticationModule", {
      setGlobalLoginState: "signedIn",
      setUserRole: "setUserRole"
    }),
    checkAuthentication() {
      console.log(this.token);
      if (this.token) {
        this.navigateToHomePage();
      }
    },
    submit() {
      if (!this.user.email || !this.user.password) {
        this.alert("Please provide both an email address and password.");
        return;
      }
      this.login();
    },

    async login() {
      const { uid, token } = await login(this.user.email, this.user.password);
      this.setGlobalLoginState({ token });
      const roles = await getRoles();
      const docs = await roles.get();
      if (docs.exists) {
        const data = docs.data();
        this.setUserRole({ role: data[uid].role });
      }
    },

    navigateToHomePage() {
      this.$navigateTo(Home, { clearHistory: true });
    },
    navigateToPasswordCreationPage() {
      this.$navigateTo(CreatePassword, { clearHistory: true });
    },

    forgotPassword() {
      prompt({
        title: "Forgot Password",
        message:
          "Enter the email address you used to register for Camels to reset your password.",
        inputType: "email",
        defaultText: "",
        okButtonText: "Ok",
        cancelButtonText: "Cancel"
      }).then(data => {
        if (data.result) {
        }
      });
    },

    focusPassword() {
      this.$refs.password.nativeView.focus();
    },
    focusLoginButton() {
      this.$refs.loginButton.nativeView.focus();
    },

    alert(message) {
      return alert({
        title: "Camels",
        okButtonText: "OK",
        message: message
      });
    }
  }
};
</script>

<template>
  <Page actionBarHidden="true">
    <FlexboxLayout class="page">
      <StackLayout class="form">
        <!-- <Image class="logo" src="~/assets/images/NativeScript-Vue.png" />
        <Label class="header" text="Camels" /> -->

        <StackLayout class="input-field" marginBottom="25">
          <TextField
            class="input"
            hint="youname@gmail.com"
            keyboardType="email"
            autocorrect="false"
            autocapitalizationType="none"
            v-model="user.email"
            returnKeyType="next"
            @returnPress="focusPassword"
            fontSize="18"
          />
          <StackLayout class="hr-light" />
        </StackLayout>

        <StackLayout class="input-field" marginBottom="25">
          <TextField
            ref="password"
            class="input"
            hint="*********"
            secure="true"
            v-model="user.password"
            :returnKeyType="token ? 'done' : 'next'"
            @returnPress="focusLoginButton"
            fontSize="18"
          />
          <StackLayout class="hr-light" />
        </StackLayout>

        <Button
          ref="loginButton"
          text="Log In"
          @tap="submit"
          class="btn btn-primary m-t-20"
        />
        <Label
          text="Forgot your password?"
          class="login-label"
          @tap="forgotPassword"
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

.sign-up-label {
  margin-bottom: 20;
}

.bold {
  color: #000000;
}
</style>
