<template>
    <div>
      <h2>JORDAN COLLECTION</h2>
      <br />
      <div class="product-container">
        <div class="product-card" v-for="(product, index) in products" :key="index">
          <img :src="product.image" :alt="product.name" />
          <p>{{ product.brand }}</p>
          <h3>{{ product.name }}</h3>
          <button>View Product</button>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        products: [
          {
            image: "/img/Clot-Air-Jordan-14-Low-DC9857-200-Release-Date-Price.jpg",
            brand: "Jordan",
            name: "Clot-Air-Jordan-14-Low",
          },
          {
            image: "img/Jordan 1 High OG TS SP 'Travis Scott' .webp",
            brand: "Jordan",
            name: "Jordan 1 High OG TS SP 'Travis Scott'",
          },
          {
            image: "img/Jordan 4 Retro Bred.webp",
            brand: "Jordan",
            name: "Jordan 4 Retro Bred",
          },
          {
            image:
              "https://i.pinimg.com/736x/2e/9e/1b/2e9e1bbf0eac2d63e7ca298f99478805.jpg",
            brand: "Jordan",
            name: "Jordan 11 Retro Cool Gray",
          },
        ],
      };
    },
  };
  </script>
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
  /* Body Styling */
  body {
    background-color: #F5F5F5;
    padding: 20px;
  }
  /* Hover Effect for Heading */
  h2:hover {
    color: orangered;
  }
  /* Product Container */
  .product-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    max-width: 1200px;
    margin: auto;
  }
  /* Product Card */
  .product-card {
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: left;
    transition: transform 0.3s;
  }
  /* Product Image */
  .product-card img {
    width: 2px;
    height: 220px;
    border-radius: 10px;    object-fit: cover; /* Ensures images scale properly */
  }
  /* Product Name */
  .product-card h3 {
    margin: 15px 0 5px;
    font-size: 16px;
    font-weight: 100;
  }
  /* Product Brand */
  .product-card p {
    font-size: 12px;
    font-weight: 100;
  }
  /* View Product Button */
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
  /* Button Hover Effect */
  .product-card button:hover {
    background: black;
  }
  /* Card Hover Effect */
  .product-card:hover {
    transform: scale(1.05);
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