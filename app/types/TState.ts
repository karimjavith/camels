export type TAppState = {
  version: string
}

export type TAuthState = {
  userContext: {
    uid?: string | null
    token?: string
    invited?: boolean
    role?: number
    loggedIn?: boolean
  }
}
