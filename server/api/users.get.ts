import { users } from '@/db/schema'
import { db } from '@/server/sqlite-service'
import { UserView } from '~/models/userView.model'

export default defineEventHandler(async () => {
  try {
    const usersResp = db.select().from(users).all()

    return {
      users: usersResp.map(user => new UserView(user)),
    }
  }

  catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    })
  }
})
