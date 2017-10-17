<template>
  <div>
    <button @click="INCREASE_PRICE">Increase Price</button>
    <button @click="DECREASE_PRICE">Reduce Price</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  methods: mapMutations(['INCREASE_PRICE', 'DECREASE_PRICE'])
}
</script>
