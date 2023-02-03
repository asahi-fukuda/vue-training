<template lang="pug">
.count
  .count(@click="$emit('reset')") {{ count }}
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  setup() {
    const count = inject<number>('count')

    return {
      count,
    }
  },
})
</script>

<style lang="scss" scoped>
// 省略
</style>
