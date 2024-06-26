import bcrypt from 'bcrypt'
import { eq } from 'drizzle-orm'
import { users as usersSchema } from '@/db/schema'
import { db } from '@/server/sqlite-service'
import { UserView } from '~/models/userView.model'

const deny = () => {
  throw createError({
    statusCode: 401,
    statusMessage: 'Unauthorized',
  })
}

// DRAFT
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const user = db
      .select()
      .from(usersSchema)
      .where(eq(usersSchema.email, body.email))
      .get()

    if (!user) {
      return deny()
    }

    // TODO: Check
    const isMatch = await bcrypt.compare(body.password, user.password)

    if (!isMatch) {
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
