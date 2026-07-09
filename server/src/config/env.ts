import dotenv from 'dotenv'
import { z } from 'zod'

dotenv.config()

const schema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(4000),
  MONGO_URI: z.string().optional(),
  MONGODB_URI: z.string().optional(),
  JWT_SECRET: z.string().default('levelup-ai-dev-secret'),
  GEMINI_API_KEY: z.string().optional(),
  FIREBASE_PROJECT_ID: z.string().optional(),
  FIREBASE_CLIENT_EMAIL: z.string().optional(),
  FIREBASE_PRIVATE_KEY: z.string().optional(),
  FIREBASE_STORAGE_BUCKET: z.string().optional(),
})

const parsed = schema.parse(process.env)

export const env = {
  ...parsed,
  MONGO_URI: parsed.MONGO_URI ?? parsed.MONGODB_URI,
}
