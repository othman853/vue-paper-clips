<template>
  <div>
    <button @click="produceClip" :disabled="wireStock < 1" ref="btnProduceClip">Produce Paperclip</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  computed: mapGetters(['wireStock']),
  methods: mapActions(['produceClip'])
}
</script>
