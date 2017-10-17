const store = require('../../../src/store')
const salesBuilder = require('../../../src/engine/sales')

describe('component test -> engine -> sales', () => {

  const chances = {random: _=> 0}

  const sales = salesBuilder(chances)

  it.skip('triggres SELL_CLIP', () => {})
})
