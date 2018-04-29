import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import ForgotPassword from '@/components/ForgotPassword'

import LoggedIn from '@/layouts/LoggedIn'
import Dashboard from '@/layouts/Dashboard'

import Welcome from '@/components/Welcome'
import Home from '@/components/Home'

import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignUp
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: ForgotPassword
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/dashboard',
      name: 'Home',
      component: Dashboard,
      children: [
            {
                path: 'welcome',
                name: 'dashboard.welcome',
                component: () => Welcome
            }
        ],
      meta:{
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) next('login')
    else if (!requiresAuth && currentUser) next('welcome')
      else next()
})

export default router
