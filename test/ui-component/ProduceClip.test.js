import Vue from 'vue'
import Vuex from 'vuex'
import {expect} from 'chai'
import {mount} from './utils'

import ProduceClip from 'components/ProduceClip.vue'

Vue.config.productionTip = false

describe('ProduceClip -> Available Wire Stock', () => {
  Vue.use(Vuex)

  it('Allows clip production when wireStock >= 1', () => {
    const actions = {produceClip: jest.fn()}
    const produceClip = mount(ProduceClip, {actions})
    const produceClipButton = produceClip.$refs.btnProduceClip

    expect(produceClipButton.textContent).to.equal('Produce Paperclip')
    expect(produceClipButton.disabled).to.be.false

    produceClipButton.click()

    expect(actions.produceClip.mock.calls.length).to.equal(1)
  })

  it('Does not allow clip production when wireStock < 1', () => {
    const getters = {wireStock: () => 0}
    const produceClip= mount(ProduceClip, {getters})
    const produceClipButton = produceClip.$refs.btnProduceClip

    expect(produceClipButton.disabled).to.be.true
  })
})
