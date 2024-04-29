import { eq } from 'drizzle-orm'
import { users } from '@/db/schema'
import { db } from '@/server/sqlite-service'
import { UserView } from '~/models/userView.model'

const deny = () => {
  throw createError({
    statusCode: 401,
    statusMessage: 'Unauthorized',
  })
}

export default defineEventHandler(async (event) => {
  try {
    const userId = getQuery(event)?.id as string

    const user = db
      .select()
      .from(users)
      .where(eq(users.email, userId))
      .get()

    if (!user) {
      return deny()
    }

    return { user: new UserView(user) }
  }

  catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    })
  }
})
