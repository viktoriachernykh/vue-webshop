<template>
  <div>
    <img
      :src="require('../assets/' + cart_item_data.image)"
      alt="design"
      width="50px"
      height="35px"
    />
    <b>{{ cart_item_data.price }}</b>
    <button @click="minusProduct">-</button>
    <b>{{ cart_item_data.quantity }}</b>
    <button @click="plusProduct">+</button>
    <button @click="deleteProduct">delete</button>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    deleteProduct() {
      this.$emit("deleteProduct", this.cart_item_data);
    },
    minusProduct() {
      this.$emit("minusProduct", this.cart_item_data);
    },
    plusProduct() {
      this.$emit("plusProduct", this.cart_item_data);
    }
  },
  mounted() {
    this.$set(this.cart_item_data, "quantity", 1);
  }
};
</script>
