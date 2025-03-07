import { createRouter, createWebHistory } from 'vue-router';
import SignupLoginView from '../views/SignupLoginView.vue';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import ProductList from '../views/product.vue';
import ProductDetails from '../components/ProductPage.vue';
import Cart from '../views/CartView.vue';
import Footer from '../components/footerComp.vue';
import CheckoutView from '@/views/checkoutView.vue';
import NewReleases from '@/views/newReleases.vue';
import usersAdmin from '@/components/usersAdmin.vue';

import store from '@/store';

const routes = [
  { path: '/', component: Home },
  { path: '/checkout', component: CheckoutView },
  { path: '/cart', component: Cart },
  { path: '/footer', component: Footer },
  { path: '/productList', component: ProductList },
  { path: '/', redirect: 'users' },
  { path: '/about', component: About },
  { path: '/product/:id', component: ProductDetails, props: true, name: 'ProductPage' },
  { path: '/contact', component: Contact },
  { path: '/SignupLoginView', component: SignupLoginView },
  { path: '/newReleases', component: NewReleases},
  { path: '/users', component: usersAdmin, name: 'UsersAdmin' },
{
    path: '/dashboard',
    component: () => import('../views/DashBoard.vue'), // Assuming you have a dashboard view
    beforeEnter: (to, from, next) => {
      if (!store.getters.isAuthenticated) {
        next('/SignupLoginView');  // Redirect to login if not authenticated
      } else {
        next();  // Proceed if authenticated
      }
    },
  },
];

  
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem('user')); // Fetch logged-in user
  if (to.meta.requiresAuth && !user) {
    next('/SignupLoginView'); // Redirect if not logged in
  } else if (to.meta.isAdmin && user?.email !== "admin@gmail.com") {
    next('/users'); // Redirect non-admin users
  } else {
    next();
  }
});

export default router;
