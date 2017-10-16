const test = require('ava')

const mutations = require('../../../../src/components/store/mutations')

test('.incrementClip increments clips information', t => {
  const state = {clips: 1}

  mutations.incrementClip(state)

  t.deepEqual(state.clips, 2)
})

test('.decrementClip decrements clips information', t => {
  const state = {clips: 1}

  mutations.decrementClip(state)

  t.deepEqual(state.clips, 0)
})
