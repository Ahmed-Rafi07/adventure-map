import type { Achievement, LeaderboardEntry, Quest, StatCardData, UserProfile, World } from '../types/domain'

export const profile: UserProfile = {
  id: 'usr_01',
  name: 'Aanya Nova',
  email: 'aanya@levelup.ai',
  role: 'student',
  avatar: 'AN',
  level: 18,
  powerLevel: 2840,
  xp: 7680,
  xpToNext: 9200,
  coins: 1820,
  streak: 17,
  streakShield: true,
  currentWorld: 'Mathematics Kingdom',
  currentKingdom: 'Fractions Citadel',
}

export const dashboardStats: StatCardData[] = [
  { label: 'Power Level', value: '2,840', delta: '+180 this week', tone: 'gold' },
  { label: 'XP Collected', value: '7,680', delta: '+940 today', tone: 'violet' },
  { label: 'Gold Coins', value: '1,820', delta: '+120 from quests', tone: 'cyan' },
  { label: 'Study Streak', value: '17 days', delta: 'Shield active', tone: 'emerald' },
]

export const worlds: World[] = [
  {
    id: 'world-math',
    name: 'Mathematics Kingdom',
    theme: 'Algebra towers, geometry forests, and puzzle dungeons',
    progress: 68,
    kingdoms: 5,
    quests: 24,
    bossName: 'The Decimal Hydra',
  },
  {
    id: 'world-science',
    name: 'Science Frontier',
    theme: 'Lab quests, experiment rituals, and orbital challenges',
    progress: 41,
    kingdoms: 4,
    quests: 18,
    bossName: 'Captain Quasar',
  },
  {
    id: 'world-history',
    name: 'History Empire',
    theme: 'Chronicle halls, memory temples, and timeline raids',
    progress: 54,
    kingdoms: 3,
    quests: 16,
    bossName: 'The Archive Warden',
  },
]

export const quests: Quest[] = [
  {
    id: 'quest-1',
    title: 'Fractions Patrol',
    subject: 'Mathematics',
    kingdom: 'Fractions Citadel',
    xp: 320,
    coins: 85,
    difficulty: 'Medium',
    progress: 70,
    dueAt: 'Today, 7:00 PM',
  },
  {
    id: 'quest-2',
    title: 'Respiration Recon',
    subject: 'Science',
    kingdom: 'Cell Harbor',
    xp: 240,
    coins: 70,
    difficulty: 'Easy',
    progress: 45,
    dueAt: 'Tomorrow, 9:00 AM',
  },
  {
    id: 'quest-3',
    title: 'Geometry Boss Battle',
    subject: 'Mathematics',
    kingdom: 'Angles Arena',
    xp: 540,
    coins: 150,
    difficulty: 'Boss',
    progress: 30,
    dueAt: 'Fri, 8:00 PM',
    boss: true,
  },
]

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Streak Guardian',
    description: 'Protected a 14-day streak with a shield',
    rarity: 'Epic',
    unlockedAt: '2 days ago',
  },
  {
    id: 'ach-2',
    title: 'Boss Breaker',
    description: 'Defeated 6 chapter bosses',
    rarity: 'Rare',
    unlockedAt: 'Yesterday',
  },
  {
    id: 'ach-3',
    title: 'Scholar of the Realm',
    description: 'Completed 100 lessons across all worlds',
    rarity: 'Legendary',
    unlockedAt: 'Last week',
  },
]

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, name: 'Zara Khan', school: 'Northview Academy', xp: 12440, powerLevel: 4120, streak: 31 },
  { rank: 2, name: 'Aanya Nova', school: 'Northview Academy', xp: 11860, powerLevel: 3840, streak: 17 },
  { rank: 3, name: 'Ethan Ray', school: 'Sunrise Public', xp: 11210, powerLevel: 3560, streak: 24 },
  { rank: 4, name: 'Maya Chen', school: 'Sunrise Public', xp: 10890, powerLevel: 3340, streak: 12 },
]

export const mentorPrompts = [
  'Explain this like I am 10',
  'Generate 5 practice questions',
  'Create a quick revision note',
  'Find my weak topics',
  'Give me a 3-minute recap',
]

export const analyticsSeries = [
  { day: 'Mon', xp: 420, focus: 52 },
  { day: 'Tue', xp: 610, focus: 68 },
  { day: 'Wed', xp: 480, focus: 56 },
  { day: 'Thu', xp: 780, focus: 72 },
  { day: 'Fri', xp: 920, focus: 81 },
  { day: 'Sat', xp: 760, focus: 76 },
  { day: 'Sun', xp: 640, focus: 64 },
]
