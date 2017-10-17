module.exports = {
  increase(state) {
    state.clip.price += state.variation.clipPrice
    state.stats.demand = state.stats.demand - (state.stats.demand * state.variation.demand)
  },

  decrease(state) {
    if (state.clip.price > 0.01) {
      state.clip.price -= state.variation.clipPrice
      state.stats.demand = state.stats.demand + (state.stats.demand * state.variation.demand)
    }
  }
}
