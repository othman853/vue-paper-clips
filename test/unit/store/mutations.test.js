const floatEqual = require('float-equal')
const {expect} = require('chai')

const mutations = require('store/mutations')

describe('unit -> store.mutations', () => {
  it('PRODUCE_CLIP increments clip count and stock information and decreases wire stock if there is available wire stock', () => {
    const wire = {stock: 1}
    const clip = {count: 1, stock: 1}
    const state = {clip, wire}

    mutations.PRODUCE_CLIP(state)

    expect(state.clip.count).to.equal(2)
    expect(state.clip.stock).to.equal(2)
    expect(state.wire.stock).to.equal(0)
  })

  it('PRODUCE_CLIP does not change count and stock of clipes if there is no wire stock available', () => {
    const wire = {stock: 0}
    const clip = {count: 1, stock: 1}
    const state = {clip, wire}

    mutations.PRODUCE_CLIP(state)

    expect(state.clip.count).to.equal(1)
    expect(state.clip.stock).to.equal(1)
    expect(state.wire.stock).to.equal(0)
  })

  it('SELL_CLIP decrements stock and registers profit', () => {
    const clip = {count: 1, stock: 1, price: 0.25}
    const stats = {funds: 0}
    const state = {clip, stats}

    mutations.SELL_CLIP(state)

    expect(state.clip.count, 1)
    expect(state.clip.stock, 0)
    expect(state.stats.funds, 0.25)
  })

  it('SELL_CLIP preserves 0 stock and does not register any profit', () => {
    const clip = {count: 1, stock: 0, price: 0.25}
    const stats = {funds: 0}
    const state = {clip, stats}

    mutations.SELL_CLIP(state)

    expect(state.clip.count).to.equal(1)
    expect(state.clip.stock).to.equal(0)
    expect(state.stats.funds).to.equal(0)
  })


  it('INCREASE_PRICE price by priceVariation and reduces demand by demand variation', () => {
    const clip = {price: 0.05}
    const stats = {demand: 0.2}
    const variation = {demand: 0.1, clipPrice: 0.01}
    const state = {clip, stats, variation}

    mutations.INCREASE_PRICE(state)

    expect(floatEqual(state.clip.price, 0.06)).to.be.true
    expect(floatEqual(state.stats.demand, 0.18)).to.be.true
  })

  it('DECREASE_PRICE reduces price by priceVariation and increases demand by demand variation', () => {
    const clip = {price: 0.5}
    const stats = {demand: 0.2}
    const variation = {demand: 0.1, clipPrice: 0.1}
    const state = {clip, stats, variation}

    mutations.DECREASE_PRICE(state)

    expect(floatEqual(state.clip.price, 0.4)).to.be.true
    expect(floatEqual(state.stats.demand, 0.22)).to.be.true
  })

  it('DECREASE_PRICE does not reduce price to something lower than 0.01', () => {
    const clip = {price: 0.01}
    const variation = {demand: 0.1, clipPrice: 0.01}
    const state = {clip, variation}

    mutations.DECREASE_PRICE(state)

    expect(floatEqual(state.clip.price, 0.01)).to.be.true
  })
})
