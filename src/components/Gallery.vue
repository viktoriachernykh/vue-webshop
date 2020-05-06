<template>
  <div>
    <h1>Gallery page</h1>
    <ul class="gallery">
      <GalleryItem />
    </ul>
  </div>
</template>

<script>
import GalleryItem from './GalleryItem.vue';
export default {
  name: 'Gallery',
  components: {
    GalleryItem,
  },
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
