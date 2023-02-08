<template lang="pug">
.container
  .row
    .buttons
      SimpleButton.before(text="Before" @click="beforeLoadPage")
      SpinnerButton(text="BUTTON" @click="loadPage" ref="spinnerButton")
      SimpleButton.next(text="Next" @click="nextLoadPage")
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

    const spinnerButton = ref<InstanceType<typeof SpinnerButton>>()

    const {
      pageAndEntries: pageableEntries,
      load: loadEntries,
      next: loadNextEntries,
      before: loadBeforeEntries,
    } = usePagableEntriesState(qiitaEntryRepository)

    const loadPage = async () => {
      spinnerButton.value?.progress()
      loadEntries().then(() => {
        spinnerButton.value?.onCompleted()
      })
    }

    const nextLoadPage = async () => {
      spinnerButton.value?.progress()
      loadNextEntries().then(() => {
        spinnerButton.value?.onCompleted()
      })
    }

    const beforeLoadPage = async () => {
      spinnerButton.value?.progress()
      loadBeforeEntries().then(() => {
        spinnerButton.value?.onCompleted()
      })
    }

    return {
      pageableEntries,
      loadPage,
      nextLoadPage,
      beforeLoadPage,
      spinnerButton,
      loadEntries,
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
