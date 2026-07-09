import jwt from 'jsonwebtoken'
import { env } from '../config/env.js'
import type { UserPayload } from '../types/auth.js'

export function createDemoToken(user: UserPayload) {
  return jwt.sign(user, env.JWT_SECRET, { expiresIn: '7d' })
}

export function getDemoUser(): UserPayload {
  return {
    id: 'usr_01',
    name: 'Aanya Nova',
    email: 'aanya@levelup.ai',
    role: 'student',
  }
}
