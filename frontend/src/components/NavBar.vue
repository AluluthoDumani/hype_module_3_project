<template>
  <div>
    <!-- Top Sticker -->
    <header class="moving-header">
      <div class="marquee">
        <p>
          10% OFF FIRST PURCHASE | FREE SHIPPING ON ORDERS OVER R3500 | MEMBERS GET EXCLUSIVE DROPS!
          10% OFF FIRST PURCHASE | FREE SHIPPING ON ORDERS OVER R3500 | MEMBERS GET EXCLUSIVE DROPS!
          10% OFF FIRST PURCHASE | FREE SHIPPING ON ORDERS OVER R3500 | MEMBERS GET EXCLUSIVE DROPS!
        </p>
      </div>
    </header>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg py-4">
      <div class="container-fluid">
        <!-- Left: Hype Logo -->
        <a class="navbar-brand" href="#">
          <img 
            src="https://files.slack.com/files-tmb/T02LW4RMXJQ-F08DSSD4N6B-22bc3f1070/beige_and_red_handwritten_typographic_clothing_brand_logo__1_-removebg-preview_480.png" 
            alt="Hype Store Logo" width="100" height="30" class="me-2">
        </a>

        <!-- Toggle Button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Search Form -->
        <form class="d-flex w-50 me-auto search-form" role="search" @submit.prevent="searchItems">
          <input
            class="form-control me-2"
            type="search"
            v-model="searchQuery"
            placeholder="Search for brand, color, etc"
            aria-label="Search">
          <button class="btn search-btn" type="submit">Search</button>
        </form>

        <!-- Navbar Collapse -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/cart">Cart ({{ cartItemCount }})</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/signup">Sign Up/Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const searchQuery = ref('');
const cartItemCount = computed(() => store.state.cart.reduce((count, item) => count + item.quantity, 0));

const searchItems = async () => {
  try {
    const url = `http://localhost:3500/products/search?query=${encodeURIComponent(searchQuery.value)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    console.log("Search results:", data.products);
  } catch (error) {
    alert(`Error searching items: ${error.message}`);
  }
};
</script>

<style scoped>
/* Top Sticker */
.moving-header {
  width: 100%;
  background: black;
  color: white;
  padding: 10px 0;
  position: fixed;
  top: 0;
  z-index: 1100;
  overflow: hidden;
}

.marquee {
  display: flex;
  white-space: nowrap;
  overflow: hidden;
}

.marquee p {
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  min-width: 100%;
  animation: marquee 15s linear infinite;
}

@keyframes marquee {
  from { transform: translateX(100%); }
  to { transform: translateX(-100%); }
}

/* Navbar */
.navbar {
  position: fixed;
  top: 40px; /* Below the topSticker */
  left: 0;
  width: 100%;
  background-color: black;
  z-index: 1050;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Right Side HYPE Text */
.hype-text {
  font-size: 20px;
  font-weight: bold;
  color: white;
  position: absolute;
  right: 30px;
}

/* Search Bar */
.search-form input {
  background-color: #333;
  border-color: orangered;
  color: white;
}

.search-btn {
  background-color: orangered;
  border-color: orangered;
  color: white;
}

/* Navbar Links */
.navbar-nav .nav-link {
  color: white;
  font-weight: bold;
  padding: 10px;
}

.navbar-nav .nav-link:hover {
  color: orangered;
}
</style>
