import Vue from 'vue'
import Vuex from 'vuex'
import {expect} from 'chai'

import ClipCounter from 'components/ClipCounter.vue'

Vue.config.productionTip = false

describe('ClipCounter', () => {

  Vue.use(Vuex)

  const state = {clip: {count: 1}}
  const store = new Vuex.Store({state})

  it('Displays the correct amount of clips registered in the state', () => {

    const ClipCounterConstructor = Vue.extend(ClipCounter)

    const clipCounter = new ClipCounterConstructor({store}).$mount()

    expect(clipCounter.$el.textContent).to.equal('Clips produced: 1')
  })

})
