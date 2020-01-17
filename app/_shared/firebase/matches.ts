import { httpGet, httpPost, httpPatch, httpDelete } from '../http/http'
import { handleResponse, handleException } from '../http/httpHelper'
import { TMatchDetails } from '../../types/TMatchDetails'
import { MatchAvailabilityStatus } from '../../types/EMatchAvailabilityStatus'

const baseUrl = 'https://us-central1-camels-dev.cloudfunctions.net/api/matches'

const getAllMatches = async (uid: string) => {
  try {
    const response = await httpGet(baseUrl + `/all/${uid}`)
    return await handleResponse(response)
  } catch (e) {
    return handleException(e, 'fetch failed')
  }
}

const getMatchDetailsForAdmin = async (matchId: string) => {
  try {
    const response = await httpGet(baseUrl + `/${matchId}`)
    return await handleResponse(response)
  } catch (e) {
    return handleException(e, 'fetch failed')
  }
}
const getMatchDetailsForUser = async (matchId: string, uid: string) => {
  try {
    const response = await httpGet(baseUrl + `/details/user/${matchId}/${uid}`)
    return await handleResponse(response)
  } catch (e) {
    return handleException(e, 'fetch failed')
  }
}
const getUnreadMatchCount = async (uid: string) => {
  try {
    const response = await httpGet(baseUrl + `/unreadCount/${uid}`)
    return await handleResponse(response)
  } catch (e) {
    return handleException(e, 'fetch failed')
  }
}
const createMatch = async (matchDetails: TMatchDetails) => {
  try {
    const response = await httpPost(baseUrl + '/createUser', {
      ...matchDetails,
    })
    return await handleResponse(response)
  } catch (e) {
    return handleException(e, 'Creating user failed')
  }
}
const updateMatch = async (matchId: string, matchDetails: TMatchDetails) => {
  try {
    const response = await httpPatch(baseUrl + `/${matchId}`, {
      ...matchDetails,
    })
    return await handleResponse(response)
  } catch (e) {
    return handleException(e, 'Update failed')
  }
}
const updateMatchStatusForUser = async (
  matchId: string,
  uid: string,
  status: MatchAvailabilityStatus
) => {
  try {
    const response = await httpPatch(baseUrl + `/details/update/${matchId}`, {
      uid,
      status,
    })
    return await handleResponse(response)
  } catch (e) {
    return handleException(e, 'Update failed')
  }
}
const removeMatch = async (matchId: string) => {
  try {
    const response = await httpDelete(baseUrl + `/${matchId}`)
    return await handleResponse(response)
  } catch (e) {
    return handleException(e, 'Delete failed')
  }
}
export {
  getAllMatches,
  getMatchDetailsForAdmin,
  getUnreadMatchCount,
  getMatchDetailsForUser,
  createMatch,
  updateMatch,
  updateMatchStatusForUser,
  removeMatch,
}
