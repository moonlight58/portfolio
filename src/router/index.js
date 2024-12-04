import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import SpotifyTuiView from "@/views/projets/Spotify-TuiView.vue";
import SteamToLinuxView from "@/views/projets/SteamToLinuxView.vue";
import BienView from "@/views/projets/BienView.vue";
import RoiDesRosesView from "@/views/projets/RoiDesRosesView.vue";


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
    path: '/personal/spotify-tui',
    name: 'spotify-tui',
    component: SpotifyTuiView
  },
  {
    path: '/personal/steamtolinux',
    name: 'steamtolinux',
    component: SteamToLinuxView
  },
  {
    path: '/uni/bien',
    name: 'bien',
    component: BienView
  },
  {
    path: '/uni/rdr',
    name: 'rdr',
    component: RoiDesRosesView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
