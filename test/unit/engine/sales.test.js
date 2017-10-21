const types = require('store/actions/types')
const sales = require('engine/sales')

const noopLog = {info: function(){}}

describe('unit -> engine.sales', () => {
  it('dispatches sellClip action when chances are sufficient', () => {
    const store = {dispatch: jest.fn(), state: {stats:{demand: 4}}}
    const chances = jest.fn()
    chances.mockReturnValueOnce(3)

    sales(chances, noopLog).start(store)

    expect(store.dispatch).toHaveBeenCalledWith(types.SELL_CLIP)
  })

  it('it does NOT dispatch sellClip action when chances are NOT sufficient', () => {
    const store = {dispatch: jest.fn(), state: {stats:{demand: 2}}}
    const chances = jest.fn()
    chances.mockReturnValueOnce(3)

    sales(chances, noopLog).start(store)

    expect(store.dispatch).not.toHaveBeenCalled()
  })
})

