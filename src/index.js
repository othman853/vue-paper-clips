import Vue from 'vue'
import store from './store'
import engine from './engine'
import Main from './components/Main.vue'
import filters from './filters'

Vue.filter('decimal', filters.decimal)

const application = new Vue({
  el: '#main',
  store,
  render: handler => handler(Main)
})

engine.start(store)
