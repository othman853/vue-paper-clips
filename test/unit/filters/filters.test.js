import filters from 'filters'

describe('unit -> utils.filters', () => {
  it('.decimal formats a number correctly', () => {
    const aNumber = 0.2524232221

    expect(filters.decimal(aNumber)).toBe('0.25')
  })

  it('.decimal formats a string correctly', () => {
    const aNumericalString = '32'

    expect(filters.decimal(aNumericalString)).toBe('32.00')
  })
})
