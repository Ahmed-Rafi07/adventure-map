import { QuestModel } from '../models/quest.model.js'

export const questRepository = {
  list: () => QuestModel.find().sort({ boss: -1, progress: -1 }).lean(),
}
