## Drizzle ORM, SQLite and Nuxt JS - Getting Started 
> https://dev.to/aaronksaunders/drizzle-orm-sqlite-and-nuxt-js-getting-started-374m

Generate migration files
> npm exec drizzle-kit generate:sqlite --out migrations --schema db/schema.ts

Push migration to database
> npm exec drizzle-kit push:sqlite

This will generate migration in `\drizzle` folder

Open Drizzle Studio
> npm exec drizzle-kit studio
