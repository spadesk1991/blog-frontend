import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Detail from '@/pages/detail/Detail'
import Edit from '@/pages/edit/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    }
  ]
})
