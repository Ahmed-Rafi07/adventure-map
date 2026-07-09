import { Schema, model } from 'mongoose'

const quizAttemptSchema = new Schema(
  {
    userId: { type: String, required: true },
    questId: { type: String, required: true },
    score: { type: Number, default: 0 },
    maxScore: { type: Number, default: 100 },
    answers: [{ questionId: String, correct: Boolean, selected: String }],
    durationSeconds: { type: Number, default: 0 },
    mode: { type: String, enum: ['practice', 'exam', 'boss'], default: 'practice' },
  },
  { timestamps: true },
)

export const QuizAttemptModel = model('QuizAttempt', quizAttemptSchema)
