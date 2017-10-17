<template>
  <div>
    <button @click="increasePrice">Increase Price</button>
    <button @click="reducePrice">Reduce Price</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  methods: mapMutations(['increasePrice', 'reducePrice'])
}
</script>
