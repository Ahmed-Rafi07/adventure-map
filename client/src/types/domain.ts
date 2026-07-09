export type Role = 'student' | 'mentor' | 'admin'

export interface UserProfile {
  id: string
  name: string
  email: string
  role: Role
  avatar: string
  level: number
  powerLevel: number
  xp: number
  xpToNext: number
  coins: number
  streak: number
  streakShield: boolean
  currentWorld: string
  currentKingdom: string
}

export interface StatCardData {
  label: string
  value: string
  delta: string
  tone: 'gold' | 'cyan' | 'violet' | 'emerald' | 'rose'
}

export interface Quest {
  id: string
  title: string
  subject: string
  kingdom: string
  xp: number
  coins: number
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Boss'
  progress: number
  dueAt: string
  boss?: boolean
}

export interface World {
  id: string
  name: string
  theme: string
  progress: number
  kingdoms: number
  quests: number
  bossName: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary'
  unlockedAt: string
}

export interface LeaderboardEntry {
  rank: number
  name: string
  school: string
  xp: number
  powerLevel: number
  streak: number
}

export interface ToastItem {
  id: string
  title: string
  message: string
  tone?: 'default' | 'success' | 'warning' | 'danger'
}
