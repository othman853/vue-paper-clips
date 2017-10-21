import filters from 'filters'
import {expect} from 'chai'

describe('unit -> utils.filters', () => {
  it('.decimal formats a number correctly', () => {
    const aNumber = 0.2524232221

    expect(filters.decimal(aNumber)).to.equal('0.25')
  })

  it('.decimal formats a string correctly', () => {
    const aNumericalString = '32'

    expect(filters.decimal(aNumericalString)).to.equal('32.00')
  })
})
