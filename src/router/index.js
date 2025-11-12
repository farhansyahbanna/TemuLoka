import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomeView.vue'; 
import ProductsPage from '../views/UmkmView.vue';
import LoginPage from '../views/auth/LoginView.vue';
import RegisterPage from '../views/auth/RegisterView.vue';
import ExploreUMKMView from '../views/ExploreUMKMView.vue';
import UmkmDetailPage from '../views/UmkmDetailView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
   {
    path: '/login', // 
    name: 'Login',
    component: LoginPage,
    meta: { hideLayout: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => RegisterPage,
    meta: { hideLayout: true }
  },
  {
    path: '/explore-umkm',
    name: 'ExploreUMKM',
    component: () => ExploreUMKMView,
    
  },
  {
    path: '/umkm/:id', 
    name: 'UmkmDetail',
    component: UmkmDetailPage,
    props: true 
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    
  }
];

// 3. Buat instance router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;