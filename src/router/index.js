import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/components/Table'
import TableItem from '@/components/TableItem'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Table',
      component: Table
    },
    {
      path: '/table-item',
      name: 'TableItem',
      component: TableItem
    }
  ]
})
