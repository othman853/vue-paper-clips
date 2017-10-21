import Vue from 'vue'
import Vuex from 'vuex'
import {expect} from 'chai'
import {value, whatever, mount, override} from './utils'
import WireStatus from 'components/WireStatus.vue'
import filters from 'filters'

Vue.config.productionTip = false

describe('WireStatus', () => {
  Vue.use(Vuex)
  Vue.filter('decimal', filters.decimal)

  const _getters = {wireStock: value(5), wireBasePrice: value(14.555555), wireBatchSize: value(1000), funds: whatever.number}
  const create = (getters = _getters) => mount(WireStatus, {getters: override(_getters, getters)})

  describe('information display', () => {

    const wireStatus = create()

    it('shows the wire stock', () => {
      expect(wireStatus.$refs.wireStockStatus.textContent).to.equal('Wire stock: 5')
    })

    it('shows the wire batch price', () => {
      expect(wireStatus.$refs.wirePriceStatus.textContent).to.equal('Batch Price: $14.56 for 1000 inches')
    })
  })

  describe('wire purchase control', () => {

    it('enables the buy button when funds >= wireBasePrice', () => {
      const wireStatus = create({funds: value(25), wireBasePrice: value(15)})
      expect(wireStatus.$refs.btnBuyWire.disabled).to.be.false
    })

    it('disables the buy button  when funds < price of wire', () => {
      const wireStatus = create({funds: value(10), wireBasePrice: value(15)})
      expect(wireStatus.$refs.btnBuyWire.disabled).to.be.true
    })
  })
})
