<template>
    <header class="moving-header">
      <div class="marquee">
        <p>
          10% OFF FIRST PURCHASE | FREE SHIPPING ON ORDERS OVER R3500 | MEMBERS GET EXCLUSIVE DROPS!
          10% OFF FIRST PURCHASE | FREE SHIPPING ON ORDERS OVER R3500 | MEMBERS GET EXCLUSIVE DROPS!
          10% OFF FIRST PURCHASE | FREE SHIPPING ON ORDERS OVER R3500 | MEMBERS GET EXCLUSIVE DROPS!
        </p>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'TopSticker'
  };
  </script>
  
  <style scoped>
  .moving-header {
    width: 100%;
    background: black;
    color: white;
    padding: 10px 0;
    position: fixed; /* Ensure it stays visible */
    top: 50px; /* Adjust this value to avoid overlapping NavBar */
    z-index: 1000;
    overflow: hidden;
  }
  
  .marquee {
    display: flex;
    white-space: nowrap;
    width: 100%;
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
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
  </style>
  