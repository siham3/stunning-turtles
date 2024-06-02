import { createRouter, createWebHistory } from 'vue-router'

export enum RouteName {
  ABOUT = 'About',
  ART = 'Art',
  PROJECTS = 'Project',
  TITLE = 'title'
}

export const routes = [
  {
    path: "/",
    name: RouteName.TITLE,
    component: () => import("../components/title-component.vue"),
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