import Vue from 'vue'
import VueRouter from 'vue-router'
import Save from '../views/Save'
import Take from "../views/Take";
import Query from "../views/Query";
import Cancellation from "../views/Cancellation";
import Login from "../components/Login";
import HomePage from "../components/HomePage";
import Home from "../views/Home";
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/homepage',
    name: 'HomePage',
    component: HomePage,
  children:[
    {
      path: '/Cancellation',
      name: 'Cancellation',
      component: Cancellation
    },
    {
      path: '/save',
      name: 'Save',
      component: Save
    },
    {
      path: '/Take',
      name: 'Take',
      component: Take
    },
    {
      path: '/Query',
      name: 'Query',
      component: Query
    },
    ]
},

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
