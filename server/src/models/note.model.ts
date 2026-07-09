import { Schema, model } from 'mongoose'

const noteSchema = new Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    subject: { type: String, default: '' },
    pinned: { type: Boolean, default: false },
  },
  { timestamps: true },
)

export const NoteModel = model('Note', noteSchema)
