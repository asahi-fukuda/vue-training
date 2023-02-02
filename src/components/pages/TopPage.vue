<template lang="pug">
.button
  SimpleButton(text="BUTTON" @click="click")
.list
  List
.button
  SpinnerButton(text="BUTTON" @click="progress" :isProgress="isProgress" :isComplete="isComplete")
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

    const isProgress = ref(false)
    const isComplete = ref(false)

    // 処理中の挙動
    const progress = () => {
      isProgress.value = true
    }

    // 完了時の挙動
    const complete = () => {
      isComplete.value = true
      setTimeout(() => {
        isComplete.value = false
      }, 2000)
    }

    return {
      click,
      progress,
      complete,
      isProgress,
      isComplete,
    }
  },
})
</script>

<style lang="scss" scoped></style>
