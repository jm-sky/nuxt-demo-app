import dayjs from 'dayjs'
import type { User } from '@/db/schema'

export type IUserView = User

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
    this.isAdmin = payload.isAdmin ?? false
    this.createdAt = payload.createdAt ? dayjs(payload.createdAt).toDate() : null
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}
