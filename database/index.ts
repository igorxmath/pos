import { createClient } from '@libsql/client'
import { env } from '$/env'
import * as schema from '$/schema'
import { drizzle } from 'drizzle-orm/libsql'

const client = createClient({ url: env.DATABASE_URL, authToken: env.DATABASE_AUTH_TOKEN })

export const db = drizzle(client, { schema })
