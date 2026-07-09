import { Router } from 'express'
import { authenticateRequest } from '../middleware/auth.js'
import { getWorlds } from '../controllers/world.controller.js'

export const worldsRouter = Router()

worldsRouter.get('/', authenticateRequest, getWorlds)
