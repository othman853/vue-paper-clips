module.exports = {
  increase(state) {
    state.clipPrice += state.priceVariation
    state.publicDemand = state.publicDemand - (state.publicDemand * state.demandVariation)

  },

  decrease(state) {
    if (state.clipPrice > 0.1) {
      state.clipPrice -= state.priceVariation
      state.publicDemand = state.publicDemand + (state.publicDemand * state.demandVariation)
    }

  }
}
