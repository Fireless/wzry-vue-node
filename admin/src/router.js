import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import main from './views/main.vue'
import CreateEdit from './views/CreateEdit.vue'
import CategoryList from './views/CategoryList.vue'

import ItemEdit from './views/ItemEdit.vue'
import ItemList from './views/ItemList.vue'

import HeroEdit from './views/HeroEdit.vue'
import HeroList from './views/HeroList.vue'

import ArticleEdit from './views/ArticleEdit.vue'
import ArticleList from './views/ArticleList.vue'

import TipEdit from './views/TipEdit.vue'
import TipList from './views/TipList.vue'

import AdminUserEdit from './views/AdminUserEdit.vue'
import AdminUserList from './views/AdminUserList.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:'/login',name:'login',component:Login},
    {
      path: '/',
      name: 'main',
      component: main,
      children:[
        {path: '/categories/create',component:CreateEdit},
        {path: '/categories/list',component:CategoryList},
        {path: '/categories/edit/:id',component:CreateEdit,props:true},

        {path: '/items/create',component:ItemEdit},
        {path: '/items/list',component:ItemList},
        {path: '/items/edit/:id',component:ItemEdit,props:true},

        {path: '/heros/create',component:HeroEdit},
        {path: '/heros/list',component:HeroList},
        {path: '/heros/edit/:id',component:HeroEdit,props:true},

        {path: '/articles/create',component:ArticleEdit},
        {path: '/articles/list',component:ArticleList},
        {path: '/articles/edit/:id',component:ArticleEdit,props:true},

        {path: '/tips/create',component:TipEdit},
        {path: '/tips/list',component:TipList},
        {path: '/tips/edit/:id',component:TipEdit,props:true},

         {path: '/admin_users/create',component:AdminUserEdit},
        {path: '/admin_users/list',component:AdminUserList},
        {path: '/admin_users/edit/:id',component:AdminUserEdit,props:true}
      ]
    },
    
  ]
})
