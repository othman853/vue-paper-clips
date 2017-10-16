const test = require('ava')

const state = require('../../../../src/components/store/state')

test('State has expected initial clip count', t =>
  t.deepEqual(state.clips, 0))

test('State has expected initial stock', t =>
  t.deepEqual(state.stock, 0))
