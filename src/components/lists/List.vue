<template lang="pug">
.list
  ul
    li(v-for="list in items") {{ list }}
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  setup() {
    const items = ref(['Item1', 'Item2', 'Item3', 'Item4'])

    return {
      items,
    }
  },
})
</script>

<style lang="scss" scoped>
.list {
  width: 50%;
  margin: auto;
  ul {
    padding: 0;
    position: relative;
    text-align: left;
    li {
      color: black;
      border-bottom: solid 2px whitesmoke;
      margin-bottom: 5px;
      line-height: 1.5;
      padding: 10px;
      list-style-type: none;
      &:first-child {
        border-top: solid 2px whitesmoke;
      }
    }
  }
}
</style>
