import { eq } from 'drizzle-orm'
import type { InsertUser } from '@/db/schema'
import { users } from '@/db/schema'
import { db } from '@/server/sqlite-service'

export default defineEventHandler(async (event) => {
  try {
    const userId = event.context.params?.id as string
    const body = await readBody(event)
    const editUser: InsertUser = {
      ...body,
    }
    const usersResp = db
      .update(users)
      .set(editUser)
      .where(eq(users.id, parseInt(userId)))
      .run()
    return { user: usersResp }
  }
  catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    })
  }
})
