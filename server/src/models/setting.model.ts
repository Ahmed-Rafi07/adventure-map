import { Schema, model } from 'mongoose'

const settingSchema = new Schema(
  {
    userId: { type: String, required: true },
    darkMode: { type: Boolean, default: true },
    notificationsEnabled: { type: Boolean, default: true },
    soundsEnabled: { type: Boolean, default: true },
    streakShieldEnabled: { type: Boolean, default: true },
  },
  { timestamps: true },
)

export const SettingModel = model('Setting', settingSchema)
