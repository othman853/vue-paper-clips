<template>
  <div>
    <p ref = "availableFunds">Available funds: ${{funds | decimal}}</p>
    <p ref = "clipStock">Stock count: {{clipStock}}</p>
    <p ref = "clipPrice">Clip Price: ${{clipPrice | decimal}}</p>
    <p ref = "publicDemand">Public Demand: {{demand * 100 | decimal}}%</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: mapGetters(['funds', 'clipStock', 'clipPrice', 'demand'])
}
</script>
