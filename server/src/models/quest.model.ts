import { Schema, model } from 'mongoose'

const questSchema = new Schema(
  {
    title: { type: String, required: true },
    subject: { type: String, required: true },
    kingdom: { type: String, required: true },
    xp: { type: Number, default: 0 },
    coins: { type: Number, default: 0 },
    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard', 'Boss'], default: 'Medium' },
    progress: { type: Number, default: 0 },
    dueAt: { type: String, default: '' },
    boss: { type: Boolean, default: false },
  },
  { timestamps: true },
)

export const QuestModel = model('Quest', questSchema)
