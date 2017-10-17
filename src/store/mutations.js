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
  }
}
