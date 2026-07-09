import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import { env } from './env.js'

let memoryServer: MongoMemoryServer | null = null

export async function connectDatabase() {
  const fallbackUri = await startMemoryServer()
  const uri = env.MONGO_URI ?? fallbackUri

  try {
    await mongoose.connect(uri)
  } catch (error) {
    if (uri === fallbackUri) {
      throw error
    }

    console.warn('MongoDB connection failed, using in-memory fallback for local development.')
    await mongoose.connect(fallbackUri)
  }
}

async function startMemoryServer() {
  if (!memoryServer) {
    memoryServer = await MongoMemoryServer.create({
      instance: { dbName: 'levelup-ai' },
    })
  }

  return memoryServer.getUri()
}

export async function disconnectDatabase() {
  await mongoose.disconnect()

  if (memoryServer) {
    await memoryServer.stop()
    memoryServer = null
  }
}
