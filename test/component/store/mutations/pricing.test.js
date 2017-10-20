import Vue from 'vue'
import {expect} from 'chai'
import store from 'store'

Vue.config.productionTip = false

describe('component test -> mutations -> clip pricing', () => {

  it('starts with original state values', () => {
    expect(store.state.clip.price).to.equal(0.25)
    expect(store.state.variation.clipPrice).to.equal(0.01)
    expect(store.state.variation.demand).to.equal(0.01)
    expect(store.state.stats.demand).to.equal(0.3)
  })

  it('increases clip price and reduces public demand on INCREASE_PRICE', () => {
    const increasedPrice = expectedPriceIncrease()
    const decreasedDemand = expectedDemandDecrease()

    store.commit('INCREASE_PRICE')

    expect(store.state.clip.price).to.equal(increasedPrice)
    expect(store.state.stats.demand).to.equal(decreasedDemand)
  })

  it('decreases clip price and increases public demand on DECREASE_PRICE', () => {
    const decreasedPrice = expectedPriceDecrease()
    const increasedDemand = expectedDemandIncrease()

    store.commit('DECREASE_PRICE')

    expect(store.state.clip.price).to.equal(decreasedPrice)
    expect(store.state.stats.demand).to.equal(increasedDemand)
  })
})

const originalPrice = () => store.state.clip.price
const priceVariation = () => store.state.variation.clipPrice
const originalDemand = () => store.state.stats.demand
const demandVariation = () => store.state.variation.demand

const expectedDemandDecrease =
  () => originalDemand() - (originalDemand() * demandVariation())

const expectedDemandIncrease =
  () => originalDemand() + (originalDemand() * demandVariation())

const expectedPriceDecrease =
  () => originalPrice() - priceVariation()

const expectedPriceIncrease =
  () => originalPrice() + priceVariation()
