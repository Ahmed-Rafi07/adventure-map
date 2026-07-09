import type { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { env } from '../config/env.js'
import type { UserPayload } from '../types/auth.js'

export function authenticateRequest(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization

  if (!header) {
    req.user = demoUser()
    return next()
  }

  const token = header.replace(/^Bearer\s+/i, '')

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as UserPayload
    req.user = decoded
    return next()
  } catch {
    req.user = demoUser()
    return next()
  }
}

function demoUser(): UserPayload {
  return {
    id: 'usr_01',
    name: 'Aanya Nova',
    email: 'aanya@levelup.ai',
    role: 'student',
  }
}
