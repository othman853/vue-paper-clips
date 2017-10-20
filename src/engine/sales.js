const log = require('../utils/logger')
const {SELL_CLIP} = require('../store/actions/types')

module.exports = (chances, log = log) => ({
  start(store) {
    const chance = chances()
    if (chance <= store.state.stats.demand) {
      log.info(`Sale for demand ${store.state.stats.demand} with chance ${chance}`)
      return store.dispatch(SELL_CLIP)
    }

    log.info(`No sell for rate ${store.state.stats.demand} with chance ${chance}`)
  }
})
