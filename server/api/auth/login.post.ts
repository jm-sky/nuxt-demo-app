import bcrypt from 'bcrypt'
import { eq } from 'drizzle-orm'
import { users } from '@/db/schema'
import { db } from '@/server/sqlite-service'
import { UserView } from '@/server/models/userView.model'

// DRAFT
export default defineEventHandler(async (event) => {
  try {
    const userId = event.context.params?.id as string
    const body = await readBody(event)

    const usersResp = db
      .select()
      .from(users)
      .where(eq(users.id, parseInt(userId)))
      .get()

    if (!usersResp) {
      return {}
    }

    // TODO: Check
    const isMatch = await bcrypt.compare(body.password, users.password)

    if (!isMatch) {
      return {}
    }

    return { user: new UserView(usersResp) }
  }

  catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    })
  }
})
