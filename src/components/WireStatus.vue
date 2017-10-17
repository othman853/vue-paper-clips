<template>
  <div id="wire-status">
    <p>Wire stock: {{$store.state.wire.stock}}</p>
    <button>Buy</button>
  </div>
</template>

<style>
#wire-status {
  border: solid 1px;
}
</style>
