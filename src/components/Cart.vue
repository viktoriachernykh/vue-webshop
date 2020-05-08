<template>
  <div>
    <CartItem
      :key="item.article"
      v-for="(item, index) in cart_data"
      v-bind:cart_item_data="item"
      @deleteProduct="deleteProductFromCart(index)"
      @plusProduct="plusProductQuantity(index)"
      @minusProduct="minusProductQuantity(index)"
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
    ...mapActions([
      "DELETE_PRODUCT_FROM_CART",
      "PLUS_PRODUCT_QUANTITY",
      "MINUS_PRODUCT_QUANTITY"
    ]),
    deleteProductFromCart(index) {
      this.DELETE_PRODUCT_FROM_CART(index);
    },
    plusProductQuantity(index) {
      this.PLUS_PRODUCT_QUANTITY(index);
    },
    minusProductQuantity(index) {
      this.MINUS_PRODUCT_QUANTITY(index);
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
