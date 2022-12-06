import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/home/home')
const About = () => import('../views/about/about')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router
