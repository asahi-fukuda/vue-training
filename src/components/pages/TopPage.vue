<template lang="pug">
.container
  .row
    .buttons
      SimpleButton.before(text="Before" @click="loadPage(this.page - 1)")
      SpinnerButton(text="BUTTON" @click="loadPage(this.page)" :isLoading="isLoading" :isComplete="isCompleted")
      SimpleButton.next(text="Next" @click="loadPage(this.page + 1)")
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
import { defineComponent, inject } from 'vue'
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

  data() {
    return {
      page: 1,
      isLoading: false,
      isCompleted: false,
    }
  },
  methods: {
    async loadPage(p: number) {
      this.onStartLoadPage()
      this.loadEntries(p).then(() => {
        this.onCompleted()
        this.page = p
      })
    },
    onStartLoadPage() {
      this.isLoading = true
    },
    onCompleted() {
      this.isLoading = false
      this.isCompleted = true
      setTimeout(() => {
        this.isCompleted = false
      }, 2000)
    },
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

    return {
      pageableEntries,
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
