import {expect} from 'chai'
import store from '../../../../src/store'

describe('component test -> mutations -> clip production', () => {

  it('starts with original state values', () => {
    expect(store.state.clip.count).to.equal(0)
    expect(store.state.clip.stock).to.equal(0)
    expect(store.state.wire.stock).to.equal(1000)
    expect(store.state.clip.price).to.equal(0.25)
  })

  it('increases clip count and stock on PRODUCE_CLIP', () => {
    store.commit('PRODUCE_CLIP')
    expect(store.state.clip.count).to.equal(1)
    expect(store.state.clip.stock).to.equal(1)
  })

  it('decreases clip stock and registers profit on SELL_CLIP', () => {
    store.commit('SELL_CLIP')
    expect(store.state.clip.count).to.equal(1)
    expect(store.state.clip.stock).to.equal(0)
    expect(store.state.stats.funds).to.equal(0.25)
  })

  it('does not decrease clip stock nor registers any profit on SELL_CLIP when stock is 0', () => {
    store.commit('SELL_CLIP')
    expect(store.state.clip.count).to.equal(1)
    expect(store.state.clip.stock).to.equal(0)
    expect(store.state.stats.funds).to.equal(0.25)
  })
})
