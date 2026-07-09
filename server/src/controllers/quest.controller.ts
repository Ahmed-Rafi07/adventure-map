import type { Request, Response } from 'express'
import { listQuests } from '../services/quest.service.js'

export async function getQuests(_req: Request, res: Response) {
  res.json({ items: await listQuests() })
}
