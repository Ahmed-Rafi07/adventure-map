import type { Request, Response } from 'express'
import { listWorlds } from '../services/world.service.js'

export async function getWorlds(_req: Request, res: Response) {
  res.json({ items: await listWorlds() })
}
