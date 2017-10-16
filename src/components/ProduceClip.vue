<template>
  <div>
    <button @click="produceClip">Produce Paperclip</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  methods: mapMutations(['produceClip'])
}
</script>
