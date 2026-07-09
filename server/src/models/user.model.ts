import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    role: { type: String, enum: ['student', 'mentor', 'admin'], default: 'student' },
    avatar: { type: String, default: 'LV' },
    level: { type: Number, default: 1 },
    powerLevel: { type: Number, default: 0 },
    xp: { type: Number, default: 0 },
    xpToNext: { type: Number, default: 1000 },
    coins: { type: Number, default: 0 },
    streak: { type: Number, default: 0 },
    streakShield: { type: Boolean, default: false },
    currentWorld: { type: String, default: 'Mathematics Kingdom' },
    currentKingdom: { type: String, default: 'Fractions Citadel' },
  },
  { timestamps: true },
)

export const UserModel = model('User', userSchema)
