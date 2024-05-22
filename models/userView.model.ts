import dayjs from 'dayjs'
import type { User } from '~/db/schema'

export type IUserView = {
  id: number | string
  firstName: string
  lastName: string
  email: string
  isAdmin: boolean
  createdAt?: string | null
}

export class UserView {
  id: number | string
  firstName: string
  lastName: string
  email: string
  isAdmin: boolean
  createdAt?: Date | null

  constructor(payload: IUserView) {
    this.id = payload.id
    this.firstName = payload.firstName
    this.lastName = payload.lastName
    this.email = payload.email
    this.isAdmin = payload.isAdmin ? true : false
    this.createdAt = payload.createdAt ? dayjs(payload.createdAt).toDate() : null
  }

  static init(payload: IUserView) {
    return new UserView(payload)
  }

  static fromUserRecord(payload: User) {
    return UserView.init({
      id: payload.id,
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      isAdmin: payload.isAdmin ? true : false,
      createdAt: payload.createdAt,
    })
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}
