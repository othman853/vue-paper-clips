const test = require('ava')

const state = require('../../../src/store/state')

test('State has expected initial clip information', t => {
  t.deepEqual(state.clip.count, 0)
  t.deepEqual(state.clip.stock, 0)
  t.deepEqual(state.clip.price, 0.25)
})

test('State has expected initial variation information', t => {
  t.deepEqual(state.variation.demand, 0.01)
  t.deepEqual(state.variation.clipPrice, 0.01)
  t.deepEqual(state.variation.wirePrice, 0.2)
})

test('State has expected initial wire information', t => {
  t.deepEqual(state.wire.stock, 1000)
  t.deepEqual(state.wire.basePrice, 14)
  t.deepEqual(state.wire.batchSize, 1000)
})

test('States has expected initial stats information', t => {
  t.deepEqual(state.stats.funds, 0)
  t.deepEqual(state.stats.demand, 0.3)
})
