const state = require('store/state')
const getters = require('store/getters')

describe('unit -> store.getters', () => {
  it('.clipCount retrieves correct value from state object', () => {
    expect(getters.clipCount(state)).toBe(0)
  })

  it('.clipStock retrieves correct value from state object', () => {
    expect(getters.clipStock(state)).toBe(0)
  })

  it('.clipPrice retrieves correct value from state object', () => {
    expect(getters.clipPrice(state)).toBe(0.25)
  })

  it('.wireStock retrieves correct value from state object', () => {
    expect(getters.wireStock(state)).toBe(1000)
  })

  it('.funds retrieves correct value from state object', () => {
    expect(getters.funds(state)).toBe(0)
  })

  it('.demand retrieves correct value from state object', () => {
    expect(getters.demand(state)).toBe(0.3)
  })

  it('.wireBasePrice retrieves correct value from state object', () => {
    expect(getters.wireBasePrice(state)).toBe(14)
  })

  it('.wireBatchSize retrieves correct value from state object', () => {
    expect(getters.wireBatchSize(state)).toBe(1000)
  })
})
