// Configuration des routes UI
export const uiRoutes = [
  {
    path: '',
    name: 'ui-gallery',
    component: () => import('@/views/UIGalleryView.vue')
  },
  {
    path: ':pageName',
    name: 'ui-page',
    component: () => import('@/views/UI-UX/UIPageLoader.vue')
  }
]
