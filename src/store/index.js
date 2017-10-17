const Vue = require('vue')
const Vuex = require('vuex')

const state = require('./state')
const mutations = require('./mutations')
const getters = require('./getters')

Vue.use(Vuex)

module.exports = new Vuex.Store({state, getters, mutations})
