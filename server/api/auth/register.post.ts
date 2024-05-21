import bcrypt from 'bcrypt'
import { HttpStatusCode } from 'axios'
import type { InsertUser } from '@/db/schema'
import { users, userSchema } from '@/db/schema'
import { db } from '@/server/sqlite-service'

const BCRYPT_ROUNDS = 10

export default defineEventHandler(async (event) => {
  try {
    const body = await readValidatedBody(event, userSchema.parseAsync)

    const newUser: InsertUser = {
      email: body.email ?? '',
      password: bcrypt.hashSync(body.password, BCRYPT_ROUNDS),
      firstName: body.firstName ?? '',
      lastName: body.lastName ?? '',
      isAdmin: false,
    }

    const result = db.insert(users).values(newUser).run()

    return { user: result }
  }
  catch (e: any) {
    throw createError({
      statusCode: HttpStatusCode.BadRequest,
      statusMessage: e.message,
    })
  }
})
