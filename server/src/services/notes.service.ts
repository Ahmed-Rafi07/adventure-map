import { NoteModel } from '../models/note.model.js'

export async function listNotes(userId: string) {
  return NoteModel.find({ userId }).sort({ pinned: -1, createdAt: -1 }).lean()
}

export async function createNote(userId: string, payload: { title: string; content: string; subject?: string }) {
  const note = await NoteModel.create({ userId, ...payload })
  return note.toObject()
}
