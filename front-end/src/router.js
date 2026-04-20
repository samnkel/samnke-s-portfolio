import { createRouter, createWebHistory } from 'vue-router'
import Home from '../home.vue'
import Services from '../services.vue'
import Projects from '../projects.vue'
import Contact from '../contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/services', component: Services },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
