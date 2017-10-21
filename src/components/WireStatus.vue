<template>
  <div id="wire-status">
    <p ref="wireStockStatus">Wire stock: {{wireStock}}</p>
    <p ref="wirePriceStatus">Batch Price: ${{wireBasePrice | decimal}} for {{wireBatchSize}} inches</p>
    <button ref="btnBuyWire" :disabled="funds < wireBasePrice">Buy</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: mapGetters(['wireStock', 'wireBasePrice', 'wireBatchSize', 'funds'])
}
</script>
