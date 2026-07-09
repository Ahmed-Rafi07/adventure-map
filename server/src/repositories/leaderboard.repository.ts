import { LeaderboardEntryModel } from '../models/leaderboardEntry.model.js'

export const leaderboardRepository = {
  list: () => LeaderboardEntryModel.find().sort({ xp: -1 }).lean(),
}
