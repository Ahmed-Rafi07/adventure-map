import type { Request, Response } from 'express'
import { getDashboardOverview } from '../services/dashboard.service.js'

export async function getDashboardOverviewController(_req: Request, res: Response) {
  const overview = await getDashboardOverview()
  res.json(overview)
}
