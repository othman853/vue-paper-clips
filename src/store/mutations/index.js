const production = require('./production')
const pricing = require('./pricing')
const {PRODUCE_CLIP, SELL_CLIP, INCREASE_PRICE, DECREASE_PRICE} = require('./types')

module.exports = {
  [PRODUCE_CLIP]: production.produce,
  [SELL_CLIP]: production.sell,
  [INCREASE_PRICE]: pricing.increase,
  [DECREASE_PRICE]: pricing.decrease
}
