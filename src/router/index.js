import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import ProductList from '../views/product.vue';
import ProductDetails from '../components/ProductPage.vue';
import Cart from '../views/CartView.vue';
import Footer from '../components/footerComp.vue';
import CheckoutView from '@/views/checkoutView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/checkout', component: CheckoutView },
  { path: '/cart', component: Cart },
  { path: '/footer', component: Footer },
  { path: '/productList', component: ProductList },
  { path: '/about', component: About },
  { path: '/product/:id', component: ProductDetails, props: true, name: 'ProductPage' },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
