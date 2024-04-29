import type { InsertUser } from '@/db/schema'
import { users } from '@/db/schema'
import { db } from '@/server/sqlite-service'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const newUser: InsertUser = {
      email: body.email ?? '',
      password: body.password ?? '',
      firstName: body.firstName ?? body.name ?? '',
      lastName: body.lastName ?? '',
      isAdmin: false,
    }

    const user = db.insert(users).values(newUser).run()

    return { user }
  }
  catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    })
  }
})
