import Vue from 'vue'
import store from 'store'

Vue.config.productionTip = false

describe('component test -> mutations -> clip production', () => {

  it('starts with original state values', () => {
    expect(store.state.clip.count).toBe(0)
    expect(store.state.clip.stock).toBe(0)
    expect(store.state.wire.stock).toBe(1000)
    expect(store.state.clip.price).toBe(0.25)
  })

  it('increases clip count and stock on PRODUCE_CLIP', () => {
    store.commit('PRODUCE_CLIP')
    expect(store.state.clip.count).toBe(1)
    expect(store.state.clip.stock).toBe(1)
  })

  it('decreases clip stock and registers profit on SELL_CLIP', () => {
    store.commit('SELL_CLIP')
    expect(store.state.clip.count).toBe(1)
    expect(store.state.clip.stock).toBe(0)
    expect(store.state.stats.funds).toBe(0.25)
  })

  it('does not decrease clip stock nor registers any profit on SELL_CLIP when stock is 0', () => {
    store.commit('SELL_CLIP')
    expect(store.state.clip.count).toBe(1)
    expect(store.state.clip.stock).toBe(0)
    expect(store.state.stats.funds).toBe(0.25)
  })
})
