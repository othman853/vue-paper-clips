<template>
  <div>
    <ClipCounter></ClipCounter>
    <h3> Operations </h3>
    <button @click="incrementClip">Make paperclip</button>
  </div>
</template>

<script>
import ClipCounter from './ClipCounter.vue'
import {mapMutations} from 'vuex'

export default {
  components: {ClipCounter},
  methods: mapMutations(['incrementClip'])
}
</script>

<style>
</style>
