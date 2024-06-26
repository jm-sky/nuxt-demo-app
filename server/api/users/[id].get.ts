import { eq } from 'drizzle-orm'
import { users } from '@/db/schema'
import { db } from '@/server/sqlite-service'

export default defineEventHandler(async (event) => {
  try {
    // get id as function parameter from route params
    const userId = event.context.params?.id as string

    const user = db
      .select()
      .from(users)
      .where(eq(users.id, parseInt(userId)))
      .get()

    return { user }
  }

  catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    })
  }
})
