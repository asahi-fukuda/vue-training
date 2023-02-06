import QiitaEntryRepository from '@/domain/repositories/qiitaEntryRepository'
import { ref, Ref } from 'vue'

export type Entry = {
  id: string
  title: string
  userName: string
  createdAt: string
  renderedBody: string
}

export type PageableEntries = {
  page: number
  entries: Entry[]
}

export type State = {
  state: Ref<PageableEntries>
  load(page: number): Promise<void>
}

export default function usePagableEntriesState(
  repository: QiitaEntryRepository
): State {
  const state = ref<PageableEntries>({
    page: 0,
    entries: [],
  })

  const load = async (page: number): Promise<void> => {
    return repository.items(page).then((ents) => {
      const entries = ents.map((ent) => {
        return {
          id: ent.id ?? '',
          title: ent.title ?? '',
          userName: ent.userName ?? '',
          createdAt: ent.createdAt?.toString() ?? '',
          renderedBody: ent.renderedBody ?? '',
        }
      })

      state.value = {
        page,
        entries,
      }
      console.log(state.value.page)
    })
  }

  return {
    state,
    load,
  }
}
