import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
  tableData: []
}

const getters = {
}

const actions = {
  createTableItem ({ commit }, newItem) {
    localStorage.setItem('tableData', JSON.stringify([...state.tableData], newItem))
    commit(types.UPDATE_TABLE_ITEMS, newItem)
  }
}

const mutations = {
  [types.UPDATE_TABLE_ITEMS] (state, newItem) {
    state.tableData = [...state.tableData, newItem]
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
