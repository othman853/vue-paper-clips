const test = require('ava')

const getters = require('../../../../src/components/store/getters')

test('Getters get the correct clips information', t => {
  const state = {clips: 1}

  const clips = getters.clips(state)

  t.deepEqual(clips, 1)
})
