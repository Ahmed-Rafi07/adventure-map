import { Router } from 'express'
import { authenticateRequest } from '../middleware/auth.js'
import { getFlashcards, postFlashcard } from '../controllers/flashcards.controller.js'

export const flashcardsRouter = Router()

flashcardsRouter.get('/', authenticateRequest, getFlashcards)
flashcardsRouter.post('/', authenticateRequest, postFlashcard)
