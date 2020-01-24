import { httpGet, httpPatch } from '../http/http'
import { handleException, handleResponse } from '../http/httpHelper'

const baseUrl = 'https://us-central1-camels-dev.cloudfunctions.net/api/home'

const getUpcomingMatchDetails = async (id: string) => {
  try {
    const response = await httpGet(baseUrl + `/matches/upcoming/${id}`)
    return await handleResponse(response)
  } catch (e) {
    return handleException(e, 'Cannot get upcoming match details')
  }
}
const getUnreadMatchCount = async (id: string) => {
  try {
    const response = await httpGet(baseUrl + `/matches/unreadCount/${id}`)
    return await handleResponse(response)
  } catch (e) {
    return handleException(e, 'Cannot get match count')
  }
}

const patchUserMatchStatus = async (id: string, data: { [key: string]: any }) => {
  try {
    const response = await httpPatch(baseUrl + `/matches/update/status/${id}`, { ...data })
    return await handleResponse(response)
  } catch (e) {
    return handleException(e, 'Update failed')
  }
}
export { getUpcomingMatchDetails, getUnreadMatchCount, patchUserMatchStatus }
