import Vue from 'vue'
import Vuex from 'vuex'
import ClipPriceControl from 'components/ClipPriceControl'
import {mount, value} from './utils'

Vue.config.productionTip = false

describe('ClipPriceControl', () => {
  Vue.use(Vuex)

  it('has buttons to increase and decrease price', () => {
    const priceControl = mount(ClipPriceControl)

    expect(priceControl.$refs.btnDecreasePrice.textContent).toBe('Decrease Price')
    expect(priceControl.$refs.btnIncreasePrice.textContent).toBe('Increase Price')
  })

  it('allows price to be increased', () => {
    const actions = {increasePrice: jest.fn()}
    const priceControl = mount(ClipPriceControl, {actions})

    priceControl.$refs.btnIncreasePrice.click()

    expect(actions.increasePrice).toHaveBeenCalled()
  })

  it('allows price to be decreased', () => {
    const actions = {decreasePrice: jest.fn()}
    const priceControl = mount(ClipPriceControl, {actions})

    priceControl.$refs.btnDecreasePrice.click()

    expect(actions.decreasePrice).toHaveBeenCalled()
  })

  it('does not allow price to be decreased when price is <= 0.01', () => {
    const getters = {clipPrice: value(0.01)}
    const priceControl = mount(ClipPriceControl, {getters})
    const decreasePriceButton = priceControl.$refs.btnDecreasePrice

    expect(decreasePriceButton.disabled).toBe(true)
  })
})
