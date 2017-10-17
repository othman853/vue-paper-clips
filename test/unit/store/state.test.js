const test = require('ava')

const state = require('../../../src/store/state')

test('State has expected initial clip count', t =>
  t.deepEqual(state.clips, 0))

test('State has expected initial stock', t =>
  t.deepEqual(state.stock, 0))

test('State has expected initial funds', t =>
  t.deepEqual(state.funds, 0))

test('State has expected initial clipPrice', t =>
  t.deepEqual(state.clipPrice, 0.5))

test('State has expected initial clipPrice', t =>
  t.deepEqual(state.publicDemand, 0.2))

test('State has expected initial demandVariation', t =>
  t.deepEqual(state.demandVariation, 0.1))

test('State has expected initial priceVariation', t =>
  t.deepEqual(state.priceVariation, 0.1))
