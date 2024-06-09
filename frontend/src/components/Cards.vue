<template>
  <div class="slides">
    <div class="slides-inner">
      <!-- Utilizando el componente Slide dentro del bucle v-for -->
      <Slide v-for="slide in slides" :key="slide.src" :slide="slide" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Slide from '../components/Slide.vue'

const slides = ref([
  { src: 'src/static/1.png' },
  { src: 'src/static/2.png' },
  { src: 'src/static/3.png' },
  { src: 'src/static/4.png' },
  { src: 'src/static/5.png' },
  { src: 'src/static/6.png' },
  { src: 'src/static/7.png' }
]);
</script>

<style scoped>
.slides {
  width: 100%;
  overflow: hidden;
}

.slides-inner {
  display: flex;
  transition: transform 0.5s ease;
}

/* Estilos para los componentes Cards */
</style>
