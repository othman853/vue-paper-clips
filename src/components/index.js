import Vue from 'vue'
import store from './store'
import Main from './Main.vue'

const application = new Vue({
  el: '#main',
  store,
  render: handler => handler(Main)
})
