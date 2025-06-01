import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import ProjectView from "@/views/ProjectView.vue";
import AboutView from "@/views/AboutView.vue"

const routes = [
  {
    path: '/',
    redirect: '/moonlight',
  },
  {
    path: '/moonlight',
    name: 'moonlight',
    component: Home
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectView,
  },
  {
    path: '/project-details/:id',
    name: 'ProjectDetails',
    component: () => import('@/views/ProjectDetails.vue')
  },
  {
    path: '/stage',
    name: 'stage',
    component: () => import('@/views/StageView.vue')
  },
  {
    path: '/about-me',
    name: 'about me',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
