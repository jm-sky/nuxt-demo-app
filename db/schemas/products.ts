import type { InferSelectModel, InferInsertModel } from 'drizzle-orm'
import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { boolean } from '../types/boolean'

export const products = sqliteTable('products', {
  id: integer('id').primaryKey(),
  name: text('name').notNull().unique(),
  description: text('description'),
  category: text('category'),
  isActive: boolean('is_active').default(false).notNull(),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
})

export type Product = InferSelectModel<typeof products>
export type InsertProduct = InferInsertModel<typeof products>
