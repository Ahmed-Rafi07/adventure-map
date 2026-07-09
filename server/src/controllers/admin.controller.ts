import type { Request, Response } from 'express'
import { getAdminSummary } from '../services/admin.service.js'

export async function getAdminSummaryController(_req: Request, res: Response) {
  res.json(await getAdminSummary())
}
