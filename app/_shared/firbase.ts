const firebaseApi = require("nativescript-plugin-firebase/app");
const ApplicationSettings = require("tns-core-modules/application-settings");

const handleException = (error: any, type: string) => {
  alert(type + ": " + error.message);
  return { message: error.message, type, isError: true };
};
const login = async (email: string, password: string) => {
  try {
    const { user } = await firebaseApi
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log("Firebase login success");
    return user.getIdToken().then((token: string) => {
      const userData = { uid: user.uid, token };
      console.log(userData);
      ApplicationSettings.setString("camels-token", JSON.stringify(token));
      return userData;
    });
  } catch (e) {
    return handleException(e, "Login failed");
  }
};
const logout = async () => {
  try {
    const data = await firebaseApi.auth().signOut();
    ApplicationSettings.remove("camels-token");
    console.log("Firebase logout success");
    return data;
  } catch (e) {
    return handleException(e, "Logout failed");
  }
};
const getRoles = async () => {
  try {
    const roles = await firebaseApi
      .firestore()
      .collection("roles")
      .doc("unm5MSi7YAUqolmtB00R");
    return roles;
  } catch (e) {
    return handleException(e, "fetch failed");
  }
};
const sendSignInLink = async (email: string) => {
  try {
    return await firebaseApi.auth().sendSignInLinkToEmail(email, {
      url: "https://camels.page.link/zXbp"
      // the stuff below is optional, if not set the plugin will infer this for you (bundle/package is taken from currently used platform)
      //   iOS: {
      //     bundleId: "my.bundle.id"
      //   },
      //   android: {
      //     packageName: "my.package.name"
      //   }
    });
  } catch (e) {
    return handleException(e, "Sending link failed");
  }
};
export { login, logout, getRoles, sendSignInLink };
