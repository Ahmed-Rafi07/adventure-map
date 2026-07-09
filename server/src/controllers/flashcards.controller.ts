import type { Request, Response } from 'express'
import { createFlashcard, listFlashcards } from '../services/flashcards.service.js'

export async function getFlashcards(req: Request, res: Response) {
  const userId = req.user?.id ?? 'usr_01'
  res.json({ items: await listFlashcards(userId) })
}

export async function postFlashcard(req: Request, res: Response) {
  const userId = req.user?.id ?? 'usr_01'
  const flashcard = await createFlashcard(userId, {
    front: String(req.body?.front ?? ''),
    back: String(req.body?.back ?? ''),
    subject: typeof req.body?.subject === 'string' ? req.body.subject : '',
  })

  res.status(201).json({ item: flashcard })
}
