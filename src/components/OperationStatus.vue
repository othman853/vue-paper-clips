<template>
  <div>
    <p>Available funds: <em>{{$store.state.funds}}</em></p>
    <p>Stock count: <em>{{$store.state.stock}}</em></p>
    <p>Clip Price: <em>{{$store.state.clipPrice}}</em></p>
    <p>Public Demand: <em>{{$store.state.publicDemand}}</em></p>
    <ClipPriceControl></ClipPriceControl>
  </div>
</template>

<script>
import ClipPriceControl from './ClipPriceControl.vue'

export default {
  components: {
    ClipPriceControl
  }
}
</script>
