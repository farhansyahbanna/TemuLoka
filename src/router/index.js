import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomeView.vue'; 
import ProductsPage from '../views/ProductView.vue';
import LoginPage from '../views/auth/LoginView.vue';
import RegisterPage from '../views/auth/RegisterView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/products', 
    name: 'Products',
    component: ProductsPage,
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
  }
];

// 3. Buat instance router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;