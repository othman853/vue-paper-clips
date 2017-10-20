const {expect} = require('chai')
const sinon = require('sinon')
const actions = require('store/actions')
const types = require('store/mutations/types')

describe('unit -> store.actions', () => {
  it('.produceClip Commits PRODUCE_CLIP mutation', () => {
    const context = {commit: sinon.spy()}

    actions.produceClip(context)

    expect(context.commit.calledWith(types.PRODUCE_CLIP)).to.be.true
  })
})
