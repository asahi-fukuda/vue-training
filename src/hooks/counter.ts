import { Ref, ref } from "vue";

type Counter = {
  state: Ref<number>,
  increment: () => void,
  decrement: () => void,
}

export default function useCounter(): Counter {
  const state = ref(0)

  const increment = () => state.value++
  const decrement = () => state.value--

  return {
    state,
    increment,
    decrement,
  }
}