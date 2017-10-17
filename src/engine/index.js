const chances = require('./chances')
const sales = require('./sales')(chances)

module.exports = {
  start(store) {
    const engineLoop = setInterval(() => {
      sales.start(store)
    }, 1000)
  }
}
