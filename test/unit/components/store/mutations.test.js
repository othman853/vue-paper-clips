const test = require('ava')

const mutations = require('../../../../src/components/store/mutations')

test('.produceClip increments clips and stock information', t => {
  const state = {clips: 1, stock: 1}

  mutations.produceClip(state)

  t.deepEqual(state.clips, 2)
  t.deepEqual(state.stock, 2)
})

test('.sellClip decrements stock information only', t => {
  const state = {clips: 1, stock: 1}

  mutations.sellClip(state)

  t.deepEqual(state.clips, 1)
  t.deepEqual(state.stock, 0)
})
