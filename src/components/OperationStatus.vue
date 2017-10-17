<template>
  <div>
    <p>Available funds: ${{parseFloat($store.state.stats.funds).toFixed(2)}}</p>
    <p>Stock count: {{$store.state.clip.stock}}</p>
    <p>Clip Price: {{parseFloat($store.state.clip.price).toFixed(2)}}</p>
    <p>Public Demand: {{parseFloat($store.state.stats.demand * 100).toFixed(2)}}%</p>
    <ClipPriceControl></ClipPriceControl>
  </div>
</template>

<script>
import ClipPriceControl from './ClipPriceControl.vue'

export default {
  components: {ClipPriceControl}
}
</script>
