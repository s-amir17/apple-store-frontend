import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProductView from '@/views/ProductView.vue';
import NotFound from '@/views/NotFound.vue';
import SignUpVue from '@/views/SignUp.vue';
import Login from '@/views/Login.vue';

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomeView,
   },
   {
      path: '/store',
      name: 'ProductView',
      component: ProductView,
   },
   {
      path: '/sign',
      name: 'Sign',
      component: SignUpVue,
   },
   {
      path: '/login',
      name: 'Login',
      component: Login,
   },
   {
      path: '/:pathMatch(.*)*',
      component: NotFound,
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
