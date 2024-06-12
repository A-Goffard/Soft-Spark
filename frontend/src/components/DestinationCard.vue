<template>
  <div :class="['container', id]" @click="$emit('click')">
    <div :class="['image', imageId]">
      <img :src="imageUrl" :alt="title" class="city-image" />
    </div>
    <div :class="['story', storyId]">
      <div class="info">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  id: String,
  imageId: String,
  storyId: String,
  title: String,
  description: String,
  imageUrl: String
});

const emits = defineEmits(['click']);
</script>

<style scoped>
.container {
  width: auto;
  height: 320px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 20px 50px #555;
  transition: transform 0.5s ease, z-index 0.5s ease;
  transform: rotateX(50deg) scale(0.85);
}

.container:hover {
  cursor: pointer;
  transform: rotateX(0deg) scale(1) translateY(10px);
  z-index: 10;
}

.image {
  width: 100%;
  height: 50%;
}

.city-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
}

.story {
  padding: 15px;
  height: 50%;
  background: linear-gradient(to bottom, #eba65b 0%, #d99267 40%);
}

.info h3 {
  text-align: center;
  color: #eee;
  letter-spacing: 2px;
}

.info p {
  font-size: 14px;
  color: #fff;
  padding: 0px 20px 20px 20px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 1px;
}

@media (max-width: 1200px) {
  .container {
    width: calc(50% - 20px); /* Dos columnas en pantallas medianas */
  }
}

@media (max-width: 768px) {
  .container {
    width: calc(100% - 20px); /* Una columna en pantallas pequeñas */
  }
}

</style>
