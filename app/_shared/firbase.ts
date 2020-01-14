import * as firebaseApi from 'nativescript-plugin-firebase/app'
import { setString, remove, getString } from 'tns-core-modules/application-settings'
import { httpGet, httpPost, IHttpBasicResponse, IHttpResponse, HttpStatusCode } from './http'
import { IdTokenResult } from 'nativescript-plugin-firebase'

const baseUrl = 'https://us-central1-camels-dev.cloudfunctions.net/api'

async function getJson(response: IHttpBasicResponse): Promise<any> {
  try {
    return await response.json()
  } catch (e) {
    return null
  }
}

const handleException = (error: any, type: string) => {
  console.log(error)
  alert(type + ': ' + error.message)
  return { message: error.message, type, isError: true, status: error.status, json: '' }
}

async function handleResponse(response: IHttpBasicResponse): Promise<IHttpResponse> {
  if (response.status === HttpStatusCode.Unauthorized) {
    return await handleException({ status: response.status }, 'Unauthorised')
  }
  const ok = response.status === HttpStatusCode.OK || response.status === HttpStatusCode.Created
  const json = await getJson(response)

  if (json == null) {
    return {
      fieldErrors: {},
      json: null,
      status: response.status,
      message: '',
    }
  } else {
    const message = json.message

    return {
      fieldErrors: ok ? {} : json.errors,
      json: ok ? json : null,
      status: response.status,
      message,
      isError: !ok ? true : false,
    }
  }
}
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
const getUser = async (id: string) => {
  try {
    const response = await httpGet(baseUrl + `/users/${id}`)
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
    const response = await httpPost(baseUrl + '/createUser', {
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
    const response = await httpPost(baseUrl + '/signup', {
      email,
      password,
      displayName: email,
      role: 'user',
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
export { login, logout, getUser, sendSignInLink, createUser, addInvitesToCollection, signup }
