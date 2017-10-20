const {expect} = require('chai')
const sinon = require('sinon')
const types = require('store/actions/types')
const sales = require('engine/sales')

const noopLog = {info: function(){}}

describe('unit -> engine.sales', () => {
  it('dispatches sellClip action when chances are sufficient', () => {
    const store = {dispatch: sinon.spy(), state: {stats:{demand: 4}}}
    const chances = sinon.stub().returns(3)

    sales(chances, noopLog).start(store)

    expect(store.dispatch.calledWith(types.SELL_CLIP)).to.be.true
  })

  it('it does NOT dispatch sellClip action when chances are NOT sufficient', () => {
    const store = {dispatch: sinon.spy(), state: {stats:{demand: 2}}}
    const chances = sinon.stub().returns(3)

    sales(chances, noopLog).start(store)

    expect(store.dispatch.calledOnce).to.be.false
  })
})

