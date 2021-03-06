
import { createRouter, createWebHistory } from 'vue-router'
import Home from "@components/Home.vue"
import About from "@components/About.vue"
import Projects from "@components/Projects.vue"
import Showcase from "@components/Showcase.vue"


const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/projects/:id', component: Projects },
    { path: '/showcase', component: Showcase },
  ],
})

export default router;