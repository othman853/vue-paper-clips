<template>
  <div>
    <ClipCounter></ClipCounter>
    <ProduceClip></ProduceClip>
    <h3>Operations</h3>
    <OperationStatus></OperationStatus>
    <h3>Manufacturing</h3>
    <WireStatus></WireStatus>
  </div>
</template>

<script>
import ClipCounter from './ClipCounter.vue'
import ProduceClip from './ProduceClip.vue'
import OperationStatus from './OperationStatus.vue'
import WireStatus from './WireStatus.vue'

export default {
  components: {ClipCounter, ProduceClip, OperationStatus, WireStatus}
}
</script>
