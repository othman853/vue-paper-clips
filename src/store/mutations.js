module.exports = {
  produceClip(state) {
    state.clips++
    state.stock++
  },

  sellClip(state) {
    if (state.stock > 0) {
      state.stock--
      state.funds += state.clipPrice
    }
  },

  increasePrice(state) {
    state.clipPrice += state.priceVariation
    state.publicDemand = state.publicDemand - (state.publicDemand * state.demandVariation)
  },

  reducePrice(state) {
    state.clipPrice -= state.priceVariation
    state.publicDemand = state.publicDemand + (state.publicDemand * state.demandVariation)
  }
}
