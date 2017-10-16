module.exports = {
  produceClip(state) {
    state.clips++
    state.stock++
  },
  sellClip(state) {
    state.stock--
  }
}
