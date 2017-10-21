const actions = require('store/actions')
const types = require('store/mutations/types')

describe('unit -> store.actions', () => {
  it('.produceClip Commits PRODUCE_CLIP mutation', () => {
    const context = {commit: jest.fn()}

    actions.produceClip(context)

    expect(context.commit).toHaveBeenCalledWith(types.PRODUCE_CLIP)
  })
})
