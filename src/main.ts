import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { qiitaEntryRepositoryKey } from '@/symbols/qiitaRepositoryKeys'
import QiitaEntryRepository from '@/domain/repositories/qiitaEntryRepository'
import ApiQiitaEntryRepository from '@/infra/qiita/apiQiitaEntryRepository'

const qiitaEntryRepository: QiitaEntryRepository = new ApiQiitaEntryRepository()

createApp(App)
  .use(router)
  .provide(qiitaEntryRepositoryKey, qiitaEntryRepository)
  .mount('#app')
