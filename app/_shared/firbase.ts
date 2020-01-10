const firebaseApi = require("nativescript-plugin-firebase/app");
const ApplicationSettings = require("tns-core-modules/application-settings");
import { User } from "nativescript-plugin-firebase/firebase";

const handleException = (error: any, type: string) => {
  console.log(error);
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
    const fn = firebaseApi
      .functions()
      .httpsCallable("sendMailForFunctions", "us-central1");
    const result = await fn({ email, link: "https://camels.page.link/zXbp" });
    console.log(result);
    return result;
  } catch (e) {
    return handleException(e, "Sending link failed");
  }
};
const createUser = async (email: string, password: string) => {
  try {
    return await firebaseApi
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user: User) => {
        console.log("Firebase create user success");
        alert("Firebase create user success");
        return user;
      });
  } catch (e) {
    return handleException(e, "Creating user failed");
  }
};
const addInvitesToCollection = async (email: string) => {
  try {
    const inviteCollection = await firebaseApi
      .firestore()
      .collection("invites");
    inviteCollection.doc(email).set({
      status: true
    });
    alert("Yayyy!! Invite sent to the camel");
    return inviteCollection;
  } catch (e) {
    return handleException(e, "Add invitiee failed");
  }
};

const getInvitationStatusFor = async (email: string) => {
  try {
    const invites = await firebaseApi
      .firestore()
      .collection("invites")
      .doc(email);
    return invites;
  } catch (e) {
    return handleException(e, "Fetch invitied users failed");
  }
};
export {
  login,
  logout,
  getRoles,
  sendSignInLink,
  createUser,
  addInvitesToCollection,
  getInvitationStatusFor
};
