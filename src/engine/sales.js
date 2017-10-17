module.exports = chances => ({
  start(store) {
    if (chances() >= store.state.publicDemand) {
      console.log(`Sale for demand rate ${store.state.publicDemand}`)
      store.commit('sellClip')
    }
  }
})
