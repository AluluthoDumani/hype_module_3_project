<template>
  <div class="app-container">
    <NavBar />
    <topSticker /> <!-- Now placed below the navbar -->
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/footerComp.vue';
import topSticker from './components/topSticker.vue';
</script>

<style scoped>

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Prevent Overlapping Content */
.content {
  flex: 1;
  padding-top: 100px; /* Adjust this value based on navbar + topSticker height */
  padding-bottom: 80px; /* Adjust to prevent footer overlap */
}
</style>


