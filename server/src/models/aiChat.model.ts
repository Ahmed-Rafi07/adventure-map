import { Schema, model } from 'mongoose'

const aiChatSchema = new Schema(
  {
    userId: { type: String, required: true },
    role: { type: String, enum: ['user', 'assistant'], required: true },
    message: { type: String, required: true },
    promptType: { type: String, default: 'general' },
  },
  { timestamps: true },
)

export const AiChatModel = model('AiChat', aiChatSchema)
