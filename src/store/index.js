import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
  tableData: JSON.parse(localStorage.getItem('tableData')) || []
}

const getters = {
}

const actions = {
  createTableItem ({ commit }, newItem) {
    const newTableData = [ ...state.tableData, newItem ]
    commit(types.SET_TABLE_ITEMS, newTableData)
  },
  deleteTableItem ({ commit }, deletedItemId) {
    const newTableData = state.tableData.filter((tableItem) => {
      return (deletedItemId !== tableItem.id)
    })
    commit(types.SET_TABLE_ITEMS, newTableData)
  },
  editTableItem ({ commit }, editedItem) {
    const newTableData = state.tableData.map((tableItem) => {
      if (tableItem.id === editedItem.id) {
        tableItem = { ...editedItem }
        return tableItem
      }
    })
    commit(types.SET_TABLE_ITEMS, newTableData)
  }
}

const mutations = {
  [types.SET_TABLE_ITEMS] (state, newTableData) {
    localStorage.setItem('tableData', JSON.stringify([ ...newTableData ]))
    state.tableData = [ ...newTableData ]
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
