import { getString } from 'tns-core-modules/application-settings'

const standardHeaders: HeadersInit = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  Authorization: `Bearer `,
}

const fetchOptions: RequestInit = {
  mode: 'cors', // no-cors, cors, *same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    ...standardHeaders,
  },
  redirect: 'follow', // manual, *follow, error
  referrer: 'no-referrer',
}

const postOptions: RequestInit = {
  ...fetchOptions,
  method: 'POST',
}

const deleteOptions: RequestInit = {
  ...fetchOptions,
  method: 'DELETE',
}

export interface IHttpBasicResponse {
  json(): Promise<any>
  status: number
  statusText: string
  headers: Headers
  url?: string
  text?: any
}
export enum HttpMethod {
  Post = 'POST',
  Get = 'GET',
  Delete = 'DELETE',
}

export enum HttpStatusCode {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  UnprocessableEntity = 422,
  InternalServerError = 500,
  Other = 999,
}

export type Translations = { [key: string]: string }

export type PostedValues = { [key: string]: any }

export type FieldErrorValues = { [key: string]: Array<string> }

export interface IHttpResponse {
  message?: string
  status: number
  json: any
  fieldErrors?: FieldErrorValues
  url?: string
  text?: any
  isError?: boolean
}

export function httpGet(url: string): Promise<IHttpBasicResponse> {
  return fetch(url, {
    ...fetchOptions,
    method: HttpMethod.Get,
    headers: { ...standardHeaders, Authorization: `Bearer ${getString('camels-token')}` },
  })
}

export function httpDelete(url: string): Promise<IHttpBasicResponse> {
  return fetch(url, deleteOptions)
}

export function httpPost(url: string, data: object): Promise<IHttpBasicResponse> {
  console.log('post obj - ' + JSON.stringify(data))
  return fetch(url, {
    ...postOptions,
    headers: { ...standardHeaders, Authorization: `Bearer ${getString('camels-token')}` },
    body: JSON.stringify(data), // body data type must match "Content-Type"
  })
}

export default { httpGet, httpPost, httpDelete }
