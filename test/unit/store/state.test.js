const {expect} = require('chai')

const state = require('store/state')

describe('unit -> store.state', () => {
  it('has expected initial clip information', () => {
    expect(state.clip.count).to.equal(0)
    expect(state.clip.stock).to.equal(0)
    expect(state.clip.price).to.equal(0.25)
  })

  it('has expected initial variation information', () => {
    expect(state.variation.demand).to.equal(0.01)
    expect(state.variation.clipPrice).to.equal(0.01)
    expect(state.variation.wirePrice).to.equal(0.2)
  })

  it('has expected initial wire information', () => {
    expect(state.wire.stock).to.equal(1000)
    expect(state.wire.basePrice).to.equal(14)
    expect(state.wire.batchSize).to.equal(1000)
  })

  it('has expected initial stats information', () => {
    expect(state.stats.funds).to.equal(0)
    expect(state.stats.demand).to.equal(0.3)
  })
})
