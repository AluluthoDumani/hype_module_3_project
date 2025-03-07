<template>
  <div>
    <!-- Top Sticker -->
    <header class="moving-header">
      <div class="marquee">
        <p>
          10% OFF FIRST PURCHASE | FREE SHIPPING ON ORDERS OVER R3500 | MEMBERS GET EXCLUSIVE DROPS!
          10% OFF FIRST PURCHASE | FREE SHIPPING ON ORDERS OVER R3500 | MEMBERS GET EXCLUSIVE DROPS!
        </p>
      </div>
    </header>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg py-4">
      <div class="container-fluid">
        <div class="container-fluid">
        <!-- Left: Hype Text -->
        <a class="navbar-brand hype-text" href="#">HYPE</a>
        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <form class="d-flex w-50 me-auto search-form" role="search" @submit.prevent="searchItems">
          <input
            class="form-control me-2"
            type="search"
            v-model="searchQuery"
            placeholder="Search for brand, color, etc"
            aria-label="Search">
          <button class="btn search-btn" type="submit">Search</button>
        </form>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
            <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
            <li class="nav-item"><a class="nav-link" href="/cart">Cart ({{ cartItemCount }})</a></li>
            <!-- <li class="nav-item"><a class="nav-link" href="/signup">Sign Up/Login</a>
            </li> -->
          
<router-link to="/SignupLoginView" class="nav-link active">Sign Up/Login</router-link>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Search Results Section -->
    <div class="container mt-5">
      <div v-if="searchResults.length || searchPerformed" class="search-results blurred">
        <button class="close-btn" @click="clearSearchResults">X</button>
        <h2>Search Results:</h2>
        <ul v-if="searchResults.length">
          <li v-for="product in searchResults" :key="product.id">{{ product.name }}</li>
        </ul>
        <p v-else>No results found for "{{ searchQuery }}". Please try a different query.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const searchQuery = ref('');
const cartItemCount = computed(() => store.state.cart.reduce((count, item) => count + item.quantity, 0));

const searchResults = ref([]);
const searchPerformed = ref(false);

// Function to trigger the search
const searchItems = async () => {
  if (!searchQuery.value.trim()) {
    alert("Please enter a valid search query.");
    return;
  }

  try {
    const url = `http://localhost:3500/products/search?query=${encodeURIComponent(searchQuery.value)}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    searchResults.value = data.products;
    searchPerformed.value = true;
  } catch (error) {
    console.error("Error searching items:", error);
    alert(`Error searching items: ${error.message}`);
  }
};

// Function to clear the search results
const clearSearchResults = () => {
  searchResults.value = [];
  searchPerformed.value = false;
  searchQuery.value = '';
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
.hype-text {
  font-size: 24px;
  font-weight: bold;
  color: white;
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
  top: 40px;
  left: 0;
  width: 100%;
  background-color: black;
  z-index: 1050;
  padding: 15px 30px;
}

.navbar-nav .nav-link {
  color: white;
  font-weight: bold;
  padding: 10px;
}

.navbar-nav .nav-link:hover {
  color: orangered;
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

/* Search Results Section with Blurred Background */
.search-results {
  position: relative;
  padding: 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
}

/* Close Button Styling */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: orangered;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 50%;
  padding: 5px 10px;
  cursor: pointer;
}

.close-btn:hover {
  background: darkred;
}

/* Container Styling */
.container {
  margin-top: 120px;
}

.search-results ul {
  list-style: none;
  padding: 0;
}

.search-results ul li {
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
 