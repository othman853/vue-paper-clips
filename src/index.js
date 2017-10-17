import Vue from 'vue'
import store from './store'
import engine from './engine'
import Main from './components/Main.vue'

const application = new Vue({
  el: '#main',
  store,
  render: handler => handler(Main)
})

engine.start(store)
