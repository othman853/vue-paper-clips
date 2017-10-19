import Vue from 'vue'
import Vuex from 'vuex'
import chai from 'chai'

import ClipCounter from '../../../src/components/ClipCounter.vue'

describe('ClipCounter', () => {

  Vue.use(Vuex)

  const state = {clip: {count: 1}}
  const store = new Vuex.Store({state})

  it('Displays the correct amount of produced clips according to the application state', () => {

    const ClipCounterConstructor = Vue.extend(ClipCounter)

    const clipCounter = new ClipCounterConstructor({store}).$mount()

    chai.expect(clipCounter.$el.textContent).to.equal('Clips produced: 1')
  })

})
