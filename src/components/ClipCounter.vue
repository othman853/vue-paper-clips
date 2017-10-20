<template>
  <h1>Clips produced: {{clipCount}}</h1>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: mapGetters(['clipCount'])
}
</script>
