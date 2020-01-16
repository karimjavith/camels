import firebase from 'nativescript-plugin-firebase'
import * as firebaseApi from 'nativescript-plugin-firebase/app'
import { setString, remove, getString } from 'tns-core-modules/application-settings'
import { httpGet, httpPost, httpPatch, HttpStatusCode, httpDelete } from '../http/http'
import { IdTokenResult } from 'nativescript-plugin-firebase'
import { handleException, handleResponse } from '../http/httpHelper'

const baseUrl = 'https://us-central1-camels-dev.cloudfunctions.net/api/users'
const login = async (email: string, password: string) => {
  try {
    const { user } = await firebaseApi.auth().signInWithEmailAndPassword(email, password)
    console.log('Firebase login success')
    return user.getIdTokenResult().then((result: IdTokenResult) => {
      const userData = { uid: user.uid, token: result.token, role: result.claims['role'] }
      console.log(userData)
      setString('camels-token', userData.token)
      return userData
    })
  } catch (e) {
    return handleException(e, 'Login failed')
  }
}
const logout = async () => {
  try {
    const data = await firebaseApi.auth().signOut()
    remove('camels-token')
    console.log('Firebase logout success')
    return data
  } catch (e) {
    return handleException(e, 'Logout failed')
  }
}

async function checkIfTokenIsValid() {
  try {
    const result = await httpGet(baseUrl + '/verifyIdToken')
    if (result.status !== HttpStatusCode.OK) {
      throw new Error()
    }
    return { verified: true }
  } catch (e) {
    return { verified: false }
  }
}
const getUser = async (id: string) => {
  try {
    const response = await httpGet(baseUrl + `/${id}`)
    return await handleResponse(response)
  } catch (e) {
    return handleException(e, 'fetch failed')
  }
}

const getAllUsers = async () => {
  try {
    const response = await httpGet(baseUrl)
    return await handleResponse(response)
  } catch (e) {
    return handleException(e, 'fetch failed')
  }
}
const sendSignInLink = async (email: string) => {
  try {
    const fn = firebaseApi.functions().httpsCallable('sendMailForFunctions', 'us-central1')
    const result = await fn({
      email,
      link: 'https://camels.page.link/zXbp',
      token: getString('camels-token'),
    })
    console.log(result)
    return result
  } catch (e) {
    return handleException(e, 'Sending link failed')
  }
}
const createUser = async (email: string, password: string) => {
  try {
    const response = await httpPost(baseUrl + '/create', {
      email,
      password,
      displayName: email,
      role: 'user',
    })
    return await handleResponse(response)
  } catch (e) {
    return handleException(e, 'Creating user failed')
  }
}
const signup = async (email: string, password: string) => {
  console.log('signup for ' + email)
  try {
    const pushToken = await firebase.getCurrentPushToken()
    const response = await httpPost(baseUrl + '/signup', {
      email,
      password,
      displayName: email,
      role: 'user',
      pushToken,
    })
    console.log(response)
    return await handleResponse(response)
  } catch (e) {
    return handleException(e, 'Sign up failed')
  }
}
const addInvitesToCollection = async (email: string) => {
  try {
    const inviteCollection = await firebaseApi.firestore().collection('invites')
    inviteCollection.doc(email).set({
      status: true,
    })
    alert('Yayyy!! Invite sent to the camel')
    return inviteCollection
  } catch (e) {
    return handleException(e, 'Add invitiee failed')
  }
}
const updateUser = async (id: string, data: { [key: string]: any }) => {
  try {
    const response = await httpPatch(baseUrl + `/${id}`, {
      displayName: data.displayName,
      role: data.role,
    })
    return await handleResponse(response)
  } catch (e) {
    return handleException(e, 'Update failed')
  }
}
const removeUser = async (id: string) => {
  try {
    const response = await httpDelete(baseUrl + `/${id}`)
    return await handleResponse(response)
  } catch (e) {
    return handleException(e, 'Delete failed')
  }
}
export {
  login,
  logout,
  getUser,
  getAllUsers,
  sendSignInLink,
  createUser,
  addInvitesToCollection,
  signup,
  checkIfTokenIsValid,
  updateUser,
  removeUser,
}