import { IHttpBasicResponse, IHttpResponse, HttpStatusCode } from './http'
import { ToastService } from '../Toasty'
async function getJson(response: IHttpBasicResponse): Promise<any> {
  try {
    return await response.json()
  } catch (e) {
    return null
  }
}

const handleException = (error: any, type: string) => {
  console.log(error)
  ToastService(type + ': ' + error.message, '#be5138').show()
  return { message: error.message, type, isError: true, status: error.status, json: '' }
}

async function handleResponse(response: IHttpBasicResponse): Promise<IHttpResponse> {
  if (response.status === HttpStatusCode.Unauthorized) {
    return await handleException({ status: response.status, message: response.statusText }, 'Error')
  }
  if (response.status === HttpStatusCode.Forbidden) {
    return await handleException({ status: response.status, message: response.statusText }, 'Error')
  }
  if (response.status === HttpStatusCode.NotFound) {
    return await handleException({ status: response.status, message: response.statusText }, 'Error')
  }
  if (response.status === HttpStatusCode.BadRequest) {
    return await handleException({ status: response.status, message: response.statusText }, 'Error')
  }
  if (response.status === HttpStatusCode.InternalServerError) {
    return await handleException({ status: response.status, message: response.statusText }, 'Error')
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

export { getJson, handleException, handleResponse }
