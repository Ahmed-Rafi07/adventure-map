import { worldRepository } from '../repositories/world.repository.js'

export async function listWorlds() {
  return worldRepository.list()
}
