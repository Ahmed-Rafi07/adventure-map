import type { Request, Response } from 'express'
import { createDemoToken, getDemoUser } from '../services/auth.service.js'

export function getCurrentUser(req: Request, res: Response) {
  res.json({ user: req.user ?? getDemoUser() })
}

export function firebaseLogin(_req: Request, res: Response) {
  const user = getDemoUser()
  const token = createDemoToken(user)
  res.json({ user, token })
}
