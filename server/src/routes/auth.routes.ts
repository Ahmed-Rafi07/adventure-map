import { Router } from 'express'
import { authenticateRequest } from '../middleware/auth.js'
import { firebaseLogin, getCurrentUser } from '../controllers/auth.controller.js'

export const authRouter = Router()

authRouter.get('/me', authenticateRequest, getCurrentUser)
authRouter.post('/firebase', firebaseLogin)
