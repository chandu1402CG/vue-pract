<script setup>
import { ref, computed } from 'vue';

const products = ref([
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Smartphone", price: 200},
  { id: 3, name: "Headphones", price: 30 },
  { id: 4, name: "Keyboard", price: 10 },
]);

const cart = ref([]);

const addToCart = (product) => {
  const item = cart.value.find((p) => p.id === product.id);
  if (item) {
    item.quantity++;
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }
};

const removeFromCart = (product) => {
  const index = cart.value.findIndex((p) => p.id === product.id);
  if (index !== -1) {
    if (cart.value[index].quantity > 1) {
      cart.value[index].quantity--;
    } else {
      cart.value.splice(index, 1);
    }
  }
};

const totalItems = computed(() => cart.value.reduce((sum, item) => sum + item.quantity, 0));
const totalPrice = computed(() => cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0));
</script>

<template>
    <div> 

   
    <h1>@@ Shopping Cart  @@</h1>

  <div class="container">
<div>
    <h2>Products</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - ₹{{ product.price }}
        <button @click="addToCart(product)">Add to Cart</button>
      </li>
    </ul>

</div>
   <div> 
    <h2>Cart ({{ totalItems }} items)</h2>
    <ul v-if="cart.length">
      <li v-for="item in cart" :key="item.id">
        {{ item.name }} - ₹{{ item.price }} x {{ item.quantity }}
        <button @click="removeFromCart(item)">Remove</button>
      </li>
    </ul>
    <p v-else>No items in the cart.</p>

    <h3>Total Price: ₹{{ totalPrice }}</h3>
   </div>
  
  </div>
</div>
</template>

<style scoped>
.container {
  max-width: 400px;
  margin: auto;
  text-align: center;
 padding: 10px;
  display: flex;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 5px;
}


</style>
