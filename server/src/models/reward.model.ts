import { Schema, model } from 'mongoose'

const rewardSchema = new Schema(
  {
    name: { type: String, required: true },
    kind: { type: String, default: 'cosmetic' },
    rarity: { type: String, default: 'Common' },
    costCoins: { type: Number, default: 0 },
  },
  { timestamps: true },
)

export const RewardModel = model('Reward', rewardSchema)
