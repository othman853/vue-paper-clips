import Vue from 'vue'
import Vuex from 'vuex'
import {mount, value} from './utils'

import ClipCounter from 'components/ClipCounter.vue'

Vue.config.productionTip = false

describe('ClipCounter', () => {

  Vue.use(Vuex)

  const getters = {clipCount: value(1)}

  it('Displays the correct amount of clips registered in the state', () => {
    const clipCounter = mount(ClipCounter, {getters})

    expect(clipCounter.$el.textContent).toBe('Clips produced: 1')
  })

})
