import { createApp } from './app.js'
import { connectDatabase, disconnectDatabase } from './config/db.js'
import { env } from './config/env.js'
import { seedDemoData } from './seed/seedDemoData.js'

async function main() {
  await connectDatabase()
  await seedDemoData()

  const app = createApp()
  const server = app.listen(env.PORT, () => {
    console.log(`LevelUp AI API listening on port ${env.PORT}`)
  })

  const shutdown = async () => {
    server.close(() => undefined)
    await disconnectDatabase()
    process.exit(0)
  }

  process.on('SIGINT', shutdown)
  process.on('SIGTERM', shutdown)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
