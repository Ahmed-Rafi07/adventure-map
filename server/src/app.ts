import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import morgan from 'morgan'
import { healthRouter } from './routes/health.routes.js'
import { authRouter } from './routes/auth.routes.js'
import { dashboardRouter } from './routes/dashboard.routes.js'
import { aiRouter } from './routes/ai.routes.js'
import { worldsRouter } from './routes/worlds.routes.js'
import { questsRouter } from './routes/quests.routes.js'
import { leaderboardRouter } from './routes/leaderboard.routes.js'
import { notesRouter } from './routes/notes.routes.js'
import { flashcardsRouter } from './routes/flashcards.routes.js'
import { adminRouter } from './routes/admin.routes.js'
import { errorHandler } from './middleware/errorHandler.js'
import { notFoundHandler } from './middleware/notFoundHandler.js'

export function createApp() {
  const app = express()

  app.use(helmet())
  app.use(
    cors({
      origin: true,
      credentials: true,
    }),
  )
  app.use(rateLimit({ windowMs: 60_000, limit: 120 }))
  app.use(express.json({ limit: '2mb' }))
  app.use(morgan('dev'))

  app.get('/api', (_req, res) => {
    res.json({ name: 'LevelUp AI API', status: 'ok' })
  })

  app.use('/api/health', healthRouter)
  app.use('/api/auth', authRouter)
  app.use('/api/dashboard', dashboardRouter)
  app.use('/api/ai', aiRouter)
  app.use('/api/worlds', worldsRouter)
  app.use('/api/quests', questsRouter)
  app.use('/api/leaderboard', leaderboardRouter)
  app.use('/api/notes', notesRouter)
  app.use('/api/flashcards', flashcardsRouter)
  app.use('/api/admin', adminRouter)

  app.use(notFoundHandler)
  app.use(errorHandler)

  return app
}
