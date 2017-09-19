import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import food from '@/page/food'
import detail from '@/page/detail'
import movie from '@/page/movie'
import subject from '@/page/subject'
import register from '@/page/register'

Vue.use(Router)

export default new Router({
  routes: [    
    {
      path: '/',
      name: 'home',
      component: home
    },  
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/food',
      name: 'food',
      component: food
    },
    {
      path: '/subject/:id',
      name: 'subject',
      component: subject
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/detail/:id',
      name: 'detail/:id',
      component: detail
    },
    {
      path: '/register',
      name: 'register',
      component:register
    }

   
  ]
})
