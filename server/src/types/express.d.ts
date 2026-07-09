import type { UserPayload } from '../types/auth.js'

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload
    }
  }
}

export {}
