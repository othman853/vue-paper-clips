module.exports = {
  produce(state) {
    state.clip.count++
    state.clip.stock++
  },

  sell(state) {
    if (state.clip.stock > 0) {
      state.clip.stock--
      state.stats.funds += state.clip.price
    }
  }
}
