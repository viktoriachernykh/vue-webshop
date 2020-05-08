<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <Cart v-if="CART.length" :cart_data="CART" />
    <p v-if="CART.length === 0">There are no products in cart...</p>
    <h2 v-else>{{ CART.length }}, {{ calculateTotal}}</h2>
  </div>
</template>

<script>
import Cart from "@/components/Cart.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  components: {
    Cart
  },
  computed: {
    ...mapGetters(["CART"]),
    calculateTotal() {
      let prices = this.CART.map(item =>
        item.quantity ? item.price * item.quantity : item.price
      );
      let total = prices.reduce((acc, price) => acc + price);
      return total;
    }
  },
  methods: {
    ...mapActions(["ADD_PRODUCT_TO_CART"])
  }
};
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
