import { UserModel } from '../models/user.model.js'
import { QuestModel } from '../models/quest.model.js'
import { RewardModel } from '../models/reward.model.js'
import { LeaderboardEntryModel } from '../models/leaderboardEntry.model.js'

export async function getAdminSummary() {
  const [users, quests, rewards, leaderboardEntries] = await Promise.all([
    UserModel.countDocuments(),
    QuestModel.countDocuments(),
    RewardModel.countDocuments(),
    LeaderboardEntryModel.countDocuments(),
  ])

  return {
    users,
    quests,
    rewards,
    leaderboardEntries,
    aiRequests: 4820,
    retention: 74,
  }
}
