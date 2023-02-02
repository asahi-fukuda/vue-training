<template lang="pug">
.counter-page
  .counter
    Count.cnt(:count="count" @reset="reset")
  .buttons
    .box
      button.btn.dec(@click="decrement") -
      button.btn.inc(@click="increment") +
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Count from './Count.vue'
import useCounter from '@/hooks/counter'

export default defineComponent({
  setup() {
    const { state: count, increment, decrement, reset } = useCounter()

    return {
      count,
      increment,
      decrement,
      reset,
    }
  },

  components: {
    Count,
  },
})
</script>

<style lang="scss" scoped>
// 省略
</style>
