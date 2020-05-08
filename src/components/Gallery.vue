<template>
  <div>
    <h1>Gallery page</h1>
    <ul class="gallery">
      <GalleryItem
        :key="product.article"
        v-for="product in PRODUCTS"
        v-bind:product_data="product"
        @addProduct="addProductToCart"
      />
    </ul>
  </div>
</template>

<script>
import GalleryItem from "./GalleryItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Gallery",
  components: {
    GalleryItem
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS"])
  },
  methods: {
    ...mapActions(["FETCH_PRODUCTS", "ADD_PRODUCT_TO_CART"]),
    addProductToCart(data) {
      this.ADD_PRODUCT_TO_CART(data);
    }
  },
  mounted() {
    this.FETCH_PRODUCTS();
    // .then((res) => res.data && console.log(res.data));
  }
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}
</style>
