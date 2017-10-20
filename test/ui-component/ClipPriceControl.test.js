import Vue from 'vue'
import Vuex from 'vuex'
import {expect} from 'chai'
import ClipPriceControl from 'components/ClipPriceControl'

Vue.config.productionTip = false

const noop = function(){}

describe('ClipPriceControl', () => {
  Vue.use(Vuex)

  it('has buttons to increase and decrease price', () => {
    const actions = {increasePrice: noop, decreasePrice: noop}
    const getters = {clipPrice: noop}
    const store = new Vuex.Store({actions, getters})
    const ClipPriceControlConstructor = Vue.extend(ClipPriceControl)

    const priceControl = new ClipPriceControlConstructor({store}).$mount()

    expect(priceControl.$refs.btnDecreasePrice.textContent).to.equal('Decrease Price')
    expect(priceControl.$refs.btnIncreasePrice.textContent).to.equal('Increase Price')
  })

  it('allows price to be increased', () => {
    const ClipPriceControlConstructor = Vue.extend(ClipPriceControl)
    const actions = {increasePrice: jest.fn(), decreasePrice: noop}
    const getters = {clipPrice: noop}
    const store = new Vuex.Store({actions, getters})
    const priceControl = new ClipPriceControlConstructor({store}).$mount()

    priceControl.$refs.btnIncreasePrice.click()

    expect(actions.increasePrice.mock.calls.length).to.equal(1)
  })

  it('allows price to be decreased', () => {
    const ClipPriceControlConstructor = Vue.extend(ClipPriceControl)
    const actions = {increasePrice: noop, decreasePrice: jest.fn()}
    const getters = {clipPrice: () => 5}
    const store = new Vuex.Store({actions, getters})
    const priceControl = new ClipPriceControlConstructor({store}).$mount()

    priceControl.$refs.btnDecreasePrice.click()

    expect(actions.decreasePrice.mock.calls.length).to.equal(1)
  })

  it('does not allow price to be decreased when price is <= 0.01', () => {
    const ClipPriceControlConstructor = Vue.extend(ClipPriceControl)
    const actions = {increasePrice: noop, decreasePrice: noop}
    const getters = {clipPrice: () => 0.01}
    const store = new Vuex.Store({actions, getters})
    const priceControl = new ClipPriceControlConstructor({store}).$mount()
    const decreasePriceButton = priceControl.$refs.btnDecreasePrice

    expect(decreasePriceButton.disabled).to.be.true
  })
})
