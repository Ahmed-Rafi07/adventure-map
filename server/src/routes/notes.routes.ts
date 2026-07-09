import { Router } from 'express'
import { authenticateRequest } from '../middleware/auth.js'
import { getNotes, postNote } from '../controllers/notes.controller.js'

export const notesRouter = Router()

notesRouter.get('/', authenticateRequest, getNotes)
notesRouter.post('/', authenticateRequest, postNote)
