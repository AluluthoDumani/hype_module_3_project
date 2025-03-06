import { createStore } from 'vuex';
// Import at the top of your store file
import fallbackImage from '@/assets/images/hype.png';

// Then use it in the getter

const store = createStore({
  state() {
    return {
      products: [],
      productImages: [], // Stores one image per product for product cards
      productGalleryImages: [], // Stores all images for a single product (gallery)
      cart: [],
      loading: false,
      error: null,
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
    addToCart(state, product) {
      const itemInCart = state.cart.find(item => item.product_id === product.product_id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(item => item.product_id !== productId);
    },
    updateQuantity(state, { productId, quantity }) {
      const itemInCart = state.cart.find(item => item.product_id === productId);
      if (itemInCart) {
        itemInCart.quantity = quantity;
      }
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      commit('setLoading', true);
      try {
        const response = await fetch('http://localhost:3500/products');
        const data = await response.json();
        console.log('Fetched products:', data.products); // Log the fetched products
        if (Array.isArray(data.products)) {
          commit('setProducts', data.products);
        } else {
          throw new Error(data.error || 'Invalid data format');
        }
      } catch (error) {
        commit('setError', error.message || 'Failed to fetch products');
        console.error('Error fetching products:', error.message);
      } finally {
        commit('setLoading', false);
      }
    
  },


      async fetchProductImages({ commit }) {
        commit('setLoading', true);
        try {
          const response = await fetch('http://localhost:3500/images');
          const data = await response.json();
          console.log('Fetched product images:', data); // Log the fetched images
          if (Array.isArray(data.ProductImages)) {
            commit('setProductImages', data.ProductImages);
          } else {
            throw new Error(data.error || 'Invalid data format');
          }
        } catch (error) {
          commit('setError', error.message || 'Failed to fetch product images');
          console.error('Error fetching product images:', error.message);
        } finally {
          commit('setLoading', false);
        }

    },
      async fetchProductGalleryImages({ commit }, productId) {
        commit('setLoading', true);
        try {
          const response = await fetch(`http://localhost:3500/images/${productId}`);
          const data = await response.json();
          if (Array.isArray(data)) {
            commit('setProductGalleryImages', data);
          } else {
            throw new Error(data.error || 'Invalid data format');
          }
        } catch (error) {
          commit('setError', error.message || 'Failed to fetch product gallery images');
          console.error('Error fetching product gallery images:', error.message);
        } finally {
          commit('setLoading', false);
        }
     
    },
    addToCart({ commit }, product) {
      console.log('Dispatching addToCart:', product);
      commit('addToCart', product);
    },
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId);
    },
    updateQuantity({ commit }, payload) {
      commit('updateQuantity', payload);
    },
  },
  getters: {
    products: (state) => state.products,
    productImages: (state) => state.productImages,
    productGalleryImages: (state) => state.productGalleryImages,
    cart: (state) => state.cart,
    loading: (state) => state.loading,
    error: (state) => state.error,
    cartTotal: (state) => state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
    // Define the getProductImage getter as a function


      getProductImage: (state) => (productId) => {
        console.log('Product ID:', productId); // Log the product ID
        console.log('Product Images:', state.productImages); // Log the product images
        const image = state.productImages.find(img => img.product_id == productId);
        console.log('Found Image:', image); // Log the found image
        return image ? image.image_url : require('@/assets/images/hype.png'); // Fallback image
      },

    
  },
});

export default store;