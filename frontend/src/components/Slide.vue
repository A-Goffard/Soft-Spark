<template>
    <div class="slide">
      <img :src="slide.src" alt="Slide image" />
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    slide: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .slide {
    /* Estilos para el slide */
  }
  </style>
  