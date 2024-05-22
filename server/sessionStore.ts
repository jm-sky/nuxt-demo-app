import type { IUserView, UserView } from '~/models/userView.model'

export type TSession = {
  id: string
  user: UserView
  startedAt: Date
  expiresAt: Date
}

export type TSessionData = {
  id: string
  user: IUserView
  startedAt: string
  expiresAt: string
}

export const sessionStore: Record<string, TSession> = {}
