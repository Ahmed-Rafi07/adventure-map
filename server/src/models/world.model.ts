import { Schema, model } from 'mongoose'

const worldSchema = new Schema(
  {
    name: { type: String, required: true },
    theme: { type: String, required: true },
    progress: { type: Number, default: 0 },
    kingdoms: { type: Number, default: 0 },
    quests: { type: Number, default: 0 },
    bossName: { type: String, required: true },
  },
  { timestamps: true },
)

export const WorldModel = model('World', worldSchema)
