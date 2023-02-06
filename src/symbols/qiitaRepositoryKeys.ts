import QiitaEntryRepository from '@/domain/repositories/qiitaEntryRepository'
import { InjectionKey } from 'vue'

export const qiitaEntryRepositoryKey: InjectionKey<QiitaEntryRepository> =
  Symbol()
