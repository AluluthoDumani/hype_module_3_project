<template>
  <div class="product-details">
    <h2>{{ product.name }}</h2>
    <p class="price">R{{ product.price }}</p>
    <div class="product-gallery">
      <img
        v-for="image in productGalleryImages"
        :key="image.product_images_id"
        :src="image.URLs"
        :alt="`Product Image ${image.product_images_id}`"
        class="gallery-image"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();
const productId = route.params.productId;

onMounted(async () => {
  await store.dispatch('fetchProductGalleryImages', productId);
});

const product = computed(() =>
  store.state.products.find((p) => p.product_id === parseInt(productId))
);

const productGalleryImages = computed(() => store.state.productGalleryImages || []);
</script>
<style scoped>
.product-details {
  padding: 20px;
  text-align: center;
}

.product-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.gallery-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
</style>