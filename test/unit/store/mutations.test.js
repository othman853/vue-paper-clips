const floatEqual = require('float-equal')
const test = require('ava')

const mutations = require('../../../src/store/mutations')

test('.produceClip increments clips and stock information', t => {
  const state = {clips: 1, stock: 1}

  mutations.produceClip(state)

  t.deepEqual(state.clips, 2)
  t.deepEqual(state.stock, 2)
})

test('.sellClip decrements stock and registers profit', t => {
  const state = {clips: 1, stock: 1, funds: 0, clipPrice: 0.05}

  mutations.sellClip(state)

  t.deepEqual(state.clips, 1)
  t.deepEqual(state.stock, 0)
  t.deepEqual(state.funds, 0.05)
})

test('.sellClip preserves 0 stock and does not register any profit', t => {
  const state = {clips: 1, stock: 0, funds: 0, clipPrice: 0.05}

  mutations.sellClip(state)

  t.deepEqual(state.clips, 1)
  t.deepEqual(state.stock, 0)
  t.deepEqual(state.funds, 0)
})


test('.sellClip preserves 0 stock and does not register any profit', t => {
  const state = {clips: 1, stock: 0, funds: 0, clipPrice: 0.05}

  mutations.sellClip(state)

  t.deepEqual(state.clips, 1)
  t.deepEqual(state.stock, 0)
  t.deepEqual(state.funds, 0)
})

test('.increasePrice increases price by priceVariation and reduces demand by demand variation', t => {
  const state = {clipPrice: 0.05, publicDemand: 0.2, demandVariation: 0.1, priceVariation: 0.01}

  mutations.increasePrice(state)

  t.true(floatEqual(state.clipPrice, 0.06))
  t.true(floatEqual(state.publicDemand, 0.18))
})

test('.reducePrice reduces price by priceVariation and increases demand by demand variation', t => {
  const state = {clipPrice: 0.05, publicDemand: 0.2, demandVariation: 0.1, priceVariation: 0.01}

  mutations.reducePrice(state)

  t.true(floatEqual(state.clipPrice, 0.04))
  t.true(floatEqual(state.publicDemand, 0.22))
})
