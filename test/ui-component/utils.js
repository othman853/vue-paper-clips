import Vuex from 'vuex'
import Vue from 'vue'

const mount = (ComponentConstructor, storeData) =>
  new (Vue.extend(ComponentConstructor))({store: new Vuex.Store(storeData)}).$mount()

module.exports = {
  noop: () => function(){},
  value: val => _ => val,
  whatever: {number: _ => 5},
  mount,
  override: (original, newValues) => Object.assign({}, original, newValues)
}
