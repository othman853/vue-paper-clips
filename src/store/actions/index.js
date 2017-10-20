const mutations = require('../mutations/types')
const types = require('./types')

const commit = mutation => (context) => context.commit(mutation)

module.exports = {
  [types.PRODUCE_CLIP]: commit(mutations.PRODUCE_CLIP),
  [types.SELL_CLIP]: commit(mutations.SELL_CLIP),
  [types.INCREASE_PRICE]: commit(mutations.INCREASE_PRICE),
  [types.DECREASE_PRICE]: commit(mutations.DECREASE_PRICE),
}
