import { Schema, model } from 'mongoose'

const notificationSchema = new Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    type: { type: String, default: 'system' },
    read: { type: Boolean, default: false },
  },
  { timestamps: true },
)

export const NotificationModel = model('Notification', notificationSchema)
