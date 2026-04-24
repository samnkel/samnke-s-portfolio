import { createRouter, createWebHistory } from 'vue-router'
import Home from '../home.vue'
import Services from '../services.vue'
import Projects from '../projects.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/services', component: Services },
  { path: '/projects', component: Projects },
{ path: '/about', component: () => import('../about.vue') },
  { path: '/contact', component: () => import('../contact.vue') }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
