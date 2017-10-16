import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = {
  clips: 0
}

export const getters = {
  clips: state => state.clips
}

export const mutations = {
  incrementClip: (state) => state.clips++,
  decrementClip: (state) => state.clips--
}

export const actions = {
  incrementClip: (context) => context.commit('incrementClip')
}

export default new Vuex.Store({state, getters, actions, mutations})
