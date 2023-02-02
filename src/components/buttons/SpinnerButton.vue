<template lang="pug">
.button
  button.btn(:disabled="isProgress")
    Spinner(:SpinnerWidth="20" :SpinnerHeight="20" :SpinnerSpeed="1.0" v-show="isProgress")
    svg(xmlns="http://www.w3.org/2000/svg", width="20", height="20", viewBox="0 0 200 200" v-show="isComplete")
      path(d="M4890.068,1665.319a100,100,0,1,0,100,100A100,100,0,0,0,4890.068,1665.319Zm43.73,51.422,21.414,19.687-74.752,81.3-60.022-61.5,20.819-20.32,38.575,39.52Z", transform="translate(-4790.067 -1665.319)")
    .text {{ text }}
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import Spinner from '@/components/indicators/Spinner.vue'

export default defineComponent({
  components: {
    Spinner,
  },

  props: {
    text: {
      type: String as PropType<string>,
      required: true,
    },
    isProgress: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
    isComplete: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.btn {
  background-color: #8a2be2;
  color: white;
  border: none;
  margin: 10px 20px;
  padding: 12px 18px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  &:hover {
    background-color: #9932cc;
  }
  &:active {
    opacity: 0.8;
  }
  .text {
    line-height: 20px;
    margin-left: 5px;
  }
}
</style>
