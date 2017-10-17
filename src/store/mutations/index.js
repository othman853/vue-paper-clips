const production = require('./production')
const pricing = require('./pricing')

module.exports = {
  PRODUCE_CLIP: production.produce,
  SELL_CLIP: production.sell,
  INCREASE_PRICE: pricing.increase,
  DECREASE_PRICE: pricing.decrease
}
