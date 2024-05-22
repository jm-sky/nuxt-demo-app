import bcrypt from 'bcrypt'
import { HttpStatusCode } from 'axios'
import { eq } from 'drizzle-orm'
import type { InsertUser } from '@/db/schema'
import { users, userSchema, users as usersTable } from '@/db/schema'
import { db } from '@/server/sqlite-service'
import { UserView } from '~/models/userView.model'
import type { TSession } from '~/server/sessionStore'
import { sessionStart } from '~/server/api/auth/login.post'

const BCRYPT_ROUNDS = 10

export default defineEventHandler(async (event) => {
  try {
    const payload = await readValidatedBody(event, userSchema.parseAsync)

    const newUser: InsertUser = {
      email: payload.email ?? '',
      password: bcrypt.hashSync(payload.password, BCRYPT_ROUNDS),
      firstName: payload.firstName ?? '',
      lastName: payload.lastName ?? '',
      isAdmin: false,
    }

    const { lastInsertRowid } = db.insert(users).values(newUser).run()

    if (!lastInsertRowid) {
      throw createError({
        statusCode: HttpStatusCode.BadRequest,
        statusMessage: 'Could not register new user',
      })
    }

    const userRecord = db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, payload.email))
      .get()

    if (!userRecord) {
      throw createError({
        statusCode: HttpStatusCode.BadRequest,
        statusMessage: 'Could not register new user',
      })
    }

    const user: UserView = UserView.fromUserRecord(userRecord)
    const session: TSession = sessionStart(user)

    return {
      session,
    }
  }
  catch (e: any) {
    throw createError({
      statusCode: HttpStatusCode.BadRequest,
      statusMessage: e.message,
    })
  }
})
