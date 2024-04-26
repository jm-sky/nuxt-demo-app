import type { InferSelectModel, InferInsertModel } from 'drizzle-orm'
import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { boolean } from './types/boolean'

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
