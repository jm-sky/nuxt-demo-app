import type { User } from '@/db/schema'

export class UserView {
  id: number | string
  firstName: string
  lastName: string
  email: string
  isAdmin: boolean

  constructor(payload: User) {
    this.id = payload.id
    this.firstName = payload.firstName
    this.lastName = payload.lastName
    this.email = payload.email
    this.isAdmin = payload.isAdmin ?? false
  }
}
