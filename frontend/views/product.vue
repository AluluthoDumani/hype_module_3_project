<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.product_id" class="product-card">
      <img :src="getProductImage(product.product_id)" :alt="product.name" class="product-image" />
      <h3>{{ product.name }}</h3>
      <p class="price">R{{ product.price }}</p>
      <button @click="goToProduct(product.product_id)">View More</button>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

onMounted(async () => {
  await store.dispatch('fetchProducts'); // Fetch products
  await store.dispatch('fetchProductImages'); // Fetch one image per product
});

const products = computed(() => store.state.products || []);
const loading = computed(() => store.state.loading);
const error = computed(() => store.state.error);

const getProductImage = (productId) => {
  return store.getters.getProductImage(productId);
};

const goToProduct = async (productId) => {
  await store.dispatch('fetchProductGalleryImages', productId); // Fetch all images for the product
  router.push(`/product/${productId}`);
};
</script>


<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  padding: 20px;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
}

.price {
  color: #ff5733;
  font-weight: bold;
  font-size: 1.2rem;
}

button {
  background: #ff4500;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s ease;
}

button:hover {
  background: #cc3700;
}

.loading,
.error {
  text-align: center;
  font-size: 1.2rem;
  padding: 20px;
}

.error {
  color: red;
}
</style>