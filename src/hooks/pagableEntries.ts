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
  pageAndEntries: Ref<PageableEntries>
  load: () => Promise<void>
  next: () => Promise<void>
  before: () => Promise<void>
}

export default function usePagableEntriesState(
  repository: QiitaEntryRepository
): State {
  const pageAndEntries = ref<PageableEntries>({
    page: 1,
    entries: [],
  })

  const load = async (): Promise<void> => {
    const page = pageAndEntries.value.page
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

      pageAndEntries.value = {
        page,
        entries,
      }
    })
  }

  const next = async (): Promise<void> => {
    const page = pageAndEntries.value.page + 1
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

      pageAndEntries.value = {
        page,
        entries,
      }
    })
  }

  const before = async (): Promise<void> => {
    const page = pageAndEntries.value.page - 1
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

      pageAndEntries.value = {
        page,
        entries,
      }
    })
  }

  return {
    pageAndEntries,
    load,
    next,
    before,
  }
}
