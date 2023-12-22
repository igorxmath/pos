import { env } from '$/env'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './database/schema.ts',
  out: './database/migrations',
  driver: 'turso',
  dbCredentials: {
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
  },
  verbose: true,
  strict: true,
})
