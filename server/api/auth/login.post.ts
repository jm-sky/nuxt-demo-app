import bcrypt from 'bcrypt'
import type { H3Event } from 'h3'
import { eq } from 'drizzle-orm'
import { HttpStatusCode } from 'axios'
import dayjs from 'dayjs'
import { v4 } from 'uuid'
import type { User } from '@/db/schema'
import { users as usersTable } from '@/db/schema'
import { db } from '@/server/sqlite-service'
import { UserView } from '~/models/userView.model'
import type { TLoginSchema } from '~/server/schema/loginSchema'
import { loginSchema } from '~/server/schema/loginSchema'
import type { TSession } from '~/server/sessionStore'
import { sessionStore } from '~/server/sessionStore'

export const SESSION_LIFETIME = 15

const deny = () => {
  throw createError({
    statusCode: HttpStatusCode.Unauthorized,
    statusMessage: 'Unauthorized',
  })
}

const validatePayload = async (event: H3Event): Promise<TLoginSchema> => {
  const body = await readBody(event)
  const { data, success: isValid } = loginSchema.safeParse(body)

  if (!isValid) {
    return deny()
  }

  return data
}

const findUser = async (data: TLoginSchema): Promise<User> => {
  const userRecord = db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, data.email))
    .get()

  if (!userRecord) {
    return deny()
  }

  const isMatch = await bcrypt.compare(data.password, userRecord.password)

  if (!isMatch) {
    return deny()
  }

  return userRecord
}

export const sessionStart = (user: UserView): TSession => {
  const startedAt = dayjs().toDate()
  const expiresAt = dayjs(startedAt).add(SESSION_LIFETIME, 'minute').toDate()
  const sessionId = v4()
  const session: TSession = {
    id: sessionId,
    user,
    startedAt,
    expiresAt,
  }

  sessionStore[sessionId] = session

  return session
}

export default defineEventHandler(async (event) => {
  try {
    const data: TLoginSchema = await validatePayload(event)
    const userRecord: User = await findUser(data)
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
