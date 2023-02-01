<template lang="pug">
.counter-page
  .counter
    Count.cnt(:count="count")
  .buttons
    .box
      button.btn.dec(@click="decrement") -
      button.btn.inc(@click="increment") +
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Count from "./Count.vue";
import useCounter from "@/hooks/counter";

export default defineComponent({
  setup() {
    const { state: count, increment, decrement } = useCounter();

    return {
      count,
      increment,
      decrement,
    };
  },

  components: {
    Count,
  },
});
</script>

<style lang="scss" scoped>
// 省略
</style>