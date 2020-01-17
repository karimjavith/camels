import { MatchStatus } from './EMatchStatus'
import { MatchAvailabilityStatus } from './EMatchAvailabilityStatus'

type TSquad = {
  [key: string]: {
    pushToken: String
    displayName: String
    status: MatchAvailabilityStatus
  }
}

export type TMatchDetails = {
  venue: String
  date: String
  address: String
  time: String
  status: MatchStatus
  squad: TSquad | null
}
