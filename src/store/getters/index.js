module.exports = {
  clipCount: state => state.clip.count,
  clipStock: state => state.clip.stock,
  clipPrice: state => state.clip.price,
  wireStock: state => state.wire.stock,
  funds: state => state.stats.funds,
  demand: state => state.stats.demand
}
