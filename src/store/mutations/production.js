module.exports = {
  produce(state) {
    if (state.wire.stock > 0) {
      state.clip.count++
      state.clip.stock++
      state.wire.stock--
    }
  },

  sell(state) {
    if (state.clip.stock > 0) {
      state.clip.stock--
      state.stats.funds += state.clip.price
    }
  }
}
