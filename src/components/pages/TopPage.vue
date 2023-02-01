<template lang="pug">
.top
  SinpleButton(text="BUTTON" @click="click")
</template>

<script lang="ts">
import {defineComponent} from 'vue'

import SimpleButton from '../buttons/SimpleButton.vue'

export default defineComponent({
  components: {
    SimpleButton,
  },

  setup() {
  const click = () => {
    window.alert('click!')
  }

  return {
    click
  }
}
})
</script>

<style lang="scss" scoped>
</style>