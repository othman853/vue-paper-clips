const test = require('ava')
const chances = require('../../../src/engine/chances')

test('Chances should return the pseudo random given by a generator', t => {
  const generator = {random: _ => 5}

  t.deepEqual(chances(generator), 5)
})
