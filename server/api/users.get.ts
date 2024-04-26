import { users } from '../../db/schema'
import { db } from '../sqlite-service'

export default defineEventHandler(async () => {
  try {
    const usersResp = db.select().from(users).all()
    return { users: usersResp }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    })
  }
})
