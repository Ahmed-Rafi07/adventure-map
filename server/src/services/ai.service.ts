import { GoogleGenerativeAI } from '@google/generative-ai'
import { env } from '../config/env.js'

export async function generateMentorReply(message: string) {
  if (!env.GEMINI_API_KEY) {
    return fallbackReply(message)
  }

  const client = new GoogleGenerativeAI(env.GEMINI_API_KEY)
  const model = client.getGenerativeModel({ model: 'gemini-1.5-flash' })
  const result = await model.generateContent(`You are Ada, an RPG learning mentor. Reply clearly and helpfully.

Student question: ${message}`)
  return result.response.text()
}

function fallbackReply(message: string) {
  return `Ada: I would break "${message}" into one concept, one example, and one practice round. Start with the smallest step, then clear the boss.`
}
