const test = require('ava')
const sinon = require('sinon')
const sales = require('../../../src/engine/sales')

test('Sales should trigger SELL_CLIP mutation when chances are sufficient', t => {
  const store = {commit: sinon.spy(), state: {stats:{demand: 4}}}
  const chances = sinon.stub().returns(3)

  sales(chances).start(store)

  t.true(store.commit.calledWith('SELL_CLIP'))
})

test('Sales should NOT trigger SELL_CLIP mutation when chances are NOT sufficient', t => {
  const store = {commit: sinon.spy(), state: {stats:{demand: 2}}}
  const chances = sinon.stub().returns(3)

  sales(chances).start(store)

  t.false(store.commit.calledWith('SELL_CLIP'))
})
