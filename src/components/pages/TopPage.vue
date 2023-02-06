<template lang="pug">
.container
  .row
    .buttons
      SimpleButton.before(text="Before" @click="beforePage")
      SpinnerButton(text="BUTTON" @click="loadPage" :isProgress="isProgress" :isComplete="isComplete")
      SimpleButton.next(text="Next" @click="nextPage")
  .row
    table.entries
      tbody
        tr.entries(v-for="ent in pageableEntries.entries")
          td {{ent.id}}
          td {{ent.title}}
          td {{ent.userName}}
          td {{ent.createdAt}}
  </template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue'
import SpinnerButton from '@/components/buttons/SpinnerButton.vue'
import SimpleButton from '../buttons/SimpleButton.vue'
import { qiitaEntryRepositoryKey } from '@/symbols/qiitaRepositoryKeys'
import QiitaEntryRepository from '@/domain/repositories/qiitaEntryRepository'
import usePagableEntriesState from '@/hooks/pagableEntries'

export default defineComponent({
  name: 'HelloWorld',

  components: {
    SpinnerButton,
    SimpleButton,
  },

  setup() {
    const qiitaEntryRepository = inject<QiitaEntryRepository>(
      qiitaEntryRepositoryKey
    )
    if (qiitaEntryRepository === undefined) {
      throw `${qiitaEntryRepositoryKey.toString()} is not provided`
    }

    const { state: pageableEntries, load: loadEntries } =
      usePagableEntriesState(qiitaEntryRepository)

    const pages = ref(1)

    const loadPage = async (page: number) => {
      progress()
      loadEntries(pages.value).then(() => {
        complete()
      })
    }

    const nextPage = async (page: number) => {
      loadEntries(pages.value++)
    }

    const beforePage = async (page: number) => {
      loadEntries(pages.value--)
    }

    const isProgress = ref(false)
    const isComplete = ref(false)

    const progress = () => {
      isProgress.value = true
    }

    const complete = () => {
      isProgress.value = false
      isComplete.value = true
      setTimeout(() => {
        isComplete.value = false
      }, 2000)
    }

    return {
      pageableEntries,
      loadPage,
      progress,
      complete,
      isProgress,
      isComplete,
      nextPage,
      beforePage,
      pages,
    }
  },
})
</script>

<style scoped lang="scss">
.container {
  margin: auto auto;
  width: 900px;
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  .before {
    margin-right: 20px;
  }
  .next {
    margin-left: 20px;
  }
  .entries {
    margin-top: 10px;
    td {
      background-color: #eec;
    }
  }
}
</style>
