import bcrypt from 'bcrypt'
import { eq } from 'drizzle-orm'
import { users } from '@/db/schema'
import { db } from '@/server/sqlite-service'
import { UserView } from '@/server/models/userView.model'

const deny = () => {
  throw createError({
    statusCode: 401,
    statusMessage: 'Unauthorized',
  })
}

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
      return deny()
    }

    // TODO: Check
    const isMatch = await bcrypt.compare(body.password, usersResp.password)

    if (!isMatch) {
      return deny()
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
