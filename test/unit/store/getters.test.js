const getters = require('store/getters')

describe('unit -> store.getters', () => {
  it('.clipCount retrieves correct value from statue object', () => {
    const state = {clip: {count: 5}}
    expect(getters.clipCount(state)).toBe(5)
  })

  it('.clipStock retrieves correct value from statue object', () => {
    const state = {clip: {stock: 5}}
    expect(getters.clipStock(state)).toBe(5)
  })

  it('.clipPrice retrieves correct value from state object', () => {
    const state = {clip: {price: 5}}
    expect(getters.clipPrice(state)).toBe(5)
  })

  it('.wireStock retrieves correct value from state object', () => {
    const state = {wire: {stock: 5}}
    expect(getters.wireStock(state)).toBe(5)
  })

  it('.funds retrieves correct value from state object', () => {
    const state = {stats: {funds: 5}}
    expect(getters.funds(state)).toBe(5)
  })

  it('.demand retrieves correct value from state object', () => {
    const state = {stats: {demand: 5}}
    expect(getters.demand(state)).toBe(5)
  })

  it('.wireBasePrice retrieves correct value from state object', () => {
    const state = {wire: {basePrice: 5}}
    expect(getters.wireBasePrice(state)).toBe(5)
  })

  it('.wireBatchSize retrieves correct value from state object', () => {
    const state = {wire: {batchSize: 5}}
    expect(getters.wireBatchSize(state)).toBe(5)
  })
})
