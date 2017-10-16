const test = require('ava')

const state = require('../../../../src/components/store/state')

test('State has expected initial attributes', t =>
  t.deepEqual(state.clips, 0))
