import { Router } from 'express'
import { authenticateRequest } from '../middleware/auth.js'
import { getAdminSummaryController } from '../controllers/admin.controller.js'

export const adminRouter = Router()

adminRouter.get('/summary', authenticateRequest, getAdminSummaryController)
