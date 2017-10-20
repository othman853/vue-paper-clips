const getters = require('store/getters')
const {expect} = require('chai')

describe('unit -> store.getters', () => {
  it('.wireStock retrieves correct value from state object', () => {
    const state = {wire: {stock: 5}}
    expect(getters.wireStock(state)).to.equal(5)
  })

  it('.clipPrice retrieves correct value from state object', () => {
    const state = {clip: {price: 5}}
    expect(getters.clipPrice(state)).to.equal(5)
  })
})
