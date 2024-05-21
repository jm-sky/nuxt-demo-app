import type { InferSelectModel, InferInsertModel } from 'drizzle-orm'
import { eq, sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { z } from 'zod'
import { boolean } from '../types/boolean'
import { db } from '@/server/sqlite-service'

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  isAdmin: boolean('is_admin').default(false).notNull(),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
})

export type User = InferSelectModel<typeof users>
export type InsertUser = InferInsertModel<typeof users>

export const userSchema = z.object({
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20),
  password: z.string().min(6).max(50),
  email: z.string().email().min(3).max(20),
})
  .superRefine(({ password }, checkPassComplexity) => {
    const rules = {
      upperCase: {
        count: 0,
        pattern: /[A-Z]/,
      },
      lowerCase: {
        count: 0,
        pattern: /[a-z]/,
      },
      digits: {
        count: 0,
        pattern: /[0-9]/,
      },
    }

    Object.values(rules).forEach((rule) => {
      rule.count = password.match(rule.pattern)?.length ?? 0
    })

    if (Object.values(rules).filter(rule => rule.count <= 0).length > 0) {
      checkPassComplexity.addIssue({
        code: 'custom',
        message: 'Password does not meet complexity requirements',
      })
    }
  })
  .superRefine(async ({ email }, isEmailUnique) => {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .get()

    if (result) isEmailUnique.addIssue({
      code: 'custom',
      message: 'This e-mail is already in use',
    })
  })
