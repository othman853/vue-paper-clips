<template>
  <div>
    <ClipCounter></ClipCounter>
    <ProduceClip></ProduceClip>
    <h3>Operations</h3>
    <OperationStatus></OperationStatus>
  </div>
</template>

<script>
import ClipCounter from './ClipCounter.vue'
import ProduceClip from './ProduceClip.vue'
import OperationStatus from './OperationStatus.vue'

export default {
  components: {ClipCounter, ProduceClip, OperationStatus}
}
</script>
