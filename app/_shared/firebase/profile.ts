import { httpGet, httpPatch } from '../http/http'
import { handleResponse, handleException } from '../http/httpHelper'

const baseUrl = 'https://us-central1-camels-dev.cloudfunctions.net/api/profile'
const getProfile = async (uid: string) => {
  try {
    const response = await httpGet(baseUrl + `/${uid}`)
    return await handleResponse(response)
  } catch (e) {
    return handleException(e, 'fetch failed')
  }
}
const updateProfile = async (uid: string, type: { [key: string]: boolean }) => {
  try {
    const response = await httpPatch(baseUrl + `/${uid}`, {
      type,
    })
    return await handleResponse(response)
  } catch (e) {
    return handleException(e, 'Update failed')
  }
}
export { getProfile, updateProfile }
