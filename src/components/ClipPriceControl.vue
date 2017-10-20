<template>
  <div>
    <button @click="decreasePrice" :disabled="$store.state.clip.price <=  0.01">Reduce Price</button>
    <button @click="increasePrice">Increase Price</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import types from '../store/actions/types'

export default {
  computed: mapGetters(['clipPrice']),
  methods: mapActions({
    increasePrice: types.INCREASE_PRICE,
    decreasePrice: types.DECREASE_PRICE
  })
}
</script>
