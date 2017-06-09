import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Add from '@/components/Add'
import Detail from '@/components/Detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
