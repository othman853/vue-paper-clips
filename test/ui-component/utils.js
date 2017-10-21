import Vuex from 'vuex'
import Vue from 'vue'
import getters from 'store/getters'
import mutations from 'store/mutations'
import actions from 'store/actions'
import state from 'store/state'
import lodash from 'lodash'

const originalStoreData = () => ({getters, mutations, actions, state})

const value = val => _ => val

const mount = (ComponentConstructor, customStoreData = {}) =>
  new (Vue.extend(ComponentConstructor))
    ({store: new Vuex.Store(lodash.merge(originalStoreData(), customStoreData))})
    .$mount()

module.exports = {value, mount}
