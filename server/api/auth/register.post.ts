import bcrypt from 'bcrypt'
import type { InsertUser } from '@/db/schema'
import { users } from '@/db/schema'
import { db } from '@/server/sqlite-service'

const BCRYPT_ROUNDS = 10

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const newUser: InsertUser = {
      email: body.email ?? '',
      password: bcrypt.hashSync(body.password, BCRYPT_ROUNDS),
      firstName: body.firstName ?? body.name ?? '',
      lastName: body.lastName ?? '',
      isAdmin: false,
    }

    const result = db.insert(users).values(newUser).run()
    return { newUser: result }
  }
  catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    })
  }
})
