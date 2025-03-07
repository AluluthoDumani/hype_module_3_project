<template>
  <div class="home">
    <h1>Welcome to Hype</h1>
    <p>Discover the best refurbished and limited-edition sneakers.</p>

    <!-- Button to go to the product list -->
    <router-link to="/productList">
      <button class="shop-btn">Shop Now</button>
    </router-link>
  </div>

  <body>
    <div>
      <div class="hero-section"></div>
  
      <a href="brands.html" class="brands-button">OUR COLLECTION</a>
  

      <div class="product-container">
        <div class="product-card" v-for="(product, index) in Products" :key="index">
          <img :src="product.image" :alt="product.name" />
          <p>{{ product.category }}</p>
          <h3>{{ product.name }}</h3>
          <button @click="goToProduct(product.product_id)">View Product</button>
        </div>
      </div>


      <a href="brands.html" class="brands-button">NEW RELEASES</a><br /><br /><br />

      <div class="product-container">
        <div class="product-card" v-for="(product, index) in NewReleases" :key="index">
          <img :src="product.image" :alt="product.name" />
          <p>{{ product.category }}</p>
          <h3>{{ product.name }}</h3>
          <button @click="goToProduct(product.product_id)">View More</button>      
        </div>
      </div>

      <a href="brands.html" class="brands-button">BRANDS</a><br /><br />
      <div class="product-container">
        <div class="product-card" v-for="(product, index) in BRANDS" :key="index">
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.category }}</h3>
          <button>View Brand</button>
        </div>
      </div>
    </div>
  </body>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

const Products = [
  { image: '/img/Nike Air Griffey Max 2.jpg', category: "Nike", name: 'Nike Air Griffey Max 2', product_id: 1 },
  { image: "https://i.pinimg.com/736x/b7/6b/8d/b76b8ddf5d81504be811d3e7becc1763.jpg", category: "New Balance", name: 'New Balance 550', product_id: 2 },
  { image: '/img/Nike Air Max 1 Patta Noise Aqua.jpg', category: "Nike", name: 'Nike Air Max 1 Patta Noise Aqua', product_id: 3 },
  { image: 'img/Nike Air Pippen Black Varsity Red.jpg', category: "Nike", name: 'Nike Air Pippen Black Varsity Red', product_id: 4 },
  { image: 'img/Nike Air Foamposite One Penny PE.webp', category: "Nike", name: 'Nike Air Foamposite One Penny PE', product_id: 5 },
  { image: 'img/Jordan 4 Retro Bred.webp', category: "Nike", name: 'Jordan 4 Retro Bred', product_id: 6 },
  { image: 'https://i.pinimg.com/736x/ac/62/eb/ac62eb4a102c68ee3b37b73896dd3700.jpg', category: "Jordan", name: "Nike Air DT Max 96 'Falcons'", product_id: 7 },
  { image: "img/Nike Air Max Plus sunset.jpg", category: "Nike", name: "Nike Air Max Plus Sunset", product_id: 8 }
];

const NewReleases = [
  { image: '/img/Adidas Yeezy Foam Runner.webp', category: "Adidas", name: 'Adidas Yeezy Foam Runner', product_id: 9 },
  { image: '/img/Nike Hot Step Air Terr.jpg', category: "Nike", name: 'Nike Hot Step Air Terra', product_id: 10 },
  { image: '/img/Nike Air Max 1 Patta Noise Aqua.jpg', category: "Nike", name: 'Nike Air Max 1 Patta Noise Aqua', product_id: 11 },
  { image: 'https://i.pinimg.com/736x/ac/62/eb/ac62eb4a102c68ee3b37b73896dd3700.jpg', category: "Nike", name: 'Nike Air DT Max 96 Falcons', product_id: 12 }
];

const BRANDS = [
  { image: '/img/Nike Air Griffey Max 2.jpg', category: "Nike" },
  { image: '/img/Adidas Yeezy Foam Runner.webp', category: "Adidas" },
  { image: '/img/Jordan 4 Retro Bred.webp', category: "Jordan" },
  { image: '/img/New Balance 550 ald.webp', category: "New Balance" }
];

const goToProduct = async (productId) => {
  await store.dispatch('fetchProductGalleryImages', productId); // Fetch all images for the product
  router.push(`/product/${productId}`);
};
</script>

<style scoped>
  .home {
    text-align: center;
    padding: 50px;
  }
  .shop-btn {
    background: #ff4500;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s;
  }
  .shop-btn:hover {
    background: #cc3700;
  }
  * {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: Arial, sans-serif;
}
body {
background-color: #F5F5F5;
padding: 20px;
}
hero-section {
width: 100%;
height: 600px; /* Adjust height as needed */
background-size: cover;
background-position: center;
background-repeat: no-repeat;
}
.product-container {
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 20px;
max-width: 1200px;
margin: auto;
}
.product-containers {
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 20px;
max-width: 1200px;
margin: auto;
}
.brand-containers {
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 20px;
max-width: 1200px;
margin: auto;
}
.product-card {
background: white;
padding: 15px;
border-radius: 10px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
text-align: left;
transition: transform 0.3s;
}
.product-card img {
width: 100%;
height: 220px;
border-radius: 10px
}
.product-card h3 {
margin: 15px 0 5px;
font-size: 16px;
font-weight: 100;
}
.product-card p {
font-size: 12px;
font-weight: 100;
}
.product-card button {
background: orangered;
color: white;
border: none;
padding: 10px;
width: 100%;
border-radius: 5px;
cursor: pointer;
transition: 0.3s;
}
.product-card button:hover {
background: black;
}
.product-card:hover {
transform: scale(1.05);
}
.brands-button {
text-decoration: none;
cursor: none;
color: black;
font-size: 18px;
text-align: center;
font-weight: bold;
transition: background 0.3s;
}
.brands-button:hover {
color: orangered; /* Darker blue on hover */
}
/* Responsive Design */
@media (max-width: 1024px) {
.product-container {
    grid-template-columns: repeat(2, 1fr);
}
}
@media (max-width: 600px) {
.product-container {
    grid-template-columns: repeat(1, 1fr);
}
}
</style>