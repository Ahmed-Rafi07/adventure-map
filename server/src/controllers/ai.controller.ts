import type { Request, Response } from 'express'
import { generateMentorReply } from '../services/ai.service.js'
import { AiChatModel } from '../models/aiChat.model.js'

export async function postChatMessage(req: Request, res: Response) {
  const message = typeof req.body?.message === 'string' ? req.body.message : ''
  const reply = await generateMentorReply(message)
  const userId = req.user?.id ?? 'usr_01'

  await AiChatModel.create([
    { userId, role: 'user', message, promptType: 'general' },
    { userId, role: 'assistant', message: reply, promptType: 'general' },
  ])

  res.json({ reply })
}
