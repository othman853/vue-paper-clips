const state = require('store/state')

describe('unit -> store.state', () => {
  it('has expected initial clip information', () => {
    expect(state.clip.count).toBe(0)
    expect(state.clip.stock).toBe(0)
    expect(state.clip.price).toBe(0.25)
  })

  it('has expected initial variation information', () => {
    expect(state.variation.demand).toBe(0.01)
    expect(state.variation.clipPrice).toBe(0.01)
    expect(state.variation.wirePrice).toBe(0.2)
  })

  it('has expected initial wire information', () => {
    expect(state.wire.stock).toBe(1000)
    expect(state.wire.basePrice).toBe(14)
    expect(state.wire.batchSize).toBe(1000)
  })

  it('has expected initial stats information', () => {
    expect(state.stats.funds).toBe(0)
    expect(state.stats.demand).toBe(0.3)
  })
})
