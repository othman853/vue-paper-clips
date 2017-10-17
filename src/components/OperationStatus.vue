<template>
  <div>
    <p>Available funds: <em>{{$store.state.stats.funds}}</em></p>
    <p>Stock count: <em>{{$store.state.clip.stock}}</em></p>
    <p>Clip Price: <em>{{$store.state.clip.price}}</em></p>
    <p>Public Demand: <em>{{$store.state.stats.demand}}</em></p>
    <ClipPriceControl></ClipPriceControl>
  </div>
</template>

<script>
import ClipPriceControl from './ClipPriceControl.vue'

export default {
  components: {ClipPriceControl}
}
</script>
