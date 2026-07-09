import { WorldModel } from '../models/world.model.js'

export const worldRepository = {
  list: () => WorldModel.find().sort({ progress: -1 }).lean(),
}
