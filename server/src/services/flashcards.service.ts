import { FlashcardModel } from '../models/flashcard.model.js'

export async function listFlashcards(userId: string) {
  return FlashcardModel.find({ userId }).sort({ mastery: -1 }).lean()
}

export async function createFlashcard(userId: string, payload: { front: string; back: string; subject?: string }) {
  const flashcard = await FlashcardModel.create({ userId, ...payload })
  return flashcard.toObject()
}
