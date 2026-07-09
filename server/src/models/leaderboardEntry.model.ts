import { Schema, model } from 'mongoose'

const leaderboardEntrySchema = new Schema(
  {
    name: { type: String, required: true },
    school: { type: String, required: true },
    xp: { type: Number, default: 0 },
    powerLevel: { type: Number, default: 0 },
    streak: { type: Number, default: 0 },
    scope: { type: String, default: 'global' },
  },
  { timestamps: true },
)

export const LeaderboardEntryModel = model('LeaderboardEntry', leaderboardEntrySchema)
