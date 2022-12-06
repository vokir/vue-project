<template>
  <div>
    <h1>Home page</h1>
    <div>{{ store.count }}</div>
    <div>{{ store.doubleCount }}</div>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { useCounterStore } from "../../stores/counter";

export default {
  name: 'home-view',
  setup () {
    const store = useCounterStore()
    const { increment } = store

    return {
      store,
      increment
    }
  }
}
</script>