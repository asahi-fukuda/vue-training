<template lang="pug">
.count {{ count }}
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    count: {
      type: Number as PropType<number>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
// 省略
</style>