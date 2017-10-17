<template>
  <div>
    <button @click="DECREASE_PRICE" :disabled="$store.state.clip.price <=  0.01">Reduce Price</button>
    <button @click="INCREASE_PRICE">Increase Price</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  methods: mapMutations(['INCREASE_PRICE', 'DECREASE_PRICE'])
}
</script>
