<template>
  <div id="wire-status">
    <p>Wire stock: {{$store.state.wire.stock}}</p>
    <p>Batch Price: ${{$store.state.wire.basePrice.toFixed(2)}} for {{$store.state.wire.batchSize}} inches</p>
    <button :disabled="$store.state.stats.funds < $store.state.wire.basePrice">Buy</button>
  </div>
</template>
