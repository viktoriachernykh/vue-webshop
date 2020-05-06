<template>
  <li class="gallery-item">
    111 <img alt="Vue logo" src="../assets/1.jpg" width="400px" />
  </li>
</template>

<script>
export default {
  name: 'GalleryItem',
};
</script>

<style scoped>
.gallery-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 lightslategray;
  color: aquamarine;
}
</style>
