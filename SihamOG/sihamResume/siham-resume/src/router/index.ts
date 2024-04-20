import { createRouter, createWebHistory } from 'vue-router'

export enum RouteName {
  ABOUT = 'About',
  ART = 'Art',
  PROJECTS = 'Project',
  HOME = 'Home'
}

export const routes = [
  {
    path: "/About",
    name: RouteName.ABOUT,
    component: () => import("../components/about-page.vue"),
  },
  {
    path: "/",
    name: RouteName.HOME,
    component: () => import("../components/home-page.vue"),
  },
]; 

const router = createRouter({
    // 4. Provide the history implementation to use. We
    // are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
    scrollBehavior() {
      // always scroll to top
      return { top: 0 }
    },
  });

  export default router;