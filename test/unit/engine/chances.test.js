const {expect} = require('chai')
const chances = require('engine/chances')

describe('unit -> engine.chances', () => {
  it('returns the pseudo random given by a generator', () => {
    const generator = {random: _ => 5}

    expect(chances(generator)).to.equal(5)
  })
})
