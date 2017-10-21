import Vue from 'vue'
import Vuex from 'vuex'
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

    expect(operationStatus.$refs.availableFunds.textContent).toBe('Available funds: $0.56')
    expect(operationStatus.$refs.clipStock.textContent).toBe('Stock count: 5')
    expect(operationStatus.$refs.clipPrice.textContent).toBe('Clip Price: $0.25')
    expect(operationStatus.$refs.publicDemand.textContent).toBe('Public Demand: 30.00%')
  })
})
