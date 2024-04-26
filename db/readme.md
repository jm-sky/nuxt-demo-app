## Drizzle ORM, SQLite and Nuxt JS - Getting Started 
> https://dev.to/aaronksaunders/drizzle-orm-sqlite-and-nuxt-js-getting-started-374m

Generate migration files. This command checks for differences between schema and database.
> pnpm exec drizzle-kit generate:sqlite --out migrations --schema db/schema.ts

This will generate migration in `\migrations` folder

Push migration to database
> pnpm exec drizzle-kit push:sqlite

This will commit changes to `\sqlite.db` file

Open Drizzle Studio
> pnpm exec drizzle-kit studio
