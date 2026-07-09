import type { Request, Response } from 'express'
import { createNote, listNotes } from '../services/notes.service.js'

export async function getNotes(req: Request, res: Response) {
  const userId = req.user?.id ?? 'usr_01'
  res.json({ items: await listNotes(userId) })
}

export async function postNote(req: Request, res: Response) {
  const userId = req.user?.id ?? 'usr_01'
  const note = await createNote(userId, {
    title: String(req.body?.title ?? 'Untitled note'),
    content: String(req.body?.content ?? ''),
    subject: typeof req.body?.subject === 'string' ? req.body.subject : '',
  })

  res.status(201).json({ item: note })
}
