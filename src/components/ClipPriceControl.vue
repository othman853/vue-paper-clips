<template>
  <div>
    <button ref = "btnDecreasePrice" @click = "decreasePrice" :disabled = "clipPrice <= 0.01">Decrease Price</button>
    <button ref = "btnIncreasePrice" @click = "increasePrice">Increase Price</button>
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
