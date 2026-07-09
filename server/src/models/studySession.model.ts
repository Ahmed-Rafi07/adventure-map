import { Schema, model } from 'mongoose'

const studySessionSchema = new Schema(
  {
    userId: { type: String, required: true },
    startedAt: { type: Date, required: true },
    endedAt: { type: Date },
    xpGained: { type: Number, default: 0 },
    focusScore: { type: Number, default: 0 },
    questId: { type: String },
  },
  { timestamps: true },
)

export const StudySessionModel = model('StudySession', studySessionSchema)
