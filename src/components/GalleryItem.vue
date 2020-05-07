<template>
  <li class="gallery-item">
    {{ product_data.article }}
    <img
      :src="require('../assets/' + product_data.imagesrc)"
      alt="design"
      width="250px"
      height="200px"
    />
    <button @click="addProduct">add</button>
  </li>
</template>

<script>
export default {
  name: "GalleryItem",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    addProduct() {
      this.$emit("addProduct", this.product_data.article);
    }
  }
};
</script>

<style scoped>
.gallery-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 lightslategray;
  color: aquamarine;
}
</style>
