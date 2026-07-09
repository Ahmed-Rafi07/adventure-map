import { Router } from 'express'
import { authenticateRequest } from '../middleware/auth.js'
import { getQuests } from '../controllers/quest.controller.js'

export const questsRouter = Router()

questsRouter.get('/', authenticateRequest, getQuests)
