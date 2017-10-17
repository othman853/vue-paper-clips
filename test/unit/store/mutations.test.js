const floatEqual = require('float-equal')
const test = require('ava')

const mutations = require('../../../src/store/mutations')

test('PRODUCE_CLIP increments clips and stock information', t => {
  const clip = {count: 1, stock: 1}
  const state = {clip}

  mutations.PRODUCE_CLIP(state)

  t.deepEqual(state.clip.count, 2)
  t.deepEqual(state.clip.stock, 2)
})

test('SELL_CLIP decrements stock and registers profit', t => {
  const clip = {count: 1, stock: 1, price: 0.25}
  const stats = {funds: 0}
  const state = {clip, stats}

  mutations.SELL_CLIP(state)

  t.deepEqual(state.clip.count, 1)
  t.deepEqual(state.clip.stock, 0)
  t.deepEqual(state.stats.funds, 0.25)
})

test('SELL_CLIP preserves 0 stock and does not register any profit', t => {
  const clip = {count: 1, stock: 0, price: 0.25}
  const stats = {funds: 0}
  const state = {clip, stats}

  mutations.SELL_CLIP(state)

  t.deepEqual(state.clip.count, 1)
  t.deepEqual(state.clip.stock, 0)
  t.deepEqual(state.stats.funds, 0)
})


test('INCREASE_PRICE price by priceVariation and reduces demand by demand variation', t => {
  const state = {clipPrice: 0.05, publicDemand: 0.2, demandVariation: 0.1, priceVariation: 0.01}

  mutations.INCREASE_PRICE(state)

  t.true(floatEqual(state.clipPrice, 0.06))
  t.true(floatEqual(state.publicDemand, 0.18))
})

test('DECREASE_PRICE reduces price by priceVariation and increases demand by demand variation', t => {
  const state = {clipPrice: 0.5, publicDemand: 0.2, demandVariation: 0.1, priceVariation: 0.1}

  mutations.DECREASE_PRICE(state)

  t.true(floatEqual(state.clipPrice, 0.4))
  t.true(floatEqual(state.publicDemand, 0.22))
})

test('DECREASE_PRICE does not reduce price to something lower than 0.1', t => {
  const state = {clipPrice: 0.1, demandVariation: 0.1, priceVariation: 0.1}

  mutations.DECREASE_PRICE(state)

  t.true(floatEqual(state.clipPrice, 0.1))
})
