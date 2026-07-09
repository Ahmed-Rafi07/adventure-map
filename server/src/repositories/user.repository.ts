import { UserModel } from '../models/user.model.js'

export const userRepository = {
  findDemoUser: () => UserModel.findOne({ email: 'aanya@levelup.ai' }).lean(),
  upsertByEmail: (email: string, data: Record<string, unknown>) =>
    UserModel.findOneAndUpdate({ email }, { $set: data }, { upsert: true, new: true }).lean(),
}
