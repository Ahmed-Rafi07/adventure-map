import { Schema, model } from 'mongoose'

const achievementSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    rarity: { type: String, enum: ['Common', 'Rare', 'Epic', 'Legendary'], default: 'Common' },
    unlockedAt: { type: String, default: '' },
  },
  { timestamps: true },
)

export const AchievementModel = model('Achievement', achievementSchema)
