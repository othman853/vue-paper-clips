import Vue from 'vue'
import Vuex from 'vuex'
import {expect} from 'chai'
import td from 'testdouble'

import ProduceClip from 'components/ProduceClip.vue'

Vue.config.productionTip = false

describe('ProduceClip -> Available Wire Stock', () => {
  Vue.use(Vuex)

  it('Allows clip production when wireStock >= 1', () => {
    const getters = {wireStock: () => 5}
    const actions = {produceClip: td.function()}

    const store = new Vuex.Store({getters, actions})

    const ProduceClipConstructor = Vue.extend(ProduceClip)

    const produceClip = new ProduceClipConstructor({store}).$mount()

    const produceClipButton = produceClip.$refs.btnProduceClip

    expect(produceClipButton.textContent).to.equal('Produce Paperclip')
    expect(produceClipButton.disabled).to.be.false

    produceClipButton.click()

    expect(td.explain(actions.produceClip).callCount).to.equal(1)
  })

  it('Does not allow clip production when wireStock < 1', () => {
    const getters = {wireStock: () => 0}
    const actions = {produceClip: td.function()}

    const store = new Vuex.Store({getters, actions})

    const ProduceClipConstructor = Vue.extend(ProduceClip)

    const produceClip = new ProduceClipConstructor({store}).$mount()

    const produceClipButton = produceClip.$refs.btnProduceClip

    expect(produceClipButton.disabled).to.be.true
  })
})
