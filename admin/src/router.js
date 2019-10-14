import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
import main from './views/main.vue'
import CreateEdit from './views/CreateEdit.vue'
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
        {path: '/categories/create',component:CreateEdit}
      ]
    },
    
  ]
})
