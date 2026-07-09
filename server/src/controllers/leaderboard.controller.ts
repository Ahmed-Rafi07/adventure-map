import type { Request, Response } from 'express'
import { listLeaderboard } from '../services/leaderboard.service.js'

export async function getLeaderboard(_req: Request, res: Response) {
  res.json({ items: await listLeaderboard() })
}
