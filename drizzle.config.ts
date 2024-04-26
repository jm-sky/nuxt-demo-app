// https://dev.to/aaronksaunders/drizzle-orm-sqlite-and-nuxt-js-getting-started-374m
import type { Config } from 'drizzle-kit'

export default {
  schema: './db/schema.ts',
  out: './db/migrations',
  driver: 'better-sqlite',
  dbCredentials: {
    url: './sqlite.db',
  },
} satisfies Config
