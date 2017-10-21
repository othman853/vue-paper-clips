import Vue from 'vue'
import Vuex from 'vuex'
import {value, mount} from './utils'
import _ from 'lodash'
import WireStatus from 'components/WireStatus.vue'
import filters from 'filters'

Vue.config.productionTip = false

describe('WireStatus', () => {
  Vue.use(Vuex)
  Vue.filter('decimal', filters.decimal)

  const getters = {
    wireStock: value(5),
    wireBasePrice: value(14.555555),
    wireBatchSize: value(1000)
  }

  describe('information display', () => {

    const wireStatus = mount(WireStatus, {getters})

    it('shows the wire stock', () => {
      expect(wireStatus.$refs.wireStockStatus.textContent).toBe('Wire stock: 5')
    })

    it('shows the wire batch price', () => {
      expect(wireStatus.$refs.wirePriceStatus.textContent).toBe('Batch Price: $14.56 for 1000 inches')
    })
  })

  describe('wire purchase control', () => {

    it('enables the buy button when funds >= wireBasePrice', () => {
      const gettersWithFunds = _.merge(getters, {funds: value(25), wireBasePrice: value(15)})

      const wireStatus = mount(WireStatus, {getters: gettersWithFunds})

      expect(wireStatus.$refs.btnBuyWire.disabled).toBe(false)
    })

    it('disables the buy button  when funds < price of wire', () => {
      const gettersWithFunds = _.merge(getters, {funds: value(10), wireBasePrice: value(15)})
      const wireStatus = mount(WireStatus, {getters: gettersWithFunds})

      expect(wireStatus.$refs.btnBuyWire.disabled).toBe(true)
    })
  })
})
