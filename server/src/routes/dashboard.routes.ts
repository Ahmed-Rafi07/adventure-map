import { Router } from 'express'
import { authenticateRequest } from '../middleware/auth.js'
import { getDashboardOverviewController } from '../controllers/dashboard.controller.js'

export const dashboardRouter = Router()

dashboardRouter.get('/overview', authenticateRequest, getDashboardOverviewController)
