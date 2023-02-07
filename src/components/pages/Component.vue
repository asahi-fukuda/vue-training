<template lang="pug">
.button
  SimpleButton(text="BUTTON" @click="click")
.list
  List
.button
  SpinnerButton(text="BUTTON" @click="progress" :isLoading="isLoading" :isCompleted="isCompleted")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'

import SimpleButton from '@/components/buttons/SimpleButton.vue'
import Spinner from '@/components/indicators/Spinner.vue'
import List from '@/components/lists/List.vue'
import SpinnerButton from '@/components/buttons/SpinnerButton.vue'

export default defineComponent({
  components: {
    SimpleButton,
    Spinner,
    List,
    SpinnerButton,
  },

  setup() {
    const click = () => {
      window.alert('click!')
    }

    const isLoading = ref(false)
    const isCompleted = ref(false)

    // 処理中の挙動
    const progress = () => {
      isLoading.value = true
    }

    // 完了時の挙動
    const complete = () => {
      isCompleted.value = true
      setTimeout(() => {
        isCompleted.value = false
      }, 2000)
    }

    return {
      click,
      progress,
      complete,
      isLoading,
      isCompleted,
    }
  },
})
</script>

<style lang="scss" scoped></style>
