<template>
  <div>
    <button @click="PRODUCE_CLIP">Produce Paperclip</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  methods: mapMutations(['PRODUCE_CLIP'])
}
</script>
