<template lang="pug">
.container
  .row
    SpinnerButton(text="BUTTON" @click="click1" :isProgress="isProgress" :isComplete="isComplete")
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
import { qiitaEntryRepositoryKey } from '@/symbols/qiitaRepositoryKeys'
import QiitaEntryRepository from '@/domain/repositories/qiitaEntryRepository'
import usePagableEntriesState from '@/hooks/pagableEntries'

export default defineComponent({
  name: 'HelloWorld',

  components: {
    SpinnerButton,
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

    const loadPage = async (page: number) => {
      progress()
      loadEntries(1).then(() => {
        complete()
      })
    }

    const click1 = () => {
      loadPage(1)
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
      click1,
      progress,
      complete,
      isProgress,
      isComplete,
    }
  },
})
</script>

<style scoped lang="scss">
.container {
  margin: auto auto;
  width: 900px;
  .entries {
    margin-top: 10px;
    td {
      background-color: #eec;
    }
  }
}
</style>
