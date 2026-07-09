import { Router } from 'express'
import { authenticateRequest } from '../middleware/auth.js'
import { getLeaderboard } from '../controllers/leaderboard.controller.js'

export const leaderboardRouter = Router()

leaderboardRouter.get('/', authenticateRequest, getLeaderboard)
