import Vue from 'vue'
import Vuex from 'vuex'
import {expect} from 'chai'
import filters from 'filters'
import {mount, value} from './utils'
import OperationStatus from 'components/OperationStatus'

Vue.config.productionTip = false

describe('OperationStatus', () => {
  Vue.use(Vuex)
  Vue.filter('decimal', filters.decimal)

  it('Shows values formatted correctly', () => {

    const getters = {
      funds: value(0.55555),
      clipStock: value(5),
      clipPrice: value(0.249999999),
      demand: value(0.3)
    }

    const operationStatus = mount(OperationStatus, {getters})

    expect(operationStatus.$refs.availableFunds.textContent).to.equal('Available funds: $0.56')
    expect(operationStatus.$refs.clipStock.textContent).to.equal('Stock count: 5')
    expect(operationStatus.$refs.clipPrice.textContent).to.equal('Clip Price: $0.25')
    expect(operationStatus.$refs.publicDemand.textContent).to.equal('Public Demand: 30.00%')
  })
})
