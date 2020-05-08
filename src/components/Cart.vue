<template>
  <div>
    <CartItem
      :key="item.article"
      v-for="(item, index) in cart_data"
      v-bind:cart_item_data="item"
      @deleteProduct="deleteProductFromCart(index)"
    />
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import { mapActions } from "vuex";

export default {
  name: "Cart",
  components: {
    CartItem
  },
  methods: {
    ...mapActions(["DELETE_PRODUCT_FROM_CART"]),
    deleteProductFromCart(index) {
      this.DELETE_PRODUCT_FROM_CART(index);
    }
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
