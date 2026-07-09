import { worldRepository } from '../repositories/world.repository.js'
import { questRepository } from '../repositories/quest.repository.js'
import { leaderboardRepository } from '../repositories/leaderboard.repository.js'
import { userRepository } from '../repositories/user.repository.js'

const analyticsSeries = [
  { day: 'Mon', xp: 420, focus: 52 },
  { day: 'Tue', xp: 610, focus: 68 },
  { day: 'Wed', xp: 480, focus: 56 },
  { day: 'Thu', xp: 780, focus: 72 },
  { day: 'Fri', xp: 920, focus: 81 },
  { day: 'Sat', xp: 760, focus: 76 },
  { day: 'Sun', xp: 640, focus: 64 },
]

export async function getDashboardOverview() {
  const [profile, quests, worlds, leaderboard] = await Promise.all([
    userRepository.findDemoUser(),
    questRepository.list(),
    worldRepository.list(),
    leaderboardRepository.list(),
  ])

  return {
    profile,
    stats: [
      { label: 'Power Level', value: '2,840', delta: '+180 this week', tone: 'gold' },
      { label: 'XP Collected', value: '7,680', delta: '+940 today', tone: 'violet' },
      { label: 'Gold Coins', value: '1,820', delta: '+120 from quests', tone: 'cyan' },
      { label: 'Study Streak', value: '17 days', delta: 'Shield active', tone: 'emerald' },
    ],
    quests: quests.slice(0, 3),
    worlds,
    leaderboard: leaderboard.slice(0, 4),
    series: analyticsSeries,
  }
}
