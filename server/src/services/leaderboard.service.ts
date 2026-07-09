import { leaderboardRepository } from '../repositories/leaderboard.repository.js'

export async function listLeaderboard() {
  return leaderboardRepository.list()
}
