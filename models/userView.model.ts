import type { User } from '@/db/schema'

export type IUserView = User;

export class UserView {
  id: number | string
  firstName: string
  lastName: string
  email: string
  isAdmin: boolean
  createdAt?: Date

  constructor(payload: IUserView) {
    this.id = payload.id
    this.firstName = payload.firstName
    this.lastName = payload.lastName
    this.email = payload.email
    this.email = payload.email
    this.createdAt = payload.createdAt ?? false
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
