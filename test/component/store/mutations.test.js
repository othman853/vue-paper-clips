const test = require('ava')
const store = require('../../../src/store')

test('clip mutations', t => {
  t.deepEqual(store.state.clip.count, 0)
  t.deepEqual(store.state.clip.stock, 0)
  t.deepEqual(store.state.clip.price, 0.25)

  store.commit('PRODUCE_CLIP')

  t.deepEqual(store.state.clip.count, 1)
  t.deepEqual(store.state.clip.stock, 1)

  store.commit('SELL_CLIP')

  t.deepEqual(store.state.clip.count, 0)
  t.deepEqual(store.state.clip.stock, 0)
  t.deepEqual(store.state.stats.funds, 0.25)

  store.commit('SELL_CLIP')

  t.deepEqual(store.state.clip.count, 0)
  t.deepEqual(store.state.clip.stock, 0)
  t.deepEqual(store.state.stats.funds, 0.25)
})
