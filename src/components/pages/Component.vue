<template lang="pug">
.button
  SimpleButton(text="BUTTON" @click="click1")
.list
  List
.button
  SpinnerButton(text="BUTTON" @click="click2" ref="spinnerButton")
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

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
    const spinnerButton = ref<InstanceType<typeof SpinnerButton>>()

    const click1 = () => {
      window.alert('click!')
    }

    const click2 = () => {
      spinnerButton.value?.progress()
      // spinnerButton.value?.onCompleted()
    }

    return {
      click1,
      click2,
      spinnerButton,
    }
  },
})
</script>

<style lang="scss" scoped></style>
