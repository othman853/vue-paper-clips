module.exports = chances => ({
  start(store) {
    const chance = chances()
    if (chance <= store.state.stats.demand) {
      console.log(`Sale for demand ${store.state.stats.demand} with chance ${chance}`)
      return store.commit('SELL_CLIP')
    }

    console.log(`No sell for rate ${store.state.stats.demand} with chance ${chance}`)
  }
})
