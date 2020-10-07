import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layout/Default.vue'
import Index from '@/views/Index.vue'
Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'default',
      component: Default,
      redirect:'/index',
      children:[{
        path:'index',
        name:'index',
        component:Index
      }]
    }
  ]
})
