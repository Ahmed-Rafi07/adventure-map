import { Schema, model } from 'mongoose'

const flashcardSchema = new Schema(
  {
    userId: { type: String, required: true },
    front: { type: String, required: true },
    back: { type: String, required: true },
    subject: { type: String, default: '' },
    mastery: { type: Number, default: 0 },
  },
  { timestamps: true },
)

export const FlashcardModel = model('Flashcard', flashcardSchema)
