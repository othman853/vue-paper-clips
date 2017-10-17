const clip = {
  count: 0,
  stock: 0,
  price: 0.25
}

const variation = {
  demand: 0.01,
  clipPrice: 0.01,
  wirePrice: 0.2
}

const wire = {
  stock: 1000,
  batchSize: 1000,
  basePrice: 14
}

const stats = {
  funds: 0,
  demand: 0.3
}

module.exports = {clip, variation, wire, stats}
