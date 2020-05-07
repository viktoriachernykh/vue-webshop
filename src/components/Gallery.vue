<template>
  <div>
    <h1>Gallery page</h1>
    <ul class="gallery">
      <GalleryItem
        :key="product.article"
        v-for="product in products"
        v-bind:product_data="product"
        @addProduct="add"
      />
    </ul>
  </div>
</template>

<script>
import GalleryItem from "./GalleryItem.vue";

export default {
  name: "Gallery",
  components: {
    GalleryItem
  },
  props: {},
  data() {
    return {
      products: [
        {
          imagesrc: "1.jpg",
          name: "T-shirt 1",
          price: 2100.234234234,
          article: "T1",
          available: true,
          category: "Женские"
        },
        {
          imagesrc: "2.jpg",
          name: "T-shirt 2",
          price: 2230.234234234,
          article: "T2",
          available: true,
          category: "Мужские"
        },
        {
          imagesrc: "3.jpg",
          name: "T-shirt 4",
          price: 5100.234234234,
          article: "T3",
          available: true,
          category: "Мужские"
        },
        {
          imagesrc: "4.jpg",
          name: "T-shirt 4",
          price: 4400.234234234,
          article: "T4",
          available: true,
          category: "Женские"
        }
      ]
    };
  },
  methods: {
    add(data) {
      console.log("data", data);
    }
  }
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
</style>
