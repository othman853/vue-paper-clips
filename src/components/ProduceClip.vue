<template>
  <div>
    <button @click="PRODUCE_CLIP" :disabled="$store.state.wire.stock < 1">Produce Paperclip</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  methods: mapMutations(['PRODUCE_CLIP'])
}
</script>
