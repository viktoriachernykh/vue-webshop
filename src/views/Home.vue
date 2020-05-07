<template>
  <div class="home">
    <Gallery />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Gallery from '@/components/Gallery.vue';

export default {
  name: 'Home',
  components: {
    Gallery,
  },
};
</script>
