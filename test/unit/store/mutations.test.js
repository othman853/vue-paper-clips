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
