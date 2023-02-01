<template lang="pug">
.button
  SimpleButton(text="BUTTON" @click="click")
.spinner
  Spinner(:SpinnerWidth="35" :SpinnerHeight="35" :SpinnerSpeed="1.0")
.list
  List
</template>

<script lang="ts">
import {defineComponent} from "vue"

import SimpleButton from "@/components/buttons/SimpleButton.vue"
import Spinner from "@/components/indicators/Spinner.vue"
import List from "@/components/lists/List.vue"

export default defineComponent({
  components: {
    SimpleButton,
    Spinner,
    List
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
