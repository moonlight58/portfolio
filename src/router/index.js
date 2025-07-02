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
  },
  {
    path: '/drawings',
    name: 'drawings',
    component: () => import('@/views/DrawingView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/ErrorNotFound.vue')
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
