import { AchievementModel } from '../models/achievement.model.js'
import { AiChatModel } from '../models/aiChat.model.js'
import { FlashcardModel } from '../models/flashcard.model.js'
import { LeaderboardEntryModel } from '../models/leaderboardEntry.model.js'
import { NoteModel } from '../models/note.model.js'
import { NotificationModel } from '../models/notification.model.js'
import { QuestModel } from '../models/quest.model.js'
import { RewardModel } from '../models/reward.model.js'
import { SettingModel } from '../models/setting.model.js'
import { StudySessionModel } from '../models/studySession.model.js'
import { UserModel } from '../models/user.model.js'
import { WorldModel } from '../models/world.model.js'

export async function seedDemoData() {
  await Promise.all([
    UserModel.updateOne(
      { email: 'aanya@levelup.ai' },
      {
        $setOnInsert: {
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
        },
      },
      { upsert: true },
    ),
    WorldModel.updateOne(
      { name: 'Mathematics Kingdom' },
      {
        $setOnInsert: {
          name: 'Mathematics Kingdom',
          theme: 'Algebra towers, geometry forests, and puzzle dungeons',
          progress: 68,
          kingdoms: 5,
          quests: 24,
          bossName: 'The Decimal Hydra',
        },
      },
      { upsert: true },
    ),
    QuestModel.updateOne(
      { title: 'Geometry Boss Battle' },
      {
        $setOnInsert: {
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
      },
      { upsert: true },
    ),
    AchievementModel.deleteMany({}),
    LeaderboardEntryModel.deleteMany({}),
    RewardModel.deleteMany({}),
    NotificationModel.deleteMany({}),
    NoteModel.deleteMany({}),
    FlashcardModel.deleteMany({}),
    AiChatModel.deleteMany({}),
    StudySessionModel.deleteMany({}),
    SettingModel.deleteMany({}),
  ])

  await AchievementModel.insertMany([
    {
      title: 'Streak Guardian',
      description: 'Protected a 14-day streak with a shield',
      rarity: 'Epic',
      unlockedAt: '2 days ago',
    },
    {
      title: 'Boss Breaker',
      description: 'Defeated 6 chapter bosses',
      rarity: 'Rare',
      unlockedAt: 'Yesterday',
    },
    {
      title: 'Scholar of the Realm',
      description: 'Completed 100 lessons across all worlds',
      rarity: 'Legendary',
      unlockedAt: 'Last week',
    },
  ])

  await LeaderboardEntryModel.insertMany([
    { name: 'Zara Khan', school: 'Northview Academy', xp: 12440, powerLevel: 4120, streak: 31 },
    { name: 'Aanya Nova', school: 'Northview Academy', xp: 11860, powerLevel: 3840, streak: 17 },
    { name: 'Ethan Ray', school: 'Sunrise Public', xp: 11210, powerLevel: 3560, streak: 24 },
    { name: 'Maya Chen', school: 'Sunrise Public', xp: 10890, powerLevel: 3340, streak: 12 },
  ])

  await RewardModel.insertMany([
    { name: 'Skyborne Relic', kind: 'cosmetic', rarity: 'Epic', costCoins: 980 },
    { name: 'Azure Armor Skin', kind: 'cosmetic', rarity: 'Rare', costCoins: 620 },
    { name: 'Moonlight Theme', kind: 'theme', rarity: 'Legendary', costCoins: 1500 },
  ])

  await SettingModel.updateOne(
    { userId: 'usr_01' },
    {
      $setOnInsert: {
        userId: 'usr_01',
        darkMode: true,
        notificationsEnabled: true,
        soundsEnabled: true,
        streakShieldEnabled: true,
      },
    },
    { upsert: true },
  )
}
