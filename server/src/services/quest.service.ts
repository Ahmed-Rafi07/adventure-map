import { questRepository } from '../repositories/quest.repository.js'

export async function listQuests() {
  return questRepository.list()
}
