import { createStore } from 'vuex';
import fallbackImage from '@/assets/images/hype.png';

const store = createStore({
  state() {
    return {
      products: [],
      productImages: [],
      productGalleryImages: [],
      cart: [],
      loading: false,
      error: null,
      user: null,
      isAuthenticated: false
    };
  },
  mutations: {
    setProducts(state, products) {
      state.products = products || [];
    },
    setProductImages(state, productImages) {
      state.productImages = productImages || [];
    },
    setProductGalleryImages(state, productGalleryImages) {
      state.productGalleryImages = productGalleryImages || [];
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
    setCart(state, cartItems) {
      state.cart = cartItems.map(item => ({
        cart_id: item.id,
        product_id: item.product_id,
        name: item.product?.name || 'Unknown Product',
        price: parseFloat(item.product?.price) || 0,
        quantity: parseInt(item.quantity) || 1,
        image: item.product?.image || fallbackImage
      }));
    },
    removeFromCart(state, cart_id) {
      state.cart = state.cart.filter(item => item.cart_id !== cart_id);
    },
    updateQuantity(state, { cart_id, quantity }) {
      const item = state.cart.find(item => item.cart_id === cart_id);
      if (item) item.quantity = Math.max(1, quantity);
    },
    setUser(state, userData) {
      state.user = userData;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      commit('setLoading', true);
      try {
        const response = await fetch('http://localhost:3500/products');
        const data = await response.json();
        commit('setProducts', data.products);
      } catch (error) {
        commit('setError', error.message);
      } finally {
        commit('setLoading', false);
      }
    },

    async fetchProductImages({ commit }) {
      commit('setLoading', true);
      try {
        const response = await fetch('http://localhost:3500/images');
        const data = await response.json();
        commit('setProductImages', data.ProductImages);
      } catch (error) {
        commit('setError', error.message);
      } finally {
        commit('setLoading', false);
      }
    },

    async fetchProductGalleryImages({ commit }, productId) {
      commit('setLoading', true);
      try {
        const response = await fetch(`http://localhost:3500/images/${productId}`);
        const data = await response.json();
        commit('setProductGalleryImages', data);
      } catch (error) {
        commit('setError', error.message);
      } finally {
        commit('setLoading', false);
      }
    },

    async fetchCart({ commit }) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3500/api/cart', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        commit('setCart', data.cartItems || []);
      } catch (error) {
        console.error('Cart fetch error:', error);
      }
    },

    async removeFromCart({ dispatch }, cart_id) {
      try {
        const token = localStorage.getItem('token');
        await fetch(`http://localhost:3500/api/cart/${cart_id}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });
        await dispatch('fetchCart');
      } catch (error) {
        console.error('Remove item error:', error);
      }
    },

    async updateQuantity({ dispatch }, { cart_id, quantity }) {
      try {
        const token = localStorage.getItem('token');
        await fetch(`http://localhost:3500/cart/${cart_id}`, {
          method: 'PUT',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ quantity }),
        });
        await dispatch('fetchCart');
      } catch (error) {
        console.error('Update quantity error:', error);
      }
    },

    async signUp({ commit }, { email, password }) {
      try {
        const response = await fetch('http://localhost:3500/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (data.success) {
          commit('setUser', data.user);
          localStorage.setItem('token', data.token);
        }
        return data;
      } catch (error) {
        console.error('Signup error:', error);
        throw error;
      }
    },

    async login({ commit }, { email, password }) {
      try {
        const response = await fetch('http://localhost:3500/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (data.success) {
          commit('setUser', data.user);
          localStorage.setItem('token', data.token);
        }
        return data;
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
    },

    logout({ commit }) {
      commit('logout');
    }
  },
  getters: {
    products: state => state.products,
    productImages: state => state.productImages,
    productGalleryImages: state => state.productGalleryImages,
    cart: state => state.cart,
    loading: state => state.loading,
    error: state => state.error,
    cartTotal: state => {
      return state.cart.reduce((total, item) => 
        total + (item.price * item.quantity), 0
      ).toFixed(2);
    },
    getUser: state => state.user,
    isAuthenticated: state => state.isAuthenticated,
    getProductImage: state => productId => {
      const image = state.productImages.find(img => img.product_id === productId);
      return image?.image_url || fallbackImage;
    }
  }
});

export default store;