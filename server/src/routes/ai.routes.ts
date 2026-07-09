import { Router } from 'express'
import { authenticateRequest } from '../middleware/auth.js'
import { postChatMessage } from '../controllers/ai.controller.js'

export const aiRouter = Router()

aiRouter.post('/chat', authenticateRequest, postChatMessage)
