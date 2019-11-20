import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
import main from './views/main.vue'
import CreateEdit from './views/CreateEdit.vue'
import CategoryList from './views/CategoryList.vue'

import ItemEdit from './views/ItemEdit.vue'
import ItemList from './views/ItemList.vue'

import HeroEdit from './views/HeroEdit.vue'
import HeroList from './views/HeroList.vue'

import ArticleEdit from './views/ArticleEdit.vue'
import ArticleList from './views/ArticleList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
        {path: '/articles/edit/:id',component:ArticleEdit,props:true}


      ]
    },
    
  ]
})
