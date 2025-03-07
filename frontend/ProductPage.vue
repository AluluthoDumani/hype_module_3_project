<template>
  <div>
    <!-- This is the Header -->
    <header class="moving-header">
      <p>
        10% OFF FIRST PURCHASE | FREE SHIPPING ON ORDERS OVER R3500 | MEMBERS GET EXCLUSIVE DROPS! 
      </p>
    </header>

    <!-- Product Section -->
    <br>
    <div class="product-container">
      <div class="product-image">
        <img :src="mainImage" alt="Product Image" @click="changeImage(mainImage)" />
        <div class="image-gallery">
          <img v-for="(image, index) in images" :key="index" :src="image" @click="changeImage(image)" />
        </div>
      </div>
      <div class="product-details">
        <p>Adidas</p>
        <h1>Adidas Campus 00s</h1>
        <p class="price">R 1899.99 ZAR</p><br><br>
        <div class="product-title">
          <p>Adidas Campus 00s "Black & White" sneakers</p><br><br>
        </div>
        <div class="product-hghlights">
          <h3>Highlights</h3><br><br>
          <ul>
            <li>Thick tongue and collar for a cushioned fit.</li>
            <li>Provides excellent grip and durability.</li>
            <li>Works with both casual and streetwear outfits.</li>
            <li>Classic 2000s skate shoe aesthetic with a chunky silhouette.</li>
          </ul>
        </div><br><br>
        <p>Select Size:</p>
        <div class="size-grid">
          <button v-for="(size, index) in sizes" :key="index" :class="{ selected: selectedSize === size }" @click="selectSize(size)">{{ size }}</button>
        </div>
        <div class="quantity">
          <label for="quantity">Quantity:</label>
          <input type="number" v-model="quantity" min="1" max="5" />
        </div>
        <div class="buttons">
          <button @click="addToCartAndGoToCart">Add to Cart</button>
          <button class="buy-now">Buy Now</button>
        </div>
        <div class="delivery-estimation">
          <p>ESTIMATED DELIVERY</p>
          <p>Mar 11 - Mar 14</p>
          <button class="wishlist">Wishlist</button>
        </div>
      </div>
    </div>

    <!-- Related Products Section -->
    <section class="related-products">
      <h2>Customers Also Bought</h2>
      <div class="products-grid">
        <div v-for="(product, index) in relatedProducts" :key="index" class="product-card">
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }}</p>
          <button @click="goToProduct(product.product_id)">View More</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainImage: "https://i.pinimg.com/736x/52/52/21/52522177d59bd363f4593453b2c158a6.jpg",
      images: [
        "https://i.pinimg.com/736x/aa/f9/e1/aaf9e1524a356ffebdcb908370880b3b.jpg",
        "https://i.pinimg.com/736x/30/51/a0/3051a034d1c16d8c5cf64d63e092a965.jpg",
        "https://i.pinimg.com/736x/52/52/21/52522177d59bd363f4593453b2c158a6.jpg"
      ],
      sizes: [3, 5, 6, 7, 9, 11],
      selectedSize: null,
      quantity: 1,
      relatedProducts: [
        { name: "Adidas Yeezy Boost 350 V2", price: "R 8499.99", image: "https://i.pinimg.com/736x/6e/28/7d/6e287d3cfea0a89bbca1d29d810907f1.jpg" },
        { name: "Adidas Yeezy Foam Runner", price: "R 5500.00", image: "https://i.pinimg.com/736x/3e/57/28/3e5728f16734a713d76c57376b984acc.jpg" },
        { name: "New Balance 9060 \"Grey\"", price: "R2699.99", image: "https://i.pinimg.com/736x/76/91/8c/76918c8caa336b832212e2b6488f7701.jpg" }
      ]
    };
  },
  methods: {
    goToProduct(productId) {
      console.log("Navigating to product with ID:", productId); // Log to check if the click is working
      this.$store.dispatch('fetchProductGalleryImages', productId); // Fetch all images for the product
      this.$router.push(`/product/${productId}`); // Navigate to the product page
    },
    addToCart() {
      if (this.selectedSize !== null) {
        const product = {
          product_id: 1, // Use a unique identifier for the product
          name: "Adidas Campus 00s",
          price: 1899.99,
          size: this.selectedSize,
          quantity: this.quantity,
          image: this.mainImage
        };
        this.$store.commit('addToCart', product);
      } else {
        alert('Please select a size');
      }
    },
    addToCartAndGoToCart() {
      this.addToCart(); // First, add to the cart
      this.$router.push('/cart'); // Then, navigate to the cart page
    },
    selectSize(size) {
      this.selectedSize = size;
    },
    changeImage(imageUrl) {
      this.mainImage = imageUrl;
    }
  }
};
</script>



<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}
body {
    background-color: beige;
    padding: 40px;
}
/* Header
header {
    background: black;
    color: white;
    padding: 15px;
    text-align: center;
} */
.moving-header {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    background: black;
    color: white;
    padding: 10px 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  .moving-header p {
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    animation: marquee 60s linear infinite;
  }
  @keyframes marquee {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
/* Product Section */
.product-container {
    display: flex;
    max-width: auto;
    margin: 20px auto;
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.product-image {
    flex: 1;
    text-align: center;
}
.product-image img {
    width: 100%;
    height: 650px;
    max-width: 650px;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s;
}
.products-grid
.product-image img:hover {
    transform: scale(1.05);
}
.image-gallery {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
.image-gallery img {
    width: 70px;
    height: 70px;
    margin: 5px;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
}
.product-details {
    flex: 1;
    padding: 20px;
}
.price {
    font-size:16px;
    font-weight: lighter;
    margin-bottom: 10px;
}
.buttons {
    margin-top: 20px;
}
.size-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            margin: 10px 0;
        }
        .size-grid button {
            padding: 10px;
            border: none;
            background: #ddd;
            cursor: pointer;
            font-size: 1em;
            border-radius: 5px;
        }
        .size-grid button.selected {
            background: orangered;
            color: white;
        }
        .size-guide-button, .add-to-cart, .buy-now {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            border: none;
            border-radius: 5px;
            font-size: 1em;
            cursor: pointer;
        }
button {
    width: 100%;
    padding: 6px;
    margin: 5px 0;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
}
/* .wishlist {
    width: 200px;
    padding: 6px;
    margin: 5px 0;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: black;
} */
.add-to-cart {
    background: orangered;
    color: white;
}
.buy-now {
    background: black;
    color: white;
}
.delivery-estimation {
    font-weight: lighter;
}
.view-product {
    background: orangered;
}
button:hover {
    opacity: 0.8;
}
/* Related Products */
.related-products {
    max-width: 1000px;
    margin: 40px auto;
    text-align: center;
}
.related-products h2 {
    margin-bottom: 20px;
}
.products-grid {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.product-card {
    background: white;
    padding: 15px;
    width: 30%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    text-align: center;
    margin-bottom: 20px;
}
.product-card img {
    width: 100%;
    max-width: 200px;
    border-radius: 5px;
}
.product-card button {
    background: #007BFF;
    color: white;
    padding: 10px;
    border: none;
    margin-top: 10px;
}
.quantity {
            margin-top: 20px;
            text-align: left;
        }
        .quantity label {
            font-weight: bold;
        }
        .quantity input {
            width: 60px;
            padding: 5px;
            font-size: 16px;
            margin-left: 10px;
            text-align: center;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
/* Footer */
footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 15px;
    margin-top: 40px;
}
footer a {
    color: #FF9800;
    text-decoration: none;
}
footer a:hover {
    text-decoration: underline;
}
/* Responsive Design */
@media (max-width: 768px) {
    .product-container {
        flex-direction: column;
    }
    .product-image img {
        max-width: 100%;
    }
    .buttons {
        display: flex;
        flex-direction: column;
    }
    .products-grid {
        flex-direction: column;
        align-items: center;
    }
    .product-card {
        width: 90%;
    }
}
.product-title {
    font-size: 16px;
    font-weight: lighter;
    font-style: normal;
}
.product-hghlights {
    font-weight: 500;
}
</style>